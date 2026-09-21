import asyncio
import logging
import re
from typing import Optional
from gpustack.utils.network import get_free_port

logger = logging.getLogger(__name__)

class WorkerInferenceProxy:
    """
    A lightweight, native Python TCP proxy.
    It binds to the public IP/port, checks the initial HTTP request for the Bearer token,
    and then proxies the raw TCP stream to the internal backend bound to 127.0.0.1.
    """
    def __init__(self, host: str, port: int, internal_port: int, token: str):
        self.host = host
        self.port = port
        self.internal_port = internal_port
        self.token = token
        self._server = None

    async def _handle_client(self, reader: asyncio.StreamReader, writer: asyncio.StreamWriter):
        client_addr = writer.get_extra_info('peername')
        logger.debug(f"New proxy connection from {client_addr}")

        try:
            # Read the initial bytes to check for Authorization header
            # We only read a small chunk to not buffer an entire streaming request
            initial_data = await reader.read(8192)
            if not initial_data:
                writer.close()
                return

            # Check if it's an HTTP request and has the correct token
            data_str = initial_data.decode('utf-8', errors='ignore')
            
            # Simple header extraction for Authorization: Bearer <token>
            auth_match = re.search(r'(?i)Authorization:\s+Bearer\s+([^\r\n]+)', data_str)
            if not auth_match or auth_match.group(1).strip() != self.token:
                logger.warning(f"Unauthorized access attempt from {client_addr}")
                # Return 401 Unauthorized
                response = (
                    "HTTP/1.1 401 Unauthorized\r\n"
                    "Content-Type: application/json\r\n"
                    "Connection: close\r\n\r\n"
                    '{"detail": "Unauthorized"}'
                )
                writer.write(response.encode('utf-8'))
                await writer.drain()
                writer.close()
                return

            # Connect to the internal backend
            try:
                backend_reader, backend_writer = await asyncio.open_connection('127.0.0.1', self.internal_port)
            except Exception as e:
                logger.error(f"Failed to connect to internal backend at 127.0.0.1:{self.internal_port}: {e}")
                response = (
                    "HTTP/1.1 502 Bad Gateway\r\n"
                    "Content-Type: application/json\r\n"
                    "Connection: close\r\n\r\n"
                    '{"detail": "Bad Gateway"}'
                )
                writer.write(response.encode('utf-8'))
                await writer.drain()
                writer.close()
                return

            # Forward the initial data we already read
            backend_writer.write(initial_data)
            await backend_writer.drain()

            # Start bidirectional forwarding
            await asyncio.gather(
                self._forward(reader, backend_writer),
                self._forward(backend_reader, writer)
            )

        except Exception as e:
            logger.debug(f"Proxy connection error for {client_addr}: {e}")
        finally:
            writer.close()

    async def _forward(self, reader: asyncio.StreamReader, writer: asyncio.StreamWriter):
        try:
            while True:
                data = await reader.read(65536)
                if not data:
                    break
                writer.write(data)
                await writer.drain()
        except Exception:
            pass
        finally:
            writer.close()

    async def start(self):
        self._server = await asyncio.start_server(self._handle_client, self.host, self.port)
        addr = self._server.sockets[0].getsockname()
        logger.info(f"Worker Inference Proxy started on {addr}, forwarding to 127.0.0.1:{self.internal_port}")
        
        async with self._server:
            await self._server.serve_forever()

    def stop(self):
        if self._server:
            self._server.close()

def start_proxy_process(host: str, port: int, internal_port: int, token: str):
    """
    Entry point for the proxy process.
    """
    import setproctitle
    setproctitle.setproctitle("gpustack_worker_proxy")
    
    proxy = WorkerInferenceProxy(host, port, internal_port, token)
    
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        loop.run_until_complete(proxy.start())
    except KeyboardInterrupt:
        pass
    finally:
        proxy.stop()
        loop.close()
