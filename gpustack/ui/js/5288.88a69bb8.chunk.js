"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5288],{54754:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(75271),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"},r=i(93102);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s.apply(this,arguments)}const a=(e,t)=>n.createElement(r.Z,s({},e,{ref:t,icon:o}));var l=n.forwardRef(a)},24784:function(e,t,i){i.d(t,{Z:function(){return s}});i(75271);var n=i(52676),o=i(58230),r=i(9812),s=e=>{let{message:t,type:i,rows:s=1,ellipsis:a,style:l}=e;return(0,n.jsx)(n.Fragment,{children:t?(0,n.jsxs)(o.default.Paragraph,{type:i,ellipsis:void 0===a?{rows:s,tooltip:t}:a,style:{fontWeight:400,whiteSpace:"pre-line",textAlign:"center",padding:"2px 5px",borderRadius:"var(--border-radius-base)",margin:0,backgroundColor:"var(--ant-color-error-bg)",...l},children:[(0,n.jsx)(r.Z,{className:"m-r-8"}),t]}):null})}},60859:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(75316),o=i(81764),r=i(75271),s=i(52676),a=(0,r.forwardRef)((({options:e,width:t,height:i,chartHeight:a},l)=>{let h=(0,r.useRef)(null),p=(0,r.useRef)(),c=(0,r.useRef)(!1),d=(0,r.useRef)(),u=(0,r.useRef)(!1);(0,r.useImperativeHandle)(l,(()=>({get chart(){return p.current}})));return(0,r.useEffect)((()=>{let e=()=>{if(!p.current||u.current)return;let e=p.current,t=e.getOption()?.yAxis;if(!t||!Array.isArray(t)||t.length<2)return;let i=e.getModel(),n=[i.getComponent("yAxis",0),i.getComponent("yAxis",1)];if(!n[0]||!n[1])return;let r=n.map((e=>e.axis)),s=r.map((e=>e.scale.getInterval())),a=r.map((e=>e.scale.getTicks())).map((e=>e.length)),l=Math.max(a[0],a[1]),h=s[0]*(l-1),c=s[1]*(l-1);if(a[0]===a[1])return;let d=[{},{}];a[0]<l&&(d[0].max=o.round(h,2),d[0].interval=s[0],d[0].splitNumber=l),a[1]<l&&(d[1].max=o.round(c,2),d[1].interval=s[1],d[1].splitNumber=l),u.current=!0,e.setOption({yAxis:d})};return h.current&&(h.current&&(p.current?.clear(),p.current=n.Z.init(h.current)),p.current?.on("finished",e)),()=>{p.current?.off("finished",e),p.current?.dispose()}}),[]),(0,r.useEffect)((()=>{c.current=!1,u.current=!1,(e=>{p.current&&(p.current?.clear(),p.current?.setOption(e,{notMerge:!0,lazyUpdate:!0}),Array.isArray(e.yAxis)&&e.yAxis.length>1&&p.current?.resize())})(e),c.current=!0}),[e]),(0,r.useEffect)((()=>{let e=(0,o.throttle)((()=>{c.current&&p.current?.resize()}),100);return h.current&&(d.current=new ResizeObserver(e),d.current.observe(h.current)),()=>{d.current?.disconnect(),d.current=void 0}}),[]),(0,s.jsx)("div",{className:"chart-wrapper",style:{width:t,height:i},children:(0,s.jsx)("div",{ref:h,style:{width:t,height:a||i}})})}))},48722:function(e,t,i){i.d(t,{Z:function(){return p}});var n=i(88061),o=i(25725),r=i(63922),s=i(81764),a=i(75271),l=i(89334),h={left:0,right:0,bottom:20,containLabel:!0};function p(){let{config:e}=(0,n.Z)(),{isDarkTheme:t,theme:i}=e,{useToken:p}=l.default,{token:c}=p(),d=(0,a.useMemo)((()=>({titleColor:c.colorText,splitLineColor:c.colorBorder,tickLineColor:c.colorSplit,axislabelColor:c.colorTextTertiary,colorSecondary:c.colorTextSecondary,colorTertiary:c.colorTextTertiary,gaugeBgColor:c.colorFillSecondary,gaugeNormalColor:c.colorSuccess,gaugeWarningColor:c.colorWarning,gaugeCriticalColor:c.colorError,gaugeMarkColor:c.colorBgContainer,colorBgContainerHover:t?"#424242":"#fff"})),[i,t]),u={trigger:"axis",backgroundColor:d.colorBgContainerHover,borderColor:"transparent",formatter(e,t){let i=`<span class="tooltip-x-name">${(0,o.X)(e[0].axisValue)}</span>`,n=0;return e.forEach((e=>{let r=(0,s.isFunction)(t)?t?.(e.data.value):e.data?.value;if(null==r)return;n+=1;let a="bar"===e.seriesType?"2px":"8px";i+=`<span class="tooltip-item">\n          <span class="tooltip-item-name">\n            <span class="tooltip-item-dot" style="border-radius:${a};background-color:${(0,o.X)(e.color)};"></span>\n            <span class="tooltip-item-title">${(0,o.X)(e.seriesName)}</span>:\n          </span>\n            <span class="tooltip-value">${(0,o.X)(r)}</span>\n      </span>`})),`<div class="${n>=12?"tooltip-wrapper tooltip-grid":"tooltip-wrapper"}">${i}</div>`}},g={itemWidth:8,itemHeight:8,itemGap:12,textStyle:{color:d.axislabelColor}},f={type:"category",axisTick:{show:!0,lineStyle:{color:d.tickLineColor}},axisLabel:{color:d.axislabelColor,fontSize:12},axisLine:{show:!1}},m={nameTextStyle:{padding:[0,0,0,-20]},splitLine:{show:!0,lineStyle:{type:"dashed",color:d.splitLineColor}},axisLabel:{color:d.axislabelColor,fontSize:12,formatter:r.HN},axisTick:{show:!1},type:"value"},x={show:!0,left:0,textStyle:{fontSize:14,fontWeight:500,color:d.titleColor},text:""},w=[50,80],b=e=>{let[t,i]=w;return e>i?d.gaugeCriticalColor:e>t?d.gaugeWarningColor:d.gaugeNormalColor},v=.0035;return{token:c,tooltip:u,grid:h,legend:g,xAxis:f,yAxis:m,title:x,chartColorMap:d,barItemConfig:{type:"bar",barMaxWidth:20,barMinWidth:8,barGap:"30%",barCategoryGap:"50%"},lineItemConfig:{type:"line",smooth:!0,showSymbol:!1,itemStyle:{},lineStyle:{width:1.5,opacity:.7}},gaugeItemConfig:{type:"gauge",radius:"92%",center:["50%","68%"],startAngle:190,endAngle:-10,min:0,max:100,progress:{show:!0,roundCap:!1,width:10,itemStyle:{color:e=>b(e?.value??0)}},pointer:{show:!1},axisLine:{roundCap:!1,lineStyle:{width:10,color:[[1,d.gaugeBgColor]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{lineHeight:28,height:28,offsetCenter:[0,4],valueAnimation:!1,color:d.titleColor,formatter(e){return"{value|"+e+"}{unit|%}"},rich:{value:{fontSize:22,fontWeight:500,color:d.titleColor},unit:{fontSize:13,color:d.colorTertiary,fontWeight:400,padding:[0,0,0,2]}}}},gaugeThresholdColor:b,buildGaugeThresholdMarks:e=>{let t=e.min??0,i=e.max??100,n=[];return w.forEach((e=>{let o=(e-t)/(i-t);n.push([o-v,"transparent"]),n.push([o+v,d.gaugeMarkColor])})),n.push([1,"transparent"]),{type:"gauge",radius:e.radius,center:e.center,startAngle:e.startAngle,endAngle:e.endAngle,min:t,max:i,z:(e.z??2)+1,silent:!0,progress:{show:!1},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},axisLine:{roundCap:!1,lineStyle:{width:e.axisLine?.lineStyle?.width??10,color:n}},data:[]}},isDark:t}}},21033:function(e,t,i){i.d(t,{Z:function(){return p}});var n=i(60859),o=i(25725),r=i(48722),s=i(64388),a=i(81764),l=i(75271),h=i(52676),p=e=>{let{grid:t,title:i,isDark:p,chartColorMap:c}=(0,r.Z)(),{seriesData:d,xAxisData:u,height:g,width:f,showEmpty:m,title:x,xMax:w=1,yMax:b=1}=e,v="string"==typeof x?x:x?.text??"",y=(0,l.useRef)(null),z=(0,l.useMemo)((()=>{let e=p?{split:c.splitLineColor,axis:c.axislabelColor,label:c.axislabelColor}:{split:"#F2F2F2",axis:"#dcdcdc",label:"#dcdcdc"};return{animation:!1,grid:{...t,right:10,top:10,bottom:2,left:2,containLabel:!0,borderRadius:4},xAxis:{min:-w,max:w,scale:!1,slient:!0,splitNumber:15,splitLine:{lineStyle:{color:e.split}},axisLine:{show:!0,lineStyle:{color:e.axis}},axisTick:{show:!1},axisLabel:{show:!0,color:e.label},boundaryGap:[.05,.05]},yAxis:{min:-b,max:b,scale:!1,slient:!0,splitNumber:10,boundaryGap:[.05,.05],splitLine:{lineStyle:{color:e.split}},axisLine:{show:!0,lineStyle:{color:e.axis}},axisTick:{show:!1},axisLabel:{show:!0,color:e.label}},symbol:"roundRect",label:{show:!0,shadowColor:"none",textBorderColor:"none",formatter:e=>e.name},series:[]}}),[p,w,b]),C=(0,l.useCallback)(((e,t)=>{let i=[],[n,o]=y.current?.chart?.convertToPixel("grid",t.value)??[0,0],r=e.map((e=>({...e,value:y.current.chart?.convertToPixel("grid",e.value)})));for(let e=0;e<r.length;e++){if(t.name===r[e].name){i.push({...r[e]});continue}let[s,l]=r[e].value;Math.sqrt(a.round(s-n,2)**2+a.round(l-o,2)**2)<=16&&i.push({...r[e]})}return i}),[]),S=(0,l.useCallback)((e=>!e.length||e.length<2?null:e=>`<span class="tooltip-item-name">\n               <span style="display:flex;justify-content:center;align-items: center;color:#fff;\n               margin-right:0;border-radius:4px;width:14px;\n               height:14px;background-color:${(0,o.X)(e?.itemStyle?.color)};"\n               >${(0,o.X)(e.name)}</span>\n             </span>`),[]),j=(0,l.useMemo)((()=>{let e=d.map(((e,t)=>({...e,itemStyle:{color:"#5470c6"},symbolSize:16})));return{...z,tooltip:{trigger:"item",borderWidth:0,backgroundColor:c.colorBgContainerHover,borderColor:"transparent",formatter(t,i){let n=C(e,t.data),r="",s=S(n);return n.forEach((e=>{r+=`\n            <span class="tooltip-item" style="justify-content: flex-start;">\n             ${s?s(e):""}\n             <span class="tooltip-value">${(0,o.X)(e.text)}</span>\n            </span>`})),`<div class="tooltip-wrapper scatter">${r}</div>`}},title:{...i,text:v},series:{type:"scatter",labelLayout:{hideOverlap:!0},data:e}}}),[d,u,x,z,C]);return(0,h.jsx)(h.Fragment,{children:!d.length&&m?(0,h.jsx)(s.Z,{height:g,title:v}):(0,h.jsx)(n.Z,{ref:y,height:g,options:j,width:f||"100%"})})}},64388:function(e,t,i){i.d(t,{Z:function(){return r}});i(75271);var n=i(52676),o=i(79526),r=({height:e,title:t})=>(0,n.jsxs)("div",{style:{width:"100%",height:e||"100%"},className:"flex-center  flex-column ",children:[t&&(0,n.jsx)("h3",{className:"justify-center font-size-12",style:{padding:"4px 0",marginBottom:0},children:t}),(0,n.jsx)("div",{className:"flex-center justify-center flex-column",style:{height:"100%"},children:(0,n.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})})]})},3226:function(e,t,i){i.d(t,{Z:function(){return W}});var n=i(75271),o=i(39930),r=i(52676),s=i(14792),a=i(46498),l=i(59362),h=i(46061),p=i(56965),c=p.ZP.div`
  position: relative;
  .del-btn {
    display: none;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--ant-border-radius);
    background: var(--ant-color-bg-container);
  }
  &:hover {
    .del-btn {
      display: flex;
    }
  }
`,d=(0,n.forwardRef)((({open:e=!1,inputProps:t,onSubmit:i,onClose:n,onEscape:p},d)=>{let u=(0,o.Z)();return(0,r.jsx)(s.Z,{open:e,title:u.formatMessage({id:"playground.uploadImage.url.invalid"}),children:(0,r.jsxs)(c,{children:[(0,r.jsx)(a.Z,{...t,ref:d,status:e?"error":"",placeholder:u.formatMessage({id:"playground.uploadImage.url.holder"}),style:{width:360,height:32},onBlur:i,onPressEnter:i,onKeyDown:p}),(0,r.jsx)("div",{className:"del-btn",children:(0,r.jsx)(l.ZP,{onMouseDown:e=>e.preventDefault(),onClick:n,icon:(0,r.jsx)(h.Z,{}),size:"small",type:"text"})})]})})})),u=i(27926),g=(0,p.ZP)(l.ZP)`
  background-color: transparent !important;
  padding: 0;
  .anticon {
    color: var(--ant-color-text-quaternary);
    font-size: 12px !important;
    transition: color 0.3s ease;
  }
  &:hover {
    .anticon {
      color: var(--ant-color-text-tertiary);
    }
  }
`,f=({onClick:e})=>(0,r.jsx)(g,{icon:(0,r.jsx)(u.Z,{}),shape:"circle",type:"text",onClick:e,size:"small"}),m=i(78727),x=i(81764),w=i(67004),b=i(71582),v=({layout:e={rows:1,cols:1},column:t=2,dataList:i,editable:o,responseable:s,gutter:a,onDelete:l,onClick:h,autoBgColor:p,autoSize:c,style:d})=>{let u=(0,n.useCallback)((e=>{l?.(e)}),[l]),g=(0,n.useCallback)((e=>{h?.(e)}),[h]),f=(0,n.useMemo)((()=>s?1===i.length?{0:{justifyContent:"center",alignItems:"center"}}:2===i.length?{0:{justifyContent:"flex-end",alignItems:"center"},1:{justifyContent:"flex-start",alignItems:"center"}}:3===i.length?{0:{justifyContent:"flex-end",alignItems:"flex-end"},1:{justifyContent:"flex-start",alignItems:"flex-end"},2:{justifyContent:"flex-end",alignItems:"flex-start"}}:{0:{justifyContent:"flex-end",alignItems:"flex-end"},1:{justifyContent:"flex-start",alignItems:"flex-end"},2:{justifyContent:"flex-end",alignItems:"flex-start"},3:{justifyContent:"flex-start",alignItems:"flex-start"}}:{}),[i.length,s,t]);return(0,r.jsx)(r.Fragment,{children:i?.length?(0,r.jsx)("div",{className:"thumb-list-wrap",style:{...d},children:s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.Z,{gutter:a||[],className:"flex-center",style:{height:i.length>t?"50%":"100%",flex:"none",width:"100%",justifyContent:1===i.length?"center":"flex-start"},children:x.map(x.slice(i,0,t),((e,t)=>(0,r.jsx)(b.Z,{span:e.span,className:"flex-center justify-center",style:{height:"100%",width:"100%"},children:(0,r.jsx)(m.Z,{...e,preview:e.preview,style:{...f[t]||{}},loading:e.loading,autoSize:c,editable:o,autoBgColor:p,onDelete:u,onClick:()=>g(e)})},`1-${t}`)))}),i.length>t&&(0,r.jsx)(w.Z,{gutter:a||[],style:{height:"50%",flex:"none",width:"100%",justifyContent:1===i.length?"center":"flex-start"},className:"flex-center",children:x.map(x.slice(i,2),((e,t)=>(0,r.jsx)(b.Z,{span:e.span,className:"flex-center justify-center",style:{height:"100%",width:"100%"},children:(0,r.jsx)(m.Z,{...e,preview:e.preview,style:{...f[t+2]||{}},loading:e.loading,autoSize:c,editable:o,autoBgColor:p,onDelete:u,onClick:()=>g(e)})},`2-${t}`)))})]}):(0,r.jsx)(r.Fragment,{children:x.map(i,(e=>(0,n.createElement)(m.Z,{...e,preview:e.preview,key:e.uid,autoSize:c,editable:o,autoBgColor:p,onDelete:u,onClick:()=>g(e)})))})}):null})},y=i(5703),z=i(60315),C=i(47822),S=i(60419),j=i(48108),R=({size:e="middle",onOpenChange:t,onUpdateImgList:i,onAddFromUrl:n})=>{let s=(0,o.Z)();return(0,r.jsx)(y.Z,{onOpenChange:t,placement:"topLeft",menu:{items:[{label:(0,r.jsxs)(z.Z,{handleUpdateImgList:i,size:"middle",children:[(0,r.jsx)(C.Z,{className:"m-r-8"}),s.formatMessage({id:"playground.img.upload"})]}),key:"upload_image"},{label:s.formatMessage({id:"playground.uploadImage.url.button"}),key:"add_image_url",icon:(0,r.jsx)(S.Z,{}),onClick:n}]},children:(0,r.jsx)(l.ZP,{type:"text",size:e,icon:(0,r.jsx)(j.Z,{}),onClick:e=>{e.stopPropagation()}})})},k=i(82187),W=e=>{let{data:t,onDeleteImage:i,onUploadImage:p,onChange:c,onSelect:u,onDelete:g,actions:m,showUpload:x=!0,style:w,label:b,placeholder:y,height:z=46}=e,C=(0,o.Z)(),S=n.useRef(null),[j,W]=(0,n.useState)({minRows:1,maxRows:1,focus:!1}),M=()=>{W({minRows:3,maxRows:3,focus:!0}),setTimeout((()=>{S.current?.focus?.({cursor:"end"})}),50)},N=e=>{p?.(e)},{isFromUrl:L,dropDownOpen:Z,openImgTips:E,inputImgRef:H,handleAddImgFromUrl:T,handleInputImageUrl:B,handleClose:A,handleOnEscape:P,handleOnOpenChange:I}=(e=>{let{handleUpdateImgList:t,updateUidCount:i}=e,[o,r]=(0,n.useState)(!1),[s,a]=(0,n.useState)(!1),[l,h]=(0,n.useState)(!1),p=(0,n.useRef)(null),c=e=>{e?.stopPropagation(),r(!1),a(!1)};return{isFromUrl:o,dropDownOpen:l,openImgTips:s,inputImgRef:p,handleAddImgFromUrl:()=>{r(!0),setTimeout((()=>{p.current?.focus?.()}),100)},handleInputImageUrl:async e=>{let n=e.target.value?.trim();n?(t([{uid:i(),dataUrl:n}]),a(!1),r(!1)):a(!0),n||requestAnimationFrame((()=>{setTimeout((()=>{a(!1)}),3e3)}))},handleClose:c,handleOnEscape:e=>{"Escape"===e.key&&c()},handleOnOpenChange:e=>{h(e)}}})({handleUpdateImgList:N,updateUidCount:()=>`img-${Date.now()}`}),O=()=>{c?.({target:{value:""}}),i?.([])},D=j.focus&&!L&&!t.imgs?.length;return(0,r.jsx)("div",{className:k("row-textarea-wrapper",{dropDownOpen:Z,expanded:D,"from-url":L}),children:(0,r.jsxs)("div",{className:k("row-textarea",{expanded:D,"text-mode":!t.imgs?.length}),style:{...w,"--row-collapsed-h":`${z}px`},children:[!t.imgs?.length&&(0,r.jsxs)("div",{className:"textarea-wrapper",children:[b&&(0,r.jsx)("span",{className:"textarea-label",children:b}),(0,r.jsx)(a.Z.TextArea,{className:"custome-scrollbar",allowClear:!0,ref:S,placeholder:y,style:{borderRadius:"0",border:"none",width:"100%",boxShadow:"none"},value:t.content,autoSize:D?{minRows:5,maxRows:5}:{minRows:j.minRows,maxRows:j.maxRows},onFocus:M,onBlur:e=>{W({minRows:2,maxRows:2,focus:!1})},onChange:e=>{c?.(e)},onSelect:e=>{e.stopPropagation();let i=e.target.selectionStart,n=e.target.selectionEnd,o=t.content.substring(0,i),r=t.content.substring(n,t.content.length);u?.({start:i,end:n,beforeText:o,afterText:r})},onPaste:t=>{e.onPaste?.(t)},onClear:O})]}),(0,r.jsx)("div",{className:k("content-wrap",{dropDownOpen:Z}),onClick:M,children:(0,r.jsxs)("div",{className:"content",style:{height:z},children:[t.imgs?.length||L?null:(0,r.jsxs)(r.Fragment,{children:[b&&(0,r.jsx)("span",{className:"title",children:b}),t.content||(0,r.jsx)("span",{style:{color:"var(--ant-color-text-tertiary)"},children:y})]}),!!t.imgs?.length&&(0,r.jsxs)("div",{className:"flex-center",children:[b&&(0,r.jsx)("span",{className:"title",children:b}),(0,r.jsx)(v,{editable:!0,dataList:t.imgs,onDelete:e=>{let n=(t.imgs||[]).filter((t=>t.uid!==e));i?.(n)}})]})]})}),(0,r.jsxs)("div",{className:k("actions-wrapper",{show:D}),children:[L&&(0,r.jsx)(d,{ref:H,open:E,inputProps:{variant:"filled"},onSubmit:B,onClose:A,onEscape:P}),(0,r.jsxs)("div",{className:"actions",children:[!D&&(t.content||!!t.imgs?.length)&&(0,r.jsx)(f,{onClick:O}),x&&(0,r.jsx)(R,{size:"small",onOpenChange:I,onUpdateImgList:N,onAddFromUrl:T}),m,(0,r.jsx)(s.Z,{title:C.formatMessage({id:"common.button.delete"}),children:(0,r.jsx)(l.ZP,{danger:!0,size:"small",type:"text",icon:(0,r.jsx)(h.Z,{}),onClick:g,"aria-label":C.formatMessage({id:"common.button.delete"})})})]})]})]})})}},57998:function(e,t,i){i.d(t,{Z:function(){return n}});var n=i(56965).ZP.div`
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
`},24276:function(e,t,i){i.d(t,{Z:function(){return M}});var n,o=i(39930),r=i(75271),s=i(52676),a=i(59362),l=i(56965),h=i(30967),p=function(){return p=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)},c={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},d={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},u={width:"20px",height:"20px",position:"absolute",zIndex:1},g={top:p(p({},c),{top:"-5px"}),right:p(p({},d),{left:void 0,right:"-5px"}),bottom:p(p({},c),{top:void 0,bottom:"-5px"}),left:p(p({},d),{left:"-5px"}),topRight:p(p({},u),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:p(p({},u),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:p(p({},u),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:p(p({},u),{left:"-10px",top:"-10px",cursor:"nw-resize"})},f=(0,r.memo)((function(e){var t=e.onResizeStart,i=e.direction,n=e.children,o=e.replaceStyles,a=e.className,l=(0,r.useCallback)((function(e){t(e,i)}),[t,i]),h=(0,r.useCallback)((function(e){t(e,i)}),[t,i]),c=(0,r.useMemo)((function(){return p(p({position:"absolute",userSelect:"none"},g[i]),null!=o?o:{})}),[o,i]);return(0,s.jsx)("div",{className:a||void 0,style:c,onMouseDown:l,onTouchStart:h,children:n})})),m=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),x=function(){return x=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},x.apply(this,arguments)},w={width:"auto",height:"auto"},b=function(e,t,i){return Math.max(Math.min(e,i),t)},v=function(e,t,i){var n=Math.round(e/t);return n*t+i*(n-1)},y=function(e,t){return new RegExp(e,"i").test(t)},z=function(e){return Boolean(e.touches&&e.touches.length)},C=function(e,t,i){void 0===i&&(i=0);var n=t.reduce((function(i,n,o){return Math.abs(n-e)<Math.abs(t[i]-e)?o:i}),0),o=Math.abs(t[n]-e);return 0===i||o<i?t[n]:e},S=function(e){return"auto"===(e=e.toString())||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:"".concat(e,"px")},j=function(e,t,i,n){if(e&&"string"==typeof e){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%"))return t*(Number(e.replace("%",""))/100);if(e.endsWith("vw"))return i*(Number(e.replace("vw",""))/100);if(e.endsWith("vh"))return n*(Number(e.replace("vh",""))/100)}return e},R=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],k="__resizable_base__",W=function(e){function t(t){var i,n,o,r,s=e.call(this,t)||this;return s.ratio=1,s.resizable=null,s.parentLeft=0,s.parentTop=0,s.resizableLeft=0,s.resizableRight=0,s.resizableTop=0,s.resizableBottom=0,s.targetLeft=0,s.targetTop=0,s.delta={width:0,height:0},s.appendBase=function(){if(!s.resizable||!s.window)return null;var e=s.parentNode;if(!e)return null;var t=s.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0 0 100%",t.classList?t.classList.add(k):t.className+=k,e.appendChild(t),t},s.removeBase=function(e){var t=s.parentNode;t&&t.removeChild(e)},s.state={isResizing:!1,width:null!==(n=null===(i=s.propsSize)||void 0===i?void 0:i.width)&&void 0!==n?n:"auto",height:null!==(r=null===(o=s.propsSize)||void 0===o?void 0:o.height)&&void 0!==r?r:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},s.onResizeStart=s.onResizeStart.bind(s),s.onMouseMove=s.onMouseMove.bind(s),s.onMouseUp=s.onMouseUp.bind(s),s}return m(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||w},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,n=this.resizable.offsetHeight,o=this.resizable.style.position;"relative"!==o&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=o}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,i=function(t){var i;if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&(null===(i=e.propsSize[t])||void 0===i?void 0:i.toString().endsWith("%"))){if(e.state[t].toString().endsWith("%"))return e.state[t].toString();var n=e.getParentSize(),o=Number(e.state[t].toString().replace("px",""))/n[t]*100;return"".concat(o,"%")}return S(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?S(t.width):i("width"),height:t&&void 0!==t.height&&!this.state.isResizing?S(t.height):i("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%",e.style.minHeight="100%";var n={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=i),this.removeBase(e),n},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var i=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==i&&"auto"!==i?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var i,n,o=this.props.boundsByDirection,r=this.state.direction,s=o&&y("left",r),a=o&&y("top",r);if("parent"===this.props.bounds){var l=this.parentNode;l&&(i=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),n=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(e=e&&e<i?e:i),n&&Number.isFinite(n)&&(t=t&&t<n?t:n),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var i,n=this.props.scale||1,o=(i=this.props.resizeRatio||1,Array.isArray(i)?i:[i,i]),r=o[0],s=o[1],a=this.state,l=a.direction,h=a.original,p=this.props,c=p.lockAspectRatio,d=p.lockAspectRatioExtraHeight,u=p.lockAspectRatioExtraWidth,g=h.width,f=h.height,m=d||0,x=u||0;return y("right",l)&&(g=h.width+(e-h.x)*r/n,c&&(f=(g-x)/this.ratio+m)),y("left",l)&&(g=h.width-(e-h.x)*r/n,c&&(f=(g-x)/this.ratio+m)),y("bottom",l)&&(f=h.height+(t-h.y)*s/n,c&&(g=(f-m)*this.ratio+x)),y("top",l)&&(f=h.height-(t-h.y)*s/n,c&&(g=(f-m)*this.ratio+x)),{newWidth:g,newHeight:f}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,i,n){var o=this.props,r=o.lockAspectRatio,s=o.lockAspectRatioExtraHeight,a=o.lockAspectRatioExtraWidth,l=void 0===n.width?10:n.width,h=void 0===i.width||i.width<0?e:i.width,p=void 0===n.height?10:n.height,c=void 0===i.height||i.height<0?t:i.height,d=s||0,u=a||0;if(r){var g=(p-d)*this.ratio+u,f=(c-d)*this.ratio+u,m=(l-u)/this.ratio+d,x=(h-u)/this.ratio+d,w=Math.max(l,g),v=Math.min(h,f),y=Math.max(p,m),z=Math.min(c,x);e=b(e,w,v),t=b(t,y,z)}else e=b(e,l,h),t=b(t,p,c);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){var e=1/(this.props.scale||1);if("parent"===this.props.bounds){var t=this.parentNode;if(t){var i=t.getBoundingClientRect();this.parentLeft=i.left*e,this.parentTop=i.top*e}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var n=this.props.bounds.getBoundingClientRect();this.targetLeft=n.left*e,this.targetTop=n.top*e}if(this.resizable){var o=this.resizable.getBoundingClientRect(),r=o.left,s=o.top,a=o.right,l=o.bottom;this.resizableLeft=r*e,this.resizableRight=a*e,this.resizableTop=s*e,this.resizableBottom=l*e}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var i,n=0,o=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(n=e.nativeEvent.clientX,o=e.nativeEvent.clientY):e.nativeEvent&&z(e.nativeEvent)&&(n=e.nativeEvent.touches[0].clientX,o=e.nativeEvent.touches[0].clientY),this.props.onResizeStart)if(this.resizable)if(!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var r=this.window.getComputedStyle(this.resizable);if("auto"!==r.flexBasis){var s=this.parentNode;if(s){var a=this.window.getComputedStyle(s).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",i=r.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:n,y:o,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:x(x({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:i};this.setState(l)}},t.prototype.onMouseMove=function(e){var t=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&z(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var i=this.props,n=i.maxWidth,o=i.maxHeight,r=i.minWidth,s=i.minHeight,a=z(e)?e.touches[0].clientX:e.clientX,l=z(e)?e.touches[0].clientY:e.clientY,p=this.state,c=p.direction,d=p.original,u=p.width,g=p.height,f=this.getParentSize(),m=function(e,t,i,n,o,r,s){return n=j(n,e.width,t,i),o=j(o,e.height,t,i),r=j(r,e.width,t,i),s=j(s,e.height,t,i),{maxWidth:void 0===n?void 0:Number(n),maxHeight:void 0===o?void 0:Number(o),minWidth:void 0===r?void 0:Number(r),minHeight:void 0===s?void 0:Number(s)}}(f,this.window.innerWidth,this.window.innerHeight,n,o,r,s);n=m.maxWidth,o=m.maxHeight,r=m.minWidth,s=m.minHeight;var x=this.calculateNewSizeFromDirection(a,l),w=x.newHeight,b=x.newWidth,y=this.calculateNewMaxFromBoundary(n,o);this.props.snap&&this.props.snap.x&&(b=C(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(w=C(w,this.props.snap.y,this.props.snapGap));var S=this.calculateNewSizeFromAspectRatio(b,w,{width:y.maxWidth,height:y.maxHeight},{width:r,height:s});if(b=S.newWidth,w=S.newHeight,this.props.grid){var R=v(b,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),k=v(w,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),W=this.props.snapGap||0;b=0===W||Math.abs(R-b)<=W?R:b,w=0===W||Math.abs(k-w)<=W?k:w}var M={width:b-d.width,height:w-d.height};if(this.delta=M,u&&"string"==typeof u)if(u.endsWith("%")){var N=b/f.width*100;b="".concat(N,"%")}else if(u.endsWith("vw")){var L=b/this.window.innerWidth*100;b="".concat(L,"vw")}else if(u.endsWith("vh")){var Z=b/this.window.innerHeight*100;b="".concat(Z,"vh")}if(g&&"string"==typeof g)if(g.endsWith("%")){N=w/f.height*100;w="".concat(N,"%")}else if(g.endsWith("vw")){L=w/this.window.innerWidth*100;w="".concat(L,"vw")}else if(g.endsWith("vh")){Z=w/this.window.innerHeight*100;w="".concat(Z,"vh")}var E={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(w,"height")};"row"===this.flexDir?E.flexBasis=E.width:"column"===this.flexDir&&(E.flexBasis=E.height);var H=this.state.width!==E.width,T=this.state.height!==E.height,B=this.state.flexBasis!==E.flexBasis,A=H||T||B;A&&(0,h.flushSync)((function(){t.setState(E)})),this.props.onResize&&A&&this.props.onResize(e,c,this.resizable,M)}},t.prototype.onMouseUp=function(e){var t,i,n=this.state,o=n.isResizing,r=n.direction;n.original;o&&this.resizable&&(this.props.onResizeStop&&this.props.onResizeStop(e,r,this.resizable,this.delta),this.props.size&&this.setState({width:null!==(t=this.props.size.width)&&void 0!==t?t:"auto",height:null!==(i=this.props.size.height)&&void 0!==i?i:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:x(x({},this.state.backgroundStyle),{cursor:"auto"})}))},t.prototype.updateSize=function(e){var t,i;this.setState({width:null!==(t=e.width)&&void 0!==t?t:"auto",height:null!==(i=e.height)&&void 0!==i?i:"auto"})},t.prototype.renderResizer=function(){var e=this,t=this.props,i=t.enable,n=t.handleStyles,o=t.handleClasses,r=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!i)return null;var h=Object.keys(i).map((function(t){return!1!==i[t]?(0,s.jsx)(f,{direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:o&&o[t],children:l&&l[t]?l[t]:null},t):null}));return(0,s.jsx)("div",{className:a,style:r,children:h})},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,i){return-1!==R.indexOf(i)||(t[i]=e.props[i]),t}),{}),i=x(x(x({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return(0,s.jsxs)(n,x({style:i,className:this.props.className},t,{ref:function(t){t&&(e.resizable=t)},children:[this.state.isResizing&&(0,s.jsx)("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(r.PureComponent);(0,l.ZP)(a.ZP)`
  position: absolute;
  padding: 0;
  top: -12px;
  font-size: var(--font-size-base);
  left: calc(50% + 10px);
  transform: translateX(-50%);
  background: none !important;
  cursor: ns-resize;
  &::hover {
    background: none !important;
  }
`;var M=(0,r.forwardRef)(((e,t)=>{let{defaultWidth:i,defaultHeight:n=180,minHeight:a=180,maxHeight:l=400,children:h,onReSize:p,onReSizeStop:c,...d}=e;(0,o.Z)();let u=(0,r.useRef)(null);return(0,r.useImperativeHandle)(t,(()=>({container:u.current}))),(0,s.jsx)(W,{ref:u,enable:{top:!0},defaultSize:{height:n,width:i},handleComponent:{top:void 0},maxHeight:l,minHeight:a,onResize:p,onResizeStop:c,...d,children:h})}))},60315:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(39930),o=i(81764),r=i(75271),s=i(52676),a=i(36685),l=i(62430),h=i(14792),p=i(59362),c=i(48108),d=["image/png","image/jpg","image/jpeg"],u=({handleUpdateImgList:e,multiple:t=!0,drag:i=!1,disabled:u=!1,children:g,icon:f,title:m,accept:x=d.join(","),size:w="small",maxSize:b,width:v,height:y,verifySize:z=!1})=>{let C=(0,n.Z)(),S=(0,r.useRef)(null),j=C.formatMessage({id:"playground.img.upload"}),R="string"==typeof m?m:j,k=(0,r.useCallback)((e=>{let t=x.split(",").map((e=>e.trim()));return t.includes(e.type)?!(void 0!==b&&e.size>1024*b)||(a.ZP.error(C.formatMessage({id:"common.file.size.limit"},{size:`${b}KB`})),!1):(a.ZP.error(C.formatMessage({id:"common.file.format.limit"},{formats:t.join(", ")})),!1)}),[x,b]),W=(0,r.useCallback)((e=>new Promise((t=>{let i=new Image;i.onload=()=>{t({rawWidth:(0,o.round)(i.width,0),rawHeight:(0,o.round)(i.height,0)})},i.onerror=()=>{t({rawWidth:0,rawHeight:0})},i.src=e}))),[]),M=(0,r.useCallback)((e=>new Promise(((t,i)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>i(e)}))),[]),N=(0,o.debounce)((t=>{e(t)}),300),L=(0,r.useCallback)((async e=>{let{fileList:t}=e,i=await Promise.all(t.map((async e=>{if(e.originFileObj&&!e.url){let t=await M(e.originFileObj),{rawWidth:i,rawHeight:n}=await W(t);if(void 0!==v&&i!==v&&z)return a.ZP.error(C.formatMessage({id:"common.image.limit.width"},{width:`${v}px`})),null;if(void 0!==y&&n!==y&&z)return a.ZP.error(C.formatMessage({id:"common.image.limit.height"},{height:`${y}px`})),null;e.url=t,e.rawWidth=i,e.rawHeight=n}return e})));i.length>0&&N(i.filter((e=>e?.url)).map((e=>({dataUrl:e.url,uid:e.uid,rawWidth:e.rawWidth,rawHeight:e.rawHeight}))))}),[N,M,v,y]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i?l.Z.Dragger:l.Z,{ref:S,accept:x,multiple:t,action:"/",fileList:[],beforeUpload:e=>!k(e)&&l.Z.LIST_IGNORE,onChange:L,children:g??(0,s.jsx)(h.Z,{title:m??j,children:(0,s.jsx)(p.ZP,{disabled:u,size:w,type:"text",icon:f??(0,s.jsx)(c.Z,{}),"aria-label":R})})})})}},59043:function(e,t,i){i.d(t,{Uq:function(){return s},ZP:function(){return r}});var n=i(75271),o=i(75672);function r(){let{source:e}=o.default.CancelToken;return e}function s(){let{source:e}=o.default.CancelToken,t=(0,n.useRef)(null),i=()=>{t.current&&t.current.cancel()};return(0,n.useEffect)((()=>()=>{t.current&&t.current.cancel()}),[]),{updateCancelToken:()=>{i(),t.current=e()},cancelRequest:i,getCanceltToken:()=>t.current.token,source:e}}}}]);