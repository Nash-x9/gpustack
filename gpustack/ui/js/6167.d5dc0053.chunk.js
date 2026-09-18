"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6167],{69834:function(e,t,n){var r=n(15303),a=n(250),o=n(78451),i=n(75271),s=n(66664),l=n(52676),c=function(e){var t,n=e.record,r=e.users,o=null!==(t=n.creator_id)&&void 0!==t?t:n.owner_principal_id,i=null!=o?r.get(o):void 0;return i?(0,l.jsx)(a.Z,{ghost:!0,maxWidth:240,children:i}):(0,l.jsx)("span",{children:"-"})};t.Z=function(e){var t,n=(0,o.useIntl)(),a=(0,o.useAccess)(),u=!(null===(t=(0,r.DA)())||void 0===t||null===(t=t.listExtraColumns)||void 0===t||!t[e]),p=!!a.canSeeAdmin&&!u,d=(0,s.Z)(p);return(0,i.useMemo)((function(){return p?[{title:n.formatMessage({id:"gpuservice.creator"}),key:"creator",ellipsis:{showTitle:!1},render:function(e,t){return(0,l.jsx)(c,{record:t,users:d})}}]:[]}),[p,d,n])}},41647:function(e,t,n){n.d(t,{He:function(){return m},M1:function(){return l},k6:function(){return g},o4:function(){return u},rC:function(){return d},z4:function(){return x}});var r=n(90228),a=n.n(r),o=n(87999),i=n.n(o),s=n(78451),l="/gpu-instance-persistent-volumes",c="/gpu-instance-persistent-volume-types";function u(e,t){return p.apply(this,arguments)}function p(){return(p=i()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)(l,{method:"GET",params:t,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)(l,{method:"POST",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(l,"/").concat(t.id),{method:"PUT",data:t.data}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("".concat(l,"/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return b.apply(this,arguments)}function b(){return(b=i()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)(c,{method:"GET",params:t,headers:null==n?void 0:n.headers,cancelToken:null==n?void 0:n.token}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},85357:function(e,t,n){n.d(t,{q:function(){return r}});var r=(0,n(75271).createContext)({storageClassList:[]})},22951:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(48305),a=n.n(r),o=n(32585),i=n(7056),s=n(68195),l=n(75271),c=n(12240),u=n(22563),p=n(85983),d=n(49799),f=n(36546),m=n(78451),h=n(11129),g=n(85357),v=n(52676),x=function(e){var t=e.action,n=(e.open,e.showOrgScope),r=void 0===n||n,a=e.onOrgScopeChange,i=(0,m.useIntl)(),x=(0,u.Z)().getRuleMessage,b=(0,l.useContext)(g.q).storageClassList;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.Z.Item,{name:"name",rules:[{required:!0,message:x("input","common.table.name")},{pattern:o.Bp,message:i.formatMessage({id:"gpuservice.form.rule.name"})}],children:(0,v.jsx)(p.Z.Input,{disabled:t===o.Kd.EDIT,label:i.formatMessage({id:"common.table.name"}),required:!0})}),(0,v.jsx)(s.Z.Item,{name:"displayName",children:(0,v.jsx)(p.Z.Input,{trim:!1,label:i.formatMessage({id:"common.table.displayName"})})}),r&&(0,v.jsx)(c.Z,{name:"CreateOrgScopeField",context:{action:t,onChange:a}}),(0,v.jsxs)(h.Z,{gap:16,children:[(0,v.jsx)("div",{style:{flex:1},children:(0,v.jsx)(s.Z.Item,{name:["spec","type"],rules:[{required:!0,message:x("select","gpuservice.storage.type")}],children:(0,v.jsx)(d.Z,{disabled:t===o.Kd.EDIT,label:i.formatMessage({id:"gpuservice.storage.type"}),required:!0,options:b})})}),(0,v.jsx)("div",{style:{flex:1},children:(0,v.jsx)(s.Z.Item,{name:["spec","capacity"],normalize:function(e){return e?"".concat(e,"Gi"):void 0},getValueProps:function(e){return{value:e?String(e).replace(/Gi$/,""):""}},rules:[{required:!0,message:x("input","gpuservice.storage.capacity")}],children:(0,v.jsx)(f.Z,{disabled:t===o.Kd.EDIT,label:i.formatMessage({id:"gpuservice.storage.persistentVolume.capacity"}),required:!0})})})]})]})},b=(0,l.forwardRef)((function(e,t){var n=e.action,r=e.currentData,c=e.open,u=e.showOrgScope,p=void 0===u||u,d=e.onScopeChange,f=e.onFinish,m=e.onFinishFailed,h=s.Z.useForm(),g=a()(h,1)[0],b=s.Z.useWatch("organization_id",g),w=(0,l.useRef)(!0),y=(0,i.Z)((function(e){null==d||d(e)})),Z=(0,i.Z)((function(e){w.current=!1,g.setFieldValue(["spec","type"],void 0),y(null!=e?e:null)}));return(0,l.useEffect)((function(){c?w.current&&null!=b&&(w.current=!1,y(b)):w.current=!0}),[c,b,y]),(0,l.useEffect)((function(){var e,t;c?n===o.Kd.EDIT&&r&&g.setFieldsValue({name:r.name,displayName:r.displayName,description:r.description,spec:{capacity:null===(e=r.spec)||void 0===e?void 0:e.capacity,type:null===(t=r.spec)||void 0===t?void 0:t.type}}):g.resetFields()}),[n,r,g,c]),(0,l.useImperativeHandle)(t,(function(){return{submit:function(){g.submit()},resetFields:function(){g.resetFields()}}})),(0,v.jsx)(s.Z,{name:"gpuServiceStorageForm",form:g,onFinish:f,onFinishFailed:m,preserve:!1,initialValues:{},children:(0,v.jsx)(x,{action:n,open:c,showOrgScope:p,onOrgScopeChange:Z})})}))},83732:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98792),a=n(75271),o=n(41647);function i(){var e=(0,a.useCallback)((function(e){return(0,o.rC)({data:e.data})}),[]),t=(0,r.m)({fetchDetail:e,key:"createStorage"});return{detailData:t.detailData,loading:t.loading,cancelRequest:t.cancelRequest,fetchData:t.fetchData}}},37260:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98792),a=n(75271),o=n(41647);function i(){var e=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1,perPage:100},t=arguments.length>1?arguments[1]:void 0;return(0,o.z4)(e,t)}),[]),t=(0,r.h)({key:"storageClass",fetchList:e,getLabel:function(e){return(null==e?void 0:e.displayName)||(null==e?void 0:e.name)},getValue:function(e){return null==e?void 0:e.name}});return{storageClassList:t.dataList,loading:t.loading,cancelRequest:t.cancelRequest,fetchData:t.fetchData}}},10068:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(75271),a=n(15303),o=function(e){var t=function(e){var t,n=null===(t=(0,a.DA)())||void 0===t?void 0:t.listExtraColumns;return null==n?void 0:n[e]}(e),n="function"==typeof t?t():null,o=(0,r.useRef)(null),i=(0,r.useMemo)((function(){if(!n)return null;var e=o.current;return e&&e.length===n.length&&e.every((function(e,t){return e===n[t]}))?e:(o.current=n,n)}),[n]);return(0,r.useMemo)((function(){return t?"function"==typeof t?null!=i?i:[]:t:[]}),[t,i])}},49799:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(39930),a=n(63922),o=n(843),i=n(33819),s=n(57998),l=n(17465),c=n(81764),u=n(75271),p=n(52676),d=n(68195),f=e=>{let{label:t,placeholder:n,children:f,required:m,description:h,options:g,allowNull:v,isInFormItems:x=!0,notFoundContent:b=null,loading:w,footer:y,alwaysFocus:Z=!1,styles:k,...C}=e,F=(0,r.Z)(),[j,_]=(0,u.useState)(!1),q=(0,u.useRef)(null),D="",I=d.Z?.Item?.useStatus?.();D=e.status||(x?I?.status:"")||"";let S=(0,u.useMemo)((()=>g?.length?(0,c.cloneDeep)(g).map((e=>(e.locale&&(e.label=F.formatMessage({id:e.label})),e))):[]),[g,F]);(0,u.useEffect)((()=>{((0,a.JL)(e.value)||v&&(null===e.value||void 0===e.value))&&_(!0)}),[e.value,v]);return(0,p.jsx)(s.Z,{children:(0,p.jsx)(i.Z,{className:"seal-select-wrapper",status:D,label:t,isFocus:Z||j,required:m,description:h,disabled:e.disabled,onClick:()=>{!e.disabled&&!j&&(q.current?.focus?.(),_(!0))},children:(0,p.jsx)(l.Z,{...C,styles:k,placeholder:n,footer:y,ref:q,options:f?void 0:S,onFocus:t=>{_(!0),e.onFocus?.(t)},onBlur:t=>{v&&null===e.value?_(!0):e.value||_(!1),e.onBlur?.(t)},onChange:(t,n)=>{(0,a.JL)(t)||v&&null===t?_(!0):_(!1),e.onChange?.(t||null,n)},notFoundContent:(0,p.jsx)(o.Z,{loading:w,notFoundContent:b}),children:f})})})}},57998:function(e,t,n){n.d(t,{Z:function(){return r}});var r=n(56965).ZP.div`
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
`},5174:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(75271),a=n(7056);function o(){let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1),o=(0,a.Z)((()=>{t(!1),n.current=!1}));return{loading:e,guard:(0,a.Z)((e=>{n.current||(n.current=!0,e())})),run:(0,a.Z)((async e=>{t(!0);try{await e()}finally{o()}})),release:o}}}}]);