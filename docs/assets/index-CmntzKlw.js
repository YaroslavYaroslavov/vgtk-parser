(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qg={exports:{}},zl={},Xg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),dw=Symbol.for("react.portal"),hw=Symbol.for("react.fragment"),fw=Symbol.for("react.strict_mode"),pw=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),_w=Symbol.for("react.forward_ref"),yw=Symbol.for("react.suspense"),vw=Symbol.for("react.memo"),ww=Symbol.for("react.lazy"),ep=Symbol.iterator;function Sw(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,e_={};function rs(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jg}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t_(){}t_.prototype=rs.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=e_,this.updater=n||Jg}var Jd=Xd.prototype=new t_;Jd.constructor=Xd;Zg(Jd,rs.prototype);Jd.isPureReactComponent=!0;var tp=Array.isArray,n_=Object.prototype.hasOwnProperty,Zd={current:null},r_={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n_.call(e,r)&&!r_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bo,type:t,key:s,ref:o,props:i,_owner:Zd.current}}function Cw(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var np=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xw(""+t.key):e.toString(36)}function va(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case dw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bc(o,0):r,tp(i)?(n="",t!=null&&(n=t.replace(np,"$&/")+"/"),va(i,e,n,"",function(c){return c})):i!=null&&(eh(i)&&(i=Cw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(np,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bc(s,a);o+=va(s,e,n,l,i)}else if(l=Sw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bc(s,a++),o+=va(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return va(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ew(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},wa={transition:null},kw={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:wa,ReactCurrentOwner:Zd};function s_(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=rs;J.Fragment=hw;J.Profiler=pw;J.PureComponent=Xd;J.StrictMode=fw;J.Suspense=yw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;J.act=s_;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)n_.call(e,l)&&!r_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:bo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:gw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mw,_context:t},t.Consumer=t};J.createElement=i_;J.createFactory=function(t){var e=i_.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:_w,render:t}};J.isValidElement=eh;J.lazy=function(t){return{$$typeof:ww,_payload:{_status:-1,_result:t},_init:Ew}};J.memo=function(t,e){return{$$typeof:vw,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};J.unstable_act=s_;J.useCallback=function(t,e){return ft.current.useCallback(t,e)};J.useContext=function(t){return ft.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};J.useEffect=function(t,e){return ft.current.useEffect(t,e)};J.useId=function(){return ft.current.useId()};J.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ft.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};J.useRef=function(t){return ft.current.useRef(t)};J.useState=function(t){return ft.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ft.current.useTransition()};J.version="18.3.1";Xg.exports=J;var I=Xg.exports;const Mi=qd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=I,Tw=Symbol.for("react.element"),Nw=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Rw=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pw={key:!0,ref:!0,__self:!0,__source:!0};function o_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bw.call(e,r)&&!Pw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tw,type:t,key:s,ref:o,props:i,_owner:Rw.current}}zl.Fragment=Nw;zl.jsx=o_;zl.jsxs=o_;qg.exports=zl;var p=qg.exports,a_={exports:{}},At={},l_={exports:{}},c_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,F){var W=A.length;A.push(F);e:for(;0<W;){var ie=W-1>>>1,se=A[ie];if(0<i(se,F))A[ie]=F,A[W]=se,W=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],W=A.pop();if(W!==F){A[0]=W;e:for(var ie=0,se=A.length,R=se>>>1;ie<R;){var $=2*(ie+1)-1,V=A[$],G=$+1,Z=A[G];if(0>i(V,W))G<se&&0>i(Z,V)?(A[ie]=Z,A[G]=W,ie=G):(A[ie]=V,A[$]=W,ie=$);else if(G<se&&0>i(Z,W))A[ie]=Z,A[G]=W,ie=G;else break e}}return F}function i(A,F){var W=A.sortIndex-F.sortIndex;return W!==0?W:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,g=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=A)r(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function v(A){if(w=!1,_(A),!y)if(n(l)!==null)y=!0,at(x);else{var F=n(c);F!==null&&Ze(v,F.startTime-A)}}function x(A,F){y=!1,w&&(w=!1,m(b),b=-1),g=!0;var W=h;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||A&&!ye());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var se=ie(d.expirationTime<=F);F=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),_(F)}else r(l);d=n(l)}if(d!==null)var R=!0;else{var $=n(c);$!==null&&Ze(v,$.startTime-F),R=!1}return R}finally{d=null,h=W,g=!1}}var k=!1,E=null,b=-1,j=5,L=-1;function ye(){return!(t.unstable_now()-L<j)}function ot(){if(E!==null){var A=t.unstable_now();L=A;var F=!0;try{F=E(!0,A)}finally{F?mt():(k=!1,E=null)}}else k=!1}var mt;if(typeof f=="function")mt=function(){f(ot)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,Ot=yn.port2;yn.port1.onmessage=ot,mt=function(){Ot.postMessage(null)}}else mt=function(){C(ot,0)};function at(A){E=A,k||(k=!0,mt())}function Ze(A,F){b=C(function(){A(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,at(x))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var W=h;h=F;try{return A()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=h;h=A;try{return F()}finally{h=W}},t.unstable_scheduleCallback=function(A,F,W){var ie=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,A){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=W+se,A={id:u++,callback:F,priorityLevel:A,startTime:W,expirationTime:se,sortIndex:-1},W>ie?(A.sortIndex=W,e(c,A),n(l)===null&&A===n(c)&&(w?(m(b),b=-1):w=!0,Ze(v,W-ie))):(A.sortIndex=se,e(l,A),y||g||(y=!0,at(x))),A},t.unstable_shouldYield=ye,t.unstable_wrapCallback=function(A){var F=h;return function(){var W=h;h=F;try{return A.apply(this,arguments)}finally{h=W}}}})(c_);l_.exports=c_;var Aw=l_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=I,Pt=Aw;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u_=new Set,Zs={};function Jr(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(Zs[t]=e,t=0;t<e.length;t++)u_.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,Ow=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},ip={};function Lw(t){return Tu.call(ip,t)?!0:Tu.call(rp,t)?!1:Ow.test(t)?ip[t]=!0:(rp[t]=!0,!1)}function Mw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fw(t,e,n,r){if(e===null||typeof e>"u"||Mw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);Xe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);Xe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);Xe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fw(e,n,i,r)&&(n=null),r||i===null?Lw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),ui=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),d_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),f_=Symbol.for("react.offscreen"),sp=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Rc;function Rs(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Pc=!1;function Ac(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function jw(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case ui:return"Portal";case Nu:return"Profiler";case ih:return"StrictMode";case bu:return"Suspense";case Ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h_:return(t.displayName||"Context")+".Consumer";case d_:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function $w(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uw(t){var e=p_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=Uw(t))}function m_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=p_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Au(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function op(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g_(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function Du(t,e){g_(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ou(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ou(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ps(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function __(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zw=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){zw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function w_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function S_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=w_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bw=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(Bw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,Ii=null,Ti=null;function up(t){if(t=Ao(t)){if(typeof Uu!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Gl(e),Uu(t.stateNode,t.type,e))}}function C_(t){Ii?Ti?Ti.push(t):Ti=[t]:Ii=t}function x_(){if(Ii){var t=Ii,e=Ti;if(Ti=Ii=null,up(t),e)for(t=0;t<e.length;t++)up(e[t])}}function E_(t,e){return t(e)}function k_(){}var Dc=!1;function I_(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return E_(t,e,n)}finally{Dc=!1,(Ii!==null||Ti!==null)&&(k_(),x_())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var zu=!1;if(Dn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){zu=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{zu=!1}function Ww(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ms=!1,Ha=null,Va=!1,Bu=null,Hw={onError:function(t){Ms=!0,Ha=t}};function Vw(t,e,n,r,i,s,o,a,l){Ms=!1,Ha=null,Ww.apply(Hw,arguments)}function Gw(t,e,n,r,i,s,o,a,l){if(Vw.apply(this,arguments),Ms){if(Ms){var c=Ha;Ms=!1,Ha=null}else throw Error(T(198));Va||(Va=!0,Bu=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(Zr(t)!==t)throw Error(T(188))}function Kw(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dp(i),t;if(s===r)return dp(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function N_(t){return t=Kw(t),t!==null?b_(t):null}function b_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b_(t);if(e!==null)return e;t=t.sibling}return null}var R_=Pt.unstable_scheduleCallback,hp=Pt.unstable_cancelCallback,Yw=Pt.unstable_shouldYield,Qw=Pt.unstable_requestPaint,Re=Pt.unstable_now,qw=Pt.unstable_getCurrentPriorityLevel,lh=Pt.unstable_ImmediatePriority,P_=Pt.unstable_UserBlockingPriority,Ga=Pt.unstable_NormalPriority,Xw=Pt.unstable_LowPriority,A_=Pt.unstable_IdlePriority,Bl=null,fn=null;function Jw(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:tS,Zw=Math.log,eS=Math.LN2;function tS(t){return t>>>=0,t===0?32:31-(Zw(t)/eS|0)|0}var Jo=64,Zo=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=As(a):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function nS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=nS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D_(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function iS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function O_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L_,uh,M_,F_,j_,Hu=!1,ea=[],nr=null,rr=null,ir=null,no=new Map,ro=new Map,Kn=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function oS(t,e,n,r,i){switch(e){case"focusin":return nr=ys(nr,t,e,n,r,i),!0;case"dragenter":return rr=ys(rr,t,e,n,r,i),!0;case"mouseover":return ir=ys(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return no.set(s,ys(no.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ro.set(s,ys(ro.get(s)||null,t,e,n,r,i)),!0}return!1}function $_(t){var e=Rr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=T_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){M_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$u=r,n.target.dispatchEvent(r),$u=null}else return e=Ao(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function pp(t,e,n){Sa(t)&&n.delete(e)}function aS(){Hu=!1,nr!==null&&Sa(nr)&&(nr=null),rr!==null&&Sa(rr)&&(rr=null),ir!==null&&Sa(ir)&&(ir=null),no.forEach(pp),ro.forEach(pp)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,aS)))}function io(t){function e(i){return vs(i,t)}if(0<ea.length){vs(ea[0],t);for(var n=1;n<ea.length;n++){var r=ea[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&vs(nr,t),rr!==null&&vs(rr,t),ir!==null&&vs(ir,t),no.forEach(e),ro.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)$_(n),n.blockedOn===null&&Kn.shift()}var Ni=Un.ReactCurrentBatchConfig,Ya=!0;function lS(t,e,n,r){var i=ae,s=Ni.transition;Ni.transition=null;try{ae=1,dh(t,e,n,r)}finally{ae=i,Ni.transition=s}}function cS(t,e,n,r){var i=ae,s=Ni.transition;Ni.transition=null;try{ae=4,dh(t,e,n,r)}finally{ae=i,Ni.transition=s}}function dh(t,e,n,r){if(Ya){var i=Vu(t,e,n,r);if(i===null)Hc(t,e,r,Qa,n),fp(t,r);else if(oS(i,t,e,n,r))r.stopPropagation();else if(fp(t,r),e&4&&-1<sS.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&L_(s),s=Vu(t,e,n,r),s===null&&Hc(t,e,r,Qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hc(t,e,r,null,n)}}var Qa=null;function Vu(t,e,n,r){if(Qa=null,t=ah(r),t=Rr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qw()){case lh:return 1;case P_:return 4;case Ga:case Xw:return 16;case A_:return 536870912;default:return 16}default:return 16}}var Jn=null,hh=null,Ca=null;function z_(){if(Ca)return Ca;var t,e=hh,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ca=i.slice(t,1<r?1-r:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function mp(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:mp,this.isPropagationStopped=mp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=Dt(is),Po=Ee({},is,{view:0,detail:0}),uS=Dt(Po),Lc,Mc,ws,Wl=Ee({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Lc=t.screenX-ws.screenX,Mc=t.screenY-ws.screenY):Mc=Lc=0,ws=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),gp=Dt(Wl),dS=Ee({},Wl,{dataTransfer:0}),hS=Dt(dS),fS=Ee({},Po,{relatedTarget:0}),Fc=Dt(fS),pS=Ee({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=Dt(pS),gS=Ee({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=Dt(gS),yS=Ee({},is,{data:0}),_p=Dt(yS),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SS[t])?!!e[t]:!1}function ph(){return CS}var xS=Ee({},Po,{key:function(t){if(t.key){var e=vS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=Dt(xS),kS=Ee({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Dt(kS),IS=Ee({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),TS=Dt(IS),NS=Ee({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Dt(NS),RS=Ee({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=Dt(RS),AS=[9,13,27,32],mh=Dn&&"CompositionEvent"in window,Fs=null;Dn&&"documentMode"in document&&(Fs=document.documentMode);var DS=Dn&&"TextEvent"in window&&!Fs,B_=Dn&&(!mh||Fs&&8<Fs&&11>=Fs),vp=" ",wp=!1;function W_(t,e){switch(t){case"keyup":return AS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function OS(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(wp=!0,vp);case"textInput":return t=e.data,t===vp&&wp?null:t;default:return null}}function LS(t,e){if(hi)return t==="compositionend"||!mh&&W_(t,e)?(t=z_(),Ca=hh=Jn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B_&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function V_(t,e,n,r){C_(r),e=qa(e,"onChange"),0<e.length&&(n=new fh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,so=null;function FS(t){ny(t,0)}function Hl(t){var e=mi(t);if(m_(e))return t}function jS(t,e){if(t==="change")return e}var G_=!1;if(Dn){var jc;if(Dn){var $c="oninput"in document;if(!$c){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),$c=typeof Cp.oninput=="function"}jc=$c}else jc=!1;G_=jc&&(!document.documentMode||9<document.documentMode)}function xp(){js&&(js.detachEvent("onpropertychange",K_),so=js=null)}function K_(t){if(t.propertyName==="value"&&Hl(so)){var e=[];V_(e,so,t,ah(t)),I_(FS,e)}}function $S(t,e,n){t==="focusin"?(xp(),js=e,so=n,js.attachEvent("onpropertychange",K_)):t==="focusout"&&xp()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(so)}function zS(t,e){if(t==="click")return Hl(e)}function BS(t,e){if(t==="input"||t==="change")return Hl(e)}function WS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:WS;function oo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tu.call(e,i)||!on(t[i],e[i]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,e){var n=Ep(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ep(n)}}function Y_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HS(t){var e=Q_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y_(n.ownerDocument.documentElement,n)){if(r!==null&&gh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kp(n,s);var o=kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VS=Dn&&"documentMode"in document&&11>=document.documentMode,fi=null,Gu=null,$s=null,Ku=!1;function Ip(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||fi==null||fi!==Wa(r)||(r=fi,"selectionStart"in r&&gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$s&&oo($s,r)||($s=r,r=qa(Gu,"onSelect"),0<r.length&&(e=new fh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fi)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pi={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Uc={},q_={};Dn&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Vl(t){if(Uc[t])return Uc[t];if(!pi[t])return t;var e=pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Uc[t]=e[n];return t}var X_=Vl("animationend"),J_=Vl("animationiteration"),Z_=Vl("animationstart"),ey=Vl("transitionend"),ty=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){ty.set(t,e),Jr(e,[t])}for(var zc=0;zc<Tp.length;zc++){var Bc=Tp[zc],GS=Bc.toLowerCase(),KS=Bc[0].toUpperCase()+Bc.slice(1);wr(GS,"on"+KS)}wr(X_,"onAnimationEnd");wr(J_,"onAnimationIteration");wr(Z_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(ey,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Gw(r,e,void 0,t),t.currentTarget=null}function ny(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,c),s=l}}}if(Va)throw t=Bu,Va=!1,Bu=null,t}function pe(t,e){var n=e[Ju];n===void 0&&(n=e[Ju]=new Set);var r=t+"__bubble";n.has(r)||(ry(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),ry(n,t,r,e)}var ra="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[ra]){t[ra]=!0,u_.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ra]||(e[ra]=!0,Wc("selectionchange",!1,e))}}function ry(t,e,n,r){switch(U_(e)){case 1:var i=lS;break;case 4:i=cS;break;default:i=dh}n=i.bind(null,e,n,t),i=void 0,!zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}I_(function(){var c=s,u=ah(n),d=[];e:{var h=ty.get(t);if(h!==void 0){var g=fh,y=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":g=ES;break;case"focusin":y="focus",g=Fc;break;case"focusout":y="blur",g=Fc;break;case"beforeblur":case"afterblur":g=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=TS;break;case X_:case J_:case Z_:g=mS;break;case ey:g=bS;break;case"scroll":g=uS;break;case"wheel":g=PS;break;case"copy":case"cut":case"paste":g=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yp}var w=(e&4)!==0,C=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,_;f!==null;){_=f;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,m!==null&&(v=to(f,m),v!=null&&w.push(lo(f,v,_)))),C)break;f=f.return}0<w.length&&(h=new g(h,y,null,n,u),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==$u&&(y=n.relatedTarget||n.fromElement)&&(Rr(y)||y[On]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Rr(y):null,y!==null&&(C=Zr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=gp,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=yp,v="onPointerLeave",m="onPointerEnter",f="pointer"),C=g==null?h:mi(g),_=y==null?h:mi(y),h=new w(v,f+"leave",g,n,u),h.target=C,h.relatedTarget=_,v=null,Rr(u)===c&&(w=new w(m,f+"enter",y,n,u),w.target=_,w.relatedTarget=C,v=w),C=v,g&&y)t:{for(w=g,m=y,f=0,_=w;_;_=si(_))f++;for(_=0,v=m;v;v=si(v))_++;for(;0<f-_;)w=si(w),f--;for(;0<_-f;)m=si(m),_--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=si(w),m=si(m)}w=null}else w=null;g!==null&&bp(d,h,g,w,!1),y!==null&&C!==null&&bp(d,C,y,w,!0)}}e:{if(h=c?mi(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=jS;else if(Sp(h))if(G_)x=BS;else{x=US;var k=$S}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=zS);if(x&&(x=x(t,c))){V_(d,x,n,u);break e}k&&k(t,h,c),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Ou(h,"number",h.value)}switch(k=c?mi(c):window,t){case"focusin":(Sp(k)||k.contentEditable==="true")&&(fi=k,Gu=c,$s=null);break;case"focusout":$s=Gu=fi=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Ip(d,n,u);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":Ip(d,n,u)}var E;if(mh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else hi?W_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(B_&&n.locale!=="ko"&&(hi||b!=="onCompositionStart"?b==="onCompositionEnd"&&hi&&(E=z_()):(Jn=u,hh="value"in Jn?Jn.value:Jn.textContent,hi=!0)),k=qa(c,b),0<k.length&&(b=new _p(b,t,null,n,u),d.push({event:b,listeners:k}),E?b.data=E:(E=H_(n),E!==null&&(b.data=E)))),(E=DS?OS(t,n):LS(t,n))&&(c=qa(c,"onBeforeInput"),0<c.length&&(u=new _p("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}ny(d,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=to(t,n),s!=null&&r.unshift(lo(t,s,i)),s=to(t,e),s!=null&&r.push(lo(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=to(n,s),l!=null&&o.unshift(lo(n,l,a))):i||(l=to(n,s),l!=null&&o.push(lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(QS,`
`).replace(qS,"")}function ia(t,e,n){if(e=Rp(e),Rp(t)!==e&&n)throw Error(T(425))}function Xa(){}var Yu=null,Qu=null;function qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(t){return Pp.resolve(null).then(t).catch(ZS)}:Xu;function ZS(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);io(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),dn="__reactFiber$"+ss,co="__reactProps$"+ss,On="__reactContainer$"+ss,Ju="__reactEvents$"+ss,eC="__reactListeners$"+ss,tC="__reactHandles$"+ss;function Rr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ap(t);t!==null;){if(n=t[dn])return n;t=Ap(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[dn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Gl(t){return t[co]||null}var Zu=[],gi=-1;function Sr(t){return{current:t}}function _e(t){0>gi||(t.current=Zu[gi],Zu[gi]=null,gi--)}function fe(t,e){gi++,Zu[gi]=t.current,t.current=e}var gr={},st=Sr(gr),wt=Sr(!1),zr=gr;function ji(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function Ja(){_e(wt),_e(st)}function Dp(t,e,n){if(st.current!==gr)throw Error(T(168));fe(st,e),fe(wt,n)}function iy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,$w(t)||"Unknown",i));return Ee({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,zr=st.current,fe(st,t),fe(wt,wt.current),!0}function Op(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=iy(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,_e(wt),_e(st),fe(st,t)):_e(wt),fe(wt,n)}var En=null,Kl=!1,Gc=!1;function sy(t){En===null?En=[t]:En.push(t)}function nC(t){Kl=!0,sy(t)}function Cr(){if(!Gc&&En!==null){Gc=!0;var t=0,e=ae;try{var n=En;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,Kl=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),R_(lh,Cr),i}finally{ae=e,Gc=!1}}return null}var _i=[],yi=0,el=null,tl=0,Ft=[],jt=0,Br=null,In=1,Tn="";function kr(t,e){_i[yi++]=tl,_i[yi++]=el,el=t,tl=e}function oy(t,e,n){Ft[jt++]=In,Ft[jt++]=Tn,Ft[jt++]=Br,Br=t;var r=In;t=Tn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-en(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function _h(t){t.return!==null&&(kr(t,1),oy(t,1,0))}function yh(t){for(;t===el;)el=_i[--yi],_i[yi]=null,tl=_i[--yi],_i[yi]=null;for(;t===Br;)Br=Ft[--jt],Ft[jt]=null,Tn=Ft[--jt],Ft[jt]=null,In=Ft[--jt],Ft[jt]=null}var Rt=null,bt=null,Se=!1,Qt=null;function ay(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,bt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,bt=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(Se){var e=bt;if(e){var n=e;if(!Lp(t,e)){if(ed(t))throw Error(T(418));e=sr(n.nextSibling);var r=Rt;e&&Lp(t,e)?ay(r,n):(t.flags=t.flags&-4097|2,Se=!1,Rt=t)}}else{if(ed(t))throw Error(T(418));t.flags=t.flags&-4097|2,Se=!1,Rt=t}}}function Mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function sa(t){if(t!==Rt)return!1;if(!Se)return Mp(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qu(t.type,t.memoizedProps)),e&&(e=bt)){if(ed(t))throw ly(),Error(T(418));for(;e;)ay(t,e),e=sr(e.nextSibling)}if(Mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Rt?sr(t.stateNode.nextSibling):null;return!0}function ly(){for(var t=bt;t;)t=sr(t.nextSibling)}function $i(){bt=Rt=null,Se=!1}function vh(t){Qt===null?Qt=[t]:Qt.push(t)}var rC=Un.ReactCurrentBatchConfig;function Ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function cy(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=cr(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,v){return f===null||f.tag!==6?(f=Zc(_,m.mode,v),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,v){var x=_.type;return x===di?u(m,f,_.props.children,v,_.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vn&&Fp(x)===f.type)?(v=i(f,_.props),v.ref=Ss(m,f,_),v.return=m,v):(v=Ra(_.type,_.key,_.props,null,m.mode,v),v.ref=Ss(m,f,_),v.return=m,v)}function c(m,f,_,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=eu(_,m.mode,v),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function u(m,f,_,v,x){return f===null||f.tag!==7?(f=Fr(_,m.mode,v,x),f.return=m,f):(f=i(f,_),f.return=m,f)}function d(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Zc(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qo:return _=Ra(f.type,f.key,f.props,null,m.mode,_),_.ref=Ss(m,null,f),_.return=m,_;case ui:return f=eu(f,m.mode,_),f.return=m,f;case Vn:var v=f._init;return d(m,v(f._payload),_)}if(Ps(f)||gs(f))return f=Fr(f,m.mode,_,null),f.return=m,f;oa(m,f)}return null}function h(m,f,_,v){var x=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(m,f,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:return _.key===x?l(m,f,_,v):null;case ui:return _.key===x?c(m,f,_,v):null;case Vn:return x=_._init,h(m,f,x(_._payload),v)}if(Ps(_)||gs(_))return x!==null?null:u(m,f,_,v,null);oa(m,_)}return null}function g(m,f,_,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(_)||null,a(f,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return m=m.get(v.key===null?_:v.key)||null,l(f,m,v,x);case ui:return m=m.get(v.key===null?_:v.key)||null,c(f,m,v,x);case Vn:var k=v._init;return g(m,f,_,k(v._payload),x)}if(Ps(v)||gs(v))return m=m.get(_)||null,u(f,m,v,x,null);oa(f,v)}return null}function y(m,f,_,v){for(var x=null,k=null,E=f,b=f=0,j=null;E!==null&&b<_.length;b++){E.index>b?(j=E,E=null):j=E.sibling;var L=h(m,E,_[b],v);if(L===null){E===null&&(E=j);break}t&&E&&L.alternate===null&&e(m,E),f=s(L,f,b),k===null?x=L:k.sibling=L,k=L,E=j}if(b===_.length)return n(m,E),Se&&kr(m,b),x;if(E===null){for(;b<_.length;b++)E=d(m,_[b],v),E!==null&&(f=s(E,f,b),k===null?x=E:k.sibling=E,k=E);return Se&&kr(m,b),x}for(E=r(m,E);b<_.length;b++)j=g(E,m,b,_[b],v),j!==null&&(t&&j.alternate!==null&&E.delete(j.key===null?b:j.key),f=s(j,f,b),k===null?x=j:k.sibling=j,k=j);return t&&E.forEach(function(ye){return e(m,ye)}),Se&&kr(m,b),x}function w(m,f,_,v){var x=gs(_);if(typeof x!="function")throw Error(T(150));if(_=x.call(_),_==null)throw Error(T(151));for(var k=x=null,E=f,b=f=0,j=null,L=_.next();E!==null&&!L.done;b++,L=_.next()){E.index>b?(j=E,E=null):j=E.sibling;var ye=h(m,E,L.value,v);if(ye===null){E===null&&(E=j);break}t&&E&&ye.alternate===null&&e(m,E),f=s(ye,f,b),k===null?x=ye:k.sibling=ye,k=ye,E=j}if(L.done)return n(m,E),Se&&kr(m,b),x;if(E===null){for(;!L.done;b++,L=_.next())L=d(m,L.value,v),L!==null&&(f=s(L,f,b),k===null?x=L:k.sibling=L,k=L);return Se&&kr(m,b),x}for(E=r(m,E);!L.done;b++,L=_.next())L=g(E,m,b,L.value,v),L!==null&&(t&&L.alternate!==null&&E.delete(L.key===null?b:L.key),f=s(L,f,b),k===null?x=L:k.sibling=L,k=L);return t&&E.forEach(function(ot){return e(m,ot)}),Se&&kr(m,b),x}function C(m,f,_,v){if(typeof _=="object"&&_!==null&&_.type===di&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:e:{for(var x=_.key,k=f;k!==null;){if(k.key===x){if(x=_.type,x===di){if(k.tag===7){n(m,k.sibling),f=i(k,_.props.children),f.return=m,m=f;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vn&&Fp(x)===k.type){n(m,k.sibling),f=i(k,_.props),f.ref=Ss(m,k,_),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}_.type===di?(f=Fr(_.props.children,m.mode,v,_.key),f.return=m,m=f):(v=Ra(_.type,_.key,_.props,null,m.mode,v),v.ref=Ss(m,f,_),v.return=m,m=v)}return o(m);case ui:e:{for(k=_.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=eu(_,m.mode,v),f.return=m,m=f}return o(m);case Vn:return k=_._init,C(m,f,k(_._payload),v)}if(Ps(_))return y(m,f,_,v);if(gs(_))return w(m,f,_,v);oa(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=Zc(_,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return C}var Ui=cy(!0),uy=cy(!1),nl=Sr(null),rl=null,vi=null,wh=null;function Sh(){wh=vi=rl=null}function Ch(t){var e=nl.current;_e(nl),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){rl=t,wh=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},vi===null){if(rl===null)throw Error(T(308));vi=t,rl.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return e}var Pr=null;function xh(t){Pr===null?Pr=[t]:Pr.push(t)}function dy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ch(t,n)}}function jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=Ee({},d,h);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=d}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Do={},pn=Sr(Do),uo=Sr(Do),ho=Sr(Do);function Ar(t){if(t===Do)throw Error(T(174));return t}function kh(t,e){switch(fe(ho,e),fe(uo,t),fe(pn,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mu(e,t)}_e(pn),fe(pn,e)}function zi(){_e(pn),_e(uo),_e(ho)}function fy(t){Ar(ho.current);var e=Ar(pn.current),n=Mu(e,t.type);e!==n&&(fe(uo,t),fe(pn,n))}function Ih(t){uo.current===t&&(_e(pn),_e(uo))}var Ce=Sr(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function Th(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var ka=Un.ReactCurrentDispatcher,Yc=Un.ReactCurrentBatchConfig,Wr=0,xe=null,Oe=null,ze=null,ol=!1,Us=!1,fo=0,iC=0;function tt(){throw Error(T(321))}function Nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function bh(t,e,n,r,i,s){if(Wr=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=t===null||t.memoizedState===null?lC:cC,t=n(r,i),Us){s=0;do{if(Us=!1,fo=0,25<=s)throw Error(T(301));s+=1,ze=Oe=null,e.updateQueue=null,ka.current=uC,t=n(r,i)}while(Us)}if(ka.current=al,e=Oe!==null&&Oe.next!==null,Wr=0,ze=Oe=xe=null,ol=!1,e)throw Error(T(300));return t}function Rh(){var t=fo!==0;return fo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?xe.memoizedState=ze=t:ze=ze.next=t,ze}function Wt(){if(Oe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=ze===null?xe.memoizedState:ze.next;if(e!==null)ze=e,Oe=t;else{if(t===null)throw Error(T(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ze===null?xe.memoizedState=ze=t:ze=ze.next=t}return ze}function po(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,xe.lanes|=u,Hr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function py(){}function my(t,e){var n=xe,r=Wt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Ph(yy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,mo(9,_y.bind(null,n,r,i,e),void 0,null),He===null)throw Error(T(349));Wr&30||gy(n,e,i)}return i}function gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _y(t,e,n,r){e.value=n,e.getSnapshot=r,vy(e)&&wy(t)}function yy(t,e,n){return n(function(){vy(e)&&wy(t)})}function vy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function wy(t){var e=Ln(t,1);e!==null&&tn(e,t,1,-1)}function Up(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=aC.bind(null,xe,t),[e.memoizedState,t]}function mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sy(){return Wt().memoizedState}function Ia(t,e,n,r){var i=ln();xe.flags|=t,i.memoizedState=mo(1|e,n,void 0,r===void 0?null:r)}function Yl(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Nh(r,o.deps)){i.memoizedState=mo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=mo(1|e,n,s,r)}function zp(t,e){return Ia(8390656,8,t,e)}function Ph(t,e){return Yl(2048,8,t,e)}function Cy(t,e){return Yl(4,2,t,e)}function xy(t,e){return Yl(4,4,t,e)}function Ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ky(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Ey.bind(null,e,t),n)}function Ah(){}function Iy(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ty(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ny(t,e,n){return Wr&21?(on(n,e)||(n=D_(),xe.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function sC(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{ae=n,Yc.transition=r}}function by(){return Wt().memoizedState}function oC(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ry(t))Py(e,n);else if(n=dy(t,e,n,r),n!==null){var i=ut();tn(n,t,r,i),Ay(n,e,r)}}function aC(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ry(t))Py(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=dy(t,e,i,r),n!==null&&(i=ut(),tn(n,t,r,i),Ay(n,e,r))}}function Ry(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Py(t,e){Us=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ay(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ch(t,n)}}var al={readContext:Bt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},lC={readContext:Bt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,Ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oC.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Up,useDebugValue:Ah,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Up(!1),e=t[0];return t=sC.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=ln();if(Se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),He===null)throw Error(T(349));Wr&30||gy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zp(yy.bind(null,r,s,t),[t]),r.flags|=2048,mo(9,_y.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=He.identifierPrefix;if(Se){var n=Tn,r=In;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cC={readContext:Bt,useCallback:Iy,useContext:Bt,useEffect:Ph,useImperativeHandle:ky,useInsertionEffect:Cy,useLayoutEffect:xy,useMemo:Ty,useReducer:Qc,useRef:Sy,useState:function(){return Qc(po)},useDebugValue:Ah,useDeferredValue:function(t){var e=Wt();return Ny(e,Oe.memoizedState,t)},useTransition:function(){var t=Qc(po)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:by,unstable_isNewReconciler:!1},uC={readContext:Bt,useCallback:Iy,useContext:Bt,useEffect:Ph,useImperativeHandle:ky,useInsertionEffect:Cy,useLayoutEffect:xy,useMemo:Ty,useReducer:qc,useRef:Sy,useState:function(){return qc(po)},useDebugValue:Ah,useDeferredValue:function(t){var e=Wt();return Oe===null?e.memoizedState=t:Ny(e,Oe.memoizedState,t)},useTransition:function(){var t=qc(po)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:py,useSyncExternalStore:my,useId:by,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=lr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(tn(e,t,i,r),Ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=lr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(tn(e,t,i,r),Ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=lr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(tn(e,t,r,n),Ea(e,t,r))}};function Bp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!oo(n,r)||!oo(i,s):!0}function Dy(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?zr:st.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?zr:st.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e){try{var n="",r=e;do n+=jw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dC=typeof WeakMap=="function"?WeakMap:Map;function Oy(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cl||(cl=!0,md=r),sd(t,e)},n}function Ly(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kC.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var hC=Un.ReactCurrentOwner,_t=!1;function lt(t,e,n,r){e.child=t===null?uy(e,null,n,r):Ui(e,t.child,n,r)}function Kp(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=bh(t,e,n,r,s,i),n=Rh(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&n&&_h(e),e.flags|=1,lt(t,e,r,i),e.child)}function Yp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,My(t,e,s,r,i)):(t=Ra(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function My(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(oo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return od(t,e,n,r,i)}function Fy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Si,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Si,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Si,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Si,Nt),Nt|=r;return lt(t,e,i,n),e.child}function jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,i){var s=St(n)?zr:st.current;return s=ji(e,s),bi(e,i),n=bh(t,e,n,r,s,i),r=Rh(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&r&&_h(e),e.flags|=1,lt(t,e,n,i),e.child)}function Qp(t,e,n,r,i){if(St(n)){var s=!0;Za(e)}else s=!1;if(bi(e,i),e.stateNode===null)Ta(t,e),Dy(e,n,r),id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=St(n)?zr:st.current,c=ji(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Wp(e,o,r,c),Gn=!1;var h=e.memoizedState;o.state=h,il(e,r,o,i),l=e.memoizedState,a!==r||h!==l||wt.current||Gn?(typeof u=="function"&&(rd(e,n,u,r),l=e.memoizedState),(a=Gn||Bp(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=St(n)?zr:st.current,l=ji(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Wp(e,o,r,l),Gn=!1,h=e.memoizedState,o.state=h,il(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||wt.current||Gn?(typeof g=="function"&&(rd(e,n,g,r),y=e.memoizedState),(c=Gn||Bp(e,n,c,r,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,s,i)}function ad(t,e,n,r,i,s){jy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Op(e,n,!1),Mn(t,e,s);r=e.stateNode,hC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,a,s)):lt(t,e,a,s),e.memoizedState=r.state,i&&Op(e,n,!0),e.child}function $y(t){var e=t.stateNode;e.pendingContext?Dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dp(t,e.context,!1),kh(t,e.containerInfo)}function qp(t,e,n,r,i){return $i(),vh(i),e.flags|=256,lt(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uy(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Ce,i&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ld,t):Dh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dh(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,r){return r!==null&&vh(r),Ui(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(T(422))),aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ld,s);if(!(e.mode&1))return aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Xc(s,r,void 0),aa(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),tn(r,t,i,-1))}return $h(),r=Xc(Error(T(421))),aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=sr(i.nextSibling),Rt=e,Se=!0,Qt=null,t!==null&&(Ft[jt++]=In,Ft[jt++]=Tn,Ft[jt++]=Br,In=t.id,Tn=t.overflow,Br=e),e=Dh(e,r.children),e.flags|=4096,e)}function Xp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function Jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xp(t,n,e);else if(t.tag===19)Xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pC(t,e,n){switch(e.tag){case 3:$y(e),$i();break;case 5:fy(e);break;case 1:St(e.type)&&Za(e);break;case 4:kh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Uy(t,e,n):(fe(Ce,Ce.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);fe(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Fy(t,e,n)}return Mn(t,e,n)}var By,ud,Wy,Hy;By=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};Wy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ar(pn.current);var s=null;switch(n){case"input":i=Au(t,i),r=Au(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Lu(t,i),r=Lu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Fu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mC(t,e,n){var r=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return St(e.type)&&Ja(),nt(e),null;case 3:return r=e.stateNode,zi(),_e(wt),_e(st),Th(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(yd(Qt),Qt=null))),ud(t,e),nt(e),null;case 5:Ih(e);var i=Ar(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)Wy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return nt(e),null}if(t=Ar(pn.current),sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)pe(Ds[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":op(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":lp(r,s),pe("invalid",r)}Fu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":qo(r),ap(r,s,!0);break;case"textarea":qo(r),cp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[co]=r,By(t,e,!1,!1),e.stateNode=t;e:{switch(o=ju(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)pe(Ds[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":op(t,r),i=Au(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":lp(t,r),i=Lu(t,r),pe("invalid",t);break;default:i=r}Fu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?S_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eo(t,l):typeof l=="number"&&eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":qo(t),ap(t,r,!1);break;case"textarea":qo(t),cp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)Hy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Ar(ho.current),Ar(pn.current),sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&bt!==null&&e.mode&1&&!(e.flags&128))ly(),$i(),e.flags|=98560,s=!1;else if(s=sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[dn]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Qt!==null&&(yd(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Fe===0&&(Fe=3):$h())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return zi(),ud(t,e),t===null&&ao(e.stateNode.containerInfo),nt(e),null;case 10:return Ch(e.type._context),nt(e),null;case 17:return St(e.type)&&Ja(),nt(e),null;case 19:if(_e(Ce),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Wi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return nt(e),null}else 2*Re()-s.renderingStartTime>Wi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Ce.current,fe(Ce,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return jh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function gC(t,e){switch(yh(e),e.tag){case 1:return St(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),_e(wt),_e(st),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(_e(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ce),null;case 4:return zi(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var la=!1,it=!1,_C=typeof WeakSet=="function"?WeakSet:Set,O=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Jp=!1;function yC(t,e){if(Yu=Ya,t=Q_(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},Ya=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Kt(e.type,w),C);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){Ie(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Jp,Jp=!1,y}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vy(t){var e=t.alternate;e!==null&&(t.alternate=null,Vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[co],delete e[Ju],delete e[eC],delete e[tC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gy(t){return t.tag===5||t.tag===3||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Ye=null,Yt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)Ky(t,e,n),n=n.sibling}function Ky(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:it||wi(n,e);case 6:var r=Ye,i=Yt;Ye=null,Bn(t,e,n),Ye=r,Yt=i,Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),io(t)):Vc(Ye,n.stateNode));break;case 4:r=Ye,i=Yt,Ye=n.stateNode.containerInfo,Yt=!0,Bn(t,e,n),Ye=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!it&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Bn(t,e,n),it=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _C),e.forEach(function(r){var i=TC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Yt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Yt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Ye===null)throw Error(T(160));Ky(s,o,i),Ye=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),an(t),r&4){try{zs(3,t,t.return),ql(3,t)}catch(w){Ie(t,t.return,w)}try{zs(5,t,t.return)}catch(w){Ie(t,t.return,w)}}break;case 1:Gt(e,t),an(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Gt(e,t),an(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{eo(i,"")}catch(w){Ie(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g_(i,s),ju(a,o);var c=ju(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?S_(i,d):u==="dangerouslySetInnerHTML"?v_(i,d):u==="children"?eo(i,d):rh(i,u,d,c)}switch(a){case"input":Du(i,s);break;case"textarea":__(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ki(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(w){Ie(t,t.return,w)}}break;case 6:if(Gt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ie(t,t.return,w)}}break;case 3:if(Gt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(w){Ie(t,t.return,w)}break;case 4:Gt(e,t),an(t);break;case 13:Gt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mh=Re())),r&4&&em(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||u,Gt(e,t),it=c):Gt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(O=t,u=t.child;u!==null;){for(d=O=u;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:zs(4,h,h.return);break;case 1:wi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Ie(r,n,w)}}break;case 5:wi(h,h.return);break;case 22:if(h.memoizedState!==null){nm(d);continue}}g!==null?(g.return=h,O=g):nm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w_("display",o))}catch(w){Ie(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Ie(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(e,t),an(t),r&4&&em(t);break;case 21:break;default:Gt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gy(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(eo(i,""),r.flags&=-33);var s=Zp(t);pd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zp(t);fd(t,a,o);break;default:throw Error(T(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vC(t,e,n){O=t,Qy(t)}function Qy(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||la;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=la;var c=it;if(la=o,(it=l)&&!c)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?rm(i):l!==null?(l.return=o,O=l):rm(i);for(;s!==null;)O=s,Qy(s),s=s.sibling;O=i,la=a,it=c}tm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):tm(t)}}function tm(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&io(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}it||e.flags&512&&hd(e)}catch(h){Ie(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function nm(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function rm(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{hd(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var wC=Math.ceil,ll=Un.ReactCurrentDispatcher,Oh=Un.ReactCurrentOwner,zt=Un.ReactCurrentBatchConfig,ne=0,He=null,De=null,qe=0,Nt=0,Si=Sr(0),Fe=0,go=null,Hr=0,Xl=0,Lh=0,Bs=null,gt=null,Mh=0,Wi=1/0,Cn=null,cl=!1,md=null,ar=null,ca=!1,Zn=null,ul=0,Ws=0,gd=null,Na=-1,ba=0;function ut(){return ne&6?Re():Na!==-1?Na:Na=Re()}function lr(t){return t.mode&1?ne&2&&qe!==0?qe&-qe:rC.transition!==null?(ba===0&&(ba=D_()),ba):(t=ae,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function tn(t,e,n,r){if(50<Ws)throw Ws=0,gd=null,Error(T(185));Ro(t,n,r),(!(ne&2)||t!==He)&&(t===He&&(!(ne&2)&&(Xl|=n),Fe===4&&Yn(t,qe)),Ct(t,r),n===1&&ne===0&&!(e.mode&1)&&(Wi=Re()+500,Kl&&Cr()))}function Ct(t,e){var n=t.callbackNode;rS(t,e);var r=Ka(t,t===He?qe:0);if(r===0)n!==null&&hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hp(n),e===1)t.tag===0?nC(im.bind(null,t)):sy(im.bind(null,t)),JS(function(){!(ne&6)&&Cr()}),n=null;else{switch(O_(r)){case 1:n=lh;break;case 4:n=P_;break;case 16:n=Ga;break;case 536870912:n=A_;break;default:n=Ga}n=rv(n,qy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qy(t,e){if(Na=-1,ba=0,ne&6)throw Error(T(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=Ka(t,t===He?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dl(t,r);else{e=r;var i=ne;ne|=2;var s=Jy();(He!==t||qe!==e)&&(Cn=null,Wi=Re()+500,Mr(t,e));do try{xC();break}catch(a){Xy(t,a)}while(!0);Sh(),ll.current=s,ne=i,De!==null?e=0:(He=null,qe=0,e=Fe)}if(e!==0){if(e===2&&(i=Wu(t),i!==0&&(r=i,e=_d(t,i))),e===1)throw n=go,Mr(t,0),Yn(t,r),Ct(t,Re()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!SC(i)&&(e=dl(t,r),e===2&&(s=Wu(t),s!==0&&(r=s,e=_d(t,s))),e===1))throw n=go,Mr(t,0),Yn(t,r),Ct(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Ir(t,gt,Cn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Mh+500-Re(),10<e)){if(Ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xu(Ir.bind(null,t,gt,Cn),e);break}Ir(t,gt,Cn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wC(r/1960))-r,10<r){t.timeoutHandle=Xu(Ir.bind(null,t,gt,Cn),r);break}Ir(t,gt,Cn);break;case 5:Ir(t,gt,Cn);break;default:throw Error(T(329))}}}return Ct(t,Re()),t.callbackNode===n?qy.bind(null,t):null}function _d(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=gt,gt=n,e!==null&&yd(e)),t}function yd(t){gt===null?gt=t:gt.push.apply(gt,t)}function SC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Lh,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function im(t){if(ne&6)throw Error(T(327));Ri();var e=Ka(t,0);if(!(e&1))return Ct(t,Re()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var r=Wu(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=go,Mr(t,0),Yn(t,e),Ct(t,Re()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,gt,Cn),Ct(t,Re()),null}function Fh(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Wi=Re()+500,Kl&&Cr())}}function Vr(t){Zn!==null&&Zn.tag===0&&!(ne&6)&&Ri();var e=ne;ne|=1;var n=zt.transition,r=ae;try{if(zt.transition=null,ae=1,t)return t()}finally{ae=r,zt.transition=n,ne=e,!(ne&6)&&Cr()}}function jh(){Nt=Si.current,_e(Si)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XS(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:zi(),_e(wt),_e(st),Th();break;case 5:Ih(r);break;case 4:zi();break;case 13:_e(Ce);break;case 19:_e(Ce);break;case 10:Ch(r.type._context);break;case 22:case 23:jh()}n=n.return}if(He=t,De=t=cr(t.current,null),qe=Nt=e,Fe=0,go=null,Lh=Xl=Hr=0,gt=Bs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function Xy(t,e){do{var n=De;try{if(Sh(),ka.current=al,ol){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Wr=0,ze=Oe=xe=null,Us=!1,fo=0,Oh.current=null,n===null||n.return===null){Fe=1,go=e,De=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Vp(o);if(g!==null){g.flags&=-257,Gp(g,o,a,s,e),g.mode&1&&Hp(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Hp(s,c,e),$h();break e}l=Error(T(426))}}else if(Se&&a.mode&1){var C=Vp(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gp(C,o,a,s,e),vh(Bi(l,a));break e}}s=l=Bi(l,a),Fe!==4&&(Fe=2),Bs===null?Bs=[s]:Bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Oy(s,l,e);jp(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ar===null||!ar.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Ly(s,a,e);jp(s,v);break e}}s=s.return}while(s!==null)}ev(n)}catch(x){e=x,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Jy(){var t=ll.current;return ll.current=al,t===null?al:t}function $h(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(Hr&268435455)&&!(Xl&268435455)||Yn(He,qe)}function dl(t,e){var n=ne;ne|=2;var r=Jy();(He!==t||qe!==e)&&(Cn=null,Mr(t,e));do try{CC();break}catch(i){Xy(t,i)}while(!0);if(Sh(),ne=n,ll.current=r,De!==null)throw Error(T(261));return He=null,qe=0,Fe}function CC(){for(;De!==null;)Zy(De)}function xC(){for(;De!==null&&!Yw();)Zy(De)}function Zy(t){var e=nv(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?ev(t):De=e,Oh.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gC(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=mC(n,e,Nt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Ir(t,e,n){var r=ae,i=zt.transition;try{zt.transition=null,ae=1,EC(t,e,n,r)}finally{zt.transition=i,ae=r}return null}function EC(t,e,n,r){do Ri();while(Zn!==null);if(ne&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iS(t,s),t===He&&(De=He=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,rv(Ga,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ae;ae=1;var a=ne;ne|=4,Oh.current=null,yC(t,n),Yy(n,t),HS(Qu),Ya=!!Yu,Qu=Yu=null,t.current=n,vC(n),Qw(),ne=a,ae=o,zt.transition=s}else t.current=n;if(ca&&(ca=!1,Zn=t,ul=i),s=t.pendingLanes,s===0&&(ar=null),Jw(n.stateNode),Ct(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cl)throw cl=!1,t=md,md=null,t;return ul&1&&t.tag!==0&&Ri(),s=t.pendingLanes,s&1?t===gd?Ws++:(Ws=0,gd=t):Ws=0,Cr(),null}function Ri(){if(Zn!==null){var t=O_(ul),e=zt.transition,n=ae;try{if(zt.transition=null,ae=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,ul=0,ne&6)throw Error(T(331));var i=ne;for(ne|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:zs(8,u,s)}var d=u.child;if(d!==null)d.return=u,O=d;else for(;O!==null;){u=O;var h=u.sibling,g=u.return;if(Vy(u),u===c){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,O=_;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(x){Ie(a,a.return,x)}if(a===o){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(ne=i,Cr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{ae=n,zt.transition=e}}return!1}function sm(t,e,n){e=Bi(n,e),e=Oy(t,e,1),t=or(t,e,1),e=ut(),t!==null&&(Ro(t,1,e),Ct(t,e))}function Ie(t,e,n){if(t.tag===3)sm(t,t,n);else for(;e!==null;){if(e.tag===3){sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Bi(n,t),t=Ly(e,t,1),e=or(e,t,1),t=ut(),e!==null&&(Ro(e,1,t),Ct(e,t));break}}e=e.return}}function kC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(qe&n)===n&&(Fe===4||Fe===3&&(qe&130023424)===qe&&500>Re()-Mh?Mr(t,0):Lh|=n),Ct(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=ut();t=Ln(t,e),t!==null&&(Ro(t,e,n),Ct(t,n))}function IC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function TC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,pC(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Se&&e.flags&1048576&&oy(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ta(t,e),t=e.pendingProps;var i=ji(e,st.current);bi(e,n),i=bh(null,e,r,t,i,n);var s=Rh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,id(e,r,t,n),e=ad(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&_h(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bC(r),t=Kt(r,t),i){case 0:e=od(null,e,r,t,n);break e;case 1:e=Qp(null,e,r,t,n);break e;case 11:e=Kp(null,e,r,t,n);break e;case 14:e=Yp(null,e,r,Kt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Qp(t,e,r,i,n);case 3:e:{if($y(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hy(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(T(423)),e),e=qp(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(T(424)),e),e=qp(t,e,r,n,i);break e}else for(bt=sr(e.stateNode.containerInfo.firstChild),Rt=e,Se=!0,Qt=null,n=uy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=Mn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return fy(e),t===null&&td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qu(r,i)?o=null:s!==null&&qu(r,s)&&(e.flags|=32),jy(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return Uy(t,e,n);case 4:return kh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Kp(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(nl,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!wt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Bt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),Yp(t,e,r,i,n);case 15:return My(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Ta(t,e),e.tag=1,St(r)?(t=!0,Za(e)):t=!1,bi(e,n),Dy(e,r,i),id(e,r,i,n),ad(null,e,r,!0,t,n);case 19:return zy(t,e,n);case 22:return Fy(t,e,n)}throw Error(T(156,e.tag))};function rv(t,e){return R_(t,e)}function NC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new NC(t,e,n,r)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bC(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return Fr(n.children,i,s,e);case ih:o=8,i|=8;break;case Nu:return t=$t(12,n,e,i|2),t.elementType=Nu,t.lanes=s,t;case bu:return t=$t(13,n,e,i),t.elementType=bu,t.lanes=s,t;case Ru:return t=$t(19,n,e,i),t.elementType=Ru,t.lanes=s,t;case f_:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d_:o=10;break e;case h_:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=$t(22,t,r,e),t.elementType=f_,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zh(t,e,n,r,i,s,o,a,l){return t=new RC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function PC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return gr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(St(n))return iy(t,n,e)}return e}function sv(t,e,n,r,i,s,o,a,l){return t=zh(n,r,!0,t,i,s,o,a,l),t.context=iv(null),n=t.current,r=ut(),i=lr(n),s=Pn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,Ro(t,i,r),Ct(t,r),t}function Zl(t,e,n,r){var i=e.current,s=ut(),o=lr(i);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(tn(t,i,o,s),Ea(t,i,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){om(t,e),(t=t.alternate)&&om(t,e)}function AC(){return null}var ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}ec.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Zl(t,e,null,null)};ec.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Zl(null,t,null,null)}),e[On]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=F_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&$_(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function am(){}function DC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hl(o);s.call(c)}}var o=sv(e,r,t,0,null,!1,!1,"",am);return t._reactRootContainer=o,t[On]=o.current,ao(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=hl(l);a.call(c)}}var l=zh(t,0,!1,null,null,!1,!1,"",am);return t._reactRootContainer=l,t[On]=l.current,ao(t.nodeType===8?t.parentNode:t),Vr(function(){Zl(e,l,n,r)}),l}function nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hl(o);a.call(l)}}Zl(e,o,t,i)}else o=DC(n,e,t,i,r);return hl(o)}L_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(ch(e,n|1),Ct(e,Re()),!(ne&6)&&(Wi=Re()+500,Cr()))}break;case 13:Vr(function(){var r=Ln(t,1);if(r!==null){var i=ut();tn(r,t,1,i)}}),Bh(t,1)}};uh=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=ut();tn(e,t,134217728,n)}Bh(t,134217728)}};M_=function(t){if(t.tag===13){var e=lr(t),n=Ln(t,e);if(n!==null){var r=ut();tn(n,t,e,r)}Bh(t,e)}};F_=function(){return ae};j_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Uu=function(t,e,n){switch(e){case"input":if(Du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gl(r);if(!i)throw Error(T(90));m_(r),Du(r,i)}}}break;case"textarea":__(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};E_=Fh;k_=Vr;var OC={usingClientEntryPoint:!1,Events:[Ao,mi,Gl,C_,x_,Fh]},xs={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LC={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N_(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||AC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Bl=ua.inject(LC),fn=ua}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OC;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(T(200));return PC(t,e,null,n)};At.createRoot=function(t,e){if(!Hh(t))throw Error(T(299));var n=!1,r="",i=ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zh(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,ao(t.nodeType===8?t.parentNode:t),new Wh(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=N_(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Vr(t)};At.hydrate=function(t,e,n){if(!tc(e))throw Error(T(200));return nc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sv(e,null,t,1,n??null,i,!1,s,o),t[On]=e.current,ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ec(e)};At.render=function(t,e,n){if(!tc(e))throw Error(T(200));return nc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!tc(t))throw Error(T(40));return t._reactRootContainer?(Vr(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};At.unstable_batchedUpdates=Fh;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tc(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return nc(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),a_.exports=At;var lv=a_.exports;const MC=qd(lv);var cv,lm=lv;cv=lm.createRoot,lm.hydrateRoot;function uv(t){var a;const e=t.match(/на\s+(.+?)\s+года/i);if(!e)return null;const n=e[1].trim();let r=new Date(n);if(isNaN(r)){const l=n.split(/\s+/),c=parseInt(l[0],10),u=(a=l[1])==null?void 0:a.toLowerCase(),d=parseInt(l[2],10),g={января:0,февраля:1,марта:2,апреля:3,мая:4,июня:5,июля:6,августа:7,сентября:8,октября:9,ноября:10,декабря:11}[u];g!=null&&(r=new Date(d,g,c))}if(!r||isNaN(r))return null;const i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();return`${i}-${s}-${o}`}const FC="на 9 сентября 2025 года  (ВТОРНИК)",jC=uv(FC);console.log(jC);var yt=function(){return yt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yt.apply(this,arguments)};function fl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var me="-ms-",Hs="-moz-",oe="-webkit-",dv="comm",rc="rule",Vh="decl",$C="@import",hv="@keyframes",UC="@layer",fv=Math.abs,Gh=String.fromCharCode,vd=Object.assign;function zC(t,e){return Be(t,0)^45?(((e<<2^Be(t,0))<<2^Be(t,1))<<2^Be(t,2))<<2^Be(t,3):0}function pv(t){return t.trim()}function xn(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,n){return t.replace(e,n)}function Pa(t,e,n){return t.indexOf(e,n)}function Be(t,e){return t.charCodeAt(e)|0}function Hi(t,e,n){return t.slice(e,n)}function un(t){return t.length}function mv(t){return t.length}function Os(t,e){return e.push(t),t}function BC(t,e){return t.map(e).join("")}function cm(t,e){return t.filter(function(n){return!xn(n,e)})}var ic=1,Vi=1,gv=0,Ht=0,Ae=0,os="";function sc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ic,column:Vi,length:o,return:"",siblings:a}}function Hn(t,e){return vd(sc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function oi(t){for(;t.root;)t=Hn(t.root,{children:[t]});Os(t,t.siblings)}function WC(){return Ae}function HC(){return Ae=Ht>0?Be(os,--Ht):0,Vi--,Ae===10&&(Vi=1,ic--),Ae}function nn(){return Ae=Ht<gv?Be(os,Ht++):0,Vi++,Ae===10&&(Vi=1,ic++),Ae}function jr(){return Be(os,Ht)}function Aa(){return Ht}function oc(t,e){return Hi(os,t,e)}function wd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function VC(t){return ic=Vi=1,gv=un(os=t),Ht=0,[]}function GC(t){return os="",t}function tu(t){return pv(oc(Ht-1,Sd(t===91?t+2:t===40?t+1:t)))}function KC(t){for(;(Ae=jr())&&Ae<33;)nn();return wd(t)>2||wd(Ae)>3?"":" "}function YC(t,e){for(;--e&&nn()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return oc(t,Aa()+(e<6&&jr()==32&&nn()==32))}function Sd(t){for(;nn();)switch(Ae){case t:return Ht;case 34:case 39:t!==34&&t!==39&&Sd(Ae);break;case 40:t===41&&Sd(t);break;case 92:nn();break}return Ht}function QC(t,e){for(;nn()&&t+Ae!==57;)if(t+Ae===84&&jr()===47)break;return"/*"+oc(e,Ht-1)+"*"+Gh(t===47?t:nn())}function qC(t){for(;!wd(jr());)nn();return oc(t,Ht)}function XC(t){return GC(Da("",null,null,null,[""],t=VC(t),0,[0],t))}function Da(t,e,n,r,i,s,o,a,l){for(var c=0,u=0,d=o,h=0,g=0,y=0,w=1,C=1,m=1,f=0,_="",v=i,x=s,k=r,E=_;C;)switch(y=f,f=nn()){case 40:if(y!=108&&Be(E,d-1)==58){Pa(E+=Y(tu(f),"&","&\f"),"&\f",fv(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=tu(f);break;case 9:case 10:case 13:case 32:E+=KC(y);break;case 92:E+=YC(Aa()-1,7);continue;case 47:switch(jr()){case 42:case 47:Os(JC(QC(nn(),Aa()),e,n,l),l);break;default:E+="/"}break;case 123*w:a[c++]=un(E)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:C=0;case 59+u:m==-1&&(E=Y(E,/\f/g,"")),g>0&&un(E)-d&&Os(g>32?dm(E+";",r,n,d-1,l):dm(Y(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(Os(k=um(E,e,n,c,u,i,a,_,v=[],x=[],d,s),s),f===123)if(u===0)Da(E,e,k,k,v,s,d,a,x);else switch(h===99&&Be(E,3)===110?100:h){case 100:case 108:case 109:case 115:Da(t,k,k,r&&Os(um(t,k,k,0,0,i,a,_,i,v=[],d,x),x),i,x,d,a,r?v:x);break;default:Da(E,k,k,k,[""],x,0,a,x)}}c=u=g=0,w=m=1,_=E="",d=o;break;case 58:d=1+un(E),g=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&HC()==125)continue}switch(E+=Gh(f),f*w){case 38:m=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(un(E)-1)*m,m=1;break;case 64:jr()===45&&(E+=tu(nn())),h=jr(),u=d=un(_=E+=qC(Aa())),f++;break;case 45:y===45&&un(E)==2&&(w=0)}}return s}function um(t,e,n,r,i,s,o,a,l,c,u,d){for(var h=i-1,g=i===0?s:[""],y=mv(g),w=0,C=0,m=0;w<r;++w)for(var f=0,_=Hi(t,h+1,h=fv(C=o[w])),v=t;f<y;++f)(v=pv(C>0?g[f]+" "+_:Y(_,/&\f/g,g[f])))&&(l[m++]=v);return sc(t,e,n,i===0?rc:a,l,c,u,d)}function JC(t,e,n,r){return sc(t,e,n,dv,Gh(WC()),Hi(t,2,-2),0,r)}function dm(t,e,n,r,i){return sc(t,e,n,Vh,Hi(t,0,r),Hi(t,r+1,-1),r,i)}function _v(t,e,n){switch(zC(t,e)){case 5103:return oe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+t+t;case 4789:return Hs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+t+Hs+t+me+t+t;case 5936:switch(Be(t,e+11)){case 114:return oe+t+me+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return oe+t+me+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return oe+t+me+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return oe+t+me+t+t;case 6165:return oe+t+me+"flex-"+t+t;case 5187:return oe+t+Y(t,/(\w+).+(:[^]+)/,oe+"box-$1$2"+me+"flex-$1$2")+t;case 5443:return oe+t+me+"flex-item-"+Y(t,/flex-|-self/g,"")+(xn(t,/flex-|baseline/)?"":me+"grid-row-"+Y(t,/flex-|-self/g,""))+t;case 4675:return oe+t+me+"flex-line-pack"+Y(t,/align-content|flex-|-self/g,"")+t;case 5548:return oe+t+me+Y(t,"shrink","negative")+t;case 5292:return oe+t+me+Y(t,"basis","preferred-size")+t;case 6060:return oe+"box-"+Y(t,"-grow","")+oe+t+me+Y(t,"grow","positive")+t;case 4554:return oe+Y(t,/([^-])(transform)/g,"$1"+oe+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+t+t;case 4200:if(!xn(t,/flex-|baseline/))return me+"grid-column-align"+Hi(t,e)+t;break;case 2592:case 3360:return me+Y(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,xn(r.props,/grid-\w+-end/)})?~Pa(t+(n=n[e].value),"span",0)?t:me+Y(t,"-start","")+t+me+"grid-row-span:"+(~Pa(n,"span",0)?xn(n,/\d+/):+xn(n,/\d+/)-+xn(t,/\d+/))+";":me+Y(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return xn(r.props,/grid-\w+-start/)})?t:me+Y(Y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,oe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(Be(t,e+1)){case 109:if(Be(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+Hs+(Be(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Pa(t,"stretch",0)?_v(Y(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return me+i+":"+s+c+(o?me+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Be(t,e+6)===121)return Y(t,":",":"+oe)+t;break;case 6444:switch(Be(t,Be(t,14)===45?18:11)){case 120:return Y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Be(t,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+me+"$2box$3")+t;case 100:return Y(t,":",":"+me)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(t,"scroll-","scroll-snap-")+t}return t}function pl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function ZC(t,e,n,r){switch(t.type){case UC:if(t.children.length)break;case $C:case Vh:return t.return=t.return||t.value;case dv:return"";case hv:return t.return=t.value+"{"+pl(t.children,r)+"}";case rc:if(!un(t.value=t.props.join(",")))return""}return un(n=pl(t.children,r))?t.return=t.value+"{"+n+"}":""}function ex(t){var e=mv(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function tx(t){return function(e){e.root||(e=e.return)&&t(e)}}function nx(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Vh:t.return=_v(t.value,t.length,n);return;case hv:return pl([Hn(t,{value:Y(t.value,"@","@"+oe)})],r);case rc:if(t.length)return BC(n=t.props,function(i){switch(xn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oi(Hn(t,{props:[Y(i,/:(read-\w+)/,":"+Hs+"$1")]})),oi(Hn(t,{props:[i]})),vd(t,{props:cm(n,r)});break;case"::placeholder":oi(Hn(t,{props:[Y(i,/:(plac\w+)/,":"+oe+"input-$1")]})),oi(Hn(t,{props:[Y(i,/:(plac\w+)/,":"+Hs+"$1")]})),oi(Hn(t,{props:[Y(i,/:(plac\w+)/,me+"input-$1")]})),oi(Hn(t,{props:[i]})),vd(t,{props:cm(n,r)});break}return""})}}var rx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},Gi=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",yv="active",vv="data-styled-version",ac="6.1.13",Kh=`/*!sc*/
`,ml=typeof window<"u"&&"HTMLElement"in window,ix=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),lc=Object.freeze([]),Ki=Object.freeze({});function sx(t,e,n){return n===void 0&&(n=Ki),t.theme!==n.theme&&t.theme||e||n.theme}var wv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ox=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ax=/(^-|-$)/g;function hm(t){return t.replace(ox,"-").replace(ax,"")}var lx=/(a)(d)/gi,da=52,fm=function(t){return String.fromCharCode(t+(t>25?39:97))};function Cd(t){var e,n="";for(e=Math.abs(t);e>da;e=e/da|0)n=fm(e%da)+n;return(fm(e%da)+n).replace(lx,"$1-$2")}var nu,Sv=5381,Ci=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Cv=function(t){return Ci(Sv,t)};function cx(t){return Cd(Cv(t)>>>0)}function ux(t){return t.displayName||t.name||"Component"}function ru(t){return typeof t=="string"&&!0}var xv=typeof Symbol=="function"&&Symbol.for,Ev=xv?Symbol.for("react.memo"):60115,dx=xv?Symbol.for("react.forward_ref"):60112,hx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},px=((nu={})[dx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nu[Ev]=kv,nu);function pm(t){return("type"in(e=t)&&e.type.$$typeof)===Ev?kv:"$$typeof"in t?px[t.$$typeof]:hx;var e}var mx=Object.defineProperty,gx=Object.getOwnPropertyNames,mm=Object.getOwnPropertySymbols,_x=Object.getOwnPropertyDescriptor,yx=Object.getPrototypeOf,gm=Object.prototype;function Iv(t,e,n){if(typeof e!="string"){if(gm){var r=yx(e);r&&r!==gm&&Iv(t,r,n)}var i=gx(e);mm&&(i=i.concat(mm(e)));for(var s=pm(t),o=pm(e),a=0;a<i.length;++a){var l=i[a];if(!(l in fx||n&&n[l]||o&&l in o||s&&l in s)){var c=_x(e,l);try{mx(t,l,c)}catch{}}}}return t}function Yi(t){return typeof t=="function"}function Yh(t){return typeof t=="object"&&"styledComponentId"in t}function Dr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function _m(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function _o(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function xd(t,e,n){if(n===void 0&&(n=!1),!n&&!_o(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=xd(t[r],e[r]);else if(_o(e))for(var r in e)t[r]=xd(t[r],e[r]);return t}function Qh(t,e){Object.defineProperty(t,"toString",{value:e})}function Oo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var vx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Oo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Kh);return n},t}(),Oa=new Map,gl=new Map,La=1,ha=function(t){if(Oa.has(t))return Oa.get(t);for(;gl.has(La);)La++;var e=La++;return Oa.set(t,e),gl.set(e,t),e},wx=function(t,e){La=e+1,Oa.set(t,e),gl.set(e,t)},Sx="style[".concat(Gi,"][").concat(vv,'="').concat(ac,'"]'),Cx=new RegExp("^".concat(Gi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Ex=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Kh),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Cx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(wx(u,c),xx(t,u,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},ym=function(t){for(var e=document.querySelectorAll(Sx),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Gi)!==yv&&(Ex(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function kx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tv=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Gi,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Gi,yv),r.setAttribute(vv,ac);var o=kx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Ix=function(){function t(e){this.element=Tv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Oo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Tx=function(){function t(e){this.element=Tv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Nx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),vm=ml,bx={isServer:!ml,useCSSOMInjection:!ix},Nv=function(){function t(e,n,r){e===void 0&&(e=Ki),n===void 0&&(n={});var i=this;this.options=yt(yt({},bx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ml&&vm&&(vm=!1,ym(this)),Qh(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var h=function(m){return gl.get(m)}(d);if(h===void 0)return"continue";var g=s.names.get(h),y=o.getGroup(d);if(g===void 0||!g.size||y.length===0)return"continue";var w="".concat(Gi,".g").concat(d,'[id="').concat(h,'"]'),C="";g!==void 0&&g.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),l+="".concat(y).concat(w,'{content:"').concat(C,'"}').concat(Kh)},u=0;u<a;u++)c(u);return l}(i)})}return t.registerId=function(e){return ha(e)},t.prototype.rehydrate=function(){!this.server&&ml&&ym(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(yt(yt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Nx(i):r?new Ix(i):new Tx(i)}(this.options),new vx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ha(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ha(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ha(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Rx=/&/g,Px=/^\s*\/\/.*$/gm;function bv(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bv(n.children,e)),n})}function Ax(t){var e,n,r,i=Ki,s=i.options,o=s===void 0?Ki:s,a=i.plugins,l=a===void 0?lc:a,c=function(h,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},u=l.slice();u.push(function(h){h.type===rc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Rx,n).replace(r,c))}),o.prefix&&u.push(nx),u.push(ZC);var d=function(h,g,y,w){g===void 0&&(g=""),y===void 0&&(y=""),w===void 0&&(w="&"),e=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=h.replace(Px,""),m=XC(y||g?"".concat(y," ").concat(g," { ").concat(C," }"):C);o.namespace&&(m=bv(m,o.namespace));var f=[];return pl(m,ex(u.concat(tx(function(_){return f.push(_)})))),f};return d.hash=l.length?l.reduce(function(h,g){return g.name||Oo(15),Ci(h,g.name)},Sv).toString():"",d}var Dx=new Nv,Ed=Ax(),Rv=Mi.createContext({shouldForwardProp:void 0,styleSheet:Dx,stylis:Ed});Rv.Consumer;Mi.createContext(void 0);function wm(){return I.useContext(Rv)}var Ox=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ed);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Qh(this,function(){throw Oo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ed),this.name+e.hash},t}(),Lx=function(t){return t>="A"&&t<="Z"};function Sm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Lx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Pv=function(t){return t==null||t===!1||t===""},Av=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Pv(s)&&(Array.isArray(s)&&s.isCss||Yi(s)?r.push("".concat(Sm(i),":"),s,";"):_o(s)?r.push.apply(r,fl(fl(["".concat(i," {")],Av(s),!1),["}"],!1)):r.push("".concat(Sm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in rx||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $r(t,e,n,r){if(Pv(t))return[];if(Yh(t))return[".".concat(t.styledComponentId)];if(Yi(t)){if(!Yi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return $r(i,e,n,r)}var s;return t instanceof Ox?n?(t.inject(n,r),[t.getName(r)]):[t]:_o(t)?Av(t):Array.isArray(t)?Array.prototype.concat.apply(lc,t.map(function(o){return $r(o,e,n,r)})):[t.toString()]}function Mx(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Yi(n)&&!Yh(n))return!1}return!0}var Fx=Cv(ac),jx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mx(e),this.componentId=n,this.baseHash=Ci(Fx,n),this.baseStyle=r,Nv.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Dr(i,this.staticRulesId);else{var s=_m($r(this.rules,e,n,r)),o=Cd(Ci(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Dr(i,o),this.staticRulesId=o}else{for(var l=Ci(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=_m($r(d,e,n,r));l=Ci(l,h+u),c+=h}}if(c){var g=Cd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Dr(i,g)}}return i},t}(),Dv=Mi.createContext(void 0);Dv.Consumer;var iu={};function $x(t,e,n){var r=Yh(t),i=t,s=!ru(t),o=e.attrs,a=o===void 0?lc:o,l=e.componentId,c=l===void 0?function(v,x){var k=typeof v!="string"?"sc":hm(v);iu[k]=(iu[k]||0)+1;var E="".concat(k,"-").concat(cx(ac+k+iu[k]));return x?"".concat(x,"-").concat(E):E}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(v){return ru(v)?"styled.".concat(v):"Styled(".concat(ux(v),")")}(t):u,h=e.displayName&&e.componentId?"".concat(hm(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;y=function(v,x){return w(v,x)&&C(v,x)}}else y=w}var m=new jx(n,h,r?i.componentStyle:void 0);function f(v,x){return function(k,E,b){var j=k.attrs,L=k.componentStyle,ye=k.defaultProps,ot=k.foldedComponentIds,mt=k.styledComponentId,yn=k.target,Ot=Mi.useContext(Dv),at=wm(),Ze=k.shouldForwardProp||at.shouldForwardProp,A=sx(E,Ot,ye)||Ki,F=function(V,G,Z){for(var K,ve=yt(yt({},G),{className:void 0,theme:Z}),z=0;z<V.length;z+=1){var te=Yi(K=V[z])?K(ve):K;for(var ee in te)ve[ee]=ee==="className"?Dr(ve[ee],te[ee]):ee==="style"?yt(yt({},ve[ee]),te[ee]):te[ee]}return G.className&&(ve.className=Dr(ve.className,G.className)),ve}(j,E,A),W=F.as||yn,ie={};for(var se in F)F[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&F.theme===A||(se==="forwardedAs"?ie.as=F.forwardedAs:Ze&&!Ze(se,W)||(ie[se]=F[se]));var R=function(V,G){var Z=wm(),K=V.generateAndInjectStyles(G,Z.styleSheet,Z.stylis);return K}(L,F),$=Dr(ot,mt);return R&&($+=" "+R),F.className&&($+=" "+F.className),ie[ru(W)&&!wv.has(W)?"class":"className"]=$,ie.ref=b,I.createElement(W,ie)}(_,v,x)}f.displayName=d;var _=Mi.forwardRef(f);return _.attrs=g,_.componentStyle=m,_.displayName=d,_.shouldForwardProp=y,_.foldedComponentIds=r?Dr(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=h,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var b=0,j=k;b<j.length;b++)xd(x,j[b],!0);return x}({},i.defaultProps,v):v}}),Qh(_,function(){return".".concat(_.styledComponentId)}),s&&Iv(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Cm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var xm=function(t){return Object.assign(t,{isCss:!0})};function Ux(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Yi(t)||_o(t))return xm($r(Cm(lc,fl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?$r(r):xm($r(Cm(r,e)))}function kd(t,e,n){if(n===void 0&&(n=Ki),!e)throw Oo(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Ux.apply(void 0,fl([i],s,!1)))};return r.attrs=function(i){return kd(t,e,yt(yt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return kd(t,e,yt(yt({},n),i))},r}var Ov=function(t){return kd($x,t)},P=Ov;wv.forEach(function(t){P[t]=Ov(t)});const zx=t=>{switch(t){case 0:return"var(--input-background-color)";case 1:return"green";case 2:return"red"}},Em=P.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid lightpink;

  @media (max-width: 768px) {
    height: auto;
    min-height: 55px;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 10px;
  }
`,km=P.form`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-bottom: 30px;
  }
`,Im=P.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid lightpink;

  @media (max-width: 768px) {
    height: auto;
    min-height: 55px;
    padding: 15px 0;
    /* flex-wrap: wrap; */
    gap: 12px;
  }
`,ai=P.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`,Bx=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0 15px;
  }
`,Wx=P.input`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-radius: 5px;
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`,Hx=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,su=P.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,Vx=P.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`,Gx=P.header`
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 80px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 0;
  }
`,ou=P.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`,rt=P.button`
  height: 37px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-radius: 5px;
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);
  border-color: ${t=>zx(t.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`,Kx=P.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: #180000;
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  height: 37px;
  width: 150px;
  color: white;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    font-size: 16px;
  }
`,Yx=P.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    justify-content: center;
    padding: 10px 0;
  }
`,Qx=P.input`
  padding: 10px;
  margin-right: 10px;
  border: none;
  background: rgba(56, 50, 50, 1);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  height: 40px;
  width: 150px;

  &:focus {
    outline-width: 0;
  }

  font-weight: bold;
  background: var(--input-background-color);

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    padding: 0 10px;
  }
`,qx=P.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: rgba(41, 37, 37, 1);
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  padding-right: 10px;
  padding-left: 10px;
  width: 170px;
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 44px;
  }
`,Tm=P.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`,fa=P.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,Xx=P.div`
  transition: 0.2s;
  width: 40px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: lightgray;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;P.div`
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;const Jx=P.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`,Zx=P.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  background-color: var(--input-background-color);
  border: solid;
  border-radius: 5px;
  border-color: var(--input-border-color);
  padding: 5px;
  border-radius: 30px;
  width: fit-content;
`,Nm=P.button`
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  background-color: ${({active:t,theme:e})=>t?e==="dark"?"#4a90e2":"#1976d2":"transparent"};
  color: ${({active:t,theme:e})=>t?"white":e==="dark"?"#fff":"#333"};
  font-size: 14px;
  font-weight: ${({active:t})=>t?"600":"400"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({active:t,theme:e})=>t?e==="dark"?"#357abd":"#1565c0":e==="dark"?"#555":"#e0e0e0"};
  }
`,eE=P.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,pa=P.button`
  background: ${t=>t.theme==="dark"?"#444":"#f0f0f0"};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${t=>t.theme==="dark"?"#555":"#e0e0e0"};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,tE=P.div`
  padding: 20px;
  background: ${t=>t.theme==="dark"?"#2d2d2d":"#ffffff"};
  border-radius: 12px;
  min-width: 300px;
`,nE=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    text-transform: capitalize;
  }
`,rE=P.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 15px;
`,iE=P.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 8px;
  color: ${t=>t.theme==="dark"?"#aaa":"#666"};
`,sE=P.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,oE=P.button`
  aspect-ratio: 1;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: ${t=>t.isAvailable?"pointer":"not-allowed"};
  background: ${t=>t.isToday?t.theme==="dark"?"#4a90e2":"#007bff":t.isAvailable?t.theme==="dark"?"#3d3d3d":"#f8f9fa":t.theme==="dark"?"#2d2d2d":"#f0f0f0"};
  color: ${t=>t.isToday?"#ffffff":t.isAvailable?t.theme==="dark"?"#e0e0e0":"#333":t.theme==="dark"?"#666":"#ccc"};
  font-size: 14px;
  font-weight: ${t=>t.isToday?"bold":"normal"};
  transition: all 0.2s;
  position: relative;

  &:hover {
    background: ${t=>t.isAvailable?t.theme==="dark"?"#4a4a4a":"#e0e0e0":t.theme==="dark"?"#2d2d2d":"#f0f0f0"};
    transform: ${t=>t.isAvailable?"scale(1.05)":"none"};
  }

  &:active {
    transform: ${t=>t.isAvailable?"scale(0.95)":"none"};
  }
`,aE=P.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${t=>t.theme==="dark"?"#4a90e2":"#007bff"};
`,bm=({handleInputChange:t,inputValue:e})=>p.jsx("div",{children:p.jsx(Wx,{required:!0,type:"text",value:e,onChange:t})}),Lv=async()=>{try{const e=await(await fetch("https://www.vgtk.by/schedule/lessons/day-today.php")).text(),n=document.createElement("div");n.innerHTML=e;const r=n.querySelector("table");(d=>{for(let h=0;h<d.rows.length;h++){let g=d.rows[h];for(let y=0;y<g.cells.length;y++){let w=g.cells[y],C=parseInt(w.getAttribute("rowspan"));if(w.hasAttribute("rowspan")&&C>1){let m=w.cloneNode(!0);w.removeAttribute("rowspan");for(let f=1;f<C;f++){let _=d.rows[h+f];if(_&&y<=_.cells.length){let v=_.insertCell(y);v.innerHTML=m.innerHTML}}}}}})(r);const s=new Set,o=new Map,a=/^[А-Я]{1,3}-\d{2,3}$/,l=/^[А-Я\s.]+$/;let c=null;for(let d=0;d<r.rows.length;d++){const h=r.rows[d],g=h.cells[0];if(g){const y=g.innerText.trim();l.test(y)&&y.length>5&&(c=y,o.has(c)||o.set(c,[]))}Array.from(h.cells).forEach(y=>{const w=y.innerText.trim();if(a.test(w)&&c){s.add(w);const C=o.get(c);C&&!C.includes(w)&&C.push(w)}})}o.forEach((d,h)=>{o.set(h,d.sort())});const u=Object.fromEntries(o);return{allGroups:Array.from(s).sort(),groupsByDepartment:u}}catch(t){return console.error("Ошибка при парсинге групп:",t),{allGroups:[],groupsByDepartment:{}}}};let au=[],Vs={};const lE=async()=>{const t=await Lv();return au=t.allGroups,Vs=t.groupsByDepartment,console.log("Загружены группы:",au),console.log("Группы по отделениям:",Vs),{allGroups:au,groupsByDepartment:Vs}};lE();const lu=P.select`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: rgba(41, 37, 37, 1);
  border-radius: 5px;
  background: rgba(56, 50, 50, 1);
  outline-width: 0;
  /* margin */
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  

  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);
  &:hover {
    background: var(--hover-color);
  }
`,cE=({handleSelectChange:t,selectValue:e})=>{const[n,r]=I.useState([]),[i,s]=I.useState(!0),[o,a]=I.useState(null);return I.useEffect(()=>{(async()=>{try{s(!0);const c=await Lv();r(c.allGroups),a(null)}catch(c){console.error("Ошибка загрузки групп:",c),a("Не удалось загрузить список групп")}finally{s(!1)}})()},[]),i?p.jsx(lu,{type:"text",required:!0,disabled:!0,children:p.jsx("option",{children:"Загрузка групп..."})}):o?p.jsx(lu,{type:"text",required:!0,disabled:!0,children:p.jsx("option",{children:o})}):p.jsxs(lu,{type:"text",required:!0,value:e,onChange:t,children:[p.jsx("option",{value:"",disabled:!0,selected:!e,hidden:!0,children:"Группа"}),n.map(l=>p.jsx("option",{value:l,children:l},l))]})},uE=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`,Rm=({handleCheckBoxChange:t,label:e})=>p.jsx("label",{children:p.jsxs(uE,{children:[p.jsx("div",{children:e}),p.jsx("input",{onChange:t,type:"checkbox"})]})});var Mv={exports:{}},dE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hE=dE,fE=hE;function Fv(){}function jv(){}jv.resetWarningCache=Fv;var pE=function(){function t(r,i,s,o,a,l){if(l!==fE){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:jv,resetWarningCache:Fv};return n.PropTypes=n,n};Mv.exports=pE();var mE=Mv.exports;const br=qd(mE),qh=Mi.memo(({handleChangeTheme:t,theme:e})=>p.jsx(p.Fragment,{children:p.jsxs("label",{className:"switch",children:[p.jsx("input",{onChange:t,type:"checkbox",className:"themeSwitcher",checked:e==="light"}),p.jsx("span",{className:"slider"})]})}));qh.displayName="ThemeSwitcher";qh.propTypes={handleChangeTheme:br.func,theme:br.string};const gE=""+new URL("gerb-EUG4mf70.png",import.meta.url).href,_E=""+new URL("inco-Cw7QgD9S.png",import.meta.url).href;function yE(){const t=I.useRef(null),[e,n]=I.useState(null);return I.useEffect(()=>{const r=document.createElement("div");return t.current=r,document.body.appendChild(r),t.current&&n(t.current),()=>{document.body.removeChild(r)}},[]),e}const cn=({active:t,setActive:e,children:n})=>{const r=()=>{e(!1)},i=yE();return i&&MC.createPortal(p.jsx("div",{className:t?"modal active":"modal",onClick:r,children:p.jsx("div",{className:t?"modal_content active":"modal_content",onClick:s=>s.stopPropagation(),children:n})}),i)};cn.propTypes={active:br.bool,setActive:br.func,children:br.oneOfType([br.object,br.array])};const vE=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,wE=vE?"dark":"light",SE=()=>{const[t,e]=I.useState(localStorage.getItem("app-theme")||wE);return I.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("app-theme",t)},[t]),{theme:t,setTheme:e}};var Ke=[];for(var cu=0;cu<256;++cu)Ke.push((cu+256).toString(16).slice(1));function CE(t,e=0){return(Ke[t[e+0]]+Ke[t[e+1]]+Ke[t[e+2]]+Ke[t[e+3]]+"-"+Ke[t[e+4]]+Ke[t[e+5]]+"-"+Ke[t[e+6]]+Ke[t[e+7]]+"-"+Ke[t[e+8]]+Ke[t[e+9]]+"-"+Ke[t[e+10]]+Ke[t[e+11]]+Ke[t[e+12]]+Ke[t[e+13]]+Ke[t[e+14]]+Ke[t[e+15]]).toLowerCase()}var ma,xE=new Uint8Array(16);function EE(){if(!ma&&(ma=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ma))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ma(xE)}var kE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Pm={randomUUID:kE};function IE(t,e,n){if(Pm.randomUUID&&!e&&!t)return Pm.randomUUID();t=t||{};var r=t.random||(t.rng||EE)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,CE(r)}const Am={1:"09.00 - 09.45",2:"09.55 - 10.40",3:"10.50 - 11.35",4:"11.45 - 12.30",5:"12.40 - 13.25",6:"13.35 - 14.20",7:"14.30 - 15.15",8:"15.25 - 16.10",9:"16.20 - 17.05",10:"17.15 - 18.00",11:"18.10 - 18.55"},TE=P.button`
  background-color: ${t=>t.isToggled?"lightgreen":"honeydew"};
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
  
  
  font-weight: bold;
  color: var(--text-color);
  border-color: var(--input-border-color);
  background: var(--input-background-color);
  &:hover {
    background: var(--hover-color);
  }
`,NE=({handleClick:t,displayName:e,displayNameAlt:n})=>{const[r,i]=I.useState(!1),s=()=>{t(),i(o=>!o)};return p.jsx(TE,{isToggled:r,onClick:s,children:r?e||"Название":n||"Алтернативное название"})},bE=()=>{};var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw as(e)},as=function(t){return new Error("Firebase Database ("+$v.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[u],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new PE;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zv=function(t){const e=Uv(t);return Xh.encodeByteArray(e,!0)},_l=function(t){return zv(t).replace(/\./g,"")},yl=function(t){try{return Xh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){return Bv(void 0,t)}function Bv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DE(n)||(t[n]=Bv(t[n],e[n]));return t}function DE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=()=>OE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},Jh=()=>{try{return bE()||LE()||ME()||FE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wv=t=>{var e,n;return(n=(e=Jh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jE=t=>{const e=Wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hv=()=>{var t;return(t=Jh())==null?void 0:t.config},Vv=t=>{var e;return(e=Jh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_l(JSON.stringify(n)),_l(JSON.stringify(o)),""].join(".")}const Gs={};function UE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Gs))Gs[e]?t.emulator.push(e):t.prod.push(e);return t}function zE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Om=!1;function Kv(t,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Gs[t]===e||Gs[t]||Om)return;Gs[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=UE().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Om=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=zE(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),w=n("learnmore"),C=document.getElementById(w)||document.createElement("a"),m=n("preprendIcon"),f=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const _=h.element;a(_),u(C,w);const v=c();l(f,m),_.append(f,y,C,v),document.body.appendChild(_)}s?(y.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function BE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qv(){return $v.NODE_ADMIN===!0}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xr(i,a,r)}}function YE(t,e){return t.replace(QE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=yo(yl(s[0])||""),n=yo(yl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qE=function(t){const e=qv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XE=function(t){const e=qv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lm(s)&&Lm(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ZE(t,e){const n=new ek(t,e);return n.subscribe.bind(n)}class ek{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uu(){}function cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sk(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ik(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ik(t){return t===Tr?void 0:t}function sk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const ak={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},lk=ce.INFO,ck={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},uk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ef{constructor(e){this.name=e,this._logLevel=lk,this._logHandler=uk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ak[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const dk=(t,e)=>e.some(n=>t instanceof n);let Mm,Fm;function hk(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fk(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xv=new WeakMap,Td=new WeakMap,Jv=new WeakMap,du=new WeakMap,tf=new WeakMap;function pk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xv.set(n,t)}).catch(()=>{}),tf.set(e,t),e}function mk(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gk(t){Nd=t(Nd)}function _k(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hu(this),e,...n);return Jv.set(r,e.sort?e.sort():[e]),ur(r)}:fk().includes(t)?function(...e){return t.apply(hu(this),e),ur(Xv.get(this))}:function(...e){return ur(t.apply(hu(this),e))}}function yk(t){return typeof t=="function"?_k(t):(t instanceof IDBTransaction&&mk(t),dk(t,hk())?new Proxy(t,Nd):t)}function ur(t){if(t instanceof IDBRequest)return pk(t);if(du.has(t))return du.get(t);const e=yk(t);return e!==t&&(du.set(t,e),tf.set(e,t)),e}const hu=t=>tf.get(t);function vk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wk=["get","getKey","getAll","getAllKeys","count"],Sk=["put","add","delete","clear"],fu=new Map;function jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fu.set(e,s),s}gk(t=>({...t,get:(e,n,r)=>jm(e,n)||t.get(e,n,r),has:(e,n)=>!!jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bd="@firebase/app",$m="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new ef("@firebase/app"),Ek="@firebase/app-compat",kk="@firebase/analytics-compat",Ik="@firebase/analytics",Tk="@firebase/app-check-compat",Nk="@firebase/app-check",bk="@firebase/auth",Rk="@firebase/auth-compat",Pk="@firebase/database",Ak="@firebase/data-connect",Dk="@firebase/database-compat",Ok="@firebase/functions",Lk="@firebase/functions-compat",Mk="@firebase/installations",Fk="@firebase/installations-compat",jk="@firebase/messaging",$k="@firebase/messaging-compat",Uk="@firebase/performance",zk="@firebase/performance-compat",Bk="@firebase/remote-config",Wk="@firebase/remote-config-compat",Hk="@firebase/storage",Vk="@firebase/storage-compat",Gk="@firebase/firestore",Kk="@firebase/ai",Yk="@firebase/firestore-compat",Qk="firebase",qk="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",Xk={[bd]:"fire-core",[Ek]:"fire-core-compat",[Ik]:"fire-analytics",[kk]:"fire-analytics-compat",[Nk]:"fire-app-check",[Tk]:"fire-app-check-compat",[bk]:"fire-auth",[Rk]:"fire-auth-compat",[Pk]:"fire-rtdb",[Ak]:"fire-data-connect",[Dk]:"fire-rtdb-compat",[Ok]:"fire-fn",[Lk]:"fire-fn-compat",[Mk]:"fire-iid",[Fk]:"fire-iid-compat",[jk]:"fire-fcm",[$k]:"fire-fcm-compat",[Uk]:"fire-perf",[zk]:"fire-perf-compat",[Bk]:"fire-rc",[Wk]:"fire-rc-compat",[Hk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Gk]:"fire-fst",[Yk]:"fire-fst-compat",[Kk]:"fire-vertex","fire-js":"fire-js",[Qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,Jk=new Map,Pd=new Map;function Um(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Pd.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of wl.values())Um(n,t);for(const n of Jk.values())Um(n,t);return!0}function nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Mo("app","Firebase",Zk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=qk;function Zv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=Hv()),!n)throw dr.create("no-options");const s=wl.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new ok(i);for(const l of Pd.values())o.addComponent(l);const a=new eI(n,r,o);return wl.set(i,a),a}function e0(t=Rd){const e=wl.get(t);if(!e&&t===Rd&&Hv())return Zv();if(!e)throw dr.create("no-app",{appName:t});return e}function hr(t,e,n){let r=Xk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}qi(new Kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-heartbeat-database",nI=1,vo="firebase-heartbeat-store";let pu=null;function t0(){return pu||(pu=vk(tI,nI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),pu}async function rI(t){try{const n=(await t0()).transaction(vo),r=await n.objectStore(vo).get(n0(t));return await n.done,r}catch(e){if(e instanceof xr)Fn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function zm(t,e){try{const r=(await t0()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,n0(t)),await r.done}catch(n){if(n instanceof xr)Fn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function n0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=1024,sI=30;class oI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>sI){const o=cI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bm(),{heartbeatsToSend:r,unsentEntries:i}=aI(this._heartbeatsCache.heartbeats),s=_l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fn.warn(n),""}}}function Bm(){return new Date().toISOString().substring(0,10)}function aI(t,e=iI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return _l(JSON.stringify({version:2,heartbeats:t})).length}function cI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){qi(new Kr("platform-logger",e=>new Ck(e),"PRIVATE")),qi(new Kr("heartbeat",e=>new oI(e),"PRIVATE")),hr(bd,$m,t),hr(bd,$m,"esm2020"),hr("fire-js","")}uI("");function r0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dI=r0,i0=new Mo("auth","Firebase",r0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new ef("@firebase/auth");function hI(t,...e){Sl.logLevel<=ce.WARN&&Sl.warn(`Auth (${us}): ${t}`,...e)}function Ma(t,...e){Sl.logLevel<=ce.ERROR&&Sl.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw sf(t,...e)}function rn(t,...e){return sf(t,...e)}function rf(t,e,n){const r={...dI(),[e]:n};return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return rf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),rf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i0.create(t,...e)}function H(t,e,...n){if(!t)throw sf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ma(e),new Error(e)}function jn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pI(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pI()||WE()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zh()||Yv()}get(){return mI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vI=new Fo(3e4,6e4);function af(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ds(t,e,n,r,i={}){return o0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cs({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return BE()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ls(t.emulatorConfig.host)&&(c.credentials="include"),s0.fetch()(await a0(t,t.config.apiHost,n,a),c)})}async function o0(t,e,n){t._canInitEmulator=!1;const r={..._I,...e};try{const i=new SI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ga(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rf(t,u,c);gn(t,u)}}catch(i){if(i instanceof xr)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function wI(t,e,n,r,i={}){const s=await ds(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function a0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?of(t.config,i):`${t.config.apiScheme}://${i}`;return yI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class SI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),vI.get())})}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function Cl(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xI(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=lf(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(mu(i.auth_time)),issuedAtTime:Ks(mu(i.iat)),expirationTime:Ks(mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mu(t){return Number(t)*1e3}function lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=yl(n);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vm(t){const e=lf(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&EI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await wo(t,Cl(e,{idToken:n}));H(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?l0(i.providerUserInfo):[],o=TI(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Dd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function II(t){const e=xt(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function l0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e){const n=await o0(t,{},async()=>{const r=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await a0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ls(t.emulatorConfig.host)&&(l.credentials="include"),s0.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bI(t,e){return ds(t,"POST","/v2/accounts:revokeToken",af(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Vm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await wo(this,CI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:g,providerData:y,stsTokenManager:w}=n;H(d&&w,e,"internal-error");const C=Pi.fromJSON(this.name,w);H(typeof d=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),H(typeof h=="boolean",e,"internal-error"),H(typeof g=="boolean",e,"internal-error"),Wn(s,e.name),Wn(o,e.name),Wn(a,e.name),Wn(l,e.name),Wn(c,e.name),Wn(u,e.name);const m=new Jt({uid:d,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(m.providerData=y.map(f=>({...f}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?l0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Pi;a.updateFromIdToken(r);const l=new Jt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function bn(t){jn(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const Km=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Cl(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(bn(Km),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(Km);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await Cl(e,{idToken:u}).catch(()=>{});if(!h)break;d=await Jt._fromGetAccountInfoResponse(e,h,u)}else d=Jt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ai(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m0(e))return"Blackberry";if(g0(e))return"Webos";if(d0(e))return"Safari";if((e.includes("chrome/")||h0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u0(t=ht()){return/firefox\//i.test(t)}function d0(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h0(t=ht()){return/crios\//i.test(t)}function f0(t=ht()){return/iemobile/i.test(t)}function p0(t=ht()){return/android/i.test(t)}function m0(t=ht()){return/blackberry/i.test(t)}function g0(t=ht()){return/webos/i.test(t)}function cf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RI(t=ht()){var e;return cf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function PI(){return HE()&&document.documentMode===10}function _0(t=ht()){return cf(t)||p0(t)||g0(t)||m0(t)||/windows phone/i.test(t)||f0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t,e=[]){let n;switch(t){case"Browser":n=Ym(ht());break;case"Worker":n=`${Ym(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e={}){return ds(t,"GET","/v2/passwordPolicy",af(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=6;class LI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??OI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cl(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(Ur(this));const n=e?xt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new LI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dc(t){return xt(t)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(t){uf=t}function jI(t){return uf.loadJS(t)}function $I(){return uf.gapiScript}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){const n=nf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gr(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function BI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WI(t,e,n){const r=dc(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=v0(e),{host:o,port:a}=HI(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(Gr(c,r.config.emulator)&&Gr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ls(o)?(Gv(`${s}//${o}${l}`),Kv("Auth",!0)):VI()}function v0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HI(t){const e=v0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qm(o)}}}function qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return wI(t,"POST","/v1/accounts:signInWithIdp",af(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="http://localhost";class Yr extends w0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends jo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends jo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends jo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jt._fromIdTokenResponse(e,r,i),o=Xm(r);return new Xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xm(r);return new Xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends xr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function S0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function KI(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await wo(t,S0(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=lf(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e,n=!1){if(qt(t.app))return Promise.reject(Ur(t));const r="signIn",i=await S0(t,r,e),s=await Xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function qI(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function XI(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function JI(t,e,n,r){return xt(t).onAuthStateChanged(e,n,r)}function ZI(t){return xt(t).signOut()}const kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=1e3,tT=10;class x0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const nT=x0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E0.type="SESSION";const k0=E0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await rT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=hf("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function sT(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function oT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function lT(){return I0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="firebaseLocalStorageDb",cT=1,Il="firebaseLocalStorage",N0="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([Il],e?"readwrite":"readonly").objectStore(Il)}function uT(){const t=indexedDB.deleteDatabase(T0);return new $o(t).toPromise()}function Od(){const t=indexedDB.open(T0,cT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Il,{keyPath:N0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Il)?e(r):(r.close(),await uT(),e(await Od()))})})}async function Jm(t,e,n){const r=fc(t,!0).put({[N0]:e,value:n});return new $o(r).toPromise()}async function dT(t,e){const n=fc(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function Zm(t,e){const n=fc(t,!0).delete(e);return new $o(n).toPromise()}const hT=800,fT=3;class b0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(lT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await oT(),!this.activeServiceWorker)return;this.sender=new iT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Jm(e,kl,"1"),await Zm(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fc(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b0.type="LOCAL";const pT=b0;new Fo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e){return e?bn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends w0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mT(t){return QI(t.auth,new ff(t),t.bypassAuthState)}function gT(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),YI(n,new ff(t),t.bypassAuthState)}async function _T(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),KI(n,new ff(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mT;case"linkViaPopup":case"linkViaRedirect":return _T;case"reauthViaPopup":case"reauthViaRedirect":return gT;default:gn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new Fo(2e3,1e4);async function vT(t,e,n){if(qt(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=dc(t);fI(t,e,df);const i=R0(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends P0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yT.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="pendingRedirect",ja=new Map;class ST extends P0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await CT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CT(t,e){const n=kT(e),r=ET(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xT(t,e){ja.set(t._key(),e)}function ET(t){return bn(t._redirectPersistence)}function kT(t){return Fa(wT,t.config.apiKey,t.name)}async function IT(t,e,n=!1){if(qt(t.app))return Promise.reject(Ur(t));const r=dc(t),i=R0(r,e),o=await new ST(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=10*60*1e3;class NT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TT&&this.cachedEventUids.clear(),this.cachedEventUids.has(eg(e))}saveEventToCache(e){this.cachedEventUids.add(eg(e)),this.lastProcessedEventTime=Date.now()}}function eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AT=/^https?/;async function DT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RT(t);for(const n of e)try{if(OT(n))return}catch{}gn(t,"unauthorized-domain")}function OT(t){const e=Ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AT.test(n))return!1;if(PT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Fo(3e4,6e4);function tg(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MT(t){return new Promise((e,n)=>{var i,s,o;function r(){tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tg(),n(rn(t,"network-request-failed"))},timeout:LT.get()})}if((s=(i=mn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=mn().gapi)!=null&&o.load)r();else{const a=UI("iframefcb");return mn()[a]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},jI(`${$I()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $a=null,e})}let $a=null;function FT(t){return $a=$a||MT(t),$a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new Fo(5e3,15e3),$T="__/auth/iframe",UT="emulator/auth/iframe",zT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WT(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?of(e,UT):`https://${t.config.authDomain}/${$T}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=BT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${cs(r).slice(1)}`}async function HT(t){const e=await FT(t),n=mn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:WT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},jT.get());function l(){mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GT=500,KT=600,YT="_blank",QT="http://localhost";class ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qT(t,e,n,r=GT,i=KT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...VT,width:r.toString(),height:i.toString(),top:s,left:o},c=ht().toLowerCase();n&&(a=h0(c)?YT:n),u0(c)&&(e=e||QT,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(RI(c)&&a!=="_self")return XT(e||"",a),new ng(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new ng(d)}function XT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="__/auth/handler",ZT="emulator/auth/handler",eN=encodeURIComponent("fac");async function rg(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof jo){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${eN}=${encodeURIComponent(l)}`:"";return`${tN(t)}?${cs(a).slice(1)}${c}`}function tN({config:t}){return t.emulator?of(t,ZT):`https://${t.authDomain}/${JT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="webStorageSupport";class nN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k0,this._completeRedirectFn=IT,this._overrideRedirectResult=xT}async _openPopup(e,n,r,i){var o;jn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await rg(e,n,r,Ad(),i);return qT(e,s,hf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rg(e,n,r,Ad(),i);return sT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HT(e),r=new NT(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gu,{type:gu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[gu];s!==void 0&&n(!!s),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||d0()||cf()}}const rN=nN;var ig="@firebase/auth",sg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oN(t){qi(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y0(t)},c=new MI(r,i,s,l);return BI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qi(new Kr("auth-internal",e=>{const n=dc(e.getProvider("auth").getImmediate());return(r=>new iN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(ig,sg,sN(t)),hr(ig,sg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=5*60,lN=Vv("authIdTokenMaxAge")||aN;let og=null;const cN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lN)return;const i=n==null?void 0:n.token;og!==i&&(og=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D0(t=e0()){const e=nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zI(t,{popupRedirectResolver:rN,persistence:[pT,nT,k0]}),r=Vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cN(s.toString());XI(n,o,()=>o(n.currentUser)),qI(n,a=>o(a))}}const i=Wv("auth");return i&&WI(n,`http://${i}`),n}function uN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}FI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oN("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function dN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(d){o(d)}}function l(u){try{c(r.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((r=r.apply(t,[])).next())})}function hN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xi=function(){return xi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},xi.apply(this,arguments)},O0=function(t){return{loading:t==null,value:t}},fN=function(){return function(t,e){switch(e.type){case"error":return xi(xi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return O0(e.defaultValue);case"value":return xi(xi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},pN=function(t){var e=t?t():void 0,n=I.useReducer(fN(),O0(e)),r=n[0],i=n[1],s=I.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=I.useCallback(function(l){i({type:"error",error:l})},[]),a=I.useCallback(function(l){i({type:"value",value:l})},[]);return I.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},mN=function(t,e){var n=pN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return I.useEffect(function(){var l=JI(t,function(c){return dN(void 0,void 0,void 0,function(){var u;return hN(this,function(d){switch(d.label){case 0:return[3,4];case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return u=d.sent(),s(u),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},gN="firebase",_N="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(gN,_N,"app");var ag={};const lg="@firebase/database",cg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L0="";function yN(t){L0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vN(e)}}catch{}return new wN},Lr=M0("localStorage"),SN=M0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new ef("@firebase/database"),CN=function(){let t=1;return function(){return t++}}(),F0=function(t){const e=nk(t),n=new JE;n.update(e);const r=n.digest();return Xh.encodeByteArray(r)},Uo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Uo.apply(null,r):typeof r=="object"?e+=Me(r):e+=r,e+=" "}return e};let Ys=null,ug=!0;const xN=function(t,e){N(!e,"Can't turn on custom loggers persistently."),Oi.logLevel=ce.VERBOSE,Ys=Oi.log.bind(Oi)},Qe=function(...t){if(ug===!0&&(ug=!1,Ys===null&&SN.get("logging_enabled")===!0&&xN()),Ys){const e=Uo.apply(null,t);Ys(e)}},zo=function(t){return function(...e){Qe(t,...e)}},Ld=function(...t){const e="FIREBASE INTERNAL ERROR: "+Uo(...t);Oi.error(e)},$n=function(...t){const e=`FIREBASE FATAL ERROR: ${Uo(...t)}`;throw Oi.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+Uo(...t);Oi.warn(e)},EN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",Qr="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Ji||e===Qr)return-1;if(e===Ji||t===Qr)return 1;{const n=dg(t),r=dg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IN=function(t,e){return t===e?0:t<e?-1:1},Es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},mf=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Me(e[r]),n+=":",n+=mf(t[e[r]]);return n+="}",n},j0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $0=function(t){N(!pf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},TN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const RN=new RegExp("^-?(0*)\\d{1,10}$"),PN=-2147483648,AN=2147483647,dg=function(t){if(RN.test(t)){const e=Number(t);if(e>=PN&&e<=AN)return e}return null},hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},DN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Ua{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ua.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="5",U0="v",z0="s",B0="r",W0="f",H0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V0="ls",G0="p",Md="ac",K0="websocket",Y0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function q0(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===K0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Y0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MN(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={},yu={};function _f(t){const e=t.toString();return _u[e]||(_u[e]=new FN),_u[e]}function jN(t,e){const n=t.toString();return yu[n]||(yu[n]=e()),yu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&hs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="start",UN="close",zN="pLPCommand",BN="pRTLPCB",X0="id",J0="pw",Z0="ser",WN="cb",HN="seg",VN="ts",GN="d",KN="dframe",e1=1870,t1=30,YN=e1-t1,QN=25e3,qN=3e4;class Ei{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zo(e),this.stats_=_f(n),this.urlFn=l=>(this.appCheckToken&&(l[Md]=this.appCheckToken),q0(n,Y0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $N(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qN)),kN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yf((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hg)this.id=a,this.password=l;else if(o===UN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hg]="t",r[Z0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[U0]=gf,this.transportSessionId&&(r[z0]=this.transportSessionId),this.lastSessionId&&(r[V0]=this.lastSessionId),this.applicationId&&(r[G0]=this.applicationId),this.appCheckToken&&(r[Md]=this.appCheckToken),typeof location<"u"&&location.hostname&&H0.test(location.hostname)&&(r[B0]=W0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TN()&&!NN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zv(n),i=j0(r,YN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KN]="t",r[X0]=e,r[J0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CN(),window[zN+this.uniqueCallbackIdentifier]=e,window[BN+this.uniqueCallbackIdentifier]=n,this.myIFrame=yf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[X0]=this.myID,e[J0]=this.myPW,e[Z0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+t1+r.length<=e1;){const o=this.pendingSegs.shift();r=r+"&"+HN+i+"="+o.seg+"&"+VN+i+"="+o.ts+"&"+GN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=16384,JN=45e3;let Tl=null;typeof MozWebSocket<"u"?Tl=MozWebSocket:typeof WebSocket<"u"&&(Tl=WebSocket);class Xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zo(this.connId),this.stats_=_f(n),this.connURL=Xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[U0]=gf,typeof location<"u"&&location.hostname&&H0.test(location.hostname)&&(o[B0]=W0),n&&(o[z0]=n),r&&(o[V0]=r),i&&(o[Md]=i),s&&(o[G0]=s),q0(e,K0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lr.set("previous_websocket_failure",!0);try{let r;Qv(),this.mySock=new Tl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Tl!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Lr.isInMemoryStorage||Lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=yo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=j0(n,XN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static get ALL_TRANSPORTS(){return[Ei,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of So.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}So.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=6e4,eb=5e3,tb=10*1024,nb=100*1024,vu="t",fg="d",rb="s",pg="r",ib="e",mg="o",gg="a",_g="n",yg="p",sb="h";class ob{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zo("c:"+this.id+":"),this.transportManager_=new So(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vu in e){const n=e[vu];n===gg?this.upgradeIfSecondaryHealthy_():n===pg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Es("t",e),r=Es("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_g,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Es("t",e),r=Es("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Es(vu,e);if(fg in e){const r=e[fg];if(n===sb){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_g){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rb?this.onConnectionShutdown_(r):n===pg?this.onReset_(r):n===ib?Ld("Server Error: "+r):n===mg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ld("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gf!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends r1{static getInstance(){return new Nl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=32,wg=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new ue("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _r(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function vf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ab(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Co(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function i1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ue(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function ct(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return ct(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lb(t,e){const n=Co(t,0),r=Co(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ei(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function wf(t,e){if(_r(t)!==_r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_r(t)>_r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cb{constructor(e,n){this.errorPrefix_=n,this.parts_=Co(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uc(this.parts_[r]);s1(this)}}function ub(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uc(e),s1(t)}function db(t){const e=t.parts_.pop();t.byteLength_-=uc(e),t.parts_.length>0&&(t.byteLength_-=1)}function s1(t){if(t.byteLength_>wg)throw new Error(t.errorPrefix_+"has a key path longer than "+wg+" bytes ("+t.byteLength_+").");if(t.parts_.length>vg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vg+") or object contains a cycle "+Nr(t))}function Nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends r1{static getInstance(){return new Sf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,hb=60*5*1e3,Sg=30*1e3,fb=1.3,pb=3e4,mb="server_kill",Cg=3;class An extends n1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=An.nextPersistentConnectionId_++,this.log_=zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=hb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Qv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Me(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;An.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=Qi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ld("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pb&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new ob(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{dt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(mb)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&dt(d),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Id(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>mf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ue(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cg&&(this.reconnectDelay_=Sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+L0.replace(/\./g,"-")]=1,Zh()?e["framework.cordova"]=1:Yv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nl.getInstance().currentlyOnline();return Id(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(Ji,e),i=new q(Ji,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class o1 extends pc{static get __EMPTY_NODE(){return _a}static set __EMPTY_NODE(e){_a=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw as("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Qr,_a)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,_a)}toString(){return".key"}}const Li=new o1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??vt.EMPTY_NODE,this.right=s??vt.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return vt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class gb{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,n=vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ya(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ya(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ya(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ya(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new gb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){return ei(t.name,e.name)}function Cf(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;function yb(t){Fd=t}const a1=function(t){return typeof t=="number"?"number:"+$0(t):"string:"+t},l1=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else N(t===Fd||t.isEmpty(),"priority of unexpected type.");N(t===Fd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg;class Ue{static set __childrenNodeConstructor(e){xg=e}static get __childrenNodeConstructor(){return xg}constructor(e,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+a1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$0(this.value_):e+=this.value_,this.lazyHash_=F0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ue.VALUE_TYPE_ORDER.indexOf(n),s=Ue.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c1,u1;function vb(t){c1=t}function wb(t){u1=t}class Sb extends pc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Qr,new Ue("[PRIORITY-POST]",u1))}makePost(e,n){const r=c1(e);return new q(n,new Ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ne=new Sb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=Math.log(2);class xb{constructor(e){const n=s=>parseInt(Math.log(s)/Cb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bl=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new We(h,d.node,We.BLACK,null,null);{const g=parseInt(u/2,10)+l,y=i(l,g),w=i(g+1,c);return d=t[g],h=n?n(d):d,new We(h,d.node,We.BLACK,y,w)}},s=function(l){let c=null,u=null,d=t.length;const h=function(y,w){const C=d-y,m=d;d-=y;const f=i(C+1,m),_=t[C],v=n?n(_):_;g(new We(v,_.node,w,null,f))},g=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));w?h(C,We.BLACK):(h(C,We.BLACK),h(C,We.RED))}return u},o=new xb(t.length),a=s(o);return new vt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;const li={};class Rn{static get Default(){return N(li&&Ne,"ChildrenNode.ts has not been loaded"),wu=wu||new Rn({".priority":li},{".priority":Ne}),wu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bl(r,e.getCompare()):a=li;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new Rn(u,c)}addToIndexes(e,n){const r=vl(this.indexes_,(i,s)=>{const o=Qi(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bl(a,o.getCompare())}else return li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new Rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=vl(this.indexes_,i=>{if(i===li)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new Rn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;class B{static get EMPTY_NODE(){return Is||(Is=new B(new vt(Cf),null,Rn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&l1(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Is}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Is:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Is:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{N(Q(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ne,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+a1(this.getPriority().val())+":"),this.forEachChild(Ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":F0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bo?-1:0}withIndex(e){if(e===Li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ne),i=n.getIterator(Ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Li?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Eb extends B{constructor(){super(new vt(Cf),B.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Bo=new Eb;Object.defineProperties(q,{MIN:{value:new q(Ji,B.EMPTY_NODE)},MAX:{value:new q(Qr,Bo)}});o1.__EMPTY_NODE=B.EMPTY_NODE;Ue.__childrenNodeConstructor=B;yb(Bo);wb(Bo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=!0;function Le(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ue(n,Le(e))}if(!(t instanceof Array)&&kb){const n=[];let r=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=bl(n,_b,o=>o.name,Cf);if(r){const o=bl(n,Ne.getCompare());return new B(s,Le(e),new Rn({".priority":o},{".priority":Ne}))}else return new B(s,Le(e),Rn.Default)}else{let n=B.EMPTY_NODE;return Je(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}vb(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib extends pc{constructor(e){super(),this.indexPath_=e,N(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=Le(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Bo);return new q(Qr,e)}toString(){return Co(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb extends pc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Le(e);return new q(n,r)}toString(){return".value"}}const Nb=new Tb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){return{type:"value",snapshotNode:t}}function Zi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Eo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(xo(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zi(n,r)):o.trackChildChange(Eo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(xo(i,s))}),n.isLeafNode()||n.forEachChild(Ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Eo(i,s,o))}else r.trackChildChange(Zi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.indexedFilter_=new xf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(Ne,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(u&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Eo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(xo(n,d));const w=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Zi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(xo(c.name,c.node)),s.trackChildChange(Zi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new Ef;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pb(t){return t.loadsAllData()?new xf(t.getIndex()):t.hasLimit()?new Rb(t):new ko(t)}function Eg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===Nb?n="$value":t.index_===Li?n="$key":(N(t.index_ instanceof Ib,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends n1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Rl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Eg(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Qi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Rl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Eg(e._queryParams),r=e._path.toString(),i=new Lo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yo(a.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return{value:null,children:new Map}}function h1(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,Pl());const i=t.children.get(r);e=he(e),h1(i,e,n)}}function jd(t,e,n){t.value!==null?n(e,t.value):Db(t,(r,i)=>{const s=new ue(e.toString()+"/"+r);jd(i,s,n)})}function Db(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=10*1e3,Lb=30*1e3,Mb=5*60*1e3;class Fb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ob(e);const r=Ig+(Lb-Ig)*Math.random();Qs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function kf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function If(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zt.ACK_USER_WRITE,this.source=kf()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Al(re(),n,this.revert)}}else return N(Q(this.path)===e,"operationForChild called for unrelated child."),new Al(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Io(this.source,re()):new Io(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zt.OVERWRITE}operationForChild(e){return X(this.path)?new qr(this.source,re(),this.snap.getImmediateChild(e)):new qr(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new qr(this.source,re(),n.value):new es(this.source,re(),n)}else return N(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $b(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bb(o.childName,o.snapshotNode))}),Ts(t,i,"child_removed",e,r,n),Ts(t,i,"child_added",e,r,n),Ts(t,i,"child_moved",s,r,n),Ts(t,i,"child_changed",e,r,n),Ts(t,i,"value",e,r,n),i}function Ts(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>zb(t,a,l)),o.forEach(a=>{const l=Ub(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ub(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zb(t,e,n){if(e.childName==null||n.childName==null)throw as("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,r){return mc(new yr(e,n,r),t.serverCache)}function f1(t,e,n,r){return mc(t.eventCache,new yr(e,n,r))}function Dl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;const Bb=()=>(Su||(Su=new vt(IN)),Su);class de{static fromObject(e){let n=new de(null);return Je(e,(r,i)=>{n=n.set(new ue(r),i)}),n}constructor(e,n=Bb()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(X(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:Te(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new de(null)}}set(e,n){if(X(e))return new de(n,this.children);{const r=Q(e),s=(this.children.get(r)||new de(null)).set(he(e),n),o=this.children.insert(r,s);return new de(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(X(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(X(e))return n;{const r=Q(e),s=(this.children.get(r)||new de(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new de(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(X(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(he(e),Te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,r){if(X(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),Te(n,i),r):new de(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new de(null))}}function Xs(t,e,n){if(X(e))return new sn(new de(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ct(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new de(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function $d(t,e,n){let r=t;return Je(n,(i,s)=>{r=Xs(r,Te(e,i),s)}),r}function Tg(t,e){if(X(e))return sn.empty();{const n=t.writeTree_.setTree(e,new de(null));return new sn(n)}}function Ud(t,e){return ti(t,e)!=null}function ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ct(n.path,e)):null}function Ng(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function fr(t,e){if(X(e))return t;{const n=ti(t,e);return n!=null?new sn(new de(n)):new sn(t.writeTree_.subtree(e))}}function zd(t){return t.writeTree_.isEmpty()}function ts(t,e){return p1(re(),t.writeTree_,e)}function p1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=p1(Te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e){return y1(e,t)}function Wb(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Xs(t.visibleWrites,e,n)),t.lastWriteId=r}function Hb(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$d(t.visibleWrites,e,n),t.lastWriteId=r}function Vb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Gb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Kb(a,r.path)?i=!1:Ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Yb(t),!0;if(r.snap)t.visibleWrites=Tg(t.visibleWrites,r.path);else{const a=r.children;Je(a,l=>{t.visibleWrites=Tg(t.visibleWrites,Te(r.path,l))})}return!0}else return!1}function Kb(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(Te(t.path,n),e))return!0;return!1}function Yb(t){t.visibleWrites=m1(t.allWrites,Qb,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qb(t){return t.visible}function m1(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ut(n,o)?(a=ct(n,o),r=Xs(r,a,s.snap)):Ut(o,n)&&(a=ct(o,n),r=Xs(r,re(),s.snap.getChild(a)));else if(s.children){if(Ut(n,o))a=ct(n,o),r=$d(r,a,s.children);else if(Ut(o,n))if(a=ct(o,n),X(a))r=$d(r,re(),s.children);else{const l=Qi(s.children,Q(a));if(l){const c=l.getChild(he(a));r=Xs(r,re(),c)}}}else throw as("WriteRecord should have .snap or .children")}}return r}function g1(t,e,n,r,i){if(!r&&!i){const s=ti(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(zd(o))return n;if(n==null&&!Ud(o,re()))return null;{const a=n||B.EMPTY_NODE;return ts(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&zd(s))return n;if(!i&&n==null&&!Ud(s,re()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Ut(c.path,e)||Ut(e,c.path))},a=m1(t.allWrites,o,e),l=n||B.EMPTY_NODE;return ts(a,l)}}}function qb(t,e,n){let r=B.EMPTY_NODE;const i=ti(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(Ne,(o,a)=>{const l=ts(fr(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),Ng(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return Ng(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Xb(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Te(e,n);if(Ud(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return zd(o)?i.getChild(n):ts(o,i.getChild(n))}}function Jb(t,e,n,r){const i=Te(e,n),s=ti(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return ts(o,r.getNode().getImmediateChild(n))}else return null}function Zb(t,e){return ti(t.visibleWrites,e)}function eR(t,e,n,r,i,s,o){let a;const l=fr(t.visibleWrites,e),c=ti(l,re());if(c!=null)a=c;else if(n!=null)a=ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&u.length<i;)d(g,r)!==0&&u.push(g),g=h.getNext();return u}else return[]}function tR(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Ol(t,e,n,r){return g1(t.writeTree,t.treePath,e,n,r)}function Nf(t,e){return qb(t.writeTree,t.treePath,e)}function bg(t,e,n,r){return Xb(t.writeTree,t.treePath,e,n,r)}function Ll(t,e){return Zb(t.writeTree,Te(t.treePath,e))}function nR(t,e,n,r,i,s){return eR(t.writeTree,t.treePath,e,n,r,i,s)}function bf(t,e,n){return Jb(t.writeTree,t.treePath,e,n)}function _1(t,e){return y1(Te(t.treePath,e),t.writeTree)}function y1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Eo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,xo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Eo(r,e.snapshotNode,i.oldSnap));else throw as("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const v1=new iR;class Rf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xr(this.viewCache_),s=nR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){return{filter:t}}function oR(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aR(t,e,n,r,i){const s=new rR;let o,a;if(n.type===Zt.OVERWRITE){const c=n;c.source.fromUser?o=Bd(t,e,c.path,c.snap,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Ml(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Zt.MERGE){const c=n;c.source.fromUser?o=cR(t,e,c.path,c.children,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Wd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Zt.ACK_USER_WRITE){const c=n;c.revert?o=hR(t,e,c.path,r,i,s):o=uR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Zt.LISTEN_COMPLETE)o=dR(t,e,n.path,r,s);else throw as("Unknown operation type: "+n.type);const l=s.getChanges();return lR(e,o,l),{viewCache:o,changes:l}}function lR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Dl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(d1(Dl(e)))}}function w1(t,e,n,r,i,s){const o=e.eventCache;if(Ll(r,n)!=null)return e;{let a,l;if(X(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xr(e),u=c instanceof B?c:B.EMPTY_NODE,d=Nf(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ol(r,Xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Q(n);if(c===".priority"){N(_r(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=bg(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=he(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=bg(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=bf(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return qs(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Ml(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Q(n);if(!l.isCompleteForPath(n)&&_r(n)>1)return e;const y=he(n),C=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),g,C,y,v1,null)}const d=f1(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),h=new Rf(i,d,s);return w1(t,d,n,i,h,a)}function Bd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Rf(i,e,s);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=qs(e,c,!0,t.filter.filtersNodes());else{const d=Q(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=qs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=he(n),g=a.getNode().getImmediateChild(d);let y;if(X(h))y=r;else{const w=u.getCompleteChild(d);w!=null?vf(h)===".priority"&&w.getChild(i1(h)).isEmpty()?y=w:y=w.updateChild(h,r):y=B.EMPTY_NODE}if(g.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,h,u,o);l=qs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rg(t,e){return t.eventCache.isCompleteForChild(e)}function cR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Te(n,l);Rg(e,Q(u))&&(a=Bd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Te(n,l);Rg(e,Q(u))||(a=Bd(t,a,u,c,i,s,o))}),a}function Pg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=r:c=new de(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=Pg(t,g,h);l=Ml(t,l,new ue(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),w=Pg(t,y,h);l=Ml(t,l,new ue(d),w,i,s,o,a)}}),l}function uR(t,e,n,r,i,s,o){if(Ll(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ml(t,e,n,l.getNode().getChild(n),i,s,a,o);if(X(n)){let c=new de(null);return l.getNode().forEachChild(Li,(u,d)=>{c=c.set(new ue(u),d)}),Wd(t,e,n,c,i,s,a,o)}else return e}else{let c=new de(null);return r.foreach((u,d)=>{const h=Te(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Wd(t,e,n,c,i,s,a,o)}}function dR(t,e,n,r,i){const s=e.serverCache,o=f1(e,s.getNode(),s.isFullyInitialized()||X(n),s.isFiltered());return w1(t,o,n,r,v1,i)}function hR(t,e,n,r,i,s){let o;if(Ll(r,n)!=null)return e;{const a=new Rf(r,e,i),l=e.eventCache.getNode();let c;if(X(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ol(r,Xr(e));else{const d=e.serverCache.getNode();N(d instanceof B,"serverChildren would be complete if leaf node"),u=Nf(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Q(n);let d=bf(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,he(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,he(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ol(r,Xr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ll(r,re())!=null,qs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xf(r.getIndex()),s=Pb(r);this.processor_=sR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new yr(l,o.isFullyInitialized(),i.filtersNodes()),d=new yr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=mc(d,u),this.eventGenerator_=new jb(this.query_)}get query(){return this.query_}}function pR(t){return t.viewCache_.serverCache.getNode()}function mR(t){return Dl(t.viewCache_)}function gR(t,e){const n=Xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function Ag(t){return t.eventRegistrations_.length===0}function _R(t,e){t.eventRegistrations_.push(e)}function Dg(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Og(t,e,n,r){e.type===Zt.MERGE&&e.source.queryId!==null&&(N(Xr(t.viewCache_),"We should always have a full cache before handling merges"),N(Dl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=aR(t.processor_,i,e,n,r);return oR(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,S1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(s,o)=>{r.push(Zi(s,o))}),n.isFullyInitialized()&&r.push(d1(n.getNode())),S1(t,r,n.getNode(),e)}function S1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $b(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class C1{constructor(){this.views=new Map}}function vR(t){N(!Fl,"__referenceConstructor has already been defined"),Fl=t}function wR(){return N(Fl,"Reference.ts has not been loaded"),Fl}function SR(t){return t.views.size===0}function Pf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),Og(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Og(o,e,n,r));return s}}function x1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ol(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=Nf(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const c=mc(new yr(a,l,!1),new yr(r,i,!1));return new fR(e,c)}return o}function CR(t,e,n,r,i,s){const o=x1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_R(o,n),yR(o,n)}function xR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=vr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Dg(c,n,r)),Ag(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Dg(l,n,r)),Ag(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!vr(t)&&s.push(new(wR())(e._repo,e._path)),{removed:s,events:o}}function E1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pr(t,e){let n=null;for(const r of t.views.values())n=n||gR(r,e);return n}function k1(t,e){if(e._queryParams.loadsAllData())return _c(t);{const r=e._queryIdentifier;return t.views.get(r)}}function I1(t,e){return k1(t,e)!=null}function vr(t){return _c(t)!=null}function _c(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;function ER(t){N(!jl,"__referenceConstructor has already been defined"),jl=t}function kR(){return N(jl,"Reference.ts has not been loaded"),jl}let IR=1;class Lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=tR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function T1(t,e,n,r,i){return Wb(t.pendingWriteTree_,e,n,r,i),i?fs(t,new qr(kf(),e,n)):[]}function TR(t,e,n,r){Hb(t.pendingWriteTree_,e,n,r);const i=de.fromObject(n);return fs(t,new es(kf(),e,i))}function er(t,e,n=!1){const r=Vb(t.pendingWriteTree_,e);if(Gb(t.pendingWriteTree_,e)){let s=new de(null);return r.snap!=null?s=s.set(re(),!0):Je(r.children,o=>{s=s.set(new ue(o),!0)}),fs(t,new Al(r.path,s,n))}else return[]}function Wo(t,e,n){return fs(t,new qr(If(),e,n))}function NR(t,e,n){const r=de.fromObject(n);return fs(t,new es(If(),e,r))}function bR(t,e){return fs(t,new Io(If(),e))}function RR(t,e,n){const r=Df(t,n);if(r){const i=Of(r),s=i.path,o=i.queryId,a=ct(s,e),l=new Io(Tf(o),a);return Lf(t,s,l)}else return[]}function $l(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||I1(o,e))){const l=xR(o,e,n,r);SR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>vr(g));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=DR(h);for(let y=0;y<g.length;++y){const w=g[y],C=w.query,m=P1(t,w);t.listenProvider_.startListening(Js(C),To(t,C),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Js(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(yc(h));t.listenProvider_.stopListening(Js(h),g)}))}OR(t,c)}return a}function N1(t,e,n,r){const i=Df(t,r);if(i!=null){const s=Of(i),o=s.path,a=s.queryId,l=ct(o,e),c=new qr(Tf(a),l,n);return Lf(t,o,c)}else return[]}function PR(t,e,n,r){const i=Df(t,r);if(i){const s=Of(i),o=s.path,a=s.queryId,l=ct(o,e),c=de.fromObject(n),u=new es(Tf(a),l,c);return Lf(t,o,u)}else return[]}function Hd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const y=ct(h,i);s=s||pr(g,y),o=o||vr(g)});let a=t.syncPointTree_.get(i);a?(o=o||vr(a),s=s||pr(a,re())):(a=new C1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const w=pr(y,re());w&&(s=s.updateImmediateChild(g,w))}));const c=I1(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=yc(e);N(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=LR();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const u=gc(t.pendingWriteTree_,i);let d=CR(a,e,n,u,s,l);if(!c&&!o&&!r){const h=k1(a,e);d=d.concat(MR(t,e,h))}return d}function Af(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ct(o,e),c=pr(a,l);if(c)return c});return g1(i,e,s,n,!0)}function AR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ct(c,n);r=r||pr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||pr(i,re()):(i=new C1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new yr(r,!0,!1):null,a=gc(t.pendingWriteTree_,e._path),l=x1(i,e,a,s?o.getNode():B.EMPTY_NODE,s);return mR(l)}function fs(t,e){return b1(e,t.syncPointTree_,null,gc(t.pendingWriteTree_,re()))}function b1(t,e,n,r){if(X(t.path))return R1(t,e,n,r);{const i=e.get(re());n==null&&i!=null&&(n=pr(i,re()));let s=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=_1(r,o);s=s.concat(b1(a,l,c,u))}return i&&(s=s.concat(Pf(i,t,r,n))),s}}function R1(t,e,n,r){const i=e.get(re());n==null&&i!=null&&(n=pr(i,re()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=_1(r,o),u=t.operationForChild(o);u&&(s=s.concat(R1(u,a,l,c)))}),i&&(s=s.concat(Pf(i,t,r,n))),s}function P1(t,e){const n=e.query,r=To(t,n);return{hashFn:()=>(pR(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?RR(t,n._path,r):bR(t,n._path);{const s=bN(i,n);return $l(t,n,null,s)}}}}function To(t,e){const n=yc(e);return t.queryToTagMap.get(n)}function yc(t){return t._path.toString()+"$"+t._queryIdentifier}function Df(t,e){return t.tagToQueryMap.get(e)}function Of(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Lf(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=gc(t.pendingWriteTree_,e);return Pf(r,n,i,null)}function DR(t){return t.fold((e,n,r)=>{if(n&&vr(n))return[_c(n)];{let i=[];return n&&(i=E1(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function Js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kR())(t._repo,t._path):t}function OR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=yc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function LR(){return IR++}function MR(t,e,n){const r=e._path,i=To(t,e),s=P1(t,n),o=t.listenProvider_.startListening(Js(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!vr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&vr(u))return[_c(u).query];{let h=[];return u&&(h=h.concat(E1(u).map(g=>g.query))),Je(d,(g,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Js(u),To(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mf(n)}node(){return this.node_}}class Ff{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new Ff(this.syncTree_,n)}node(){return Af(this.syncTree_,this.path_)}}const FR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mg=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $R(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},$R=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},A1=function(t,e,n,r){return jf(e,new Ff(n,t),r)},D1=function(t,e,n){return jf(t,new Mf(e),n)};function jf(t,e,n){const r=t.getPriority().val(),i=Mg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Mg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ue(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ue(i))),o.forEachChild(Ne,(a,l)=>{const c=jf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Uf(t,e){let n=e instanceof ue?e:new ue(e),r=t,i=Q(n);for(;i!==null;){const s=Qi(r.node.children,i)||{children:{},childCount:0};r=new $f(i,r,s),n=he(n),i=Q(n)}return r}function ps(t){return t.node.value}function O1(t,e){t.node.value=e,Vd(t)}function L1(t){return t.node.childCount>0}function UR(t){return ps(t)===void 0&&!L1(t)}function vc(t,e){Je(t.node.children,(n,r)=>{e(new $f(n,t,r))})}function M1(t,e,n,r){n&&!r&&e(t),vc(t,i=>{M1(i,e,!0,r)}),n&&r&&e(t)}function zR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ho(t){return new ue(t.parent===null?t.name:Ho(t.parent)+"/"+t.name)}function Vd(t){t.parent!==null&&BR(t.parent,t.name,t)}function BR(t,e,n){const r=UR(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/[\[\].#$\/\u0000-\u001F\u007F]/,HR=/[\[\].#$\u0000-\u001F\u007F]/,Cu=10*1024*1024,zf=function(t){return typeof t=="string"&&t.length!==0&&!WR.test(t)},F1=function(t){return typeof t=="string"&&t.length!==0&&!HR.test(t)},VR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),F1(t)},GR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!pf(t)||t&&typeof t=="object"&&_n(t,".sv")},KR=function(t,e,n,r){wc(cc(t,"value"),e,n)},wc=function(t,e,n){const r=n instanceof ue?new cb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nr(r)+" with contents = "+e.toString());if(pf(e))throw new Error(t+"contains "+e.toString()+" "+Nr(r));if(typeof e=="string"&&e.length>Cu/3&&uc(e)>Cu)throw new Error(t+"contains a string greater than "+Cu+" utf8 bytes "+Nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ub(r,o),wc(t,a,r),db(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nr(r)+" in addition to actual children.")}},YR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Co(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!zf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},QR=function(t,e,n,r){const i=cc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Je(e,(o,a)=>{const l=new ue(o);if(wc(i,a,Te(n,l)),vf(l)===".priority"&&!GR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),YR(i,s)},j1=function(t,e,n,r){if(!F1(n))throw new Error(cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),j1(t,e,n)},$1=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},XR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VR(n))throw new Error(cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!wf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function U1(t,e,n){Sc(t,n),z1(t,r=>wf(r,e))}function Vt(t,e,n){Sc(t,n),z1(t,r=>Ut(r,e)||Ut(e,r))}function z1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ZR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ys&&Qe("event: "+n.toString()),hs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="repo_interrupt",tP=25;class nP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pl(),this.transactionQueueTree_=new $f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rP(t,e,n){if(t.stats_=_f(t.repoInfo_),t.forceRestClient_||DN())t.server_=new Rl(t.repoInfo_,(r,i,s,o)=>{Fg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new An(t.repoInfo_,e,(r,i,s,o)=>{Fg(t,r,i,s,o)},r=>{jg(t,r)},r=>{sP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jN(t.repoInfo_,()=>new Fb(t.stats_,t.server_)),t.infoData_=new Ab,t.infoSyncTree_=new Lg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Wo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bf(t,"connected",!1),t.serverSyncTree_=new Lg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Vt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iP(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cc(t){return FR({timestamp:iP(t)})}function Fg(t,e,n,r,i){t.dataUpdateCount++;const s=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=vl(n,c=>Le(c));o=PR(t.serverSyncTree_,s,l,i)}else{const l=Le(n);o=N1(t.serverSyncTree_,s,l,i)}else if(r){const l=vl(n,c=>Le(c));o=NR(t.serverSyncTree_,s,l)}else{const l=Le(n);o=Wo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ns(t,s)),Vt(t.eventQueue_,a,o)}function jg(t,e){Bf(t,"connected",e),e===!1&&cP(t)}function sP(t,e){Je(e,(n,r)=>{Bf(t,n,r)})}function Bf(t,e,n){const r=new ue("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=Wo(t.infoSyncTree_,r,i);Vt(t.eventQueue_,r,s)}function Wf(t){return t.nextWriteId_++}function oP(t,e,n){const r=AR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Le(i).withIndex(e._queryParams.getIndex());Hd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wo(t.serverSyncTree_,e._path,s);else{const a=To(t.serverSyncTree_,e);o=N1(t.serverSyncTree_,e._path,s,a)}return Vt(t.eventQueue_,e._path,o),$l(t.serverSyncTree_,e,n,null,!0),s},i=>(Vo(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function aP(t,e,n,r,i){Vo(t,"set",{path:e.toString(),value:n,priority:r});const s=Cc(t),o=Le(n,r),a=Af(t.serverSyncTree_,e),l=D1(o,a,s),c=Wf(t),u=T1(t.serverSyncTree_,e,l,c,!0);Sc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const y=h==="ok";y||dt("set at "+e+" failed: "+h);const w=er(t.serverSyncTree_,c,!y);Vt(t.eventQueue_,e,w),Gd(t,i,h,g)});const d=Vf(t,e);ns(t,d),Vt(t.eventQueue_,d,[])}function lP(t,e,n,r){Vo(t,"update",{path:e.toString(),value:n});let i=!0;const s=Cc(t),o={};if(Je(n,(a,l)=>{i=!1,o[a]=A1(Te(e,a),Le(l),t.serverSyncTree_,s)}),i)Qe("update() called with empty data.  Don't do anything."),Gd(t,r,"ok",void 0);else{const a=Wf(t),l=TR(t.serverSyncTree_,e,o,a);Sc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||dt("update at "+e+" failed: "+c);const h=er(t.serverSyncTree_,a,!d),g=h.length>0?ns(t,e):e;Vt(t.eventQueue_,g,h),Gd(t,r,c,u)}),Je(n,c=>{const u=Vf(t,Te(e,c));ns(t,u)}),Vt(t.eventQueue_,e,[])}}function cP(t){Vo(t,"onDisconnectEvents");const e=Cc(t),n=Pl();jd(t.onDisconnect_,re(),(i,s)=>{const o=A1(i,s,t.serverSyncTree_,e);h1(n,i,o)});let r=[];jd(n,re(),(i,s)=>{r=r.concat(Wo(t.serverSyncTree_,i,s));const o=Vf(t,i);ns(t,o)}),t.onDisconnect_=Pl(),Vt(t.eventQueue_,re(),r)}function uP(t,e,n){let r;Q(e._path)===".info"?r=Hd(t.infoSyncTree_,e,n):r=Hd(t.serverSyncTree_,e,n),U1(t.eventQueue_,e._path,r)}function $g(t,e,n){let r;Q(e._path)===".info"?r=$l(t.infoSyncTree_,e,n):r=$l(t.serverSyncTree_,e,n),U1(t.eventQueue_,e._path,r)}function dP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eP)}function Vo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function Gd(t,e,n,r){e&&hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function B1(t,e,n){return Af(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Hf(t,e=t.transactionQueueTree_){if(e||xc(t,e),ps(e)){const n=H1(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hP(t,Ho(e),n)}else L1(e)&&vc(e,n=>{Hf(t,n)})}function hP(t,e,n){const r=n.map(c=>c.currentWriteId),i=B1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ct(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Vo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(er(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();xc(t,Uf(t.transactionQueueTree_,e)),Hf(t,t.transactionQueueTree_),Vt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)hs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{dt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ns(t,e)}},o)}function ns(t,e){const n=W1(t,e),r=Ho(n),i=H1(t,n);return fP(t,i,r),r}function fP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ct(n,l.path);let u=!1,d;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tP)u=!0,d="maxretry",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0));else{const h=B1(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){wc("transaction failed: Data returned ",g,l.path);let y=Le(g);typeof g=="object"&&g!=null&&_n(g,".priority")||(y=y.updatePriority(h.getPriority()));const C=l.currentWriteId,m=Cc(t),f=D1(y,h,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=f,l.currentWriteId=Wf(t),o.splice(o.indexOf(C),1),i=i.concat(T1(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(er(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(er(t.serverSyncTree_,l.currentWriteId,!0))}Vt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}xc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)hs(r[a]);Hf(t,t.transactionQueueTree_)}function W1(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&ps(r)===void 0;)r=Uf(r,n),e=he(e),n=Q(e);return r}function H1(t,e){const n=[];return V1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function V1(t,e,n){const r=ps(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);vc(e,i=>{V1(t,i,n)})}function xc(t,e){const n=ps(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,O1(e,n.length>0?n:void 0)}vc(e,r=>{xc(t,r)})}function Vf(t,e){const n=Ho(W1(t,e)),r=Uf(t.transactionQueueTree_,e);return zR(r,i=>{xu(t,i)}),xu(t,r),M1(r,i=>{xu(t,i)}),n}function xu(t,e){const n=ps(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?O1(e,void 0):n.length=s+1,Vt(t.eventQueue_,Ho(e),i);for(let o=0;o<r.length;o++)hs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ug=function(t,e){const n=gP(t),r=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Q0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ue(n.pathString)}},gP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=pP(t.substring(u,d)));const h=mP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class yP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return X(this._path)?null:vf(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const e=kg(this._queryParams),n=mf(e);return n==="{}"?"default":n}get _queryObject(){return kg(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof Gf))return!1;const n=this._repo===e._repo,r=wf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ab(this._path)}}class zn extends Gf{constructor(e,n){super(e,n,new Ef,!1)}get parent(){const e=i1(this._path);return e===null?null:new zn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class No{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),r=Kd(this.ref,e);return new No(this._node.getChild(n),r,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new No(i,Kd(this.ref,r),Ne)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function le(t,e){return t=xt(t),t._checkNotDeleted("ref"),e!==void 0?Kd(t._root,e):t._root}function Kd(t,e){return t=xt(t),Q(t._path)===null?qR("child","path",e):j1("child","path",e),new zn(t._repo,Te(t._path,e))}function vP(t){return $1("remove",t._path),hn(t,null)}function hn(t,e){t=xt(t),$1("set",t._path),KR("set",e,t._path);const n=new Lo;return aP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function za(t,e){QR("update",e,t._path);const n=new Lo;return lP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function tr(t){t=xt(t);const e=new G1(()=>{}),n=new Ec(e);return oP(t._repo,t,n).then(r=>new No(r,new zn(t._repo,t._path),t._queryParams.getIndex()))}class Ec{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _P("value",this,new No(e.snapshotNode,new zn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yP(this,e,n):null}matches(e){return e instanceof Ec?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{$g(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new G1(n,s||void 0),a=new Ec(o);return uP(t._repo,t,a),()=>$g(t._repo,t,a)}function Ba(t,e,n,r){return wP(t,"value",e,n,r)}vR(zn);ER(zn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="FIREBASE_DATABASE_EMULATOR_HOST",Yd={};let CP=!1;function xP(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ls(s);t.repoInfo_=new Q0(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function EP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ug(s,i),a=o.repoInfo,l;typeof process<"u"&&ag&&(l=ag[SP]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ug(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new LN(t.name,t.options,e);XR("Invalid Firebase Database URL",o),X(o.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const u=IP(a,t,c,new ON(t,n));return new TP(u,t)}function kP(t,e){const n=Yd[e];(!n||n[t.key]!==t)&&$n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dP(t),delete n[t.key]}function IP(t,e,n,r){let i=Yd[e.name];i||(i={},Yd[e.name]=i);let s=i[t.toURLString()];return s&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nP(t,CP,n,r),i[t.toURLString()]=s,s}class TP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function K1(t=e0(),e){const n=nf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=jE("database");r&&NP(n,...r)}return n}function NP(t,e,n,r={}){t=xt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Gr(r,s.repoInfo_.emulatorOptions))return;$n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ua(Ua.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:$E(r.mockUserToken,t.app.options.projectId);o=new Ua(a)}ls(e)&&(Gv(e),Kv("Database",!0)),xP(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){yN(us),qi(new Kr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hr(lg,cg,t),hr(lg,cg,"esm2020")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bP();const RP={apiKey:"AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",authDomain:"vgtk-parser.firebaseapp.com",projectId:"vgtk-parser",storageBucket:"vgtk-parser.firebasestorage.app",messagingSenderId:"369828135879",appId:"1:369828135879:web:ad18e0c1b525f3cbef0fe2",measurementId:"G-CETL1LFGEM",databaseURL:"https://vgtk-parser-default-rtdb.europe-west1.firebasedatabase.app/"},PP=Zv(RP),Pe=K1(PP),ge=D0();le(Pe,"users");le(Pe,"hours/");const AP=P.div`
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    /* height: 60%; */
    min-height: 500px;
    padding: 0 10px;
  }
`,DP=P.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
    width: 100%;

    button {
      flex: 1;
      min-width: 120px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`,OP=P.h2`
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px 0;
    width: 100%;
    order: -1;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,LP=P.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 12px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 8px;
  }
`,MP=P.table`
  border-collapse: collapse;
  width: max-content;
  min-width: 100%;

  th,
  td {
    border: 1px solid ${({theme:t})=>(t==null?void 0:t.borderColor)||"#ddd"};
    padding: 8px 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    th,
    td {
      padding: 6px 3px;
    }
  }
`,FP=P.th`
  position: sticky;
  left: 0;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 3;
  width: 200px;
  border: 2px solid #999;
  text-align: left;
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    width: 150px;
    font-size: 13px;
    min-width: 120px;
  }
`,zg=P.th`
  width: 55px;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 45px;
    font-size: 12px;
    min-width: 40px;
  }
`,jP=P.td`
  position: sticky;
  left: 0;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  width: 200px;
  border: 2px solid #999;
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    width: 150px;
    font-size: 13px;
    min-width: 120px;
  }
`,$P=P.td`
  cursor: pointer;
  text-align: left;
  position: relative;
  padding: 4px;
  font-size: 12px;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 6px 3px;
    min-width: 45px;

    &:active {
      opacity: 0.7;
    }
  }
`,UP=P.div`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,zP=P.div`
  position: absolute;
  right: 2px;
  bottom: 2px;
  font-size: 10px;
  opacity: 0.8;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`,Eu=P.td`
  text-align: center;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    min-width: 50px;
  }
`,BP=P.td`
  position: sticky;
  left: 0;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  border: 2px solid #999;
  transition: background 0.2s ease;
`,WP=P.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Bg=P.h3`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`,HP=P.div`
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px 0;
  }
`,ku=P.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`,Wg=P.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,Hg=P.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,ci=P.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${({$variant:t})=>t==="danger"?"#ff4444":t==="success"?"#4CAF50":t==="primary"?"#2196F3":"#f0f0f0"};
  color: ${({$variant:t})=>t==="danger"||t==="success"||t==="primary"?"white":"black"};
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    min-height: 44px;
  }
`,VP=P.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #000;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`,GP=P.h4`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`,KP=P.div`
  margin-top: 24px;
  text-align: right;

  @media (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    gap: 10px;

    button {
      flex: 1;
    }
  }
`,YP=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`,QP=P.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    min-height: 44px;
  }
`,qP=P.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`;function XP(t){if(!(t instanceof Date)||isNaN(t))return"";const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${n}-${r}`}function Qd(t){const[e,n,r]=t.split("-").map(Number);return new Date(Date.UTC(r,n-1,e))}function JP(t){return!t||t.length===0?1:t.reduce((n,r)=>Math.max(n,r.id||0),0)+1}function ZP(t=""){return typeof t=="string"&&t.trim().startsWith("П")}function eA(t){return[...t].sort((e,n)=>Qd(e)-Qd(n))}const tA=({rawData:t,onRawDataChange:e,userTarification:n})=>{const[r,i]=I.useState(()=>{const R=new Date;return new Date(R.getFullYear(),R.getMonth(),1)}),[s,o]=I.useState(!1),[a,l]=I.useState(!1),[c,u]=I.useState(""),[d,h]=I.useState({date:"",lessonName:"",groupName:"",total:0}),[g,y]=I.useState([]),[w,C]=I.useState({isLab:!1,cabinet:""}),[m,f]=I.useState(null),[_,v]=I.useState(null),{datesInMonth:x,rows:k,totalsByDate:E,grandTotal:b}=I.useMemo(()=>{const R=Object.keys(t||{}),$=eA(R),V=$.map(z=>({ds:z,date:Qd(z)})).filter(({date:z})=>z.getFullYear()===r.getFullYear()&&z.getMonth()===r.getMonth()).map(z=>z.ds),G=new Set;(n||[]).forEach(z=>{z&&G.add(`${z.lesson}|||${z.groupName}`)}),Object.values(t||{}).flat().forEach(z=>{z&&z.lessonName&&z.groupName&&G.add(`${z.lessonName}|||${z.groupName}`)});const Z=Array.from(G).map(z=>{const[te,ee]=z.split("|||"),vn=ZP(ee),wn=[];$.forEach(je=>{(Array.isArray(t[je])?t[je]:[]).filter(kt=>kt.lessonName===te&&kt.groupName===ee).sort((kt,ii)=>(kt.id||0)-(ii.id||0)).forEach(kt=>wn.push({item:kt,ds:je}))});const Sn=new Map;let Et=0,Lt=0;wn.forEach(({item:je,ds:ri},kt)=>{vn?(Et+=1,Sn.set(`${ri}-${je.id}`,Et)):(Lt+=1,Lt===1&&(Et+=1),Sn.set(`${ri}-${je.id}`,Et),Lt===2&&(Lt=0))});const ni={};let kc=Et;return V.forEach(je=>{const kt=(Array.isArray(t[je])?t[je]:[]).filter(Ge=>Ge.lessonName===te&&Ge.groupName===ee),ii=kt.filter(Ge=>Ge.isLab).length,$e=kt.filter(Ge=>!Ge.isLab).length,Ve=ii+$e,ms=new Set;kt.forEach(Ge=>{const Er=Sn.get(`${je}-${Ge.id}`);Er&&ms.add(Er)}),ni[je]={labs:ii,lectures:$e,total:Ve,indices:Array.from(ms).sort((Ge,Er)=>Ge-Er)}}),{lessonName:te,groupName:ee,cells:ni,sum:kc}}),K={};let ve=0;return V.forEach(z=>{const te=Z.reduce((ee,vn)=>{var wn;return ee+(((wn=vn.cells[z])==null?void 0:wn.total)||0)},0);K[z]=te,ve+=te}),{datesInMonth:V,rows:Z,totalsByDate:K,grandTotal:ve}},[t,r,n]),j=()=>i(R=>new Date(R.getFullYear(),R.getMonth()-1,1)),L=()=>i(R=>new Date(R.getFullYear(),R.getMonth()+1,1)),ye=({labs:R,lectures:$})=>R>0&&$>0?"linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)":R>0?"rgb(255,122,92)":$>0?"rgb(102,153,204)":"transparent",ot="rgba(199, 18, 18, 0.301)",mt=(R,$,V)=>{const G=ye(R);return m===$||_===V?{background:G,boxShadow:`inset 0 0 0 1000px ${ot}`}:{background:G}},yn=(R,$,V,G)=>{const Z=Array.isArray(t[R])?t[R].filter(K=>K.lessonName===$&&K.groupName===V):[];h({date:R,lessonName:$,groupName:V,total:G}),y(Z),C({isLab:!1,cabinet:""}),o(!0)},Ot=async R=>{var Sn;const $=(Sn=ge==null?void 0:ge.currentUser)==null?void 0:Sn.uid;if(!$){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:V,lessonName:G,groupName:Z,isLab:K,cabinet:ve}=R,z=t[V]||[],ee={id:JP(z),lessonName:G,groupName:Z,isLab:K,cabinet:ve},vn=[...z,ee];e(Et=>({...Et,[V]:vn}));const wn=`users/${$}/hours/${V}`;try{await hn(le(Pe,wn),vn),console.log(`Урок ${ee.id} добавлен на ${V} и отправлен в DB.`),s&&d.date===V&&y(Et=>[...Et,ee])}catch(Et){console.error("Ошибка при добавлении урока в Firebase:",Et),alert("Ошибка при добавлении урока."),e(Lt=>({...Lt,[V]:z}))}},at=async(R,$)=>{var z;const V=(z=ge==null?void 0:ge.currentUser)==null?void 0:z.uid;if(!V){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:G}=d;if(!G||!Array.isArray(t[G]))return;const Z=t[G],K=Z.map(te=>te.id===R?{...te,...$}:te);e(te=>({...te,[G]:K}));const ve=`users/${V}/hours/${G}`;try{await hn(le(Pe,ve),K),console.log(`Урок ${R} на ${G} обновлен в DB.`),y(te=>te.map(ee=>ee.id===R?{...ee,...$}:ee))}catch(te){console.error("Ошибка при обновлении урока в Firebase:",te),alert("Ошибка при обновлении урока."),e(ee=>({...ee,[G]:Z}))}},Ze=async R=>{var ve;const $=(ve=ge==null?void 0:ge.currentUser)==null?void 0:ve.uid;if(!$){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:V}=d;if(!V||!Array.isArray(t[V]))return;const G=t[V],Z=G.filter(z=>z.id!==R);e(z=>({...z,[V]:Z}));const K=`users/${$}/hours/${V}`;try{Z.length===0?await hn(le(Pe,K),null):await hn(le(Pe,K),Z),console.log(`Урок ${R} на ${V} удален из DB.`),y(z=>z.filter(te=>te.id!==R)),Z.length===0&&o(!1)}catch(z){console.error("Ошибка при удалении урока из Firebase:",z),alert("Ошибка при удалении урока."),e(te=>({...te,[V]:G}))}},A=(R,$,V)=>{const G=[...g];G[R]={...G[R],[$]:V},y(G)},F=R=>at(R.id,{isLab:R.isLab,cabinet:R.cabinet}),W=R=>Ze(R.id),ie=()=>{Ot({date:d.date,lessonName:d.lessonName,groupName:d.groupName,isLab:w.isLab,cabinet:w.cabinet}),C({isLab:!1,cabinet:""})},se=()=>{if(!c){alert("Пожалуйста, выберите дату.");return}if(Object.keys(t).includes(c)){alert("Дата уже существует в таблице.");return}e(R=>({...R,[c]:[]})),l(!1),console.log(`Дата ${c} добавлена локально.`)};return p.jsxs(AP,{children:[p.jsxs(DP,{children:[p.jsx(rt,{onClick:j,children:"← Пред. месяц"}),p.jsxs(OP,{children:["Расписание за"," ",r.toLocaleString("ru-RU",{month:"long",year:"numeric"})]}),p.jsx(rt,{onClick:L,children:"След. месяц →"}),p.jsx(rt,{onClick:()=>{l(!0),u("")},children:"Добавить дату"})]}),p.jsx(LP,{children:p.jsxs(MP,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(FP,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Предмет / Группа"}),x.map(R=>p.jsx(zg,{$isHovered:m===R,onMouseEnter:()=>f(R),onMouseLeave:()=>f(null),children:R},R)),p.jsx(zg,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Итого (занятий)"})]})}),p.jsx("tbody",{children:k.map(({lessonName:R,groupName:$,cells:V,sum:G})=>{const Z=`${R}|||${$}`;return p.jsxs("tr",{onMouseEnter:()=>v(Z),onMouseLeave:()=>v(null),children:[p.jsxs(jP,{$isHovered:_===Z,children:[R,p.jsx("br",{}),p.jsxs("small",{children:["(",$,")"]})]}),x.map(K=>{const{labs:ve,lectures:z,total:te,indices:ee}=V[K]||{labs:0,lectures:0,total:0,indices:[]};return p.jsxs($P,{onClick:()=>yn(K,R,$,E[K]),style:mt({labs:ve,lectures:z},K,Z),onMouseEnter:()=>{f(K),v(Z)},onMouseLeave:()=>{f(null),v(null)},children:[p.jsx(UP,{children:te||""}),ee&&ee.length>0&&p.jsx(zP,{children:ee.join(",")})]},K)}),p.jsx(Eu,{$isHovered:_===Z,children:G})]},Z)})}),p.jsx("tfoot",{children:p.jsxs("tr",{onMouseEnter:()=>v("footer-row-key"),onMouseLeave:()=>v(null),children:[p.jsx(BP,{$isHovered:_==="footer-row-key",children:"Всего часов по дням:"}),x.map(R=>p.jsx(Eu,{$isHovered:m===R||_==="footer-row-key",onMouseEnter:()=>{f(R),v("footer-row-key")},onMouseLeave:()=>{f(null),v(null)},children:E[R]},R)),p.jsx(Eu,{$isHovered:_==="footer-row-key",children:b})]})})]})}),p.jsx(cn,{active:s,setActive:o,children:p.jsxs(WP,{children:[p.jsxs(Bg,{children:[d.lessonName," (",d.groupName,")",p.jsx("br",{}),"Дата: ",d.date]}),g.length>0?g.map((R,$)=>p.jsxs(HP,{children:[p.jsxs(ku,{children:[p.jsxs(Wg,{value:R.isLab?"lab":"lec",onChange:V=>A($,"isLab",V.target.value==="lab"),children:[p.jsx("option",{value:"lec",children:"Лекция"}),p.jsx("option",{value:"lab",children:"Лабораторная"})]}),p.jsx(Hg,{type:"text",value:R.cabinet||"",onChange:V=>A($,"cabinet",V.target.value),placeholder:"Кабинет"})]}),p.jsxs(ku,{children:[p.jsx(ci,{$variant:"primary",onClick:()=>F(g[$]),children:"Сохранить"}),p.jsx(ci,{$variant:"danger",onClick:()=>W(R),children:"Удалить"})]})]},R.id)):p.jsx("p",{children:"Пока нет занятий по этому предмету и группе на эту дату."}),p.jsxs(VP,{children:[p.jsx(GP,{children:"Добавить занятие"}),p.jsxs(ku,{children:[p.jsxs(Wg,{value:w.isLab?"lab":"lec",onChange:R=>C($=>({...$,isLab:R.target.value==="lab"})),children:[p.jsx("option",{value:"lec",children:"Лекция"}),p.jsx("option",{value:"lab",children:"Лабораторная"})]}),p.jsx(Hg,{type:"text",value:w.cabinet,onChange:R=>C($=>({...$,cabinet:R.target.value})),placeholder:"Кабинет"})]}),p.jsx(ci,{$variant:"success",onClick:ie,children:"Добавить"})]}),p.jsx(KP,{children:p.jsx(ci,{onClick:()=>o(!1),children:"Закрыть"})})]})}),p.jsx(cn,{active:a,setActive:l,children:p.jsxs(YP,{children:[p.jsx(Bg,{children:"Выберите дату для добавления"}),p.jsx(QP,{type:"date",onChange:R=>{const $=R.target.valueAsDate;u($?XP($):"")}}),p.jsxs(qP,{children:[p.jsx(ci,{$variant:"success",onClick:se,disabled:!c,children:"Добавить"}),p.jsx(ci,{onClick:()=>l(!1),children:"Отмена"})]})]})})]})},nA={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#e6f3ff","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#fff0e6","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#e6ffe6","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#ffe6e6","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#e6e6ff","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#fff4e6","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#f0e6ff","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#ffe6f0"},rA={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#1a3b4f","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#4f3b1a","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#1a4f1a","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#4f1a1a","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#1a1a4f","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#4f3d1a","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#2d1a4f","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#4f1a3b"},iA=t=>{console.log("Поиск отделения для группы:",t),console.log("Доступные отделения:",Vs);for(const[e,n]of Object.entries(Vs))if(n.includes(t))return console.log("Найдено отделение:",e),e;return console.log("Отделение не найдено для группы:",t),null},Vg=P.div`
  padding: 10px;
  max-width: 100%;
`,Gg=P.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px solid ${({theme:t})=>t==="dark"?"#444":"#ddd"};
  border-radius: 25px;
  background: ${({theme:t})=>t==="dark"?"#333":"#fff"};
  color: ${({theme:t})=>t==="dark"?"#fff":"#333"};
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    transform: scale(1.02);
  }
`,sA=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,oA=P.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#fff"};
  border-radius: 12px;
  border: 1px solid ${({theme:t})=>t==="dark"?"#444":"#e0e0e0"};
  overflow: hidden;
  height: fit-content;
  display: flex;
  flex-direction: column;

  /* Анимация появления карточки */
  animation: cardAppear 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);

  @keyframes cardAppear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Эффект при наведении */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: #4a90e2;
  }
`,aA=P.div`
  background: ${({theme:t,$departmentColor:e,$darkDepartmentColor:n})=>(console.log("GroupTitle props:",{theme:t,$departmentColor:e,$darkDepartmentColor:n}),t==="dark"&&n?(console.log("Используем темный цвет:",n),n):t==="light"&&e?(console.log("Используем светлый цвет:",e),e):(console.log("Используем цвет по умолчанию"),t==="dark"?"#3d3d3d":"#f5f5f5"))};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({theme:t})=>t==="dark"?"#444":"#e0e0e0"};

  /* Добавляем небольшой контраст для текста в темной теме */
  color: ${({theme:t,$darkDepartmentColor:e})=>t==="dark"&&e?"#fff":"inherit"};
`,lA=P.div`
  display: flex;
  flex-direction: column;
`,cA=P.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid
    ${({theme:t})=>t==="dark"?"#444":"#f0f0f0"};

  /* Анимация для строк уроков */
  animation: rowAppear 0.3s ease forwards;
  animation-delay: ${({index:t})=>t*.05}s;
  opacity: 0;
  transform: translateX(-10px);

  @keyframes rowAppear {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:last-child {
    border-bottom: none;
  }
`,uA=P.div`
  width: 40px;
  font-weight: bold;
  color: ${({theme:t})=>t==="dark"?"#aaa":"#666"};
`,dA=P.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hA=P.div`
  background: ${({theme:t})=>t==="dark"?"#4a4a4a":"#e8f0fe"};
  color: ${({theme:t})=>t==="dark"?"#fff":"#1976d2"};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:t})=>t==="dark"?"#5a5a5a":"#d0e0ff"};
    transform: scale(1.05);
  }
`,Kg=P.div`
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 18px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`,fA=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px 15px;
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 12px;
  font-size: 14px;
  color: ${({theme:t})=>t==="dark"?"#fff":"#333"};
  animation: statsAppear 0.3s ease;

  @keyframes statsAppear {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Yg=P.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #4a90e2;
    font-size: 18px;
  }
`,pA=({schedule:t,dateSchedule:e,theme:n="light"})=>{const[r,i]=I.useState(""),[s,o]=I.useState(0),[a,l]=I.useState(!1);if(console.log("AllGroupsSchedule рендер, theme:",n),!t||!Array.isArray(t)||t.length===0)return p.jsxs(Vg,{children:[p.jsx(Gg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:u=>i(u.target.value)}),p.jsx(Kg,{children:"Нет данных о расписании"})]});const c=t.filter(u=>{if(!u)return!1;const d=u.groupName||"",h=r.toLowerCase(),g=d.toLowerCase().includes(h),w=(u.lessons||[]).some(C=>C?(C.lessonName||"").toLowerCase().includes(h):!1);return g||w});return I.useEffect(()=>{l(!0),o(c.length);const u=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(u)},[c.length]),p.jsxs(Vg,{children:[p.jsx(Gg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:u=>i(u.target.value)}),p.jsxs(fA,{theme:n,children:[p.jsxs(Yg,{children:["📊 Найдено групп: ",p.jsx("span",{children:c.length})]}),r&&p.jsxs(Yg,{children:['🔍 Поиск: "',r,'"']})]}),p.jsx(sA,{className:a?"searching":"",children:c.map((u,d)=>{const h=u.groupName||`Группа ${d+1}`,g=u.lessons||[],y=iA(h);console.log(`Группа ${h}: отделение =`,y);const w=y?nA[y]:null,C=y?rA[y]:null;return console.log(`Цвета для ${h}:`,{departmentColor:w,darkDepartmentColor:C}),p.jsxs(oA,{theme:n,style:{animationDelay:`${d*.1}s`},children:[p.jsx(aA,{theme:n,$departmentColor:w,$darkDepartmentColor:C,children:h}),p.jsx(lA,{children:g.map((m,f)=>{const _=(m==null?void 0:m.lessonNumber)||f+1,v=(m==null?void 0:m.lessonName)||"Название не указано",x=(m==null?void 0:m.cabinet)||"---";return p.jsxs(cA,{theme:n,index:f,children:[p.jsx(uA,{theme:n,children:_}),p.jsxs(dA,{theme:n,children:[v,(m==null?void 0:m.isLab)&&" 🔬"]}),p.jsx(hA,{theme:n,children:x})]},f)})})]},h+d)})}),c.length===0&&p.jsxs(Kg,{children:['😕 Ничего не найдено по запросу "',r,'"']})]})},mA=()=>{var f,_;const[t,e]=I.useState(!1),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,c]=I.useState(!1),[u,d]=I.useState(null),g=D0().currentUser,y=K1();I.useEffect(()=>{g&&w()},[g]);const w=async()=>{if(g)try{const v=le(y,`users/${g.uid}/telegram`),x=await tr(v);x.exists()&&(c(!0),d(x.val()))}catch(v){console.error("Ошибка при проверке статуса:",v)}},C=async v=>{if(v.preventDefault(),!g){s("Необходимо войти в систему");return}const x=n.toUpperCase().trim();if(!x||x.length!==6){s("Введите корректный 6-значный код");return}e(!0),s(""),a("");try{const k=le(y,"tempLinks"),E=await tr(k);if(!E.exists()){s("Код не найден"),e(!1);return}const b=E.val();let j=null,L=null;for(const[at,Ze]of Object.entries(b))if(Ze.code===x&&!Ze.used&&Ze.expiresAt>Date.now()){j=at,L=Ze;break}if(!j){s("Код не найден или истек"),e(!1);return}const ye=le(y,`telegramLinks/${j}`);if((await tr(ye)).exists()){s("Этот Telegram уже привязан к другому аккаунту"),e(!1);return}const mt=le(y,`users/${g.uid}/telegram`);if((await tr(mt)).exists()){s("К этому аккаунту уже привязан Telegram"),e(!1);return}await za(le(y,`tempLinks/${j}`),{used:!0});const Ot={};Ot[`telegramLinks/${j}`]={firebaseUid:g.uid,linkedAt:Date.now(),telegramInfo:L.telegramInfo},Ot[`users/${g.uid}/telegram`]={telegramId:Number(j),linkedAt:Date.now(),telegramInfo:L.telegramInfo},await za(le(y),Ot),setTimeout(async()=>{try{await vP(le(y,`tempLinks/${j}`))}catch(at){console.error("Ошибка при удалении временного кода:",at)}},5*60*1e3),a("Telegram успешно привязан!"),r(""),w()}catch(k){console.error("Ошибка при привязке:",k),s("Ошибка при привязке Telegram")}finally{e(!1)}},m=async()=>{if(!(!g||!u)&&window.confirm("Вы уверены, что хотите отвязать Telegram?")){e(!0),s(""),a("");try{const v={};v[`users/${g.uid}/telegram`]=null,v[`telegramLinks/${u.telegramId}`]=null,await za(le(y),v),c(!1),d(null),a("Telegram успешно отвязан")}catch(v){console.error("Ошибка при отвязке:",v),s("Ошибка при отвязке Telegram")}finally{e(!1)}}};return g?p.jsxs("div",{className:"telegram-link-container",children:[p.jsx("h3",{children:"📱 Привязка Telegram"}),i&&p.jsxs("div",{className:"alert alert-error",children:["❌ ",i]}),o&&p.jsxs("div",{className:"alert alert-success",children:["✅ ",o]}),l?p.jsxs("div",{className:"telegram-linked",children:[p.jsxs("div",{className:"telegram-info",children:[p.jsx("div",{className:"info-icon",children:"✅"}),p.jsxs("div",{className:"info-text",children:[p.jsx("strong",{children:"Telegram привязан"}),((f=u==null?void 0:u.telegramInfo)==null?void 0:f.username)&&p.jsxs("div",{children:["@",u.telegramInfo.username]}),((_=u==null?void 0:u.telegramInfo)==null?void 0:_.first_name)&&p.jsxs("div",{children:[u.telegramInfo.first_name," ",u.telegramInfo.last_name]}),p.jsxs("div",{className:"linked-date",children:["Привязан: ",new Date(u.linkedAt).toLocaleString()]})]})]}),p.jsx("button",{onClick:m,disabled:t,className:"btn btn-danger",children:t?"Отвязка...":"Отвязать Telegram"})]}):p.jsxs("div",{className:"telegram-unlinked",children:[p.jsxs("div",{className:"instruction-box",children:[p.jsx("h4",{children:"Как привязать Telegram:"}),p.jsxs("ol",{children:[p.jsxs("li",{children:["Откройте Telegram бота ",p.jsx("strong",{children:"@vgtk_schedule_bot"})]}),p.jsxs("li",{children:["Нажмите кнопку ",p.jsx("strong",{children:'"🔗 Привязать аккаунт"'})," или отправьте команду ",p.jsx("strong",{children:"/link"})]}),p.jsx("li",{children:"Бот пришлет вам 6-значный код"}),p.jsx("li",{children:"Введите этот код в поле ниже"})]})]}),p.jsxs("form",{onSubmit:C,className:"code-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"telegram-code",children:"Код из Telegram:"}),p.jsx("input",{type:"text",id:"telegram-code",value:n,onChange:v=>r(v.target.value.toUpperCase()),placeholder:"Например: A1B2C3",maxLength:"6",className:"code-input",disabled:t,autoComplete:"off",autoFocus:!0})]}),p.jsx("button",{type:"submit",disabled:t||n.length!==6,className:"btn btn-primary",children:t?"Проверка...":"Привязать Telegram"})]}),p.jsx("div",{className:"note",children:p.jsx("small",{children:"⏰ Код действителен 15 минут"})})]}),p.jsx("style",{jsx:!0,children:`
        .telegram-link-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h3 {
          margin: 0 0 20px 0;
          color: #333;
          font-size: 1.5rem;
        }

        .alert {
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .alert-error {
          background: #fee;
          color: #c00;
          border: 1px solid #fcc;
        }

        .alert-success {
          background: #efe;
          color: #0a0;
          border: 1px solid #cfc;
        }

        .alert-warning {
          background: #fff3cd;
          color: #856404;
          border: 1px solid #ffeeba;
        }

        .instruction-box {
          background: #f0f7ff;
          padding: 20px;
          border-radius: 6px;
          margin-bottom: 25px;
          border-left: 4px solid #2196f3;
        }

        .instruction-box h4 {
          margin: 0 0 15px 0;
          color: #1976d2;
        }

        .instruction-box ol {
          margin: 0;
          padding-left: 20px;
        }

        .instruction-box li {
          margin-bottom: 10px;
          color: #333;
          line-height: 1.5;
        }

        .code-form {
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #555;
          font-weight: 500;
        }

        .code-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 20px;
          text-align: center;
          letter-spacing: 6px;
          font-family: monospace;
          border: 2px solid #ddd;
          border-radius: 6px;
          transition: border-color 0.3s;
        }

        .code-input:focus {
          outline: none;
          border-color: #2196f3;
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
        }

        .code-input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-weight: 500;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
        }

        .btn-danger {
          background: #f44336;
          color: white;
        }

        .btn-danger:hover:not(:disabled) {
          background: #d32f2f;
        }

        .note {
          text-align: center;
          color: #666;
        }

        .telegram-info {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f5f5f5;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-text {
          font-size: 14px;
        }

        .info-text strong {
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
        }

        .linked-date {
          margin-top: 5px;
          color: #666;
          font-size: 12px;
        }

        @media (max-width: 600px) {
          .telegram-link-container {
            padding: 15px;
            margin: 10px;
          }

          .code-input {
            font-size: 18px;
            letter-spacing: 4px;
          }
        }
      `})]}):p.jsx("div",{className:"telegram-link-container",children:p.jsx("div",{className:"alert alert-warning",children:"⚠️ Необходимо войти в систему для привязки Telegram"})})},gA=/^schedule_(\d{2}-\d{2}-\d{4})$/,Qg=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],Ul=t=>(t||"").toLowerCase().trim(),_A=(t,e)=>{const[n,r,i]=t.split("-").map(Number),[s,o,a]=e.split("-").map(Number);return new Date(i,r-1,n)-new Date(a,o-1,s)},yA=t=>{const e=new Map,n=r=>(e.has(r)||e.set(r,new Set([r])),e.get(r));for(const r of t||[]){const i=Ul(r.lessonName),s=(r.altNaming||[]).map(Ul),o=n(i);s.forEach(a=>o.add(a));for(const a of s){const l=n(a);for(const c of o)l.add(c);for(const c of l)o.add(c)}}return e},vA=(t,e)=>{const n=Ul(t),r=e.get(n);return r?Array.from(r):[n]},we={container:{padding:16,maxHeight:"80vh",overflow:"auto"},header:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12,alignItems:"center"},monthBtn:t=>({padding:"6px 12px",borderRadius:6,border:"1px solid #888",background:t?"#4a90e2":"transparent",color:t?"#fff":"inherit",cursor:"pointer",fontSize:13}),tableWrap:{overflowX:"auto",border:"1px solid #444",borderRadius:6},table:{borderCollapse:"collapse",width:"100%",fontSize:13},th:{border:"1px solid #555",padding:"6px 8px",background:"#2a2a2a",color:"#eee",position:"sticky",top:0,whiteSpace:"nowrap"},td:{border:"1px solid #444",padding:"4px 8px",textAlign:"center",whiteSpace:"nowrap"},tdName:{border:"1px solid #444",padding:"4px 8px",textAlign:"left",minWidth:280},tdTotal:{border:"1px solid #444",padding:"4px 8px",textAlign:"center",fontWeight:"bold",background:"#3a3a3a",color:"#fff"},empty:{color:"#888"},info:{fontSize:12,opacity:.8,margin:"8px 0"},loading:{padding:30,textAlign:"center"}},wA=({userTarification:t,commonAltNamings:e})=>{const[n,r]=I.useState({}),[i,s]=I.useState(!0),[o,a]=I.useState(null),l=I.useMemo(()=>yA(e),[e]),c=I.useMemo(()=>[...new Set((t||[]).map(C=>C.groupName))],[t]);I.useEffect(()=>{if(c.length===0){r({}),s(!1);return}s(!0);const C=[];let m=c.length;return c.forEach(f=>{const _=le(Pe,`groups/${f}`),v=Ba(_,x=>{r(k=>({...k,[f]:x.val()||{}})),m>0&&(m-=1,m===0&&s(!1))},x=>{console.error("Ошибка подписки на группу",f,x),m>0&&(m-=1,m===0&&s(!1))});C.push(v)}),()=>C.forEach(f=>f&&f())},[c.join("|")]);const u=I.useMemo(()=>{const C=new Set;for(const m of c){const f=n[m]||{};Object.keys(f).forEach(_=>{const v=_.match(gA);v&&C.add(v[1])})}return Array.from(C).sort(_A)},[n,c]),d=I.useMemo(()=>{const C=new Set;for(const m of u){const f=parseInt(m.split("-")[1],10);Number.isNaN(f)||C.add(f)}return Array.from(C).sort((m,f)=>m-f)},[u]),h=I.useMemo(()=>o?u.filter(C=>parseInt(C.split("-")[1],10)===o):u,[u,o]),g=I.useMemo(()=>{const C=[];for(const m of t||[]){if(!m.lecture&&!m.labs)continue;const f=vA(m.lesson,l),_=n[m.groupName]||{},v={};let x=0;for(const k of h){const E=_[`schedule_${k}`]||[];let b=0;for(const j of E){const L=Ul(j==null?void 0:j.lessonName);if(!f.includes(L))continue;const ye=!!j.isLab;(m.labs&&ye||m.lecture&&!ye)&&(b+=1)}v[k]=b,x+=b}if(x>0){const k=m.labs&&m.lecture?"":m.labs?" — Лаб":" — Лек";C.push({id:m.id,displayName:`${m.lesson} (${m.groupName})${k}`,cells:v,total:x})}}return C.sort((m,f)=>m.displayName.localeCompare(f.displayName)),C},[t,h,n,l]),y=I.useMemo(()=>{const C={};let m=0;for(const f of h){let _=0;for(const v of g)_+=v.cells[f]||0;C[f]=_,m+=_}return{perDay:C,grand:m}},[g,h]),w=()=>{const C=";",m=j=>{const L=String(j??"");return/[;"\n]/.test(L)?`"${L.replace(/"/g,'""')}"`:L},f=[];f.push(["Дисциплина",...h,"Итого"].map(m).join(C));for(const j of g){const L=[j.displayName,...h.map(ye=>j.cells[ye]||""),j.total];f.push(L.map(m).join(C))}const _=["Всего часов по дням:",...h.map(j=>y.perDay[j]||""),y.grand];f.push(_.map(m).join(C));const v="\uFEFF"+f.join(`
`),x=new Blob([v],{type:"text/csv;charset=utf-8"}),k=URL.createObjectURL(x),E=document.createElement("a");E.href=k;const b=new Date().toISOString().slice(0,10);E.download=o?`auto_hours_${Qg[o-1]}_${b}.csv`:`auto_hours_full_${b}.csv`,E.click(),URL.revokeObjectURL(k)};return i?p.jsx("div",{style:we.loading,children:"⏳ Загрузка истории расписаний..."}):c.length===0?p.jsx("div",{style:we.container,children:p.jsx("div",{style:we.empty,children:"Добавьте предметы в тарификацию."})}):u.length===0?p.jsx("div",{style:we.container,children:p.jsx("div",{style:we.empty,children:"Пока нет накопленной истории расписаний. Сервер начинает копить дни автоматически."})}):p.jsxs("div",{style:we.container,children:[p.jsx("h3",{style:{marginTop:0},children:"📊 Автоматический учёт часов"}),p.jsx("div",{style:we.info,children:"Часы рассчитываются автоматически по сохранённой истории расписания. Учитываются альтернативные названия и тип занятий (лек/лаб)."}),p.jsxs("div",{style:we.header,children:[p.jsxs("button",{style:we.monthBtn(o===null),onClick:()=>a(null),children:["Все (",u.length," дн.)"]}),d.map(C=>p.jsx("button",{style:we.monthBtn(o===C),onClick:()=>a(C),children:Qg[C-1]},C)),p.jsx("span",{style:{flex:1}}),p.jsx("button",{style:we.monthBtn(!1),onClick:w,children:"⬇ CSV"})]}),g.length===0?p.jsx("div",{style:we.empty,children:"За выбранный период занятий не найдено."}):p.jsx("div",{style:we.tableWrap,children:p.jsxs("table",{style:we.table,children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{style:we.th,children:"Дисциплина"}),h.map(C=>p.jsx("th",{style:we.th,children:C},C)),p.jsx("th",{style:we.th,children:"Итого"})]})}),p.jsxs("tbody",{children:[g.map(C=>p.jsxs("tr",{children:[p.jsx("td",{style:we.tdName,children:C.displayName}),h.map(m=>p.jsx("td",{style:we.td,children:C.cells[m]>0?C.cells[m]:""},m)),p.jsx("td",{style:we.tdTotal,children:C.total})]},C.id)),p.jsxs("tr",{children:[p.jsx("td",{style:{...we.tdName,fontWeight:"bold",background:"#3a3a3a",color:"#fff"},children:"Всего часов по дням:"}),h.map(C=>p.jsx("td",{style:we.tdTotal,children:y.perDay[C]||""},C)),p.jsx("td",{style:we.tdTotal,children:y.grand})]})]})]})}),p.jsxs("div",{style:we.info,children:["📚 Дисциплин: ",g.length,"  •  📅 Дней: ",h.length," "," •  📖 Всего: ",p.jsx("strong",{children:y.grand})," ч."]})]})},SA=new kn,Ns="commonAltNamings",ke=t=>(t||"").toLowerCase().trim(),bs=t=>{const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0");return`${e}-${n}-${t.getFullYear()}`},Iu=t=>{const e=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],n=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];return`${t.getDate()} ${e[t.getMonth()]} ${t.getFullYear()} года (${n[t.getDay()].toUpperCase()})`},CA=(t,e)=>{const n=new Date(t,e+1,0).getDate(),r=new Date(t,e,1).getDay(),i=[],s=r===0?6:r-1;for(let o=0;o<s;o++)i.push(null);for(let o=1;o<=n;o++)i.push(new Date(t,e,o));return i},xA=["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],EA=async t=>{try{const e=await tr(le(Pe,`schedules_by_date/${t}`));return e.exists()?e.val():null}catch(e){return console.error("Ошибка getScheduleByDate:",e),null}};function kA(){var Zf;const[t,e]=I.useState(!1),[n,r]=I.useState(!1),[i,s]=I.useState(!1),[o,a]=I.useState(!1),[l,c]=I.useState(!1),[u,d]=I.useState(!1),[h,g]=I.useState(!1),[y,w]=I.useState(!1),[C,m]=I.useState(!1),[f,_]=I.useState("my"),[v,x]=I.useState([]),[k,E]=I.useState("Пожалуйста подождите"),[b,j]=I.useState(null),[L,ye]=I.useState([]),[ot,mt]=I.useState(new Date),[yn,Ot]=I.useState(!1),[at,Ze]=I.useState(""),[A,F]=I.useState(""),[W,ie]=I.useState(!1),[se,R]=I.useState(!1),[$,V]=I.useState(""),[G,Z]=I.useState(""),[K,ve]=I.useState(()=>JSON.parse(localStorage.getItem("userTarification"))||[]),[z,te]=I.useState([]),[ee,vn]=I.useState(()=>localStorage.getItem("userCabinet")||null),[wn,Sn]=I.useState(0),[Et,Lt]=I.useState(0),[ni,kc]=I.useState(""),[je,ri]=I.useState(""),[kt,ii]=I.useState(""),[$e]=mN(ge),{theme:Ve,setTheme:ms}=SE(),Ge=I.useCallback(async(S,D=!1)=>{Ot(!0);try{const M=bs(S),U=await EA(M);U&&U.schedule?(x(U.schedule),E(U.date||Iu(S)),j(M),mt(S),D&&localStorage.setItem("lastSelectedDate",M)):(x([]),E(`Нет расписания на ${Iu(S)}`),j(null))}catch(M){console.error("Ошибка загрузки расписания:",M),x([]),E("Ошибка загрузки расписания")}finally{Ot(!1)}},[]);I.useEffect(()=>{const S=le(Pe,"schedules_by_date"),D=Ba(S,M=>{const U=M.exists()?Object.keys(M.val()).sort():[];ye(U),j(be=>{if(be)return be;const Mt=localStorage.getItem("lastSelectedDate");let It=null;if(Mt&&U.includes(Mt)?It=Mt:U.length>0&&(It=U[0]),It){const[et,Go,Ko]=It.split("-");Ge(new Date(Ko,Go-1,et),!!Mt)}else E("Нет доступного расписания");return be})});return()=>D()},[Ge]),I.useEffect(()=>{if(!b)return;const S=Ba(le(Pe,`schedules_by_date/${b}`),D=>{D.exists()&&D.val().schedule&&x(D.val().schedule)});return()=>S()},[b]);const Er=I.useCallback(S=>{if(L.length===0){alert("Нет доступных дат с расписанием");return}const D=b?(()=>{const[M,U,be]=b.split("-");return new Date(be,U-1,M)})():new Date;for(let M=1;M<=30;M++){const U=new Date(D);U.setDate(D.getDate()+S*M);const be=bs(U);if(L.includes(be)){Ge(U,!0);return}}alert(`Нет расписания ${S===1?"вперёд":"назад"} в ближайшие 30 дней`)},[L,b,Ge]),Y1=I.useCallback(S=>{const D=bs(S);L.includes(D)?(Ge(S,!0),d(!1)):alert(`Расписание на ${Iu(S)} не опубликовано`)},[L,Ge]),Kf=I.useCallback(S=>{mt(D=>{const M=new Date(D);return M.setMonth(D.getMonth()+S),M})},[]),Q1=I.useMemo(()=>CA(ot.getFullYear(),ot.getMonth()),[ot]),Ic=I.useCallback(async S=>{if(!$e)localStorage.setItem(Ns,JSON.stringify(S));else try{await hn(le(Pe,Ns),S)}catch(D){console.error("Ошибка сохранения altNamings:",D)}te(S)},[$e]);I.useEffect(()=>{(async()=>{if($e)try{const D=await tr(le(Pe,Ns));if(D.exists())te(D.val());else{const M=JSON.parse(localStorage.getItem(Ns))||[];M.length>0?await Ic(M):te([])}}catch(D){console.error("Ошибка загрузки altNamings:",D)}else te(JSON.parse(localStorage.getItem(Ns))||[])})()},[$e,Ic]);const Tc=I.useCallback(S=>{const D=ke(S);return z.filter(M=>ke(M.lessonName)===D).flatMap(M=>M.altNaming)},[z]),Yf=I.useCallback(S=>{var D;$e?hn(le(Pe,`users/${(D=ge==null?void 0:ge.currentUser)==null?void 0:D.uid}/tarification`),S):localStorage.setItem("userTarification",JSON.stringify(S))},[$e]),q1=I.useCallback(S=>{var D;$e?za(le(Pe,`users/${(D=ge==null?void 0:ge.currentUser)==null?void 0:D.uid}/userInfo`),{cabinet:S}):localStorage.setItem("userCabinet",S)},[$e]);I.useEffect(()=>{var D;if(!$e){ve(JSON.parse(localStorage.getItem("userTarification"))||[]);return}const S=(D=ge.currentUser)==null?void 0:D.uid;S&&(tr(le(Pe,`users/${S}/tarification`)).then(M=>{if(M.exists())ve(M.val());else{const U=JSON.parse(localStorage.getItem("userTarification")||"[]");U.length&&hn(le(Pe,`users/${S}/tarification`),U)}}).catch(console.error),tr(le(Pe,`users/${S}/userInfo`)).then(M=>{M.exists()?vn(M.val().cabinet):localStorage.getItem("userCabinet")&&hn(le(Pe,`users/${S}/userInfo`),{cabinet:localStorage.getItem("userCabinet")})}).catch(console.error))},[$e]),I.useEffect(()=>{var M;const S=(M=ge==null?void 0:ge.currentUser)==null?void 0:M.uid;if(!S)return;const D=Ba(le(Pe,`users/${S}/hours`),U=>{Sn(U.exists()?U.val():null)});return()=>D()},[$e]);const Nc=I.useMemo(()=>{if(!v||v.length===0)return[];const S=[];let D=0;const M=new Map(v.map(U=>[ke(U.groupName||""),U]));return K.forEach(U=>{const be=M.get(ke(U.groupName));if(!be)return;const Mt=Tc(U.lesson),It=ke(U.lesson);be.lessons.forEach(et=>{const Go=ke(et==null?void 0:et.lessonName),Ko=!!et.isLab,lw=Go===It||Mt.some(uw=>ke(uw)===Go),cw=U.labs&&Ko||!Ko&&U.lecture;lw&&cw&&S.push({...et,lessonName:U.lesson,id:`${++D}`})})}),S.sort((U,be)=>{const Mt=parseFloat(U==null?void 0:U.lessonNumber)||0,It=parseFloat(be==null?void 0:be.lessonNumber)||0;return Mt!==It?Mt-It:((U==null?void 0:U.id)||"").localeCompare((be==null?void 0:be.id)||"")}),S},[v,K,Tc]),X1=I.useMemo(()=>{if(!ee||v.length===0)return[];const S=[];return v.forEach(D=>{D.lessons.forEach(M=>{M.cabinet&&M.cabinet.includes(ee)&&S.push({...M,groupName:D.groupName})})}),S.sort((D,M)=>(parseFloat(D==null?void 0:D.lessonNumber)||0)-(parseFloat(M==null?void 0:M.lessonNumber)||0)),S},[v,ee]),J1=I.useCallback(S=>{kc(S),e(!0)},[]),Z1=I.useCallback(()=>c(!0),[]),ew=I.useCallback(S=>{ri(K.find(D=>D.id===S)),r(!0)},[K]),tw=I.useCallback(()=>{ms(Ve==="light"?"dark":"light")},[Ve,ms]),Qf=I.useCallback(S=>K.some(D=>ke(D.groupName)===ke(S.groupName)&&ke(D.lesson)===ke(S.lessonName)),[K]),qf=async(S,D)=>{const M=S.lesson,U=ke(M),be=ke(D),Mt=z.find(et=>ke(et.lessonName)===U);let It;if(Mt){if(Mt.altNaming.some(et=>ke(et)===be)){alert("Название уже существует");return}It=z.map(et=>ke(et.lessonName)===U?{...et,altNaming:[...et.altNaming,D]}:et)}else It=[...z,{lessonName:M,altNaming:[D]}];await Ic(It)},nw=()=>{if(K.some(U=>ke(U.groupName)===ke(A)&&ke(U.lesson)===ke(at))){console.log("Дубликат");return}const D={id:IE(),groupName:A,lesson:at,lecture:W,labs:se},M=[...K,D];ve(M),Yf(M)},rw=S=>{if(Qf(S)){alert('Группа с таким занятием уже существует. Удалите её в "Редактировать" и внесите вручную.');return}ii(S.lessonName),g(!0)},iw=()=>{const S=b||uv(k),D=()=>{var M;Lt(1),hn(le(Pe,`users/${(M=ge==null?void 0:ge.currentUser)==null?void 0:M.uid}/hours/${S}`),Nc).then(()=>{alert("Сохранено"),Lt(1),setTimeout(()=>Lt(0),5e3)}).catch(U=>{console.log(U),Lt(2),setTimeout(()=>Lt(0),5e3)})};Nc.length<9?confirm("Вы пытаетесь добавить меньше 9 занятий, продолжить?")&&D():D()},sw=()=>vT(ge,SA).catch(S=>console.log("error",S.code,S.message)),ow=()=>ZI(ge).catch(console.log),Xf=S=>{const D=K.filter(M=>M.id!==S);ve(D),Yf(D)},aw=()=>{vn($),q1($),V("")},Jf=(S,D)=>{S.preventDefault(),D()};return p.jsxs(Hx,{children:[p.jsxs(Gx,{children:[p.jsx("a",{href:"https://www.vgtk.by",children:p.jsx(ou,{src:gE,alt:""})}),$e?p.jsx(ou,{src:$e.photoURL}):p.jsx(ou,{src:_E}),p.jsxs(eE,{children:[p.jsx(pa,{onClick:()=>Er(-1),theme:Ve,children:"◀"}),p.jsx(Yx,{onClick:()=>d(!0),style:{cursor:"pointer",userSelect:"none"},children:yn?"Загрузка...":k}),p.jsx(pa,{onClick:()=>Er(1),theme:Ve,children:"▶"})]}),$e?p.jsxs(p.Fragment,{children:[p.jsx(rt,{onClick:ow,children:"Выйти"}),p.jsx(rt,{onClick:Z1,children:"Настройки профиля"})]}):p.jsx(rt,{onClick:sw,children:"Войти"}),p.jsx(qh,{handleChangeTheme:tw,theme:Ve})]}),p.jsx(cn,{active:u,setActive:d,children:p.jsxs(tE,{theme:Ve,children:[p.jsxs(nE,{theme:Ve,children:[p.jsx(pa,{onClick:()=>Kf(-1),theme:Ve,children:"◀"}),p.jsx("h3",{children:ot.toLocaleString("ru",{month:"long",year:"numeric"})}),p.jsx(pa,{onClick:()=>Kf(1),theme:Ve,children:"▶"})]}),p.jsxs(rE,{children:[xA.map(S=>p.jsx(iE,{theme:Ve,children:S},S)),Q1.map((S,D)=>{if(!S)return p.jsx(sE,{},`empty-${D}`);const M=bs(S),U=L.includes(M),be=bs(new Date)===M;return p.jsxs(oE,{isAvailable:U,isToday:be,onClick:()=>U&&Y1(S),theme:Ve,disabled:!U,children:[S.getDate(),U&&p.jsx(aE,{theme:Ve})]},M)})]}),p.jsx("div",{style:{marginTop:15,fontSize:12,opacity:.7},children:"💡 Доступные даты отмечены точкой"})]})}),p.jsxs(Bx,{children:[p.jsxs(km,{onSubmit:S=>Jf(S,nw),action:"",children:[p.jsx(bm,{handleInputChange:S=>Ze(S.target.value),inputValue:at,placeholder:"Название предмета"}),p.jsx(cE,{handleSelectChange:S=>F(S.target.value)}),p.jsxs(Vx,{children:[p.jsx(Rm,{label:"Лабораторные",handleCheckBoxChange:()=>R(S=>!S)}),p.jsx(Rm,{label:"Лекции",handleCheckBoxChange:()=>ie(S=>!S)})]}),p.jsx(rt,{type:"submit",children:"Добавить"}),p.jsx(rt,{onClick:()=>w(S=>!S),type:"button",children:"Редактировать"})]}),y&&p.jsxs(p.Fragment,{children:["Ваша тарификация:",K.map(S=>p.jsxs(Em,{children:[p.jsx(ai,{children:S.lesson}),p.jsx(su,{children:S.groupName}),p.jsxs("p",{children:["Лаб. ",S.labs?"Есть":"Нет"]}),p.jsxs("p",{children:["Лекции ",S.lecture?"Есть":"Нет"]}),p.jsx(rt,{onClick:()=>ew(S.id),children:"Добавить названия"}),p.jsx(Kx,{onClick:()=>Xf(S.id),children:"Удалить"})]},S.id))]})]}),p.jsxs("div",{children:[p.jsxs(Tm,{children:[p.jsxs(Zx,{children:[p.jsx(Nm,{active:f==="my",onClick:()=>_("my"),theme:Ve,children:"📋 Моё расписание"}),p.jsx(Nm,{active:f==="all",onClick:()=>_("all"),theme:Ve,children:"🏫 Все группы"})]}),f==="my"&&p.jsxs(p.Fragment,{children:[p.jsxs(qx,{children:[p.jsx(Qx,{onChange:S=>V(S.target.value),value:$,type:"text",placeholder:`Ваш кабинет: ${ee||"не указан"}`}),p.jsx(Xx,{onClick:aw,children:"+"})]}),p.jsx(NE,{displayName:"Ваш кабинет",displayNameAlt:"Ваше расписание",handleClick:()=>m(S=>!S)})]})]}),f==="my"?p.jsxs(p.Fragment,{children:[p.jsx(Jx,{children:(C?X1:Nc).map((S,D)=>p.jsxs(Im,{children:[p.jsx(fa,{children:S.lessonNumber}),p.jsx(ai,{children:Am[S.lessonNumber]}),p.jsx(ai,{children:S.lessonName}),p.jsx(su,{onClick:()=>J1(S.groupName),children:S.groupName}),p.jsx(fa,{children:S.cabinet})]},C?`${S.lessonName}${S.lessonNumber}${D}`:S.id))}),p.jsx(Tm,{children:$e&&p.jsxs(p.Fragment,{children:[p.jsx(rt,{handleState:Et,onClick:iw,children:"Добавить в учет часов"}),p.jsx(rt,{onClick:()=>s(!0),children:"Открыть учет часов"}),p.jsx(rt,{onClick:()=>a(!0),children:"Открыть АВТОМАТИЧЕСКИЙ учет часов"})]})})]}):p.jsx(pA,{schedule:v,dateSchedule:k,theme:Ve})]}),p.jsxs(cn,{active:t,setActive:e,children:[p.jsxs("div",{children:["Расписание группы ",ni]}),p.jsx("div",{children:(Zf=v.find(S=>ke(S.groupName)===ke(ni)))==null?void 0:Zf.lessons.map(S=>p.jsxs(Im,{children:[p.jsx(fa,{children:S.lessonNumber}),p.jsx(ai,{children:Am[S.lessonNumber]}),p.jsx(ai,{children:S.lessonName}),p.jsx(fa,{children:S.cabinet}),!Qf(S)&&S.cabinet&&p.jsx(rt,{onClick:()=>rw(S),children:"Добавить"})||p.jsx(rt,{onClick:()=>Xf(S.id),children:"Удалить"})]},S.lessonNumber))})]}),p.jsx(cn,{active:l,setActive:c,children:p.jsx(mA,{})}),p.jsxs(cn,{active:n,setActive:r,children:[p.jsxs("div",{children:["Введите альтернативные названия для предмета ",p.jsx("br",{}),je==null?void 0:je.lesson]}),p.jsxs(km,{onSubmit:S=>Jf(S,()=>{qf(je,G),Z("")}),action:"",children:[p.jsx(bm,{handleInputChange:S=>Z(S.target.value),inputValue:G,placeholder:"Альтернативное название"}),p.jsx(rt,{type:"submit",children:"Добавить"})]}),p.jsx("div",{children:"Альтернативные названия:"}),je&&Tc(je.lesson).map(S=>p.jsx("p",{children:S},S))]}),p.jsx(cn,{active:i,setActive:s,children:p.jsx(tA,{rawData:wn,onRawDataChange:S=>Sn(S),userTarification:K})}),p.jsx(cn,{active:o,setActive:a,children:p.jsx(wA,{userTarification:K,commonAltNamings:z})}),p.jsx(cn,{active:h,setActive:g,children:K.map(S=>S.groupName===ni&&p.jsxs(Em,{children:[p.jsx(ai,{children:S.lesson}),p.jsx(su,{children:S.groupName}),p.jsx(rt,{onClick:()=>{qf(S,kt),g(!1)},children:"Добавить названия"})]},S.id))})]})}cv(document.getElementById("root")).render(p.jsx(kA,{}));
