"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9825],{2538:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(39930),n=r(73349),o=r(75271),i=r(52676),l=r(89334),s=r(36685),c=r(26578),d=r(94232),p=r(59362),u=r(83443),h=r(21379),m=r(52745),f=(0,r(61884).kc)((({css:e})=>({"delete-modal-content":e`
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
  `}))),g=(0,o.forwardRef)(((e,t)=>{let r=(0,a.Z)(),{styles:g}=f(),{token:x}=l.default.useToken(),{saveScrollHeight:b,restoreScrollHeight:v}=(0,n.Z)(),[y,w]=(0,o.useState)(!1),[k,j]=(0,o.useState)({checked:!1}),[Z,P]=(0,o.useState)(!1),[M,C]=(0,o.useState)({}),T=e=>{b(),C(e),j({checked:e.checkConfig?.defautlChecked||!1}),w(!0)},z=()=>{w(!1),v()},N=()=>{w(!1),M.onCancel?.(),v()},_=async()=>{try{P(!0);let e=await(M.onOk?.());Array.isArray(e)?e.every((e=>"fulfilled"===e?.status))&&s.ZP.success(r.formatMessage({id:"common.message.success"})):s.ZP.success(r.formatMessage({id:"common.message.success"}))}catch{}finally{w(!1),P(!1),v()}};return(0,o.useImperativeHandle)(t,(()=>({show:T,hide:z,configuration:k}))),(0,i.jsxs)(c.Z,{style:{top:"20%"},open:y,onOk:_,onCancel:N,destroyOnHidden:!1,closeIcon:!1,mask:{closable:!1},keyboard:!1,width:460,styles:{container:{borderRadius:"var(--border-radius-modal)"},footer:{marginTop:"20px"}},footer:(0,i.jsxs)(d.Z,{size:20,children:[!1!==M.showCancel&&(0,i.jsx)(p.ZP,{size:"middle",...M.cancelButtonProps,onClick:N,children:M.cancelText?r.formatMessage({id:M.cancelText}):r.formatMessage({id:"common.button.cancel"})}),!1!==M.showOk&&(0,i.jsx)(p.ZP,{type:"primary",size:"middle",danger:!0,...M.okButtonProps,onClick:_,loading:Z,children:M.okText?r.formatMessage({id:M.okText}):r.formatMessage({id:"common.button.delete"})})]}),children:[(0,i.jsx)("div",{className:g["delete-modal-content"],children:(0,i.jsxs)("span",{className:"title",children:[(0,i.jsx)(m.Z,{}),(0,i.jsx)("span",{children:M.title?r.formatMessage({id:M.title}):r.formatMessage({id:"common.title.delete.confirm"})})]})}),(0,i.jsx)("div",{className:g.content,dangerouslySetInnerHTML:{__html:M.content?r.formatMessage({id:M.operation||""},{type:r.formatMessage({id:M.content}),name:M.name}):""}}),M.checkConfig&&(0,i.jsx)("div",{className:g.checkboxWrapper,children:(0,i.jsx)(u.ZP,{theme:{components:{Checkbox:{colorPrimary:x.colorWarning,colorPrimaryHover:x.colorWarningHover,colorPrimaryBorder:x.colorWarningBorder,colorWhite:x.colorText}}},children:(0,i.jsx)(h.Z,{checked:k.checked,onChange:e=>j({checked:e.target.checked}),children:(0,i.jsx)("span",{className:"check-text",children:r.formatMessage({id:M.checkConfig?.checkText})})})})}),M.tips&&(0,i.jsx)("div",{className:g.checkboxWrapper,children:(0,i.jsx)("span",{className:"check-text",children:M.tips})})]})}))},25717:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(90240),n=r(7224),o=r(57991),i=(r(75271),r(52676)),l=r(74330),s={padding:"16px 24px 8px",display:"flex",justifyContent:"flex-end"},c=({title:e,open:t,onCancel:r,onSubmit:c,children:d,width:p=600,subTitle:u,footer:h,loading:m,dismissible:f=!1})=>(0,i.jsx)(o.Z,{title:(0,i.jsxs)(i.Fragment,{children:[e,u&&(0,i.jsx)(l.Z,{variant:"outlined",style:{fontSize:12,fontWeight:400,marginLeft:8,borderRadius:4,borderColor:"var(--ant-color-border-secondary)",color:"var(--ant-color-text-secondary)"},children:u})]}),open:t,onClose:r,destroyOnHidden:!0,mask:{closable:f},keyboard:f,styles:{wrapper:{width:p}},footer:!1,children:(0,i.jsx)(a.Z,{styles:{container:{paddingBlock:0}},footer:h??(0,i.jsx)(n.Z,{onOk:c,onCancel:r,loading:m,style:s}),children:d})})},57998:function(e,t,r){r.d(t,{Z:function(){return a}});var a=r(56965).ZP.div`
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
`},64207:function(e,t,r){r.d(t,{Z:function(){return p}});r(75271);var a=r(52676),n=r(82187),o=r(56965),i=o.ZP.div.attrs({className:"template-card-wrapper"})`
  overflow: hidden;
  display: flex;
  padding: 16px 16px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid var(--ant-color-border);
  border-radius: var(--ant-border-radius-lg);
  cursor: default;
  width: 100%;
  &.clickable:hover:not(.disabled) {
    background-color: var(--ant-color-fill-tertiary);
    transition: background-color 0.2s ease;
  }

  &.hoverable:hover:not(.disabled) {
    background-color: var(--ant-color-fill-tertiary);
    transition: background-color 0.2s ease;
  }

  &.ghost {
    background-color: transparent;
  }

  &.active {
    background-color: var(--ant-color-fill-tertiary);
  }

  &.clickable:not(.disabled) {
    cursor: pointer;
  }

  // Keyboard users need to SEE the tab stop the role/tabIndex above created.
  // focus-visible rather than focus, so the ring stays off mouse clicks.
  &:focus-visible {
    outline: 2px solid var(--ant-color-primary);
    outline-offset: 2px;
  }

  &.disabled {
    cursor: default;
    opacity: 0.6;
    pointer-events: none;
    border-style: dashed;
  }
`,l=o.ZP.div.attrs({className:"template-card-content"})`
  width: 100%;
  flex: 1;
  color: var(--ant-color-text-tertiary);
`,s=o.ZP.div.attrs({className:"template-card-inner"})`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  height: 100%;
`,c=o.ZP.div.attrs({className:"template-card-icon"})`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 32px;
`,d=o.ZP.div.attrs({className:"template-card-header"})`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,p=e=>{let{className:t,height:r,children:o,clickable:p=!0,ghost:u=!1,header:h,footer:m,icon:f,active:g,disabled:x,hoverable:b,onClick:v}=e,y=p&&!x;return(0,a.jsxs)(i,{className:n(t,{clickable:p,hoverable:b,active:g,disabled:x,ghost:u}),style:{height:r||"180px"},onClick:()=>{x||!p||v?.()},role:y?"button":void 0,tabIndex:y?0:void 0,onKeyDown:y?e=>{y&&("Enter"!==e.key&&" "!==e.key||e.target===e.currentTarget&&(e.preventDefault(),v?.()))}:void 0,children:[f&&(0,a.jsx)(c,{children:f}),(0,a.jsxs)(s,{children:[h&&(0,a.jsx)(d,{children:h}),o&&(0,a.jsx)(l,{children:o}),m]})]})}},74895:function(e,t,r){r.d(t,{Z:function(){return j}});var a=r(39930),n=r(75271),o=r(52676),i=r(58230),l=r(62430),s=r(36685),c=r(59362),d=r(76756),p={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM653.3 424.6l52.2 52.2a8.01 8.01 0 01-4.7 13.6l-179.4 21c-5.1.6-9.5-3.7-8.9-8.9l21-179.4c.8-6.6 8.9-9.4 13.6-4.7l52.4 52.4 256.2-256.2c3.1-3.1 8.2-3.1 11.3 0l42.4 42.4c3.1 3.1 3.1 8.2 0 11.3L653.3 424.6z"}}]},name:"import",theme:"outlined"},u=r(93102);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(this,arguments)}const m=(e,t)=>n.createElement(u.Z,h({},e,{ref:t,icon:p}));var f=n.forwardRef(m),g=r(56965),x=(0,n.lazy)((()=>r.e(9949).then(r.bind(r,69949)))),{Text:b}=i.default,v=g.ZP.div`
  position: relative;
  border: 1px solid var(--ant-color-border);
  border-radius: var(--ant-border-radius-lg);
  .monaco-editor .scroll-decoration {
    box-shadow: none;
  }
  .monaco-editor {
    border-radius: 0 0 var(--ant-border-radius-lg) var(--ant-border-radius-lg);
    overflow: hidden;
  }
`,y=(0,g.ZP)(b)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 4px 6px;
  background-color: var(--ant-color-bg-elevated);
  border-radius: 0 0 var(--ant-border-radius-lg) var(--ant-border-radius-lg);
`,w=g.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ant-color-text-tertiary);
`,k=g.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding-inline: 10px;
  font-size: 14px;
  border-bottom: 1px solid var(--ant-color-border);
  background-color: var(--ant-color-fill-quaternary);
  border-radius: var(--ant-border-radius-lg) var(--ant-border-radius-lg) 0 0;
`,j=(0,n.forwardRef)(((e,t)=>{let{value:r,height:i=380,variant:p="borderless",isDarkTheme:u,schema:h,path:m,placeholder:g,validateMessage:b,title:j,onUpload:Z,onChange:P,onBlur:M,onFocus:C}=e,T=(0,a.Z)(),z=(0,n.useRef)(null),N=(0,n.useRef)(null),_=e=>{z.current?.setValue?z.current.setValue(e):N.current=e},S="string"==typeof r?r:"",H=(0,n.useCallback)((e=>{z.current=e,e&&null!==N.current&&(e.setValue?.(N.current),N.current=null)}),[]);return(0,n.useImperativeHandle)(t,(()=>({format:()=>{z.current?.format()},getValue:()=>z.current?.getValue?.(),setValue:e=>{_(e)},dispose:()=>{z.current?.dispose?.()},validate(){return z.current?.validate()},editor:z.current}))),(0,n.useEffect)((()=>{z.current?.format()}),[r]),(0,o.jsxs)(v,{className:"yaml-editor-container",style:{minHeight:i},children:[(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(w,{style:{height:i},children:(0,o.jsx)(d.Z,{style:{fontSize:24}})}),children:(0,o.jsx)(x,{ref:H,header:(0,o.jsxs)(k,{children:[(0,o.jsx)("span",{className:"title",children:j||"YAML"}),(0,o.jsx)(l.Z,{name:"file",multiple:!1,beforeUpload:e=>{"application/x-yaml"===e.type||"text/yaml"===e.type||e.name.endsWith(".yaml")||e.name.endsWith(".yml")||s.ZP.error("You can only upload YAML file!");let t=new FileReader;return t.onload=e=>{let t=e.target?.result;"string"==typeof t?(Z?.(t),_(t)):s.ZP.error("Failed to read file content!")},t.readAsText(e),!1},showUploadList:!1,accept:".yaml,.yml,text/yaml,application/x-yaml",children:(0,o.jsx)(c.ZP,{icon:(0,o.jsx)(f,{}),type:"text",size:"small",children:T.formatMessage({id:"common.button.import"})})})]}),variant:p,height:i,theme:u?"vs-dark":"light",value:S,placeholder:g,schema:h,path:m,onChange:P,onBlur:M,onFocus:C})}),b&&(0,o.jsx)(y,{type:"danger",children:b})]})}))},22563:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(39930),n=r(36685),o=()=>{let e=(0,a.Z)(),[t,r]=n.ZP.useMessage();return{getRuleMessage:(t,r,a=!0)=>{let n=a?e.formatMessage({id:r}):r,o=Array.isArray(t)?t:[t];return o.includes("select")&&o.includes("input")?e.formatMessage({id:"common.form.rule.selectInput"},{name:n}):o.includes("input")?e.formatMessage({id:"common.form.rule.input"},{name:n}):e.formatMessage({id:"common.form.rule.select"},{name:n})},showSuccess:r=>{t.success(r||e.formatMessage({id:"common.message.success"}))}}}},5174:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(75271),n=r(7056);function o(){let[e,t]=(0,a.useState)(!1),r=(0,a.useRef)(!1),o=(0,n.Z)((()=>{t(!1),r.current=!1}));return{loading:e,guard:(0,n.Z)((e=>{r.current||(r.current=!0,e())})),run:(0,n.Z)((async e=>{t(!0);try{await e()}finally{o()}})),release:o}}}}]);