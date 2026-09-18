"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2193],{32814:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(75271),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},a=n(93102);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}const s=(e,t)=>l.createElement(a.Z,o({},e,{ref:t,icon:r}));var i=l.forwardRef(s)},90240:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(58152),r=n(83486),a=n(75271),o=n(52676),s=n(56965),i=s.ZP.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
`,c=s.ZP.div`
  flex: 1;
  position: relative;
  overflow-y: auto;
`,u=s.ZP.div`
  padding-block: 0;
  background-color: var(--ant-color-bg-elevated);
`,d=({children:e,footer:t,maxHeight:n,styles:s={}})=>{let d=a.useRef(null),p=a.useRef(null),m=a.useRef(null),{initialize:f,instance:h,scrollEventElement:x,scrollToBottom:g,scrollToTarget:y,getScrollElementScrollableHeight:C}=(0,l.Z)({options:{scrollbars:{autoHide:"move"}}});a.useEffect((()=>{d.current&&f(d.current)}),[]);let b=(0,a.useCallback)((e=>{m.current.style.paddingBottom=`${e}px`}),[]);return(0,o.jsx)(r.C.Provider,{value:{scroller:d,osInstance:h,scrollEventElement:x,getScrollElementScrollableHeight:C,scrollToBottom:g,scrollToTarget:y,setSScrollContentPaddingBottom:b},children:(0,o.jsxs)(i,{style:{height:n||"100%",...s.wrapper},children:[(0,o.jsx)(c,{ref:d,style:{padding:"16px 24px",...s.container},children:(0,o.jsx)("div",{ref:m,children:e})}),t&&(0,o.jsx)(u,{ref:p,children:t})]})})}},83486:function(e,t,n){n.d(t,{C:function(){return r},f:function(){return a}});var l=n(75271),r=(0,l.createContext)({}),a=()=>{let e=(0,l.useContext)(r);if(!e)throw Error("useColumnWrapperContext must be used within a WrapperProvider");return e}},85983:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(33819),r=n(41054),a=n(36546),o=n(75271),s=n(52676),i=n(68195),c=n(46498),u=n(78794),d={TextArea:n(27784).Z,Input:e=>{let{label:t,placeholder:n,required:a,description:u,isInFormItems:d=!0,variant:p,addAfter:m,checkStatus:f,trim:h=!0,loading:x,labelExtra:g,style:y,alwaysFocus:C=!1,...b}=e,[v,j]=(0,o.useState)(!1),Z=C||v,E=(0,o.useRef)(null),S="",w=i.Z?.Item?.useStatus?.();S=e.status||(d?w?.status:"")||"",(0,o.useEffect)((()=>{e.value&&j(!0)}),[e.value]);return(0,s.jsx)(r.Z,{style:y,children:(0,s.jsx)(l.Z,{status:f||S,label:t,labelExtra:g,isFocus:Z,required:a,description:u,disabled:e.disabled,addAfter:m,hasPrefix:!!e.prefix,onClick:()=>{!e.disabled&&!v&&(E.current?.focus?.({cursor:"end"}),j(!0))},children:(0,s.jsx)(c.Z,{...b,autoComplete:b.autoComplete||"off",placeholder:Z||!t?n:"",ref:E,onInput:t=>{e.onInput?.(t)},onFocus:t=>{j(!0),e.onFocus?.(t)},onBlur:t=>{E.current?.input?.value||j(!1),h||(t.target.value=t.target.value?.trim?.(),e.onChange?.(t)),e.onBlur?.(t)},onChange:t=>{h&&(t.target.value=t.target.value?.trim?.()),e.onChange?.(t)}})})})},Password:u.Z,Number:a.Z,Search:e=>{let{label:t,placeholder:n,required:a,description:u,isInFormItems:d=!0,alwaysFocus:p=!1,...m}=e,[f,h]=(0,o.useState)(!1),x=(0,o.useRef)(null),g="",y=i.Z?.Item?.useStatus?.();g=e.status||(d?y?.status:"")||"",(0,o.useEffect)((()=>{e.value&&h(!0)}),[e.value]);return(0,s.jsx)(r.Z,{children:(0,s.jsx)(l.Z,{status:g,label:t,isFocus:p||f,required:a,description:u,disabled:e.disabled,onClick:()=>{!e.disabled&&!f&&(x.current?.focus?.(),h(!0))},children:(0,s.jsx)(c.Z.Search,{...m,ref:x,autoComplete:"off",onFocus:t=>{h(!0),e.onFocus?.(t)},onBlur:t=>{x.current?.input?.value||(h(!1),e.onBlur?.(t))},onSearch:(...t)=>{e.onSearch?.(...t)},onChange:t=>{e.onChange?.(t)}})})})}}},78794:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(33819),r=n(41054),a=n(75271),o=n(52676),s=n(68195),i=n(46498),c=e=>{let{label:t,placeholder:n,required:c,description:u,isInFormItems:d=!0,alwaysFocus:p=!1,...m}=e,[f,h]=(0,a.useState)(!1),x=(0,a.useRef)(null),g="",y=s.Z?.Item?.useStatus?.();g=e.status||(d?y?.status:"")||"",(0,a.useEffect)((()=>{e.value&&h(!0)}),[e.value]);return(0,o.jsx)(r.Z,{children:(0,o.jsx)(l.Z,{status:g,label:t,isFocus:p||f,required:c,description:u,disabled:e.disabled,labelExtra:e.labelExtra,hasPrefix:!!e.prefix,onClick:()=>{!e.disabled&&!f&&(x.current?.focus?.({cursor:"all"}),h(!0))},children:(0,o.jsx)(i.Z.Password,{...m,autoComplete:m.autoComplete||"new-password",ref:x,className:"seal-input-password",onFocus:t=>{h(!0),e.onFocus?.(t)},onBlur:t=>{t.target.value=t.target.value?.trim?.(),x.current?.input?.value||h(!1),e.onBlur?.(t)},onChange:t=>{t.target.value=t.target.value?.trim?.(),e.onChange?.(t)}})})})}},27784:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(33819),r=n(41054),a=n(75271),o=n(52676),s=n(68195),i=n(46498),c=n(56965).ZP.div.attrs({className:"seal-textarea-label"})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 2px;
  background-color: var(--ant-color-bg-container);
`,u=e=>{let{label:t,placeholder:n,onChange:u,onFocus:d,onBlur:p,onInput:m,style:f,required:h,isInFormItems:x=!0,description:g,variant:y,extra:C,addAfter:b,trim:v,scaleSize:j,alwaysFocus:Z,...E}=e,[S,w]=(0,a.useState)(!1),k=(0,a.useRef)(null),M="",T=s.Z?.Item?.useStatus?.();M=e.status||(x?T?.status:"")||"",(0,a.useEffect)((()=>{e.value&&w(!0)}),[e.value]);let P=(0,a.useMemo)((()=>{let t=e.autoSize||{minRows:2,maxRows:5};return j?S?t:{minRows:1,maxRows:1}:t}),[e.autoSize,S,j]);return(0,o.jsx)(r.Z,{className:"textarea-input-wrapper",children:(0,o.jsx)(l.Z,{status:M,label:t&&(0,o.jsx)(c,{children:t}),isFocus:Z||S,required:h,description:g,className:"seal-textarea-wrapper",extra:C,disabled:e.disabled,addAfter:b,onClick:()=>{!e.disabled&&!S&&(k.current?.focus?.({cursor:"all"}),w(!0))},children:(0,o.jsx)(i.Z.TextArea,{...E,placeholder:n,spellCheck:E.spellCheck??!1,autoSize:P,ref:k,style:{...f},className:"seal-textarea",onFocus:e=>{w(!0),d?.(e)},onBlur:e=>{k.current?.resizableTextArea?.textArea?.value||w(!1),p?.(e)},onInput:e=>{m?.(e)},onChange:e=>(e=>{u?.(e)})(e)})})})}},7224:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(39930),r=(n(75271),n(52676)),a=n(94232),o=n(59362),s=n(56965).ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`,i=({onOk:e,onCancel:t,cancelText:n,okText:i,okBtnProps:c,cancelBtnProps:u,loading:d,htmlType:p="button",style:m,showOkBtn:f=!0,styles:h,description:x,extra:g,showCancelBtn:y=!0,form:C})=>{let b=(0,l.Z)();return(0,r.jsxs)(s,{style:{...h?.wrapper},children:[(0,r.jsx)("div",{children:x}),(0,r.jsxs)(a.Z,{size:20,style:{...m},children:[y&&(0,r.jsx)(o.ZP,{onClick:t,style:{width:"88px"},...u,children:n||b.formatMessage({id:"common.button.cancel"})}),g,f&&(0,r.jsx)(o.ZP,{type:"primary",onClick:e,style:{width:"88px"},loading:d,htmlType:p,...c,children:i||b.formatMessage({id:"common.button.save"})})]})]})}},21701:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(81764),r=n(75271),a=n(52676),o=n(79526),s=n(59362),i=n(58230),c=n(56965),u=(0,c.ZP)(o.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 60px 32px;
  .ant-empty-image {
    margin-bottom: 0;
    height: auto;
    line-height: 1;
    font-size: 42px;
    .anticon {
      color: var(--ant-color-primary);
    }
  }
  .ant-empty-footer {
    display: flex;
  }
`,d=c.ZP.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`,p=c.ZP.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=c.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`,f=e=>{let{filters:t,noFoundText:n,loadend:c,loading:f,dataSource:h,buttonText:x,onClick:g,minHeight:y}=e,C=(0,r.useMemo)((()=>{let e=l.omit(t,["page","perPage"]);return Object.values(e||{}).some((e=>Array.isArray(e)?e.length>0:!!e))}),[t]);if(f||!c||h?.length)return(0,a.jsx)("span",{});let b=(0,a.jsx)(u,{style:null==y?void 0:{marginBlock:0},image:C?(0,a.jsx)(p,{children:o.Z.PRESENTED_IMAGE_SIMPLE}):(0,a.jsx)(d,{children:e.image}),description:(0,a.jsxs)(m,{children:[!C&&(0,a.jsx)(i.default.Text,{style:{fontSize:"16px",fontWeight:500},children:e.title}),(0,a.jsx)(i.default.Text,{type:"secondary",children:C?n:e.subTitle})]}),children:!C&&(x&&g?(0,a.jsx)(s.ZP,{color:"primary",variant:"filled",onClick:g,children:x}):null)});return null==y?b:(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:y,paddingBottom:"number"==typeof y?y/6:`calc(${y} / 6)`},children:b})}},6324:function(e,t,n){n.d(t,{f8:function(){return k},ZP:function(){return w}});var l=n(39930),r=n(60341),a=n(5703),o=n(17465),s="filters-button-module__wrapper___wgAvR",i="filters-button-module__count___9Uazh",c="filters-button-module__buttonWrapper___s0HOa",u="filters-button-module__close-btn___COdze",d="index-module__page-tools___qC1VM",p="index-module__left___RQSzE",m="index-module__right___xVhib",f=n(75271),h=n(52676),x=n(59362),g=n(94232),y=n(46498),C=n(27926),b=n(88880),v=n(32814),j=n(1890),Z=n(56643),E=n(46061),S=({onClick:e,onClear:t,count:n})=>{let a=(0,l.Z)();return(0,h.jsx)("div",{className:c,children:(0,h.jsx)(x.ZP,{onClick:e,style:{color:"var(--ant-color-text-tertiary)"},icon:(0,h.jsx)(r.Z,{type:"icon-filter-list",style:{fontSize:14}}),children:(0,h.jsxs)("span",{className:s,children:[(0,h.jsx)("span",{children:a.formatMessage({id:"common.filter.label"})}),!!n&&(0,h.jsx)("span",{className:i,children:n}),!!n&&(0,h.jsx)("span",{className:u,onClick:e=>{e.stopPropagation(),t()},children:(0,h.jsx)(C.Z,{})})]})})})},w=e=>{let{left:t,right:n,marginBottom:l=0,marginTop:r=30,style:a}=e,o=(0,f.useMemo)((()=>{let e={};return e.marginBottom=`${l}px`,e.marginTop=`${r}px`,a&&Object.assign(e,a),e}),[l,r,a]);return(0,h.jsxs)("div",{className:d,style:o,children:[(0,h.jsx)("div",{className:p,children:t}),(0,h.jsx)("div",{className:m,children:n})]})},k=e=>{let{handleInputChange:t,handleSelectChange:n,handleSearch:r,handleDeleteByBatch:s=null,handleClickPrimary:i=null,rowSelection:c,actionItems:u=[],selectOptions:d,showSelect:p,buttonText:m,buttonIcon:f,actionType:C="button",marginBottom:k=16,inputHolder:M,selectHolder:T,select:P,right:A,left:_,widths:R,filtersButtonProps:I}=e,B=(0,l.Z)();return(0,h.jsx)(w,{marginBottom:k,marginTop:0,left:_||(0,h.jsxs)(g.Z,{children:[I?.show&&(0,h.jsx)(S,{onClear:I.onClear,onClick:I.onClick,count:I.count}),(0,h.jsx)(y.Z,{prefix:(0,h.jsx)(b.Z,{style:{color:"var(--ant-color-text-placeholder)"}}),placeholder:M||B.formatMessage({id:"common.filter.name"}),style:{width:R?.input||230},allowClear:!0,onChange:t}),p&&(0,h.jsx)(o.Z,{allowClear:!0,showSearch:P?.showSearch,placeholder:T,style:{width:R?.select||230},onChange:n,options:d}),(0,h.jsx)(x.ZP,{type:"text",style:{color:"var(--ant-color-text-tertiary)"},onClick:r,"aria-label":B.formatMessage({id:"common.button.refresh"}),title:B.formatMessage({id:"common.button.refresh"}),icon:(0,h.jsx)(v.Z,{})})]}),right:A||(i||s?(0,h.jsxs)(g.Z,{size:16,children:[i?"dropdown"===C?(0,h.jsx)(a.Z,{styles:{root:{minWidth:"140px"}},menu:{items:u,onClick:i},children:(0,h.jsx)(x.ZP,{icon:(0,h.jsx)(j.Z,{}),type:"primary",iconPlacement:"end",children:m})}):(0,h.jsx)(x.ZP,{icon:f??(0,h.jsx)(Z.Z,{}),type:"primary",onClick:i,children:m}):null,s&&(0,h.jsx)(x.ZP,{icon:(0,h.jsx)(E.Z,{}),danger:!0,onClick:s,disabled:!c?.selectedRowKeys?.length,children:(0,h.jsxs)("span",{children:[B?.formatMessage?.({id:"common.button.delete"}),c?.selectedRowKeys?.length>0&&(0,h.jsxs)("span",{children:["(",c?.selectedRowKeys?.length,")"]})]})})]}):null)})}},57991:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(39930),r=n(76732),a=n(81764),o=n(75271),s=n(52676),i=n(61884),c=n(51304),u=(0,i.kc)((({css:e,token:t})=>({hintOverlay:e`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-esc-hint-bg);
    color: ${t.colorTextLightSolid};
    padding: 16px 24px;
    border-radius: 4px;
    z-index: 2000;
    font-size: 14px;
    pointer-events: none;
    animation: fadeInOut 2s ease-in-out;
    @keyframes fadeInOut {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `})));function d(e){let{enabled:t=!0,message:n,throttleDelay:i=3e3}=e||{},d=(0,l.Z)(),{styles:p}=u(),[m,f]=(0,o.useState)(!1),h=(0,o.useRef)(null),x=(0,o.useRef)(!1),g=(0,o.useMemo)((()=>(0,a.throttle)((()=>{x.current||(x.current=!0,f(!0),h.current&&clearTimeout(h.current),h.current=setTimeout((()=>{f(!1),x.current=!1}),2e3))}),i,{leading:!0,trailing:!1})),[i]);return(0,c.y1)(r.Z.ESC,(()=>{t&&g()}),{enabled:t}),(0,o.useEffect)((()=>()=>{h.current&&clearTimeout(h.current),g.cancel()}),[g]),{EscHint:m?(0,s.jsx)("div",{className:p.hintOverlay,children:n||d.formatMessage({id:"common.tips.escape.disable"})}):null}}var p=n(71956),m=n(59362),f=n(60747),h=e=>{let{title:t,closable:n=!0,mask:r,styles:a,...o}=e,i=(0,l.Z)(),c="function"==typeof a?void 0:a,{EscHint:u}=d({enabled:!e.keyboard&&e.open});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(p.Z,{...o,styles:{wrapper:{...c?.wrapper},root:{...c?.root},body:{height:"calc(100vh - 57px)",paddingBlock:16,paddingInline:0,overflowX:"hidden",...c?.body},section:{borderRadius:"6px 0 0 6px",...c?.section}},closable:!1,mask:r,title:(0,s.jsxs)("div",{className:"flex-between flex-center",children:[(0,s.jsx)("span",{style:{color:"var(--ant-color-text)",fontWeight:"var(--font-weight-medium)",fontSize:"var(--font-size-base)"},children:t}),n&&(0,s.jsx)(m.ZP,{type:"text",size:"small",onClick:t=>{e.onClose?.(t)},"aria-label":i.formatMessage({id:"common.button.close"}),children:(0,s.jsx)(f.Z,{})})]}),children:[o.children,u]})})}},76732:function(e,t,n){n.d(t,{Z:function(){return r},d:function(){return a}});var l=(0,n(63922).oc)(),r={CREATE:["Alt+Ctrl+N","Alt+Meta+N"],CLEAR:["Alt+Ctrl+K","Alt+Meta+K"],RIGHT:["Ctrl+RIGHT","Meta+RIGHT"],SAVE:["Ctrl+S","Meta+S"],SUBMIT:["Enter","Enter"],ENTER:["Enter","Enter"],SHIFT:["Shift","Shift"],CTRL:["Ctrl","Meta"],OPTION:["Alt","Option"],SAVEAS:["Alt+Ctrl+S","Alt+Meta+S"],OPEN:["Alt+Ctrl+O","Alt+Meta+O"],UNDO:["Ctrl+Z","Meta+Z"],CANCEL:["Ctrl+W","Meta+W"],DELETE:["delete"],COPY:["Ctrl+C","Meta+C"],REFRESH:["Ctrl+R","Meta+R"],EDIT:["Ctrl+E","Meta+E"],SEARCH:["Ctrl+K","Meta+K"],RESET:["Alt+Ctrl+R","Alt+Meta+R"],INPUT:["Ctrl+K","Meta+K"],NEW1:["Ctrl+1","Meta+1"],NEW2:["Ctrl+2","Meta+2"],NEW3:["Ctrl+3","Meta+3"],NEW4:["Ctrl+4","Meta+4"],FOCUS:["/","/"],ADD:["Alt+Ctrl+Enter","Alt+Meta+Enter"],ESC:["Esc","Esc"]},a=Object.entries(r).map((([e,t])=>{let n=l.isMac&&t[1]||t[0];return{keybinding:n,command:e,textKeybinding:l.isMac?n.replace("Meta","Cmd").replace("Alt","Option"):n.replace("Ctrl","Ctrl"),iconKeybinding:l.isMac?n.replace("Meta","⌘").replace("Alt","⌥"):n.replace("Ctrl","Ctrl")}})).reduce(((e,t)=>(e[t.command]=t,e)),{})}}]);