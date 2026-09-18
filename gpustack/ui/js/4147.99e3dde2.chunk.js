"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4147],{99499:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(75271),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},o=n(93102);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const s=(e,t)=>a.createElement(o.Z,l({},e,{ref:t,icon:r}));var i=a.forwardRef(s)},61583:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(75271),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},o=n(93102);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const s=(e,t)=>a.createElement(o.Z,l({},e,{ref:t,icon:r}));var i=a.forwardRef(s)},11129:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(75271),r=n(87117),o=n(4814),l=n(25309),s=n(76640),i=n(82944),c=n(46882),d=n(30697),p=n(67902);const u=["wrap","nowrap","wrap-reverse"],m=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],h=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],f=(e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&u.includes(n)}},g=(e,t)=>{const n={};return h.forEach((a=>{n[`${e}-align-${a}`]=t.align===a})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n},x=(e,t)=>{const n={};return m.forEach((a=>{n[`${e}-justify-${a}`]=t.justify===a})),n};var b=(e,t)=>(0,o.W)({...f(e,t),...g(e,t),...x(e,t)});const v=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},y=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-medium, &-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},w=e=>{const{componentCls:t}=e,n={};return u.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},j=e=>{const{componentCls:t}=e,n={};return h.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},k=e=>{const{componentCls:t}=e,n={};return m.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var Z=(0,d.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:a}=e,r=(0,p.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:a});return[v(r),y(r),w(r),j(r),k(r)]}),(()=>({})),{resetStyle:!1});const C=a.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:d,className:p,style:u,flex:m,gap:h,vertical:f,orientation:g,component:x="div",children:v,...y}=e,{flex:w,direction:j,getPrefixCls:k}=a.useContext(c.E_),C=k("flex",n),[S,M]=Z(C),[,N]=(0,s.R)(g,f??w?.vertical),P=(0,o.W)(p,d,w?.className,C,S,M,b(C,{...e,vertical:N}),{[`${C}-rtl`]:"rtl"===j,[`${C}-gap-${h}`]:(0,l.n)(h),[`${C}-vertical`]:N}),E={...w?.style,...u};return(0,i.C_)(m)&&(E.flex=m),(0,i.C_)(h)&&!(0,l.n)(h)&&(E.gap=h),a.createElement(x,{ref:t,className:P,style:E,...(0,r.CE)(y,["justify","wrap","align"])},v)}));var S=C},67988:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(39930),r=n(250),o=n(75271),l=n(52676),s=n(36685),i=n(14792),c=n(59362),d=n(18216),p=n(26669),u=({children:e,tips:t,text:n,type:u="text",shape:m="default",fontSize:h="14px",style:f,btnStyle:g,placement:x,size:b="small"})=>{let v=(0,a.Z)(),[y,w]=(0,o.useState)(!1),j=(0,o.useRef)(),k=(0,o.useMemo)((()=>y?v.formatMessage({id:"common.button.copied"}):t??v.formatMessage({id:"common.button.copy"})),[y,t,v]);return(0,o.useEffect)((()=>(window.clearTimeout(j.current),j.current=window.setTimeout((()=>{w(!1)}),3e3),()=>{window.clearTimeout(j.current)})),[y]),(0,l.jsxs)("div",{className:"flex-center gap-4",style:{minWidth:16},children:[e&&(0,l.jsx)(r.Z,{minWidth:20,ghost:!0,children:e}),(0,l.jsx)(i.Z,{title:k,placement:x,children:(0,l.jsx)("span",{children:(0,l.jsx)(c.ZP,{className:"copy-button",type:u,shape:m,size:b,onClick:async()=>{await(async e=>{if(!navigator.clipboard?.writeText||"boolean"==typeof window.isSecureContext&&!window.isSecureContext)return!1;try{return document.hasFocus()||window.focus(),await navigator.clipboard.writeText(e),!0}catch{return!1}})(n)||(e=>{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:none;outline:none;box-shadow:none;background:transparent;opacity:0;pointer-events:none;",t.style.fontSize="12pt";let n=document.getSelection(),a=(n&&n.rangeCount>0&&n.getRangeAt(0),document.activeElement);document.body.appendChild(t);let r=!1;try{let o=document.createRange();o.selectNodeContents(t),n?.removeAllRanges(),n?.addRange(o),t.setSelectionRange(0,e.length),t.focus(),r=document.execCommand("copy")}catch{r=!1}finally{document.body.removeChild(t);try{n&&(n.removeAllRanges(),o&&n.addRange(o)),a?.focus?.()}catch{}}return r})(n)?w(!0):s.ZP.error(v.formatMessage({id:"common.copy.fail"}))},style:{...g},"aria-label":k,icon:y?(0,l.jsx)(d.Z,{style:{color:"var(--ant-color-success)",fontSize:h}}):(0,l.jsx)(p.Z,{style:{fontSize:h,...f}})})})})]})}},2538:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(39930),r=n(73349),o=n(75271),l=n(52676),s=n(89334),i=n(36685),c=n(26578),d=n(94232),p=n(59362),u=n(83443),m=n(21379),h=n(52745),f=(0,n(61884).kc)((({css:e})=>({"delete-modal-content":e`
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
  `}))),g=(0,o.forwardRef)(((e,t)=>{let n=(0,a.Z)(),{styles:g}=f(),{token:x}=s.default.useToken(),{saveScrollHeight:b,restoreScrollHeight:v}=(0,r.Z)(),[y,w]=(0,o.useState)(!1),[j,k]=(0,o.useState)({checked:!1}),[Z,C]=(0,o.useState)(!1),[S,M]=(0,o.useState)({}),N=e=>{b(),M(e),k({checked:e.checkConfig?.defautlChecked||!1}),w(!0)},P=()=>{w(!1),v()},E=()=>{w(!1),S.onCancel?.(),v()},T=async()=>{try{C(!0);let e=await(S.onOk?.());Array.isArray(e)?e.every((e=>"fulfilled"===e?.status))&&i.ZP.success(n.formatMessage({id:"common.message.success"})):i.ZP.success(n.formatMessage({id:"common.message.success"}))}catch{}finally{w(!1),C(!1),v()}};return(0,o.useImperativeHandle)(t,(()=>({show:N,hide:P,configuration:j}))),(0,l.jsxs)(c.Z,{style:{top:"20%"},open:y,onOk:T,onCancel:E,destroyOnHidden:!1,closeIcon:!1,mask:{closable:!1},keyboard:!1,width:460,styles:{container:{borderRadius:"var(--border-radius-modal)"},footer:{marginTop:"20px"}},footer:(0,l.jsxs)(d.Z,{size:20,children:[!1!==S.showCancel&&(0,l.jsx)(p.ZP,{size:"middle",...S.cancelButtonProps,onClick:E,children:S.cancelText?n.formatMessage({id:S.cancelText}):n.formatMessage({id:"common.button.cancel"})}),!1!==S.showOk&&(0,l.jsx)(p.ZP,{type:"primary",size:"middle",danger:!0,...S.okButtonProps,onClick:T,loading:Z,children:S.okText?n.formatMessage({id:S.okText}):n.formatMessage({id:"common.button.delete"})})]}),children:[(0,l.jsx)("div",{className:g["delete-modal-content"],children:(0,l.jsxs)("span",{className:"title",children:[(0,l.jsx)(h.Z,{}),(0,l.jsx)("span",{children:S.title?n.formatMessage({id:S.title}):n.formatMessage({id:"common.title.delete.confirm"})})]})}),(0,l.jsx)("div",{className:g.content,dangerouslySetInnerHTML:{__html:S.content?n.formatMessage({id:S.operation||""},{type:n.formatMessage({id:S.content}),name:S.name}):""}}),S.checkConfig&&(0,l.jsx)("div",{className:g.checkboxWrapper,children:(0,l.jsx)(u.ZP,{theme:{components:{Checkbox:{colorPrimary:x.colorWarning,colorPrimaryHover:x.colorWarningHover,colorPrimaryBorder:x.colorWarningBorder,colorWhite:x.colorText}}},children:(0,l.jsx)(m.Z,{checked:j.checked,onChange:e=>k({checked:e.target.checked}),children:(0,l.jsx)("span",{className:"check-text",children:n.formatMessage({id:S.checkConfig?.checkText})})})})}),S.tips&&(0,l.jsx)("div",{className:g.checkboxWrapper,children:(0,l.jsx)("span",{className:"check-text",children:S.tips})})]})}))},29284:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(39930),r=n(9733),o={middle:"index-module__middle___pMpZ3"},l=n(81764),s=(n(75271),n(52676)),i=n(14792),c=n(59362),d=n(94232),p=n(35835),u=n(61583),m=({items:e,size:t="middle",trigger:n=["hover"],showText:m,disabled:h,variant:f,color:g,extra:x,onSelect:b})=>{let v=(0,a.Z)(),y=(0,r.Z)(),w=l.filter(e,(e=>!e?.access||y?.[e.access])),j=l.head(w),k=e=>{let t=l.head(w);b(t.key,t)},Z=e=>e?.locale||void 0===e?.locale?v.formatMessage({id:e?.label}):e?.label;if(!w?.length)return(0,s.jsx)("span",{});let C=Z(j),S="string"==typeof C?C:void 0;return(0,s.jsx)(s.Fragment,{children:1===w?.length?(0,s.jsx)(i.Z,{title:C,children:(0,s.jsx)(c.ZP,{className:o[t],icon:j.icon,size:t,...j.props,onClick:k,"aria-label":S})}):(0,s.jsxs)(d.Z.Compact,{children:[(0,s.jsx)(s.Fragment,{children:m?(0,s.jsxs)(c.ZP,{...j.props,disabled:j.disabled||h,className:o[t],onClick:k,size:t,icon:j.icon,variant:f,color:g,children:[C,x]}):(0,s.jsx)(i.Z,{title:C,children:(0,s.jsx)(c.ZP,{...j.props,className:o[t],onClick:k,size:t,icon:j.icon,disabled:j.disabled,"aria-label":S})},"leftButton")}),(0,s.jsx)(p.Z,{disabled:h,trigger:n,placement:"bottomRight",styles:{root:{minWidth:160},itemIcon:{fontSize:14}},menu:{onClick:e=>{let t=l.find(w,{key:e.key});b(e.key,t)},items:l.tail(w).map((e=>({...l.omit(e,["label","locale","onClick"]),...e.props,label:Z(e)})))},children:(0,s.jsx)(c.ZP,{icon:(0,s.jsx)(u.Z,{}),size:t,variant:f,color:"default","aria-label":v.formatMessage({id:"common.button.more"}),className:o[t]},"menu")})]})})}},25717:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(90240),r=n(7224),o=n(57991),l=(n(75271),n(52676)),s=n(74330),i={padding:"16px 24px 8px",display:"flex",justifyContent:"flex-end"},c=({title:e,open:t,onCancel:n,onSubmit:c,children:d,width:p=600,subTitle:u,footer:m,loading:h,dismissible:f=!1})=>(0,l.jsx)(o.Z,{title:(0,l.jsxs)(l.Fragment,{children:[e,u&&(0,l.jsx)(s.Z,{variant:"outlined",style:{fontSize:12,fontWeight:400,marginLeft:8,borderRadius:4,borderColor:"var(--ant-color-border-secondary)",color:"var(--ant-color-text-secondary)"},children:u})]}),open:t,onClose:n,destroyOnHidden:!0,mask:{closable:f},keyboard:f,styles:{wrapper:{width:p}},footer:!1,children:(0,l.jsx)(a.Z,{styles:{container:{paddingBlock:0}},footer:m??(0,l.jsx)(r.Z,{onOk:c,onCancel:n,loading:h,style:i}),children:d})})},75936:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(843),r=n(33819),o=n(57998),l=n(75271),s=n(52676),i=n(58230),c=n(68195),d=n(87117),p=n(72167),u=n(89426),m=n(4814),h=n(28674),f=n(46882);const{Option:g}=u.default;function x(e){return e?.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const b=(e,t)=>{const{prefixCls:n,className:a,style:r,popupClassName:o,dropdownClassName:s,children:i,dataSource:c,rootClassName:p,dropdownStyle:b,dropdownRender:v,popupRender:y,onDropdownVisibleChange:w,onOpenChange:j,styles:k,classNames:Z,popupMatchSelectWidth:C,dropdownMatchSelectWidth:S}=e,M=(0,d.qo)(i),N=y||v,P=j||w,E=C??S;let T;1===M.length&&l.isValidElement(M[0])&&!x(M[0])&&([T]=M);const R=T?()=>T:void 0;let $;$=M.length&&x(M[0])?i:c?c.map((e=>{if(l.isValidElement(e))return e;switch(typeof e){case"string":return l.createElement(g,{key:e,value:e},e);case"object":{const{value:t}=e;return l.createElement(g,{key:t,value:t},e.text)}default:return}})):[];const{getPrefixCls:z}=l.useContext(f.E_),_=z("select",n),O={...e,popupRender:N,onOpenChange:P,popupMatchSelectWidth:E},[I,W]=(0,h.MW)([Z],[k],{props:O},{popup:{_default:"root"}}),B=l.useMemo((()=>({root:(0,m.W)(`${_}-auto-complete`,a,p,I.root,{[`${_}-customize`]:T}),prefix:I.prefix,input:I.input,placeholder:I.placeholder,content:I.content,popup:{root:(0,m.W)(o,s,I.popup?.root),list:I.popup?.list,listItem:I.popup?.listItem}})),[_,a,p,I,o,s]),F=l.useMemo((()=>({root:{...W.root,...r},input:W.input,prefix:W.prefix,placeholder:W.placeholder,content:W.content,popup:{root:{...b,...W.popup?.root},list:W.popup?.list,listItem:W.popup?.listItem}})),[W,r,b]);return l.createElement(u.default,{ref:t,suffixIcon:null,...(0,d.CE)(e,["dataSource","dropdownClassName","popupClassName"]),prefixCls:_,classNames:B,styles:F,mode:u.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,popupRender:N,onPopupVisibleChange:P,popupMatchSelectWidth:E,getInputElement:R},$)};var v=l.forwardRef(b);const{Option:y}=u.default,w=(0,p.Z)(v,"popupAlign",(e=>(0,d.CE)(e,["visible"]))),j=v;j.Option=y,j._InternalPanelDoNotUseOrYouWillBeFired=w;var k=j,Z=n(76756),C=i.default.Link,S=e=>{let{label:t,placeholder:n,required:i,description:d,isInFormItems:p=!0,trim:u=!0,onSelect:m,onBlur:h,checkStatus:f,extra:g,style:x,addAfter:b,suffixIcon:v,loading:y,allowClear:w,clearSpaceOnBlur:j,showSearch:S,alwaysFocus:M=!1,...N}=e,[P,E]=(0,l.useState)(!1),T=M||P,R=(0,l.useRef)(null),$="",z=c.Z?.Item?.useStatus?.();$=e.status||(p?z?.status:"")||"",(0,l.useEffect)((()=>{e.value&&E(!0)}),[e.value]);return(0,s.jsx)(o.Z,{style:x,children:(0,s.jsx)(r.Z,{className:"seal-select-wrapper",status:f||$,extra:g,label:t,isFocus:T,required:i,description:d,disabled:e.disabled,onClick:()=>{!e.disabled&&!P&&(R.current?.focus?.(),E(!0))},children:(0,s.jsx)(k,{...N,ref:R,placeholder:T||!t?(0,s.jsx)("span",{style:{paddingLeft:"12px"},children:n}):"",allowClear:!y&&w,suffixIcon:y?(0,s.jsx)(C,{children:(0,s.jsx)(Z.Z,{})}):v||null,status:f||$,onSelect:(e,t)=>{m?.(e,t)},onFocus:t=>{E(!0),e.onFocus?.(t)},onBlur:t=>{e.value||E(!1),j?(t.target.value=t.target.value?.replace(/\s+/g,""),e.onChange?.(t.target.value)):t.target.value=t.target.value?.trim(),e.onBlur?.(t)},showSearch:S,onChange:(t,n)=>{let a=t;u&&(a=a?.trim?.()),e.onChange?.(a,n)},popupRender:e=>y?(0,s.jsx)(a.v,{}):e||null,onInput:t=>{u&&(t.target.value=t.target.value?.trim()),e.onInput?.(t)},onPaste:e.onPaste})})})}},32429:function(e,t,n){n.d(t,{Z:function(){return s}});n(75271);var a=n(52676),r=n(21379),o=n(14792),l=n(34006),s=({description:e,label:t,checked:n,onChange:s,...i})=>(0,a.jsx)(r.Z,{className:"p-l-6",checked:n,onChange:s,...i,children:(0,a.jsxs)(o.Z,{title:e||!1,children:[(0,a.jsx)("span",{style:{color:"var(--ant-color-text-tertiary)"},children:t}),!!e&&(0,a.jsx)(l.Z,{className:"m-l-4",style:{color:"var(--ant-color-text-tertiary)"}})]})})},49799:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(39930),r=n(63922),o=n(843),l=n(33819),s=n(57998),i=n(17465),c=n(81764),d=n(75271),p=n(52676),u=n(68195),m=e=>{let{label:t,placeholder:n,children:m,required:h,description:f,options:g,allowNull:x,isInFormItems:b=!0,notFoundContent:v=null,loading:y,footer:w,alwaysFocus:j=!1,styles:k,...Z}=e,C=(0,a.Z)(),[S,M]=(0,d.useState)(!1),N=(0,d.useRef)(null),P="",E=u.Z?.Item?.useStatus?.();P=e.status||(b?E?.status:"")||"";let T=(0,d.useMemo)((()=>g?.length?(0,c.cloneDeep)(g).map((e=>(e.locale&&(e.label=C.formatMessage({id:e.label})),e))):[]),[g,C]);(0,d.useEffect)((()=>{((0,r.JL)(e.value)||x&&(null===e.value||void 0===e.value))&&M(!0)}),[e.value,x]);return(0,p.jsx)(s.Z,{children:(0,p.jsx)(l.Z,{className:"seal-select-wrapper",status:P,label:t,isFocus:j||S,required:h,description:f,disabled:e.disabled,onClick:()=>{!e.disabled&&!S&&(N.current?.focus?.(),M(!0))},children:(0,p.jsx)(i.Z,{...Z,styles:k,placeholder:n,footer:w,ref:N,options:m?void 0:T,onFocus:t=>{M(!0),e.onFocus?.(t)},onBlur:t=>{x&&null===e.value?M(!0):e.value||M(!1),e.onBlur?.(t)},onChange:(t,n)=>{(0,r.JL)(t)||x&&null===t?M(!0):M(!1),e.onChange?.(t||null,n)},notFoundContent:(0,p.jsx)(o.Z,{loading:y,notFoundContent:v}),children:m})})})}},57998:function(e,t,n){n.d(t,{Z:function(){return a}});var a=n(56965).ZP.div`
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
`},1039:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(39930),r=n(9926),o=(n(75271),n(52676)),l=n(59362),s=n(56643),i=n(56965),c=i.ZP.div`
  position: relative;
  padding: 14px;
  padding-top: 34px;
  border: 1px solid var(--ant-color-border);
  border-radius: var(--ant-border-radius-lg);
  display: flex;
  width: 100%;
  flex-direction: column;
  .label {
    position: absolute;
    left: 16px;
    line-height: 1;
    top: 12px;
    color: var(--ant-color-text-tertiary);
  }
`,d=i.ZP.div`
  margin-top: 8px;
`,p=({required:e,children:t,label:n,description:i,labelExtra:p,onAdd:u,btnText:m,disabled:h,button:f,styles:g})=>{let x=(0,a.Z)();return(0,o.jsxs)(c,{style:g?.wrapper,children:[n&&(0,o.jsx)("span",{className:"label",children:(0,o.jsx)(r.Z,{required:e,label:n,description:i,labelExtra:p})}),t,!h&&(0,o.jsx)(d,{children:f||(0,o.jsxs)(l.ZP,{variant:"filled",color:"default",block:!0,onClick:u,style:{borderRadius:"var(--border-radius-base)"},children:[(0,o.jsx)(s.Z,{className:"font-size-14"}),m||x.formatMessage({id:"common.button.addSelector"})]})})]})}},26681:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(63922),r=n(1039),o=n(75936),l=n(81764),s=n(75271),i=n(52676),c=/[^=]+=[^=]*$/,d=e=>{let{value:t,label:n,onChange:a,onBlur:r,onPaste:d,disabled:p,sourceOptions:u,trim:m=!0}=e,h=s.useRef(0),f=s.useRef(""),[g,x]=s.useState([]),b=l.debounce((e=>{h.current=e.target.selectionStart,f.current=e.target.value.slice(0,h.current),(e=>{if(!e)return void x(u||[]);let t=e.match(c);if(!t)return void x(l.filter(u,(t=>t.label.includes(e))));let[n,a]=l.split(t[0],"="),r=l.find(u,(e=>e.label===n));x(r?l.filter(r.opts,(e=>e.label.includes(String(a)))):[])})(f.current)}),100);return(0,i.jsx)(o.Z,{placeholder:e.placeholder,defaultActiveFirstOption:!0,value:t,onInput:e=>{b(e),a(e.target.value)},onSelect:e=>{(e=>{let t=f.current.match(c);a(t?`${l.split(t[0],"=")[0]}=${e}`:e?.trim())})(e),x([])},onFocus:b,onBlur:r,label:n,options:g,trim:m,disabled:p,style:{flex:1,minWidth:0},onPaste:d})},p=n(59362),u=n(4827),m=e=>{let{onRemove:t,onChange:n,onBlur:a,onPaste:r,label:o,value:l,options:s,trim:c=!0,data:m,required:h,disabled:f,renderItem:g}=e,x=e=>{n(e)};return(0,i.jsxs)("div",{className:"list-item",children:[g?g(m,{onChange:x,onBlur:a,onPaste:r}):(0,i.jsx)(d,{value:l,onChange:x,onBlur:a,onPaste:r,label:o,sourceOptions:s,trim:c,placeholder:e.placeholder,disabled:f}),!h&&!f&&(0,i.jsx)(p.ZP,{size:"small",className:"btn",type:"default",shape:"circle",icon:(0,i.jsx)(u.Z,{}),onClick:t})]})},h=e=>{let{value:t,label:n,description:o,onChange:c,onBlur:d,onDelete:p,btnText:u,options:h,labelExtra:f,trim:g=!0,styles:x,required:b,disabled:v,renderItem:y}=e,[w,j]=s.useState([]),k=s.useRef(0),Z=()=>{k.current+=1},C=()=>{Z();let e=l.cloneDeep(w);e.push({value:"",uid:k.current}),j(e)};return s.useEffect((()=>{let e=t??[],n=l.map(w,"value").filter((e=>!!e));l.isEqual(n,e)||j(l.map(e,(e=>(Z(),{value:e,uid:k.current}))))}),[t]),(0,s.useEffect)((()=>{b&&0===w.length&&C()}),[b]),(0,i.jsx)(r.Z,{styles:x,label:n,required:b,description:o,labelExtra:f,onAdd:C,btnText:u,disabled:v,children:(0,i.jsx)(i.Fragment,{children:l.map(w,((t,n)=>(0,i.jsx)(m,{required:b&&1===w.length,placeholder:e.placeholder,options:h,data:t,value:t.value,onBlur:e=>d?.(e,n),onRemove:()=>(e=>{let t=l.cloneDeep(w);t.splice(e,1);let n=l.map(t,"value").filter((e=>!!e));j(t),c?.(n),p?.(e)})(n),onChange:e=>((e,t)=>{let n=l.cloneDeep(w);n[t].value=e;let a=l.map(n,"value").filter((e=>!!e));j(n),c?.(a)})(e,n),onPaste:e=>((e,t)=>{let n=e.clipboardData?.getData("text");if(!n)return;let r=(0,a.$U)(n);if(r.length<=1)return;e.preventDefault();let o=l.cloneDeep(w),s=g?r[0]?.trim():r[0];o[t].value=s||"";for(let e=1;e<r.length;e++){Z();let n=g?r[e]?.trim():r[e];o.splice(t+e,0,{value:n||"",uid:k.current})}let i=l.map(o,"value").filter((e=>!!e));j(o),c?.(i)})(e,n),trim:g,disabled:v,renderItem:y},t.uid)))})})}},70332:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(25273),r=n(36304),o=n(67988),l=n(81764),s=n(75271),i=n(52676),c=n(46980),d=n(14792),p=n(59362),u=n(99499),m=n(82187),h=n(56965).ZP.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=/<a (.*?)>(.*?)<\/a>/g,g=({style:e,statusValue:t,download:n,extra:g,actions:x=[],maxTooltipWidth:b=250,suffix:v,variant:y="outlined"})=>{let{text:w,status:j}=t,k=(0,s.useMemo)((()=>a.zK[j]),[j]),Z=(0,s.useMemo)((()=>"outlined"===y?k?.outline??k?.text:k?.text),[y,k]),C=(0,s.useMemo)((()=>"outlined"===y?{backgroundColor:"transparent",border:`1px solid ${k?.border||k?.outlineBorder||Z}`}:{backgroundColor:k?.bg,border:k?.border?`1px solid ${k.border}`:"none"}),[y,k,Z]),S=(0,s.useMemo)((()=>!!t.message&&f.test(t.message||"")),[t.message]),M=(0,s.useMemo)((()=>t.message?t.message?.match(f)?t.message?.replace(f,'<a $1 target="_blank">$2</a>'):t.message:""),[t.message]),N=()=>{let e=n?.percent||0;return n&&e>0&&e<=100?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"progress",children:[l.round(n?.percent,0)||0,"%"]}),(0,i.jsx)("span",{className:"download",style:{width:`${l.round(e,0)}%`}})]}):(0,i.jsx)(h,{children:w})},P=(0,i.jsxs)("div",{className:"status-content-wrapper",children:[(0,i.jsxs)("div",{className:"copy-button-wrapper",children:[(0,i.jsx)(o.Z,{style:{color:"rgba(255,255,255,.8)"},text:M||"",size:"small"}),x?.map((e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{style:{marginBlock:5,borderColor:"rgba(255,255,255,.5)"}}),(0,i.jsx)(d.Z,{title:e.label,placement:"right",children:(0,i.jsx)(p.ZP,{size:"small",type:"text",style:{color:"rgba(255,255,255,.8)",padding:1},onClick:e.onClick,children:(0,i.jsx)("span",{className:"font-size-14",children:e.icon})})},e.key)]},e.key)))]}),(0,i.jsxs)("div",{style:{width:"max-content",maxWidth:b,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[S?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:M}}):M,g&&(0,i.jsx)("span",{className:"m-l-5",children:g})]})]});return(0,i.jsx)("span",{className:m("status-tag",{download:n?.percent}),style:{color:Z,...C,...e},children:t.message?(0,i.jsx)(r.$,{title:P,scrollbars:{autoHide:"never"},toolTipProps:{destroyOnHidden:!0},children:(0,i.jsxs)("span",{className:"txt err",children:[(0,i.jsx)(u.Z,{}),N(),v&&(0,i.jsx)("span",{children:v})]})}):(0,i.jsxs)("span",{className:"txt",children:[N(),v&&(0,i.jsx)("span",{children:v})]})})}},88015:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(88061),r=(n(75271),n(52676)),o=n(74330),l=n(61884),s=n(82187),i=(0,l.kc)((({css:e})=>({themeTag:e`
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
    `}))),c=({opacity:e,style:t,children:n,ghost:l,className:c,...d})=>{let{config:p}=(0,a.Z)(),{isDarkTheme:u}=p,{styles:m}=i();return(0,r.jsx)(o.Z,{variant:"outlined",style:{...t,opacity:u?1:e},...d,className:s(m.themeTag,c,{"tag-ghost":l}),children:n})};c.displayName="ThemeTag"},22563:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(39930),r=n(36685),o=()=>{let e=(0,a.Z)(),[t,n]=r.ZP.useMessage();return{getRuleMessage:(t,n,a=!0)=>{let r=a?e.formatMessage({id:n}):n,o=Array.isArray(t)?t:[t];return o.includes("select")&&o.includes("input")?e.formatMessage({id:"common.form.rule.selectInput"},{name:r}):o.includes("input")?e.formatMessage({id:"common.form.rule.input"},{name:r}):e.formatMessage({id:"common.form.rule.select"},{name:r})},showSuccess:n=>{t.success(n||e.formatMessage({id:"common.message.success"}))}}}},98792:function(e,t,n){n.d(t,{h:function(){return l},m:function(){return s}});var a=n(66890),r=n(75271),o=n(15001);function l(e){let{key:t,fetchList:n,getLabel:l,getValue:s,manual:i=!0,responseType:c="array",errorMsg:d}=e,p=(0,r.useRef)(null),[u,m]=(0,r.useState)([]),{runAsync:h,loading:f,cancel:g}=(0,o.Z)((async(e,t)=>{p.current?.cancel(),p.current=(0,a.$i)();let r=await n(e,{token:p.current?.token,...t||{}});return m(r?.items?.map((e=>({...e,label:l?l(e):e.name,value:s?s(e):e.id})))||[]),"array"===c?r?.items||[]:r}),{manual:i,debounceWait:e.debounceWait||300,onError:e=>{m([])}});return(0,r.useEffect)((()=>()=>{g(),p.current?.cancel()}),[g]),{loading:f,dataList:u,cancelRequest:()=>{g(),p.current?.cancel()},fetchData:(e,t)=>h(e,t)}}function s(e){let{key:t,fetchDetail:n,getData:l,errorMsg:s,delay:i,manual:c=!0}=e,d=(0,r.useRef)(null),[p,u]=(0,r.useState)({}),{runAsync:m,loading:h,cancel:f}=(0,o.Z)((async(e,t)=>{d.current?.cancel(),d.current=(0,a.$i)();let r=await n(e,{token:d.current?.token,...t||{}});return i&&await new Promise((e=>{setTimeout(e,i)})),u(l?l(r,e):r),r}),{manual:c,onSuccess:()=>{},onError:e=>{u({})}}),g=()=>{f(),d.current?.cancel()};return(0,r.useEffect)((()=>()=>{g()}),[]),{loading:h,detailData:p,cancelRequest:g,fetchData:m}}},5174:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(75271),r=n(7056);function o(){let[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),o=(0,r.Z)((()=>{t(!1),n.current=!1}));return{loading:e,guard:(0,r.Z)((e=>{n.current||(n.current=!0,e())})),run:(0,r.Z)((async e=>{t(!0);try{await e()}finally{o()}})),release:o}}}}]);