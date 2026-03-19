(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var PE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Th(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var HC={exports:{}},bc={},LC={exports:{}},eA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),KE=Symbol.for("react.portal"),VE=Symbol.for("react.fragment"),GE=Symbol.for("react.strict_mode"),WE=Symbol.for("react.profiler"),jE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),$E=Symbol.for("react.forward_ref"),XE=Symbol.for("react.suspense"),YE=Symbol.for("react.memo"),JE=Symbol.for("react.lazy"),Gg=Symbol.iterator;function ZE(e){return e===null||typeof e!="object"?null:(e=Gg&&e[Gg]||e["@@iterator"],typeof e=="function"?e:null)}var kC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bC=Object.assign,DC={};function Zi(e,A,t){this.props=e,this.context=A,this.refs=DC,this.updater=t||kC}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(e,A){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,A,"setState")};Zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function NC(){}NC.prototype=Zi.prototype;function Hh(e,A,t){this.props=e,this.context=A,this.refs=DC,this.updater=t||kC}var Lh=Hh.prototype=new NC;Lh.constructor=Hh;bC(Lh,Zi.prototype);Lh.isPureReactComponent=!0;var Wg=Array.isArray,RC=Object.prototype.hasOwnProperty,kh={current:null},OC={key:!0,ref:!0,__self:!0,__source:!0};function MC(e,A,t){var n,r={},i=null,s=null;if(A!=null)for(n in A.ref!==void 0&&(s=A.ref),A.key!==void 0&&(i=""+A.key),A)RC.call(A,n)&&!OC.hasOwnProperty(n)&&(r[n]=A[n]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var a=Array(o),l=0;l<o;l++)a[l]=arguments[l+2];r.children=a}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)r[n]===void 0&&(r[n]=o[n]);return{$$typeof:Go,type:e,key:i,ref:s,props:r,_owner:kh.current}}function qE(e,A){return{$$typeof:Go,type:e.type,key:A,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Go}function AU(e){var A={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return A[t]})}var jg=/\/+/g;function Tu(e,A){return typeof e=="object"&&e!==null&&e.key!=null?AU(""+e.key):A.toString(36)}function rl(e,A,t,n,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Go:case KE:s=!0}}if(s)return s=e,r=r(s),e=n===""?"."+Tu(s,0):n,Wg(r)?(t="",e!=null&&(t=e.replace(jg,"$&/")+"/"),rl(r,A,t,"",function(l){return l})):r!=null&&(bh(r)&&(r=qE(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(jg,"$&/")+"/")+e)),A.push(r)),1;if(s=0,n=n===""?".":n+":",Wg(e))for(var o=0;o<e.length;o++){i=e[o];var a=n+Tu(i,o);s+=rl(i,A,t,a,r)}else if(a=ZE(e),typeof a=="function")for(e=a.call(e),o=0;!(i=e.next()).done;)i=i.value,a=n+Tu(i,o++),s+=rl(i,A,t,a,r);else if(i==="object")throw A=String(e),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return s}function da(e,A,t){if(e==null)return e;var n=[],r=0;return rl(e,n,"","",function(i){return A.call(t,i,r++)}),n}function eU(e){if(e._status===-1){var A=e._result;A=A(),A.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=A)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},il={transition:null},tU={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:il,ReactCurrentOwner:kh};function PC(){throw Error("act(...) is not supported in production builds of React.")}eA.Children={map:da,forEach:function(e,A,t){da(e,function(){A.apply(this,arguments)},t)},count:function(e){var A=0;return da(e,function(){A++}),A},toArray:function(e){return da(e,function(A){return A})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};eA.Component=Zi;eA.Fragment=VE;eA.Profiler=WE;eA.PureComponent=Hh;eA.StrictMode=GE;eA.Suspense=XE;eA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tU;eA.act=PC;eA.cloneElement=function(e,A,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=bC({},e.props),r=e.key,i=e.ref,s=e._owner;if(A!=null){if(A.ref!==void 0&&(i=A.ref,s=kh.current),A.key!==void 0&&(r=""+A.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in A)RC.call(A,a)&&!OC.hasOwnProperty(a)&&(n[a]=A[a]===void 0&&o!==void 0?o[a]:A[a])}var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){o=Array(a);for(var l=0;l<a;l++)o[l]=arguments[l+2];n.children=o}return{$$typeof:Go,type:e.type,key:r,ref:i,props:n,_owner:s}};eA.createContext=function(e){return e={$$typeof:zE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jE,_context:e},e.Consumer=e};eA.createElement=MC;eA.createFactory=function(e){var A=MC.bind(null,e);return A.type=e,A};eA.createRef=function(){return{current:null}};eA.forwardRef=function(e){return{$$typeof:$E,render:e}};eA.isValidElement=bh;eA.lazy=function(e){return{$$typeof:JE,_payload:{_status:-1,_result:e},_init:eU}};eA.memo=function(e,A){return{$$typeof:YE,type:e,compare:A===void 0?null:A}};eA.startTransition=function(e){var A=il.transition;il.transition={};try{e()}finally{il.transition=A}};eA.unstable_act=PC;eA.useCallback=function(e,A){return _e.current.useCallback(e,A)};eA.useContext=function(e){return _e.current.useContext(e)};eA.useDebugValue=function(){};eA.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};eA.useEffect=function(e,A){return _e.current.useEffect(e,A)};eA.useId=function(){return _e.current.useId()};eA.useImperativeHandle=function(e,A,t){return _e.current.useImperativeHandle(e,A,t)};eA.useInsertionEffect=function(e,A){return _e.current.useInsertionEffect(e,A)};eA.useLayoutEffect=function(e,A){return _e.current.useLayoutEffect(e,A)};eA.useMemo=function(e,A){return _e.current.useMemo(e,A)};eA.useReducer=function(e,A,t){return _e.current.useReducer(e,A,t)};eA.useRef=function(e){return _e.current.useRef(e)};eA.useState=function(e){return _e.current.useState(e)};eA.useSyncExternalStore=function(e,A,t){return _e.current.useSyncExternalStore(e,A,t)};eA.useTransition=function(){return _e.current.useTransition()};eA.version="18.3.1";LC.exports=eA;var L=LC.exports;const Ti=Th(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nU=L,rU=Symbol.for("react.element"),iU=Symbol.for("react.fragment"),sU=Object.prototype.hasOwnProperty,oU=nU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aU={key:!0,ref:!0,__self:!0,__source:!0};function KC(e,A,t){var n,r={},i=null,s=null;t!==void 0&&(i=""+t),A.key!==void 0&&(i=""+A.key),A.ref!==void 0&&(s=A.ref);for(n in A)sU.call(A,n)&&!aU.hasOwnProperty(n)&&(r[n]=A[n]);if(e&&e.defaultProps)for(n in A=e.defaultProps,A)r[n]===void 0&&(r[n]=A[n]);return{$$typeof:rU,type:e,key:i,ref:s,props:r,_owner:oU.current}}bc.Fragment=iU;bc.jsx=KC;bc.jsxs=KC;HC.exports=bc;var m=HC.exports,VC={exports:{}},We={},GC={exports:{}},WC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function A(T,R){var M=T.length;T.push(R);A:for(;0<M;){var tA=M-1>>>1,q=T[tA];if(0<r(q,R))T[tA]=R,T[M]=q,M=tA;else break A}}function t(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var R=T[0],M=T.pop();if(M!==R){T[0]=M;A:for(var tA=0,q=T.length,x=q>>>1;tA<x;){var O=2*(tA+1)-1,K=T[O],P=O+1,$=T[P];if(0>r(K,M))P<q&&0>r($,K)?(T[tA]=$,T[P]=M,tA=P):(T[tA]=K,T[O]=M,tA=O);else if(P<q&&0>r($,M))T[tA]=$,T[P]=M,tA=P;else break A}}return R}function r(T,R){var M=T.sortIndex-R.sortIndex;return M!==0?M:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var a=[],l=[],c=1,u=null,d=3,h=!1,g=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(T){for(var R=t(l);R!==null;){if(R.callback===null)n(l);else if(R.startTime<=T)n(l),R.sortIndex=R.expirationTime,A(a,R);else break;R=t(l)}}function C(T){if(w=!1,B(T),!g)if(t(a)!==null)g=!0,QA(Q);else{var R=t(l);R!==null&&gA(C,R.startTime-T)}}function Q(T,R){g=!1,w&&(w=!1,p(U),U=-1),h=!0;var M=d;try{for(B(R),u=t(a);u!==null&&(!(u.expirationTime>R)||T&&!rA());){var tA=u.callback;if(typeof tA=="function"){u.callback=null,d=u.priorityLevel;var q=tA(u.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?u.callback=q:u===t(a)&&n(a),B(R)}else n(a);u=t(a)}if(u!==null)var x=!0;else{var O=t(l);O!==null&&gA(C,O.startTime-R),x=!1}return x}finally{u=null,d=M,h=!1}}var v=!1,y=null,U=-1,I=5,H=-1;function rA(){return!(e.unstable_now()-H<I)}function yA(){if(y!==null){var T=e.unstable_now();H=T;var R=!0;try{R=y(!0,T)}finally{R?j():(v=!1,y=null)}}else v=!1}var j;if(typeof f=="function")j=function(){f(yA)};else if(typeof MessageChannel<"u"){var BA=new MessageChannel,YA=BA.port2;BA.port1.onmessage=yA,j=function(){YA.postMessage(null)}}else j=function(){_(yA,0)};function QA(T){y=T,v||(v=!0,j())}function gA(T,R){U=_(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,QA(Q))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var M=d;d=R;try{return T()}finally{d=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=d;d=T;try{return R()}finally{d=M}},e.unstable_scheduleCallback=function(T,R,M){var tA=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?tA+M:tA):M=tA,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=M+q,T={id:c++,callback:R,priorityLevel:T,startTime:M,expirationTime:q,sortIndex:-1},M>tA?(T.sortIndex=M,A(l,T),t(a)===null&&T===t(l)&&(w?(p(U),U=-1):w=!0,gA(C,M-tA))):(T.sortIndex=q,A(a,T),g||h||(g=!0,QA(Q))),T},e.unstable_shouldYield=rA,e.unstable_wrapCallback=function(T){var R=d;return function(){var M=d;d=R;try{return T.apply(this,arguments)}finally{d=M}}}})(WC);GC.exports=WC;var lU=GC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cU=L,Ge=lU;function F(e){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)A+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jC=new Set,uo={};function Nr(e,A){Hi(e,A),Hi(e+"Capture",A)}function Hi(e,A){for(uo[e]=A,e=0;e<A.length;e++)jC.add(A[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,uU=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zg={},$g={};function dU(e){return Wd.call($g,e)?!0:Wd.call(zg,e)?!1:uU.test(e)?$g[e]=!0:(zg[e]=!0,!1)}function fU(e,A,t,n){if(t!==null&&t.type===0)return!1;switch(typeof A){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hU(e,A,t,n){if(A===null||typeof A>"u"||fU(e,A,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!A;case 4:return A===!1;case 5:return isNaN(A);case 6:return isNaN(A)||1>A}return!1}function Ee(e,A,t,n,r,i,s){this.acceptsBooleans=A===2||A===3||A===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=A,this.sanitizeURL=i,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var A=e[0];le[A]=new Ee(A,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Nh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var A=e.replace(Dh,Nh);le[A]=new Ee(A,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var A=e.replace(Dh,Nh);le[A]=new Ee(A,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var A=e.replace(Dh,Nh);le[A]=new Ee(A,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rh(e,A,t,n){var r=le.hasOwnProperty(A)?le[A]:null;(r!==null?r.type!==0:n||!(2<A.length)||A[0]!=="o"&&A[0]!=="O"||A[1]!=="n"&&A[1]!=="N")&&(hU(A,t,r,n)&&(t=null),n||r===null?dU(A)&&(t===null?e.removeAttribute(A):e.setAttribute(A,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(A=r.attributeName,n=r.attributeNamespace,t===null?e.removeAttribute(A):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,n?e.setAttributeNS(n,A,t):e.setAttribute(A,t))))}var on=cU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),zC=Symbol.for("react.provider"),$C=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),XC=Symbol.for("react.offscreen"),Xg=Symbol.iterator;function ps(e){return e===null||typeof e!="object"?null:(e=Xg&&e[Xg]||e["@@iterator"],typeof e=="function"?e:null)}var HA=Object.assign,Hu;function Ts(e){if(Hu===void 0)try{throw Error()}catch(t){var A=t.stack.trim().match(/\n( *(at )?)/);Hu=A&&A[1]||""}return`
`+Hu+e}var Lu=!1;function ku(e,A){if(!e||Lu)return"";Lu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(A)if(A=function(){throw Error()},Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(l){var n=l}Reflect.construct(e,[],A)}else{try{A.call()}catch(l){n=l}e.call(A.prototype)}else{try{throw Error()}catch(l){n=l}e()}}catch(l){if(l&&n&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),i=n.stack.split(`
`),s=r.length-1,o=i.length-1;1<=s&&0<=o&&r[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==i[o]){var a=`
`+r[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=o);break}}}finally{Lu=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ts(e):""}function pU(e){switch(e.tag){case 5:return Ts(e.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return e=ku(e.type,!1),e;case 11:return e=ku(e.type.render,!1),e;case 1:return e=ku(e.type,!0),e;default:return""}}function Xd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ri:return"Fragment";case ni:return"Portal";case jd:return"Profiler";case Oh:return"StrictMode";case zd:return"Suspense";case $d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $C:return(e.displayName||"Context")+".Consumer";case zC:return(e._context.displayName||"Context")+".Provider";case Mh:var A=e.render;return e=e.displayName,e||(e=A.displayName||A.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ph:return A=e.displayName||null,A!==null?A:Xd(e.type)||"Memo";case Bn:A=e._payload,e=e._init;try{return Xd(e(A))}catch{}}return null}function gU(e){var A=e.type;switch(e.tag){case 24:return"Cache";case 9:return(A.displayName||"Context")+".Consumer";case 10:return(A._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=A.render,e=e.displayName||e.name||"",A.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return A;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(A);case 8:return A===Oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function YC(e){var A=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(A==="checkbox"||A==="radio")}function BU(e){var A=YC(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,A),n=""+e[A];if(!e.hasOwnProperty(A)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,A,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,A,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[A]}}}}function ha(e){e._valueTracker||(e._valueTracker=BU(e))}function JC(e){if(!e)return!1;var A=e._valueTracker;if(!A)return!0;var t=A.getValue(),n="";return e&&(n=YC(e)?e.checked?"true":"false":e.value),e=n,e!==t?(A.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yd(e,A){var t=A.checked;return HA({},A,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Yg(e,A){var t=A.defaultValue==null?"":A.defaultValue,n=A.checked!=null?A.checked:A.defaultChecked;t=jn(A.value!=null?A.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:A.type==="checkbox"||A.type==="radio"?A.checked!=null:A.value!=null}}function ZC(e,A){A=A.checked,A!=null&&Rh(e,"checked",A,!1)}function Jd(e,A){ZC(e,A);var t=jn(A.value),n=A.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}A.hasOwnProperty("value")?Zd(e,A.type,t):A.hasOwnProperty("defaultValue")&&Zd(e,A.type,jn(A.defaultValue)),A.checked==null&&A.defaultChecked!=null&&(e.defaultChecked=!!A.defaultChecked)}function Jg(e,A,t){if(A.hasOwnProperty("value")||A.hasOwnProperty("defaultValue")){var n=A.type;if(!(n!=="submit"&&n!=="reset"||A.value!==void 0&&A.value!==null))return;A=""+e._wrapperState.initialValue,t||A===e.value||(e.value=A),e.defaultValue=A}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zd(e,A,t){(A!=="number"||xl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Hs=Array.isArray;function wi(e,A,t,n){if(e=e.options,A){A={};for(var r=0;r<t.length;r++)A["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=A.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&n&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),A=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}A!==null||e[r].disabled||(A=e[r])}A!==null&&(A.selected=!0)}}function qd(e,A){if(A.dangerouslySetInnerHTML!=null)throw Error(F(91));return HA({},A,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zg(e,A){var t=A.value;if(t==null){if(t=A.children,A=A.defaultValue,t!=null){if(A!=null)throw Error(F(92));if(Hs(t)){if(1<t.length)throw Error(F(93));t=t[0]}A=t}A==null&&(A=""),t=A}e._wrapperState={initialValue:jn(t)}}function qC(e,A){var t=jn(A.value),n=jn(A.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),A.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function qg(e){var A=e.textContent;A===e._wrapperState.initialValue&&A!==""&&A!==null&&(e.value=A)}function A0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(e,A){return e==null||e==="http://www.w3.org/1999/xhtml"?A0(A):e==="http://www.w3.org/2000/svg"&&A==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pa,e0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(A,t,n,r){MSApp.execUnsafeLocalFunction(function(){return e(A,t,n,r)})}:e}(function(e,A){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=A;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+A.valueOf().toString()+"</svg>",A=pa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;A.firstChild;)e.appendChild(A.firstChild)}});function fo(e,A){if(A){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=A;return}}e.textContent=A}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wU=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(e){wU.forEach(function(A){A=A+e.charAt(0).toUpperCase()+e.substring(1),Vs[A]=Vs[e]})});function t0(e,A,t){return A==null||typeof A=="boolean"||A===""?"":t||typeof A!="number"||A===0||Vs.hasOwnProperty(e)&&Vs[e]?(""+A).trim():A+"px"}function n0(e,A){e=e.style;for(var t in A)if(A.hasOwnProperty(t)){var n=t.indexOf("--")===0,r=t0(t,A[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,r):e[t]=r}}var mU=HA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(e,A){if(A){if(mU[e]&&(A.children!=null||A.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(A.dangerouslySetInnerHTML!=null){if(A.children!=null)throw Error(F(60));if(typeof A.dangerouslySetInnerHTML!="object"||!("__html"in A.dangerouslySetInnerHTML))throw Error(F(61))}if(A.style!=null&&typeof A.style!="object")throw Error(F(62))}}function tf(e,A){if(e.indexOf("-")===-1)return typeof A.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function Kh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rf=null,mi=null,Ci=null;function AB(e){if(e=zo(e)){if(typeof rf!="function")throw Error(F(280));var A=e.stateNode;A&&(A=Mc(A),rf(e.stateNode,e.type,A))}}function r0(e){mi?Ci?Ci.push(e):Ci=[e]:mi=e}function i0(){if(mi){var e=mi,A=Ci;if(Ci=mi=null,AB(e),A)for(e=0;e<A.length;e++)AB(A[e])}}function s0(e,A){return e(A)}function o0(){}var bu=!1;function a0(e,A,t){if(bu)return e(A,t);bu=!0;try{return s0(e,A,t)}finally{bu=!1,(mi!==null||Ci!==null)&&(o0(),i0())}}function ho(e,A){var t=e.stateNode;if(t===null)return null;var n=Mc(t);if(n===null)return null;t=n[A];A:switch(A){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break A;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(F(231,A,typeof t));return t}var sf=!1;if(qt)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){sf=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{sf=!1}function CU(e,A,t,n,r,i,s,o,a){var l=Array.prototype.slice.call(arguments,3);try{A.apply(t,l)}catch(c){this.onError(c)}}var Gs=!1,Tl=null,Hl=!1,of=null,vU={onError:function(e){Gs=!0,Tl=e}};function yU(e,A,t,n,r,i,s,o,a){Gs=!1,Tl=null,CU.apply(vU,arguments)}function QU(e,A,t,n,r,i,s,o,a){if(yU.apply(this,arguments),Gs){if(Gs){var l=Tl;Gs=!1,Tl=null}else throw Error(F(198));Hl||(Hl=!0,of=l)}}function Rr(e){var A=e,t=e;if(e.alternate)for(;A.return;)A=A.return;else{e=A;do A=e,A.flags&4098&&(t=A.return),e=A.return;while(e)}return A.tag===3?t:null}function l0(e){if(e.tag===13){var A=e.memoizedState;if(A===null&&(e=e.alternate,e!==null&&(A=e.memoizedState)),A!==null)return A.dehydrated}return null}function eB(e){if(Rr(e)!==e)throw Error(F(188))}function _U(e){var A=e.alternate;if(!A){if(A=Rr(e),A===null)throw Error(F(188));return A!==e?null:e}for(var t=e,n=A;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){t=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return eB(r),e;if(i===n)return eB(r),A;i=i.sibling}throw Error(F(188))}if(t.return!==n.return)t=r,n=i;else{for(var s=!1,o=r.child;o;){if(o===t){s=!0,t=r,n=i;break}if(o===n){s=!0,n=r,t=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===t){s=!0,t=i,n=r;break}if(o===n){s=!0,n=i,t=r;break}o=o.sibling}if(!s)throw Error(F(189))}}if(t.alternate!==n)throw Error(F(190))}if(t.tag!==3)throw Error(F(188));return t.stateNode.current===t?e:A}function c0(e){return e=_U(e),e!==null?u0(e):null}function u0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var A=u0(e);if(A!==null)return A;e=e.sibling}return null}var d0=Ge.unstable_scheduleCallback,tB=Ge.unstable_cancelCallback,EU=Ge.unstable_shouldYield,UU=Ge.unstable_requestPaint,PA=Ge.unstable_now,FU=Ge.unstable_getCurrentPriorityLevel,Vh=Ge.unstable_ImmediatePriority,f0=Ge.unstable_UserBlockingPriority,Ll=Ge.unstable_NormalPriority,IU=Ge.unstable_LowPriority,h0=Ge.unstable_IdlePriority,Dc=null,xt=null;function SU(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Dc,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:HU,xU=Math.log,TU=Math.LN2;function HU(e){return e>>>=0,e===0?32:31-(xU(e)/TU|0)|0}var ga=64,Ba=4194304;function Ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kl(e,A){var t=e.pendingLanes;if(t===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var o=s&~r;o!==0?n=Ls(o):(i&=s,i!==0&&(n=Ls(i)))}else s=t&~r,s!==0?n=Ls(s):i!==0&&(n=Ls(i));if(n===0)return 0;if(A!==0&&A!==n&&!(A&r)&&(r=n&-n,i=A&-A,r>=i||r===16&&(i&4194240)!==0))return A;if(n&4&&(n|=t&16),A=e.entangledLanes,A!==0)for(e=e.entanglements,A&=n;0<A;)t=31-wt(A),r=1<<t,n|=e[t],A&=~r;return n}function LU(e,A){switch(e){case 1:case 2:case 4:return A+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kU(e,A){for(var t=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-wt(i),o=1<<s,a=r[s];a===-1?(!(o&t)||o&n)&&(r[s]=LU(o,A)):a<=A&&(e.expiredLanes|=o),i&=~o}}function af(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function p0(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Du(e){for(var A=[],t=0;31>t;t++)A.push(e);return A}function Wo(e,A,t){e.pendingLanes|=A,A!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,A=31-wt(A),e[A]=t}function bU(e,A){var t=e.pendingLanes&~A;e.pendingLanes=A,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=A,e.mutableReadLanes&=A,e.entangledLanes&=A,A=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-wt(t),i=1<<r;A[r]=0,n[r]=-1,e[r]=-1,t&=~i}}function Gh(e,A){var t=e.entangledLanes|=A;for(e=e.entanglements;t;){var n=31-wt(t),r=1<<n;r&A|e[n]&A&&(e[n]|=A),t&=~r}}var fA=0;function g0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var B0,Wh,w0,m0,C0,lf=!1,wa=[],Hn=null,Ln=null,kn=null,po=new Map,go=new Map,Cn=[],DU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nB(e,A){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":po.delete(A.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(A.pointerId)}}function Bs(e,A,t,n,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:A,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},A!==null&&(A=zo(A),A!==null&&Wh(A)),e):(e.eventSystemFlags|=n,A=e.targetContainers,r!==null&&A.indexOf(r)===-1&&A.push(r),e)}function NU(e,A,t,n,r){switch(A){case"focusin":return Hn=Bs(Hn,e,A,t,n,r),!0;case"dragenter":return Ln=Bs(Ln,e,A,t,n,r),!0;case"mouseover":return kn=Bs(kn,e,A,t,n,r),!0;case"pointerover":var i=r.pointerId;return po.set(i,Bs(po.get(i)||null,e,A,t,n,r)),!0;case"gotpointercapture":return i=r.pointerId,go.set(i,Bs(go.get(i)||null,e,A,t,n,r)),!0}return!1}function v0(e){var A=cr(e.target);if(A!==null){var t=Rr(A);if(t!==null){if(A=t.tag,A===13){if(A=l0(t),A!==null){e.blockedOn=A,C0(e.priority,function(){w0(t)});return}}else if(A===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var A=e.targetContainers;0<A.length;){var t=cf(e.domEventName,e.eventSystemFlags,A[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);nf=n,t.target.dispatchEvent(n),nf=null}else return A=zo(t),A!==null&&Wh(A),e.blockedOn=t,!1;A.shift()}return!0}function rB(e,A,t){sl(e)&&t.delete(A)}function RU(){lf=!1,Hn!==null&&sl(Hn)&&(Hn=null),Ln!==null&&sl(Ln)&&(Ln=null),kn!==null&&sl(kn)&&(kn=null),po.forEach(rB),go.forEach(rB)}function ws(e,A){e.blockedOn===A&&(e.blockedOn=null,lf||(lf=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,RU)))}function Bo(e){function A(r){return ws(r,e)}if(0<wa.length){ws(wa[0],e);for(var t=1;t<wa.length;t++){var n=wa[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Hn!==null&&ws(Hn,e),Ln!==null&&ws(Ln,e),kn!==null&&ws(kn,e),po.forEach(A),go.forEach(A),t=0;t<Cn.length;t++)n=Cn[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Cn.length&&(t=Cn[0],t.blockedOn===null);)v0(t),t.blockedOn===null&&Cn.shift()}var vi=on.ReactCurrentBatchConfig,bl=!0;function OU(e,A,t,n){var r=fA,i=vi.transition;vi.transition=null;try{fA=1,jh(e,A,t,n)}finally{fA=r,vi.transition=i}}function MU(e,A,t,n){var r=fA,i=vi.transition;vi.transition=null;try{fA=4,jh(e,A,t,n)}finally{fA=r,vi.transition=i}}function jh(e,A,t,n){if(bl){var r=cf(e,A,t,n);if(r===null)ju(e,A,n,Dl,t),nB(e,n);else if(NU(r,e,A,t,n))n.stopPropagation();else if(nB(e,n),A&4&&-1<DU.indexOf(e)){for(;r!==null;){var i=zo(r);if(i!==null&&B0(i),i=cf(e,A,t,n),i===null&&ju(e,A,n,Dl,t),i===r)break;r=i}r!==null&&n.stopPropagation()}else ju(e,A,n,null,t)}}var Dl=null;function cf(e,A,t,n){if(Dl=null,e=Kh(n),e=cr(e),e!==null)if(A=Rr(e),A===null)e=null;else if(t=A.tag,t===13){if(e=l0(A),e!==null)return e;e=null}else if(t===3){if(A.stateNode.current.memoizedState.isDehydrated)return A.tag===3?A.stateNode.containerInfo:null;e=null}else A!==e&&(e=null);return Dl=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FU()){case Vh:return 1;case f0:return 4;case Ll:case IU:return 16;case h0:return 536870912;default:return 16}default:return 16}}var Un=null,zh=null,ol=null;function Q0(){if(ol)return ol;var e,A=zh,t=A.length,n,r="value"in Un?Un.value:Un.textContent,i=r.length;for(e=0;e<t&&A[e]===r[e];e++);var s=t-e;for(n=1;n<=s&&A[t-n]===r[i-n];n++);return ol=r.slice(e,1<n?1-n:void 0)}function al(e){var A=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&A===13&&(e=13)):e=A,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function iB(){return!1}function je(e){function A(t,n,r,i,s){this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ma:iB,this.isPropagationStopped=iB,this}return HA(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),A}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$h=je(qi),jo=HA({},qi,{view:0,detail:0}),PU=je(jo),Nu,Ru,ms,Nc=HA({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ms&&(ms&&e.type==="mousemove"?(Nu=e.screenX-ms.screenX,Ru=e.screenY-ms.screenY):Ru=Nu=0,ms=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Ru}}),sB=je(Nc),KU=HA({},Nc,{dataTransfer:0}),VU=je(KU),GU=HA({},jo,{relatedTarget:0}),Ou=je(GU),WU=HA({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),jU=je(WU),zU=HA({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$U=je(zU),XU=HA({},qi,{data:0}),oB=je(XU),YU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZU={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qU(e){var A=this.nativeEvent;return A.getModifierState?A.getModifierState(e):(e=ZU[e])?!!A[e]:!1}function Xh(){return qU}var AF=HA({},jo,{key:function(e){if(e.key){var A=YU[e.key]||e.key;if(A!=="Unidentified")return A}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?JU[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eF=je(AF),tF=HA({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aB=je(tF),nF=HA({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),rF=je(nF),iF=HA({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),sF=je(iF),oF=HA({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aF=je(oF),lF=[9,13,27,32],Yh=qt&&"CompositionEvent"in window,Ws=null;qt&&"documentMode"in document&&(Ws=document.documentMode);var cF=qt&&"TextEvent"in window&&!Ws,_0=qt&&(!Yh||Ws&&8<Ws&&11>=Ws),lB=" ",cB=!1;function E0(e,A){switch(e){case"keyup":return lF.indexOf(A.keyCode)!==-1;case"keydown":return A.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function uF(e,A){switch(e){case"compositionend":return U0(A);case"keypress":return A.which!==32?null:(cB=!0,lB);case"textInput":return e=A.data,e===lB&&cB?null:e;default:return null}}function dF(e,A){if(ii)return e==="compositionend"||!Yh&&E0(e,A)?(e=Q0(),ol=zh=Un=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(A.ctrlKey||A.altKey||A.metaKey)||A.ctrlKey&&A.altKey){if(A.char&&1<A.char.length)return A.char;if(A.which)return String.fromCharCode(A.which)}return null;case"compositionend":return _0&&A.locale!=="ko"?null:A.data;default:return null}}var fF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uB(e){var A=e&&e.nodeName&&e.nodeName.toLowerCase();return A==="input"?!!fF[e.type]:A==="textarea"}function F0(e,A,t,n){r0(n),A=Nl(A,"onChange"),0<A.length&&(t=new $h("onChange","change",null,t,n),e.push({event:t,listeners:A}))}var js=null,wo=null;function hF(e){R0(e,0)}function Rc(e){var A=ai(e);if(JC(A))return e}function pF(e,A){if(e==="change")return A}var I0=!1;if(qt){var Mu;if(qt){var Pu="oninput"in document;if(!Pu){var dB=document.createElement("div");dB.setAttribute("oninput","return;"),Pu=typeof dB.oninput=="function"}Mu=Pu}else Mu=!1;I0=Mu&&(!document.documentMode||9<document.documentMode)}function fB(){js&&(js.detachEvent("onpropertychange",S0),wo=js=null)}function S0(e){if(e.propertyName==="value"&&Rc(wo)){var A=[];F0(A,wo,e,Kh(e)),a0(hF,A)}}function gF(e,A,t){e==="focusin"?(fB(),js=A,wo=t,js.attachEvent("onpropertychange",S0)):e==="focusout"&&fB()}function BF(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rc(wo)}function wF(e,A){if(e==="click")return Rc(A)}function mF(e,A){if(e==="input"||e==="change")return Rc(A)}function CF(e,A){return e===A&&(e!==0||1/e===1/A)||e!==e&&A!==A}var Qt=typeof Object.is=="function"?Object.is:CF;function mo(e,A){if(Qt(e,A))return!0;if(typeof e!="object"||e===null||typeof A!="object"||A===null)return!1;var t=Object.keys(e),n=Object.keys(A);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var r=t[n];if(!Wd.call(A,r)||!Qt(e[r],A[r]))return!1}return!0}function hB(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pB(e,A){var t=hB(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=A&&n>=A)return{node:t,offset:A-e};e=n}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=hB(t)}}function x0(e,A){return e&&A?e===A?!0:e&&e.nodeType===3?!1:A&&A.nodeType===3?x0(e,A.parentNode):"contains"in e?e.contains(A):e.compareDocumentPosition?!!(e.compareDocumentPosition(A)&16):!1:!1}function T0(){for(var e=window,A=xl();A instanceof e.HTMLIFrameElement;){try{var t=typeof A.contentWindow.location.href=="string"}catch{t=!1}if(t)e=A.contentWindow;else break;A=xl(e.document)}return A}function Jh(e){var A=e&&e.nodeName&&e.nodeName.toLowerCase();return A&&(A==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||A==="textarea"||e.contentEditable==="true")}function vF(e){var A=T0(),t=e.focusedElem,n=e.selectionRange;if(A!==t&&t&&t.ownerDocument&&x0(t.ownerDocument.documentElement,t)){if(n!==null&&Jh(t)){if(A=n.start,e=n.end,e===void 0&&(e=A),"selectionStart"in t)t.selectionStart=A,t.selectionEnd=Math.min(e,t.value.length);else if(e=(A=t.ownerDocument||document)&&A.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(n.start,r);n=n.end===void 0?i:Math.min(n.end,r),!e.extend&&i>n&&(r=n,n=i,i=r),r=pB(t,i);var s=pB(t,n);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(A=A.createRange(),A.setStart(r.node,r.offset),e.removeAllRanges(),i>n?(e.addRange(A),e.extend(s.node,s.offset)):(A.setEnd(s.node,s.offset),e.addRange(A)))}}for(A=[],e=t;e=e.parentNode;)e.nodeType===1&&A.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<A.length;t++)e=A[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yF=qt&&"documentMode"in document&&11>=document.documentMode,si=null,uf=null,zs=null,df=!1;function gB(e,A,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;df||si==null||si!==xl(n)||(n=si,"selectionStart"in n&&Jh(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zs&&mo(zs,n)||(zs=n,n=Nl(uf,"onSelect"),0<n.length&&(A=new $h("onSelect","select",null,A,t),e.push({event:A,listeners:n}),A.target=si)))}function Ca(e,A){var t={};return t[e.toLowerCase()]=A.toLowerCase(),t["Webkit"+e]="webkit"+A,t["Moz"+e]="moz"+A,t}var oi={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Ku={},H0={};qt&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Oc(e){if(Ku[e])return Ku[e];if(!oi[e])return e;var A=oi[e],t;for(t in A)if(A.hasOwnProperty(t)&&t in H0)return Ku[e]=A[t];return e}var L0=Oc("animationend"),k0=Oc("animationiteration"),b0=Oc("animationstart"),D0=Oc("transitionend"),N0=new Map,BB="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,A){N0.set(e,A),Nr(A,[e])}for(var Vu=0;Vu<BB.length;Vu++){var Gu=BB[Vu],QF=Gu.toLowerCase(),_F=Gu[0].toUpperCase()+Gu.slice(1);Zn(QF,"on"+_F)}Zn(L0,"onAnimationEnd");Zn(k0,"onAnimationIteration");Zn(b0,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(D0,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EF=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function wB(e,A,t){var n=e.type||"unknown-event";e.currentTarget=t,QU(n,A,void 0,e),e.currentTarget=null}function R0(e,A){A=(A&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],r=n.event;n=n.listeners;A:{var i=void 0;if(A)for(var s=n.length-1;0<=s;s--){var o=n[s],a=o.instance,l=o.currentTarget;if(o=o.listener,a!==i&&r.isPropagationStopped())break A;wB(r,o,l),i=a}else for(s=0;s<n.length;s++){if(o=n[s],a=o.instance,l=o.currentTarget,o=o.listener,a!==i&&r.isPropagationStopped())break A;wB(r,o,l),i=a}}}if(Hl)throw e=of,Hl=!1,of=null,e}function _A(e,A){var t=A[Bf];t===void 0&&(t=A[Bf]=new Set);var n=e+"__bubble";t.has(n)||(O0(A,e,2,!1),t.add(n))}function Wu(e,A,t){var n=0;A&&(n|=4),O0(t,e,n,A)}var va="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[va]){e[va]=!0,jC.forEach(function(t){t!=="selectionchange"&&(EF.has(t)||Wu(t,!1,e),Wu(t,!0,e))});var A=e.nodeType===9?e:e.ownerDocument;A===null||A[va]||(A[va]=!0,Wu("selectionchange",!1,A))}}function O0(e,A,t,n){switch(y0(A)){case 1:var r=OU;break;case 4:r=MU;break;default:r=jh}t=r.bind(null,A,t,e),r=void 0,!sf||A!=="touchstart"&&A!=="touchmove"&&A!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(A,t,{capture:!0,passive:r}):e.addEventListener(A,t,!0):r!==void 0?e.addEventListener(A,t,{passive:r}):e.addEventListener(A,t,!1)}function ju(e,A,t,n,r){var i=n;if(!(A&1)&&!(A&2)&&n!==null)A:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;s=s.return}for(;o!==null;){if(s=cr(o),s===null)return;if(a=s.tag,a===5||a===6){n=i=s;continue A}o=o.parentNode}}n=n.return}a0(function(){var l=i,c=Kh(t),u=[];A:{var d=N0.get(e);if(d!==void 0){var h=$h,g=e;switch(e){case"keypress":if(al(t)===0)break A;case"keydown":case"keyup":h=eF;break;case"focusin":g="focus",h=Ou;break;case"focusout":g="blur",h=Ou;break;case"beforeblur":case"afterblur":h=Ou;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=sB;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=VU;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=rF;break;case L0:case k0:case b0:h=jU;break;case D0:h=sF;break;case"scroll":h=PU;break;case"wheel":h=aF;break;case"copy":case"cut":case"paste":h=$U;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=aB}var w=(A&4)!==0,_=!w&&e==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=l,B;f!==null;){B=f;var C=B.stateNode;if(B.tag===5&&C!==null&&(B=C,p!==null&&(C=ho(f,p),C!=null&&w.push(vo(f,C,B)))),_)break;f=f.return}0<w.length&&(d=new h(d,g,null,t,c),u.push({event:d,listeners:w}))}}if(!(A&7)){A:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&t!==nf&&(g=t.relatedTarget||t.fromElement)&&(cr(g)||g[An]))break A;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=l,g=g?cr(g):null,g!==null&&(_=Rr(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=l),h!==g)){if(w=sB,C="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=aB,C="onPointerLeave",p="onPointerEnter",f="pointer"),_=h==null?d:ai(h),B=g==null?d:ai(g),d=new w(C,f+"leave",h,t,c),d.target=_,d.relatedTarget=B,C=null,cr(c)===l&&(w=new w(p,f+"enter",g,t,c),w.target=B,w.relatedTarget=_,C=w),_=C,h&&g)e:{for(w=h,p=g,f=0,B=w;B;B=Gr(B))f++;for(B=0,C=p;C;C=Gr(C))B++;for(;0<f-B;)w=Gr(w),f--;for(;0<B-f;)p=Gr(p),B--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break e;w=Gr(w),p=Gr(p)}w=null}else w=null;h!==null&&mB(u,d,h,w,!1),g!==null&&_!==null&&mB(u,_,g,w,!0)}}A:{if(d=l?ai(l):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var Q=pF;else if(uB(d))if(I0)Q=mF;else{Q=BF;var v=gF}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(Q=wF);if(Q&&(Q=Q(e,l))){F0(u,Q,t,c);break A}v&&v(e,d,l),e==="focusout"&&(v=d._wrapperState)&&v.controlled&&d.type==="number"&&Zd(d,"number",d.value)}switch(v=l?ai(l):window,e){case"focusin":(uB(v)||v.contentEditable==="true")&&(si=v,uf=l,zs=null);break;case"focusout":zs=uf=si=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,gB(u,t,c);break;case"selectionchange":if(yF)break;case"keydown":case"keyup":gB(u,t,c)}var y;if(Yh)A:{switch(e){case"compositionstart":var U="onCompositionStart";break A;case"compositionend":U="onCompositionEnd";break A;case"compositionupdate":U="onCompositionUpdate";break A}U=void 0}else ii?E0(e,t)&&(U="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(_0&&t.locale!=="ko"&&(ii||U!=="onCompositionStart"?U==="onCompositionEnd"&&ii&&(y=Q0()):(Un=c,zh="value"in Un?Un.value:Un.textContent,ii=!0)),v=Nl(l,U),0<v.length&&(U=new oB(U,e,null,t,c),u.push({event:U,listeners:v}),y?U.data=y:(y=U0(t),y!==null&&(U.data=y)))),(y=cF?uF(e,t):dF(e,t))&&(l=Nl(l,"onBeforeInput"),0<l.length&&(c=new oB("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=y))}R0(u,A)})}function vo(e,A,t){return{instance:e,listener:A,currentTarget:t}}function Nl(e,A){for(var t=A+"Capture",n=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ho(e,t),i!=null&&n.unshift(vo(e,i,r)),i=ho(e,A),i!=null&&n.push(vo(e,i,r))),e=e.return}return n}function Gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mB(e,A,t,n,r){for(var i=A._reactName,s=[];t!==null&&t!==n;){var o=t,a=o.alternate,l=o.stateNode;if(a!==null&&a===n)break;o.tag===5&&l!==null&&(o=l,r?(a=ho(t,i),a!=null&&s.unshift(vo(t,a,o))):r||(a=ho(t,i),a!=null&&s.push(vo(t,a,o)))),t=t.return}s.length!==0&&e.push({event:A,listeners:s})}var UF=/\r\n?/g,FF=/\u0000|\uFFFD/g;function CB(e){return(typeof e=="string"?e:""+e).replace(UF,`
`).replace(FF,"")}function ya(e,A,t){if(A=CB(A),CB(e)!==A&&t)throw Error(F(425))}function Rl(){}var ff=null,hf=null;function pf(e,A){return e==="textarea"||e==="noscript"||typeof A.children=="string"||typeof A.children=="number"||typeof A.dangerouslySetInnerHTML=="object"&&A.dangerouslySetInnerHTML!==null&&A.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,IF=typeof clearTimeout=="function"?clearTimeout:void 0,vB=typeof Promise=="function"?Promise:void 0,SF=typeof queueMicrotask=="function"?queueMicrotask:typeof vB<"u"?function(e){return vB.resolve(null).then(e).catch(xF)}:gf;function xF(e){setTimeout(function(){throw e})}function zu(e,A){var t=A,n=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(n===0){e.removeChild(r),Bo(A);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=r}while(t);Bo(A)}function bn(e){for(;e!=null;e=e.nextSibling){var A=e.nodeType;if(A===1||A===3)break;if(A===8){if(A=e.data,A==="$"||A==="$!"||A==="$?")break;if(A==="/$")return null}}return e}function yB(e){e=e.previousSibling;for(var A=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(A===0)return e;A--}else t==="/$"&&A++}e=e.previousSibling}return null}var As=Math.random().toString(36).slice(2),St="__reactFiber$"+As,yo="__reactProps$"+As,An="__reactContainer$"+As,Bf="__reactEvents$"+As,TF="__reactListeners$"+As,HF="__reactHandles$"+As;function cr(e){var A=e[St];if(A)return A;for(var t=e.parentNode;t;){if(A=t[An]||t[St]){if(t=A.alternate,A.child!==null||t!==null&&t.child!==null)for(e=yB(e);e!==null;){if(t=e[St])return t;e=yB(e)}return A}e=t,t=e.parentNode}return null}function zo(e){return e=e[St]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Mc(e){return e[yo]||null}var wf=[],li=-1;function qn(e){return{current:e}}function UA(e){0>li||(e.current=wf[li],wf[li]=null,li--)}function vA(e,A){li++,wf[li]=e.current,e.current=A}var zn={},pe=qn(zn),He=qn(!1),Er=zn;function Li(e,A){var t=e.type.contextTypes;if(!t)return zn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===A)return n.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=A[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=A,e.__reactInternalMemoizedMaskedChildContext=r),r}function Le(e){return e=e.childContextTypes,e!=null}function Ol(){UA(He),UA(pe)}function QB(e,A,t){if(pe.current!==zn)throw Error(F(168));vA(pe,A),vA(He,t)}function M0(e,A,t){var n=e.stateNode;if(A=A.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var r in n)if(!(r in A))throw Error(F(108,gU(e)||"Unknown",r));return HA({},t,n)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Er=pe.current,vA(pe,e),vA(He,He.current),!0}function _B(e,A,t){var n=e.stateNode;if(!n)throw Error(F(169));t?(e=M0(e,A,Er),n.__reactInternalMemoizedMergedChildContext=e,UA(He),UA(pe),vA(pe,e)):UA(He),vA(He,t)}var Vt=null,Pc=!1,$u=!1;function P0(e){Vt===null?Vt=[e]:Vt.push(e)}function LF(e){Pc=!0,P0(e)}function Ar(){if(!$u&&Vt!==null){$u=!0;var e=0,A=fA;try{var t=Vt;for(fA=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Vt=null,Pc=!1}catch(r){throw Vt!==null&&(Vt=Vt.slice(e+1)),d0(Vh,Ar),r}finally{fA=A,$u=!1}}return null}var ci=[],ui=0,Pl=null,Kl=0,Je=[],Ze=0,Ur=null,Wt=1,jt="";function rr(e,A){ci[ui++]=Kl,ci[ui++]=Pl,Pl=e,Kl=A}function K0(e,A,t){Je[Ze++]=Wt,Je[Ze++]=jt,Je[Ze++]=Ur,Ur=e;var n=Wt;e=jt;var r=32-wt(n)-1;n&=~(1<<r),t+=1;var i=32-wt(A)+r;if(30<i){var s=r-r%5;i=(n&(1<<s)-1).toString(32),n>>=s,r-=s,Wt=1<<32-wt(A)+r|t<<r|n,jt=i+e}else Wt=1<<i|t<<r|n,jt=e}function Zh(e){e.return!==null&&(rr(e,1),K0(e,1,0))}function qh(e){for(;e===Pl;)Pl=ci[--ui],ci[ui]=null,Kl=ci[--ui],ci[ui]=null;for(;e===Ur;)Ur=Je[--Ze],Je[Ze]=null,jt=Je[--Ze],Je[Ze]=null,Wt=Je[--Ze],Je[Ze]=null}var Ve=null,Ke=null,IA=!1,ft=null;function V0(e,A){var t=At(5,null,null,0);t.elementType="DELETED",t.stateNode=A,t.return=e,A=e.deletions,A===null?(e.deletions=[t],e.flags|=16):A.push(t)}function EB(e,A){switch(e.tag){case 5:var t=e.type;return A=A.nodeType!==1||t.toLowerCase()!==A.nodeName.toLowerCase()?null:A,A!==null?(e.stateNode=A,Ve=e,Ke=bn(A.firstChild),!0):!1;case 6:return A=e.pendingProps===""||A.nodeType!==3?null:A,A!==null?(e.stateNode=A,Ve=e,Ke=null,!0):!1;case 13:return A=A.nodeType!==8?null:A,A!==null?(t=Ur!==null?{id:Wt,overflow:jt}:null,e.memoizedState={dehydrated:A,treeContext:t,retryLane:1073741824},t=At(18,null,null,0),t.stateNode=A,t.return=e,e.child=t,Ve=e,Ke=null,!0):!1;default:return!1}}function mf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cf(e){if(IA){var A=Ke;if(A){var t=A;if(!EB(e,A)){if(mf(e))throw Error(F(418));A=bn(t.nextSibling);var n=Ve;A&&EB(e,A)?V0(n,t):(e.flags=e.flags&-4097|2,IA=!1,Ve=e)}}else{if(mf(e))throw Error(F(418));e.flags=e.flags&-4097|2,IA=!1,Ve=e}}}function UB(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Qa(e){if(e!==Ve)return!1;if(!IA)return UB(e),IA=!0,!1;var A;if((A=e.tag!==3)&&!(A=e.tag!==5)&&(A=e.type,A=A!=="head"&&A!=="body"&&!pf(e.type,e.memoizedProps)),A&&(A=Ke)){if(mf(e))throw G0(),Error(F(418));for(;A;)V0(e,A),A=bn(A.nextSibling)}if(UB(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));A:{for(e=e.nextSibling,A=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(A===0){Ke=bn(e.nextSibling);break A}A--}else t!=="$"&&t!=="$!"&&t!=="$?"||A++}e=e.nextSibling}Ke=null}}else Ke=Ve?bn(e.stateNode.nextSibling):null;return!0}function G0(){for(var e=Ke;e;)e=bn(e.nextSibling)}function ki(){Ke=Ve=null,IA=!1}function Ap(e){ft===null?ft=[e]:ft.push(e)}var kF=on.ReactCurrentBatchConfig;function Cs(e,A,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(F(309));var n=t.stateNode}if(!n)throw Error(F(147,e));var r=n,i=""+e;return A!==null&&A.ref!==null&&typeof A.ref=="function"&&A.ref._stringRef===i?A.ref:(A=function(s){var o=r.refs;s===null?delete o[i]:o[i]=s},A._stringRef=i,A)}if(typeof e!="string")throw Error(F(284));if(!t._owner)throw Error(F(290,e))}return e}function _a(e,A){throw e=Object.prototype.toString.call(A),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e))}function FB(e){var A=e._init;return A(e._payload)}function W0(e){function A(p,f){if(e){var B=p.deletions;B===null?(p.deletions=[f],p.flags|=16):B.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)A(p,f),f=f.sibling;return null}function n(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function r(p,f){return p=On(p,f),p.index=0,p.sibling=null,p}function i(p,f,B){return p.index=B,e?(B=p.alternate,B!==null?(B=B.index,B<f?(p.flags|=2,f):B):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,f,B,C){return f===null||f.tag!==6?(f=ed(B,p.mode,C),f.return=p,f):(f=r(f,B),f.return=p,f)}function a(p,f,B,C){var Q=B.type;return Q===ri?c(p,f,B.props.children,C,B.key):f!==null&&(f.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Bn&&FB(Q)===f.type)?(C=r(f,B.props),C.ref=Cs(p,f,B),C.return=p,C):(C=pl(B.type,B.key,B.props,null,p.mode,C),C.ref=Cs(p,f,B),C.return=p,C)}function l(p,f,B,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==B.containerInfo||f.stateNode.implementation!==B.implementation?(f=td(B,p.mode,C),f.return=p,f):(f=r(f,B.children||[]),f.return=p,f)}function c(p,f,B,C,Q){return f===null||f.tag!==7?(f=mr(B,p.mode,C,Q),f.return=p,f):(f=r(f,B),f.return=p,f)}function u(p,f,B){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ed(""+f,p.mode,B),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fa:return B=pl(f.type,f.key,f.props,null,p.mode,B),B.ref=Cs(p,null,f),B.return=p,B;case ni:return f=td(f,p.mode,B),f.return=p,f;case Bn:var C=f._init;return u(p,C(f._payload),B)}if(Hs(f)||ps(f))return f=mr(f,p.mode,B,null),f.return=p,f;_a(p,f)}return null}function d(p,f,B,C){var Q=f!==null?f.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return Q!==null?null:o(p,f,""+B,C);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fa:return B.key===Q?a(p,f,B,C):null;case ni:return B.key===Q?l(p,f,B,C):null;case Bn:return Q=B._init,d(p,f,Q(B._payload),C)}if(Hs(B)||ps(B))return Q!==null?null:c(p,f,B,C,null);_a(p,B)}return null}function h(p,f,B,C,Q){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(B)||null,o(f,p,""+C,Q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fa:return p=p.get(C.key===null?B:C.key)||null,a(f,p,C,Q);case ni:return p=p.get(C.key===null?B:C.key)||null,l(f,p,C,Q);case Bn:var v=C._init;return h(p,f,B,v(C._payload),Q)}if(Hs(C)||ps(C))return p=p.get(B)||null,c(f,p,C,Q,null);_a(f,C)}return null}function g(p,f,B,C){for(var Q=null,v=null,y=f,U=f=0,I=null;y!==null&&U<B.length;U++){y.index>U?(I=y,y=null):I=y.sibling;var H=d(p,y,B[U],C);if(H===null){y===null&&(y=I);break}e&&y&&H.alternate===null&&A(p,y),f=i(H,f,U),v===null?Q=H:v.sibling=H,v=H,y=I}if(U===B.length)return t(p,y),IA&&rr(p,U),Q;if(y===null){for(;U<B.length;U++)y=u(p,B[U],C),y!==null&&(f=i(y,f,U),v===null?Q=y:v.sibling=y,v=y);return IA&&rr(p,U),Q}for(y=n(p,y);U<B.length;U++)I=h(y,p,U,B[U],C),I!==null&&(e&&I.alternate!==null&&y.delete(I.key===null?U:I.key),f=i(I,f,U),v===null?Q=I:v.sibling=I,v=I);return e&&y.forEach(function(rA){return A(p,rA)}),IA&&rr(p,U),Q}function w(p,f,B,C){var Q=ps(B);if(typeof Q!="function")throw Error(F(150));if(B=Q.call(B),B==null)throw Error(F(151));for(var v=Q=null,y=f,U=f=0,I=null,H=B.next();y!==null&&!H.done;U++,H=B.next()){y.index>U?(I=y,y=null):I=y.sibling;var rA=d(p,y,H.value,C);if(rA===null){y===null&&(y=I);break}e&&y&&rA.alternate===null&&A(p,y),f=i(rA,f,U),v===null?Q=rA:v.sibling=rA,v=rA,y=I}if(H.done)return t(p,y),IA&&rr(p,U),Q;if(y===null){for(;!H.done;U++,H=B.next())H=u(p,H.value,C),H!==null&&(f=i(H,f,U),v===null?Q=H:v.sibling=H,v=H);return IA&&rr(p,U),Q}for(y=n(p,y);!H.done;U++,H=B.next())H=h(y,p,U,H.value,C),H!==null&&(e&&H.alternate!==null&&y.delete(H.key===null?U:H.key),f=i(H,f,U),v===null?Q=H:v.sibling=H,v=H);return e&&y.forEach(function(yA){return A(p,yA)}),IA&&rr(p,U),Q}function _(p,f,B,C){if(typeof B=="object"&&B!==null&&B.type===ri&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fa:A:{for(var Q=B.key,v=f;v!==null;){if(v.key===Q){if(Q=B.type,Q===ri){if(v.tag===7){t(p,v.sibling),f=r(v,B.props.children),f.return=p,p=f;break A}}else if(v.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Bn&&FB(Q)===v.type){t(p,v.sibling),f=r(v,B.props),f.ref=Cs(p,v,B),f.return=p,p=f;break A}t(p,v);break}else A(p,v);v=v.sibling}B.type===ri?(f=mr(B.props.children,p.mode,C,B.key),f.return=p,p=f):(C=pl(B.type,B.key,B.props,null,p.mode,C),C.ref=Cs(p,f,B),C.return=p,p=C)}return s(p);case ni:A:{for(v=B.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===B.containerInfo&&f.stateNode.implementation===B.implementation){t(p,f.sibling),f=r(f,B.children||[]),f.return=p,p=f;break A}else{t(p,f);break}else A(p,f);f=f.sibling}f=td(B,p.mode,C),f.return=p,p=f}return s(p);case Bn:return v=B._init,_(p,f,v(B._payload),C)}if(Hs(B))return g(p,f,B,C);if(ps(B))return w(p,f,B,C);_a(p,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,f!==null&&f.tag===6?(t(p,f.sibling),f=r(f,B),f.return=p,p=f):(t(p,f),f=ed(B,p.mode,C),f.return=p,p=f),s(p)):t(p,f)}return _}var bi=W0(!0),j0=W0(!1),Vl=qn(null),Gl=null,di=null,ep=null;function tp(){ep=di=Gl=null}function np(e){var A=Vl.current;UA(Vl),e._currentValue=A}function vf(e,A,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&A)!==A?(e.childLanes|=A,n!==null&&(n.childLanes|=A)):n!==null&&(n.childLanes&A)!==A&&(n.childLanes|=A),e===t)break;e=e.return}}function yi(e,A){Gl=e,ep=di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&A&&(Se=!0),e.firstContext=null)}function it(e){var A=e._currentValue;if(ep!==e)if(e={context:e,memoizedValue:A,next:null},di===null){if(Gl===null)throw Error(F(308));di=e,Gl.dependencies={lanes:0,firstContext:e}}else di=di.next=e;return A}var ur=null;function rp(e){ur===null?ur=[e]:ur.push(e)}function z0(e,A,t,n){var r=A.interleaved;return r===null?(t.next=t,rp(A)):(t.next=r.next,r.next=t),A.interleaved=t,en(e,n)}function en(e,A){e.lanes|=A;var t=e.alternate;for(t!==null&&(t.lanes|=A),t=e,e=e.return;e!==null;)e.childLanes|=A,t=e.alternate,t!==null&&(t.childLanes|=A),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function ip(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(e,A){e=e.updateQueue,A.updateQueue===e&&(A.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,A){return{eventTime:e,lane:A,tag:0,payload:null,callback:null,next:null}}function Dn(e,A,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,iA&2){var r=n.pending;return r===null?A.next=A:(A.next=r.next,r.next=A),n.pending=A,en(e,t)}return r=n.interleaved,r===null?(A.next=A,rp(n)):(A.next=r.next,r.next=A),n.interleaved=A,en(e,t)}function ll(e,A,t){if(A=A.updateQueue,A!==null&&(A=A.shared,(t&4194240)!==0)){var n=A.lanes;n&=e.pendingLanes,t|=n,A.lanes=t,Gh(e,t)}}function IB(e,A){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=A:i=i.next=A}else r=i=A;t={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=A:e.next=A,t.lastBaseUpdate=A}function Wl(e,A,t,n){var r=e.updateQueue;wn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var a=o,l=a.next;a.next=null,s===null?i=l:s.next=l,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=l:o.next=l,c.lastBaseUpdate=a))}if(i!==null){var u=r.baseState;s=0,c=l=a=null,o=i;do{var d=o.lane,h=o.eventTime;if((n&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});A:{var g=e,w=o;switch(d=A,h=t,w.tag){case 1:if(g=w.payload,typeof g=="function"){u=g.call(h,u,d);break A}u=g;break A;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,d=typeof g=="function"?g.call(h,u,d):g,d==null)break A;u=HA({},u,d);break A;case 2:wn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else h={eventTime:h,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(l=c=h,a=u):c=c.next=h,s|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(a=u),r.baseState=a,r.firstBaseUpdate=l,r.lastBaseUpdate=c,A=r.shared.interleaved,A!==null){r=A;do s|=r.lane,r=r.next;while(r!==A)}else i===null&&(r.shared.lanes=0);Ir|=s,e.lanes=s,e.memoizedState=u}}function SB(e,A,t){if(e=A.effects,A.effects=null,e!==null)for(A=0;A<e.length;A++){var n=e[A],r=n.callback;if(r!==null){if(n.callback=null,n=t,typeof r!="function")throw Error(F(191,r));r.call(n)}}}var $o={},Tt=qn($o),Qo=qn($o),_o=qn($o);function dr(e){if(e===$o)throw Error(F(174));return e}function sp(e,A){switch(vA(_o,A),vA(Qo,e),vA(Tt,$o),e=A.nodeType,e){case 9:case 11:A=(A=A.documentElement)?A.namespaceURI:Af(null,"");break;default:e=e===8?A.parentNode:A,A=e.namespaceURI||null,e=e.tagName,A=Af(A,e)}UA(Tt),vA(Tt,A)}function Di(){UA(Tt),UA(Qo),UA(_o)}function X0(e){dr(_o.current);var A=dr(Tt.current),t=Af(A,e.type);A!==t&&(vA(Qo,e),vA(Tt,t))}function op(e){Qo.current===e&&(UA(Tt),UA(Qo))}var xA=qn(0);function jl(e){for(var A=e;A!==null;){if(A.tag===13){var t=A.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return A}else if(A.tag===19&&A.memoizedProps.revealOrder!==void 0){if(A.flags&128)return A}else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break;for(;A.sibling===null;){if(A.return===null||A.return===e)return null;A=A.return}A.sibling.return=A.return,A=A.sibling}return null}var Xu=[];function ap(){for(var e=0;e<Xu.length;e++)Xu[e]._workInProgressVersionPrimary=null;Xu.length=0}var cl=on.ReactCurrentDispatcher,Yu=on.ReactCurrentBatchConfig,Fr=0,TA=null,WA=null,Ae=null,zl=!1,$s=!1,Eo=0,bF=0;function ue(){throw Error(F(321))}function lp(e,A){if(A===null)return!1;for(var t=0;t<A.length&&t<e.length;t++)if(!Qt(e[t],A[t]))return!1;return!0}function cp(e,A,t,n,r,i){if(Fr=i,TA=A,A.memoizedState=null,A.updateQueue=null,A.lanes=0,cl.current=e===null||e.memoizedState===null?OF:MF,e=t(n,r),$s){i=0;do{if($s=!1,Eo=0,25<=i)throw Error(F(301));i+=1,Ae=WA=null,A.updateQueue=null,cl.current=PF,e=t(n,r)}while($s)}if(cl.current=$l,A=WA!==null&&WA.next!==null,Fr=0,Ae=WA=TA=null,zl=!1,A)throw Error(F(300));return e}function up(){var e=Eo!==0;return Eo=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?TA.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function st(){if(WA===null){var e=TA.alternate;e=e!==null?e.memoizedState:null}else e=WA.next;var A=Ae===null?TA.memoizedState:Ae.next;if(A!==null)Ae=A,WA=e;else{if(e===null)throw Error(F(310));WA=e,e={memoizedState:WA.memoizedState,baseState:WA.baseState,baseQueue:WA.baseQueue,queue:WA.queue,next:null},Ae===null?TA.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Uo(e,A){return typeof A=="function"?A(e):A}function Ju(e){var A=st(),t=A.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var n=WA,r=n.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}n.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,n=n.baseState;var o=s=null,a=null,l=i;do{var c=l.lane;if((Fr&c)===c)a!==null&&(a=a.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),n=l.hasEagerState?l.eagerState:e(n,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};a===null?(o=a=u,s=n):a=a.next=u,TA.lanes|=c,Ir|=c}l=l.next}while(l!==null&&l!==i);a===null?s=n:a.next=o,Qt(n,A.memoizedState)||(Se=!0),A.memoizedState=n,A.baseState=s,A.baseQueue=a,t.lastRenderedState=n}if(e=t.interleaved,e!==null){r=e;do i=r.lane,TA.lanes|=i,Ir|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[A.memoizedState,t.dispatch]}function Zu(e){var A=st(),t=A.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var n=t.dispatch,r=t.pending,i=A.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Qt(i,A.memoizedState)||(Se=!0),A.memoizedState=i,A.baseQueue===null&&(A.baseState=i),t.lastRenderedState=i}return[i,n]}function Y0(){}function J0(e,A){var t=TA,n=st(),r=A(),i=!Qt(n.memoizedState,r);if(i&&(n.memoizedState=r,Se=!0),n=n.queue,dp(Av.bind(null,t,n,e),[e]),n.getSnapshot!==A||i||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,Fo(9,q0.bind(null,t,n,r,A),void 0,null),ne===null)throw Error(F(349));Fr&30||Z0(t,A,r)}return r}function Z0(e,A,t){e.flags|=16384,e={getSnapshot:A,value:t},A=TA.updateQueue,A===null?(A={lastEffect:null,stores:null},TA.updateQueue=A,A.stores=[e]):(t=A.stores,t===null?A.stores=[e]:t.push(e))}function q0(e,A,t,n){A.value=t,A.getSnapshot=n,ev(A)&&tv(e)}function Av(e,A,t){return t(function(){ev(A)&&tv(e)})}function ev(e){var A=e.getSnapshot;e=e.value;try{var t=A();return!Qt(e,t)}catch{return!0}}function tv(e){var A=en(e,1);A!==null&&mt(A,e,1,-1)}function xB(e){var A=Ft();return typeof e=="function"&&(e=e()),A.memoizedState=A.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},A.queue=e,e=e.dispatch=RF.bind(null,TA,e),[A.memoizedState,e]}function Fo(e,A,t,n){return e={tag:e,create:A,destroy:t,deps:n,next:null},A=TA.updateQueue,A===null?(A={lastEffect:null,stores:null},TA.updateQueue=A,A.lastEffect=e.next=e):(t=A.lastEffect,t===null?A.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,A.lastEffect=e)),e}function nv(){return st().memoizedState}function ul(e,A,t,n){var r=Ft();TA.flags|=e,r.memoizedState=Fo(1|A,t,void 0,n===void 0?null:n)}function Kc(e,A,t,n){var r=st();n=n===void 0?null:n;var i=void 0;if(WA!==null){var s=WA.memoizedState;if(i=s.destroy,n!==null&&lp(n,s.deps)){r.memoizedState=Fo(A,t,i,n);return}}TA.flags|=e,r.memoizedState=Fo(1|A,t,i,n)}function TB(e,A){return ul(8390656,8,e,A)}function dp(e,A){return Kc(2048,8,e,A)}function rv(e,A){return Kc(4,2,e,A)}function iv(e,A){return Kc(4,4,e,A)}function sv(e,A){if(typeof A=="function")return e=e(),A(e),function(){A(null)};if(A!=null)return e=e(),A.current=e,function(){A.current=null}}function ov(e,A,t){return t=t!=null?t.concat([e]):null,Kc(4,4,sv.bind(null,A,e),t)}function fp(){}function av(e,A){var t=st();A=A===void 0?null:A;var n=t.memoizedState;return n!==null&&A!==null&&lp(A,n[1])?n[0]:(t.memoizedState=[e,A],e)}function lv(e,A){var t=st();A=A===void 0?null:A;var n=t.memoizedState;return n!==null&&A!==null&&lp(A,n[1])?n[0]:(e=e(),t.memoizedState=[e,A],e)}function cv(e,A,t){return Fr&21?(Qt(t,A)||(t=p0(),TA.lanes|=t,Ir|=t,e.baseState=!0),A):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function DF(e,A){var t=fA;fA=t!==0&&4>t?t:4,e(!0);var n=Yu.transition;Yu.transition={};try{e(!1),A()}finally{fA=t,Yu.transition=n}}function uv(){return st().memoizedState}function NF(e,A,t){var n=Rn(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},dv(e))fv(A,t);else if(t=z0(e,A,t,n),t!==null){var r=ve();mt(t,e,n,r),hv(t,A,n)}}function RF(e,A,t){var n=Rn(e),r={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(dv(e))fv(A,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=A.lastRenderedReducer,i!==null))try{var s=A.lastRenderedState,o=i(s,t);if(r.hasEagerState=!0,r.eagerState=o,Qt(o,s)){var a=A.interleaved;a===null?(r.next=r,rp(A)):(r.next=a.next,a.next=r),A.interleaved=r;return}}catch{}finally{}t=z0(e,A,r,n),t!==null&&(r=ve(),mt(t,e,n,r),hv(t,A,n))}}function dv(e){var A=e.alternate;return e===TA||A!==null&&A===TA}function fv(e,A){$s=zl=!0;var t=e.pending;t===null?A.next=A:(A.next=t.next,t.next=A),e.pending=A}function hv(e,A,t){if(t&4194240){var n=A.lanes;n&=e.pendingLanes,t|=n,A.lanes=t,Gh(e,t)}}var $l={readContext:it,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},OF={readContext:it,useCallback:function(e,A){return Ft().memoizedState=[e,A===void 0?null:A],e},useContext:it,useEffect:TB,useImperativeHandle:function(e,A,t){return t=t!=null?t.concat([e]):null,ul(4194308,4,sv.bind(null,A,e),t)},useLayoutEffect:function(e,A){return ul(4194308,4,e,A)},useInsertionEffect:function(e,A){return ul(4,2,e,A)},useMemo:function(e,A){var t=Ft();return A=A===void 0?null:A,e=e(),t.memoizedState=[e,A],e},useReducer:function(e,A,t){var n=Ft();return A=t!==void 0?t(A):A,n.memoizedState=n.baseState=A,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:A},n.queue=e,e=e.dispatch=NF.bind(null,TA,e),[n.memoizedState,e]},useRef:function(e){var A=Ft();return e={current:e},A.memoizedState=e},useState:xB,useDebugValue:fp,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=xB(!1),A=e[0];return e=DF.bind(null,e[1]),Ft().memoizedState=e,[A,e]},useMutableSource:function(){},useSyncExternalStore:function(e,A,t){var n=TA,r=Ft();if(IA){if(t===void 0)throw Error(F(407));t=t()}else{if(t=A(),ne===null)throw Error(F(349));Fr&30||Z0(n,A,t)}r.memoizedState=t;var i={value:t,getSnapshot:A};return r.queue=i,TB(Av.bind(null,n,i,e),[e]),n.flags|=2048,Fo(9,q0.bind(null,n,i,t,A),void 0,null),t},useId:function(){var e=Ft(),A=ne.identifierPrefix;if(IA){var t=jt,n=Wt;t=(n&~(1<<32-wt(n)-1)).toString(32)+t,A=":"+A+"R"+t,t=Eo++,0<t&&(A+="H"+t.toString(32)),A+=":"}else t=bF++,A=":"+A+"r"+t.toString(32)+":";return e.memoizedState=A},unstable_isNewReconciler:!1},MF={readContext:it,useCallback:av,useContext:it,useEffect:dp,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:Ju,useRef:nv,useState:function(){return Ju(Uo)},useDebugValue:fp,useDeferredValue:function(e){var A=st();return cv(A,WA.memoizedState,e)},useTransition:function(){var e=Ju(Uo)[0],A=st().memoizedState;return[e,A]},useMutableSource:Y0,useSyncExternalStore:J0,useId:uv,unstable_isNewReconciler:!1},PF={readContext:it,useCallback:av,useContext:it,useEffect:dp,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:Zu,useRef:nv,useState:function(){return Zu(Uo)},useDebugValue:fp,useDeferredValue:function(e){var A=st();return WA===null?A.memoizedState=e:cv(A,WA.memoizedState,e)},useTransition:function(){var e=Zu(Uo)[0],A=st().memoizedState;return[e,A]},useMutableSource:Y0,useSyncExternalStore:J0,useId:uv,unstable_isNewReconciler:!1};function ut(e,A){if(e&&e.defaultProps){A=HA({},A),e=e.defaultProps;for(var t in e)A[t]===void 0&&(A[t]=e[t]);return A}return A}function yf(e,A,t,n){A=e.memoizedState,t=t(n,A),t=t==null?A:HA({},A,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Vc={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,A,t){e=e._reactInternals;var n=ve(),r=Rn(e),i=Jt(n,r);i.payload=A,t!=null&&(i.callback=t),A=Dn(e,i,r),A!==null&&(mt(A,e,r,n),ll(A,e,r))},enqueueReplaceState:function(e,A,t){e=e._reactInternals;var n=ve(),r=Rn(e),i=Jt(n,r);i.tag=1,i.payload=A,t!=null&&(i.callback=t),A=Dn(e,i,r),A!==null&&(mt(A,e,r,n),ll(A,e,r))},enqueueForceUpdate:function(e,A){e=e._reactInternals;var t=ve(),n=Rn(e),r=Jt(t,n);r.tag=2,A!=null&&(r.callback=A),A=Dn(e,r,n),A!==null&&(mt(A,e,n,t),ll(A,e,n))}};function HB(e,A,t,n,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):A.prototype&&A.prototype.isPureReactComponent?!mo(t,n)||!mo(r,i):!0}function pv(e,A,t){var n=!1,r=zn,i=A.contextType;return typeof i=="object"&&i!==null?i=it(i):(r=Le(A)?Er:pe.current,n=A.contextTypes,i=(n=n!=null)?Li(e,r):zn),A=new A(t,i),e.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=Vc,e.stateNode=A,A._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),A}function LB(e,A,t,n){e=A.state,typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps(t,n),typeof A.UNSAFE_componentWillReceiveProps=="function"&&A.UNSAFE_componentWillReceiveProps(t,n),A.state!==e&&Vc.enqueueReplaceState(A,A.state,null)}function Qf(e,A,t,n){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},ip(e);var i=A.contextType;typeof i=="object"&&i!==null?r.context=it(i):(i=Le(A)?Er:pe.current,r.context=Li(e,i)),r.state=e.memoizedState,i=A.getDerivedStateFromProps,typeof i=="function"&&(yf(e,A,i,t),r.state=e.memoizedState),typeof A.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(A=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),A!==r.state&&Vc.enqueueReplaceState(r,r.state,null),Wl(e,t,r,n),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,A){try{var t="",n=A;do t+=pU(n),n=n.return;while(n);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:A,stack:r,digest:null}}function qu(e,A,t){return{value:e,source:null,stack:t??null,digest:A??null}}function _f(e,A){try{console.error(A.value)}catch(t){setTimeout(function(){throw t})}}var KF=typeof WeakMap=="function"?WeakMap:Map;function gv(e,A,t){t=Jt(-1,t),t.tag=3,t.payload={element:null};var n=A.value;return t.callback=function(){Yl||(Yl=!0,kf=n),_f(e,A)},t}function Bv(e,A,t){t=Jt(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var r=A.value;t.payload=function(){return n(r)},t.callback=function(){_f(e,A)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){_f(e,A),typeof n!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var s=A.stack;this.componentDidCatch(A.value,{componentStack:s!==null?s:""})}),t}function kB(e,A,t){var n=e.pingCache;if(n===null){n=e.pingCache=new KF;var r=new Set;n.set(A,r)}else r=n.get(A),r===void 0&&(r=new Set,n.set(A,r));r.has(t)||(r.add(t),e=tI.bind(null,e,A,t),A.then(e,e))}function bB(e){do{var A;if((A=e.tag===13)&&(A=e.memoizedState,A=A!==null?A.dehydrated!==null:!0),A)return e;e=e.return}while(e!==null);return null}function DB(e,A,t,n,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===A?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(A=Jt(-1,1),A.tag=2,Dn(t,A,1))),t.lanes|=1),e)}var VF=on.ReactCurrentOwner,Se=!1;function we(e,A,t,n){A.child=e===null?j0(A,null,t,n):bi(A,e.child,t,n)}function NB(e,A,t,n,r){t=t.render;var i=A.ref;return yi(A,r),n=cp(e,A,t,n,i,r),t=up(),e!==null&&!Se?(A.updateQueue=e.updateQueue,A.flags&=-2053,e.lanes&=~r,tn(e,A,r)):(IA&&t&&Zh(A),A.flags|=1,we(e,A,n,r),A.child)}function RB(e,A,t,n,r){if(e===null){var i=t.type;return typeof i=="function"&&!vp(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(A.tag=15,A.type=i,wv(e,A,i,n,r)):(e=pl(t.type,null,n,A,A.mode,r),e.ref=A.ref,e.return=A,A.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:mo,t(s,n)&&e.ref===A.ref)return tn(e,A,r)}return A.flags|=1,e=On(i,n),e.ref=A.ref,e.return=A,A.child=e}function wv(e,A,t,n,r){if(e!==null){var i=e.memoizedProps;if(mo(i,n)&&e.ref===A.ref)if(Se=!1,A.pendingProps=n=i,(e.lanes&r)!==0)e.flags&131072&&(Se=!0);else return A.lanes=e.lanes,tn(e,A,r)}return Ef(e,A,t,n,r)}function mv(e,A,t){var n=A.pendingProps,r=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(A.mode&1))A.memoizedState={baseLanes:0,cachePool:null,transitions:null},vA(hi,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,A.lanes=A.childLanes=1073741824,A.memoizedState={baseLanes:e,cachePool:null,transitions:null},A.updateQueue=null,vA(hi,Pe),Pe|=e,null;A.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:t,vA(hi,Pe),Pe|=n}else i!==null?(n=i.baseLanes|t,A.memoizedState=null):n=t,vA(hi,Pe),Pe|=n;return we(e,A,r,t),A.child}function Cv(e,A){var t=A.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(A.flags|=512,A.flags|=2097152)}function Ef(e,A,t,n,r){var i=Le(t)?Er:pe.current;return i=Li(A,i),yi(A,r),t=cp(e,A,t,n,i,r),n=up(),e!==null&&!Se?(A.updateQueue=e.updateQueue,A.flags&=-2053,e.lanes&=~r,tn(e,A,r)):(IA&&n&&Zh(A),A.flags|=1,we(e,A,t,r),A.child)}function OB(e,A,t,n,r){if(Le(t)){var i=!0;Ml(A)}else i=!1;if(yi(A,r),A.stateNode===null)dl(e,A),pv(A,t,n),Qf(A,t,n,r),n=!0;else if(e===null){var s=A.stateNode,o=A.memoizedProps;s.props=o;var a=s.context,l=t.contextType;typeof l=="object"&&l!==null?l=it(l):(l=Le(t)?Er:pe.current,l=Li(A,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||a!==l)&&LB(A,s,n,l),wn=!1;var d=A.memoizedState;s.state=d,Wl(A,n,s,r),a=A.memoizedState,o!==n||d!==a||He.current||wn?(typeof c=="function"&&(yf(A,t,c,n),a=A.memoizedState),(o=wn||HB(A,t,o,n,d,a,l))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(A.flags|=4194308)):(typeof s.componentDidMount=="function"&&(A.flags|=4194308),A.memoizedProps=n,A.memoizedState=a),s.props=n,s.state=a,s.context=l,n=o):(typeof s.componentDidMount=="function"&&(A.flags|=4194308),n=!1)}else{s=A.stateNode,$0(e,A),o=A.memoizedProps,l=A.type===A.elementType?o:ut(A.type,o),s.props=l,u=A.pendingProps,d=s.context,a=t.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Le(t)?Er:pe.current,a=Li(A,a));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==u||d!==a)&&LB(A,s,n,a),wn=!1,d=A.memoizedState,s.state=d,Wl(A,n,s,r);var g=A.memoizedState;o!==u||d!==g||He.current||wn?(typeof h=="function"&&(yf(A,t,h,n),g=A.memoizedState),(l=wn||HB(A,t,l,n,d,g,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,g,a)),typeof s.componentDidUpdate=="function"&&(A.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(A.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(A.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(A.flags|=1024),A.memoizedProps=n,A.memoizedState=g),s.props=n,s.state=g,s.context=a,n=l):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(A.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(A.flags|=1024),n=!1)}return Uf(e,A,t,n,i,r)}function Uf(e,A,t,n,r,i){Cv(e,A);var s=(A.flags&128)!==0;if(!n&&!s)return r&&_B(A,t,!1),tn(e,A,i);n=A.stateNode,VF.current=A;var o=s&&typeof t.getDerivedStateFromError!="function"?null:n.render();return A.flags|=1,e!==null&&s?(A.child=bi(A,e.child,null,i),A.child=bi(A,null,o,i)):we(e,A,o,i),A.memoizedState=n.state,r&&_B(A,t,!0),A.child}function vv(e){var A=e.stateNode;A.pendingContext?QB(e,A.pendingContext,A.pendingContext!==A.context):A.context&&QB(e,A.context,!1),sp(e,A.containerInfo)}function MB(e,A,t,n,r){return ki(),Ap(r),A.flags|=256,we(e,A,t,n),A.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function If(e){return{baseLanes:e,cachePool:null,transitions:null}}function yv(e,A,t){var n=A.pendingProps,r=xA.current,i=!1,s=(A.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(i=!0,A.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),vA(xA,r&1),e===null)return Cf(A),e=A.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(A.mode&1?e.data==="$!"?A.lanes=8:A.lanes=1073741824:A.lanes=1,null):(s=n.children,e=n.fallback,i?(n=A.mode,i=A.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=jc(s,n,0,null),e=mr(e,n,t,null),i.return=A,e.return=A,i.sibling=e,A.child=i,A.child.memoizedState=If(t),A.memoizedState=Ff,e):hp(A,s));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return GF(e,A,s,n,o,r,t);if(i){i=n.fallback,s=A.mode,r=e.child,o=r.sibling;var a={mode:"hidden",children:n.children};return!(s&1)&&A.child!==r?(n=A.child,n.childLanes=0,n.pendingProps=a,A.deletions=null):(n=On(r,a),n.subtreeFlags=r.subtreeFlags&14680064),o!==null?i=On(o,i):(i=mr(i,s,t,null),i.flags|=2),i.return=A,n.return=A,n.sibling=i,A.child=n,n=i,i=A.child,s=e.child.memoizedState,s=s===null?If(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,A.memoizedState=Ff,n}return i=e.child,e=i.sibling,n=On(i,{mode:"visible",children:n.children}),!(A.mode&1)&&(n.lanes=t),n.return=A,n.sibling=null,e!==null&&(t=A.deletions,t===null?(A.deletions=[e],A.flags|=16):t.push(e)),A.child=n,A.memoizedState=null,n}function hp(e,A){return A=jc({mode:"visible",children:A},e.mode,0,null),A.return=e,e.child=A}function Ea(e,A,t,n){return n!==null&&Ap(n),bi(A,e.child,null,t),e=hp(A,A.pendingProps.children),e.flags|=2,A.memoizedState=null,e}function GF(e,A,t,n,r,i,s){if(t)return A.flags&256?(A.flags&=-257,n=qu(Error(F(422))),Ea(e,A,s,n)):A.memoizedState!==null?(A.child=e.child,A.flags|=128,null):(i=n.fallback,r=A.mode,n=jc({mode:"visible",children:n.children},r,0,null),i=mr(i,r,s,null),i.flags|=2,n.return=A,i.return=A,n.sibling=i,A.child=n,A.mode&1&&bi(A,e.child,null,s),A.child.memoizedState=If(s),A.memoizedState=Ff,i);if(!(A.mode&1))return Ea(e,A,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(F(419)),n=qu(i,n,void 0),Ea(e,A,s,n)}if(o=(s&e.childLanes)!==0,Se||o){if(n=ne,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,en(e,r),mt(n,e,r,-1))}return Cp(),n=qu(Error(F(421))),Ea(e,A,s,n)}return r.data==="$?"?(A.flags|=128,A.child=e.child,A=nI.bind(null,e),r._reactRetry=A,null):(e=i.treeContext,Ke=bn(r.nextSibling),Ve=A,IA=!0,ft=null,e!==null&&(Je[Ze++]=Wt,Je[Ze++]=jt,Je[Ze++]=Ur,Wt=e.id,jt=e.overflow,Ur=A),A=hp(A,n.children),A.flags|=4096,A)}function PB(e,A,t){e.lanes|=A;var n=e.alternate;n!==null&&(n.lanes|=A),vf(e.return,A,t)}function Ad(e,A,t,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:A,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:r}:(i.isBackwards=A,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=t,i.tailMode=r)}function Qv(e,A,t){var n=A.pendingProps,r=n.revealOrder,i=n.tail;if(we(e,A,n.children,t),n=xA.current,n&2)n=n&1|2,A.flags|=128;else{if(e!==null&&e.flags&128)A:for(e=A.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&PB(e,t,A);else if(e.tag===19)PB(e,t,A);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(vA(xA,n),!(A.mode&1))A.memoizedState=null;else switch(r){case"forwards":for(t=A.child,r=null;t!==null;)e=t.alternate,e!==null&&jl(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=A.child,A.child=null):(r=t.sibling,t.sibling=null),Ad(A,!1,r,t,i);break;case"backwards":for(t=null,r=A.child,A.child=null;r!==null;){if(e=r.alternate,e!==null&&jl(e)===null){A.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ad(A,!0,t,null,i);break;case"together":Ad(A,!1,null,null,void 0);break;default:A.memoizedState=null}return A.child}function dl(e,A){!(A.mode&1)&&e!==null&&(e.alternate=null,A.alternate=null,A.flags|=2)}function tn(e,A,t){if(e!==null&&(A.dependencies=e.dependencies),Ir|=A.lanes,!(t&A.childLanes))return null;if(e!==null&&A.child!==e.child)throw Error(F(153));if(A.child!==null){for(e=A.child,t=On(e,e.pendingProps),A.child=t,t.return=A;e.sibling!==null;)e=e.sibling,t=t.sibling=On(e,e.pendingProps),t.return=A;t.sibling=null}return A.child}function WF(e,A,t){switch(A.tag){case 3:vv(A),ki();break;case 5:X0(A);break;case 1:Le(A.type)&&Ml(A);break;case 4:sp(A,A.stateNode.containerInfo);break;case 10:var n=A.type._context,r=A.memoizedProps.value;vA(Vl,n._currentValue),n._currentValue=r;break;case 13:if(n=A.memoizedState,n!==null)return n.dehydrated!==null?(vA(xA,xA.current&1),A.flags|=128,null):t&A.child.childLanes?yv(e,A,t):(vA(xA,xA.current&1),e=tn(e,A,t),e!==null?e.sibling:null);vA(xA,xA.current&1);break;case 19:if(n=(t&A.childLanes)!==0,e.flags&128){if(n)return Qv(e,A,t);A.flags|=128}if(r=A.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vA(xA,xA.current),n)break;return null;case 22:case 23:return A.lanes=0,mv(e,A,t)}return tn(e,A,t)}var _v,Sf,Ev,Uv;_v=function(e,A){for(var t=A.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===A)break;for(;t.sibling===null;){if(t.return===null||t.return===A)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sf=function(){};Ev=function(e,A,t,n){var r=e.memoizedProps;if(r!==n){e=A.stateNode,dr(Tt.current);var i=null;switch(t){case"input":r=Yd(e,r),n=Yd(e,n),i=[];break;case"select":r=HA({},r,{value:void 0}),n=HA({},n,{value:void 0}),i=[];break;case"textarea":r=qd(e,r),n=qd(e,n),i=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Rl)}ef(t,n);var s;t=null;for(l in r)if(!n.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(s in o)o.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(uo.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in n){var a=n[l];if(o=r!=null?r[l]:void 0,n.hasOwnProperty(l)&&a!==o&&(a!=null||o!=null))if(l==="style")if(o){for(s in o)!o.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in a)a.hasOwnProperty(s)&&o[s]!==a[s]&&(t||(t={}),t[s]=a[s])}else t||(i||(i=[]),i.push(l,t)),t=a;else l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(i=i||[]).push(l,a)):l==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(l,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(uo.hasOwnProperty(l)?(a!=null&&l==="onScroll"&&_A("scroll",e),i||o===a||(i=[])):(i=i||[]).push(l,a))}t&&(i=i||[]).push("style",t);var l=i;(A.updateQueue=l)&&(A.flags|=4)}};Uv=function(e,A,t,n){t!==n&&(A.flags|=4)};function vs(e,A){if(!IA)switch(e.tailMode){case"hidden":A=e.tail;for(var t=null;A!==null;)A.alternate!==null&&(t=A),A=A.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?A||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function de(e){var A=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(A)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=t,A}function jF(e,A,t){var n=A.pendingProps;switch(qh(A),A.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(A),null;case 1:return Le(A.type)&&Ol(),de(A),null;case 3:return n=A.stateNode,Di(),UA(He),UA(pe),ap(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qa(A)?A.flags|=4:e===null||e.memoizedState.isDehydrated&&!(A.flags&256)||(A.flags|=1024,ft!==null&&(Nf(ft),ft=null))),Sf(e,A),de(A),null;case 5:op(A);var r=dr(_o.current);if(t=A.type,e!==null&&A.stateNode!=null)Ev(e,A,t,n,r),e.ref!==A.ref&&(A.flags|=512,A.flags|=2097152);else{if(!n){if(A.stateNode===null)throw Error(F(166));return de(A),null}if(e=dr(Tt.current),Qa(A)){n=A.stateNode,t=A.type;var i=A.memoizedProps;switch(n[St]=A,n[yo]=i,e=(A.mode&1)!==0,t){case"dialog":_A("cancel",n),_A("close",n);break;case"iframe":case"object":case"embed":_A("load",n);break;case"video":case"audio":for(r=0;r<ks.length;r++)_A(ks[r],n);break;case"source":_A("error",n);break;case"img":case"image":case"link":_A("error",n),_A("load",n);break;case"details":_A("toggle",n);break;case"input":Yg(n,i),_A("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},_A("invalid",n);break;case"textarea":Zg(n,i),_A("invalid",n)}ef(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&ya(n.textContent,o,e),r=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&ya(n.textContent,o,e),r=["children",""+o]):uo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&_A("scroll",n)}switch(t){case"input":ha(n),Jg(n,i,!0);break;case"textarea":ha(n),qg(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Rl)}n=r,A.updateQueue=n,n!==null&&(A.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=A0(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(t,{is:n.is}):(e=s.createElement(t),t==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,t),e[St]=A,e[yo]=n,_v(e,A,!1,!1),A.stateNode=e;A:{switch(s=tf(t,n),t){case"dialog":_A("cancel",e),_A("close",e),r=n;break;case"iframe":case"object":case"embed":_A("load",e),r=n;break;case"video":case"audio":for(r=0;r<ks.length;r++)_A(ks[r],e);r=n;break;case"source":_A("error",e),r=n;break;case"img":case"image":case"link":_A("error",e),_A("load",e),r=n;break;case"details":_A("toggle",e),r=n;break;case"input":Yg(e,n),r=Yd(e,n),_A("invalid",e);break;case"option":r=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},r=HA({},n,{value:void 0}),_A("invalid",e);break;case"textarea":Zg(e,n),r=qd(e,n),_A("invalid",e);break;default:r=n}ef(t,r),o=r;for(i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="style"?n0(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&e0(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&fo(e,a):typeof a=="number"&&fo(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&_A("scroll",e):a!=null&&Rh(e,i,a,s))}switch(t){case"input":ha(e),Jg(e,n,!1);break;case"textarea":ha(e),qg(e);break;case"option":n.value!=null&&e.setAttribute("value",""+jn(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?wi(e,!!n.multiple,i,!1):n.defaultValue!=null&&wi(e,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Rl)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break A;case"img":n=!0;break A;default:n=!1}}n&&(A.flags|=4)}A.ref!==null&&(A.flags|=512,A.flags|=2097152)}return de(A),null;case 6:if(e&&A.stateNode!=null)Uv(e,A,e.memoizedProps,n);else{if(typeof n!="string"&&A.stateNode===null)throw Error(F(166));if(t=dr(_o.current),dr(Tt.current),Qa(A)){if(n=A.stateNode,t=A.memoizedProps,n[St]=A,(i=n.nodeValue!==t)&&(e=Ve,e!==null))switch(e.tag){case 3:ya(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(n.nodeValue,t,(e.mode&1)!==0)}i&&(A.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[St]=A,A.stateNode=n}return de(A),null;case 13:if(UA(xA),n=A.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(IA&&Ke!==null&&A.mode&1&&!(A.flags&128))G0(),ki(),A.flags|=98560,i=!1;else if(i=Qa(A),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=A.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[St]=A}else ki(),!(A.flags&128)&&(A.memoizedState=null),A.flags|=4;de(A),i=!1}else ft!==null&&(Nf(ft),ft=null),i=!0;if(!i)return A.flags&65536?A:null}return A.flags&128?(A.lanes=t,A):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(A.child.flags|=8192,A.mode&1&&(e===null||xA.current&1?XA===0&&(XA=3):Cp())),A.updateQueue!==null&&(A.flags|=4),de(A),null);case 4:return Di(),Sf(e,A),e===null&&Co(A.stateNode.containerInfo),de(A),null;case 10:return np(A.type._context),de(A),null;case 17:return Le(A.type)&&Ol(),de(A),null;case 19:if(UA(xA),i=A.memoizedState,i===null)return de(A),null;if(n=(A.flags&128)!==0,s=i.rendering,s===null)if(n)vs(i,!1);else{if(XA!==0||e!==null&&e.flags&128)for(e=A.child;e!==null;){if(s=jl(e),s!==null){for(A.flags|=128,vs(i,!1),n=s.updateQueue,n!==null&&(A.updateQueue=n,A.flags|=4),A.subtreeFlags=0,n=t,t=A.child;t!==null;)i=t,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return vA(xA,xA.current&1|2),A.child}e=e.sibling}i.tail!==null&&PA()>Ri&&(A.flags|=128,n=!0,vs(i,!1),A.lanes=4194304)}else{if(!n)if(e=jl(s),e!==null){if(A.flags|=128,n=!0,t=e.updateQueue,t!==null&&(A.updateQueue=t,A.flags|=4),vs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!IA)return de(A),null}else 2*PA()-i.renderingStartTime>Ri&&t!==1073741824&&(A.flags|=128,n=!0,vs(i,!1),A.lanes=4194304);i.isBackwards?(s.sibling=A.child,A.child=s):(t=i.last,t!==null?t.sibling=s:A.child=s,i.last=s)}return i.tail!==null?(A=i.tail,i.rendering=A,i.tail=A.sibling,i.renderingStartTime=PA(),A.sibling=null,t=xA.current,vA(xA,n?t&1|2:t&1),A):(de(A),null);case 22:case 23:return mp(),n=A.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(A.flags|=8192),n&&A.mode&1?Pe&1073741824&&(de(A),A.subtreeFlags&6&&(A.flags|=8192)):de(A),null;case 24:return null;case 25:return null}throw Error(F(156,A.tag))}function zF(e,A){switch(qh(A),A.tag){case 1:return Le(A.type)&&Ol(),e=A.flags,e&65536?(A.flags=e&-65537|128,A):null;case 3:return Di(),UA(He),UA(pe),ap(),e=A.flags,e&65536&&!(e&128)?(A.flags=e&-65537|128,A):null;case 5:return op(A),null;case 13:if(UA(xA),e=A.memoizedState,e!==null&&e.dehydrated!==null){if(A.alternate===null)throw Error(F(340));ki()}return e=A.flags,e&65536?(A.flags=e&-65537|128,A):null;case 19:return UA(xA),null;case 4:return Di(),null;case 10:return np(A.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var Ua=!1,he=!1,$F=typeof WeakSet=="function"?WeakSet:Set,b=null;function fi(e,A){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){LA(e,A,n)}else t.current=null}function xf(e,A,t){try{t()}catch(n){LA(e,A,n)}}var KB=!1;function XF(e,A){if(ff=bl,e=T0(),Jh(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else A:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break A}var s=0,o=-1,a=-1,l=0,c=0,u=e,d=null;e:for(;;){for(var h;u!==t||r!==0&&u.nodeType!==3||(o=s+r),u!==i||n!==0&&u.nodeType!==3||(a=s+n),u.nodeType===3&&(s+=u.nodeValue.length),(h=u.firstChild)!==null;)d=u,u=h;for(;;){if(u===e)break e;if(d===t&&++l===r&&(o=s),d===i&&++c===n&&(a=s),(h=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=h}t=o===-1||a===-1?null:{start:o,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(hf={focusedElem:e,selectionRange:t},bl=!1,b=A;b!==null;)if(A=b,e=A.child,(A.subtreeFlags&1028)!==0&&e!==null)e.return=A,b=e;else for(;b!==null;){A=b;try{var g=A.alternate;if(A.flags&1024)switch(A.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,_=g.memoizedState,p=A.stateNode,f=p.getSnapshotBeforeUpdate(A.elementType===A.type?w:ut(A.type,w),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var B=A.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){LA(A,A.return,C)}if(e=A.sibling,e!==null){e.return=A.return,b=e;break}b=A.return}return g=KB,KB=!1,g}function Xs(e,A,t){var n=A.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&xf(A,t,i)}r=r.next}while(r!==n)}}function Gc(e,A){if(A=A.updateQueue,A=A!==null?A.lastEffect:null,A!==null){var t=A=A.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==A)}}function Tf(e){var A=e.ref;if(A!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof A=="function"?A(e):A.current=e}}function Fv(e){var A=e.alternate;A!==null&&(e.alternate=null,Fv(A)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(A=e.stateNode,A!==null&&(delete A[St],delete A[yo],delete A[Bf],delete A[TF],delete A[HF])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iv(e){return e.tag===5||e.tag===3||e.tag===4}function VB(e){A:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue A;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,A,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,A?t.nodeType===8?t.parentNode.insertBefore(e,A):t.insertBefore(e,A):(t.nodeType===8?(A=t.parentNode,A.insertBefore(e,t)):(A=t,A.appendChild(e)),t=t._reactRootContainer,t!=null||A.onclick!==null||(A.onclick=Rl));else if(n!==4&&(e=e.child,e!==null))for(Hf(e,A,t),e=e.sibling;e!==null;)Hf(e,A,t),e=e.sibling}function Lf(e,A,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,A?t.insertBefore(e,A):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Lf(e,A,t),e=e.sibling;e!==null;)Lf(e,A,t),e=e.sibling}var ie=null,dt=!1;function un(e,A,t){for(t=t.child;t!==null;)Sv(e,A,t),t=t.sibling}function Sv(e,A,t){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Dc,t)}catch{}switch(t.tag){case 5:he||fi(t,A);case 6:var n=ie,r=dt;ie=null,un(e,A,t),ie=n,dt=r,ie!==null&&(dt?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(dt?(e=ie,t=t.stateNode,e.nodeType===8?zu(e.parentNode,t):e.nodeType===1&&zu(e,t),Bo(e)):zu(ie,t.stateNode));break;case 4:n=ie,r=dt,ie=t.stateNode.containerInfo,dt=!0,un(e,A,t),ie=n,dt=r;break;case 0:case 11:case 14:case 15:if(!he&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&xf(t,A,s),r=r.next}while(r!==n)}un(e,A,t);break;case 1:if(!he&&(fi(t,A),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(o){LA(t,A,o)}un(e,A,t);break;case 21:un(e,A,t);break;case 22:t.mode&1?(he=(n=he)||t.memoizedState!==null,un(e,A,t),he=n):un(e,A,t);break;default:un(e,A,t)}}function GB(e){var A=e.updateQueue;if(A!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new $F),A.forEach(function(n){var r=rI.bind(null,e,n);t.has(n)||(t.add(n),n.then(r,r))})}}function lt(e,A){var t=A.deletions;if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];try{var i=e,s=A,o=s;A:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,dt=!1;break A;case 3:ie=o.stateNode.containerInfo,dt=!0;break A;case 4:ie=o.stateNode.containerInfo,dt=!0;break A}o=o.return}if(ie===null)throw Error(F(160));Sv(i,s,r),ie=null,dt=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(l){LA(r,A,l)}}if(A.subtreeFlags&12854)for(A=A.child;A!==null;)xv(A,e),A=A.sibling}function xv(e,A){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(A,e),Et(e),n&4){try{Xs(3,e,e.return),Gc(3,e)}catch(w){LA(e,e.return,w)}try{Xs(5,e,e.return)}catch(w){LA(e,e.return,w)}}break;case 1:lt(A,e),Et(e),n&512&&t!==null&&fi(t,t.return);break;case 5:if(lt(A,e),Et(e),n&512&&t!==null&&fi(t,t.return),e.flags&32){var r=e.stateNode;try{fo(r,"")}catch(w){LA(e,e.return,w)}}if(n&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&ZC(r,i),tf(o,s);var l=tf(o,i);for(s=0;s<a.length;s+=2){var c=a[s],u=a[s+1];c==="style"?n0(r,u):c==="dangerouslySetInnerHTML"?e0(r,u):c==="children"?fo(r,u):Rh(r,c,u,l)}switch(o){case"input":Jd(r,i);break;case"textarea":qC(r,i);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?wi(r,!!i.multiple,h,!1):d!==!!i.multiple&&(i.defaultValue!=null?wi(r,!!i.multiple,i.defaultValue,!0):wi(r,!!i.multiple,i.multiple?[]:"",!1))}r[yo]=i}catch(w){LA(e,e.return,w)}}break;case 6:if(lt(A,e),Et(e),n&4){if(e.stateNode===null)throw Error(F(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(w){LA(e,e.return,w)}}break;case 3:if(lt(A,e),Et(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Bo(A.containerInfo)}catch(w){LA(e,e.return,w)}break;case 4:lt(A,e),Et(e);break;case 13:lt(A,e),Et(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Bp=PA())),n&4&&GB(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(he=(l=he)||c,lt(A,e),he=l):lt(A,e),Et(e),n&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(b=e,c=e.child;c!==null;){for(u=b=c;b!==null;){switch(d=b,h=d.child,d.tag){case 0:case 11:case 14:case 15:Xs(4,d,d.return);break;case 1:fi(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){n=d,t=d.return;try{A=n,g.props=A.memoizedProps,g.state=A.memoizedState,g.componentWillUnmount()}catch(w){LA(n,t,w)}}break;case 5:fi(d,d.return);break;case 22:if(d.memoizedState!==null){jB(u);continue}}h!==null?(h.return=d,b=h):jB(u)}c=c.sibling}A:for(c=null,u=e;;){if(u.tag===5){if(c===null){c=u;try{r=u.stateNode,l?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=u.stateNode,a=u.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=t0("display",s))}catch(w){LA(e,e.return,w)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(w){LA(e,e.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break A;for(;u.sibling===null;){if(u.return===null||u.return===e)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:lt(A,e),Et(e),n&4&&GB(e);break;case 21:break;default:lt(A,e),Et(e)}}function Et(e){var A=e.flags;if(A&2){try{A:{for(var t=e.return;t!==null;){if(Iv(t)){var n=t;break A}t=t.return}throw Error(F(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(fo(r,""),n.flags&=-33);var i=VB(e);Lf(e,i,r);break;case 3:case 4:var s=n.stateNode.containerInfo,o=VB(e);Hf(e,o,s);break;default:throw Error(F(161))}}catch(a){LA(e,e.return,a)}e.flags&=-3}A&4096&&(e.flags&=-4097)}function YF(e,A,t){b=e,Tv(e)}function Tv(e,A,t){for(var n=(e.mode&1)!==0;b!==null;){var r=b,i=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||Ua;if(!s){var o=r.alternate,a=o!==null&&o.memoizedState!==null||he;o=Ua;var l=he;if(Ua=s,(he=a)&&!l)for(b=r;b!==null;)s=b,a=s.child,s.tag===22&&s.memoizedState!==null?zB(r):a!==null?(a.return=s,b=a):zB(r);for(;i!==null;)b=i,Tv(i),i=i.sibling;b=r,Ua=o,he=l}WB(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,b=i):WB(e)}}function WB(e){for(;b!==null;){var A=b;if(A.flags&8772){var t=A.alternate;try{if(A.flags&8772)switch(A.tag){case 0:case 11:case 15:he||Gc(5,A);break;case 1:var n=A.stateNode;if(A.flags&4&&!he)if(t===null)n.componentDidMount();else{var r=A.elementType===A.type?t.memoizedProps:ut(A.type,t.memoizedProps);n.componentDidUpdate(r,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=A.updateQueue;i!==null&&SB(A,i,n);break;case 3:var s=A.updateQueue;if(s!==null){if(t=null,A.child!==null)switch(A.child.tag){case 5:t=A.child.stateNode;break;case 1:t=A.child.stateNode}SB(A,s,t)}break;case 5:var o=A.stateNode;if(t===null&&A.flags&4){t=o;var a=A.memoizedProps;switch(A.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(A.memoizedState===null){var l=A.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&Bo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}he||A.flags&512&&Tf(A)}catch(d){LA(A,A.return,d)}}if(A===e){b=null;break}if(t=A.sibling,t!==null){t.return=A.return,b=t;break}b=A.return}}function jB(e){for(;b!==null;){var A=b;if(A===e){b=null;break}var t=A.sibling;if(t!==null){t.return=A.return,b=t;break}b=A.return}}function zB(e){for(;b!==null;){var A=b;try{switch(A.tag){case 0:case 11:case 15:var t=A.return;try{Gc(4,A)}catch(a){LA(A,t,a)}break;case 1:var n=A.stateNode;if(typeof n.componentDidMount=="function"){var r=A.return;try{n.componentDidMount()}catch(a){LA(A,r,a)}}var i=A.return;try{Tf(A)}catch(a){LA(A,i,a)}break;case 5:var s=A.return;try{Tf(A)}catch(a){LA(A,s,a)}}}catch(a){LA(A,A.return,a)}if(A===e){b=null;break}var o=A.sibling;if(o!==null){o.return=A.return,b=o;break}b=A.return}}var JF=Math.ceil,Xl=on.ReactCurrentDispatcher,pp=on.ReactCurrentOwner,rt=on.ReactCurrentBatchConfig,iA=0,ne=null,GA=null,ae=0,Pe=0,hi=qn(0),XA=0,Io=null,Ir=0,Wc=0,gp=0,Ys=null,Ie=null,Bp=0,Ri=1/0,Pt=null,Yl=!1,kf=null,Nn=null,Fa=!1,Fn=null,Jl=0,Js=0,bf=null,fl=-1,hl=0;function ve(){return iA&6?PA():fl!==-1?fl:fl=PA()}function Rn(e){return e.mode&1?iA&2&&ae!==0?ae&-ae:kF.transition!==null?(hl===0&&(hl=p0()),hl):(e=fA,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e):1}function mt(e,A,t,n){if(50<Js)throw Js=0,bf=null,Error(F(185));Wo(e,t,n),(!(iA&2)||e!==ne)&&(e===ne&&(!(iA&2)&&(Wc|=t),XA===4&&vn(e,ae)),ke(e,n),t===1&&iA===0&&!(A.mode&1)&&(Ri=PA()+500,Pc&&Ar()))}function ke(e,A){var t=e.callbackNode;kU(e,A);var n=kl(e,e===ne?ae:0);if(n===0)t!==null&&tB(t),e.callbackNode=null,e.callbackPriority=0;else if(A=n&-n,e.callbackPriority!==A){if(t!=null&&tB(t),A===1)e.tag===0?LF($B.bind(null,e)):P0($B.bind(null,e)),SF(function(){!(iA&6)&&Ar()}),t=null;else{switch(g0(n)){case 1:t=Vh;break;case 4:t=f0;break;case 16:t=Ll;break;case 536870912:t=h0;break;default:t=Ll}t=Ov(t,Hv.bind(null,e))}e.callbackPriority=A,e.callbackNode=t}}function Hv(e,A){if(fl=-1,hl=0,iA&6)throw Error(F(327));var t=e.callbackNode;if(Qi()&&e.callbackNode!==t)return null;var n=kl(e,e===ne?ae:0);if(n===0)return null;if(n&30||n&e.expiredLanes||A)A=Zl(e,n);else{A=n;var r=iA;iA|=2;var i=kv();(ne!==e||ae!==A)&&(Pt=null,Ri=PA()+500,wr(e,A));do try{AI();break}catch(o){Lv(e,o)}while(!0);tp(),Xl.current=i,iA=r,GA!==null?A=0:(ne=null,ae=0,A=XA)}if(A!==0){if(A===2&&(r=af(e),r!==0&&(n=r,A=Df(e,r))),A===1)throw t=Io,wr(e,0),vn(e,n),ke(e,PA()),t;if(A===6)vn(e,n);else{if(r=e.current.alternate,!(n&30)&&!ZF(r)&&(A=Zl(e,n),A===2&&(i=af(e),i!==0&&(n=i,A=Df(e,i))),A===1))throw t=Io,wr(e,0),vn(e,n),ke(e,PA()),t;switch(e.finishedWork=r,e.finishedLanes=n,A){case 0:case 1:throw Error(F(345));case 2:ir(e,Ie,Pt);break;case 3:if(vn(e,n),(n&130023424)===n&&(A=Bp+500-PA(),10<A)){if(kl(e,0)!==0)break;if(r=e.suspendedLanes,(r&n)!==n){ve(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=gf(ir.bind(null,e,Ie,Pt),A);break}ir(e,Ie,Pt);break;case 4:if(vn(e,n),(n&4194240)===n)break;for(A=e.eventTimes,r=-1;0<n;){var s=31-wt(n);i=1<<s,s=A[s],s>r&&(r=s),n&=~i}if(n=r,n=PA()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*JF(n/1960))-n,10<n){e.timeoutHandle=gf(ir.bind(null,e,Ie,Pt),n);break}ir(e,Ie,Pt);break;case 5:ir(e,Ie,Pt);break;default:throw Error(F(329))}}}return ke(e,PA()),e.callbackNode===t?Hv.bind(null,e):null}function Df(e,A){var t=Ys;return e.current.memoizedState.isDehydrated&&(wr(e,A).flags|=256),e=Zl(e,A),e!==2&&(A=Ie,Ie=t,A!==null&&Nf(A)),e}function Nf(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function ZF(e){for(var A=e;;){if(A.flags&16384){var t=A.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var r=t[n],i=r.getSnapshot;r=r.value;try{if(!Qt(i(),r))return!1}catch{return!1}}}if(t=A.child,A.subtreeFlags&16384&&t!==null)t.return=A,A=t;else{if(A===e)break;for(;A.sibling===null;){if(A.return===null||A.return===e)return!0;A=A.return}A.sibling.return=A.return,A=A.sibling}}return!0}function vn(e,A){for(A&=~gp,A&=~Wc,e.suspendedLanes|=A,e.pingedLanes&=~A,e=e.expirationTimes;0<A;){var t=31-wt(A),n=1<<t;e[t]=-1,A&=~n}}function $B(e){if(iA&6)throw Error(F(327));Qi();var A=kl(e,0);if(!(A&1))return ke(e,PA()),null;var t=Zl(e,A);if(e.tag!==0&&t===2){var n=af(e);n!==0&&(A=n,t=Df(e,n))}if(t===1)throw t=Io,wr(e,0),vn(e,A),ke(e,PA()),t;if(t===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=A,ir(e,Ie,Pt),ke(e,PA()),null}function wp(e,A){var t=iA;iA|=1;try{return e(A)}finally{iA=t,iA===0&&(Ri=PA()+500,Pc&&Ar())}}function Sr(e){Fn!==null&&Fn.tag===0&&!(iA&6)&&Qi();var A=iA;iA|=1;var t=rt.transition,n=fA;try{if(rt.transition=null,fA=1,e)return e()}finally{fA=n,rt.transition=t,iA=A,!(iA&6)&&Ar()}}function mp(){Pe=hi.current,UA(hi)}function wr(e,A){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,IF(t)),GA!==null)for(t=GA.return;t!==null;){var n=t;switch(qh(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ol();break;case 3:Di(),UA(He),UA(pe),ap();break;case 5:op(n);break;case 4:Di();break;case 13:UA(xA);break;case 19:UA(xA);break;case 10:np(n.type._context);break;case 22:case 23:mp()}t=t.return}if(ne=e,GA=e=On(e.current,null),ae=Pe=A,XA=0,Io=null,gp=Wc=Ir=0,Ie=Ys=null,ur!==null){for(A=0;A<ur.length;A++)if(t=ur[A],n=t.interleaved,n!==null){t.interleaved=null;var r=n.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,n.next=s}t.pending=n}ur=null}return e}function Lv(e,A){do{var t=GA;try{if(tp(),cl.current=$l,zl){for(var n=TA.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}zl=!1}if(Fr=0,Ae=WA=TA=null,$s=!1,Eo=0,pp.current=null,t===null||t.return===null){XA=1,Io=A,GA=null;break}A:{var i=e,s=t.return,o=t,a=A;if(A=ae,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var l=a,c=o,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=bB(s);if(h!==null){h.flags&=-257,DB(h,s,o,i,A),h.mode&1&&kB(i,l,A),A=h,a=l;var g=A.updateQueue;if(g===null){var w=new Set;w.add(a),A.updateQueue=w}else g.add(a);break A}else{if(!(A&1)){kB(i,l,A),Cp();break A}a=Error(F(426))}}else if(IA&&o.mode&1){var _=bB(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),DB(_,s,o,i,A),Ap(Ni(a,o));break A}}i=a=Ni(a,o),XA!==4&&(XA=2),Ys===null?Ys=[i]:Ys.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,A&=-A,i.lanes|=A;var p=gv(i,a,A);IB(i,p);break A;case 1:o=a;var f=i.type,B=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Nn===null||!Nn.has(B)))){i.flags|=65536,A&=-A,i.lanes|=A;var C=Bv(i,o,A);IB(i,C);break A}}i=i.return}while(i!==null)}Dv(t)}catch(Q){A=Q,GA===t&&t!==null&&(GA=t=t.return);continue}break}while(!0)}function kv(){var e=Xl.current;return Xl.current=$l,e===null?$l:e}function Cp(){(XA===0||XA===3||XA===2)&&(XA=4),ne===null||!(Ir&268435455)&&!(Wc&268435455)||vn(ne,ae)}function Zl(e,A){var t=iA;iA|=2;var n=kv();(ne!==e||ae!==A)&&(Pt=null,wr(e,A));do try{qF();break}catch(r){Lv(e,r)}while(!0);if(tp(),iA=t,Xl.current=n,GA!==null)throw Error(F(261));return ne=null,ae=0,XA}function qF(){for(;GA!==null;)bv(GA)}function AI(){for(;GA!==null&&!EU();)bv(GA)}function bv(e){var A=Rv(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,A===null?Dv(e):GA=A,pp.current=null}function Dv(e){var A=e;do{var t=A.alternate;if(e=A.return,A.flags&32768){if(t=zF(t,A),t!==null){t.flags&=32767,GA=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{XA=6,GA=null;return}}else if(t=jF(t,A,Pe),t!==null){GA=t;return}if(A=A.sibling,A!==null){GA=A;return}GA=A=e}while(A!==null);XA===0&&(XA=5)}function ir(e,A,t){var n=fA,r=rt.transition;try{rt.transition=null,fA=1,eI(e,A,t,n)}finally{rt.transition=r,fA=n}return null}function eI(e,A,t,n){do Qi();while(Fn!==null);if(iA&6)throw Error(F(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(bU(e,i),e===ne&&(GA=ne=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fa||(Fa=!0,Ov(Ll,function(){return Qi(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var s=fA;fA=1;var o=iA;iA|=4,pp.current=null,XF(e,t),xv(t,e),vF(hf),bl=!!ff,hf=ff=null,e.current=t,YF(t),UU(),iA=o,fA=s,rt.transition=i}else e.current=t;if(Fa&&(Fa=!1,Fn=e,Jl=r),i=e.pendingLanes,i===0&&(Nn=null),SU(t.stateNode),ke(e,PA()),A!==null)for(n=e.onRecoverableError,t=0;t<A.length;t++)r=A[t],n(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,e=kf,kf=null,e;return Jl&1&&e.tag!==0&&Qi(),i=e.pendingLanes,i&1?e===bf?Js++:(Js=0,bf=e):Js=0,Ar(),null}function Qi(){if(Fn!==null){var e=g0(Jl),A=rt.transition,t=fA;try{if(rt.transition=null,fA=16>e?16:e,Fn===null)var n=!1;else{if(e=Fn,Fn=null,Jl=0,iA&6)throw Error(F(331));var r=iA;for(iA|=4,b=e.current;b!==null;){var i=b,s=i.child;if(b.flags&16){var o=i.deletions;if(o!==null){for(var a=0;a<o.length;a++){var l=o[a];for(b=l;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Xs(8,c,i)}var u=c.child;if(u!==null)u.return=c,b=u;else for(;b!==null;){c=b;var d=c.sibling,h=c.return;if(Fv(c),c===l){b=null;break}if(d!==null){d.return=h,b=d;break}b=h}}}var g=i.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}b=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,b=s;else A:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xs(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,b=p;break A}b=i.return}}var f=e.current;for(b=f;b!==null;){s=b;var B=s.child;if(s.subtreeFlags&2064&&B!==null)B.return=s,b=B;else A:for(s=f;b!==null;){if(o=b,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gc(9,o)}}catch(Q){LA(o,o.return,Q)}if(o===s){b=null;break A}var C=o.sibling;if(C!==null){C.return=o.return,b=C;break A}b=o.return}}if(iA=r,Ar(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Dc,e)}catch{}n=!0}return n}finally{fA=t,rt.transition=A}}return!1}function XB(e,A,t){A=Ni(t,A),A=gv(e,A,1),e=Dn(e,A,1),A=ve(),e!==null&&(Wo(e,1,A),ke(e,A))}function LA(e,A,t){if(e.tag===3)XB(e,e,t);else for(;A!==null;){if(A.tag===3){XB(A,e,t);break}else if(A.tag===1){var n=A.stateNode;if(typeof A.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nn===null||!Nn.has(n))){e=Ni(t,e),e=Bv(A,e,1),A=Dn(A,e,1),e=ve(),A!==null&&(Wo(A,1,e),ke(A,e));break}}A=A.return}}function tI(e,A,t){var n=e.pingCache;n!==null&&n.delete(A),A=ve(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(ae&t)===t&&(XA===4||XA===3&&(ae&130023424)===ae&&500>PA()-Bp?wr(e,0):gp|=t),ke(e,A)}function Nv(e,A){A===0&&(e.mode&1?(A=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):A=1);var t=ve();e=en(e,A),e!==null&&(Wo(e,A,t),ke(e,t))}function nI(e){var A=e.memoizedState,t=0;A!==null&&(t=A.retryLane),Nv(e,t)}function rI(e,A){var t=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(A),Nv(e,t)}var Rv;Rv=function(e,A,t){if(e!==null)if(e.memoizedProps!==A.pendingProps||He.current)Se=!0;else{if(!(e.lanes&t)&&!(A.flags&128))return Se=!1,WF(e,A,t);Se=!!(e.flags&131072)}else Se=!1,IA&&A.flags&1048576&&K0(A,Kl,A.index);switch(A.lanes=0,A.tag){case 2:var n=A.type;dl(e,A),e=A.pendingProps;var r=Li(A,pe.current);yi(A,t),r=cp(null,A,n,e,r,t);var i=up();return A.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(A.tag=1,A.memoizedState=null,A.updateQueue=null,Le(n)?(i=!0,Ml(A)):i=!1,A.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ip(A),r.updater=Vc,A.stateNode=r,r._reactInternals=A,Qf(A,n,e,t),A=Uf(null,A,n,!0,i,t)):(A.tag=0,IA&&i&&Zh(A),we(null,A,r,t),A=A.child),A;case 16:n=A.elementType;A:{switch(dl(e,A),e=A.pendingProps,r=n._init,n=r(n._payload),A.type=n,r=A.tag=sI(n),e=ut(n,e),r){case 0:A=Ef(null,A,n,e,t);break A;case 1:A=OB(null,A,n,e,t);break A;case 11:A=NB(null,A,n,e,t);break A;case 14:A=RB(null,A,n,ut(n.type,e),t);break A}throw Error(F(306,n,""))}return A;case 0:return n=A.type,r=A.pendingProps,r=A.elementType===n?r:ut(n,r),Ef(e,A,n,r,t);case 1:return n=A.type,r=A.pendingProps,r=A.elementType===n?r:ut(n,r),OB(e,A,n,r,t);case 3:A:{if(vv(A),e===null)throw Error(F(387));n=A.pendingProps,i=A.memoizedState,r=i.element,$0(e,A),Wl(A,n,null,t);var s=A.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},A.updateQueue.baseState=i,A.memoizedState=i,A.flags&256){r=Ni(Error(F(423)),A),A=MB(e,A,n,t,r);break A}else if(n!==r){r=Ni(Error(F(424)),A),A=MB(e,A,n,t,r);break A}else for(Ke=bn(A.stateNode.containerInfo.firstChild),Ve=A,IA=!0,ft=null,t=j0(A,null,n,t),A.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ki(),n===r){A=tn(e,A,t);break A}we(e,A,n,t)}A=A.child}return A;case 5:return X0(A),e===null&&Cf(A),n=A.type,r=A.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,pf(n,r)?s=null:i!==null&&pf(n,i)&&(A.flags|=32),Cv(e,A),we(e,A,s,t),A.child;case 6:return e===null&&Cf(A),null;case 13:return yv(e,A,t);case 4:return sp(A,A.stateNode.containerInfo),n=A.pendingProps,e===null?A.child=bi(A,null,n,t):we(e,A,n,t),A.child;case 11:return n=A.type,r=A.pendingProps,r=A.elementType===n?r:ut(n,r),NB(e,A,n,r,t);case 7:return we(e,A,A.pendingProps,t),A.child;case 8:return we(e,A,A.pendingProps.children,t),A.child;case 12:return we(e,A,A.pendingProps.children,t),A.child;case 10:A:{if(n=A.type._context,r=A.pendingProps,i=A.memoizedProps,s=r.value,vA(Vl,n._currentValue),n._currentValue=s,i!==null)if(Qt(i.value,s)){if(i.children===r.children&&!He.current){A=tn(e,A,t);break A}}else for(i=A.child,i!==null&&(i.return=A);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var a=o.firstContext;a!==null;){if(a.context===n){if(i.tag===1){a=Jt(-1,t&-t),a.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?a.next=a:(a.next=c.next,c.next=a),l.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),vf(i.return,t,A),o.lanes|=t;break}a=a.next}}else if(i.tag===10)s=i.type===A.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(F(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),vf(s,t,A),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===A){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}we(e,A,r.children,t),A=A.child}return A;case 9:return r=A.type,n=A.pendingProps.children,yi(A,t),r=it(r),n=n(r),A.flags|=1,we(e,A,n,t),A.child;case 14:return n=A.type,r=ut(n,A.pendingProps),r=ut(n.type,r),RB(e,A,n,r,t);case 15:return wv(e,A,A.type,A.pendingProps,t);case 17:return n=A.type,r=A.pendingProps,r=A.elementType===n?r:ut(n,r),dl(e,A),A.tag=1,Le(n)?(e=!0,Ml(A)):e=!1,yi(A,t),pv(A,n,r),Qf(A,n,r,t),Uf(null,A,n,!0,e,t);case 19:return Qv(e,A,t);case 22:return mv(e,A,t)}throw Error(F(156,A.tag))};function Ov(e,A){return d0(e,A)}function iI(e,A,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=A,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,A,t,n){return new iI(e,A,t,n)}function vp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sI(e){if(typeof e=="function")return vp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mh)return 11;if(e===Ph)return 14}return 2}function On(e,A){var t=e.alternate;return t===null?(t=At(e.tag,A,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=A,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,A=e.dependencies,t.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pl(e,A,t,n,r,i){var s=2;if(n=e,typeof e=="function")vp(e)&&(s=1);else if(typeof e=="string")s=5;else A:switch(e){case ri:return mr(t.children,r,i,A);case Oh:s=8,r|=8;break;case jd:return e=At(12,t,A,r|2),e.elementType=jd,e.lanes=i,e;case zd:return e=At(13,t,A,r),e.elementType=zd,e.lanes=i,e;case $d:return e=At(19,t,A,r),e.elementType=$d,e.lanes=i,e;case XC:return jc(t,r,i,A);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zC:s=10;break A;case $C:s=9;break A;case Mh:s=11;break A;case Ph:s=14;break A;case Bn:s=16,n=null;break A}throw Error(F(130,e==null?e:typeof e,""))}return A=At(s,t,A,r),A.elementType=e,A.type=n,A.lanes=i,A}function mr(e,A,t,n){return e=At(7,e,n,A),e.lanes=t,e}function jc(e,A,t,n){return e=At(22,e,n,A),e.elementType=XC,e.lanes=t,e.stateNode={isHidden:!1},e}function ed(e,A,t){return e=At(6,e,null,A),e.lanes=t,e}function td(e,A,t){return A=At(4,e.children!==null?e.children:[],e.key,A),A.lanes=t,A.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},A}function oI(e,A,t,n,r){this.tag=A,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yp(e,A,t,n,r,i,s,o,a){return e=new oI(e,A,t,o,a),A===1?(A=1,i===!0&&(A|=8)):A=0,i=At(3,null,null,A),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ip(i),e}function aI(e,A,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:n==null?null:""+n,children:e,containerInfo:A,implementation:t}}function Mv(e){if(!e)return zn;e=e._reactInternals;A:{if(Rr(e)!==e||e.tag!==1)throw Error(F(170));var A=e;do{switch(A.tag){case 3:A=A.stateNode.context;break A;case 1:if(Le(A.type)){A=A.stateNode.__reactInternalMemoizedMergedChildContext;break A}}A=A.return}while(A!==null);throw Error(F(171))}if(e.tag===1){var t=e.type;if(Le(t))return M0(e,t,A)}return A}function Pv(e,A,t,n,r,i,s,o,a){return e=yp(t,n,!0,e,r,i,s,o,a),e.context=Mv(null),t=e.current,n=ve(),r=Rn(t),i=Jt(n,r),i.callback=A??null,Dn(t,i,r),e.current.lanes=r,Wo(e,r,n),ke(e,n),e}function zc(e,A,t,n){var r=A.current,i=ve(),s=Rn(r);return t=Mv(t),A.context===null?A.context=t:A.pendingContext=t,A=Jt(i,s),A.payload={element:e},n=n===void 0?null:n,n!==null&&(A.callback=n),e=Dn(r,A,s),e!==null&&(mt(e,r,s,i),ll(e,r,s)),s}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function YB(e,A){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<A?t:A}}function Qp(e,A){YB(e,A),(e=e.alternate)&&YB(e,A)}function lI(){return null}var Kv=typeof reportError=="function"?reportError:function(e){console.error(e)};function _p(e){this._internalRoot=e}$c.prototype.render=_p.prototype.render=function(e){var A=this._internalRoot;if(A===null)throw Error(F(409));zc(e,A,null,null)};$c.prototype.unmount=_p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var A=e.containerInfo;Sr(function(){zc(null,e,null,null)}),A[An]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var A=m0();e={blockedOn:null,target:e,priority:A};for(var t=0;t<Cn.length&&A!==0&&A<Cn[t].priority;t++);Cn.splice(t,0,e),t===0&&v0(e)}};function Ep(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function JB(){}function cI(e,A,t,n,r){if(r){if(typeof n=="function"){var i=n;n=function(){var l=ql(s);i.call(l)}}var s=Pv(A,n,e,0,null,!1,!1,"",JB);return e._reactRootContainer=s,e[An]=s.current,Co(e.nodeType===8?e.parentNode:e),Sr(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof n=="function"){var o=n;n=function(){var l=ql(a);o.call(l)}}var a=yp(e,0,!1,null,null,!1,!1,"",JB);return e._reactRootContainer=a,e[An]=a.current,Co(e.nodeType===8?e.parentNode:e),Sr(function(){zc(A,a,t,n)}),a}function Yc(e,A,t,n,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var o=r;r=function(){var a=ql(s);o.call(a)}}zc(A,s,e,r)}else s=cI(t,A,e,r,n);return ql(s)}B0=function(e){switch(e.tag){case 3:var A=e.stateNode;if(A.current.memoizedState.isDehydrated){var t=Ls(A.pendingLanes);t!==0&&(Gh(A,t|1),ke(A,PA()),!(iA&6)&&(Ri=PA()+500,Ar()))}break;case 13:Sr(function(){var n=en(e,1);if(n!==null){var r=ve();mt(n,e,1,r)}}),Qp(e,1)}};Wh=function(e){if(e.tag===13){var A=en(e,134217728);if(A!==null){var t=ve();mt(A,e,134217728,t)}Qp(e,134217728)}};w0=function(e){if(e.tag===13){var A=Rn(e),t=en(e,A);if(t!==null){var n=ve();mt(t,e,A,n)}Qp(e,A)}};m0=function(){return fA};C0=function(e,A){var t=fA;try{return fA=e,A()}finally{fA=t}};rf=function(e,A,t){switch(A){case"input":if(Jd(e,t),A=t.name,t.type==="radio"&&A!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+A)+'][type="radio"]'),A=0;A<t.length;A++){var n=t[A];if(n!==e&&n.form===e.form){var r=Mc(n);if(!r)throw Error(F(90));JC(n),Jd(n,r)}}}break;case"textarea":qC(e,t);break;case"select":A=t.value,A!=null&&wi(e,!!t.multiple,A,!1)}};s0=wp;o0=Sr;var uI={usingClientEntryPoint:!1,Events:[zo,ai,Mc,r0,i0,wp]},ys={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dI={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=c0(e),e===null?null:e.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||lI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Dc=Ia.inject(dI),xt=Ia}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;We.createPortal=function(e,A){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(A))throw Error(F(200));return aI(e,A,null,t)};We.createRoot=function(e,A){if(!Ep(e))throw Error(F(299));var t=!1,n="",r=Kv;return A!=null&&(A.unstable_strictMode===!0&&(t=!0),A.identifierPrefix!==void 0&&(n=A.identifierPrefix),A.onRecoverableError!==void 0&&(r=A.onRecoverableError)),A=yp(e,1,!1,null,null,t,!1,n,r),e[An]=A.current,Co(e.nodeType===8?e.parentNode:e),new _p(A)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var A=e._reactInternals;if(A===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=c0(A),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Sr(e)};We.hydrate=function(e,A,t){if(!Xc(A))throw Error(F(200));return Yc(null,e,A,!0,t)};We.hydrateRoot=function(e,A,t){if(!Ep(e))throw Error(F(405));var n=t!=null&&t.hydratedSources||null,r=!1,i="",s=Kv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),A=Pv(A,null,e,1,t??null,r,!1,i,s),e[An]=A.current,Co(e),n)for(e=0;e<n.length;e++)t=n[e],r=t._getVersion,r=r(t._source),A.mutableSourceEagerHydrationData==null?A.mutableSourceEagerHydrationData=[t,r]:A.mutableSourceEagerHydrationData.push(t,r);return new $c(A)};We.render=function(e,A,t){if(!Xc(A))throw Error(F(200));return Yc(null,e,A,!1,t)};We.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(F(40));return e._reactRootContainer?(Sr(function(){Yc(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};We.unstable_batchedUpdates=wp;We.unstable_renderSubtreeIntoContainer=function(e,A,t,n){if(!Xc(t))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Yc(e,A,t,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(e){console.error(e)}}Vv(),VC.exports=We;var Gv=VC.exports;const fI=Th(Gv);var Wv,ZB=Gv;Wv=ZB.createRoot,ZB.hydrateRoot;const hI=async()=>{try{const A=await(await fetch("https://www.vgtk.by/schedule/lessons/day-today.php")).text(),t=document.createElement("div");t.innerHTML=A;const n=t.querySelector("table");(u=>{for(let d=0;d<u.rows.length;d++){let h=u.rows[d];for(let g=0;g<h.cells.length;g++){let w=h.cells[g],_=parseInt(w.getAttribute("rowspan"));if(w.hasAttribute("rowspan")&&_>1){let p=w.cloneNode(!0);w.removeAttribute("rowspan");for(let f=1;f<_;f++){let B=u.rows[d+f];if(B&&g<=B.cells.length){let C=B.insertCell(g);C.innerHTML=p.innerHTML}}}}}})(n);const i=new Set,s=new Map,o=/^[А-Я]{1,3}-\d{2,3}$/,a=/^[А-Я\s.]+$/;let l=null;for(let u=0;u<n.rows.length;u++){const d=n.rows[u],h=d.cells[0];if(h){const g=h.innerText.trim();a.test(g)&&g.length>5&&(l=g,s.has(l)||s.set(l,[]))}Array.from(d.cells).forEach(g=>{const w=g.innerText.trim();if(o.test(w)&&l){i.add(w);const _=s.get(l);_&&!_.includes(w)&&_.push(w)}})}s.forEach((u,d)=>{s.set(d,u.sort())});const c=Object.fromEntries(s);return{allGroups:Array.from(i).sort(),groupsByDepartment:c}}catch(e){return console.error("Ошибка при парсинге групп:",e),{allGroups:[],groupsByDepartment:{}}}};let Zs=[],qs={};const pI=async()=>{const e=await hI();return Zs=e.allGroups,qs=e.groupsByDepartment,console.log("Загружены группы:",Zs),console.log("Группы по отделениям:",qs),{allGroups:Zs,groupsByDepartment:qs}};pI();const gI=e=>{for(let A=0;A<e.rows.length;A++){let t=e.rows[A];for(let n=0;n<t.cells.length;n++){let r=t.cells[n],i=parseInt(r.getAttribute("rowspan"));if(r.hasAttribute("rowspan")&&i>1){let s=r.cloneNode(!0);r.removeAttribute("rowspan");for(let o=1;o<i;o++){let a=e.rows[A+o];if(a)if(n<=a.cells.length){let l=a.insertCell(n);l.innerHTML=s.innerHTML}else console.warn(`Недопустимый индекс: ${n} для строки ${A+o}`)}}}}},BI=(e,A)=>{let t=[],n=[];return fetch(e).then(r=>r.text()).then(r=>{const i=document.createElement("div");i.innerHTML=r;const s=i.querySelector("table"),o=s.rows[0].innerText.trim();gI(s);for(let a=0;a<s.rows.length-11;a++){const l=s.rows[a];l.cells.length>1&&Array.from(l.cells).forEach((c,u)=>{let d=c.innerText.trim();if(Zs.includes(d)){const h={groupName:d,lessons:Array.from({length:11},(g,w)=>{var _,p,f;return{lessonName:(_=s.rows[a+w+1].cells[u])==null?void 0:_.innerText.trim(),cabinet:(p=s.rows[a+w+1].cells[u+1])==null?void 0:p.innerText.trim(),lessonNumber:w+1,groupName:d,isLab:(f=s.rows[a+w+1].cells[u+1])==null?void 0:f.innerText.trim().includes("/")}})};t.push(h),h.lessons.forEach(g=>{var w;(w=g.cabinet)!=null&&w.split("/").includes(A)&&(console.log(!0),n.push(g))})}})}return[t,n,o]}).catch(r=>console.error("Ошибка:",r))};function jv(e){var o;const A=e.match(/на\s+(.+?)\s+года/i);if(!A)return null;const t=A[1].trim();let n=new Date(t);if(isNaN(n)){const a=t.split(/\s+/),l=parseInt(a[0],10),c=(o=a[1])==null?void 0:o.toLowerCase(),u=parseInt(a[2],10),h={января:0,февраля:1,марта:2,апреля:3,мая:4,июня:5,июля:6,августа:7,сентября:8,октября:9,ноября:10,декабря:11}[c];h!=null&&(n=new Date(u,h,l))}if(!n||isNaN(n))return null;const r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${r}-${i}-${s}`}const wI="на 9 сентября 2025 года  (ВТОРНИК)",mI=jv(wI);console.log(mI);const CI="https://www.vgtk.by/schedule/lessons/day-today.php",vI="https://www.vgtk.by/schedule/lessons/day-tomorrow.php";var xe=function(){return xe=Object.assign||function(A){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(A[i]=t[i])}return A},xe.apply(this,arguments)};function Ac(e,A,t){if(t||arguments.length===2)for(var n=0,r=A.length,i;n<r;n++)(i||!(n in A))&&(i||(i=Array.prototype.slice.call(A,0,n)),i[n]=A[n]);return e.concat(i||Array.prototype.slice.call(A))}var EA="-ms-",Ao="-moz-",lA="-webkit-",zv="comm",Jc="rule",Up="decl",yI="@import",$v="@keyframes",QI="@layer",Xv=Math.abs,Fp=String.fromCharCode,Rf=Object.assign;function _I(e,A){return ee(e,0)^45?(((A<<2^ee(e,0))<<2^ee(e,1))<<2^ee(e,2))<<2^ee(e,3):0}function Yv(e){return e.trim()}function Kt(e,A){return(e=A.exec(e))?e[0]:e}function X(e,A,t){return e.replace(A,t)}function gl(e,A,t){return e.indexOf(A,t)}function ee(e,A){return e.charCodeAt(A)|0}function Oi(e,A,t){return e.slice(A,t)}function It(e){return e.length}function Jv(e){return e.length}function bs(e,A){return A.push(e),e}function EI(e,A){return e.map(A).join("")}function qB(e,A){return e.filter(function(t){return!Kt(t,A)})}var Zc=1,Mi=1,Zv=0,ot=0,KA=0,es="";function qc(e,A,t,n,r,i,s,o){return{value:e,root:A,parent:t,type:n,props:r,children:i,line:Zc,column:Mi,length:s,return:"",siblings:o}}function hn(e,A){return Rf(qc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},A)}function Wr(e){for(;e.root;)e=hn(e.root,{children:[e]});bs(e,e.siblings)}function UI(){return KA}function FI(){return KA=ot>0?ee(es,--ot):0,Mi--,KA===10&&(Mi=1,Zc--),KA}function Ct(){return KA=ot<Zv?ee(es,ot++):0,Mi++,KA===10&&(Mi=1,Zc++),KA}function Cr(){return ee(es,ot)}function Bl(){return ot}function Au(e,A){return Oi(es,e,A)}function Of(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function II(e){return Zc=Mi=1,Zv=It(es=e),ot=0,[]}function SI(e){return es="",e}function nd(e){return Yv(Au(ot-1,Mf(e===91?e+2:e===40?e+1:e)))}function xI(e){for(;(KA=Cr())&&KA<33;)Ct();return Of(e)>2||Of(KA)>3?"":" "}function TI(e,A){for(;--A&&Ct()&&!(KA<48||KA>102||KA>57&&KA<65||KA>70&&KA<97););return Au(e,Bl()+(A<6&&Cr()==32&&Ct()==32))}function Mf(e){for(;Ct();)switch(KA){case e:return ot;case 34:case 39:e!==34&&e!==39&&Mf(KA);break;case 40:e===41&&Mf(e);break;case 92:Ct();break}return ot}function HI(e,A){for(;Ct()&&e+KA!==57;)if(e+KA===84&&Cr()===47)break;return"/*"+Au(A,ot-1)+"*"+Fp(e===47?e:Ct())}function LI(e){for(;!Of(Cr());)Ct();return Au(e,ot)}function kI(e){return SI(wl("",null,null,null,[""],e=II(e),0,[0],e))}function wl(e,A,t,n,r,i,s,o,a){for(var l=0,c=0,u=s,d=0,h=0,g=0,w=1,_=1,p=1,f=0,B="",C=r,Q=i,v=n,y=B;_;)switch(g=f,f=Ct()){case 40:if(g!=108&&ee(y,u-1)==58){gl(y+=X(nd(f),"&","&\f"),"&\f",Xv(l?o[l-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:y+=nd(f);break;case 9:case 10:case 13:case 32:y+=xI(g);break;case 92:y+=TI(Bl()-1,7);continue;case 47:switch(Cr()){case 42:case 47:bs(bI(HI(Ct(),Bl()),A,t,a),a);break;default:y+="/"}break;case 123*w:o[l++]=It(y)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:_=0;case 59+c:p==-1&&(y=X(y,/\f/g,"")),h>0&&It(y)-u&&bs(h>32?ew(y+";",n,t,u-1,a):ew(X(y," ","")+";",n,t,u-2,a),a);break;case 59:y+=";";default:if(bs(v=Aw(y,A,t,l,c,r,o,B,C=[],Q=[],u,i),i),f===123)if(c===0)wl(y,A,v,v,C,i,u,o,Q);else switch(d===99&&ee(y,3)===110?100:d){case 100:case 108:case 109:case 115:wl(e,v,v,n&&bs(Aw(e,v,v,0,0,r,o,B,r,C=[],u,Q),Q),r,Q,u,o,n?C:Q);break;default:wl(y,v,v,v,[""],Q,0,o,Q)}}l=c=h=0,w=p=1,B=y="",u=s;break;case 58:u=1+It(y),h=g;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&FI()==125)continue}switch(y+=Fp(f),f*w){case 38:p=c>0?1:(y+="\f",-1);break;case 44:o[l++]=(It(y)-1)*p,p=1;break;case 64:Cr()===45&&(y+=nd(Ct())),d=Cr(),c=u=It(B=y+=LI(Bl())),f++;break;case 45:g===45&&It(y)==2&&(w=0)}}return i}function Aw(e,A,t,n,r,i,s,o,a,l,c,u){for(var d=r-1,h=r===0?i:[""],g=Jv(h),w=0,_=0,p=0;w<n;++w)for(var f=0,B=Oi(e,d+1,d=Xv(_=s[w])),C=e;f<g;++f)(C=Yv(_>0?h[f]+" "+B:X(B,/&\f/g,h[f])))&&(a[p++]=C);return qc(e,A,t,r===0?Jc:o,a,l,c,u)}function bI(e,A,t,n){return qc(e,A,t,zv,Fp(UI()),Oi(e,2,-2),0,n)}function ew(e,A,t,n,r){return qc(e,A,t,Up,Oi(e,0,n),Oi(e,n+1,-1),n,r)}function qv(e,A,t){switch(_I(e,A)){case 5103:return lA+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return lA+e+e;case 4789:return Ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return lA+e+Ao+e+EA+e+e;case 5936:switch(ee(e,A+11)){case 114:return lA+e+EA+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return lA+e+EA+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return lA+e+EA+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return lA+e+EA+e+e;case 6165:return lA+e+EA+"flex-"+e+e;case 5187:return lA+e+X(e,/(\w+).+(:[^]+)/,lA+"box-$1$2"+EA+"flex-$1$2")+e;case 5443:return lA+e+EA+"flex-item-"+X(e,/flex-|-self/g,"")+(Kt(e,/flex-|baseline/)?"":EA+"grid-row-"+X(e,/flex-|-self/g,""))+e;case 4675:return lA+e+EA+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e;case 5548:return lA+e+EA+X(e,"shrink","negative")+e;case 5292:return lA+e+EA+X(e,"basis","preferred-size")+e;case 6060:return lA+"box-"+X(e,"-grow","")+lA+e+EA+X(e,"grow","positive")+e;case 4554:return lA+X(e,/([^-])(transform)/g,"$1"+lA+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,lA+"$1"),/(image-set)/,lA+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,lA+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,lA+"box-pack:$3"+EA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+lA+e+e;case 4200:if(!Kt(e,/flex-|baseline/))return EA+"grid-column-align"+Oi(e,A)+e;break;case 2592:case 3360:return EA+X(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(n,r){return A=r,Kt(n.props,/grid-\w+-end/)})?~gl(e+(t=t[A].value),"span",0)?e:EA+X(e,"-start","")+e+EA+"grid-row-span:"+(~gl(t,"span",0)?Kt(t,/\d+/):+Kt(t,/\d+/)-+Kt(e,/\d+/))+";":EA+X(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(n){return Kt(n.props,/grid-\w+-start/)})?e:EA+X(X(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,lA+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(e)-1-A>6)switch(ee(e,A+1)){case 109:if(ee(e,A+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+lA+"$2-$3$1"+Ao+(ee(e,A+3)==108?"$3":"$2-$3"))+e;case 115:return~gl(e,"stretch",0)?qv(X(e,"stretch","fill-available"),A,t)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,i,s,o,a,l){return EA+r+":"+i+l+(s?EA+r+"-span:"+(o?a:+a-+i)+l:"")+e});case 4949:if(ee(e,A+6)===121)return X(e,":",":"+lA)+e;break;case 6444:switch(ee(e,ee(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+lA+(ee(e,14)===45?"inline-":"")+"box$3$1"+lA+"$2$3$1"+EA+"$2box$3")+e;case 100:return X(e,":",":"+EA)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function ec(e,A){for(var t="",n=0;n<e.length;n++)t+=A(e[n],n,e,A)||"";return t}function DI(e,A,t,n){switch(e.type){case QI:if(e.children.length)break;case yI:case Up:return e.return=e.return||e.value;case zv:return"";case $v:return e.return=e.value+"{"+ec(e.children,n)+"}";case Jc:if(!It(e.value=e.props.join(",")))return""}return It(t=ec(e.children,n))?e.return=e.value+"{"+t+"}":""}function NI(e){var A=Jv(e);return function(t,n,r,i){for(var s="",o=0;o<A;o++)s+=e[o](t,n,r,i)||"";return s}}function RI(e){return function(A){A.root||(A=A.return)&&e(A)}}function OI(e,A,t,n){if(e.length>-1&&!e.return)switch(e.type){case Up:e.return=qv(e.value,e.length,t);return;case $v:return ec([hn(e,{value:X(e.value,"@","@"+lA)})],n);case Jc:if(e.length)return EI(t=e.props,function(r){switch(Kt(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wr(hn(e,{props:[X(r,/:(read-\w+)/,":"+Ao+"$1")]})),Wr(hn(e,{props:[r]})),Rf(e,{props:qB(t,n)});break;case"::placeholder":Wr(hn(e,{props:[X(r,/:(plac\w+)/,":"+lA+"input-$1")]})),Wr(hn(e,{props:[X(r,/:(plac\w+)/,":"+Ao+"$1")]})),Wr(hn(e,{props:[X(r,/:(plac\w+)/,EA+"input-$1")]})),Wr(hn(e,{props:[r]})),Rf(e,{props:qB(t,n)});break}return""})}}var MI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},Pi=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",Ay="active",ey="data-styled-version",eu="6.1.13",Ip=`/*!sc*/
`,tc=typeof window<"u"&&"HTMLElement"in window,PI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),tu=Object.freeze([]),Ki=Object.freeze({});function KI(e,A,t){return t===void 0&&(t=Ki),e.theme!==t.theme&&e.theme||A||t.theme}var ty=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),VI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,GI=/(^-|-$)/g;function tw(e){return e.replace(VI,"-").replace(GI,"")}var WI=/(a)(d)/gi,Sa=52,nw=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pf(e){var A,t="";for(A=Math.abs(e);A>Sa;A=A/Sa|0)t=nw(A%Sa)+t;return(nw(A%Sa)+t).replace(WI,"$1-$2")}var rd,ny=5381,pi=function(e,A){for(var t=A.length;t;)e=33*e^A.charCodeAt(--t);return e},ry=function(e){return pi(ny,e)};function jI(e){return Pf(ry(e)>>>0)}function zI(e){return e.displayName||e.name||"Component"}function id(e){return typeof e=="string"&&!0}var iy=typeof Symbol=="function"&&Symbol.for,sy=iy?Symbol.for("react.memo"):60115,$I=iy?Symbol.for("react.forward_ref"):60112,XI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},JI=((rd={})[$I]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rd[sy]=oy,rd);function rw(e){return("type"in(A=e)&&A.type.$$typeof)===sy?oy:"$$typeof"in e?JI[e.$$typeof]:XI;var A}var ZI=Object.defineProperty,qI=Object.getOwnPropertyNames,iw=Object.getOwnPropertySymbols,A1=Object.getOwnPropertyDescriptor,e1=Object.getPrototypeOf,sw=Object.prototype;function ay(e,A,t){if(typeof A!="string"){if(sw){var n=e1(A);n&&n!==sw&&ay(e,n,t)}var r=qI(A);iw&&(r=r.concat(iw(A)));for(var i=rw(e),s=rw(A),o=0;o<r.length;++o){var a=r[o];if(!(a in YI||t&&t[a]||s&&a in s||i&&a in i)){var l=A1(A,a);try{ZI(e,a,l)}catch{}}}}return e}function Vi(e){return typeof e=="function"}function Sp(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,A){return e&&A?"".concat(e," ").concat(A):e||A||""}function ow(e,A){if(e.length===0)return"";for(var t=e[0],n=1;n<e.length;n++)t+=e[n];return t}function So(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kf(e,A,t){if(t===void 0&&(t=!1),!t&&!So(e)&&!Array.isArray(e))return A;if(Array.isArray(A))for(var n=0;n<A.length;n++)e[n]=Kf(e[n],A[n]);else if(So(A))for(var n in A)e[n]=Kf(e[n],A[n]);return e}function xp(e,A){Object.defineProperty(e,"toString",{value:A})}function Xo(e){for(var A=[],t=1;t<arguments.length;t++)A[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(A.length>0?" Args: ".concat(A.join(", ")):""))}var t1=function(){function e(A){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=A}return e.prototype.indexOfGroup=function(A){for(var t=0,n=0;n<A;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(A,t){if(A>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;A>=i;)if((i<<=1)<0)throw Xo(16,"".concat(A));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(A+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[A]++,o++)},e.prototype.clearGroup=function(A){if(A<this.length){var t=this.groupSizes[A],n=this.indexOfGroup(A),r=n+t;this.groupSizes[A]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(A){var t="";if(A>=this.length||this.groupSizes[A]===0)return t;for(var n=this.groupSizes[A],r=this.indexOfGroup(A),i=r+n,s=r;s<i;s++)t+="".concat(this.tag.getRule(s)).concat(Ip);return t},e}(),ml=new Map,nc=new Map,Cl=1,xa=function(e){if(ml.has(e))return ml.get(e);for(;nc.has(Cl);)Cl++;var A=Cl++;return ml.set(e,A),nc.set(A,e),A},n1=function(e,A){Cl=A+1,ml.set(e,A),nc.set(A,e)},r1="style[".concat(Pi,"][").concat(ey,'="').concat(eu,'"]'),i1=new RegExp("^".concat(Pi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s1=function(e,A,t){for(var n,r=t.split(","),i=0,s=r.length;i<s;i++)(n=r[i])&&e.registerName(A,n)},o1=function(e,A){for(var t,n=((t=A.textContent)!==null&&t!==void 0?t:"").split(Ip),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(i1);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(n1(c,l),s1(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},aw=function(e){for(var A=document.querySelectorAll(r1),t=0,n=A.length;t<n;t++){var r=A[t];r&&r.getAttribute(Pi)!==Ay&&(o1(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function a1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ly=function(e){var A=document.head,t=e||A,n=document.createElement("style"),r=function(o){var a=Array.from(o.querySelectorAll("style[".concat(Pi,"]")));return a[a.length-1]}(t),i=r!==void 0?r.nextSibling:null;n.setAttribute(Pi,Ay),n.setAttribute(ey,eu);var s=a1();return s&&n.setAttribute("nonce",s),t.insertBefore(n,i),n},l1=function(){function e(A){this.element=ly(A),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var n=document.styleSheets,r=0,i=n.length;r<i;r++){var s=n[r];if(s.ownerNode===t)return s}throw Xo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(A,t){try{return this.sheet.insertRule(t,A),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(A){this.sheet.deleteRule(A),this.length--},e.prototype.getRule=function(A){var t=this.sheet.cssRules[A];return t&&t.cssText?t.cssText:""},e}(),c1=function(){function e(A){this.element=ly(A),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(A,t){if(A<=this.length&&A>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[A]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(A){this.element.removeChild(this.nodes[A]),this.length--},e.prototype.getRule=function(A){return A<this.length?this.nodes[A].textContent:""},e}(),u1=function(){function e(A){this.rules=[],this.length=0}return e.prototype.insertRule=function(A,t){return A<=this.length&&(this.rules.splice(A,0,t),this.length++,!0)},e.prototype.deleteRule=function(A){this.rules.splice(A,1),this.length--},e.prototype.getRule=function(A){return A<this.length?this.rules[A]:""},e}(),lw=tc,d1={isServer:!tc,useCSSOMInjection:!PI},cy=function(){function e(A,t,n){A===void 0&&(A=Ki),t===void 0&&(t={});var r=this;this.options=xe(xe({},d1),A),this.gs=t,this.names=new Map(n),this.server=!!A.isServer,!this.server&&tc&&lw&&(lw=!1,aw(this)),xp(this,function(){return function(i){for(var s=i.getTag(),o=s.length,a="",l=function(u){var d=function(p){return nc.get(p)}(u);if(d===void 0)return"continue";var h=i.names.get(d),g=s.getGroup(u);if(h===void 0||!h.size||g.length===0)return"continue";var w="".concat(Pi,".g").concat(u,'[id="').concat(d,'"]'),_="";h!==void 0&&h.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),a+="".concat(g).concat(w,'{content:"').concat(_,'"}').concat(Ip)},c=0;c<o;c++)l(c);return a}(r)})}return e.registerId=function(A){return xa(A)},e.prototype.rehydrate=function(){!this.server&&tc&&aw(this)},e.prototype.reconstructWithOptions=function(A,t){return t===void 0&&(t=!0),new e(xe(xe({},this.options),A),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(A){return this.gs[A]=(this.gs[A]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(A=function(t){var n=t.useCSSOMInjection,r=t.target;return t.isServer?new u1(r):n?new l1(r):new c1(r)}(this.options),new t1(A)));var A},e.prototype.hasNameForId=function(A,t){return this.names.has(A)&&this.names.get(A).has(t)},e.prototype.registerName=function(A,t){if(xa(A),this.names.has(A))this.names.get(A).add(t);else{var n=new Set;n.add(t),this.names.set(A,n)}},e.prototype.insertRules=function(A,t,n){this.registerName(A,t),this.getTag().insertRules(xa(A),n)},e.prototype.clearNames=function(A){this.names.has(A)&&this.names.get(A).clear()},e.prototype.clearRules=function(A){this.getTag().clearGroup(xa(A)),this.clearNames(A)},e.prototype.clearTag=function(){this.tag=void 0},e}(),f1=/&/g,h1=/^\s*\/\/.*$/gm;function uy(e,A){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(A," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(A," ")),t.props=t.props.map(function(n){return"".concat(A," ").concat(n)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=uy(t.children,A)),t})}function p1(e){var A,t,n,r=Ki,i=r.options,s=i===void 0?Ki:i,o=r.plugins,a=o===void 0?tu:o,l=function(d,h,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(A):d},c=a.slice();c.push(function(d){d.type===Jc&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(f1,t).replace(n,l))}),s.prefix&&c.push(OI),c.push(DI);var u=function(d,h,g,w){h===void 0&&(h=""),g===void 0&&(g=""),w===void 0&&(w="&"),A=w,t=h,n=new RegExp("\\".concat(t,"\\b"),"g");var _=d.replace(h1,""),p=kI(g||h?"".concat(g," ").concat(h," { ").concat(_," }"):_);s.namespace&&(p=uy(p,s.namespace));var f=[];return ec(p,NI(c.concat(RI(function(B){return f.push(B)})))),f};return u.hash=a.length?a.reduce(function(d,h){return h.name||Xo(15),pi(d,h.name)},ny).toString():"",u}var g1=new cy,Vf=p1(),dy=Ti.createContext({shouldForwardProp:void 0,styleSheet:g1,stylis:Vf});dy.Consumer;Ti.createContext(void 0);function cw(){return L.useContext(dy)}var B1=function(){function e(A,t){var n=this;this.inject=function(r,i){i===void 0&&(i=Vf);var s=n.name+i.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=A,this.id="sc-keyframes-".concat(A),this.rules=t,xp(this,function(){throw Xo(12,String(n.name))})}return e.prototype.getName=function(A){return A===void 0&&(A=Vf),this.name+A.hash},e}(),w1=function(e){return e>="A"&&e<="Z"};function uw(e){for(var A="",t=0;t<e.length;t++){var n=e[t];if(t===1&&n==="-"&&e[0]==="-")return e;w1(n)?A+="-"+n.toLowerCase():A+=n}return A.startsWith("ms-")?"-"+A:A}var fy=function(e){return e==null||e===!1||e===""},hy=function(e){var A,t,n=[];for(var r in e){var i=e[r];e.hasOwnProperty(r)&&!fy(i)&&(Array.isArray(i)&&i.isCss||Vi(i)?n.push("".concat(uw(r),":"),i,";"):So(i)?n.push.apply(n,Ac(Ac(["".concat(r," {")],hy(i),!1),["}"],!1)):n.push("".concat(uw(r),": ").concat((A=r,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||A in MI||A.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return n};function vr(e,A,t,n){if(fy(e))return[];if(Sp(e))return[".".concat(e.styledComponentId)];if(Vi(e)){if(!Vi(i=e)||i.prototype&&i.prototype.isReactComponent||!A)return[e];var r=e(A);return vr(r,A,t,n)}var i;return e instanceof B1?t?(e.inject(t,n),[e.getName(n)]):[e]:So(e)?hy(e):Array.isArray(e)?Array.prototype.concat.apply(tu,e.map(function(s){return vr(s,A,t,n)})):[e.toString()]}function m1(e){for(var A=0;A<e.length;A+=1){var t=e[A];if(Vi(t)&&!Sp(t))return!1}return!0}var C1=ry(eu),v1=function(){function e(A,t,n){this.rules=A,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&m1(A),this.componentId=t,this.baseHash=pi(C1,t),this.baseStyle=n,cy.registerId(t)}return e.prototype.generateAndInjectStyles=function(A,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(A,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=fr(r,this.staticRulesId);else{var i=ow(vr(this.rules,A,t,n)),s=Pf(pi(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var o=n(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,o)}r=fr(r,s),this.staticRulesId=s}else{for(var a=pi(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=ow(vr(u,A,t,n));a=pi(a,d+c),l+=d}}if(l){var h=Pf(a>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=fr(r,h)}}return r},e}(),py=Ti.createContext(void 0);py.Consumer;var sd={};function y1(e,A,t){var n=Sp(e),r=e,i=!id(e),s=A.attrs,o=s===void 0?tu:s,a=A.componentId,l=a===void 0?function(C,Q){var v=typeof C!="string"?"sc":tw(C);sd[v]=(sd[v]||0)+1;var y="".concat(v,"-").concat(jI(eu+v+sd[v]));return Q?"".concat(Q,"-").concat(y):y}(A.displayName,A.parentComponentId):a,c=A.displayName,u=c===void 0?function(C){return id(C)?"styled.".concat(C):"Styled(".concat(zI(C),")")}(e):c,d=A.displayName&&A.componentId?"".concat(tw(A.displayName),"-").concat(A.componentId):A.componentId||l,h=n&&r.attrs?r.attrs.concat(o).filter(Boolean):o,g=A.shouldForwardProp;if(n&&r.shouldForwardProp){var w=r.shouldForwardProp;if(A.shouldForwardProp){var _=A.shouldForwardProp;g=function(C,Q){return w(C,Q)&&_(C,Q)}}else g=w}var p=new v1(t,d,n?r.componentStyle:void 0);function f(C,Q){return function(v,y,U){var I=v.attrs,H=v.componentStyle,rA=v.defaultProps,yA=v.foldedComponentIds,j=v.styledComponentId,BA=v.target,YA=Ti.useContext(py),QA=cw(),gA=v.shouldForwardProp||QA.shouldForwardProp,T=KI(y,YA,rA)||Ki,R=function(K,P,$){for(var uA,NA=xe(xe({},P),{className:void 0,theme:$}),G=0;G<K.length;G+=1){var oA=Vi(uA=K[G])?uA(NA):uA;for(var aA in oA)NA[aA]=aA==="className"?fr(NA[aA],oA[aA]):aA==="style"?xe(xe({},NA[aA]),oA[aA]):oA[aA]}return P.className&&(NA.className=fr(NA.className,P.className)),NA}(I,y,T),M=R.as||BA,tA={};for(var q in R)R[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&R.theme===T||(q==="forwardedAs"?tA.as=R.forwardedAs:gA&&!gA(q,M)||(tA[q]=R[q]));var x=function(K,P){var $=cw(),uA=K.generateAndInjectStyles(P,$.styleSheet,$.stylis);return uA}(H,R),O=fr(yA,j);return x&&(O+=" "+x),R.className&&(O+=" "+R.className),tA[id(M)&&!ty.has(M)?"class":"className"]=O,tA.ref=U,L.createElement(M,tA)}(B,C,Q)}f.displayName=u;var B=Ti.forwardRef(f);return B.attrs=h,B.componentStyle=p,B.displayName=u,B.shouldForwardProp=g,B.foldedComponentIds=n?fr(r.foldedComponentIds,r.styledComponentId):"",B.styledComponentId=d,B.target=n?r.target:e,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(Q){for(var v=[],y=1;y<arguments.length;y++)v[y-1]=arguments[y];for(var U=0,I=v;U<I.length;U++)Kf(Q,I[U],!0);return Q}({},r.defaultProps,C):C}}),xp(B,function(){return".".concat(B.styledComponentId)}),i&&ay(B,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function dw(e,A){for(var t=[e[0]],n=0,r=A.length;n<r;n+=1)t.push(A[n],e[n+1]);return t}var fw=function(e){return Object.assign(e,{isCss:!0})};function Q1(e){for(var A=[],t=1;t<arguments.length;t++)A[t-1]=arguments[t];if(Vi(e)||So(e))return fw(vr(dw(tu,Ac([e],A,!0))));var n=e;return A.length===0&&n.length===1&&typeof n[0]=="string"?vr(n):fw(vr(dw(n,A)))}function Gf(e,A,t){if(t===void 0&&(t=Ki),!A)throw Xo(1,A);var n=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(A,t,Q1.apply(void 0,Ac([r],i,!1)))};return n.attrs=function(r){return Gf(e,A,xe(xe({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return Gf(e,A,xe(xe({},t),r))},n}var gy=function(e){return Gf(y1,e)},D=gy;ty.forEach(function(e){D[e]=gy(e)});const _1=e=>{switch(e){case 0:return"var(--input-background-color)";case 1:return"green";case 2:return"red"}},hw=D.div`
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
`,pw=D.form`
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
`,od=D.div`
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
`,dn=D.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`,E1=D.div`
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
`,U1=D.input`
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
`,F1=D.div`
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
`,Ta=D.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,I1=D.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`,S1=D.header`
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
`,ad=D.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`,Be=D.button`
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
  border-color: ${e=>_1(e.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`,x1=D.button`
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
`,T1=D.button`
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
`,H1=D.input`
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
`,L1=D.div`
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
`,gw=D.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`,jr=D.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,k1=D.div`
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
`;D.div`
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;const b1=D.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`,D1=D.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  background-color: ${({theme:e})=>e==="dark"?"#404040":"#f0f0f0"};
  padding: 5px;
  border-radius: 30px;
  width: fit-content;
`,Bw=D.button`
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  background-color: ${({active:e,theme:A})=>e?A==="dark"?"#4a90e2":"#1976d2":"transparent"};
  color: ${({active:e,theme:A})=>e?"white":A==="dark"?"#fff":"#333"};
  font-size: 14px;
  font-weight: ${({active:e})=>e?"600":"400"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({active:e,theme:A})=>e?A==="dark"?"#357abd":"#1565c0":A==="dark"?"#555":"#e0e0e0"};
  }
`,ww=({handleInputChange:e,inputValue:A})=>m.jsx("div",{children:m.jsx(U1,{required:!0,type:"text",value:A,onChange:e})}),N1=D.select`
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
`,R1=({handleSelectChange:e,selectValue:A})=>m.jsxs(N1,{type:"text",required:!0,value:A,onChange:e,children:[m.jsx("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Группа"}),Zs.map(t=>m.jsx("option",{value:t,children:t},t))]}),O1=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`,mw=({handleCheckBoxChange:e,label:A})=>m.jsx("label",{children:m.jsxs(O1,{children:[m.jsx("div",{children:A}),m.jsx("input",{onChange:e,type:"checkbox"})]})});var By={exports:{}},M1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",P1=M1,K1=P1;function wy(){}function my(){}my.resetWarningCache=wy;var V1=function(){function e(n,r,i,s,o,a){if(a!==K1){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function A(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:A,element:e,elementType:e,instanceOf:A,node:e,objectOf:A,oneOf:A,oneOfType:A,shape:A,exact:A,checkPropTypes:my,resetWarningCache:wy};return t.PropTypes=t,t};By.exports=V1();var G1=By.exports;const ar=Th(G1),Tp=Ti.memo(({handleChangeTheme:e,theme:A})=>m.jsx(m.Fragment,{children:m.jsxs("label",{className:"switch",children:[m.jsx("input",{onChange:e,type:"checkbox",className:"themeSwitcher",checked:A==="light"}),m.jsx("span",{className:"slider"})]})}));Tp.displayName="ThemeSwitcher";Tp.propTypes={handleChangeTheme:ar.func,theme:ar.string};const W1=""+new URL("gerb-EUG4mf70.png",import.meta.url).href,j1=""+new URL("inco-Cw7QgD9S.png",import.meta.url).href;var z1={exports:{}};(function(e,A){(function(t,n){e.exports=n()})(PE,function(){return function t(n,r,i){var s=window,o="application/octet-stream",a=i||o,l=n,c=!r&&!i&&l,u=document.createElement("a"),d=function(y){return String(y)},h=s.Blob||s.MozBlob||s.WebKitBlob||d,g=r||"download",w,_;if(h=h.call?h.bind(s):Blob,String(this)==="true"&&(l=[l,a],a=l[0],l=l[1]),c&&c.length<2048&&(g=c.split("/").pop().split("?")[0],u.href=c,u.href.indexOf(c)!==-1)){var p=new XMLHttpRequest;return p.open("GET",c,!0),p.responseType="blob",p.onload=function(y){t(y.target.response,g,o)},setTimeout(function(){p.send()},0),p}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l))if(l.length>1024*1024*1.999&&h!==d)l=Q(l),a=l.type||o;else return navigator.msSaveBlob?navigator.msSaveBlob(Q(l),g):v(l);else if(/([\x80-\xff])/.test(l)){var f=0,B=new Uint8Array(l.length),C=B.length;for(f;f<C;++f)B[f]=l.charCodeAt(f);l=new h([B],{type:a})}w=l instanceof h?l:new h([l],{type:a});function Q(y){var U=y.split(/[:;,]/),I=U[1],H=U[2]=="base64"?atob:decodeURIComponent,rA=H(U.pop()),yA=rA.length,j=0,BA=new Uint8Array(yA);for(j;j<yA;++j)BA[j]=rA.charCodeAt(j);return new h([BA],{type:I})}function v(y,U){if("download"in u)return u.href=y,u.setAttribute("download",g),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),U===!0&&setTimeout(function(){s.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(y)&&(y="data:"+y.replace(/^data:([\w\/\-\+]+)/,o)),window.open(y)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=y),!0;var I=document.createElement("iframe");document.body.appendChild(I),!U&&/^data:/.test(y)&&(y="data:"+y.replace(/^data:([\w\/\-\+]+)/,o)),I.src=y,setTimeout(function(){document.body.removeChild(I)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(w,g);if(s.URL)v(s.URL.createObjectURL(w),!0);else{if(typeof w=="string"||w.constructor===d)try{return v("data:"+a+";base64,"+s.btoa(w))}catch{return v("data:"+a+","+encodeURIComponent(w))}_=new FileReader,_.onload=function(y){v(this.result)},_.readAsDataURL(w)}return!0}})})(z1);/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
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
***************************************************************************** */var Wf=function(e,A){return Wf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Wf(e,A)};function _t(e,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");Wf(e,A);function t(){this.constructor=e}e.prototype=A===null?Object.create(A):(t.prototype=A.prototype,new t)}function Xe(e,A,t,n){function r(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function o(c){try{l(n.next(c))}catch(u){s(u)}}function a(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){c.done?i(c.value):r(c.value).then(o,a)}l((n=n.apply(e,[])).next())})}function Ne(e,A){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(l){return function(c){return a([l,c])}}function a(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=A.call(e,t)}catch(c){l=[6,c],r=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var xr=function(){function e(A,t,n,r){this.left=A,this.top=t,this.width=n,this.height=r}return e.prototype.add=function(A,t,n,r){return new e(this.left+A,this.top+t,this.width+n,this.height+r)},e.fromClientRect=function(A,t){return new e(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height)},e.fromDOMRectList=function(A,t){var n=Array.from(t).find(function(r){return r.width!==0});return n?new e(n.left+A.windowBounds.left,n.top+A.windowBounds.top,n.width,n.height):e.EMPTY},e.EMPTY=new e(0,0,0,0),e}(),Hp=function(e,A){return xr.fromClientRect(e,A.getBoundingClientRect())},nu=function(e){for(var A=[],t=0,n=e.length;t<n;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=e.charCodeAt(t++);(i&64512)===56320?A.push(((r&1023)<<10)+(i&1023)+65536):(A.push(r),t--)}else A.push(r)}return A},MA=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,e);var t=e.length;if(!t)return"";for(var n=[],r=-1,i="";++r<t;){var s=e[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===t||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},Cw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ha=0;Ha<Cw.length;Ha++)$1[Cw.charCodeAt(Ha)]=Ha;var vw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ds=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var La=0;La<vw.length;La++)Ds[vw.charCodeAt(La)]=La;var X1=function(e){var A=e.length*.75,t=e.length,n,r=0,i,s,o,a;e[e.length-1]==="="&&(A--,e[e.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(n=0;n<t;n+=4)i=Ds[e.charCodeAt(n)],s=Ds[e.charCodeAt(n+1)],o=Ds[e.charCodeAt(n+2)],a=Ds[e.charCodeAt(n+3)],c[r++]=i<<2|s>>4,c[r++]=(s&15)<<4|o>>2,c[r++]=(o&3)<<6|a&63;return l},Y1=function(e){for(var A=e.length,t=[],n=0;n<A;n+=2)t.push(e[n+1]<<8|e[n]);return t},J1=function(e){for(var A=e.length,t=[],n=0;n<A;n+=4)t.push(e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]);return t},yr=5,Lp=11,ld=2,Z1=Lp-yr,Cy=65536>>yr,q1=1<<yr,cd=q1-1,AS=1024>>yr,eS=Cy+AS,tS=eS,nS=32,rS=tS+nS,iS=65536>>Lp,sS=1<<Z1,oS=sS-1,yw=function(e,A,t){return e.slice?e.slice(A,t):new Uint16Array(Array.prototype.slice.call(e,A,t))},aS=function(e,A,t){return e.slice?e.slice(A,t):new Uint32Array(Array.prototype.slice.call(e,A,t))},lS=function(e,A){var t=X1(e),n=Array.isArray(t)?J1(t):new Uint32Array(t),r=Array.isArray(t)?Y1(t):new Uint16Array(t),i=24,s=yw(r,i/2,n[4]/2),o=n[5]===2?yw(r,(i+n[4])/2):aS(n,Math.ceil((i+n[4])/4));return new cS(n[0],n[1],n[2],n[3],s,o)},cS=function(){function e(A,t,n,r,i,s){this.initialValue=A,this.errorValue=t,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return e.prototype.get=function(A){var t;if(A>=0){if(A<55296||A>56319&&A<=65535)return t=this.index[A>>yr],t=(t<<ld)+(A&cd),this.data[t];if(A<=65535)return t=this.index[Cy+(A-55296>>yr)],t=(t<<ld)+(A&cd),this.data[t];if(A<this.highStart)return t=rS-iS+(A>>Lp),t=this.index[t],t+=A>>yr&oS,t=this.index[t],t=(t<<ld)+(A&cd),this.data[t];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},e}(),Qw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",uS=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ka=0;ka<Qw.length;ka++)uS[Qw.charCodeAt(ka)]=ka;var dS="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",_w=50,fS=1,vy=2,yy=3,hS=4,pS=5,Ew=7,Qy=8,Uw=9,In=10,jf=11,Fw=12,zf=13,gS=14,Ns=15,$f=16,ba=17,Qs=18,BS=19,Iw=20,Xf=21,_s=22,ud=23,zr=24,Re=25,Rs=26,Os=27,$r=28,wS=29,lr=30,mS=31,Da=32,Na=33,Yf=34,Jf=35,Zf=36,xo=37,qf=38,vl=39,yl=40,dd=41,_y=42,CS=43,vS=[9001,65288],Ey="!",nA="×",Ra="÷",Ah=lS(dS),Ot=[lr,Zf],eh=[fS,vy,yy,pS],Uy=[In,Qy],Sw=[Os,Rs],yS=eh.concat(Uy),xw=[qf,vl,yl,Yf,Jf],QS=[Ns,zf],_S=function(e,A){A===void 0&&(A="strict");var t=[],n=[],r=[];return e.forEach(function(i,s){var o=Ah.get(i);if(o>_w?(r.push(!0),o-=_w):r.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return n.push(s),t.push($f);if(o===hS||o===jf){if(s===0)return n.push(s),t.push(lr);var a=t[s-1];return yS.indexOf(a)===-1?(n.push(n[s-1]),t.push(a)):(n.push(s),t.push(lr))}if(n.push(s),o===mS)return t.push(A==="strict"?Xf:xo);if(o===_y||o===wS)return t.push(lr);if(o===CS)return i>=131072&&i<=196605||i>=196608&&i<=262141?t.push(xo):t.push(lr);t.push(o)}),[n,t,r]},fd=function(e,A,t,n){var r=n[t];if(Array.isArray(e)?e.indexOf(r)!==-1:e===r)for(var i=t;i<=n.length;){i++;var s=n[i];if(s===A)return!0;if(s!==In)break}if(r===In)for(var i=t;i>0;){i--;var o=n[i];if(Array.isArray(e)?e.indexOf(o)!==-1:e===o)for(var a=t;a<=n.length;){a++;var s=n[a];if(s===A)return!0;if(s!==In)break}if(o!==In)break}return!1},Tw=function(e,A){for(var t=e;t>=0;){var n=A[t];if(n===In)t--;else return n}return 0},ES=function(e,A,t,n,r){if(t[n]===0)return nA;var i=n-1;if(Array.isArray(r)&&r[i]===!0)return nA;var s=i-1,o=i+1,a=A[i],l=s>=0?A[s]:0,c=A[o];if(a===vy&&c===yy)return nA;if(eh.indexOf(a)!==-1)return Ey;if(eh.indexOf(c)!==-1||Uy.indexOf(c)!==-1)return nA;if(Tw(i,A)===Qy)return Ra;if(Ah.get(e[i])===jf||(a===Da||a===Na)&&Ah.get(e[o])===jf||a===Ew||c===Ew||a===Uw||[In,zf,Ns].indexOf(a)===-1&&c===Uw||[ba,Qs,BS,zr,$r].indexOf(c)!==-1||Tw(i,A)===_s||fd(ud,_s,i,A)||fd([ba,Qs],Xf,i,A)||fd(Fw,Fw,i,A))return nA;if(a===In)return Ra;if(a===ud||c===ud)return nA;if(c===$f||a===$f)return Ra;if([zf,Ns,Xf].indexOf(c)!==-1||a===gS||l===Zf&&QS.indexOf(a)!==-1||a===$r&&c===Zf||c===Iw||Ot.indexOf(c)!==-1&&a===Re||Ot.indexOf(a)!==-1&&c===Re||a===Os&&[xo,Da,Na].indexOf(c)!==-1||[xo,Da,Na].indexOf(a)!==-1&&c===Rs||Ot.indexOf(a)!==-1&&Sw.indexOf(c)!==-1||Sw.indexOf(a)!==-1&&Ot.indexOf(c)!==-1||[Os,Rs].indexOf(a)!==-1&&(c===Re||[_s,Ns].indexOf(c)!==-1&&A[o+1]===Re)||[_s,Ns].indexOf(a)!==-1&&c===Re||a===Re&&[Re,$r,zr].indexOf(c)!==-1)return nA;if([Re,$r,zr,ba,Qs].indexOf(c)!==-1)for(var u=i;u>=0;){var d=A[u];if(d===Re)return nA;if([$r,zr].indexOf(d)!==-1)u--;else break}if([Os,Rs].indexOf(c)!==-1)for(var u=[ba,Qs].indexOf(a)!==-1?s:i;u>=0;){var d=A[u];if(d===Re)return nA;if([$r,zr].indexOf(d)!==-1)u--;else break}if(qf===a&&[qf,vl,Yf,Jf].indexOf(c)!==-1||[vl,Yf].indexOf(a)!==-1&&[vl,yl].indexOf(c)!==-1||[yl,Jf].indexOf(a)!==-1&&c===yl||xw.indexOf(a)!==-1&&[Iw,Rs].indexOf(c)!==-1||xw.indexOf(c)!==-1&&a===Os||Ot.indexOf(a)!==-1&&Ot.indexOf(c)!==-1||a===zr&&Ot.indexOf(c)!==-1||Ot.concat(Re).indexOf(a)!==-1&&c===_s&&vS.indexOf(e[o])===-1||Ot.concat(Re).indexOf(c)!==-1&&a===Qs)return nA;if(a===dd&&c===dd){for(var h=t[i],g=1;h>0&&(h--,A[h]===dd);)g++;if(g%2!==0)return nA}return a===Da&&c===Na?nA:Ra},US=function(e,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var t=_S(e,A.lineBreak),n=t[0],r=t[1],i=t[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(r=r.map(function(o){return[Re,lr,_y].indexOf(o)!==-1?xo:o}));var s=A.wordBreak==="keep-all"?i.map(function(o,a){return o&&e[a]>=19968&&e[a]<=40959}):void 0;return[n,r,s]},FS=function(){function e(A,t,n,r){this.codePoints=A,this.required=t===Ey,this.start=n,this.end=r}return e.prototype.slice=function(){return MA.apply(void 0,this.codePoints.slice(this.start,this.end))},e}(),IS=function(e,A){var t=nu(e),n=US(t,A),r=n[0],i=n[1],s=n[2],o=t.length,a=0,l=0;return{next:function(){if(l>=o)return{done:!0,value:null};for(var c=nA;l<o&&(c=ES(t,i,r,++l,s))===nA;);if(c!==nA||l===o){var u=new FS(t,c,a,l);return a=l,{value:u,done:!1}}return{done:!0,value:null}}}},SS=1,xS=2,Yo=4,Hw=8,rc=10,Lw=47,eo=92,TS=9,HS=32,Oa=34,Es=61,LS=35,kS=36,bS=37,Ma=39,Pa=40,Us=41,DS=95,Fe=45,NS=33,RS=60,OS=62,MS=64,PS=91,KS=93,VS=61,GS=123,Ka=63,WS=125,kw=124,jS=126,zS=128,bw=65533,hd=42,hr=43,$S=44,XS=58,YS=59,To=46,JS=0,ZS=8,qS=11,Ax=14,ex=31,tx=127,Ut=-1,Fy=48,Iy=97,Sy=101,nx=102,rx=117,ix=122,xy=65,Ty=69,Hy=70,sx=85,ox=90,fe=function(e){return e>=Fy&&e<=57},ax=function(e){return e>=55296&&e<=57343},Xr=function(e){return fe(e)||e>=xy&&e<=Hy||e>=Iy&&e<=nx},lx=function(e){return e>=Iy&&e<=ix},cx=function(e){return e>=xy&&e<=ox},ux=function(e){return lx(e)||cx(e)},dx=function(e){return e>=zS},Va=function(e){return e===rc||e===TS||e===HS},ic=function(e){return ux(e)||dx(e)||e===DS},Dw=function(e){return ic(e)||fe(e)||e===Fe},fx=function(e){return e>=JS&&e<=ZS||e===qS||e>=Ax&&e<=ex||e===tx},mn=function(e,A){return e!==eo?!1:A!==rc},Ga=function(e,A,t){return e===Fe?ic(A)||mn(A,t):ic(e)?!0:!!(e===eo&&mn(e,A))},pd=function(e,A,t){return e===hr||e===Fe?fe(A)?!0:A===To&&fe(t):fe(e===To?A:e)},hx=function(e){var A=0,t=1;(e[A]===hr||e[A]===Fe)&&(e[A]===Fe&&(t=-1),A++);for(var n=[];fe(e[A]);)n.push(e[A++]);var r=n.length?parseInt(MA.apply(void 0,n),10):0;e[A]===To&&A++;for(var i=[];fe(e[A]);)i.push(e[A++]);var s=i.length,o=s?parseInt(MA.apply(void 0,i),10):0;(e[A]===Ty||e[A]===Sy)&&A++;var a=1;(e[A]===hr||e[A]===Fe)&&(e[A]===Fe&&(a=-1),A++);for(var l=[];fe(e[A]);)l.push(e[A++]);var c=l.length?parseInt(MA.apply(void 0,l),10):0;return t*(r+o*Math.pow(10,-s))*Math.pow(10,a*c)},px={type:2},gx={type:3},Bx={type:4},wx={type:13},mx={type:8},Cx={type:21},vx={type:9},yx={type:10},Qx={type:11},_x={type:12},Ex={type:14},Wa={type:23},Ux={type:1},Fx={type:25},Ix={type:24},Sx={type:26},xx={type:27},Tx={type:28},Hx={type:29},Lx={type:31},th={type:32},Ly=function(){function e(){this._value=[]}return e.prototype.write=function(A){this._value=this._value.concat(nu(A))},e.prototype.read=function(){for(var A=[],t=this.consumeToken();t!==th;)A.push(t),t=this.consumeToken();return A},e.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case Oa:return this.consumeStringToken(Oa);case LS:var t=this.peekCodePoint(0),n=this.peekCodePoint(1),r=this.peekCodePoint(2);if(Dw(t)||mn(n,r)){var i=Ga(t,n,r)?xS:SS,s=this.consumeName();return{type:5,value:s,flags:i}}break;case kS:if(this.peekCodePoint(0)===Es)return this.consumeCodePoint(),wx;break;case Ma:return this.consumeStringToken(Ma);case Pa:return px;case Us:return gx;case hd:if(this.peekCodePoint(0)===Es)return this.consumeCodePoint(),Ex;break;case hr:if(pd(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case $S:return Bx;case Fe:var o=A,a=this.peekCodePoint(0),l=this.peekCodePoint(1);if(pd(o,a,l))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(Ga(o,a,l))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(a===Fe&&l===OS)return this.consumeCodePoint(),this.consumeCodePoint(),Ix;break;case To:if(pd(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Lw:if(this.peekCodePoint(0)===hd)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===hd&&(c=this.consumeCodePoint(),c===Lw))return this.consumeToken();if(c===Ut)return this.consumeToken()}break;case XS:return Sx;case YS:return xx;case RS:if(this.peekCodePoint(0)===NS&&this.peekCodePoint(1)===Fe&&this.peekCodePoint(2)===Fe)return this.consumeCodePoint(),this.consumeCodePoint(),Fx;break;case MS:var u=this.peekCodePoint(0),d=this.peekCodePoint(1),h=this.peekCodePoint(2);if(Ga(u,d,h)){var s=this.consumeName();return{type:7,value:s}}break;case PS:return Tx;case eo:if(mn(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case KS:return Hx;case VS:if(this.peekCodePoint(0)===Es)return this.consumeCodePoint(),mx;break;case GS:return Qx;case WS:return _x;case rx:case sx:var g=this.peekCodePoint(0),w=this.peekCodePoint(1);return g===hr&&(Xr(w)||w===Ka)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case kw:if(this.peekCodePoint(0)===Es)return this.consumeCodePoint(),vx;if(this.peekCodePoint(0)===kw)return this.consumeCodePoint(),Cx;break;case jS:if(this.peekCodePoint(0)===Es)return this.consumeCodePoint(),yx;break;case Ut:return th}return Va(A)?(this.consumeWhiteSpace(),Lx):fe(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):ic(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:MA(A)}},e.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},e.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},e.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},e.prototype.consumeUnicodeRangeToken=function(){for(var A=[],t=this.consumeCodePoint();Xr(t)&&A.length<6;)A.push(t),t=this.consumeCodePoint();for(var n=!1;t===Ka&&A.length<6;)A.push(t),t=this.consumeCodePoint(),n=!0;if(n){var r=parseInt(MA.apply(void 0,A.map(function(a){return a===Ka?Fy:a})),16),i=parseInt(MA.apply(void 0,A.map(function(a){return a===Ka?Hy:a})),16);return{type:30,start:r,end:i}}var s=parseInt(MA.apply(void 0,A),16);if(this.peekCodePoint(0)===Fe&&Xr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var o=[];Xr(t)&&o.length<6;)o.push(t),t=this.consumeCodePoint();var i=parseInt(MA.apply(void 0,o),16);return{type:30,start:s,end:i}}else return{type:30,start:s,end:s}},e.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===Pa?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Pa?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},e.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===Ut)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Ma||t===Oa){var n=this.consumeStringToken(this.consumeCodePoint());return n.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===Ut||this.peekCodePoint(0)===Us)?(this.consumeCodePoint(),{type:22,value:n.value}):(this.consumeBadUrlRemnants(),Wa)}for(;;){var r=this.consumeCodePoint();if(r===Ut||r===Us)return{type:22,value:MA.apply(void 0,A)};if(Va(r))return this.consumeWhiteSpace(),this.peekCodePoint(0)===Ut||this.peekCodePoint(0)===Us?(this.consumeCodePoint(),{type:22,value:MA.apply(void 0,A)}):(this.consumeBadUrlRemnants(),Wa);if(r===Oa||r===Ma||r===Pa||fx(r))return this.consumeBadUrlRemnants(),Wa;if(r===eo)if(mn(r,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Wa;else A.push(r)}},e.prototype.consumeWhiteSpace=function(){for(;Va(this.peekCodePoint(0));)this.consumeCodePoint()},e.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===Us||A===Ut)return;mn(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},e.prototype.consumeStringSlice=function(A){for(var t=5e4,n="";A>0;){var r=Math.min(t,A);n+=MA.apply(void 0,this._value.splice(0,r)),A-=r}return this._value.shift(),n},e.prototype.consumeStringToken=function(A){var t="",n=0;do{var r=this._value[n];if(r===Ut||r===void 0||r===A)return t+=this.consumeStringSlice(n),{type:0,value:t};if(r===rc)return this._value.splice(0,n),Ux;if(r===eo){var i=this._value[n+1];i!==Ut&&i!==void 0&&(i===rc?(t+=this.consumeStringSlice(n),n=-1,this._value.shift()):mn(r,i)&&(t+=this.consumeStringSlice(n),t+=MA(this.consumeEscapedCodePoint()),n=-1))}n++}while(!0)},e.prototype.consumeNumber=function(){var A=[],t=Yo,n=this.peekCodePoint(0);for((n===hr||n===Fe)&&A.push(this.consumeCodePoint());fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());n=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(n===To&&fe(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Hw;fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());n=this.peekCodePoint(0),r=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((n===Ty||n===Sy)&&((r===hr||r===Fe)&&fe(i)||fe(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Hw;fe(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[hx(A),t]},e.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),t=A[0],n=A[1],r=this.peekCodePoint(0),i=this.peekCodePoint(1),s=this.peekCodePoint(2);if(Ga(r,i,s)){var o=this.consumeName();return{type:15,number:t,flags:n,unit:o}}return r===bS?(this.consumeCodePoint(),{type:16,number:t,flags:n}):{type:17,number:t,flags:n}},e.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(Xr(A)){for(var t=MA(A);Xr(this.peekCodePoint(0))&&t.length<6;)t+=MA(this.consumeCodePoint());Va(this.peekCodePoint(0))&&this.consumeCodePoint();var n=parseInt(t,16);return n===0||ax(n)||n>1114111?bw:n}return A===Ut?bw:A},e.prototype.consumeName=function(){for(var A="";;){var t=this.consumeCodePoint();if(Dw(t))A+=MA(t);else if(mn(t,this.peekCodePoint(0)))A+=MA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),A}},e}(),ky=function(){function e(A){this._tokens=A}return e.create=function(A){var t=new Ly;return t.write(A),new e(t.read())},e.parseValue=function(A){return e.create(A).parseComponentValue()},e.parseValues=function(A){return e.create(A).parseComponentValues()},e.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var t=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},e.prototype.parseComponentValues=function(){for(var A=[];;){var t=this.consumeComponentValue();if(t.type===32)return A;A.push(t),A.push()}},e.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},e.prototype.consumeSimpleBlock=function(A){for(var t={type:A,values:[]},n=this.consumeToken();;){if(n.type===32||kx(n,A))return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue()),n=this.consumeToken()}},e.prototype.consumeFunction=function(A){for(var t={name:A.value,values:[],type:18};;){var n=this.consumeToken();if(n.type===32||n.type===3)return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue())}},e.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?th:A},e.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},e}(),Jo=function(e){return e.type===15},ru=function(e){return e.type===17},DA=function(e){return e.type===20},nh=function(e,A){return DA(e)&&e.value===A},iu=function(e){return e.type!==31&&e.type!==4},kt=function(e){var A=[],t=[];return e.forEach(function(n){if(n.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(t),t=[];return}n.type!==31&&t.push(n)}),t.length&&A.push(t),A},kx=function(e,A){return A===11&&e.type===12||A===28&&e.type===29?!0:A===2&&e.type===3},$n=function(e){return e.type===17||e.type===15},VA=function(e){return e.type===16||$n(e)},by=function(e){return e.length>1?[e[0],e[1]]:[e[0]]},oe={type:17,number:0,flags:Yo},kp={type:16,number:50,flags:Yo},Sn={type:16,number:100,flags:Yo},Ms=function(e,A,t){var n=e[0],r=e[1];return[CA(n,A),CA(typeof r<"u"?r:n,t)]},CA=function(e,A){if(e.type===16)return e.number/100*A;if(Jo(e))switch(e.unit){case"rem":case"em":return 16*e.number;case"px":default:return e.number}return e.number},Dy="deg",Ny="grad",Ry="rad",Oy="turn",su={name:"angle",parse:function(e,A){if(A.type===15)switch(A.unit){case Dy:return Math.PI*A.number/180;case Ny:return Math.PI/200*A.number;case Ry:return A.number;case Oy:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},My=function(e){return e.type===15&&(e.unit===Dy||e.unit===Ny||e.unit===Ry||e.unit===Oy)},Py=function(e){var A=e.filter(DA).map(function(t){return t.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[oe,oe];case"to top":case"bottom":return et(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[oe,Sn];case"to right":case"left":return et(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Sn,Sn];case"to bottom":case"top":return et(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Sn,oe];case"to left":case"right":return et(270)}return 0},et=function(e){return Math.PI*e/180},Mn={name:"color",parse:function(e,A){if(A.type===18){var t=bx[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return t(e,A.values)}if(A.type===5){if(A.value.length===3){var n=A.value.substring(0,1),r=A.value.substring(1,2),i=A.value.substring(2,3);return xn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),1)}if(A.value.length===4){var n=A.value.substring(0,1),r=A.value.substring(1,2),i=A.value.substring(2,3),s=A.value.substring(3,4);return xn(parseInt(n+n,16),parseInt(r+r,16),parseInt(i+i,16),parseInt(s+s,16)/255)}if(A.value.length===6){var n=A.value.substring(0,2),r=A.value.substring(2,4),i=A.value.substring(4,6);return xn(parseInt(n,16),parseInt(r,16),parseInt(i,16),1)}if(A.value.length===8){var n=A.value.substring(0,2),r=A.value.substring(2,4),i=A.value.substring(4,6),s=A.value.substring(6,8);return xn(parseInt(n,16),parseInt(r,16),parseInt(i,16),parseInt(s,16)/255)}}if(A.type===20){var o=Ho[A.value.toUpperCase()];if(typeof o<"u")return o}return Ho.TRANSPARENT}},_i=function(e){return(255&e)===0},ZA=function(e){var A=255&e,t=255&e>>8,n=255&e>>16,r=255&e>>24;return A<255?"rgba("+r+","+n+","+t+","+A/255+")":"rgb("+r+","+n+","+t+")"},xn=function(e,A,t,n){return(e<<24|A<<16|t<<8|Math.round(n*255)<<0)>>>0},Nw=function(e,A){if(e.type===17)return e.number;if(e.type===16){var t=A===3?1:255;return A===3?e.number/100*t:Math.round(e.number/100*t)}return 0},Rw=function(e,A){var t=A.filter(iu);if(t.length===3){var n=t.map(Nw),r=n[0],i=n[1],s=n[2];return xn(r,i,s,1)}if(t.length===4){var o=t.map(Nw),r=o[0],i=o[1],s=o[2],a=o[3];return xn(r,i,s,a)}return 0};function gd(e,A,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(A-e)*t*6+e:t<1/2?A:t<2/3?(A-e)*6*(2/3-t)+e:e}var Ow=function(e,A){var t=A.filter(iu),n=t[0],r=t[1],i=t[2],s=t[3],o=(n.type===17?et(n.number):su.parse(e,n))/(Math.PI*2),a=VA(r)?r.number/100:0,l=VA(i)?i.number/100:0,c=typeof s<"u"&&VA(s)?CA(s,1):1;if(a===0)return xn(l*255,l*255,l*255,1);var u=l<=.5?l*(a+1):l+a-l*a,d=l*2-u,h=gd(d,u,o+1/3),g=gd(d,u,o),w=gd(d,u,o-1/3);return xn(h*255,g*255,w*255,c)},bx={hsl:Ow,hsla:Ow,rgb:Rw,rgba:Rw},Mw=function(e,A){return Mn.parse(e,ky.create(A).parseComponentValue())},Ho={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Dx={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(e,A){return A.map(function(t){if(DA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Nx={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ou=function(e,A){var t=Mn.parse(e,A[0]),n=A[1];return n&&VA(n)?{color:t,stop:n}:{color:t,stop:null}},Pw=function(e,A){var t=e[0],n=e[e.length-1];t.stop===null&&(t.stop=oe),n.stop===null&&(n.stop=Sn);for(var r=[],i=0,s=0;s<e.length;s++){var o=e[s].stop;if(o!==null){var a=CA(o,A);a>i?r.push(a):r.push(i),i=a}else r.push(null)}for(var l=null,s=0;s<r.length;s++){var c=r[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,d=r[l-1],h=(c-d)/(u+1),g=1;g<=u;g++)r[l+g-1]=h*g;l=null}}return e.map(function(w,_){var p=w.color;return{color:p,stop:Math.max(Math.min(1,r[_]/A),0)}})},Rx=function(e,A,t){var n=A/2,r=t/2,i=CA(e[0],A)-n,s=r-CA(e[1],t);return(Math.atan2(s,i)+Math.PI*2)%(Math.PI*2)},Ox=function(e,A,t){var n=typeof e=="number"?e:Rx(e,A,t),r=Math.abs(A*Math.sin(n))+Math.abs(t*Math.cos(n)),i=A/2,s=t/2,o=r/2,a=Math.sin(n-Math.PI/2)*o,l=Math.cos(n-Math.PI/2)*o;return[r,i-l,i+l,s-a,s+a]},ct=function(e,A){return Math.sqrt(e*e+A*A)},Kw=function(e,A,t,n,r){var i=[[0,0],[0,A],[e,0],[e,A]];return i.reduce(function(s,o){var a=o[0],l=o[1],c=ct(t-a,n-l);return(r?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:o,optimumDistance:c}:s},{optimumDistance:r?1/0:-1/0,optimumCorner:null}).optimumCorner},Mx=function(e,A,t,n,r){var i=0,s=0;switch(e.size){case 0:e.shape===0?i=s=Math.min(Math.abs(A),Math.abs(A-n),Math.abs(t),Math.abs(t-r)):e.shape===1&&(i=Math.min(Math.abs(A),Math.abs(A-n)),s=Math.min(Math.abs(t),Math.abs(t-r)));break;case 2:if(e.shape===0)i=s=Math.min(ct(A,t),ct(A,t-r),ct(A-n,t),ct(A-n,t-r));else if(e.shape===1){var o=Math.min(Math.abs(t),Math.abs(t-r))/Math.min(Math.abs(A),Math.abs(A-n)),a=Kw(n,r,A,t,!0),l=a[0],c=a[1];i=ct(l-A,(c-t)/o),s=o*i}break;case 1:e.shape===0?i=s=Math.max(Math.abs(A),Math.abs(A-n),Math.abs(t),Math.abs(t-r)):e.shape===1&&(i=Math.max(Math.abs(A),Math.abs(A-n)),s=Math.max(Math.abs(t),Math.abs(t-r)));break;case 3:if(e.shape===0)i=s=Math.max(ct(A,t),ct(A,t-r),ct(A-n,t),ct(A-n,t-r));else if(e.shape===1){var o=Math.max(Math.abs(t),Math.abs(t-r))/Math.max(Math.abs(A),Math.abs(A-n)),u=Kw(n,r,A,t,!1),l=u[0],c=u[1];i=ct(l-A,(c-t)/o),s=o*i}break}return Array.isArray(e.size)&&(i=CA(e.size[0],n),s=e.size.length===2?CA(e.size[1],r):i),[i,s]},Px=function(e,A){var t=et(180),n=[];return kt(A).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&s.value==="to"){t=Py(r);return}else if(My(s)){t=su.parse(e,s);return}}var o=ou(e,r);n.push(o)}),{angle:t,stops:n,type:1}},ja=function(e,A){var t=et(180),n=[];return kt(A).forEach(function(r,i){if(i===0){var s=r[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=Py(r);return}else if(My(s)){t=(su.parse(e,s)+et(270))%et(360);return}}var o=ou(e,r);n.push(o)}),{angle:t,stops:n,type:1}},Kx=function(e,A){var t=et(180),n=[],r=1,i=0,s=3,o=[];return kt(A).forEach(function(a,l){var c=a[0];if(l===0){if(DA(c)&&c.value==="linear"){r=1;return}else if(DA(c)&&c.value==="radial"){r=2;return}}if(c.type===18){if(c.name==="from"){var u=Mn.parse(e,c.values[0]);n.push({stop:oe,color:u})}else if(c.name==="to"){var u=Mn.parse(e,c.values[0]);n.push({stop:Sn,color:u})}else if(c.name==="color-stop"){var d=c.values.filter(iu);if(d.length===2){var u=Mn.parse(e,d[1]),h=d[0];ru(h)&&n.push({stop:{type:16,number:h.number*100,flags:h.flags},color:u})}}}}),r===1?{angle:(t+et(180))%et(360),stops:n,type:r}:{size:s,shape:i,stops:n,position:o,type:r}},Ky="closest-side",Vy="farthest-side",Gy="closest-corner",Wy="farthest-corner",jy="circle",zy="ellipse",$y="cover",Xy="contain",Vx=function(e,A){var t=0,n=3,r=[],i=[];return kt(A).forEach(function(s,o){var a=!0;if(o===0){var l=!1;a=s.reduce(function(u,d){if(l)if(DA(d))switch(d.value){case"center":return i.push(kp),u;case"top":case"left":return i.push(oe),u;case"right":case"bottom":return i.push(Sn),u}else(VA(d)||$n(d))&&i.push(d);else if(DA(d))switch(d.value){case jy:return t=0,!1;case zy:return t=1,!1;case"at":return l=!0,!1;case Ky:return n=0,!1;case $y:case Vy:return n=1,!1;case Xy:case Gy:return n=2,!1;case Wy:return n=3,!1}else if($n(d)||VA(d))return Array.isArray(n)||(n=[]),n.push(d),!1;return u},a)}if(a){var c=ou(e,s);r.push(c)}}),{size:n,shape:t,stops:r,position:i,type:2}},za=function(e,A){var t=0,n=3,r=[],i=[];return kt(A).forEach(function(s,o){var a=!0;if(o===0?a=s.reduce(function(c,u){if(DA(u))switch(u.value){case"center":return i.push(kp),!1;case"top":case"left":return i.push(oe),!1;case"right":case"bottom":return i.push(Sn),!1}else if(VA(u)||$n(u))return i.push(u),!1;return c},a):o===1&&(a=s.reduce(function(c,u){if(DA(u))switch(u.value){case jy:return t=0,!1;case zy:return t=1,!1;case Xy:case Ky:return n=0,!1;case Vy:return n=1,!1;case Gy:return n=2,!1;case $y:case Wy:return n=3,!1}else if($n(u)||VA(u))return Array.isArray(n)||(n=[]),n.push(u),!1;return c},a)),a){var l=ou(e,s);r.push(l)}}),{size:n,shape:t,stops:r,position:i,type:2}},Gx=function(e){return e.type===1},Wx=function(e){return e.type===2},bp={name:"image",parse:function(e,A){if(A.type===22){var t={url:A.value,type:0};return e.cache.addImage(A.value),t}if(A.type===18){var n=Yy[A.name];if(typeof n>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return n(e,A.values)}throw new Error("Unsupported image type "+A.type)}};function jx(e){return!(e.type===20&&e.value==="none")&&(e.type!==18||!!Yy[e.name])}var Yy={"linear-gradient":Px,"-moz-linear-gradient":ja,"-ms-linear-gradient":ja,"-o-linear-gradient":ja,"-webkit-linear-gradient":ja,"radial-gradient":Vx,"-moz-radial-gradient":za,"-ms-radial-gradient":za,"-o-radial-gradient":za,"-webkit-radial-gradient":za,"-webkit-gradient":Kx},zx={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(e,A){if(A.length===0)return[];var t=A[0];return t.type===20&&t.value==="none"?[]:A.filter(function(n){return iu(n)&&jx(n)}).map(function(n){return bp.parse(e,n)})}},$x={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(e,A){return A.map(function(t){if(DA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Xx={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(e,A){return kt(A).map(function(t){return t.filter(VA)}).map(by)}},Yx={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(e,A){return kt(A).map(function(t){return t.filter(DA).map(function(n){return n.value}).join(" ")}).map(Jx)}},Jx=function(e){switch(e){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Ei;(function(e){e.AUTO="auto",e.CONTAIN="contain",e.COVER="cover"})(Ei||(Ei={}));var Zx={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(e,A){return kt(A).map(function(t){return t.filter(qx)})}},qx=function(e){return DA(e)||VA(e)},au=function(e){return{name:"border-"+e+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},AT=au("top"),eT=au("right"),tT=au("bottom"),nT=au("left"),lu=function(e){return{name:"border-radius-"+e,initialValue:"0 0",prefix:!1,type:1,parse:function(A,t){return by(t.filter(VA))}}},rT=lu("top-left"),iT=lu("top-right"),sT=lu("bottom-right"),oT=lu("bottom-left"),cu=function(e){return{name:"border-"+e+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},aT=cu("top"),lT=cu("right"),cT=cu("bottom"),uT=cu("left"),uu=function(e){return{name:"border-"+e+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,t){return Jo(t)?t.number:0}}},dT=uu("top"),fT=uu("right"),hT=uu("bottom"),pT=uu("left"),gT={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},BT={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(e,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},wT={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(e,A){return A.filter(DA).reduce(function(t,n){return t|mT(n.value)},0)}},mT=function(e){switch(e){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},CT={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(e,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},vT={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(e,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},sc;(function(e){e.NORMAL="normal",e.STRICT="strict"})(sc||(sc={}));var yT={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(e,A){switch(A){case"strict":return sc.STRICT;case"normal":default:return sc.NORMAL}}},QT={name:"line-height",initialValue:"normal",prefix:!1,type:4},Vw=function(e,A){return DA(e)&&e.value==="normal"?1.2*A:e.type===17?A*e.number:VA(e)?CA(e,A):A},_T={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(e,A){return A.type===20&&A.value==="none"?null:bp.parse(e,A)}},ET={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(e,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},UT={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(e,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},du=function(e){return{name:"margin-"+e,initialValue:"0",prefix:!1,type:4}},FT=du("top"),IT=du("right"),ST=du("bottom"),xT=du("left"),TT={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(e,A){return A.filter(DA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},HT={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(e,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},fu=function(e){return{name:"padding-"+e,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},LT=fu("top"),kT=fu("right"),bT=fu("bottom"),DT=fu("left"),NT={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(e,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},RT={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(e,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},OT={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(e,A){return A.length===1&&nh(A[0],"none")?[]:kt(A).map(function(t){for(var n={color:Ho.TRANSPARENT,offsetX:oe,offsetY:oe,blur:oe},r=0,i=0;i<t.length;i++){var s=t[i];$n(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:n.blur=s,r++):n.color=Mn.parse(e,s)}return n})}},MT={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(e,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},PT={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(e,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var t=GT[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return t(A.values)}return null}},KT=function(e){var A=e.filter(function(t){return t.type===17}).map(function(t){return t.number});return A.length===6?A:null},VT=function(e){var A=e.filter(function(a){return a.type===17}).map(function(a){return a.number}),t=A[0],n=A[1];A[2],A[3];var r=A[4],i=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],o=A[13];return A[14],A[15],A.length===16?[t,n,r,i,s,o]:null},GT={matrix:KT,matrix3d:VT},Gw={type:16,number:50,flags:Yo},WT=[Gw,Gw],jT={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(e,A){var t=A.filter(VA);return t.length!==2?WT:[t[0],t[1]]}},zT={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(e,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},to;(function(e){e.NORMAL="normal",e.BREAK_ALL="break-all",e.KEEP_ALL="keep-all"})(to||(to={}));var $T={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(e,A){switch(A){case"break-all":return to.BREAK_ALL;case"keep-all":return to.KEEP_ALL;case"normal":default:return to.NORMAL}}},XT={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(e,A){if(A.type===20)return{auto:!0,order:0};if(ru(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Jy={name:"time",parse:function(e,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},YT={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(e,A){return ru(A)?A.number:1}},JT={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ZT={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(e,A){return A.filter(DA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},qT={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(e,A){var t=[],n=[];return A.forEach(function(r){switch(r.type){case 20:case 0:t.push(r.value);break;case 17:t.push(r.number.toString());break;case 4:n.push(t.join(" ")),t.length=0;break}}),t.length&&n.push(t.join(" ")),n.map(function(r){return r.indexOf(" ")===-1?r:"'"+r+"'"})}},AH={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},eH={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(e,A){if(ru(A))return A.number;if(DA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},tH={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(e,A){return A.filter(DA).map(function(t){return t.value})}},nH={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(e,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},jA=function(e,A){return(e&A)!==0},rH={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(e,A){return A.filter(Jo).map(function(t){return Jy.parse(e,t)})}},iH={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(e,A){return A.length===1&&nh(A[0],"none")?[]:kt(A).map(function(t){for(var n={color:255,offsetX:oe,offsetY:oe,blur:oe,spread:oe,inset:!1},r=0,i=0;i<t.length;i++){var s=t[i];nh(s,"inset")?n.inset=!0:$n(s)?(r===0?n.offsetX=s:r===1?n.offsetY=s:r===2?n.blur=s:n.spread=s,r++):n.color=Mn.parse(e,s)}return n})}},sH={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(e,A){var t=[0,1,2],n=[];return A.filter(DA).forEach(function(r){switch(r.value){case"stroke":n.push(1);break;case"fill":n.push(0);break;case"markers":n.push(2);break}}),t.forEach(function(r){n.indexOf(r)===-1&&n.push(r)}),n}},oH={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},aH={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(e,A){return Jo(A)?A.number:0}},lH=function(){function e(A,t){var n,r;this.animationDuration=N(A,rH,t.animationDuration),this.backgroundClip=N(A,Dx,t.backgroundClip),this.backgroundColor=N(A,Nx,t.backgroundColor),this.backgroundImage=N(A,zx,t.backgroundImage),this.backgroundOrigin=N(A,$x,t.backgroundOrigin),this.backgroundPosition=N(A,Xx,t.backgroundPosition),this.backgroundRepeat=N(A,Yx,t.backgroundRepeat),this.backgroundSize=N(A,Zx,t.backgroundSize),this.borderTopColor=N(A,AT,t.borderTopColor),this.borderRightColor=N(A,eT,t.borderRightColor),this.borderBottomColor=N(A,tT,t.borderBottomColor),this.borderLeftColor=N(A,nT,t.borderLeftColor),this.borderTopLeftRadius=N(A,rT,t.borderTopLeftRadius),this.borderTopRightRadius=N(A,iT,t.borderTopRightRadius),this.borderBottomRightRadius=N(A,sT,t.borderBottomRightRadius),this.borderBottomLeftRadius=N(A,oT,t.borderBottomLeftRadius),this.borderTopStyle=N(A,aT,t.borderTopStyle),this.borderRightStyle=N(A,lT,t.borderRightStyle),this.borderBottomStyle=N(A,cT,t.borderBottomStyle),this.borderLeftStyle=N(A,uT,t.borderLeftStyle),this.borderTopWidth=N(A,dT,t.borderTopWidth),this.borderRightWidth=N(A,fT,t.borderRightWidth),this.borderBottomWidth=N(A,hT,t.borderBottomWidth),this.borderLeftWidth=N(A,pT,t.borderLeftWidth),this.boxShadow=N(A,iH,t.boxShadow),this.color=N(A,gT,t.color),this.direction=N(A,BT,t.direction),this.display=N(A,wT,t.display),this.float=N(A,CT,t.cssFloat),this.fontFamily=N(A,qT,t.fontFamily),this.fontSize=N(A,AH,t.fontSize),this.fontStyle=N(A,nH,t.fontStyle),this.fontVariant=N(A,tH,t.fontVariant),this.fontWeight=N(A,eH,t.fontWeight),this.letterSpacing=N(A,vT,t.letterSpacing),this.lineBreak=N(A,yT,t.lineBreak),this.lineHeight=N(A,QT,t.lineHeight),this.listStyleImage=N(A,_T,t.listStyleImage),this.listStylePosition=N(A,ET,t.listStylePosition),this.listStyleType=N(A,UT,t.listStyleType),this.marginTop=N(A,FT,t.marginTop),this.marginRight=N(A,IT,t.marginRight),this.marginBottom=N(A,ST,t.marginBottom),this.marginLeft=N(A,xT,t.marginLeft),this.opacity=N(A,YT,t.opacity);var i=N(A,TT,t.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=N(A,HT,t.overflowWrap),this.paddingTop=N(A,LT,t.paddingTop),this.paddingRight=N(A,kT,t.paddingRight),this.paddingBottom=N(A,bT,t.paddingBottom),this.paddingLeft=N(A,DT,t.paddingLeft),this.paintOrder=N(A,sH,t.paintOrder),this.position=N(A,RT,t.position),this.textAlign=N(A,NT,t.textAlign),this.textDecorationColor=N(A,JT,(n=t.textDecorationColor)!==null&&n!==void 0?n:t.color),this.textDecorationLine=N(A,ZT,(r=t.textDecorationLine)!==null&&r!==void 0?r:t.textDecoration),this.textShadow=N(A,OT,t.textShadow),this.textTransform=N(A,MT,t.textTransform),this.transform=N(A,PT,t.transform),this.transformOrigin=N(A,jT,t.transformOrigin),this.visibility=N(A,zT,t.visibility),this.webkitTextStrokeColor=N(A,oH,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=N(A,aH,t.webkitTextStrokeWidth),this.wordBreak=N(A,$T,t.wordBreak),this.zIndex=N(A,XT,t.zIndex)}return e.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},e.prototype.isTransparent=function(){return _i(this.backgroundColor)},e.prototype.isTransformed=function(){return this.transform!==null},e.prototype.isPositioned=function(){return this.position!==0},e.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},e.prototype.isFloating=function(){return this.float!==0},e.prototype.isInlineLevel=function(){return jA(this.display,4)||jA(this.display,33554432)||jA(this.display,268435456)||jA(this.display,536870912)||jA(this.display,67108864)||jA(this.display,134217728)},e}(),N=function(e,A,t){var n=new Ly,r=t!==null&&typeof t<"u"?t.toString():A.initialValue;n.write(r);var i=new ky(n.read());switch(A.type){case 2:var s=i.parseComponentValue();return A.parse(e,DA(s)?s.value:A.initialValue);case 0:return A.parse(e,i.parseComponentValue());case 1:return A.parse(e,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(A.format){case"angle":return su.parse(e,i.parseComponentValue());case"color":return Mn.parse(e,i.parseComponentValue());case"image":return bp.parse(e,i.parseComponentValue());case"length":var o=i.parseComponentValue();return $n(o)?o:oe;case"length-percentage":var a=i.parseComponentValue();return VA(a)?a:oe;case"time":return Jy.parse(e,i.parseComponentValue())}break}},cH="data-html2canvas-debug",uH=function(e){var A=e.getAttribute(cH);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Ww=function(e,A){var t=uH(e);return t===1||A===t},bt=function(){function e(A,t){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Ww(t,3))debugger;this.styles=new lH(A,window.getComputedStyle(t,null)),uL(t)&&(this.styles.animationDuration.some(function(n){return n>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Hp(this.context,t),Ww(t,4)&&(this.flags|=16)}return e}(),dH="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",jw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ps=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var $a=0;$a<jw.length;$a++)Ps[jw.charCodeAt($a)]=$a;var fH=function(e){var A=e.length*.75,t=e.length,n,r=0,i,s,o,a;e[e.length-1]==="="&&(A--,e[e.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(n=0;n<t;n+=4)i=Ps[e.charCodeAt(n)],s=Ps[e.charCodeAt(n+1)],o=Ps[e.charCodeAt(n+2)],a=Ps[e.charCodeAt(n+3)],c[r++]=i<<2|s>>4,c[r++]=(s&15)<<4|o>>2,c[r++]=(o&3)<<6|a&63;return l},hH=function(e){for(var A=e.length,t=[],n=0;n<A;n+=2)t.push(e[n+1]<<8|e[n]);return t},pH=function(e){for(var A=e.length,t=[],n=0;n<A;n+=4)t.push(e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]);return t},Qr=5,Dp=11,Bd=2,gH=Dp-Qr,Zy=65536>>Qr,BH=1<<Qr,wd=BH-1,wH=1024>>Qr,mH=Zy+wH,CH=mH,vH=32,yH=CH+vH,QH=65536>>Dp,_H=1<<gH,EH=_H-1,zw=function(e,A,t){return e.slice?e.slice(A,t):new Uint16Array(Array.prototype.slice.call(e,A,t))},UH=function(e,A,t){return e.slice?e.slice(A,t):new Uint32Array(Array.prototype.slice.call(e,A,t))},FH=function(e,A){var t=fH(e),n=Array.isArray(t)?pH(t):new Uint32Array(t),r=Array.isArray(t)?hH(t):new Uint16Array(t),i=24,s=zw(r,i/2,n[4]/2),o=n[5]===2?zw(r,(i+n[4])/2):UH(n,Math.ceil((i+n[4])/4));return new IH(n[0],n[1],n[2],n[3],s,o)},IH=function(){function e(A,t,n,r,i,s){this.initialValue=A,this.errorValue=t,this.highStart=n,this.highValueIndex=r,this.index=i,this.data=s}return e.prototype.get=function(A){var t;if(A>=0){if(A<55296||A>56319&&A<=65535)return t=this.index[A>>Qr],t=(t<<Bd)+(A&wd),this.data[t];if(A<=65535)return t=this.index[Zy+(A-55296>>Qr)],t=(t<<Bd)+(A&wd),this.data[t];if(A<this.highStart)return t=yH-QH+(A>>Dp),t=this.index[t],t+=A>>Qr&EH,t=this.index[t],t=(t<<Bd)+(A&wd),this.data[t];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},e}(),$w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",SH=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xa=0;Xa<$w.length;Xa++)SH[$w.charCodeAt(Xa)]=Xa;var xH=1,md=2,Cd=3,Xw=4,Yw=5,TH=7,Jw=8,vd=9,yd=10,Zw=11,qw=12,Am=13,em=14,Qd=15,HH=function(e){for(var A=[],t=0,n=e.length;t<n;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=e.charCodeAt(t++);(i&64512)===56320?A.push(((r&1023)<<10)+(i&1023)+65536):(A.push(r),t--)}else A.push(r)}return A},LH=function(){for(var e=[],A=0;A<arguments.length;A++)e[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,e);var t=e.length;if(!t)return"";for(var n=[],r=-1,i="";++r<t;){var s=e[r];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(r+1===t||n.length>16384)&&(i+=String.fromCharCode.apply(String,n),n.length=0)}return i},kH=FH(dH),Ye="×",_d="÷",bH=function(e){return kH.get(e)},DH=function(e,A,t){var n=t-2,r=A[n],i=A[t-1],s=A[t];if(i===md&&s===Cd)return Ye;if(i===md||i===Cd||i===Xw||s===md||s===Cd||s===Xw)return _d;if(i===Jw&&[Jw,vd,Zw,qw].indexOf(s)!==-1||(i===Zw||i===vd)&&(s===vd||s===yd)||(i===qw||i===yd)&&s===yd||s===Am||s===Yw||s===TH||i===xH)return Ye;if(i===Am&&s===em){for(;r===Yw;)r=A[--n];if(r===em)return Ye}if(i===Qd&&s===Qd){for(var o=0;r===Qd;)o++,r=A[--n];if(o%2===0)return Ye}return _d},NH=function(e){var A=HH(e),t=A.length,n=0,r=0,i=A.map(bH);return{next:function(){if(n>=t)return{done:!0,value:null};for(var s=Ye;n<t&&(s=DH(A,i,++n))===Ye;);if(s!==Ye||n===t){var o=LH.apply(null,A.slice(r,n));return r=n,{value:o,done:!1}}return{done:!0,value:null}}}},RH=function(e){for(var A=NH(e),t=[],n;!(n=A.next()).done;)n.value&&t.push(n.value.slice());return t},OH=function(e){var A=123;if(e.createRange){var t=e.createRange();if(t.getBoundingClientRect){var n=e.createElement("boundtest");n.style.height=A+"px",n.style.display="block",e.body.appendChild(n),t.selectNode(n);var r=t.getBoundingClientRect(),i=Math.round(r.height);if(e.body.removeChild(n),i===A)return!0}}return!1},MH=function(e){var A=e.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",e.body.appendChild(A);var t=e.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var n=A.firstChild,r=nu(n.data).map(function(a){return MA(a)}),i=0,s={},o=r.every(function(a,l){t.setStart(n,i),t.setEnd(n,i+a.length);var c=t.getBoundingClientRect();i+=a.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return e.body.removeChild(A),o},PH=function(){return typeof new Image().crossOrigin<"u"},KH=function(){return typeof new XMLHttpRequest().responseType=="string"},VH=function(e){var A=new Image,t=e.createElement("canvas"),n=t.getContext("2d");if(!n)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(A,0,0),t.toDataURL()}catch{return!1}return!0},tm=function(e){return e[0]===0&&e[1]===255&&e[2]===0&&e[3]===255},GH=function(e){var A=e.createElement("canvas"),t=100;A.width=t,A.height=t;var n=A.getContext("2d");if(!n)return Promise.reject(!1);n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,t,t);var r=new Image,i=A.toDataURL();r.src=i;var s=rh(t,t,0,0,r);return n.fillStyle="red",n.fillRect(0,0,t,t),nm(s).then(function(o){n.drawImage(o,0,0);var a=n.getImageData(0,0,t,t).data;n.fillStyle="red",n.fillRect(0,0,t,t);var l=e.createElement("div");return l.style.backgroundImage="url("+i+")",l.style.height=t+"px",tm(a)?nm(rh(t,t,0,0,l)):Promise.reject(!1)}).then(function(o){return n.drawImage(o,0,0),tm(n.getImageData(0,0,t,t).data)}).catch(function(){return!1})},rh=function(e,A,t,n,r){var i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),o=document.createElementNS(i,"foreignObject");return s.setAttributeNS(null,"width",e.toString()),s.setAttributeNS(null,"height",A.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",t.toString()),o.setAttributeNS(null,"y",n.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(o),o.appendChild(r),s},nm=function(e){return new Promise(function(A,t){var n=new Image;n.onload=function(){return A(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(e))})},Me={get SUPPORT_RANGE_BOUNDS(){var e=OH(document);return Object.defineProperty(Me,"SUPPORT_RANGE_BOUNDS",{value:e}),e},get SUPPORT_WORD_BREAKING(){var e=Me.SUPPORT_RANGE_BOUNDS&&MH(document);return Object.defineProperty(Me,"SUPPORT_WORD_BREAKING",{value:e}),e},get SUPPORT_SVG_DRAWING(){var e=VH(document);return Object.defineProperty(Me,"SUPPORT_SVG_DRAWING",{value:e}),e},get SUPPORT_FOREIGNOBJECT_DRAWING(){var e=typeof Array.from=="function"&&typeof window.fetch=="function"?GH(document):Promise.resolve(!1);return Object.defineProperty(Me,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:e}),e},get SUPPORT_CORS_IMAGES(){var e=PH();return Object.defineProperty(Me,"SUPPORT_CORS_IMAGES",{value:e}),e},get SUPPORT_RESPONSE_TYPE(){var e=KH();return Object.defineProperty(Me,"SUPPORT_RESPONSE_TYPE",{value:e}),e},get SUPPORT_CORS_XHR(){var e="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Me,"SUPPORT_CORS_XHR",{value:e}),e},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var e=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Me,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:e}),e}},no=function(){function e(A,t){this.text=A,this.bounds=t}return e}(),WH=function(e,A,t,n){var r=$H(A,t),i=[],s=0;return r.forEach(function(o){if(t.textDecorationLine.length||o.trim().length>0)if(Me.SUPPORT_RANGE_BOUNDS){var a=rm(n,s,o.length).getClientRects();if(a.length>1){var l=Np(o),c=0;l.forEach(function(d){i.push(new no(d,xr.fromDOMRectList(e,rm(n,c+s,d.length).getClientRects()))),c+=d.length})}else i.push(new no(o,xr.fromDOMRectList(e,a)))}else{var u=n.splitText(o.length);i.push(new no(o,jH(e,n))),n=u}else Me.SUPPORT_RANGE_BOUNDS||(n=n.splitText(o.length));s+=o.length}),i},jH=function(e,A){var t=A.ownerDocument;if(t){var n=t.createElement("html2canvaswrapper");n.appendChild(A.cloneNode(!0));var r=A.parentNode;if(r){r.replaceChild(n,A);var i=Hp(e,n);return n.firstChild&&r.replaceChild(n.firstChild,n),i}}return xr.EMPTY},rm=function(e,A,t){var n=e.ownerDocument;if(!n)throw new Error("Node has no owner document");var r=n.createRange();return r.setStart(e,A),r.setEnd(e,A+t),r},Np=function(e){if(Me.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(e)).map(function(t){return t.segment})}return RH(e)},zH=function(e,A){if(Me.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(e)).map(function(n){return n.segment})}return YH(e,A)},$H=function(e,A){return A.letterSpacing!==0?Np(e):zH(e,A)},XH=[32,160,4961,65792,65793,4153,4241],YH=function(e,A){for(var t=IS(e,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),n=[],r,i=function(){if(r.value){var s=r.value.slice(),o=nu(s),a="";o.forEach(function(l){XH.indexOf(l)===-1?a+=MA(l):(a.length&&n.push(a),n.push(MA(l)),a="")}),a.length&&n.push(a)}};!(r=t.next()).done;)i();return n},JH=function(){function e(A,t,n){this.text=ZH(t.data,n.textTransform),this.textBounds=WH(A,this.text,n,t)}return e}(),ZH=function(e,A){switch(A){case 1:return e.toLowerCase();case 3:return e.replace(qH,AL);case 2:return e.toUpperCase();default:return e}},qH=/(^|\s|:|-|\(|\))([a-z])/g,AL=function(e,A,t){return e.length>0?A+t.toUpperCase():e},qy=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.src=n.currentSrc||n.src,r.intrinsicWidth=n.naturalWidth,r.intrinsicHeight=n.naturalHeight,r.context.cache.addImage(r.src),r}return A}(bt),AQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.canvas=n,r.intrinsicWidth=n.width,r.intrinsicHeight=n.height,r}return A}(bt),eQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this,i=new XMLSerializer,s=Hp(t,n);return n.setAttribute("width",s.width+"px"),n.setAttribute("height",s.height+"px"),r.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(n)),r.intrinsicWidth=n.width.baseVal.value,r.intrinsicHeight=n.height.baseVal.value,r.context.cache.addImage(r.svg),r}return A}(bt),tQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.value=n.value,r}return A}(bt),ih=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.start=n.start,r.reversed=typeof n.reversed=="boolean"&&n.reversed===!0,r}return A}(bt),eL=[{type:15,flags:0,unit:"px",number:3}],tL=[{type:16,flags:0,number:50}],nL=function(e){return e.width>e.height?new xr(e.left+(e.width-e.height)/2,e.top,e.height,e.height):e.width<e.height?new xr(e.left,e.top+(e.height-e.width)/2,e.width,e.width):e},rL=function(e){var A=e.type===iL?new Array(e.value.length+1).join("•"):e.value;return A.length===0?e.placeholder||"":A},oc="checkbox",ac="radio",iL="password",im=707406591,Rp=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;switch(r.type=n.type.toLowerCase(),r.checked=n.checked,r.value=rL(n),(r.type===oc||r.type===ac)&&(r.styles.backgroundColor=3739148031,r.styles.borderTopColor=r.styles.borderRightColor=r.styles.borderBottomColor=r.styles.borderLeftColor=2779096575,r.styles.borderTopWidth=r.styles.borderRightWidth=r.styles.borderBottomWidth=r.styles.borderLeftWidth=1,r.styles.borderTopStyle=r.styles.borderRightStyle=r.styles.borderBottomStyle=r.styles.borderLeftStyle=1,r.styles.backgroundClip=[0],r.styles.backgroundOrigin=[0],r.bounds=nL(r.bounds)),r.type){case oc:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=eL;break;case ac:r.styles.borderTopRightRadius=r.styles.borderTopLeftRadius=r.styles.borderBottomRightRadius=r.styles.borderBottomLeftRadius=tL;break}return r}return A}(bt),nQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this,i=n.options[n.selectedIndex||0];return r.value=i&&i.text||"",r}return A}(bt),rQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.value=n.value,r}return A}(bt),iQ=function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;r.src=n.src,r.width=parseInt(n.width,10)||0,r.height=parseInt(n.height,10)||0,r.backgroundColor=r.styles.backgroundColor;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.documentElement){r.tree=oL(t,n.contentWindow.document.documentElement);var i=n.contentWindow.document.documentElement?Mw(t,getComputedStyle(n.contentWindow.document.documentElement).backgroundColor):Ho.TRANSPARENT,s=n.contentWindow.document.body?Mw(t,getComputedStyle(n.contentWindow.document.body).backgroundColor):Ho.TRANSPARENT;r.backgroundColor=_i(i)?_i(s)?r.styles.backgroundColor:s:i}}catch{}return r}return A}(bt),sL=["OL","UL","MENU"],Ql=function(e,A,t,n){for(var r=A.firstChild,i=void 0;r;r=i)if(i=r.nextSibling,cL(r)&&r.data.trim().length>0)t.textNodes.push(new JH(e,r,t.styles));else if(oQ(r))if(CL(r)&&r.assignedNodes)r.assignedNodes().forEach(function(o){return Ql(e,o,t,n)});else{var s=sQ(e,r);s.styles.isVisible()&&(aL(r,s,n)?s.flags|=4:lL(s.styles)&&(s.flags|=2),sL.indexOf(r.tagName)!==-1&&(s.flags|=8),t.elements.push(s),r.slot,r.shadowRoot?Ql(e,r.shadowRoot,s,n):!lQ(r)&&!aQ(r)&&!cQ(r)&&Ql(e,r,s,n))}},sQ=function(e,A){return wL(A)?new qy(e,A):BL(A)?new AQ(e,A):aQ(A)?new eQ(e,A):fL(A)?new tQ(e,A):hL(A)?new ih(e,A):pL(A)?new Rp(e,A):cQ(A)?new nQ(e,A):lQ(A)?new rQ(e,A):mL(A)?new iQ(e,A):new bt(e,A)},oL=function(e,A){var t=sQ(e,A);return t.flags|=4,Ql(e,A,t,t),t},aL=function(e,A,t){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||gL(e)&&t.styles.isTransparent()},lL=function(e){return e.isPositioned()||e.isFloating()},cL=function(e){return e.nodeType===Node.TEXT_NODE},oQ=function(e){return e.nodeType===Node.ELEMENT_NODE},uL=function(e){return oQ(e)&&typeof e.style<"u"&&!dL(e)},dL=function(e){return typeof e.className=="object"},fL=function(e){return e.tagName==="LI"},hL=function(e){return e.tagName==="OL"},pL=function(e){return e.tagName==="INPUT"},aQ=function(e){return e.tagName==="svg"},gL=function(e){return e.tagName==="BODY"},BL=function(e){return e.tagName==="CANVAS"},wL=function(e){return e.tagName==="IMG"},mL=function(e){return e.tagName==="IFRAME"},lQ=function(e){return e.tagName==="TEXTAREA"},cQ=function(e){return e.tagName==="SELECT"},CL=function(e){return e.tagName==="SLOT"},sm={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},om={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},vL={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},yL={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Yr=function(e,A,t,n,r,i){return e<A||e>t?Op(e,r,i.length>0):n.integers.reduce(function(s,o,a){for(;e>=o;)e-=o,s+=n.values[a];return s},"")+i},uQ=function(e,A,t,n){var r="";do t||e--,r=n(e)+r,e/=A;while(e*A>=A);return r},OA=function(e,A,t,n,r){var i=t-A+1;return(e<0?"-":"")+(uQ(Math.abs(e),i,n,function(s){return MA(Math.floor(s%i)+A)})+r)},nr=function(e,A,t){t===void 0&&(t=". ");var n=A.length;return uQ(Math.abs(e),n,!1,function(r){return A[Math.floor(r%n)]})+t},ei=1,pn=2,gn=4,Ks=8,Mt=function(e,A,t,n,r,i){if(e<-9999||e>9999)return Op(e,4,r.length>0);var s=Math.abs(e),o=r;if(s===0)return A[0]+o;for(var a=0;s>0&&a<=4;a++){var l=s%10;l===0&&jA(i,ei)&&o!==""?o=A[l]+o:l>1||l===1&&a===0||l===1&&a===1&&jA(i,pn)||l===1&&a===1&&jA(i,gn)&&e>100||l===1&&a>1&&jA(i,Ks)?o=A[l]+(a>0?t[a-1]:"")+o:l===1&&a>0&&(o=t[a-1]+o),s=Math.floor(s/10)}return(e<0?n:"")+o},am="十百千萬",lm="拾佰仟萬",cm="マイナス",Ed="마이너스",Op=function(e,A,t){var n=t?". ":"",r=t?"、":"",i=t?", ":"",s=t?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var o=OA(e,48,57,!0,n);return o.length<4?"0"+o:o;case 4:return nr(e,"〇一二三四五六七八九",r);case 6:return Yr(e,1,3999,sm,3,n).toLowerCase();case 7:return Yr(e,1,3999,sm,3,n);case 8:return OA(e,945,969,!1,n);case 9:return OA(e,97,122,!1,n);case 10:return OA(e,65,90,!1,n);case 11:return OA(e,1632,1641,!0,n);case 12:case 49:return Yr(e,1,9999,om,3,n);case 35:return Yr(e,1,9999,om,3,n).toLowerCase();case 13:return OA(e,2534,2543,!0,n);case 14:case 30:return OA(e,6112,6121,!0,n);case 15:return nr(e,"子丑寅卯辰巳午未申酉戌亥",r);case 16:return nr(e,"甲乙丙丁戊己庚辛壬癸",r);case 17:case 48:return Mt(e,"零一二三四五六七八九",am,"負",r,pn|gn|Ks);case 47:return Mt(e,"零壹貳參肆伍陸柒捌玖",lm,"負",r,ei|pn|gn|Ks);case 42:return Mt(e,"零一二三四五六七八九",am,"负",r,pn|gn|Ks);case 41:return Mt(e,"零壹贰叁肆伍陆柒捌玖",lm,"负",r,ei|pn|gn|Ks);case 26:return Mt(e,"〇一二三四五六七八九","十百千万",cm,r,0);case 25:return Mt(e,"零壱弐参四伍六七八九","拾百千万",cm,r,ei|pn|gn);case 31:return Mt(e,"영일이삼사오육칠팔구","십백천만",Ed,i,ei|pn|gn);case 33:return Mt(e,"零一二三四五六七八九","十百千萬",Ed,i,0);case 32:return Mt(e,"零壹貳參四五六七八九","拾百千",Ed,i,ei|pn|gn);case 18:return OA(e,2406,2415,!0,n);case 20:return Yr(e,1,19999,yL,3,n);case 21:return OA(e,2790,2799,!0,n);case 22:return OA(e,2662,2671,!0,n);case 22:return Yr(e,1,10999,vL,3,n);case 23:return nr(e,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return nr(e,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return OA(e,3302,3311,!0,n);case 28:return nr(e,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",r);case 29:return nr(e,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",r);case 34:return OA(e,3792,3801,!0,n);case 37:return OA(e,6160,6169,!0,n);case 38:return OA(e,4160,4169,!0,n);case 39:return OA(e,2918,2927,!0,n);case 40:return OA(e,1776,1785,!0,n);case 43:return OA(e,3046,3055,!0,n);case 44:return OA(e,3174,3183,!0,n);case 45:return OA(e,3664,3673,!0,n);case 46:return OA(e,3872,3881,!0,n);case 3:default:return OA(e,48,57,!0,n)}},um;(function(e){e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER"})(um||(um={}));var QL=function(){function e(){}return e.getOrigin=function(A){var t=e._link;return t?(t.href=A,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},e.isSameOrigin=function(A){return e.getOrigin(A)===e._origin},e.setContext=function(A){e._link=A.document.createElement("a"),e._origin=e.getOrigin(A.location.href)},e._origin="about:blank",e}(),k=function(){function e(A,t){this.type=0,this.x=A,this.y=t}return e.prototype.add=function(A,t){return new e(this.x+A,this.y+t)},e}(),Jr=function(e,A,t){return new k(e.x+(A.x-e.x)*t,e.y+(A.y-e.y)*t)},Ya=function(){function e(A,t,n,r){this.type=1,this.start=A,this.startControl=t,this.endControl=n,this.end=r}return e.prototype.subdivide=function(A,t){var n=Jr(this.start,this.startControl,A),r=Jr(this.startControl,this.endControl,A),i=Jr(this.endControl,this.end,A),s=Jr(n,r,A),o=Jr(r,i,A),a=Jr(s,o,A);return t?new e(this.start,n,s,a):new e(a,o,i,this.end)},e.prototype.add=function(A,t){return new e(this.start.add(A,t),this.startControl.add(A,t),this.endControl.add(A,t),this.end.add(A,t))},e.prototype.reverse=function(){return new e(this.end,this.endControl,this.startControl,this.start)},e}(),qe=function(e){return e.type===1},_L=function(){function e(A){var t=A.styles,n=A.bounds,r=Ms(t.borderTopLeftRadius,n.width,n.height),i=r[0],s=r[1],o=Ms(t.borderTopRightRadius,n.width,n.height),a=o[0],l=o[1],c=Ms(t.borderBottomRightRadius,n.width,n.height),u=c[0],d=c[1],h=Ms(t.borderBottomLeftRadius,n.width,n.height),g=h[0],w=h[1],_=[];_.push((i+a)/n.width),_.push((g+u)/n.width),_.push((s+w)/n.height),_.push((l+d)/n.height);var p=Math.max.apply(Math,_);p>1&&(i/=p,s/=p,a/=p,l/=p,u/=p,d/=p,g/=p,w/=p);var f=n.width-a,B=n.height-d,C=n.width-u,Q=n.height-w,v=t.borderTopWidth,y=t.borderRightWidth,U=t.borderBottomWidth,I=t.borderLeftWidth,H=CA(t.paddingTop,A.bounds.width),rA=CA(t.paddingRight,A.bounds.width),yA=CA(t.paddingBottom,A.bounds.width),j=CA(t.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||s>0?FA(n.left+I/3,n.top+v/3,i-I/3,s-v/3,cA.TOP_LEFT):new k(n.left+I/3,n.top+v/3),this.topRightBorderDoubleOuterBox=i>0||s>0?FA(n.left+f,n.top+v/3,a-y/3,l-v/3,cA.TOP_RIGHT):new k(n.left+n.width-y/3,n.top+v/3),this.bottomRightBorderDoubleOuterBox=u>0||d>0?FA(n.left+C,n.top+B,u-y/3,d-U/3,cA.BOTTOM_RIGHT):new k(n.left+n.width-y/3,n.top+n.height-U/3),this.bottomLeftBorderDoubleOuterBox=g>0||w>0?FA(n.left+I/3,n.top+Q,g-I/3,w-U/3,cA.BOTTOM_LEFT):new k(n.left+I/3,n.top+n.height-U/3),this.topLeftBorderDoubleInnerBox=i>0||s>0?FA(n.left+I*2/3,n.top+v*2/3,i-I*2/3,s-v*2/3,cA.TOP_LEFT):new k(n.left+I*2/3,n.top+v*2/3),this.topRightBorderDoubleInnerBox=i>0||s>0?FA(n.left+f,n.top+v*2/3,a-y*2/3,l-v*2/3,cA.TOP_RIGHT):new k(n.left+n.width-y*2/3,n.top+v*2/3),this.bottomRightBorderDoubleInnerBox=u>0||d>0?FA(n.left+C,n.top+B,u-y*2/3,d-U*2/3,cA.BOTTOM_RIGHT):new k(n.left+n.width-y*2/3,n.top+n.height-U*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||w>0?FA(n.left+I*2/3,n.top+Q,g-I*2/3,w-U*2/3,cA.BOTTOM_LEFT):new k(n.left+I*2/3,n.top+n.height-U*2/3),this.topLeftBorderStroke=i>0||s>0?FA(n.left+I/2,n.top+v/2,i-I/2,s-v/2,cA.TOP_LEFT):new k(n.left+I/2,n.top+v/2),this.topRightBorderStroke=i>0||s>0?FA(n.left+f,n.top+v/2,a-y/2,l-v/2,cA.TOP_RIGHT):new k(n.left+n.width-y/2,n.top+v/2),this.bottomRightBorderStroke=u>0||d>0?FA(n.left+C,n.top+B,u-y/2,d-U/2,cA.BOTTOM_RIGHT):new k(n.left+n.width-y/2,n.top+n.height-U/2),this.bottomLeftBorderStroke=g>0||w>0?FA(n.left+I/2,n.top+Q,g-I/2,w-U/2,cA.BOTTOM_LEFT):new k(n.left+I/2,n.top+n.height-U/2),this.topLeftBorderBox=i>0||s>0?FA(n.left,n.top,i,s,cA.TOP_LEFT):new k(n.left,n.top),this.topRightBorderBox=a>0||l>0?FA(n.left+f,n.top,a,l,cA.TOP_RIGHT):new k(n.left+n.width,n.top),this.bottomRightBorderBox=u>0||d>0?FA(n.left+C,n.top+B,u,d,cA.BOTTOM_RIGHT):new k(n.left+n.width,n.top+n.height),this.bottomLeftBorderBox=g>0||w>0?FA(n.left,n.top+Q,g,w,cA.BOTTOM_LEFT):new k(n.left,n.top+n.height),this.topLeftPaddingBox=i>0||s>0?FA(n.left+I,n.top+v,Math.max(0,i-I),Math.max(0,s-v),cA.TOP_LEFT):new k(n.left+I,n.top+v),this.topRightPaddingBox=a>0||l>0?FA(n.left+Math.min(f,n.width-y),n.top+v,f>n.width+y?0:Math.max(0,a-y),Math.max(0,l-v),cA.TOP_RIGHT):new k(n.left+n.width-y,n.top+v),this.bottomRightPaddingBox=u>0||d>0?FA(n.left+Math.min(C,n.width-I),n.top+Math.min(B,n.height-U),Math.max(0,u-y),Math.max(0,d-U),cA.BOTTOM_RIGHT):new k(n.left+n.width-y,n.top+n.height-U),this.bottomLeftPaddingBox=g>0||w>0?FA(n.left+I,n.top+Math.min(Q,n.height-U),Math.max(0,g-I),Math.max(0,w-U),cA.BOTTOM_LEFT):new k(n.left+I,n.top+n.height-U),this.topLeftContentBox=i>0||s>0?FA(n.left+I+j,n.top+v+H,Math.max(0,i-(I+j)),Math.max(0,s-(v+H)),cA.TOP_LEFT):new k(n.left+I+j,n.top+v+H),this.topRightContentBox=a>0||l>0?FA(n.left+Math.min(f,n.width+I+j),n.top+v+H,f>n.width+I+j?0:a-I+j,l-(v+H),cA.TOP_RIGHT):new k(n.left+n.width-(y+rA),n.top+v+H),this.bottomRightContentBox=u>0||d>0?FA(n.left+Math.min(C,n.width-(I+j)),n.top+Math.min(B,n.height+v+H),Math.max(0,u-(y+rA)),d-(U+yA),cA.BOTTOM_RIGHT):new k(n.left+n.width-(y+rA),n.top+n.height-(U+yA)),this.bottomLeftContentBox=g>0||w>0?FA(n.left+I+j,n.top+Q,Math.max(0,g-(I+j)),w-(U+yA),cA.BOTTOM_LEFT):new k(n.left+I+j,n.top+n.height-(U+yA))}return e}(),cA;(function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=1]="TOP_RIGHT",e[e.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",e[e.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(cA||(cA={}));var FA=function(e,A,t,n,r){var i=4*((Math.sqrt(2)-1)/3),s=t*i,o=n*i,a=e+t,l=A+n;switch(r){case cA.TOP_LEFT:return new Ya(new k(e,l),new k(e,l-o),new k(a-s,A),new k(a,A));case cA.TOP_RIGHT:return new Ya(new k(e,A),new k(e+s,A),new k(a,l-o),new k(a,l));case cA.BOTTOM_RIGHT:return new Ya(new k(a,A),new k(a,A+o),new k(e+s,l),new k(e,l));case cA.BOTTOM_LEFT:default:return new Ya(new k(a,l),new k(a-s,l),new k(e,A+o),new k(e,A))}},lc=function(e){return[e.topLeftBorderBox,e.topRightBorderBox,e.bottomRightBorderBox,e.bottomLeftBorderBox]},EL=function(e){return[e.topLeftContentBox,e.topRightContentBox,e.bottomRightContentBox,e.bottomLeftContentBox]},cc=function(e){return[e.topLeftPaddingBox,e.topRightPaddingBox,e.bottomRightPaddingBox,e.bottomLeftPaddingBox]},UL=function(){function e(A,t,n){this.offsetX=A,this.offsetY=t,this.matrix=n,this.type=0,this.target=6}return e}(),Ja=function(){function e(A,t){this.path=A,this.target=t,this.type=1}return e}(),FL=function(){function e(A){this.opacity=A,this.type=2,this.target=6}return e}(),IL=function(e){return e.type===0},dQ=function(e){return e.type===1},SL=function(e){return e.type===2},dm=function(e,A){return e.length===A.length?e.some(function(t,n){return t===A[n]}):!1},xL=function(e,A,t,n,r){return e.map(function(i,s){switch(s){case 0:return i.add(A,t);case 1:return i.add(A+n,t);case 2:return i.add(A+n,t+r);case 3:return i.add(A,t+r)}return i})},fQ=function(){function e(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return e}(),hQ=function(){function e(A,t){if(this.container=A,this.parent=t,this.effects=[],this.curves=new _L(this.container),this.container.styles.opacity<1&&this.effects.push(new FL(this.container.styles.opacity)),this.container.styles.transform!==null){var n=this.container.bounds.left+this.container.styles.transformOrigin[0].number,r=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new UL(n,r,i))}if(this.container.styles.overflowX!==0){var s=lc(this.curves),o=cc(this.curves);dm(s,o)?this.effects.push(new Ja(s,6)):(this.effects.push(new Ja(s,2)),this.effects.push(new Ja(o,4)))}}return e.prototype.getEffects=function(A){for(var t=[2,3].indexOf(this.container.styles.position)===-1,n=this.parent,r=this.effects.slice(0);n;){var i=n.effects.filter(function(a){return!dQ(a)});if(t||n.container.styles.position!==0||!n.parent){if(r.unshift.apply(r,i),t=[2,3].indexOf(n.container.styles.position)===-1,n.container.styles.overflowX!==0){var s=lc(n.curves),o=cc(n.curves);dm(s,o)||r.unshift(new Ja(o,6))}}else r.unshift.apply(r,i);n=n.parent}return r.filter(function(a){return jA(a.target,A)})},e}(),sh=function(e,A,t,n){e.container.elements.forEach(function(r){var i=jA(r.flags,4),s=jA(r.flags,2),o=new hQ(r,e);jA(r.styles.display,2048)&&n.push(o);var a=jA(r.flags,8)?[]:n;if(i||s){var l=i||r.styles.isPositioned()?t:A,c=new fQ(o);if(r.styles.isPositioned()||r.styles.opacity<1||r.styles.isTransformed()){var u=r.styles.zIndex.order;if(u<0){var d=0;l.negativeZIndex.some(function(g,w){return u>g.element.container.styles.zIndex.order?(d=w,!1):d>0}),l.negativeZIndex.splice(d,0,c)}else if(u>0){var h=0;l.positiveZIndex.some(function(g,w){return u>=g.element.container.styles.zIndex.order?(h=w+1,!1):h>0}),l.positiveZIndex.splice(h,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else r.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);sh(o,c,i?c:t,a)}else r.styles.isInlineLevel()?A.inlineLevel.push(o):A.nonInlineLevel.push(o),sh(o,A,t,a);jA(r.flags,8)&&pQ(r,a)})},pQ=function(e,A){for(var t=e instanceof ih?e.start:1,n=e instanceof ih?e.reversed:!1,r=0;r<A.length;r++){var i=A[r];i.container instanceof tQ&&typeof i.container.value=="number"&&i.container.value!==0&&(t=i.container.value),i.listValue=Op(t,i.container.styles.listStyleType,!0),t+=n?-1:1}},TL=function(e){var A=new hQ(e,null),t=new fQ(A),n=[];return sh(A,t,t,n),pQ(A.container,n),t},fm=function(e,A){switch(A){case 0:return tt(e.topLeftBorderBox,e.topLeftPaddingBox,e.topRightBorderBox,e.topRightPaddingBox);case 1:return tt(e.topRightBorderBox,e.topRightPaddingBox,e.bottomRightBorderBox,e.bottomRightPaddingBox);case 2:return tt(e.bottomRightBorderBox,e.bottomRightPaddingBox,e.bottomLeftBorderBox,e.bottomLeftPaddingBox);case 3:default:return tt(e.bottomLeftBorderBox,e.bottomLeftPaddingBox,e.topLeftBorderBox,e.topLeftPaddingBox)}},HL=function(e,A){switch(A){case 0:return tt(e.topLeftBorderBox,e.topLeftBorderDoubleOuterBox,e.topRightBorderBox,e.topRightBorderDoubleOuterBox);case 1:return tt(e.topRightBorderBox,e.topRightBorderDoubleOuterBox,e.bottomRightBorderBox,e.bottomRightBorderDoubleOuterBox);case 2:return tt(e.bottomRightBorderBox,e.bottomRightBorderDoubleOuterBox,e.bottomLeftBorderBox,e.bottomLeftBorderDoubleOuterBox);case 3:default:return tt(e.bottomLeftBorderBox,e.bottomLeftBorderDoubleOuterBox,e.topLeftBorderBox,e.topLeftBorderDoubleOuterBox)}},LL=function(e,A){switch(A){case 0:return tt(e.topLeftBorderDoubleInnerBox,e.topLeftPaddingBox,e.topRightBorderDoubleInnerBox,e.topRightPaddingBox);case 1:return tt(e.topRightBorderDoubleInnerBox,e.topRightPaddingBox,e.bottomRightBorderDoubleInnerBox,e.bottomRightPaddingBox);case 2:return tt(e.bottomRightBorderDoubleInnerBox,e.bottomRightPaddingBox,e.bottomLeftBorderDoubleInnerBox,e.bottomLeftPaddingBox);case 3:default:return tt(e.bottomLeftBorderDoubleInnerBox,e.bottomLeftPaddingBox,e.topLeftBorderDoubleInnerBox,e.topLeftPaddingBox)}},kL=function(e,A){switch(A){case 0:return Za(e.topLeftBorderStroke,e.topRightBorderStroke);case 1:return Za(e.topRightBorderStroke,e.bottomRightBorderStroke);case 2:return Za(e.bottomRightBorderStroke,e.bottomLeftBorderStroke);case 3:default:return Za(e.bottomLeftBorderStroke,e.topLeftBorderStroke)}},Za=function(e,A){var t=[];return qe(e)?t.push(e.subdivide(.5,!1)):t.push(e),qe(A)?t.push(A.subdivide(.5,!0)):t.push(A),t},tt=function(e,A,t,n){var r=[];return qe(e)?r.push(e.subdivide(.5,!1)):r.push(e),qe(t)?r.push(t.subdivide(.5,!0)):r.push(t),qe(n)?r.push(n.subdivide(.5,!0).reverse()):r.push(n),qe(A)?r.push(A.subdivide(.5,!1).reverse()):r.push(A),r},gQ=function(e){var A=e.bounds,t=e.styles;return A.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},uc=function(e){var A=e.styles,t=e.bounds,n=CA(A.paddingLeft,t.width),r=CA(A.paddingRight,t.width),i=CA(A.paddingTop,t.width),s=CA(A.paddingBottom,t.width);return t.add(n+A.borderLeftWidth,i+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+n+r),-(A.borderTopWidth+A.borderBottomWidth+i+s))},bL=function(e,A){return e===0?A.bounds:e===2?uc(A):gQ(A)},DL=function(e,A){return e===0?A.bounds:e===2?uc(A):gQ(A)},Ud=function(e,A,t){var n=bL(ti(e.styles.backgroundOrigin,A),e),r=DL(ti(e.styles.backgroundClip,A),e),i=NL(ti(e.styles.backgroundSize,A),t,n),s=i[0],o=i[1],a=Ms(ti(e.styles.backgroundPosition,A),n.width-s,n.height-o),l=RL(ti(e.styles.backgroundRepeat,A),a,i,n,r),c=Math.round(n.left+a[0]),u=Math.round(n.top+a[1]);return[l,c,u,s,o]},Zr=function(e){return DA(e)&&e.value===Ei.AUTO},qa=function(e){return typeof e=="number"},NL=function(e,A,t){var n=A[0],r=A[1],i=A[2],s=e[0],o=e[1];if(!s)return[0,0];if(VA(s)&&o&&VA(o))return[CA(s,t.width),CA(o,t.height)];var a=qa(i);if(DA(s)&&(s.value===Ei.CONTAIN||s.value===Ei.COVER)){if(qa(i)){var l=t.width/t.height;return l<i!=(s.value===Ei.COVER)?[t.width,t.width/i]:[t.height*i,t.height]}return[t.width,t.height]}var c=qa(n),u=qa(r),d=c||u;if(Zr(s)&&(!o||Zr(o))){if(c&&u)return[n,r];if(!a&&!d)return[t.width,t.height];if(d&&a){var h=c?n:r*i,g=u?r:n/i;return[h,g]}var w=c?n:t.width,_=u?r:t.height;return[w,_]}if(a){var p=0,f=0;return VA(s)?p=CA(s,t.width):VA(o)&&(f=CA(o,t.height)),Zr(s)?p=f*i:(!o||Zr(o))&&(f=p/i),[p,f]}var B=null,C=null;if(VA(s)?B=CA(s,t.width):o&&VA(o)&&(C=CA(o,t.height)),B!==null&&(!o||Zr(o))&&(C=c&&u?B/n*r:t.height),C!==null&&Zr(s)&&(B=c&&u?C/r*n:t.width),B!==null&&C!==null)return[B,C];throw new Error("Unable to calculate background-size for element")},ti=function(e,A){var t=e[A];return typeof t>"u"?e[0]:t},RL=function(e,A,t,n,r){var i=A[0],s=A[1],o=t[0],a=t[1];switch(e){case 2:return[new k(Math.round(n.left),Math.round(n.top+s)),new k(Math.round(n.left+n.width),Math.round(n.top+s)),new k(Math.round(n.left+n.width),Math.round(a+n.top+s)),new k(Math.round(n.left),Math.round(a+n.top+s))];case 3:return[new k(Math.round(n.left+i),Math.round(n.top)),new k(Math.round(n.left+i+o),Math.round(n.top)),new k(Math.round(n.left+i+o),Math.round(n.height+n.top)),new k(Math.round(n.left+i),Math.round(n.height+n.top))];case 1:return[new k(Math.round(n.left+i),Math.round(n.top+s)),new k(Math.round(n.left+i+o),Math.round(n.top+s)),new k(Math.round(n.left+i+o),Math.round(n.top+s+a)),new k(Math.round(n.left+i),Math.round(n.top+s+a))];default:return[new k(Math.round(r.left),Math.round(r.top)),new k(Math.round(r.left+r.width),Math.round(r.top)),new k(Math.round(r.left+r.width),Math.round(r.height+r.top)),new k(Math.round(r.left),Math.round(r.height+r.top))]}},OL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",hm="Hidden Text",ML=function(){function e(A){this._data={},this._document=A}return e.prototype.parseMetrics=function(A,t){var n=this._document.createElement("div"),r=this._document.createElement("img"),i=this._document.createElement("span"),s=this._document.body;n.style.visibility="hidden",n.style.fontFamily=A,n.style.fontSize=t,n.style.margin="0",n.style.padding="0",n.style.whiteSpace="nowrap",s.appendChild(n),r.src=OL,r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",i.style.fontFamily=A,i.style.fontSize=t,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(hm)),n.appendChild(i),n.appendChild(r);var o=r.offsetTop-i.offsetTop+2;n.removeChild(i),n.appendChild(this._document.createTextNode(hm)),n.style.lineHeight="normal",r.style.verticalAlign="super";var a=r.offsetTop-n.offsetTop+2;return s.removeChild(n),{baseline:o,middle:a}},e.prototype.getMetrics=function(A,t){var n=A+" "+t;return typeof this._data[n]>"u"&&(this._data[n]=this.parseMetrics(A,t)),this._data[n]},e}(),BQ=function(){function e(A,t){this.context=A,this.options=t}return e}(),PL=1e4;(function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r._activeEffects=[],r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),n.canvas||(r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px"),r.fontMetrics=new ML(document),r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.ctx.textBaseline="bottom",r._activeEffects=[],r.context.logger.debug("Canvas renderer initialized ("+n.width+"x"+n.height+") with scale "+n.scale),r}return A.prototype.applyEffects=function(t){for(var n=this;this._activeEffects.length;)this.popEffect();t.forEach(function(r){return n.applyEffect(r)})},A.prototype.applyEffect=function(t){this.ctx.save(),SL(t)&&(this.ctx.globalAlpha=t.opacity),IL(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),dQ(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(t){return Xe(this,void 0,void 0,function(){var n;return Ne(this,function(r){switch(r.label){case 0:return n=t.element.container.styles,n.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(t){return Xe(this,void 0,void 0,function(){return Ne(this,function(n){switch(n.label){case 0:if(jA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return n.sent(),[4,this.renderNodeContent(t)];case 2:n.sent(),n.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(t,n,r){var i=this;if(n===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+r);else{var s=Np(t.text);s.reduce(function(o,a){return i.ctx.fillText(a,o,t.bounds.top+r),o+i.ctx.measureText(a).width},t.bounds.left)}},A.prototype.createFontStyle=function(t){var n=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),r=jL(t.fontFamily).join(", "),i=Jo(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,n,t.fontWeight,i,r].join(" "),r,i]},A.prototype.renderTextNode=function(t,n){return Xe(this,void 0,void 0,function(){var r,i,s,o,a,l,c,u,d=this;return Ne(this,function(h){return r=this.createFontStyle(n),i=r[0],s=r[1],o=r[2],this.ctx.font=i,this.ctx.direction=n.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",a=this.fontMetrics.getMetrics(s,o),l=a.baseline,c=a.middle,u=n.paintOrder,t.textBounds.forEach(function(g){u.forEach(function(w){switch(w){case 0:d.ctx.fillStyle=ZA(n.color),d.renderTextWithLetterSpacing(g,n.letterSpacing,l);var _=n.textShadow;_.length&&g.text.trim().length&&(_.slice(0).reverse().forEach(function(p){d.ctx.shadowColor=ZA(p.color),d.ctx.shadowOffsetX=p.offsetX.number*d.options.scale,d.ctx.shadowOffsetY=p.offsetY.number*d.options.scale,d.ctx.shadowBlur=p.blur.number,d.renderTextWithLetterSpacing(g,n.letterSpacing,l)}),d.ctx.shadowColor="",d.ctx.shadowOffsetX=0,d.ctx.shadowOffsetY=0,d.ctx.shadowBlur=0),n.textDecorationLine.length&&(d.ctx.fillStyle=ZA(n.textDecorationColor||n.color),n.textDecorationLine.forEach(function(p){switch(p){case 1:d.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:d.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:d.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:n.webkitTextStrokeWidth&&g.text.trim().length&&(d.ctx.strokeStyle=ZA(n.webkitTextStrokeColor),d.ctx.lineWidth=n.webkitTextStrokeWidth,d.ctx.lineJoin=window.chrome?"miter":"round",d.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),d.ctx.strokeStyle="",d.ctx.lineWidth=0,d.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(t,n,r){if(r&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var i=uc(t),s=cc(n);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(r,0,0,t.intrinsicWidth,t.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(t){return Xe(this,void 0,void 0,function(){var n,r,i,s,o,a,f,f,l,c,u,d,C,h,g,Q,w,_,p,f,B,C,Q;return Ne(this,function(v){switch(v.label){case 0:this.applyEffects(t.getEffects(4)),n=t.container,r=t.curves,i=n.styles,s=0,o=n.textNodes,v.label=1;case 1:return s<o.length?(a=o[s],[4,this.renderTextNode(a,i)]):[3,4];case 2:v.sent(),v.label=3;case 3:return s++,[3,1];case 4:if(!(n instanceof qy))return[3,8];v.label=5;case 5:return v.trys.push([5,7,,8]),[4,this.context.cache.match(n.src)];case 6:return f=v.sent(),this.renderReplacedElement(n,r,f),[3,8];case 7:return v.sent(),this.context.logger.error("Error loading image "+n.src),[3,8];case 8:if(n instanceof AQ&&this.renderReplacedElement(n,r,n.canvas),!(n instanceof eQ))return[3,12];v.label=9;case 9:return v.trys.push([9,11,,12]),[4,this.context.cache.match(n.svg)];case 10:return f=v.sent(),this.renderReplacedElement(n,r,f),[3,12];case 11:return v.sent(),this.context.logger.error("Error loading svg "+n.svg.substring(0,255)),[3,12];case 12:return n instanceof iQ&&n.tree?(l=new A(this.context,{scale:this.options.scale,backgroundColor:n.backgroundColor,x:0,y:0,width:n.width,height:n.height}),[4,l.render(n.tree)]):[3,14];case 13:c=v.sent(),n.width&&n.height&&this.ctx.drawImage(c,0,0,n.width,n.height,n.bounds.left,n.bounds.top,n.bounds.width,n.bounds.height),v.label=14;case 14:if(n instanceof Rp&&(u=Math.min(n.bounds.width,n.bounds.height),n.type===oc?n.checked&&(this.ctx.save(),this.path([new k(n.bounds.left+u*.39363,n.bounds.top+u*.79),new k(n.bounds.left+u*.16,n.bounds.top+u*.5549),new k(n.bounds.left+u*.27347,n.bounds.top+u*.44071),new k(n.bounds.left+u*.39694,n.bounds.top+u*.5649),new k(n.bounds.left+u*.72983,n.bounds.top+u*.23),new k(n.bounds.left+u*.84,n.bounds.top+u*.34085),new k(n.bounds.left+u*.39363,n.bounds.top+u*.79)]),this.ctx.fillStyle=ZA(im),this.ctx.fill(),this.ctx.restore()):n.type===ac&&n.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.bounds.left+u/2,n.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=ZA(im),this.ctx.fill(),this.ctx.restore())),KL(n)&&n.value.length){switch(d=this.createFontStyle(i),C=d[0],h=d[1],g=this.fontMetrics.getMetrics(C,h).baseline,this.ctx.font=C,this.ctx.fillStyle=ZA(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=GL(n.styles.textAlign),Q=uc(n),w=0,n.styles.textAlign){case 1:w+=Q.width/2;break;case 2:w+=Q.width;break}_=Q.add(w,0,0,-Q.height/2+1),this.ctx.save(),this.path([new k(Q.left,Q.top),new k(Q.left+Q.width,Q.top),new k(Q.left+Q.width,Q.top+Q.height),new k(Q.left,Q.top+Q.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new no(n.value,_),i.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!jA(n.styles.display,2048))return[3,20];if(n.styles.listStyleImage===null)return[3,19];if(p=n.styles.listStyleImage,p.type!==0)return[3,18];f=void 0,B=p.url,v.label=15;case 15:return v.trys.push([15,17,,18]),[4,this.context.cache.match(B)];case 16:return f=v.sent(),this.ctx.drawImage(f,n.bounds.left-(f.width+10),n.bounds.top),[3,18];case 17:return v.sent(),this.context.logger.error("Error loading list-style-image "+B),[3,18];case 18:return[3,20];case 19:t.listValue&&n.styles.listStyleType!==-1&&(C=this.createFontStyle(i)[0],this.ctx.font=C,this.ctx.fillStyle=ZA(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",Q=new xr(n.bounds.left,n.bounds.top+CA(n.styles.paddingTop,n.bounds.width),n.bounds.width,Vw(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new no(t.listValue,Q),i.letterSpacing,Vw(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),v.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(t){return Xe(this,void 0,void 0,function(){var n,r,p,i,s,p,o,a,p,l,c,p,u,d,p,h,g,p,w,_,p;return Ne(this,function(f){switch(f.label){case 0:if(jA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:f.sent(),n=0,r=t.negativeZIndex,f.label=2;case 2:return n<r.length?(p=r[n],[4,this.renderStack(p)]):[3,5];case 3:f.sent(),f.label=4;case 4:return n++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:f.sent(),i=0,s=t.nonInlineLevel,f.label=7;case 7:return i<s.length?(p=s[i],[4,this.renderNode(p)]):[3,10];case 8:f.sent(),f.label=9;case 9:return i++,[3,7];case 10:o=0,a=t.nonPositionedFloats,f.label=11;case 11:return o<a.length?(p=a[o],[4,this.renderStack(p)]):[3,14];case 12:f.sent(),f.label=13;case 13:return o++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,f.label=15;case 15:return l<c.length?(p=c[l],[4,this.renderStack(p)]):[3,18];case 16:f.sent(),f.label=17;case 17:return l++,[3,15];case 18:u=0,d=t.inlineLevel,f.label=19;case 19:return u<d.length?(p=d[u],[4,this.renderNode(p)]):[3,22];case 20:f.sent(),f.label=21;case 21:return u++,[3,19];case 22:h=0,g=t.zeroOrAutoZIndexOrTransformedOrOpacity,f.label=23;case 23:return h<g.length?(p=g[h],[4,this.renderStack(p)]):[3,26];case 24:f.sent(),f.label=25;case 25:return h++,[3,23];case 26:w=0,_=t.positiveZIndex,f.label=27;case 27:return w<_.length?(p=_[w],[4,this.renderStack(p)]):[3,30];case 28:f.sent(),f.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},A.prototype.formatPath=function(t){var n=this;t.forEach(function(r,i){var s=qe(r)?r.start:r;i===0?n.ctx.moveTo(s.x,s.y):n.ctx.lineTo(s.x,s.y),qe(r)&&n.ctx.bezierCurveTo(r.startControl.x,r.startControl.y,r.endControl.x,r.endControl.y,r.end.x,r.end.y)})},A.prototype.renderRepeat=function(t,n,r,i){this.path(t),this.ctx.fillStyle=n,this.ctx.translate(r,i),this.ctx.fill(),this.ctx.translate(-r,-i)},A.prototype.resizeImage=function(t,n,r){var i;if(t.width===n&&t.height===r)return t;var s=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,o=s.createElement("canvas");o.width=Math.max(1,n),o.height=Math.max(1,r);var a=o.getContext("2d");return a.drawImage(t,0,0,t.width,t.height,0,0,n,r),o},A.prototype.renderBackgroundImage=function(t){return Xe(this,void 0,void 0,function(){var n,r,i,s,o,a;return Ne(this,function(l){switch(l.label){case 0:n=t.styles.backgroundImage.length-1,r=function(c){var u,d,h,H,QA,gA,j,BA,U,g,H,QA,gA,j,BA,w,_,p,f,B,C,Q,v,y,U,I,H,rA,yA,j,BA,YA,QA,gA,T,R,M,tA,q,x,O,K;return Ne(this,function(P){switch(P.label){case 0:if(c.type!==0)return[3,5];u=void 0,d=c.url,P.label=1;case 1:return P.trys.push([1,3,,4]),[4,i.context.cache.match(d)];case 2:return u=P.sent(),[3,4];case 3:return P.sent(),i.context.logger.error("Error loading background-image "+d),[3,4];case 4:return u&&(h=Ud(t,n,[u.width,u.height,u.width/u.height]),H=h[0],QA=h[1],gA=h[2],j=h[3],BA=h[4],U=i.ctx.createPattern(i.resizeImage(u,j,BA),"repeat"),i.renderRepeat(H,U,QA,gA)),[3,6];case 5:Gx(c)?(g=Ud(t,n,[null,null,null]),H=g[0],QA=g[1],gA=g[2],j=g[3],BA=g[4],w=Ox(c.angle,j,BA),_=w[0],p=w[1],f=w[2],B=w[3],C=w[4],Q=document.createElement("canvas"),Q.width=j,Q.height=BA,v=Q.getContext("2d"),y=v.createLinearGradient(p,B,f,C),Pw(c.stops,_).forEach(function($){return y.addColorStop($.stop,ZA($.color))}),v.fillStyle=y,v.fillRect(0,0,j,BA),j>0&&BA>0&&(U=i.ctx.createPattern(Q,"repeat"),i.renderRepeat(H,U,QA,gA))):Wx(c)&&(I=Ud(t,n,[null,null,null]),H=I[0],rA=I[1],yA=I[2],j=I[3],BA=I[4],YA=c.position.length===0?[kp]:c.position,QA=CA(YA[0],j),gA=CA(YA[YA.length-1],BA),T=Mx(c,QA,gA,j,BA),R=T[0],M=T[1],R>0&&M>0&&(tA=i.ctx.createRadialGradient(rA+QA,yA+gA,0,rA+QA,yA+gA,R),Pw(c.stops,R*2).forEach(function($){return tA.addColorStop($.stop,ZA($.color))}),i.path(H),i.ctx.fillStyle=tA,R!==M?(q=t.bounds.left+.5*t.bounds.width,x=t.bounds.top+.5*t.bounds.height,O=M/R,K=1/O,i.ctx.save(),i.ctx.translate(q,x),i.ctx.transform(1,0,0,O,0,0),i.ctx.translate(-q,-x),i.ctx.fillRect(rA,K*(yA-x)+x,j,BA*K),i.ctx.restore()):i.ctx.fill())),P.label=6;case 6:return n--,[2]}})},i=this,s=0,o=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<o.length?(a=o[s],[5,r(a)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(t,n,r){return Xe(this,void 0,void 0,function(){return Ne(this,function(i){return this.path(fm(r,n)),this.ctx.fillStyle=ZA(t),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(t,n,r,i){return Xe(this,void 0,void 0,function(){var s,o;return Ne(this,function(a){switch(a.label){case 0:return n<3?[4,this.renderSolidBorder(t,r,i)]:[3,2];case 1:return a.sent(),[2];case 2:return s=HL(i,r),this.path(s),this.ctx.fillStyle=ZA(t),this.ctx.fill(),o=LL(i,r),this.path(o),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(t){return Xe(this,void 0,void 0,function(){var n,r,i,s,o,a,l,c,u=this;return Ne(this,function(d){switch(d.label){case 0:return this.applyEffects(t.getEffects(2)),n=t.container.styles,r=!_i(n.backgroundColor)||n.backgroundImage.length,i=[{style:n.borderTopStyle,color:n.borderTopColor,width:n.borderTopWidth},{style:n.borderRightStyle,color:n.borderRightColor,width:n.borderRightWidth},{style:n.borderBottomStyle,color:n.borderBottomColor,width:n.borderBottomWidth},{style:n.borderLeftStyle,color:n.borderLeftColor,width:n.borderLeftWidth}],s=VL(ti(n.backgroundClip,0),t.curves),r||n.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),_i(n.backgroundColor)||(this.ctx.fillStyle=ZA(n.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:d.sent(),this.ctx.restore(),n.boxShadow.slice(0).reverse().forEach(function(h){u.ctx.save();var g=lc(t.curves),w=h.inset?0:PL,_=xL(g,-w+(h.inset?1:-1)*h.spread.number,(h.inset?1:-1)*h.spread.number,h.spread.number*(h.inset?-2:2),h.spread.number*(h.inset?-2:2));h.inset?(u.path(g),u.ctx.clip(),u.mask(_)):(u.mask(g),u.ctx.clip(),u.path(_)),u.ctx.shadowOffsetX=h.offsetX.number+w,u.ctx.shadowOffsetY=h.offsetY.number,u.ctx.shadowColor=ZA(h.color),u.ctx.shadowBlur=h.blur.number,u.ctx.fillStyle=h.inset?ZA(h.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),d.label=2;case 2:o=0,a=0,l=i,d.label=3;case 3:return a<l.length?(c=l[a],c.style!==0&&!_i(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,o,t.curves,2)]:[3,11]):[3,13];case 4:return d.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,o,t.curves,3)];case 6:return d.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,o,t.curves)];case 8:return d.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,o,t.curves)];case 10:d.sent(),d.label=11;case 11:o++,d.label=12;case 12:return a++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(t,n,r,i,s){return Xe(this,void 0,void 0,function(){var o,a,l,c,u,d,h,g,w,_,p,f,B,C,Q,v,Q,v;return Ne(this,function(y){return this.ctx.save(),o=kL(i,r),a=fm(i,r),s===2&&(this.path(a),this.ctx.clip()),qe(a[0])?(l=a[0].start.x,c=a[0].start.y):(l=a[0].x,c=a[0].y),qe(a[1])?(u=a[1].end.x,d=a[1].end.y):(u=a[1].x,d=a[1].y),r===0||r===2?h=Math.abs(l-u):h=Math.abs(c-d),this.ctx.beginPath(),s===3?this.formatPath(o):this.formatPath(a.slice(0,2)),g=n<3?n*3:n*2,w=n<3?n*2:n,s===3&&(g=n,w=n),_=!0,h<=g*2?_=!1:h<=g*2+w?(p=h/(2*g+w),g*=p,w*=p):(f=Math.floor((h+w)/(g+w)),B=(h-f*g)/(f-1),C=(h-(f+1)*g)/f,w=C<=0||Math.abs(w-B)<Math.abs(w-C)?B:C),_&&(s===3?this.ctx.setLineDash([0,g+w]):this.ctx.setLineDash([g,w])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=n):this.ctx.lineWidth=n*2+1.1,this.ctx.strokeStyle=ZA(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(qe(a[0])&&(Q=a[3],v=a[0],this.ctx.beginPath(),this.formatPath([new k(Q.end.x,Q.end.y),new k(v.start.x,v.start.y)]),this.ctx.stroke()),qe(a[1])&&(Q=a[1],v=a[2],this.ctx.beginPath(),this.formatPath([new k(Q.end.x,Q.end.y),new k(v.start.x,v.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(t){return Xe(this,void 0,void 0,function(){var n;return Ne(this,function(r){switch(r.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ZA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),n=TL(t),[4,this.renderStack(n)];case 1:return r.sent(),this.applyEffects([]),[2,this.canvas]}})})},A})(BQ);var KL=function(e){return e instanceof rQ||e instanceof nQ?!0:e instanceof Rp&&e.type!==ac&&e.type!==oc},VL=function(e,A){switch(e){case 0:return lc(A);case 2:return EL(A);case 1:default:return cc(A)}},GL=function(e){switch(e){case 1:return"center";case 2:return"right";case 0:default:return"left"}},WL=["-apple-system","system-ui"],jL=function(e){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?e.filter(function(A){return WL.indexOf(A)===-1}):e};(function(e){_t(A,e);function A(t,n){var r=e.call(this,t,n)||this;return r.canvas=n.canvas?n.canvas:document.createElement("canvas"),r.ctx=r.canvas.getContext("2d"),r.options=n,r.canvas.width=Math.floor(n.width*n.scale),r.canvas.height=Math.floor(n.height*n.scale),r.canvas.style.width=n.width+"px",r.canvas.style.height=n.height+"px",r.ctx.scale(r.options.scale,r.options.scale),r.ctx.translate(-n.x,-n.y),r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+n.width+"x"+n.height+" at "+n.x+","+n.y+") with scale "+n.scale),r}return A.prototype.render=function(t){return Xe(this,void 0,void 0,function(){var n,r;return Ne(this,function(i){switch(i.label){case 0:return n=rh(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,zL(n)];case 1:return r=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ZA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(r,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A})(BQ);var zL=function(e){return new Promise(function(A,t){var n=new Image;n.onload=function(){A(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(e))})};typeof window<"u"&&QL.setContext(window);function $L(){const e=L.useRef(null),[A,t]=L.useState(null);return L.useEffect(()=>{const n=document.createElement("div");return e.current=n,document.body.appendChild(n),e.current&&t(e.current),()=>{document.body.removeChild(n)}},[]),A}const yn=({active:e,setActive:A,children:t})=>{const n=()=>{A(!1)},r=$L();return r&&fI.createPortal(m.jsx("div",{className:e?"modal active":"modal",onClick:n,children:m.jsx("div",{className:e?"modal_content active":"modal_content",onClick:i=>i.stopPropagation(),children:t})}),r)};yn.propTypes={active:ar.bool,setActive:ar.func,children:ar.oneOfType([ar.object,ar.array])};const XL=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,YL=XL?"dark":"light",JL=()=>{const[e,A]=L.useState(localStorage.getItem("app-theme")||YL);return L.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("app-theme",e)},[e]),{theme:e,setTheme:A}};var re=[];for(var Fd=0;Fd<256;++Fd)re.push((Fd+256).toString(16).slice(1));function ZL(e,A=0){return(re[e[A+0]]+re[e[A+1]]+re[e[A+2]]+re[e[A+3]]+"-"+re[e[A+4]]+re[e[A+5]]+"-"+re[e[A+6]]+re[e[A+7]]+"-"+re[e[A+8]]+re[e[A+9]]+"-"+re[e[A+10]]+re[e[A+11]]+re[e[A+12]]+re[e[A+13]]+re[e[A+14]]+re[e[A+15]]).toLowerCase()}var Al,qL=new Uint8Array(16);function Ak(){if(!Al&&(Al=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Al))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Al(qL)}var ek=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const pm={randomUUID:ek};function tk(e,A,t){if(pm.randomUUID&&!A&&!e)return pm.randomUUID();e=e||{};var n=e.random||(e.rng||Ak)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,ZL(n)}const Id={1:"09.00 - 09.45",2:"09.55 - 10.40",3:"10.50 - 11.35",4:"11.45 - 12.30",5:"12.40 - 13.25",6:"13.35 - 14.20",7:"14.30 - 15.15",8:"15.25 - 16.10",9:"16.20 - 17.05",10:"17.15 - 18.00",11:"18.10 - 18.55"},nk=D.button`
  background-color: ${e=>e.isToggled?"lightgreen":"honeydew"};
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
`,rk=({handleClick:e,displayName:A,displayNameAlt:t})=>{const[n,r]=L.useState(!1),i=()=>{e(),r(s=>!s)};return m.jsx(nk,{isToggled:n,onClick:i,children:n?A||"Название":t||"Алтернативное название"})},ik=()=>{};var gm={};/**
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
 */const wQ={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(e,A){if(!e)throw ts(A)},ts=function(e){return new Error("Firebase Database ("+wQ.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const mQ=function(e){const A=[];let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?A[t++]=r:r<2048?(A[t++]=r>>6|192,A[t++]=r&63|128):(r&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++n)&1023),A[t++]=r>>18|240,A[t++]=r>>12&63|128,A[t++]=r>>6&63|128,A[t++]=r&63|128):(A[t++]=r>>12|224,A[t++]=r>>6&63|128,A[t++]=r&63|128)}return A},sk=function(e){const A=[];let t=0,n=0;for(;t<e.length;){const r=e[t++];if(r<128)A[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[t++];A[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[t++],s=e[t++],o=e[t++],a=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;A[n++]=String.fromCharCode(55296+(a>>10)),A[n++]=String.fromCharCode(56320+(a&1023))}else{const i=e[t++],s=e[t++];A[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return A.join("")},Mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,A){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=A?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<e.length;r+=3){const i=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=i>>2,u=(i&3)<<4|o>>4;let d=(o&15)<<2|l>>6,h=l&63;a||(h=64,s||(d=64)),n.push(t[c],t[u],t[d],t[h])}return n.join("")},encodeString(e,A){return this.HAS_NATIVE_SUPPORT&&!A?btoa(e):this.encodeByteArray(mQ(e),A)},decodeString(e,A){return this.HAS_NATIVE_SUPPORT&&!A?atob(e):sk(this.decodeStringToByteArray(e,A))},decodeStringToByteArray(e,A){this.init_();const t=A?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<e.length;){const i=t[e.charAt(r++)],o=r<e.length?t[e.charAt(r)]:0;++r;const l=r<e.length?t[e.charAt(r)]:64;++r;const u=r<e.length?t[e.charAt(r)]:64;if(++r,i==null||o==null||l==null||u==null)throw new ok;const d=i<<2|o>>4;if(n.push(d),l!==64){const h=o<<4&240|l>>2;if(n.push(h),u!==64){const g=l<<6&192|u;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CQ=function(e){const A=mQ(e);return Mp.encodeByteArray(A,!0)},dc=function(e){return CQ(e).replace(/\./g,"")},fc=function(e){try{return Mp.decodeString(e,!0)}catch(A){console.error("base64Decode failed: ",A)}return null};/**
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
 */function ak(e){return vQ(void 0,e)}function vQ(e,A){if(!(A instanceof Object))return A;switch(A.constructor){case Date:const t=A;return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return A}for(const t in A)!A.hasOwnProperty(t)||!lk(t)||(e[t]=vQ(e[t],A[t]));return e}function lk(e){return e!=="__proto__"}/**
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
 */function ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uk=()=>ck().__FIREBASE_DEFAULTS__,dk=()=>{if(typeof process>"u"||typeof gm>"u")return;const e=gm.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const A=e&&fc(e[1]);return A&&JSON.parse(A)},Pp=()=>{try{return ik()||uk()||dk()||fk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yQ=e=>{var A,t;return(t=(A=Pp())==null?void 0:A.emulatorHosts)==null?void 0:t[e]},hk=e=>{const A=yQ(e);if(!A)return;const t=A.lastIndexOf(":");if(t<=0||t+1===A.length)throw new Error(`Invalid host ${A} with no separate hostname and port!`);const n=parseInt(A.substring(t+1),10);return A[0]==="["?[A.substring(1,t-1),n]:[A.substring(0,t),n]},QQ=()=>{var e;return(e=Pp())==null?void 0:e.config},_Q=e=>{var A;return(A=Pp())==null?void 0:A[`_${e}`]};/**
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
 */class Zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((A,t)=>{this.resolve=A,this.reject=t})}wrapCallback(A){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof A=="function"&&(this.promise.catch(()=>{}),A.length===1?A(t):A(t,n))}}}/**
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
 */function ns(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function EQ(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function pk(e,A){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=A||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[dc(JSON.stringify(t)),dc(JSON.stringify(s)),""].join(".")}const ro={};function gk(){const e={prod:[],emulator:[]};for(const A of Object.keys(ro))ro[A]?e.emulator.push(A):e.prod.push(A);return e}function Bk(e){let A=document.getElementById(e),t=!1;return A||(A=document.createElement("div"),A.setAttribute("id",e),t=!0),{created:t,element:A}}let Bm=!1;function UQ(e,A){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||ro[e]===A||ro[e]||Bm)return;ro[e]=A;function t(d){return`__firebase__banner__${d}`}const n="__firebase__banner",i=gk().prod.length>0;function s(){const d=document.getElementById(n);d&&d.remove()}function o(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,h){d.setAttribute("width","24"),d.setAttribute("id",h),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Bm=!0,s()},d}function c(d,h){d.setAttribute("id",h),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=Bk(n),h=t("text"),g=document.getElementById(h)||document.createElement("span"),w=t("learnmore"),_=document.getElementById(w)||document.createElement("a"),p=t("preprendIcon"),f=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const B=d.element;o(B),c(_,w);const C=l();a(f,p),B.append(f,g,_,C),document.body.appendChild(B)}i?(g.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function wk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function FQ(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ck(){const e=Qe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function IQ(){return wQ.NODE_ADMIN===!0}function vk(){try{return typeof indexedDB=="object"}catch{return!1}}function yk(){return new Promise((e,A)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;A(((i=r.error)==null?void 0:i.message)||"")}}catch(t){A(t)}})}/**
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
 */const Qk="FirebaseError";class er extends Error{constructor(A,t,n){super(t),this.code=A,this.customData=n,this.name=Qk,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(A,t,n){this.service=A,this.serviceName=t,this.errors=n}create(A,...t){const n=t[0]||{},r=`${this.service}/${A}`,i=this.errors[A],s=i?_k(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new er(r,o,n)}}function _k(e,A){return e.replace(Ek,(t,n)=>{const r=A[n];return r!=null?String(r):`<${n}?>`})}const Ek=/\{\$([^}]+)}/g;/**
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
 */function Lo(e){return JSON.parse(e)}function $A(e){return JSON.stringify(e)}/**
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
 */const SQ=function(e){let A={},t={},n={},r="";try{const i=e.split(".");A=Lo(fc(i[0])||""),t=Lo(fc(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:A,claims:t,data:n,signature:r}},Uk=function(e){const A=SQ(e),t=A.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fk=function(e){const A=SQ(e).claims;return typeof A=="object"&&A.admin===!0};/**
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
 */function Dt(e,A){return Object.prototype.hasOwnProperty.call(e,A)}function Gi(e,A){if(Object.prototype.hasOwnProperty.call(e,A))return e[A]}function oh(e){for(const A in e)if(Object.prototype.hasOwnProperty.call(e,A))return!1;return!0}function hc(e,A,t){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=A.call(t,e[r],r,e));return n}function Tr(e,A){if(e===A)return!0;const t=Object.keys(e),n=Object.keys(A);for(const r of t){if(!n.includes(r))return!1;const i=e[r],s=A[r];if(wm(i)&&wm(s)){if(!Tr(i,s))return!1}else if(i!==s)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function wm(e){return e!==null&&typeof e=="object"}/**
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
 */function rs(e){const A=[];for(const[t,n]of Object.entries(e))Array.isArray(n)?n.forEach(r=>{A.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):A.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return A.length?"&"+A.join("&"):""}/**
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
 */class Ik{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let A=1;A<this.blockSize;++A)this.pad_[A]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(A,t){t||(t=0);const n=this.W_;if(typeof A=="string")for(let u=0;u<16;u++)n[u]=A.charCodeAt(t)<<24|A.charCodeAt(t+1)<<16|A.charCodeAt(t+2)<<8|A.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=A[t]<<24|A[t+1]<<16|A[t+2]<<8|A[t+3],t+=4;for(let u=16;u<80;u++){const d=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],s=this.chain_[2],o=this.chain_[3],a=this.chain_[4],l,c;for(let u=0;u<80;u++){u<40?u<20?(l=o^i&(s^o),c=1518500249):(l=i^s^o,c=1859775393):u<60?(l=i&s|o&(i|s),c=2400959708):(l=i^s^o,c=3395469782);const d=(r<<5|r>>>27)+l+a+c+n[u]&4294967295;a=o,o=s,s=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(A,t){if(A==null)return;t===void 0&&(t=A.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(s===0)for(;r<=n;)this.compress_(A,r),r+=this.blockSize;if(typeof A=="string"){for(;r<t;)if(i[s]=A.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=A[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const A=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)A[n]=this.chain_[r]>>i&255,++n;return A}}function Sk(e,A){const t=new xk(e,A);return t.subscribe.bind(t)}class xk{constructor(A,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{A(this)}).catch(n=>{this.error(n)})}next(A){this.forEachObserver(t=>{t.next(A)})}error(A){this.forEachObserver(t=>{t.error(A)}),this.close(A)}complete(){this.forEachObserver(A=>{A.complete()}),this.close()}subscribe(A,t,n){let r;if(A===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Tk(A,["next","error","complete"])?r=A:r={next:A,error:t,complete:n},r.next===void 0&&(r.next=Sd),r.error===void 0&&(r.error=Sd),r.complete===void 0&&(r.complete=Sd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(A){this.observers===void 0||this.observers[A]===void 0||(delete this.observers[A],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(A){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,A)}sendOne(A,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[A]!==void 0)try{t(this.observers[A])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(A){this.finalized||(this.finalized=!0,A!==void 0&&(this.finalError=A),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tk(e,A){if(typeof e!="object"||e===null)return!1;for(const t of A)if(t in e&&typeof e[t]=="function")return!0;return!1}function Sd(){}function hu(e,A){return`${e} failed: ${A} argument `}/**
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
 */const Hk=function(e){const A=[];let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,S(n<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(n)-56320;r=65536+(i<<10)+s}r<128?A[t++]=r:r<2048?(A[t++]=r>>6|192,A[t++]=r&63|128):r<65536?(A[t++]=r>>12|224,A[t++]=r>>6&63|128,A[t++]=r&63|128):(A[t++]=r>>18|240,A[t++]=r>>12&63|128,A[t++]=r>>6&63|128,A[t++]=r&63|128)}return A},pu=function(e){let A=0;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);n<128?A++:n<2048?A+=2:n>=55296&&n<=56319?(A+=4,t++):A+=3}return A};/**
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
 */function be(e){return e&&e._delegate?e._delegate:e}class Hr{constructor(A,t,n){this.name=A,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(A){return this.instantiationMode=A,this}setMultipleInstances(A){return this.multipleInstances=A,this}setServiceProps(A){return this.serviceProps=A,this}setInstanceCreatedCallback(A){return this.onInstanceCreated=A,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class Lk{constructor(A,t){this.name=A,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(A){const t=this.normalizeInstanceIdentifier(A);if(!this.instancesDeferred.has(t)){const n=new Zo;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(A){const t=this.normalizeInstanceIdentifier(A==null?void 0:A.identifier),n=(A==null?void 0:A.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(A){if(A.name!==this.name)throw Error(`Mismatching Component ${A.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=A,!!this.shouldAutoInitialize()){if(bk(A))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(A=sr){this.instancesDeferred.delete(A),this.instancesOptions.delete(A),this.instances.delete(A)}async delete(){const A=Array.from(this.instances.values());await Promise.all([...A.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...A.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(A=sr){return this.instances.has(A)}getOptions(A=sr){return this.instancesOptions.get(A)||{}}initialize(A={}){const{options:t={}}=A,n=this.normalizeInstanceIdentifier(A.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);n===o&&s.resolve(r)}return r}onInit(A,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(A),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&A(i,n),()=>{r.delete(A)}}invokeOnInitCallbacks(A,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(A,t)}catch{}}getOrInitializeService({instanceIdentifier:A,options:t={}}){let n=this.instances.get(A);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kk(A),options:t}),this.instances.set(A,n),this.instancesOptions.set(A,t),this.invokeOnInitCallbacks(n,A),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,A,n)}catch{}return n||null}normalizeInstanceIdentifier(A=sr){return this.component?this.component.multipleInstances?A:sr:A}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kk(e){return e===sr?void 0:e}function bk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Dk{constructor(A){this.name=A,this.providers=new Map}addComponent(A){const t=this.getProvider(A.name);if(t.isComponentSet())throw new Error(`Component ${A.name} has already been registered with ${this.name}`);t.setComponent(A)}addOrOverwriteComponent(A){this.getProvider(A.name).isComponentSet()&&this.providers.delete(A.name),this.addComponent(A)}getProvider(A){if(this.providers.has(A))return this.providers.get(A);const t=new Lk(A,this);return this.providers.set(A,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var hA;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(hA||(hA={}));const Nk={debug:hA.DEBUG,verbose:hA.VERBOSE,info:hA.INFO,warn:hA.WARN,error:hA.ERROR,silent:hA.SILENT},Rk=hA.INFO,Ok={[hA.DEBUG]:"log",[hA.VERBOSE]:"log",[hA.INFO]:"info",[hA.WARN]:"warn",[hA.ERROR]:"error"},Mk=(e,A,...t)=>{if(A<e.logLevel)return;const n=new Date().toISOString(),r=Ok[A];if(r)console[r](`[${n}]  ${e.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${A})`)};class Vp{constructor(A){this.name=A,this._logLevel=Rk,this._logHandler=Mk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(A){if(!(A in hA))throw new TypeError(`Invalid value "${A}" assigned to \`logLevel\``);this._logLevel=A}setLogLevel(A){this._logLevel=typeof A=="string"?Nk[A]:A}get logHandler(){return this._logHandler}set logHandler(A){if(typeof A!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=A}get userLogHandler(){return this._userLogHandler}set userLogHandler(A){this._userLogHandler=A}debug(...A){this._userLogHandler&&this._userLogHandler(this,hA.DEBUG,...A),this._logHandler(this,hA.DEBUG,...A)}log(...A){this._userLogHandler&&this._userLogHandler(this,hA.VERBOSE,...A),this._logHandler(this,hA.VERBOSE,...A)}info(...A){this._userLogHandler&&this._userLogHandler(this,hA.INFO,...A),this._logHandler(this,hA.INFO,...A)}warn(...A){this._userLogHandler&&this._userLogHandler(this,hA.WARN,...A),this._logHandler(this,hA.WARN,...A)}error(...A){this._userLogHandler&&this._userLogHandler(this,hA.ERROR,...A),this._logHandler(this,hA.ERROR,...A)}}const Pk=(e,A)=>A.some(t=>e instanceof t);let mm,Cm;function Kk(){return mm||(mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return Cm||(Cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xQ=new WeakMap,ah=new WeakMap,TQ=new WeakMap,xd=new WeakMap,Gp=new WeakMap;function Gk(e){const A=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Pn(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return A.then(t=>{t instanceof IDBCursor&&xQ.set(t,e)}).catch(()=>{}),Gp.set(A,e),A}function Wk(e){if(ah.has(e))return;const A=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});ah.set(e,A)}let lh={get(e,A,t){if(e instanceof IDBTransaction){if(A==="done")return ah.get(e);if(A==="objectStoreNames")return e.objectStoreNames||TQ.get(e);if(A==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(e[A])},set(e,A,t){return e[A]=t,!0},has(e,A){return e instanceof IDBTransaction&&(A==="done"||A==="store")?!0:A in e}};function jk(e){lh=e(lh)}function zk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(A,...t){const n=e.call(Td(this),A,...t);return TQ.set(n,A.sort?A.sort():[A]),Pn(n)}:Vk().includes(e)?function(...A){return e.apply(Td(this),A),Pn(xQ.get(this))}:function(...A){return Pn(e.apply(Td(this),A))}}function $k(e){return typeof e=="function"?zk(e):(e instanceof IDBTransaction&&Wk(e),Pk(e,Kk())?new Proxy(e,lh):e)}function Pn(e){if(e instanceof IDBRequest)return Gk(e);if(xd.has(e))return xd.get(e);const A=$k(e);return A!==e&&(xd.set(e,A),Gp.set(A,e)),A}const Td=e=>Gp.get(e);function Xk(e,A,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const s=indexedDB.open(e,A),o=Pn(s);return n&&s.addEventListener("upgradeneeded",a=>{n(Pn(s.result),a.oldVersion,a.newVersion,Pn(s.transaction),a)}),t&&s.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),o.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Yk=["get","getKey","getAll","getAllKeys","count"],Jk=["put","add","delete","clear"],Hd=new Map;function vm(e,A){if(!(e instanceof IDBDatabase&&!(A in e)&&typeof A=="string"))return;if(Hd.get(A))return Hd.get(A);const t=A.replace(/FromIndex$/,""),n=A!==t,r=Jk.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Yk.includes(t)))return;const i=async function(s,...o){const a=this.transaction(s,r?"readwrite":"readonly");let l=a.store;return n&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),r&&a.done]))[0]};return Hd.set(A,i),i}jk(e=>({...e,get:(A,t,n)=>vm(A,t)||e.get(A,t,n),has:(A,t)=>!!vm(A,t)||e.has(A,t)}));/**
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
 */class Zk{constructor(A){this.container=A}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qk(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function qk(e){const A=e.getComponent();return(A==null?void 0:A.type)==="VERSION"}const ch="@firebase/app",ym="0.14.2";/**
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
 */const nn=new Vp("@firebase/app"),A4="@firebase/app-compat",e4="@firebase/analytics-compat",t4="@firebase/analytics",n4="@firebase/app-check-compat",r4="@firebase/app-check",i4="@firebase/auth",s4="@firebase/auth-compat",o4="@firebase/database",a4="@firebase/data-connect",l4="@firebase/database-compat",c4="@firebase/functions",u4="@firebase/functions-compat",d4="@firebase/installations",f4="@firebase/installations-compat",h4="@firebase/messaging",p4="@firebase/messaging-compat",g4="@firebase/performance",B4="@firebase/performance-compat",w4="@firebase/remote-config",m4="@firebase/remote-config-compat",C4="@firebase/storage",v4="@firebase/storage-compat",y4="@firebase/firestore",Q4="@firebase/ai",_4="@firebase/firestore-compat",E4="firebase",U4="12.2.0";/**
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
 */const uh="[DEFAULT]",F4={[ch]:"fire-core",[A4]:"fire-core-compat",[t4]:"fire-analytics",[e4]:"fire-analytics-compat",[r4]:"fire-app-check",[n4]:"fire-app-check-compat",[i4]:"fire-auth",[s4]:"fire-auth-compat",[o4]:"fire-rtdb",[a4]:"fire-data-connect",[l4]:"fire-rtdb-compat",[c4]:"fire-fn",[u4]:"fire-fn-compat",[d4]:"fire-iid",[f4]:"fire-iid-compat",[h4]:"fire-fcm",[p4]:"fire-fcm-compat",[g4]:"fire-perf",[B4]:"fire-perf-compat",[w4]:"fire-rc",[m4]:"fire-rc-compat",[C4]:"fire-gcs",[v4]:"fire-gcs-compat",[y4]:"fire-fst",[_4]:"fire-fst-compat",[Q4]:"fire-vertex","fire-js":"fire-js",[E4]:"fire-js-all"};/**
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
 */const pc=new Map,I4=new Map,dh=new Map;function Qm(e,A){try{e.container.addComponent(A)}catch(t){nn.debug(`Component ${A.name} failed to register with FirebaseApp ${e.name}`,t)}}function Wi(e){const A=e.name;if(dh.has(A))return nn.debug(`There were multiple attempts to register component ${A}.`),!1;dh.set(A,e);for(const t of pc.values())Qm(t,e);for(const t of I4.values())Qm(t,e);return!0}function Wp(e,A){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(A)}function ht(e){return e==null?!1:e.settings!==void 0}/**
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
 */const S4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new qo("app","Firebase",S4);/**
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
 */class x4{constructor(A,t,n){this._isDeleted=!1,this._options={...A},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(A){this.checkDestroyed(),this._automaticDataCollectionEnabled=A}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(A){this._isDeleted=A}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const is=U4;function HQ(e,A={}){let t=e;typeof A!="object"&&(A={name:A});const n={name:uh,automaticDataCollectionEnabled:!0,...A},r=n.name;if(typeof r!="string"||!r)throw Kn.create("bad-app-name",{appName:String(r)});if(t||(t=QQ()),!t)throw Kn.create("no-options");const i=pc.get(r);if(i){if(Tr(t,i.options)&&Tr(n,i.config))return i;throw Kn.create("duplicate-app",{appName:r})}const s=new Dk(r);for(const a of dh.values())s.addComponent(a);const o=new x4(t,n,s);return pc.set(r,o),o}function LQ(e=uh){const A=pc.get(e);if(!A&&e===uh&&QQ())return HQ();if(!A)throw Kn.create("no-app",{appName:e});return A}function Vn(e,A,t){let n=F4[e]??e;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=A.match(/\s|\//);if(r||i){const s=[`Unable to register library "${n}" with version "${A}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${A}" contains illegal characters (whitespace or "/")`),nn.warn(s.join(" "));return}Wi(new Hr(`${n}-version`,()=>({library:n,version:A}),"VERSION"))}/**
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
 */const T4="firebase-heartbeat-database",H4=1,ko="firebase-heartbeat-store";let Ld=null;function kQ(){return Ld||(Ld=Xk(T4,H4,{upgrade:(e,A)=>{switch(A){case 0:try{e.createObjectStore(ko)}catch(t){console.warn(t)}}}}).catch(e=>{throw Kn.create("idb-open",{originalErrorMessage:e.message})})),Ld}async function L4(e){try{const t=(await kQ()).transaction(ko),n=await t.objectStore(ko).get(bQ(e));return await t.done,n}catch(A){if(A instanceof er)nn.warn(A.message);else{const t=Kn.create("idb-get",{originalErrorMessage:A==null?void 0:A.message});nn.warn(t.message)}}}async function _m(e,A){try{const n=(await kQ()).transaction(ko,"readwrite");await n.objectStore(ko).put(A,bQ(e)),await n.done}catch(t){if(t instanceof er)nn.warn(t.message);else{const n=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(n.message)}}}function bQ(e){return`${e.name}!${e.options.appId}`}/**
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
 */const k4=1024,b4=30;class D4{constructor(A){this.container=A,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new R4(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var A,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Em();if(((A=this._heartbeatsCache)==null?void 0:A.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>b4){const s=O4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){nn.warn(n)}}async getHeartbeatsHeader(){var A;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((A=this._heartbeatsCache)==null?void 0:A.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Em(),{heartbeatsToSend:n,unsentEntries:r}=N4(this._heartbeatsCache.heartbeats),i=dc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nn.warn(t),""}}}function Em(){return new Date().toISOString().substring(0,10)}function N4(e,A=k4){const t=[];let n=e.slice();for(const r of e){const i=t.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),Um(t)>A){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Um(t)>A){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class R4{constructor(A){this.app=A,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vk()?yk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await L4(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(A){if(await this._canUseIndexedDBPromise){const n=await this.read();return _m(this.app,{lastSentHeartbeatDate:A.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:A.heartbeats})}else return}async add(A){if(await this._canUseIndexedDBPromise){const n=await this.read();return _m(this.app,{lastSentHeartbeatDate:A.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...A.heartbeats]})}else return}}function Um(e){return dc(JSON.stringify({version:2,heartbeats:e})).length}function O4(e){if(e.length===0)return-1;let A=0,t=e[0].date;for(let n=1;n<e.length;n++)e[n].date<t&&(t=e[n].date,A=n);return A}/**
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
 */function M4(e){Wi(new Hr("platform-logger",A=>new Zk(A),"PRIVATE")),Wi(new Hr("heartbeat",A=>new D4(A),"PRIVATE")),Vn(ch,ym,e),Vn(ch,ym,"esm2020"),Vn("fire-js","")}M4("");function DQ(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P4=DQ,NQ=new qo("auth","Firebase",DQ());/**
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
 */const gc=new Vp("@firebase/auth");function K4(e,...A){gc.logLevel<=hA.WARN&&gc.warn(`Auth (${is}): ${e}`,...A)}function _l(e,...A){gc.logLevel<=hA.ERROR&&gc.error(`Auth (${is}): ${e}`,...A)}/**
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
 */function Lt(e,...A){throw zp(e,...A)}function vt(e,...A){return zp(e,...A)}function jp(e,A,t){const n={...P4(),[A]:t};return new qo("auth","Firebase",n).create(A,{appName:e.name})}function _r(e){return jp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function V4(e,A,t){const n=t;if(!(A instanceof n))throw n.name!==A.constructor.name&&Lt(e,"argument-error"),jp(e,"argument-error",`Type of ${A.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(e,...A){if(typeof e!="string"){const t=A[0],n=[...A.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(t,...n)}return NQ.create(e,...A)}function W(e,A,...t){if(!e)throw zp(A,...t)}function zt(e){const A="INTERNAL ASSERTION FAILED: "+e;throw _l(A),new Error(A)}function rn(e,A){e||zt(A)}/**
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
 */function fh(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function G4(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function W4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G4()||mk()||"connection"in navigator)?navigator.onLine:!0}function j4(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Aa{constructor(A,t){this.shortDelay=A,this.longDelay=t,rn(t>A,"Short delay should be less than long delay!"),this.isMobile=Kp()||FQ()}get(){return W4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $p(e,A){rn(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return A?`${t}${A.startsWith("/")?A.slice(1):A}`:t}/**
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
 */class RQ{static initialize(A,t,n){this.fetchImpl=A,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const z4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X4=new Aa(3e4,6e4);function Xp(e,A){return e.tenantId&&!A.tenantId?{...A,tenantId:e.tenantId}:A}async function ss(e,A,t,n,r={}){return OQ(e,r,async()=>{let i={},s={};n&&(A==="GET"?s=n:i={body:JSON.stringify(n)});const o=rs({key:e.config.apiKey,...s}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l={method:A,headers:a,...i};return wk()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ns(e.emulatorConfig.host)&&(l.credentials="include"),RQ.fetch()(await MQ(e,e.config.apiHost,t,o),l)})}async function OQ(e,A,t){e._canInitEmulator=!1;const n={...z4,...A};try{const r=new J4(e),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw el(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const o=i.ok?s.errorMessage:s.error.message,[a,l]=o.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(e,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw el(e,"email-already-in-use",s);if(a==="USER_DISABLED")throw el(e,"user-disabled",s);const c=n[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jp(e,c,l);Lt(e,c)}}catch(r){if(r instanceof er)throw r;Lt(e,"network-request-failed",{message:String(r)})}}async function Y4(e,A,t,n,r={}){const i=await ss(e,A,t,n,r);return"mfaPendingCredential"in i&&Lt(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function MQ(e,A,t,n){const r=`${A}${t}?${n}`,i=e,s=i.config.emulator?$p(e.config,r):`${e.config.apiScheme}://${r}`;return $4.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(s).toString():s}class J4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(A){this.auth=A,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(vt(this.auth,"network-request-failed")),X4.get())})}}function el(e,A,t){const n={appName:e.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=vt(e,A,n);return r.customData._tokenResponse=t,r}/**
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
 */async function Z4(e,A){return ss(e,"POST","/v1/accounts:delete",A)}async function Bc(e,A){return ss(e,"POST","/v1/accounts:lookup",A)}/**
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
 */function io(e){if(e)try{const A=new Date(Number(e));if(!isNaN(A.getTime()))return A.toUTCString()}catch{}}async function q4(e,A=!1){const t=be(e),n=await t.getIdToken(A),r=Yp(n);W(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:io(kd(r.auth_time)),issuedAtTime:io(kd(r.iat)),expirationTime:io(kd(r.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kd(e){return Number(e)*1e3}function Yp(e){const[A,t,n]=e.split(".");if(A===void 0||t===void 0||n===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const r=fc(t);return r?JSON.parse(r):(_l("Failed to decode base64 JWT payload"),null)}catch(r){return _l("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Im(e){const A=Yp(e);return W(A,"internal-error"),W(typeof A.exp<"u","internal-error"),W(typeof A.iat<"u","internal-error"),Number(A.exp)-Number(A.iat)}/**
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
 */async function bo(e,A,t=!1){if(t)return A;try{return await A}catch(n){throw n instanceof er&&Ab(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function Ab({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class eb{constructor(A){this.user=A,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(A){if(A){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(A=!1){if(!this.isRunning)return;const t=this.getInterval(A);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(A){(A==null?void 0:A.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hh{constructor(A,t){this.createdAt=A,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(A){this.createdAt=A.createdAt,this.lastLoginAt=A.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(e){var u;const A=e.auth,t=await e.getIdToken(),n=await bo(e,Bc(A,{idToken:t}));W(n==null?void 0:n.users.length,A,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=(u=r.providerUserInfo)!=null&&u.length?PQ(r.providerUserInfo):[],s=nb(e.providerData,i),o=e.isAnonymous,a=!(e.email&&r.passwordHash)&&!(s!=null&&s.length),l=o?a:!1,c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new hh(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(e,c)}async function tb(e){const A=be(e);await wc(A),await A.auth._persistUserIfCurrent(A),A.auth._notifyListenersIfCurrent(A)}function nb(e,A){return[...e.filter(n=>!A.some(r=>r.providerId===n.providerId)),...A]}function PQ(e){return e.map(({providerId:A,...t})=>({providerId:A,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function rb(e,A){const t=await OQ(e,{},async()=>{const n=rs({grant_type:"refresh_token",refresh_token:A}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await MQ(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&ns(e.emulatorConfig.host)&&(a.credentials="include"),RQ.fetch()(s,a)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ib(e,A){return ss(e,"POST","/v2/accounts:revokeToken",Xp(e,A))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(A){W(A.idToken,"internal-error"),W(typeof A.idToken<"u","internal-error"),W(typeof A.refreshToken<"u","internal-error");const t="expiresIn"in A&&typeof A.expiresIn<"u"?Number(A.expiresIn):Im(A.idToken);this.updateTokensAndExpiration(A.idToken,A.refreshToken,t)}updateFromIdToken(A){W(A.length!==0,"internal-error");const t=Im(A);this.updateTokensAndExpiration(A,null,t)}async getToken(A,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,A,"user-token-expired"),this.refreshToken?(await this.refresh(A,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(A,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await rb(A,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(A,t,n){this.refreshToken=t||null,this.accessToken=A||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(A,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Ui;return n&&(W(typeof n=="string","internal-error",{appName:A}),s.refreshToken=n),r&&(W(typeof r=="string","internal-error",{appName:A}),s.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:A}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(A){this.accessToken=A.accessToken,this.refreshToken=A.refreshToken,this.expirationTime=A.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function fn(e,A){W(typeof e=="string"||typeof e>"u","internal-error",{appName:A})}class gt{constructor({uid:A,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new eb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=A,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(A){const t=await bo(this,this.stsTokenManager.getToken(this.auth,A));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(A){return q4(this,A)}reload(){return tb(this)}_assign(A){this!==A&&(W(this.uid===A.uid,this.auth,"internal-error"),this.displayName=A.displayName,this.photoURL=A.photoURL,this.email=A.email,this.emailVerified=A.emailVerified,this.phoneNumber=A.phoneNumber,this.isAnonymous=A.isAnonymous,this.tenantId=A.tenantId,this.providerData=A.providerData.map(t=>({...t})),this.metadata._copy(A.metadata),this.stsTokenManager._assign(A.stsTokenManager))}_clone(A){const t=new gt({...this,auth:A,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(A){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=A,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(A){this.reloadListener?this.reloadListener(A):this.reloadUserInfo=A}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(A,t=!1){let n=!1;A.idToken&&A.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(A),n=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(_r(this.auth));const A=await this.getIdToken();return await bo(this,Z4(this.auth,{idToken:A})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(A=>({...A})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(A,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:d,isAnonymous:h,providerData:g,stsTokenManager:w}=t;W(u&&w,A,"internal-error");const _=Ui.fromJSON(this.name,w);W(typeof u=="string",A,"internal-error"),fn(n,A.name),fn(r,A.name),W(typeof d=="boolean",A,"internal-error"),W(typeof h=="boolean",A,"internal-error"),fn(i,A.name),fn(s,A.name),fn(o,A.name),fn(a,A.name),fn(l,A.name),fn(c,A.name);const p=new gt({uid:u,auth:A,email:r,emailVerified:d,displayName:n,isAnonymous:h,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:_,createdAt:l,lastLoginAt:c});return g&&Array.isArray(g)&&(p.providerData=g.map(f=>({...f}))),a&&(p._redirectEventId=a),p}static async _fromIdTokenResponse(A,t,n=!1){const r=new Ui;r.updateFromServerResponse(t);const i=new gt({uid:t.localId,auth:A,stsTokenManager:r,isAnonymous:n});return await wc(i),i}static async _fromGetAccountInfoResponse(A,t,n){const r=t.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?PQ(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),o=new Ui;o.updateFromIdToken(n);const a=new gt({uid:r.localId,auth:A,stsTokenManager:o,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new hh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const Sm=new Map;function $t(e){rn(e instanceof Function,"Expected a class definition");let A=Sm.get(e);return A?(rn(A instanceof e,"Instance stored in cache mismatched with class"),A):(A=new e,Sm.set(e,A),A)}/**
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
 */class KQ{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(A,t){this.storage[A]=t}async _get(A){const t=this.storage[A];return t===void 0?null:t}async _remove(A){delete this.storage[A]}_addListener(A,t){}_removeListener(A,t){}}KQ.type="NONE";const xm=KQ;/**
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
 */function El(e,A,t){return`firebase:${e}:${A}:${t}`}class Fi{constructor(A,t,n){this.persistence=A,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=El(this.userKey,r.apiKey,i),this.fullPersistenceKey=El("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(A){return this.persistence._set(this.fullUserKey,A.toJSON())}async getCurrentUser(){const A=await this.persistence._get(this.fullUserKey);if(!A)return null;if(typeof A=="string"){const t=await Bc(this.auth,{idToken:A}).catch(()=>{});return t?gt._fromGetAccountInfoResponse(this.auth,t,A):null}return gt._fromJSON(this.auth,A)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(A){if(this.persistence===A)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=A,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(A,t,n="authUser"){if(!t.length)return new Fi($t(xm),A,n);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||$t(xm);const s=El(n,A.config.apiKey,A.name);let o=null;for(const l of t)try{const c=await l._get(s);if(c){let u;if(typeof c=="string"){const d=await Bc(A,{idToken:c}).catch(()=>{});if(!d)break;u=await gt._fromGetAccountInfoResponse(A,d,c)}else u=gt._fromJSON(A,c);l!==i&&(o=u),i=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Fi(i,A,n):(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(s)}catch{}})),new Fi(i,A,n))}}/**
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
 */function Tm(e){const A=e.toLowerCase();if(A.includes("opera/")||A.includes("opr/")||A.includes("opios/"))return"Opera";if(jQ(A))return"IEMobile";if(A.includes("msie")||A.includes("trident/"))return"IE";if(A.includes("edge/"))return"Edge";if(VQ(A))return"Firefox";if(A.includes("silk/"))return"Silk";if($Q(A))return"Blackberry";if(XQ(A))return"Webos";if(GQ(A))return"Safari";if((A.includes("chrome/")||WQ(A))&&!A.includes("edge/"))return"Chrome";if(zQ(A))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function VQ(e=Qe()){return/firefox\//i.test(e)}function GQ(e=Qe()){const A=e.toLowerCase();return A.includes("safari/")&&!A.includes("chrome/")&&!A.includes("crios/")&&!A.includes("android")}function WQ(e=Qe()){return/crios\//i.test(e)}function jQ(e=Qe()){return/iemobile/i.test(e)}function zQ(e=Qe()){return/android/i.test(e)}function $Q(e=Qe()){return/blackberry/i.test(e)}function XQ(e=Qe()){return/webos/i.test(e)}function Jp(e=Qe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sb(e=Qe()){var A;return Jp(e)&&!!((A=window.navigator)!=null&&A.standalone)}function ob(){return Ck()&&document.documentMode===10}function YQ(e=Qe()){return Jp(e)||zQ(e)||XQ(e)||$Q(e)||/windows phone/i.test(e)||jQ(e)}/**
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
 */function JQ(e,A=[]){let t;switch(e){case"Browser":t=Tm(Qe());break;case"Worker":t=`${Tm(Qe())}-${e}`;break;default:t=e}const n=A.length?A.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${n}`}/**
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
 */class ab{constructor(A){this.auth=A,this.queue=[]}pushCallback(A,t){const n=i=>new Promise((s,o)=>{try{const a=A(i);s(a)}catch(a){o(a)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(A){if(this.auth.currentUser===A)return;const t=[];try{for(const n of this.queue)await n(A),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function lb(e,A={}){return ss(e,"GET","/v2/passwordPolicy",Xp(e,A))}/**
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
 */const cb=6;class ub{constructor(A){var n;const t=A.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=A.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=A.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=A.forceUpgradeOnSignin??!1,this.schemaVersion=A.schemaVersion}validatePassword(A){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(A,t),this.validatePasswordCharacterOptions(A,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(A,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=A.length>=n),r&&(t.meetsMaxPasswordLength=A.length<=r)}validatePasswordCharacterOptions(A,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<A.length;r++)n=A.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(A,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(A.containsLowercaseLetter||(A.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(A.containsUppercaseLetter||(A.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(A.containsNumericCharacter||(A.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(A.containsNonAlphanumericCharacter||(A.containsNonAlphanumericCharacter=i))}}/**
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
 */class db{constructor(A,t,n,r){this.app=A,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NQ,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=A.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(A,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,A),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const A=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!A)){if(this.currentUser&&A&&this.currentUser.uid===A.uid){this._currentUser._assign(A),await this.currentUser.getIdToken();return}await this._updateCurrentUser(A,!0)}}async initializeCurrentUserFromIdToken(A){try{const t=await Bc(this,{idToken:A}),n=await gt._fromGetAccountInfoResponse(this,t,A);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(A){var i;if(ht(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(A&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(i=this.redirectUser)==null?void 0:i._redirectEventId,o=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(A);(!s||s===o)&&(a!=null&&a.user)&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(A){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,A,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(A){try{await wc(A)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(A)}useDeviceLanguage(){this.languageCode=j4()}async _delete(){this._deleted=!0}async updateCurrentUser(A){if(ht(this.app))return Promise.reject(_r(this));const t=A?be(A):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(A,t=!1){if(!this._deleted)return A&&W(this.tenantId===A.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(A),this.queue(async()=>{await this.directlySetCurrentUser(A),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(A){return ht(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(A))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(A){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(A)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const A=await lb(this),t=new ub(A);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(A){this._errorFactory=new qo("auth","Firebase",A())}onAuthStateChanged(A,t,n){return this.registerStateListener(this.authStateSubscription,A,t,n)}beforeAuthStateChanged(A,t){return this.beforeStateQueue.pushCallback(A,t)}onIdTokenChanged(A,t,n){return this.registerStateListener(this.idTokenSubscription,A,t,n)}authStateReady(){return new Promise((A,t)=>{if(this.currentUser)A();else{const n=this.onAuthStateChanged(()=>{n(),A()},t)}})}async revokeAccessToken(A){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:A,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await ib(this,n)}}toJSON(){var A;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(A=this._currentUser)==null?void 0:A.toJSON()}}async _setRedirectUser(A,t){const n=await this.getOrInitRedirectPersistenceManager(t);return A===null?n.removeCurrentUser():n.setCurrentUser(A)}async getOrInitRedirectPersistenceManager(A){if(!this.redirectPersistenceManager){const t=A&&$t(A)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(A){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===A?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===A?this.redirectUser:null}async _persistUserIfCurrent(A){if(A===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(A))}_notifyListenersIfCurrent(A){A===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const A=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==A&&(this.lastNotifiedUid=A,this.authStateSubscription.next(this.currentUser))}registerStateListener(A,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),typeof t=="function"){const a=A.addObserver(t,n,r);return()=>{s=!0,a()}}else{const a=A.addObserver(t);return()=>{s=!0,a()}}}async directlySetCurrentUser(A){this.currentUser&&this.currentUser!==A&&this._currentUser._stopProactiveRefresh(),A&&this.isProactiveRefreshEnabled&&A._startProactiveRefresh(),this.currentUser=A,A?await this.assertedPersistence.setCurrentUser(A):await this.assertedPersistence.removeCurrentUser()}queue(A){return this.operations=this.operations.then(A,A),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(A){!A||this.frameworks.includes(A)||(this.frameworks.push(A),this.frameworks.sort(),this.clientVersion=JQ(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const A={"X-Client-Version":this.clientVersion};this.app.options.appId&&(A["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(A["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(A["X-Firebase-AppCheck"]=n),A}async _getAppCheckToken(){var t;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const A=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return A!=null&&A.error&&K4(`Error while retrieving App Check token: ${A.error}`),A==null?void 0:A.token}}function gu(e){return be(e)}class Hm{constructor(A){this.auth=A,this.observer=null,this.addObserver=Sk(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fb(e){Zp=e}function hb(e){return Zp.loadJS(e)}function pb(){return Zp.gapiScript}function gb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bb(e,A){const t=Wp(e,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Tr(i,A??{}))return r;Lt(r,"already-initialized")}return t.initialize({options:A})}function wb(e,A){const t=(A==null?void 0:A.persistence)||[],n=(Array.isArray(t)?t:[t]).map($t);A!=null&&A.errorMap&&e._updateErrorMap(A.errorMap),e._initializeWithPersistence(n,A==null?void 0:A.popupRedirectResolver)}function mb(e,A,t){const n=gu(e);W(/^https?:\/\//.test(A),n,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=ZQ(A),{host:s,port:o}=Cb(A),a=o===null?"":`:${o}`,l={url:`${i}//${s}${a}/`},c=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){W(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),W(Tr(l,n.config.emulator)&&Tr(c,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=c,n.settings.appVerificationDisabledForTesting=!0,ns(s)?(EQ(`${i}//${s}${a}`),UQ("Auth",!0)):vb()}function ZQ(e){const A=e.indexOf(":");return A<0?"":e.substr(0,A+1)}function Cb(e){const A=ZQ(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(A.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:Lm(n.substr(i.length+1))}}else{const[i,s]=n.split(":");return{host:i,port:Lm(s)}}}function Lm(e){if(!e)return null;const A=Number(e);return isNaN(A)?null:A}function vb(){function e(){const A=document.createElement("p"),t=A.style;A.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",A.classList.add("firebase-emulator-warning"),document.body.appendChild(A)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class qQ{constructor(A,t){this.providerId=A,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(A){return zt("not implemented")}_linkToIdToken(A,t){return zt("not implemented")}_getReauthenticationResolver(A){return zt("not implemented")}}/**
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
 */async function Ii(e,A){return Y4(e,"POST","/v1/accounts:signInWithIdp",Xp(e,A))}/**
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
 */const yb="http://localhost";class Lr extends qQ{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(A){const t=new Lr(A.providerId,A.signInMethod);return A.idToken||A.accessToken?(A.idToken&&(t.idToken=A.idToken),A.accessToken&&(t.accessToken=A.accessToken),A.nonce&&!A.pendingToken&&(t.nonce=A.nonce),A.pendingToken&&(t.pendingToken=A.pendingToken)):A.oauthToken&&A.oauthTokenSecret?(t.accessToken=A.oauthToken,t.secret=A.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(A){const t=typeof A=="string"?JSON.parse(A):A,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new Lr(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(A){const t=this.buildRequest();return Ii(A,t)}_linkToIdToken(A,t){const n=this.buildRequest();return n.idToken=t,Ii(A,n)}_getReauthenticationResolver(A){const t=this.buildRequest();return t.autoCreate=!1,Ii(A,t)}buildRequest(){const A={requestUri:yb,returnSecureToken:!0};if(this.pendingToken)A.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),A.postBody=rs(t)}return A}}/**
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
 */class qp{constructor(A){this.providerId=A,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(A){this.defaultLanguageCode=A}setCustomParameters(A){return this.customParameters=A,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ea extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(A){return this.scopes.includes(A)||this.scopes.push(A),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends ea{constructor(){super("facebook.com")}static credential(A){return Lr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:A})}static credentialFromResult(A){return Qn.credentialFromTaggedObject(A)}static credentialFromError(A){return Qn.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A||!("oauthAccessToken"in A)||!A.oauthAccessToken)return null;try{return Qn.credential(A.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(A,t){return Lr._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:A,accessToken:t})}static credentialFromResult(A){return Gt.credentialFromTaggedObject(A)}static credentialFromError(A){return Gt.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A)return null;const{oauthIdToken:t,oauthAccessToken:n}=A;if(!t&&!n)return null;try{return Gt.credential(t,n)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class _n extends ea{constructor(){super("github.com")}static credential(A){return Lr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:A})}static credentialFromResult(A){return _n.credentialFromTaggedObject(A)}static credentialFromError(A){return _n.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A||!("oauthAccessToken"in A)||!A.oauthAccessToken)return null;try{return _n.credential(A.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */class En extends ea{constructor(){super("twitter.com")}static credential(A,t){return Lr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:A,oauthTokenSecret:t})}static credentialFromResult(A){return En.credentialFromTaggedObject(A)}static credentialFromError(A){return En.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=A;if(!t||!n)return null;try{return En.credential(t,n)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */class ji{constructor(A){this.user=A.user,this.providerId=A.providerId,this._tokenResponse=A._tokenResponse,this.operationType=A.operationType}static async _fromIdTokenResponse(A,t,n,r=!1){const i=await gt._fromIdTokenResponse(A,n,r),s=km(n);return new ji({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(A,t,n){await A._updateTokensIfNecessary(n,!0);const r=km(n);return new ji({user:A,providerId:r,_tokenResponse:n,operationType:t})}}function km(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class mc extends er{constructor(A,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:A.name,tenantId:A.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(A,t,n,r){return new mc(A,t,n,r)}}function A_(e,A,t,n){return(A==="reauthenticate"?t._getReauthenticationResolver(e):t._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(e,i,A,n):i})}async function Qb(e,A,t=!1){const n=await bo(e,A._linkToIdToken(e.auth,await e.getIdToken()),t);return ji._forOperation(e,"link",n)}/**
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
 */async function _b(e,A,t=!1){const{auth:n}=e;if(ht(n.app))return Promise.reject(_r(n));const r="reauthenticate";try{const i=await bo(e,A_(n,r,A,e),t);W(i.idToken,n,"internal-error");const s=Yp(i.idToken);W(s,n,"internal-error");const{sub:o}=s;return W(e.uid===o,n,"user-mismatch"),ji._forOperation(e,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(n,"user-mismatch"),i}}/**
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
 */async function Eb(e,A,t=!1){if(ht(e.app))return Promise.reject(_r(e));const n="signIn",r=await A_(e,n,A),i=await ji._fromIdTokenResponse(e,n,r);return t||await e._updateCurrentUser(i.user),i}function Ub(e,A,t,n){return be(e).onIdTokenChanged(A,t,n)}function Fb(e,A,t){return be(e).beforeAuthStateChanged(A,t)}function Ib(e,A,t,n){return be(e).onAuthStateChanged(A,t,n)}function Sb(e){return be(e).signOut()}const Cc="__sak";/**
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
 */class e_{constructor(A,t){this.storageRetriever=A,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(A,t){return this.storage.setItem(A,JSON.stringify(t)),Promise.resolve()}_get(A){const t=this.storage.getItem(A);return Promise.resolve(t?JSON.parse(t):null)}_remove(A){return this.storage.removeItem(A),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xb=1e3,Tb=10;class t_ extends e_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(A,t)=>this.onStorageEvent(A,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=YQ(),this._shouldAllowMigration=!0}forAllChangedKeys(A){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&A(t,r,n)}}onStorageEvent(A,t=!1){if(!A.key){this.forAllChangedKeys((s,o,a)=>{this.notifyListeners(s,a)});return}const n=A.key;t?this.detachListener():this.stopPolling();const r=()=>{const s=this.storage.getItem(n);!t&&this.localCache[n]===s||this.notifyListeners(n,s)},i=this.storage.getItem(n);ob()&&i!==A.newValue&&A.newValue!==A.oldValue?setTimeout(r,Tb):r()}notifyListeners(A,t){this.localCache[A]=t;const n=this.listeners[A];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((A,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:A,oldValue:t,newValue:n}),!0)})},xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(A,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[A]||(this.listeners[A]=new Set,this.localCache[A]=this.storage.getItem(A)),this.listeners[A].add(t)}_removeListener(A,t){this.listeners[A]&&(this.listeners[A].delete(t),this.listeners[A].size===0&&delete this.listeners[A]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(A,t){await super._set(A,t),this.localCache[A]=JSON.stringify(t)}async _get(A){const t=await super._get(A);return this.localCache[A]=JSON.stringify(t),t}async _remove(A){await super._remove(A),delete this.localCache[A]}}t_.type="LOCAL";const Hb=t_;/**
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
 */class n_ extends e_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(A,t){}_removeListener(A,t){}}n_.type="SESSION";const r_=n_;/**
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
 */function Lb(e){return Promise.all(e.map(async A=>{try{return{fulfilled:!0,value:await A}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bu{constructor(A){this.eventTarget=A,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(A){const t=this.receivers.find(r=>r.isListeningto(A));if(t)return t;const n=new Bu(A);return this.receivers.push(n),n}isListeningto(A){return this.eventTarget===A}async handleEvent(A){const t=A,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async l=>l(t.origin,i)),a=await Lb(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(A,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[A]||(this.handlersMap[A]=new Set),this.handlersMap[A].add(t)}_unsubscribe(A,t){this.handlersMap[A]&&t&&this.handlersMap[A].delete(t),(!t||this.handlersMap[A].size===0)&&delete this.handlersMap[A],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
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
 */function Ag(e="",A=10){let t="";for(let n=0;n<A;n++)t+=Math.floor(Math.random()*10);return e+t}/**
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
 */class kb{constructor(A){this.target=A,this.handlers=new Set}removeMessageHandler(A){A.messageChannel&&(A.messageChannel.port1.removeEventListener("message",A.onMessage),A.messageChannel.port1.close()),this.handlers.delete(A)}async _send(A,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const l=Ag("",20);r.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(d.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:A,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ht(){return window}function bb(e){Ht().location.href=e}/**
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
 */function i_(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function Db(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function Rb(){return i_()?self:null}/**
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
 */const s_="firebaseLocalStorageDb",Ob=1,vc="firebaseLocalStorage",o_="fbase_key";class ta{constructor(A){this.request=A}toPromise(){return new Promise((A,t)=>{this.request.addEventListener("success",()=>{A(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wu(e,A){return e.transaction([vc],A?"readwrite":"readonly").objectStore(vc)}function Mb(){const e=indexedDB.deleteDatabase(s_);return new ta(e).toPromise()}function ph(){const e=indexedDB.open(s_,Ob);return new Promise((A,t)=>{e.addEventListener("error",()=>{t(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(vc,{keyPath:o_})}catch(r){t(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(vc)?A(n):(n.close(),await Mb(),A(await ph()))})})}async function bm(e,A,t){const n=wu(e,!0).put({[o_]:A,value:t});return new ta(n).toPromise()}async function Pb(e,A){const t=wu(e,!1).get(A),n=await new ta(t).toPromise();return n===void 0?null:n.value}function Dm(e,A){const t=wu(e,!0).delete(A);return new ta(t).toPromise()}const Kb=800,Vb=3;class a_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(A){let t=0;for(;;)try{const n=await this._openDb();return await A(n)}catch(n){if(t++>Vb)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(Rb()),this.receiver._subscribe("keyChanged",async(A,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(A,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Db(),!this.activeServiceWorker)return;this.sender=new kb(this.activeServiceWorker);const A=await this.sender._send("ping",{},800);A&&(t=A[0])!=null&&t.fulfilled&&(n=A[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(A){if(!(!this.sender||!this.activeServiceWorker||Nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:A},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const A=await ph();return await bm(A,Cc,"1"),await Dm(A,Cc),!0}catch{}return!1}async _withPendingWrite(A){this.pendingWrites++;try{await A()}finally{this.pendingWrites--}}async _set(A,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,A,t)),this.localCache[A]=t,this.notifyServiceWorker(A)))}async _get(A){const t=await this._withRetries(n=>Pb(n,A));return this.localCache[A]=t,t}async _remove(A){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dm(t,A)),delete this.localCache[A],this.notifyServiceWorker(A)))}async _poll(){const A=await this._withRetries(r=>{const i=wu(r,!1).getAll();return new ta(i).toPromise()});if(!A)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(A.length!==0)for(const{fbase_key:r,value:i}of A)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(A,t){this.localCache[A]=t;const n=this.listeners[A];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(A,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[A]||(this.listeners[A]=new Set,this._get(A)),this.listeners[A].add(t)}_removeListener(A,t){this.listeners[A]&&(this.listeners[A].delete(t),this.listeners[A].size===0&&delete this.listeners[A]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a_.type="LOCAL";const Gb=a_;new Aa(3e4,6e4);/**
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
 */function l_(e,A){return A?$t(A):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class eg extends qQ{constructor(A){super("custom","custom"),this.params=A}_getIdTokenResponse(A){return Ii(A,this._buildIdpRequest())}_linkToIdToken(A,t){return Ii(A,this._buildIdpRequest(t))}_getReauthenticationResolver(A){return Ii(A,this._buildIdpRequest())}_buildIdpRequest(A){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return A&&(t.idToken=A),t}}function Wb(e){return Eb(e.auth,new eg(e),e.bypassAuthState)}function jb(e){const{auth:A,user:t}=e;return W(t,A,"internal-error"),_b(t,new eg(e),e.bypassAuthState)}async function zb(e){const{auth:A,user:t}=e;return W(t,A,"internal-error"),Qb(t,new eg(e),e.bypassAuthState)}/**
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
 */class c_{constructor(A,t,n,r,i=!1){this.auth=A,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(A,t)=>{this.pendingPromise={resolve:A,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(A){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=A;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(A){this.reject(A)}getIdpTask(A){switch(A){case"signInViaPopup":case"signInViaRedirect":return Wb;case"linkViaPopup":case"linkViaRedirect":return zb;case"reauthViaPopup":case"reauthViaRedirect":return jb;default:Lt(this.auth,"internal-error")}}resolve(A){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(A),this.unregisterAndCleanUp()}reject(A){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(A),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $b=new Aa(2e3,1e4);async function Xb(e,A,t){if(ht(e.app))return Promise.reject(vt(e,"operation-not-supported-in-this-environment"));const n=gu(e);V4(e,A,qp);const r=l_(n,t);return new pr(n,"signInViaPopup",A,r).executeNotNull()}class pr extends c_{constructor(A,t,n,r,i){super(A,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const A=await this.execute();return W(A,this.auth,"internal-error"),A}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const A=Ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],A),this.authWindow.associatedEvent=A,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var A;return((A=this.authWindow)==null?void 0:A.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const A=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(A,$b.get())};A()}}pr.currentPopupAction=null;/**
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
 */const Yb="pendingRedirect",Ul=new Map;class Jb extends c_{constructor(A,t,n=!1){super(A,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let A=Ul.get(this.auth._key());if(!A){try{const n=await Zb(this.resolver,this.auth)?await super.execute():null;A=()=>Promise.resolve(n)}catch(t){A=()=>Promise.reject(t)}Ul.set(this.auth._key(),A)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),A()}async onAuthEvent(A){if(A.type==="signInViaRedirect")return super.onAuthEvent(A);if(A.type==="unknown"){this.resolve(null);return}if(A.eventId){const t=await this.auth._redirectUserForId(A.eventId);if(t)return this.user=t,super.onAuthEvent(A);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zb(e,A){const t=eD(A),n=AD(e);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function qb(e,A){Ul.set(e._key(),A)}function AD(e){return $t(e._redirectPersistence)}function eD(e){return El(Yb,e.config.apiKey,e.name)}async function tD(e,A,t=!1){if(ht(e.app))return Promise.reject(_r(e));const n=gu(e),r=l_(n,A),s=await new Jb(n,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,A)),s}/**
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
 */const nD=10*60*1e3;class rD{constructor(A){this.auth=A,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(A){this.consumers.add(A),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,A)&&(this.sendToConsumer(this.queuedRedirectEvent,A),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(A){this.consumers.delete(A)}onEvent(A){if(this.hasEventBeenHandled(A))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(A,n)&&(t=!0,this.sendToConsumer(A,n),this.saveEventToCache(A))}),this.hasHandledPotentialRedirect||!iD(A)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=A,t=!0)),t}sendToConsumer(A,t){var n;if(A.error&&!u_(A)){const r=((n=A.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,r))}else t.onAuthEvent(A)}isEventForConsumer(A,t){const n=t.eventId===null||!!A.eventId&&A.eventId===t.eventId;return t.filter.includes(A.type)&&n}hasEventBeenHandled(A){return Date.now()-this.lastProcessedEventTime>=nD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nm(A))}saveEventToCache(A){this.cachedEventUids.add(Nm(A)),this.lastProcessedEventTime=Date.now()}}function Nm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(A=>A).join("-")}function u_({type:e,error:A}){return e==="unknown"&&(A==null?void 0:A.code)==="auth/no-auth-event"}function iD(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(e);default:return!1}}/**
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
 */async function sD(e,A={}){return ss(e,"GET","/v1/projects",A)}/**
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
 */const oD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aD=/^https?/;async function lD(e){if(e.config.emulator)return;const{authorizedDomains:A}=await sD(e);for(const t of A)try{if(cD(t))return}catch{}Lt(e,"unauthorized-domain")}function cD(e){const A=fh(),{protocol:t,hostname:n}=new URL(A);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&n===""?t==="chrome-extension:"&&e.replace("chrome-extension://","")===A.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===n}if(!aD.test(t))return!1;if(oD.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const uD=new Aa(3e4,6e4);function Rm(){const e=Ht().___jsl;if(e!=null&&e.H){for(const A of Object.keys(e.H))if(e.H[A].r=e.H[A].r||[],e.H[A].L=e.H[A].L||[],e.H[A].r=[...e.H[A].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function dD(e){return new Promise((A,t)=>{var r,i,s;function n(){Rm(),gapi.load("gapi.iframes",{callback:()=>{A(gapi.iframes.getContext())},ontimeout:()=>{Rm(),t(vt(e,"network-request-failed"))},timeout:uD.get()})}if((i=(r=Ht().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)A(gapi.iframes.getContext());else if((s=Ht().gapi)!=null&&s.load)n();else{const o=gb("iframefcb");return Ht()[o]=()=>{gapi.load?n():t(vt(e,"network-request-failed"))},hb(`${pb()}?onload=${o}`).catch(a=>t(a))}}).catch(A=>{throw Fl=null,A})}let Fl=null;function fD(e){return Fl=Fl||dD(e),Fl}/**
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
 */const hD=new Aa(5e3,15e3),pD="__/auth/iframe",gD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mD(e){const A=e.config;W(A.authDomain,e,"auth-domain-config-required");const t=A.emulator?$p(A,gD):`https://${e.config.authDomain}/${pD}`,n={apiKey:A.apiKey,appName:e.name,v:is},r=wD.get(e.config.apiHost);r&&(n.eid=r);const i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${rs(n).slice(1)}`}async function CD(e){const A=await fD(e),t=Ht().gapi;return W(t,e,"internal-error"),A.open({where:document.body,url:mD(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const s=vt(e,"network-request-failed"),o=Ht().setTimeout(()=>{i(s)},hD.get());function a(){Ht().clearTimeout(o),r(n)}n.ping(a).then(a,()=>{i(s)})}))}/**
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
 */const vD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yD=500,QD=600,_D="_blank",ED="http://localhost";class Om{constructor(A){this.window=A,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UD(e,A,t,n=yD,r=QD){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const a={...vD,width:n.toString(),height:r.toString(),top:i,left:s},l=Qe().toLowerCase();t&&(o=WQ(l)?_D:t),VQ(l)&&(A=A||ED,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[h,g])=>`${d}${h}=${g},`,"");if(sb(l)&&o!=="_self")return FD(A||"",o),new Om(null);const u=window.open(A||"",o,c);W(u,e,"popup-blocked");try{u.focus()}catch{}return new Om(u)}function FD(e,A){const t=document.createElement("a");t.href=e,t.target=A;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const ID="__/auth/handler",SD="emulator/auth/handler",xD=encodeURIComponent("fac");async function Mm(e,A,t,n,r,i){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:n,v:is,eventId:r};if(A instanceof qp){A.setDefaultLanguage(e.languageCode),s.providerId=A.providerId||"",oh(A.getCustomParameters())||(s.customParameters=JSON.stringify(A.getCustomParameters()));for(const[c,u]of Object.entries({}))s[c]=u}if(A instanceof ea){const c=A.getScopes().filter(u=>u!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];const a=await e._getAppCheckToken(),l=a?`#${xD}=${encodeURIComponent(a)}`:"";return`${TD(e)}?${rs(o).slice(1)}${l}`}function TD({config:e}){return e.emulator?$p(e,SD):`https://${e.authDomain}/${ID}`}/**
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
 */const bd="webStorageSupport";class HD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=tD,this._overrideRedirectResult=qb}async _openPopup(A,t,n,r){var s;rn((s=this.eventManagers[A._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const i=await Mm(A,t,n,fh(),r);return UD(A,i,Ag())}async _openRedirect(A,t,n,r){await this._originValidation(A);const i=await Mm(A,t,n,fh(),r);return bb(i),new Promise(()=>{})}_initialize(A){const t=A._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(A);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(A){const t=await CD(A),n=new rD(A);return t.register("authEvent",r=>(W(r==null?void 0:r.authEvent,A,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[A._key()]={manager:n},this.iframes[A._key()]=t,n}_isIframeWebStorageSupported(A,t){this.iframes[A._key()].send(bd,{type:bd},r=>{var s;const i=(s=r==null?void 0:r[0])==null?void 0:s[bd];i!==void 0&&t(!!i),Lt(A,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(A){const t=A._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lD(A)),this.originValidationPromises[t]}get _shouldInitProactively(){return YQ()||GQ()||Jp()}}const LD=HD;var Pm="@firebase/auth",Km="1.11.0";/**
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
 */class kD{constructor(A){this.auth=A,this.internalListeners=new Map}getUid(){var A;return this.assertAuthConfigured(),((A=this.auth.currentUser)==null?void 0:A.uid)||null}async getToken(A){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(A)}:null}addAuthTokenListener(A){if(this.assertAuthConfigured(),this.internalListeners.has(A))return;const t=this.auth.onIdTokenChanged(n=>{A((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(A,t),this.updateProactiveRefresh()}removeAuthTokenListener(A){this.assertAuthConfigured();const t=this.internalListeners.get(A);t&&(this.internalListeners.delete(A),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bD(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DD(e){Wi(new Hr("auth",(A,{options:t})=>{const n=A.getProvider("app").getImmediate(),r=A.getProvider("heartbeat"),i=A.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;W(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JQ(e)},l=new db(n,r,i,a);return wb(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((A,t,n)=>{A.getProvider("auth-internal").initialize()})),Wi(new Hr("auth-internal",A=>{const t=gu(A.getProvider("auth").getImmediate());return(n=>new kD(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Pm,Km,bD(e)),Vn(Pm,Km,"esm2020")}/**
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
 */const ND=5*60,RD=_Q("authIdTokenMaxAge")||ND;let Vm=null;const OD=e=>async A=>{const t=A&&await A.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>RD)return;const r=t==null?void 0:t.token;Vm!==r&&(Vm=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function d_(e=LQ()){const A=Wp(e,"auth");if(A.isInitialized())return A.getImmediate();const t=Bb(e,{popupRedirectResolver:LD,persistence:[Gb,Hb,r_]}),n=_Q("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const s=OD(i.toString());Fb(t,s,()=>s(t.currentUser)),Ub(t,o=>s(o))}}const r=yQ("auth");return r&&mb(t,`http://${r}`),t}function MD(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}fb({loadJS(e){return new Promise((A,t)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=A,n.onerror=r=>{const i=vt("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",MD().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DD("Browser");/*! *****************************************************************************
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
***************************************************************************** */function PD(e,A,t,n){function r(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function o(c){try{l(n.next(c))}catch(u){s(u)}}function a(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){c.done?i(c.value):r(c.value).then(o,a)}l((n=n.apply(e,[])).next())})}function KD(e,A){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(l){return function(c){return a([l,c])}}function a(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=A.call(e,t)}catch(c){l=[6,c],r=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var gi=function(){return gi=Object.assign||function(A){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(A[i]=t[i])}return A},gi.apply(this,arguments)},f_=function(e){return{loading:e==null,value:e}},VD=function(){return function(e,A){switch(A.type){case"error":return gi(gi({},e),{error:A.error,loading:!1,value:void 0});case"reset":return f_(A.defaultValue);case"value":return gi(gi({},e),{error:void 0,loading:!1,value:A.value});default:return e}}},GD=function(e){var A=e?e():void 0,t=L.useReducer(VD(),f_(A)),n=t[0],r=t[1],i=L.useCallback(function(){var a=e?e():void 0;r({type:"reset",defaultValue:a})},[e]),s=L.useCallback(function(a){r({type:"error",error:a})},[]),o=L.useCallback(function(a){r({type:"value",value:a})},[]);return L.useMemo(function(){return{error:n.error,loading:n.loading,reset:i,setError:s,setValue:o,value:n.value}},[n.error,n.loading,i,s,o,n.value])},WD=function(e,A){var t=GD(function(){return e.currentUser}),n=t.error,r=t.loading,i=t.setError,s=t.setValue,o=t.value;return L.useEffect(function(){var a=Ib(e,function(l){return PD(void 0,void 0,void 0,function(){var c;return KD(this,function(u){switch(u.label){case 0:return[3,4];case 1:return u.trys.push([1,3,,4]),[4,A.onUserChanged(l)];case 2:return u.sent(),[3,4];case 3:return c=u.sent(),i(c),[3,4];case 4:return s(l),[2]}})})},i);return function(){a()}},[e]),[o,r,n]},jD="firebase",zD="12.2.1";/**
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
 */Vn(jD,zD,"app");var Gm={};const Wm="@firebase/database",jm="1.1.0";/**
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
 */let h_="";function $D(e){h_=e}/**
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
 */class XD{constructor(A){this.domStorage_=A,this.prefix_="firebase:"}set(A,t){t==null?this.domStorage_.removeItem(this.prefixedName_(A)):this.domStorage_.setItem(this.prefixedName_(A),$A(t))}get(A){const t=this.domStorage_.getItem(this.prefixedName_(A));return t==null?null:Lo(t)}remove(A){this.domStorage_.removeItem(this.prefixedName_(A))}prefixedName_(A){return this.prefix_+A}toString(){return this.domStorage_.toString()}}/**
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
 */class YD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(A,t){t==null?delete this.cache_[A]:this.cache_[A]=t}get(A){return Dt(this.cache_,A)?this.cache_[A]:null}remove(A){delete this.cache_[A]}}/**
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
 */const p_=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const A=window[e];return A.setItem("firebase:sentinel","cache"),A.removeItem("firebase:sentinel"),new XD(A)}}catch{}return new YD},gr=p_("localStorage"),JD=p_("sessionStorage");/**
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
 */const Si=new Vp("@firebase/database"),ZD=function(){let e=1;return function(){return e++}}(),g_=function(e){const A=Hk(e),t=new Ik;t.update(A);const n=t.digest();return Mp.encodeByteArray(n)},na=function(...e){let A="";for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?A+=na.apply(null,n):typeof n=="object"?A+=$A(n):A+=n,A+=" "}return A};let so=null,zm=!0;const qD=function(e,A){S(!A,"Can't turn on custom loggers persistently."),Si.logLevel=hA.VERBOSE,so=Si.log.bind(Si)},se=function(...e){if(zm===!0&&(zm=!1,so===null&&JD.get("logging_enabled")===!0&&qD()),so){const A=na.apply(null,e);so(A)}},ra=function(e){return function(...A){se(e,...A)}},gh=function(...e){const A="FIREBASE INTERNAL ERROR: "+na(...e);Si.error(A)},sn=function(...e){const A=`FIREBASE FATAL ERROR: ${na(...e)}`;throw Si.error(A),new Error(A)},ye=function(...e){const A="FIREBASE WARNING: "+na(...e);Si.warn(A)},AN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tg=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},eN=function(e){if(document.readyState==="complete")e();else{let A=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}A||(A=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zi="[MIN_NAME]",kr="[MAX_NAME]",Or=function(e,A){if(e===A)return 0;if(e===zi||A===kr)return-1;if(A===zi||e===kr)return 1;{const t=$m(e),n=$m(A);return t!==null?n!==null?t-n===0?e.length-A.length:t-n:-1:n!==null?1:e<A?-1:1}},tN=function(e,A){return e===A?0:e<A?-1:1},Fs=function(e,A){if(A&&e in A)return A[e];throw new Error("Missing required key ("+e+") in object: "+$A(A))},ng=function(e){if(typeof e!="object"||e===null)return $A(e);const A=[];for(const n in e)A.push(n);A.sort();let t="{";for(let n=0;n<A.length;n++)n!==0&&(t+=","),t+=$A(A[n]),t+=":",t+=ng(e[A[n]]);return t+="}",t},B_=function(e,A){const t=e.length;if(t<=A)return[e];const n=[];for(let r=0;r<t;r+=A)r+A>t?n.push(e.substring(r,t)):n.push(e.substring(r,r+A));return n};function ce(e,A){for(const t in e)e.hasOwnProperty(t)&&A(t,e[t])}const w_=function(e){S(!tg(e),"Invalid JSON number");const A=11,t=52,n=(1<<A-1)-1;let r,i,s,o,a;e===0?(i=0,s=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-n)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),n),i=o+n,s=Math.round(e*Math.pow(2,t-o)-Math.pow(2,t))):(i=0,s=Math.round(e/Math.pow(2,1-n-t))));const l=[];for(a=t;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=A;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(r?1:0),l.reverse();const c=l.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},nN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iN(e,A){let t="Unknown Error";e==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?t="Client doesn't have permission to access the desired data.":e==="unavailable"&&(t="The service is unavailable");const n=new Error(e+" at "+A._path.toString()+": "+t);return n.code=e.toUpperCase(),n}const sN=new RegExp("^-?(0*)\\d{1,10}$"),oN=-2147483648,aN=2147483647,$m=function(e){if(sN.test(e)){const A=Number(e);if(A>=oN&&A<=aN)return A}return null},os=function(e){try{e()}catch(A){setTimeout(()=>{const t=A.stack||"";throw ye("Exception was thrown by user callback.",t),A},Math.floor(0))}},lN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(e,A){const t=setTimeout(e,A);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class cN{constructor(A,t){this.appCheckProvider=t,this.appName=A.name,ht(A)&&A.settings.appCheckToken&&(this.serverAppAppCheckToken=A.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(A){if(this.serverAppAppCheckToken){if(A)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(A):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(A).then(t,n):t(null)},0)})}addTokenChangeListener(A){var t;(t=this.appCheckProvider)==null||t.get().then(n=>n.addTokenListener(A))}notifyForInvalidToken(){ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uN{constructor(A,t,n){this.appName_=A,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(A){return this.auth_?this.auth_.getToken(A).catch(t=>t&&t.code==="auth/token-not-initialized"?(se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(A).then(t,n):t(null)},0)})}addTokenChangeListener(A){this.auth_?this.auth_.addAuthTokenListener(A):this.authProvider_.get().then(t=>t.addAuthTokenListener(A))}removeTokenChangeListener(A){this.authProvider_.get().then(t=>t.removeAuthTokenListener(A))}notifyForInvalidToken(){let A='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?A+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?A+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':A+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ye(A)}}class Il{constructor(A){this.accessToken=A}getToken(A){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(A){A(this.accessToken)}removeTokenChangeListener(A){}notifyForInvalidToken(){}}Il.OWNER="owner";/**
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
 */const rg="5",m_="v",C_="s",v_="r",y_="f",Q_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,__="ls",E_="p",Bh="ac",U_="websocket",F_="long_polling";/**
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
 */class I_{constructor(A,t,n,r,i=!1,s="",o=!1,a=!1,l=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=l,this._host=A.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+A)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(A){A!==this.internalHost&&(this.internalHost=A,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let A=this.toURLString();return this.persistenceKey&&(A+="<"+this.persistenceKey+">"),A}toURLString(){const A=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${A}${this.host}/${t}`}}function dN(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function S_(e,A,t){S(typeof A=="string","typeof type must == string"),S(typeof t=="object","typeof params must == object");let n;if(A===U_)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(A===F_)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+A);dN(e)&&(t.ns=e.namespace);const r=[];return ce(t,(i,s)=>{r.push(i+"="+s)}),n+r.join("&")}/**
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
 */class fN{constructor(){this.counters_={}}incrementCounter(A,t=1){Dt(this.counters_,A)||(this.counters_[A]=0),this.counters_[A]+=t}get(){return ak(this.counters_)}}/**
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
 */const Dd={},Nd={};function ig(e){const A=e.toString();return Dd[A]||(Dd[A]=new fN),Dd[A]}function hN(e,A){const t=e.toString();return Nd[t]||(Nd[t]=A()),Nd[t]}/**
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
 */class pN{constructor(A){this.onMessage_=A,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(A,t){this.closeAfterResponse=A,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(A,t){for(this.pendingResponses[A]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&os(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xm="start",gN="close",BN="pLPCommand",wN="pRTLPCB",x_="id",T_="pw",H_="ser",mN="cb",CN="seg",vN="ts",yN="d",QN="dframe",L_=1870,k_=30,_N=L_-k_,EN=25e3,UN=3e4;class Bi{constructor(A,t,n,r,i,s,o){this.connId=A,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ra(A),this.stats_=ig(t),this.urlFn=a=>(this.appCheckToken&&(a[Bh]=this.appCheckToken),S_(t,F_,a))}open(A,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pN(A),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UN)),eN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sg((...i)=>{const[s,o,a,l,c]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===Xm)this.id=o,this.password=a;else if(s===gN)o?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(o,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...i)=>{const[s,o]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(s,o)},()=>{this.onClosed_()},this.urlFn);const n={};n[Xm]="t",n[H_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[mN]=this.scriptTagHolder.uniqueCallbackIdentifier),n[m_]=rg,this.transportSessionId&&(n[C_]=this.transportSessionId),this.lastSessionId&&(n[__]=this.lastSessionId),this.applicationId&&(n[E_]=this.applicationId),this.appCheckToken&&(n[Bh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(n[v_]=y_);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bi.forceAllow_=!0}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){return Bi.forceAllow_?!0:!Bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nN()&&!rN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(A){const t=$A(A);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=CQ(t),r=B_(n,_N);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(A,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[QN]="t",n[x_]=A,n[T_]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(A){const t=$A(A).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class sg{constructor(A,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZD(),window[BN+this.uniqueCallbackIdentifier]=A,window[wN+this.uniqueCallbackIdentifier]=t,this.myIFrame=sg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(o){se("frame writing exception"),o.stack&&se(o.stack),se(o)}}}static createIFrame_(){const A=document.createElement("iframe");if(A.style.display="none",document.body){document.body.appendChild(A);try{A.contentWindow.document||se("No IE domain setting required")}catch{const n=document.domain;A.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return A.contentDocument?A.doc=A.contentDocument:A.contentWindow?A.doc=A.contentWindow.document:A.document&&(A.doc=A.document),A}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const A=this.onDisconnect;A&&(this.onDisconnect=null,A())}startLongPoll(A,t){for(this.myID=A,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const A={};A[x_]=this.myID,A[T_]=this.myPW,A[H_]=this.currentSerial;let t=this.urlFn(A),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+k_+n.length<=L_;){const s=this.pendingSegs.shift();n=n+"&"+CN+r+"="+s.seg+"&"+vN+r+"="+s.ts+"&"+yN+r+"="+s.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(A,t,n){this.pendingSegs.push({seg:A,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(A,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(EN)),i=()=>{clearTimeout(r),n()};this.addTag(A,i)}addTag(A,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=A,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{se("Long-poll script failed to load: "+A),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
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
 */const FN=16384,IN=45e3;let yc=null;typeof MozWebSocket<"u"?yc=MozWebSocket:typeof WebSocket<"u"&&(yc=WebSocket);class pt{constructor(A,t,n,r,i,s,o){this.connId=A,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ra(this.connId),this.stats_=ig(t),this.connURL=pt.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(A,t,n,r,i){const s={};return s[m_]=rg,typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(s[v_]=y_),t&&(s[C_]=t),n&&(s[__]=n),r&&(s[Bh]=r),i&&(s[E_]=i),S_(A,U_,s)}open(A,t){this.onDisconnect=t,this.onMessage=A,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let n;IQ(),this.mySock=new yc(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let A=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(A=!0)}return!A&&yc!==null&&!pt.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(A){if(this.frames.push(A),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Lo(t);this.onMessage(n)}}handleNewFrameCount_(A){this.totalFrames=A,this.frames=[]}extractFrameCount_(A){if(S(this.frames===null,"We already have a frame buffer"),A.length<=6){const t=Number(A);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),A}handleIncomingFrame(A){if(this.mySock===null)return;const t=A.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(A){this.resetKeepAlive();const t=$A(A);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=B_(t,FN);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IN))}sendString_(A){try{this.mySock.send(A)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
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
 */class Do{static get ALL_TRANSPORTS(){return[Bi,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(A){this.initTransports_(A)}initTransports_(A){const t=pt&&pt.isAvailable();let n=t&&!pt.previouslyFailed();if(A.webSocketOnly&&(t||ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[pt];else{const r=this.transports_=[];for(const i of Do.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Do.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Do.globalTransportInitialized_=!1;/**
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
 */const SN=6e4,xN=5e3,TN=10*1024,HN=100*1024,Rd="t",Ym="d",LN="s",Jm="r",kN="e",Zm="o",qm="a",AC="n",eC="p",bN="h";class DN{constructor(A,t,n,r,i,s,o,a,l,c){this.id=A,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ra("c:"+this.id+":"),this.transportManager_=new Do(t),this.log_("Connection created"),this.start_()}start_(){const A=this.transportManager_.initialTransport();this.conn_=new A(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=A.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=A.healthyTimeout||0;r>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(A){return t=>{A===this.conn_?this.onConnectionLost_(t):A===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(A){return t=>{this.state_!==2&&(A===this.rx_?this.onPrimaryMessageReceived_(t):A===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(A){const t={t:"d",d:A};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(A){if(Rd in A){const t=A[Rd];t===qm?this.upgradeIfSecondaryHealthy_():t===Jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(A){const t=Fs("t",A),n=Fs("d",A);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eC,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:AC,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(A){const t=Fs("t",A),n=Fs("d",A);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(A){this.onPrimaryResponse_(),this.onMessage_(A)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(A){const t=Fs(Rd,A);if(Ym in A){const n=A[Ym];if(t===bN){const r={...n};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===AC){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===LN?this.onConnectionShutdown_(n):t===Jm?this.onReset_(n):t===kN?gh("Server Error: "+n):t===Zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gh("Unknown control packet command: "+t)}}onHandshake_(A){const t=A.ts,n=A.v,r=A.h;this.sessionId=A.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),rg!==n&&ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const A=this.transportManager_.upgradeTransport();A&&this.startUpgrade_(A)}startUpgrade_(A){this.secondaryConn_=new A(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=A.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SN))}onReset_(A){this.log_("Reset packet received.  New host: "+A),this.repoInfo_.host=A,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(A,t){this.log_("Realtime connection established."),this.conn_=A,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eC,d:{}}}))}onSecondaryConnectionLost_(){const A=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===A||this.rx_===A)&&this.close()}onConnectionLost_(A){this.conn_=null,!A&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(A){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(A),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(A){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(A)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class b_{put(A,t,n,r){}merge(A,t,n,r){}refreshAuthToken(A){}refreshAppCheckToken(A){}onDisconnectPut(A,t,n){}onDisconnectMerge(A,t,n){}onDisconnectCancel(A,t){}reportStats(A){}}/**
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
 */class D_{constructor(A){this.allowedEvents_=A,this.listeners_={},S(Array.isArray(A)&&A.length>0,"Requires a non-empty array")}trigger(A,...t){if(Array.isArray(this.listeners_[A])){const n=[...this.listeners_[A]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(A,t,n){this.validateEventType_(A),this.listeners_[A]=this.listeners_[A]||[],this.listeners_[A].push({callback:t,context:n});const r=this.getInitialEvent(A);r&&t.apply(n,r)}off(A,t,n){this.validateEventType_(A);const r=this.listeners_[A]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(A){S(this.allowedEvents_.find(t=>t===A),"Unknown event: "+A)}}/**
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
 */class Qc extends D_{static getInstance(){return new Qc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(A){return S(A==="online","Unknown event type: "+A),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const tC=32,nC=768;class pA{constructor(A,t){if(t===void 0){this.pieces_=A.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=A,this.pieceNum_=t}toString(){let A="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(A+="/"+this.pieces_[t]);return A||"/"}}function sA(){return new pA("")}function J(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Xn(e){return e.pieces_.length-e.pieceNum_}function mA(e){let A=e.pieceNum_;return A<e.pieces_.length&&A++,new pA(e.pieces_,A)}function og(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function NN(e){let A="";for(let t=e.pieceNum_;t<e.pieces_.length;t++)e.pieces_[t]!==""&&(A+="/"+encodeURIComponent(String(e.pieces_[t])));return A||"/"}function No(e,A=0){return e.pieces_.slice(e.pieceNum_+A)}function N_(e){if(e.pieceNum_>=e.pieces_.length)return null;const A=[];for(let t=e.pieceNum_;t<e.pieces_.length-1;t++)A.push(e.pieces_[t]);return new pA(A,0)}function kA(e,A){const t=[];for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);if(A instanceof pA)for(let n=A.pieceNum_;n<A.pieces_.length;n++)t.push(A.pieces_[n]);else{const n=A.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new pA(t,0)}function AA(e){return e.pieceNum_>=e.pieces_.length}function Ce(e,A){const t=J(e),n=J(A);if(t===null)return A;if(t===n)return Ce(mA(e),mA(A));throw new Error("INTERNAL ERROR: innerPath ("+A+") is not within outerPath ("+e+")")}function RN(e,A){const t=No(e,0),n=No(A,0);for(let r=0;r<t.length&&r<n.length;r++){const i=Or(t[r],n[r]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function ag(e,A){if(Xn(e)!==Xn(A))return!1;for(let t=e.pieceNum_,n=A.pieceNum_;t<=e.pieces_.length;t++,n++)if(e.pieces_[t]!==A.pieces_[n])return!1;return!0}function nt(e,A){let t=e.pieceNum_,n=A.pieceNum_;if(Xn(e)>Xn(A))return!1;for(;t<e.pieces_.length;){if(e.pieces_[t]!==A.pieces_[n])return!1;++t,++n}return!0}class ON{constructor(A,t){this.errorPrefix_=t,this.parts_=No(A,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=pu(this.parts_[n]);R_(this)}}function MN(e,A){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(A),e.byteLength_+=pu(A),R_(e)}function PN(e){const A=e.parts_.pop();e.byteLength_-=pu(A),e.parts_.length>0&&(e.byteLength_-=1)}function R_(e){if(e.byteLength_>nC)throw new Error(e.errorPrefix_+"has a key path longer than "+nC+" bytes ("+e.byteLength_+").");if(e.parts_.length>tC)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tC+") or object contains a cycle "+or(e))}function or(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class lg extends D_{static getInstance(){return new lg}constructor(){super(["visible"]);let A,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",A="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",A="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",A="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",A="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[A];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(A){return S(A==="visible","Unknown event type: "+A),[this.visible_]}}/**
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
 */const Is=1e3,KN=60*5*1e3,rC=30*1e3,VN=1.3,GN=3e4,WN="server_kill",iC=3;class Zt extends b_{constructor(A,t,n,r,i,s,o,a){if(super(),this.repoInfo_=A,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Zt.nextPersistentConnectionId_++,this.log_=ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=KN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!IQ())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lg.getInstance().on("visible",this.onVisible_,this),A.host.indexOf("fblocal")===-1&&Qc.getInstance().on("online",this.onOnline_,this)}sendRequest(A,t,n){const r=++this.requestNumber_,i={r,a:A,b:t};this.log_($A(i)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(A){this.initConnection_();const t=new Zo,r={action:"g",request:{p:A._path.toString(),q:A._queryObject},onComplete:s=>{const o=s.d;s.s==="ok"?t.resolve(o):t.reject(o)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(A,t,n,r){this.initConnection_();const i=A._queryIdentifier,s=A._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),S(A._queryParams.isDefault()||!A._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:A,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(A){const t=this.outstandingGets_[A];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[A],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(A){const t=A.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";A.tag&&(i.q=t._queryObject,i.t=A.tag),i.h=A.hashFn(),this.sendRequest(s,i,o=>{const a=o.d,l=o.s;Zt.warnOnListenWarnings_(a,t),(this.listens.get(n)&&this.listens.get(n).get(r))===A&&(this.log_("listen response",o),l!=="ok"&&this.removeListen_(n,r),A.onComplete&&A.onComplete(l,a))})}static warnOnListenWarnings_(A,t){if(A&&typeof A=="object"&&Dt(A,"w")){const n=Gi(A,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(A){this.authToken_=A,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(A)}reduceReconnectDelayIfAdminCredential_(A){(A&&A.length===40||Fk(A))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rC)}refreshAppCheckToken(A){this.appCheckToken_=A,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const A=this.authToken_,t=Uk(A)?"auth":"gauth",n={cred:A};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,s=r.d||"error";this.authToken_===A&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},A=>{const t=A.s,n=A.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(A,t){const n=A._path.toString(),r=A._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),S(A._queryParams.isDefault()||!A._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,A._queryObject,t)}sendUnlisten_(A,t,n,r){this.log_("Unlisten on "+A+" for "+t);const i={p:A},s="n";r&&(i.q=n,i.t=r),this.sendRequest(s,i)}onDisconnectPut(A,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",A,t,n):this.onDisconnectRequestQueue_.push({pathString:A,action:"o",data:t,onComplete:n})}onDisconnectMerge(A,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",A,t,n):this.onDisconnectRequestQueue_.push({pathString:A,action:"om",data:t,onComplete:n})}onDisconnectCancel(A,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",A,null,t):this.onDisconnectRequestQueue_.push({pathString:A,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(A,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+A,i),this.sendRequest(A,i,s=>{r&&setTimeout(()=>{r(s.s,s.d)},Math.floor(0))})}put(A,t,n,r){this.putInternal("p",A,t,n,r)}merge(A,t,n,r){this.putInternal("m",A,t,n,r)}putInternal(A,t,n,r,i){this.initConnection_();const s={p:t,d:n};i!==void 0&&(s.h=i),this.outstandingPuts_.push({action:A,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(A){const t=this.outstandingPuts_[A].action,n=this.outstandingPuts_[A].request,r=this.outstandingPuts_[A].onComplete;this.outstandingPuts_[A].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[A],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(A){if(this.connected_){const t={c:A};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(A){if("r"in A){this.log_("from server: "+$A(A));const t=A.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(A.b))}else{if("error"in A)throw"A server-side error has occurred: "+A.error;"a"in A&&this.onDataPush_(A.a,A.b)}}onDataPush_(A,t){this.log_("handleServerMessage",A,t),A==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):A==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):A==="c"?this.onListenRevoked_(t.p,t.q):A==="ac"?this.onAuthRevoked_(t.s,t.d):A==="apc"?this.onAppCheckRevoked_(t.s,t.d):A==="sd"?this.onSecurityDebugPacket_(t):gh("Unrecognized action received from server: "+$A(A)+`
Are you using the latest client?`)}onReady_(A,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(A),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(A){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(A))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(A){A&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=A}onOnline_(A){A?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GN&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const A=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-A);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const A=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Zt.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(u){S(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(u)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?se("getToken() completed but was canceled"):(se("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,o=new DN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,A,t,n,h=>{ye(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(WN)},i))}catch(u){this.log_("Failed to get token: "+u),s||(this.repoInfo_.nodeAdmin&&ye(u),a())}}}interrupt(A){se("Interrupting connection for reason: "+A),this.interruptReasons_[A]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(A){se("Resuming connection for reason: "+A),delete this.interruptReasons_[A],oh(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(A){const t=A-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let A=0;A<this.outstandingPuts_.length;A++){const t=this.outstandingPuts_[A];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[A],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(A,t){let n;t?n=t.map(i=>ng(i)).join("$"):n="default";const r=this.removeListen_(A,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(A,t){const n=new pA(A).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(A,t){se("Auth token revoked: "+A+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(A==="invalid_token"||A==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iC&&(this.reconnectDelay_=rC,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(A,t){se("App check token revoked: "+A+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(A==="invalid_token"||A==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iC&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(A){this.securityDebugCallback_?this.securityDebugCallback_(A):"msg"in A&&console.log("FIREBASE: "+A.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const A of this.listens.values())for(const t of A.values())this.sendListen_(t);for(let A=0;A<this.outstandingPuts_.length;A++)this.outstandingPuts_[A]&&this.sendPut_(A);for(;this.onDisconnectRequestQueue_.length;){const A=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(A.action,A.pathString,A.data,A.onComplete)}for(let A=0;A<this.outstandingGets_.length;A++)this.outstandingGets_[A]&&this.sendGet_(A)}sendConnectStats_(){const A={};let t="js";A["sdk."+t+"."+h_.replace(/\./g,"-")]=1,Kp()?A["framework.cordova"]=1:FQ()&&(A["framework.reactnative"]=1),this.reportStats(A)}shouldReconnect_(){const A=Qc.getInstance().currentlyOnline();return oh(this.interruptReasons_)&&A}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */class Z{constructor(A,t){this.name=A,this.node=t}static Wrap(A,t){return new Z(A,t)}}/**
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
 */class mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(A,t){const n=new Z(zi,A),r=new Z(zi,t);return this.compare(n,r)!==0}minPost(){return Z.MIN}}/**
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
 */let tl;class O_ extends mu{static get __EMPTY_NODE(){return tl}static set __EMPTY_NODE(A){tl=A}compare(A,t){return Or(A.name,t.name)}isDefinedOn(A){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(A,t){return!1}minPost(){return Z.MIN}maxPost(){return new Z(kr,tl)}makePost(A,t){return S(typeof A=="string","KeyIndex indexValue must always be a string."),new Z(A,tl)}toString(){return".key"}}const xi=new O_;/**
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
 */class nl{constructor(A,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!A.isEmpty();)if(A=A,s=t?n(A.key,t):1,r&&(s*=-1),s<0)this.isReverse_?A=A.left:A=A.right;else if(s===0){this.nodeStack_.push(A);break}else this.nodeStack_.push(A),this.isReverse_?A=A.right:A=A.left}getNext(){if(this.nodeStack_.length===0)return null;let A=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(A.key,A.value):t={key:A.key,value:A.value},this.isReverse_)for(A=A.left;!A.isEmpty();)this.nodeStack_.push(A),A=A.right;else for(A=A.right;!A.isEmpty();)this.nodeStack_.push(A),A=A.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const A=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(A.key,A.value):{key:A.key,value:A.value}}}class te{constructor(A,t,n,r,i){this.key=A,this.value=t,this.color=n??te.RED,this.left=r??Te.EMPTY_NODE,this.right=i??Te.EMPTY_NODE}copy(A,t,n,r,i){return new te(A??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(A){return this.left.inorderTraversal(A)||!!A(this.key,this.value)||this.right.inorderTraversal(A)}reverseTraversal(A){return this.right.reverseTraversal(A)||A(this.key,this.value)||this.left.reverseTraversal(A)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(A,t,n){let r=this;const i=n(A,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(A,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(A,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let A=this;return!A.left.isRed_()&&!A.left.left.isRed_()&&(A=A.moveRedLeft_()),A=A.copy(null,null,null,A.left.removeMin_(),null),A.fixUp_()}remove(A,t){let n,r;if(n=this,t(A,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(A,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(A,n.key)===0){if(n.right.isEmpty())return Te.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(A,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let A=this;return A.right.isRed_()&&!A.left.isRed_()&&(A=A.rotateLeft_()),A.left.isRed_()&&A.left.left.isRed_()&&(A=A.rotateRight_()),A.left.isRed_()&&A.right.isRed_()&&(A=A.colorFlip_()),A}moveRedLeft_(){let A=this.colorFlip_();return A.right.left.isRed_()&&(A=A.copy(null,null,null,null,A.right.rotateRight_()),A=A.rotateLeft_(),A=A.colorFlip_()),A}moveRedRight_(){let A=this.colorFlip_();return A.left.left.isRed_()&&(A=A.rotateRight_(),A=A.colorFlip_()),A}rotateLeft_(){const A=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,A,null)}rotateRight_(){const A=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,A)}colorFlip_(){const A=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,A,t)}checkMaxDepth_(){const A=this.check_();return Math.pow(2,A)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const A=this.left.check_();if(A!==this.right.check_())throw new Error("Black depths differ");return A+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class jN{copy(A,t,n,r,i){return this}insert(A,t,n){return new te(A,t,null)}remove(A,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(A){return!1}reverseTraversal(A){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(A,t=Te.EMPTY_NODE){this.comparator_=A,this.root_=t}insert(A,t){return new Te(this.comparator_,this.root_.insert(A,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(A){return new Te(this.comparator_,this.root_.remove(A,this.comparator_).copy(null,null,te.BLACK,null,null))}get(A){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(A,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(A){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(A,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(A){return this.root_.inorderTraversal(A)}reverseTraversal(A){return this.root_.reverseTraversal(A)}getIterator(A){return new nl(this.root_,null,this.comparator_,!1,A)}getIteratorFrom(A,t){return new nl(this.root_,A,this.comparator_,!1,t)}getReverseIteratorFrom(A,t){return new nl(this.root_,A,this.comparator_,!0,t)}getReverseIterator(A){return new nl(this.root_,null,this.comparator_,!0,A)}}Te.EMPTY_NODE=new jN;/**
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
 */function zN(e,A){return Or(e.name,A.name)}function cg(e,A){return Or(e,A)}/**
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
 */let wh;function $N(e){wh=e}const M_=function(e){return typeof e=="number"?"number:"+w_(e):"string:"+e},P_=function(e){if(e.isLeafNode()){const A=e.val();S(typeof A=="string"||typeof A=="number"||typeof A=="object"&&Dt(A,".sv"),"Priority must be a string or number.")}else S(e===wh||e.isEmpty(),"priority of unexpected type.");S(e===wh||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sC;class qA{static set __childrenNodeConstructor(A){sC=A}static get __childrenNodeConstructor(){return sC}constructor(A,t=qA.__childrenNodeConstructor.EMPTY_NODE){this.value_=A,this.priorityNode_=t,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),P_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(A){return new qA(this.value_,A)}getImmediateChild(A){return A===".priority"?this.priorityNode_:qA.__childrenNodeConstructor.EMPTY_NODE}getChild(A){return AA(A)?this:J(A)===".priority"?this.priorityNode_:qA.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(A,t){return null}updateImmediateChild(A,t){return A===".priority"?this.updatePriority(t):t.isEmpty()&&A!==".priority"?this:qA.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(A,t).updatePriority(this.priorityNode_)}updateChild(A,t){const n=J(A);return n===null?t:t.isEmpty()&&n!==".priority"?this:(S(n!==".priority"||Xn(A)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,qA.__childrenNodeConstructor.EMPTY_NODE.updateChild(mA(A),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(A,t){return!1}val(A){return A&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let A="";this.priorityNode_.isEmpty()||(A+="priority:"+M_(this.priorityNode_.val())+":");const t=typeof this.value_;A+=t+":",t==="number"?A+=w_(this.value_):A+=this.value_,this.lazyHash_=g_(A)}return this.lazyHash_}getValue(){return this.value_}compareTo(A){return A===qA.__childrenNodeConstructor.EMPTY_NODE?1:A instanceof qA.__childrenNodeConstructor?-1:(S(A.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(A))}compareToLeafNode_(A){const t=typeof A.value_,n=typeof this.value_,r=qA.VALUE_TYPE_ORDER.indexOf(t),i=qA.VALUE_TYPE_ORDER.indexOf(n);return S(r>=0,"Unknown leaf type: "+t),S(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<A.value_?-1:this.value_===A.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(A){if(A===this)return!0;if(A.isLeafNode()){const t=A;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qA.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let K_,V_;function XN(e){K_=e}function YN(e){V_=e}class JN extends mu{compare(A,t){const n=A.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Or(A.name,t.name):i}isDefinedOn(A){return!A.getPriority().isEmpty()}indexedValueChanged(A,t){return!A.getPriority().equals(t.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(kr,new qA("[PRIORITY-POST]",V_))}makePost(A,t){const n=K_(A);return new Z(t,new qA("[PRIORITY-POST]",n))}toString(){return".priority"}}const bA=new JN;/**
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
 */const ZN=Math.log(2);class qN{constructor(A){const t=i=>parseInt(Math.log(i)/ZN,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(A+1),this.current_=this.count-1;const r=n(this.count);this.bits_=A+1&r}nextBitIsOne(){const A=!(this.bits_&1<<this.current_);return this.current_--,A}}const _c=function(e,A,t,n){e.sort(A);const r=function(a,l){const c=l-a;let u,d;if(c===0)return null;if(c===1)return u=e[a],d=t?t(u):u,new te(d,u.node,te.BLACK,null,null);{const h=parseInt(c/2,10)+a,g=r(a,h),w=r(h+1,l);return u=e[h],d=t?t(u):u,new te(d,u.node,te.BLACK,g,w)}},i=function(a){let l=null,c=null,u=e.length;const d=function(g,w){const _=u-g,p=u;u-=g;const f=r(_+1,p),B=e[_],C=t?t(B):B;h(new te(C,B.node,w,null,f))},h=function(g){l?(l.left=g,l=g):(c=g,l=g)};for(let g=0;g<a.count;++g){const w=a.nextBitIsOne(),_=Math.pow(2,a.count-(g+1));w?d(_,te.BLACK):(d(_,te.BLACK),d(_,te.RED))}return c},s=new qN(e.length),o=i(s);return new Te(n||A,o)};/**
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
 */let Od;const qr={};class Xt{static get Default(){return S(qr&&bA,"ChildrenNode.ts has not been loaded"),Od=Od||new Xt({".priority":qr},{".priority":bA}),Od}constructor(A,t){this.indexes_=A,this.indexSet_=t}get(A){const t=Gi(this.indexes_,A);if(!t)throw new Error("No index defined for "+A);return t instanceof Te?t:null}hasIndex(A){return Dt(this.indexSet_,A.toString())}addIndex(A,t){S(A!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Z.Wrap);let s=i.getNext();for(;s;)r=r||A.isDefinedOn(s.node),n.push(s),s=i.getNext();let o;r?o=_c(n,A.getCompare()):o=qr;const a=A.toString(),l={...this.indexSet_};l[a]=A;const c={...this.indexes_};return c[a]=o,new Xt(c,l)}addToIndexes(A,t){const n=hc(this.indexes_,(r,i)=>{const s=Gi(this.indexSet_,i);if(S(s,"Missing index implementation for "+i),r===qr)if(s.isDefinedOn(A.node)){const o=[],a=t.getIterator(Z.Wrap);let l=a.getNext();for(;l;)l.name!==A.name&&o.push(l),l=a.getNext();return o.push(A),_c(o,s.getCompare())}else return qr;else{const o=t.get(A.name);let a=r;return o&&(a=a.remove(new Z(A.name,o))),a.insert(A,A.node)}});return new Xt(n,this.indexSet_)}removeFromIndexes(A,t){const n=hc(this.indexes_,r=>{if(r===qr)return r;{const i=t.get(A.name);return i?r.remove(new Z(A.name,i)):r}});return new Xt(n,this.indexSet_)}}/**
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
 */let Ss;class V{static get EMPTY_NODE(){return Ss||(Ss=new V(new Te(cg),null,Xt.Default))}constructor(A,t,n){this.children_=A,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&P_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(A){return this.children_.isEmpty()?this:new V(this.children_,A,this.indexMap_)}getImmediateChild(A){if(A===".priority")return this.getPriority();{const t=this.children_.get(A);return t===null?Ss:t}}getChild(A){const t=J(A);return t===null?this:this.getImmediateChild(t).getChild(mA(A))}hasChild(A){return this.children_.get(A)!==null}updateImmediateChild(A,t){if(S(t,"We should always be passing snapshot nodes"),A===".priority")return this.updatePriority(t);{const n=new Z(A,t);let r,i;t.isEmpty()?(r=this.children_.remove(A),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(A,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Ss:this.priorityNode_;return new V(r,s,i)}}updateChild(A,t){const n=J(A);if(n===null)return t;{S(J(A)!==".priority"||Xn(A)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(mA(A),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(A){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(bA,(s,o)=>{t[s]=o.val(A),n++,i&&V.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!A&&i&&r<2*n){const s=[];for(const o in t)s[o]=t[o];return s}else return A&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let A="";this.getPriority().isEmpty()||(A+="priority:"+M_(this.getPriority().val())+":"),this.forEachChild(bA,(t,n)=>{const r=n.hash();r!==""&&(A+=":"+t+":"+r)}),this.lazyHash_=A===""?"":g_(A)}return this.lazyHash_}getPredecessorChildName(A,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new Z(A,t));return i?i.name:null}else return this.children_.getPredecessorKey(A)}getFirstChildName(A){const t=this.resolveIndex_(A);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(A){const t=this.getFirstChildName(A);return t?new Z(t,this.children_.get(t)):null}getLastChildName(A){const t=this.resolveIndex_(A);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(A){const t=this.getLastChildName(A);return t?new Z(t,this.children_.get(t)):null}forEachChild(A,t){const n=this.resolveIndex_(A);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(A){return this.getIteratorFrom(A.minPost(),A)}getIteratorFrom(A,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(A,r=>r);{const r=this.children_.getIteratorFrom(A.name,Z.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,A)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(A){return this.getReverseIteratorFrom(A.maxPost(),A)}getReverseIteratorFrom(A,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(A,r=>r);{const r=this.children_.getReverseIteratorFrom(A.name,Z.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,A)>0;)r.getNext(),i=r.peek();return r}}compareTo(A){return this.isEmpty()?A.isEmpty()?0:-1:A.isLeafNode()||A.isEmpty()?1:A===ia?-1:0}withIndex(A){if(A===xi||this.indexMap_.hasIndex(A))return this;{const t=this.indexMap_.addIndex(A,this.children_);return new V(this.children_,this.priorityNode_,t)}}isIndexed(A){return A===xi||this.indexMap_.hasIndex(A)}equals(A){if(A===this)return!0;if(A.isLeafNode())return!1;{const t=A;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(bA),r=t.getIterator(bA);let i=n.getNext(),s=r.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=n.getNext(),s=r.getNext()}return i===null&&s===null}else return!1;else return!1}}resolveIndex_(A){return A===xi?null:this.indexMap_.get(A.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AR extends V{constructor(){super(new Te(cg),V.EMPTY_NODE,Xt.Default)}compareTo(A){return A===this?0:1}equals(A){return A===this}getPriority(){return this}getImmediateChild(A){return V.EMPTY_NODE}isEmpty(){return!1}}const ia=new AR;Object.defineProperties(Z,{MIN:{value:new Z(zi,V.EMPTY_NODE)},MAX:{value:new Z(kr,ia)}});O_.__EMPTY_NODE=V.EMPTY_NODE;qA.__childrenNodeConstructor=V;$N(ia);YN(ia);/**
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
 */const eR=!0;function zA(e,A=null){if(e===null)return V.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(A=e[".priority"]),S(A===null||typeof A=="string"||typeof A=="number"||typeof A=="object"&&".sv"in A,"Invalid priority type found: "+typeof A),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const t=e;return new qA(t,zA(A))}if(!(e instanceof Array)&&eR){const t=[];let n=!1;if(ce(e,(s,o)=>{if(s.substring(0,1)!=="."){const a=zA(o);a.isEmpty()||(n=n||!a.getPriority().isEmpty(),t.push(new Z(s,a)))}}),t.length===0)return V.EMPTY_NODE;const i=_c(t,zN,s=>s.name,cg);if(n){const s=_c(t,bA.getCompare());return new V(i,zA(A),new Xt({".priority":s},{".priority":bA}))}else return new V(i,zA(A),Xt.Default)}else{let t=V.EMPTY_NODE;return ce(e,(n,r)=>{if(Dt(e,n)&&n.substring(0,1)!=="."){const i=zA(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(zA(A))}}XN(zA);/**
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
 */class tR extends mu{constructor(A){super(),this.indexPath_=A,S(!AA(A)&&J(A)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(A){return A.getChild(this.indexPath_)}isDefinedOn(A){return!A.getChild(this.indexPath_).isEmpty()}compare(A,t){const n=this.extractChild(A.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Or(A.name,t.name):i}makePost(A,t){const n=zA(A),r=V.EMPTY_NODE.updateChild(this.indexPath_,n);return new Z(t,r)}maxPost(){const A=V.EMPTY_NODE.updateChild(this.indexPath_,ia);return new Z(kr,A)}toString(){return No(this.indexPath_,0).join("/")}}/**
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
 */class nR extends mu{compare(A,t){const n=A.node.compareTo(t.node);return n===0?Or(A.name,t.name):n}isDefinedOn(A){return!0}indexedValueChanged(A,t){return!A.equals(t)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(A,t){const n=zA(A);return new Z(t,n)}toString(){return".value"}}const rR=new nR;/**
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
 */function G_(e){return{type:"value",snapshotNode:e}}function $i(e,A){return{type:"child_added",snapshotNode:A,childName:e}}function Ro(e,A){return{type:"child_removed",snapshotNode:A,childName:e}}function Oo(e,A,t){return{type:"child_changed",snapshotNode:A,childName:e,oldSnap:t}}function iR(e,A){return{type:"child_moved",snapshotNode:A,childName:e}}/**
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
 */class ug{constructor(A){this.index_=A}updateChild(A,t,n,r,i,s){S(A.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=A.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()||(s!=null&&(n.isEmpty()?A.hasChild(t)?s.trackChildChange(Ro(t,o)):S(A.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange($i(t,n)):s.trackChildChange(Oo(t,n,o))),A.isLeafNode()&&n.isEmpty())?A:A.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(A,t,n){return n!=null&&(A.isLeafNode()||A.forEachChild(bA,(r,i)=>{t.hasChild(r)||n.trackChildChange(Ro(r,i))}),t.isLeafNode()||t.forEachChild(bA,(r,i)=>{if(A.hasChild(r)){const s=A.getImmediateChild(r);s.equals(i)||n.trackChildChange(Oo(r,i,s))}else n.trackChildChange($i(r,i))})),t.withIndex(this.index_)}updatePriority(A,t){return A.isEmpty()?V.EMPTY_NODE:A.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Mo{constructor(A){this.indexedFilter_=new ug(A.getIndex()),this.index_=A.getIndex(),this.startPost_=Mo.getStartPost_(A),this.endPost_=Mo.getEndPost_(A),this.startIsInclusive_=!A.startAfterSet_,this.endIsInclusive_=!A.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(A){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),A)<=0:this.index_.compare(this.getStartPost(),A)<0,n=this.endIsInclusive_?this.index_.compare(A,this.getEndPost())<=0:this.index_.compare(A,this.getEndPost())<0;return t&&n}updateChild(A,t,n,r,i,s){return this.matches(new Z(t,n))||(n=V.EMPTY_NODE),this.indexedFilter_.updateChild(A,t,n,r,i,s)}updateFullNode(A,t,n){t.isLeafNode()&&(t=V.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(V.EMPTY_NODE);const i=this;return t.forEachChild(bA,(s,o)=>{i.matches(new Z(s,o))||(r=r.updateImmediateChild(s,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(A,r,n)}updatePriority(A,t){return A}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(A){if(A.hasStart()){const t=A.getIndexStartName();return A.getIndex().makePost(A.getIndexStartValue(),t)}else return A.getIndex().minPost()}static getEndPost_(A){if(A.hasEnd()){const t=A.getIndexEndName();return A.getIndex().makePost(A.getIndexEndValue(),t)}else return A.getIndex().maxPost()}}/**
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
 */class sR{constructor(A){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Mo(A),this.index_=A.getIndex(),this.limit_=A.getLimit(),this.reverse_=!A.isViewFromLeft(),this.startIsInclusive_=!A.startAfterSet_,this.endIsInclusive_=!A.endBeforeSet_}updateChild(A,t,n,r,i,s){return this.rangedFilter_.matches(new Z(t,n))||(n=V.EMPTY_NODE),A.getImmediateChild(t).equals(n)?A:A.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(A,t,n,r,i,s):this.fullLimitUpdateChild_(A,t,n,i,s)}updateFullNode(A,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=V.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;i.hasNext()&&s<this.limit_;){const o=i.getNext();if(this.withinDirectionalStart(o))if(this.withinDirectionalEnd(o))r=r.updateImmediateChild(o.name,o.node),s++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(V.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let s=0;for(;i.hasNext();){const o=i.getNext();s<this.limit_&&this.withinDirectionalStart(o)&&this.withinDirectionalEnd(o)?s++:r=r.updateImmediateChild(o.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(A,r,n)}updatePriority(A,t){return A}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(A,t,n,r,i){let s;if(this.reverse_){const u=this.index_.getCompare();s=(d,h)=>u(h,d)}else s=this.index_.getCompare();const o=A;S(o.numChildren()===this.limit_,"");const a=new Z(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const u=o.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||o.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:s(d,a);if(c&&!n.isEmpty()&&h>=0)return i!=null&&i.trackChildChange(Oo(t,n,u)),o.updateImmediateChild(t,n);{i!=null&&i.trackChildChange(Ro(t,u));const w=o.updateImmediateChild(t,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange($i(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return n.isEmpty()?A:c&&s(l,a)>=0?(i!=null&&(i.trackChildChange(Ro(l.name,l.node)),i.trackChildChange($i(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,V.EMPTY_NODE)):A}}/**
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
 */class dg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=bA}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===bA}copy(){const A=new dg;return A.limitSet_=this.limitSet_,A.limit_=this.limit_,A.startSet_=this.startSet_,A.startAfterSet_=this.startAfterSet_,A.indexStartValue_=this.indexStartValue_,A.startNameSet_=this.startNameSet_,A.indexStartName_=this.indexStartName_,A.endSet_=this.endSet_,A.endBeforeSet_=this.endBeforeSet_,A.indexEndValue_=this.indexEndValue_,A.endNameSet_=this.endNameSet_,A.indexEndName_=this.indexEndName_,A.index_=this.index_,A.viewFrom_=this.viewFrom_,A}}function oR(e){return e.loadsAllData()?new ug(e.getIndex()):e.hasLimit()?new sR(e):new Mo(e)}function oC(e){const A={};if(e.isDefault())return A;let t;if(e.index_===bA?t="$priority":e.index_===rR?t="$value":e.index_===xi?t="$key":(S(e.index_ instanceof tR,"Unrecognized index type!"),t=e.index_.toString()),A.orderBy=$A(t),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";A[n]=$A(e.indexStartValue_),e.startNameSet_&&(A[n]+=","+$A(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";A[n]=$A(e.indexEndValue_),e.endNameSet_&&(A[n]+=","+$A(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?A.limitToFirst=e.limit_:A.limitToLast=e.limit_),A}function aC(e){const A={};if(e.startSet_&&(A.sp=e.indexStartValue_,e.startNameSet_&&(A.sn=e.indexStartName_),A.sin=!e.startAfterSet_),e.endSet_&&(A.ep=e.indexEndValue_,e.endNameSet_&&(A.en=e.indexEndName_),A.ein=!e.endBeforeSet_),e.limitSet_){A.l=e.limit_;let t=e.viewFrom_;t===""&&(e.isViewFromLeft()?t="l":t="r"),A.vf=t}return e.index_!==bA&&(A.i=e.index_.toString()),A}/**
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
 */class Ec extends b_{reportStats(A){throw new Error("Method not implemented.")}static getListenId_(A,t){return t!==void 0?"tag$"+t:(S(A._queryParams.isDefault(),"should have a tag if it's not a default query."),A._path.toString())}constructor(A,t,n,r){super(),this.repoInfo_=A,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ra("p:rest:"),this.listens_={}}listen(A,t,n,r){const i=A._path.toString();this.log_("Listen called for "+i+" "+A._queryIdentifier);const s=Ec.getListenId_(A,n),o={};this.listens_[s]=o;const a=oC(A._queryParams);this.restRequest_(i+".json",a,(l,c)=>{let u=c;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(i,u,!1,n),Gi(this.listens_,s)===o){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",r(d,null)}})}unlisten(A,t){const n=Ec.getListenId_(A,t);delete this.listens_[n]}get(A){const t=oC(A._queryParams),n=A._path.toString(),r=new Zo;return this.restRequest_(n+".json",t,(i,s)=>{let o=s;i===404&&(o=null,i=null),i===null?(this.onDataUpdate_(n,o,!1,null),r.resolve(o)):r.reject(new Error(o))}),r.promise}refreshAuthToken(A){}restRequest_(A,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+A+"?ns="+this.repoInfo_.namespace+rs(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&o.readyState===4){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let a=null;if(o.status>=200&&o.status<300){try{a=Lo(o.responseText)}catch{ye("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,a)}else o.status!==401&&o.status!==404&&ye("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
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
 */class aR{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(A){return this.rootNode_.getChild(A)}updateSnapshot(A,t){this.rootNode_=this.rootNode_.updateChild(A,t)}}/**
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
 */function Uc(){return{value:null,children:new Map}}function W_(e,A,t){if(AA(A))e.value=t,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(A,t);else{const n=J(A);e.children.has(n)||e.children.set(n,Uc());const r=e.children.get(n);A=mA(A),W_(r,A,t)}}function mh(e,A,t){e.value!==null?t(A,e.value):lR(e,(n,r)=>{const i=new pA(A.toString()+"/"+n);mh(r,i,t)})}function lR(e,A){e.children.forEach((t,n)=>{A(n,t)})}/**
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
 */class cR{constructor(A){this.collection_=A,this.last_=null}get(){const A=this.collection_.get(),t={...A};return this.last_&&ce(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=A,t}}/**
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
 */const lC=10*1e3,uR=30*1e3,dR=5*60*1e3;class fR{constructor(A,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cR(A);const n=lC+(uR-lC)*Math.random();oo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const A=this.statsListener_.get(),t={};let n=!1;ce(A,(r,i)=>{i>0&&Dt(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*dR))}}/**
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
 */var Bt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function fg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Fc{constructor(A,t,n){this.path=A,this.affectedTree=t,this.revert=n,this.type=Bt.ACK_USER_WRITE,this.source=fg()}operationForChild(A){if(AA(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pA(A));return new Fc(sA(),t,this.revert)}}else return S(J(this.path)===A,"operationForChild called for unrelated child."),new Fc(mA(this.path),this.affectedTree,this.revert)}}/**
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
 */class Po{constructor(A,t){this.source=A,this.path=t,this.type=Bt.LISTEN_COMPLETE}operationForChild(A){return AA(this.path)?new Po(this.source,sA()):new Po(this.source,mA(this.path))}}/**
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
 */class br{constructor(A,t,n){this.source=A,this.path=t,this.snap=n,this.type=Bt.OVERWRITE}operationForChild(A){return AA(this.path)?new br(this.source,sA(),this.snap.getImmediateChild(A)):new br(this.source,mA(this.path),this.snap)}}/**
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
 */class Xi{constructor(A,t,n){this.source=A,this.path=t,this.children=n,this.type=Bt.MERGE}operationForChild(A){if(AA(this.path)){const t=this.children.subtree(new pA(A));return t.isEmpty()?null:t.value?new br(this.source,sA(),t.value):new Xi(this.source,sA(),t)}else return S(J(this.path)===A,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,mA(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yn{constructor(A,t,n){this.node_=A,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(A){if(AA(A))return this.isFullyInitialized()&&!this.filtered_;const t=J(A);return this.isCompleteForChild(t)}isCompleteForChild(A){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(A)}getNode(){return this.node_}}/**
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
 */class hR{constructor(A){this.query_=A,this.index_=this.query_._queryParams.getIndex()}}function pR(e,A,t,n){const r=[],i=[];return A.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&i.push(iR(s.childName,s.snapshotNode))}),xs(e,r,"child_removed",A,n,t),xs(e,r,"child_added",A,n,t),xs(e,r,"child_moved",i,n,t),xs(e,r,"child_changed",A,n,t),xs(e,r,"value",A,n,t),r}function xs(e,A,t,n,r,i){const s=n.filter(o=>o.type===t);s.sort((o,a)=>BR(e,o,a)),s.forEach(o=>{const a=gR(e,o,i);r.forEach(l=>{l.respondsTo(o.type)&&A.push(l.createEvent(a,e.query_))})})}function gR(e,A,t){return A.type==="value"||A.type==="child_removed"||(A.prevName=t.getPredecessorChildName(A.childName,A.snapshotNode,e.index_)),A}function BR(e,A,t){if(A.childName==null||t.childName==null)throw ts("Should only compare child_ events.");const n=new Z(A.childName,A.snapshotNode),r=new Z(t.childName,t.snapshotNode);return e.index_.compare(n,r)}/**
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
 */function Cu(e,A){return{eventCache:e,serverCache:A}}function ao(e,A,t,n){return Cu(new Yn(A,t,n),e.serverCache)}function j_(e,A,t,n){return Cu(e.eventCache,new Yn(A,t,n))}function Ic(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Dr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Md;const wR=()=>(Md||(Md=new Te(tN)),Md);class wA{static fromObject(A){let t=new wA(null);return ce(A,(n,r)=>{t=t.set(new pA(n),r)}),t}constructor(A,t=wR()){this.value=A,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(A,t){if(this.value!=null&&t(this.value))return{path:sA(),value:this.value};if(AA(A))return null;{const n=J(A),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(mA(A),t);return i!=null?{path:kA(new pA(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(A){return this.findRootMostMatchingPathAndValue(A,()=>!0)}subtree(A){if(AA(A))return this;{const t=J(A),n=this.children.get(t);return n!==null?n.subtree(mA(A)):new wA(null)}}set(A,t){if(AA(A))return new wA(t,this.children);{const n=J(A),i=(this.children.get(n)||new wA(null)).set(mA(A),t),s=this.children.insert(n,i);return new wA(this.value,s)}}remove(A){if(AA(A))return this.children.isEmpty()?new wA(null):new wA(null,this.children);{const t=J(A),n=this.children.get(t);if(n){const r=n.remove(mA(A));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new wA(null):new wA(this.value,i)}else return this}}get(A){if(AA(A))return this.value;{const t=J(A),n=this.children.get(t);return n?n.get(mA(A)):null}}setTree(A,t){if(AA(A))return t;{const n=J(A),i=(this.children.get(n)||new wA(null)).setTree(mA(A),t);let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),new wA(this.value,s)}}fold(A){return this.fold_(sA(),A)}fold_(A,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(kA(A,r),t)}),t(A,this.value,n)}findOnPath(A,t){return this.findOnPath_(A,sA(),t)}findOnPath_(A,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(AA(A))return null;{const i=J(A),s=this.children.get(i);return s?s.findOnPath_(mA(A),kA(t,i),n):null}}foreachOnPath(A,t){return this.foreachOnPath_(A,sA(),t)}foreachOnPath_(A,t,n){if(AA(A))return this;{this.value&&n(t,this.value);const r=J(A),i=this.children.get(r);return i?i.foreachOnPath_(mA(A),kA(t,r),n):new wA(null)}}foreach(A){this.foreach_(sA(),A)}foreach_(A,t){this.children.inorderTraversal((n,r)=>{r.foreach_(kA(A,n),t)}),this.value&&t(A,this.value)}foreachChild(A){this.children.inorderTraversal((t,n)=>{n.value&&A(t,n.value)})}}/**
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
 */class yt{constructor(A){this.writeTree_=A}static empty(){return new yt(new wA(null))}}function lo(e,A,t){if(AA(A))return new yt(new wA(t));{const n=e.writeTree_.findRootMostValueAndPath(A);if(n!=null){const r=n.path;let i=n.value;const s=Ce(r,A);return i=i.updateChild(s,t),new yt(e.writeTree_.set(r,i))}else{const r=new wA(t),i=e.writeTree_.setTree(A,r);return new yt(i)}}}function Ch(e,A,t){let n=e;return ce(t,(r,i)=>{n=lo(n,kA(A,r),i)}),n}function cC(e,A){if(AA(A))return yt.empty();{const t=e.writeTree_.setTree(A,new wA(null));return new yt(t)}}function vh(e,A){return Mr(e,A)!=null}function Mr(e,A){const t=e.writeTree_.findRootMostValueAndPath(A);return t!=null?e.writeTree_.get(t.path).getChild(Ce(t.path,A)):null}function uC(e){const A=[],t=e.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(bA,(n,r)=>{A.push(new Z(n,r))}):e.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&A.push(new Z(n,r.value))}),A}function Gn(e,A){if(AA(A))return e;{const t=Mr(e,A);return t!=null?new yt(new wA(t)):new yt(e.writeTree_.subtree(A))}}function yh(e){return e.writeTree_.isEmpty()}function Yi(e,A){return z_(sA(),e.writeTree_,A)}function z_(e,A,t){if(A.value!=null)return t.updateChild(e,A.value);{let n=null;return A.children.inorderTraversal((r,i)=>{r===".priority"?(S(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=z_(kA(e,r),i,t)}),!t.getChild(e).isEmpty()&&n!==null&&(t=t.updateChild(kA(e,".priority"),n)),t}}/**
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
 */function vu(e,A){return J_(A,e)}function mR(e,A,t,n,r){S(n>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:A,snap:t,writeId:n,visible:r}),r&&(e.visibleWrites=lo(e.visibleWrites,A,t)),e.lastWriteId=n}function CR(e,A,t,n){S(n>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:A,children:t,writeId:n,visible:!0}),e.visibleWrites=Ch(e.visibleWrites,A,t),e.lastWriteId=n}function vR(e,A){for(let t=0;t<e.allWrites.length;t++){const n=e.allWrites[t];if(n.writeId===A)return n}return null}function yR(e,A){const t=e.allWrites.findIndex(o=>o.writeId===A);S(t>=0,"removeWrite called with nonexistent writeId.");const n=e.allWrites[t];e.allWrites.splice(t,1);let r=n.visible,i=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const o=e.allWrites[s];o.visible&&(s>=t&&QR(o,n.path)?r=!1:nt(n.path,o.path)&&(i=!0)),s--}if(r){if(i)return _R(e),!0;if(n.snap)e.visibleWrites=cC(e.visibleWrites,n.path);else{const o=n.children;ce(o,a=>{e.visibleWrites=cC(e.visibleWrites,kA(n.path,a))})}return!0}else return!1}function QR(e,A){if(e.snap)return nt(e.path,A);for(const t in e.children)if(e.children.hasOwnProperty(t)&&nt(kA(e.path,t),A))return!0;return!1}function _R(e){e.visibleWrites=$_(e.allWrites,ER,sA()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function ER(e){return e.visible}function $_(e,A,t){let n=yt.empty();for(let r=0;r<e.length;++r){const i=e[r];if(A(i)){const s=i.path;let o;if(i.snap)nt(t,s)?(o=Ce(t,s),n=lo(n,o,i.snap)):nt(s,t)&&(o=Ce(s,t),n=lo(n,sA(),i.snap.getChild(o)));else if(i.children){if(nt(t,s))o=Ce(t,s),n=Ch(n,o,i.children);else if(nt(s,t))if(o=Ce(s,t),AA(o))n=Ch(n,sA(),i.children);else{const a=Gi(i.children,J(o));if(a){const l=a.getChild(mA(o));n=lo(n,sA(),l)}}}else throw ts("WriteRecord should have .snap or .children")}}return n}function X_(e,A,t,n,r){if(!n&&!r){const i=Mr(e.visibleWrites,A);if(i!=null)return i;{const s=Gn(e.visibleWrites,A);if(yh(s))return t;if(t==null&&!vh(s,sA()))return null;{const o=t||V.EMPTY_NODE;return Yi(s,o)}}}else{const i=Gn(e.visibleWrites,A);if(!r&&yh(i))return t;if(!r&&t==null&&!vh(i,sA()))return null;{const s=function(l){return(l.visible||r)&&(!n||!~n.indexOf(l.writeId))&&(nt(l.path,A)||nt(A,l.path))},o=$_(e.allWrites,s,A),a=t||V.EMPTY_NODE;return Yi(o,a)}}}function UR(e,A,t){let n=V.EMPTY_NODE;const r=Mr(e.visibleWrites,A);if(r)return r.isLeafNode()||r.forEachChild(bA,(i,s)=>{n=n.updateImmediateChild(i,s)}),n;if(t){const i=Gn(e.visibleWrites,A);return t.forEachChild(bA,(s,o)=>{const a=Yi(Gn(i,new pA(s)),o);n=n.updateImmediateChild(s,a)}),uC(i).forEach(s=>{n=n.updateImmediateChild(s.name,s.node)}),n}else{const i=Gn(e.visibleWrites,A);return uC(i).forEach(s=>{n=n.updateImmediateChild(s.name,s.node)}),n}}function FR(e,A,t,n,r){S(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=kA(A,t);if(vh(e.visibleWrites,i))return null;{const s=Gn(e.visibleWrites,i);return yh(s)?r.getChild(t):Yi(s,r.getChild(t))}}function IR(e,A,t,n){const r=kA(A,t),i=Mr(e.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const s=Gn(e.visibleWrites,r);return Yi(s,n.getNode().getImmediateChild(t))}else return null}function SR(e,A){return Mr(e.visibleWrites,A)}function xR(e,A,t,n,r,i,s){let o;const a=Gn(e.visibleWrites,A),l=Mr(a,sA());if(l!=null)o=l;else if(t!=null)o=Yi(a,t);else return[];if(o=o.withIndex(s),!o.isEmpty()&&!o.isLeafNode()){const c=[],u=s.getCompare(),d=i?o.getReverseIteratorFrom(n,s):o.getIteratorFrom(n,s);let h=d.getNext();for(;h&&c.length<r;)u(h,n)!==0&&c.push(h),h=d.getNext();return c}else return[]}function TR(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Sc(e,A,t,n){return X_(e.writeTree,e.treePath,A,t,n)}function gg(e,A){return UR(e.writeTree,e.treePath,A)}function dC(e,A,t,n){return FR(e.writeTree,e.treePath,A,t,n)}function xc(e,A){return SR(e.writeTree,kA(e.treePath,A))}function HR(e,A,t,n,r,i){return xR(e.writeTree,e.treePath,A,t,n,r,i)}function Bg(e,A,t){return IR(e.writeTree,e.treePath,A,t)}function Y_(e,A){return J_(kA(e.treePath,A),e.writeTree)}function J_(e,A){return{treePath:e,writeTree:A}}/**
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
 */class LR{constructor(){this.changeMap=new Map}trackChildChange(A){const t=A.type,n=A.childName;S(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),S(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,Oo(n,A.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,Ro(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,$i(n,A.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,Oo(n,A.snapshotNode,r.oldSnap));else throw ts("Illegal combination of changes: "+A+" occurred after "+r)}else this.changeMap.set(n,A)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kR{getCompleteChild(A){return null}getChildAfterChild(A,t,n){return null}}const Z_=new kR;class wg{constructor(A,t,n=null){this.writes_=A,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(A){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(A))return t.getNode().getImmediateChild(A);{const n=this.optCompleteServerCache_!=null?new Yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bg(this.writes_,A,n)}}getChildAfterChild(A,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dr(this.viewCache_),i=HR(this.writes_,r,t,1,n,A);return i.length===0?null:i[0]}}/**
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
 */function bR(e){return{filter:e}}function DR(e,A){S(A.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),S(A.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function NR(e,A,t,n,r){const i=new LR;let s,o;if(t.type===Bt.OVERWRITE){const l=t;l.source.fromUser?s=Qh(e,A,l.path,l.snap,n,r,i):(S(l.source.fromServer,"Unknown source."),o=l.source.tagged||A.serverCache.isFiltered()&&!AA(l.path),s=Tc(e,A,l.path,l.snap,n,r,o,i))}else if(t.type===Bt.MERGE){const l=t;l.source.fromUser?s=OR(e,A,l.path,l.children,n,r,i):(S(l.source.fromServer,"Unknown source."),o=l.source.tagged||A.serverCache.isFiltered(),s=_h(e,A,l.path,l.children,n,r,o,i))}else if(t.type===Bt.ACK_USER_WRITE){const l=t;l.revert?s=KR(e,A,l.path,n,r,i):s=MR(e,A,l.path,l.affectedTree,n,r,i)}else if(t.type===Bt.LISTEN_COMPLETE)s=PR(e,A,t.path,n,i);else throw ts("Unknown operation type: "+t.type);const a=i.getChanges();return RR(A,s,a),{viewCache:s,changes:a}}function RR(e,A,t){const n=A.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=Ic(e);(t.length>0||!e.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(G_(Ic(A)))}}function q_(e,A,t,n,r,i){const s=A.eventCache;if(xc(n,t)!=null)return A;{let o,a;if(AA(t))if(S(A.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),A.serverCache.isFiltered()){const l=Dr(A),c=l instanceof V?l:V.EMPTY_NODE,u=gg(n,c);o=e.filter.updateFullNode(A.eventCache.getNode(),u,i)}else{const l=Sc(n,Dr(A));o=e.filter.updateFullNode(A.eventCache.getNode(),l,i)}else{const l=J(t);if(l===".priority"){S(Xn(t)===1,"Can't have a priority with additional path components");const c=s.getNode();a=A.serverCache.getNode();const u=dC(n,t,c,a);u!=null?o=e.filter.updatePriority(c,u):o=s.getNode()}else{const c=mA(t);let u;if(s.isCompleteForChild(l)){a=A.serverCache.getNode();const d=dC(n,t,s.getNode(),a);d!=null?u=s.getNode().getImmediateChild(l).updateChild(c,d):u=s.getNode().getImmediateChild(l)}else u=Bg(n,l,A.serverCache);u!=null?o=e.filter.updateChild(s.getNode(),l,u,c,r,i):o=s.getNode()}}return ao(A,o,s.isFullyInitialized()||AA(t),e.filter.filtersNodes())}}function Tc(e,A,t,n,r,i,s,o){const a=A.serverCache;let l;const c=s?e.filter:e.filter.getIndexedFilter();if(AA(t))l=c.updateFullNode(a.getNode(),n,null);else if(c.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(t,n);l=c.updateFullNode(a.getNode(),h,null)}else{const h=J(t);if(!a.isCompleteForPath(t)&&Xn(t)>1)return A;const g=mA(t),_=a.getNode().getImmediateChild(h).updateChild(g,n);h===".priority"?l=c.updatePriority(a.getNode(),_):l=c.updateChild(a.getNode(),h,_,g,Z_,null)}const u=j_(A,l,a.isFullyInitialized()||AA(t),c.filtersNodes()),d=new wg(r,u,i);return q_(e,u,t,r,d,o)}function Qh(e,A,t,n,r,i,s){const o=A.eventCache;let a,l;const c=new wg(r,A,i);if(AA(t))l=e.filter.updateFullNode(A.eventCache.getNode(),n,s),a=ao(A,l,!0,e.filter.filtersNodes());else{const u=J(t);if(u===".priority")l=e.filter.updatePriority(A.eventCache.getNode(),n),a=ao(A,l,o.isFullyInitialized(),o.isFiltered());else{const d=mA(t),h=o.getNode().getImmediateChild(u);let g;if(AA(d))g=n;else{const w=c.getCompleteChild(u);w!=null?og(d)===".priority"&&w.getChild(N_(d)).isEmpty()?g=w:g=w.updateChild(d,n):g=V.EMPTY_NODE}if(h.equals(g))a=A;else{const w=e.filter.updateChild(o.getNode(),u,g,d,c,s);a=ao(A,w,o.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function fC(e,A){return e.eventCache.isCompleteForChild(A)}function OR(e,A,t,n,r,i,s){let o=A;return n.foreach((a,l)=>{const c=kA(t,a);fC(A,J(c))&&(o=Qh(e,o,c,l,r,i,s))}),n.foreach((a,l)=>{const c=kA(t,a);fC(A,J(c))||(o=Qh(e,o,c,l,r,i,s))}),o}function hC(e,A,t){return t.foreach((n,r)=>{A=A.updateChild(n,r)}),A}function _h(e,A,t,n,r,i,s,o){if(A.serverCache.getNode().isEmpty()&&!A.serverCache.isFullyInitialized())return A;let a=A,l;AA(t)?l=n:l=new wA(null).setTree(t,n);const c=A.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(c.hasChild(u)){const h=A.serverCache.getNode().getImmediateChild(u),g=hC(e,h,d);a=Tc(e,a,new pA(u),g,r,i,s,o)}}),l.children.inorderTraversal((u,d)=>{const h=!A.serverCache.isCompleteForChild(u)&&d.value===null;if(!c.hasChild(u)&&!h){const g=A.serverCache.getNode().getImmediateChild(u),w=hC(e,g,d);a=Tc(e,a,new pA(u),w,r,i,s,o)}}),a}function MR(e,A,t,n,r,i,s){if(xc(r,t)!=null)return A;const o=A.serverCache.isFiltered(),a=A.serverCache;if(n.value!=null){if(AA(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Tc(e,A,t,a.getNode().getChild(t),r,i,o,s);if(AA(t)){let l=new wA(null);return a.getNode().forEachChild(xi,(c,u)=>{l=l.set(new pA(c),u)}),_h(e,A,t,l,r,i,o,s)}else return A}else{let l=new wA(null);return n.foreach((c,u)=>{const d=kA(t,c);a.isCompleteForPath(d)&&(l=l.set(c,a.getNode().getChild(d)))}),_h(e,A,t,l,r,i,o,s)}}function PR(e,A,t,n,r){const i=A.serverCache,s=j_(A,i.getNode(),i.isFullyInitialized()||AA(t),i.isFiltered());return q_(e,s,t,n,Z_,r)}function KR(e,A,t,n,r,i){let s;if(xc(n,t)!=null)return A;{const o=new wg(n,A,r),a=A.eventCache.getNode();let l;if(AA(t)||J(t)===".priority"){let c;if(A.serverCache.isFullyInitialized())c=Sc(n,Dr(A));else{const u=A.serverCache.getNode();S(u instanceof V,"serverChildren would be complete if leaf node"),c=gg(n,u)}c=c,l=e.filter.updateFullNode(a,c,i)}else{const c=J(t);let u=Bg(n,c,A.serverCache);u==null&&A.serverCache.isCompleteForChild(c)&&(u=a.getImmediateChild(c)),u!=null?l=e.filter.updateChild(a,c,u,mA(t),o,i):A.eventCache.getNode().hasChild(c)?l=e.filter.updateChild(a,c,V.EMPTY_NODE,mA(t),o,i):l=a,l.isEmpty()&&A.serverCache.isFullyInitialized()&&(s=Sc(n,Dr(A)),s.isLeafNode()&&(l=e.filter.updateFullNode(l,s,i)))}return s=A.serverCache.isFullyInitialized()||xc(n,sA())!=null,ao(A,l,s,e.filter.filtersNodes())}}/**
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
 */class VR{constructor(A,t){this.query_=A,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new ug(n.getIndex()),i=oR(n);this.processor_=bR(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(V.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=new Yn(a,s.isFullyInitialized(),r.filtersNodes()),u=new Yn(l,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=Cu(u,c),this.eventGenerator_=new hR(this.query_)}get query(){return this.query_}}function GR(e){return e.viewCache_.serverCache.getNode()}function WR(e){return Ic(e.viewCache_)}function jR(e,A){const t=Dr(e.viewCache_);return t&&(e.query._queryParams.loadsAllData()||!AA(A)&&!t.getImmediateChild(J(A)).isEmpty())?t.getChild(A):null}function pC(e){return e.eventRegistrations_.length===0}function zR(e,A){e.eventRegistrations_.push(A)}function gC(e,A,t){const n=[];if(t){S(A==null,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(i=>{const s=i.createCancelEvent(t,r);s&&n.push(s)})}if(A){let r=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(!s.matches(A))r.push(s);else if(A.hasAnyCallback()){r=r.concat(e.eventRegistrations_.slice(i+1));break}}e.eventRegistrations_=r}else e.eventRegistrations_=[];return n}function BC(e,A,t,n){A.type===Bt.MERGE&&A.source.queryId!==null&&(S(Dr(e.viewCache_),"We should always have a full cache before handling merges"),S(Ic(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,i=NR(e.processor_,r,A,t,n);return DR(e.processor_,i.viewCache),S(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=i.viewCache,AE(e,i.changes,i.viewCache.eventCache.getNode(),null)}function $R(e,A){const t=e.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(bA,(i,s)=>{n.push($i(i,s))}),t.isFullyInitialized()&&n.push(G_(t.getNode())),AE(e,n,t.getNode(),A)}function AE(e,A,t,n){const r=n?[n]:e.eventRegistrations_;return pR(e.eventGenerator_,A,t,r)}/**
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
 */let Hc;class eE{constructor(){this.views=new Map}}function XR(e){S(!Hc,"__referenceConstructor has already been defined"),Hc=e}function YR(){return S(Hc,"Reference.ts has not been loaded"),Hc}function JR(e){return e.views.size===0}function mg(e,A,t,n){const r=A.source.queryId;if(r!==null){const i=e.views.get(r);return S(i!=null,"SyncTree gave us an op for an invalid query."),BC(i,A,t,n)}else{let i=[];for(const s of e.views.values())i=i.concat(BC(s,A,t,n));return i}}function tE(e,A,t,n,r){const i=A._queryIdentifier,s=e.views.get(i);if(!s){let o=Sc(t,r?n:null),a=!1;o?a=!0:n instanceof V?(o=gg(t,n),a=!1):(o=V.EMPTY_NODE,a=!1);const l=Cu(new Yn(o,a,!1),new Yn(n,r,!1));return new VR(A,l)}return s}function ZR(e,A,t,n,r,i){const s=tE(e,A,n,r,i);return e.views.has(A._queryIdentifier)||e.views.set(A._queryIdentifier,s),zR(s,t),$R(s,t)}function qR(e,A,t,n){const r=A._queryIdentifier,i=[];let s=[];const o=Jn(e);if(r==="default")for(const[a,l]of e.views.entries())s=s.concat(gC(l,t,n)),pC(l)&&(e.views.delete(a),l.query._queryParams.loadsAllData()||i.push(l.query));else{const a=e.views.get(r);a&&(s=s.concat(gC(a,t,n)),pC(a)&&(e.views.delete(r),a.query._queryParams.loadsAllData()||i.push(a.query)))}return o&&!Jn(e)&&i.push(new(YR())(A._repo,A._path)),{removed:i,events:s}}function nE(e){const A=[];for(const t of e.views.values())t.query._queryParams.loadsAllData()||A.push(t);return A}function Wn(e,A){let t=null;for(const n of e.views.values())t=t||jR(n,A);return t}function rE(e,A){if(A._queryParams.loadsAllData())return yu(e);{const n=A._queryIdentifier;return e.views.get(n)}}function iE(e,A){return rE(e,A)!=null}function Jn(e){return yu(e)!=null}function yu(e){for(const A of e.views.values())if(A.query._queryParams.loadsAllData())return A;return null}/**
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
 */let Lc;function AO(e){S(!Lc,"__referenceConstructor has already been defined"),Lc=e}function eO(){return S(Lc,"Reference.ts has not been loaded"),Lc}let tO=1;class wC{constructor(A){this.listenProvider_=A,this.syncPointTree_=new wA(null),this.pendingWriteTree_=TR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sE(e,A,t,n,r){return mR(e.pendingWriteTree_,A,t,n,r),r?as(e,new br(fg(),A,t)):[]}function nO(e,A,t,n){CR(e.pendingWriteTree_,A,t,n);const r=wA.fromObject(t);return as(e,new Xi(fg(),A,r))}function Tn(e,A,t=!1){const n=vR(e.pendingWriteTree_,A);if(yR(e.pendingWriteTree_,A)){let i=new wA(null);return n.snap!=null?i=i.set(sA(),!0):ce(n.children,s=>{i=i.set(new pA(s),!0)}),as(e,new Fc(n.path,i,t))}else return[]}function sa(e,A,t){return as(e,new br(hg(),A,t))}function rO(e,A,t){const n=wA.fromObject(t);return as(e,new Xi(hg(),A,n))}function iO(e,A){return as(e,new Po(hg(),A))}function sO(e,A,t){const n=vg(e,t);if(n){const r=yg(n),i=r.path,s=r.queryId,o=Ce(i,A),a=new Po(pg(s),o);return Qg(e,i,a)}else return[]}function kc(e,A,t,n,r=!1){const i=A._path,s=e.syncPointTree_.get(i);let o=[];if(s&&(A._queryIdentifier==="default"||iE(s,A))){const a=qR(s,A,t,n);JR(s)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;if(o=a.events,!r){const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=e.syncPointTree_.findOnPath(i,(d,h)=>Jn(h));if(c&&!u){const d=e.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=lO(d);for(let g=0;g<h.length;++g){const w=h[g],_=w.query,p=cE(e,w);e.listenProvider_.startListening(co(_),Ko(e,_),p.hashFn,p.onComplete)}}}!u&&l.length>0&&!n&&(c?e.listenProvider_.stopListening(co(A),null):l.forEach(d=>{const h=e.queryToTagMap.get(Qu(d));e.listenProvider_.stopListening(co(d),h)}))}cO(e,l)}return o}function oE(e,A,t,n){const r=vg(e,n);if(r!=null){const i=yg(r),s=i.path,o=i.queryId,a=Ce(s,A),l=new br(pg(o),a,t);return Qg(e,s,l)}else return[]}function oO(e,A,t,n){const r=vg(e,n);if(r){const i=yg(r),s=i.path,o=i.queryId,a=Ce(s,A),l=wA.fromObject(t),c=new Xi(pg(o),a,l);return Qg(e,s,c)}else return[]}function Eh(e,A,t,n=!1){const r=A._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(d,h)=>{const g=Ce(d,r);i=i||Wn(h,g),s=s||Jn(h)});let o=e.syncPointTree_.get(r);o?(s=s||Jn(o),i=i||Wn(o,sA())):(o=new eE,e.syncPointTree_=e.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=V.EMPTY_NODE,e.syncPointTree_.subtree(r).foreachChild((h,g)=>{const w=Wn(g,sA());w&&(i=i.updateImmediateChild(h,w))}));const l=iE(o,A);if(!l&&!A._queryParams.loadsAllData()){const d=Qu(A);S(!e.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=uO();e.queryToTagMap.set(d,h),e.tagToQueryMap.set(h,d)}const c=vu(e.pendingWriteTree_,r);let u=ZR(o,A,t,c,i,a);if(!l&&!s&&!n){const d=rE(o,A);u=u.concat(dO(e,A,d))}return u}function Cg(e,A,t){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(A,(s,o)=>{const a=Ce(s,A),l=Wn(o,a);if(l)return l});return X_(r,A,i,t,!0)}function aO(e,A){const t=A._path;let n=null;e.syncPointTree_.foreachOnPath(t,(l,c)=>{const u=Ce(l,t);n=n||Wn(c,u)});let r=e.syncPointTree_.get(t);r?n=n||Wn(r,sA()):(r=new eE,e.syncPointTree_=e.syncPointTree_.set(t,r));const i=n!=null,s=i?new Yn(n,!0,!1):null,o=vu(e.pendingWriteTree_,A._path),a=tE(r,A,o,i?s.getNode():V.EMPTY_NODE,i);return WR(a)}function as(e,A){return aE(A,e.syncPointTree_,null,vu(e.pendingWriteTree_,sA()))}function aE(e,A,t,n){if(AA(e.path))return lE(e,A,t,n);{const r=A.get(sA());t==null&&r!=null&&(t=Wn(r,sA()));let i=[];const s=J(e.path),o=e.operationForChild(s),a=A.children.get(s);if(a&&o){const l=t?t.getImmediateChild(s):null,c=Y_(n,s);i=i.concat(aE(o,a,l,c))}return r&&(i=i.concat(mg(r,e,n,t))),i}}function lE(e,A,t,n){const r=A.get(sA());t==null&&r!=null&&(t=Wn(r,sA()));let i=[];return A.children.inorderTraversal((s,o)=>{const a=t?t.getImmediateChild(s):null,l=Y_(n,s),c=e.operationForChild(s);c&&(i=i.concat(lE(c,o,a,l)))}),r&&(i=i.concat(mg(r,e,n,t))),i}function cE(e,A){const t=A.query,n=Ko(e,t);return{hashFn:()=>(GR(A)||V.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?sO(e,t._path,n):iO(e,t._path);{const i=iN(r,t);return kc(e,t,null,i)}}}}function Ko(e,A){const t=Qu(A);return e.queryToTagMap.get(t)}function Qu(e){return e._path.toString()+"$"+e._queryIdentifier}function vg(e,A){return e.tagToQueryMap.get(A)}function yg(e){const A=e.indexOf("$");return S(A!==-1&&A<e.length-1,"Bad queryKey."),{queryId:e.substr(A+1),path:new pA(e.substr(0,A))}}function Qg(e,A,t){const n=e.syncPointTree_.get(A);S(n,"Missing sync point for query tag that we're tracking");const r=vu(e.pendingWriteTree_,A);return mg(n,t,r,null)}function lO(e){return e.fold((A,t,n)=>{if(t&&Jn(t))return[yu(t)];{let r=[];return t&&(r=nE(t)),ce(n,(i,s)=>{r=r.concat(s)}),r}})}function co(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(eO())(e._repo,e._path):e}function cO(e,A){for(let t=0;t<A.length;++t){const n=A[t];if(!n._queryParams.loadsAllData()){const r=Qu(n),i=e.queryToTagMap.get(r);e.queryToTagMap.delete(r),e.tagToQueryMap.delete(i)}}}function uO(){return tO++}function dO(e,A,t){const n=A._path,r=Ko(e,A),i=cE(e,t),s=e.listenProvider_.startListening(co(A),r,i.hashFn,i.onComplete),o=e.syncPointTree_.subtree(n);if(r)S(!Jn(o.value),"If we're adding a query, it shouldn't be shadowed");else{const a=o.fold((l,c,u)=>{if(!AA(l)&&c&&Jn(c))return[yu(c).query];{let d=[];return c&&(d=d.concat(nE(c).map(h=>h.query))),ce(u,(h,g)=>{d=d.concat(g)}),d}});for(let l=0;l<a.length;++l){const c=a[l];e.listenProvider_.stopListening(co(c),Ko(e,c))}}return s}/**
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
 */class _g{constructor(A){this.node_=A}getImmediateChild(A){const t=this.node_.getImmediateChild(A);return new _g(t)}node(){return this.node_}}class Eg{constructor(A,t){this.syncTree_=A,this.path_=t}getImmediateChild(A){const t=kA(this.path_,A);return new Eg(this.syncTree_,t)}node(){return Cg(this.syncTree_,this.path_)}}const fO=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},mC=function(e,A,t){if(!e||typeof e!="object")return e;if(S(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return hO(e[".sv"],A,t);if(typeof e[".sv"]=="object")return pO(e[".sv"],A);S(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},hO=function(e,A,t){switch(e){case"timestamp":return t.timestamp;default:S(!1,"Unexpected server value: "+e)}},pO=function(e,A,t){e.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const n=e.increment;typeof n!="number"&&S(!1,"Unexpected increment value: "+n);const r=A.node();if(S(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const s=r.getValue();return typeof s!="number"?n:s+n},uE=function(e,A,t,n){return Ug(A,new Eg(t,e),n)},dE=function(e,A,t){return Ug(e,new _g(A),t)};function Ug(e,A,t){const n=e.getPriority().val(),r=mC(n,A.getImmediateChild(".priority"),t);let i;if(e.isLeafNode()){const s=e,o=mC(s.getValue(),A,t);return o!==s.getValue()||r!==s.getPriority().val()?new qA(o,zA(r)):e}else{const s=e;return i=s,r!==s.getPriority().val()&&(i=i.updatePriority(new qA(r))),s.forEachChild(bA,(o,a)=>{const l=Ug(a,A.getImmediateChild(o),t);l!==a&&(i=i.updateImmediateChild(o,l))}),i}}/**
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
 */class Fg{constructor(A="",t=null,n={children:{},childCount:0}){this.name=A,this.parent=t,this.node=n}}function Ig(e,A){let t=A instanceof pA?A:new pA(A),n=e,r=J(t);for(;r!==null;){const i=Gi(n.node.children,r)||{children:{},childCount:0};n=new Fg(r,n,i),t=mA(t),r=J(t)}return n}function ls(e){return e.node.value}function fE(e,A){e.node.value=A,Uh(e)}function hE(e){return e.node.childCount>0}function gO(e){return ls(e)===void 0&&!hE(e)}function _u(e,A){ce(e.node.children,(t,n)=>{A(new Fg(t,e,n))})}function pE(e,A,t,n){t&&!n&&A(e),_u(e,r=>{pE(r,A,!0,n)}),t&&n&&A(e)}function BO(e,A,t){let n=e.parent;for(;n!==null;){if(A(n))return!0;n=n.parent}return!1}function oa(e){return new pA(e.parent===null?e.name:oa(e.parent)+"/"+e.name)}function Uh(e){e.parent!==null&&wO(e.parent,e.name,e)}function wO(e,A,t){const n=gO(t),r=Dt(e.node.children,A);n&&r?(delete e.node.children[A],e.node.childCount--,Uh(e)):!n&&!r&&(e.node.children[A]=t.node,e.node.childCount++,Uh(e))}/**
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
 */const mO=/[\[\].#$\/\u0000-\u001F\u007F]/,CO=/[\[\].#$\u0000-\u001F\u007F]/,Pd=10*1024*1024,Sg=function(e){return typeof e=="string"&&e.length!==0&&!mO.test(e)},gE=function(e){return typeof e=="string"&&e.length!==0&&!CO.test(e)},vO=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),gE(e)},yO=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!tg(e)||e&&typeof e=="object"&&Dt(e,".sv")},QO=function(e,A,t,n){Eu(hu(e,"value"),A,t)},Eu=function(e,A,t){const n=t instanceof pA?new ON(t,e):t;if(A===void 0)throw new Error(e+"contains undefined "+or(n));if(typeof A=="function")throw new Error(e+"contains a function "+or(n)+" with contents = "+A.toString());if(tg(A))throw new Error(e+"contains "+A.toString()+" "+or(n));if(typeof A=="string"&&A.length>Pd/3&&pu(A)>Pd)throw new Error(e+"contains a string greater than "+Pd+" utf8 bytes "+or(n)+" ('"+A.substring(0,50)+"...')");if(A&&typeof A=="object"){let r=!1,i=!1;if(ce(A,(s,o)=>{if(s===".value")r=!0;else if(s!==".priority"&&s!==".sv"&&(i=!0,!Sg(s)))throw new Error(e+" contains an invalid key ("+s+") "+or(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MN(n,s),Eu(e,o,n),PN(n)}),r&&i)throw new Error(e+' contains ".value" child '+or(n)+" in addition to actual children.")}},_O=function(e,A){let t,n;for(t=0;t<A.length;t++){n=A[t];const i=No(n);for(let s=0;s<i.length;s++)if(!(i[s]===".priority"&&s===i.length-1)){if(!Sg(i[s]))throw new Error(e+"contains an invalid key ("+i[s]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}A.sort(RN);let r=null;for(t=0;t<A.length;t++){if(n=A[t],r!==null&&nt(r,n))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},EO=function(e,A,t,n){const r=hu(e,"values");if(!(A&&typeof A=="object")||Array.isArray(A))throw new Error(r+" must be an object containing the children to replace.");const i=[];ce(A,(s,o)=>{const a=new pA(s);if(Eu(r,o,kA(t,a)),og(a)===".priority"&&!yO(o))throw new Error(r+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),_O(r,i)},BE=function(e,A,t,n){if(!gE(t))throw new Error(hu(e,A)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UO=function(e,A,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BE(e,A,t)},wE=function(e,A){if(J(A)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},FO=function(e,A){const t=A.path.toString();if(typeof A.repoInfo.host!="string"||A.repoInfo.host.length===0||!Sg(A.repoInfo.namespace)&&A.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vO(t))throw new Error(hu(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class IO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uu(e,A){let t=null;for(let n=0;n<A.length;n++){const r=A[n],i=r.getPath();t!==null&&!ag(i,t.path)&&(e.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&e.eventLists_.push(t)}function mE(e,A,t){Uu(e,t),CE(e,n=>ag(n,A))}function at(e,A,t){Uu(e,t),CE(e,n=>nt(n,A)||nt(A,n))}function CE(e,A){e.recursionDepth_++;let t=!0;for(let n=0;n<e.eventLists_.length;n++){const r=e.eventLists_[n];if(r){const i=r.path;A(i)?(SO(e.eventLists_[n]),e.eventLists_[n]=null):t=!1}}t&&(e.eventLists_=[]),e.recursionDepth_--}function SO(e){for(let A=0;A<e.events.length;A++){const t=e.events[A];if(t!==null){e.events[A]=null;const n=t.getEventRunner();so&&se("event: "+t.toString()),os(n)}}}/**
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
 */const xO="repo_interrupt",TO=25;class HO{constructor(A,t,n,r){this.repoInfo_=A,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uc(),this.transactionQueueTree_=new Fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LO(e,A,t){if(e.stats_=ig(e.repoInfo_),e.forceRestClient_||lN())e.server_=new Ec(e.repoInfo_,(n,r,i,s)=>{CC(e,n,r,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>vC(e,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$A(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}e.persistentConnection_=new Zt(e.repoInfo_,A,(n,r,i,s)=>{CC(e,n,r,i,s)},n=>{vC(e,n)},n=>{bO(e,n)},e.authTokenProvider_,e.appCheckProvider_,t),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(n=>{e.server_.refreshAuthToken(n)}),e.appCheckProvider_.addTokenChangeListener(n=>{e.server_.refreshAppCheckToken(n.token)}),e.statsReporter_=hN(e.repoInfo_,()=>new fR(e.stats_,e.server_)),e.infoData_=new aR,e.infoSyncTree_=new wC({startListening:(n,r,i,s)=>{let o=[];const a=e.infoData_.getNode(n._path);return a.isEmpty()||(o=sa(e.infoSyncTree_,n._path,a),setTimeout(()=>{s("ok")},0)),o},stopListening:()=>{}}),xg(e,"connected",!1),e.serverSyncTree_=new wC({startListening:(n,r,i,s)=>(e.server_.listen(n,i,r,(o,a)=>{const l=s(o,a);at(e.eventQueue_,n._path,l)}),[]),stopListening:(n,r)=>{e.server_.unlisten(n,r)}})}function kO(e){const t=e.infoData_.getNode(new pA(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fu(e){return fO({timestamp:kO(e)})}function CC(e,A,t,n,r){e.dataUpdateCount++;const i=new pA(A);t=e.interceptServerDataCallback_?e.interceptServerDataCallback_(A,t):t;let s=[];if(r)if(n){const a=hc(t,l=>zA(l));s=oO(e.serverSyncTree_,i,a,r)}else{const a=zA(t);s=oE(e.serverSyncTree_,i,a,r)}else if(n){const a=hc(t,l=>zA(l));s=rO(e.serverSyncTree_,i,a)}else{const a=zA(t);s=sa(e.serverSyncTree_,i,a)}let o=i;s.length>0&&(o=Ji(e,i)),at(e.eventQueue_,o,s)}function vC(e,A){xg(e,"connected",A),A===!1&&OO(e)}function bO(e,A){ce(A,(t,n)=>{xg(e,t,n)})}function xg(e,A,t){const n=new pA("/.info/"+A),r=zA(t);e.infoData_.updateSnapshot(n,r);const i=sa(e.infoSyncTree_,n,r);at(e.eventQueue_,n,i)}function Tg(e){return e.nextWriteId_++}function DO(e,A,t){const n=aO(e.serverSyncTree_,A);return n!=null?Promise.resolve(n):e.server_.get(A).then(r=>{const i=zA(r).withIndex(A._queryParams.getIndex());Eh(e.serverSyncTree_,A,t,!0);let s;if(A._queryParams.loadsAllData())s=sa(e.serverSyncTree_,A._path,i);else{const o=Ko(e.serverSyncTree_,A);s=oE(e.serverSyncTree_,A._path,i,o)}return at(e.eventQueue_,A._path,s),kc(e.serverSyncTree_,A,t,null,!0),i},r=>(aa(e,"get for query "+$A(A)+" failed: "+r),Promise.reject(new Error(r))))}function NO(e,A,t,n,r){aa(e,"set",{path:A.toString(),value:t,priority:n});const i=Fu(e),s=zA(t,n),o=Cg(e.serverSyncTree_,A),a=dE(s,o,i),l=Tg(e),c=sE(e.serverSyncTree_,A,a,l,!0);Uu(e.eventQueue_,c),e.server_.put(A.toString(),s.val(!0),(d,h)=>{const g=d==="ok";g||ye("set at "+A+" failed: "+d);const w=Tn(e.serverSyncTree_,l,!g);at(e.eventQueue_,A,w),Fh(e,r,d,h)});const u=Lg(e,A);Ji(e,u),at(e.eventQueue_,u,[])}function RO(e,A,t,n){aa(e,"update",{path:A.toString(),value:t});let r=!0;const i=Fu(e),s={};if(ce(t,(o,a)=>{r=!1,s[o]=uE(kA(A,o),zA(a),e.serverSyncTree_,i)}),r)se("update() called with empty data.  Don't do anything."),Fh(e,n,"ok",void 0);else{const o=Tg(e),a=nO(e.serverSyncTree_,A,s,o);Uu(e.eventQueue_,a),e.server_.merge(A.toString(),t,(l,c)=>{const u=l==="ok";u||ye("update at "+A+" failed: "+l);const d=Tn(e.serverSyncTree_,o,!u),h=d.length>0?Ji(e,A):A;at(e.eventQueue_,h,d),Fh(e,n,l,c)}),ce(t,l=>{const c=Lg(e,kA(A,l));Ji(e,c)}),at(e.eventQueue_,A,[])}}function OO(e){aa(e,"onDisconnectEvents");const A=Fu(e),t=Uc();mh(e.onDisconnect_,sA(),(r,i)=>{const s=uE(r,i,e.serverSyncTree_,A);W_(t,r,s)});let n=[];mh(t,sA(),(r,i)=>{n=n.concat(sa(e.serverSyncTree_,r,i));const s=Lg(e,r);Ji(e,s)}),e.onDisconnect_=Uc(),at(e.eventQueue_,sA(),n)}function MO(e,A,t){let n;J(A._path)===".info"?n=Eh(e.infoSyncTree_,A,t):n=Eh(e.serverSyncTree_,A,t),mE(e.eventQueue_,A._path,n)}function yC(e,A,t){let n;J(A._path)===".info"?n=kc(e.infoSyncTree_,A,t):n=kc(e.serverSyncTree_,A,t),mE(e.eventQueue_,A._path,n)}function PO(e){e.persistentConnection_&&e.persistentConnection_.interrupt(xO)}function aa(e,...A){let t="";e.persistentConnection_&&(t=e.persistentConnection_.id+":"),se(t,...A)}function Fh(e,A,t,n){A&&os(()=>{if(t==="ok")A(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const s=new Error(i);s.code=r,A(s)}})}function vE(e,A,t){return Cg(e.serverSyncTree_,A,t)||V.EMPTY_NODE}function Hg(e,A=e.transactionQueueTree_){if(A||Iu(e,A),ls(A)){const t=QE(e,A);S(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&KO(e,oa(A),t)}else hE(A)&&_u(A,t=>{Hg(e,t)})}function KO(e,A,t){const n=t.map(l=>l.currentWriteId),r=vE(e,A,n);let i=r;const s=r.hash();for(let l=0;l<t.length;l++){const c=t[l];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const u=Ce(A,c.path);i=i.updateChild(u,c.currentOutputSnapshotRaw)}const o=i.val(!0),a=A;e.server_.put(a.toString(),o,l=>{aa(e,"transaction put response",{path:a.toString(),status:l});let c=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,c=c.concat(Tn(e.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Iu(e,Ig(e.transactionQueueTree_,A)),Hg(e,e.transactionQueueTree_),at(e.eventQueue_,A,c);for(let d=0;d<u.length;d++)os(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ye("transaction at "+a.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Ji(e,A)}},s)}function Ji(e,A){const t=yE(e,A),n=oa(t),r=QE(e,t);return VO(e,r,n),n}function VO(e,A,t){if(A.length===0)return;const n=[];let r=[];const s=A.filter(o=>o.status===0).map(o=>o.currentWriteId);for(let o=0;o<A.length;o++){const a=A[o],l=Ce(t,a.path);let c=!1,u;if(S(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,u=a.abortReason,r=r.concat(Tn(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=TO)c=!0,u="maxretry",r=r.concat(Tn(e.serverSyncTree_,a.currentWriteId,!0));else{const d=vE(e,a.path,s);a.currentInputSnapshot=d;const h=A[o].update(d.val());if(h!==void 0){Eu("transaction failed: Data returned ",h,a.path);let g=zA(h);typeof h=="object"&&h!=null&&Dt(h,".priority")||(g=g.updatePriority(d.getPriority()));const _=a.currentWriteId,p=Fu(e),f=dE(g,d,p);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=Tg(e),s.splice(s.indexOf(_),1),r=r.concat(sE(e.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),r=r.concat(Tn(e.serverSyncTree_,_,!0))}else c=!0,u="nodata",r=r.concat(Tn(e.serverSyncTree_,a.currentWriteId,!0))}at(e.eventQueue_,t,r),r=[],c&&(A[o].status=2,function(d){setTimeout(d,Math.floor(0))}(A[o].unwatcher),A[o].onComplete&&(u==="nodata"?n.push(()=>A[o].onComplete(null,!1,A[o].currentInputSnapshot)):n.push(()=>A[o].onComplete(new Error(u),!1,null))))}Iu(e,e.transactionQueueTree_);for(let o=0;o<n.length;o++)os(n[o]);Hg(e,e.transactionQueueTree_)}function yE(e,A){let t,n=e.transactionQueueTree_;for(t=J(A);t!==null&&ls(n)===void 0;)n=Ig(n,t),A=mA(A),t=J(A);return n}function QE(e,A){const t=[];return _E(e,A,t),t.sort((n,r)=>n.order-r.order),t}function _E(e,A,t){const n=ls(A);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);_u(A,r=>{_E(e,r,t)})}function Iu(e,A){const t=ls(A);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,fE(A,t.length>0?t:void 0)}_u(A,n=>{Iu(e,n)})}function Lg(e,A){const t=oa(yE(e,A)),n=Ig(e.transactionQueueTree_,A);return BO(n,r=>{Kd(e,r)}),Kd(e,n),pE(n,r=>{Kd(e,r)}),t}function Kd(e,A){const t=ls(A);if(t){const n=[];let r=[],i=-1;for(let s=0;s<t.length;s++)t[s].status===3||(t[s].status===1?(S(i===s-1,"All SENT items should be at beginning of queue."),i=s,t[s].status=3,t[s].abortReason="set"):(S(t[s].status===0,"Unexpected transaction status in abort"),t[s].unwatcher(),r=r.concat(Tn(e.serverSyncTree_,t[s].currentWriteId,!0)),t[s].onComplete&&n.push(t[s].onComplete.bind(null,new Error("set"),!1,null))));i===-1?fE(A,void 0):t.length=i+1,at(e.eventQueue_,oa(A),r);for(let s=0;s<n.length;s++)os(n[s])}}/**
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
 */function GO(e){let A="";const t=e.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}A+="/"+r}return A}function WO(e){const A={};e.charAt(0)==="?"&&(e=e.substring(1));for(const t of e.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?A[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):ye(`Invalid query segment '${t}' in query '${e}'`)}return A}const QC=function(e,A){const t=jO(e),n=t.namespace;t.domain==="firebase.com"&&sn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||AN();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new I_(t.host,t.secure,n,r,A,"",n!==t.subdomain),path:new pA(t.pathString)}},jO=function(e){let A="",t="",n="",r="",i="",s=!0,o="https",a=443;if(typeof e=="string"){let l=e.indexOf("//");l>=0&&(o=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");c===-1&&(c=e.length);let u=e.indexOf("?");u===-1&&(u=e.length),A=e.substring(0,Math.min(c,u)),c<u&&(r=GO(e.substring(c,u)));const d=WO(e.substring(Math.min(e.length,u)));l=A.indexOf(":"),l>=0?(s=o==="https"||o==="wss",a=parseInt(A.substring(l+1),10)):l=A.length;const h=A.slice(0,l);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const g=A.indexOf(".");n=A.substring(0,g).toLowerCase(),t=A.substring(g+1),i=n}"ns"in d&&(i=d.ns)}return{host:A,port:a,domain:t,subdomain:n,secure:s,scheme:o,pathString:r,namespace:i}};/**
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
 */class zO{constructor(A,t,n,r){this.eventType=A,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const A=this.snapshot.ref;return this.eventType==="value"?A._path:A.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$A(this.snapshot.exportVal())}}class $O{constructor(A,t,n){this.eventRegistration=A,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class EE{constructor(A,t){this.snapshotCallback=A,this.cancelCallback=t}onValue(A,t){this.snapshotCallback.call(null,A,t)}onCancel(A){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,A)}get hasCancelCallback(){return!!this.cancelCallback}matches(A){return this.snapshotCallback===A.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===A.snapshotCallback.userCallback&&this.snapshotCallback.context===A.snapshotCallback.context}}/**
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
 */class kg{constructor(A,t,n,r){this._repo=A,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return AA(this._path)?null:og(this._path)}get ref(){return new an(this._repo,this._path)}get _queryIdentifier(){const A=aC(this._queryParams),t=ng(A);return t==="{}"?"default":t}get _queryObject(){return aC(this._queryParams)}isEqual(A){if(A=be(A),!(A instanceof kg))return!1;const t=this._repo===A._repo,n=ag(this._path,A._path),r=this._queryIdentifier===A._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+NN(this._path)}}class an extends kg{constructor(A,t){super(A,t,new dg,!1)}get parent(){const A=N_(this._path);return A===null?null:new an(this._repo,A)}get root(){let A=this;for(;A.parent!==null;)A=A.parent;return A}}class Vo{constructor(A,t,n){this._node=A,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(A){const t=new pA(A),n=Ih(this.ref,A);return new Vo(this._node.getChild(t),n,bA)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(A){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>A(new Vo(r,Ih(this.ref,n),bA)))}hasChild(A){const t=new pA(A);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function SA(e,A){return e=be(e),e._checkNotDeleted("ref"),A!==void 0?Ih(e._root,A):e._root}function Ih(e,A){return e=be(e),J(e._path)===null?UO("child","path",A):BE("child","path",A),new an(e._repo,kA(e._path,A))}function XO(e){return wE("remove",e._path),Yt(e,null)}function Yt(e,A){e=be(e),wE("set",e._path),QO("set",A,e._path);const t=new Zo;return NO(e._repo,e._path,A,null,t.wrapCallback(()=>{})),t.promise}function Sl(e,A){EO("update",A,e._path);const t=new Zo;return RO(e._repo,e._path,A,t.wrapCallback(()=>{})),t.promise}function Br(e){e=be(e);const A=new EE(()=>{}),t=new Su(A);return DO(e._repo,e,t).then(n=>new Vo(n,new an(e._repo,e._path),e._queryParams.getIndex()))}class Su{constructor(A){this.callbackContext=A}respondsTo(A){return A==="value"}createEvent(A,t){const n=t._queryParams.getIndex();return new zO("value",this,new Vo(A.snapshotNode,new an(t._repo,t._path),n))}getEventRunner(A){return A.getEventType()==="cancel"?()=>this.callbackContext.onCancel(A.error):()=>this.callbackContext.onValue(A.snapshot,null)}createCancelEvent(A,t){return this.callbackContext.hasCancelCallback?new $O(this,A,t):null}matches(A){return A instanceof Su?!A.callbackContext||!this.callbackContext?!0:A.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function YO(e,A,t,n,r){let i;if(typeof n=="object"&&(i=void 0,r=n),typeof n=="function"&&(i=n),r&&r.onlyOnce){const a=t,l=(c,u)=>{yC(e._repo,e,o),a(c,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const s=new EE(t,i||void 0),o=new Su(s);return MO(e._repo,e,o),()=>yC(e._repo,e,o)}function JO(e,A,t,n){return YO(e,"value",A,t,n)}XR(an);AO(an);/**
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
 */const ZO="FIREBASE_DATABASE_EMULATOR_HOST",Sh={};let qO=!1;function AM(e,A,t,n){const r=A.lastIndexOf(":"),i=A.substring(0,r),s=ns(i);e.repoInfo_=new I_(A,s,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(e.authTokenProvider_=n)}function eM(e,A,t,n,r){let i=n||e.options.databaseURL;i===void 0&&(e.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),se("Using default host for project ",e.options.projectId),i=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=QC(i,r),o=s.repoInfo,a;typeof process<"u"&&Gm&&(a=Gm[ZO]),a?(i=`http://${a}?ns=${o.namespace}`,s=QC(i,r),o=s.repoInfo):s.repoInfo.secure;const l=new uN(e.name,e.options,A);FO("Invalid Firebase Database URL",s),AA(s.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=nM(o,e,l,new cN(e,t));return new rM(c,e)}function tM(e,A){const t=Sh[A];(!t||t[e.key]!==e)&&sn(`Database ${A}(${e.repoInfo_}) has already been deleted.`),PO(e),delete t[e.key]}function nM(e,A,t,n){let r=Sh[A.name];r||(r={},Sh[A.name]=r);let i=r[e.toURLString()];return i&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new HO(e,qO,t,n),r[e.toURLString()]=i,i}class rM{constructor(A,t){this._repoInternal=A,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new an(this._repo,sA())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(A){this._rootInternal===null&&sn("Cannot call "+A+" on a deleted database.")}}function UE(e=LQ(),A){const t=Wp(e,"database").getImmediate({identifier:A});if(!t._instanceStarted){const n=hk("database");n&&iM(t,...n)}return t}function iM(e,A,t,n={}){e=be(e),e._checkNotDeleted("useEmulator");const r=`${A}:${t}`,i=e._repoInternal;if(e._instanceStarted){if(r===e._repoInternal.repoInfo_.host&&Tr(n,i.repoInfo_.emulatorOptions))return;sn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let s;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Il(Il.OWNER);else if(n.mockUserToken){const o=typeof n.mockUserToken=="string"?n.mockUserToken:pk(n.mockUserToken,e.app.options.projectId);s=new Il(o)}ns(A)&&(EQ(A),UQ("Database",!0)),AM(i,r,n,s)}/**
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
 */function sM(e){$D(is),Wi(new Hr("database",(A,{instanceIdentifier:t})=>{const n=A.getProvider("app").getImmediate(),r=A.getProvider("auth-internal"),i=A.getProvider("app-check-internal");return eM(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Vn(Wm,jm,e),Vn(Wm,jm,"esm2020")}Zt.prototype.simpleListen=function(e,A){this.sendRequest("q",{p:e},A)};Zt.prototype.echo=function(e,A){this.sendRequest("echo",{d:e},A)};sM();const oM={apiKey:"AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",authDomain:"vgtk-parser.firebaseapp.com",projectId:"vgtk-parser",storageBucket:"vgtk-parser.firebasestorage.app",messagingSenderId:"369828135879",appId:"1:369828135879:web:ad18e0c1b525f3cbef0fe2",measurementId:"G-CETL1LFGEM",databaseURL:"https://vgtk-parser-default-rtdb.europe-west1.firebasedatabase.app/"},aM=HQ(oM),me=UE(aM),Y=d_();SA(me,"users");SA(me,"hours/");const lM=D.div`
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
`,cM=D.div`
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
`,uM=D.h2`
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
`,dM=D.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 12px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 8px;
  }
`,fM=D.table`
  border-collapse: collapse;
  width: max-content;
  min-width: 100%;

  th,
  td {
    border: 1px solid ${({theme:e})=>(e==null?void 0:e.borderColor)||"#ddd"};
    padding: 8px 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    th,
    td {
      padding: 6px 3px;
    }
  }
`,hM=D.th`
  position: sticky;
  left: 0;
  background: ${({$isHovered:e})=>e?"rgba(199, 18, 18, 0.301)":"#efefef"};
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
`,_C=D.th`
  width: 55px;
  background: ${({$isHovered:e})=>e?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 45px;
    font-size: 12px;
    min-width: 40px;
  }
`,pM=D.td`
  position: sticky;
  left: 0;
  background: ${({$isHovered:e})=>e?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  width: 200px;
  border: 2px solid #999;
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    width: 150px;
    font-size: 13px;
    min-width: 120px;
  }
`,gM=D.td`
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
`,BM=D.div`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,wM=D.div`
  position: absolute;
  right: 2px;
  bottom: 2px;
  font-size: 10px;
  opacity: 0.8;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`,Vd=D.td`
  text-align: center;
  font-weight: bold;
  background: ${({$isHovered:e})=>e?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    min-width: 50px;
  }
`,mM=D.td`
  position: sticky;
  left: 0;
  font-weight: bold;
  background: ${({$isHovered:e})=>e?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  border: 2px solid #999;
  transition: background 0.2s ease;
`,CM=D.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,EC=D.h3`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`,vM=D.div`
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
`,Gd=D.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`,UC=D.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,FC=D.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,Ai=D.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${({$variant:e})=>e==="danger"?"#ff4444":e==="success"?"#4CAF50":e==="primary"?"#2196F3":"#f0f0f0"};
  color: ${({$variant:e})=>e==="danger"||e==="success"||e==="primary"?"white":"black"};
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
`,yM=D.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #000;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`,QM=D.h4`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`,_M=D.div`
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
`,EM=D.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`,UM=D.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    min-height: 44px;
  }
`,FM=D.div`
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
`;function IM(e){if(!(e instanceof Date)||isNaN(e))return"";const A=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${A}-${t}-${n}`}function xh(e){const[A,t,n]=e.split("-").map(Number);return new Date(Date.UTC(n,t-1,A))}function SM(e){return!e||e.length===0?1:e.reduce((t,n)=>Math.max(t,n.id||0),0)+1}function xM(e=""){return typeof e=="string"&&e.trim().startsWith("П")}function TM(e){return[...e].sort((A,t)=>xh(A)-xh(t))}const HM=({rawData:e,onRawDataChange:A,userTarification:t})=>{const[n,r]=L.useState(()=>{const x=new Date;return new Date(x.getFullYear(),x.getMonth(),1)}),[i,s]=L.useState(!1),[o,a]=L.useState(!1),[l,c]=L.useState(""),[u,d]=L.useState({date:"",lessonName:"",groupName:"",total:0}),[h,g]=L.useState([]),[w,_]=L.useState({isLab:!1,cabinet:""}),[p,f]=L.useState(null),[B,C]=L.useState(null),{datesInMonth:Q,rows:v,totalsByDate:y,grandTotal:U}=L.useMemo(()=>{const x=Object.keys(e||{}),O=TM(x),K=O.map(G=>({ds:G,date:xh(G)})).filter(({date:G})=>G.getFullYear()===n.getFullYear()&&G.getMonth()===n.getMonth()).map(G=>G.ds),P=new Set;(t||[]).forEach(G=>{G&&P.add(`${G.lesson}|||${G.groupName}`)}),Object.values(e||{}).flat().forEach(G=>{G&&G.lessonName&&G.groupName&&P.add(`${G.lessonName}|||${G.groupName}`)});const $=Array.from(P).map(G=>{const[oA,aA]=G.split("|||"),ln=xM(aA),ze=[];O.forEach(ge=>{(Array.isArray(e[ge])?e[ge]:[]).filter(De=>De.lessonName===oA&&De.groupName===aA).sort((De,Kr)=>(De.id||0)-(Kr.id||0)).forEach(De=>ze.push({item:De,ds:ge}))});const Nt=new Map;let RA=0,tr=0;ze.forEach(({item:ge,ds:Pr},De)=>{ln?(RA+=1,Nt.set(`${Pr}-${ge.id}`,RA)):(tr+=1,tr===1&&(RA+=1),Nt.set(`${Pr}-${ge.id}`,RA),tr===2&&(tr=0))});const Rt={};let cs=RA;return K.forEach(ge=>{const De=(Array.isArray(e[ge])?e[ge]:[]).filter($e=>$e.lessonName===oA&&$e.groupName===aA),Kr=De.filter($e=>$e.isLab).length,us=De.filter($e=>!$e.isLab).length,xu=Kr+us,la=new Set;De.forEach($e=>{const Vr=Nt.get(`${ge}-${$e.id}`);Vr&&la.add(Vr)}),Rt[ge]={labs:Kr,lectures:us,total:xu,indices:Array.from(la).sort(($e,Vr)=>$e-Vr)}}),{lessonName:oA,groupName:aA,cells:Rt,sum:cs}}),uA={};let NA=0;return K.forEach(G=>{const oA=$.reduce((aA,ln)=>{var ze;return aA+(((ze=ln.cells[G])==null?void 0:ze.total)||0)},0);uA[G]=oA,NA+=oA}),{datesInMonth:K,rows:$,totalsByDate:uA,grandTotal:NA}},[e,n,t]),I=()=>r(x=>new Date(x.getFullYear(),x.getMonth()-1,1)),H=()=>r(x=>new Date(x.getFullYear(),x.getMonth()+1,1)),rA=({labs:x,lectures:O})=>x>0&&O>0?"linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)":x>0?"rgb(255,122,92)":O>0?"rgb(102,153,204)":"transparent",yA="rgba(199, 18, 18, 0.301)",j=(x,O,K)=>{const P=rA(x);return p===O||B===K?{background:P,boxShadow:`inset 0 0 0 1000px ${yA}`}:{background:P}},BA=(x,O,K,P)=>{const $=Array.isArray(e[x])?e[x].filter(uA=>uA.lessonName===O&&uA.groupName===K):[];d({date:x,lessonName:O,groupName:K,total:P}),g($),_({isLab:!1,cabinet:""}),s(!0)},YA=async x=>{var Nt;const O=(Nt=Y==null?void 0:Y.currentUser)==null?void 0:Nt.uid;if(!O){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:K,lessonName:P,groupName:$,isLab:uA,cabinet:NA}=x,G=e[K]||[],aA={id:SM(G),lessonName:P,groupName:$,isLab:uA,cabinet:NA},ln=[...G,aA];A(RA=>({...RA,[K]:ln}));const ze=`users/${O}/hours/${K}`;try{await Yt(SA(me,ze),ln),console.log(`Урок ${aA.id} добавлен на ${K} и отправлен в DB.`),i&&u.date===K&&g(RA=>[...RA,aA])}catch(RA){console.error("Ошибка при добавлении урока в Firebase:",RA),alert("Ошибка при добавлении урока."),A(tr=>({...tr,[K]:G}))}},QA=async(x,O)=>{var G;const K=(G=Y==null?void 0:Y.currentUser)==null?void 0:G.uid;if(!K){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:P}=u;if(!P||!Array.isArray(e[P]))return;const $=e[P],uA=$.map(oA=>oA.id===x?{...oA,...O}:oA);A(oA=>({...oA,[P]:uA}));const NA=`users/${K}/hours/${P}`;try{await Yt(SA(me,NA),uA),console.log(`Урок ${x} на ${P} обновлен в DB.`),g(oA=>oA.map(aA=>aA.id===x?{...aA,...O}:aA))}catch(oA){console.error("Ошибка при обновлении урока в Firebase:",oA),alert("Ошибка при обновлении урока."),A(aA=>({...aA,[P]:$}))}},gA=async x=>{var NA;const O=(NA=Y==null?void 0:Y.currentUser)==null?void 0:NA.uid;if(!O){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:K}=u;if(!K||!Array.isArray(e[K]))return;const P=e[K],$=P.filter(G=>G.id!==x);A(G=>({...G,[K]:$}));const uA=`users/${O}/hours/${K}`;try{$.length===0?await Yt(SA(me,uA),null):await Yt(SA(me,uA),$),console.log(`Урок ${x} на ${K} удален из DB.`),g(G=>G.filter(oA=>oA.id!==x)),$.length===0&&s(!1)}catch(G){console.error("Ошибка при удалении урока из Firebase:",G),alert("Ошибка при удалении урока."),A(oA=>({...oA,[K]:P}))}},T=(x,O,K)=>{const P=[...h];P[x]={...P[x],[O]:K},g(P)},R=x=>QA(x.id,{isLab:x.isLab,cabinet:x.cabinet}),M=x=>gA(x.id),tA=()=>{YA({date:u.date,lessonName:u.lessonName,groupName:u.groupName,isLab:w.isLab,cabinet:w.cabinet}),_({isLab:!1,cabinet:""})},q=()=>{if(!l){alert("Пожалуйста, выберите дату.");return}if(Object.keys(e).includes(l)){alert("Дата уже существует в таблице.");return}A(x=>({...x,[l]:[]})),a(!1),console.log(`Дата ${l} добавлена локально.`)};return m.jsxs(lM,{children:[m.jsxs(cM,{children:[m.jsx(Be,{onClick:I,children:"← Пред. месяц"}),m.jsxs(uM,{children:["Расписание за"," ",n.toLocaleString("ru-RU",{month:"long",year:"numeric"})]}),m.jsx(Be,{onClick:H,children:"След. месяц →"}),m.jsx(Be,{onClick:()=>{a(!0),c("")},children:"Добавить дату"})]}),m.jsx(dM,{children:m.jsxs(fM,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx(hM,{$isHovered:B==="header-row-key",onMouseEnter:()=>C("header-row-key"),onMouseLeave:()=>C(null),children:"Предмет / Группа"}),Q.map(x=>m.jsx(_C,{$isHovered:p===x,onMouseEnter:()=>f(x),onMouseLeave:()=>f(null),children:x},x)),m.jsx(_C,{$isHovered:B==="header-row-key",onMouseEnter:()=>C("header-row-key"),onMouseLeave:()=>C(null),children:"Итого (занятий)"})]})}),m.jsx("tbody",{children:v.map(({lessonName:x,groupName:O,cells:K,sum:P})=>{const $=`${x}|||${O}`;return m.jsxs("tr",{onMouseEnter:()=>C($),onMouseLeave:()=>C(null),children:[m.jsxs(pM,{$isHovered:B===$,children:[x,m.jsx("br",{}),m.jsxs("small",{children:["(",O,")"]})]}),Q.map(uA=>{const{labs:NA,lectures:G,total:oA,indices:aA}=K[uA]||{labs:0,lectures:0,total:0,indices:[]};return m.jsxs(gM,{onClick:()=>BA(uA,x,O,y[uA]),style:j({labs:NA,lectures:G},uA,$),onMouseEnter:()=>{f(uA),C($)},onMouseLeave:()=>{f(null),C(null)},children:[m.jsx(BM,{children:oA||""}),aA&&aA.length>0&&m.jsx(wM,{children:aA.join(",")})]},uA)}),m.jsx(Vd,{$isHovered:B===$,children:P})]},$)})}),m.jsx("tfoot",{children:m.jsxs("tr",{onMouseEnter:()=>C("footer-row-key"),onMouseLeave:()=>C(null),children:[m.jsx(mM,{$isHovered:B==="footer-row-key",children:"Всего часов по дням:"}),Q.map(x=>m.jsx(Vd,{$isHovered:p===x||B==="footer-row-key",onMouseEnter:()=>{f(x),C("footer-row-key")},onMouseLeave:()=>{f(null),C(null)},children:y[x]},x)),m.jsx(Vd,{$isHovered:B==="footer-row-key",children:U})]})})]})}),m.jsx(yn,{active:i,setActive:s,children:m.jsxs(CM,{children:[m.jsxs(EC,{children:[u.lessonName," (",u.groupName,")",m.jsx("br",{}),"Дата: ",u.date]}),h.length>0?h.map((x,O)=>m.jsxs(vM,{children:[m.jsxs(Gd,{children:[m.jsxs(UC,{value:x.isLab?"lab":"lec",onChange:K=>T(O,"isLab",K.target.value==="lab"),children:[m.jsx("option",{value:"lec",children:"Лекция"}),m.jsx("option",{value:"lab",children:"Лабораторная"})]}),m.jsx(FC,{type:"text",value:x.cabinet||"",onChange:K=>T(O,"cabinet",K.target.value),placeholder:"Кабинет"})]}),m.jsxs(Gd,{children:[m.jsx(Ai,{$variant:"primary",onClick:()=>R(h[O]),children:"Сохранить"}),m.jsx(Ai,{$variant:"danger",onClick:()=>M(x),children:"Удалить"})]})]},x.id)):m.jsx("p",{children:"Пока нет занятий по этому предмету и группе на эту дату."}),m.jsxs(yM,{children:[m.jsx(QM,{children:"Добавить занятие"}),m.jsxs(Gd,{children:[m.jsxs(UC,{value:w.isLab?"lab":"lec",onChange:x=>_(O=>({...O,isLab:x.target.value==="lab"})),children:[m.jsx("option",{value:"lec",children:"Лекция"}),m.jsx("option",{value:"lab",children:"Лабораторная"})]}),m.jsx(FC,{type:"text",value:w.cabinet,onChange:x=>_(O=>({...O,cabinet:x.target.value})),placeholder:"Кабинет"})]}),m.jsx(Ai,{$variant:"success",onClick:tA,children:"Добавить"})]}),m.jsx(_M,{children:m.jsx(Ai,{onClick:()=>s(!1),children:"Закрыть"})})]})}),m.jsx(yn,{active:o,setActive:a,children:m.jsxs(EM,{children:[m.jsx(EC,{children:"Выберите дату для добавления"}),m.jsx(UM,{type:"date",onChange:x=>{const O=x.target.valueAsDate;c(O?IM(O):"")}}),m.jsxs(FM,{children:[m.jsx(Ai,{$variant:"success",onClick:q,disabled:!l,children:"Добавить"}),m.jsx(Ai,{onClick:()=>a(!1),children:"Отмена"})]})]})})]})},LM={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#e6f3ff","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#fff0e6","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#e6ffe6","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#ffe6e6","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#e6e6ff","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#fff4e6","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#f0e6ff","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#ffe6f0"},kM={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#1a3b4f","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#4f3b1a","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#1a4f1a","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#4f1a1a","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#1a1a4f","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#4f3d1a","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#2d1a4f","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#4f1a3b"},bM=e=>{console.log("Поиск отделения для группы:",e),console.log("Доступные отделения:",qs);for(const[A,t]of Object.entries(qs))if(t.includes(e))return console.log("Найдено отделение:",A),A;return console.log("Отделение не найдено для группы:",e),null},IC=D.div`
  padding: 10px;
  max-width: 100%;
`,SC=D.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 2px solid ${({theme:e})=>e==="dark"?"#444":"#ddd"};
  border-radius: 25px;
  background: ${({theme:e})=>e==="dark"?"#333":"#fff"};
  color: ${({theme:e})=>e==="dark"?"#fff":"#333"};
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    transform: scale(1.02);
  }
`,DM=D.div`
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
`,NM=D.div`
  background: ${({theme:e})=>e==="dark"?"#2d2d2d":"#fff"};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e==="dark"?"#444":"#e0e0e0"};
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
`,RM=D.div`
  background: ${({theme:e,$departmentColor:A,$darkDepartmentColor:t})=>(console.log("GroupTitle props:",{theme:e,$departmentColor:A,$darkDepartmentColor:t}),e==="dark"&&t?(console.log("Используем темный цвет:",t),t):e==="light"&&A?(console.log("Используем светлый цвет:",A),A):(console.log("Используем цвет по умолчанию"),e==="dark"?"#3d3d3d":"#f5f5f5"))};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({theme:e})=>e==="dark"?"#444":"#e0e0e0"};

  /* Добавляем небольшой контраст для текста в темной теме */
  color: ${({theme:e,$darkDepartmentColor:A})=>e==="dark"&&A?"#fff":"inherit"};
`,OM=D.div`
  display: flex;
  flex-direction: column;
`,MM=D.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid
    ${({theme:e})=>e==="dark"?"#444":"#f0f0f0"};

  /* Анимация для строк уроков */
  animation: rowAppear 0.3s ease forwards;
  animation-delay: ${({index:e})=>e*.05}s;
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
`,PM=D.div`
  width: 40px;
  font-weight: bold;
  color: ${({theme:e})=>e==="dark"?"#aaa":"#666"};
`,KM=D.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,VM=D.div`
  background: ${({theme:e})=>e==="dark"?"#4a4a4a":"#e8f0fe"};
  color: ${({theme:e})=>e==="dark"?"#fff":"#1976d2"};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e==="dark"?"#5a5a5a":"#d0e0ff"};
    transform: scale(1.05);
  }
`,xC=D.div`
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
`,GM=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px 15px;
  background: ${({theme:e})=>e==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 12px;
  font-size: 14px;
  color: ${({theme:e})=>e==="dark"?"#fff":"#333"};
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
`,TC=D.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #4a90e2;
    font-size: 18px;
  }
`,WM=({schedule:e,dateSchedule:A,theme:t="light"})=>{const[n,r]=L.useState(""),[i,s]=L.useState(0),[o,a]=L.useState(!1);if(console.log("AllGroupsSchedule рендер, theme:",t),!e||!Array.isArray(e)||e.length===0)return m.jsxs(IC,{children:[m.jsx(SC,{theme:t,placeholder:"🔍 Поиск группы или предмета...",value:n,onChange:c=>r(c.target.value)}),m.jsx(xC,{children:"Нет данных о расписании"})]});const l=e.filter(c=>{if(!c)return!1;const u=c.groupName||"",d=n.toLowerCase(),h=u.toLowerCase().includes(d),w=(c.lessons||[]).some(_=>_?(_.lessonName||"").toLowerCase().includes(d):!1);return h||w});return L.useEffect(()=>{a(!0),s(l.length);const c=setTimeout(()=>{a(!1)},500);return()=>clearTimeout(c)},[l.length]),m.jsxs(IC,{children:[m.jsx(SC,{theme:t,placeholder:"🔍 Поиск группы или предмета...",value:n,onChange:c=>r(c.target.value)}),m.jsxs(GM,{theme:t,children:[m.jsxs(TC,{children:["📊 Найдено групп: ",m.jsx("span",{children:l.length})]}),n&&m.jsxs(TC,{children:['🔍 Поиск: "',n,'"']})]}),m.jsx(DM,{className:o?"searching":"",children:l.map((c,u)=>{const d=c.groupName||`Группа ${u+1}`,h=c.lessons||[],g=bM(d);console.log(`Группа ${d}: отделение =`,g);const w=g?LM[g]:null,_=g?kM[g]:null;return console.log(`Цвета для ${d}:`,{departmentColor:w,darkDepartmentColor:_}),m.jsxs(NM,{theme:t,style:{animationDelay:`${u*.1}s`},children:[m.jsx(RM,{theme:t,$departmentColor:w,$darkDepartmentColor:_,children:d}),m.jsx(OM,{children:h.map((p,f)=>{const B=(p==null?void 0:p.lessonNumber)||f+1,C=(p==null?void 0:p.lessonName)||"Название не указано",Q=(p==null?void 0:p.cabinet)||"---";return m.jsxs(MM,{theme:t,index:f,children:[m.jsx(PM,{theme:t,children:B}),m.jsxs(KM,{theme:t,children:[C,(p==null?void 0:p.isLab)&&" 🔬"]}),m.jsx(VM,{theme:t,children:Q})]},f)})})]},d+u)})}),l.length===0&&m.jsxs(xC,{children:['😕 Ничего не найдено по запросу "',n,'"']})]})},jM=()=>{var f,B;const[e,A]=L.useState(!1),[t,n]=L.useState(""),[r,i]=L.useState(""),[s,o]=L.useState(""),[a,l]=L.useState(!1),[c,u]=L.useState(null),h=d_().currentUser,g=UE();L.useEffect(()=>{h&&w()},[h]);const w=async()=>{if(h)try{const C=SA(g,`users/${h.uid}/telegram`),Q=await Br(C);Q.exists()&&(l(!0),u(Q.val()))}catch(C){console.error("Ошибка при проверке статуса:",C)}},_=async C=>{if(C.preventDefault(),!h){i("Необходимо войти в систему");return}const Q=t.toUpperCase().trim();if(!Q||Q.length!==6){i("Введите корректный 6-значный код");return}A(!0),i(""),o("");try{const v=SA(g,"tempLinks"),y=await Br(v);if(!y.exists()){i("Код не найден"),A(!1);return}const U=y.val();let I=null,H=null;for(const[QA,gA]of Object.entries(U))if(gA.code===Q&&!gA.used&&gA.expiresAt>Date.now()){I=QA,H=gA;break}if(!I){i("Код не найден или истек"),A(!1);return}const rA=SA(g,`telegramLinks/${I}`);if((await Br(rA)).exists()){i("Этот Telegram уже привязан к другому аккаунту"),A(!1);return}const j=SA(g,`users/${h.uid}/telegram`);if((await Br(j)).exists()){i("К этому аккаунту уже привязан Telegram"),A(!1);return}await Sl(SA(g,`tempLinks/${I}`),{used:!0});const YA={};YA[`telegramLinks/${I}`]={firebaseUid:h.uid,linkedAt:Date.now(),telegramInfo:H.telegramInfo},YA[`users/${h.uid}/telegram`]={telegramId:Number(I),linkedAt:Date.now(),telegramInfo:H.telegramInfo},await Sl(SA(g),YA),setTimeout(async()=>{try{await XO(SA(g,`tempLinks/${I}`))}catch(QA){console.error("Ошибка при удалении временного кода:",QA)}},5*60*1e3),o("Telegram успешно привязан!"),n(""),w()}catch(v){console.error("Ошибка при привязке:",v),i("Ошибка при привязке Telegram")}finally{A(!1)}},p=async()=>{if(!(!h||!c)&&window.confirm("Вы уверены, что хотите отвязать Telegram?")){A(!0),i(""),o("");try{const C={};C[`users/${h.uid}/telegram`]=null,C[`telegramLinks/${c.telegramId}`]=null,await Sl(SA(g),C),l(!1),u(null),o("Telegram успешно отвязан")}catch(C){console.error("Ошибка при отвязке:",C),i("Ошибка при отвязке Telegram")}finally{A(!1)}}};return h?m.jsxs("div",{className:"telegram-link-container",children:[m.jsx("h3",{children:"📱 Привязка Telegram"}),r&&m.jsxs("div",{className:"alert alert-error",children:["❌ ",r]}),s&&m.jsxs("div",{className:"alert alert-success",children:["✅ ",s]}),a?m.jsxs("div",{className:"telegram-linked",children:[m.jsxs("div",{className:"telegram-info",children:[m.jsx("div",{className:"info-icon",children:"✅"}),m.jsxs("div",{className:"info-text",children:[m.jsx("strong",{children:"Telegram привязан"}),((f=c==null?void 0:c.telegramInfo)==null?void 0:f.username)&&m.jsxs("div",{children:["@",c.telegramInfo.username]}),((B=c==null?void 0:c.telegramInfo)==null?void 0:B.first_name)&&m.jsxs("div",{children:[c.telegramInfo.first_name," ",c.telegramInfo.last_name]}),m.jsxs("div",{className:"linked-date",children:["Привязан: ",new Date(c.linkedAt).toLocaleString()]})]})]}),m.jsx("button",{onClick:p,disabled:e,className:"btn btn-danger",children:e?"Отвязка...":"Отвязать Telegram"})]}):m.jsxs("div",{className:"telegram-unlinked",children:[m.jsxs("div",{className:"instruction-box",children:[m.jsx("h4",{children:"Как привязать Telegram:"}),m.jsxs("ol",{children:[m.jsxs("li",{children:["Откройте Telegram бота ",m.jsx("strong",{children:"@vgtk_schedule_bot"})]}),m.jsxs("li",{children:["Нажмите кнопку ",m.jsx("strong",{children:'"🔗 Привязать аккаунт"'})," или отправьте команду ",m.jsx("strong",{children:"/link"})]}),m.jsx("li",{children:"Бот пришлет вам 6-значный код"}),m.jsx("li",{children:"Введите этот код в поле ниже"})]})]}),m.jsxs("form",{onSubmit:_,className:"code-form",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"telegram-code",children:"Код из Telegram:"}),m.jsx("input",{type:"text",id:"telegram-code",value:t,onChange:C=>n(C.target.value.toUpperCase()),placeholder:"Например: A1B2C3",maxLength:"6",className:"code-input",disabled:e,autoComplete:"off",autoFocus:!0})]}),m.jsx("button",{type:"submit",disabled:e||t.length!==6,className:"btn btn-primary",children:e?"Проверка...":"Привязать Telegram"})]}),m.jsx("div",{className:"note",children:m.jsx("small",{children:"⏰ Код действителен 15 минут"})})]}),m.jsx("style",{jsx:!0,children:`
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
      `})]}):m.jsx("div",{className:"telegram-link-container",children:m.jsx("div",{className:"alert alert-warning",children:"⚠️ Необходимо войти в систему для привязки Telegram"})})},zM=new Gt;function $M(){var Og;const[e,A]=L.useState(!1),[t,n]=L.useState(!1),[r,i]=L.useState([]),[s,o]=L.useState([]),[a,l]=L.useState([]),[c,u]=L.useState("Пожалуйста подождите"),[d,h]=L.useState(""),[g,w]=L.useState(""),[_,p]=L.useState(!1),[f,B]=L.useState(!1),[C,Q]=L.useState(!1),[v,y]=L.useState(0),[U,I]=L.useState(0),[H,rA]=L.useState(JSON.parse(localStorage.getItem("userTarification"))||[]),[yA,j]=L.useState(!1),[BA,YA]=L.useState(!1),[QA,gA]=L.useState(!1),[T,R]=L.useState(!1),[M,tA]=L.useState(""),[q,x]=L.useState(""),[O,K]=L.useState(""),[P,$]=L.useState(""),[uA,NA]=L.useState(""),[G,oA]=L.useState(localStorage.getItem("userCabinet")||null),[aA,ln]=L.useState(""),[ze,Nt]=L.useState("my"),[RA,tr]=WD(Y),{theme:Rt,setTheme:cs}=JL(),ge=E=>{var z;RA?Yt(SA(me,`users/${(z=Y==null?void 0:Y.currentUser)==null?void 0:z.uid}/tarification`),E):(console.log("Нет пользователя"),localStorage.setItem("userTarification",JSON.stringify(E)))},Pr=E=>{var z;RA?Sl(SA(me,`users/${(z=Y==null?void 0:Y.currentUser)==null?void 0:z.uid}/userInfo`),{cabinet:E}):localStorage.setItem("userCabinet",E)},De=E=>{h(E.target.value)},Kr=E=>{NA(E.target.value)},us=L.useCallback(E=>{A(!0),x(E)},[]),xu=L.useCallback(()=>{$(!0)},[]),la=L.useCallback(E=>{n(!0),K(H.find(z=>z.id===E))},[H]),$e=()=>{Q(E=>!E)},Vr=()=>{p(E=>!E)},FE=E=>{w(E.target.value)},IE=E=>{tA(E.target.value)},SE=L.useCallback(()=>{cs(Rt==="light"?"dark":"light")},[cs,Rt]),bg=E=>H.some(z=>z.groupName.toLowerCase().trim()===E.groupName.toLowerCase().trim()&&z.lesson.toLowerCase().trim()===E.lessonName.toLowerCase().trim()),Dg=(E,z)=>{E.altNaming.some(dA=>dA===z)?alert("Название уже существует"):(E.altNaming.push(z),ge(H),ds())},xE=E=>{bg(E)?alert('Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.'):(console.log("УРОК ИЗ МОДАЛКИ",E),ln(E.lessonName),YA(!0))},Ng=()=>{var E;Br(SA(me,`users/${(E=Y==null?void 0:Y.currentUser)==null?void 0:E.uid}/hours`)).then(z=>{z.exists()?I(z.val()):console.log("No data available")}).catch(z=>{console.error(z)})},TE=()=>{if(H.some(z=>z.groupName.toLowerCase().trim()===g.toLowerCase().trim()&&z.lesson.toLowerCase().trim()===d.toLowerCase().trim()))console.log("Группа с таким названием и уроком уже существует!");else{const z={id:tk(),groupName:g,lesson:d,lecture:_,labs:C,altNaming:[]};rA(dA=>[...dA,z]),ge([...H,z]),ds()}},Rg=(E,z)=>{E.preventDefault(),z()},ds=L.useCallback(()=>{const E=[];let z=0;const dA=JA=>(JA||"").toLowerCase().trim(),Ue=new Map(r.map(JA=>[(JA.groupName??"").toLowerCase().trim(),JA]));H.forEach(JA=>{const{groupName:cn,lesson:fs,labs:ca,lecture:NE,altNaming:Mg}=JA,RE=dA(cn),Pg=Ue.get(RE);Pg&&Pg.lessons.forEach(hs=>{const Kg=dA(hs==null?void 0:hs.lessonName),OE=Kg===dA(fs),ME=Array.isArray(Mg)&&Mg.some(ua=>Kg===dA(ua)),Vg=!!hs.isLab;if((OE||ME)&&(ca&&Vg||!Vg&&NE)){const ua={...hs,lessonName:fs};ua.id=`${++z}`,E.push(ua)}})}),E.sort((JA,cn)=>{const fs=parseFloat(JA==null?void 0:JA.lessonNumber)||0,ca=parseFloat(cn==null?void 0:cn.lessonNumber)||0;return fs!==ca?fs-ca:((JA==null?void 0:JA.id)||"").localeCompare((cn==null?void 0:cn.id)||"")}),o(E)},[r,H]),HE=()=>{const E=jv(c),z=()=>{var dA;y(1),Yt(SA(me,`users/${(dA=Y==null?void 0:Y.currentUser)==null?void 0:dA.uid}/hours/${E}`),s).then(()=>{alert("Сохранено"),y(1),setTimeout(()=>{y(0)},5e3),Ng()}).catch(Ue=>{console.log(Ue),y(2),setTimeout(()=>{y(0)},5e3)})};s.length<9?confirm("Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?")&&z():z()},LE=()=>Xb(Y,zM).then(()=>{}).catch(E=>{const z=E.code,dA=E.message;console.log("error ",z,dA)}),kE=()=>{Sb(Y).then(()=>{}).catch(E=>{console.log(E)})},bE=E=>{const z=H.filter(dA=>dA.id!==E);rA(z),ge(z),ds()},DE=()=>{oA(M),tA(""),Pr(M)};return L.useEffect(()=>{(async()=>{const[z,dA,Ue]=await BI(QA?CI:vI,G);i(z),l(dA),u(Ue)})()},[QA,G]),L.useEffect(()=>{ds(),Ng()},[r,a,H,ds]),L.useEffect(()=>{var E,z;console.log("USER ИЗМЕНИЛСЯ"),RA?Br(SA(me,`users/${(E=Y==null?void 0:Y.currentUser)==null?void 0:E.uid}/tarification`)).then(dA=>{var Ue;dA.exists()?rA(dA.val()):localStorage.getItem("userTarification")&&Yt(SA(me,`users/${(Ue=Y==null?void 0:Y.currentUser)==null?void 0:Ue.uid}/tarification`),JSON.parse(localStorage.getItem("userTarification")||[]))}).catch(dA=>{console.error(dA)}):rA(JSON.parse(localStorage.getItem("userTarification"))||[]),RA&&Br(SA(me,`users/${(z=Y==null?void 0:Y.currentUser)==null?void 0:z.uid}/userInfo`)).then(dA=>{var Ue;dA.exists()?oA(dA.val().cabinet):localStorage.getItem("userCabinet")?(Yt(SA(me,`users/${(Ue=Y==null?void 0:Y.currentUser)==null?void 0:Ue.uid}/userInfo`),{cabinet:localStorage.getItem("userCabinet")}),console.log("localStorage To DB")):console.log("No cabinet yet")}).catch(dA=>{console.error(dA)})},[RA]),L.useEffect(()=>{var Ue;const E=(Ue=Y==null?void 0:Y.currentUser)==null?void 0:Ue.uid;if(!E)return;const z=SA(me,`users/${E}/hours`),dA=JO(z,JA=>{JA.exists()?I(JA.val()):(console.log("No data available"),I(null))},JA=>{console.error(JA)});return()=>dA()},[]),console.log(s),m.jsxs(F1,{children:[m.jsxs(S1,{children:[m.jsx("a",{href:"https://www.vgtk.by",children:m.jsx(ad,{src:W1,alt:""})}),RA?m.jsx(ad,{src:RA.photoURL}):m.jsx(ad,{src:j1}),m.jsx(T1,{onClick:()=>{gA(E=>!E)},children:c}),RA?m.jsxs(m.Fragment,{children:[m.jsx(Be,{onClick:kE,children:"Выйти"}),m.jsx(Be,{onClick:xu,children:"Настройки профиля"})]}):m.jsx(Be,{onClick:LE,children:"Войти"}),m.jsx(Tp,{handleChangeTheme:SE,theme:Rt})]}),m.jsxs(E1,{children:[m.jsxs(pw,{onSubmit:E=>{Rg(E,TE)},action:"",children:[m.jsx(ww,{handleInputChange:De,inputValue:d}),m.jsx(R1,{handleSelectChange:FE}),m.jsxs(I1,{children:[m.jsx(mw,{label:"Лабораторные",handleCheckBoxChange:$e}),m.jsx(mw,{label:"Лекции",handleCheckBoxChange:Vr})]}),m.jsx(Be,{type:"submit",children:"Добавить"}),m.jsx(Be,{onClick:()=>{j(E=>!E)},type:"button",children:"Редактировать"})]}),yA&&m.jsxs(m.Fragment,{children:["Ваша тарификация:",H.map(E=>m.jsxs(hw,{children:[m.jsx(dn,{children:E.lesson}),m.jsx(Ta,{children:E.groupName}),m.jsxs("p",{children:["Лаб. ",E.labs?"Есть":"Нет"]}),m.jsxs("p",{children:["Лекции ",E.lecture?"Есть":"Нет"]}),m.jsx(Be,{onClick:()=>{la(E.id)},children:"Добавить названия"}),m.jsx(x1,{onClick:()=>bE(E.id),children:"Удалить"})]},E.id))]})]}),m.jsxs("div",{children:[m.jsxs(gw,{children:[m.jsxs(D1,{children:[m.jsx(Bw,{active:ze==="my",onClick:()=>Nt("my"),theme:Rt,children:"📋 Моё расписание"}),m.jsx(Bw,{active:ze==="all",onClick:()=>Nt("all"),theme:Rt,children:"🏫 Все группы"})]}),ze==="my"&&m.jsxs(m.Fragment,{children:[m.jsxs(L1,{children:[m.jsx(H1,{onChange:IE,value:M,type:"text",placeholder:`Ваш кабинет: ${G}`}),m.jsx(k1,{onClick:DE,children:"+"})]}),m.jsx("div",{children:m.jsx(rk,{displayName:"Ваш кабинет",displayNameAlt:"Ваше расписание",handleClick:()=>{R(E=>!E)}})})]})]}),ze==="my"?m.jsxs(m.Fragment,{children:[m.jsxs(b1,{children:[!T&&s.map(E=>m.jsxs(od,{children:[m.jsx(jr,{children:E.lessonNumber}),m.jsx(dn,{children:Id[E.lessonNumber]}),m.jsx(dn,{children:E.lessonName}),m.jsx(Ta,{onClick:()=>{us(E.groupName)},children:E.groupName}),m.jsx(jr,{children:E.cabinet})]},E.id)),T&&a.map(E=>m.jsxs(od,{children:[m.jsx(jr,{children:E.lessonNumber}),m.jsx(dn,{children:Id[E.lessonNumber]}),m.jsx(dn,{children:E.lessonName}),m.jsx(Ta,{onClick:()=>{us(E.groupName)},children:E.groupName}),m.jsx(jr,{children:E.cabinet})]},`${E.lessonName+E.lessonNumber}`))]}),m.jsx(gw,{children:RA&&m.jsxs(m.Fragment,{children:[m.jsx(Be,{handleState:v,onClick:HE,children:"Добавить в учет часов"}),m.jsx(Be,{onClick:()=>{B(!0)},children:"Открыть учет часов"})]})})]}):m.jsx(WM,{schedule:r,dateSchedule:c,theme:Rt})]}),m.jsxs(yn,{active:e,setActive:A,children:[m.jsxs("div",{children:["Расписание группы ",q]}),m.jsx("div",{children:(Og=r.find(E=>E.groupName.toLowerCase().trim()===q.toLowerCase().trim()))==null?void 0:Og.lessons.map(E=>m.jsxs(od,{children:[m.jsx(jr,{children:E.lessonNumber}),m.jsx(dn,{children:Id[E.lessonNumber]}),m.jsx(dn,{children:E.lessonName}),m.jsx(jr,{children:E.cabinet}),!bg(E)&&E.cabinet&&m.jsx(Be,{onClick:()=>xE(E),children:"Добавить"})||m.jsx(Be,{onClick:()=>handleDeleteByLesson(E),children:"Удалить"})]},E.lessonNumber))})]}),m.jsx(yn,{active:P,setActive:$,children:m.jsx(jM,{})}),m.jsxs(yn,{active:t,setActive:n,children:[m.jsxs("div",{children:["Введите альтернативные названия для предмета ",m.jsx("br",{})," ",O==null?void 0:O.lesson]}),m.jsxs(pw,{onSubmit:E=>{Rg(E,()=>{Dg(O,uA)})},action:"",children:[m.jsx(ww,{handleInputChange:Kr,inputValue:uA}),m.jsx(Be,{type:"submit",children:"Добавить"})]}),m.jsx("div",{children:"Альтернативные названия:"}),O&&O.altNaming&&O.altNaming.map(E=>m.jsx("p",{children:E},E))]}),m.jsx(yn,{active:f,setActive:B,children:m.jsx(HM,{rawData:U,onRawDataChange:E=>{I(E)},userTarification:H})}),m.jsx(yn,{active:BA,setActive:YA,children:H.map(E=>E.groupName===q&&m.jsxs(hw,{children:[m.jsx(dn,{children:E.lesson}),m.jsx(Ta,{children:E.groupName}),m.jsx(Be,{onClick:()=>{Dg(E,aA),YA(!1)},children:"Добавить названия"})]},E.id))})]})}Wv(document.getElementById("root")).render(m.jsx($M,{}));
