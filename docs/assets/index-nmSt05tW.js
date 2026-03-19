(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zg={exports:{}},Fl={},Bg={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),nw=Symbol.for("react.portal"),rw=Symbol.for("react.fragment"),iw=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),ow=Symbol.for("react.provider"),aw=Symbol.for("react.context"),lw=Symbol.for("react.forward_ref"),cw=Symbol.for("react.suspense"),uw=Symbol.for("react.memo"),dw=Symbol.for("react.lazy"),Yf=Symbol.iterator;function hw(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Vg={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Wg}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=Zi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Wg}var Wd=Bd.prototype=new Gg;Wd.constructor=Bd;Hg(Wd,Zi.prototype);Wd.isPureReactComponent=!0;var Qf=Array.isArray,Kg=Object.prototype.hasOwnProperty,Hd={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kg.call(e,r)&&!Yg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:Hd.current}}function fw(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function pw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qf=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pw(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case nw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cc(o,0):r,Qf(i)?(n="",t!=null&&(n=t.replace(qf,"$&/")+"/"),_a(i,e,n,"",function(c){return c})):i!=null&&(Vd(i)&&(i=fw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cc(s,a);o+=_a(s,e,n,l,i)}else if(l=hw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cc(s,a++),o+=_a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},ya={transition:null},gw={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Hd};function qg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Zi;q.Fragment=rw;q.Profiler=sw;q.PureComponent=Bd;q.StrictMode=iw;q.Suspense=cw;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;q.act=qg;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kg.call(e,l)&&!Yg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:aw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ow,_context:t},t.Consumer=t};q.createElement=Qg;q.createFactory=function(t){var e=Qg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:lw,render:t}};q.isValidElement=Vd;q.lazy=function(t){return{$$typeof:dw,_payload:{_status:-1,_result:t},_init:mw}};q.memo=function(t,e){return{$$typeof:uw,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};q.unstable_act=qg;q.useCallback=function(t,e){return ut.current.useCallback(t,e)};q.useContext=function(t){return ut.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};q.useEffect=function(t,e){return ut.current.useEffect(t,e)};q.useId=function(){return ut.current.useId()};q.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return ut.current.useMemo(t,e)};q.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};q.useRef=function(t){return ut.current.useRef(t)};q.useState=function(t){return ut.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return ut.current.useTransition()};q.version="18.3.1";Bg.exports=q;var R=Bg.exports;const Ai=zd(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w=R,yw=Symbol.for("react.element"),vw=Symbol.for("react.fragment"),ww=Object.prototype.hasOwnProperty,Sw=_w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cw={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ww.call(e,r)&&!Cw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yw,type:t,key:s,ref:o,props:i,_owner:Sw.current}}Fl.Fragment=vw;Fl.jsx=Xg;Fl.jsxs=Xg;zg.exports=Fl;var g=zg.exports,Jg={exports:{}},Nt={},Zg={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,M){var U=P.length;P.push(M);e:for(;0<U;){var re=U-1>>>1,Z=P[re];if(0<i(Z,M))P[re]=M,P[U]=Z,U=re;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],U=P.pop();if(U!==M){P[0]=U;e:for(var re=0,Z=P.length,N=Z>>>1;re<N;){var F=2*(re+1)-1,W=P[F],$=F+1,X=P[$];if(0>i(W,U))$<Z&&0>i(X,W)?(P[re]=X,P[$]=U,re=$):(P[re]=W,P[F]=U,re=F);else if($<Z&&0>i(X,U))P[re]=X,P[$]=U,re=$;else break e}}return M}function i(P,M){var U=P.sortIndex-M.sortIndex;return U!==0?U:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,m=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=P)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function w(P){if(v=!1,_(P),!y)if(n(l)!==null)y=!0,St(E);else{var M=n(c);M!==null&&De(w,M.startTime-P)}}function E(P,M){y=!1,v&&(v=!1,p(L),L=-1),m=!0;var U=h;try{for(_(M),u=n(l);u!==null&&(!(u.expirationTime>M)||P&&!Se());){var re=u.callback;if(typeof re=="function"){u.callback=null,h=u.priorityLevel;var Z=re(u.expirationTime<=M);M=t.unstable_now(),typeof Z=="function"?u.callback=Z:u===n(l)&&r(l),_(M)}else r(l);u=n(l)}if(u!==null)var N=!0;else{var F=n(c);F!==null&&De(w,F.startTime-M),N=!1}return N}finally{u=null,h=U,m=!1}}var x=!1,C=null,L=-1,H=5,O=-1;function Se(){return!(t.unstable_now()-O<H)}function ze(){if(C!==null){var P=t.unstable_now();O=P;var M=!0;try{M=C(!0,P)}finally{M?Xe():(x=!1,C=null)}}else x=!1}var Xe;if(typeof f=="function")Xe=function(){f(ze)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,Ut=dn.port2;dn.port1.onmessage=ze,Xe=function(){Ut.postMessage(null)}}else Xe=function(){k(ze,0)};function St(P){C=P,x||(x=!0,Xe())}function De(P,M){L=k(function(){P(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,St(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var U=h;h=M;try{return P()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=h;h=P;try{return M()}finally{h=U}},t.unstable_scheduleCallback=function(P,M,U){var re=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?re+U:re):U=re,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,P={id:d++,callback:M,priorityLevel:P,startTime:U,expirationTime:Z,sortIndex:-1},U>re?(P.sortIndex=U,e(c,P),n(l)===null&&P===n(c)&&(v?(p(L),L=-1):v=!0,De(w,U-re))):(P.sortIndex=Z,e(l,P),y||m||(y=!0,St(E))),P},t.unstable_shouldYield=Se,t.unstable_wrapCallback=function(P){var M=h;return function(){var U=h;h=M;try{return P.apply(this,arguments)}finally{h=U}}}})(e_);Zg.exports=e_;var Ew=Zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw=R,Tt=Ew;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,qs={};function Qr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(qs[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,Iw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},Jf={};function kw(t){return yu.call(Jf,t)?!0:yu.call(Xf,t)?!1:Iw.test(t)?Jf[t]=!0:(Xf[t]=!0,!1)}function Tw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nw(t,e,n,r){if(e===null||typeof e>"u"||Tw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nw(e,n,i,r)&&(n=null),r||i===null?kw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ec;function ks(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var xc=!1;function Ic(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function Rw(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case vu:return"Profiler";case Qd:return"StrictMode";case wu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function Pw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bw(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=bw(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function xu(t,e){a_(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ts(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function l_(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Aw=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){Aw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function d_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Lw=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(Lw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,Ci=null,Ei=null;function ip(t){if(t=Ro(t)){if(typeof bu!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Bl(e),bu(t.stateNode,t.type,e))}}function f_(t){Ci?Ei?Ei.push(t):Ei=[t]:Ci=t}function p_(){if(Ci){var t=Ci,e=Ei;if(Ei=Ci=null,ip(t),e)for(t=0;t<e.length;t++)ip(e[t])}}function m_(t,e){return t(e)}function g_(){}var kc=!1;function __(t,e,n){if(kc)return t(e,n);kc=!0;try{return m_(t,e,n)}finally{kc=!1,(Ci!==null||Ei!==null)&&(g_(),p_())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Au=!1;if(kn)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Au=!1}function Dw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var As=!1,za=null,Ba=!1,Lu=null,Ow={onError:function(t){As=!0,za=t}};function Mw(t,e,n,r,i,s,o,a,l){As=!1,za=null,Dw.apply(Ow,arguments)}function Fw(t,e,n,r,i,s,o,a,l){if(Mw.apply(this,arguments),As){if(As){var c=za;As=!1,za=null}else throw Error(I(198));Ba||(Ba=!0,Lu=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sp(t){if(qr(t)!==t)throw Error(I(188))}function jw(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sp(i),t;if(s===r)return sp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function v_(t){return t=jw(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var S_=Tt.unstable_scheduleCallback,op=Tt.unstable_cancelCallback,Uw=Tt.unstable_shouldYield,$w=Tt.unstable_requestPaint,Te=Tt.unstable_now,zw=Tt.unstable_getCurrentPriorityLevel,Zd=Tt.unstable_ImmediatePriority,C_=Tt.unstable_UserBlockingPriority,Wa=Tt.unstable_NormalPriority,Bw=Tt.unstable_LowPriority,E_=Tt.unstable_IdlePriority,jl=null,on=null;function Ww(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Gw,Hw=Math.log,Vw=Math.LN2;function Gw(t){return t>>>=0,t===0?32:31-(Hw(t)/Vw|0)|0}var Xo=64,Jo=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function Kw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Kw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x_(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function Qw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var k_,th,T_,N_,R_,Ou=!1,Zo=[],Zn=null,er=null,tr=null,Zs=new Map,eo=new Map,Wn=[],qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xw(t,e,n,r,i){switch(e){case"focusin":return Zn=ms(Zn,t,e,n,r,i),!0;case"dragenter":return er=ms(er,t,e,n,r,i),!0;case"mouseover":return tr=ms(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zs.set(s,ms(Zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,eo.set(s,ms(eo.get(s)||null,t,e,n,r,i)),!0}return!1}function P_(t){var e=Tr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,R_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pu=r,n.target.dispatchEvent(r),Pu=null}else return e=Ro(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function lp(t,e,n){va(t)&&n.delete(e)}function Jw(){Ou=!1,Zn!==null&&va(Zn)&&(Zn=null),er!==null&&va(er)&&(er=null),tr!==null&&va(tr)&&(tr=null),Zs.forEach(lp),eo.forEach(lp)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,Jw)))}function to(t){function e(i){return gs(i,t)}if(0<Zo.length){gs(Zo[0],t);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&gs(Zn,t),er!==null&&gs(er,t),tr!==null&&gs(tr,t),Zs.forEach(e),eo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&Wn.shift()}var xi=Ln.ReactCurrentBatchConfig,Va=!0;function Zw(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=1,nh(t,e,n,r)}finally{oe=i,xi.transition=s}}function eS(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=4,nh(t,e,n,r)}finally{oe=i,xi.transition=s}}function nh(t,e,n,r){if(Va){var i=Mu(t,e,n,r);if(i===null)Fc(t,e,r,Ga,n),ap(t,r);else if(Xw(i,t,e,n,r))r.stopPropagation();else if(ap(t,r),e&4&&-1<qw.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&k_(s),s=Mu(t,e,n,r),s===null&&Fc(t,e,r,Ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fc(t,e,r,null,n)}}var Ga=null;function Mu(t,e,n,r){if(Ga=null,t=Jd(r),t=Tr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zw()){case Zd:return 1;case C_:return 4;case Wa:case Bw:return 16;case E_:return 536870912;default:return 16}default:return 16}}var Qn=null,rh=null,wa=null;function A_(){if(wa)return wa;var t,e=rh,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wa=i.slice(t,1<r?1-r:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function cp(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:cp,this.isPropagationStopped=cp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=Rt(es),No=we({},es,{view:0,detail:0}),tS=Rt(No),Nc,Rc,_s,Ul=we({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Nc=t.screenX-_s.screenX,Rc=t.screenY-_s.screenY):Rc=Nc=0,_s=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),up=Rt(Ul),nS=we({},Ul,{dataTransfer:0}),rS=Rt(nS),iS=we({},No,{relatedTarget:0}),Pc=Rt(iS),sS=we({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Rt(sS),aS=we({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lS=Rt(aS),cS=we({},es,{data:0}),dp=Rt(cS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function sh(){return fS}var pS=we({},No,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mS=Rt(pS),gS=we({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Rt(gS),_S=we({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),yS=Rt(_S),vS=we({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=Rt(vS),SS=we({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Rt(SS),ES=[9,13,27,32],oh=kn&&"CompositionEvent"in window,Ls=null;kn&&"documentMode"in document&&(Ls=document.documentMode);var xS=kn&&"TextEvent"in window&&!Ls,L_=kn&&(!oh||Ls&&8<Ls&&11>=Ls),fp=" ",pp=!1;function D_(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function IS(t,e){switch(t){case"compositionend":return O_(e);case"keypress":return e.which!==32?null:(pp=!0,fp);case"textInput":return t=e.data,t===fp&&pp?null:t;default:return null}}function kS(t,e){if(li)return t==="compositionend"||!oh&&D_(t,e)?(t=A_(),wa=rh=Qn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L_&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function M_(t,e,n,r){f_(r),e=Ka(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,no=null;function NS(t){K_(t,0)}function $l(t){var e=di(t);if(o_(e))return t}function RS(t,e){if(t==="change")return e}var F_=!1;if(kn){var bc;if(kn){var Ac="oninput"in document;if(!Ac){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Ac=typeof gp.oninput=="function"}bc=Ac}else bc=!1;F_=bc&&(!document.documentMode||9<document.documentMode)}function _p(){Ds&&(Ds.detachEvent("onpropertychange",j_),no=Ds=null)}function j_(t){if(t.propertyName==="value"&&$l(no)){var e=[];M_(e,no,t,Jd(t)),__(NS,e)}}function PS(t,e,n){t==="focusin"?(_p(),Ds=e,no=n,Ds.attachEvent("onpropertychange",j_)):t==="focusout"&&_p()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(no)}function AS(t,e){if(t==="click")return $l(e)}function LS(t,e){if(t==="input"||t==="change")return $l(e)}function DS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:DS;function ro(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yu.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,e){var n=yp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OS(t){var e=$_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(r!==null&&ah(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vp(n,s);var o=vp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MS=kn&&"documentMode"in document&&11>=document.documentMode,ci=null,Fu=null,Os=null,ju=!1;function wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||ci==null||ci!==$a(r)||(r=ci,"selectionStart"in r&&ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&ro(Os,r)||(Os=r,r=Ka(Fu,"onSelect"),0<r.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Lc={},z_={};kn&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function zl(t){if(Lc[t])return Lc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return Lc[t]=e[n];return t}var B_=zl("animationend"),W_=zl("animationiteration"),H_=zl("animationstart"),V_=zl("transitionend"),G_=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){G_.set(t,e),Qr(e,[t])}for(var Dc=0;Dc<Sp.length;Dc++){var Oc=Sp[Dc],FS=Oc.toLowerCase(),jS=Oc[0].toUpperCase()+Oc.slice(1);_r(FS,"on"+jS)}_r(B_,"onAnimationEnd");_r(W_,"onAnimationIteration");_r(H_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(V_,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Cp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fw(r,e,void 0,t),t.currentTarget=null}function K_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cp(i,a,c),s=l}}}if(Ba)throw t=Lu,Ba=!1,Lu=null,t}function fe(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var r=t+"__bubble";n.has(r)||(Y_(e,t,2,!1),n.add(r))}function Mc(t,e,n){var r=0;e&&(r|=4),Y_(n,t,r,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[na]){t[na]=!0,t_.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,Mc("selectionchange",!1,e))}}function Y_(t,e,n,r){switch(b_(e)){case 1:var i=Zw;break;case 4:i=eS;break;default:i=nh}n=i.bind(null,e,n,t),i=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}__(function(){var c=s,d=Jd(n),u=[];e:{var h=G_.get(t);if(h!==void 0){var m=ih,y=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":m=mS;break;case"focusin":y="focus",m=Pc;break;case"focusout":y="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=yS;break;case B_:case W_:case H_:m=oS;break;case V_:m=wS;break;case"scroll":m=tS;break;case"wheel":m=CS;break;case"copy":case"cut":case"paste":m=lS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hp}var v=(e&4)!==0,k=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=c,_;f!==null;){_=f;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,p!==null&&(w=Js(f,p),w!=null&&v.push(so(f,w,_)))),k)break;f=f.return}0<v.length&&(h=new m(h,y,null,n,d),u.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Pu&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[Tn]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Tr(y):null,y!==null&&(k=qr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=up,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=hp,w="onPointerLeave",p="onPointerEnter",f="pointer"),k=m==null?h:di(m),_=y==null?h:di(y),h=new v(w,f+"leave",m,n,d),h.target=k,h.relatedTarget=_,w=null,Tr(d)===c&&(v=new v(p,f+"enter",y,n,d),v.target=_,v.relatedTarget=k,w=v),k=w,m&&y)t:{for(v=m,p=y,f=0,_=v;_;_=ti(_))f++;for(_=0,w=p;w;w=ti(w))_++;for(;0<f-_;)v=ti(v),f--;for(;0<_-f;)p=ti(p),_--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ti(v),p=ti(p)}v=null}else v=null;m!==null&&Ep(u,h,m,v,!1),y!==null&&k!==null&&Ep(u,k,y,v,!0)}}e:{if(h=c?di(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=RS;else if(mp(h))if(F_)E=LS;else{E=bS;var x=PS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=AS);if(E&&(E=E(t,c))){M_(u,E,n,d);break e}x&&x(t,h,c),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Iu(h,"number",h.value)}switch(x=c?di(c):window,t){case"focusin":(mp(x)||x.contentEditable==="true")&&(ci=x,Fu=c,Os=null);break;case"focusout":Os=Fu=ci=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,wp(u,n,d);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":wp(u,n,d)}var C;if(oh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else li?D_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(L_&&n.locale!=="ko"&&(li||L!=="onCompositionStart"?L==="onCompositionEnd"&&li&&(C=A_()):(Qn=d,rh="value"in Qn?Qn.value:Qn.textContent,li=!0)),x=Ka(c,L),0<x.length&&(L=new dp(L,t,null,n,d),u.push({event:L,listeners:x}),C?L.data=C:(C=O_(n),C!==null&&(L.data=C)))),(C=xS?IS(t,n):kS(t,n))&&(c=Ka(c,"onBeforeInput"),0<c.length&&(d=new dp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=C))}K_(u,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Js(t,n),s!=null&&r.unshift(so(t,s,i)),s=Js(t,e),s!=null&&r.push(so(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ep(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Js(n,s),l!=null&&o.unshift(so(n,l,a))):i||(l=Js(n,s),l!=null&&o.push(so(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $S=/\r\n?/g,zS=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(zS,"")}function ra(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(I(425))}function Ya(){}var Uu=null,$u=null;function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(HS)}:Bu;function HS(t){setTimeout(function(){throw t})}function jc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),to(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),rn="__reactFiber$"+ts,oo="__reactProps$"+ts,Tn="__reactContainer$"+ts,Wu="__reactEvents$"+ts,VS="__reactListeners$"+ts,GS="__reactHandles$"+ts;function Tr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[rn])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[rn]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Bl(t){return t[oo]||null}var Hu=[],hi=-1;function yr(t){return{current:t}}function ge(t){0>hi||(t.current=Hu[hi],Hu[hi]=null,hi--)}function he(t,e){hi++,Hu[hi]=t.current,t.current=e}var fr={},nt=yr(fr),_t=yr(!1),jr=fr;function Di(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Qa(){ge(_t),ge(nt)}function Tp(t,e,n){if(nt.current!==fr)throw Error(I(168));he(nt,e),he(_t,n)}function Q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Pw(t)||"Unknown",i));return we({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,jr=nt.current,he(nt,t),he(_t,_t.current),!0}function Np(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Q_(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,ge(_t),ge(nt),he(nt,t)):ge(_t),he(_t,n)}var _n=null,Wl=!1,Uc=!1;function q_(t){_n===null?_n=[t]:_n.push(t)}function KS(t){Wl=!0,q_(t)}function vr(){if(!Uc&&_n!==null){Uc=!0;var t=0,e=oe;try{var n=_n;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Wl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),S_(Zd,vr),i}finally{oe=e,Uc=!1}}return null}var fi=[],pi=0,Xa=null,Ja=0,Pt=[],bt=0,Ur=null,vn=1,wn="";function Cr(t,e){fi[pi++]=Ja,fi[pi++]=Xa,Xa=t,Ja=e}function X_(t,e,n){Pt[bt++]=vn,Pt[bt++]=wn,Pt[bt++]=Ur,Ur=t;var r=vn;t=wn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Yt(e)+i|n<<i|r,wn=s+t}else vn=1<<s|n<<i|r,wn=t}function lh(t){t.return!==null&&(Cr(t,1),X_(t,1,0))}function ch(t){for(;t===Xa;)Xa=fi[--pi],fi[pi]=null,Ja=fi[--pi],fi[pi]=null;for(;t===Ur;)Ur=Pt[--bt],Pt[bt]=null,wn=Pt[--bt],Pt[bt]=null,vn=Pt[--bt],Pt[bt]=null}var kt=null,It=null,_e=!1,Wt=null;function J_(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,It=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:vn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,It=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(_e){var e=It;if(e){var n=e;if(!Rp(t,e)){if(Vu(t))throw Error(I(418));e=nr(n.nextSibling);var r=kt;e&&Rp(t,e)?J_(r,n):(t.flags=t.flags&-4097|2,_e=!1,kt=t)}}else{if(Vu(t))throw Error(I(418));t.flags=t.flags&-4097|2,_e=!1,kt=t}}}function Pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function ia(t){if(t!==kt)return!1;if(!_e)return Pp(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zu(t.type,t.memoizedProps)),e&&(e=It)){if(Vu(t))throw Z_(),Error(I(418));for(;e;)J_(t,e),e=nr(e.nextSibling)}if(Pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=kt?nr(t.stateNode.nextSibling):null;return!0}function Z_(){for(var t=It;t;)t=nr(t.nextSibling)}function Oi(){It=kt=null,_e=!1}function uh(t){Wt===null?Wt=[t]:Wt.push(t)}var YS=Ln.ReactCurrentBatchConfig;function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bp(t){var e=t._init;return e(t._payload)}function ey(t){function e(p,f){if(t){var _=p.deletions;_===null?(p.deletions=[f],p.flags|=16):_.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=or(p,f),p.index=0,p.sibling=null,p}function s(p,f,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<f?(p.flags|=2,f):_):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,_,w){return f===null||f.tag!==6?(f=Gc(_,p.mode,w),f.return=p,f):(f=i(f,_),f.return=p,f)}function l(p,f,_,w){var E=_.type;return E===ai?d(p,f,_.props.children,w,_.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zn&&bp(E)===f.type)?(w=i(f,_.props),w.ref=ys(p,f,_),w.return=p,w):(w=Na(_.type,_.key,_.props,null,p.mode,w),w.ref=ys(p,f,_),w.return=p,w)}function c(p,f,_,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Kc(_,p.mode,w),f.return=p,f):(f=i(f,_.children||[]),f.return=p,f)}function d(p,f,_,w,E){return f===null||f.tag!==7?(f=Dr(_,p.mode,w,E),f.return=p,f):(f=i(f,_),f.return=p,f)}function u(p,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gc(""+f,p.mode,_),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yo:return _=Na(f.type,f.key,f.props,null,p.mode,_),_.ref=ys(p,null,f),_.return=p,_;case oi:return f=Kc(f,p.mode,_),f.return=p,f;case zn:var w=f._init;return u(p,w(f._payload),_)}if(Ts(f)||fs(f))return f=Dr(f,p.mode,_,null),f.return=p,f;sa(p,f)}return null}function h(p,f,_,w){var E=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(p,f,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===E?l(p,f,_,w):null;case oi:return _.key===E?c(p,f,_,w):null;case zn:return E=_._init,h(p,f,E(_._payload),w)}if(Ts(_)||fs(_))return E!==null?null:d(p,f,_,w,null);sa(p,_)}return null}function m(p,f,_,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(_)||null,a(f,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yo:return p=p.get(w.key===null?_:w.key)||null,l(f,p,w,E);case oi:return p=p.get(w.key===null?_:w.key)||null,c(f,p,w,E);case zn:var x=w._init;return m(p,f,_,x(w._payload),E)}if(Ts(w)||fs(w))return p=p.get(_)||null,d(f,p,w,E,null);sa(f,w)}return null}function y(p,f,_,w){for(var E=null,x=null,C=f,L=f=0,H=null;C!==null&&L<_.length;L++){C.index>L?(H=C,C=null):H=C.sibling;var O=h(p,C,_[L],w);if(O===null){C===null&&(C=H);break}t&&C&&O.alternate===null&&e(p,C),f=s(O,f,L),x===null?E=O:x.sibling=O,x=O,C=H}if(L===_.length)return n(p,C),_e&&Cr(p,L),E;if(C===null){for(;L<_.length;L++)C=u(p,_[L],w),C!==null&&(f=s(C,f,L),x===null?E=C:x.sibling=C,x=C);return _e&&Cr(p,L),E}for(C=r(p,C);L<_.length;L++)H=m(C,p,L,_[L],w),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?L:H.key),f=s(H,f,L),x===null?E=H:x.sibling=H,x=H);return t&&C.forEach(function(Se){return e(p,Se)}),_e&&Cr(p,L),E}function v(p,f,_,w){var E=fs(_);if(typeof E!="function")throw Error(I(150));if(_=E.call(_),_==null)throw Error(I(151));for(var x=E=null,C=f,L=f=0,H=null,O=_.next();C!==null&&!O.done;L++,O=_.next()){C.index>L?(H=C,C=null):H=C.sibling;var Se=h(p,C,O.value,w);if(Se===null){C===null&&(C=H);break}t&&C&&Se.alternate===null&&e(p,C),f=s(Se,f,L),x===null?E=Se:x.sibling=Se,x=Se,C=H}if(O.done)return n(p,C),_e&&Cr(p,L),E;if(C===null){for(;!O.done;L++,O=_.next())O=u(p,O.value,w),O!==null&&(f=s(O,f,L),x===null?E=O:x.sibling=O,x=O);return _e&&Cr(p,L),E}for(C=r(p,C);!O.done;L++,O=_.next())O=m(C,p,L,O.value,w),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?L:O.key),f=s(O,f,L),x===null?E=O:x.sibling=O,x=O);return t&&C.forEach(function(ze){return e(p,ze)}),_e&&Cr(p,L),E}function k(p,f,_,w){if(typeof _=="object"&&_!==null&&_.type===ai&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var E=_.key,x=f;x!==null;){if(x.key===E){if(E=_.type,E===ai){if(x.tag===7){n(p,x.sibling),f=i(x,_.props.children),f.return=p,p=f;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zn&&bp(E)===x.type){n(p,x.sibling),f=i(x,_.props),f.ref=ys(p,x,_),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}_.type===ai?(f=Dr(_.props.children,p.mode,w,_.key),f.return=p,p=f):(w=Na(_.type,_.key,_.props,null,p.mode,w),w.ref=ys(p,f,_),w.return=p,p=w)}return o(p);case oi:e:{for(x=_.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(p,f.sibling),f=i(f,_.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Kc(_,p.mode,w),f.return=p,p=f}return o(p);case zn:return x=_._init,k(p,f,x(_._payload),w)}if(Ts(_))return y(p,f,_,w);if(fs(_))return v(p,f,_,w);sa(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,_),f.return=p,p=f):(n(p,f),f=Gc(_,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return k}var Mi=ey(!0),ty=ey(!1),Za=yr(null),el=null,mi=null,dh=null;function hh(){dh=mi=el=null}function fh(t){var e=Za.current;ge(Za),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){el=t,dh=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(dh!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(el===null)throw Error(I(308));mi=t,el.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var Nr=null;function ph(t){Nr===null?Nr=[t]:Nr.push(t)}function ny(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}function Ap(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){u=y.call(m,u,h);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,u,h):y,h==null)break e;u=we({},u,h);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=u):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=u}}function Lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Po={},an=yr(Po),ao=yr(Po),lo=yr(Po);function Rr(t){if(t===Po)throw Error(I(174));return t}function gh(t,e){switch(he(lo,e),he(ao,t),he(an,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tu(e,t)}ge(an),he(an,e)}function Fi(){ge(an),ge(ao),ge(lo)}function iy(t){Rr(lo.current);var e=Rr(an.current),n=Tu(e,t.type);e!==n&&(he(ao,t),he(an,n))}function _h(t){ao.current===t&&(ge(an),ge(ao))}var ye=yr(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function yh(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var Ea=Ln.ReactCurrentDispatcher,zc=Ln.ReactCurrentBatchConfig,$r=0,ve=null,Pe=null,Fe=null,rl=!1,Ms=!1,co=0,QS=0;function Ze(){throw Error(I(321))}function vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function wh(t,e,n,r,i,s){if($r=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ea.current=t===null||t.memoizedState===null?ZS:eC,t=n(r,i),Ms){s=0;do{if(Ms=!1,co=0,25<=s)throw Error(I(301));s+=1,Fe=Pe=null,e.updateQueue=null,Ea.current=tC,t=n(r,i)}while(Ms)}if(Ea.current=il,e=Pe!==null&&Pe.next!==null,$r=0,Fe=Pe=ve=null,rl=!1,e)throw Error(I(300));return t}function Sh(){var t=co!==0;return co=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(Pe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Fe===null?ve.memoizedState:Fe.next;if(e!==null)Fe=e,Pe=t;else{if(t===null)throw Error(I(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function uo(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ve.lanes|=d,zr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Zt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sy(){}function oy(t,e){var n=ve,r=Mt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Ch(cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ho(9,ly.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(I(349));$r&30||ay(n,e,i)}return i}function ay(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ly(t,e,n,r){e.value=n,e.getSnapshot=r,uy(e)&&dy(t)}function cy(t,e,n){return n(function(){uy(e)&&dy(t)})}function uy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function dy(t){var e=Nn(t,1);e!==null&&Qt(e,t,1,-1)}function Dp(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=JS.bind(null,ve,t),[e.memoizedState,t]}function ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hy(){return Mt().memoizedState}function xa(t,e,n,r){var i=tn();ve.flags|=t,i.memoizedState=ho(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&vh(r,o.deps)){i.memoizedState=ho(e,n,s,r);return}}ve.flags|=t,i.memoizedState=ho(1|e,n,s,r)}function Op(t,e){return xa(8390656,8,t,e)}function Ch(t,e){return Hl(2048,8,t,e)}function fy(t,e){return Hl(4,2,t,e)}function py(t,e){return Hl(4,4,t,e)}function my(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gy(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,my.bind(null,e,t),n)}function Eh(){}function _y(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yy(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vy(t,e,n){return $r&21?(Zt(n,e)||(n=x_(),ve.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function qS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=zc.transition;zc.transition={};try{t(!1),e()}finally{oe=n,zc.transition=r}}function wy(){return Mt().memoizedState}function XS(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sy(t))Cy(e,n);else if(n=ny(t,e,n,r),n!==null){var i=at();Qt(n,t,r,i),Ey(n,e,r)}}function JS(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sy(t))Cy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Zt(a,o)){var l=e.interleaved;l===null?(i.next=i,ph(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ny(t,e,i,r),n!==null&&(i=at(),Qt(n,t,r,i),Ey(n,e,r))}}function Sy(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Cy(t,e){Ms=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ey(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}var il={readContext:Ot,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},ZS={readContext:Ot,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xa(4194308,4,my.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return xa(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Dp,useDebugValue:Eh,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Dp(!1),e=t[0];return t=qS.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=tn();if(_e){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),$e===null)throw Error(I(349));$r&30||ay(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Op(cy.bind(null,r,s,t),[t]),r.flags|=2048,ho(9,ly.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=$e.identifierPrefix;if(_e){var n=wn,r=vn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eC={readContext:Ot,useCallback:_y,useContext:Ot,useEffect:Ch,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:py,useMemo:yy,useReducer:Bc,useRef:hy,useState:function(){return Bc(uo)},useDebugValue:Eh,useDeferredValue:function(t){var e=Mt();return vy(e,Pe.memoizedState,t)},useTransition:function(){var t=Bc(uo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:sy,useSyncExternalStore:oy,useId:wy,unstable_isNewReconciler:!1},tC={readContext:Ot,useCallback:_y,useContext:Ot,useEffect:Ch,useImperativeHandle:gy,useInsertionEffect:fy,useLayoutEffect:py,useMemo:yy,useReducer:Wc,useRef:hy,useState:function(){return Wc(uo)},useDebugValue:Eh,useDeferredValue:function(t){var e=Mt();return Pe===null?e.memoizedState=t:vy(e,Pe.memoizedState,t)},useTransition:function(){var t=Wc(uo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:sy,useSyncExternalStore:oy,useId:wy,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Qt(e,t,i,r),Ca(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Qt(e,t,i,r),Ca(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=sr(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Qt(e,t,r,n),Ca(e,t,r))}};function Mp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,r)||!ro(i,s):!0}function xy(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?jr:nt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?jr:nt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=Rw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nC=typeof WeakMap=="function"?WeakMap:Map;function Iy(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,od=r),qu(t,e)},n}function ky(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gC.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var rC=Ln.ReactCurrentOwner,pt=!1;function st(t,e,n,r){e.child=t===null?ty(e,null,n,r):Mi(e,t.child,n,r)}function zp(t,e,n,r,i){n=n.render;var s=e.ref;return Ii(e,i),r=wh(t,e,n,r,s,i),n=Sh(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(_e&&n&&lh(e),e.flags|=1,st(t,e,r,i),e.child)}function Bp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ty(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ty(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ro(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Xu(t,e,n,r,i)}function Ny(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(_i,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(_i,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(_i,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(_i,xt),xt|=r;return st(t,e,i,n),e.child}function Ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,r,i){var s=yt(n)?jr:nt.current;return s=Di(e,s),Ii(e,i),n=wh(t,e,n,r,s,i),r=Sh(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(_e&&r&&lh(e),e.flags|=1,st(t,e,n,i),e.child)}function Wp(t,e,n,r,i){if(yt(n)){var s=!0;qa(e)}else s=!1;if(Ii(e,i),e.stateNode===null)Ia(t,e),xy(e,n,r),Qu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?jr:nt.current,c=Di(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Fp(e,o,r,c),Bn=!1;var h=e.memoizedState;o.state=h,tl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||_t.current||Bn?(typeof d=="function"&&(Yu(e,n,d,r),l=e.memoizedState),(a=Bn||Mp(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ry(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zt(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=yt(n)?jr:nt.current,l=Di(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&Fp(e,o,r,l),Bn=!1,h=e.memoizedState,o.state=h,tl(e,r,o,i);var y=e.memoizedState;a!==u||h!==y||_t.current||Bn?(typeof m=="function"&&(Yu(e,n,m,r),y=e.memoizedState),(c=Bn||Mp(e,n,c,r,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ju(t,e,n,r,s,i)}function Ju(t,e,n,r,i,s){Ry(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Np(e,n,!1),Rn(t,e,s);r=e.stateNode,rC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,s),e.child=Mi(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&Np(e,n,!0),e.child}function Py(t){var e=t.stateNode;e.pendingContext?Tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tp(t,e.context,!1),gh(t,e.containerInfo)}function Hp(t,e,n,r,i){return Oi(),uh(i),e.flags|=256,st(t,e,n,r),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function by(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ye,i&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Zu,t):xh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xh(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,r){return r!==null&&uh(r),Mi(e,t.child,null,n),t=xh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hc(Error(I(422))),oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=ed(o),e.memoizedState=Zu,s);if(!(e.mode&1))return oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Hc(s,r,void 0),oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Qt(r,t,i,-1))}return Ph(),r=Hc(Error(I(421))),oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_C.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=nr(i.nextSibling),kt=e,_e=!0,Wt=null,t!==null&&(Pt[bt++]=vn,Pt[bt++]=wn,Pt[bt++]=Ur,vn=t.id,wn=t.overflow,Ur=e),e=xh(e,r.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ku(t.return,e,n)}function Vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ay(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sC(t,e,n){switch(e.tag){case 3:Py(e),Oi();break;case 5:iy(e);break;case 1:yt(e.type)&&qa(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?by(t,e,n):(he(ye,ye.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ay(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Ny(t,e,n)}return Rn(t,e,n)}var Ly,td,Dy,Oy;Ly=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};Dy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(an.current);var s=null;switch(n){case"input":i=Eu(t,i),r=Eu(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=ku(t,i),r=ku(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ya)}Nu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Oy=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oC(t,e,n){var r=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return yt(e.type)&&Qa(),et(e),null;case 3:return r=e.stateNode,Fi(),ge(_t),ge(nt),yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(cd(Wt),Wt=null))),td(t,e),et(e),null;case 5:_h(e);var i=Rr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)Dy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return et(e),null}if(t=Rr(an.current),ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[oo]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)fe(Rs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ep(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":np(r,s),fe("invalid",r)}Nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Qo(r),tp(r,s,!0);break;case"textarea":Qo(r),rp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[oo]=r,Ly(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ru(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)fe(Rs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":ep(t,r),i=Eu(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":np(t,r),i=ku(t,r),fe("invalid",t);break;default:i=r}Nu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?h_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xs(t,l):typeof l=="number"&&Xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&Yd(t,s,l,o))}switch(n){case"input":Qo(t),tp(t,r,!1);break;case"textarea":Qo(t),rp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)Oy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Rr(lo.current),Rr(an.current),ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return et(e),null;case 13:if(ge(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&It!==null&&e.mode&1&&!(e.flags&128))Z_(),Oi(),e.flags|=98560,s=!1;else if(s=ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[rn]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Wt!==null&&(cd(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Le===0&&(Le=3):Ph())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Fi(),td(t,e),t===null&&io(e.stateNode.containerInfo),et(e),null;case 10:return fh(e.type._context),et(e),null;case 17:return yt(e.type)&&Qa(),et(e),null;case 19:if(ge(ye),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Ui&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return et(e),null}else 2*Te()-s.renderingStartTime>Ui&&n!==1073741824&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Rh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function aC(t,e){switch(ch(e),e.tag){case 1:return yt(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),ge(_t),ge(nt),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _h(e),null;case 13:if(ge(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ye),null;case 4:return Fi(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var aa=!1,tt=!1,lC=typeof WeakSet=="function"?WeakSet:Set,b=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function nd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Gp=!1;function cC(t,e){if(Uu=Va,t=$_(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var m;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)h=u,u=m;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(m=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},Va=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:zt(e.type,v),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){xe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=Gp,Gp=!1,y}function Fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nd(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function My(t){var e=t.alternate;e!==null&&(t.alternate=null,My(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[oo],delete e[Wu],delete e[VS],delete e[GS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fy(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ya));else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var Ve=null,Bt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)jy(t,e,n),n=n.sibling}function jy(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:tt||gi(n,e);case 6:var r=Ve,i=Bt;Ve=null,Fn(t,e,n),Ve=r,Bt=i,Ve!==null&&(Bt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Bt?(t=Ve,n=n.stateNode,t.nodeType===8?jc(t.parentNode,n):t.nodeType===1&&jc(t,n),to(t)):jc(Ve,n.stateNode));break;case 4:r=Ve,i=Bt,Ve=n.stateNode.containerInfo,Bt=!0,Fn(t,e,n),Ve=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nd(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!tt&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Fn(t,e,n),tt=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function Yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lC),e.forEach(function(r){var i=yC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Bt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Bt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Ve===null)throw Error(I(160));jy(s,o,i),Ve=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uy(e,t),e=e.sibling}function Uy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),en(t),r&4){try{Fs(3,t,t.return),Gl(3,t)}catch(v){xe(t,t.return,v)}try{Fs(5,t,t.return)}catch(v){xe(t,t.return,v)}}break;case 1:$t(e,t),en(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if($t(e,t),en(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var i=t.stateNode;try{Xs(i,"")}catch(v){xe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a_(i,s),Ru(a,o);var c=Ru(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?h_(i,u):d==="dangerouslySetInnerHTML"?u_(i,u):d==="children"?Xs(i,u):Yd(i,d,u,c)}switch(a){case"input":xu(i,s);break;case"textarea":l_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Si(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[oo]=s}catch(v){xe(t,t.return,v)}}break;case 6:if($t(e,t),en(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){xe(t,t.return,v)}}break;case 3:if($t(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(v){xe(t,t.return,v)}break;case 4:$t(e,t),en(t);break;case 13:$t(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Th=Te())),r&4&&Yp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,$t(e,t),tt=c):$t(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(u=b=d;b!==null;){switch(h=b,m=h.child,h.tag){case 0:case 11:case 14:case 15:Fs(4,h,h.return);break;case 1:gi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){xe(r,n,v)}}break;case 5:gi(h,h.return);break;case 22:if(h.memoizedState!==null){qp(u);continue}}m!==null?(m.return=h,b=m):qp(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d_("display",o))}catch(v){xe(t,t.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){xe(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:$t(e,t),en(t),r&4&&Yp(t);break;case 21:break;default:$t(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fy(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var s=Kp(t);sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Kp(t);id(t,a,o);break;default:throw Error(I(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uC(t,e,n){b=t,$y(t)}function $y(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||aa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=aa;var c=tt;if(aa=o,(tt=l)&&!c)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Xp(i):l!==null?(l.return=o,b=l):Xp(i);for(;s!==null;)b=s,$y(s),s=s.sibling;b=i,aa=a,tt=c}Qp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Qp(t)}}function Qp(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&to(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}tt||e.flags&512&&rd(e)}catch(h){xe(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function qp(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Xp(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{rd(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{rd(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var dC=Math.ceil,sl=Ln.ReactCurrentDispatcher,Ih=Ln.ReactCurrentOwner,Dt=Ln.ReactCurrentBatchConfig,te=0,$e=null,Re=null,Ye=0,xt=0,_i=yr(0),Le=0,fo=null,zr=0,Kl=0,kh=0,js=null,ft=null,Th=0,Ui=1/0,mn=null,ol=!1,od=null,ir=null,la=!1,qn=null,al=0,Us=0,ad=null,ka=-1,Ta=0;function at(){return te&6?Te():ka!==-1?ka:ka=Te()}function sr(t){return t.mode&1?te&2&&Ye!==0?Ye&-Ye:YS.transition!==null?(Ta===0&&(Ta=x_()),Ta):(t=oe,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function Qt(t,e,n,r){if(50<Us)throw Us=0,ad=null,Error(I(185));To(t,n,r),(!(te&2)||t!==$e)&&(t===$e&&(!(te&2)&&(Kl|=n),Le===4&&Hn(t,Ye)),vt(t,r),n===1&&te===0&&!(e.mode&1)&&(Ui=Te()+500,Wl&&vr()))}function vt(t,e){var n=t.callbackNode;Yw(t,e);var r=Ha(t,t===$e?Ye:0);if(r===0)n!==null&&op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&op(n),e===1)t.tag===0?KS(Jp.bind(null,t)):q_(Jp.bind(null,t)),WS(function(){!(te&6)&&vr()}),n=null;else{switch(I_(r)){case 1:n=Zd;break;case 4:n=C_;break;case 16:n=Wa;break;case 536870912:n=E_;break;default:n=Wa}n=Yy(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(ka=-1,Ta=0,te&6)throw Error(I(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=Ha(t,t===$e?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=te;te|=2;var s=Wy();($e!==t||Ye!==e)&&(mn=null,Ui=Te()+500,Lr(t,e));do try{pC();break}catch(a){By(t,a)}while(!0);hh(),sl.current=s,te=i,Re!==null?e=0:($e=null,Ye=0,e=Le)}if(e!==0){if(e===2&&(i=Du(t),i!==0&&(r=i,e=ld(t,i))),e===1)throw n=fo,Lr(t,0),Hn(t,r),vt(t,Te()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hC(i)&&(e=ll(t,r),e===2&&(s=Du(t),s!==0&&(r=s,e=ld(t,s))),e===1))throw n=fo,Lr(t,0),Hn(t,r),vt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Er(t,ft,mn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=Th+500-Te(),10<e)){if(Ha(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bu(Er.bind(null,t,ft,mn),e);break}Er(t,ft,mn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dC(r/1960))-r,10<r){t.timeoutHandle=Bu(Er.bind(null,t,ft,mn),r);break}Er(t,ft,mn);break;case 5:Er(t,ft,mn);break;default:throw Error(I(329))}}}return vt(t,Te()),t.callbackNode===n?zy.bind(null,t):null}function ld(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=ft,ft=n,e!==null&&cd(e)),t}function cd(t){ft===null?ft=t:ft.push.apply(ft,t)}function hC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~kh,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function Jp(t){if(te&6)throw Error(I(327));ki();var e=Ha(t,0);if(!(e&1))return vt(t,Te()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=Du(t);r!==0&&(e=r,n=ld(t,r))}if(n===1)throw n=fo,Lr(t,0),Hn(t,e),vt(t,Te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,ft,mn),vt(t,Te()),null}function Nh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Ui=Te()+500,Wl&&vr())}}function Br(t){qn!==null&&qn.tag===0&&!(te&6)&&ki();var e=te;te|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,te=e,!(te&6)&&vr()}}function Rh(){xt=_i.current,ge(_i)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Fi(),ge(_t),ge(nt),yh();break;case 5:_h(r);break;case 4:Fi();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:fh(r.type._context);break;case 22:case 23:Rh()}n=n.return}if($e=t,Re=t=or(t.current,null),Ye=xt=e,Le=0,fo=null,kh=Kl=zr=0,ft=js=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function By(t,e){do{var n=Re;try{if(hh(),Ea.current=il,rl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if($r=0,Fe=Pe=ve=null,Ms=!1,co=0,Ih.current=null,n===null||n.return===null){Le=1,fo=e,Re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Up(o);if(m!==null){m.flags&=-257,$p(m,o,a,s,e),m.mode&1&&jp(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){jp(s,c,e),Ph();break e}l=Error(I(426))}}else if(_e&&a.mode&1){var k=Up(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$p(k,o,a,s,e),uh(ji(l,a));break e}}s=l=ji(l,a),Le!==4&&(Le=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Iy(s,l,e);Ap(s,p);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ir===null||!ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ky(s,a,e);Ap(s,w);break e}}s=s.return}while(s!==null)}Vy(n)}catch(E){e=E,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Wy(){var t=sl.current;return sl.current=il,t===null?il:t}function Ph(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(zr&268435455)&&!(Kl&268435455)||Hn($e,Ye)}function ll(t,e){var n=te;te|=2;var r=Wy();($e!==t||Ye!==e)&&(mn=null,Lr(t,e));do try{fC();break}catch(i){By(t,i)}while(!0);if(hh(),te=n,sl.current=r,Re!==null)throw Error(I(261));return $e=null,Ye=0,Le}function fC(){for(;Re!==null;)Hy(Re)}function pC(){for(;Re!==null&&!Uw();)Hy(Re)}function Hy(t){var e=Ky(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?Vy(t):Re=e,Ih.current=null}function Vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aC(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Re=null;return}}else if(n=oC(n,e,xt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Le===0&&(Le=5)}function Er(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,mC(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function mC(t,e,n,r){do ki();while(qn!==null);if(te&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qw(t,s),t===$e&&(Re=$e=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,Yy(Wa,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var a=te;te|=4,Ih.current=null,cC(t,n),Uy(n,t),OS($u),Va=!!Uu,$u=Uu=null,t.current=n,uC(n),$w(),te=a,oe=o,Dt.transition=s}else t.current=n;if(la&&(la=!1,qn=t,al=i),s=t.pendingLanes,s===0&&(ir=null),Ww(n.stateNode),vt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=od,od=null,t;return al&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===ad?Us++:(Us=0,ad=t):Us=0,vr(),null}function ki(){if(qn!==null){var t=I_(al),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,al=0,te&6)throw Error(I(331));var i=te;for(te|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(b=c;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Fs(8,d,s)}var u=d.child;if(u!==null)u.return=d,b=u;else for(;b!==null;){d=b;var h=d.sibling,m=d.return;if(My(d),d===c){b=null;break}if(h!==null){h.return=m,b=h;break}b=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var f=t.current;for(b=f;b!==null;){o=b;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,b=_;else e:for(o=f;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gl(9,a)}}catch(E){xe(a,a.return,E)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(te=i,vr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function Zp(t,e,n){e=ji(n,e),e=Iy(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(To(t,1,e),vt(t,e))}function xe(t,e,n){if(t.tag===3)Zp(t,t,n);else for(;e!==null;){if(e.tag===3){Zp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=ji(n,t),t=ky(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(To(e,1,t),vt(e,t));break}}e=e.return}}function gC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ye&n)===n&&(Le===4||Le===3&&(Ye&130023424)===Ye&&500>Te()-Th?Lr(t,0):kh|=n),vt(t,e)}function Gy(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=at();t=Nn(t,e),t!==null&&(To(t,e,n),vt(t,n))}function _C(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gy(t,n)}function yC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Gy(t,n)}var Ky;Ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,sC(t,e,n);pt=!!(t.flags&131072)}else pt=!1,_e&&e.flags&1048576&&X_(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ia(t,e),t=e.pendingProps;var i=Di(e,nt.current);Ii(e,n),i=wh(null,e,r,t,i,n);var s=Sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mh(e),i.updater=Vl,e.stateNode=i,i._reactInternals=e,Qu(e,r,t,n),e=Ju(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&lh(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wC(r),t=zt(r,t),i){case 0:e=Xu(null,e,r,t,n);break e;case 1:e=Wp(null,e,r,t,n);break e;case 11:e=zp(null,e,r,t,n);break e;case 14:e=Bp(null,e,r,zt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Xu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Wp(t,e,r,i,n);case 3:e:{if(Py(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ry(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(I(423)),e),e=Hp(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(I(424)),e),e=Hp(t,e,r,n,i);break e}else for(It=nr(e.stateNode.containerInfo.firstChild),kt=e,_e=!0,Wt=null,n=ty(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=Rn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return iy(e),t===null&&Gu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zu(r,i)?o=null:s!==null&&zu(r,s)&&(e.flags|=32),Ry(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return by(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),zp(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Za,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!_t.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ii(e,n),i=Ot(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Bp(t,e,r,i,n);case 15:return Ty(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ia(t,e),e.tag=1,yt(r)?(t=!0,qa(e)):t=!1,Ii(e,n),xy(e,r,i),Qu(e,r,i,n),Ju(null,e,r,!0,t,n);case 19:return Ay(t,e,n);case 22:return Ny(t,e,n)}throw Error(I(156,e.tag))};function Yy(t,e){return S_(t,e)}function vC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new vC(t,e,n,r)}function bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wC(t){if(typeof t=="function")return bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Xd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Dr(n.children,i,s,e);case Qd:o=8,i|=8;break;case vu:return t=At(12,n,e,i|2),t.elementType=vu,t.lanes=s,t;case wu:return t=At(13,n,e,i),t.elementType=wu,t.lanes=s,t;case Su:return t=At(19,n,e,i),t.elementType=Su,t.lanes=s,t;case i_:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:o=10;break e;case r_:o=9;break e;case qd:o=11;break e;case Xd:o=14;break e;case zn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=At(22,t,r,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ah(t,e,n,r,i,s,o,a,l){return t=new SC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function CC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qy(t){if(!t)return fr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(yt(n))return Q_(t,n,e)}return e}function qy(t,e,n,r,i,s,o,a,l){return t=Ah(n,r,!0,t,i,s,o,a,l),t.context=Qy(null),n=t.current,r=at(),i=sr(n),s=xn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,To(t,i,r),vt(t,r),t}function Ql(t,e,n,r){var i=e.current,s=at(),o=sr(i);return n=Qy(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Qt(t,i,o,s),Ca(t,i,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lh(t,e){em(t,e),(t=t.alternate)&&em(t,e)}function EC(){return null}var Xy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dh(t){this._internalRoot=t}ql.prototype.render=Dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ql(t,e,null,null)};ql.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ql(null,t,null,null)}),e[Tn]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=N_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&P_(t)}};function Oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tm(){}function xC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cl(o);s.call(c)}}var o=qy(e,r,t,0,null,!1,!1,"",tm);return t._reactRootContainer=o,t[Tn]=o.current,io(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cl(l);a.call(c)}}var l=Ah(t,0,!1,null,null,!1,!1,"",tm);return t._reactRootContainer=l,t[Tn]=l.current,io(t.nodeType===8?t.parentNode:t),Br(function(){Ql(e,l,n,r)}),l}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cl(o);a.call(l)}}Ql(e,o,t,i)}else o=xC(n,e,t,i,r);return cl(o)}k_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(eh(e,n|1),vt(e,Te()),!(te&6)&&(Ui=Te()+500,vr()))}break;case 13:Br(function(){var r=Nn(t,1);if(r!==null){var i=at();Qt(r,t,1,i)}}),Lh(t,1)}};th=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=at();Qt(e,t,134217728,n)}Lh(t,134217728)}};T_=function(t){if(t.tag===13){var e=sr(t),n=Nn(t,e);if(n!==null){var r=at();Qt(n,t,e,r)}Lh(t,e)}};N_=function(){return oe};R_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};bu=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bl(r);if(!i)throw Error(I(90));o_(r),xu(r,i)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};m_=Nh;g_=Br;var IC={usingClientEntryPoint:!1,Events:[Ro,di,Bl,f_,p_,Nh]},ws={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kC={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v_(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{jl=ca.inject(kC),on=ca}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(e))throw Error(I(200));return CC(t,e,null,n)};Nt.createRoot=function(t,e){if(!Oh(t))throw Error(I(299));var n=!1,r="",i=Xy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ah(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,io(t.nodeType===8?t.parentNode:t),new Dh(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=v_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Br(t)};Nt.hydrate=function(t,e,n){if(!Xl(e))throw Error(I(200));return Jl(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Oh(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qy(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ql(e)};Nt.render=function(t,e,n){if(!Xl(e))throw Error(I(200));return Jl(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(I(40));return t._reactRootContainer?(Br(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Nh;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Jl(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function Jy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy)}catch(t){console.error(t)}}Jy(),Jg.exports=Nt;var Zy=Jg.exports;const TC=zd(Zy);var ev,nm=Zy;ev=nm.createRoot,nm.hydrateRoot;const NC=async()=>{try{const e=await(await fetch("https://www.vgtk.by/schedule/lessons/day-today.php")).text(),n=document.createElement("div");n.innerHTML=e;const r=n.querySelector("table");(u=>{for(let h=0;h<u.rows.length;h++){let m=u.rows[h];for(let y=0;y<m.cells.length;y++){let v=m.cells[y],k=parseInt(v.getAttribute("rowspan"));if(v.hasAttribute("rowspan")&&k>1){let p=v.cloneNode(!0);v.removeAttribute("rowspan");for(let f=1;f<k;f++){let _=u.rows[h+f];if(_&&y<=_.cells.length){let w=_.insertCell(y);w.innerHTML=p.innerHTML}}}}}})(r);const s=new Set,o=new Map,a=/^[А-Я]{1,3}-\d{2,3}$/,l=/^[А-Я\s.]+$/;let c=null;for(let u=0;u<r.rows.length;u++){const h=r.rows[u],m=h.cells[0];if(m){const y=m.innerText.trim();l.test(y)&&y.length>5&&(c=y,o.has(c)||o.set(c,[]))}Array.from(h.cells).forEach(y=>{const v=y.innerText.trim();if(a.test(v)&&c){s.add(v);const k=o.get(c);k&&!k.includes(v)&&k.push(v)}})}o.forEach((u,h)=>{o.set(h,u.sort())});const d=Object.fromEntries(o);return{allGroups:Array.from(s).sort(),groupsByDepartment:d}}catch(t){return console.error("Ошибка при парсинге групп:",t),{allGroups:[],groupsByDepartment:{}}}};let $s=[],zs={};const RC=async()=>{const t=await NC();return $s=t.allGroups,zs=t.groupsByDepartment,console.log("Загружены группы:",$s),console.log("Группы по отделениям:",zs),{allGroups:$s,groupsByDepartment:zs}};RC();const PC=t=>{for(let e=0;e<t.rows.length;e++){let n=t.rows[e];for(let r=0;r<n.cells.length;r++){let i=n.cells[r],s=parseInt(i.getAttribute("rowspan"));if(i.hasAttribute("rowspan")&&s>1){let o=i.cloneNode(!0);i.removeAttribute("rowspan");for(let a=1;a<s;a++){let l=t.rows[e+a];if(l)if(r<=l.cells.length){let c=l.insertCell(r);c.innerHTML=o.innerHTML}else console.warn(`Недопустимый индекс: ${r} для строки ${e+a}`)}}}}},bC=(t,e)=>{let n=[],r=[];return fetch(t).then(i=>i.text()).then(i=>{const s=document.createElement("div");s.innerHTML=i;const o=s.querySelector("table"),a=o.rows[0].innerText.trim();PC(o);for(let l=0;l<o.rows.length-11;l++){const c=o.rows[l];c.cells.length>1&&Array.from(c.cells).forEach((d,u)=>{let h=d.innerText.trim();if($s.includes(h)){const m={groupName:h,lessons:Array.from({length:11},(y,v)=>{var k,p,f;return{lessonName:(k=o.rows[l+v+1].cells[u])==null?void 0:k.innerText.trim(),cabinet:(p=o.rows[l+v+1].cells[u+1])==null?void 0:p.innerText.trim(),lessonNumber:v+1,groupName:h,isLab:(f=o.rows[l+v+1].cells[u+1])==null?void 0:f.innerText.trim().includes("/")}})};n.push(m),m.lessons.forEach(y=>{var v;(v=y.cabinet)!=null&&v.split("/").includes(e)&&(console.log(!0),r.push(y))})}})}return[n,r,a]}).catch(i=>console.error("Ошибка:",i))};function tv(t){var a;const e=t.match(/на\s+(.+?)\s+года/i);if(!e)return null;const n=e[1].trim();let r=new Date(n);if(isNaN(r)){const l=n.split(/\s+/),c=parseInt(l[0],10),d=(a=l[1])==null?void 0:a.toLowerCase(),u=parseInt(l[2],10),m={января:0,февраля:1,марта:2,апреля:3,мая:4,июня:5,июля:6,августа:7,сентября:8,октября:9,ноября:10,декабря:11}[d];m!=null&&(r=new Date(u,m,c))}if(!r||isNaN(r))return null;const i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();return`${i}-${s}-${o}`}const AC="на 9 сентября 2025 года  (ВТОРНИК)",LC=tv(AC);console.log(LC);const DC="https://www.vgtk.by/schedule/lessons/day-today.php",OC="https://www.vgtk.by/schedule/lessons/day-tomorrow.php";var mt=function(){return mt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},mt.apply(this,arguments)};function ul(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var pe="-ms-",Bs="-moz-",se="-webkit-",nv="comm",Zl="rule",Mh="decl",MC="@import",rv="@keyframes",FC="@layer",iv=Math.abs,Fh=String.fromCharCode,ud=Object.assign;function jC(t,e){return je(t,0)^45?(((e<<2^je(t,0))<<2^je(t,1))<<2^je(t,2))<<2^je(t,3):0}function sv(t){return t.trim()}function gn(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,n){return t.replace(e,n)}function Ra(t,e,n){return t.indexOf(e,n)}function je(t,e){return t.charCodeAt(e)|0}function $i(t,e,n){return t.slice(e,n)}function nn(t){return t.length}function ov(t){return t.length}function Ps(t,e){return e.push(t),t}function UC(t,e){return t.map(e).join("")}function rm(t,e){return t.filter(function(n){return!gn(n,e)})}var ec=1,zi=1,av=0,Ft=0,Ne=0,ns="";function tc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ec,column:zi,length:o,return:"",siblings:a}}function $n(t,e){return ud(tc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ni(t){for(;t.root;)t=$n(t.root,{children:[t]});Ps(t,t.siblings)}function $C(){return Ne}function zC(){return Ne=Ft>0?je(ns,--Ft):0,zi--,Ne===10&&(zi=1,ec--),Ne}function qt(){return Ne=Ft<av?je(ns,Ft++):0,zi++,Ne===10&&(zi=1,ec++),Ne}function Or(){return je(ns,Ft)}function Pa(){return Ft}function nc(t,e){return $i(ns,t,e)}function dd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BC(t){return ec=zi=1,av=nn(ns=t),Ft=0,[]}function WC(t){return ns="",t}function Yc(t){return sv(nc(Ft-1,hd(t===91?t+2:t===40?t+1:t)))}function HC(t){for(;(Ne=Or())&&Ne<33;)qt();return dd(t)>2||dd(Ne)>3?"":" "}function VC(t,e){for(;--e&&qt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return nc(t,Pa()+(e<6&&Or()==32&&qt()==32))}function hd(t){for(;qt();)switch(Ne){case t:return Ft;case 34:case 39:t!==34&&t!==39&&hd(Ne);break;case 40:t===41&&hd(t);break;case 92:qt();break}return Ft}function GC(t,e){for(;qt()&&t+Ne!==57;)if(t+Ne===84&&Or()===47)break;return"/*"+nc(e,Ft-1)+"*"+Fh(t===47?t:qt())}function KC(t){for(;!dd(Or());)qt();return nc(t,Ft)}function YC(t){return WC(ba("",null,null,null,[""],t=BC(t),0,[0],t))}function ba(t,e,n,r,i,s,o,a,l){for(var c=0,d=0,u=o,h=0,m=0,y=0,v=1,k=1,p=1,f=0,_="",w=i,E=s,x=r,C=_;k;)switch(y=f,f=qt()){case 40:if(y!=108&&je(C,u-1)==58){Ra(C+=V(Yc(f),"&","&\f"),"&\f",iv(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Yc(f);break;case 9:case 10:case 13:case 32:C+=HC(y);break;case 92:C+=VC(Pa()-1,7);continue;case 47:switch(Or()){case 42:case 47:Ps(QC(GC(qt(),Pa()),e,n,l),l);break;default:C+="/"}break;case 123*v:a[c++]=nn(C)*p;case 125*v:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+d:p==-1&&(C=V(C,/\f/g,"")),m>0&&nn(C)-u&&Ps(m>32?sm(C+";",r,n,u-1,l):sm(V(C," ","")+";",r,n,u-2,l),l);break;case 59:C+=";";default:if(Ps(x=im(C,e,n,c,d,i,a,_,w=[],E=[],u,s),s),f===123)if(d===0)ba(C,e,x,x,w,s,u,a,E);else switch(h===99&&je(C,3)===110?100:h){case 100:case 108:case 109:case 115:ba(t,x,x,r&&Ps(im(t,x,x,0,0,i,a,_,i,w=[],u,E),E),i,E,u,a,r?w:E);break;default:ba(C,x,x,x,[""],E,0,a,E)}}c=d=m=0,v=p=1,_=C="",u=o;break;case 58:u=1+nn(C),m=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&zC()==125)continue}switch(C+=Fh(f),f*v){case 38:p=d>0?1:(C+="\f",-1);break;case 44:a[c++]=(nn(C)-1)*p,p=1;break;case 64:Or()===45&&(C+=Yc(qt())),h=Or(),d=u=nn(_=C+=KC(Pa())),f++;break;case 45:y===45&&nn(C)==2&&(v=0)}}return s}function im(t,e,n,r,i,s,o,a,l,c,d,u){for(var h=i-1,m=i===0?s:[""],y=ov(m),v=0,k=0,p=0;v<r;++v)for(var f=0,_=$i(t,h+1,h=iv(k=o[v])),w=t;f<y;++f)(w=sv(k>0?m[f]+" "+_:V(_,/&\f/g,m[f])))&&(l[p++]=w);return tc(t,e,n,i===0?Zl:a,l,c,d,u)}function QC(t,e,n,r){return tc(t,e,n,nv,Fh($C()),$i(t,2,-2),0,r)}function sm(t,e,n,r,i){return tc(t,e,n,Mh,$i(t,0,r),$i(t,r+1,-1),r,i)}function lv(t,e,n){switch(jC(t,e)){case 5103:return se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+t+t;case 4789:return Bs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return se+t+Bs+t+pe+t+t;case 5936:switch(je(t,e+11)){case 114:return se+t+pe+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return se+t+pe+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return se+t+pe+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return se+t+pe+t+t;case 6165:return se+t+pe+"flex-"+t+t;case 5187:return se+t+V(t,/(\w+).+(:[^]+)/,se+"box-$1$2"+pe+"flex-$1$2")+t;case 5443:return se+t+pe+"flex-item-"+V(t,/flex-|-self/g,"")+(gn(t,/flex-|baseline/)?"":pe+"grid-row-"+V(t,/flex-|-self/g,""))+t;case 4675:return se+t+pe+"flex-line-pack"+V(t,/align-content|flex-|-self/g,"")+t;case 5548:return se+t+pe+V(t,"shrink","negative")+t;case 5292:return se+t+pe+V(t,"basis","preferred-size")+t;case 6060:return se+"box-"+V(t,"-grow","")+se+t+pe+V(t,"grow","positive")+t;case 4554:return se+V(t,/([^-])(transform)/g,"$1"+se+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+t+t;case 4200:if(!gn(t,/flex-|baseline/))return pe+"grid-column-align"+$i(t,e)+t;break;case 2592:case 3360:return pe+V(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,gn(r.props,/grid-\w+-end/)})?~Ra(t+(n=n[e].value),"span",0)?t:pe+V(t,"-start","")+t+pe+"grid-row-span:"+(~Ra(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(t,/\d+/))+";":pe+V(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return gn(r.props,/grid-\w+-start/)})?t:pe+V(V(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(t)-1-e>6)switch(je(t,e+1)){case 109:if(je(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Bs+(je(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ra(t,"stretch",0)?lv(V(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return V(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return pe+i+":"+s+c+(o?pe+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(je(t,e+6)===121)return V(t,":",":"+se)+t;break;case 6444:switch(je(t,je(t,14)===45?18:11)){case 120:return V(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(je(t,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+pe+"$2box$3")+t;case 100:return V(t,":",":"+pe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(t,"scroll-","scroll-snap-")+t}return t}function dl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function qC(t,e,n,r){switch(t.type){case FC:if(t.children.length)break;case MC:case Mh:return t.return=t.return||t.value;case nv:return"";case rv:return t.return=t.value+"{"+dl(t.children,r)+"}";case Zl:if(!nn(t.value=t.props.join(",")))return""}return nn(n=dl(t.children,r))?t.return=t.value+"{"+n+"}":""}function XC(t){var e=ov(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function JC(t){return function(e){e.root||(e=e.return)&&t(e)}}function ZC(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Mh:t.return=lv(t.value,t.length,n);return;case rv:return dl([$n(t,{value:V(t.value,"@","@"+se)})],r);case Zl:if(t.length)return UC(n=t.props,function(i){switch(gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ni($n(t,{props:[V(i,/:(read-\w+)/,":"+Bs+"$1")]})),ni($n(t,{props:[i]})),ud(t,{props:rm(n,r)});break;case"::placeholder":ni($n(t,{props:[V(i,/:(plac\w+)/,":"+se+"input-$1")]})),ni($n(t,{props:[V(i,/:(plac\w+)/,":"+Bs+"$1")]})),ni($n(t,{props:[V(i,/:(plac\w+)/,pe+"input-$1")]})),ni($n(t,{props:[i]})),ud(t,{props:rm(n,r)});break}return""})}}var eE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},Bi=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",cv="active",uv="data-styled-version",rc="6.1.13",jh=`/*!sc*/
`,hl=typeof window<"u"&&"HTMLElement"in window,tE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),ic=Object.freeze([]),Wi=Object.freeze({});function nE(t,e,n){return n===void 0&&(n=Wi),t.theme!==n.theme&&t.theme||e||n.theme}var dv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iE=/(^-|-$)/g;function om(t){return t.replace(rE,"-").replace(iE,"")}var sE=/(a)(d)/gi,ua=52,am=function(t){return String.fromCharCode(t+(t>25?39:97))};function fd(t){var e,n="";for(e=Math.abs(t);e>ua;e=e/ua|0)n=am(e%ua)+n;return(am(e%ua)+n).replace(sE,"$1-$2")}var Qc,hv=5381,yi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fv=function(t){return yi(hv,t)};function oE(t){return fd(fv(t)>>>0)}function aE(t){return t.displayName||t.name||"Component"}function qc(t){return typeof t=="string"&&!0}var pv=typeof Symbol=="function"&&Symbol.for,mv=pv?Symbol.for("react.memo"):60115,lE=pv?Symbol.for("react.forward_ref"):60112,cE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dE=((Qc={})[lE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qc[mv]=gv,Qc);function lm(t){return("type"in(e=t)&&e.type.$$typeof)===mv?gv:"$$typeof"in t?dE[t.$$typeof]:cE;var e}var hE=Object.defineProperty,fE=Object.getOwnPropertyNames,cm=Object.getOwnPropertySymbols,pE=Object.getOwnPropertyDescriptor,mE=Object.getPrototypeOf,um=Object.prototype;function _v(t,e,n){if(typeof e!="string"){if(um){var r=mE(e);r&&r!==um&&_v(t,r,n)}var i=fE(e);cm&&(i=i.concat(cm(e)));for(var s=lm(t),o=lm(e),a=0;a<i.length;++a){var l=i[a];if(!(l in uE||n&&n[l]||o&&l in o||s&&l in s)){var c=pE(e,l);try{hE(t,l,c)}catch{}}}}return t}function Hi(t){return typeof t=="function"}function Uh(t){return typeof t=="object"&&"styledComponentId"in t}function Pr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function dm(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function po(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function pd(t,e,n){if(n===void 0&&(n=!1),!n&&!po(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=pd(t[r],e[r]);else if(po(e))for(var r in e)t[r]=pd(t[r],e[r]);return t}function $h(t,e){Object.defineProperty(t,"toString",{value:e})}function bo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var gE=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw bo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(jh);return n},t}(),Aa=new Map,fl=new Map,La=1,da=function(t){if(Aa.has(t))return Aa.get(t);for(;fl.has(La);)La++;var e=La++;return Aa.set(t,e),fl.set(e,t),e},_E=function(t,e){La=e+1,Aa.set(t,e),fl.set(e,t)},yE="style[".concat(Bi,"][").concat(uv,'="').concat(rc,'"]'),vE=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wE=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},SE=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(jh),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(vE);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(_E(d,c),wE(t,d,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},hm=function(t){for(var e=document.querySelectorAll(yE),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Bi)!==cv&&(SE(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function CE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yv=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Bi,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Bi,cv),r.setAttribute(uv,rc);var o=CE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},EE=function(){function t(e){this.element=yv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw bo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),xE=function(){function t(e){this.element=yv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),IE=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),fm=hl,kE={isServer:!hl,useCSSOMInjection:!tE},vv=function(){function t(e,n,r){e===void 0&&(e=Wi),n===void 0&&(n={});var i=this;this.options=mt(mt({},kE),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&hl&&fm&&(fm=!1,hm(this)),$h(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(u){var h=function(p){return fl.get(p)}(u);if(h===void 0)return"continue";var m=s.names.get(h),y=o.getGroup(u);if(m===void 0||!m.size||y.length===0)return"continue";var v="".concat(Bi,".g").concat(u,'[id="').concat(h,'"]'),k="";m!==void 0&&m.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),l+="".concat(y).concat(v,'{content:"').concat(k,'"}').concat(jh)},d=0;d<a;d++)c(d);return l}(i)})}return t.registerId=function(e){return da(e)},t.prototype.rehydrate=function(){!this.server&&hl&&hm(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(mt(mt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new IE(i):r?new EE(i):new xE(i)}(this.options),new gE(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(da(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(da(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(da(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),TE=/&/g,NE=/^\s*\/\/.*$/gm;function wv(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wv(n.children,e)),n})}function RE(t){var e,n,r,i=Wi,s=i.options,o=s===void 0?Wi:s,a=i.plugins,l=a===void 0?ic:a,c=function(h,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},d=l.slice();d.push(function(h){h.type===Zl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(TE,n).replace(r,c))}),o.prefix&&d.push(ZC),d.push(qC);var u=function(h,m,y,v){m===void 0&&(m=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(NE,""),p=YC(y||m?"".concat(y," ").concat(m," { ").concat(k," }"):k);o.namespace&&(p=wv(p,o.namespace));var f=[];return dl(p,XC(d.concat(JC(function(_){return f.push(_)})))),f};return u.hash=l.length?l.reduce(function(h,m){return m.name||bo(15),yi(h,m.name)},hv).toString():"",u}var PE=new vv,md=RE(),Sv=Ai.createContext({shouldForwardProp:void 0,styleSheet:PE,stylis:md});Sv.Consumer;Ai.createContext(void 0);function pm(){return R.useContext(Sv)}var bE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=md);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,$h(this,function(){throw bo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=md),this.name+e.hash},t}(),AE=function(t){return t>="A"&&t<="Z"};function mm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;AE(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Cv=function(t){return t==null||t===!1||t===""},Ev=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Cv(s)&&(Array.isArray(s)&&s.isCss||Hi(s)?r.push("".concat(mm(i),":"),s,";"):po(s)?r.push.apply(r,ul(ul(["".concat(i," {")],Ev(s),!1),["}"],!1)):r.push("".concat(mm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in eE||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mr(t,e,n,r){if(Cv(t))return[];if(Uh(t))return[".".concat(t.styledComponentId)];if(Hi(t)){if(!Hi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Mr(i,e,n,r)}var s;return t instanceof bE?n?(t.inject(n,r),[t.getName(r)]):[t]:po(t)?Ev(t):Array.isArray(t)?Array.prototype.concat.apply(ic,t.map(function(o){return Mr(o,e,n,r)})):[t.toString()]}function LE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Hi(n)&&!Uh(n))return!1}return!0}var DE=fv(rc),OE=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&LE(e),this.componentId=n,this.baseHash=yi(DE,n),this.baseStyle=r,vv.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pr(i,this.staticRulesId);else{var s=dm(Mr(this.rules,e,n,r)),o=fd(yi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Pr(i,o),this.staticRulesId=o}else{for(var l=yi(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var u=this.rules[d];if(typeof u=="string")c+=u;else if(u){var h=dm(Mr(u,e,n,r));l=yi(l,h+d),c+=h}}if(c){var m=fd(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),i=Pr(i,m)}}return i},t}(),xv=Ai.createContext(void 0);xv.Consumer;var Xc={};function ME(t,e,n){var r=Uh(t),i=t,s=!qc(t),o=e.attrs,a=o===void 0?ic:o,l=e.componentId,c=l===void 0?function(w,E){var x=typeof w!="string"?"sc":om(w);Xc[x]=(Xc[x]||0)+1;var C="".concat(x,"-").concat(oE(rc+x+Xc[x]));return E?"".concat(E,"-").concat(C):C}(e.displayName,e.parentComponentId):l,d=e.displayName,u=d===void 0?function(w){return qc(w)?"styled.".concat(w):"Styled(".concat(aE(w),")")}(t):d,h=e.displayName&&e.componentId?"".concat(om(e.displayName),"-").concat(e.componentId):e.componentId||c,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;y=function(w,E){return v(w,E)&&k(w,E)}}else y=v}var p=new OE(n,h,r?i.componentStyle:void 0);function f(w,E){return function(x,C,L){var H=x.attrs,O=x.componentStyle,Se=x.defaultProps,ze=x.foldedComponentIds,Xe=x.styledComponentId,dn=x.target,Ut=Ai.useContext(xv),St=pm(),De=x.shouldForwardProp||St.shouldForwardProp,P=nE(C,Ut,Se)||Wi,M=function(W,$,X){for(var ae,Ce=mt(mt({},$),{className:void 0,theme:X}),B=0;B<W.length;B+=1){var ie=Hi(ae=W[B])?ae(Ce):ae;for(var ee in ie)Ce[ee]=ee==="className"?Pr(Ce[ee],ie[ee]):ee==="style"?mt(mt({},Ce[ee]),ie[ee]):ie[ee]}return $.className&&(Ce.className=Pr(Ce.className,$.className)),Ce}(H,C,P),U=M.as||dn,re={};for(var Z in M)M[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&M.theme===P||(Z==="forwardedAs"?re.as=M.forwardedAs:De&&!De(Z,U)||(re[Z]=M[Z]));var N=function(W,$){var X=pm(),ae=W.generateAndInjectStyles($,X.styleSheet,X.stylis);return ae}(O,M),F=Pr(ze,Xe);return N&&(F+=" "+N),M.className&&(F+=" "+M.className),re[qc(U)&&!dv.has(U)?"class":"className"]=F,re.ref=L,R.createElement(U,re)}(_,w,E)}f.displayName=u;var _=Ai.forwardRef(f);return _.attrs=m,_.componentStyle=p,_.displayName=u,_.shouldForwardProp=y,_.foldedComponentIds=r?Pr(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=h,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(E){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var L=0,H=x;L<H.length;L++)pd(E,H[L],!0);return E}({},i.defaultProps,w):w}}),$h(_,function(){return".".concat(_.styledComponentId)}),s&&_v(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function gm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var _m=function(t){return Object.assign(t,{isCss:!0})};function FE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Hi(t)||po(t))return _m(Mr(gm(ic,ul([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Mr(r):_m(Mr(gm(r,e)))}function gd(t,e,n){if(n===void 0&&(n=Wi),!e)throw bo(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,FE.apply(void 0,ul([i],s,!1)))};return r.attrs=function(i){return gd(t,e,mt(mt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gd(t,e,mt(mt({},n),i))},r}var Iv=function(t){return gd(ME,t)},A=Iv;dv.forEach(function(t){A[t]=Iv(t)});const jE=t=>{switch(t){case 0:return"var(--input-background-color)";case 1:return"green";case 2:return"red"}},ym=A.div`
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
`,vm=A.form`
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
`,Jc=A.div`
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
`,jn=A.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`,UE=A.div`
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
`,$E=A.input`
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
`,zE=A.div`
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
`,ha=A.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,BE=A.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`,WE=A.header`
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
`,Zc=A.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`,it=A.button`
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
  border-color: ${t=>jE(t.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`,HE=A.button`
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
`,VE=A.button`
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
`,GE=A.input`
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
`,KE=A.div`
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
`,wm=A.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`,ri=A.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,YE=A.div`
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
`;A.div`
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;const QE=A.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`,qE=A.div`
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
`,Sm=A.button`
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
`,Cm=({handleInputChange:t,inputValue:e})=>g.jsx("div",{children:g.jsx($E,{required:!0,type:"text",value:e,onChange:t})}),XE=A.select`
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
`,JE=({handleSelectChange:t,selectValue:e})=>g.jsxs(XE,{type:"text",required:!0,value:e,onChange:t,children:[g.jsx("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Группа"}),$s.map(n=>g.jsx("option",{value:n,children:n},n))]}),ZE=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`,Em=({handleCheckBoxChange:t,label:e})=>g.jsx("label",{children:g.jsxs(ZE,{children:[g.jsx("div",{children:e}),g.jsx("input",{onChange:t,type:"checkbox"})]})});var kv={exports:{}},ex="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tx=ex,nx=tx;function Tv(){}function Nv(){}Nv.resetWarningCache=Tv;var rx=function(){function t(r,i,s,o,a,l){if(l!==nx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Nv,resetWarningCache:Tv};return n.PropTypes=n,n};kv.exports=rx();var ix=kv.exports;const kr=zd(ix),zh=Ai.memo(({handleChangeTheme:t,theme:e})=>g.jsx(g.Fragment,{children:g.jsxs("label",{className:"switch",children:[g.jsx("input",{onChange:t,type:"checkbox",className:"themeSwitcher",checked:e==="light"}),g.jsx("span",{className:"slider"})]})}));zh.displayName="ThemeSwitcher";zh.propTypes={handleChangeTheme:kr.func,theme:kr.string};const sx=""+new URL("gerb-EUG4mf70.png",import.meta.url).href,ox=""+new URL("inco-Cw7QgD9S.png",import.meta.url).href;function ax(){const t=R.useRef(null),[e,n]=R.useState(null);return R.useEffect(()=>{const r=document.createElement("div");return t.current=r,document.body.appendChild(r),t.current&&n(t.current),()=>{document.body.removeChild(r)}},[]),e}const Vn=({active:t,setActive:e,children:n})=>{const r=()=>{e(!1)},i=ax();return i&&TC.createPortal(g.jsx("div",{className:t?"modal active":"modal",onClick:r,children:g.jsx("div",{className:t?"modal_content active":"modal_content",onClick:s=>s.stopPropagation(),children:n})}),i)};Vn.propTypes={active:kr.bool,setActive:kr.func,children:kr.oneOfType([kr.object,kr.array])};const lx=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,cx=lx?"dark":"light",ux=()=>{const[t,e]=R.useState(localStorage.getItem("app-theme")||cx);return R.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("app-theme",t)},[t]),{theme:t,setTheme:e}};var He=[];for(var eu=0;eu<256;++eu)He.push((eu+256).toString(16).slice(1));function dx(t,e=0){return(He[t[e+0]]+He[t[e+1]]+He[t[e+2]]+He[t[e+3]]+"-"+He[t[e+4]]+He[t[e+5]]+"-"+He[t[e+6]]+He[t[e+7]]+"-"+He[t[e+8]]+He[t[e+9]]+"-"+He[t[e+10]]+He[t[e+11]]+He[t[e+12]]+He[t[e+13]]+He[t[e+14]]+He[t[e+15]]).toLowerCase()}var fa,hx=new Uint8Array(16);function fx(){if(!fa&&(fa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!fa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fa(hx)}var px=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const xm={randomUUID:px};function mx(t,e,n){if(xm.randomUUID&&!e&&!t)return xm.randomUUID();t=t||{};var r=t.random||(t.rng||fx)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,dx(r)}const tu={1:"09.00 - 09.45",2:"09.55 - 10.40",3:"10.50 - 11.35",4:"11.45 - 12.30",5:"12.40 - 13.25",6:"13.35 - 14.20",7:"14.30 - 15.15",8:"15.25 - 16.10",9:"16.20 - 17.05",10:"17.15 - 18.00",11:"18.10 - 18.55"},gx=A.button`
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
`,_x=({handleClick:t,displayName:e,displayNameAlt:n})=>{const[r,i]=R.useState(!1),s=()=>{t(),i(o=>!o)};return g.jsx(gx,{isToggled:r,onClick:s,children:r?e||"Название":n||"Алтернативное название"})},yx=()=>{};var Im={};/**
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
 */const Rv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw rs(e)},rs=function(t){return new Error("Firebase Database ("+Rv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),r.push(n[d],n[u],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new wx;const h=s<<2|a>>4;if(r.push(h),c!==64){const m=a<<4&240|c>>2;if(r.push(m),u!==64){const y=c<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bv=function(t){const e=Pv(t);return Bh.encodeByteArray(e,!0)},pl=function(t){return bv(t).replace(/\./g,"")},ml=function(t){try{return Bh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sx(t){return Av(void 0,t)}function Av(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cx(n)||(t[n]=Av(t[n],e[n]));return t}function Cx(t){return t!=="__proto__"}/**
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
 */function Ex(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xx=()=>Ex().__FIREBASE_DEFAULTS__,Ix=()=>{if(typeof process>"u"||typeof Im>"u")return;const t=Im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ml(t[1]);return e&&JSON.parse(e)},Wh=()=>{try{return yx()||xx()||Ix()||kx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=t=>{var e,n;return(n=(e=Wh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Tx=t=>{const e=Lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dv=()=>{var t;return(t=Wh())==null?void 0:t.config},Ov=t=>{var e;return(e=Wh())==null?void 0:e[`_${t}`]};/**
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
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Nx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),""].join(".")}const Ws={};function Rx(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?t.emulator.push(e):t.prod.push(e);return t}function Px(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let km=!1;function Fv(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Ws[t]===e||Ws[t]||km)return;Ws[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=Rx().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{km=!0,o()},h}function d(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){const h=Px(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),v=n("learnmore"),k=document.getElementById(v)||document.createElement("a"),p=n("preprendIcon"),f=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const _=h.element;a(_),d(k,v);const w=c();l(f,p),_.append(f,y,k,w),document.body.appendChild(_)}s?(y.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function bx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ax(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lx(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uv(){return Rv.NODE_ADMIN===!0}function Dx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ox(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Mx="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mx,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wr(i,a,r)}}function Fx(t,e){return t.replace(jx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jx=/\{\$([^}]+)}/g;/**
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
 */function mo(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
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
 */const $v=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=mo(ml(s[0])||""),n=mo(ml(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ux=function(t){const e=$v(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$x=function(t){const e=$v(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tm(s)&&Tm(o)){if(!Wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tm(t){return t!==null&&typeof t=="object"}/**
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
 */function ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class zx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bx(t,e){const n=new Wx(t,e);return n.subscribe.bind(n)}class Wx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nu),i.error===void 0&&(i.error=nu),i.complete===void 0&&(i.complete=nu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nu(){}function sc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class Gx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ao;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yx(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kx(t){return t===xr?void 0:t}function Yx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const qx={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Xx=le.INFO,Jx={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Zx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=Xx,this._logHandler=Zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const eI=(t,e)=>e.some(n=>t instanceof n);let Nm,Rm;function tI(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return Rm||(Rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zv=new WeakMap,yd=new WeakMap,Bv=new WeakMap,ru=new WeakMap,Gh=new WeakMap;function rI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zv.set(n,t)}).catch(()=>{}),Gh.set(e,t),e}function iI(t){if(yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yd.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sI(t){vd=t(vd)}function oI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(iu(this),e,...n);return Bv.set(r,e.sort?e.sort():[e]),ar(r)}:nI().includes(t)?function(...e){return t.apply(iu(this),e),ar(zv.get(this))}:function(...e){return ar(t.apply(iu(this),e))}}function aI(t){return typeof t=="function"?oI(t):(t instanceof IDBTransaction&&iI(t),eI(t,tI())?new Proxy(t,vd):t)}function ar(t){if(t instanceof IDBRequest)return rI(t);if(ru.has(t))return ru.get(t);const e=aI(t);return e!==t&&(ru.set(t,e),Gh.set(e,t)),e}const iu=t=>Gh.get(t);function lI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ar(o.result),l.oldVersion,l.newVersion,ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cI=["get","getKey","getAll","getAllKeys","count"],uI=["put","add","delete","clear"],su=new Map;function Pm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return su.set(e,s),s}sI(t=>({...t,get:(e,n,r)=>Pm(e,n)||t.get(e,n,r),has:(e,n)=>!!Pm(e,n)||t.has(e,n)}));/**
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
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",bm="0.14.2";/**
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
 */const Pn=new Vh("@firebase/app"),fI="@firebase/app-compat",pI="@firebase/analytics-compat",mI="@firebase/analytics",gI="@firebase/app-check-compat",_I="@firebase/app-check",yI="@firebase/auth",vI="@firebase/auth-compat",wI="@firebase/database",SI="@firebase/data-connect",CI="@firebase/database-compat",EI="@firebase/functions",xI="@firebase/functions-compat",II="@firebase/installations",kI="@firebase/installations-compat",TI="@firebase/messaging",NI="@firebase/messaging-compat",RI="@firebase/performance",PI="@firebase/performance-compat",bI="@firebase/remote-config",AI="@firebase/remote-config-compat",LI="@firebase/storage",DI="@firebase/storage-compat",OI="@firebase/firestore",MI="@firebase/ai",FI="@firebase/firestore-compat",jI="firebase",UI="12.2.0";/**
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
 */const Sd="[DEFAULT]",$I={[wd]:"fire-core",[fI]:"fire-core-compat",[mI]:"fire-analytics",[pI]:"fire-analytics-compat",[_I]:"fire-app-check",[gI]:"fire-app-check-compat",[yI]:"fire-auth",[vI]:"fire-auth-compat",[wI]:"fire-rtdb",[SI]:"fire-data-connect",[CI]:"fire-rtdb-compat",[EI]:"fire-fn",[xI]:"fire-fn-compat",[II]:"fire-iid",[kI]:"fire-iid-compat",[TI]:"fire-fcm",[NI]:"fire-fcm-compat",[RI]:"fire-perf",[PI]:"fire-perf-compat",[bI]:"fire-rc",[AI]:"fire-rc-compat",[LI]:"fire-gcs",[DI]:"fire-gcs-compat",[OI]:"fire-fst",[FI]:"fire-fst-compat",[MI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const _l=new Map,zI=new Map,Cd=new Map;function Am(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gi(t){const e=t.name;if(Cd.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of _l.values())Am(n,t);for(const n of zI.values())Am(n,t);return!0}function Kh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const BI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new Lo("app","Firebase",BI);/**
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
 */class WI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const os=UI;function Wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=Dv()),!n)throw lr.create("no-options");const s=_l.get(i);if(s){if(Wr(n,s.options)&&Wr(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new Qx(i);for(const l of Cd.values())o.addComponent(l);const a=new WI(n,r,o);return _l.set(i,a),a}function Hv(t=Sd){const e=_l.get(t);if(!e&&t===Sd&&Dv())return Wv();if(!e)throw lr.create("no-app",{appName:t});return e}function cr(t,e,n){let r=$I[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(o.join(" "));return}Gi(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const HI="firebase-heartbeat-database",VI=1,go="firebase-heartbeat-store";let ou=null;function Vv(){return ou||(ou=lI(HI,VI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),ou}async function GI(t){try{const n=(await Vv()).transaction(go),r=await n.objectStore(go).get(Gv(t));return await n.done,r}catch(e){if(e instanceof wr)Pn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Lm(t,e){try{const r=(await Vv()).transaction(go,"readwrite");await r.objectStore(go).put(e,Gv(t)),await r.done}catch(n){if(n instanceof wr)Pn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Gv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KI=1024,YI=30;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>YI){const o=JI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dm(),{heartbeatsToSend:r,unsentEntries:i}=qI(this._heartbeatsCache.heartbeats),s=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pn.warn(n),""}}}function Dm(){return new Date().toISOString().substring(0,10)}function qI(t,e=KI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Om(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dx()?Ox().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Om(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}function JI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ZI(t){Gi(new Hr("platform-logger",e=>new dI(e),"PRIVATE")),Gi(new Hr("heartbeat",e=>new QI(e),"PRIVATE")),cr(wd,bm,t),cr(wd,bm,"esm2020"),cr("fire-js","")}ZI("");function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ek=Kv,Yv=new Lo("auth","Firebase",Kv());/**
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
 */const yl=new Vh("@firebase/auth");function tk(t,...e){yl.logLevel<=le.WARN&&yl.warn(`Auth (${os}): ${t}`,...e)}function Da(t,...e){yl.logLevel<=le.ERROR&&yl.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Qh(t,...e)}function Xt(t,...e){return Qh(t,...e)}function Yh(t,e,n){const r={...ek(),[e]:n};return new Lo("auth","Firebase",r).create(e,{appName:t.name})}function Fr(t){return Yh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),Yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yv.create(t,...e)}function z(t,e,...n){if(!t)throw Qh(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function bn(t,e){t||Sn(e)}/**
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
 */function Ed(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function rk(){return Mm()==="http:"||Mm()==="https:"}function Mm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ik(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rk()||Ax()||"connection"in navigator)?navigator.onLine:!0}function sk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hh()||jv()}get(){return ik()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qh(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ak=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lk=new Do(3e4,6e4);function Xh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function as(t,e,n,r,i={}){return qv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ss({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return bx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(c.credentials="include"),Qv.fetch()(await Xv(t,t.config.apiHost,n,a),c)})}async function qv(t,e,n){t._canInitEmulator=!1;const r={...ok,...e};try{const i=new uk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yh(t,d,c);cn(t,d)}}catch(i){if(i instanceof wr)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function ck(t,e,n,r,i={}){const s=await as(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Xv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?qh(t.config,i):`${t.config.apiScheme}://${i}`;return ak.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class uk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),lk.get())})}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function dk(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function vl(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hk(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Jh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(au(i.auth_time)),issuedAtTime:Hs(au(i.iat)),expirationTime:Hs(au(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function au(t){return Number(t)*1e3}function Jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=ml(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fm(t){const e=Jh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&fk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(t){var u;const e=t.auth,n=await t.getIdToken(),r=await _o(t,vl(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?Jv(i.providerUserInfo):[],o=gk(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function mk(t){const e=wt(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function _k(t,e){const n=await qv(t,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Xv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(l.credentials="include"),Qv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yk(t,e){return as(t,"POST","/v2/accounts:revokeToken",Xh(t,e))}/**
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
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _k(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Un(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hk(this,e)}reload(){return mk(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await _o(this,dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:m,providerData:y,stsTokenManager:v}=n;z(u&&v,e,"internal-error");const k=Ti.fromJSON(this.name,v);z(typeof u=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),z(typeof h=="boolean",e,"internal-error"),z(typeof m=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(a,e.name),Un(l,e.name),Un(c,e.name),Un(d,e.name);const p=new Gt({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:k,createdAt:c,lastLoginAt:d});return y&&Array.isArray(y)&&(p.providerData=y.map(f=>({...f}))),l&&(p._redirectEventId=l),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Jv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ti;a.updateFromIdToken(r);const l=new Gt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const jm=new Map;function Cn(t){bn(t instanceof Function,"Expected a class definition");let e=jm.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jm.set(t,e),e)}/**
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
 */class Zv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zv.type="NONE";const Um=Zv;/**
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
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(Cn(Um),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(Um);const o=Oa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const h=await vl(e,{idToken:d}).catch(()=>{});if(!h)break;u=await Gt._fromGetAccountInfoResponse(e,h,d)}else u=Gt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ni(s,e,r))}}/**
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
 */function $m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s0(e))return"Blackberry";if(o0(e))return"Webos";if(t0(e))return"Safari";if((e.includes("chrome/")||n0(e))&&!e.includes("edge/"))return"Chrome";if(i0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function e0(t=ct()){return/firefox\//i.test(t)}function t0(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n0(t=ct()){return/crios\//i.test(t)}function r0(t=ct()){return/iemobile/i.test(t)}function i0(t=ct()){return/android/i.test(t)}function s0(t=ct()){return/blackberry/i.test(t)}function o0(t=ct()){return/webos/i.test(t)}function Zh(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vk(t=ct()){var e;return Zh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wk(){return Lx()&&document.documentMode===10}function a0(t=ct()){return Zh(t)||i0(t)||o0(t)||s0(t)||/windows phone/i.test(t)||r0(t)}/**
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
 */function l0(t,e=[]){let n;switch(t){case"Browser":n=$m(ct());break;case"Worker":n=`${$m(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ck(t,e={}){return as(t,"GET","/v2/passwordPolicy",Xh(t,e))}/**
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
 */const Ek=6;class xk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ek,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ik{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vl(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Fr(this));const n=e?wt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ck(this),n=new xk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ac(t){return wt(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bx(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kk(t){ef=t}function Tk(t){return ef.loadJS(t)}function Nk(){return ef.gapiScript}function Rk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Pk(t,e){const n=Kh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wr(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function bk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ak(t,e,n){const r=ac(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=c0(e),{host:o,port:a}=Lk(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Wr(c,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,is(o)?(Mv(`${s}//${o}${l}`),Fv("Auth",!0)):Dk()}function c0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lk(t){const e=c0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bm(o)}}}function Bm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class u0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function Ri(t,e){return ck(t,"POST","/v1/accounts:signInWithIdp",Xh(t,e))}/**
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
 */const Ok="http://localhost";class Vr extends u0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:Ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
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
 */class tf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oo extends tf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Oo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Oo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=Wm(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wm(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sl extends wr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sl(e,n,r,i)}}function d0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(t,s,e,r):s})}async function Mk(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
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
 */async function Fk(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(Fr(r));const i="reauthenticate";try{const s=await _o(t,d0(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Jh(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
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
 */async function jk(t,e,n=!1){if(Ht(t.app))return Promise.reject(Fr(t));const r="signIn",i=await d0(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Uk(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function $k(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function zk(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function Bk(t){return wt(t).signOut()}const Cl="__sak";/**
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
 */class h0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wk=1e3,Hk=10;class f0 extends h0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}f0.type="LOCAL";const Vk=f0;/**
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
 */class p0 extends h0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}p0.type="SESSION";const m0=p0;/**
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
 */function Gk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Gk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=nf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function Yk(t){ln().location.href=t}/**
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
 */function g0(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Qk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Xk(){return g0()?self:null}/**
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
 */const _0="firebaseLocalStorageDb",Jk=1,El="firebaseLocalStorage",y0="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function Zk(){const t=indexedDB.deleteDatabase(_0);return new Mo(t).toPromise()}function Id(){const t=indexedDB.open(_0,Jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(El,{keyPath:y0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(El)?e(r):(r.close(),await Zk(),e(await Id()))})})}async function Hm(t,e,n){const r=cc(t,!0).put({[y0]:e,value:n});return new Mo(r).toPromise()}async function eT(t,e){const n=cc(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Vm(t,e){const n=cc(t,!0).delete(e);return new Mo(n).toPromise()}const tT=800,nT=3;class v0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return g0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(Xk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Qk(),!this.activeServiceWorker)return;this.sender=new Kk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await Hm(e,Cl,"1"),await Vm(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cc(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v0.type="LOCAL";const rT=v0;new Do(3e4,6e4);/**
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
 */function w0(t,e){return e?Cn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rf extends u0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iT(t){return jk(t.auth,new rf(t),t.bypassAuthState)}function sT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Fk(n,new rf(t),t.bypassAuthState)}async function oT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Mk(n,new rf(t),t.bypassAuthState)}/**
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
 */class S0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iT;case"linkViaPopup":case"linkViaRedirect":return oT;case"reauthViaPopup":case"reauthViaRedirect":return sT;default:cn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aT=new Do(2e3,1e4);async function lT(t,e,n){if(Ht(t.app))return Promise.reject(Xt(t,"operation-not-supported-in-this-environment"));const r=ac(t);nk(t,e,tf);const i=w0(r,n);return new br(r,"signInViaPopup",e,i).executeNotNull()}class br extends S0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aT.get())};e()}}br.currentPopupAction=null;/**
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
 */const cT="pendingRedirect",Ma=new Map;class uT extends S0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await dT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dT(t,e){const n=pT(e),r=fT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hT(t,e){Ma.set(t._key(),e)}function fT(t){return Cn(t._redirectPersistence)}function pT(t){return Oa(cT,t.config.apiKey,t.name)}async function mT(t,e,n=!1){if(Ht(t.app))return Promise.reject(Fr(t));const r=ac(t),i=w0(r,e),o=await new uT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gT=10*60*1e3;class _T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!C0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C0(t);default:return!1}}/**
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
 */async function vT(t,e={}){return as(t,"GET","/v1/projects",e)}/**
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
 */const wT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ST=/^https?/;async function CT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vT(t);for(const n of e)try{if(ET(n))return}catch{}cn(t,"unauthorized-domain")}function ET(t){const e=Ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ST.test(n))return!1;if(wT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xT=new Do(3e4,6e4);function Km(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IT(t){return new Promise((e,n)=>{var i,s,o;function r(){Km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(Xt(t,"network-request-failed"))},timeout:xT.get()})}if((s=(i=ln().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const a=Rk("iframefcb");return ln()[a]=()=>{gapi.load?r():n(Xt(t,"network-request-failed"))},Tk(`${Nk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function kT(t){return Fa=Fa||IT(t),Fa}/**
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
 */const TT=new Do(5e3,15e3),NT="__/auth/iframe",RT="emulator/auth/iframe",PT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qh(e,RT):`https://${t.config.authDomain}/${NT}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=bT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ss(r).slice(1)}`}async function LT(t){const e=await kT(t),n=ln().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:AT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},TT.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const DT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OT=500,MT=600,FT="_blank",jT="http://localhost";class Ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UT(t,e,n,r=OT,i=MT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...DT,width:r.toString(),height:i.toString(),top:s,left:o},c=ct().toLowerCase();n&&(a=n0(c)?FT:n),e0(c)&&(e=e||jT,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(vk(c)&&a!=="_self")return $T(e||"",a),new Ym(null);const u=window.open(e||"",a,d);z(u,t,"popup-blocked");try{u.focus()}catch{}return new Ym(u)}function $T(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zT="__/auth/handler",BT="emulator/auth/handler",WT=encodeURIComponent("fac");async function Qm(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof tf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_d(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Oo){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${WT}=${encodeURIComponent(l)}`:"";return`${HT(t)}?${ss(a).slice(1)}${c}`}function HT({config:t}){return t.emulator?qh(t,BT):`https://${t.authDomain}/${zT}`}/**
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
 */const lu="webStorageSupport";class VT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m0,this._completeRedirectFn=mT,this._overrideRedirectResult=hT}async _openPopup(e,n,r,i){var o;bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Qm(e,n,r,Ed(),i);return UT(e,s,nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qm(e,n,r,Ed(),i);return Yk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LT(e),r=new _T(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lu,{type:lu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[lu];s!==void 0&&n(!!s),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a0()||t0()||Zh()}}const GT=VT;var qm="@firebase/auth",Xm="1.11.0";/**
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
 */class KT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QT(t){Gi(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(t)},c=new Ik(r,i,s,l);return bk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gi(new Hr("auth-internal",e=>{const n=ac(e.getProvider("auth").getImmediate());return(r=>new KT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(qm,Xm,YT(t)),cr(qm,Xm,"esm2020")}/**
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
 */const qT=5*60,XT=Ov("authIdTokenMaxAge")||qT;let Jm=null;const JT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XT)return;const i=n==null?void 0:n.token;Jm!==i&&(Jm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E0(t=Hv()){const e=Kh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pk(t,{popupRedirectResolver:GT,persistence:[rT,Vk,m0]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JT(s.toString());$k(n,o,()=>o(n.currentUser)),Uk(n,a=>o(a))}}const i=Lv("auth");return i&&Ak(n,`http://${i}`),n}function ZT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}kk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ZT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QT("Browser");/*! *****************************************************************************
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
***************************************************************************** */function eN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{c(r.next(d))}catch(u){o(u)}}function l(d){try{c(r.throw(d))}catch(u){o(u)}}function c(d){d.done?s(d.value):i(d.value).then(a,l)}c((r=r.apply(t,[])).next())})}function tN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var vi=function(){return vi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vi.apply(this,arguments)},x0=function(t){return{loading:t==null,value:t}},nN=function(){return function(t,e){switch(e.type){case"error":return vi(vi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return x0(e.defaultValue);case"value":return vi(vi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},rN=function(t){var e=t?t():void 0,n=R.useReducer(nN(),x0(e)),r=n[0],i=n[1],s=R.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=R.useCallback(function(l){i({type:"error",error:l})},[]),a=R.useCallback(function(l){i({type:"value",value:l})},[]);return R.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},iN=function(t,e){var n=rN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return R.useEffect(function(){var l=zk(t,function(c){return eN(void 0,void 0,void 0,function(){var d;return tN(this,function(u){switch(u.label){case 0:return[3,4];case 1:return u.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return u.sent(),[3,4];case 3:return d=u.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},sN="firebase",oN="12.2.1";/**
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
 */cr(sN,oN,"app");var Zm={};const eg="@firebase/database",tg="1.1.0";/**
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
 */let I0="";function aN(t){I0=t}/**
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
 */class lN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class cN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const k0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lN(e)}}catch{}return new cN},Ar=k0("localStorage"),uN=k0("sessionStorage");/**
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
 */const Pi=new Vh("@firebase/database"),dN=function(){let t=1;return function(){return t++}}(),T0=function(t){const e=Vx(t),n=new zx;n.update(e);const r=n.digest();return Bh.encodeByteArray(r)},Fo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fo.apply(null,r):typeof r=="object"?e+=Ae(r):e+=r,e+=" "}return e};let Vs=null,ng=!0;const hN=function(t,e){T(!e,"Can't turn on custom loggers persistently."),Pi.logLevel=le.VERBOSE,Vs=Pi.log.bind(Pi)},Ke=function(...t){if(ng===!0&&(ng=!1,Vs===null&&uN.get("logging_enabled")===!0&&hN()),Vs){const e=Fo.apply(null,t);Vs(e)}},jo=function(t){return function(...e){Ke(t,...e)}},kd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fo(...t);Pi.error(e)},An=function(...t){const e=`FIREBASE FATAL ERROR: ${Fo(...t)}`;throw Pi.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+Fo(...t);Pi.warn(e)},fN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",Gr="[MAX_NAME]",Xr=function(t,e){if(t===e)return 0;if(t===Yi||e===Gr)return-1;if(e===Yi||t===Gr)return 1;{const n=rg(t),r=rg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mN=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},of=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ae(e[r]),n+=":",n+=of(t[e[r]]);return n+="}",n},N0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const R0=function(t){T(!sf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},gN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_N=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const vN=new RegExp("^-?(0*)\\d{1,10}$"),wN=-2147483648,SN=2147483647,rg=function(t){if(vN.test(t)){const e=Number(t);if(e>=wN&&e<=SN)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},CN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class EN{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class ja{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ja.OWNER="owner";/**
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
 */const af="5",P0="v",b0="s",A0="r",L0="f",D0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,O0="ls",M0="p",Td="ac",F0="websocket",j0="long_polling";/**
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
 */class U0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $0(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===F0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IN(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class kN{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sx(this.counters_)}}/**
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
 */const cu={},uu={};function lf(t){const e=t.toString();return cu[e]||(cu[e]=new kN),cu[e]}function TN(t,e){const n=t.toString();return uu[n]||(uu[n]=e()),uu[n]}/**
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
 */class NN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ig="start",RN="close",PN="pLPCommand",bN="pRTLPCB",z0="id",B0="pw",W0="ser",AN="cb",LN="seg",DN="ts",ON="d",MN="dframe",H0=1870,V0=30,FN=H0-V0,jN=25e3,UN=3e4;class wi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jo(e),this.stats_=lf(n),this.urlFn=l=>(this.appCheckToken&&(l[Td]=this.appCheckToken),$0(n,j0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UN)),pN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ig)this.id=a,this.password=l;else if(o===RN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ig]="t",r[W0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[P0]=af,this.transportSessionId&&(r[b0]=this.transportSessionId),this.lastSessionId&&(r[O0]=this.lastSessionId),this.applicationId&&(r[M0]=this.applicationId),this.appCheckToken&&(r[Td]=this.appCheckToken),typeof location<"u"&&location.hostname&&D0.test(location.hostname)&&(r[A0]=L0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wi.forceAllow_=!0}static forceDisallow(){wi.forceDisallow_=!0}static isAvailable(){return wi.forceAllow_?!0:!wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gN()&&!_N()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bv(n),i=N0(r,FN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[MN]="t",r[z0]=e,r[B0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dN(),window[PN+this.uniqueCallbackIdentifier]=e,window[bN+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[z0]=this.myID,e[B0]=this.myPW,e[W0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V0+r.length<=H0;){const o=this.pendingSegs.shift();r=r+"&"+LN+i+"="+o.seg+"&"+DN+i+"="+o.ts+"&"+ON+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const $N=16384,zN=45e3;let xl=null;typeof MozWebSocket<"u"?xl=MozWebSocket:typeof WebSocket<"u"&&(xl=WebSocket);class Vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jo(this.connId),this.stats_=lf(n),this.connURL=Vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[P0]=af,typeof location<"u"&&location.hostname&&D0.test(location.hostname)&&(o[A0]=L0),n&&(o[b0]=n),r&&(o[O0]=r),i&&(o[Td]=i),s&&(o[M0]=s),$0(e,F0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ar.set("previous_websocket_failure",!0);try{let r;Uv(),this.mySock=new xl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xl!==null&&!Vt.forceDisallow_}static previouslyFailed(){return Ar.isInMemoryStorage||Ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=N0(n,$N);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
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
 */class yo{static get ALL_TRANSPORTS(){return[wi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Vt&&Vt.isAvailable();let r=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Vt];else{const i=this.transports_=[];for(const s of yo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
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
 */const BN=6e4,WN=5e3,HN=10*1024,VN=100*1024,du="t",sg="d",GN="s",og="r",KN="e",ag="o",lg="a",cg="n",ug="p",YN="h";class QN{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jo("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(du in e){const n=e[du];n===lg?this.upgradeIfSecondaryHealthy_():n===og?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ag&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ug,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(du,e);if(sg in e){const r=e[sg];if(n===YN){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GN?this.onConnectionShutdown_(r):n===og?this.onReset_(r):n===KN?kd("Server Error: "+r):n===ag?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ug,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class G0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class K0{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Il extends K0{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dg=32,hg=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new ce("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pr(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function uf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Y0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return ot(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function XN(t,e){const n=vo(t,0),r=vo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Xr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function df(t,e){if(pr(t)!==pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pr(t)>pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JN{constructor(e,n){this.errorPrefix_=n,this.parts_=vo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=oc(this.parts_[r]);Q0(this)}}function ZN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oc(e),Q0(t)}function eR(t){const e=t.parts_.pop();t.byteLength_-=oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Q0(t){if(t.byteLength_>hg)throw new Error(t.errorPrefix_+"has a key path longer than "+hg+" bytes ("+t.byteLength_+").");if(t.parts_.length>dg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dg+") or object contains a cycle "+Ir(t))}function Ir(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hf extends K0{static getInstance(){return new hf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Cs=1e3,tR=60*5*1e3,fg=30*1e3,nR=1.3,rR=3e4,iR="server_kill",pg=3;class In extends G0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=In.nextPersistentConnectionId_++,this.log_=jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=tR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Uv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ae(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ao,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;In.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const r=Vi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$x(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ux(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kd("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rR&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+In.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new QN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{lt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(iR)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&lt(u),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_d(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>of(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pg&&(this.reconnectDelay_=fg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+I0.replace(/\./g,"-")]=1,Hh()?e["framework.cordova"]=1:jv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return _d(this.interruptReasons_)&&e}}In.nextPersistentConnectionId_=0;In.nextConnectionId_=0;/**
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
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
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
 */class uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(Yi,e),i=new Y(Yi,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
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
 */let ma;class q0 extends uc{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return Xr(e.name,n.name)}isDefinedOn(e){throw rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Gr,ma)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ma)}toString(){return".key"}}const bi=new q0;/**
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
 */class ga{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class sR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new sR;/**
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
 */function oR(t,e){return Xr(t.name,e.name)}function ff(t,e){return Xr(t,e)}/**
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
 */let Nd;function aR(t){Nd=t}const X0=function(t){return typeof t=="number"?"number:"+R0(t):"string:"+t},J0=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else T(t===Nd||t.isEmpty(),"priority of unexpected type.");T(t===Nd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mg;class Me{static set __childrenNodeConstructor(e){mg=e}static get __childrenNodeConstructor(){return mg}constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),J0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+X0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=R0(this.value_):e+=this.value_,this.lazyHash_=T0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Z0,e1;function lR(t){Z0=t}function cR(t){e1=t}class uR extends uc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Gr,new Me("[PRIORITY-POST]",e1))}makePost(e,n){const r=Z0(e);return new Y(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ke=new uR;/**
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
 */const dR=Math.log(2);class hR{constructor(e){const n=s=>parseInt(Math.log(s)/dR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new Ue(h,u.node,Ue.BLACK,null,null);{const m=parseInt(d/2,10)+l,y=i(l,m),v=i(m+1,c);return u=t[m],h=n?n(u):u,new Ue(h,u.node,Ue.BLACK,y,v)}},s=function(l){let c=null,d=null,u=t.length;const h=function(y,v){const k=u-y,p=u;u-=y;const f=i(k+1,p),_=t[k],w=n?n(_):_;m(new Ue(w,_.node,v,null,f))},m=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));v?h(k,Ue.BLACK):(h(k,Ue.BLACK),h(k,Ue.RED))}return d},o=new hR(t.length),a=s(o);return new gt(r||e,a)};/**
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
 */let hu;const ii={};class En{static get Default(){return T(ii&&ke,"ChildrenNode.ts has not been loaded"),hu=hu||new En({".priority":ii},{".priority":ke}),hu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){T(e!==bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=kl(r,e.getCompare()):a=ii;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new En(d,c)}addToIndexes(e,n){const r=gl(this.indexes_,(i,s)=>{const o=Vi(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kl(a,o.getCompare())}else return ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=gl(this.indexes_,i=>{if(i===ii)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
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
 */let Es;class j{static get EMPTY_NODE(){return Es||(Es=new j(new gt(ff),null,En.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&J0(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{T(K(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(de(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ke,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+X0(this.getPriority().val())+":"),this.forEachChild(ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":T0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uo?-1:0}withIndex(e){if(e===bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ke),i=n.getIterator(ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bi?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fR extends j{constructor(){super(new gt(ff),j.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Uo=new fR;Object.defineProperties(Y,{MIN:{value:new Y(Yi,j.EMPTY_NODE)},MAX:{value:new Y(Gr,Uo)}});q0.__EMPTY_NODE=j.EMPTY_NODE;Me.__childrenNodeConstructor=j;aR(Uo);cR(Uo);/**
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
 */const pR=!0;function be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,be(e))}if(!(t instanceof Array)&&pR){const n=[];let r=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=kl(n,oR,o=>o.name,ff);if(r){const o=kl(n,ke.getCompare());return new j(s,be(e),new En({".priority":o},{".priority":ke}))}else return new j(s,be(e),En.Default)}else{let n=j.EMPTY_NODE;return qe(t,(r,i)=>{if(un(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}lR(be);/**
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
 */class mR extends uc{constructor(e){super(),this.indexPath_=e,T(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}makePost(e,n){const r=be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Uo);return new Y(Gr,e)}toString(){return vo(this.indexPath_,0).join("/")}}/**
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
 */class gR extends uc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=be(e);return new Y(n,r)}toString(){return".value"}}const _R=new gR;/**
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
 */function t1(t){return{type:"value",snapshotNode:t}}function Qi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function So(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(wo(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qi(n,r)):o.trackChildChange(So(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ke,(i,s)=>{n.hasChild(i)||r.trackChildChange(wo(i,s))}),n.isLeafNode()||n.forEachChild(ke,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(So(i,s,o))}else r.trackChildChange(Qi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Co{constructor(e){this.indexedFilter_=new pf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Co.getStartPost_(e),this.endPost_=Co.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(ke,(o,a)=>{s.matches(new Y(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,m)=>u(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(So(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(wo(n,u));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Qi(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(wo(c.name,c.node)),s.trackChildChange(Qi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class mf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new mf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wR(t){return t.loadsAllData()?new pf(t.getIndex()):t.hasLimit()?new vR(t):new Co(t)}function gg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===_R?n="$value":t.index_===bi?n="$key":(T(t.index_ instanceof mR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _g(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
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
 */class Tl extends G0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=jo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Tl.getListenId_(e,r),a={};this.listens_[o]=a;const l=gg(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Vi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=gg(e._queryParams),r=e._path.toString(),i=new Ao;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ss(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mo(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SR{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Nl(){return{value:null,children:new Map}}function n1(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Nl());const i=t.children.get(r);e=de(e),n1(i,e,n)}}function Rd(t,e,n){t.value!==null?n(e,t.value):CR(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);Rd(i,s,n)})}function CR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class ER{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const yg=10*1e3,xR=30*1e3,IR=5*60*1e3;class kR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ER(e);const r=yg+(xR-yg)*Math.random();Gs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&un(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*IR))}}/**
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
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function gf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _f(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Kt.ACK_USER_WRITE,this.source=gf()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new Rl(ne(),n,this.revert)}}else return T(K(this.path)===e,"operationForChild called for unrelated child."),new Rl(de(this.path),this.affectedTree,this.revert)}}/**
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
 */class Eo{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Eo(this.source,ne()):new Eo(this.source,de(this.path))}}/**
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
 */class Kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Kt.OVERWRITE}operationForChild(e){return Q(this.path)?new Kr(this.source,ne(),this.snap.getImmediateChild(e)):new Kr(this.source,de(this.path),this.snap)}}/**
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
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Kt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Kr(this.source,ne(),n.value):new qi(this.source,ne(),n)}else return T(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yR(o.childName,o.snapshotNode))}),xs(t,i,"child_removed",e,r,n),xs(t,i,"child_added",e,r,n),xs(t,i,"child_moved",s,r,n),xs(t,i,"child_changed",e,r,n),xs(t,i,"value",e,r,n),i}function xs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>PR(t,a,l)),o.forEach(a=>{const l=RR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function RR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PR(t,e,n){if(e.childName==null||n.childName==null)throw rs("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function dc(t,e){return{eventCache:t,serverCache:e}}function Ks(t,e,n,r){return dc(new mr(e,n,r),t.serverCache)}function r1(t,e,n,r){return dc(t.eventCache,new mr(e,n,r))}function Pl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let fu;const bR=()=>(fu||(fu=new gt(mN)),fu);class ue{static fromObject(e){let n=new ue(null);return qe(e,(r,i)=>{n=n.set(new ce(r),i)}),n}constructor(e,n=bR()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(Q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(de(e),n);return s!=null?{path:Ie(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(de(e)):new ue(null)}}set(e,n){if(Q(e))return new ue(n,this.children);{const r=K(e),s=(this.children.get(r)||new ue(null)).set(de(e),n),o=this.children.insert(r,s);return new ue(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(de(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ue(null):new ue(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(de(e)):null}}setTree(e,n){if(Q(e))return n;{const r=K(e),s=(this.children.get(r)||new ue(null)).setTree(de(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ue(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(de(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(de(e),Ie(n,i),r):new ue(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new ue(null))}}function Ys(t,e,n){if(Q(e))return new Jt(new ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new Jt(t.writeTree_.set(i,s))}else{const i=new ue(n),s=t.writeTree_.setTree(e,i);return new Jt(s)}}}function Pd(t,e,n){let r=t;return qe(n,(i,s)=>{r=Ys(r,Ie(e,i),s)}),r}function vg(t,e){if(Q(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Jt(n)}}function bd(t,e){return Jr(t,e)!=null}function Jr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function wg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function ur(t,e){if(Q(e))return t;{const n=Jr(t,e);return n!=null?new Jt(new ue(n)):new Jt(t.writeTree_.subtree(e))}}function Ad(t){return t.writeTree_.isEmpty()}function Xi(t,e){return i1(ne(),t.writeTree_,e)}function i1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=i1(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
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
 */function hc(t,e){return l1(e,t)}function AR(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ys(t.visibleWrites,e,n)),t.lastWriteId=r}function LR(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Pd(t.visibleWrites,e,n),t.lastWriteId=r}function DR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MR(a,r.path)?i=!1:Lt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return FR(t),!0;if(r.snap)t.visibleWrites=vg(t.visibleWrites,r.path);else{const a=r.children;qe(a,l=>{t.visibleWrites=vg(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function MR(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(Ie(t.path,n),e))return!0;return!1}function FR(t){t.visibleWrites=s1(t.allWrites,jR,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jR(t){return t.visible}function s1(t,e,n){let r=Jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Lt(n,o)?(a=ot(n,o),r=Ys(r,a,s.snap)):Lt(o,n)&&(a=ot(o,n),r=Ys(r,ne(),s.snap.getChild(a)));else if(s.children){if(Lt(n,o))a=ot(n,o),r=Pd(r,a,s.children);else if(Lt(o,n))if(a=ot(o,n),Q(a))r=Pd(r,ne(),s.children);else{const l=Vi(s.children,K(a));if(l){const c=l.getChild(de(a));r=Ys(r,ne(),c)}}}else throw rs("WriteRecord should have .snap or .children")}}return r}function o1(t,e,n,r,i){if(!r&&!i){const s=Jr(t.visibleWrites,e);if(s!=null)return s;{const o=ur(t.visibleWrites,e);if(Ad(o))return n;if(n==null&&!bd(o,ne()))return null;{const a=n||j.EMPTY_NODE;return Xi(o,a)}}}else{const s=ur(t.visibleWrites,e);if(!i&&Ad(s))return n;if(!i&&n==null&&!bd(s,ne()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Lt(c.path,e)||Lt(e,c.path))},a=s1(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Xi(a,l)}}}function UR(t,e,n){let r=j.EMPTY_NODE;const i=Jr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ur(t.visibleWrites,e);return n.forEachChild(ke,(o,a)=>{const l=Xi(ur(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),wg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(t.visibleWrites,e);return wg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $R(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(bd(t.visibleWrites,s))return null;{const o=ur(t.visibleWrites,s);return Ad(o)?i.getChild(n):Xi(o,i.getChild(n))}}function zR(t,e,n,r){const i=Ie(e,n),s=Jr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ur(t.visibleWrites,i);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function BR(t,e){return Jr(t.visibleWrites,e)}function WR(t,e,n,r,i,s,o){let a;const l=ur(t.visibleWrites,e),c=Jr(l,ne());if(c!=null)a=c;else if(n!=null)a=Xi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=h.getNext();for(;m&&d.length<i;)u(m,r)!==0&&d.push(m),m=h.getNext();return d}else return[]}function HR(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function bl(t,e,n,r){return o1(t.writeTree,t.treePath,e,n,r)}function vf(t,e){return UR(t.writeTree,t.treePath,e)}function Sg(t,e,n,r){return $R(t.writeTree,t.treePath,e,n,r)}function Al(t,e){return BR(t.writeTree,Ie(t.treePath,e))}function VR(t,e,n,r,i,s){return WR(t.writeTree,t.treePath,e,n,r,i,s)}function wf(t,e,n){return zR(t.writeTree,t.treePath,e,n)}function a1(t,e){return l1(Ie(t.treePath,e),t.writeTree)}function l1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class GR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,So(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,wo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,So(r,e.snapshotNode,i.oldSnap));else throw rs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const c1=new KR;class Sf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yr(this.viewCache_),s=VR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function YR(t){return{filter:t}}function QR(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qR(t,e,n,r,i){const s=new GR;let o,a;if(n.type===Kt.OVERWRITE){const c=n;c.source.fromUser?o=Ld(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Ll(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Kt.MERGE){const c=n;c.source.fromUser?o=JR(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Dd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Kt.ACK_USER_WRITE){const c=n;c.revert?o=tP(t,e,c.path,r,i,s):o=ZR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Kt.LISTEN_COMPLETE)o=eP(t,e,n.path,r,s);else throw rs("Unknown operation type: "+n.type);const l=s.getChanges();return XR(e,o,l),{viewCache:o,changes:l}}function XR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Pl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(t1(Pl(e)))}}function u1(t,e,n,r,i,s){const o=e.eventCache;if(Al(r,n)!=null)return e;{let a,l;if(Q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yr(e),d=c instanceof j?c:j.EMPTY_NODE,u=vf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=bl(r,Yr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){T(pr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Sg(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=de(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Sg(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=wf(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Ks(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Ll(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=K(n);if(!l.isCompleteForPath(n)&&pr(n)>1)return e;const y=de(n),k=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?c=d.updatePriority(l.getNode(),k):c=d.updateChild(l.getNode(),m,k,y,c1,null)}const u=r1(e,c,l.isFullyInitialized()||Q(n),d.filtersNodes()),h=new Sf(i,u,s);return u1(t,u,n,i,h,a)}function Ld(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Sf(i,e,s);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ks(e,c,!0,t.filter.filtersNodes());else{const u=K(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ks(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=de(n),m=a.getNode().getImmediateChild(u);let y;if(Q(h))y=r;else{const v=d.getCompleteChild(u);v!=null?uf(h)===".priority"&&v.getChild(Y0(h)).isEmpty()?y=v:y=v.updateChild(h,r):y=j.EMPTY_NODE}if(m.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),u,y,h,d,o);l=Ks(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cg(t,e){return t.eventCache.isCompleteForChild(e)}function JR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ie(n,l);Cg(e,K(d))&&(a=Ld(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ie(n,l);Cg(e,K(d))||(a=Ld(t,a,d,c,i,s,o))}),a}function Eg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Dd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=r:c=new ue(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),y=Eg(t,m,h);l=Ll(t,l,new ce(u),y,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const m=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!m){const y=e.serverCache.getNode().getImmediateChild(u),v=Eg(t,y,h);l=Ll(t,l,new ce(u),v,i,s,o,a)}}),l}function ZR(t,e,n,r,i,s,o){if(Al(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ll(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let c=new ue(null);return l.getNode().forEachChild(bi,(d,u)=>{c=c.set(new ce(d),u)}),Dd(t,e,n,c,i,s,a,o)}else return e}else{let c=new ue(null);return r.foreach((d,u)=>{const h=Ie(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Dd(t,e,n,c,i,s,a,o)}}function eP(t,e,n,r,i){const s=e.serverCache,o=r1(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return u1(t,o,n,r,c1,i)}function tP(t,e,n,r,i,s){let o;if(Al(r,n)!=null)return e;{const a=new Sf(r,e,i),l=e.eventCache.getNode();let c;if(Q(n)||K(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=bl(r,Yr(e));else{const u=e.serverCache.getNode();T(u instanceof j,"serverChildren would be complete if leaf node"),d=vf(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=K(n);let u=wf(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,de(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,j.EMPTY_NODE,de(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bl(r,Yr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Al(r,ne())!=null,Ks(e,c,o,t.filter.filtersNodes())}}/**
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
 */class nP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new pf(r.getIndex()),s=wR(r);this.processor_=YR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new mr(l,o.isFullyInitialized(),i.filtersNodes()),u=new mr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=dc(u,d),this.eventGenerator_=new TR(this.query_)}get query(){return this.query_}}function rP(t){return t.viewCache_.serverCache.getNode()}function iP(t){return Pl(t.viewCache_)}function sP(t,e){const n=Yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function xg(t){return t.eventRegistrations_.length===0}function oP(t,e){t.eventRegistrations_.push(e)}function Ig(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function kg(t,e,n,r){e.type===Kt.MERGE&&e.source.queryId!==null&&(T(Yr(t.viewCache_),"We should always have a full cache before handling merges"),T(Pl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qR(t.processor_,i,e,n,r);return QR(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,d1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function aP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(s,o)=>{r.push(Qi(s,o))}),n.isFullyInitialized()&&r.push(t1(n.getNode())),d1(t,r,n.getNode(),e)}function d1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return NR(t.eventGenerator_,e,n,i)}/**
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
 */let Dl;class h1{constructor(){this.views=new Map}}function lP(t){T(!Dl,"__referenceConstructor has already been defined"),Dl=t}function cP(){return T(Dl,"Reference.ts has not been loaded"),Dl}function uP(t){return t.views.size===0}function Cf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),kg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(kg(o,e,n,r));return s}}function f1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=bl(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=vf(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=dc(new mr(a,l,!1),new mr(r,i,!1));return new nP(e,c)}return o}function dP(t,e,n,r,i,s){const o=f1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oP(o,n),aP(o,n)}function hP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=gr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ig(c,n,r)),xg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ig(l,n,r)),xg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!gr(t)&&s.push(new(cP())(e._repo,e._path)),{removed:s,events:o}}function p1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dr(t,e){let n=null;for(const r of t.views.values())n=n||sP(r,e);return n}function m1(t,e){if(e._queryParams.loadsAllData())return fc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function g1(t,e){return m1(t,e)!=null}function gr(t){return fc(t)!=null}function fc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ol;function fP(t){T(!Ol,"__referenceConstructor has already been defined"),Ol=t}function pP(){return T(Ol,"Reference.ts has not been loaded"),Ol}let mP=1;class Tg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=HR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _1(t,e,n,r,i){return AR(t.pendingWriteTree_,e,n,r,i),i?cs(t,new Kr(gf(),e,n)):[]}function gP(t,e,n,r){LR(t.pendingWriteTree_,e,n,r);const i=ue.fromObject(n);return cs(t,new qi(gf(),e,i))}function Xn(t,e,n=!1){const r=DR(t.pendingWriteTree_,e);if(OR(t.pendingWriteTree_,e)){let s=new ue(null);return r.snap!=null?s=s.set(ne(),!0):qe(r.children,o=>{s=s.set(new ce(o),!0)}),cs(t,new Rl(r.path,s,n))}else return[]}function $o(t,e,n){return cs(t,new Kr(_f(),e,n))}function _P(t,e,n){const r=ue.fromObject(n);return cs(t,new qi(_f(),e,r))}function yP(t,e){return cs(t,new Eo(_f(),e))}function vP(t,e,n){const r=xf(t,n);if(r){const i=If(r),s=i.path,o=i.queryId,a=ot(s,e),l=new Eo(yf(o),a);return kf(t,s,l)}else return[]}function Ml(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||g1(o,e))){const l=hP(o,e,n,r);uP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,m)=>gr(m));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=CP(h);for(let y=0;y<m.length;++y){const v=m[y],k=v.query,p=S1(t,v);t.listenProvider_.startListening(Qs(k),xo(t,k),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Qs(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(pc(h));t.listenProvider_.stopListening(Qs(h),m)}))}EP(t,c)}return a}function y1(t,e,n,r){const i=xf(t,r);if(i!=null){const s=If(i),o=s.path,a=s.queryId,l=ot(o,e),c=new Kr(yf(a),l,n);return kf(t,o,c)}else return[]}function wP(t,e,n,r){const i=xf(t,r);if(i){const s=If(i),o=s.path,a=s.queryId,l=ot(o,e),c=ue.fromObject(n),d=new qi(yf(a),l,c);return kf(t,o,d)}else return[]}function Od(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const y=ot(h,i);s=s||dr(m,y),o=o||gr(m)});let a=t.syncPointTree_.get(i);a?(o=o||gr(a),s=s||dr(a,ne())):(a=new h1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const v=dr(y,ne());v&&(s=s.updateImmediateChild(m,v))}));const c=g1(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=pc(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=xP();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const d=hc(t.pendingWriteTree_,i);let u=dP(a,e,n,d,s,l);if(!c&&!o&&!r){const h=m1(a,e);u=u.concat(IP(t,e,h))}return u}function Ef(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=dr(a,l);if(c)return c});return o1(i,e,s,n,!0)}function SP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=ot(c,n);r=r||dr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||dr(i,ne()):(i=new h1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new mr(r,!0,!1):null,a=hc(t.pendingWriteTree_,e._path),l=f1(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return iP(l)}function cs(t,e){return v1(e,t.syncPointTree_,null,hc(t.pendingWriteTree_,ne()))}function v1(t,e,n,r){if(Q(t.path))return w1(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=dr(i,ne()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=a1(r,o);s=s.concat(v1(a,l,c,d))}return i&&(s=s.concat(Cf(i,t,r,n))),s}}function w1(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=dr(i,ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=a1(r,o),d=t.operationForChild(o);d&&(s=s.concat(w1(d,a,l,c)))}),i&&(s=s.concat(Cf(i,t,r,n))),s}function S1(t,e){const n=e.query,r=xo(t,n);return{hashFn:()=>(rP(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vP(t,n._path,r):yP(t,n._path);{const s=yN(i,n);return Ml(t,n,null,s)}}}}function xo(t,e){const n=pc(e);return t.queryToTagMap.get(n)}function pc(t){return t._path.toString()+"$"+t._queryIdentifier}function xf(t,e){return t.tagToQueryMap.get(e)}function If(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function kf(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=hc(t.pendingWriteTree_,e);return Cf(r,n,i,null)}function CP(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[fc(n)];{let i=[];return n&&(i=p1(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pP())(t._repo,t._path):t}function EP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xP(){return mP++}function IP(t,e,n){const r=e._path,i=xo(t,e),s=S1(t,n),o=t.listenProvider_.startListening(Qs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!Q(c)&&d&&gr(d))return[fc(d).query];{let h=[];return d&&(h=h.concat(p1(d).map(m=>m.query))),qe(u,(m,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Qs(d),xo(t,d))}}return o}/**
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
 */class Tf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tf(n)}node(){return this.node_}}class Nf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Nf(this.syncTree_,n)}node(){return Ef(this.syncTree_,this.path_)}}const kP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ng=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NP(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},NP=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},C1=function(t,e,n,r){return Rf(e,new Nf(n,t),r)},E1=function(t,e,n){return Rf(t,new Tf(e),n)};function Rf(t,e,n){const r=t.getPriority().val(),i=Ng(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ng(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(ke,(a,l)=>{const c=Rf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Pf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bf(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=K(n);for(;i!==null;){const s=Vi(r.node.children,i)||{children:{},childCount:0};r=new Pf(i,r,s),n=de(n),i=K(n)}return r}function us(t){return t.node.value}function x1(t,e){t.node.value=e,Md(t)}function I1(t){return t.node.childCount>0}function RP(t){return us(t)===void 0&&!I1(t)}function mc(t,e){qe(t.node.children,(n,r)=>{e(new Pf(n,t,r))})}function k1(t,e,n,r){n&&!r&&e(t),mc(t,i=>{k1(i,e,!0,r)}),n&&r&&e(t)}function PP(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zo(t){return new ce(t.parent===null?t.name:zo(t.parent)+"/"+t.name)}function Md(t){t.parent!==null&&bP(t.parent,t.name,t)}function bP(t,e,n){const r=RP(n),i=un(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Md(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Md(t))}/**
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
 */const AP=/[\[\].#$\/\u0000-\u001F\u007F]/,LP=/[\[\].#$\u0000-\u001F\u007F]/,pu=10*1024*1024,Af=function(t){return typeof t=="string"&&t.length!==0&&!AP.test(t)},T1=function(t){return typeof t=="string"&&t.length!==0&&!LP.test(t)},DP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T1(t)},OP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!sf(t)||t&&typeof t=="object"&&un(t,".sv")},MP=function(t,e,n,r){gc(sc(t,"value"),e,n)},gc=function(t,e,n){const r=n instanceof ce?new JN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ir(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ir(r)+" with contents = "+e.toString());if(sf(e))throw new Error(t+"contains "+e.toString()+" "+Ir(r));if(typeof e=="string"&&e.length>pu/3&&oc(e)>pu)throw new Error(t+"contains a string greater than "+pu+" utf8 bytes "+Ir(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Af(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ir(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZN(r,o),gc(t,a,r),eR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ir(r)+" in addition to actual children.")}},FP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=vo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Af(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jP=function(t,e,n,r){const i=sc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];qe(e,(o,a)=>{const l=new ce(o);if(gc(i,a,Ie(n,l)),uf(l)===".priority"&&!OP(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FP(i,s)},N1=function(t,e,n,r){if(!T1(n))throw new Error(sc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N1(t,e,n)},R1=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$P=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Af(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DP(n))throw new Error(sc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _c(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!df(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function P1(t,e,n){_c(t,n),b1(t,r=>df(r,e))}function jt(t,e,n){_c(t,n),b1(t,r=>Lt(r,e)||Lt(e,r))}function b1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vs&&Ke("event: "+n.toString()),ls(r)}}}/**
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
 */const WP="repo_interrupt",HP=25;class VP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new Pf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GP(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||CN())t.server_=new Tl(t.repoInfo_,(r,i,s,o)=>{Rg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Pg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new In(t.repoInfo_,e,(r,i,s,o)=>{Rg(t,r,i,s,o)},r=>{Pg(t,r)},r=>{YP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=TN(t.repoInfo_,()=>new kR(t.stats_,t.server_)),t.infoData_=new SR,t.infoSyncTree_=new Tg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$o(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lf(t,"connected",!1),t.serverSyncTree_=new Tg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);jt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KP(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yc(t){return kP({timestamp:KP(t)})}function Rg(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=gl(n,c=>be(c));o=wP(t.serverSyncTree_,s,l,i)}else{const l=be(n);o=y1(t.serverSyncTree_,s,l,i)}else if(r){const l=gl(n,c=>be(c));o=_P(t.serverSyncTree_,s,l)}else{const l=be(n);o=$o(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ji(t,s)),jt(t.eventQueue_,a,o)}function Pg(t,e){Lf(t,"connected",e),e===!1&&JP(t)}function YP(t,e){qe(e,(n,r)=>{Lf(t,n,r)})}function Lf(t,e,n){const r=new ce("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=$o(t.infoSyncTree_,r,i);jt(t.eventQueue_,r,s)}function Df(t){return t.nextWriteId_++}function QP(t,e,n){const r=SP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=be(i).withIndex(e._queryParams.getIndex());Od(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=$o(t.serverSyncTree_,e._path,s);else{const a=xo(t.serverSyncTree_,e);o=y1(t.serverSyncTree_,e._path,s,a)}return jt(t.eventQueue_,e._path,o),Ml(t.serverSyncTree_,e,n,null,!0),s},i=>(Bo(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function qP(t,e,n,r,i){Bo(t,"set",{path:e.toString(),value:n,priority:r});const s=yc(t),o=be(n,r),a=Ef(t.serverSyncTree_,e),l=E1(o,a,s),c=Df(t),d=_1(t.serverSyncTree_,e,l,c,!0);_c(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const y=h==="ok";y||lt("set at "+e+" failed: "+h);const v=Xn(t.serverSyncTree_,c,!y);jt(t.eventQueue_,e,v),Fd(t,i,h,m)});const u=Mf(t,e);Ji(t,u),jt(t.eventQueue_,u,[])}function XP(t,e,n,r){Bo(t,"update",{path:e.toString(),value:n});let i=!0;const s=yc(t),o={};if(qe(n,(a,l)=>{i=!1,o[a]=C1(Ie(e,a),be(l),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),Fd(t,r,"ok",void 0);else{const a=Df(t),l=gP(t.serverSyncTree_,e,o,a);_c(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||lt("update at "+e+" failed: "+c);const h=Xn(t.serverSyncTree_,a,!u),m=h.length>0?Ji(t,e):e;jt(t.eventQueue_,m,h),Fd(t,r,c,d)}),qe(n,c=>{const d=Mf(t,Ie(e,c));Ji(t,d)}),jt(t.eventQueue_,e,[])}}function JP(t){Bo(t,"onDisconnectEvents");const e=yc(t),n=Nl();Rd(t.onDisconnect_,ne(),(i,s)=>{const o=C1(i,s,t.serverSyncTree_,e);n1(n,i,o)});let r=[];Rd(n,ne(),(i,s)=>{r=r.concat($o(t.serverSyncTree_,i,s));const o=Mf(t,i);Ji(t,o)}),t.onDisconnect_=Nl(),jt(t.eventQueue_,ne(),r)}function ZP(t,e,n){let r;K(e._path)===".info"?r=Od(t.infoSyncTree_,e,n):r=Od(t.serverSyncTree_,e,n),P1(t.eventQueue_,e._path,r)}function bg(t,e,n){let r;K(e._path)===".info"?r=Ml(t.infoSyncTree_,e,n):r=Ml(t.serverSyncTree_,e,n),P1(t.eventQueue_,e._path,r)}function eb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WP)}function Bo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function Fd(t,e,n,r){e&&ls(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function A1(t,e,n){return Ef(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Of(t,e=t.transactionQueueTree_){if(e||vc(t,e),us(e)){const n=D1(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tb(t,zo(e),n)}else I1(e)&&mc(e,n=>{Of(t,n)})}function tb(t,e,n){const r=n.map(c=>c.currentWriteId),i=A1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ot(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Bo(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();vc(t,bf(t.transactionQueueTree_,e)),Of(t,t.transactionQueueTree_),jt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)ls(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=L1(t,e),r=zo(n),i=D1(t,n);return nb(t,i,r),r}function nb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let d=!1,u;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HP)d=!0,u="maxretry",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=A1(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){gc("transaction failed: Data returned ",m,l.path);let y=be(m);typeof m=="object"&&m!=null&&un(m,".priority")||(y=y.updatePriority(h.getPriority()));const k=l.currentWriteId,p=yc(t),f=E1(y,h,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=f,l.currentWriteId=Df(t),o.splice(o.indexOf(k),1),i=i.concat(_1(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Xn(t.serverSyncTree_,k,!0))}else d=!0,u="nodata",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}vc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ls(r[a]);Of(t,t.transactionQueueTree_)}function L1(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&us(r)===void 0;)r=bf(r,n),e=de(e),n=K(e);return r}function D1(t,e){const n=[];return O1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function O1(t,e,n){const r=us(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);mc(e,i=>{O1(t,i,n)})}function vc(t,e){const n=us(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,x1(e,n.length>0?n:void 0)}mc(e,r=>{vc(t,r)})}function Mf(t,e){const n=zo(L1(t,e)),r=bf(t.transactionQueueTree_,e);return PP(r,i=>{mu(t,i)}),mu(t,r),k1(r,i=>{mu(t,i)}),n}function mu(t,e){const n=us(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?x1(e,void 0):n.length=s+1,jt(t.eventQueue_,zo(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
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
 */function rb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ib(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ag=function(t,e){const n=sb(t),r=n.namespace;n.domain==="firebase.com"&&An(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&An("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},sb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=rb(t.substring(d,u)));const h=ib(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class ob{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class ab{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class M1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ff{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:uf(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=_g(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return _g(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof Ff))return!1;const n=this._repo===e._repo,r=df(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qN(this._path)}}class Dn extends Ff{constructor(e,n){super(e,n,new mf,!1)}get parent(){const e=Y0(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Io{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),r=jd(this.ref,e);return new Io(this._node.getChild(n),r,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Io(i,jd(this.ref,r),ke)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function me(t,e){return t=wt(t),t._checkNotDeleted("ref"),e!==void 0?jd(t._root,e):t._root}function jd(t,e){return t=wt(t),K(t._path)===null?UP("child","path",e):N1("child","path",e),new Dn(t._repo,Ie(t._path,e))}function lb(t){return R1("remove",t._path),sn(t,null)}function sn(t,e){t=wt(t),R1("set",t._path),MP("set",e,t._path);const n=new Ao;return qP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ua(t,e){jP("update",e,t._path);const n=new Ao;return XP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Jn(t){t=wt(t);const e=new M1(()=>{}),n=new wc(e);return QP(t._repo,t,n).then(r=>new Io(r,new Dn(t._repo,t._path),t._queryParams.getIndex()))}class wc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ob("value",this,new Io(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ab(this,e,n):null}matches(e){return e instanceof wc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function cb(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{bg(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new M1(n,s||void 0),a=new wc(o);return ZP(t._repo,t,a),()=>bg(t._repo,t,a)}function ub(t,e,n,r){return cb(t,"value",e,n,r)}lP(Dn);fP(Dn);/**
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
 */const db="FIREBASE_DATABASE_EMULATOR_HOST",Ud={};let hb=!1;function fb(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=is(s);t.repoInfo_=new U0(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function pb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||An("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ag(s,i),a=o.repoInfo,l;typeof process<"u"&&Zm&&(l=Zm[db]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ag(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new xN(t.name,t.options,e);$P("Invalid Firebase Database URL",o),Q(o.path)||An("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gb(a,t,c,new EN(t,n));return new _b(d,t)}function mb(t,e){const n=Ud[e];(!n||n[t.key]!==t)&&An(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eb(t),delete n[t.key]}function gb(t,e,n,r){let i=Ud[e.name];i||(i={},Ud[e.name]=i);let s=i[t.toURLString()];return s&&An("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VP(t,hb,n,r),i[t.toURLString()]=s,s}class _b{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&An("Cannot call "+e+" on a deleted database.")}}function F1(t=Hv(),e){const n=Kh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Tx("database");r&&yb(n,...r)}return n}function yb(t,e,n,r={}){t=wt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Wr(r,s.repoInfo_.emulatorOptions))return;An("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&An('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ja(ja.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Nx(r.mockUserToken,t.app.options.projectId);o=new ja(a)}is(e)&&(Mv(e),Fv("Database",!0)),fb(s,i,r,o)}/**
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
 */function vb(t){aN(os),Gi(new Hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cr(eg,tg,t),cr(eg,tg,"esm2020")}In.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};In.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};vb();const wb={apiKey:"AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",authDomain:"vgtk-parser.firebaseapp.com",projectId:"vgtk-parser",storageBucket:"vgtk-parser.firebasestorage.app",messagingSenderId:"369828135879",appId:"1:369828135879:web:ad18e0c1b525f3cbef0fe2",measurementId:"G-CETL1LFGEM",databaseURL:"https://vgtk-parser-default-rtdb.europe-west1.firebasedatabase.app/"},Sb=Wv(wb),Ge=F1(Sb),G=E0();me(Ge,"users");me(Ge,"hours/");const Cb=A.div`
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
`,Eb=A.div`
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
`,xb=A.h2`
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
`,Ib=A.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 12px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 8px;
  }
`,kb=A.table`
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
`,Tb=A.th`
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
`,Lg=A.th`
  width: 55px;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 45px;
    font-size: 12px;
    min-width: 40px;
  }
`,Nb=A.td`
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
`,Rb=A.td`
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
`,Pb=A.div`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,bb=A.div`
  position: absolute;
  right: 2px;
  bottom: 2px;
  font-size: 10px;
  opacity: 0.8;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`,gu=A.td`
  text-align: center;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    min-width: 50px;
  }
`,Ab=A.td`
  position: sticky;
  left: 0;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  border: 2px solid #999;
  transition: background 0.2s ease;
`,Lb=A.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Dg=A.h3`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`,Db=A.div`
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
`,_u=A.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`,Og=A.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,Mg=A.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,si=A.button`
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
`,Ob=A.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #000;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`,Mb=A.h4`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`,Fb=A.div`
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
`,jb=A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`,Ub=A.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    min-height: 44px;
  }
`,$b=A.div`
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
`;function zb(t){if(!(t instanceof Date)||isNaN(t))return"";const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${n}-${r}`}function $d(t){const[e,n,r]=t.split("-").map(Number);return new Date(Date.UTC(r,n-1,e))}function Bb(t){return!t||t.length===0?1:t.reduce((n,r)=>Math.max(n,r.id||0),0)+1}function Wb(t=""){return typeof t=="string"&&t.trim().startsWith("П")}function Hb(t){return[...t].sort((e,n)=>$d(e)-$d(n))}const Vb=({rawData:t,onRawDataChange:e,userTarification:n})=>{const[r,i]=R.useState(()=>{const N=new Date;return new Date(N.getFullYear(),N.getMonth(),1)}),[s,o]=R.useState(!1),[a,l]=R.useState(!1),[c,d]=R.useState(""),[u,h]=R.useState({date:"",lessonName:"",groupName:"",total:0}),[m,y]=R.useState([]),[v,k]=R.useState({isLab:!1,cabinet:""}),[p,f]=R.useState(null),[_,w]=R.useState(null),{datesInMonth:E,rows:x,totalsByDate:C,grandTotal:L}=R.useMemo(()=>{const N=Object.keys(t||{}),F=Hb(N),W=F.map(B=>({ds:B,date:$d(B)})).filter(({date:B})=>B.getFullYear()===r.getFullYear()&&B.getMonth()===r.getMonth()).map(B=>B.ds),$=new Set;(n||[]).forEach(B=>{B&&$.add(`${B.lesson}|||${B.groupName}`)}),Object.values(t||{}).flat().forEach(B=>{B&&B.lessonName&&B.groupName&&$.add(`${B.lessonName}|||${B.groupName}`)});const X=Array.from($).map(B=>{const[ie,ee]=B.split("|||"),hn=Wb(ee),fn=[];F.forEach(Oe=>{(Array.isArray(t[Oe])?t[Oe]:[]).filter(ht=>ht.lessonName===ie&&ht.groupName===ee).sort((ht,Sr)=>(ht.id||0)-(Sr.id||0)).forEach(ht=>fn.push({item:ht,ds:Oe}))});const On=new Map;let Je=0,pn=0;fn.forEach(({item:Oe,ds:Mn},ht)=>{hn?(Je+=1,On.set(`${Mn}-${Oe.id}`,Je)):(pn+=1,pn===1&&(Je+=1),On.set(`${Mn}-${Oe.id}`,Je),pn===2&&(pn=0))});const rt={};let jf=Je;return W.forEach(Oe=>{const ht=(Array.isArray(t[Oe])?t[Oe]:[]).filter(Ct=>Ct.lessonName===ie&&Ct.groupName===ee),Sr=ht.filter(Ct=>Ct.isLab).length,Wo=ht.filter(Ct=>!Ct.isLab).length,Sc=Sr+Wo,Ho=new Set;ht.forEach(Ct=>{const Zr=On.get(`${Oe}-${Ct.id}`);Zr&&Ho.add(Zr)}),rt[Oe]={labs:Sr,lectures:Wo,total:Sc,indices:Array.from(Ho).sort((Ct,Zr)=>Ct-Zr)}}),{lessonName:ie,groupName:ee,cells:rt,sum:jf}}),ae={};let Ce=0;return W.forEach(B=>{const ie=X.reduce((ee,hn)=>{var fn;return ee+(((fn=hn.cells[B])==null?void 0:fn.total)||0)},0);ae[B]=ie,Ce+=ie}),{datesInMonth:W,rows:X,totalsByDate:ae,grandTotal:Ce}},[t,r,n]),H=()=>i(N=>new Date(N.getFullYear(),N.getMonth()-1,1)),O=()=>i(N=>new Date(N.getFullYear(),N.getMonth()+1,1)),Se=({labs:N,lectures:F})=>N>0&&F>0?"linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)":N>0?"rgb(255,122,92)":F>0?"rgb(102,153,204)":"transparent",ze="rgba(199, 18, 18, 0.301)",Xe=(N,F,W)=>{const $=Se(N);return p===F||_===W?{background:$,boxShadow:`inset 0 0 0 1000px ${ze}`}:{background:$}},dn=(N,F,W,$)=>{const X=Array.isArray(t[N])?t[N].filter(ae=>ae.lessonName===F&&ae.groupName===W):[];h({date:N,lessonName:F,groupName:W,total:$}),y(X),k({isLab:!1,cabinet:""}),o(!0)},Ut=async N=>{var On;const F=(On=G==null?void 0:G.currentUser)==null?void 0:On.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:W,lessonName:$,groupName:X,isLab:ae,cabinet:Ce}=N,B=t[W]||[],ee={id:Bb(B),lessonName:$,groupName:X,isLab:ae,cabinet:Ce},hn=[...B,ee];e(Je=>({...Je,[W]:hn}));const fn=`users/${F}/hours/${W}`;try{await sn(me(Ge,fn),hn),console.log(`Урок ${ee.id} добавлен на ${W} и отправлен в DB.`),s&&u.date===W&&y(Je=>[...Je,ee])}catch(Je){console.error("Ошибка при добавлении урока в Firebase:",Je),alert("Ошибка при добавлении урока."),e(pn=>({...pn,[W]:B}))}},St=async(N,F)=>{var B;const W=(B=G==null?void 0:G.currentUser)==null?void 0:B.uid;if(!W){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:$}=u;if(!$||!Array.isArray(t[$]))return;const X=t[$],ae=X.map(ie=>ie.id===N?{...ie,...F}:ie);e(ie=>({...ie,[$]:ae}));const Ce=`users/${W}/hours/${$}`;try{await sn(me(Ge,Ce),ae),console.log(`Урок ${N} на ${$} обновлен в DB.`),y(ie=>ie.map(ee=>ee.id===N?{...ee,...F}:ee))}catch(ie){console.error("Ошибка при обновлении урока в Firebase:",ie),alert("Ошибка при обновлении урока."),e(ee=>({...ee,[$]:X}))}},De=async N=>{var Ce;const F=(Ce=G==null?void 0:G.currentUser)==null?void 0:Ce.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:W}=u;if(!W||!Array.isArray(t[W]))return;const $=t[W],X=$.filter(B=>B.id!==N);e(B=>({...B,[W]:X}));const ae=`users/${F}/hours/${W}`;try{X.length===0?await sn(me(Ge,ae),null):await sn(me(Ge,ae),X),console.log(`Урок ${N} на ${W} удален из DB.`),y(B=>B.filter(ie=>ie.id!==N)),X.length===0&&o(!1)}catch(B){console.error("Ошибка при удалении урока из Firebase:",B),alert("Ошибка при удалении урока."),e(ie=>({...ie,[W]:$}))}},P=(N,F,W)=>{const $=[...m];$[N]={...$[N],[F]:W},y($)},M=N=>St(N.id,{isLab:N.isLab,cabinet:N.cabinet}),U=N=>De(N.id),re=()=>{Ut({date:u.date,lessonName:u.lessonName,groupName:u.groupName,isLab:v.isLab,cabinet:v.cabinet}),k({isLab:!1,cabinet:""})},Z=()=>{if(!c){alert("Пожалуйста, выберите дату.");return}if(Object.keys(t).includes(c)){alert("Дата уже существует в таблице.");return}e(N=>({...N,[c]:[]})),l(!1),console.log(`Дата ${c} добавлена локально.`)};return g.jsxs(Cb,{children:[g.jsxs(Eb,{children:[g.jsx(it,{onClick:H,children:"← Пред. месяц"}),g.jsxs(xb,{children:["Расписание за"," ",r.toLocaleString("ru-RU",{month:"long",year:"numeric"})]}),g.jsx(it,{onClick:O,children:"След. месяц →"}),g.jsx(it,{onClick:()=>{l(!0),d("")},children:"Добавить дату"})]}),g.jsx(Ib,{children:g.jsxs(kb,{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx(Tb,{$isHovered:_==="header-row-key",onMouseEnter:()=>w("header-row-key"),onMouseLeave:()=>w(null),children:"Предмет / Группа"}),E.map(N=>g.jsx(Lg,{$isHovered:p===N,onMouseEnter:()=>f(N),onMouseLeave:()=>f(null),children:N},N)),g.jsx(Lg,{$isHovered:_==="header-row-key",onMouseEnter:()=>w("header-row-key"),onMouseLeave:()=>w(null),children:"Итого (занятий)"})]})}),g.jsx("tbody",{children:x.map(({lessonName:N,groupName:F,cells:W,sum:$})=>{const X=`${N}|||${F}`;return g.jsxs("tr",{onMouseEnter:()=>w(X),onMouseLeave:()=>w(null),children:[g.jsxs(Nb,{$isHovered:_===X,children:[N,g.jsx("br",{}),g.jsxs("small",{children:["(",F,")"]})]}),E.map(ae=>{const{labs:Ce,lectures:B,total:ie,indices:ee}=W[ae]||{labs:0,lectures:0,total:0,indices:[]};return g.jsxs(Rb,{onClick:()=>dn(ae,N,F,C[ae]),style:Xe({labs:Ce,lectures:B},ae,X),onMouseEnter:()=>{f(ae),w(X)},onMouseLeave:()=>{f(null),w(null)},children:[g.jsx(Pb,{children:ie||""}),ee&&ee.length>0&&g.jsx(bb,{children:ee.join(",")})]},ae)}),g.jsx(gu,{$isHovered:_===X,children:$})]},X)})}),g.jsx("tfoot",{children:g.jsxs("tr",{onMouseEnter:()=>w("footer-row-key"),onMouseLeave:()=>w(null),children:[g.jsx(Ab,{$isHovered:_==="footer-row-key",children:"Всего часов по дням:"}),E.map(N=>g.jsx(gu,{$isHovered:p===N||_==="footer-row-key",onMouseEnter:()=>{f(N),w("footer-row-key")},onMouseLeave:()=>{f(null),w(null)},children:C[N]},N)),g.jsx(gu,{$isHovered:_==="footer-row-key",children:L})]})})]})}),g.jsx(Vn,{active:s,setActive:o,children:g.jsxs(Lb,{children:[g.jsxs(Dg,{children:[u.lessonName," (",u.groupName,")",g.jsx("br",{}),"Дата: ",u.date]}),m.length>0?m.map((N,F)=>g.jsxs(Db,{children:[g.jsxs(_u,{children:[g.jsxs(Og,{value:N.isLab?"lab":"lec",onChange:W=>P(F,"isLab",W.target.value==="lab"),children:[g.jsx("option",{value:"lec",children:"Лекция"}),g.jsx("option",{value:"lab",children:"Лабораторная"})]}),g.jsx(Mg,{type:"text",value:N.cabinet||"",onChange:W=>P(F,"cabinet",W.target.value),placeholder:"Кабинет"})]}),g.jsxs(_u,{children:[g.jsx(si,{$variant:"primary",onClick:()=>M(m[F]),children:"Сохранить"}),g.jsx(si,{$variant:"danger",onClick:()=>U(N),children:"Удалить"})]})]},N.id)):g.jsx("p",{children:"Пока нет занятий по этому предмету и группе на эту дату."}),g.jsxs(Ob,{children:[g.jsx(Mb,{children:"Добавить занятие"}),g.jsxs(_u,{children:[g.jsxs(Og,{value:v.isLab?"lab":"lec",onChange:N=>k(F=>({...F,isLab:N.target.value==="lab"})),children:[g.jsx("option",{value:"lec",children:"Лекция"}),g.jsx("option",{value:"lab",children:"Лабораторная"})]}),g.jsx(Mg,{type:"text",value:v.cabinet,onChange:N=>k(F=>({...F,cabinet:N.target.value})),placeholder:"Кабинет"})]}),g.jsx(si,{$variant:"success",onClick:re,children:"Добавить"})]}),g.jsx(Fb,{children:g.jsx(si,{onClick:()=>o(!1),children:"Закрыть"})})]})}),g.jsx(Vn,{active:a,setActive:l,children:g.jsxs(jb,{children:[g.jsx(Dg,{children:"Выберите дату для добавления"}),g.jsx(Ub,{type:"date",onChange:N=>{const F=N.target.valueAsDate;d(F?zb(F):"")}}),g.jsxs($b,{children:[g.jsx(si,{$variant:"success",onClick:Z,disabled:!c,children:"Добавить"}),g.jsx(si,{onClick:()=>l(!1),children:"Отмена"})]})]})})]})},Gb={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#e6f3ff","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#fff0e6","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#e6ffe6","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#ffe6e6","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#e6e6ff","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#fff4e6","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#f0e6ff","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#ffe6f0"},Kb={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#1a3b4f","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#4f3b1a","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#1a4f1a","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#4f1a1a","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#1a1a4f","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#4f3d1a","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#2d1a4f","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#4f1a3b"},Yb=t=>{console.log("Поиск отделения для группы:",t),console.log("Доступные отделения:",zs);for(const[e,n]of Object.entries(zs))if(n.includes(t))return console.log("Найдено отделение:",e),e;return console.log("Отделение не найдено для группы:",t),null},Fg=A.div`
  padding: 10px;
  max-width: 100%;
`,jg=A.input`
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
`,Qb=A.div`
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
`,qb=A.div`
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
`,Xb=A.div`
  background: ${({theme:t,$departmentColor:e,$darkDepartmentColor:n})=>(console.log("GroupTitle props:",{theme:t,$departmentColor:e,$darkDepartmentColor:n}),t==="dark"&&n?(console.log("Используем темный цвет:",n),n):t==="light"&&e?(console.log("Используем светлый цвет:",e),e):(console.log("Используем цвет по умолчанию"),t==="dark"?"#3d3d3d":"#f5f5f5"))};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({theme:t})=>t==="dark"?"#444":"#e0e0e0"};

  /* Добавляем небольшой контраст для текста в темной теме */
  color: ${({theme:t,$darkDepartmentColor:e})=>t==="dark"&&e?"#fff":"inherit"};
`,Jb=A.div`
  display: flex;
  flex-direction: column;
`,Zb=A.div`
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
`,eA=A.div`
  width: 40px;
  font-weight: bold;
  color: ${({theme:t})=>t==="dark"?"#aaa":"#666"};
`,tA=A.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nA=A.div`
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
`,Ug=A.div`
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
`,rA=A.div`
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
`,$g=A.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #4a90e2;
    font-size: 18px;
  }
`,iA=({schedule:t,dateSchedule:e,theme:n="light"})=>{const[r,i]=R.useState(""),[s,o]=R.useState(0),[a,l]=R.useState(!1);if(console.log("AllGroupsSchedule рендер, theme:",n),!t||!Array.isArray(t)||t.length===0)return g.jsxs(Fg,{children:[g.jsx(jg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),g.jsx(Ug,{children:"Нет данных о расписании"})]});const c=t.filter(d=>{if(!d)return!1;const u=d.groupName||"",h=r.toLowerCase(),m=u.toLowerCase().includes(h),v=(d.lessons||[]).some(k=>k?(k.lessonName||"").toLowerCase().includes(h):!1);return m||v});return R.useEffect(()=>{l(!0),o(c.length);const d=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(d)},[c.length]),g.jsxs(Fg,{children:[g.jsx(jg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),g.jsxs(rA,{theme:n,children:[g.jsxs($g,{children:["📊 Найдено групп: ",g.jsx("span",{children:c.length})]}),r&&g.jsxs($g,{children:['🔍 Поиск: "',r,'"']})]}),g.jsx(Qb,{className:a?"searching":"",children:c.map((d,u)=>{const h=d.groupName||`Группа ${u+1}`,m=d.lessons||[],y=Yb(h);console.log(`Группа ${h}: отделение =`,y);const v=y?Gb[y]:null,k=y?Kb[y]:null;return console.log(`Цвета для ${h}:`,{departmentColor:v,darkDepartmentColor:k}),g.jsxs(qb,{theme:n,style:{animationDelay:`${u*.1}s`},children:[g.jsx(Xb,{theme:n,$departmentColor:v,$darkDepartmentColor:k,children:h}),g.jsx(Jb,{children:m.map((p,f)=>{const _=(p==null?void 0:p.lessonNumber)||f+1,w=(p==null?void 0:p.lessonName)||"Название не указано",E=(p==null?void 0:p.cabinet)||"---";return g.jsxs(Zb,{theme:n,index:f,children:[g.jsx(eA,{theme:n,children:_}),g.jsxs(tA,{theme:n,children:[w,(p==null?void 0:p.isLab)&&" 🔬"]}),g.jsx(nA,{theme:n,children:E})]},f)})})]},h+u)})}),c.length===0&&g.jsxs(Ug,{children:['😕 Ничего не найдено по запросу "',r,'"']})]})},sA=()=>{var f,_;const[t,e]=R.useState(!1),[n,r]=R.useState(""),[i,s]=R.useState(""),[o,a]=R.useState(""),[l,c]=R.useState(!1),[d,u]=R.useState(null),m=E0().currentUser,y=F1();R.useEffect(()=>{m&&v()},[m]);const v=async()=>{if(m)try{const w=me(y,`users/${m.uid}/telegram`),E=await Jn(w);E.exists()&&(c(!0),u(E.val()))}catch(w){console.error("Ошибка при проверке статуса:",w)}},k=async w=>{if(w.preventDefault(),!m){s("Необходимо войти в систему");return}const E=n.toUpperCase().trim();if(!E||E.length!==6){s("Введите корректный 6-значный код");return}e(!0),s(""),a("");try{const x=me(y,"tempLinks"),C=await Jn(x);if(!C.exists()){s("Код не найден"),e(!1);return}const L=C.val();let H=null,O=null;for(const[St,De]of Object.entries(L))if(De.code===E&&!De.used&&De.expiresAt>Date.now()){H=St,O=De;break}if(!H){s("Код не найден или истек"),e(!1);return}const Se=me(y,`telegramLinks/${H}`);if((await Jn(Se)).exists()){s("Этот Telegram уже привязан к другому аккаунту"),e(!1);return}const Xe=me(y,`users/${m.uid}/telegram`);if((await Jn(Xe)).exists()){s("К этому аккаунту уже привязан Telegram"),e(!1);return}await Ua(me(y,`tempLinks/${H}`),{used:!0});const Ut={};Ut[`telegramLinks/${H}`]={firebaseUid:m.uid,linkedAt:Date.now(),telegramInfo:O.telegramInfo},Ut[`users/${m.uid}/telegram`]={telegramId:Number(H),linkedAt:Date.now(),telegramInfo:O.telegramInfo},await Ua(me(y),Ut),setTimeout(async()=>{try{await lb(me(y,`tempLinks/${H}`))}catch(St){console.error("Ошибка при удалении временного кода:",St)}},5*60*1e3),a("Telegram успешно привязан!"),r(""),v()}catch(x){console.error("Ошибка при привязке:",x),s("Ошибка при привязке Telegram")}finally{e(!1)}},p=async()=>{if(!(!m||!d)&&window.confirm("Вы уверены, что хотите отвязать Telegram?")){e(!0),s(""),a("");try{const w={};w[`users/${m.uid}/telegram`]=null,w[`telegramLinks/${d.telegramId}`]=null,await Ua(me(y),w),c(!1),u(null),a("Telegram успешно отвязан")}catch(w){console.error("Ошибка при отвязке:",w),s("Ошибка при отвязке Telegram")}finally{e(!1)}}};return m?g.jsxs("div",{className:"telegram-link-container",children:[g.jsx("h3",{children:"📱 Привязка Telegram"}),i&&g.jsxs("div",{className:"alert alert-error",children:["❌ ",i]}),o&&g.jsxs("div",{className:"alert alert-success",children:["✅ ",o]}),l?g.jsxs("div",{className:"telegram-linked",children:[g.jsxs("div",{className:"telegram-info",children:[g.jsx("div",{className:"info-icon",children:"✅"}),g.jsxs("div",{className:"info-text",children:[g.jsx("strong",{children:"Telegram привязан"}),((f=d==null?void 0:d.telegramInfo)==null?void 0:f.username)&&g.jsxs("div",{children:["@",d.telegramInfo.username]}),((_=d==null?void 0:d.telegramInfo)==null?void 0:_.first_name)&&g.jsxs("div",{children:[d.telegramInfo.first_name," ",d.telegramInfo.last_name]}),g.jsxs("div",{className:"linked-date",children:["Привязан: ",new Date(d.linkedAt).toLocaleString()]})]})]}),g.jsx("button",{onClick:p,disabled:t,className:"btn btn-danger",children:t?"Отвязка...":"Отвязать Telegram"})]}):g.jsxs("div",{className:"telegram-unlinked",children:[g.jsxs("div",{className:"instruction-box",children:[g.jsx("h4",{children:"Как привязать Telegram:"}),g.jsxs("ol",{children:[g.jsxs("li",{children:["Откройте Telegram бота ",g.jsx("strong",{children:"@vgtk_schedule_bot"})]}),g.jsxs("li",{children:["Нажмите кнопку ",g.jsx("strong",{children:'"🔗 Привязать аккаунт"'})," или отправьте команду ",g.jsx("strong",{children:"/link"})]}),g.jsx("li",{children:"Бот пришлет вам 6-значный код"}),g.jsx("li",{children:"Введите этот код в поле ниже"})]})]}),g.jsxs("form",{onSubmit:k,className:"code-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"telegram-code",children:"Код из Telegram:"}),g.jsx("input",{type:"text",id:"telegram-code",value:n,onChange:w=>r(w.target.value.toUpperCase()),placeholder:"Например: A1B2C3",maxLength:"6",className:"code-input",disabled:t,autoComplete:"off",autoFocus:!0})]}),g.jsx("button",{type:"submit",disabled:t||n.length!==6,className:"btn btn-primary",children:t?"Проверка...":"Привязать Telegram"})]}),g.jsx("div",{className:"note",children:g.jsx("small",{children:"⏰ Код действителен 15 минут"})})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]}):g.jsx("div",{className:"telegram-link-container",children:g.jsx("div",{className:"alert alert-warning",children:"⚠️ Необходимо войти в систему для привязки Telegram"})})},oA=new yn,Is="commonAltNamings";function aA(){var Hf;const[t,e]=R.useState(!1),[n,r]=R.useState(!1),[i,s]=R.useState([]),[o,a]=R.useState([]),[l,c]=R.useState([]),[d,u]=R.useState("Пожалуйста подождите"),[h,m]=R.useState(""),[y,v]=R.useState(""),[k,p]=R.useState(!1),[f,_]=R.useState(!1),[w,E]=R.useState(!1),[x,C]=R.useState(0),[L,H]=R.useState(0),[O,Se]=R.useState(JSON.parse(localStorage.getItem("userTarification"))||[]),[ze,Xe]=R.useState([]),[dn,Ut]=R.useState(!1),[St,De]=R.useState(!1),[P,M]=R.useState(!1),[U,re]=R.useState(!1),[Z,N]=R.useState(""),[F,W]=R.useState(""),[$,X]=R.useState(""),[ae,Ce]=R.useState(""),[B,ie]=R.useState(""),[ee,hn]=R.useState(localStorage.getItem("userCabinet")||null),[fn,On]=R.useState(""),[Je,pn]=R.useState("my"),[rt,jf]=iN(G),{theme:Oe,setTheme:Mn}=ux(),ht=async S=>{if(!rt)localStorage.setItem(Is,JSON.stringify(S));else try{await sn(me(Ge,`${Is}`),S)}catch(D){console.error("Ошибка сохранения общих альтернативных названий:",D)}Xe(S)};R.useEffect(()=>{(async()=>{if(rt)try{const D=await Jn(me(Ge,`${Is}`));if(D.exists())Xe(D.val());else{const J=JSON.parse(localStorage.getItem(Is))||[];J.length>0?await ht(J):Xe([])}}catch(D){console.error("Ошибка загрузки общих альтернативных названий:",D)}else{const D=JSON.parse(localStorage.getItem(Is))||[];Xe(D)}})()},[rt]);const Sr=S=>{var D;rt?sn(me(Ge,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/tarification`),S):(console.log("Нет пользователя"),localStorage.setItem("userTarification",JSON.stringify(S)))},Wo=S=>{var D;rt?Ua(me(Ge,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/userInfo`),{cabinet:S}):localStorage.setItem("userCabinet",S)},Sc=S=>{m(S.target.value)},Ho=S=>{ie(S.target.value)},Ct=R.useCallback(S=>{e(!0),W(S)},[]),Zr=R.useCallback(()=>{Ce(!0)},[]),j1=R.useCallback(S=>{r(!0),X(O.find(D=>D.id===S))},[O]),U1=()=>{E(S=>!S)},$1=()=>{p(S=>!S)},z1=S=>{v(S.target.value)},B1=S=>{N(S.target.value)},W1=R.useCallback(()=>{Mn(Oe==="light"?"dark":"light")},[Mn,Oe]),Uf=S=>O.some(D=>D.groupName.toLowerCase().trim()===S.groupName.toLowerCase().trim()&&D.lesson.toLowerCase().trim()===S.lessonName.toLowerCase().trim()),$f=S=>ze.filter(D=>D.lessonName.toLowerCase().trim()===S.toLowerCase().trim()).flatMap(D=>D.altNaming),zf=async(S,D)=>{const J=S.lesson,Be=ze.find(We=>We.lessonName.toLowerCase().trim()===J.toLowerCase().trim());let Ee;if(Be){if(Be.altNaming.some(We=>We.toLowerCase().trim()===D.toLowerCase().trim())){alert("Название уже существует");return}Ee=ze.map(We=>We.lessonName.toLowerCase().trim()===J.toLowerCase().trim()?{...We,altNaming:[...We.altNaming,D]}:We)}else Ee=[...ze,{lessonName:J,altNaming:[D]}];await ht(Ee),ds()},H1=S=>{Uf(S)?alert('Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.'):(console.log("УРОК ИЗ МОДАЛКИ",S),On(S.lessonName),De(!0))},Bf=()=>{var S;Jn(me(Ge,`users/${(S=G==null?void 0:G.currentUser)==null?void 0:S.uid}/hours`)).then(D=>{D.exists()?H(D.val()):console.log("No data available")}).catch(D=>{console.error(D)})},V1=()=>{if(O.some(D=>D.groupName.toLowerCase().trim()===y.toLowerCase().trim()&&D.lesson.toLowerCase().trim()===h.toLowerCase().trim()))console.log("Группа с таким названием и уроком уже существует!");else{const D={id:mx(),groupName:y,lesson:h,lecture:k,labs:w};Se(J=>[...J,D]),Sr([...O,D]),ds()}},Wf=(S,D)=>{S.preventDefault(),D()},ds=R.useCallback(()=>{const S=[];let D=0;const J=Ee=>(Ee||"").toLowerCase().trim(),Be=new Map(i.map(Ee=>[(Ee.groupName??"").toLowerCase().trim(),Ee]));O.forEach(Ee=>{const{groupName:We,lesson:ei,labs:Vo,lecture:X1}=Ee,J1=J(We),Vf=Be.get(J1);if(!Vf)return;const Z1=$f(ei);Vf.lessons.forEach(hs=>{const Gf=J(hs==null?void 0:hs.lessonName),ew=Gf===J(ei),tw=Z1.some(Go=>Gf===J(Go)),Kf=!!hs.isLab;if((ew||tw)&&(Vo&&Kf||!Kf&&X1)){const Go={...hs,lessonName:ei};Go.id=`${++D}`,S.push(Go)}})}),S.sort((Ee,We)=>{const ei=parseFloat(Ee==null?void 0:Ee.lessonNumber)||0,Vo=parseFloat(We==null?void 0:We.lessonNumber)||0;return ei!==Vo?ei-Vo:((Ee==null?void 0:Ee.id)||"").localeCompare((We==null?void 0:We.id)||"")}),a(S)},[i,O,ze]),G1=()=>{const S=tv(d),D=()=>{var J;C(1),sn(me(Ge,`users/${(J=G==null?void 0:G.currentUser)==null?void 0:J.uid}/hours/${S}`),o).then(()=>{alert("Сохранено"),C(1),setTimeout(()=>{C(0)},5e3),Bf()}).catch(Be=>{console.log(Be),C(2),setTimeout(()=>{C(0)},5e3)})};o.length<9?confirm("Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?")&&D():D()},K1=()=>lT(G,oA).then(()=>{}).catch(S=>{const D=S.code,J=S.message;console.log("error ",D,J)}),Y1=()=>{Bk(G).then(()=>{}).catch(S=>{console.log(S)})},Q1=S=>{const D=O.filter(J=>J.id!==S);Se(D),Sr(D),ds()},q1=()=>{hn(Z),N(""),Wo(Z)};return R.useEffect(()=>{(async()=>{const[D,J,Be]=await bC(P?DC:OC,ee);s(D),c(J),u(Be)})()},[P,ee]),R.useEffect(()=>{ds(),Bf()},[i,l,O,ze,ds]),R.useEffect(()=>{var S,D;console.log("USER ИЗМЕНИЛСЯ"),rt?Jn(me(Ge,`users/${(S=G==null?void 0:G.currentUser)==null?void 0:S.uid}/tarification`)).then(J=>{var Be;J.exists()?Se(J.val()):localStorage.getItem("userTarification")&&sn(me(Ge,`users/${(Be=G==null?void 0:G.currentUser)==null?void 0:Be.uid}/tarification`),JSON.parse(localStorage.getItem("userTarification")||[]))}).catch(J=>{console.error(J)}):Se(JSON.parse(localStorage.getItem("userTarification"))||[]),rt&&Jn(me(Ge,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/userInfo`)).then(J=>{var Be;J.exists()?hn(J.val().cabinet):localStorage.getItem("userCabinet")?(sn(me(Ge,`users/${(Be=G==null?void 0:G.currentUser)==null?void 0:Be.uid}/userInfo`),{cabinet:localStorage.getItem("userCabinet")}),console.log("localStorage To DB")):console.log("No cabinet yet")}).catch(J=>{console.error(J)})},[rt]),R.useEffect(()=>{var Be;const S=(Be=G==null?void 0:G.currentUser)==null?void 0:Be.uid;if(!S)return;const D=me(Ge,`users/${S}/hours`),J=ub(D,Ee=>{Ee.exists()?H(Ee.val()):(console.log("No data available"),H(null))},Ee=>{console.error(Ee)});return()=>J()},[]),console.log(o),g.jsxs(zE,{children:[g.jsxs(WE,{children:[g.jsx("a",{href:"https://www.vgtk.by",children:g.jsx(Zc,{src:sx,alt:""})}),rt?g.jsx(Zc,{src:rt.photoURL}):g.jsx(Zc,{src:ox}),g.jsx(VE,{onClick:()=>{M(S=>!S)},children:d}),rt?g.jsxs(g.Fragment,{children:[g.jsx(it,{onClick:Y1,children:"Выйти"}),g.jsx(it,{onClick:Zr,children:"Настройки профиля"})]}):g.jsx(it,{onClick:K1,children:"Войти"}),g.jsx(zh,{handleChangeTheme:W1,theme:Oe})]}),g.jsxs(UE,{children:[g.jsxs(vm,{onSubmit:S=>{Wf(S,V1)},action:"",children:[g.jsx(Cm,{handleInputChange:Sc,inputValue:h}),g.jsx(JE,{handleSelectChange:z1}),g.jsxs(BE,{children:[g.jsx(Em,{label:"Лабораторные",handleCheckBoxChange:U1}),g.jsx(Em,{label:"Лекции",handleCheckBoxChange:$1})]}),g.jsx(it,{type:"submit",children:"Добавить"}),g.jsx(it,{onClick:()=>{Ut(S=>!S)},type:"button",children:"Редактировать"})]}),dn&&g.jsxs(g.Fragment,{children:["Ваша тарификация:",O.map(S=>g.jsxs(ym,{children:[g.jsx(jn,{children:S.lesson}),g.jsx(ha,{children:S.groupName}),g.jsxs("p",{children:["Лаб. ",S.labs?"Есть":"Нет"]}),g.jsxs("p",{children:["Лекции ",S.lecture?"Есть":"Нет"]}),g.jsx(it,{onClick:()=>{j1(S.id)},children:"Добавить названия"}),g.jsx(HE,{onClick:()=>Q1(S.id),children:"Удалить"})]},S.id))]})]}),g.jsxs("div",{children:[g.jsxs(wm,{children:[g.jsxs(qE,{children:[g.jsx(Sm,{active:Je==="my",onClick:()=>pn("my"),theme:Oe,children:"📋 Моё расписание"}),g.jsx(Sm,{active:Je==="all",onClick:()=>pn("all"),theme:Oe,children:"🏫 Все группы"})]}),Je==="my"&&g.jsxs(g.Fragment,{children:[g.jsxs(KE,{children:[g.jsx(GE,{onChange:B1,value:Z,type:"text",placeholder:`Ваш кабинет: ${ee}`}),g.jsx(YE,{onClick:q1,children:"+"})]}),g.jsx("div",{children:g.jsx(_x,{displayName:"Ваш кабинет",displayNameAlt:"Ваше расписание",handleClick:()=>{re(S=>!S)}})})]})]}),Je==="my"?g.jsxs(g.Fragment,{children:[g.jsxs(QE,{children:[!U&&o.map(S=>g.jsxs(Jc,{children:[g.jsx(ri,{children:S.lessonNumber}),g.jsx(jn,{children:tu[S.lessonNumber]}),g.jsx(jn,{children:S.lessonName}),g.jsx(ha,{onClick:()=>{Ct(S.groupName)},children:S.groupName}),g.jsx(ri,{children:S.cabinet})]},S.id)),U&&l.map(S=>g.jsxs(Jc,{children:[g.jsx(ri,{children:S.lessonNumber}),g.jsx(jn,{children:tu[S.lessonNumber]}),g.jsx(jn,{children:S.lessonName}),g.jsx(ha,{onClick:()=>{Ct(S.groupName)},children:S.groupName}),g.jsx(ri,{children:S.cabinet})]},`${S.lessonName+S.lessonNumber}`))]}),g.jsx(wm,{children:rt&&g.jsxs(g.Fragment,{children:[g.jsx(it,{handleState:x,onClick:G1,children:"Добавить в учет часов"}),g.jsx(it,{onClick:()=>{_(!0)},children:"Открыть учет часов"})]})})]}):g.jsx(iA,{schedule:i,dateSchedule:d,theme:Oe})]}),g.jsxs(Vn,{active:t,setActive:e,children:[g.jsxs("div",{children:["Расписание группы ",F]}),g.jsx("div",{children:(Hf=i.find(S=>S.groupName.toLowerCase().trim()===F.toLowerCase().trim()))==null?void 0:Hf.lessons.map(S=>g.jsxs(Jc,{children:[g.jsx(ri,{children:S.lessonNumber}),g.jsx(jn,{children:tu[S.lessonNumber]}),g.jsx(jn,{children:S.lessonName}),g.jsx(ri,{children:S.cabinet}),!Uf(S)&&S.cabinet&&g.jsx(it,{onClick:()=>H1(S),children:"Добавить"})||g.jsx(it,{onClick:()=>handleDeleteByLesson(S),children:"Удалить"})]},S.lessonNumber))})]}),g.jsx(Vn,{active:ae,setActive:Ce,children:g.jsx(sA,{})}),g.jsxs(Vn,{active:n,setActive:r,children:[g.jsxs("div",{children:["Введите альтернативные названия для предмета ",g.jsx("br",{})," ",$==null?void 0:$.lesson]}),g.jsxs(vm,{onSubmit:S=>{Wf(S,()=>{zf($,B),ie("")})},action:"",children:[g.jsx(Cm,{handleInputChange:Ho,inputValue:B}),g.jsx(it,{type:"submit",children:"Добавить"})]}),g.jsx("div",{children:"Альтернативные названия:"}),$&&$f($.lesson).map(S=>g.jsx("p",{children:S},S))]}),g.jsx(Vn,{active:f,setActive:_,children:g.jsx(Vb,{rawData:L,onRawDataChange:S=>{H(S)},userTarification:O})}),g.jsx(Vn,{active:St,setActive:De,children:O.map(S=>S.groupName===F&&g.jsxs(ym,{children:[g.jsx(jn,{children:S.lesson}),g.jsx(ha,{children:S.groupName}),g.jsx(it,{onClick:()=>{zf(S,fn),De(!1)},children:"Добавить названия"})]},S.id))})]})}ev(document.getElementById("root")).render(g.jsx(aA,{}));
