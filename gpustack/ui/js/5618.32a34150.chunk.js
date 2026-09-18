(self.webpackChunk=self.webpackChunk||[]).push([[5618],{54754:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(75271),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"},s=r(93102);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const i=(e,t)=>n.createElement(s.Z,l({},e,{ref:t,icon:o}));var a=n.forwardRef(i)},72124:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(75271),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},s=r(93102);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const i=(e,t)=>n.createElement(s.Z,l({},e,{ref:t,icon:o}));var a=n.forwardRef(i)},64658:function(e,t,r){"use strict";var n=r(74964);t.Z=void 0;n(r(28413));var o=r(75271),s=r(7674),l=n(r(39132));t.Z=function(e){l.default&&(0,s.isFunction)(e);var t=(0,o.useRef)(e);t.current=(0,o.useMemo)((function(){return e}),[e]);var r=(0,o.useRef)(void 0);return r.current||(r.current=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.current.apply(this,e)}),r.current}},7674:function(e,t,r){"use strict";var n=r(74964);Object.defineProperty(t,"__esModule",{value:!0}),t.isUndef=t.isString=t.isObject=t.isNumber=t.isFunction=t.isBoolean=void 0;var o=n(r(28413));t.isObject=function(e){return null!==e&&"object"===(0,o.default)(e)},t.isFunction=function(e){return"function"==typeof e},t.isString=function(e){return"string"==typeof e},t.isBoolean=function(e){return"boolean"==typeof e},t.isNumber=function(e){return"number"==typeof e},t.isUndef=function(e){return void 0===e}},39132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=!1},45937:function(e,t,r){"use strict";const n=r(99142),{MAX_LENGTH:o,MAX_SAFE_INTEGER:s}=r(9510),{safeRe:l,t:i}=r(1889),a=r(17342),{compareIdentifiers:c}=r(89615);class d{constructor(e,t){if(t=a(t),e instanceof d){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>o)throw new TypeError(`version is longer than ${o} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?l[i.LOOSE]:l[i.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof d)){if("string"==typeof e&&e===this.version)return 0;e=new d(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof d||(e=new d(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof d||(e=new d(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],o=e.prerelease[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}compareBuild(e){e instanceof d||(e=new d(e,this.options));let t=0;do{const r=this.build[t],o=e.build[t];if(n("build compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}inc(e,t,r){if(e.startsWith("pre")){if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(t){const e=`-${t}`.match(this.options.loose?l[i.PRERELEASELOOSE]:l[i.PRERELEASE]);if(!e||e[1]!==t)throw new Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"release":if(0===this.prerelease.length)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===c(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=d},64131:function(e,t,r){"use strict";const n=r(45937),o=r(82980),{safeRe:s,t:l}=r(1889);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){const n=t.includePrerelease?s[l.COERCERTLFULL]:s[l.COERCERTL];let o;for(;(o=n.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&o.index+o[0].length===r.index+r[0].length||(r=o),n.lastIndex=o.index+o[1].length+o[2].length;n.lastIndex=-1}else r=e.match(t.includePrerelease?s[l.COERCEFULL]:s[l.COERCE]);if(null===r)return null;const i=r[2],a=r[3]||"0",c=r[4]||"0",d=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return o(`${i}.${a}.${c}${d}${u}`,t)}},69444:function(e,t,r){"use strict";const n=r(45937);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},83355:function(e,t,r){"use strict";const n=r(69444);e.exports=(e,t,r)=>n(e,t,r)>0},82980:function(e,t,r){"use strict";const n=r(45937);e.exports=(e,t,r=!1)=>{if(e instanceof n)return e;try{return new n(e,t)}catch(e){if(!r)return null;throw e}}},9510:function(e){"use strict";const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},99142:function(e,t,r){"use strict";const n="object"==typeof r(14224)&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.NODE_DEBUG&&/\bsemver\b/i.test({NODE_ENV:"production",PUBLIC_PATH:"/"}.NODE_DEBUG)?(...e)=>{}:()=>{};e.exports=n},89615:function(e){"use strict";const t=/^[0-9]+$/,r=(e,r)=>{if("number"==typeof e&&"number"==typeof r)return e===r?0:e<r?-1:1;const n=t.test(e),o=t.test(r);return n&&o&&(e=+e,r=+r),e===r?0:n&&!o?-1:o&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},17342:function(e){"use strict";const t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},1889:function(e,t,r){"use strict";const{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:s}=r(9510),l=r(99142),i=(t=e.exports={}).re=[],a=t.safeRe=[],c=t.src=[],d=t.safeSrc=[],u=t.t={};let p=0;const h="[a-zA-Z0-9-]",f=[["\\s",1],["\\d",s],[h,o]],m=(e,t,r)=>{const n=(e=>{for(const[t,r]of f)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),o=p++;l(e,o,t),u[e]=o,c[o]=t,d[o]=n,i[o]=new RegExp(t,r?"g":void 0),a[o]=new RegExp(n,r?"g":void 0)};m("NUMERICIDENTIFIER","0|[1-9]\\d*"),m("NUMERICIDENTIFIERLOOSE","\\d+"),m("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),m("MAINVERSION",`(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`),m("MAINVERSIONLOOSE",`(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASEIDENTIFIER",`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`),m("PRERELEASEIDENTIFIERLOOSE",`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASE",`(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`),m("PRERELEASELOOSE",`(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`),m("BUILDIDENTIFIER",`${h}+`),m("BUILD",`(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`),m("FULLPLAIN",`v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`),m("FULL",`^${c[u.FULLPLAIN]}$`),m("LOOSEPLAIN",`[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`),m("LOOSE",`^${c[u.LOOSEPLAIN]}$`),m("GTLT","((?:<|>)?=?)"),m("XRANGEIDENTIFIERLOOSE",`${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),m("XRANGEIDENTIFIER",`${c[u.NUMERICIDENTIFIER]}|x|X|\\*`),m("XRANGEPLAIN",`[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`),m("XRANGEPLAINLOOSE",`[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`),m("XRANGE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`),m("XRANGELOOSE",`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`),m("COERCEPLAIN",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),m("COERCE",`${c[u.COERCEPLAIN]}(?:$|[^\\d])`),m("COERCEFULL",c[u.COERCEPLAIN]+`(?:${c[u.PRERELEASE]})?`+`(?:${c[u.BUILD]})?(?:$|[^\\d])`),m("COERCERTL",c[u.COERCE],!0),m("COERCERTLFULL",c[u.COERCEFULL],!0),m("LONETILDE","(?:~>?)"),m("TILDETRIM",`(\\s*)${c[u.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",m("TILDE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`),m("TILDELOOSE",`^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`),m("LONECARET","(?:\\^)"),m("CARETTRIM",`(\\s*)${c[u.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",m("CARET",`^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`),m("CARETLOOSE",`^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`),m("COMPARATORLOOSE",`^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`),m("COMPARATOR",`^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`),m("COMPARATORTRIM",`(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",m("HYPHENRANGE",`^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`),m("HYPHENRANGELOOSE",`^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`),m("STAR","(<|>)?=?\\s*\\*"),m("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),m("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},28413:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6556:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(36304),o=(r(75271),r(52676)),s=r(58230),l=r(76756),i=r(18216),a=r(79112),c=r(61884),d=r(82187),u=r(56965),p=(0,c.kc)((({token:e,css:t})=>({alertBlockInfo:t`
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
    `}))),h=u.ZP.div`
  font-weight: 600;
  color: var(--ant-color-text);
`,f=u.ZP.div`
  word-break: break-word;
  color: ${e=>e.$hasTitle?"var(--ant-color-text-secondary)":"var(--ant-color-text)"};
  white-space: pre-line;
`,m=e=>{let{message:t,type:r,rows:c=1,ellipsis:u,style:m,title:E,contentStyle:g,icon:v,maxHeight:b=86,overlayScrollerProps:x={}}=e,{styles:I}=p();return(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)("div",{className:d(I.alertBlockInfo,r),style:{...m},children:(0,o.jsxs)(s.default.Paragraph,{ellipsis:u??{rows:c,tooltip:t},children:[(0,o.jsx)("div",{className:d("title",r),children:(0,o.jsx)("span",{className:d("info-icon",r),children:v??(0,o.jsx)("transition"===r?l.Z:"success"===r?i.Z:a.Z,{})})}),E&&(0,o.jsx)(h,{className:"title-text",children:E}),(0,o.jsx)(n.Z,{maxHeight:b,style:{...g},...x,children:(0,o.jsx)(f,{$hasTitle:!!E,className:d("content",r),children:t})})]})}):null})}},87649:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});r(75271);var n=r(52676),o=r(19593),s=(0,r(61884).kc)((({css:e,token:t})=>({group:e`
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
  `})));function l(e){let{value:t,onChange:r,options:l=[],disabled:i,columns:a,ghost:c,className:d,styles:u,classNames:p}=e,{styles:h,cx:f}=s(),m=e=>{i||e.disabled||e.value===t||r?.(e.value)};return(0,n.jsx)("div",{role:"radiogroup",className:f(a?h.grid:h.group,d,p?.root),style:{...a?{gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`}:void 0,...u?.root},children:l.map((e=>{let r=e.value===t,s=i||e.disabled;return(0,n.jsxs)("div",{role:"radio","aria-checked":r,"aria-disabled":s,tabIndex:s?-1:0,className:f(h.card,{[h.cardActive]:r,[h.cardActiveGhost]:r&&c,[h.cardDisabled]:s},p?.card),style:u?.card,onClick:()=>m(e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),m(e))},children:[null!=e.badge&&(0,n.jsx)("div",{className:f(h.badge,p?.badge),style:u?.badge,children:e.badge}),(0,n.jsx)(o.ZP,{checked:r,disabled:s,className:f(h.radio,p?.radio),style:u?.radio,onChange:()=>{}}),(0,n.jsxs)("div",{className:f(h.content,p?.content),style:u?.content,children:[(0,n.jsx)("div",{className:f(h.title,p?.title),style:u?.title,children:e.label}),null!=e.description&&(0,n.jsx)("div",{className:f(h.desc,p?.description),style:u?.description,children:e.description})]})]},e.value)}))})}},13309:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(60341),o=r(75271),s=r(52676),l=r(57104),i=r(61884),a=r(82187),c=(0,r(56965).ZP)(l.Z)`
  box-shadow: none !important;
  background-color: none;
  &.isOpen {
    .ant-card-head {
      border-bottom: 1px solid var(--ant-color-border-secondary);
      border-radius: var(--ant-border-radius) var(--ant-border-radius) 0 0;
    }
  }
  .ant-card-head {
    cursor: pointer;
    background-color: var(--ant-color-fill-quaternary);
    border-bottom: none;
    border-radius: var(--ant-border-radius);
    padding: 0 16px;
    &:hover {
      background-color: var(--ant-color-fill-secondary);
      .del-btn {
        display: block;
      }
    }
  }
  &.disabled {
    .ant-card-head {
      cursor: not-allowed;
      background-color: var(--ant-color-fill-quaternary) !important;
    }
  }
`,d=(0,i.kc)((({css:e,token:t})=>({title:e`
      font-weight: 400;
      min-height: var(--ant-card-header-height);
      font-size: var(--font-size-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    `,expandIcon:e`
      display: flex;
      align-items: center;
      gap: 8px;
    `,subtitle:e`
      font-size: 14px;
      color: ${t.colorTextSecondary};
    `,content:e`
      padding-top: 8px;
    `,left:e`
      flex: 1;
    `,right:e`
      display: flex;
      align-items: center;
      gap: 8px;
      .del-btn {
        display: none;
      }
    `})));function u({title:e,subtitle:t,right:r,deleteBtn:l,defaultOpen:i=!0,open:u,onToggle:p,disabled:h=!1,showExpandIcon:f=!0,variant:m="borderless",className:E="",collapsible:g,iconPlacement:v="left",styles:b,children:x}){let{styles:I}=d(),N="boolean"==typeof u,[y,R]=(0,o.useState)(i),$=!g||(N?u:y),L=()=>{if(h||!g)return;let e=!$;N||R(e),p?.(e)},O=(0,o.useRef)(null),[C,S]=(0,o.useState)($?"auto":"0px"),T=()=>f?(0,s.jsx)(n.Z,{rotate:$?180:0,type:"icon-down",style:{cursor:h?"not-allowed":"pointer",fontSize:12}}):null;return(0,o.useEffect)((()=>{if(g){if($){S((O.current?.scrollHeight||0)+"px");let e=setTimeout((()=>S("auto")),200);return()=>clearTimeout(e)}return S((O.current?.scrollHeight||0)+"px"),requestAnimationFrame((()=>S("0px"))),()=>{}}S("auto")}),[$,g]),(0,s.jsx)(c,{className:a(E,{collapsible:g,disabled:h,isOpen:$}),variant:m,styles:{root:{...b?.root},body:{padding:0,...b?.body},header:{...b?.header}},title:g?(0,s.jsxs)("div",{className:I.title,onClick:L,children:[(0,s.jsxs)("div",{className:I.left,children:[(0,s.jsxs)("div",{className:I.expandIcon,children:["left"===v&&T(),e&&(0,s.jsx)("div",{children:e})]}),t&&(0,s.jsx)("div",{className:I.subtitle,children:t})]}),(0,s.jsxs)("div",{className:I.right,children:[r&&(0,s.jsx)("span",{children:r}),l&&(0,s.jsx)("span",{className:"del-btn",children:l}),"right"===v&&T()]})]}):null,children:(0,s.jsx)("div",{ref:O,style:{height:C,overflow:"hidden"},children:(0,s.jsx)("div",{style:{paddingTop:8,...b?.content},children:x})})})}},75936:function(e,t,r){"use strict";r.d(t,{Z:function(){return L}});var n=r(843),o=r(33819),s=r(57998),l=r(75271),i=r(52676),a=r(58230),c=r(68195),d=r(87117),u=r(72167),p=r(89426),h=r(4814),f=r(28674),m=r(46882);const{Option:E}=p.default;function g(e){return e?.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}const v=(e,t)=>{const{prefixCls:r,className:n,style:o,popupClassName:s,dropdownClassName:i,children:a,dataSource:c,rootClassName:u,dropdownStyle:v,dropdownRender:b,popupRender:x,onDropdownVisibleChange:I,onOpenChange:N,styles:y,classNames:R,popupMatchSelectWidth:$,dropdownMatchSelectWidth:L}=e,O=(0,d.qo)(a),C=x||b,S=N||I,T=$??L;let A;1===O.length&&l.isValidElement(O[0])&&!g(O[0])&&([A]=O);const j=A?()=>A:void 0;let w;w=O.length&&g(O[0])?a:c?c.map((e=>{if(l.isValidElement(e))return e;switch(typeof e){case"string":return l.createElement(E,{key:e,value:e},e);case"object":{const{value:t}=e;return l.createElement(E,{key:t,value:t},e.text)}default:return}})):[];const{getPrefixCls:k}=l.useContext(m.E_),P=k("select",r),D={...e,popupRender:C,onOpenChange:S,popupMatchSelectWidth:T},[B,M]=(0,f.MW)([R],[y],{props:D},{popup:{_default:"root"}}),F=l.useMemo((()=>({root:(0,h.W)(`${P}-auto-complete`,n,u,B.root,{[`${P}-customize`]:A}),prefix:B.prefix,input:B.input,placeholder:B.placeholder,content:B.content,popup:{root:(0,h.W)(s,i,B.popup?.root),list:B.popup?.list,listItem:B.popup?.listItem}})),[P,n,u,B,s,i]),Z=l.useMemo((()=>({root:{...M.root,...o},input:M.input,prefix:M.prefix,placeholder:M.placeholder,content:M.content,popup:{root:{...v,...M.popup?.root},list:M.popup?.list,listItem:M.popup?.listItem}})),[M,o,v]);return l.createElement(p.default,{ref:t,suffixIcon:null,...(0,d.CE)(e,["dataSource","dropdownClassName","popupClassName"]),prefixCls:P,classNames:F,styles:Z,mode:p.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,popupRender:C,onPopupVisibleChange:S,popupMatchSelectWidth:T,getInputElement:j},w)};var b=l.forwardRef(v);const{Option:x}=p.default,I=(0,u.Z)(b,"popupAlign",(e=>(0,d.CE)(e,["visible"]))),N=b;N.Option=x,N._InternalPanelDoNotUseOrYouWillBeFired=I;var y=N,R=r(76756),$=a.default.Link,L=e=>{let{label:t,placeholder:r,required:a,description:d,isInFormItems:u=!0,trim:p=!0,onSelect:h,onBlur:f,checkStatus:m,extra:E,style:g,addAfter:v,suffixIcon:b,loading:x,allowClear:I,clearSpaceOnBlur:N,showSearch:L,alwaysFocus:O=!1,...C}=e,[S,T]=(0,l.useState)(!1),A=O||S,j=(0,l.useRef)(null),w="",k=c.Z?.Item?.useStatus?.();w=e.status||(u?k?.status:"")||"",(0,l.useEffect)((()=>{e.value&&T(!0)}),[e.value]);return(0,i.jsx)(s.Z,{style:g,children:(0,i.jsx)(o.Z,{className:"seal-select-wrapper",status:m||w,extra:E,label:t,isFocus:A,required:a,description:d,disabled:e.disabled,onClick:()=>{!e.disabled&&!S&&(j.current?.focus?.(),T(!0))},children:(0,i.jsx)(y,{...C,ref:j,placeholder:A||!t?(0,i.jsx)("span",{style:{paddingLeft:"12px"},children:r}):"",allowClear:!x&&I,suffixIcon:x?(0,i.jsx)($,{children:(0,i.jsx)(R.Z,{})}):b||null,status:m||w,onSelect:(e,t)=>{h?.(e,t)},onFocus:t=>{T(!0),e.onFocus?.(t)},onBlur:t=>{e.value||T(!1),N?(t.target.value=t.target.value?.replace(/\s+/g,""),e.onChange?.(t.target.value)):t.target.value=t.target.value?.trim(),e.onBlur?.(t)},showSearch:L,onChange:(t,r)=>{let n=t;p&&(n=n?.trim?.()),e.onChange?.(n,r)},popupRender:e=>x?(0,i.jsx)(n.v,{}):e||null,onInput:t=>{p&&(t.target.value=t.target.value?.trim()),e.onInput?.(t)},onPaste:e.onPaste})})})}},32429:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});r(75271);var n=r(52676),o=r(21379),s=r(14792),l=r(34006),i=({description:e,label:t,checked:r,onChange:i,...a})=>(0,n.jsx)(o.Z,{className:"p-l-6",checked:r,onChange:i,...a,children:(0,n.jsxs)(s.Z,{title:e||!1,children:[(0,n.jsx)("span",{style:{color:"var(--ant-color-text-tertiary)"},children:t}),!!e&&(0,n.jsx)(l.Z,{className:"m-l-4",style:{color:"var(--ant-color-text-tertiary)"}})]})})},36856:function(e,t,r){"use strict";r.d(t,{D:function(){return o},k:function(){return s}});var n=r(75271),o=n.createContext({}),s=()=>{let e=n.useContext(o);if(!e)throw Error("useLabelSelectorContext must be used within a LabelSelectorProvider");return e}},74954:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(39930),o=r(1039),s=r(75936),l=r(36856),i=r(81764),a=r(75271),c=r(52676),d=r(14792),u=r(59362),p=r(4827),h=({labels:e,label:t,labelList:r,seperator:o,keyAddon:h,valueAddon:f,disabled:m,onChange:E,onDelete:g,onBlur:v})=>{let b=(0,n.Z)(),[x,I]=(0,a.useState)(!1),{options:N,placeholder:y=[]}=(0,l.k)(),R=N?.filter((r=>!i.has(e,r.value)||r.value===t.key)),$=(0,a.useMemo)((()=>N?.find((e=>e.value===t.key))?.children||[]),[t.key,N]);return(0,c.jsxs)("div",{className:"label-item",children:[(0,c.jsx)("div",{className:"label-key",children:h??(0,c.jsx)(d.Z,{open:x,title:b.formatMessage({id:"resources.table.key.tips"}),children:(0,c.jsx)(s.Z,{options:R,disabled:m,checkStatus:"success",label:y?.[0]||b.formatMessage({id:"common.input.key"}),value:t.key,onChange:e=>{E?.({key:e,value:t.value})},onBlur:e=>((e,n)=>{let o=e.target.value;i.filter(r,(e=>o&&o===e.key)).length>1?(I(!0),E?.({key:"",value:t.value}),setTimeout((()=>{I(!1)}),1e3)):I(!1),v?.(e,n)})(e,"key")})})}),o&&(0,c.jsx)("span",{className:"seprator",children:o}),(0,c.jsx)("div",{className:"label-value",children:f??(0,c.jsx)(s.Z,{options:$,disabled:m,checkStatus:t.value?"success":"",label:y?.[1]||b.formatMessage({id:"common.input.value"}),value:t.value,onChange:e=>{E?.({key:t.key,value:e})},onBlur:e=>v?.(e,"value")})}),!m&&(0,c.jsx)(u.ZP,{size:"small",className:"btn",type:"default",shape:"circle",onClick:g,"aria-label":b.formatMessage({id:"common.button.delete"}),children:(0,c.jsx)(p.Z,{})})]})},f=r(85983),m=({label:e,labelList:t,seperator:r,keyAddon:o,valueAddon:s,disabled:l,onChange:h,onDelete:m,onPaste:E,onBlur:g})=>{let v=(0,n.Z)(),[b,x]=(0,a.useState)(!1);return(0,c.jsxs)("div",{className:"label-item",children:[(0,c.jsx)("div",{className:"label-key",children:o??(0,c.jsx)(d.Z,{open:b,title:v.formatMessage({id:"resources.table.key.tips"}),children:(0,c.jsx)("span",{children:(0,c.jsx)(f.Z.Input,{disabled:l,checkStatus:"success",label:v.formatMessage({id:"common.input.key"}),value:e.key,onChange:t=>{let r=t.target.value;h?.({key:r,value:e.value})},onBlur:r=>((r,n)=>{let o=r.target.value;i.filter(t,(e=>o&&o===e.key)).length>1?(x(!0),h?.({key:"",value:e.value}),setTimeout((()=>{x(!1)}),1e3)):x(!1),g?.(r,n)})(r,"key"),onPaste:E})})})}),r&&(0,c.jsx)("span",{className:"seprator",children:r}),(0,c.jsx)("div",{className:"label-value",children:s??(0,c.jsx)(f.Z.Input,{trim:!1,disabled:l,checkStatus:e.value?"success":"",label:v.formatMessage({id:"common.input.value"}),value:e.value,onChange:t=>{let r=t.target.value;h?.({key:e.key,value:r})},onBlur:e=>g?.(e,"value")})}),!l&&(0,c.jsx)(u.ZP,{size:"small",className:"btn",type:"default",shape:"circle",onClick:m,"aria-label":v.formatMessage({id:"common.button.delete"}),children:(0,c.jsx)(p.Z,{})})]})},E=({labels:e,labelList:t,onChange:r,onLabelListChange:n,onPaste:s,onBlur:l,onDelete:a,disabled:d,label:u,btnText:p,description:f,isAutoComplete:E})=>{let g=e=>{let t=i.reduce(e,((e,t)=>(t.key&&(e[t.key]=t.value),e)),{});r?.(t)},v=(e,r)=>{let o=i.cloneDeep(t);o[e]=r,n(o),g(o)},b=e=>{let r=i.cloneDeep(t);r.splice(e,1),n(r),g(r),a?.(e)};return(0,c.jsx)(o.Z,{label:u,description:f,onAdd:()=>{let e=[...t,{key:"",value:""}];n(e),g(e)},disabled:d,btnText:p,children:(0,c.jsx)(c.Fragment,{children:E?t?.map(((r,n)=>(0,c.jsx)(h,{disabled:d,label:r,seperator:":",labels:e,labelList:t,onDelete:()=>b(n),onChange:e=>v(n,e),onPaste:e=>s?.(e,n),onBlur:(e,t)=>l?.(e,t,n)},n))):t?.map(((e,r)=>(0,c.jsx)(m,{disabled:d,label:e,seperator:":",labelList:t,onDelete:()=>b(r),onChange:e=>v(r,e),onPaste:e=>s?.(e,r),onBlur:(e,t)=>l?.(e,t,r)},r)))})})},g=({value:e,onChange:t,onBlur:r,onDelete:o,disabled:s,label:l,btnText:d,description:u,isAutoComplete:p,enablePaste:h=!0})=>{let f=(0,n.Z)(),[m,g]=(0,a.useState)({}),[v,b]=(0,a.useState)([]);(0,a.useEffect)((()=>{let t=e??{};i.isEqual(t,m)||(g(t),b(i.map(i.keys(t),(e=>({key:e,value:t[e]})))))}),[e]);return(0,c.jsx)(E,{disabled:s,label:l,btnText:d,description:u??f.formatMessage({id:"models.form.keyvalue.paste"}),isAutoComplete:p,labels:m,labelList:v,onChange:e=>{g(e),t?.(e)},onLabelListChange:e=>{b(e)},onPaste:(e,r)=>{if(!h)return;let n=e.clipboardData.getData("text");if(!n||-1===n.indexOf("="))return;e.preventDefault();let o=i.split(n,/\r?\n/).map((e=>e.trim())).filter((e=>e&&e.includes("="))).map((e=>{let[t="",r=""]=e.split(/=(.+)/);return{key:t.trim(),value:r.trim()}})),s=[...v];s.splice(r,1,...o),(e=>{let r=i.reduce(e,((e,t)=>(t.key&&(e[t.key]=t.value),e)),{});t?.(r)})(s),b(s)},onBlur:r,onDelete:o})}},26681:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(63922),o=r(1039),s=r(75936),l=r(81764),i=r(75271),a=r(52676),c=/[^=]+=[^=]*$/,d=e=>{let{value:t,label:r,onChange:n,onBlur:o,onPaste:d,disabled:u,sourceOptions:p,trim:h=!0}=e,f=i.useRef(0),m=i.useRef(""),[E,g]=i.useState([]),v=l.debounce((e=>{f.current=e.target.selectionStart,m.current=e.target.value.slice(0,f.current),(e=>{if(!e)return void g(p||[]);let t=e.match(c);if(!t)return void g(l.filter(p,(t=>t.label.includes(e))));let[r,n]=l.split(t[0],"="),o=l.find(p,(e=>e.label===r));g(o?l.filter(o.opts,(e=>e.label.includes(String(n)))):[])})(m.current)}),100);return(0,a.jsx)(s.Z,{placeholder:e.placeholder,defaultActiveFirstOption:!0,value:t,onInput:e=>{v(e),n(e.target.value)},onSelect:e=>{(e=>{let t=m.current.match(c);n(t?`${l.split(t[0],"=")[0]}=${e}`:e?.trim())})(e),g([])},onFocus:v,onBlur:o,label:r,options:E,trim:h,disabled:u,style:{flex:1,minWidth:0},onPaste:d})},u=r(59362),p=r(4827),h=e=>{let{onRemove:t,onChange:r,onBlur:n,onPaste:o,label:s,value:l,options:i,trim:c=!0,data:h,required:f,disabled:m,renderItem:E}=e,g=e=>{r(e)};return(0,a.jsxs)("div",{className:"list-item",children:[E?E(h,{onChange:g,onBlur:n,onPaste:o}):(0,a.jsx)(d,{value:l,onChange:g,onBlur:n,onPaste:o,label:s,sourceOptions:i,trim:c,placeholder:e.placeholder,disabled:m}),!f&&!m&&(0,a.jsx)(u.ZP,{size:"small",className:"btn",type:"default",shape:"circle",icon:(0,a.jsx)(p.Z,{}),onClick:t})]})},f=e=>{let{value:t,label:r,description:s,onChange:c,onBlur:d,onDelete:u,btnText:p,options:f,labelExtra:m,trim:E=!0,styles:g,required:v,disabled:b,renderItem:x}=e,[I,N]=i.useState([]),y=i.useRef(0),R=()=>{y.current+=1},$=()=>{R();let e=l.cloneDeep(I);e.push({value:"",uid:y.current}),N(e)};return i.useEffect((()=>{let e=t??[],r=l.map(I,"value").filter((e=>!!e));l.isEqual(r,e)||N(l.map(e,(e=>(R(),{value:e,uid:y.current}))))}),[t]),(0,i.useEffect)((()=>{v&&0===I.length&&$()}),[v]),(0,a.jsx)(o.Z,{styles:g,label:r,required:v,description:s,labelExtra:m,onAdd:$,btnText:p,disabled:b,children:(0,a.jsx)(a.Fragment,{children:l.map(I,((t,r)=>(0,a.jsx)(h,{required:v&&1===I.length,placeholder:e.placeholder,options:f,data:t,value:t.value,onBlur:e=>d?.(e,r),onRemove:()=>(e=>{let t=l.cloneDeep(I);t.splice(e,1);let r=l.map(t,"value").filter((e=>!!e));N(t),c?.(r),u?.(e)})(r),onChange:e=>((e,t)=>{let r=l.cloneDeep(I);r[t].value=e;let n=l.map(r,"value").filter((e=>!!e));N(r),c?.(n)})(e,r),onPaste:e=>((e,t)=>{let r=e.clipboardData?.getData("text");if(!r)return;let o=(0,n.$U)(r);if(o.length<=1)return;e.preventDefault();let s=l.cloneDeep(I),i=E?o[0]?.trim():o[0];s[t].value=i||"";for(let e=1;e<o.length;e++){R();let r=E?o[e]?.trim():o[e];s.splice(t+e,0,{value:r||"",uid:y.current})}let a=l.map(s,"value").filter((e=>!!e));N(s),c?.(a)})(e,r),trim:E,disabled:b,renderItem:x},t.uid)))})})}},99519:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(73349),o=r(58152),s=r(75271),l=(0,s.createContext)({scrollToBottom:()=>{}}),i=r(52676),a=r(26578),c=r(56965).ZP.div`
  display: flex;
  align-items: center;
  max-width: 360px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,d=e=>{let t=s.useRef(null),{saveScrollHeight:r,restoreScrollHeight:d}=(0,n.Z)(),{initialize:u,destroyInstance:p,scrollToBottom:h}=(0,o.Z)();return s.useEffect((()=>{e.open?r():d()}),[e.open]),s.useEffect((()=>{let r=null;return e.open&&(r=setTimeout((()=>{t.current&&u(t.current)}),100)),()=>{r&&clearTimeout(r),p()}}),[e.open,u]),(0,i.jsx)(a.Z,{title:(0,i.jsx)(c,{children:e.title}),destroyOnHidden:!0,styles:{container:{padding:0},header:{padding:"var(--ant-modal-content-padding)",paddingBottom:"0",marginBottom:16},body:{padding:"0",paddingBlockEnd:e.footer?"0":"24px"},footer:e.footer?{padding:"12px 24px 24px",margin:"0"}:{}},...e,children:(0,i.jsx)(l.Provider,{value:{scrollToBottom:h},children:(0,i.jsx)("div",{ref:t,"data-overlayscrollbars-initialize":!0,className:"overlay-scroller-wrapper",hidden:!1,style:{paddingInline:24,paddingBlockEnd:0,maxHeight:e.maxContentHeight||500,overflowY:"auto",width:"100%"},children:e.children})})})}},91259:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});r(75271);var n=r(52676),o=r(23363),s=r(56965),l={color:"var(--color-white-tertiary)",itemColorHover:"var(--color-white-secondary)",itemSelectedColor:"var(--color-white-primary)",thumbBgColor:"var(--color-white-primary)",fontWeight:400},i={color:"var(--ant-segmented-item-color)",itemColorHover:"var(--ant-segmented-item-hover-color)",itemSelectedColor:"var(--ant-segmented-item-selected-color)",thumbBgColor:"var(--ant-color-primary)",fontWeight:500},a=s.ZP.div`
  .ant-segmented.segment-line {
    padding: 0;
    background-color: transparent;
    color: ${e=>e.$theme.color};
    font-weight: ${e=>e.$theme.fontWeight};
    border: none;
    box-shadow: none;
    height: ${e=>e.$height}px;
    display: flex;
    align-items: center;
    .ant-segmented-group {
      gap: 16px;
      height: 100%;
    }
    .ant-segmented-item:hover {
      color: ${e=>e.$theme.itemColorHover};
    }
    .ant-segmented-thumb {
      height: 2px;
      padding: 0px;
      bottom: 0px;
      top: unset;
      background-color: ${e=>e.$theme.thumbBgColor} !important;
    }
    .ant-segmented-item-label {
      display: flex;
      align-items: center;
      padding: 0;
      font-size: var(--font-size-small);
    }
    .ant-segmented-item {
      background-color: transparent;
      padding-bottom: 2px;
      display: flex;
      align-items: center;
      &::after {
        background-color: ${e=>e.$theme.thumbBgColor} !important;
        width: 100%;
        height: 0px;
        border-radius: 2px;
        bottom: 0px;
        top: unset;
        opacity: 1;
      }
    }

    .ant-segmented-item-selected {
      background-color: transparent;
      box-shadow: none;
      color: ${e=>e.$theme.itemSelectedColor};
      &::after {
        height: 2px;
        opacity: 1;
      }
    }
  }
  &.with-title .ant-segmented.segment-line {
    .ant-segmented-item.ant-segmented-item-selected::after {
      display: none;
    }
  }
`,c=e=>{let{height:t=32,size:r="small",options:s=[],className:c="segment-line",theme:d="dark",showTitle:u=!1,...p}=e;return(0,n.jsx)(a,{className:u?"with-title":"",$height:t,$theme:"dark"===d?l:i,children:(0,n.jsx)(o.Z,{...p,size:r,options:s,className:c})})}},20055:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(81764),o=r(75271),s=r(52676),l=r(35835),i=r(74330),a=r(61583),c=r(197),d=e=>{let{gap:t=0,dataList:r,renderTag:d}=e,u=(0,o.useRef)(null),[p,h]=(0,o.useState)({start:0,end:r.length}),f=(0,o.useRef)(null),m=(0,o.useRef)(null),E=(0,o.useRef)(0),g=(0,o.useRef)([]),v=()=>{let e=f.current?.offsetWidth||0,n=u.current?.childNodes,o=g.current;if(!o.length&&n?.length&&(o=Array.from(n).map(((e,r)=>r===n.length-1?e.offsetWidth:e.offsetWidth+t)),g.current=o),0===e||!o.length)return;m.current?.offsetWidth&&(E.current=m.current?.offsetWidth+t);let s=0,l=r.length;for(let t=0;t<o.length;t++){let r=o[t];if(s+E.current>=e){l=t-1<0?0:t-1;break}if(s+=r,s>=e){l=t;break}}(0!==p.start||p.end!==l)&&h({start:0,end:l})},b=e=>{e.domEvent?.stopPropagation()};(0,o.useEffect)((()=>{u.current&&v()}),[r,t]);let x=n.throttle((()=>{v()}),200);return(0,s.jsx)(c.Z,{onResize:x,children:(0,s.jsxs)("div",{className:"tags-wrapper",ref:f,children:[(0,s.jsx)(c.Z,{onResize:x,children:(0,s.jsx)("div",{className:"tags-content",ref:u,style:{gap:t},children:n.map(n.slice(r,p.start,p.end),((e,t)=>(0,s.jsx)("span",{children:d?.(e,t)},t)))})}),p.end<r.length&&(0,s.jsx)(l.Z,{trigger:["hover"],classNames:{root:"tags-wrapper-dropdown"},menu:{items:n.map(n.slice(r,p.end),((e,t)=>({label:d?.(e,t),key:t,onClick:b})))},children:(0,s.jsx)(i.Z,{className:"more",variant:"outlined",style:{marginInline:p.end<1?0:`${t}px 0`},ref:m,children:(0,s.jsx)(a.Z,{rotate:90})})})]})})}},80562:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});r(75271);var n=r(52676),o=(0,r(61884).kc)((({css:e})=>({attr:e`
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
  `}))),s=({children:e,variant:t="outlined",className:r,style:s})=>{let{styles:l,cx:i}=o();return(0,n.jsx)("span",{className:i(l.attr,l[t],r),style:s,children:e})}}}]);