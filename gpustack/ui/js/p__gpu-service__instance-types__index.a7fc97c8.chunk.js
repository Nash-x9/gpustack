"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6250],{82654:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(75271),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"},i=n(93102);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const l=(e,t)=>r.createElement(i.Z,o({},e,{ref:t,icon:a}));var c=r.forwardRef(l)},85877:function(e,t,n){n.d(t,{g:function(){return g}});var r=n(90228),a=n.n(r),i=n(26068),o=n.n(i),l=n(87999),c=n.n(l),s=n(48305),u=n.n(s),d=n(66890),p=n(15001),f=n(36685),m=n(75271),v=n(18427),g=function(e){var t=(e||{}).useStateData,n=void 0===t||t,r=(0,m.useRef)(null),i=(0,m.useState)([]),l=u()(i,2),s=l[0],g=l[1],h=(0,p.Z)(function(){var e=c()(a()().mark((function e(t){var i,l,c;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(i=r.current)||void 0===i||i.cancel(),r.current=(0,d.$i)(),e.next=4,(0,v.ax)(t,{token:r.current.token});case 4:return l=e.sent,n&&g((null===(c=l.items)||void 0===c?void 0:c.map((function(e){return o()(o()({},e),{},{label:e.name,value:e.id})})))||[]),e.abrupt("return",l.items||[]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{manual:!0,onSuccess:function(e){},onError:function(e){f.ZP.error((null==e?void 0:e.message)||"Failed to fetch cluster list"),g([])}}),x=h.runAsync,y=h.loading,b=h.cancel;return(0,m.useEffect)((function(){return function(){var e;b(),null===(e=r.current)||void 0===e||e.cancel()}}),[]),{loading:y,clusterList:s,cancelRequest:function(){var e;b(),null===(e=r.current)||void 0===e||e.cancel()},fetchClusterList:x}}},39186:function(e,t,n){n.d(t,{A_:function(){return h},Le:function(){return y},Zn:function(){return u},bi:function(){return v},dB:function(){return w},h2:function(){return c},xq:function(){return p}});var r=n(90228),a=n.n(r),i=n(87999),o=n.n(i),l=n(78451),c="/gpu-instance-types",s="/gpu-instance-type-flavors";function u(e,t){return d.apply(this,arguments)}function d(){return(d=o()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)(c,{method:"GET",params:t,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=o()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)(s,{method:"GET",params:t,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=!0;function v(e){return g.apply(this,arguments)}function g(){return(g=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)(c,{method:"POST",params:{cluster_id:t.cluster_id},data:t.data,skipErrorHandler:m}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("".concat(c,"/").concat(t.name),{method:"DELETE",params:{cluster_id:t.cluster_id},skipErrorHandler:m}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("".concat(c,"/").concat(t.name,"/activate"),{method:"PUT",params:{cluster_id:t.cluster_id},skipErrorHandler:m}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return T.apply(this,arguments)}function T(){return(T=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("".concat(c,"/").concat(t.name,"/deactivate"),{method:"PUT",params:{cluster_id:t.cluster_id},skipErrorHandler:m}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},52432:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var r=n(26068),a=n.n(r),i=n(90228),o=n.n(i),l=n(87999),c=n.n(l),s=n(26267),u=n(11662),d=n(85877),p=n(21701),f=n(60341),m=n(6324),v=n(10097),g=n(2538),h=n(78451),x=n(7056),y=n(36685),b=n(81764),w=n.n(b),T=n(75271),_=n(23121),k=n(86974),Z=n(39186),C=n(48305),j=n.n(C),E=n(5174),S=n(57991),R=n(90240),M=n(7224),I=n(32585),L=n(22563),P=n(49799),A=n(85983),q=n(36546),F=n(68195),W=n(88015),D=n(250),N=n(11129),G=n(10177),U=n(76788),$=n(27490),O=n(52676),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.manufacturer||"",r=!(e.acceleratable||e.product||n&&"generic"!==n.toLowerCase());return r?"CPU-only":e.product||t||"-"},z=function(e){var t,n,r=e.spec,a=void 0===r?{}:r,i=((0,h.useIntl)(),a.manufacturer||""),o=null!==(t=U.I3[i])&&void 0!==t?t:"purple",l=a.acceleratable?(0,G.z8)(null!==(n=a.memory)&&void 0!==n?n:void 0):"",c=[];return i&&c.push((0,O.jsx)(W.Z,{color:o,style:{fontWeight:400,marginInlineEnd:0},children:(0,$.C1)(i)},"vendor")),l&&c.push((0,O.jsx)("span",{children:l},"memory")),c.length?(0,O.jsx)(N.Z,{align:"center",gap:8,style:{minWidth:0,color:"var(--ant-color-text-tertiary)",fontSize:12},children:c.flatMap((function(e,t){return 0===t?[e]:[(0,O.jsx)("span",{style:{color:"var(--ant-color-text-quaternary)"},children:"·"},"dot-".concat(t)),e]}))}):null},B=function(e){var t=e.spec,n=void 0===t?{}:t,r=e.fallbackName,a=e.maxWidth,i=void 0===a?"100%":a;return(0,O.jsxs)(N.Z,{vertical:!0,gap:4,style:{minWidth:0,padding:"2px 0"},children:[(0,O.jsx)(D.Z,{ghost:!0,minWidth:20,maxWidth:i,children:H(n,r)}),(0,O.jsx)(z,{spec:n})]})},Q=function(e){var t=e.spec,n=void 0===t?{}:t,r=e.fallbackName;return(0,O.jsxs)(N.Z,{align:"center",gap:8,style:{minWidth:0},children:[(0,O.jsx)(D.Z,{ghost:!0,minWidth:20,maxWidth:200,children:H(n,r)}),(0,O.jsx)(z,{spec:n})]})},V=n(82092),K=n.n(V),Y=n(28290),J="Active",X="Inactive",ee="Draining",te=K()(K()(K()({},J,"Active"),X,"Inactive"),ee,"Draining"),ne=K()(K()(K()({},J,I.iE.success),X,I.iE.inactive),ee,I.iE.transitioning),re=[{label:"AMD64",value:"amd64"},{label:"ARM64",value:"arm64"}],ae=(Y.Z.DeleteOutlined,"flavorDropdown___npiI5"),ie=function(e){return e?"".concat(e,"Gi"):void 0},oe=function(e){return{value:e?String(e).replace(/Gi$/i,""):""}},le=(0,T.forwardRef)((function(e,t){var n,r=e.open,a=e.clusterList,i=e.selectedFlavor,l=e.flavorList,s=e.flavorLoading,u=e.onClusterChange,d=e.onFlavorChange,p=e.onFinish,f=e.onFinishFailed,m=(0,h.useIntl)(),v=(0,L.Z)().getRuleMessage,g=F.Z.useForm(),x=j()(g,1)[0],y=!(null==i||null===(n=i.spec)||void 0===n||!n.acceleratable);(0,T.useEffect)((function(){r?x.setFieldsValue({spec:{arch:re[0].value}}):x.resetFields()}),[r,x]),(0,T.useEffect)((function(){r&&!y&&x.setFieldValue(["spec","unitResources","cpu"],1)}),[r,y,x]),(0,T.useImperativeHandle)(t,(function(){return{submit:function(){x.submit()},resetFields:function(){x.resetFields()}}}));var b=function(e){return{value:e.name,label:H(e.spec,e.name),flavor:e}},w=l.filter((function(e){var t;return!(null!==(t=e.spec)&&void 0!==t&&t.acceleratable)})),_=l.filter((function(e){var t;return null===(t=e.spec)||void 0===t?void 0:t.acceleratable})),k=[w.length&&{label:m.formatMessage({id:"gpuservice.instanceType.flavor.cpuGroup"}),title:"cpu",options:w.map(b)},_.length&&{label:m.formatMessage({id:"gpuservice.instanceType.flavor.gpuGroup"}),title:"gpu",options:_.map(b)}].filter(Boolean),Z=function(){var e=c()(o()().mark((function e(t){var n,r,a,l,c,s,u,d,f,m,v,g,h,x,y;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=null===(n=t.spec)||void 0===n||null===(n=n.unitResources)||void 0===n?void 0:n.cpu,e.next=3,p(t.cluster_id,{name:t.name,spec:{displayName:(null===(r=t.spec)||void 0===r||null===(r=r.displayName)||void 0===r?void 0:r.trim())||null,acceleratorGroup:null!==(a=null==i||null===(l=i.spec)||void 0===l?void 0:l.acceleratorGroup)&&void 0!==a?a:null,generalGroup:null!==(c=null==i||null===(s=i.spec)||void 0===s?void 0:s.generalGroup)&&void 0!==c?c:null,acceleratable:null!==(u=null==i||null===(d=i.spec)||void 0===d?void 0:d.acceleratable)&&void 0!==u&&u,os:"linux",arch:null!==(f=null===(m=t.spec)||void 0===m?void 0:m.arch)&&void 0!==f?f:null,unitResources:{cpu:null!=y&&""!==y?String(y):null,ram:null!==(v=null===(g=t.spec)||void 0===g||null===(g=g.unitResources)||void 0===g?void 0:g.ram)&&void 0!==v?v:null},localStorage:null!==(h=null===(x=t.spec)||void 0===x?void 0:x.localStorage)&&void 0!==h?h:null}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,O.jsxs)(F.Z,{name:"gpuServiceInstanceTypeForm",form:x,onFinish:Z,onFinishFailed:f,preserve:!1,children:[(0,O.jsx)(F.Z.Item,{name:"cluster_id",rules:[{required:!0,message:v("select","clusters.title")}],children:(0,O.jsx)(P.Z,{label:m.formatMessage({id:"clusters.title"}),required:!0,showSearch:!0,optionFilterProp:"label",options:a,onChange:u})}),(0,O.jsx)(F.Z.Item,{name:"name",rules:[{required:!0,message:v("input","common.table.name")},{pattern:I.Bp,message:m.formatMessage({id:"gpuservice.form.rule.name"})}],children:(0,O.jsx)(A.Z.Input,{label:m.formatMessage({id:"common.table.name"}),required:!0})}),(0,O.jsx)(F.Z.Item,{name:["spec","displayName"],rules:[{max:63,message:m.formatMessage({id:"gpuservice.template.displayName.max"})}],children:(0,O.jsx)(A.Z.Input,{trim:!1,label:m.formatMessage({id:"gpuservice.template.displayName"})})}),(0,O.jsx)(F.Z.Item,{children:(0,O.jsx)(P.Z,{label:m.formatMessage({id:"gpuservice.instanceType.flavor"}),required:!0,showSearch:!0,optionFilterProp:"label",classNames:{popup:{root:ae}},loading:s,value:null==i?void 0:i.name,options:k,onChange:function(e){var t;return d(null!==(t=l.find((function(t){return t.name===e})))&&void 0!==t?t:null)},optionRender:function(e){var t=e.data.flavor;return(0,O.jsx)(B,{spec:t.spec,fallbackName:t.name})},labelRender:function(e){var t=e.value,n=l.find((function(e){return e.name===t}));return n?(0,O.jsx)(Q,{spec:n.spec,fallbackName:n.name}):null!=t?t:""}})}),(0,O.jsx)(F.Z.Item,{children:(0,O.jsx)(A.Z.Input,{disabled:!0,value:"Linux",label:m.formatMessage({id:"gpuservice.instance.os"})})}),(0,O.jsx)(F.Z.Item,{name:["spec","arch"],rules:[{required:!0,message:v("select","gpuservice.instance.arch")}],children:(0,O.jsx)(P.Z,{label:m.formatMessage({id:"gpuservice.instance.arch"}),required:!0,options:re})}),(0,O.jsx)(F.Z.Item,{name:["spec","unitResources","cpu"],rules:[{required:!0,message:v("input","gpuservice.instanceType.unitCpu")}],children:(0,O.jsx)(q.Z,{min:0,disabled:!y,style:{width:"100%"},label:m.formatMessage({id:"gpuservice.instanceType.unitCpu"}),description:m.formatMessage({id:"gpuservice.instanceType.unitCpu.tip"}),required:!0})}),(0,O.jsx)(F.Z.Item,{name:["spec","unitResources","ram"],normalize:ie,getValueProps:oe,rules:[{required:!0,message:v("input","gpuservice.instanceType.unitRam")}],children:(0,O.jsx)(q.Z,{min:0,style:{width:"100%"},label:"".concat(m.formatMessage({id:"gpuservice.instanceType.unitRam"})," (GB)"),description:m.formatMessage({id:"gpuservice.instanceType.unitRam.tip"}),required:!0})}),(0,O.jsx)(F.Z.Item,{name:["spec","localStorage"],normalize:ie,getValueProps:oe,rules:[{required:!0,message:v("input","gpuservice.instanceType.localStorage")}],children:(0,O.jsx)(q.Z,{min:0,style:{width:"100%"},label:"".concat(m.formatMessage({id:"gpuservice.instanceType.localStorage"})," (GB)"),description:m.formatMessage({id:"gpuservice.instanceType.localStorage.tip"}),required:!0})})]})})),ce=le,se=n(66890),ue=n(15001);var de=function(e){var t=e.title,n=e.open,r=e.clusterList,i=e.onOk,l=e.onCancel,s=(0,h.useIntl)(),u=(0,T.useRef)(null),d=(0,E.Z)(),p=d.loading,f=d.guard,m=d.run,v=d.release,g=(0,T.useState)(null),x=j()(g,2),b=x[0],w=x[1],_=function(){var e=(0,T.useRef)(null),t=(0,T.useState)([]),n=j()(t,2),r=n[0],a=n[1],i=(0,ue.Z)(function(){var t=c()(o()().mark((function t(n){var r,i,l;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===(r=e.current)||void 0===r||r.cancel(),e.current=(0,se.$i)(),t.next=4,(0,Z.xq)({cluster_id:n},{token:e.current.token});case 4:return i=t.sent,l=(null==i?void 0:i.items)||[],a(l),t.abrupt("return",l);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{manual:!0,onError:function(e){"CANCEL_PREVIOUS_REQUEST"!==(null==e?void 0:e.message)&&a([])}}),l=i.runAsync,s=i.loading,u=i.cancel;return(0,T.useEffect)((function(){return function(){var t;u(),null===(t=e.current)||void 0===t||t.cancel()}}),[]),{dataList:r,loading:s,fetchFlavors:l,cancelRequest:function(){var t;u(),null===(t=e.current)||void 0===t||t.cancel("CANCEL_PREVIOUS_REQUEST")},setDataList:a}}(),k=_.dataList,C=_.loading,I=_.fetchFlavors,L=_.cancelRequest,P=_.setDataList;(0,T.useEffect)((function(){n||(L(),w(null),P([]))}),[n]);var A=function(){var e=c()(o()().mark((function e(t){var n,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(null),P([]),e.prev=2,e.next=5,I(t);case 5:r=e.sent,w(null!==(n=null==r?void 0:r[0])&&void 0!==n?n:null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),w(null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e;null===(e=u.current)||void 0===e||e.resetFields(),l()},F=function(){var e=c()(o()().mark((function e(t,n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m((function(){return i(t,a()({},n))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,O.jsx)(S.Z,{title:t,open:n,onClose:q,destroyOnHidden:!0,closeIcon:!1,mask:{closable:!1},keyboard:!1,styles:{wrapper:{width:"min(600px, calc(100vw - 220px))"},body:{overflowY:"hidden"}},footer:!1,children:(0,O.jsx)(R.Z,{styles:{container:{paddingBlock:0}},footer:(0,O.jsx)(M.Z,{onOk:function(){b?f((function(){var e;return null===(e=u.current)||void 0===e?void 0:e.submit()})):y.ZP.warning(s.formatMessage({id:"gpuservice.instanceType.flavor.required"}))},onCancel:q,loading:p,style:{padding:"16px 24px 8px",display:"flex",justifyContent:"flex-end"}}),children:(0,O.jsx)(ce,{ref:u,open:n,clusterList:r,selectedFlavor:b,flavorList:k,flavorLoading:C,onClusterChange:A,onFlavorChange:w,onFinish:F,onFinishFailed:v})})})},pe=n(73349),fe=function(){var e=(0,pe.Z)(),t=e.saveScrollHeight,n=e.restoreScrollHeight,r=(0,T.useState)({open:!1,title:""}),a=j()(r,2),i=a[0],o=a[1];return{openInstanceTypeModalStatus:i,openInstanceTypeModal:function(e){o({open:!0,title:e}),t()},closeInstanceTypeModal:function(){o({open:!1,title:""}),n()}}},me=n(34006),ve=n(70332),ge=n(29284),he=n(94232),xe=n(14792),ye=function(e,t){var n,r=null===(n=e.status)||void 0===n?void 0:n.phase,a=[];return r===J?a.push({label:"gpuservice.instanceType.deactivate",key:"deactivate",locale:!0,icon:Y.Z.Disabled}):r===X&&a.push({label:"gpuservice.instanceType.activate",key:"activate",locale:!0,icon:Y.Z.Charger}),a.push({label:"common.button.delete",key:"delete",locale:!0,icon:Y.Z.DeleteOutlined,disabled:t&&!!e.derivedFromNode,props:{danger:!0}}),a},be=function(e){var t=e.title,n=e.tip;return(0,O.jsxs)(he.Z,{size:4,children:[(0,O.jsx)("span",{children:t}),(0,O.jsx)(xe.Z,{title:n,children:(0,O.jsx)(me.Z,{style:{color:"var(--ant-color-text-tertiary)"}})})]})},we=function(e){var t=e.handleSelect,n=e.clusterList,r=e.sortOrder,a=(0,h.useIntl)();return(0,T.useMemo)((function(){return[{title:a.formatMessage({id:"common.table.name"}),dataIndex:"name",key:"name",minWidth:180,sorter:!0,render:function(e,t){var n,r=(null===(n=t.spec)||void 0===n?void 0:n.displayName)||e;return(0,O.jsx)(D.Z,{ghost:!0,minWidth:20,maxWidth:200,title:r,children:(0,O.jsx)("span",{className:"text-primary",children:r||"-"})})}},{title:a.formatMessage({id:"gpuservice.instanceType.flavor"}),dataIndex:"product",key:"product",minWidth:200,render:function(e,t){var n,r,a=null===(n=t.status)||void 0===n?void 0:n.detail;return(0,O.jsx)(B,{spec:{acceleratable:null===(r=t.spec)||void 0===r?void 0:r.acceleratable,manufacturer:null==a?void 0:a.manufacturer,product:null==a?void 0:a.product,memory:null==a?void 0:a.memory,sliceable:(0,G._5)(null==a?void 0:a.slicedDetail)},fallbackName:t.name,maxWidth:200})}},{title:(0,O.jsx)(be,{title:a.formatMessage({id:"gpuservice.instanceType.unitCpu"}),tip:a.formatMessage({id:"gpuservice.instanceType.unitCpu.tip"})}),dataIndex:"cpu",key:"cpu",minWidth:120,render:function(e,t){var n,r,a,i=null===(n=(0,$.Op)(null!==(r=null===(a=t.spec)||void 0===a||null===(a=a.unitResources)||void 0===a?void 0:a.cpu)&&void 0!==r?r:null))||void 0===n?void 0:n.cores;return null!=i?"".concat(i," vCPU"):"-"}},{title:(0,O.jsx)(be,{title:a.formatMessage({id:"gpuservice.instanceType.unitRam"}),tip:a.formatMessage({id:"gpuservice.instanceType.unitRam.tip"})}),dataIndex:"ram",key:"ram",minWidth:120,render:function(e,t){var n,r,a,i=null===(n=(0,$.Yq)(null!==(r=null===(a=t.spec)||void 0===a||null===(a=a.unitResources)||void 0===a?void 0:a.ram)&&void 0!==r?r:null))||void 0===n?void 0:n.value;return null!=i?"".concat(i," GB"):"-"}},{title:(0,O.jsx)(be,{title:a.formatMessage({id:"gpuservice.instanceType.localStorage"}),tip:a.formatMessage({id:"gpuservice.instanceType.localStorage.tip"})}),dataIndex:"localStorage",key:"localStorage",minWidth:120,render:function(e,t){var n,r,a,i=null===(n=(0,$.Yq)(null!==(r=null===(a=t.spec)||void 0===a?void 0:a.localStorage)&&void 0!==r?r:null))||void 0===n?void 0:n.value;return null!=i?"".concat(i," GB"):"-"}},{title:a.formatMessage({id:"gpuservice.instanceType.platform"}),dataIndex:"os",key:"os",minWidth:140,render:function(e,t){var n,r,a=w().capitalize((null===(n=t.spec)||void 0===n?void 0:n.os)||""),i=w().toUpper((null===(r=t.spec)||void 0===r?void 0:r.arch)||"");return a?(0,O.jsx)(D.Z,{ghost:!0,maxWidth:240,title:i?"".concat(a,"/").concat(i):a,children:i?"".concat(a,"/").concat(i):a}):"-"}},{title:a.formatMessage({id:"clusters.title"}),dataIndex:"clusterId",key:"clusterId",minWidth:140,render:function(e){var t,r,a;return(0,O.jsx)(D.Z,{ghost:!0,maxWidth:240,children:null!==(t=null!==(r=null===(a=w().find(n,{value:e}))||void 0===a?void 0:a.label)&&void 0!==r?r:e)&&void 0!==t?t:"-"})}},{title:a.formatMessage({id:"common.table.status"}),dataIndex:"status",key:"status",minWidth:140,render:function(e,t){var n,r,a=null===(n=t.status)||void 0===n?void 0:n.phase;return a?(0,O.jsx)(ve.Z,{statusValue:{status:ne[a],text:te[a]||a,message:(null===(r=t.status)||void 0===r?void 0:r.phaseMessage)||""}}):"-"}},{title:a.formatMessage({id:"common.table.operation"}),dataIndex:"operation",key:"operation",width:110,render:function(e,r){return(0,O.jsx)(ge.Z,{items:ye(r,(a=w().find(n,{value:r.clusterId}),!1!==(null==a||null===(i=a.k8s_options)||void 0===i||null===(i=i.gpuInstanceOptions)||void 0===i?void 0:i.gpuInstanceTypeDerivedFromNode))),onSelect:function(e){return t(e,r)}});var a,i}}]}),[t,n,r,a])},Te=n(98792);var _e=function(){var e,t,n=(0,h.useIntl)(),r=(0,u.Z)({key:s.ue.InstanceTypes,fetchAPI:Z.Zn,events:["CREATE","UPDATE","DELETE"],watch:!0,API:Z.h2,defaultQueryParams:{purpose:"gpu_service"}}),i=r.dataSource,l=r.queryParams,b=r.sortOrder,C=r.modalRef,j=r.fetchData,E=r.handlePageChange,S=r.handleTableChange,R=r.handleSearch,M=r.handleQueryChange,I=r.handleNameChange,L=(e=(0,T.useCallback)((function(e){return(0,Z.bi)({cluster_id:e.cluster_id,data:e.data})}),[]),{detailData:(t=(0,Te.m)({fetchDetail:e,key:"createInstanceType"})).detailData,loading:t.loading,cancelRequest:t.cancelRequest,fetchData:t.fetchData}).fetchData,P=(0,d.g)(),A=P.clusterList,q=P.fetchClusterList,F=P.loading,W=fe(),D=W.openInstanceTypeModalStatus,N=W.openInstanceTypeModal,G=W.closeInstanceTypeModal;(0,T.useEffect)((function(){q({page:-1,gpu_instance_enabled:!0})}),[]);var U=A.length>0,$=(0,x.Z)((function(e){M({page:1,cluster_id:e})})),H=(0,x.Z)(function(){var e=c()(o()().mark((function e(t){var r,a,i,l,c;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),i=e.t0||{},l=i.response,c=503===(null==l?void 0:l.status)?n.formatMessage({id:"gpuservice.instanceType.clusterUnavailable"}):(null==l||null===(r=l.data)||void 0===r||null===(r=r.error)||void 0===r?void 0:r.message)||(null==l||null===(a=l.data)||void 0===a?void 0:a.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.message),y.ZP.error({content:(0,O.jsx)(_.Z,{errMsg:c})}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),z=(0,x.Z)((function(){N(n.formatMessage({id:"gpuservice.instanceType.add"}))})),B=(0,x.Z)(function(){var e=c()(o()().mark((function e(t,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H((function(){return L({cluster_id:t,data:r})}));case 3:G(),y.ZP.success(n.formatMessage({id:"common.message.success"})),j(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Q=(0,x.Z)((function(e){var t;null===(t=C.current)||void 0===t||t.show({content:n.formatMessage({id:"gpuservice.instanceType"}),operation:"common.delete.single.confirm",name:e.name,onOk:function(){return c()(o()().mark((function t(){return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H((function(){return(0,Z.A_)({name:e.name,cluster_id:e.clusterId})}));case 2:j();case 3:case"end":return t.stop()}}),t)})))()}})})),V=(0,x.Z)((function(e,t){var r,a,i=t?Z.Le:Z.dB;null===(r=C.current)||void 0===r||r.show({content:n.formatMessage({id:"gpuservice.instanceType"}),title:t?"common.title.activate.confirm":"common.title.deactivate.confirm",okText:t?"gpuservice.instanceType.activate":"gpuservice.instanceType.deactivate",operation:t?"common.activate.single.confirm":"common.deactivate.single.confirm",name:(null===(a=e.spec)||void 0===a?void 0:a.displayName)||e.name,onOk:function(){return c()(o()().mark((function t(){return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H((function(){return i({name:e.name,cluster_id:e.clusterId})}));case 2:j();case 3:case"end":return t.stop()}}),t)})))()}})})),K=(0,x.Z)((function(e,t){"delete"===e?Q(t):"activate"===e?V(t,!0):"deactivate"===e&&V(t,!1)})),Y=we({handleSelect:K,clusterList:A,sortOrder:b}),J=(0,x.Z)((function(e){S({},{},e,{action:"sort"})}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(k.ZP,{children:[(0,O.jsx)(m.f8,{showSelect:!0,selectHolder:n.formatMessage({id:"clusters.filterBy.cluster"}),inputHolder:n.formatMessage({id:"gpuservice.instanceType.filter.name"}),buttonText:n.formatMessage({id:"gpuservice.instanceType.add"}),selectOptions:A,handleSearch:R,handleSelectChange:$,handleClickPrimary:U?z:void 0,handleInputChange:I,widths:{select:230,input:230}}),(0,O.jsx)(v.Z,{rowKey:"id",columns:Y,dataSource:i.dataList,loading:i.loading,loadend:i.loadend,sortDirections:s.gM,showSorterTooltip:!1,onTableSort:J,scroll:{x:!0},empty:(0,O.jsx)(p.Z,a()({minHeight:"calc(100vh - 300px)",loading:i.loading||F,loadend:i.loadend,dataSource:i.dataList,image:(0,O.jsx)(f.Z,{type:"icon-gpu1"}),filters:w().pick(l,["search","cluster_id"]),noFoundText:n.formatMessage({id:"noresult.gpuservice.instanceType.nofound"}),title:n.formatMessage({id:"noresult.gpuservice.instanceType.title"}),subTitle:U?n.formatMessage({id:"noresult.gpuservice.instanceType.subTitle"}):n.formatMessage({id:"noresult.resources.k8sCluster"})},U?{onClick:z,buttonText:n.formatMessage({id:"noresult.button.add"})}:{})),emptyMinHeight:"calc(100vh - 300px)",pagination:{size:"middle",showSizeChanger:!0,pageSize:l.perPage,current:l.page,total:i.total,hideOnSinglePage:10===l.perPage,onChange:E}})]}),(0,O.jsx)(de,{open:D.open,title:D.title,clusterList:A,onCancel:G,onOk:B}),(0,O.jsx)(g.Z,{ref:C})]})}},76788:function(e,t,n){n.d(t,{I3:function(){return p},MF:function(){return f},W0:function(){return u},oH:function(){return d},rH:function(){return m},wM:function(){return v}});var r=n(335),a=n.n(r),i=n(82092),o=n.n(i),l=n(28290),c="enabled",s="disabled",u=(o()(o()({},c,"common.button.enable"),s,"common.button.disable"),[{label:"gpuservice.template.imagePullPolicy.always",value:"Always",locale:!0},{label:"gpuservice.template.imagePullPolicy.ifNotPresent",value:"IfNotPresent",locale:!0},{label:"gpuservice.template.imagePullPolicy.never",value:"Never",locale:!0}]),d="IfNotPresent",p={nvidia:"green",amd:"volcano",ascend:"orange",hygon:"magenta",moorthreads:"cyan",iluvatar:"purple",metax:"geekblue",cambricon:"gold",thead:"red",cpu:"blue"},f=function(e){if(!e)return[];var t,n=[],r="",i=null,o=-1,l=a()(e);try{for(l.s();!(t=l.n()).done;){var c=t.value;i?c===i?(i=null,o=-1):r+=c:'"'===c||"'"===c?(i=c,o=r.length):/\s/.test(c)?(n.push(r),r=""):r+=c}}catch(e){l.e(e)}finally{l.f()}return i&&o>=0&&(r=r.slice(0,o)+i+r.slice(o)),n.push(r),n},m=function(e){return null!=e&&e.length?e.map((function(e){return/\s/.test(e)?e.startsWith('"')||e.startsWith("'")?e:'"'.concat(e,'"'):e})).join(" "):""},v=[{label:"common.button.edit",key:"edit",locale:!0,icon:l.Z.EditOutlined},{label:"gpuservice.template.editYaml",key:"editYaml",locale:!0,icon:l.Z.FileTextOutlined},{label:"common.button.clone",key:"clone",locale:!0,icon:l.Z.CopyOutlined},{label:"common.button.delete",key:"delete",locale:!0,icon:l.Z.DeleteOutlined,danger:!0}]},11129:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(75271),a=n(87117),i=n(4814),o=n(25309),l=n(76640),c=n(82944),s=n(46882),u=n(30697),d=n(67902);const p=["wrap","nowrap","wrap-reverse"],f=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],m=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],v=(e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&p.includes(n)}},g=(e,t)=>{const n={};return m.forEach((r=>{n[`${e}-align-${r}`]=t.align===r})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n},h=(e,t)=>{const n={};return f.forEach((r=>{n[`${e}-justify-${r}`]=t.justify===r})),n};var x=(e,t)=>(0,i.W)({...v(e,t),...g(e,t),...h(e,t)});const y=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},b=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-medium, &-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},w=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},T=e=>{const{componentCls:t}=e,n={};return m.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},_=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var k=(0,u.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,a=(0,d.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[y(a),b(a),w(a),T(a),_(a)]}),(()=>({})),{resetStyle:!1});const Z=r.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:u,className:d,style:p,flex:f,gap:m,vertical:v,orientation:g,component:h="div",children:y,...b}=e,{flex:w,direction:T,getPrefixCls:_}=r.useContext(s.E_),Z=_("flex",n),[C,j]=k(Z),[,E]=(0,l.R)(g,v??w?.vertical),S=(0,i.W)(d,u,w?.className,Z,C,j,x(Z,{...e,vertical:E}),{[`${Z}-rtl`]:"rtl"===T,[`${Z}-gap-${m}`]:(0,o.n)(m),[`${Z}-vertical`]:E}),R={...w?.style,...p};return(0,c.C_)(f)&&(R.flex=f),(0,c.C_)(m)&&!(0,o.n)(m)&&(R.gap=m),r.createElement(h,{ref:t,className:S,style:R,...(0,a.CE)(b,["justify","wrap","align"])},y)}));var C=Z},95325:function(e,t,n){e.exports=n.p+"static/json-parser-worker-DNgcg2LJ.986db6b8.js"},67988:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(39930),a=n(250),i=n(75271),o=n(52676),l=n(36685),c=n(14792),s=n(59362),u=n(18216),d=n(26669),p=({children:e,tips:t,text:n,type:p="text",shape:f="default",fontSize:m="14px",style:v,btnStyle:g,placement:h,size:x="small"})=>{let y=(0,r.Z)(),[b,w]=(0,i.useState)(!1),T=(0,i.useRef)(),_=(0,i.useMemo)((()=>b?y.formatMessage({id:"common.button.copied"}):t??y.formatMessage({id:"common.button.copy"})),[b,t,y]);return(0,i.useEffect)((()=>(window.clearTimeout(T.current),T.current=window.setTimeout((()=>{w(!1)}),3e3),()=>{window.clearTimeout(T.current)})),[b]),(0,o.jsxs)("div",{className:"flex-center gap-4",style:{minWidth:16},children:[e&&(0,o.jsx)(a.Z,{minWidth:20,ghost:!0,children:e}),(0,o.jsx)(c.Z,{title:_,placement:h,children:(0,o.jsx)("span",{children:(0,o.jsx)(s.ZP,{className:"copy-button",type:p,shape:f,size:x,onClick:async()=>{await(async e=>{if(!navigator.clipboard?.writeText||"boolean"==typeof window.isSecureContext&&!window.isSecureContext)return!1;try{return document.hasFocus()||window.focus(),await navigator.clipboard.writeText(e),!0}catch{return!1}})(n)||(e=>{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:none;outline:none;box-shadow:none;background:transparent;opacity:0;pointer-events:none;",t.style.fontSize="12pt";let n=document.getSelection(),r=(n&&n.rangeCount>0&&n.getRangeAt(0),document.activeElement);document.body.appendChild(t);let a=!1;try{let i=document.createRange();i.selectNodeContents(t),n?.removeAllRanges(),n?.addRange(i),t.setSelectionRange(0,e.length),t.focus(),a=document.execCommand("copy")}catch{a=!1}finally{document.body.removeChild(t);try{n&&(n.removeAllRanges(),i&&n.addRange(i)),r?.focus?.()}catch{}}return a})(n)?w(!0):l.ZP.error(y.formatMessage({id:"common.copy.fail"}))},style:{...g},"aria-label":_,icon:b?(0,o.jsx)(u.Z,{style:{color:"var(--ant-color-success)",fontSize:m}}):(0,o.jsx)(d.Z,{style:{fontSize:m,...v}})})})})]})}},49799:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(39930),a=n(63922),i=n(843),o=n(33819),l=n(57998),c=n(17465),s=n(81764),u=n(75271),d=n(52676),p=n(68195),f=e=>{let{label:t,placeholder:n,children:f,required:m,description:v,options:g,allowNull:h,isInFormItems:x=!0,notFoundContent:y=null,loading:b,footer:w,alwaysFocus:T=!1,styles:_,...k}=e,Z=(0,r.Z)(),[C,j]=(0,u.useState)(!1),E=(0,u.useRef)(null),S="",R=p.Z?.Item?.useStatus?.();S=e.status||(x?R?.status:"")||"";let M=(0,u.useMemo)((()=>g?.length?(0,s.cloneDeep)(g).map((e=>(e.locale&&(e.label=Z.formatMessage({id:e.label})),e))):[]),[g,Z]);(0,u.useEffect)((()=>{((0,a.JL)(e.value)||h&&(null===e.value||void 0===e.value))&&j(!0)}),[e.value,h]);return(0,d.jsx)(l.Z,{children:(0,d.jsx)(o.Z,{className:"seal-select-wrapper",status:S,label:t,isFocus:T||C,required:m,description:v,disabled:e.disabled,onClick:()=>{!e.disabled&&!C&&(E.current?.focus?.(),j(!0))},children:(0,d.jsx)(c.Z,{...k,styles:_,placeholder:n,footer:w,ref:E,options:f?void 0:M,onFocus:t=>{j(!0),e.onFocus?.(t)},onBlur:t=>{h&&null===e.value?j(!0):e.value||j(!1),e.onBlur?.(t)},onChange:(t,n)=>{(0,a.JL)(t)||h&&null===t?j(!0):j(!1),e.onChange?.(t||null,n)},notFoundContent:(0,d.jsx)(i.Z,{loading:b,notFoundContent:y}),children:f})})})}},57998:function(e,t,n){n.d(t,{Z:function(){return r}});var r=n(56965).ZP.div`
  flex: 1;
  .seal-select-wrapper {
    border: none;
    box-shadow: none;

    &.dropdown-visible {
      .__wrapper__ {
        .ant-cascader.ant-select.ant-select-outlined {
          border-color: var(--ant-input-active-border-color) !important;
          outline: 0;
          background-color: var(--ant-input-active-bg);
          border-bottom-color: transparent !important;
          border-radius: ${4}px ${4}px 0 0;
          transition: all 0.2s ease;
          box-shadow: none;

          &::before {
            content: '';
            position: absolute;
            height: 1px;
            margin-inline: 1px;
            bottom: 0;
            left: 0px;
            right: 0;
            background-color: var(--ant-color-split);
          }
        }

        .ant-select-dropdown {
          box-shadow: none;
          border-width: var(--ant-line-width);
          border-style: var(--ant-line-type);
          border-color: var(--ant-input-active-border-color);
          border-top: none;
        }

        &:hover {
          .ant-select-dropdown {
            border-color: var(--ant-input-active-border-color);
          }
        }

        &:focus-within {
          border-color: var(--ant-input-active-border-color) !important;
          outline: 0;
          background-color: var(--ant-input-active-bg);
        }
      }
    }

    &:focus-within {
      border: none;
      box-shadow: none;
    }
    .__wrapper__ {
      padding-block: 0;

      .label {
        left: ${15}px !important;
        top: 11px;

        &.isfoucs-has-value {
          top: 11px;
          transition: all 0.2s var(--seal-transition-func);
        }

        &.blur-no-value {
          top: 21px;
          transition: all 0.2s var(--seal-transition-func);
        }

        &.has-prefix {
          top: 11px !important;
        }
      }
      &.no-label {
        padding-block: 0;

        .ant-select-arrow {
          top: 50%;
        }

        .ant-select .ant-select-input {
          top: -1px !important;
        }
        .ant-select-placeholder {
          position: absolute;
          top: 1px;
          left: 0;
          right: 0;
        }
        .ant-select .ant-select-content {
          padding-block: 0px 0;
        }
        .ant-select-auto-complete {
          .ant-select-placeholder {
            top: 1px;
          }
        }
        .ant-select.ant-cascader {
          .ant-select-placeholder {
            top: 0px !important;
          }
          .ant-select-input {
            top: -6px !important;
          }
        }
      }
    }
    .ant-select-selection-overflow-item > span {
      display: flex;
      align-items: center;
    }
    .ant-select {
      display: flex;
      align-items: center;
      height: 54px;
      padding-inline: 14px !important;

      .ant-select-selection-wrap {
        height: 100%;
      }
      .ant-select-content-item-suffix {
        margin-inline-start: 0px;
      }

      &.ant-select-auto-complete {
        .ant-select-selection-search {
          padding-inline-start: ${14}px;
        }
        .ant-select-content-value {
          display: none;
        }
      }
      &.ant-select-multiple.ant-cascader .ant-select-selection-search {
        top: 0 !important;
      }

      .ant-select-content {
        padding-block: 20px 0;
        box-shadow: none !important;
      }
      &.ant-cascader {
        .ant-select-content-item-prefix + .ant-select-content-item-suffix {
          margin-inline-start: 0 !important;
        }
      }
      &.seal-cascader-small {
        height: 40px;
      }

      .ant-select-input {
        top: 14px !important;
      }
      .ant-select-placeholder {
        > span {
          padding-inline: 0 !important;
        }
      }
    }

    .ant-select-multiple.ant-select-lg {
      .ant-select-selection-search {
        margin-inline-start: 0 !important;
        left: 0 !important;
      }
    }

    .ant-select-selection-item {
      height: ${32}px !important;
      padding-block: 5px !important;
      line-height: 22px !important;
      padding-inline-end: 0 !important;
    }

    .ant-select-arrow {
      top: 32px;
    }

    .ant-select-selection-search-input {
      height: ${32}px !important;
    }

    &.validate-status-error {
      .ant-select-dropdown {
        border-color: var(--ant-color-error) !important;
      }
      .__wrapper__ {
        .ant-cascader.ant-select.ant-select-outlined {
          border-color: var(--ant-color-error) !important;
        }
      }
    }
    &.seal-cascader-wrapper-small {
      height: 40px;
      .cascader-popup-wrapper {
        top: 39px !important;
      }
      .ant-select-input {
        height: 36px !important;
      }
      .ant-select {
        padding-inline: 12px !important;
      }
      .__wrapper__.no-label .ant-select.ant-cascader .ant-select-placeholder {
        top: 50% !important;
      }
    }
  }
`},88015:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(88061),a=(n(75271),n(52676)),i=n(74330),o=n(61884),l=n(82187),c=(0,o.kc)((({css:e})=>({themeTag:e`
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
      height: 22px;
      line-height: 20px;
      opacity: 0.7;
      margin: 0;
      &.tag-ghost {
        background-color: transparent !important;
      }
    `}))),s=({opacity:e,style:t,children:n,ghost:o,className:s,...u})=>{let{config:d}=(0,r.Z)(),{isDarkTheme:p}=d,{styles:f}=c();return(0,a.jsx)(i.Z,{variant:"outlined",style:{...t,opacity:p?1:e},...u,className:l(f.themeTag,s,{"tag-ghost":o}),children:n})};s.displayName="ThemeTag"},22563:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(39930),a=n(36685),i=()=>{let e=(0,r.Z)(),[t,n]=a.ZP.useMessage();return{getRuleMessage:(t,n,r=!0)=>{let a=r?e.formatMessage({id:n}):n,i=Array.isArray(t)?t:[t];return i.includes("select")&&i.includes("input")?e.formatMessage({id:"common.form.rule.selectInput"},{name:a}):i.includes("input")?e.formatMessage({id:"common.form.rule.input"},{name:a}):e.formatMessage({id:"common.form.rule.select"},{name:a})},showSuccess:n=>{t.success(n||e.formatMessage({id:"common.message.success"}))}}}},66890:function(e,t,n){n.d(t,{$i:function(){return c},ZP:function(){return s}});var r=n(88061),a=n(25273);window.__GPUSTACK_WATCH_REQUEST_CLEAR__={watchIDValue:0,requestList:[]};var i=n(81764),o=n(75271),l=n(75672),c=()=>{let{CancelToken:e}=l.default;return e.source()},s=()=>{let{services:e}=(0,r.Z)(),{request:t}=e,[c,s]=(0,o.useState)(0),u=(0,o.useRef)(null),d=(0,o.useRef)({}),p=(0,o.useRef)(0),f=(0,o.useRef)(0),m=(0,o.useRef)(5),v={params:{},contentType:"json"},g=(0,o.useRef)(null),h=(0,o.useRef)(0),x=(0,o.useRef)(null),y=(0,o.useRef)(!1),b=()=>{p.current=0,f.current=0,h.current=0,s(0)},w=()=>{let{CancelToken:e}=l.default,t=e.source(),n=(window.__GPUSTACK_WATCH_REQUEST_CLEAR__.watchIDValue=window.__GPUSTACK_WATCH_REQUEST_CLEAR__.watchIDValue+1,window.__GPUSTACK_WATCH_REQUEST_CLEAR__.watchIDValue);return{id:n,token:t.token,cancel(){t.cancel(),(e=>{let t=window.__GPUSTACK_WATCH_REQUEST_CLEAR__.requestList,n=t.findIndex((t=>t.id===e));n>-1&&t.splice(n,1)})(n)}}},T=async({url:e,handler:r,beforeReconnect:o,params:c={},contentType:d="json"})=>{b(),u.current?.cancel?.(),u.current=w(),(e=>{window.__GPUSTACK_WATCH_REQUEST_CLEAR__.requestList.push(e)})(u.current);let v=window.__GPUSTACK_WATCH_REQUEST_CLEAR__.requestList;v.length>4&&(e=>{let t=window.__GPUSTACK_WATCH_REQUEST_CLEAR__.requestList,n=t.slice(0,e);t.splice(0,n.length),n.forEach((e=>e?.cancel?.()))})(v.length-4),"json"===d&&(x.current?.terminate(),x.current=new Worker(new URL(""+new URL(n(95325),n.b).href,"file:///Users/joe/Project/opensource/gpustack-ui/node_modules/.pnpm/@gpustack+core-ui@1.1.17_k4n3tv37j5dipz4shs57farbhu/node_modules/@gpustack/core-ui/dist/lib/hooks/use-chunk-request.es.js")),x.current.onmessage=function(e){let t=e.data;t.length>0&&r((e=>i.map(e,(e=>(e.type===a._W.DELETE&&(e.ids=e.data?.id?[e.data.id]:[]),e.collection=e.data?[e.data]:[],e))))(t))});try{let{request:n}=await t(e,{params:{...c,watch:!0},skipErrorHandler:!0,getResponse:!0,cancelToken:u.current.token,async onDownloadProgress(e){let{response:t,readyState:n}=e.currentTarget;if(s(n),p.current=e.loaded||0,f.current=e.total||0,"json"===d){let n=((e,t,n)=>{let r=e.slice(n.current);return n.current=e.length,r})(t,e.loaded,h);x.current?.postMessage(n)}else r(t)}});s(n?.readyState),m.current>0&&--m.current}catch(e){l.default.isCancel(e)||(s(4),m.current>0&&--m.current)}return u.current};return(0,o.useEffect)((()=>{let e=()=>{u.current?.cancel?.()};return window.addEventListener("beforeunload",e),()=>{b(),d.current.beforeReconnect=null,u.current?.cancel?.(),clearTimeout(g.current),window.removeEventListener("beforeunload",e)}}),[]),(0,o.useEffect)((()=>{if(4===c&&!y.current){if(m.current>0)return d.current.beforeReconnect?.(),clearTimeout(g.current),void(g.current=setTimeout((()=>{T(d.current)}),2**(5-m.current)*1e3));u.current?.cancel?.()}}),[c]),(0,o.useLayoutEffect)((()=>(y.current&&(y.current=!1,d.current?.url&&(m.current=5,T(d.current))),()=>{y.current=!0,u.current?.cancel?.(),x.current?.terminate(),x.current=null,clearTimeout(g.current)})),[]),{setChunkRequest:e=>(d.current={...v,...e},m.current=5,clearTimeout(g.current),T(d.current),u),createAxiosToken:w}}},98792:function(e,t,n){n.d(t,{h:function(){return o},m:function(){return l}});var r=n(66890),a=n(75271),i=n(15001);function o(e){let{key:t,fetchList:n,getLabel:o,getValue:l,manual:c=!0,responseType:s="array",errorMsg:u}=e,d=(0,a.useRef)(null),[p,f]=(0,a.useState)([]),{runAsync:m,loading:v,cancel:g}=(0,i.Z)((async(e,t)=>{d.current?.cancel(),d.current=(0,r.$i)();let a=await n(e,{token:d.current?.token,...t||{}});return f(a?.items?.map((e=>({...e,label:o?o(e):e.name,value:l?l(e):e.id})))||[]),"array"===s?a?.items||[]:a}),{manual:c,debounceWait:e.debounceWait||300,onError:e=>{f([])}});return(0,a.useEffect)((()=>()=>{g(),d.current?.cancel()}),[g]),{loading:v,dataList:p,cancelRequest:()=>{g(),d.current?.cancel()},fetchData:(e,t)=>m(e,t)}}function l(e){let{key:t,fetchDetail:n,getData:o,errorMsg:l,delay:c,manual:s=!0}=e,u=(0,a.useRef)(null),[d,p]=(0,a.useState)({}),{runAsync:f,loading:m,cancel:v}=(0,i.Z)((async(e,t)=>{u.current?.cancel(),u.current=(0,r.$i)();let a=await n(e,{token:u.current?.token,...t||{}});return c&&await new Promise((e=>{setTimeout(e,c)})),p(o?o(a,e):a),a}),{manual:s,onSuccess:()=>{},onError:e=>{p({})}}),g=()=>{v(),u.current?.cancel()};return(0,a.useEffect)((()=>()=>{g()}),[]),{loading:m,detailData:d,cancelRequest:g,fetchData:f}}},5174:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(75271),a=n(7056);function i(){let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1),i=(0,a.Z)((()=>{t(!1),n.current=!1}));return{loading:e,guard:(0,a.Z)((e=>{n.current||(n.current=!0,e())})),run:(0,a.Z)((async e=>{t(!0);try{await e()}finally{i()}})),release:i}}}}]);