import pytest
import asyncio
from gpustack.worker.proxy import WorkerInferenceProxy
from gpustack.utils.network import get_free_port
import aiohttp

async def echo_server(reader, writer):
    data = await reader.read(1024)
    if data:
        response = b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nOK"
        writer.write(response)
        await writer.drain()
    writer.close()

@pytest.mark.asyncio
async def test_worker_inference_proxy():
    internal_port = get_free_port("40000-50000")
    proxy_port = get_free_port("40000-50000")
    token = "test_token_123"

    # Start mock backend
    server = await asyncio.start_server(echo_server, '127.0.0.1', internal_port)
    
    # Start proxy
    proxy = WorkerInferenceProxy('127.0.0.1', proxy_port, internal_port, token)
    proxy_task = asyncio.create_task(proxy.start())
    
    await asyncio.sleep(0.1) # wait for start
    
    try:
        async with aiohttp.ClientSession() as session:
            # Test 1: Unauthorized
            async with session.get(f"http://127.0.0.1:{proxy_port}/v1/models") as resp:
                assert resp.status == 401
                
            # Test 2: Unauthorized invalid token
            async with session.get(f"http://127.0.0.1:{proxy_port}/v1/models", headers={"Authorization": "Bearer bad"}) as resp:
                assert resp.status == 401
                
            # Test 3: Authorized
            async with session.get(f"http://127.0.0.1:{proxy_port}/v1/models", headers={"Authorization": f"Bearer {token}"}) as resp:
                assert resp.status == 200
                text = await resp.text()
                assert text == "OK"
    finally:
        proxy.stop()
        proxy_task.cancel()
        server.close()
        await server.wait_closed()
