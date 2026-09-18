(self.webpackChunk=self.webpackChunk||[]).push([[4674],{61583:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(75271),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},o=n(93102);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const s=(e,t)=>r.createElement(o.Z,i({},e,{ref:t,icon:a}));var c=r.forwardRef(s)},65822:function(e,t,n){"use strict";n.d(t,{h:function(){return h},m:function(){return g}});var r=n(90228),a=n.n(r),o=n(26068),i=n.n(o),s=n(87999),c=n.n(s),u=n(48305),l=n.n(u),d=n(66890),p=n(15001),f=n(36685),m=n(75271);function h(e){var t=e.key,n=e.fetchList,r=e.getLabel,o=e.getValue,s=e.manual,u=void 0===s||s,h=e.responseType,g=void 0===h?"array":h,x=e.errorMsg,v=(0,m.useRef)(null),y=(0,m.useState)([]),b=l()(y,2),k=b[0],w=b[1],j=(0,p.Z)(function(){var e=c()(a()().mark((function e(t,s){var c,u,l,p;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(c=v.current)||void 0===c||c.cancel(),v.current=(0,d.$i)(),e.next=4,n(t,i()({token:null===(u=v.current)||void 0===u?void 0:u.token},s||{}));case 4:return p=e.sent,w((null===(l=p.items)||void 0===l?void 0:l.map((function(e){return i()(i()({},e),{},{label:r?r(e):e.name,value:o?o(e):e.id})})))||[]),e.abrupt("return","array"===g?p.items||[]:p);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{manual:u,debounceWait:e.debounceWait||300,onSuccess:function(){},onError:function(e){f.ZP.error((null==e?void 0:e.message)||x||"Failed to fetch ".concat(t," list")),w([])}}),Z=j.runAsync,T=j.loading,C=j.cancel;return(0,m.useEffect)((function(){return function(){var e;C(),null===(e=v.current)||void 0===e||e.cancel()}}),[]),{loading:T,dataList:k,cancelRequest:function(){var e;C(),null===(e=v.current)||void 0===e||e.cancel()},fetchData:Z}}function g(e){var t=e.key,n=e.fetchDetail,r=e.getData,o=e.errorMsg,s=e.delay,u=e.manual,h=void 0===u||u,g=(0,m.useRef)(null),x=(0,m.useState)({}),v=l()(x,2),y=v[0],b=v[1],k=(0,p.Z)(function(){var e=c()(a()().mark((function e(t,o){var c,u,l;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(c=g.current)||void 0===c||c.cancel(),g.current=(0,d.$i)(),e.next=4,n(t,i()({token:null===(u=g.current)||void 0===u?void 0:u.token},o||{}));case 4:if(l=e.sent,!s){e.next=8;break}return e.next=8,new Promise((function(e){setTimeout(e,s)}));case 8:return b(r?r(l,t):l),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{manual:h,onSuccess:function(){},onError:function(e){f.ZP.error((null==e?void 0:e.message)||o||"Failed to fetch ".concat(t," data")),b({})}}),w=k.runAsync,j=k.loading,Z=k.cancel,T=function(){var e;Z(),null===(e=g.current)||void 0===e||e.cancel()};return(0,m.useEffect)((function(){return function(){T()}}),[]),{loading:j,detailData:y,cancelRequest:T,fetchData:w}}},83393:function(e,t,n){"use strict";n.d(t,{Ov:function(){return d},Yh:function(){return u},dI:function(){return h},gu:function(){return f}});var r=n(90228),a=n.n(r),o=n(87999),i=n.n(o),s=n(78451),c="/api-keys";function u(e){return l.apply(this,arguments)}function l(){return(l=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c),{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return m.apply(this,arguments)}function m(){return(m=i()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t),{method:"PUT",data:n.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},63093:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var r,a=n(26068),o=n.n(a),i=n(90228),s=n.n(i),c=n(87999),u=n.n(c),l=n(48305),d=n.n(l),p=n(32585),f=n(26267),m=n(11662),h=n(65822),g=n(78451),x=n(95929),v=function(e){var t=(0,g.useAccess)(),n=(0,h.h)({key:"userList",fetchList:x.ns,getLabel:null==e?void 0:e.getLabel,getValue:null==e?void 0:e.getValue}),r=n.dataList,a=n.loading,i=n.fetchData;return{dataList:r,loading:a,fetchData:function(e){if(t.canSeeOrgAdmin)return i(o()({},e))},cancelRequest:n.cancelRequest}},y=n(21701),b=n(60341),k=n(6324),w=n(2538),j=n(64658),Z=n(83443),T=n(46344),C=n(81764),M=n.n(C),_=n(75271),S=n(86974),E=n(83393),P=n(5174),I=n(57991),q=n(90240),D=n(6556),O=n(7224),R=n(85983),N=n(67988),A=n(68195),z=n(74330),F=n(51218),L=n.n(F),$=[{label:"apikeys.form.expiration.7days",type:"day",value:7,locale:!0},{label:"apikeys.form.expiration.1month",type:"month",value:1,locale:!0},{label:"apikeys.form.expiration.6months",type:"month",value:6,locale:!0},{label:"apikeys.form.expiration.never",type:"never",value:-1,locale:!0}],G=[{label:"apikeys.accessScope.management",value:"management",description:"v2/",locale:!0},{label:"apikeys.table.bindModels",value:"inference",description:"v1/",locale:!0}],B=n(12240),W=n(49799),H=n(78794),K=n(15558),V=n.n(K),Y=n(53649),U=n.n(Y),J=n(64494),Q=n(22563),X=n(39930),ee=n(36304),te=n(250),ne=n(52676),re=n(21379),ae=n(56965),oe=ae.ZP.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,ie=ae.ZP.li`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  cursor: pointer;
  border-radius: 2px;
  gap: 8px;
  &:hover {
    background-color: var(--ant-control-item-bg-hover);
  }
`,se=({maxHeight:e,dataList:t,value:n=[],onChange:r,renderTitle:a})=>(0,ne.jsx)(ee.Z,{style:{paddingInline:0},maxHeight:e,children:(0,ne.jsx)(oe,{children:t.map((e=>(0,ne.jsxs)(ie,{selected:n.includes(e.key),onClick:()=>(e=>{let t=e.key;r(n.includes(t)?n.filter((e=>e!==t)):[...n,t])})(e),children:[(0,ne.jsx)(re.Z,{checked:n.includes(e.key)}),a?a(e):(0,ne.jsx)(te.Z,{ghost:!0,children:e.title})]},e.key)))})}),ce=n(46498),ue=n(79526),le=n(88880),de=ae.ZP.div`
  border: 1px solid var(--ant-color-border);
  border-radius: var(--ant-border-radius);
  overflow-y: auto;
  max-height: ${({$maxHeight:e})=>e?`${e+2}px`:"auto"};
`,pe=ae.ZP.div`
  padding: 0;
`,fe=ae.ZP.div`
  padding: 8px 12px 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--ant-color-split);
  background-color: var(--ant-color-fill-alter);
`,me=({height:e=300,leftWidth:t=260,options:n,value:r=[],searchPlaceholder:a,notFoundContent:o,onChange:i,styles:s})=>{let c=(0,X.Z)(),[u,l]=_.useState(!1),[d,p]=_.useState(!1),[f,m]=(0,_.useState)(""),h=(0,_.useMemo)((()=>n.filter((e=>e.title.toLowerCase().includes(f.toLowerCase())))),[n,f]),g=e=>{if(0===n.length)return l(!1),void p(!1);let t=n.filter((e=>e.title.toLowerCase().includes(f.toLowerCase()))).map((e=>e.key)),r=e.filter((e=>t.includes(e)));l(r.length>0&&r.length<t.length),p(r.length===t.length)};return(0,_.useEffect)((()=>{g(r)}),[r,n]),(0,ne.jsx)(de,{$maxHeight:e,$leftWidth:t,style:s?.container,children:(0,ne.jsxs)(pe,{children:[(0,ne.jsxs)(fe,{style:s?.header,children:[(0,ne.jsxs)("span",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--ant-color-text-tertiary)"},children:[(0,ne.jsx)(re.Z,{checked:d,indeterminate:u,onChange:e=>{let t=e.target.checked;if(p(t),l(!1),t){let e=n.filter((e=>e.title.toLowerCase().includes(f.toLowerCase()))).map((e=>e.key));i?.(Array.from(new Set([...r,...e])))}else{let e=n.filter((e=>e.title.toLowerCase().includes(f.toLowerCase()))).map((e=>e.key)),t=r.filter((t=>!e.includes(t)));i?.(t)}}}),(0,ne.jsx)("span",{children:c.formatMessage({id:"common.select.count"},{count:r.length})})]}),(0,ne.jsx)(ce.Z,{prefix:(0,ne.jsx)(le.Z,{style:{color:"var(--ant-color-text-quaternary)"}}),size:"small",allowClear:!0,status:"null",placeholder:a,style:{width:300,height:32,borderRadius:4,backgroundColor:"var(--ant-color-bg-container) !important"},onChange:e=>{m(e.target.value)}})]}),h.length>0?(0,ne.jsx)(se,{maxHeight:e-50,dataList:h,value:r,onChange:e=>{i?.(e),g(e)}}):(0,ne.jsx)(ue.Z,{image:ue.Z.PRESENTED_IMAGE_SIMPLE,description:o})]})})},he=n(46980),ge=n(19593),xe=ae.ZP.div(r||(r=U()(["\n  font-weight: 500;\n  margin-block: -8px 12px;\n  font-size: 14px;\n  margin-left: 4px;\n"]))),ve=function(e){var t=e.currentData,n=e.action,r=e.onValuesChange,a=(0,g.useIntl)(),o=(0,Q.Z)().getRuleMessage,i=A.Z.useFormInstance(),c=A.Z.useWatch("allowed_model_names",i),l=A.Z.useWatch("allowed_type",i),f=A.Z.useWatch("scope",i),m=(0,_.useState)([]),h=d()(m,2),x=h[0],v=h[1],y=function(){var e=u()(s()().mark((function e(){var r,a,o,i;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.kS)({page:-1});case 3:r=e.sent,a=r.items.map((function(e){return e.name})),n===p.Kd.EDIT&&t?(i=new Set([].concat(V()(a),V()((null===(o=t.allowed_model_names)||void 0===o?void 0:o.map((function(e){return e})))||[]))),v(Array.from(i).map((function(e){return{key:e,title:e}})))):v(a.map((function(e){return{key:e,title:e}}))),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,_.useEffect)((function(){y()}),[n,t]),(0,ne.jsxs)("div",{children:[(0,ne.jsx)(he.Z,{}),(0,ne.jsx)(xe,{children:a.formatMessage({id:"apikeys.access.permissions"})}),(0,ne.jsx)(A.Z.Item,{name:"scope",style:{marginBottom:8},children:(0,ne.jsx)(re.Z.Group,{options:G.map((function(e){return{label:a.formatMessage({id:e.label}),value:e.value}})),onChange:function(e){}})}),(null==f?void 0:f.includes("inference"))&&(0,ne.jsxs)("div",{style:{padding:"12px",backgroundColor:"var(--ant-color-fill-quaternary)",borderRadius:4},children:[(0,ne.jsx)(A.Z.Item,{name:"allowed_type",noStyle:!0,children:(0,ne.jsx)(ge.ZP.Group,{onChange:function(e){var t=e.target.value;null==r||r({allowed_type:t},i.getFieldsValue())},options:[{label:a.formatMessage({id:"apikeys.models.all"}),value:"all"},{label:a.formatMessage({id:"apikeys.models.selected"}),value:"custom"}]})}),"custom"===l&&(0,ne.jsx)(A.Z.Item,{name:"allowed_model_names",style:{marginBottom:0,marginTop:12},rules:[{required:"custom"===l,message:o("select",a.formatMessage({id:"models.table.models"}))}],children:(0,ne.jsx)(me,{height:300,styles:{container:{backgroundColor:"var(--ant-color-bg-container) !important"},header:{backgroundColor:"var(--ant-color-bg-container) !important"}},searchPlaceholder:a.formatMessage({id:"common.filter.name"}),options:x,value:c||[],notFoundContent:a.formatMessage({id:"apikeys.models.noModelsFound"}),onChange:function(e){i.setFieldsValue({allowed_model_names:e||[]}),null==r||r({allowed_model_names:e||[]},i.getFieldsValue())}})})]})]})},ye=function(e){var t=e.action,n=e.currentData,r=e.onValuesChange,a=(0,g.useIntl)(),o=A.Z.useWatch("key_type");return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(A.Z.Item,{name:"name",rules:[{required:!0,message:a.formatMessage({id:"common.form.rule.input"},{name:a.formatMessage({id:"common.table.name"})})}],children:(0,ne.jsx)(R.Z.Input,{trim:!0,disabled:t===p.Kd.EDIT,label:a.formatMessage({id:"common.table.name"}),required:!0})}),(0,ne.jsx)(B.Z,{name:"CreateOrgScopeField",context:{action:t,allowPersonal:!0,allowGlobal:!0,globalLabelId:"scope.global"}}),(0,ne.jsx)(A.Z.Item,{name:"expires_in",rules:[{required:!0,message:a.formatMessage({id:"common.form.rule.select"},{name:a.formatMessage({id:"apikeys.form.expiretime"})})}],children:(0,ne.jsx)(W.Z,{disabled:t===p.Kd.EDIT,options:$,label:a.formatMessage({id:"apikeys.form.expiretime"}),required:!0})}),(0,ne.jsx)(A.Z.Item,{name:"description",rules:[{required:!1}],children:(0,ne.jsx)(R.Z.TextArea,{scaleSize:!0,label:a.formatMessage({id:"common.table.description"})})}),t===p.Kd.CREATE&&(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(A.Z.Item,{name:"key_type",initialValue:"auto",children:(0,ne.jsx)(W.Z,{options:[{label:a.formatMessage({id:"apikeys.type.auto"}),value:"auto"},{label:a.formatMessage({id:"apikeys.type.custom"}),value:"custom"}],label:a.formatMessage({id:"common.table.type"})})}),"custom"===o&&(0,ne.jsx)(A.Z.Item,{name:"custom",rules:[{required:!0,message:a.formatMessage({id:"common.form.rule.input"},{name:a.formatMessage({id:"apikeys.table.key"})})}],children:(0,ne.jsx)(H.Z,{trim:!0,required:!0,autoComplete:"new-password",label:a.formatMessage({id:"apikeys.table.key"})})})]}),(0,ne.jsx)(ve,{currentData:n,action:t,onValuesChange:r})]})},be={padding:"16px 24px 8px",display:"flex",justifyContent:"flex-end"},ke=function(e){var t=e.title,n=e.action,r=e.open,a=e.currentData,i=e.onOk,c=e.onCancel,l=A.Z.useForm(),f=d()(l,1)[0],m=(0,g.useIntl)(),h=(0,_.useState)(!1),x=d()(h,2),v=x[0],y=x[1],b=(0,_.useState)(""),k=d()(b,2),w=k[0],j=k[1],Z=(0,P.Z)(),T=Z.loading,C=Z.guard,S=Z.run,F=Z.release,G=(0,_.useState)(!1),B=d()(G,2),W=B[0],H=B[1],K=(0,_.useRef)({}),V=function(e){var t=e;if(-1===t)return 0;var n=$.find((function(e){return t===e.value})),r=L()().add(null==n?void 0:n.value,"".concat(null==n?void 0:n.type)),a=L()();return r.diff(a,"second")},Y=function(e){var t=L()(e.created_at),n=L()(e.expires_at);if(!e.expires_at)return-1;var r=n.diff(t,"day");return r<10?7:r<60?1:6},U=function(){var e=u()(s()().mark((function e(t){var n,r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o()(o()({},t),{},{expires_in:V(t.expires_in)}),e.next=3,(0,E.Ov)({data:n});case 3:if(r=e.sent,i(),!t.custom){e.next=8;break}return c(),e.abrupt("return");case 8:j(r.value),y(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.gu)(null==a?void 0:a.id,{data:t});case 2:i(),c();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(u()(s()().mark((function e(){var r,i;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=o()(o()({},M().omit(t,["allowed_type"])),{},{allowed_model_names:"all"!==t.allowed_type&&null!==(r=t.scope)&&void 0!==r&&r.includes("inference")&&t.allowed_model_names||[]}),n!==p.Kd.CREATE){e.next=7;break}return e.next=5,U(i);case 5:e.next=10;break;case 7:if(n!==p.Kd.EDIT||null==a||!a.id){e.next=10;break}return e.next=10,J(o()({},M().omit(i,["expires_in"])));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t){if(M().isArray(e)&&M().isArray(t))return M().isEmpty(M().xor(e,t))},ee=function(){var e=u()(s()().mark((function e(t,n){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=K.current,e.next=3,new Promise((function(e){setTimeout(e,100)}));case 3:M().isEqualWith(r,M().pick(n,Object.keys(r)),X)?H(!1):H(!0);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,_.useEffect)((function(){r?function(){if(n===p.Kd.CREATE&&r&&f.setFieldsValue({expires_in:1}),n===p.Kd.EDIT&&a&&r){var e;Y(a);var t=null===(e=a.scope)||void 0===e?void 0:e.includes("*"),o=t?["management","inference"]:a.scope,i=t?[]:a.allowed_model_names||[];f.setFieldsValue({name:a.name,description:a.description,scope:o,allowed_type:i.length?"custom":"all",expires_in:Y(a),allowed_model_names:i})}K.current={allowed_type:f.getFieldValue("allowed_type"),allowed_model_names:f.getFieldValue("allowed_model_names")}}():(H(!1),K.current={})}),[r]),(0,ne.jsx)(I.Z,{title:v?m.formatMessage({id:"apikeys.title.save"}):t,open:r,onClose:c,afterOpenChange:function(e){y(!1)},destroyOnHidden:!0,closeIcon:!1,mask:{closable:!1},keyboard:!1,styles:{wrapper:{width:600}},footer:!1,children:(0,ne.jsx)(q.Z,{styles:{container:{paddingBlock:0}},footer:v?(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(O.Z,{onOk:function(){c()},onCancel:c,loading:T,okText:m.formatMessage({id:"common.button.done"}),showCancelBtn:!1,style:be})}):(0,ne.jsxs)(ne.Fragment,{children:[W&&(0,ne.jsx)("div",{style:{marginInline:24,paddingTop:8},children:(0,ne.jsx)(D.Z,{type:"warning",contentStyle:{paddingInline:0},message:m.formatMessage({id:"models.button.accessSettings.tips"})})}),(0,ne.jsx)(O.Z,{onOk:function(){C((function(){return f.submit()}))},onCancel:c,loading:T,style:be})]}),children:(0,ne.jsxs)(A.Z,{name:"addAPIKey",form:f,onFinish:Q,onFinishFailed:F,preserve:!1,initialValues:{allowed_type:"all",scope:["inference"],allowed_model_names:[]},children:[!v&&(0,ne.jsx)(ye,{action:n,currentData:a,onValuesChange:ee}),v&&n===p.Kd.CREATE&&(0,ne.jsxs)(A.Z.Item,{children:[(0,ne.jsx)("div",{children:(0,ne.jsx)(z.Z,{variant:"filled",color:"error",style:{padding:"6px 8px",marginBottom:16,width:"100%"},children:m.formatMessage({id:"apikeys.table.save.tips"})})}),(0,ne.jsx)(R.Z.Input,{label:m.formatMessage({id:"apikeys.form.apikey"}),value:w,addAfter:(0,ne.jsx)(N.Z,{text:w,shape:"default",size:"middle",type:"text"})})]})]})})})},we=n(10068),je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"}}]},name:"dashboard",theme:"outlined"},Ze=n(93102);function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}const Ce=(e,t)=>_.createElement(Ze.Z,Te({},e,{ref:t,icon:je}));var Me=_.forwardRef(Ce),_e=n(28290),Se=n(80562),Ee=n(88015),Pe=n(29284),Ie=n(14792),qe=function(e){var t=e.handleSelect,n=(e.sortOrder,e.showCreator),r=e.configActions,a=void 0===r?[]:r,o=e.onConfigAction,i=(0,g.useIntl)(),s=(0,we.u)("apiKeys"),c=(0,_.useMemo)((function(){var e=[{label:"common.button.edit",key:"edit",icon:_e.Z.EditOutlined,priority:10},{label:"common.button.delete",key:"delete",icon:_e.Z.DeleteOutlined,props:{danger:!0},priority:20}],t=a.map((function(e){var t;return{label:e.labelId,key:e.key,icon:e.icon,priority:null!==(t=e.priority)&&void 0!==t?t:100,props:e.danger?{danger:!0}:void 0,onClick:function(t){return null==o?void 0:o(e.key,t)}}})),n=new Set(a.map((function(e){return e.key}))),r=i.formatMessage({id:"common.enterprise.feature"}),s=function(e){return(0,ne.jsx)(Ie.Z,{title:r,placement:"left",children:(0,ne.jsx)("span",{style:{display:"inline-block"},children:i.formatMessage({id:e})})})},c=[];return n.has("ipConfig")||c.push({key:"ipConfig",label:s("apikeys.button.ipConfig"),locale:!1,icon:(0,ne.jsx)(b.Z,{type:"icon-safe-ip"}),disabled:!0,priority:12}),n.has("quotaLimit")||c.push({key:"quotaLimit",label:s("quotaLimits.button.title"),locale:!1,icon:(0,ne.jsx)(Me,{}),disabled:!0,priority:14}),[].concat(e,V()(t),c).sort((function(e,t){return e.priority-t.priority}))}),[i,a,o]);return(0,_.useMemo)((function(){var e=s.map((function(e){return{title:i.formatMessage({id:e.titleId}),key:e.key,ellipsis:{showTitle:!1},render:function(t,n){return e.render(n)}}}));return[{title:i.formatMessage({id:"common.table.name"}),dataIndex:"name",key:"name",sorter:(0,f.Gi)(1),render:function(e,t){return(0,ne.jsxs)("span",{className:"flex items-center gap-8",children:[(0,ne.jsx)(te.Z,{ghost:!0,style:{maxWidth:400},title:e,children:(0,ne.jsx)("span",{className:"text-primary",children:e})}),t.is_custom&&(0,ne.jsx)(Se.Z,{children:i.formatMessage({id:"playground.params.custom"})})]})}}].concat(V()(e),[{title:i.formatMessage({id:"apikeys.table.key"}),dataIndex:"masked_value",key:"masked_value",render:function(e,t){return(0,ne.jsx)(te.Z,{ghost:!0,style:{maxWidth:200},children:e||"-"})}},{title:i.formatMessage({id:"apikeys.form.expiretime"}),dataIndex:"expires_at",key:"expires_at",sorter:(0,f.Gi)(2),render:function(e,t){return(0,ne.jsx)(te.Z,{ghost:!0,children:e?L()(e).format("YYYY-MM-DD HH:mm:ss"):i.formatMessage({id:"apikeys.form.expiration.never"})})}},{title:i.formatMessage({id:"apikeys.access.permissions"}),dataIndex:"allowed_model_names",key:"allowed_model_names",ellipsis:{showTitle:!1},render:function(e,t){var n,r,a,o,s;return(0,ne.jsxs)("div",{className:"flex-column gap-4",children:[((null===(n=t.scope)||void 0===n?void 0:n.includes("management"))||(null===(r=t.scope)||void 0===r?void 0:r.includes("*")))&&(0,ne.jsx)(te.Z,{ghost:!0,children:i.formatMessage({id:"apikeys.accessScope.management"})}),((null===(a=t.scope)||void 0===a?void 0:a.includes("inference"))||(null===(o=t.scope)||void 0===o?void 0:o.includes("*")))&&(0,ne.jsx)(Ee.Z,{children:(0,ne.jsx)(te.Z,{ghost:!0,children:null!==(s=t.allowed_model_names)&&void 0!==s&&s.length?t.allowed_model_names.join(", "):i.formatMessage({id:"apikeys.models.all"})})})]})}},{title:i.formatMessage({id:"common.table.description"}),dataIndex:"description",key:"description",ellipsis:{showTitle:!1},render:function(e,t){return(0,ne.jsx)(te.Z,{ghost:!0,children:e})}},{title:i.formatMessage({id:"common.table.creator"}),dataIndex:"user_name",key:"user_name",hidden:!n,render:function(e){return(0,ne.jsx)(te.Z,{ghost:!0,style:{maxWidth:200},children:e||"-"})}},{title:i.formatMessage({id:"common.table.createTime"}),dataIndex:"created_at",key:"created_at",sorter:(0,f.Gi)(3),ellipsis:{showTitle:!1},render:function(e){return(0,ne.jsx)(te.Z,{ghost:!0,children:L()(e).format("YYYY-MM-DD HH:mm:ss")})}},{title:i.formatMessage({id:"common.table.operation"}),key:"operation",dataIndex:"operation",span:3,render:function(e,n){return(0,ne.jsx)(Pe.Z,{items:c,onSelect:function(e,r){return t(e,n,r)}})}}])}),[i,n,t,c,s])},De=n(15303),Oe=function(e){var t=e.action,n=e.registerController,r=e.onOk,a=t.useCreate();(0,_.useEffect)((function(){n(t.key,a)}),[t.key,a,n]);var o=t.form;return(0,ne.jsx)(o,{open:a.openModalStatus.open,apiKey:a.openModalStatus.currentData,onClose:a.closeModal,onOk:r})},Re=function(){var e=!!(0,g.useAccess)().canSeeOrgAdmin,t=(0,m.Z)({key:f.ue.APIKeys,fetchAPI:E.Yh,deleteAPI:E.dI,contentForDelete:"apikeys.table.apikeys",defaultQueryParams:{user_id:e?"*":void 0}}),n=t.TABLE_SORT_DIRECTIONS,r=t.dataSource,a=t.rowSelection,i=t.queryParams,c=t.sortOrder,l=t.modalRef,h=t.handleDelete,x=t.handleDeleteBatch,C=t.fetchData,P=t.handlePageChange,I=t.handleTableChange,q=t.handleQueryChange,D=t.handleSearch,O=t.handleNameChange,R=v({getLabel:function(e){return e.username},getValue:function(e){return e.id}}),N=R.dataList,A=R.fetchData,z=R.cancelRequest,F=(0,g.useIntl)(),L=(0,_.useMemo)((function(){return null!==(e=null===(t=(0,De.DA)())||void 0===t||null===(t=t.apiKeys)||void 0===t?void 0:t.configActions)&&void 0!==e?e:[];var e,t}),[]),$=(0,_.useRef)({}),G=(0,_.useCallback)((function(e,t){$.current[e]=t}),[]),B=(0,_.useState)({open:!1,action:p.Kd.CREATE,title:"",currentData:null}),W=d()(B,2),H=W[0],K=W[1];(0,_.useEffect)((function(){return A({page:-1,scope:"current_org"}),function(){z()}}),[]);var V=function(){K({open:!0,title:F.formatMessage({id:"apikeys.button.create"}),action:p.Kd.CREATE,currentData:null})},Y=function(e){K({open:!0,title:F.formatMessage({id:"apikeys.button.edit"}),action:p.Kd.EDIT,currentData:e})},U=function(){var e=u()(s()().mark((function e(){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),J=(0,j.Z)(function(){var e=u()(s()().mark((function e(t,n,r){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==r||!r.onClick){e.next=3;break}return r.onClick(n),e.abrupt("return");case 3:"delete"===t?h(n):"edit"===t&&Y(n);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),Q=(0,j.Z)((function(e,t){var n;null===(n=$.current[e])||void 0===n||n.openModal(t)})),X=qe({handleSelect:J,sortOrder:c,showCreator:e,configActions:L,onConfigAction:Q});return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsxs)(S.ZP,{children:[(0,ne.jsx)(k.f8,{showSelect:e,selectOptions:N,select:{showSearch:{optionFilterProp:"label"}},selectHolder:F.formatMessage({id:"common.filter.byCreator"}),buttonText:F.formatMessage({id:"apikeys.button.create"}),handleSearch:D,handleDeleteByBatch:x,handleClickPrimary:V,handleSelectChange:function(e){q({user_id:e||"*"})},handleInputChange:O,rowSelection:a,widths:{input:300}}),(0,ne.jsx)(Z.ZP,{renderEmpty:function(e){if("Table"===e)return(0,ne.jsx)(y.Z,{minHeight:"calc(100vh - 300px)",loading:r.loading,loadend:r.loadend,dataSource:r.dataList,image:(0,ne.jsx)(b.Z,{type:"icon-key"}),filters:o()(o()({},M().omit(i,["sort_by"])),{},{user_id:"*"===i.user_id?void 0:i.user_id}),noFoundText:F.formatMessage({id:"noresult.keys.nofound"}),title:F.formatMessage({id:"noresult.keys.title"}),subTitle:F.formatMessage({id:"noresult.keys.subTitle"}),onClick:V,buttonText:F.formatMessage({id:"noresult.button.add"})})},children:(0,ne.jsx)(T.Z,{className:"scroll-table",columns:X,dataSource:r.dataList,rowSelection:a,loading:{spinning:r.loading,size:"middle"},sortDirections:n,showSorterTooltip:!1,rowKey:"id",onChange:I,pagination:{size:"middle",showSizeChanger:!0,pageSize:i.perPage,current:i.page,total:r.total,hideOnSinglePage:10===i.perPage,onChange:P}})})]}),(0,ne.jsx)(ke,{open:H.open,action:H.action,title:H.title,currentData:H.currentData,onCancel:function(){K({open:!1,title:"",action:p.Kd.CREATE,currentData:null})},onOk:U}),(0,ne.jsx)(w.Z,{ref:l}),L.map((function(e){return(0,ne.jsx)(Oe,{action:e,registerController:G,onOk:C},e.key)}))]})}},64494:function(e,t,n){"use strict";n.d(t,{$s:function(){return D},BP:function(){return C},EJ:function(){return Ce},Kj:function(){return ee},NY:function(){return I},PP:function(){return A},PS:function(){return v},PU:function(){return Q},Pe:function(){return ce},Pf:function(){return ge},Pi:function(){return E},QB:function(){return R},Tt:function(){return be},U$:function(){return me},Y3:function(){return U},YZ:function(){return ie},Yx:function(){return k},Z$:function(){return $},aV:function(){return ne},dA:function(){return ve},fZ:function(){return ae},gi:function(){return H},hs:function(){return F},jb:function(){return Ze},kS:function(){return we},nb:function(){return _},qX:function(){return pe},vx:function(){return le},w0:function(){return B},xc:function(){return x}});var r=n(15558),a=n.n(r),o=n(26068),i=n.n(o),s=n(90228),c=n.n(s),u=n(87999),l=n.n(u),d=n(75487),p=n.n(d),f=n(59050),m=n(78451),h=n(17304),g=n(59530),x="/models",v="/model-instances",y="/model-evaluations",b="/inference-backends/list",k="/my-models",w="/draft-models",j="/model-sets",Z="/models/adapters",T=function(e){return"/proxy?url=".concat(encodeURIComponent(e))};function C(e,t){return M.apply(this,arguments)}function M(){return(M=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)(v,{params:t,method:"GET",cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return S.apply(this,arguments)}function S(){return(S=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x,"?").concat(h.Z.stringify(t)),i()({method:"GET"},n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return P.apply(this,arguments)}function P(){return(P=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/gpu-devices",{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return q.apply(this,arguments)}function q(){return(q=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return O.apply(this,arguments)}function O(){return(O=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return N.apply(this,arguments)}function N(){return(N=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x,"/").concat(t.id),{method:"PUT",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return z.apply(this,arguments)}function z(){return(z=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(Z),{params:t,cancelToken:null==n?void 0:n.token,method:"GET"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return L.apply(this,arguments)}function L(){return(L=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x,"/").concat(t.id,"/instances"),{method:"GET",params:t,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return G.apply(this,arguments)}function G(){return(G=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(v,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return W.apply(this,arguments)}function W(){return(W=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(v,"/").concat(t,"/log-options"),{method:"GET"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return K.apply(this,arguments)}function K(){return(K=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(v,"/").concat(t,"/logs/download"),{method:"GET",responseType:"blob",getResponse:!0,skipErrorHandler:!0,signal:null==n?void 0:n.signal,onDownloadProgress:null==n?void 0:n.onDownloadProgress}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V="https://www.modelscope.cn/api/v1/dolphin/models",Y="https://modelscope.cn/api/v1/models/";function U(e,t){return J.apply(this,arguments)}function J(){return(J=l()(c()().mark((function e(t,n){var r;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://huggingface.co/api/models/".concat(t.repo),e.abrupt("return",(0,m.request)(T(r),{method:"GET",cancelToken:null==n?void 0:n.token}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t){return X.apply(this,arguments)}function X(){return(X=l()(c()().mark((function e(t,n){var r,o,s,u,l,d;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(r=t.tags)||void 0===r?void 0:r.map((function(e){return{category:"tags",predicate:"contains",values:[e]}})),u=null===(o=t.tasks)||void 0===o?void 0:o.map((function(e){return{category:"tasks",predicate:"contains",values:[e]}})),l=null!=s&&s.length||null!=u&&u.length?{Criterion:[].concat(a()(s||[]),a()(u||[]))}:{},e.next=5,fetch(T("".concat(V)),{method:"PUT",signal:null==n?void 0:n.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(i()(i()(i()({PageSize:10,PageNumber:1},t),l),{},{Name:"".concat(t.Name)}))});case 5:if((d=e.sent).ok){e.next=8;break}throw new Error("Network response was not ok");case 8:return e.abrupt("return",d.json());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)(T("".concat(Y).concat(t.name)),{method:"GET",cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=l()(c()().mark((function e(t,n){var r,a;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(Y).concat(t.name,"/repo/files?").concat(h.Z.stringify({Revision:t.revision,Recursive:!0,Root:""})),e.next=3,fetch(T(r),{method:"GET",signal:null==n?void 0:n.signal,body:null});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return oe=l()(c()().mark((function e(t,n){var r,a,o,s,u,l,d;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=!1,o=!1,e.prev=4,u=p()((0,f.h1)(i()(i()(i()({},t),n),{},{limit:t.limit||500,additionalFields:["sha","tags"],fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,r){var a=t.search.sort?"".concat(e,"&sort=").concat(t.search.sort):e;try{return fetch(T(a),i()(i()({},r),{},{signal:n.signal}))}catch(e){return[]}}))})));case 6:return e.next=8,u.next();case 8:if(!(a=!(l=e.sent).done)){e.next=14;break}d=l.value,r.push(d);case 11:a=!1,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),o=!0,s=e.t0;case 20:if(e.prev=20,e.prev=21,!a||null==u.return){e.next=25;break}return e.next=25,u.return();case 25:if(e.prev=25,!o){e.next=28;break}throw s;case 28:return e.finish(25);case 29:return e.finish(20);case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}}),e,null,[[4,16,20,30],[21,,25,29]])}))),oe.apply(this,arguments)}function ie(e,t){return se.apply(this,arguments)}function se(){return se=l()(c()().mark((function e(t,n){var r,a,o,s,u,l,d;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=!1,o=!1,e.prev=3,u=p()((0,f.C7)(i()(i()({},t),{},{recursive:!0,fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){try{return fetch(T(e),i()(i()({},t),{},{signal:null==n?void 0:n.signal}))}catch(e){return[]}}))})));case 5:return e.next=7,u.next();case 7:if(!(a=!(l=e.sent).done)){e.next=13;break}d=l.value,r.push(d);case 10:a=!1,e.next=5;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),o=!0,s=e.t0;case 19:if(e.prev=19,e.prev=20,!a||null==u.return){e.next=24;break}return e.next=24,u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(19);case 29:return e.abrupt("return",r);case 30:case"end":return e.stop()}}),e,null,[[3,15,19,29],[20,,24,28]])}))),se.apply(this,arguments)}function ce(e,t){return ue.apply(this,arguments)}function ue(){return ue=l()(c()().mark((function e(t,n){var r,a,o,s,u;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.repo,o=t.revision,s=t.path,e.next=3,(0,f.Sv)({repo:a,revision:o,path:s,fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){return fetch(T(e),i()(i()({},t),{},{signal:null==n?void 0:n.signal}))}))});case 3:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===r;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=r.text();case 12:return e.next=14,e.t2;case 14:return u=e.sent,e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function le(e,t){return de.apply(this,arguments)}function de(){return(de=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(j),{method:"GET",params:t,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e,t){return fe.apply(this,arguments)}function fe(){return(fe=l()(c()().mark((function e(t,n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(j,"/").concat(t.id,"/specs"),i()(i()({method:"GET"},n),{},{params:t})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t){return he.apply(this,arguments)}function he(){return(he=l()(c()().mark((function e(t,n){var r,a;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.request)("".concat(y),{method:"POST",data:t,cancelToken:null==n?void 0:n.token});case 2:return r=e.sent,a=(null==r?void 0:r.results)||[],e.abrupt("return",{results:a.map((function(e){var n;return i()(i()({},e),{},{cluster_id:(null===(n=t.model_specs)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.cluster_id)||void 0})}))});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){return xe.apply(this,arguments)}function xe(){return(xe=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)(b,{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return ye.apply(this,arguments)}function ye(){return(ye=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(g.IT,"/").concat(t,"/access"),{method:"GET"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){return ke.apply(this,arguments)}function ke(){return(ke=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(g.IT,"/").concat(t.id,"/access"),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e){return je.apply(this,arguments)}function je(){return(je=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(k,"?").concat(h.Z.stringify(t)),{method:"GET"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e){return Te.apply(this,arguments)}function Te(){return(Te=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)(w,{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e){return Me.apply(this,arguments)}function Me(){return(Me=l()(c()().mark((function e(t){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("".concat(x,"/context-length"),{method:"POST",data:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},59530:function(e,t,n){"use strict";n.d(t,{Dv:function(){return l},Fv:function(){return b},IT:function(){return c},ck:function(){return u},iQ:function(){return w},nb:function(){return g},o1:function(){return p},qw:function(){return v},sW:function(){return m}});var r=n(90228),a=n.n(r),o=n(87999),i=n.n(o),s=n(78451),c="/model-routes",u="/model-route-targets";function l(e,t){return d.apply(this,arguments)}function d(){return(d=i()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)(c,{params:t,method:"GET",cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t.id),{method:"PUT",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=i()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(u),{method:"GET",params:{route_id:t.id,page:-1},cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return k.apply(this,arguments)}function k(){return(k=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(u,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return j.apply(this,arguments)}function j(){return(j=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(u,"/").concat(t.id,"/set-fallback"),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},95929:function(e,t,n){"use strict";n.d(t,{Nq:function(){return g},OL:function(){return b},YX:function(){return l},h8:function(){return v},ns:function(){return p},r4:function(){return m}});var r=n(90228),a=n.n(r),o=n(87999),i=n.n(o),s=n(78451),c="/users",u="/user-directory";function l(e){return d.apply(this,arguments)}function d(){return(d=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c),{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)(u,{method:"GET",params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c),{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t.data.id),{method:"PUT",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return k.apply(this,arguments)}function k(){return(k=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(c,"/").concat(t.id,"/activation"),{method:"PATCH",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},10068:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(75271),a=n(15303),o=function(e){var t=function(e){var t,n=null===(t=(0,a.DA)())||void 0===t?void 0:t.listExtraColumns;return null==n?void 0:n[e]}(e),n="function"==typeof t?t():null,o=(0,r.useRef)(null),i=(0,r.useMemo)((function(){if(!n)return null;var e=o.current;return e&&e.length===n.length&&e.every((function(e,t){return e===n[t]}))?e:(o.current=n,n)}),[n]);return(0,r.useMemo)((function(){return t?"function"==typeof t?null!=i?i:[]:t:[]}),[t,i])}},64658:function(e,t,n){"use strict";var r=n(74964);t.Z=void 0;r(n(28413));var a=n(75271),o=n(7674),i=r(n(39132));t.Z=function(e){i.default&&(0,o.isFunction)(e);var t=(0,a.useRef)(e);t.current=(0,a.useMemo)((function(){return e}),[e]);var n=(0,a.useRef)(void 0);return n.current||(n.current=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.current.apply(this,e)}),n.current}},7674:function(e,t,n){"use strict";var r=n(74964);Object.defineProperty(t,"__esModule",{value:!0}),t.isUndef=t.isString=t.isObject=t.isNumber=t.isFunction=t.isBoolean=void 0;var a=r(n(28413));t.isObject=function(e){return null!==e&&"object"===(0,a.default)(e)},t.isFunction=function(e){return"function"==typeof e},t.isString=function(e){return"string"==typeof e},t.isBoolean=function(e){return"boolean"==typeof e},t.isNumber=function(e){return"number"==typeof e},t.isUndef=function(e){return void 0===e}},39132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=!1},28413:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6556:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(36304),a=(n(75271),n(52676)),o=n(58230),i=n(76756),s=n(18216),c=n(79112),u=n(61884),l=n(82187),d=n(56965),p=(0,u.kc)((({token:e,css:t})=>({alertBlockInfo:t`
      padding-block: 6px;
      padding-inline: 10px 16px;
      position: relative;
      padding-left: 32px;
      text-align: left;
      border-radius: ${e.borderRadiusLG}px;
      margin: 0;
      border: 1px solid transparent;
      .ant-typography {
        margin-bottom: 0;
      }

      &.danger {
        border-color: ${e.colorErrorBorder};
        background-color: ${e.colorErrorBg};
      }

      &.warning {
        border-color: ${e.colorWarningBorder};
        background-color: ${e.colorWarningBg};
      }

      &.transition {
        color: ${e.geekblue7};
        background: ${e.geekblue1};
        border-color: ${e.geekblue3};
      }

      &.success {
        border: 1px solid ${e.colorSuccess};
        color: ${e.colorSuccessText};
        background: ${e.colorSuccessBg};

        .content.success {
          font-weight: var(--font-weight-normal);
        }
      }
      .title {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        height: 32px;
        padding: 5px 10px;
        border-radius: ${e.borderRadius}px ${e.borderRadius}px 0 0;

        .info-icon {
          &.danger {
            color: ${e.colorErrorText};
          }

          &.warning {
            color: ${e.colorWarningText};
          }

          &.transition {
            color: ${e.geekblue7};
          }

          &.success {
            color: ${e.colorSuccessText};
          }
        }

        .text {
          font-weight: var(--font-weight-semibold);
        }
      }
    `}))),f=d.ZP.div`
  font-weight: 600;
  color: var(--ant-color-text);
`,m=d.ZP.div`
  word-break: break-word;
  color: ${e=>e.$hasTitle?"var(--ant-color-text-secondary)":"var(--ant-color-text)"};
  white-space: pre-line;
`,h=e=>{let{message:t,type:n,rows:u=1,ellipsis:d,style:h,title:g,contentStyle:x,icon:v,maxHeight:y=86,overlayScrollerProps:b={}}=e,{styles:k}=p();return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)("div",{className:l(k.alertBlockInfo,n),style:{...h},children:(0,a.jsxs)(o.default.Paragraph,{ellipsis:d??{rows:u,tooltip:t},children:[(0,a.jsx)("div",{className:l("title",n),children:(0,a.jsx)("span",{className:l("info-icon",n),children:v??(0,a.jsx)("transition"===n?i.Z:"success"===n?s.Z:c.Z,{})})}),g&&(0,a.jsx)(f,{className:"title-text",children:g}),(0,a.jsx)(r.Z,{maxHeight:y,style:{...x},...b,children:(0,a.jsx)(m,{$hasTitle:!!g,className:l("content",n),children:t})})]})}):null})}},67988:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(39930),a=n(250),o=n(75271),i=n(52676),s=n(36685),c=n(14792),u=n(59362),l=n(18216),d=n(26669),p=({children:e,tips:t,text:n,type:p="text",shape:f="default",fontSize:m="14px",style:h,btnStyle:g,placement:x,size:v="small"})=>{let y=(0,r.Z)(),[b,k]=(0,o.useState)(!1),w=(0,o.useRef)(),j=(0,o.useMemo)((()=>b?y.formatMessage({id:"common.button.copied"}):t??y.formatMessage({id:"common.button.copy"})),[b,t,y]);return(0,o.useEffect)((()=>(window.clearTimeout(w.current),w.current=window.setTimeout((()=>{k(!1)}),3e3),()=>{window.clearTimeout(w.current)})),[b]),(0,i.jsxs)("div",{className:"flex-center gap-4",style:{minWidth:16},children:[e&&(0,i.jsx)(a.Z,{minWidth:20,ghost:!0,children:e}),(0,i.jsx)(c.Z,{title:j,placement:x,children:(0,i.jsx)("span",{children:(0,i.jsx)(u.ZP,{className:"copy-button",type:p,shape:f,size:v,onClick:async()=>{await(async e=>{if(!navigator.clipboard?.writeText||"boolean"==typeof window.isSecureContext&&!window.isSecureContext)return!1;try{return document.hasFocus()||window.focus(),await navigator.clipboard.writeText(e),!0}catch{return!1}})(n)||(e=>{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:none;outline:none;box-shadow:none;background:transparent;opacity:0;pointer-events:none;",t.style.fontSize="12pt";let n=document.getSelection(),r=(n&&n.rangeCount>0&&n.getRangeAt(0),document.activeElement);document.body.appendChild(t);let a=!1;try{let o=document.createRange();o.selectNodeContents(t),n?.removeAllRanges(),n?.addRange(o),t.setSelectionRange(0,e.length),t.focus(),a=document.execCommand("copy")}catch{a=!1}finally{document.body.removeChild(t);try{n&&(n.removeAllRanges(),o&&n.addRange(o)),r?.focus?.()}catch{}}return a})(n)?k(!0):s.ZP.error(y.formatMessage({id:"common.copy.fail"}))},style:{...g},"aria-label":j,icon:b?(0,i.jsx)(l.Z,{style:{color:"var(--ant-color-success)",fontSize:m}}):(0,i.jsx)(d.Z,{style:{fontSize:m,...h}})})})})]})}},2538:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(39930),a=n(73349),o=n(75271),i=n(52676),s=n(89334),c=n(36685),u=n(26578),l=n(94232),d=n(59362),p=n(83443),f=n(21379),m=n(52745),h=(0,n(61884).kc)((({css:e})=>({"delete-modal-content":e`
    display: flex;
    font-size: var(--font-size-base);
    /* The semantic warning colour, NOT --color-status-warning-text.
       That step is solved for 12px TEXT sitting on the warning TINT; this is a
       28px filled GRAPHIC on the modal's own surface, so the step was tuned for
       neither the size, the role, nor the background — it rendered a muddy
       #ad4e00 at 5.43:1 where a warning glyph wants to be vivid.
       It also disagreed with the rest of this very component, which already
       themes its buttons from token.colorWarning.
       3:1 does not bind here: the icon sits beside a title that states the
       action in words, so it reinforces rather than carries. Same call as
       StatusDot. */
    .anticon {
      font-size: 28px;
      margin-right: 12px;
      color: var(--ant-color-warning);
    }
    .title {
      display: flex;
      align-items: center;
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-large);
    }
  `,content:e`
    padding-top: 20px;
    color: var(--ant-color-text-secondary);
    white-space: pre-line;
    word-break: normal;
    overflow-wrap: break-word;
    hyphens: auto;
    > span {
      color: var(--ant-color-text);
      display: flex;
      margin-top: 16px;
      background-color: var(--ant-color-fill-tertiary);
      padding: 8px 12px;
      border-radius: var(--ant-border-radius);
    }
  `,checkboxWrapper:e`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .check-text {
      font-weight: 500;
      width: 100%;
    }
  `}))),g=(0,o.forwardRef)(((e,t)=>{let n=(0,r.Z)(),{styles:g}=h(),{token:x}=s.default.useToken(),{saveScrollHeight:v,restoreScrollHeight:y}=(0,a.Z)(),[b,k]=(0,o.useState)(!1),[w,j]=(0,o.useState)({checked:!1}),[Z,T]=(0,o.useState)(!1),[C,M]=(0,o.useState)({}),_=e=>{v(),M(e),j({checked:e.checkConfig?.defautlChecked||!1}),k(!0)},S=()=>{k(!1),y()},E=()=>{k(!1),C.onCancel?.(),y()},P=async()=>{try{T(!0);let e=await(C.onOk?.());Array.isArray(e)?e.every((e=>"fulfilled"===e?.status))&&c.ZP.success(n.formatMessage({id:"common.message.success"})):c.ZP.success(n.formatMessage({id:"common.message.success"}))}catch{}finally{k(!1),T(!1),y()}};return(0,o.useImperativeHandle)(t,(()=>({show:_,hide:S,configuration:w}))),(0,i.jsxs)(u.Z,{style:{top:"20%"},open:b,onOk:P,onCancel:E,destroyOnHidden:!1,closeIcon:!1,mask:{closable:!1},keyboard:!1,width:460,styles:{container:{borderRadius:"var(--border-radius-modal)"},footer:{marginTop:"20px"}},footer:(0,i.jsxs)(l.Z,{size:20,children:[!1!==C.showCancel&&(0,i.jsx)(d.ZP,{size:"middle",...C.cancelButtonProps,onClick:E,children:C.cancelText?n.formatMessage({id:C.cancelText}):n.formatMessage({id:"common.button.cancel"})}),!1!==C.showOk&&(0,i.jsx)(d.ZP,{type:"primary",size:"middle",danger:!0,...C.okButtonProps,onClick:P,loading:Z,children:C.okText?n.formatMessage({id:C.okText}):n.formatMessage({id:"common.button.delete"})})]}),children:[(0,i.jsx)("div",{className:g["delete-modal-content"],children:(0,i.jsxs)("span",{className:"title",children:[(0,i.jsx)(m.Z,{}),(0,i.jsx)("span",{children:C.title?n.formatMessage({id:C.title}):n.formatMessage({id:"common.title.delete.confirm"})})]})}),(0,i.jsx)("div",{className:g.content,dangerouslySetInnerHTML:{__html:C.content?n.formatMessage({id:C.operation||""},{type:n.formatMessage({id:C.content}),name:C.name}):""}}),C.checkConfig&&(0,i.jsx)("div",{className:g.checkboxWrapper,children:(0,i.jsx)(p.ZP,{theme:{components:{Checkbox:{colorPrimary:x.colorWarning,colorPrimaryHover:x.colorWarningHover,colorPrimaryBorder:x.colorWarningBorder,colorWhite:x.colorText}}},children:(0,i.jsx)(f.Z,{checked:w.checked,onChange:e=>j({checked:e.target.checked}),children:(0,i.jsx)("span",{className:"check-text",children:n.formatMessage({id:C.checkConfig?.checkText})})})})}),C.tips&&(0,i.jsx)("div",{className:g.checkboxWrapper,children:(0,i.jsx)("span",{className:"check-text",children:C.tips})})]})}))},29284:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(39930),a=n(9733),o={middle:"index-module__middle___pMpZ3"},i=n(81764),s=(n(75271),n(52676)),c=n(14792),u=n(59362),l=n(94232),d=n(35835),p=n(61583),f=({items:e,size:t="middle",trigger:n=["hover"],showText:f,disabled:m,variant:h,color:g,extra:x,onSelect:v})=>{let y=(0,r.Z)(),b=(0,a.Z)(),k=i.filter(e,(e=>!e?.access||b?.[e.access])),w=i.head(k),j=e=>{let t=i.head(k);v(t.key,t)},Z=e=>e?.locale||void 0===e?.locale?y.formatMessage({id:e?.label}):e?.label;if(!k?.length)return(0,s.jsx)("span",{});let T=Z(w),C="string"==typeof T?T:void 0;return(0,s.jsx)(s.Fragment,{children:1===k?.length?(0,s.jsx)(c.Z,{title:T,children:(0,s.jsx)(u.ZP,{className:o[t],icon:w.icon,size:t,...w.props,onClick:j,"aria-label":C})}):(0,s.jsxs)(l.Z.Compact,{children:[(0,s.jsx)(s.Fragment,{children:f?(0,s.jsxs)(u.ZP,{...w.props,disabled:w.disabled||m,className:o[t],onClick:j,size:t,icon:w.icon,variant:h,color:g,children:[T,x]}):(0,s.jsx)(c.Z,{title:T,children:(0,s.jsx)(u.ZP,{...w.props,className:o[t],onClick:j,size:t,icon:w.icon,disabled:w.disabled,"aria-label":C})},"leftButton")}),(0,s.jsx)(d.Z,{disabled:m,trigger:n,placement:"bottomRight",styles:{root:{minWidth:160},itemIcon:{fontSize:14}},menu:{onClick:e=>{let t=i.find(k,{key:e.key});v(e.key,t)},items:i.tail(k).map((e=>({...i.omit(e,["label","locale","onClick"]),...e.props,label:Z(e)})))},children:(0,s.jsx)(u.ZP,{icon:(0,s.jsx)(p.Z,{}),size:t,variant:h,color:"default","aria-label":y.formatMessage({id:"common.button.more"}),className:o[t]},"menu")})]})})}},49799:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(39930),a=n(63922),o=n(843),i=n(33819),s=n(57998),c=n(17465),u=n(81764),l=n(75271),d=n(52676),p=n(68195),f=e=>{let{label:t,placeholder:n,children:f,required:m,description:h,options:g,allowNull:x,isInFormItems:v=!0,notFoundContent:y=null,loading:b,footer:k,alwaysFocus:w=!1,styles:j,...Z}=e,T=(0,r.Z)(),[C,M]=(0,l.useState)(!1),_=(0,l.useRef)(null),S="",E=p.Z?.Item?.useStatus?.();S=e.status||(v?E?.status:"")||"";let P=(0,l.useMemo)((()=>g?.length?(0,u.cloneDeep)(g).map((e=>(e.locale&&(e.label=T.formatMessage({id:e.label})),e))):[]),[g,T]);(0,l.useEffect)((()=>{((0,a.JL)(e.value)||x&&(null===e.value||void 0===e.value))&&M(!0)}),[e.value,x]);return(0,d.jsx)(s.Z,{children:(0,d.jsx)(i.Z,{className:"seal-select-wrapper",status:S,label:t,isFocus:w||C,required:m,description:h,disabled:e.disabled,onClick:()=>{!e.disabled&&!C&&(_.current?.focus?.(),M(!0))},children:(0,d.jsx)(c.Z,{...Z,styles:j,placeholder:n,footer:k,ref:_,options:f?void 0:P,onFocus:t=>{M(!0),e.onFocus?.(t)},onBlur:t=>{x&&null===e.value?M(!0):e.value||M(!1),e.onBlur?.(t)},onChange:(t,n)=>{(0,a.JL)(t)||x&&null===t?M(!0):M(!1),e.onChange?.(t||null,n)},notFoundContent:(0,d.jsx)(o.Z,{loading:b,notFoundContent:y}),children:f})})})}},57998:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=n(56965).ZP.div`
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
`},88015:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(88061),a=(n(75271),n(52676)),o=n(74330),i=n(61884),s=n(82187),c=(0,i.kc)((({css:e})=>({themeTag:e`
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
    `}))),u=({opacity:e,style:t,children:n,ghost:i,className:u,...l})=>{let{config:d}=(0,r.Z)(),{isDarkTheme:p}=d,{styles:f}=c();return(0,a.jsx)(o.Z,{variant:"outlined",style:{...t,opacity:p?1:e},...l,className:s(f.themeTag,u,{"tag-ghost":i}),children:n})};u.displayName="ThemeTag"},80562:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(75271);var r=n(52676),a=(0,n(61884).kc)((({css:e})=>({attr:e`
    display: inline-flex;
    align-items: center;
    padding: 1px 7px;
    border-radius: 12px;
    color: var(--ant-color-text-tertiary);
    font-size: 11px;
    line-height: 18px;
    white-space: nowrap;
  `,filled:e`
    background-color: var(--ant-color-fill-tertiary);
  `,outlined:e`
    border: 1px solid var(--ant-color-border-secondary);
  `}))),o=({children:e,variant:t="outlined",className:n,style:o})=>{let{styles:i,cx:s}=a();return(0,r.jsx)("span",{className:s(i.attr,i[t],n),style:o,children:e})}},22563:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(39930),a=n(36685),o=()=>{let e=(0,r.Z)(),[t,n]=a.ZP.useMessage();return{getRuleMessage:(t,n,r=!0)=>{let a=r?e.formatMessage({id:n}):n,o=Array.isArray(t)?t:[t];return o.includes("select")&&o.includes("input")?e.formatMessage({id:"common.form.rule.selectInput"},{name:a}):o.includes("input")?e.formatMessage({id:"common.form.rule.input"},{name:a}):e.formatMessage({id:"common.form.rule.select"},{name:a})},showSuccess:n=>{t.success(n||e.formatMessage({id:"common.message.success"}))}}}},5174:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(75271),a=n(7056);function o(){let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1),o=(0,a.Z)((()=>{t(!1),n.current=!1}));return{loading:e,guard:(0,a.Z)((e=>{n.current||(n.current=!0,e())})),run:(0,a.Z)((async e=>{t(!0);try{await e()}finally{o()}})),release:o}}}}]);