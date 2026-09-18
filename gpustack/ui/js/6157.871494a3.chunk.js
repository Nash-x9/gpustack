"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6157],{40867:function(e,t,n){n.d(t,{S:function(){return i}});var r=n(48107),l=n(19976);function o(e,t){const n=new Set;return e.forEach((e=>{t.has(e)||n.add(e)})),n}function a(e){const{disabled:t,disableCheckbox:n,checkable:r}=e||{};return!(!t&&!n)||!1===r}function i(e,t,n,i){const s=[];let c;c=i||a;const d=new Set(e.filter((e=>{const t=!!(0,l.Z)(n,e);return t||s.push(e),t}))),u=new Map;let h,p=0;return Object.keys(n).forEach((e=>{const t=n[e],{level:r}=t;let l=u.get(r);l||(l=new Set,u.set(r,l)),l.add(t),p=Math.max(p,r)})),(0,r.ZP)(!s.length,`Tree missing follow keys: ${s.slice(0,100).map((e=>`'${e}'`)).join(", ")}`),h=!0===t?function(e,t,n,r){const l=new Set(e),a=new Set;for(let e=0;e<=n;e+=1)(t.get(e)||new Set).forEach((e=>{const{key:t,node:n,children:o=[]}=e;l.has(t)&&!r(n)&&o.filter((e=>!r(e.node))).forEach((e=>{l.add(e.key)}))}));const i=new Set;for(let e=n;e>=0;e-=1)(t.get(e)||new Set).forEach((e=>{const{parent:t,node:n}=e;if(r(n)||!e.parent||i.has(e.parent.key))return;if(r(e.parent.node))return void i.add(t.key);let o=!0,s=!1;(t.children||[]).filter((e=>!r(e.node))).forEach((({key:e})=>{const t=l.has(e);o&&!t&&(o=!1),s||!t&&!a.has(e)||(s=!0)})),o&&l.add(t.key),s&&a.add(t.key),i.add(t.key)}));return{checkedKeys:Array.from(l),halfCheckedKeys:Array.from(o(a,l))}}(d,u,p,c):function(e,t,n,r,l){const a=new Set(e);let i=new Set(t);for(let e=0;e<=r;e+=1)(n.get(e)||new Set).forEach((e=>{const{key:t,node:n,children:r=[]}=e;a.has(t)||i.has(t)||l(n)||r.filter((e=>!l(e.node))).forEach((e=>{a.delete(e.key)}))}));i=new Set;const s=new Set;for(let e=r;e>=0;e-=1)(n.get(e)||new Set).forEach((e=>{const{parent:t,node:n}=e;if(l(n)||!e.parent||s.has(e.parent.key))return;if(l(e.parent.node))return void s.add(t.key);let r=!0,o=!1;(t.children||[]).filter((e=>!l(e.node))).forEach((({key:e})=>{const t=a.has(e);r&&!t&&(r=!1),o||!t&&!i.has(e)||(o=!0)})),r||a.delete(t.key),o&&i.add(t.key),s.add(t.key)}));return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(o(i,a))}}(d,t.halfCheckedKeys,u,p,c),h}},19976:function(e,t,n){function r(e,t){return e[t]}n.d(t,{Z:function(){return r}})},69727:function(e,t,n){n.d(t,{F:function(){return m},H8:function(){return f},I8:function(){return h},N9:function(){return p},km:function(){return s},oH:function(){return u},w$:function(){return c},zn:function(){return d}});var r=n(23753),l=n(67763),o=n(48107),a=n(19976);function i(e,t){return`${e}-${t}`}function s(e,t){return null!=e?e:t}function c(e){const{title:t,_title:n,key:r,children:l}=e||{},o=t||"title";return{title:o,_title:n||[o],key:r||"key",children:l||"children"}}function d(e){return function e(t){return(0,r.Z)(t).map((t=>{if(!function(e){return e&&e.type&&e.type.isTreeNode}(t))return(0,o.ZP)(!t,"Tree/TreeNode can only accept TreeNode as children."),null;const{key:n}=t,{children:r,...l}=t.props,a={key:n,...l},i=e(r);return i.length&&(a.children=i),a})).filter((e=>e))}(e)}function u(e,t,n){const{_title:r,key:o,children:a}=c(n),d=new Set(!0===t?[]:t),u=[];return function e(n,c=null){return n.map(((h,p)=>{const f=i(c?c.pos:"0",p),m=s(h[o],f);let g;for(let e=0;e<r.length;e+=1){const t=r[e];if(void 0!==h[t]){g=h[t];break}}const b=Object.assign((0,l.Z)(h,[...r,o,a]),{title:g,key:m,parent:c,pos:f,children:null,data:h,isStart:[...c?c.isStart:[],0===p],isEnd:[...c?c.isEnd:[],p===n.length-1]});return u.push(b),!0===t||d.has(m)?b.children=e(h[a]||[],b):b.children=[],b}))}(e),u}function h(e,{initWrapper:t,processEntity:n,onProcessFinished:r,externalGetKey:l,childrenPropName:o,fieldNames:a}={},d){const u=l||d,h={},p={};let f={posEntities:h,keyEntities:p};return t&&(f=t(f)||f),function(e,t,n){let r={};r="object"==typeof n?n:{externalGetKey:n},r=r||{};const{childrenPropName:l,externalGetKey:o,fieldNames:a}=r,{key:d,children:u}=c(a),h=l||u;let p;o?"string"==typeof o?p=e=>e[o]:"function"==typeof o&&(p=e=>o(e)):p=(e,t)=>s(e[d],t),function n(r,l,o,a){const s=r?r[h]:e,c=r?i(o.pos,l):"0",d=r?[...a,r]:[];if(r){const e=p(r,c),n={node:r,index:l,pos:c,key:e,parentPos:o.node?o.pos:null,level:o.level+1,nodes:d};t(n)}s&&s.forEach(((e,t)=>{n(e,t,{node:r,pos:c,level:o?o.level+1:-1},d)}))}(null)}(e,(e=>{const{node:t,index:r,pos:l,key:o,parentPos:a,level:i,nodes:c}=e,d={node:t,nodes:c,index:r,key:o,pos:l,level:i},u=s(o,l);h[l]=d,p[u]=d,d.parent=h[a],d.parent&&(d.parent.children=d.parent.children||[],d.parent.children.push(d)),n&&n(d,f)}),{externalGetKey:u,childrenPropName:o,fieldNames:a}),r&&r(f),f}function p(e,t,n,r){return!1!==e&&(e||!t&&!n||t&&r&&!n)}function f(e,{expandedKeys:t,selectedKeys:n,loadedKeys:r,loadingKeys:l,checkedKeys:o,halfCheckedKeys:i,dragOverNodeKey:s,dropPosition:c,keyEntities:d}){const u=(0,a.Z)(d,e);return{eventKey:e,expanded:-1!==t.indexOf(e),selected:-1!==n.indexOf(e),loaded:-1!==r.indexOf(e),loading:-1!==l.indexOf(e),checked:-1!==o.indexOf(e),halfChecked:-1!==i.indexOf(e),pos:String(u?u.pos:""),dragOver:s===e&&0===c,dragOverGapTop:s===e&&-1===c,dragOverGapBottom:s===e&&1===c}}function m(e){const{data:t,expanded:n,selected:r,checked:l,loaded:a,loading:i,halfChecked:s,dragOver:c,dragOverGapTop:d,dragOverGapBottom:u,pos:h,active:p,eventKey:f}=e,m={...t,expanded:n,selected:r,checked:l,loaded:a,loading:i,halfChecked:s,dragOver:c,dragOverGapTop:d,dragOverGapBottom:u,pos:h,active:p,key:f};return"props"in m||Object.defineProperty(m,"props",{get(){return(0,o.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),m}},26829:function(e,t,n){n.d(t,{m:function(){return l}});var r=n(75271);const l=e=>{const[t,n]=(0,r.useState)(null);return[(0,r.useCallback)(((r,l,o)=>{const a=t??r,i=Math.min(a||0,r),s=Math.max(a||0,r),c=l.slice(i,s+1).map(e),d=c.some((e=>!o.has(e))),u=[];return c.forEach((e=>{d?(o.has(e)||u.push(e),o.add(e)):(o.delete(e),u.push(e))})),n(d?s:null),u}),[t]),n]}},6556:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(36304),l=(n(75271),n(52676)),o=n(58230),a=n(76756),i=n(18216),s=n(79112),c=n(61884),d=n(82187),u=n(56965),h=(0,c.kc)((({token:e,css:t})=>({alertBlockInfo:t`
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
    `}))),p=u.ZP.div`
  font-weight: 600;
  color: var(--ant-color-text);
`,f=u.ZP.div`
  word-break: break-word;
  color: ${e=>e.$hasTitle?"var(--ant-color-text-secondary)":"var(--ant-color-text)"};
  white-space: pre-line;
`,m=e=>{let{message:t,type:n,rows:c=1,ellipsis:u,style:m,title:g,contentStyle:b,icon:y,maxHeight:x=86,overlayScrollerProps:v={}}=e,{styles:k}=h();return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsx)("div",{className:d(k.alertBlockInfo,n),style:{...m},children:(0,l.jsxs)(o.default.Paragraph,{ellipsis:u??{rows:c,tooltip:t},children:[(0,l.jsx)("div",{className:d("title",n),children:(0,l.jsx)("span",{className:d("info-icon",n),children:y??(0,l.jsx)("transition"===n?a.Z:"success"===n?i.Z:s.Z,{})})}),g&&(0,l.jsx)(p,{className:"title-text",children:g}),(0,l.jsx)(r.Z,{maxHeight:x,style:{...b},...v,children:(0,l.jsx)(f,{$hasTitle:!!g,className:d("content",n),children:t})})]})}):null})}},87649:function(e,t,n){n.d(t,{Z:function(){return a}});n(75271);var r=n(52676),l=n(19593),o=(0,n(61884).kc)((({css:e,token:t})=>({group:e`
    display: flex;
    gap: 16px;
    width: 100%;
  `,grid:e`
    display: grid;
    gap: 16px;
    width: 100%;
  `,card:e`
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadiusLG}px;
    background-color: ${t.colorBgContainer};
    cursor: pointer;
    transition:
      border-color 0.2s,
      background-color 0.2s;

    &:hover {
      border-color: ${t.colorPrimaryHover};
    }
  `,cardActive:e`
    border-color: ${t.colorPrimary};
    background-color: ${t.colorPrimaryBg};

    &:hover {
      border-color: ${t.colorPrimary};
    }
  `,cardActiveGhost:e`
    background-color: ${t.colorBgContainer};
  `,cardDisabled:e`
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      border-color: ${t.colorBorder};
    }
  `,radio:e`
    /* Strip the wrapper's trailing margin so the flex gap owns the
       spacing. */
    margin-top: 0px;
    margin-inline-end: 0;
    pointer-events: none;

    .ant-radio {
      border-width: 1.5px;
    }
  `,content:e`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  `,title:e`
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `,desc:e`
    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,badge:e`
    position: absolute;
    top: 8px;
    right: 8px;
    /* Let the card own the click; the badge is decorative. */
    pointer-events: none;
  `})));function a(e){let{value:t,onChange:n,options:a=[],disabled:i,columns:s,ghost:c,className:d,styles:u,classNames:h}=e,{styles:p,cx:f}=o(),m=e=>{i||e.disabled||e.value===t||n?.(e.value)};return(0,r.jsx)("div",{role:"radiogroup",className:f(s?p.grid:p.group,d,h?.root),style:{...s?{gridTemplateColumns:`repeat(${s}, minmax(0, 1fr))`}:void 0,...u?.root},children:a.map((e=>{let n=e.value===t,o=i||e.disabled;return(0,r.jsxs)("div",{role:"radio","aria-checked":n,"aria-disabled":o,tabIndex:o?-1:0,className:f(p.card,{[p.cardActive]:n,[p.cardActiveGhost]:n&&c,[p.cardDisabled]:o},h?.card),style:u?.card,onClick:()=>m(e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),m(e))},children:[null!=e.badge&&(0,r.jsx)("div",{className:f(p.badge,h?.badge),style:u?.badge,children:e.badge}),(0,r.jsx)(l.ZP,{checked:n,disabled:o,className:f(p.radio,h?.radio),style:u?.radio,onChange:()=>{}}),(0,r.jsxs)("div",{className:f(p.content,h?.content),style:u?.content,children:[(0,r.jsx)("div",{className:f(p.title,h?.title),style:u?.title,children:e.label}),null!=e.description&&(0,r.jsx)("div",{className:f(p.desc,h?.description),style:u?.description,children:e.description})]})]},e.value)}))})}},58526:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67988),l=n(43220),o=n(25486),a=n(91259),i=n(75271),s=n(52676),c=n(56965).ZP.div`
  width: 100%;
  padding-inline: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-editor-header-bg);
`,d=e=>{let{code:t,copyText:n="",defaultValue:d,options:u=[],headerHeight:h=40,height:p=380,showTitle:f=!1,lang:m,onChange:g}=e||{},[b,y]=i.useState(d||"");return(0,s.jsx)(l.Z,{header:(0,s.jsxs)(c,{children:[(0,s.jsx)(a.Z,{height:h,defaultValue:d,value:b,size:"small",options:u,showTitle:f,onChange:e=>{y(e),g?.(e)}}),(0,s.jsx)(r.Z,{text:n||t,size:"small",style:{color:"rgba(255,255,255,.7)"}})]}),children:(0,s.jsx)(o.Z,{height:p,theme:"dark",code:t,lang:m||b,copyable:!1})})}},43220:function(e,t,n){n.d(t,{Z:function(){return s}});n(75271);var r=n(52676),l=n(82187),o=n(56965),a=o.ZP.div`
  height: ${e=>e.$height?`${e.$height}px`:"auto"};
  display: flex;
  padding-block: 0;
  justify-content: space-between;
  align-items: center;
`,i=o.ZP.div`
  border-radius: var(--border-radius-mini);
  overflow: hidden;

  &.bordered {
    border: 1px solid var(--ant-color-border);
  }
  &.borderless {
    border: none;
  }
  .code-pre {
    margin-bottom: 0;
  }
  .scrollbar {
    .slider {
      border-radius: 6px;
    }
  }
`,s=({headerHeight:e=40,header:t,children:n,variant:o="borderless",styles:s={}})=>(0,r.jsxs)(i,{style:{...s.wrapper},className:l({bordered:"bordered"===o,borderless:"borderless"===o},"editor-wrap"),children:[t&&(0,r.jsx)(a,{$height:e,children:t}),(0,r.jsx)("div",{children:n})]})},49799:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(39930),l=n(63922),o=n(843),a=n(33819),i=n(57998),s=n(17465),c=n(81764),d=n(75271),u=n(52676),h=n(68195),p=e=>{let{label:t,placeholder:n,children:p,required:f,description:m,options:g,allowNull:b,isInFormItems:y=!0,notFoundContent:x=null,loading:v,footer:k,alwaysFocus:w=!1,styles:$,...C}=e,S=(0,r.Z)(),[E,Z]=(0,d.useState)(!1),N=(0,d.useRef)(null),j="",I=h.Z?.Item?.useStatus?.();j=e.status||(y?I?.status:"")||"";let T=(0,d.useMemo)((()=>g?.length?(0,c.cloneDeep)(g).map((e=>(e.locale&&(e.label=S.formatMessage({id:e.label})),e))):[]),[g,S]);(0,d.useEffect)((()=>{((0,l.JL)(e.value)||b&&(null===e.value||void 0===e.value))&&Z(!0)}),[e.value,b]);return(0,u.jsx)(i.Z,{children:(0,u.jsx)(a.Z,{className:"seal-select-wrapper",status:j,label:t,isFocus:w||E,required:f,description:m,disabled:e.disabled,onClick:()=>{!e.disabled&&!E&&(N.current?.focus?.(),Z(!0))},children:(0,u.jsx)(s.Z,{...C,styles:$,placeholder:n,footer:k,ref:N,options:p?void 0:T,onFocus:t=>{Z(!0),e.onFocus?.(t)},onBlur:t=>{b&&null===e.value?Z(!0):e.value||Z(!1),e.onBlur?.(t)},onChange:(t,n)=>{(0,l.JL)(t)||b&&null===t?Z(!0):Z(!1),e.onChange?.(t||null,n)},notFoundContent:(0,u.jsx)(o.Z,{loading:v,notFoundContent:x}),children:p})})})}},1039:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(39930),l=n(9926),o=(n(75271),n(52676)),a=n(59362),i=n(56643),s=n(56965),c=s.ZP.div`
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
`,d=s.ZP.div`
  margin-top: 8px;
`,u=({required:e,children:t,label:n,description:s,labelExtra:u,onAdd:h,btnText:p,disabled:f,button:m,styles:g})=>{let b=(0,r.Z)();return(0,o.jsxs)(c,{style:g?.wrapper,children:[n&&(0,o.jsx)("span",{className:"label",children:(0,o.jsx)(l.Z,{required:e,label:n,description:s,labelExtra:u})}),t,!f&&(0,o.jsx)(d,{children:m||(0,o.jsxs)(a.ZP,{variant:"filled",color:"default",block:!0,onClick:h,style:{borderRadius:"var(--border-radius-base)"},children:[(0,o.jsx)(i.Z,{className:"font-size-14"}),p||b.formatMessage({id:"common.button.addSelector"})]})})]})}},99519:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(73349),l=n(58152),o=n(75271),a=(0,o.createContext)({scrollToBottom:()=>{}}),i=n(52676),s=n(26578),c=n(56965).ZP.div`
  display: flex;
  align-items: center;
  max-width: 360px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,d=e=>{let t=o.useRef(null),{saveScrollHeight:n,restoreScrollHeight:d}=(0,r.Z)(),{initialize:u,destroyInstance:h,scrollToBottom:p}=(0,l.Z)();return o.useEffect((()=>{e.open?n():d()}),[e.open]),o.useEffect((()=>{let n=null;return e.open&&(n=setTimeout((()=>{t.current&&u(t.current)}),100)),()=>{n&&clearTimeout(n),h()}}),[e.open,u]),(0,i.jsx)(s.Z,{title:(0,i.jsx)(c,{children:e.title}),destroyOnHidden:!0,styles:{container:{padding:0},header:{padding:"var(--ant-modal-content-padding)",paddingBottom:"0",marginBottom:16},body:{padding:"0",paddingBlockEnd:e.footer?"0":"24px"},footer:e.footer?{padding:"12px 24px 24px",margin:"0"}:{}},...e,children:(0,i.jsx)(a.Provider,{value:{scrollToBottom:p},children:(0,i.jsx)("div",{ref:t,"data-overlayscrollbars-initialize":!0,className:"overlay-scroller-wrapper",hidden:!1,style:{paddingInline:24,paddingBlockEnd:0,maxHeight:e.maxContentHeight||500,overflowY:"auto",width:"100%"},children:e.children})})})}},84908:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(11987),l=(n(75271),n(52676)),o=(e=1,t)=>({gridColumn:`span ${e}`,minWidth:0,display:"flex",alignItems:"center",paddingInline:"var(--ant-table-cell-padding-inline)",...t}),a=({gridTemplate:e,prefixWidth:t=0,style:n,className:o,children:a})=>(0,l.jsx)("div",{style:{marginInline:-16},children:(0,l.jsx)(r.Z,{children:(0,l.jsxs)("div",{className:o,style:{width:"100%",display:"grid",gridTemplateColumns:`${t}px ${e}`,gridAutoFlow:"row",alignItems:"center",...n},children:[(0,l.jsx)("span",{style:{gridColumn:"span 1"}}),a]})})});a.Cell=({span:e=1,style:t,children:n,...r})=>(0,l.jsx)("div",{...r,style:o(e,t),children:n})},7062:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(54660),l=n(52676),o=({value:e,children:t})=>(0,l.jsx)(r.Z.Provider,{value:e,children:t})},30995:function(e,t,n){n.d(t,{Z:function(){return ie}});var r=n(39930),l=n(52676),o=n(84130),a=n(75271),i=n(4814),s=n(26829),c=n(28674),d=n(17944);const u=e=>{const t=new Map;return e.forEach(((e,n)=>{t.set(e,n)})),t};var h=n(46882),p=n(9321),f=n(51241),m=n(91875),g=n(26709),b=n(15528),y=n(95685),x=n(17671),v=n(49748);const k=({type:e,actions:t,moveToLeft:n,moveToRight:r,leftActive:l,rightActive:o,direction:i,disabled:s})=>{const c="right"===e,d=c?t[0]:t[1],u=c?r:n,h=c?o:l,p=function(e,t){const n="right"===e;return"rtl"!==t?n?a.createElement(x.Z,null):a.createElement(y.Z,null):n?a.createElement(y.Z,null):a.createElement(x.Z,null)}(e,i);if(a.isValidElement(d)){const e=d,t=t=>{e?.props?.onClick?.(t),u?.(t)};return a.cloneElement(e,{disabled:s||!h,onClick:t})}return a.createElement(v.Z,{type:"primary",size:"small",disabled:s||!h,onClick:e=>u?.(e),icon:p},d)};var w=e=>{const{className:t,style:n,oneWay:r,actions:l,...o}=e;return a.createElement("div",{className:t,style:n},a.createElement(k,{type:"right",actions:l,...o}),!r&&a.createElement(k,{type:"left",actions:l,...o}),l.slice(r?1:2))};var $=(e,t,n)=>{const r=a.useMemo((()=>(e||[]).map((e=>t?{...e,key:t(e)}:e))),[e,t]),[l,o]=a.useMemo((()=>{const e=[],t=Array.from({length:n?.length??0}),l=u(n||[]);return r.forEach((n=>{if(l.has(n.key)){const e=l.get(n.key);t[e]=n}else e.push(n)})),[e,t]}),[r,n]);return[r,l.filter(Boolean),o.filter(Boolean)]},C=n(87117);const S=[];function E(e,t){const n=e.filter((e=>t.has(e)));return e.length===n.length?e:n}function Z(e){return Array.from(e).join(";")}var N=function(e,t,n){const[r,l]=a.useMemo((()=>[new Set(e.map((e=>e?.key))),new Set(t.map((e=>e?.key)))]),[e,t]),[i,s]=(0,C.zk)(S,n),c=a.useMemo((()=>E(i,r)),[i,r]),d=a.useMemo((()=>E(i,l)),[i,l]);a.useEffect((()=>{s([].concat((0,o.Z)(E(i,r)),(0,o.Z)(E(i,l))))}),[Z(r),Z(l)]);const u=(0,C.zX)((e=>{s([].concat((0,o.Z)(e),(0,o.Z)(d)))})),h=(0,C.zX)((e=>{s([].concat((0,o.Z)(c),(0,o.Z)(e)))}));return[c,d,u,h]},j=n(88880),I=n(82924);var T=e=>{const{placeholder:t="",value:n,prefixCls:r,disabled:l,onChange:o,handleClear:i}=e,s=a.useCallback((e=>{o?.(e),""===e.target.value&&i?.()}),[o]);return a.createElement(I.Z,{placeholder:t,className:r,value:n,onChange:s,disabled:l,allowClear:!0,prefix:a.createElement(j.Z,null)})},A=n(1890),P=n(82944),R=n(21379),B=n(35835),K=n(53168),H=n(46061);const L=e=>{const{prefixCls:t,classNames:n,styles:r,renderedText:l,renderedEl:o,item:s,checked:c,disabled:d,onClick:u,onRemove:h,showRemove:p}=e,f=d||s?.disabled,m=(0,i.W)(`${t}-content-item`,n.item,{[`${t}-content-item-disabled`]:f,[`${t}-content-item-checked`]:c&&!f});let y;("string"==typeof l||(0,P.hj)(l))&&(y=String(l));const[x]=(0,g.Z)("Transfer",b.Z.Transfer),v={className:m,style:r.item,title:y},k=a.createElement("span",{className:(0,i.W)(`${t}-content-item-text`,n.itemContent),style:r.itemContent},o);return p?a.createElement("li",{...v},k,a.createElement("button",{type:"button",disabled:f,className:`${t}-content-item-remove`,"aria-label":x?.remove,onClick:()=>h?.(s)},a.createElement(H.Z,null))):(v.onClick=f?void 0:e=>u(s,e),a.createElement("li",{...v},a.createElement(R.Z,{className:(0,i.W)(`${t}-checkbox`,n.itemIcon),style:r.itemIcon,checked:c,disabled:f}),k))};var W=a.memo(L);const z=["handleFilter","handleClear","checkedKeys"],O=(e,t)=>{const{prefixCls:n,classNames:r,styles:l,filteredRenderItems:o,selectedKeys:s,disabled:c,showRemove:d,pagination:u,onScroll:h,onItemSelect:p,onItemRemove:f}=e,[m,g]=a.useState(1),b=a.useMemo((()=>{if(!u)return null;return(e=>({simple:!0,showSizeChanger:!1,showLessItems:!1,...e}))((0,P.PO)(u)?u:{})}),[u]),[y,x]=(0,C.zk)(10,b?.pageSize);a.useEffect((()=>{if(b){const e=Math.ceil(o.length/y);g(Math.min(m,e))}}),[o,b,y]);const v=(e,t)=>{p(e.key,!s.includes(e.key),t)},k=e=>{f?.([e.key])},w=a.useMemo((()=>b?o.slice((m-1)*y,m*y):o),[m,o,b,y]);a.useImperativeHandle(t,(()=>({items:w})));const $=b?a.createElement(K.Z,{size:"small",disabled:c,simple:b.simple,pageSize:y,showLessItems:b.showLessItems,showSizeChanger:b.showSizeChanger,className:`${n}-pagination`,total:o.length,current:m,onChange:e=>{g(e)},onShowSizeChange:(e,t)=>{g(e),x(t)}}):null;return a.createElement(a.Fragment,null,a.createElement("ul",{className:(0,i.W)(`${n}-content`,r.list,{[`${n}-content-show-remove`]:d}),style:l.list,onScroll:h},(w||[]).map((({renderedEl:e,renderedText:t,item:o})=>a.createElement(W,{key:o.key,prefixCls:n,classNames:r,styles:l,item:o,renderedText:t,renderedEl:e,showRemove:d,onClick:v,onRemove:k,checked:s.includes(o.key),disabled:c})))),$)};var M=a.forwardRef(O);const F=()=>null;function G(e){return e.filter((e=>!e.disabled)).map((e=>e.key))}var D=e=>{const{prefixCls:t,style:n,classNames:r,styles:l,dataSource:s=[],titleText:c="",checkedKeys:d,disabled:h,showSearch:p=!1,searchPlaceholder:f,notFoundContent:m,selectAll:g,deselectAll:b,selectCurrent:y,selectInvert:x,removeAll:v,removeCurrent:k,showSelectAll:w=!0,showRemove:$,pagination:S,direction:E,itemsUnit:Z,itemUnit:N,selectAllLabel:j,selectionsIcon:I,footer:K,renderList:H,onItemSelectAll:L,onItemRemove:W,handleFilter:O,handleClear:D,filterOption:V,render:q=F}=e,X=`${t}-section`,_=`${t}-list`,J=(e=>(0,P.PO)(e)?{...e,defaultValue:e.defaultValue||""}:{defaultValue:"",placeholder:""})(p),[U,Y]=(0,a.useState)(J.defaultValue),Q=(0,a.useRef)({}),ee=e=>{Y(e.target.value),O(e)},te=()=>{Y(""),D()},ne=e=>{const t=q(e),n=!(!(r=t)||a.isValidElement(r)||"[object Object]"!==Object.prototype.toString.call(r));var r;const l=n?t.label:t,o=n?t.value:function(e,t){for(const n of[e,t.title,t.key])if("string"==typeof n||(0,P.hj)(n))return String(n);return""}(t,e);return{item:e,renderedEl:l,renderedText:o}},re=(0,a.useMemo)((()=>Array.isArray(m)?m["left"===E?0:1]:m),[m,E]),[le,oe]=(0,a.useMemo)((()=>{const e=[],t=[];return s.forEach((n=>{const r=ne(n);U&&!((e,t)=>"function"==typeof V?V(U,t,E):e.includes(U))(r.renderedText,n)||(e.push(n),t.push(r))})),[e,t]}),[s,U]),ae=(0,a.useMemo)((()=>le.filter((e=>d.includes(e.key)&&!e.disabled))),[d,le]),ie=(0,a.useMemo)((()=>{if(0===ae.length)return"none";const e=u(d);return le.every((t=>e.has(t.key)||!!t.disabled))?"all":"part"}),[ae.length,d,le]),se=a.createElement(R.Z,{disabled:0===s.filter((e=>!e.disabled)).length||h,checked:"all"===ie,indeterminate:"part"===ie,className:`${_}-checkbox`,onChange:()=>{L?.(le.filter((e=>!e.disabled)).map((({key:e})=>e)),"all"!==ie)}}),ce=K&&(K.length<2?K(e):K(e,{direction:E})),de=ce?a.createElement("div",{className:(0,i.W)(`${_}-footer`,r.footer),style:l.footer},ce):null,ue=!$&&!S&&se;let he;he=$?[S?{key:"removeCurrent",label:k,onClick(){const e=G((Q.current?.items||[]).map((e=>e.item)));W?.(e)}}:null,{key:"removeAll",label:v,onClick(){W?.(G(le))}}].filter(Boolean):[{key:"selectAll",label:"all"===ie?b:g,onClick(){const e=G(le);L?.(e,e.length!==d.length)}},S?{key:"selectCurrent",label:y,onClick(){const e=Q.current?.items||[];L?.(G(e.map((e=>e.item))),!0)}}:null,{key:"selectInvert",label:x,onClick(){const e=G((Q.current?.items||[]).map((e=>e.item))),t=new Set(d),n=new Set(t);e.forEach((e=>{t.has(e)?n.delete(e):n.add(e)})),L?.((0,o.Z)(n),"replace")}}];const pe=a.createElement(B.Z,{className:`${_}-header-dropdown`,menu:{items:he},disabled:h},void 0!==I?I:a.createElement(A.Z,null));return a.createElement("div",{className:(0,i.W)(X,r.section,{[`${X}-with-pagination`]:!!S,[`${X}-with-footer`]:!!ce}),style:{...n,...l.section}},a.createElement("div",{className:(0,i.W)(`${_}-header`,r.header),style:l.header},w?a.createElement(a.Fragment,null,ue,pe):null,a.createElement("span",{className:`${_}-header-selected`},((e,t)=>{if(j)return"function"==typeof j?j({selectedCount:e,totalCount:t}):j;const n=t>1?Z:N;return a.createElement(a.Fragment,null,(e>0?`${e}/`:"")+t," ",n)})(ae.length,le.length)),a.createElement("span",{className:(0,i.W)(`${_}-header-title`,r.title),style:l.title},c)),(()=>{const t=p?a.createElement("div",{className:`${_}-body-search-wrapper`},a.createElement(T,{prefixCls:`${_}-search`,onChange:ee,handleClear:te,placeholder:J.placeholder||f,value:U,disabled:h})):null,{customize:n,bodyContent:o}=(e=>{let t=H?H({...e,onItemSelect:(t,n)=>e.onItemSelect(t,n)}):null;const n=!!t;return n||(t=a.createElement(M,{ref:Q,...e,prefixCls:_})),{customize:n,bodyContent:t}})({...(0,C.CE)(e,z),filteredItems:le,filteredRenderItems:oe,selectedKeys:d,classNames:r,styles:l});let s;return s=n?a.createElement("div",{className:`${_}-body-customize-wrapper`},o):le.length?o:a.createElement("div",{className:`${_}-body-not-found`},re),a.createElement("div",{className:(0,i.W)(`${_}-body`,{[`${_}-body-with-search`]:p},r.body),style:l.body},t,s)})(),de)},V=n(22449),q=n(27618),X=n(30697),_=n(67902);const J=e=>{const{antCls:t,componentCls:n,listHeight:r,controlHeightLG:l}=e,o=`${t}-table`,a=`${t}-input`;return{[`${n}-customize-list`]:{[`${n}-section`]:{flex:"1 1 50%",width:"auto",height:"auto",minHeight:r,minWidth:0},[`${o}-wrapper`]:{[`${o}-small`]:{border:0,borderRadius:0,[`${o}-selection-column`]:{width:l,minWidth:l}},[`${o}-pagination${o}-pagination`]:{margin:0,padding:e.paddingXS}},[`${a}[disabled]`]:{backgroundColor:"transparent"}}}},U=(e,t)=>{const{componentCls:n,colorBorder:r}=e;return{[`${n}-section`]:{borderColor:t,[`${n}-list-search:not([disabled])`]:{borderColor:r}}}},Y=e=>{const{componentCls:t}=e;return{[`${t}-status-error`]:{...U(e,e.colorError)},[`${t}-status-warning`]:{...U(e,e.colorWarning)}}},Q=e=>{const{componentCls:t,colorBorder:n,colorSplit:r,lineWidth:l,itemHeight:o,headerHeight:a,transferHeaderVerticalPadding:i,itemPaddingBlock:s,controlItemBgActive:c,colorTextDisabled:d,colorTextSecondary:u,listHeight:h,listWidth:p,listWidthLG:f,fontSizeIcon:m,marginXS:g,paddingSM:b,lineType:y,antCls:x,iconCls:v,motionDurationSlow:k,controlItemBgHover:w,borderRadiusLG:$,colorBgContainer:C,colorText:S,controlItemBgActiveHover:E}=e,Z=(0,V.bf)(e.calc($).sub(l).equal());return{display:"flex",flexDirection:"column",width:p,height:h,border:`${(0,V.bf)(l)} ${y} ${n}`,borderRadius:e.borderRadiusLG,"&-with-pagination":{width:f,height:"auto"},[`${t}-list`]:{"&-search":{[`${v}-search`]:{color:d}},"&-header":{display:"flex",flex:"none",alignItems:"center",height:a,padding:`${(0,V.bf)(e.calc(i).sub(l).equal())} ${(0,V.bf)(b)} ${(0,V.bf)(i)}`,color:S,background:C,borderBottom:`${(0,V.bf)(l)} ${y} ${r}`,borderRadius:`${(0,V.bf)($)} ${(0,V.bf)($)} 0 0`,"> *:not(:last-child)":{marginInlineEnd:4},"> *":{flex:"none"},"&-title":{...q.vS,flex:"0 1 auto",textAlign:"end",marginInlineStart:"auto"},"&-dropdown":{...(0,q.Ro)(),fontSize:m,transform:"translateY(10%)",cursor:"pointer","&[disabled]":{cursor:"not-allowed"}}},"&-body":{display:"flex",flex:"auto",flexDirection:"column",fontSize:e.fontSize,minHeight:0,"&-search-wrapper":{position:"relative",flex:"none",padding:b}},"&-content":{flex:"auto",margin:0,padding:0,overflow:"auto",listStyle:"none",borderRadius:`0 0 ${Z} ${Z}`,"&-item":{display:"flex",alignItems:"center",minHeight:o,padding:`${(0,V.bf)(s)} ${(0,V.bf)(b)}`,transition:`all ${k}`,"> *:not(:last-child)":{marginInlineEnd:g},"> *":{flex:"none"},"&-text":{...q.vS,flex:"auto"},"&-remove":{...(0,q.Nd)(e),color:n,"&:hover, &:focus":{color:u},"&:disabled":{color:d,cursor:"not-allowed"}},[`&:not(${t}-list-content-item-disabled)`]:{"&:hover":{backgroundColor:w,cursor:"pointer"},[`&${t}-list-content-item-checked:hover`]:{backgroundColor:E}},"&-checked":{backgroundColor:c},"&-disabled":{color:d,cursor:"not-allowed"}},[`&-show-remove ${t}-list-content-item:not(${t}-list-content-item-disabled):hover`]:{background:"transparent",cursor:"default"}},"&-pagination":{padding:e.paddingXS,textAlign:"end",borderTop:`${(0,V.bf)(l)} ${y} ${r}`,[`${x}-pagination-options`]:{paddingInlineEnd:e.paddingXS}},"&-body-not-found":{flex:"none",width:"100%",margin:"auto 0",color:d,textAlign:"center"},"&-footer":{borderTop:`${(0,V.bf)(l)} ${y} ${r}`},"&-checkbox":{lineHeight:1}}}},ee=e=>{const{antCls:t,iconCls:n,componentCls:r,marginXS:l,marginXXS:o,fontSizeIcon:a,colorBgContainerDisabled:i}=e;return{[r]:{...(0,q.Wf)(e),position:"relative",display:"flex",alignItems:"stretch",[`${r}-disabled`]:{[`${r}-section`]:{background:i}},[`${r}-section`]:Q(e),[`${r}-actions`]:{display:"flex",flex:"none",flexDirection:"column",alignSelf:"center",margin:`0 ${(0,V.bf)(l)}`,verticalAlign:"middle",gap:o,[`${t}-btn ${n}`]:{fontSize:a}}}}},te=e=>{const{componentCls:t}=e;return{[`${t}-rtl`]:{direction:"rtl"}}};var ne=(0,X.I$)("Transfer",(e=>{const t=(0,_.IX)(e);return[ee(t),J(t),Y(t),te(t)]}),(e=>{const{fontSize:t,lineHeight:n,controlHeight:r,controlHeightLG:l,lineWidth:o}=e,a=Math.round(t*n);return{listWidth:180,listHeight:200,listWidthLG:250,headerHeight:l,itemHeight:r,itemPaddingBlock:(r-a)/2,transferHeaderVerticalPadding:Math.ceil((l-o-a)/2)}}));const re=e=>{const{prefixCls:t,className:n,rootClassName:r,classNames:l,styles:y,style:x,listStyle:v,operationStyle:k,operations:C,actions:S,dataSource:E,targetKeys:Z=[],selectedKeys:j,selectAllLabels:I=[],locale:T={},titles:A,disabled:P,showSearch:R=!1,showSelectAll:B,oneWay:K,pagination:H,status:L,selectionsIcon:W,filterOption:z,render:O,footer:M,children:F,rowKey:G,onScroll:V,onChange:q,onSearch:X,onSelectChange:_}=e,{getPrefixCls:J,renderEmpty:U,direction:Y,className:Q,style:ee,classNames:te,styles:re,selectionsIcon:le}=(0,h.dj)("transfer"),oe=(0,a.useContext)(f.Z),ae=P??oe,ie={...e,disabled:ae},se=J("transfer",t),[ce,de]=ne(se),ue=S||C||[],he="rtl"===Y,[pe,fe,me]=$(E,G,Z),[ge,be,ye,xe]=N(fe,me,j),[ve,ke]=(0,s.m)((e=>e.key)),[we,$e]=(0,s.m)((e=>e.key)),Ce=(0,a.useCallback)(((e,t)=>{if("left"===e){const e="function"==typeof t?t(ge||[]):t;ye(e)}else{const e="function"==typeof t?t(be||[]):t;xe(e)}}),[ge,be]),Se=(e,t)=>{("left"===e?ke:$e)(t)},Ee=(0,a.useCallback)(((e,t)=>{"left"===e?_?.(t,be):_?.(ge,t)}),[ge,be]),Ze=e=>{const t="right"===e?ge:be,n=(e=>{const t=new Map;return e.forEach((({disabled:e,key:n},r)=>{e&&t.set(n,r)})),t})(pe),r=t.filter((e=>!n.has(e))),l=u(r),o="right"===e?r.concat(Z):Z.filter((e=>!l.has(e))),a="right"===e?"left":"right";Ce(a,[]),Ee(a,[]),q?.(o,e,r)},Ne=(e,t,n)=>{Ce(e,(r=>{let l=[];if("replace"===n)l=t;else if(n)l=Array.from(new Set([].concat((0,o.Z)(r),(0,o.Z)(t))));else{const e=u(t);l=r.filter((t=>!e.has(t)))}return Ee(e,l),l})),Se(e,null)},je=(t,n,r,l)=>{const o="left"===t,a=o?ge:be,i=new Set(a),s=(o?fe:me).filter((e=>!e.disabled)),c=s.findIndex((e=>e.key===n));l&&a.length>0?((e,t,n,r)=>{("left"===e?ve:we)(r,t,n)})(t,s,i,c):((e,t,n,r,l)=>{t.has(n)&&(t.delete(n),Se(e,null)),r&&(t.add(n),Se(e,l))})(t,i,n,r,c);const d=Array.from(i);Ee(t,d),e.selectedKeys||Ce(t,d)},Ie=e=>"function"==typeof v?v({direction:e}):v||{},Te=(0,a.useContext)(m.aM),{hasFeedback:Ae,status:Pe}=Te,Re=(0,d.F)(Pe,L),Be=!F&&H,Ke=me.filter((e=>be.includes(e.key)&&!e.disabled)).length>0,He=fe.filter((e=>ge.includes(e.key)&&!e.disabled)).length>0,[Le,We]=(0,c.MW)([te,l],[re,y],{props:ie}),ze=(0,i.W)(se,{[`${se}-disabled`]:ae,[`${se}-customize-list`]:!!F,[`${se}-rtl`]:he},(0,d.Z)(se,Re,Ae),Q,n,r,ce,de,Le.root),[Oe]=(0,g.Z)("Transfer",b.Z.Transfer),Me=(Fe=Oe,{...Fe,notFoundContent:U?.("Transfer")||a.createElement(p.Z,{componentName:"Transfer"}),...T});var Fe;const[Ge,De]=(e=>A??e.titles??[])(Me),Ve=W??le;return a.createElement("div",{className:ze,style:{...ee,...We.root,...x}},a.createElement(D,{prefixCls:se,style:Ie("left"),classNames:Le,styles:We,titleText:Ge,dataSource:fe,filterOption:z,checkedKeys:ge,handleFilter:e=>X?.("left",e.target.value),handleClear:()=>X?.("left",""),onItemSelect:(e,t,n)=>{je("left",e,t,n?.shiftKey)},onItemSelectAll:(e,t)=>Ne("left",e,t),render:O,showSearch:R,renderList:F,footer:M,onScroll:e=>{V?.("left",e)},disabled:ae,direction:he?"right":"left",showSelectAll:B,selectAllLabel:I[0],pagination:Be,selectionsIcon:Ve,...Me}),a.createElement(w,{className:(0,i.W)(`${se}-actions`,Le.actions),rightActive:He,moveToRight:()=>{Ze("right"),Se("right",null)},leftActive:Ke,actions:ue,moveToLeft:()=>{Ze("left"),Se("left",null)},style:{...k,...We.actions},disabled:ae,direction:Y,oneWay:K}),a.createElement(D,{prefixCls:se,style:Ie("right"),classNames:Le,styles:We,titleText:De,dataSource:me,filterOption:z,checkedKeys:be,handleFilter:e=>X?.("right",e.target.value),handleClear:()=>X?.("right",""),onItemSelect:(e,t,n)=>je("right",e,t,n?.shiftKey),onItemSelectAll:(e,t)=>Ne("right",e,t),onItemRemove:e=>{Ce("right",[]),q?.(Z.filter((t=>!e.includes(t))),"left",(0,o.Z)(e))},render:O,showSearch:R,renderList:F,footer:M,onScroll:e=>{V?.("right",e)},disabled:ae,direction:he?"left":"right",showSelectAll:B,selectAllLabel:I[1],showRemove:K,pagination:Be,selectionsIcon:Ve,...Me}))};re.List=D,re.Search=T,re.Operation=w;var le=re,oe=n(61583),ae=n(56965).ZP.div`
  .ant-transfer-section {
    width: 100%;
    height: 300px;
    .anticon-more {
      display: none;
    }
    .ant-input-outlined {
      height: 32px;
      padding-block: 4px;
      border-radius: 4px;
    }
  }
  .ant-transfer-actions {
    margin: 0 16px;
    gap: 12px;
    .ant-btn-icon-only {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .ant-transfer-list-content {
    &::-webkit-scrollbar {
      width: var(--scrollbar-size);
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-scrollbar-thumb);
        border-radius: 4px;
      }
    }
    .ant-transfer-list-content-item {
      &:hover {
        background-color: var(--ant-control-item-bg-hover);
      }
      &.ant-transfer-list-content-item-checked {
        background-color: unset;
        &:hover {
          background-color: var(--ant-control-item-bg-hover);
        }
      }
    }
  }
  .ant-pagination {
    justify-content: center;
  }
`,ie=e=>{let t=(0,r.Z)(),n=e=>e.selectedCount?(0,l.jsx)("span",{style:{color:"var(--ant-color-text-secondary)"},children:t.formatMessage({id:"common.select.count"},{count:e.selectedCount})}):null;return(0,l.jsx)(ae,{children:(0,l.jsx)(le,{...e,selectAllLabels:e.selectAllLabels||[n,n],selectionsIcon:(0,l.jsx)(oe.Z,{style:{fontSize:14,marginBottom:3}})})})}},98173:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(75271);function l(e=[]){let[t,n]=(0,r.useState)(e),[l,o]=(0,r.useState)(null);return{expandedRowKeys:t,currentExpand:l,setCurrentExpand:o,clearExpandedRowKeys:()=>{n([]),o(null)},updateExpandedRowKeys:e=>{n(e)},removeExpandedRowKey:e=>{n(t.filter((t=>!e.includes(t))))},handleExpandChange:(0,r.useCallback)(((e,t,r)=>{e?(n((e=>[...e,r])),o(r)):(n((e=>e.filter((e=>e!==r)))),o(null))}),[]),handleExpandAll:(0,r.useCallback)(((e,t=[])=>{e||(n([]),o(null)),e&&n((e=>[...new Set([...e,...t])]))}),[])}}},43619:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(88061),l=n(66890),o=n(71179),a=n(17372),i=n(81764),s=n(75271),c=n(7056);function d(e,t){let{pauseOnHidden:n=!0,enabled:d=!0}=t||{},u=e,{services:h}=(0,r.Z)(),{request:p}=h,[f,m]=(0,s.useState)([]),g=(0,s.useRef)(null),b=(0,s.useRef)(null),{setChunkRequest:y,createAxiosToken:x}=(0,l.ZP)(),{updateChunkedList:v,cacheDataListRef:k}=(0,a.Z)({dataList:f,limit:1/0,setDataList:m}),w=e=>{i.each(e,(e=>{v(e)}))},$=(0,c.Z)((async()=>{g.current?.current?.cancel?.();try{g.current=y({url:`${u}`,params:{},handler:w})}catch{}})),C=(0,c.Z)((()=>{g.current?.current?.cancel?.(),b.current?.cancel?.()})),S=(0,c.Z)((async()=>{try{b.current?.cancel?.(),b.current=x();let e=await(async(e,t)=>p(u,{params:e,method:"GET",cancelToken:t?.token}))({page:-1},{token:b.current.token});k.current=e.items||[],m(e.items||[])}catch{}})),E=(0,c.Z)((()=>{C(),k.current=[]})),Z=(0,c.Z)((async()=>{await $()}));return(0,o.Z)({enabled:n&&d,onHidden:E,onVisible:Z}),(0,s.useEffect)((()=>d?($(),()=>{C()}):(E(),void m([]))),[d]),(0,s.useLayoutEffect)((()=>()=>{E()}),[]),{watchDataList:f,setWatchDataList:m,startWatch:$,cancelWatch:C,cancelRequestsOnPageInactive:E,resumeRequestsOnPageActive:Z,getAllDataList:S,deleteItemFromCache:e=>{k.current=k.current.filter((t=>t.id!==e)),m(k.current)}}}}}]);