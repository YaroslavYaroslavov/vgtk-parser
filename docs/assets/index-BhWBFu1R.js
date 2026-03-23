(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bg={exports:{}},Ml={},Wg={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),iw=Symbol.for("react.portal"),sw=Symbol.for("react.fragment"),ow=Symbol.for("react.strict_mode"),aw=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),dw=Symbol.for("react.suspense"),hw=Symbol.for("react.memo"),fw=Symbol.for("react.lazy"),Qf=Symbol.iterator;function pw(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var Hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Gg={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Hg}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kg(){}Kg.prototype=Zi.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Hg}var Hd=Wd.prototype=new Kg;Hd.constructor=Wd;Vg(Hd,Zi.prototype);Hd.isPureReactComponent=!0;var qf=Array.isArray,Yg=Object.prototype.hasOwnProperty,Vd={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yg.call(e,r)&&!Qg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Io,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function mw(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function gw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xf=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gw(""+t.key):e.toString(36)}function ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case iw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sc(o,0):r,qf(i)?(n="",t!=null&&(n=t.replace(Xf,"$&/")+"/"),ga(i,e,n,"",function(c){return c})):i!=null&&(Gd(i)&&(i=mw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sc(s,a);o+=ga(s,e,n,l,i)}else if(l=pw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sc(s,a++),o+=ga(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var r=[],i=0;return ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _w(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},_a={transition:null},yw={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Vd};function Xg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Zi;q.Fragment=sw;q.Profiler=aw;q.PureComponent=Wd;q.StrictMode=ow;q.Suspense=dw;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;q.act=Xg;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yg.call(e,l)&&!Qg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Io,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:cw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lw,_context:t},t.Consumer=t};q.createElement=qg;q.createFactory=function(t){var e=qg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:uw,render:t}};q.isValidElement=Gd;q.lazy=function(t){return{$$typeof:fw,_payload:{_status:-1,_result:t},_init:_w}};q.memo=function(t,e){return{$$typeof:hw,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=_a.transition;_a.transition={};try{t()}finally{_a.transition=e}};q.unstable_act=Xg;q.useCallback=function(t,e){return ut.current.useCallback(t,e)};q.useContext=function(t){return ut.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};q.useEffect=function(t,e){return ut.current.useEffect(t,e)};q.useId=function(){return ut.current.useId()};q.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return ut.current.useMemo(t,e)};q.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};q.useRef=function(t){return ut.current.useRef(t)};q.useState=function(t){return ut.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return ut.current.useTransition()};q.version="18.3.1";Wg.exports=q;var N=Wg.exports;const Ai=Bd(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=N,ww=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),Cw=Object.prototype.hasOwnProperty,Ew=vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xw={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Cw.call(e,r)&&!xw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ww,type:t,key:s,ref:o,props:i,_owner:Ew.current}}Ml.Fragment=Sw;Ml.jsx=Jg;Ml.jsxs=Jg;Bg.exports=Ml;var g=Bg.exports,Zg={exports:{}},Nt={},e_={exports:{}},t_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,M){var U=P.length;P.push(M);e:for(;0<U;){var re=U-1>>>1,Z=P[re];if(0<i(Z,M))P[re]=M,P[U]=Z,U=re;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],U=P.pop();if(U!==M){P[0]=U;e:for(var re=0,Z=P.length,R=Z>>>1;re<R;){var F=2*(re+1)-1,W=P[F],$=F+1,X=P[$];if(0>i(W,U))$<Z&&0>i(X,W)?(P[re]=X,P[$]=U,re=$):(P[re]=W,P[F]=U,re=F);else if($<Z&&0>i(X,U))P[re]=X,P[$]=U,re=$;else break e}}return M}function i(P,M){var U=P.sortIndex-M.sortIndex;return U!==0?U:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,p=!1,y=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=P)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function v(P){if(w=!1,_(P),!y)if(n(l)!==null)y=!0,St(E);else{var M=n(c);M!==null&&De(v,M.startTime-P)}}function E(P,M){y=!1,w&&(w=!1,m(L),L=-1),p=!0;var U=h;try{for(_(M),u=n(l);u!==null&&(!(u.expirationTime>M)||P&&!Se());){var re=u.callback;if(typeof re=="function"){u.callback=null,h=u.priorityLevel;var Z=re(u.expirationTime<=M);M=t.unstable_now(),typeof Z=="function"?u.callback=Z:u===n(l)&&r(l),_(M)}else r(l);u=n(l)}if(u!==null)var R=!0;else{var F=n(c);F!==null&&De(v,F.startTime-M),R=!1}return R}finally{u=null,h=U,p=!1}}var x=!1,C=null,L=-1,H=5,O=-1;function Se(){return!(t.unstable_now()-O<H)}function Be(){if(C!==null){var P=t.unstable_now();O=P;var M=!0;try{M=C(!0,P)}finally{M?Xe():(x=!1,C=null)}}else x=!1}var Xe;if(typeof f=="function")Xe=function(){f(Be)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,Ut=dn.port2;dn.port1.onmessage=Be,Xe=function(){Ut.postMessage(null)}}else Xe=function(){T(Be,0)};function St(P){C=P,x||(x=!0,Xe())}function De(P,M){L=T(function(){P(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,St(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var U=h;h=M;try{return P()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=h;h=P;try{return M()}finally{h=U}},t.unstable_scheduleCallback=function(P,M,U){var re=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?re+U:re):U=re,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,P={id:d++,callback:M,priorityLevel:P,startTime:U,expirationTime:Z,sortIndex:-1},U>re?(P.sortIndex=U,e(c,P),n(l)===null&&P===n(c)&&(w?(m(L),L=-1):w=!0,De(v,U-re))):(P.sortIndex=Z,e(l,P),y||p||(y=!0,St(E))),P},t.unstable_shouldYield=Se,t.unstable_wrapCallback=function(P){var M=h;return function(){var U=h;h=M;try{return P.apply(this,arguments)}finally{h=U}}}})(t_);e_.exports=t_;var Iw=e_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw=N,Tt=Iw;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n_=new Set,Qs={};function Qr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Qs[t]=e,t=0;t<e.length;t++)n_.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},Zf={};function Nw(t){return vu.call(Zf,t)?!0:vu.call(Jf,t)?!1:Tw.test(t)?Zf[t]=!0:(Jf[t]=!0,!1)}function Rw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pw(t,e,n,r){if(e===null||typeof e>"u"||Rw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Yd);Qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Yd);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Yd);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pw(e,n,i,r)&&(n=null),r||i===null?Nw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),s_=Symbol.for("react.offscreen"),ep=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Cc;function ks(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Ec=!1;function xc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function bw(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case wu:return"Profiler";case qd:return"StrictMode";case Su:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case r_:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function Aw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lw(t){var e=o_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=Lw(t))}function a_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function l_(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Iu(t,e){l_(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ts(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function c_(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,d_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dw=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){Dw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function h_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function f_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=h_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ow=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(Ow[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Au=null,Ci=null,Ei=null;function sp(t){if(t=No(t)){if(typeof Au!="function")throw Error(I(280));var e=t.stateNode;e&&(e=zl(e),Au(t.stateNode,t.type,e))}}function p_(t){Ci?Ei?Ei.push(t):Ei=[t]:Ci=t}function m_(){if(Ci){var t=Ci,e=Ei;if(Ei=Ci=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function g_(t,e){return t(e)}function __(){}var Ic=!1;function y_(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return g_(t,e,n)}finally{Ic=!1,(Ci!==null||Ei!==null)&&(__(),m_())}}function Xs(t,e){var n=t.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Lu=!1;if(Tn)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Lu=!1}function Mw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var As=!1,$a=null,za=!1,Du=null,Fw={onError:function(t){As=!0,$a=t}};function jw(t,e,n,r,i,s,o,a,l){As=!1,$a=null,Mw.apply(Fw,arguments)}function Uw(t,e,n,r,i,s,o,a,l){if(jw.apply(this,arguments),As){if(As){var c=$a;As=!1,$a=null}else throw Error(I(198));za||(za=!0,Du=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(qr(t)!==t)throw Error(I(188))}function $w(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return op(i),t;if(s===r)return op(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function w_(t){return t=$w(t),t!==null?S_(t):null}function S_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=S_(t);if(e!==null)return e;t=t.sibling}return null}var C_=Tt.unstable_scheduleCallback,ap=Tt.unstable_cancelCallback,zw=Tt.unstable_shouldYield,Bw=Tt.unstable_requestPaint,Te=Tt.unstable_now,Ww=Tt.unstable_getCurrentPriorityLevel,eh=Tt.unstable_ImmediatePriority,E_=Tt.unstable_UserBlockingPriority,Ba=Tt.unstable_NormalPriority,Hw=Tt.unstable_LowPriority,x_=Tt.unstable_IdlePriority,Fl=null,on=null;function Vw(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Yw,Gw=Math.log,Kw=Math.LN2;function Yw(t){return t>>>=0,t===0?32:31-(Gw(t)/Kw|0)|0}var qo=64,Xo=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function Qw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Qw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I_(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function Xw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function k_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T_,nh,N_,R_,P_,Mu=!1,Jo=[],Zn=null,er=null,tr=null,Js=new Map,Zs=new Map,Hn=[],Jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lp(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=No(e),e!==null&&nh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zw(t,e,n,r,i){switch(e){case"focusin":return Zn=ms(Zn,t,e,n,r,i),!0;case"dragenter":return er=ms(er,t,e,n,r,i),!0;case"mouseover":return tr=ms(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,ms(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zs.set(s,ms(Zs.get(s)||null,t,e,n,r,i)),!0}return!1}function b_(t){var e=Tr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,P_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bu=r,n.target.dispatchEvent(r),bu=null}else return e=No(n),e!==null&&nh(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){ya(t)&&n.delete(e)}function eS(){Mu=!1,Zn!==null&&ya(Zn)&&(Zn=null),er!==null&&ya(er)&&(er=null),tr!==null&&ya(tr)&&(tr=null),Js.forEach(cp),Zs.forEach(cp)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,eS)))}function eo(t){function e(i){return gs(i,t)}if(0<Jo.length){gs(Jo[0],t);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&gs(Zn,t),er!==null&&gs(er,t),tr!==null&&gs(tr,t),Js.forEach(e),Zs.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)b_(n),n.blockedOn===null&&Hn.shift()}var xi=Dn.ReactCurrentBatchConfig,Ha=!0;function tS(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=1,rh(t,e,n,r)}finally{oe=i,xi.transition=s}}function nS(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=4,rh(t,e,n,r)}finally{oe=i,xi.transition=s}}function rh(t,e,n,r){if(Ha){var i=Fu(t,e,n,r);if(i===null)Mc(t,e,r,Va,n),lp(t,r);else if(Zw(i,t,e,n,r))r.stopPropagation();else if(lp(t,r),e&4&&-1<Jw.indexOf(t)){for(;i!==null;){var s=No(i);if(s!==null&&T_(s),s=Fu(t,e,n,r),s===null&&Mc(t,e,r,Va,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mc(t,e,r,null,n)}}var Va=null;function Fu(t,e,n,r){if(Va=null,t=Zd(r),t=Tr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ww()){case eh:return 1;case E_:return 4;case Ba:case Hw:return 16;case x_:return 536870912;default:return 16}default:return 16}}var qn=null,ih=null,va=null;function L_(){if(va)return va;var t,e=ih,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function up(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:up,this.isPropagationStopped=up,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=Rt(es),To=we({},es,{view:0,detail:0}),rS=Rt(To),Tc,Nc,_s,jl=we({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Tc=t.screenX-_s.screenX,Nc=t.screenY-_s.screenY):Nc=Tc=0,_s=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),dp=Rt(jl),iS=we({},jl,{dataTransfer:0}),sS=Rt(iS),oS=we({},To,{relatedTarget:0}),Rc=Rt(oS),aS=we({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Rt(aS),cS=we({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uS=Rt(cS),dS=we({},es,{data:0}),hp=Rt(dS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pS[t])?!!e[t]:!1}function oh(){return mS}var gS=we({},To,{key:function(t){if(t.key){var e=hS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_S=Rt(gS),yS=we({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Rt(yS),vS=we({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),wS=Rt(vS),SS=we({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=Rt(SS),ES=we({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Rt(ES),IS=[9,13,27,32],ah=Tn&&"CompositionEvent"in window,Ls=null;Tn&&"documentMode"in document&&(Ls=document.documentMode);var kS=Tn&&"TextEvent"in window&&!Ls,D_=Tn&&(!ah||Ls&&8<Ls&&11>=Ls),pp=" ",mp=!1;function O_(t,e){switch(t){case"keyup":return IS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function TS(t,e){switch(t){case"compositionend":return M_(e);case"keypress":return e.which!==32?null:(mp=!0,pp);case"textInput":return t=e.data,t===pp&&mp?null:t;default:return null}}function NS(t,e){if(li)return t==="compositionend"||!ah&&O_(t,e)?(t=L_(),va=ih=qn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function F_(t,e,n,r){p_(r),e=Ga(e,"onChange"),0<e.length&&(n=new sh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,to=null;function PS(t){Y_(t,0)}function Ul(t){var e=di(t);if(a_(e))return t}function bS(t,e){if(t==="change")return e}var j_=!1;if(Tn){var Pc;if(Tn){var bc="oninput"in document;if(!bc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),bc=typeof _p.oninput=="function"}Pc=bc}else Pc=!1;j_=Pc&&(!document.documentMode||9<document.documentMode)}function yp(){Ds&&(Ds.detachEvent("onpropertychange",U_),to=Ds=null)}function U_(t){if(t.propertyName==="value"&&Ul(to)){var e=[];F_(e,to,t,Zd(t)),y_(PS,e)}}function AS(t,e,n){t==="focusin"?(yp(),Ds=e,to=n,Ds.attachEvent("onpropertychange",U_)):t==="focusout"&&yp()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(to)}function DS(t,e){if(t==="click")return Ul(e)}function OS(t,e){if(t==="input"||t==="change")return Ul(e)}function MS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:MS;function no(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=vp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vp(n)}}function $_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z_(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FS(t){var e=z_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$_(n.ownerDocument.documentElement,n)){if(r!==null&&lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wp(n,s);var o=wp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jS=Tn&&"documentMode"in document&&11>=document.documentMode,ci=null,ju=null,Os=null,Uu=!1;function Sp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||ci==null||ci!==Ua(r)||(r=ci,"selectionStart"in r&&lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&no(Os,r)||(Os=r,r=Ga(ju,"onSelect"),0<r.length&&(e=new sh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Ac={},B_={};Tn&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function $l(t){if(Ac[t])return Ac[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B_)return Ac[t]=e[n];return t}var W_=$l("animationend"),H_=$l("animationiteration"),V_=$l("animationstart"),G_=$l("transitionend"),K_=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){K_.set(t,e),Qr(e,[t])}for(var Lc=0;Lc<Cp.length;Lc++){var Dc=Cp[Lc],US=Dc.toLowerCase(),$S=Dc[0].toUpperCase()+Dc.slice(1);_r(US,"on"+$S)}_r(W_,"onAnimationEnd");_r(H_,"onAnimationIteration");_r(V_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(G_,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Ep(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Uw(r,e,void 0,t),t.currentTarget=null}function Y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ep(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ep(i,a,c),s=l}}}if(za)throw t=Du,za=!1,Du=null,t}function pe(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var r=t+"__bubble";n.has(r)||(Q_(e,t,2,!1),n.add(r))}function Oc(t,e,n){var r=0;e&&(r|=4),Q_(n,t,r,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[ta]){t[ta]=!0,n_.forEach(function(n){n!=="selectionchange"&&(zS.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,Oc("selectionchange",!1,e))}}function Q_(t,e,n,r){switch(A_(e)){case 1:var i=tS;break;case 4:i=nS;break;default:i=rh}n=i.bind(null,e,n,t),i=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}y_(function(){var c=s,d=Zd(n),u=[];e:{var h=K_.get(t);if(h!==void 0){var p=sh,y=t;switch(t){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":p=_S;break;case"focusin":y="focus",p=Rc;break;case"focusout":y="blur",p=Rc;break;case"beforeblur":case"afterblur":p=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wS;break;case W_:case H_:case V_:p=lS;break;case G_:p=CS;break;case"scroll":p=rS;break;case"wheel":p=xS;break;case"copy":case"cut":case"paste":p=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fp}var w=(e&4)!==0,T=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,_;f!==null;){_=f;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,m!==null&&(v=Xs(f,m),v!=null&&w.push(io(f,v,_)))),T)break;f=f.return}0<w.length&&(h=new p(h,y,null,n,d),u.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==bu&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[Nn]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Tr(y):null,y!==null&&(T=qr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(w=dp,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=fp,v="onPointerLeave",m="onPointerEnter",f="pointer"),T=p==null?h:di(p),_=y==null?h:di(y),h=new w(v,f+"leave",p,n,d),h.target=T,h.relatedTarget=_,v=null,Tr(d)===c&&(w=new w(m,f+"enter",y,n,d),w.target=_,w.relatedTarget=T,v=w),T=v,p&&y)t:{for(w=p,m=y,f=0,_=w;_;_=ti(_))f++;for(_=0,v=m;v;v=ti(v))_++;for(;0<f-_;)w=ti(w),f--;for(;0<_-f;)m=ti(m),_--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=ti(w),m=ti(m)}w=null}else w=null;p!==null&&xp(u,h,p,w,!1),y!==null&&T!==null&&xp(u,T,y,w,!0)}}e:{if(h=c?di(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=bS;else if(gp(h))if(j_)E=OS;else{E=LS;var x=AS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=DS);if(E&&(E=E(t,c))){F_(u,E,n,d);break e}x&&x(t,h,c),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&ku(h,"number",h.value)}switch(x=c?di(c):window,t){case"focusin":(gp(x)||x.contentEditable==="true")&&(ci=x,ju=c,Os=null);break;case"focusout":Os=ju=ci=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Sp(u,n,d);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Sp(u,n,d)}var C;if(ah)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else li?O_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(D_&&n.locale!=="ko"&&(li||L!=="onCompositionStart"?L==="onCompositionEnd"&&li&&(C=L_()):(qn=d,ih="value"in qn?qn.value:qn.textContent,li=!0)),x=Ga(c,L),0<x.length&&(L=new hp(L,t,null,n,d),u.push({event:L,listeners:x}),C?L.data=C:(C=M_(n),C!==null&&(L.data=C)))),(C=kS?TS(t,n):NS(t,n))&&(c=Ga(c,"onBeforeInput"),0<c.length&&(d=new hp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=C))}Y_(u,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xs(t,n),s!=null&&r.unshift(io(t,s,i)),s=Xs(t,e),s!=null&&r.push(io(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xs(n,s),l!=null&&o.unshift(io(n,l,a))):i||(l=Xs(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(BS,`
`).replace(WS,"")}function na(t,e,n){if(e=Ip(e),Ip(t)!==e&&n)throw Error(I(425))}function Ka(){}var $u=null,zu=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(GS)}:Wu;function GS(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),rn="__reactFiber$"+ts,so="__reactProps$"+ts,Nn="__reactContainer$"+ts,Hu="__reactEvents$"+ts,KS="__reactListeners$"+ts,YS="__reactHandles$"+ts;function Tr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tp(t);t!==null;){if(n=t[rn])return n;t=Tp(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[rn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function zl(t){return t[so]||null}var Vu=[],hi=-1;function yr(t){return{current:t}}function ge(t){0>hi||(t.current=Vu[hi],Vu[hi]=null,hi--)}function fe(t,e){hi++,Vu[hi]=t.current,t.current=e}var fr={},nt=yr(fr),_t=yr(!1),jr=fr;function Di(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Ya(){ge(_t),ge(nt)}function Np(t,e,n){if(nt.current!==fr)throw Error(I(168));fe(nt,e),fe(_t,n)}function q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Aw(t)||"Unknown",i));return we({},n,r)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,jr=nt.current,fe(nt,t),fe(_t,_t.current),!0}function Rp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=q_(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,ge(_t),ge(nt),fe(nt,t)):ge(_t),fe(_t,n)}var _n=null,Bl=!1,jc=!1;function X_(t){_n===null?_n=[t]:_n.push(t)}function QS(t){Bl=!0,X_(t)}function vr(){if(!jc&&_n!==null){jc=!0;var t=0,e=oe;try{var n=_n;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Bl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),C_(eh,vr),i}finally{oe=e,jc=!1}}return null}var fi=[],pi=0,qa=null,Xa=0,Pt=[],bt=0,Ur=null,vn=1,wn="";function Cr(t,e){fi[pi++]=Xa,fi[pi++]=qa,qa=t,Xa=e}function J_(t,e,n){Pt[bt++]=vn,Pt[bt++]=wn,Pt[bt++]=Ur,Ur=t;var r=vn;t=wn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Yt(e)+i|n<<i|r,wn=s+t}else vn=1<<s|n<<i|r,wn=t}function ch(t){t.return!==null&&(Cr(t,1),J_(t,1,0))}function uh(t){for(;t===qa;)qa=fi[--pi],fi[pi]=null,Xa=fi[--pi],fi[pi]=null;for(;t===Ur;)Ur=Pt[--bt],Pt[bt]=null,wn=Pt[--bt],Pt[bt]=null,vn=Pt[--bt],Pt[bt]=null}var kt=null,It=null,_e=!1,Wt=null;function Z_(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,It=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:vn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,It=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ku(t){if(_e){var e=It;if(e){var n=e;if(!Pp(t,e)){if(Gu(t))throw Error(I(418));e=nr(n.nextSibling);var r=kt;e&&Pp(t,e)?Z_(r,n):(t.flags=t.flags&-4097|2,_e=!1,kt=t)}}else{if(Gu(t))throw Error(I(418));t.flags=t.flags&-4097|2,_e=!1,kt=t}}}function bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function ra(t){if(t!==kt)return!1;if(!_e)return bp(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=It)){if(Gu(t))throw ey(),Error(I(418));for(;e;)Z_(t,e),e=nr(e.nextSibling)}if(bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=kt?nr(t.stateNode.nextSibling):null;return!0}function ey(){for(var t=It;t;)t=nr(t.nextSibling)}function Oi(){It=kt=null,_e=!1}function dh(t){Wt===null?Wt=[t]:Wt.push(t)}var qS=Dn.ReactCurrentBatchConfig;function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ia(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function ty(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=or(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,v){return f===null||f.tag!==6?(f=Vc(_,m.mode,v),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,v){var E=_.type;return E===ai?d(m,f,_.props.children,v,_.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bn&&Ap(E)===f.type)?(v=i(f,_.props),v.ref=ys(m,f,_),v.return=m,v):(v=Ta(_.type,_.key,_.props,null,m.mode,v),v.ref=ys(m,f,_),v.return=m,v)}function c(m,f,_,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Gc(_,m.mode,v),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function d(m,f,_,v,E){return f===null||f.tag!==7?(f=Dr(_,m.mode,v,E),f.return=m,f):(f=i(f,_),f.return=m,f)}function u(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vc(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ko:return _=Ta(f.type,f.key,f.props,null,m.mode,_),_.ref=ys(m,null,f),_.return=m,_;case oi:return f=Gc(f,m.mode,_),f.return=m,f;case Bn:var v=f._init;return u(m,v(f._payload),_)}if(Ts(f)||fs(f))return f=Dr(f,m.mode,_,null),f.return=m,f;ia(m,f)}return null}function h(m,f,_,v){var E=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(m,f,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return _.key===E?l(m,f,_,v):null;case oi:return _.key===E?c(m,f,_,v):null;case Bn:return E=_._init,h(m,f,E(_._payload),v)}if(Ts(_)||fs(_))return E!==null?null:d(m,f,_,v,null);ia(m,_)}return null}function p(m,f,_,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(_)||null,a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return m=m.get(v.key===null?_:v.key)||null,l(f,m,v,E);case oi:return m=m.get(v.key===null?_:v.key)||null,c(f,m,v,E);case Bn:var x=v._init;return p(m,f,_,x(v._payload),E)}if(Ts(v)||fs(v))return m=m.get(_)||null,d(f,m,v,E,null);ia(f,v)}return null}function y(m,f,_,v){for(var E=null,x=null,C=f,L=f=0,H=null;C!==null&&L<_.length;L++){C.index>L?(H=C,C=null):H=C.sibling;var O=h(m,C,_[L],v);if(O===null){C===null&&(C=H);break}t&&C&&O.alternate===null&&e(m,C),f=s(O,f,L),x===null?E=O:x.sibling=O,x=O,C=H}if(L===_.length)return n(m,C),_e&&Cr(m,L),E;if(C===null){for(;L<_.length;L++)C=u(m,_[L],v),C!==null&&(f=s(C,f,L),x===null?E=C:x.sibling=C,x=C);return _e&&Cr(m,L),E}for(C=r(m,C);L<_.length;L++)H=p(C,m,L,_[L],v),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?L:H.key),f=s(H,f,L),x===null?E=H:x.sibling=H,x=H);return t&&C.forEach(function(Se){return e(m,Se)}),_e&&Cr(m,L),E}function w(m,f,_,v){var E=fs(_);if(typeof E!="function")throw Error(I(150));if(_=E.call(_),_==null)throw Error(I(151));for(var x=E=null,C=f,L=f=0,H=null,O=_.next();C!==null&&!O.done;L++,O=_.next()){C.index>L?(H=C,C=null):H=C.sibling;var Se=h(m,C,O.value,v);if(Se===null){C===null&&(C=H);break}t&&C&&Se.alternate===null&&e(m,C),f=s(Se,f,L),x===null?E=Se:x.sibling=Se,x=Se,C=H}if(O.done)return n(m,C),_e&&Cr(m,L),E;if(C===null){for(;!O.done;L++,O=_.next())O=u(m,O.value,v),O!==null&&(f=s(O,f,L),x===null?E=O:x.sibling=O,x=O);return _e&&Cr(m,L),E}for(C=r(m,C);!O.done;L++,O=_.next())O=p(C,m,L,O.value,v),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?L:O.key),f=s(O,f,L),x===null?E=O:x.sibling=O,x=O);return t&&C.forEach(function(Be){return e(m,Be)}),_e&&Cr(m,L),E}function T(m,f,_,v){if(typeof _=="object"&&_!==null&&_.type===ai&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:e:{for(var E=_.key,x=f;x!==null;){if(x.key===E){if(E=_.type,E===ai){if(x.tag===7){n(m,x.sibling),f=i(x,_.props.children),f.return=m,m=f;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bn&&Ap(E)===x.type){n(m,x.sibling),f=i(x,_.props),f.ref=ys(m,x,_),f.return=m,m=f;break e}n(m,x);break}else e(m,x);x=x.sibling}_.type===ai?(f=Dr(_.props.children,m.mode,v,_.key),f.return=m,m=f):(v=Ta(_.type,_.key,_.props,null,m.mode,v),v.ref=ys(m,f,_),v.return=m,m=v)}return o(m);case oi:e:{for(x=_.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Gc(_,m.mode,v),f.return=m,m=f}return o(m);case Bn:return x=_._init,T(m,f,x(_._payload),v)}if(Ts(_))return y(m,f,_,v);if(fs(_))return w(m,f,_,v);ia(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=Vc(_,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return T}var Mi=ty(!0),ny=ty(!1),Ja=yr(null),Za=null,mi=null,hh=null;function fh(){hh=mi=Za=null}function ph(t){var e=Ja.current;ge(Ja),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){Za=t,hh=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(hh!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(Za===null)throw Error(I(308));mi=t,Za.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var Nr=null;function mh(t){Nr===null?Nr=[t]:Nr.push(t)}function ry(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,mh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,th(t,n)}}function Lp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function el(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){u=y.call(p,u,h);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,u,h):y,h==null)break e;u=we({},u,h);break e;case 2:Wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=u):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=u}}function Dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Ro={},an=yr(Ro),oo=yr(Ro),ao=yr(Ro);function Rr(t){if(t===Ro)throw Error(I(174));return t}function _h(t,e){switch(fe(ao,e),fe(oo,t),fe(an,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}ge(an),fe(an,e)}function Fi(){ge(an),ge(oo),ge(ao)}function sy(t){Rr(ao.current);var e=Rr(an.current),n=Nu(e,t.type);e!==n&&(fe(oo,t),fe(an,n))}function yh(t){oo.current===t&&(ge(an),ge(oo))}var ye=yr(0);function tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function vh(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ca=Dn.ReactCurrentDispatcher,$c=Dn.ReactCurrentBatchConfig,$r=0,ve=null,Pe=null,je=null,nl=!1,Ms=!1,lo=0,XS=0;function Ze(){throw Error(I(321))}function wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Sh(t,e,n,r,i,s){if($r=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?tC:nC,t=n(r,i),Ms){s=0;do{if(Ms=!1,lo=0,25<=s)throw Error(I(301));s+=1,je=Pe=null,e.updateQueue=null,Ca.current=rC,t=n(r,i)}while(Ms)}if(Ca.current=rl,e=Pe!==null&&Pe.next!==null,$r=0,je=Pe=ve=null,nl=!1,e)throw Error(I(300));return t}function Ch(){var t=lo!==0;return lo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ve.memoizedState=je=t:je=je.next=t,je}function Mt(){if(Pe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=je===null?ve.memoizedState:je.next;if(e!==null)je=e,Pe=t;else{if(t===null)throw Error(I(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},je===null?ve.memoizedState=je=t:je=je.next=t}return je}function co(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ve.lanes|=d,zr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Zt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oy(){}function ay(t,e){var n=ve,r=Mt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Eh(uy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,uo(9,cy.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(I(349));$r&30||ly(n,e,i)}return i}function ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cy(t,e,n,r){e.value=n,e.getSnapshot=r,dy(e)&&hy(t)}function uy(t,e,n){return n(function(){dy(e)&&hy(t)})}function dy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function hy(t){var e=Rn(t,1);e!==null&&Qt(e,t,1,-1)}function Op(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=eC.bind(null,ve,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fy(){return Mt().memoizedState}function Ea(t,e,n,r){var i=tn();ve.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&wh(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function Mp(t,e){return Ea(8390656,8,t,e)}function Eh(t,e){return Wl(2048,8,t,e)}function py(t,e){return Wl(4,2,t,e)}function my(t,e){return Wl(4,4,t,e)}function gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _y(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,gy.bind(null,e,t),n)}function xh(){}function yy(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vy(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wy(t,e,n){return $r&21?(Zt(n,e)||(n=I_(),ve.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function JS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=$c.transition;$c.transition={};try{t(!1),e()}finally{oe=n,$c.transition=r}}function Sy(){return Mt().memoizedState}function ZS(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cy(t))Ey(e,n);else if(n=ry(t,e,n,r),n!==null){var i=at();Qt(n,t,r,i),xy(n,e,r)}}function eC(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cy(t))Ey(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Zt(a,o)){var l=e.interleaved;l===null?(i.next=i,mh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ry(t,e,i,r),n!==null&&(i=at(),Qt(n,t,r,i),xy(n,e,r))}}function Cy(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Ey(t,e){Ms=nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,th(t,n)}}var rl={readContext:Ot,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},tC={readContext:Ot,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ea(4194308,4,gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ea(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:xh,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=JS.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=tn();if(_e){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ze===null)throw Error(I(349));$r&30||ly(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mp(uy.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,cy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=ze.identifierPrefix;if(_e){var n=wn,r=vn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nC={readContext:Ot,useCallback:yy,useContext:Ot,useEffect:Eh,useImperativeHandle:_y,useInsertionEffect:py,useLayoutEffect:my,useMemo:vy,useReducer:zc,useRef:fy,useState:function(){return zc(co)},useDebugValue:xh,useDeferredValue:function(t){var e=Mt();return wy(e,Pe.memoizedState,t)},useTransition:function(){var t=zc(co)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1},rC={readContext:Ot,useCallback:yy,useContext:Ot,useEffect:Eh,useImperativeHandle:_y,useInsertionEffect:py,useLayoutEffect:my,useMemo:vy,useReducer:Bc,useRef:fy,useState:function(){return Bc(co)},useDebugValue:xh,useDeferredValue:function(t){var e=Mt();return Pe===null?e.memoizedState=t:wy(e,Pe.memoizedState,t)},useTransition:function(){var t=Bc(co)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Qt(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Qt(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=sr(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Qt(e,t,r,n),Sa(e,t,r))}};function Fp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(i,s):!0}function Iy(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?jr:nt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?jr:nt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hl.enqueueReplaceState(i,i.state,null),el(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=bw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iC=typeof WeakMap=="function"?WeakMap:Map;function ky(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sl||(sl=!0,ad=r),Xu(t,e)},n}function Ty(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Up(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yC.bind(null,t,e,n),e.then(t,t))}function $p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var sC=Dn.ReactCurrentOwner,pt=!1;function st(t,e,n,r){e.child=t===null?ny(e,null,n,r):Mi(e,t.child,n,r)}function Bp(t,e,n,r,i){n=n.render;var s=e.ref;return Ii(e,i),r=Sh(t,e,n,r,s,i),n=Ch(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(_e&&n&&ch(e),e.flags|=1,st(t,e,r,i),e.child)}function Wp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ah(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,r,i)):(t=Ta(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(no(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Ju(t,e,n,r,i)}function Ry(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(_i,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(_i,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(_i,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(_i,xt),xt|=r;return st(t,e,i,n),e.child}function Py(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,r,i){var s=yt(n)?jr:nt.current;return s=Di(e,s),Ii(e,i),n=Sh(t,e,n,r,s,i),r=Ch(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(_e&&r&&ch(e),e.flags|=1,st(t,e,n,i),e.child)}function Hp(t,e,n,r,i){if(yt(n)){var s=!0;Qa(e)}else s=!1;if(Ii(e,i),e.stateNode===null)xa(t,e),Iy(e,n,r),qu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?jr:nt.current,c=Di(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&jp(e,o,r,c),Wn=!1;var h=e.memoizedState;o.state=h,el(e,r,o,i),l=e.memoizedState,a!==r||h!==l||_t.current||Wn?(typeof d=="function"&&(Qu(e,n,d,r),l=e.memoizedState),(a=Wn||Fp(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zt(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=yt(n)?jr:nt.current,l=Di(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&jp(e,o,r,l),Wn=!1,h=e.memoizedState,o.state=h,el(e,r,o,i);var y=e.memoizedState;a!==u||h!==y||_t.current||Wn?(typeof p=="function"&&(Qu(e,n,p,r),y=e.memoizedState),(c=Wn||Fp(e,n,c,r,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Zu(t,e,n,r,s,i)}function Zu(t,e,n,r,i,s){Py(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Rp(e,n,!1),Pn(t,e,s);r=e.stateNode,sC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,s),e.child=Mi(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&Rp(e,n,!0),e.child}function by(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),_h(t,e.containerInfo)}function Vp(t,e,n,r,i){return Oi(),dh(i),e.flags|=256,st(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ay(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(ye,i&1),t===null)return Ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):Ih(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ih(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,r){return r!==null&&dh(r),Mi(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wc(Error(I(422))),sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Wc(s,r,void 0),sa(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),Qt(r,t,i,-1))}return bh(),r=Wc(Error(I(421))),sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=nr(i.nextSibling),kt=e,_e=!0,Wt=null,t!==null&&(Pt[bt++]=vn,Pt[bt++]=wn,Pt[bt++]=Ur,vn=t.id,wn=t.overflow,Ur=e),e=Ih(e,r.children),e.flags|=4096,e)}function Gp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yu(t.return,e,n)}function Hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ly(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gp(t,n,e);else if(t.tag===19)Gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aC(t,e,n){switch(e.tag){case 3:by(e),Oi();break;case 5:sy(e);break;case 1:yt(e.type)&&Qa(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?Ay(t,e,n):(fe(ye,ye.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);fe(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ly(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Ry(t,e,n)}return Pn(t,e,n)}var Dy,nd,Oy,My;Dy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Oy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(an.current);var s=null;switch(n){case"input":i=xu(t,i),r=xu(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Tu(t,i),r=Tu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}Ru(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};My=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lC(t,e,n){var r=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return yt(e.type)&&Ya(),et(e),null;case 3:return r=e.stateNode,Fi(),ge(_t),ge(nt),vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(ud(Wt),Wt=null))),nd(t,e),et(e),null;case 5:yh(e);var i=Rr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Oy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return et(e),null}if(t=Rr(an.current),ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[so]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)pe(Rs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":tp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":rp(r,s),pe("invalid",r)}Ru(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(r.textContent,a,t),i=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Yo(r),np(r,s,!0);break;case"textarea":Yo(r),ip(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ka)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[so]=r,Dy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pu(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)pe(Rs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":tp(t,r),i=xu(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),pe("invalid",t);break;case"textarea":rp(t,r),i=Tu(t,r),pe("invalid",t);break;default:i=r}Ru(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?f_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(t,l):typeof l=="number"&&qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&Qd(t,s,l,o))}switch(n){case"input":Yo(t),np(t,r,!1);break;case"textarea":Yo(t),ip(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)My(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Rr(ao.current),Rr(an.current),ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return et(e),null;case 13:if(ge(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&It!==null&&e.mode&1&&!(e.flags&128))ey(),Oi(),e.flags|=98560,s=!1;else if(s=ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[rn]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Wt!==null&&(ud(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Le===0&&(Le=3):bh())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Fi(),nd(t,e),t===null&&ro(e.stateNode.containerInfo),et(e),null;case 10:return ph(e.type._context),et(e),null;case 17:return yt(e.type)&&Ya(),et(e),null;case 19:if(ge(ye),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tl(t),o!==null){for(e.flags|=128,vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Ui&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return et(e),null}else 2*Te()-s.renderingStartTime>Ui&&n!==1073741824&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ye.current,fe(ye,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function cC(t,e){switch(uh(e),e.tag){case 1:return yt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),ge(_t),ge(nt),vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yh(e),null;case 13:if(ge(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ye),null;case 4:return Fi(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var oa=!1,tt=!1,uC=typeof WeakSet=="function"?WeakSet:Set,b=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Kp=!1;function dC(t,e){if($u=Ha,t=z_(),lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var p;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},Ha=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,T=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:zt(e.type,w),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){xe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=Kp,Kp=!1,y}function Fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rd(e,n,s)}i=i.next}while(i!==r)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fy(t){var e=t.alternate;e!==null&&(t.alternate=null,Fy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[so],delete e[Hu],delete e[KS],delete e[YS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jy(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Ge=null,Bt=!1;function jn(t,e,n){for(n=n.child;n!==null;)Uy(t,e,n),n=n.sibling}function Uy(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:tt||gi(n,e);case 6:var r=Ge,i=Bt;Ge=null,jn(t,e,n),Ge=r,Bt=i,Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),eo(t)):Fc(Ge,n.stateNode));break;case 4:r=Ge,i=Bt,Ge=n.stateNode.containerInfo,Bt=!0,jn(t,e,n),Ge=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!tt&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,jn(t,e,n),tt=r):jn(t,e,n);break;default:jn(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uC),e.forEach(function(r){var i=wC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Bt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Ge===null)throw Error(I(160));Uy(s,o,i),Ge=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$y(e,t),e=e.sibling}function $y(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),en(t),r&4){try{Fs(3,t,t.return),Vl(3,t)}catch(w){xe(t,t.return,w)}try{Fs(5,t,t.return)}catch(w){xe(t,t.return,w)}}break;case 1:$t(e,t),en(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if($t(e,t),en(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(w){xe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&l_(i,s),Pu(a,o);var c=Pu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?f_(i,u):d==="dangerouslySetInnerHTML"?d_(i,u):d==="children"?qs(i,u):Qd(i,d,u,c)}switch(a){case"input":Iu(i,s);break;case"textarea":c_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Si(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[so]=s}catch(w){xe(t,t.return,w)}}break;case 6:if($t(e,t),en(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){xe(t,t.return,w)}}break;case 3:if($t(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(w){xe(t,t.return,w)}break;case 4:$t(e,t),en(t);break;case 13:$t(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nh=Te())),r&4&&Qp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,$t(e,t),tt=c):$t(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(u=b=d;b!==null;){switch(h=b,p=h.child,h.tag){case 0:case 11:case 14:case 15:Fs(4,h,h.return);break;case 1:gi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:gi(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(u);continue}}p!==null?(p.return=h,b=p):Xp(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=h_("display",o))}catch(w){xe(t,t.return,w)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){xe(t,t.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:$t(e,t),en(t),r&4&&Qp(t);break;case 21:break;default:$t(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jy(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Yp(t);od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yp(t);sd(t,a,o);break;default:throw Error(I(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hC(t,e,n){b=t,zy(t)}function zy(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=oa;var c=tt;if(oa=o,(tt=l)&&!c)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Jp(i):l!==null?(l.return=o,b=l):Jp(i);for(;s!==null;)b=s,zy(s),s=s.sibling;b=i,oa=a,tt=c}qp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):qp(t)}}function qp(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&eo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}tt||e.flags&512&&id(e)}catch(h){xe(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Xp(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Jp(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{id(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{id(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var fC=Math.ceil,il=Dn.ReactCurrentDispatcher,kh=Dn.ReactCurrentOwner,Dt=Dn.ReactCurrentBatchConfig,te=0,ze=null,Re=null,Ye=0,xt=0,_i=yr(0),Le=0,ho=null,zr=0,Gl=0,Th=0,js=null,ft=null,Nh=0,Ui=1/0,mn=null,sl=!1,ad=null,ir=null,aa=!1,Xn=null,ol=0,Us=0,ld=null,Ia=-1,ka=0;function at(){return te&6?Te():Ia!==-1?Ia:Ia=Te()}function sr(t){return t.mode&1?te&2&&Ye!==0?Ye&-Ye:qS.transition!==null?(ka===0&&(ka=I_()),ka):(t=oe,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function Qt(t,e,n,r){if(50<Us)throw Us=0,ld=null,Error(I(185));ko(t,n,r),(!(te&2)||t!==ze)&&(t===ze&&(!(te&2)&&(Gl|=n),Le===4&&Vn(t,Ye)),vt(t,r),n===1&&te===0&&!(e.mode&1)&&(Ui=Te()+500,Bl&&vr()))}function vt(t,e){var n=t.callbackNode;qw(t,e);var r=Wa(t,t===ze?Ye:0);if(r===0)n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ap(n),e===1)t.tag===0?QS(Zp.bind(null,t)):X_(Zp.bind(null,t)),VS(function(){!(te&6)&&vr()}),n=null;else{switch(k_(r)){case 1:n=eh;break;case 4:n=E_;break;case 16:n=Ba;break;case 536870912:n=x_;break;default:n=Ba}n=Qy(n,By.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function By(t,e){if(Ia=-1,ka=0,te&6)throw Error(I(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=Wa(t,t===ze?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=al(t,r);else{e=r;var i=te;te|=2;var s=Hy();(ze!==t||Ye!==e)&&(mn=null,Ui=Te()+500,Lr(t,e));do try{gC();break}catch(a){Wy(t,a)}while(!0);fh(),il.current=s,te=i,Re!==null?e=0:(ze=null,Ye=0,e=Le)}if(e!==0){if(e===2&&(i=Ou(t),i!==0&&(r=i,e=cd(t,i))),e===1)throw n=ho,Lr(t,0),Vn(t,r),vt(t,Te()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!pC(i)&&(e=al(t,r),e===2&&(s=Ou(t),s!==0&&(r=s,e=cd(t,s))),e===1))throw n=ho,Lr(t,0),Vn(t,r),vt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Er(t,ft,mn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Nh+500-Te(),10<e)){if(Wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wu(Er.bind(null,t,ft,mn),e);break}Er(t,ft,mn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fC(r/1960))-r,10<r){t.timeoutHandle=Wu(Er.bind(null,t,ft,mn),r);break}Er(t,ft,mn);break;case 5:Er(t,ft,mn);break;default:throw Error(I(329))}}}return vt(t,Te()),t.callbackNode===n?By.bind(null,t):null}function cd(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=al(t,e),t!==2&&(e=ft,ft=n,e!==null&&ud(e)),t}function ud(t){ft===null?ft=t:ft.push.apply(ft,t)}function pC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Th,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function Zp(t){if(te&6)throw Error(I(327));ki();var e=Wa(t,0);if(!(e&1))return vt(t,Te()),null;var n=al(t,e);if(t.tag!==0&&n===2){var r=Ou(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=ho,Lr(t,0),Vn(t,e),vt(t,Te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,ft,mn),vt(t,Te()),null}function Rh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Ui=Te()+500,Bl&&vr())}}function Br(t){Xn!==null&&Xn.tag===0&&!(te&6)&&ki();var e=te;te|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,te=e,!(te&6)&&vr()}}function Ph(){xt=_i.current,ge(_i)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Fi(),ge(_t),ge(nt),vh();break;case 5:yh(r);break;case 4:Fi();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:ph(r.type._context);break;case 22:case 23:Ph()}n=n.return}if(ze=t,Re=t=or(t.current,null),Ye=xt=e,Le=0,ho=null,Th=Gl=zr=0,ft=js=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function Wy(t,e){do{var n=Re;try{if(fh(),Ca.current=rl,nl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nl=!1}if($r=0,je=Pe=ve=null,Ms=!1,lo=0,kh.current=null,n===null||n.return===null){Le=1,ho=e,Re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=$p(o);if(p!==null){p.flags&=-257,zp(p,o,a,s,e),p.mode&1&&Up(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Up(s,c,e),bh();break e}l=Error(I(426))}}else if(_e&&a.mode&1){var T=$p(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),zp(T,o,a,s,e),dh(ji(l,a));break e}}s=l=ji(l,a),Le!==4&&(Le=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ky(s,l,e);Lp(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ir===null||!ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Ty(s,a,e);Lp(s,v);break e}}s=s.return}while(s!==null)}Gy(n)}catch(E){e=E,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Hy(){var t=il.current;return il.current=rl,t===null?rl:t}function bh(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(zr&268435455)&&!(Gl&268435455)||Vn(ze,Ye)}function al(t,e){var n=te;te|=2;var r=Hy();(ze!==t||Ye!==e)&&(mn=null,Lr(t,e));do try{mC();break}catch(i){Wy(t,i)}while(!0);if(fh(),te=n,il.current=r,Re!==null)throw Error(I(261));return ze=null,Ye=0,Le}function mC(){for(;Re!==null;)Vy(Re)}function gC(){for(;Re!==null&&!zw();)Vy(Re)}function Vy(t){var e=Yy(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?Gy(t):Re=e,kh.current=null}function Gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cC(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Re=null;return}}else if(n=lC(n,e,xt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Le===0&&(Le=5)}function Er(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,_C(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function _C(t,e,n,r){do ki();while(Xn!==null);if(te&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xw(t,s),t===ze&&(Re=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,Qy(Ba,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var a=te;te|=4,kh.current=null,dC(t,n),$y(n,t),FS(zu),Ha=!!$u,zu=$u=null,t.current=n,hC(n),Bw(),te=a,oe=o,Dt.transition=s}else t.current=n;if(aa&&(aa=!1,Xn=t,ol=i),s=t.pendingLanes,s===0&&(ir=null),Vw(n.stateNode),vt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,t=ad,ad=null,t;return ol&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===ld?Us++:(Us=0,ld=t):Us=0,vr(),null}function ki(){if(Xn!==null){var t=k_(ol),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,ol=0,te&6)throw Error(I(331));var i=te;for(te|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(b=c;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Fs(8,d,s)}var u=d.child;if(u!==null)u.return=d,b=u;else for(;b!==null;){d=b;var h=d.sibling,p=d.return;if(Fy(d),d===c){b=null;break}if(h!==null){h.return=p,b=h;break}b=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var f=t.current;for(b=f;b!==null;){o=b;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,b=_;else e:for(o=f;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vl(9,a)}}catch(E){xe(a,a.return,E)}if(a===o){b=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,b=v;break e}b=a.return}}if(te=i,vr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function em(t,e,n){e=ji(n,e),e=ky(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(ko(t,1,e),vt(t,e))}function xe(t,e,n){if(t.tag===3)em(t,t,n);else for(;e!==null;){if(e.tag===3){em(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=ji(n,t),t=Ty(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(ko(e,1,t),vt(e,t));break}}e=e.return}}function yC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ye&n)===n&&(Le===4||Le===3&&(Ye&130023424)===Ye&&500>Te()-Nh?Lr(t,0):Th|=n),vt(t,e)}function Ky(t,e){e===0&&(t.mode&1?(e=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):e=1);var n=at();t=Rn(t,e),t!==null&&(ko(t,e,n),vt(t,n))}function vC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ky(t,n)}function wC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Ky(t,n)}var Yy;Yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,aC(t,e,n);pt=!!(t.flags&131072)}else pt=!1,_e&&e.flags&1048576&&J_(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xa(t,e),t=e.pendingProps;var i=Di(e,nt.current);Ii(e,n),i=Sh(null,e,r,t,i,n);var s=Ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gh(e),i.updater=Hl,e.stateNode=i,i._reactInternals=e,qu(e,r,t,n),e=Zu(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&ch(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CC(r),t=zt(r,t),i){case 0:e=Ju(null,e,r,t,n);break e;case 1:e=Hp(null,e,r,t,n);break e;case 11:e=Bp(null,e,r,t,n);break e;case 14:e=Wp(null,e,r,zt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ju(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Hp(t,e,r,i,n);case 3:e:{if(by(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iy(t,e),el(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(I(423)),e),e=Vp(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(I(424)),e),e=Vp(t,e,r,n,i);break e}else for(It=nr(e.stateNode.containerInfo.firstChild),kt=e,_e=!0,Wt=null,n=ny(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=Pn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return sy(e),t===null&&Ku(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bu(r,i)?o=null:s!==null&&Bu(r,s)&&(e.flags|=32),Py(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return Ay(t,e,n);case 4:return _h(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Bp(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Ja,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!_t.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=In(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ii(e,n),i=Ot(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Wp(t,e,r,i,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),xa(t,e),e.tag=1,yt(r)?(t=!0,Qa(e)):t=!1,Ii(e,n),Iy(e,r,i),qu(e,r,i,n),Zu(null,e,r,!0,t,n);case 19:return Ly(t,e,n);case 22:return Ry(t,e,n)}throw Error(I(156,e.tag))};function Qy(t,e){return C_(t,e)}function SC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new SC(t,e,n,r)}function Ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CC(t){if(typeof t=="function")return Ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Jd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ah(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Dr(n.children,i,s,e);case qd:o=8,i|=8;break;case wu:return t=At(12,n,e,i|2),t.elementType=wu,t.lanes=s,t;case Su:return t=At(13,n,e,i),t.elementType=Su,t.lanes=s,t;case Cu:return t=At(19,n,e,i),t.elementType=Cu,t.lanes=s,t;case s_:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r_:o=10;break e;case i_:o=9;break e;case Xd:o=11;break e;case Jd:o=14;break e;case Bn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=At(22,t,r,e),t.elementType=s_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lh(t,e,n,r,i,s,o,a,l){return t=new EC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(s),t}function xC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qy(t){if(!t)return fr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(yt(n))return q_(t,n,e)}return e}function Xy(t,e,n,r,i,s,o,a,l){return t=Lh(n,r,!0,t,i,s,o,a,l),t.context=qy(null),n=t.current,r=at(),i=sr(n),s=In(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,ko(t,i,r),vt(t,r),t}function Yl(t,e,n,r){var i=e.current,s=at(),o=sr(i);return n=qy(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Qt(t,i,o,s),Sa(t,i,o)),o}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){tm(t,e),(t=t.alternate)&&tm(t,e)}function IC(){return null}var Jy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oh(t){this._internalRoot=t}Ql.prototype.render=Oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Yl(t,e,null,null)};Ql.prototype.unmount=Oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Yl(null,t,null,null)}),e[Nn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&b_(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nm(){}function kC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ll(o);s.call(c)}}var o=Xy(e,r,t,0,null,!1,!1,"",nm);return t._reactRootContainer=o,t[Nn]=o.current,ro(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ll(l);a.call(c)}}var l=Lh(t,0,!1,null,null,!1,!1,"",nm);return t._reactRootContainer=l,t[Nn]=l.current,ro(t.nodeType===8?t.parentNode:t),Br(function(){Yl(e,l,n,r)}),l}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ll(o);a.call(l)}}Yl(e,o,t,i)}else o=kC(n,e,t,i,r);return ll(o)}T_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(th(e,n|1),vt(e,Te()),!(te&6)&&(Ui=Te()+500,vr()))}break;case 13:Br(function(){var r=Rn(t,1);if(r!==null){var i=at();Qt(r,t,1,i)}}),Dh(t,1)}};nh=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=at();Qt(e,t,134217728,n)}Dh(t,134217728)}};N_=function(t){if(t.tag===13){var e=sr(t),n=Rn(t,e);if(n!==null){var r=at();Qt(n,t,e,r)}Dh(t,e)}};R_=function(){return oe};P_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Au=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zl(r);if(!i)throw Error(I(90));a_(r),Iu(r,i)}}}break;case"textarea":c_(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};g_=Rh;__=Br;var TC={usingClientEntryPoint:!1,Events:[No,di,zl,p_,m_,Rh]},ws={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NC={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w_(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||IC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Fl=la.inject(NC),on=la}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TC;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(I(200));return xC(t,e,null,n)};Nt.createRoot=function(t,e){if(!Mh(t))throw Error(I(299));var n=!1,r="",i=Jy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lh(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,ro(t.nodeType===8?t.parentNode:t),new Oh(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=w_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Br(t)};Nt.hydrate=function(t,e,n){if(!ql(e))throw Error(I(200));return Xl(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xy(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};Nt.render=function(t,e,n){if(!ql(e))throw Error(I(200));return Xl(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(I(40));return t._reactRootContainer?(Br(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Rh;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Xl(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function Zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zy)}catch(t){console.error(t)}}Zy(),Zg.exports=Nt;var ev=Zg.exports;const RC=Bd(ev);var tv,rm=ev;tv=rm.createRoot,rm.hydrateRoot;const PC=()=>{};var im={};/**
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
 */const nv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+nv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const rv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),r.push(n[d],n[u],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new AC;const h=s<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),u!==64){const y=c<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iv=function(t){const e=rv(t);return Fh.encodeByteArray(e,!0)},cl=function(t){return iv(t).replace(/\./g,"")},ul=function(t){try{return Fh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LC(t){return sv(void 0,t)}function sv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DC(n)||(t[n]=sv(t[n],e[n]));return t}function DC(t){return t!=="__proto__"}/**
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
 */function OC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MC=()=>OC().__FIREBASE_DEFAULTS__,FC=()=>{if(typeof process>"u"||typeof im>"u")return;const t=im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},jh=()=>{try{return PC()||MC()||FC()||jC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ov=t=>{var e,n;return(n=(e=jh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},UC=t=>{const e=ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},av=()=>{var t;return(t=jh())==null?void 0:t.config},lv=t=>{var e;return(e=jh())==null?void 0:e[`_${t}`]};/**
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
 */class Po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function $C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}const $s={};function zC(){const t={prod:[],emulator:[]};for(const e of Object.keys($s))$s[e]?t.emulator.push(e):t.prod.push(e);return t}function BC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let sm=!1;function uv(t,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||$s[t]===e||$s[t]||sm)return;$s[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=zC().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{sm=!0,o()},h}function d(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){const h=BC(r),p=n("text"),y=document.getElementById(p)||document.createElement("span"),w=n("learnmore"),T=document.getElementById(w)||document.createElement("a"),m=n("preprendIcon"),f=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const _=h.element;a(_),d(T,w);const v=c();l(f,m),_.append(f,y,T,v),document.body.appendChild(_)}s?(y.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function WC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VC(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hv(){return nv.NODE_ADMIN===!0}function GC(){try{return typeof indexedDB=="object"}catch{return!1}}function KC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const YC="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YC,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wr(i,a,r)}}function QC(t,e){return t.replace(qC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qC=/\{\$([^}]+)}/g;/**
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
 */function fo(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
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
 */const fv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fo(ul(s[0])||""),n=fo(ul(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},XC=function(t){const e=fv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JC=function(t){const e=fv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(om(s)&&om(o)){if(!Wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function om(t){return t!==null&&typeof t=="object"}/**
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
 */function is(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class ZC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function eE(t,e){const n=new tE(t,e);return n.subscribe.bind(n)}class tE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}function Jl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const rE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class iE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Po;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oE(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sE(t){return t===xr?void 0:t}function oE(t){return t.instantiationMode==="EAGER"}/**
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
 */class aE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const lE={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},cE=le.INFO,uE={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},dE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=cE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const hE=(t,e)=>e.some(n=>t instanceof n);let am,lm;function fE(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pE(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,hd=new WeakMap,mv=new WeakMap,Yc=new WeakMap,zh=new WeakMap;function mE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pv.set(n,t)}).catch(()=>{}),zh.set(e,t),e}function gE(t){if(hd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _E(t){fd=t(fd)}function yE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qc(this),e,...n);return mv.set(r,e.sort?e.sort():[e]),ar(r)}:pE().includes(t)?function(...e){return t.apply(Qc(this),e),ar(pv.get(this))}:function(...e){return ar(t.apply(Qc(this),e))}}function vE(t){return typeof t=="function"?yE(t):(t instanceof IDBTransaction&&gE(t),hE(t,fE())?new Proxy(t,fd):t)}function ar(t){if(t instanceof IDBRequest)return mE(t);if(Yc.has(t))return Yc.get(t);const e=vE(t);return e!==t&&(Yc.set(t,e),zh.set(e,t)),e}const Qc=t=>zh.get(t);function wE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ar(o.result),l.oldVersion,l.newVersion,ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const SE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],qc=new Map;function cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qc.set(e,s),s}_E(t=>({...t,get:(e,n,r)=>cm(e,n)||t.get(e,n,r),has:(e,n)=>!!cm(e,n)||t.has(e,n)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",um="0.14.2";/**
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
 */const bn=new $h("@firebase/app"),IE="@firebase/app-compat",kE="@firebase/analytics-compat",TE="@firebase/analytics",NE="@firebase/app-check-compat",RE="@firebase/app-check",PE="@firebase/auth",bE="@firebase/auth-compat",AE="@firebase/database",LE="@firebase/data-connect",DE="@firebase/database-compat",OE="@firebase/functions",ME="@firebase/functions-compat",FE="@firebase/installations",jE="@firebase/installations-compat",UE="@firebase/messaging",$E="@firebase/messaging-compat",zE="@firebase/performance",BE="@firebase/performance-compat",WE="@firebase/remote-config",HE="@firebase/remote-config-compat",VE="@firebase/storage",GE="@firebase/storage-compat",KE="@firebase/firestore",YE="@firebase/ai",QE="@firebase/firestore-compat",qE="firebase",XE="12.2.0";/**
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
 */const md="[DEFAULT]",JE={[pd]:"fire-core",[IE]:"fire-core-compat",[TE]:"fire-analytics",[kE]:"fire-analytics-compat",[RE]:"fire-app-check",[NE]:"fire-app-check-compat",[PE]:"fire-auth",[bE]:"fire-auth-compat",[AE]:"fire-rtdb",[LE]:"fire-data-connect",[DE]:"fire-rtdb-compat",[OE]:"fire-fn",[ME]:"fire-fn-compat",[FE]:"fire-iid",[jE]:"fire-iid-compat",[UE]:"fire-fcm",[$E]:"fire-fcm-compat",[zE]:"fire-perf",[BE]:"fire-perf-compat",[WE]:"fire-rc",[HE]:"fire-rc-compat",[VE]:"fire-gcs",[GE]:"fire-gcs-compat",[KE]:"fire-fst",[QE]:"fire-fst-compat",[YE]:"fire-vertex","fire-js":"fire-js",[qE]:"fire-js-all"};/**
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
 */const hl=new Map,ZE=new Map,gd=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zi(t){const e=t.name;if(gd.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of hl.values())dm(n,t);for(const n of ZE.values())dm(n,t);return!0}function Bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ex={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new bo("app","Firebase",ex);/**
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
 */class tx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=XE;function gv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:md,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=av()),!n)throw lr.create("no-options");const s=hl.get(i);if(s){if(Wr(n,s.options)&&Wr(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new aE(i);for(const l of gd.values())o.addComponent(l);const a=new tx(n,r,o);return hl.set(i,a),a}function _v(t=md){const e=hl.get(t);if(!e&&t===md&&av())return gv();if(!e)throw lr.create("no-app",{appName:t});return e}function cr(t,e,n){let r=JE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(o.join(" "));return}zi(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const nx="firebase-heartbeat-database",rx=1,po="firebase-heartbeat-store";let Xc=null;function yv(){return Xc||(Xc=wE(nx,rx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(po)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function ix(t){try{const n=(await yv()).transaction(po),r=await n.objectStore(po).get(vv(t));return await n.done,r}catch(e){if(e instanceof wr)bn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function hm(t,e){try{const r=(await yv()).transaction(po,"readwrite");await r.objectStore(po).put(e,vv(t)),await r.done}catch(n){if(n instanceof wr)bn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function vv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sx=1024,ox=30;class ax{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ox){const o=ux(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fm(),{heartbeatsToSend:r,unsentEntries:i}=lx(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function fm(){return new Date().toISOString().substring(0,10)}function lx(t,e=sx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GC()?KC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ix(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pm(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}function ux(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function dx(t){zi(new Hr("platform-logger",e=>new EE(e),"PRIVATE")),zi(new Hr("heartbeat",e=>new ax(e),"PRIVATE")),cr(pd,um,t),cr(pd,um,"esm2020"),cr("fire-js","")}dx("");var hx="firebase",fx="12.2.1";/**
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
 */cr(hx,fx,"app");function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const px=wv,Sv=new bo("auth","Firebase",wv());/**
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
 */const fl=new $h("@firebase/auth");function mx(t,...e){fl.logLevel<=le.WARN&&fl.warn(`Auth (${ss}): ${t}`,...e)}function Na(t,...e){fl.logLevel<=le.ERROR&&fl.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Hh(t,...e)}function qt(t,...e){return Hh(t,...e)}function Wh(t,e,n){const r={...px(),[e]:n};return new bo("auth","Firebase",r).create(e,{appName:t.name})}function Or(t){return Wh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),Wh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sv.create(t,...e)}function z(t,e,...n){if(!t)throw Hh(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function An(t,e){t||Sn(e)}/**
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
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function _x(){return mm()==="http:"||mm()==="https:"}function mm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function yx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_x()||HC()||"connection"in navigator)?navigator.onLine:!0}function vx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Uh()||dv()}get(){return yx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vh(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cx=new Ao(3e4,6e4);function Gh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function os(t,e,n,r,i={}){return Ev(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=is({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return WC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&rs(t.emulatorConfig.host)&&(c.credentials="include"),Cv.fetch()(await xv(t,t.config.apiHost,n,a),c)})}async function Ev(t,e,n){t._canInitEmulator=!1;const r={...wx,...e};try{const i=new xx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Wh(t,d,c);cn(t,d)}}catch(i){if(i instanceof wr)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function Ex(t,e,n,r,i={}){const s=await os(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function xv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Vh(t.config,i):`${t.config.apiScheme}://${i}`;return Sx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class xx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),Cx.get())})}}function ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Ix(t,e){return os(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return os(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kx(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Kh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(Jc(i.auth_time)),issuedAtTime:zs(Jc(i.iat)),expirationTime:zs(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const i=ul(n);return i?JSON.parse(i):(Na("Failed to decode base64 JWT payload"),null)}catch(i){return Na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gm(t){const e=Kh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&Tx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Nx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ml(t){var u;const e=t.auth,n=await t.getIdToken(),r=await mo(t,pl(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?Iv(i.providerUserInfo):[],o=Px(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Rx(t){const e=wt(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Px(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Iv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function bx(t,e){const n=await Ev(t,{},async()=>{const r=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await xv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&rs(t.emulatorConfig.host)&&(l.credentials="include"),Cv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ax(t,e){return os(t,"POST","/v2/accounts:revokeToken",Gh(t,e))}/**
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
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ti;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Un(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Nx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kx(this,e)}reload(){return Rx(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await mo(this,Ix(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:p,providerData:y,stsTokenManager:w}=n;z(u&&w,e,"internal-error");const T=Ti.fromJSON(this.name,w);z(typeof u=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),z(typeof h=="boolean",e,"internal-error"),z(typeof p=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(a,e.name),Un(l,e.name),Un(c,e.name),Un(d,e.name);const m=new Gt({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:T,createdAt:c,lastLoginAt:d});return y&&Array.isArray(y)&&(m.providerData=y.map(f=>({...f}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ti;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Iv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ti;a.updateFromIdToken(r);const l=new Gt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const _m=new Map;function Cn(t){An(t instanceof Function,"Expected a class definition");let e=_m.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_m.set(t,e),e)}/**
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
 */class kv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kv.type="NONE";const ym=kv;/**
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
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(Cn(ym),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(ym);const o=Ra(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const h=await pl(e,{idToken:d}).catch(()=>{});if(!h)break;u=await Gt._fromGetAccountInfoResponse(e,h,d)}else u=Gt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ni(s,e,r))}}/**
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
 */function vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(Lv(e))return"Webos";if(Nv(e))return"Safari";if((e.includes("chrome/")||Rv(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tv(t=ct()){return/firefox\//i.test(t)}function Nv(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rv(t=ct()){return/crios\//i.test(t)}function Pv(t=ct()){return/iemobile/i.test(t)}function bv(t=ct()){return/android/i.test(t)}function Av(t=ct()){return/blackberry/i.test(t)}function Lv(t=ct()){return/webos/i.test(t)}function Yh(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lx(t=ct()){var e;return Yh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Dx(){return VC()&&document.documentMode===10}function Dv(t=ct()){return Yh(t)||bv(t)||Lv(t)||Av(t)||/windows phone/i.test(t)||Pv(t)}/**
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
 */function Ov(t,e=[]){let n;switch(t){case"Browser":n=vm(ct());break;case"Worker":n=`${vm(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class Ox{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mx(t,e={}){return os(t,"GET","/v2/passwordPolicy",Gh(t,e))}/**
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
 */const Fx=6;class jx{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Fx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ux{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wm(this),this.idTokenSubscription=new wm(this),this.beforeStateQueue=new Ox(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Or(this));const n=e?wt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mx(this),n=new jx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ax(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&mx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ec(t){return wt(t)}class wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $x(t){Qh=t}function zx(t){return Qh.loadJS(t)}function Bx(){return Qh.gapiScript}function Wx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Hx(t,e){const n=Bh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wr(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function Vx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gx(t,e,n){const r=ec(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Mv(e),{host:o,port:a}=Kx(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Wr(c,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,rs(o)?(cv(`${s}//${o}${l}`),uv("Auth",!0)):Yx()}function Mv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kx(t){const e=Mv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sm(o)}}}function Sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function Ri(t,e){return Ex(t,"POST","/v1/accounts:signInWithIdp",Gh(t,e))}/**
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
 */const Qx="http://localhost";class Vr extends Fv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:Qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=is(n)}return e}}/**
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
 */class qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Lo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Lo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=Cm(r);return new Bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cm(r);return new Bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gl extends wr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function jv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,s,e,r):s})}async function qx(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
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
 */async function Xx(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(Or(r));const i="reauthenticate";try{const s=await mo(t,jv(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Kh(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
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
 */async function Jx(t,e,n=!1){if(Ht(t.app))return Promise.reject(Or(t));const r="signIn",i=await jv(t,r,e),s=await Bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Zx(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function eI(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function tI(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function nI(t){return wt(t).signOut()}const _l="__sak";/**
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
 */class Uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,iI=10;class $v extends Uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Dx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$v.type="LOCAL";const sI=$v;/**
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
 */class zv extends Uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zv.type="SESSION";const Bv=zv;/**
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
 */function oI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await oI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function Xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function lI(t){ln().location.href=t}/**
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
 */function Wv(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dI(){return Wv()?self:null}/**
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
 */const Hv="firebaseLocalStorageDb",hI=1,yl="firebaseLocalStorage",Vv="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function fI(){const t=indexedDB.deleteDatabase(Hv);return new Do(t).toPromise()}function vd(){const t=indexedDB.open(Hv,hI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Vv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await fI(),e(await vd()))})})}async function Em(t,e,n){const r=nc(t,!0).put({[Vv]:e,value:n});return new Do(r).toPromise()}async function pI(t,e){const n=nc(t,!1).get(e),r=await new Do(n).toPromise();return r===void 0?null:r.value}function xm(t,e){const n=nc(t,!0).delete(e);return new Do(n).toPromise()}const mI=800,gI=3;class Gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new aI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await Em(e,_l,"1"),await xm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Em(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nc(i,!1).getAll();return new Do(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gv.type="LOCAL";const _I=Gv;new Ao(3e4,6e4);/**
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
 */function Kv(t,e){return e?Cn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jh extends Fv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yI(t){return Jx(t.auth,new Jh(t),t.bypassAuthState)}function vI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Xx(n,new Jh(t),t.bypassAuthState)}async function wI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),qx(n,new Jh(t),t.bypassAuthState)}/**
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
 */class Yv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yI;case"linkViaPopup":case"linkViaRedirect":return wI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:cn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SI=new Ao(2e3,1e4);async function CI(t,e,n){if(Ht(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=ec(t);gx(t,e,qh);const i=Kv(r,n);return new Pr(r,"signInViaPopup",e,i).executeNotNull()}class Pr extends Yv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SI.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const EI="pendingRedirect",Pa=new Map;class xI extends Yv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const r=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(t,e){const n=NI(e),r=TI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kI(t,e){Pa.set(t._key(),e)}function TI(t){return Cn(t._redirectPersistence)}function NI(t){return Ra(EI,t.config.apiKey,t.name)}async function RI(t,e,n=!1){if(Ht(t.app))return Promise.reject(Or(t));const r=ec(t),i=Kv(r,e),o=await new xI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PI=10*60*1e3;class bI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Im(e))}saveEventToCache(e){this.cachedEventUids.add(Im(e)),this.lastProcessedEventTime=Date.now()}}function Im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
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
 */async function LI(t,e={}){return os(t,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OI=/^https?/;async function MI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LI(t);for(const n of e)try{if(FI(n))return}catch{}cn(t,"unauthorized-domain")}function FI(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OI.test(n))return!1;if(DI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jI=new Ao(3e4,6e4);function km(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UI(t){return new Promise((e,n)=>{var i,s,o;function r(){km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{km(),n(qt(t,"network-request-failed"))},timeout:jI.get()})}if((s=(i=ln().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const a=Wx("iframefcb");return ln()[a]=()=>{gapi.load?r():n(qt(t,"network-request-failed"))},zx(`${Bx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ba=null,e})}let ba=null;function $I(t){return ba=ba||UI(t),ba}/**
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
 */const zI=new Ao(5e3,15e3),BI="__/auth/iframe",WI="emulator/auth/iframe",HI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vh(e,WI):`https://${t.config.authDomain}/${BI}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=VI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${is(r).slice(1)}`}async function KI(t){const e=await $I(t),n=ln().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:GI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},zI.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,qI=600,XI="_blank",JI="http://localhost";class Tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZI(t,e,n,r=QI,i=qI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...YI,width:r.toString(),height:i.toString(),top:s,left:o},c=ct().toLowerCase();n&&(a=Rv(c)?XI:n),Tv(c)&&(e=e||JI,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(Lx(c)&&a!=="_self")return ek(e||"",a),new Tm(null);const u=window.open(e||"",a,d);z(u,t,"popup-blocked");try{u.focus()}catch{}return new Tm(u)}function ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tk="__/auth/handler",nk="emulator/auth/handler",rk=encodeURIComponent("fac");async function Nm(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof qh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Lo){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${rk}=${encodeURIComponent(l)}`:"";return`${ik(t)}?${is(a).slice(1)}${c}`}function ik({config:t}){return t.emulator?Vh(t,nk):`https://${t.authDomain}/${tk}`}/**
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
 */const Zc="webStorageSupport";class sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bv,this._completeRedirectFn=RI,this._overrideRedirectResult=kI}async _openPopup(e,n,r,i){var o;An((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Nm(e,n,r,_d(),i);return ZI(e,s,Xh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nm(e,n,r,_d(),i);return lI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KI(e),r=new bI(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Zc];s!==void 0&&n(!!s),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dv()||Nv()||Yh()}}const ok=sk;var Rm="@firebase/auth",Pm="1.11.0";/**
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
 */class ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ck(t){zi(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(t)},c=new Ux(r,i,s,l);return Vx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zi(new Hr("auth-internal",e=>{const n=ec(e.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Rm,Pm,lk(t)),cr(Rm,Pm,"esm2020")}/**
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
 */const uk=5*60,dk=lv("authIdTokenMaxAge")||uk;let bm=null;const hk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dk)return;const i=n==null?void 0:n.token;bm!==i&&(bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qv(t=_v()){const e=Bh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hx(t,{popupRedirectResolver:ok,persistence:[_I,sI,Bv]}),r=lv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hk(s.toString());eI(n,o,()=>o(n.currentUser)),Zx(n,a=>o(a))}}const i=ov("auth");return i&&Gx(n,`http://${i}`),n}function fk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$x({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ck("Browser");var Am={};const Lm="@firebase/database",Dm="1.1.0";/**
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
 */let Xv="";function pk(t){Xv=t}/**
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
 */class mk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Jv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mk(e)}}catch{}return new gk},br=Jv("localStorage"),_k=Jv("sessionStorage");/**
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
 */const Pi=new $h("@firebase/database"),yk=function(){let t=1;return function(){return t++}}(),Zv=function(t){const e=rE(t),n=new ZC;n.update(e);const r=n.digest();return Fh.encodeByteArray(r)},Oo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Oo.apply(null,r):typeof r=="object"?e+=Ae(r):e+=r,e+=" "}return e};let Bs=null,Om=!0;const vk=function(t,e){k(!e,"Can't turn on custom loggers persistently."),Pi.logLevel=le.VERBOSE,Bs=Pi.log.bind(Pi)},Ke=function(...t){if(Om===!0&&(Om=!1,Bs===null&&_k.get("logging_enabled")===!0&&vk()),Bs){const e=Oo.apply(null,t);Bs(e)}},Mo=function(t){return function(...e){Ke(t,...e)}},wd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oo(...t);Pi.error(e)},Ln=function(...t){const e=`FIREBASE FATAL ERROR: ${Oo(...t)}`;throw Pi.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+Oo(...t);Pi.warn(e)},wk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Sk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",Gr="[MAX_NAME]",Xr=function(t,e){if(t===e)return 0;if(t===Wi||e===Gr)return-1;if(e===Wi||t===Gr)return 1;{const n=Mm(t),r=Mm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ck=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},ef=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ae(e[r]),n+=":",n+=ef(t[e[r]]);return n+="}",n},e0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const t0=function(t){k(!Zh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Ek=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ik(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kk=new RegExp("^-?(0*)\\d{1,10}$"),Tk=-2147483648,Nk=2147483647,Mm=function(t){if(kk.test(t)){const e=Number(t);if(e>=Tk&&e<=Nk)return e}return null},as=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Pk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class Aa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Aa.OWNER="owner";/**
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
 */const tf="5",n0="v",r0="s",i0="r",s0="f",o0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,a0="ls",l0="p",Sd="ac",c0="websocket",u0="long_polling";/**
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
 */class d0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ak(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function h0(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===c0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===u0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ak(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Lk{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LC(this.counters_)}}/**
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
 */const eu={},tu={};function nf(t){const e=t.toString();return eu[e]||(eu[e]=new Lk),eu[e]}function Dk(t,e){const n=t.toString();return tu[n]||(tu[n]=e()),tu[n]}/**
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
 */class Ok{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&as(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fm="start",Mk="close",Fk="pLPCommand",jk="pRTLPCB",f0="id",p0="pw",m0="ser",Uk="cb",$k="seg",zk="ts",Bk="d",Wk="dframe",g0=1870,_0=30,Hk=g0-_0,Vk=25e3,Gk=3e4;class yi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mo(e),this.stats_=nf(n),this.urlFn=l=>(this.appCheckToken&&(l[Sd]=this.appCheckToken),h0(n,u0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ok(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gk)),Sk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rf((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fm)this.id=a,this.password=l;else if(o===Mk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fm]="t",r[m0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Uk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[n0]=tf,this.transportSessionId&&(r[r0]=this.transportSessionId),this.lastSessionId&&(r[a0]=this.lastSessionId),this.applicationId&&(r[l0]=this.applicationId),this.appCheckToken&&(r[Sd]=this.appCheckToken),typeof location<"u"&&location.hostname&&o0.test(location.hostname)&&(r[i0]=s0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ek()&&!xk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iv(n),i=e0(r,Hk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Wk]="t",r[f0]=e,r[p0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yk(),window[Fk+this.uniqueCallbackIdentifier]=e,window[jk+this.uniqueCallbackIdentifier]=n,this.myIFrame=rf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[f0]=this.myID,e[p0]=this.myPW,e[m0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_0+r.length<=g0;){const o=this.pendingSegs.shift();r=r+"&"+$k+i+"="+o.seg+"&"+zk+i+"="+o.ts+"&"+Bk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Vk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Kk=16384,Yk=45e3;let vl=null;typeof MozWebSocket<"u"?vl=MozWebSocket:typeof WebSocket<"u"&&(vl=WebSocket);class Vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mo(this.connId),this.stats_=nf(n),this.connURL=Vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[n0]=tf,typeof location<"u"&&location.hostname&&o0.test(location.hostname)&&(o[i0]=s0),n&&(o[r0]=n),r&&(o[a0]=r),i&&(o[Sd]=i),s&&(o[l0]=s),h0(e,c0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{let r;hv(),this.mySock=new vl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vl!==null&&!Vt.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=e0(n,Kk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
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
 */class go{static get ALL_TRANSPORTS(){return[yi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Vt&&Vt.isAvailable();let r=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Vt];else{const i=this.transports_=[];for(const s of go.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}go.globalTransportInitialized_=!1;/**
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
 */const Qk=6e4,qk=5e3,Xk=10*1024,Jk=100*1024,nu="t",jm="d",Zk="s",Um="r",eT="e",$m="o",zm="a",Bm="n",Wm="p",tT="h";class nT{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mo("c:"+this.id+":"),this.transportManager_=new go(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nu in e){const n=e[nu];n===zm?this.upgradeIfSecondaryHealthy_():n===Um?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$m&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(nu,e);if(jm in e){const r=e[jm];if(n===tT){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zk?this.onConnectionShutdown_(r):n===Um?this.onReset_(r):n===eT?wd("Server Error: "+r):n===$m?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tf!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class y0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class v0{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wl extends v0{static getInstance(){return new wl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hm=32,Vm=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new ce("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function sf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _o(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function w0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return ot(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iT(t,e){const n=_o(t,0),r=_o(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Xr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function of(t,e){if(pr(t)!==pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pr(t)>pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sT{constructor(e,n){this.errorPrefix_=n,this.parts_=_o(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zl(this.parts_[r]);S0(this)}}function oT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zl(e),S0(t)}function aT(t){const e=t.parts_.pop();t.byteLength_-=Zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function S0(t){if(t.byteLength_>Vm)throw new Error(t.errorPrefix_+"has a key path longer than "+Vm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hm+") or object contains a cycle "+Ir(t))}function Ir(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class af extends v0{static getInstance(){return new af}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Cs=1e3,lT=60*5*1e3,Gm=30*1e3,cT=1.3,uT=3e4,dT="server_kill",Km=3;class kn extends y0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kn.nextPersistentConnectionId_++,this.log_=Mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=lT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");af.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ae(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Po,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;kn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const r=$i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wd("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uT&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new nT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{lt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(dT)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&lt(u),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dd(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ef(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Km&&(this.reconnectDelay_=Gm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xv.replace(/\./g,"-")]=1,Uh()?e["framework.cordova"]=1:dv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wl.getInstance().currentlyOnline();return dd(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
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
 */class rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(Wi,e),i=new Y(Wi,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
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
 */let ua;class C0 extends rc{static get __EMPTY_NODE(){return ua}static set __EMPTY_NODE(e){ua=e}compare(e,n){return Xr(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Gr,ua)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ua)}toString(){return".key"}}const bi=new C0;/**
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
 */class da{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class hT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new hT;/**
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
 */function fT(t,e){return Xr(t.name,e.name)}function lf(t,e){return Xr(t,e)}/**
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
 */let Cd;function pT(t){Cd=t}const E0=function(t){return typeof t=="number"?"number:"+t0(t):"string:"+t},x0=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else k(t===Cd||t.isEmpty(),"priority of unexpected type.");k(t===Cd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ym;class Fe{static set __childrenNodeConstructor(e){Ym=e}static get __childrenNodeConstructor(){return Ym}constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),x0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=t0(this.value_):e+=this.value_,this.lazyHash_=Zv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let I0,k0;function mT(t){I0=t}function gT(t){k0=t}class _T extends rc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Gr,new Fe("[PRIORITY-POST]",k0))}makePost(e,n){const r=I0(e);return new Y(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ke=new _T;/**
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
 */const yT=Math.log(2);class vT{constructor(e){const n=s=>parseInt(Math.log(s)/yT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new Ue(h,u.node,Ue.BLACK,null,null);{const p=parseInt(d/2,10)+l,y=i(l,p),w=i(p+1,c);return u=t[p],h=n?n(u):u,new Ue(h,u.node,Ue.BLACK,y,w)}},s=function(l){let c=null,d=null,u=t.length;const h=function(y,w){const T=u-y,m=u;u-=y;const f=i(T+1,m),_=t[T],v=n?n(_):_;p(new Ue(v,_.node,w,null,f))},p=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),T=Math.pow(2,l.count-(y+1));w?h(T,Ue.BLACK):(h(T,Ue.BLACK),h(T,Ue.RED))}return d},o=new vT(t.length),a=s(o);return new mt(r||e,a)};/**
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
 */let ru;const ni={};class En{static get Default(){return k(ni&&ke,"ChildrenNode.ts has not been loaded"),ru=ru||new En({".priority":ni},{".priority":ke}),ru}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){k(e!==bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Sl(r,e.getCompare()):a=ni;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new En(d,c)}addToIndexes(e,n){const r=dl(this.indexes_,(i,s)=>{const o=$i(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===ni)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sl(a,o.getCompare())}else return ni;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=dl(this.indexes_,i=>{if(i===ni)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
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
 */let Es;class j{static get EMPTY_NODE(){return Es||(Es=new j(new mt(lf),null,En.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&x0(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{k(K(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ke,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E0(this.getPriority().val())+":"),this.forEachChild(ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ke),i=n.getIterator(ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bi?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wT extends j{constructor(){super(new mt(lf),j.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Fo=new wT;Object.defineProperties(Y,{MIN:{value:new Y(Wi,j.EMPTY_NODE)},MAX:{value:new Y(Gr,Fo)}});C0.__EMPTY_NODE=j.EMPTY_NODE;Fe.__childrenNodeConstructor=j;pT(Fo);gT(Fo);/**
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
 */const ST=!0;function be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,be(e))}if(!(t instanceof Array)&&ST){const n=[];let r=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Sl(n,fT,o=>o.name,lf);if(r){const o=Sl(n,ke.getCompare());return new j(s,be(e),new En({".priority":o},{".priority":ke}))}else return new j(s,be(e),En.Default)}else{let n=j.EMPTY_NODE;return qe(t,(r,i)=>{if(un(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}mT(be);/**
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
 */class CT extends rc{constructor(e){super(),this.indexPath_=e,k(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}makePost(e,n){const r=be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new Y(Gr,e)}toString(){return _o(this.indexPath_,0).join("/")}}/**
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
 */class ET extends rc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=be(e);return new Y(n,r)}toString(){return".value"}}const xT=new ET;/**
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
 */function T0(t){return{type:"value",snapshotNode:t}}function Hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(yo(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hi(n,r)):o.trackChildChange(vo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ke,(i,s)=>{n.hasChild(i)||r.trackChildChange(yo(i,s))}),n.isLeafNode()||n.forEachChild(ke,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(vo(i,s,o))}else r.trackChildChange(Hi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wo{constructor(e){this.indexedFilter_=new cf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wo.getStartPost_(e),this.endPost_=wo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(ke,(o,a)=>{s.matches(new Y(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new wo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new Y(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(vo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(yo(n,u));const w=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Hi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(yo(c.name,c.node)),s.trackChildChange(Hi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TT(t){return t.loadsAllData()?new cf(t.getIndex()):t.hasLimit()?new kT(t):new wo(t)}function Qm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===xT?n="$value":t.index_===bi?n="$key":(k(t.index_ instanceof CT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
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
 */class Cl extends y0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Mo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Qm(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),$i(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Qm(e._queryParams),r=e._path.toString(),i=new Po;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+is(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fo(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class NT{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function El(){return{value:null,children:new Map}}function N0(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,El());const i=t.children.get(r);e=he(e),N0(i,e,n)}}function Ed(t,e,n){t.value!==null?n(e,t.value):RT(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);Ed(i,s,n)})}function RT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class PT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Xm=10*1e3,bT=30*1e3,AT=5*60*1e3;class LT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PT(e);const r=Xm+(bT-Xm)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&un(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*AT))}}/**
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
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function df(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ff(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Kt.ACK_USER_WRITE,this.source=df()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new xl(ne(),n,this.revert)}}else return k(K(this.path)===e,"operationForChild called for unrelated child."),new xl(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class So{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new So(this.source,ne()):new So(this.source,he(this.path))}}/**
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
 */class Kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Kt.OVERWRITE}operationForChild(e){return Q(this.path)?new Kr(this.source,ne(),this.snap.getImmediateChild(e)):new Kr(this.source,he(this.path),this.snap)}}/**
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
 */class Vi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Kt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Kr(this.source,ne(),n.value):new Vi(this.source,ne(),n)}else return k(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vi(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class DT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IT(o.childName,o.snapshotNode))}),xs(t,i,"child_removed",e,r,n),xs(t,i,"child_added",e,r,n),xs(t,i,"child_moved",s,r,n),xs(t,i,"child_changed",e,r,n),xs(t,i,"value",e,r,n),i}function xs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>FT(t,a,l)),o.forEach(a=>{const l=MT(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function MT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FT(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ic(t,e){return{eventCache:t,serverCache:e}}function Hs(t,e,n,r){return ic(new mr(e,n,r),t.serverCache)}function R0(t,e,n,r){return ic(t.eventCache,new mr(e,n,r))}function Il(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let iu;const jT=()=>(iu||(iu=new mt(Ck)),iu);class ue{static fromObject(e){let n=new ue(null);return qe(e,(r,i)=>{n=n.set(new ce(r),i)}),n}constructor(e,n=jT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(Q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:Ie(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new ue(null)}}set(e,n){if(Q(e))return new ue(n,this.children);{const r=K(e),s=(this.children.get(r)||new ue(null)).set(he(e),n),o=this.children.insert(r,s);return new ue(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ue(null):new ue(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(Q(e))return n;{const r=K(e),s=(this.children.get(r)||new ue(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ue(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(he(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),Ie(n,i),r):new ue(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Xt{constructor(e){this.writeTree_=e}static empty(){return new Xt(new ue(null))}}function Vs(t,e,n){if(Q(e))return new Xt(new ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new Xt(t.writeTree_.set(i,s))}else{const i=new ue(n),s=t.writeTree_.setTree(e,i);return new Xt(s)}}}function xd(t,e,n){let r=t;return qe(n,(i,s)=>{r=Vs(r,Ie(e,i),s)}),r}function Jm(t,e){if(Q(e))return Xt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Xt(n)}}function Id(t,e){return Jr(t,e)!=null}function Jr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Zm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function ur(t,e){if(Q(e))return t;{const n=Jr(t,e);return n!=null?new Xt(new ue(n)):new Xt(t.writeTree_.subtree(e))}}function kd(t){return t.writeTree_.isEmpty()}function Gi(t,e){return P0(ne(),t.writeTree_,e)}function P0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=P0(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
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
 */function sc(t,e){return D0(e,t)}function UT(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vs(t.visibleWrites,e,n)),t.lastWriteId=r}function $T(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=xd(t.visibleWrites,e,n),t.lastWriteId=r}function zT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WT(a,r.path)?i=!1:Lt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return HT(t),!0;if(r.snap)t.visibleWrites=Jm(t.visibleWrites,r.path);else{const a=r.children;qe(a,l=>{t.visibleWrites=Jm(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function WT(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(Ie(t.path,n),e))return!0;return!1}function HT(t){t.visibleWrites=b0(t.allWrites,VT,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VT(t){return t.visible}function b0(t,e,n){let r=Xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Lt(n,o)?(a=ot(n,o),r=Vs(r,a,s.snap)):Lt(o,n)&&(a=ot(o,n),r=Vs(r,ne(),s.snap.getChild(a)));else if(s.children){if(Lt(n,o))a=ot(n,o),r=xd(r,a,s.children);else if(Lt(o,n))if(a=ot(o,n),Q(a))r=xd(r,ne(),s.children);else{const l=$i(s.children,K(a));if(l){const c=l.getChild(he(a));r=Vs(r,ne(),c)}}}else throw ns("WriteRecord should have .snap or .children")}}return r}function A0(t,e,n,r,i){if(!r&&!i){const s=Jr(t.visibleWrites,e);if(s!=null)return s;{const o=ur(t.visibleWrites,e);if(kd(o))return n;if(n==null&&!Id(o,ne()))return null;{const a=n||j.EMPTY_NODE;return Gi(o,a)}}}else{const s=ur(t.visibleWrites,e);if(!i&&kd(s))return n;if(!i&&n==null&&!Id(s,ne()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Lt(c.path,e)||Lt(e,c.path))},a=b0(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Gi(a,l)}}}function GT(t,e,n){let r=j.EMPTY_NODE;const i=Jr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ur(t.visibleWrites,e);return n.forEachChild(ke,(o,a)=>{const l=Gi(ur(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),Zm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(t.visibleWrites,e);return Zm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function KT(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(Id(t.visibleWrites,s))return null;{const o=ur(t.visibleWrites,s);return kd(o)?i.getChild(n):Gi(o,i.getChild(n))}}function YT(t,e,n,r){const i=Ie(e,n),s=Jr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ur(t.visibleWrites,i);return Gi(o,r.getNode().getImmediateChild(n))}else return null}function QT(t,e){return Jr(t.visibleWrites,e)}function qT(t,e,n,r,i,s,o){let a;const l=ur(t.visibleWrites,e),c=Jr(l,ne());if(c!=null)a=c;else if(n!=null)a=Gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=h.getNext();for(;p&&d.length<i;)u(p,r)!==0&&d.push(p),p=h.getNext();return d}else return[]}function XT(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function kl(t,e,n,r){return A0(t.writeTree,t.treePath,e,n,r)}function pf(t,e){return GT(t.writeTree,t.treePath,e)}function eg(t,e,n,r){return KT(t.writeTree,t.treePath,e,n,r)}function Tl(t,e){return QT(t.writeTree,Ie(t.treePath,e))}function JT(t,e,n,r,i,s){return qT(t.writeTree,t.treePath,e,n,r,i,s)}function mf(t,e,n){return YT(t.writeTree,t.treePath,e,n)}function L0(t,e){return D0(Ie(t.treePath,e),t.writeTree)}function D0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ZT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,yo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vo(r,e.snapshotNode,i.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const O0=new eN;class gf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yr(this.viewCache_),s=JT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tN(t){return{filter:t}}function nN(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rN(t,e,n,r,i){const s=new ZT;let o,a;if(n.type===Kt.OVERWRITE){const c=n;c.source.fromUser?o=Td(t,e,c.path,c.snap,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Nl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Kt.MERGE){const c=n;c.source.fromUser?o=sN(t,e,c.path,c.children,r,i,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Kt.ACK_USER_WRITE){const c=n;c.revert?o=lN(t,e,c.path,r,i,s):o=oN(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Kt.LISTEN_COMPLETE)o=aN(t,e,n.path,r,s);else throw ns("Unknown operation type: "+n.type);const l=s.getChanges();return iN(e,o,l),{viewCache:o,changes:l}}function iN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Il(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(T0(Il(e)))}}function M0(t,e,n,r,i,s){const o=e.eventCache;if(Tl(r,n)!=null)return e;{let a,l;if(Q(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yr(e),d=c instanceof j?c:j.EMPTY_NODE,u=pf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=kl(r,Yr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){k(pr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=eg(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=he(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=eg(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=mf(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Hs(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Nl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),p,null)}else{const p=K(n);if(!l.isCompleteForPath(n)&&pr(n)>1)return e;const y=he(n),T=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=d.updatePriority(l.getNode(),T):c=d.updateChild(l.getNode(),p,T,y,O0,null)}const u=R0(e,c,l.isFullyInitialized()||Q(n),d.filtersNodes()),h=new gf(i,u,s);return M0(t,u,n,i,h,a)}function Td(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new gf(i,e,s);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Hs(e,c,!0,t.filter.filtersNodes());else{const u=K(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Hs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=he(n),p=a.getNode().getImmediateChild(u);let y;if(Q(h))y=r;else{const w=d.getCompleteChild(u);w!=null?sf(h)===".priority"&&w.getChild(w0(h)).isEmpty()?y=w:y=w.updateChild(h,r):y=j.EMPTY_NODE}if(p.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),u,y,h,d,o);l=Hs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function tg(t,e){return t.eventCache.isCompleteForChild(e)}function sN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ie(n,l);tg(e,K(d))&&(a=Td(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ie(n,l);tg(e,K(d))||(a=Td(t,a,d,c,i,s,o))}),a}function ng(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=r:c=new ue(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),y=ng(t,p,h);l=Nl(t,l,new ce(u),y,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const y=e.serverCache.getNode().getImmediateChild(u),w=ng(t,y,h);l=Nl(t,l,new ce(u),w,i,s,o,a)}}),l}function oN(t,e,n,r,i,s,o){if(Tl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let c=new ue(null);return l.getNode().forEachChild(bi,(d,u)=>{c=c.set(new ce(d),u)}),Nd(t,e,n,c,i,s,a,o)}else return e}else{let c=new ue(null);return r.foreach((d,u)=>{const h=Ie(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Nd(t,e,n,c,i,s,a,o)}}function aN(t,e,n,r,i){const s=e.serverCache,o=R0(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return M0(t,o,n,r,O0,i)}function lN(t,e,n,r,i,s){let o;if(Tl(r,n)!=null)return e;{const a=new gf(r,e,i),l=e.eventCache.getNode();let c;if(Q(n)||K(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=kl(r,Yr(e));else{const u=e.serverCache.getNode();k(u instanceof j,"serverChildren would be complete if leaf node"),d=pf(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=K(n);let u=mf(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,he(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,j.EMPTY_NODE,he(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kl(r,Yr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Tl(r,ne())!=null,Hs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class cN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new cf(r.getIndex()),s=TT(r);this.processor_=tN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new mr(l,o.isFullyInitialized(),i.filtersNodes()),u=new mr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ic(u,d),this.eventGenerator_=new DT(this.query_)}get query(){return this.query_}}function uN(t){return t.viewCache_.serverCache.getNode()}function dN(t){return Il(t.viewCache_)}function hN(t,e){const n=Yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function rg(t){return t.eventRegistrations_.length===0}function fN(t,e){t.eventRegistrations_.push(e)}function ig(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function sg(t,e,n,r){e.type===Kt.MERGE&&e.source.queryId!==null&&(k(Yr(t.viewCache_),"We should always have a full cache before handling merges"),k(Il(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rN(t.processor_,i,e,n,r);return nN(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,F0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function pN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(s,o)=>{r.push(Hi(s,o))}),n.isFullyInitialized()&&r.push(T0(n.getNode())),F0(t,r,n.getNode(),e)}function F0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return OT(t.eventGenerator_,e,n,i)}/**
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
 */let Rl;class j0{constructor(){this.views=new Map}}function mN(t){k(!Rl,"__referenceConstructor has already been defined"),Rl=t}function gN(){return k(Rl,"Reference.ts has not been loaded"),Rl}function _N(t){return t.views.size===0}function _f(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),sg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(sg(o,e,n,r));return s}}function U0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=kl(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=pf(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=ic(new mr(a,l,!1),new mr(r,i,!1));return new cN(e,c)}return o}function yN(t,e,n,r,i,s){const o=U0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fN(o,n),pN(o,n)}function vN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=gr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ig(c,n,r)),rg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ig(l,n,r)),rg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!gr(t)&&s.push(new(gN())(e._repo,e._path)),{removed:s,events:o}}function $0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dr(t,e){let n=null;for(const r of t.views.values())n=n||hN(r,e);return n}function z0(t,e){if(e._queryParams.loadsAllData())return oc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function B0(t,e){return z0(t,e)!=null}function gr(t){return oc(t)!=null}function oc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pl;function wN(t){k(!Pl,"__referenceConstructor has already been defined"),Pl=t}function SN(){return k(Pl,"Reference.ts has not been loaded"),Pl}let CN=1;class og{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=XT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function W0(t,e,n,r,i){return UT(t.pendingWriteTree_,e,n,r,i),i?ls(t,new Kr(df(),e,n)):[]}function EN(t,e,n,r){$T(t.pendingWriteTree_,e,n,r);const i=ue.fromObject(n);return ls(t,new Vi(df(),e,i))}function Jn(t,e,n=!1){const r=zT(t.pendingWriteTree_,e);if(BT(t.pendingWriteTree_,e)){let s=new ue(null);return r.snap!=null?s=s.set(ne(),!0):qe(r.children,o=>{s=s.set(new ce(o),!0)}),ls(t,new xl(r.path,s,n))}else return[]}function jo(t,e,n){return ls(t,new Kr(hf(),e,n))}function xN(t,e,n){const r=ue.fromObject(n);return ls(t,new Vi(hf(),e,r))}function IN(t,e){return ls(t,new So(hf(),e))}function kN(t,e,n){const r=vf(t,n);if(r){const i=wf(r),s=i.path,o=i.queryId,a=ot(s,e),l=new So(ff(o),a);return Sf(t,s,l)}else return[]}function bl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||B0(o,e))){const l=vN(o,e,n,r);_N(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,p)=>gr(p));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=RN(h);for(let y=0;y<p.length;++y){const w=p[y],T=w.query,m=K0(t,w);t.listenProvider_.startListening(Gs(T),Co(t,T),m.hashFn,m.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Gs(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(ac(h));t.listenProvider_.stopListening(Gs(h),p)}))}PN(t,c)}return a}function H0(t,e,n,r){const i=vf(t,r);if(i!=null){const s=wf(i),o=s.path,a=s.queryId,l=ot(o,e),c=new Kr(ff(a),l,n);return Sf(t,o,c)}else return[]}function TN(t,e,n,r){const i=vf(t,r);if(i){const s=wf(i),o=s.path,a=s.queryId,l=ot(o,e),c=ue.fromObject(n),d=new Vi(ff(a),l,c);return Sf(t,o,d)}else return[]}function Rd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const y=ot(h,i);s=s||dr(p,y),o=o||gr(p)});let a=t.syncPointTree_.get(i);a?(o=o||gr(a),s=s||dr(a,ne())):(a=new j0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const w=dr(y,ne());w&&(s=s.updateImmediateChild(p,w))}));const c=B0(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ac(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=bN();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=sc(t.pendingWriteTree_,i);let u=yN(a,e,n,d,s,l);if(!c&&!o&&!r){const h=z0(a,e);u=u.concat(AN(t,e,h))}return u}function yf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=dr(a,l);if(c)return c});return A0(i,e,s,n,!0)}function NN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=ot(c,n);r=r||dr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||dr(i,ne()):(i=new j0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new mr(r,!0,!1):null,a=sc(t.pendingWriteTree_,e._path),l=U0(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return dN(l)}function ls(t,e){return V0(e,t.syncPointTree_,null,sc(t.pendingWriteTree_,ne()))}function V0(t,e,n,r){if(Q(t.path))return G0(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=dr(i,ne()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=L0(r,o);s=s.concat(V0(a,l,c,d))}return i&&(s=s.concat(_f(i,t,r,n))),s}}function G0(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=dr(i,ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=L0(r,o),d=t.operationForChild(o);d&&(s=s.concat(G0(d,a,l,c)))}),i&&(s=s.concat(_f(i,t,r,n))),s}function K0(t,e){const n=e.query,r=Co(t,n);return{hashFn:()=>(uN(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?kN(t,n._path,r):IN(t,n._path);{const s=Ik(i,n);return bl(t,n,null,s)}}}}function Co(t,e){const n=ac(e);return t.queryToTagMap.get(n)}function ac(t){return t._path.toString()+"$"+t._queryIdentifier}function vf(t,e){return t.tagToQueryMap.get(e)}function wf(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Sf(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=sc(t.pendingWriteTree_,e);return _f(r,n,i,null)}function RN(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[oc(n)];{let i=[];return n&&(i=$0(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SN())(t._repo,t._path):t}function PN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ac(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function bN(){return CN++}function AN(t,e,n){const r=e._path,i=Co(t,e),s=K0(t,n),o=t.listenProvider_.startListening(Gs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!Q(c)&&d&&gr(d))return[oc(d).query];{let h=[];return d&&(h=h.concat($0(d).map(p=>p.query))),qe(u,(p,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Gs(d),Co(t,d))}}return o}/**
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
 */class Cf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cf(n)}node(){return this.node_}}class Ef{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Ef(this.syncTree_,n)}node(){return yf(this.syncTree_,this.path_)}}const LN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ag=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return DN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ON(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},DN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},ON=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y0=function(t,e,n,r){return xf(e,new Ef(n,t),r)},Q0=function(t,e,n){return xf(t,new Cf(e),n)};function xf(t,e,n){const r=t.getPriority().val(),i=ag(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ag(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(ke,(a,l)=>{const c=xf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class If{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kf(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=K(n);for(;i!==null;){const s=$i(r.node.children,i)||{children:{},childCount:0};r=new If(i,r,s),n=he(n),i=K(n)}return r}function cs(t){return t.node.value}function q0(t,e){t.node.value=e,Pd(t)}function X0(t){return t.node.childCount>0}function MN(t){return cs(t)===void 0&&!X0(t)}function lc(t,e){qe(t.node.children,(n,r)=>{e(new If(n,t,r))})}function J0(t,e,n,r){n&&!r&&e(t),lc(t,i=>{J0(i,e,!0,r)}),n&&r&&e(t)}function FN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uo(t){return new ce(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function Pd(t){t.parent!==null&&jN(t.parent,t.name,t)}function jN(t,e,n){const r=MN(n),i=un(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pd(t))}/**
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
 */const UN=/[\[\].#$\/\u0000-\u001F\u007F]/,$N=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,Tf=function(t){return typeof t=="string"&&t.length!==0&&!UN.test(t)},Z0=function(t){return typeof t=="string"&&t.length!==0&&!$N.test(t)},zN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Z0(t)},BN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zh(t)||t&&typeof t=="object"&&un(t,".sv")},WN=function(t,e,n,r){cc(Jl(t,"value"),e,n)},cc=function(t,e,n){const r=n instanceof ce?new sT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ir(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ir(r)+" with contents = "+e.toString());if(Zh(e))throw new Error(t+"contains "+e.toString()+" "+Ir(r));if(typeof e=="string"&&e.length>su/3&&Zl(e)>su)throw new Error(t+"contains a string greater than "+su+" utf8 bytes "+Ir(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Tf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ir(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oT(r,o),cc(t,a,r),aT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ir(r)+" in addition to actual children.")}},HN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=_o(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Tf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},VN=function(t,e,n,r){const i=Jl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];qe(e,(o,a)=>{const l=new ce(o);if(cc(i,a,Ie(n,l)),sf(l)===".priority"&&!BN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),HN(i,s)},e1=function(t,e,n,r){if(!Z0(n))throw new Error(Jl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),e1(t,e,n)},t1=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},KN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zN(n))throw new Error(Jl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class YN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!of(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function n1(t,e,n){uc(t,n),r1(t,r=>of(r,e))}function Ft(t,e,n){uc(t,n),r1(t,r=>Lt(r,e)||Lt(e,r))}function r1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(QN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bs&&Ke("event: "+n.toString()),as(r)}}}/**
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
 */const qN="repo_interrupt",XN=25;class JN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=El(),this.transactionQueueTree_=new If,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZN(t,e,n){if(t.stats_=nf(t.repoInfo_),t.forceRestClient_||Rk())t.server_=new Cl(t.repoInfo_,(r,i,s,o)=>{lg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new kn(t.repoInfo_,e,(r,i,s,o)=>{lg(t,r,i,s,o)},r=>{cg(t,r)},r=>{tR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Dk(t.repoInfo_,()=>new LT(t.stats_,t.server_)),t.infoData_=new NT,t.infoSyncTree_=new og({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=jo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nf(t,"connected",!1),t.serverSyncTree_=new og({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function eR(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dc(t){return LN({timestamp:eR(t)})}function lg(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=dl(n,c=>be(c));o=TN(t.serverSyncTree_,s,l,i)}else{const l=be(n);o=H0(t.serverSyncTree_,s,l,i)}else if(r){const l=dl(n,c=>be(c));o=xN(t.serverSyncTree_,s,l)}else{const l=be(n);o=jo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ki(t,s)),Ft(t.eventQueue_,a,o)}function cg(t,e){Nf(t,"connected",e),e===!1&&sR(t)}function tR(t,e){qe(e,(n,r)=>{Nf(t,n,r)})}function Nf(t,e,n){const r=new ce("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=jo(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function Rf(t){return t.nextWriteId_++}function nR(t,e,n){const r=NN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=be(i).withIndex(e._queryParams.getIndex());Rd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=jo(t.serverSyncTree_,e._path,s);else{const a=Co(t.serverSyncTree_,e);o=H0(t.serverSyncTree_,e._path,s,a)}return Ft(t.eventQueue_,e._path,o),bl(t.serverSyncTree_,e,n,null,!0),s},i=>($o(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function rR(t,e,n,r,i){$o(t,"set",{path:e.toString(),value:n,priority:r});const s=dc(t),o=be(n,r),a=yf(t.serverSyncTree_,e),l=Q0(o,a,s),c=Rf(t),d=W0(t.serverSyncTree_,e,l,c,!0);uc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const y=h==="ok";y||lt("set at "+e+" failed: "+h);const w=Jn(t.serverSyncTree_,c,!y);Ft(t.eventQueue_,e,w),bd(t,i,h,p)});const u=bf(t,e);Ki(t,u),Ft(t.eventQueue_,u,[])}function iR(t,e,n,r){$o(t,"update",{path:e.toString(),value:n});let i=!0;const s=dc(t),o={};if(qe(n,(a,l)=>{i=!1,o[a]=Y0(Ie(e,a),be(l),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),bd(t,r,"ok",void 0);else{const a=Rf(t),l=EN(t.serverSyncTree_,e,o,a);uc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||lt("update at "+e+" failed: "+c);const h=Jn(t.serverSyncTree_,a,!u),p=h.length>0?Ki(t,e):e;Ft(t.eventQueue_,p,h),bd(t,r,c,d)}),qe(n,c=>{const d=bf(t,Ie(e,c));Ki(t,d)}),Ft(t.eventQueue_,e,[])}}function sR(t){$o(t,"onDisconnectEvents");const e=dc(t),n=El();Ed(t.onDisconnect_,ne(),(i,s)=>{const o=Y0(i,s,t.serverSyncTree_,e);N0(n,i,o)});let r=[];Ed(n,ne(),(i,s)=>{r=r.concat(jo(t.serverSyncTree_,i,s));const o=bf(t,i);Ki(t,o)}),t.onDisconnect_=El(),Ft(t.eventQueue_,ne(),r)}function oR(t,e,n){let r;K(e._path)===".info"?r=Rd(t.infoSyncTree_,e,n):r=Rd(t.serverSyncTree_,e,n),n1(t.eventQueue_,e._path,r)}function ug(t,e,n){let r;K(e._path)===".info"?r=bl(t.infoSyncTree_,e,n):r=bl(t.serverSyncTree_,e,n),n1(t.eventQueue_,e._path,r)}function aR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qN)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function bd(t,e,n,r){e&&as(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function i1(t,e,n){return yf(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Pf(t,e=t.transactionQueueTree_){if(e||hc(t,e),cs(e)){const n=o1(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lR(t,Uo(e),n)}else X0(e)&&lc(e,n=>{Pf(t,n)})}function lR(t,e,n){const r=n.map(c=>c.currentWriteId),i=i1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ot(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$o(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();hc(t,kf(t.transactionQueueTree_,e)),Pf(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)as(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ki(t,e)}},o)}function Ki(t,e){const n=s1(t,e),r=Uo(n),i=o1(t,n);return cR(t,i,r),r}function cR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let d=!1,u;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XN)d=!0,u="maxretry",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=i1(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){cc("transaction failed: Data returned ",p,l.path);let y=be(p);typeof p=="object"&&p!=null&&un(p,".priority")||(y=y.updatePriority(h.getPriority()));const T=l.currentWriteId,m=dc(t),f=Q0(y,h,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=f,l.currentWriteId=Rf(t),o.splice(o.indexOf(T),1),i=i.concat(W0(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Jn(t.serverSyncTree_,T,!0))}else d=!0,u="nodata",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}hc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)as(r[a]);Pf(t,t.transactionQueueTree_)}function s1(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&cs(r)===void 0;)r=kf(r,n),e=he(e),n=K(e);return r}function o1(t,e){const n=[];return a1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function a1(t,e,n){const r=cs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);lc(e,i=>{a1(t,i,n)})}function hc(t,e){const n=cs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,q0(e,n.length>0?n:void 0)}lc(e,r=>{hc(t,r)})}function bf(t,e){const n=Uo(s1(t,e)),r=kf(t.transactionQueueTree_,e);return FN(r,i=>{ou(t,i)}),ou(t,r),J0(r,i=>{ou(t,i)}),n}function ou(t,e){const n=cs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?q0(e,void 0):n.length=s+1,Ft(t.eventQueue_,Uo(e),i);for(let o=0;o<r.length;o++)as(r[o])}}/**
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
 */function uR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const dg=function(t,e){const n=hR(t),r=n.namespace;n.domain==="firebase.com"&&Ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new d0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},hR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=uR(t.substring(d,u)));const h=dR(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class fR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class pR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class l1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Af{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:sf(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=qm(this._queryParams),n=ef(e);return n==="{}"?"default":n}get _queryObject(){return qm(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof Af))return!1;const n=this._repo===e._repo,r=of(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rT(this._path)}}class On extends Af{constructor(e,n){super(e,n,new uf,!1)}get parent(){const e=w0(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Eo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),r=Ad(this.ref,e);return new Eo(this._node.getChild(n),r,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Eo(i,Ad(this.ref,r),ke)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function de(t,e){return t=wt(t),t._checkNotDeleted("ref"),e!==void 0?Ad(t._root,e):t._root}function Ad(t,e){return t=wt(t),K(t._path)===null?GN("child","path",e):e1("child","path",e),new On(t._repo,Ie(t._path,e))}function mR(t){return t1("remove",t._path),sn(t,null)}function sn(t,e){t=wt(t),t1("set",t._path),WN("set",e,t._path);const n=new Po;return rR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function La(t,e){VN("update",e,t._path);const n=new Po;return iR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xn(t){t=wt(t);const e=new l1(()=>{}),n=new fc(e);return nR(t._repo,t,n).then(r=>new Eo(r,new On(t._repo,t._path),t._queryParams.getIndex()))}class fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fR("value",this,new Eo(e.snapshotNode,new On(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pR(this,e,n):null}matches(e){return e instanceof fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{ug(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new l1(n,s||void 0),a=new fc(o);return oR(t._repo,t,a),()=>ug(t._repo,t,a)}function _R(t,e,n,r){return gR(t,"value",e,n,r)}mN(On);wN(On);/**
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
 */const yR="FIREBASE_DATABASE_EMULATOR_HOST",Ld={};let vR=!1;function wR(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=rs(s);t.repoInfo_=new d0(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function SR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dg(s,i),a=o.repoInfo,l;typeof process<"u"&&Am&&(l=Am[yR]),l?(s=`http://${l}?ns=${a.namespace}`,o=dg(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new bk(t.name,t.options,e);KN("Invalid Firebase Database URL",o),Q(o.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ER(a,t,c,new Pk(t,n));return new xR(d,t)}function CR(t,e){const n=Ld[e];(!n||n[t.key]!==t)&&Ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aR(t),delete n[t.key]}function ER(t,e,n,r){let i=Ld[e.name];i||(i={},Ld[e.name]=i);let s=i[t.toURLString()];return s&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new JN(t,vR,n,r),i[t.toURLString()]=s,s}class xR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function c1(t=_v(),e){const n=Bh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=UC("database");r&&IR(n,...r)}return n}function IR(t,e,n,r={}){t=wt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Wr(r,s.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Aa(Aa.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:$C(r.mockUserToken,t.app.options.projectId);o=new Aa(a)}rs(e)&&(cv(e),uv("Database",!0)),wR(s,i,r,o)}/**
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
 */function kR(t){pk(ss),zi(new Hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cr(Lm,Dm,t),cr(Lm,Dm,"esm2020")}kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kR();const TR={apiKey:"AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",authDomain:"vgtk-parser.firebaseapp.com",projectId:"vgtk-parser",storageBucket:"vgtk-parser.firebasestorage.app",messagingSenderId:"369828135879",appId:"1:369828135879:web:ad18e0c1b525f3cbef0fe2",measurementId:"G-CETL1LFGEM",databaseURL:"https://vgtk-parser-default-rtdb.europe-west1.firebasedatabase.app/"},NR=gv(TR),Me=c1(NR),G=qv();de(Me,"users");de(Me,"hours/");const RR=async(t,e)=>{let n=[],r=[];try{const i=t&&t.includes("day-tomorrow.php"),s=i?"tomorrow":"today",o=i?"schedules/latest_tomorrow":"schedules/latest";console.log(`📡 Получаем расписание (${s}) из Firebase...`);const a=de(Me,o),c=(await xn(a)).val();if(!c||!c.schedule)return console.error("❌ Расписание не найдено в Firebase"),[[],[],""];const{schedule:d,date:u}=c;return console.log(`✅ Получено расписание на ${u}, групп: ${d.length}`),n=d.map(h=>({groupName:h.groupName,lessons:h.lessons.map(p=>({lessonName:p.lessonName,cabinet:p.cabinet,lessonNumber:p.lessonNumber,groupName:h.groupName,isLab:p.isLab||p.cabinet&&p.cabinet.includes("/")}))})),e&&(n.forEach(h=>{h.lessons.forEach(p=>{p.cabinet&&p.cabinet.split("/").includes(e)&&r.push({...p,groupName:h.groupName})})}),console.log(`🏢 Найдено уроков в кабинете ${e}: ${r.length}`)),[n,r,u||""]}catch(i){return console.error("❌ Ошибка при получении данных из Firebase:",i),[[],[],""]}};function u1(t){var a;const e=t.match(/на\s+(.+?)\s+года/i);if(!e)return null;const n=e[1].trim();let r=new Date(n);if(isNaN(r)){const l=n.split(/\s+/),c=parseInt(l[0],10),d=(a=l[1])==null?void 0:a.toLowerCase(),u=parseInt(l[2],10),p={января:0,февраля:1,марта:2,апреля:3,мая:4,июня:5,июля:6,августа:7,сентября:8,октября:9,ноября:10,декабря:11}[d];p!=null&&(r=new Date(u,p,c))}if(!r||isNaN(r))return null;const i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();return`${i}-${s}-${o}`}const PR="на 9 сентября 2025 года  (ВТОРНИК)",bR=u1(PR);console.log(bR);const AR="https://www.vgtk.by/schedule/lessons/day-today.php",LR="https://www.vgtk.by/schedule/lessons/day-tomorrow.php";var gt=function(){return gt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gt.apply(this,arguments)};function Al(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var me="-ms-",Ks="-moz-",se="-webkit-",d1="comm",pc="rule",Lf="decl",DR="@import",h1="@keyframes",OR="@layer",f1=Math.abs,Df=String.fromCharCode,Dd=Object.assign;function MR(t,e){return $e(t,0)^45?(((e<<2^$e(t,0))<<2^$e(t,1))<<2^$e(t,2))<<2^$e(t,3):0}function p1(t){return t.trim()}function gn(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,n){return t.replace(e,n)}function Da(t,e,n){return t.indexOf(e,n)}function $e(t,e){return t.charCodeAt(e)|0}function Yi(t,e,n){return t.slice(e,n)}function nn(t){return t.length}function m1(t){return t.length}function Ps(t,e){return e.push(t),t}function FR(t,e){return t.map(e).join("")}function hg(t,e){return t.filter(function(n){return!gn(n,e)})}var mc=1,Qi=1,g1=0,jt=0,Ne=0,us="";function gc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:mc,column:Qi,length:o,return:"",siblings:a}}function zn(t,e){return Dd(gc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ri(t){for(;t.root;)t=zn(t.root,{children:[t]});Ps(t,t.siblings)}function jR(){return Ne}function UR(){return Ne=jt>0?$e(us,--jt):0,Qi--,Ne===10&&(Qi=1,mc--),Ne}function Jt(){return Ne=jt<g1?$e(us,jt++):0,Qi++,Ne===10&&(Qi=1,mc++),Ne}function Mr(){return $e(us,jt)}function Oa(){return jt}function _c(t,e){return Yi(us,t,e)}function Od(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $R(t){return mc=Qi=1,g1=nn(us=t),jt=0,[]}function zR(t){return us="",t}function au(t){return p1(_c(jt-1,Md(t===91?t+2:t===40?t+1:t)))}function BR(t){for(;(Ne=Mr())&&Ne<33;)Jt();return Od(t)>2||Od(Ne)>3?"":" "}function WR(t,e){for(;--e&&Jt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return _c(t,Oa()+(e<6&&Mr()==32&&Jt()==32))}function Md(t){for(;Jt();)switch(Ne){case t:return jt;case 34:case 39:t!==34&&t!==39&&Md(Ne);break;case 40:t===41&&Md(t);break;case 92:Jt();break}return jt}function HR(t,e){for(;Jt()&&t+Ne!==57;)if(t+Ne===84&&Mr()===47)break;return"/*"+_c(e,jt-1)+"*"+Df(t===47?t:Jt())}function VR(t){for(;!Od(Mr());)Jt();return _c(t,jt)}function GR(t){return zR(Ma("",null,null,null,[""],t=$R(t),0,[0],t))}function Ma(t,e,n,r,i,s,o,a,l){for(var c=0,d=0,u=o,h=0,p=0,y=0,w=1,T=1,m=1,f=0,_="",v=i,E=s,x=r,C=_;T;)switch(y=f,f=Jt()){case 40:if(y!=108&&$e(C,u-1)==58){Da(C+=V(au(f),"&","&\f"),"&\f",f1(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=au(f);break;case 9:case 10:case 13:case 32:C+=BR(y);break;case 92:C+=WR(Oa()-1,7);continue;case 47:switch(Mr()){case 42:case 47:Ps(KR(HR(Jt(),Oa()),e,n,l),l);break;default:C+="/"}break;case 123*w:a[c++]=nn(C)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:T=0;case 59+d:m==-1&&(C=V(C,/\f/g,"")),p>0&&nn(C)-u&&Ps(p>32?pg(C+";",r,n,u-1,l):pg(V(C," ","")+";",r,n,u-2,l),l);break;case 59:C+=";";default:if(Ps(x=fg(C,e,n,c,d,i,a,_,v=[],E=[],u,s),s),f===123)if(d===0)Ma(C,e,x,x,v,s,u,a,E);else switch(h===99&&$e(C,3)===110?100:h){case 100:case 108:case 109:case 115:Ma(t,x,x,r&&Ps(fg(t,x,x,0,0,i,a,_,i,v=[],u,E),E),i,E,u,a,r?v:E);break;default:Ma(C,x,x,x,[""],E,0,a,E)}}c=d=p=0,w=m=1,_=C="",u=o;break;case 58:u=1+nn(C),p=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&UR()==125)continue}switch(C+=Df(f),f*w){case 38:m=d>0?1:(C+="\f",-1);break;case 44:a[c++]=(nn(C)-1)*m,m=1;break;case 64:Mr()===45&&(C+=au(Jt())),h=Mr(),d=u=nn(_=C+=VR(Oa())),f++;break;case 45:y===45&&nn(C)==2&&(w=0)}}return s}function fg(t,e,n,r,i,s,o,a,l,c,d,u){for(var h=i-1,p=i===0?s:[""],y=m1(p),w=0,T=0,m=0;w<r;++w)for(var f=0,_=Yi(t,h+1,h=f1(T=o[w])),v=t;f<y;++f)(v=p1(T>0?p[f]+" "+_:V(_,/&\f/g,p[f])))&&(l[m++]=v);return gc(t,e,n,i===0?pc:a,l,c,d,u)}function KR(t,e,n,r){return gc(t,e,n,d1,Df(jR()),Yi(t,2,-2),0,r)}function pg(t,e,n,r,i){return gc(t,e,n,Lf,Yi(t,0,r),Yi(t,r+1,-1),r,i)}function _1(t,e,n){switch(MR(t,e)){case 5103:return se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+t+t;case 4789:return Ks+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return se+t+Ks+t+me+t+t;case 5936:switch($e(t,e+11)){case 114:return se+t+me+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return se+t+me+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return se+t+me+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return se+t+me+t+t;case 6165:return se+t+me+"flex-"+t+t;case 5187:return se+t+V(t,/(\w+).+(:[^]+)/,se+"box-$1$2"+me+"flex-$1$2")+t;case 5443:return se+t+me+"flex-item-"+V(t,/flex-|-self/g,"")+(gn(t,/flex-|baseline/)?"":me+"grid-row-"+V(t,/flex-|-self/g,""))+t;case 4675:return se+t+me+"flex-line-pack"+V(t,/align-content|flex-|-self/g,"")+t;case 5548:return se+t+me+V(t,"shrink","negative")+t;case 5292:return se+t+me+V(t,"basis","preferred-size")+t;case 6060:return se+"box-"+V(t,"-grow","")+se+t+me+V(t,"grow","positive")+t;case 4554:return se+V(t,/([^-])(transform)/g,"$1"+se+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+t+t;case 4200:if(!gn(t,/flex-|baseline/))return me+"grid-column-align"+Yi(t,e)+t;break;case 2592:case 3360:return me+V(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,gn(r.props,/grid-\w+-end/)})?~Da(t+(n=n[e].value),"span",0)?t:me+V(t,"-start","")+t+me+"grid-row-span:"+(~Da(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(t,/\d+/))+";":me+V(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return gn(r.props,/grid-\w+-start/)})?t:me+V(V(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(t)-1-e>6)switch($e(t,e+1)){case 109:if($e(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Ks+($e(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Da(t,"stretch",0)?_1(V(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return V(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return me+i+":"+s+c+(o?me+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if($e(t,e+6)===121)return V(t,":",":"+se)+t;break;case 6444:switch($e(t,$e(t,14)===45?18:11)){case 120:return V(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+($e(t,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+me+"$2box$3")+t;case 100:return V(t,":",":"+me)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(t,"scroll-","scroll-snap-")+t}return t}function Ll(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function YR(t,e,n,r){switch(t.type){case OR:if(t.children.length)break;case DR:case Lf:return t.return=t.return||t.value;case d1:return"";case h1:return t.return=t.value+"{"+Ll(t.children,r)+"}";case pc:if(!nn(t.value=t.props.join(",")))return""}return nn(n=Ll(t.children,r))?t.return=t.value+"{"+n+"}":""}function QR(t){var e=m1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function qR(t){return function(e){e.root||(e=e.return)&&t(e)}}function XR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Lf:t.return=_1(t.value,t.length,n);return;case h1:return Ll([zn(t,{value:V(t.value,"@","@"+se)})],r);case pc:if(t.length)return FR(n=t.props,function(i){switch(gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ri(zn(t,{props:[V(i,/:(read-\w+)/,":"+Ks+"$1")]})),ri(zn(t,{props:[i]})),Dd(t,{props:hg(n,r)});break;case"::placeholder":ri(zn(t,{props:[V(i,/:(plac\w+)/,":"+se+"input-$1")]})),ri(zn(t,{props:[V(i,/:(plac\w+)/,":"+Ks+"$1")]})),ri(zn(t,{props:[V(i,/:(plac\w+)/,me+"input-$1")]})),ri(zn(t,{props:[i]})),Dd(t,{props:hg(n,r)});break}return""})}}var JR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},qi=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",y1="active",v1="data-styled-version",yc="6.1.13",Of=`/*!sc*/
`,Dl=typeof window<"u"&&"HTMLElement"in window,ZR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),vc=Object.freeze([]),Xi=Object.freeze({});function eP(t,e,n){return n===void 0&&(n=Xi),t.theme!==n.theme&&t.theme||e||n.theme}var w1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nP=/(^-|-$)/g;function mg(t){return t.replace(tP,"-").replace(nP,"")}var rP=/(a)(d)/gi,ha=52,gg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Fd(t){var e,n="";for(e=Math.abs(t);e>ha;e=e/ha|0)n=gg(e%ha)+n;return(gg(e%ha)+n).replace(rP,"$1-$2")}var lu,S1=5381,vi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},C1=function(t){return vi(S1,t)};function iP(t){return Fd(C1(t)>>>0)}function sP(t){return t.displayName||t.name||"Component"}function cu(t){return typeof t=="string"&&!0}var E1=typeof Symbol=="function"&&Symbol.for,x1=E1?Symbol.for("react.memo"):60115,oP=E1?Symbol.for("react.forward_ref"):60112,aP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cP=((lu={})[oP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lu[x1]=I1,lu);function _g(t){return("type"in(e=t)&&e.type.$$typeof)===x1?I1:"$$typeof"in t?cP[t.$$typeof]:aP;var e}var uP=Object.defineProperty,dP=Object.getOwnPropertyNames,yg=Object.getOwnPropertySymbols,hP=Object.getOwnPropertyDescriptor,fP=Object.getPrototypeOf,vg=Object.prototype;function k1(t,e,n){if(typeof e!="string"){if(vg){var r=fP(e);r&&r!==vg&&k1(t,r,n)}var i=dP(e);yg&&(i=i.concat(yg(e)));for(var s=_g(t),o=_g(e),a=0;a<i.length;++a){var l=i[a];if(!(l in lP||n&&n[l]||o&&l in o||s&&l in s)){var c=hP(e,l);try{uP(t,l,c)}catch{}}}}return t}function Ji(t){return typeof t=="function"}function Mf(t){return typeof t=="object"&&"styledComponentId"in t}function Ar(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function wg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function xo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function jd(t,e,n){if(n===void 0&&(n=!1),!n&&!xo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=jd(t[r],e[r]);else if(xo(e))for(var r in e)t[r]=jd(t[r],e[r]);return t}function Ff(t,e){Object.defineProperty(t,"toString",{value:e})}function zo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw zo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Of);return n},t}(),Fa=new Map,Ol=new Map,ja=1,fa=function(t){if(Fa.has(t))return Fa.get(t);for(;Ol.has(ja);)ja++;var e=ja++;return Fa.set(t,e),Ol.set(e,t),e},mP=function(t,e){ja=e+1,Fa.set(t,e),Ol.set(e,t)},gP="style[".concat(qi,"][").concat(v1,'="').concat(yc,'"]'),_P=new RegExp("^".concat(qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},vP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Of),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(_P);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(mP(d,c),yP(t,d,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Sg=function(t){for(var e=document.querySelectorAll(gP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(qi)!==y1&&(vP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function wP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(qi,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(qi,y1),r.setAttribute(v1,yc);var o=wP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},SP=function(){function t(e){this.element=T1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw zo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),CP=function(){function t(e){this.element=T1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),EP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Cg=Dl,xP={isServer:!Dl,useCSSOMInjection:!ZR},N1=function(){function t(e,n,r){e===void 0&&(e=Xi),n===void 0&&(n={});var i=this;this.options=gt(gt({},xP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dl&&Cg&&(Cg=!1,Sg(this)),Ff(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(u){var h=function(m){return Ol.get(m)}(u);if(h===void 0)return"continue";var p=s.names.get(h),y=o.getGroup(u);if(p===void 0||!p.size||y.length===0)return"continue";var w="".concat(qi,".g").concat(u,'[id="').concat(h,'"]'),T="";p!==void 0&&p.forEach(function(m){m.length>0&&(T+="".concat(m,","))}),l+="".concat(y).concat(w,'{content:"').concat(T,'"}').concat(Of)},d=0;d<a;d++)c(d);return l}(i)})}return t.registerId=function(e){return fa(e)},t.prototype.rehydrate=function(){!this.server&&Dl&&Sg(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(gt(gt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new EP(i):r?new SP(i):new CP(i)}(this.options),new pP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(fa(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(fa(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(fa(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),IP=/&/g,kP=/^\s*\/\/.*$/gm;function R1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=R1(n.children,e)),n})}function TP(t){var e,n,r,i=Xi,s=i.options,o=s===void 0?Xi:s,a=i.plugins,l=a===void 0?vc:a,c=function(h,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},d=l.slice();d.push(function(h){h.type===pc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(IP,n).replace(r,c))}),o.prefix&&d.push(XR),d.push(YR);var u=function(h,p,y,w){p===void 0&&(p=""),y===void 0&&(y=""),w===void 0&&(w="&"),e=w,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var T=h.replace(kP,""),m=GR(y||p?"".concat(y," ").concat(p," { ").concat(T," }"):T);o.namespace&&(m=R1(m,o.namespace));var f=[];return Ll(m,QR(d.concat(qR(function(_){return f.push(_)})))),f};return u.hash=l.length?l.reduce(function(h,p){return p.name||zo(15),vi(h,p.name)},S1).toString():"",u}var NP=new N1,Ud=TP(),P1=Ai.createContext({shouldForwardProp:void 0,styleSheet:NP,stylis:Ud});P1.Consumer;Ai.createContext(void 0);function Eg(){return N.useContext(P1)}var RP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ud);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ff(this,function(){throw zo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ud),this.name+e.hash},t}(),PP=function(t){return t>="A"&&t<="Z"};function xg(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;PP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var b1=function(t){return t==null||t===!1||t===""},A1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!b1(s)&&(Array.isArray(s)&&s.isCss||Ji(s)?r.push("".concat(xg(i),":"),s,";"):xo(s)?r.push.apply(r,Al(Al(["".concat(i," {")],A1(s),!1),["}"],!1)):r.push("".concat(xg(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in JR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fr(t,e,n,r){if(b1(t))return[];if(Mf(t))return[".".concat(t.styledComponentId)];if(Ji(t)){if(!Ji(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Fr(i,e,n,r)}var s;return t instanceof RP?n?(t.inject(n,r),[t.getName(r)]):[t]:xo(t)?A1(t):Array.isArray(t)?Array.prototype.concat.apply(vc,t.map(function(o){return Fr(o,e,n,r)})):[t.toString()]}function bP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ji(n)&&!Mf(n))return!1}return!0}var AP=C1(yc),LP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&bP(e),this.componentId=n,this.baseHash=vi(AP,n),this.baseStyle=r,N1.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ar(i,this.staticRulesId);else{var s=wg(Fr(this.rules,e,n,r)),o=Fd(vi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ar(i,o),this.staticRulesId=o}else{for(var l=vi(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var u=this.rules[d];if(typeof u=="string")c+=u;else if(u){var h=wg(Fr(u,e,n,r));l=vi(l,h+d),c+=h}}if(c){var p=Fd(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),i=Ar(i,p)}}return i},t}(),L1=Ai.createContext(void 0);L1.Consumer;var uu={};function DP(t,e,n){var r=Mf(t),i=t,s=!cu(t),o=e.attrs,a=o===void 0?vc:o,l=e.componentId,c=l===void 0?function(v,E){var x=typeof v!="string"?"sc":mg(v);uu[x]=(uu[x]||0)+1;var C="".concat(x,"-").concat(iP(yc+x+uu[x]));return E?"".concat(E,"-").concat(C):C}(e.displayName,e.parentComponentId):l,d=e.displayName,u=d===void 0?function(v){return cu(v)?"styled.".concat(v):"Styled(".concat(sP(v),")")}(t):d,h=e.displayName&&e.componentId?"".concat(mg(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;y=function(v,E){return w(v,E)&&T(v,E)}}else y=w}var m=new LP(n,h,r?i.componentStyle:void 0);function f(v,E){return function(x,C,L){var H=x.attrs,O=x.componentStyle,Se=x.defaultProps,Be=x.foldedComponentIds,Xe=x.styledComponentId,dn=x.target,Ut=Ai.useContext(L1),St=Eg(),De=x.shouldForwardProp||St.shouldForwardProp,P=eP(C,Ut,Se)||Xi,M=function(W,$,X){for(var ae,Ce=gt(gt({},$),{className:void 0,theme:X}),B=0;B<W.length;B+=1){var ie=Ji(ae=W[B])?ae(Ce):ae;for(var ee in ie)Ce[ee]=ee==="className"?Ar(Ce[ee],ie[ee]):ee==="style"?gt(gt({},Ce[ee]),ie[ee]):ie[ee]}return $.className&&(Ce.className=Ar(Ce.className,$.className)),Ce}(H,C,P),U=M.as||dn,re={};for(var Z in M)M[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&M.theme===P||(Z==="forwardedAs"?re.as=M.forwardedAs:De&&!De(Z,U)||(re[Z]=M[Z]));var R=function(W,$){var X=Eg(),ae=W.generateAndInjectStyles($,X.styleSheet,X.stylis);return ae}(O,M),F=Ar(Be,Xe);return R&&(F+=" "+R),M.className&&(F+=" "+M.className),re[cu(U)&&!w1.has(U)?"class":"className"]=F,re.ref=L,N.createElement(U,re)}(_,v,E)}f.displayName=u;var _=Ai.forwardRef(f);return _.attrs=p,_.componentStyle=m,_.displayName=u,_.shouldForwardProp=y,_.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=h,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var L=0,H=x;L<H.length;L++)jd(E,H[L],!0);return E}({},i.defaultProps,v):v}}),Ff(_,function(){return".".concat(_.styledComponentId)}),s&&k1(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Ig(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var kg=function(t){return Object.assign(t,{isCss:!0})};function OP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ji(t)||xo(t))return kg(Fr(Ig(vc,Al([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Fr(r):kg(Fr(Ig(r,e)))}function $d(t,e,n){if(n===void 0&&(n=Xi),!e)throw zo(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,OP.apply(void 0,Al([i],s,!1)))};return r.attrs=function(i){return $d(t,e,gt(gt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $d(t,e,gt(gt({},n),i))},r}var D1=function(t){return $d(DP,t)},A=D1;w1.forEach(function(t){A[t]=D1(t)});const MP=t=>{switch(t){case 0:return"var(--input-background-color)";case 1:return"green";case 2:return"red"}},Tg=A.div`
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
`,Ng=A.form`
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
`,du=A.div`
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
`,$n=A.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`,FP=A.div`
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
`,jP=A.input`
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
`,UP=A.div`
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
`,pa=A.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,$P=A.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`,zP=A.header`
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
`,hu=A.img`
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
  border-color: ${t=>MP(t.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`,BP=A.button`
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
`,WP=A.button`
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
`,HP=A.input`
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
`,VP=A.div`
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
`,Rg=A.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`,ii=A.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,GP=A.div`
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
`;const KP=A.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`,YP=A.div`
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
`,Pg=A.button`
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
`,bg=({handleInputChange:t,inputValue:e})=>g.jsx("div",{children:g.jsx(jP,{required:!0,type:"text",value:e,onChange:t})}),O1=async()=>{try{const e=await(await fetch("https://www.vgtk.by/schedule/lessons/day-today.php")).text(),n=document.createElement("div");n.innerHTML=e;const r=n.querySelector("table");(u=>{for(let h=0;h<u.rows.length;h++){let p=u.rows[h];for(let y=0;y<p.cells.length;y++){let w=p.cells[y],T=parseInt(w.getAttribute("rowspan"));if(w.hasAttribute("rowspan")&&T>1){let m=w.cloneNode(!0);w.removeAttribute("rowspan");for(let f=1;f<T;f++){let _=u.rows[h+f];if(_&&y<=_.cells.length){let v=_.insertCell(y);v.innerHTML=m.innerHTML}}}}}})(r);const s=new Set,o=new Map,a=/^[А-Я]{1,3}-\d{2,3}$/,l=/^[А-Я\s.]+$/;let c=null;for(let u=0;u<r.rows.length;u++){const h=r.rows[u],p=h.cells[0];if(p){const y=p.innerText.trim();l.test(y)&&y.length>5&&(c=y,o.has(c)||o.set(c,[]))}Array.from(h.cells).forEach(y=>{const w=y.innerText.trim();if(a.test(w)&&c){s.add(w);const T=o.get(c);T&&!T.includes(w)&&T.push(w)}})}o.forEach((u,h)=>{o.set(h,u.sort())});const d=Object.fromEntries(o);return{allGroups:Array.from(s).sort(),groupsByDepartment:d}}catch(t){return console.error("Ошибка при парсинге групп:",t),{allGroups:[],groupsByDepartment:{}}}};let fu=[],Ys={};const QP=async()=>{const t=await O1();return fu=t.allGroups,Ys=t.groupsByDepartment,console.log("Загружены группы:",fu),console.log("Группы по отделениям:",Ys),{allGroups:fu,groupsByDepartment:Ys}};QP();const pu=A.select`
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
`,qP=({handleSelectChange:t,selectValue:e})=>{const[n,r]=N.useState([]),[i,s]=N.useState(!0),[o,a]=N.useState(null);return N.useEffect(()=>{(async()=>{try{s(!0);const c=await O1();r(c.allGroups),a(null)}catch(c){console.error("Ошибка загрузки групп:",c),a("Не удалось загрузить список групп")}finally{s(!1)}})()},[]),i?g.jsx(pu,{type:"text",required:!0,disabled:!0,children:g.jsx("option",{children:"Загрузка групп..."})}):o?g.jsx(pu,{type:"text",required:!0,disabled:!0,children:g.jsx("option",{children:o})}):g.jsxs(pu,{type:"text",required:!0,value:e,onChange:t,children:[g.jsx("option",{value:"",disabled:!0,selected:!e,hidden:!0,children:"Группа"}),n.map(l=>g.jsx("option",{value:l,children:l},l))]})},XP=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`,Ag=({handleCheckBoxChange:t,label:e})=>g.jsx("label",{children:g.jsxs(XP,{children:[g.jsx("div",{children:e}),g.jsx("input",{onChange:t,type:"checkbox"})]})});var M1={exports:{}},JP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZP=JP,eb=ZP;function F1(){}function j1(){}j1.resetWarningCache=F1;var tb=function(){function t(r,i,s,o,a,l){if(l!==eb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:j1,resetWarningCache:F1};return n.PropTypes=n,n};M1.exports=tb();var nb=M1.exports;const kr=Bd(nb),jf=Ai.memo(({handleChangeTheme:t,theme:e})=>g.jsx(g.Fragment,{children:g.jsxs("label",{className:"switch",children:[g.jsx("input",{onChange:t,type:"checkbox",className:"themeSwitcher",checked:e==="light"}),g.jsx("span",{className:"slider"})]})}));jf.displayName="ThemeSwitcher";jf.propTypes={handleChangeTheme:kr.func,theme:kr.string};const rb=""+new URL("gerb-EUG4mf70.png",import.meta.url).href,ib=""+new URL("inco-Cw7QgD9S.png",import.meta.url).href;function sb(){const t=N.useRef(null),[e,n]=N.useState(null);return N.useEffect(()=>{const r=document.createElement("div");return t.current=r,document.body.appendChild(r),t.current&&n(t.current),()=>{document.body.removeChild(r)}},[]),e}const Qn=({active:t,setActive:e,children:n})=>{const r=()=>{e(!1)},i=sb();return i&&RC.createPortal(g.jsx("div",{className:t?"modal active":"modal",onClick:r,children:g.jsx("div",{className:t?"modal_content active":"modal_content",onClick:s=>s.stopPropagation(),children:n})}),i)};Qn.propTypes={active:kr.bool,setActive:kr.func,children:kr.oneOfType([kr.object,kr.array])};const ob=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,ab=ob?"dark":"light",lb=()=>{const[t,e]=N.useState(localStorage.getItem("app-theme")||ab);return N.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("app-theme",t)},[t]),{theme:t,setTheme:e}};var Ve=[];for(var mu=0;mu<256;++mu)Ve.push((mu+256).toString(16).slice(1));function cb(t,e=0){return(Ve[t[e+0]]+Ve[t[e+1]]+Ve[t[e+2]]+Ve[t[e+3]]+"-"+Ve[t[e+4]]+Ve[t[e+5]]+"-"+Ve[t[e+6]]+Ve[t[e+7]]+"-"+Ve[t[e+8]]+Ve[t[e+9]]+"-"+Ve[t[e+10]]+Ve[t[e+11]]+Ve[t[e+12]]+Ve[t[e+13]]+Ve[t[e+14]]+Ve[t[e+15]]).toLowerCase()}var ma,ub=new Uint8Array(16);function db(){if(!ma&&(ma=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ma))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ma(ub)}var hb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Lg={randomUUID:hb};function fb(t,e,n){if(Lg.randomUUID&&!e&&!t)return Lg.randomUUID();t=t||{};var r=t.random||(t.rng||db)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,cb(r)}const gu={1:"09.00 - 09.45",2:"09.55 - 10.40",3:"10.50 - 11.35",4:"11.45 - 12.30",5:"12.40 - 13.25",6:"13.35 - 14.20",7:"14.30 - 15.15",8:"15.25 - 16.10",9:"16.20 - 17.05",10:"17.15 - 18.00",11:"18.10 - 18.55"},pb=A.button`
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
`,mb=({handleClick:t,displayName:e,displayNameAlt:n})=>{const[r,i]=N.useState(!1),s=()=>{t(),i(o=>!o)};return g.jsx(pb,{isToggled:r,onClick:s,children:r?e||"Название":n||"Алтернативное название"})};/*! *****************************************************************************
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
***************************************************************************** */function gb(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{c(r.next(d))}catch(u){o(u)}}function l(d){try{c(r.throw(d))}catch(u){o(u)}}function c(d){d.done?s(d.value):i(d.value).then(a,l)}c((r=r.apply(t,[])).next())})}function _b(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var wi=function(){return wi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wi.apply(this,arguments)},U1=function(t){return{loading:t==null,value:t}},yb=function(){return function(t,e){switch(e.type){case"error":return wi(wi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return U1(e.defaultValue);case"value":return wi(wi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},vb=function(t){var e=t?t():void 0,n=N.useReducer(yb(),U1(e)),r=n[0],i=n[1],s=N.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=N.useCallback(function(l){i({type:"error",error:l})},[]),a=N.useCallback(function(l){i({type:"value",value:l})},[]);return N.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},wb=function(t,e){var n=vb(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return N.useEffect(function(){var l=tI(t,function(c){return gb(void 0,void 0,void 0,function(){var d;return _b(this,function(u){switch(u.label){case 0:return[3,4];case 1:return u.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return u.sent(),[3,4];case 3:return d=u.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const Sb=A.div`
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
`,Cb=A.div`
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
`,Eb=A.h2`
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
`,xb=A.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 12px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 8px;
  }
`,Ib=A.table`
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
`,kb=A.th`
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
`,Dg=A.th`
  width: 55px;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 45px;
    font-size: 12px;
    min-width: 40px;
  }
`,Tb=A.td`
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
`,Nb=A.td`
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
`,Rb=A.div`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Pb=A.div`
  position: absolute;
  right: 2px;
  bottom: 2px;
  font-size: 10px;
  opacity: 0.8;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`,_u=A.td`
  text-align: center;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    min-width: 50px;
  }
`,bb=A.td`
  position: sticky;
  left: 0;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  border: 2px solid #999;
  transition: background 0.2s ease;
`,Ab=A.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Og=A.h3`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`,Lb=A.div`
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
`,yu=A.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`,Mg=A.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,Fg=A.input`
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
`,Db=A.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #000;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`,Ob=A.h4`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`,Mb=A.div`
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
`,Fb=A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`,jb=A.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    min-height: 44px;
  }
`,Ub=A.div`
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
`;function $b(t){if(!(t instanceof Date)||isNaN(t))return"";const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${n}-${r}`}function zd(t){const[e,n,r]=t.split("-").map(Number);return new Date(Date.UTC(r,n-1,e))}function zb(t){return!t||t.length===0?1:t.reduce((n,r)=>Math.max(n,r.id||0),0)+1}function Bb(t=""){return typeof t=="string"&&t.trim().startsWith("П")}function Wb(t){return[...t].sort((e,n)=>zd(e)-zd(n))}const Hb=({rawData:t,onRawDataChange:e,userTarification:n})=>{const[r,i]=N.useState(()=>{const R=new Date;return new Date(R.getFullYear(),R.getMonth(),1)}),[s,o]=N.useState(!1),[a,l]=N.useState(!1),[c,d]=N.useState(""),[u,h]=N.useState({date:"",lessonName:"",groupName:"",total:0}),[p,y]=N.useState([]),[w,T]=N.useState({isLab:!1,cabinet:""}),[m,f]=N.useState(null),[_,v]=N.useState(null),{datesInMonth:E,rows:x,totalsByDate:C,grandTotal:L}=N.useMemo(()=>{const R=Object.keys(t||{}),F=Wb(R),W=F.map(B=>({ds:B,date:zd(B)})).filter(({date:B})=>B.getFullYear()===r.getFullYear()&&B.getMonth()===r.getMonth()).map(B=>B.ds),$=new Set;(n||[]).forEach(B=>{B&&$.add(`${B.lesson}|||${B.groupName}`)}),Object.values(t||{}).flat().forEach(B=>{B&&B.lessonName&&B.groupName&&$.add(`${B.lessonName}|||${B.groupName}`)});const X=Array.from($).map(B=>{const[ie,ee]=B.split("|||"),hn=Bb(ee),fn=[];F.forEach(Oe=>{(Array.isArray(t[Oe])?t[Oe]:[]).filter(ht=>ht.lessonName===ie&&ht.groupName===ee).sort((ht,Sr)=>(ht.id||0)-(Sr.id||0)).forEach(ht=>fn.push({item:ht,ds:Oe}))});const Mn=new Map;let Je=0,pn=0;fn.forEach(({item:Oe,ds:Fn},ht)=>{hn?(Je+=1,Mn.set(`${Fn}-${Oe.id}`,Je)):(pn+=1,pn===1&&(Je+=1),Mn.set(`${Fn}-${Oe.id}`,Je),pn===2&&(pn=0))});const rt={};let Uf=Je;return W.forEach(Oe=>{const ht=(Array.isArray(t[Oe])?t[Oe]:[]).filter(Ct=>Ct.lessonName===ie&&Ct.groupName===ee),Sr=ht.filter(Ct=>Ct.isLab).length,Bo=ht.filter(Ct=>!Ct.isLab).length,wc=Sr+Bo,Wo=new Set;ht.forEach(Ct=>{const Zr=Mn.get(`${Oe}-${Ct.id}`);Zr&&Wo.add(Zr)}),rt[Oe]={labs:Sr,lectures:Bo,total:wc,indices:Array.from(Wo).sort((Ct,Zr)=>Ct-Zr)}}),{lessonName:ie,groupName:ee,cells:rt,sum:Uf}}),ae={};let Ce=0;return W.forEach(B=>{const ie=X.reduce((ee,hn)=>{var fn;return ee+(((fn=hn.cells[B])==null?void 0:fn.total)||0)},0);ae[B]=ie,Ce+=ie}),{datesInMonth:W,rows:X,totalsByDate:ae,grandTotal:Ce}},[t,r,n]),H=()=>i(R=>new Date(R.getFullYear(),R.getMonth()-1,1)),O=()=>i(R=>new Date(R.getFullYear(),R.getMonth()+1,1)),Se=({labs:R,lectures:F})=>R>0&&F>0?"linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)":R>0?"rgb(255,122,92)":F>0?"rgb(102,153,204)":"transparent",Be="rgba(199, 18, 18, 0.301)",Xe=(R,F,W)=>{const $=Se(R);return m===F||_===W?{background:$,boxShadow:`inset 0 0 0 1000px ${Be}`}:{background:$}},dn=(R,F,W,$)=>{const X=Array.isArray(t[R])?t[R].filter(ae=>ae.lessonName===F&&ae.groupName===W):[];h({date:R,lessonName:F,groupName:W,total:$}),y(X),T({isLab:!1,cabinet:""}),o(!0)},Ut=async R=>{var Mn;const F=(Mn=G==null?void 0:G.currentUser)==null?void 0:Mn.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:W,lessonName:$,groupName:X,isLab:ae,cabinet:Ce}=R,B=t[W]||[],ee={id:zb(B),lessonName:$,groupName:X,isLab:ae,cabinet:Ce},hn=[...B,ee];e(Je=>({...Je,[W]:hn}));const fn=`users/${F}/hours/${W}`;try{await sn(de(Me,fn),hn),console.log(`Урок ${ee.id} добавлен на ${W} и отправлен в DB.`),s&&u.date===W&&y(Je=>[...Je,ee])}catch(Je){console.error("Ошибка при добавлении урока в Firebase:",Je),alert("Ошибка при добавлении урока."),e(pn=>({...pn,[W]:B}))}},St=async(R,F)=>{var B;const W=(B=G==null?void 0:G.currentUser)==null?void 0:B.uid;if(!W){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:$}=u;if(!$||!Array.isArray(t[$]))return;const X=t[$],ae=X.map(ie=>ie.id===R?{...ie,...F}:ie);e(ie=>({...ie,[$]:ae}));const Ce=`users/${W}/hours/${$}`;try{await sn(de(Me,Ce),ae),console.log(`Урок ${R} на ${$} обновлен в DB.`),y(ie=>ie.map(ee=>ee.id===R?{...ee,...F}:ee))}catch(ie){console.error("Ошибка при обновлении урока в Firebase:",ie),alert("Ошибка при обновлении урока."),e(ee=>({...ee,[$]:X}))}},De=async R=>{var Ce;const F=(Ce=G==null?void 0:G.currentUser)==null?void 0:Ce.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:W}=u;if(!W||!Array.isArray(t[W]))return;const $=t[W],X=$.filter(B=>B.id!==R);e(B=>({...B,[W]:X}));const ae=`users/${F}/hours/${W}`;try{X.length===0?await sn(de(Me,ae),null):await sn(de(Me,ae),X),console.log(`Урок ${R} на ${W} удален из DB.`),y(B=>B.filter(ie=>ie.id!==R)),X.length===0&&o(!1)}catch(B){console.error("Ошибка при удалении урока из Firebase:",B),alert("Ошибка при удалении урока."),e(ie=>({...ie,[W]:$}))}},P=(R,F,W)=>{const $=[...p];$[R]={...$[R],[F]:W},y($)},M=R=>St(R.id,{isLab:R.isLab,cabinet:R.cabinet}),U=R=>De(R.id),re=()=>{Ut({date:u.date,lessonName:u.lessonName,groupName:u.groupName,isLab:w.isLab,cabinet:w.cabinet}),T({isLab:!1,cabinet:""})},Z=()=>{if(!c){alert("Пожалуйста, выберите дату.");return}if(Object.keys(t).includes(c)){alert("Дата уже существует в таблице.");return}e(R=>({...R,[c]:[]})),l(!1),console.log(`Дата ${c} добавлена локально.`)};return g.jsxs(Sb,{children:[g.jsxs(Cb,{children:[g.jsx(it,{onClick:H,children:"← Пред. месяц"}),g.jsxs(Eb,{children:["Расписание за"," ",r.toLocaleString("ru-RU",{month:"long",year:"numeric"})]}),g.jsx(it,{onClick:O,children:"След. месяц →"}),g.jsx(it,{onClick:()=>{l(!0),d("")},children:"Добавить дату"})]}),g.jsx(xb,{children:g.jsxs(Ib,{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx(kb,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Предмет / Группа"}),E.map(R=>g.jsx(Dg,{$isHovered:m===R,onMouseEnter:()=>f(R),onMouseLeave:()=>f(null),children:R},R)),g.jsx(Dg,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Итого (занятий)"})]})}),g.jsx("tbody",{children:x.map(({lessonName:R,groupName:F,cells:W,sum:$})=>{const X=`${R}|||${F}`;return g.jsxs("tr",{onMouseEnter:()=>v(X),onMouseLeave:()=>v(null),children:[g.jsxs(Tb,{$isHovered:_===X,children:[R,g.jsx("br",{}),g.jsxs("small",{children:["(",F,")"]})]}),E.map(ae=>{const{labs:Ce,lectures:B,total:ie,indices:ee}=W[ae]||{labs:0,lectures:0,total:0,indices:[]};return g.jsxs(Nb,{onClick:()=>dn(ae,R,F,C[ae]),style:Xe({labs:Ce,lectures:B},ae,X),onMouseEnter:()=>{f(ae),v(X)},onMouseLeave:()=>{f(null),v(null)},children:[g.jsx(Rb,{children:ie||""}),ee&&ee.length>0&&g.jsx(Pb,{children:ee.join(",")})]},ae)}),g.jsx(_u,{$isHovered:_===X,children:$})]},X)})}),g.jsx("tfoot",{children:g.jsxs("tr",{onMouseEnter:()=>v("footer-row-key"),onMouseLeave:()=>v(null),children:[g.jsx(bb,{$isHovered:_==="footer-row-key",children:"Всего часов по дням:"}),E.map(R=>g.jsx(_u,{$isHovered:m===R||_==="footer-row-key",onMouseEnter:()=>{f(R),v("footer-row-key")},onMouseLeave:()=>{f(null),v(null)},children:C[R]},R)),g.jsx(_u,{$isHovered:_==="footer-row-key",children:L})]})})]})}),g.jsx(Qn,{active:s,setActive:o,children:g.jsxs(Ab,{children:[g.jsxs(Og,{children:[u.lessonName," (",u.groupName,")",g.jsx("br",{}),"Дата: ",u.date]}),p.length>0?p.map((R,F)=>g.jsxs(Lb,{children:[g.jsxs(yu,{children:[g.jsxs(Mg,{value:R.isLab?"lab":"lec",onChange:W=>P(F,"isLab",W.target.value==="lab"),children:[g.jsx("option",{value:"lec",children:"Лекция"}),g.jsx("option",{value:"lab",children:"Лабораторная"})]}),g.jsx(Fg,{type:"text",value:R.cabinet||"",onChange:W=>P(F,"cabinet",W.target.value),placeholder:"Кабинет"})]}),g.jsxs(yu,{children:[g.jsx(si,{$variant:"primary",onClick:()=>M(p[F]),children:"Сохранить"}),g.jsx(si,{$variant:"danger",onClick:()=>U(R),children:"Удалить"})]})]},R.id)):g.jsx("p",{children:"Пока нет занятий по этому предмету и группе на эту дату."}),g.jsxs(Db,{children:[g.jsx(Ob,{children:"Добавить занятие"}),g.jsxs(yu,{children:[g.jsxs(Mg,{value:w.isLab?"lab":"lec",onChange:R=>T(F=>({...F,isLab:R.target.value==="lab"})),children:[g.jsx("option",{value:"lec",children:"Лекция"}),g.jsx("option",{value:"lab",children:"Лабораторная"})]}),g.jsx(Fg,{type:"text",value:w.cabinet,onChange:R=>T(F=>({...F,cabinet:R.target.value})),placeholder:"Кабинет"})]}),g.jsx(si,{$variant:"success",onClick:re,children:"Добавить"})]}),g.jsx(Mb,{children:g.jsx(si,{onClick:()=>o(!1),children:"Закрыть"})})]})}),g.jsx(Qn,{active:a,setActive:l,children:g.jsxs(Fb,{children:[g.jsx(Og,{children:"Выберите дату для добавления"}),g.jsx(jb,{type:"date",onChange:R=>{const F=R.target.valueAsDate;d(F?$b(F):"")}}),g.jsxs(Ub,{children:[g.jsx(si,{$variant:"success",onClick:Z,disabled:!c,children:"Добавить"}),g.jsx(si,{onClick:()=>l(!1),children:"Отмена"})]})]})})]})},Vb={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#e6f3ff","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#fff0e6","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#e6ffe6","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#ffe6e6","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#e6e6ff","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#fff4e6","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#f0e6ff","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#ffe6f0"},Gb={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#1a3b4f","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#4f3b1a","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#1a4f1a","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#4f1a1a","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#1a1a4f","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#4f3d1a","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#2d1a4f","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#4f1a3b"},Kb=t=>{console.log("Поиск отделения для группы:",t),console.log("Доступные отделения:",Ys);for(const[e,n]of Object.entries(Ys))if(n.includes(t))return console.log("Найдено отделение:",e),e;return console.log("Отделение не найдено для группы:",t),null},jg=A.div`
  padding: 10px;
  max-width: 100%;
`,Ug=A.input`
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
`,Yb=A.div`
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
`,Qb=A.div`
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
`,qb=A.div`
  background: ${({theme:t,$departmentColor:e,$darkDepartmentColor:n})=>(console.log("GroupTitle props:",{theme:t,$departmentColor:e,$darkDepartmentColor:n}),t==="dark"&&n?(console.log("Используем темный цвет:",n),n):t==="light"&&e?(console.log("Используем светлый цвет:",e),e):(console.log("Используем цвет по умолчанию"),t==="dark"?"#3d3d3d":"#f5f5f5"))};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({theme:t})=>t==="dark"?"#444":"#e0e0e0"};

  /* Добавляем небольшой контраст для текста в темной теме */
  color: ${({theme:t,$darkDepartmentColor:e})=>t==="dark"&&e?"#fff":"inherit"};
`,Xb=A.div`
  display: flex;
  flex-direction: column;
`,Jb=A.div`
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
`,Zb=A.div`
  width: 40px;
  font-weight: bold;
  color: ${({theme:t})=>t==="dark"?"#aaa":"#666"};
`,eA=A.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tA=A.div`
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
`,$g=A.div`
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
`,nA=A.div`
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
`,zg=A.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #4a90e2;
    font-size: 18px;
  }
`,rA=({schedule:t,dateSchedule:e,theme:n="light"})=>{const[r,i]=N.useState(""),[s,o]=N.useState(0),[a,l]=N.useState(!1);if(console.log("AllGroupsSchedule рендер, theme:",n),!t||!Array.isArray(t)||t.length===0)return g.jsxs(jg,{children:[g.jsx(Ug,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),g.jsx($g,{children:"Нет данных о расписании"})]});const c=t.filter(d=>{if(!d)return!1;const u=d.groupName||"",h=r.toLowerCase(),p=u.toLowerCase().includes(h),w=(d.lessons||[]).some(T=>T?(T.lessonName||"").toLowerCase().includes(h):!1);return p||w});return N.useEffect(()=>{l(!0),o(c.length);const d=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(d)},[c.length]),g.jsxs(jg,{children:[g.jsx(Ug,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),g.jsxs(nA,{theme:n,children:[g.jsxs(zg,{children:["📊 Найдено групп: ",g.jsx("span",{children:c.length})]}),r&&g.jsxs(zg,{children:['🔍 Поиск: "',r,'"']})]}),g.jsx(Yb,{className:a?"searching":"",children:c.map((d,u)=>{const h=d.groupName||`Группа ${u+1}`,p=d.lessons||[],y=Kb(h);console.log(`Группа ${h}: отделение =`,y);const w=y?Vb[y]:null,T=y?Gb[y]:null;return console.log(`Цвета для ${h}:`,{departmentColor:w,darkDepartmentColor:T}),g.jsxs(Qb,{theme:n,style:{animationDelay:`${u*.1}s`},children:[g.jsx(qb,{theme:n,$departmentColor:w,$darkDepartmentColor:T,children:h}),g.jsx(Xb,{children:p.map((m,f)=>{const _=(m==null?void 0:m.lessonNumber)||f+1,v=(m==null?void 0:m.lessonName)||"Название не указано",E=(m==null?void 0:m.cabinet)||"---";return g.jsxs(Jb,{theme:n,index:f,children:[g.jsx(Zb,{theme:n,children:_}),g.jsxs(eA,{theme:n,children:[v,(m==null?void 0:m.isLab)&&" 🔬"]}),g.jsx(tA,{theme:n,children:E})]},f)})})]},h+u)})}),c.length===0&&g.jsxs($g,{children:['😕 Ничего не найдено по запросу "',r,'"']})]})},iA=()=>{var f,_;const[t,e]=N.useState(!1),[n,r]=N.useState(""),[i,s]=N.useState(""),[o,a]=N.useState(""),[l,c]=N.useState(!1),[d,u]=N.useState(null),p=qv().currentUser,y=c1();N.useEffect(()=>{p&&w()},[p]);const w=async()=>{if(p)try{const v=de(y,`users/${p.uid}/telegram`),E=await xn(v);E.exists()&&(c(!0),u(E.val()))}catch(v){console.error("Ошибка при проверке статуса:",v)}},T=async v=>{if(v.preventDefault(),!p){s("Необходимо войти в систему");return}const E=n.toUpperCase().trim();if(!E||E.length!==6){s("Введите корректный 6-значный код");return}e(!0),s(""),a("");try{const x=de(y,"tempLinks"),C=await xn(x);if(!C.exists()){s("Код не найден"),e(!1);return}const L=C.val();let H=null,O=null;for(const[St,De]of Object.entries(L))if(De.code===E&&!De.used&&De.expiresAt>Date.now()){H=St,O=De;break}if(!H){s("Код не найден или истек"),e(!1);return}const Se=de(y,`telegramLinks/${H}`);if((await xn(Se)).exists()){s("Этот Telegram уже привязан к другому аккаунту"),e(!1);return}const Xe=de(y,`users/${p.uid}/telegram`);if((await xn(Xe)).exists()){s("К этому аккаунту уже привязан Telegram"),e(!1);return}await La(de(y,`tempLinks/${H}`),{used:!0});const Ut={};Ut[`telegramLinks/${H}`]={firebaseUid:p.uid,linkedAt:Date.now(),telegramInfo:O.telegramInfo},Ut[`users/${p.uid}/telegram`]={telegramId:Number(H),linkedAt:Date.now(),telegramInfo:O.telegramInfo},await La(de(y),Ut),setTimeout(async()=>{try{await mR(de(y,`tempLinks/${H}`))}catch(St){console.error("Ошибка при удалении временного кода:",St)}},5*60*1e3),a("Telegram успешно привязан!"),r(""),w()}catch(x){console.error("Ошибка при привязке:",x),s("Ошибка при привязке Telegram")}finally{e(!1)}},m=async()=>{if(!(!p||!d)&&window.confirm("Вы уверены, что хотите отвязать Telegram?")){e(!0),s(""),a("");try{const v={};v[`users/${p.uid}/telegram`]=null,v[`telegramLinks/${d.telegramId}`]=null,await La(de(y),v),c(!1),u(null),a("Telegram успешно отвязан")}catch(v){console.error("Ошибка при отвязке:",v),s("Ошибка при отвязке Telegram")}finally{e(!1)}}};return p?g.jsxs("div",{className:"telegram-link-container",children:[g.jsx("h3",{children:"📱 Привязка Telegram"}),i&&g.jsxs("div",{className:"alert alert-error",children:["❌ ",i]}),o&&g.jsxs("div",{className:"alert alert-success",children:["✅ ",o]}),l?g.jsxs("div",{className:"telegram-linked",children:[g.jsxs("div",{className:"telegram-info",children:[g.jsx("div",{className:"info-icon",children:"✅"}),g.jsxs("div",{className:"info-text",children:[g.jsx("strong",{children:"Telegram привязан"}),((f=d==null?void 0:d.telegramInfo)==null?void 0:f.username)&&g.jsxs("div",{children:["@",d.telegramInfo.username]}),((_=d==null?void 0:d.telegramInfo)==null?void 0:_.first_name)&&g.jsxs("div",{children:[d.telegramInfo.first_name," ",d.telegramInfo.last_name]}),g.jsxs("div",{className:"linked-date",children:["Привязан: ",new Date(d.linkedAt).toLocaleString()]})]})]}),g.jsx("button",{onClick:m,disabled:t,className:"btn btn-danger",children:t?"Отвязка...":"Отвязать Telegram"})]}):g.jsxs("div",{className:"telegram-unlinked",children:[g.jsxs("div",{className:"instruction-box",children:[g.jsx("h4",{children:"Как привязать Telegram:"}),g.jsxs("ol",{children:[g.jsxs("li",{children:["Откройте Telegram бота ",g.jsx("strong",{children:"@vgtk_schedule_bot"})]}),g.jsxs("li",{children:["Нажмите кнопку ",g.jsx("strong",{children:'"🔗 Привязать аккаунт"'})," или отправьте команду ",g.jsx("strong",{children:"/link"})]}),g.jsx("li",{children:"Бот пришлет вам 6-значный код"}),g.jsx("li",{children:"Введите этот код в поле ниже"})]})]}),g.jsxs("form",{onSubmit:T,className:"code-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"telegram-code",children:"Код из Telegram:"}),g.jsx("input",{type:"text",id:"telegram-code",value:n,onChange:v=>r(v.target.value.toUpperCase()),placeholder:"Например: A1B2C3",maxLength:"6",className:"code-input",disabled:t,autoComplete:"off",autoFocus:!0})]}),g.jsx("button",{type:"submit",disabled:t||n.length!==6,className:"btn btn-primary",children:t?"Проверка...":"Привязать Telegram"})]}),g.jsx("div",{className:"note",children:g.jsx("small",{children:"⏰ Код действителен 15 минут"})})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]}):g.jsx("div",{className:"telegram-link-container",children:g.jsx("div",{className:"alert alert-warning",children:"⚠️ Необходимо войти в систему для привязки Telegram"})})},sA=new yn,Is="commonAltNamings";function oA(){var Vf;const[t,e]=N.useState(!1),[n,r]=N.useState(!1),[i,s]=N.useState([]),[o,a]=N.useState([]),[l,c]=N.useState([]),[d,u]=N.useState("Пожалуйста подождите"),[h,p]=N.useState(""),[y,w]=N.useState(""),[T,m]=N.useState(!1),[f,_]=N.useState(!1),[v,E]=N.useState(!1),[x,C]=N.useState(0),[L,H]=N.useState(0),[O,Se]=N.useState(JSON.parse(localStorage.getItem("userTarification"))||[]),[Be,Xe]=N.useState([]),[dn,Ut]=N.useState(!1),[St,De]=N.useState(!1),[P,M]=N.useState(!1),[U,re]=N.useState(!1),[Z,R]=N.useState(""),[F,W]=N.useState(""),[$,X]=N.useState(""),[ae,Ce]=N.useState(""),[B,ie]=N.useState(""),[ee,hn]=N.useState(localStorage.getItem("userCabinet")||null),[fn,Mn]=N.useState(""),[Je,pn]=N.useState("my"),[rt,Uf]=wb(G),{theme:Oe,setTheme:Fn}=lb(),ht=async S=>{if(!rt)localStorage.setItem(Is,JSON.stringify(S));else try{await sn(de(Me,`${Is}`),S)}catch(D){console.error("Ошибка сохранения общих альтернативных названий:",D)}Xe(S)};N.useEffect(()=>{(async()=>{if(rt)try{const D=await xn(de(Me,`${Is}`));if(D.exists())Xe(D.val());else{const J=JSON.parse(localStorage.getItem(Is))||[];J.length>0?await ht(J):Xe([])}}catch(D){console.error("Ошибка загрузки общих альтернативных названий:",D)}else{const D=JSON.parse(localStorage.getItem(Is))||[];Xe(D)}})()},[rt]);const Sr=S=>{var D;rt?sn(de(Me,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/tarification`),S):(console.log("Нет пользователя"),localStorage.setItem("userTarification",JSON.stringify(S)))},Bo=S=>{var D;rt?La(de(Me,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/userInfo`),{cabinet:S}):localStorage.setItem("userCabinet",S)},wc=S=>{p(S.target.value)},Wo=S=>{ie(S.target.value)},Ct=N.useCallback(S=>{e(!0),W(S)},[]),Zr=N.useCallback(()=>{Ce(!0)},[]),$1=N.useCallback(S=>{r(!0),X(O.find(D=>D.id===S))},[O]),z1=()=>{E(S=>!S)},B1=()=>{m(S=>!S)},W1=S=>{w(S.target.value)},H1=S=>{R(S.target.value)},V1=N.useCallback(()=>{Fn(Oe==="light"?"dark":"light")},[Fn,Oe]),$f=S=>O.some(D=>D.groupName.toLowerCase().trim()===S.groupName.toLowerCase().trim()&&D.lesson.toLowerCase().trim()===S.lessonName.toLowerCase().trim()),zf=S=>Be.filter(D=>D.lessonName.toLowerCase().trim()===S.toLowerCase().trim()).flatMap(D=>D.altNaming),Bf=async(S,D)=>{const J=S.lesson,We=Be.find(He=>He.lessonName.toLowerCase().trim()===J.toLowerCase().trim());let Ee;if(We){if(We.altNaming.some(He=>He.toLowerCase().trim()===D.toLowerCase().trim())){alert("Название уже существует");return}Ee=Be.map(He=>He.lessonName.toLowerCase().trim()===J.toLowerCase().trim()?{...He,altNaming:[...He.altNaming,D]}:He)}else Ee=[...Be,{lessonName:J,altNaming:[D]}];await ht(Ee),ds()},G1=S=>{$f(S)?alert('Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.'):(console.log("УРОК ИЗ МОДАЛКИ",S),Mn(S.lessonName),De(!0))},Wf=()=>{var S;xn(de(Me,`users/${(S=G==null?void 0:G.currentUser)==null?void 0:S.uid}/hours`)).then(D=>{D.exists()?H(D.val()):console.log("No data available")}).catch(D=>{console.error(D)})},K1=()=>{if(O.some(D=>D.groupName.toLowerCase().trim()===y.toLowerCase().trim()&&D.lesson.toLowerCase().trim()===h.toLowerCase().trim()))console.log("Группа с таким названием и уроком уже существует!");else{const D={id:fb(),groupName:y,lesson:h,lecture:T,labs:v};Se(J=>[...J,D]),Sr([...O,D]),ds()}},Hf=(S,D)=>{S.preventDefault(),D()},ds=N.useCallback(()=>{const S=[];let D=0;const J=Ee=>(Ee||"").toLowerCase().trim(),We=new Map(i.map(Ee=>[(Ee.groupName??"").toLowerCase().trim(),Ee]));O.forEach(Ee=>{const{groupName:He,lesson:ei,labs:Ho,lecture:Z1}=Ee,ew=J(He),Gf=We.get(ew);if(!Gf)return;const tw=zf(ei);Gf.lessons.forEach(hs=>{const Kf=J(hs==null?void 0:hs.lessonName),nw=Kf===J(ei),rw=tw.some(Vo=>Kf===J(Vo)),Yf=!!hs.isLab;if((nw||rw)&&(Ho&&Yf||!Yf&&Z1)){const Vo={...hs,lessonName:ei};Vo.id=`${++D}`,S.push(Vo)}})}),S.sort((Ee,He)=>{const ei=parseFloat(Ee==null?void 0:Ee.lessonNumber)||0,Ho=parseFloat(He==null?void 0:He.lessonNumber)||0;return ei!==Ho?ei-Ho:((Ee==null?void 0:Ee.id)||"").localeCompare((He==null?void 0:He.id)||"")}),a(S)},[i,O,Be]),Y1=()=>{const S=u1(d),D=()=>{var J;C(1),sn(de(Me,`users/${(J=G==null?void 0:G.currentUser)==null?void 0:J.uid}/hours/${S}`),o).then(()=>{alert("Сохранено"),C(1),setTimeout(()=>{C(0)},5e3),Wf()}).catch(We=>{console.log(We),C(2),setTimeout(()=>{C(0)},5e3)})};o.length<9?confirm("Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?")&&D():D()},Q1=()=>CI(G,sA).then(()=>{}).catch(S=>{const D=S.code,J=S.message;console.log("error ",D,J)}),q1=()=>{nI(G).then(()=>{}).catch(S=>{console.log(S)})},X1=S=>{const D=O.filter(J=>J.id!==S);Se(D),Sr(D),ds()},J1=()=>{hn(Z),R(""),Bo(Z)};return N.useEffect(()=>{(async()=>{const[D,J,We]=await RR(P?AR:LR,ee);s(D),c(J),u(We)})()},[P,ee]),N.useEffect(()=>{ds(),Wf()},[i,l,O,Be,ds]),N.useEffect(()=>{var S,D;console.log("USER ИЗМЕНИЛСЯ"),rt?xn(de(Me,`users/${(S=G==null?void 0:G.currentUser)==null?void 0:S.uid}/tarification`)).then(J=>{var We;J.exists()?Se(J.val()):localStorage.getItem("userTarification")&&sn(de(Me,`users/${(We=G==null?void 0:G.currentUser)==null?void 0:We.uid}/tarification`),JSON.parse(localStorage.getItem("userTarification")||[]))}).catch(J=>{console.error(J)}):Se(JSON.parse(localStorage.getItem("userTarification"))||[]),rt&&xn(de(Me,`users/${(D=G==null?void 0:G.currentUser)==null?void 0:D.uid}/userInfo`)).then(J=>{var We;J.exists()?hn(J.val().cabinet):localStorage.getItem("userCabinet")?(sn(de(Me,`users/${(We=G==null?void 0:G.currentUser)==null?void 0:We.uid}/userInfo`),{cabinet:localStorage.getItem("userCabinet")}),console.log("localStorage To DB")):console.log("No cabinet yet")}).catch(J=>{console.error(J)})},[rt]),N.useEffect(()=>{var We;const S=(We=G==null?void 0:G.currentUser)==null?void 0:We.uid;if(!S)return;const D=de(Me,`users/${S}/hours`),J=_R(D,Ee=>{Ee.exists()?H(Ee.val()):(console.log("No data available"),H(null))},Ee=>{console.error(Ee)});return()=>J()},[]),console.log(o),g.jsxs(UP,{children:[g.jsxs(zP,{children:[g.jsx("a",{href:"https://www.vgtk.by",children:g.jsx(hu,{src:rb,alt:""})}),rt?g.jsx(hu,{src:rt.photoURL}):g.jsx(hu,{src:ib}),g.jsx(WP,{onClick:()=>{M(S=>!S)},children:d}),rt?g.jsxs(g.Fragment,{children:[g.jsx(it,{onClick:q1,children:"Выйти"}),g.jsx(it,{onClick:Zr,children:"Настройки профиля"})]}):g.jsx(it,{onClick:Q1,children:"Войти"}),g.jsx(jf,{handleChangeTheme:V1,theme:Oe})]}),g.jsxs(FP,{children:[g.jsxs(Ng,{onSubmit:S=>{Hf(S,K1)},action:"",children:[g.jsx(bg,{handleInputChange:wc,inputValue:h}),g.jsx(qP,{handleSelectChange:W1}),g.jsxs($P,{children:[g.jsx(Ag,{label:"Лабораторные",handleCheckBoxChange:z1}),g.jsx(Ag,{label:"Лекции",handleCheckBoxChange:B1})]}),g.jsx(it,{type:"submit",children:"Добавить"}),g.jsx(it,{onClick:()=>{Ut(S=>!S)},type:"button",children:"Редактировать"})]}),dn&&g.jsxs(g.Fragment,{children:["Ваша тарификация:",O.map(S=>g.jsxs(Tg,{children:[g.jsx($n,{children:S.lesson}),g.jsx(pa,{children:S.groupName}),g.jsxs("p",{children:["Лаб. ",S.labs?"Есть":"Нет"]}),g.jsxs("p",{children:["Лекции ",S.lecture?"Есть":"Нет"]}),g.jsx(it,{onClick:()=>{$1(S.id)},children:"Добавить названия"}),g.jsx(BP,{onClick:()=>X1(S.id),children:"Удалить"})]},S.id))]})]}),g.jsxs("div",{children:[g.jsxs(Rg,{children:[g.jsxs(YP,{children:[g.jsx(Pg,{active:Je==="my",onClick:()=>pn("my"),theme:Oe,children:"📋 Моё расписание"}),g.jsx(Pg,{active:Je==="all",onClick:()=>pn("all"),theme:Oe,children:"🏫 Все группы"})]}),Je==="my"&&g.jsxs(g.Fragment,{children:[g.jsxs(VP,{children:[g.jsx(HP,{onChange:H1,value:Z,type:"text",placeholder:`Ваш кабинет: ${ee}`}),g.jsx(GP,{onClick:J1,children:"+"})]}),g.jsx("div",{children:g.jsx(mb,{displayName:"Ваш кабинет",displayNameAlt:"Ваше расписание",handleClick:()=>{re(S=>!S)}})})]})]}),Je==="my"?g.jsxs(g.Fragment,{children:[g.jsxs(KP,{children:[!U&&o.map(S=>g.jsxs(du,{children:[g.jsx(ii,{children:S.lessonNumber}),g.jsx($n,{children:gu[S.lessonNumber]}),g.jsx($n,{children:S.lessonName}),g.jsx(pa,{onClick:()=>{Ct(S.groupName)},children:S.groupName}),g.jsx(ii,{children:S.cabinet})]},S.id)),U&&l.map(S=>g.jsxs(du,{children:[g.jsx(ii,{children:S.lessonNumber}),g.jsx($n,{children:gu[S.lessonNumber]}),g.jsx($n,{children:S.lessonName}),g.jsx(pa,{onClick:()=>{Ct(S.groupName)},children:S.groupName}),g.jsx(ii,{children:S.cabinet})]},`${S.lessonName+S.lessonNumber}`))]}),g.jsx(Rg,{children:rt&&g.jsxs(g.Fragment,{children:[g.jsx(it,{handleState:x,onClick:Y1,children:"Добавить в учет часов"}),g.jsx(it,{onClick:()=>{_(!0)},children:"Открыть учет часов"})]})})]}):g.jsx(rA,{schedule:i,dateSchedule:d,theme:Oe})]}),g.jsxs(Qn,{active:t,setActive:e,children:[g.jsxs("div",{children:["Расписание группы ",F]}),g.jsx("div",{children:(Vf=i.find(S=>S.groupName.toLowerCase().trim()===F.toLowerCase().trim()))==null?void 0:Vf.lessons.map(S=>g.jsxs(du,{children:[g.jsx(ii,{children:S.lessonNumber}),g.jsx($n,{children:gu[S.lessonNumber]}),g.jsx($n,{children:S.lessonName}),g.jsx(ii,{children:S.cabinet}),!$f(S)&&S.cabinet&&g.jsx(it,{onClick:()=>G1(S),children:"Добавить"})||g.jsx(it,{onClick:()=>handleDeleteByLesson(S),children:"Удалить"})]},S.lessonNumber))})]}),g.jsx(Qn,{active:ae,setActive:Ce,children:g.jsx(iA,{})}),g.jsxs(Qn,{active:n,setActive:r,children:[g.jsxs("div",{children:["Введите альтернативные названия для предмета ",g.jsx("br",{})," ",$==null?void 0:$.lesson]}),g.jsxs(Ng,{onSubmit:S=>{Hf(S,()=>{Bf($,B),ie("")})},action:"",children:[g.jsx(bg,{handleInputChange:Wo,inputValue:B}),g.jsx(it,{type:"submit",children:"Добавить"})]}),g.jsx("div",{children:"Альтернативные названия:"}),$&&zf($.lesson).map(S=>g.jsx("p",{children:S},S))]}),g.jsx(Qn,{active:f,setActive:_,children:g.jsx(Hb,{rawData:L,onRawDataChange:S=>{H(S)},userTarification:O})}),g.jsx(Qn,{active:St,setActive:De,children:O.map(S=>S.groupName===F&&g.jsxs(Tg,{children:[g.jsx($n,{children:S.lesson}),g.jsx(pa,{children:S.groupName}),g.jsx(it,{onClick:()=>{Bf(S,fn),De(!1)},children:"Добавить названия"})]},S.id))})]})}tv(document.getElementById("root")).render(g.jsx(oA,{}));
