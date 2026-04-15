(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n_={exports:{}},Bl={},r_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),xw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Iw=Symbol.for("react.strict_mode"),Tw=Symbol.for("react.profiler"),Nw=Symbol.for("react.provider"),bw=Symbol.for("react.context"),Pw=Symbol.for("react.forward_ref"),Rw=Symbol.for("react.suspense"),Aw=Symbol.for("react.memo"),Dw=Symbol.for("react.lazy"),lp=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var i_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s_=Object.assign,o_={};function is(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a_(){}a_.prototype=is.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}var Xd=qd.prototype=new a_;Xd.constructor=qd;s_(Xd,is.prototype);Xd.isPureReactComponent=!0;var cp=Array.isArray,l_=Object.prototype.hasOwnProperty,Jd={current:null},c_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l_.call(e,r)&&!c_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:Jd.current}}function Ow(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function Mw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var up=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mw(""+t.key):e.toString(36)}function Ca(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case xw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tc(o,0):r,cp(i)?(n="",t!=null&&(n=t.replace(up,"$&/")+"/"),Ca(i,e,n,"",function(c){return c})):i!=null&&(Zd(i)&&(i=Ow(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(up,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Tc(s,a);o+=Ca(s,e,n,l,i)}else if(l=Lw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Tc(s,a++),o+=Ca(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return Ca(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ea={transition:null},jw={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Jd};function d_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=is;Z.Fragment=kw;Z.Profiler=Tw;Z.PureComponent=qd;Z.StrictMode=Iw;Z.Suspense=Rw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;Z.act=d_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l_.call(e,l)&&!c_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:bw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nw,_context:t},t.Consumer=t};Z.createElement=u_;Z.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:Pw,render:t}};Z.isValidElement=Zd;Z.lazy=function(t){return{$$typeof:Dw,_payload:{_status:-1,_result:t},_init:Fw}};Z.memo=function(t,e){return{$$typeof:Aw,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};Z.unstable_act=d_;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";r_.exports=Z;var I=r_.exports;const Fi=Qd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w=I,Uw=Symbol.for("react.element"),zw=Symbol.for("react.fragment"),Bw=Object.prototype.hasOwnProperty,Ww=$w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hw={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bw.call(e,r)&&!Hw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Uw,type:t,key:s,ref:o,props:i,_owner:Ww.current}}Bl.Fragment=zw;Bl.jsx=h_;Bl.jsxs=h_;n_.exports=Bl;var p=n_.exports,f_={exports:{}},Rt={},p_={exports:{}},m_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var $=A.length;A.push(M);e:for(;0<$;){var oe=$-1>>>1,re=A[oe];if(0<i(re,M))A[oe]=M,A[$]=re,$=oe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],$=A.pop();if($!==M){A[0]=$;e:for(var oe=0,re=A.length,P=re>>>1;oe<P;){var F=2*(oe+1)-1,V=A[F],U=F+1,te=A[U];if(0>i(V,$))U<re&&0>i(te,V)?(A[oe]=te,A[U]=$,oe=U):(A[oe]=V,A[F]=$,oe=F);else if(U<re&&0>i(te,$))A[oe]=te,A[U]=$,oe=U;else break e}}return M}function i(A,M){var $=A.sortIndex-M.sortIndex;return $!==0?$:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,h=3,g=!1,y=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=A)r(c),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(c)}}function v(A){if(S=!1,_(A),!y)if(n(l)!==null)y=!0,xt(E);else{var M=n(c);M!==null&&Ze(v,M.startTime-A)}}function E(A,M){y=!1,S&&(S=!1,m(O),O=-1),g=!0;var $=h;try{for(_(M),u=n(l);u!==null&&(!(u.expirationTime>M)||A&&!ke());){var oe=u.callback;if(typeof oe=="function"){u.callback=null,h=u.priorityLevel;var re=oe(u.expirationTime<=M);M=t.unstable_now(),typeof re=="function"?u.callback=re:u===n(l)&&r(l),_(M)}else r(l);u=n(l)}if(u!==null)var P=!0;else{var F=n(c);F!==null&&Ze(v,F.startTime-M),P=!1}return P}finally{u=null,h=$,g=!1}}var x=!1,C=null,O=-1,G=5,H=-1;function ke(){return!(t.unstable_now()-H<G)}function Se(){if(C!==null){var A=t.unstable_now();H=A;var M=!0;try{M=C(!0,A)}finally{M?Je():(x=!1,C=null)}}else x=!1}var Je;if(typeof f=="function")Je=function(){f(Se)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,mt=pt.port2;pt.port1.onmessage=Se,Je=function(){mt.postMessage(null)}}else Je=function(){b(Se,0)};function xt(A){C=A,x||(x=!0,Je())}function Ze(A,M){O=b(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,xt(E))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var $=h;h=M;try{return A()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=h;h=A;try{return M()}finally{h=$}},t.unstable_scheduleCallback=function(A,M,$){var oe=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?oe+$:oe):$=oe,A){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=$+re,A={id:d++,callback:M,priorityLevel:A,startTime:$,expirationTime:re,sortIndex:-1},$>oe?(A.sortIndex=$,e(c,A),n(l)===null&&A===n(c)&&(S?(m(O),O=-1):S=!0,Ze(v,$-oe))):(A.sortIndex=re,e(l,A),y||g||(y=!0,xt(E))),A},t.unstable_shouldYield=ke,t.unstable_wrapCallback=function(A){var M=h;return function(){var $=h;h=M;try{return A.apply(this,arguments)}finally{h=$}}}})(m_);p_.exports=m_;var Vw=p_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=I,Pt=Vw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g_=new Set,eo={};function ei(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(eo[t]=e,t=0;t<e.length;t++)g_.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,Kw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},hp={};function Yw(t){return Iu.call(hp,t)?!0:Iu.call(dp,t)?!1:Kw.test(t)?hp[t]=!0:(dp[t]=!0,!1)}function Qw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qw(t,e,n,r){if(e===null||typeof e>"u"||Qw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qw(e,n,i,r)&&(n=null),r||i===null?Yw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),fp=Symbol.iterator;function ys(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Nc;function Rs(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var bc=!1;function Pc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function Xw(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case Tu:return"Profiler";case rh:return"StrictMode";case Nu:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case __:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sh:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function Jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zw(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=Zw(t))}function S_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C_(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function Au(t,e){C_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var As=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(As(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function E_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eS=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){eS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function T_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tS=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(t,e){if(e){if(tS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,Ti=null,Ni=null;function yp(t){if(t=Do(t)){if(typeof $u!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Kl(e),$u(t.stateNode,t.type,e))}}function N_(t){Ti?Ni?Ni.push(t):Ni=[t]:Ti=t}function b_(){if(Ti){var t=Ti,e=Ni;if(Ni=Ti=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function P_(t,e){return t(e)}function R_(){}var Rc=!1;function A_(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return P_(t,e,n)}finally{Rc=!1,(Ti!==null||Ni!==null)&&(R_(),b_())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Uu=!1;if(Pn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Uu=!1}function nS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fs=!1,Ga=null,Ka=!1,zu=null,rS={onError:function(t){Fs=!0,Ga=t}};function iS(t,e,n,r,i,s,o,a,l){Fs=!1,Ga=null,nS.apply(rS,arguments)}function sS(t,e,n,r,i,s,o,a,l){if(iS.apply(this,arguments),Fs){if(Fs){var c=Ga;Fs=!1,Ga=null}else throw Error(k(198));Ka||(Ka=!0,zu=c)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(ti(t)!==t)throw Error(k(188))}function oS(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vp(i),t;if(s===r)return vp(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function L_(t){return t=oS(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var M_=Pt.unstable_scheduleCallback,wp=Pt.unstable_cancelCallback,aS=Pt.unstable_shouldYield,lS=Pt.unstable_requestPaint,Pe=Pt.unstable_now,cS=Pt.unstable_getCurrentPriorityLevel,ah=Pt.unstable_ImmediatePriority,F_=Pt.unstable_UserBlockingPriority,Ya=Pt.unstable_NormalPriority,uS=Pt.unstable_LowPriority,j_=Pt.unstable_IdlePriority,Wl=null,un=null;function dS(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:pS,hS=Math.log,fS=Math.LN2;function pS(t){return t>>>=0,t===0?32:31-(hS(t)/fS|0)|0}var ta=64,na=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ds(a):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function mS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $_(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function _S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function U_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,ch,B_,W_,H_,Wu=!1,ra=[],rr=null,ir=null,sr=null,ro=new Map,io=new Map,Qn=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Do(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vS(t,e,n,r,i){switch(e){case"focusin":return rr=ws(rr,t,e,n,r,i),!0;case"dragenter":return ir=ws(ir,t,e,n,r,i),!0;case"mouseover":return sr=ws(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,ws(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,ws(io.get(s)||null,t,e,n,r,i)),!0}return!1}function V_(t){var e=Ar(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,H_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return e=Do(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Cp(t,e,n){xa(t)&&n.delete(e)}function wS(){Wu=!1,rr!==null&&xa(rr)&&(rr=null),ir!==null&&xa(ir)&&(ir=null),sr!==null&&xa(sr)&&(sr=null),ro.forEach(Cp),io.forEach(Cp)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,wS)))}function so(t){function e(i){return Ss(i,t)}if(0<ra.length){Ss(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ss(rr,t),ir!==null&&Ss(ir,t),sr!==null&&Ss(sr,t),ro.forEach(e),io.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)V_(n),n.blockedOn===null&&Qn.shift()}var bi=Fn.ReactCurrentBatchConfig,qa=!0;function SS(t,e,n,r){var i=ce,s=bi.transition;bi.transition=null;try{ce=1,uh(t,e,n,r)}finally{ce=i,bi.transition=s}}function CS(t,e,n,r){var i=ce,s=bi.transition;bi.transition=null;try{ce=4,uh(t,e,n,r)}finally{ce=i,bi.transition=s}}function uh(t,e,n,r){if(qa){var i=Hu(t,e,n,r);if(i===null)Bc(t,e,r,Xa,n),Sp(t,r);else if(vS(i,t,e,n,r))r.stopPropagation();else if(Sp(t,r),e&4&&-1<yS.indexOf(t)){for(;i!==null;){var s=Do(i);if(s!==null&&z_(s),s=Hu(t,e,n,r),s===null&&Bc(t,e,r,Xa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bc(t,e,r,null,n)}}var Xa=null;function Hu(t,e,n,r){if(Xa=null,t=oh(r),t=Ar(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function G_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case ah:return 1;case F_:return 4;case Ya:case uS:return 16;case j_:return 536870912;default:return 16}default:return 16}}var er=null,dh=null,ka=null;function K_(){if(ka)return ka;var t,e=dh,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ka=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Ep(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Ep,this.isPropagationStopped=Ep,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=At(ss),Ao=xe({},ss,{view:0,detail:0}),ES=At(Ao),Dc,Lc,Cs,Hl=xe({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Dc=t.screenX-Cs.screenX,Lc=t.screenY-Cs.screenY):Lc=Dc=0,Cs=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),xp=At(Hl),xS=xe({},Hl,{dataTransfer:0}),kS=At(xS),IS=xe({},Ao,{relatedTarget:0}),Oc=At(IS),TS=xe({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=At(TS),bS=xe({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=At(bS),RS=xe({},ss,{data:0}),kp=At(RS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LS[t])?!!e[t]:!1}function fh(){return OS}var MS=xe({},Ao,{key:function(t){if(t.key){var e=AS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=At(MS),jS=xe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=At(jS),$S=xe({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),US=At($S),zS=xe({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=At(zS),WS=xe({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HS=At(WS),VS=[9,13,27,32],ph=Pn&&"CompositionEvent"in window,js=null;Pn&&"documentMode"in document&&(js=document.documentMode);var GS=Pn&&"TextEvent"in window&&!js,Y_=Pn&&(!ph||js&&8<js&&11>=js),Tp=" ",Np=!1;function Q_(t,e){switch(t){case"keyup":return VS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function KS(t,e){switch(t){case"compositionend":return q_(e);case"keypress":return e.which!==32?null:(Np=!0,Tp);case"textInput":return t=e.data,t===Tp&&Np?null:t;default:return null}}function YS(t,e){if(fi)return t==="compositionend"||!ph&&Q_(t,e)?(t=K_(),ka=dh=er=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y_&&e.locale!=="ko"?null:e.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QS[t.type]:e==="textarea"}function X_(t,e,n,r){N_(r),e=Ja(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,oo=null;function qS(t){ly(t,0)}function Vl(t){var e=gi(t);if(S_(e))return t}function XS(t,e){if(t==="change")return e}var J_=!1;if(Pn){var Mc;if(Pn){var Fc="oninput"in document;if(!Fc){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Fc=typeof Pp.oninput=="function"}Mc=Fc}else Mc=!1;J_=Mc&&(!document.documentMode||9<document.documentMode)}function Rp(){$s&&($s.detachEvent("onpropertychange",Z_),oo=$s=null)}function Z_(t){if(t.propertyName==="value"&&Vl(oo)){var e=[];X_(e,oo,t,oh(t)),A_(qS,e)}}function JS(t,e,n){t==="focusin"?(Rp(),$s=e,oo=n,$s.attachEvent("onpropertychange",Z_)):t==="focusout"&&Rp()}function ZS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(oo)}function eC(t,e){if(t==="click")return Vl(e)}function tC(t,e){if(t==="input"||t==="change")return Vl(e)}function nC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:nC;function ao(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Iu.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dp(t,e){var n=Ap(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ap(n)}}function ey(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ey(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ty(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rC(t){var e=ty(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ey(n.ownerDocument.documentElement,n)){if(r!==null&&mh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dp(n,s);var o=Dp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iC=Pn&&"documentMode"in document&&11>=document.documentMode,pi=null,Vu=null,Us=null,Gu=!1;function Lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||pi==null||pi!==Va(r)||(r=pi,"selectionStart"in r&&mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&ao(Us,r)||(Us=r,r=Ja(Vu,"onSelect"),0<r.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},jc={},ny={};Pn&&(ny=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Gl(t){if(jc[t])return jc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ny)return jc[t]=e[n];return t}var ry=Gl("animationend"),iy=Gl("animationiteration"),sy=Gl("animationstart"),oy=Gl("transitionend"),ay=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){ay.set(t,e),ei(e,[t])}for(var $c=0;$c<Op.length;$c++){var Uc=Op[$c],sC=Uc.toLowerCase(),oC=Uc[0].toUpperCase()+Uc.slice(1);Sr(sC,"on"+oC)}Sr(ry,"onAnimationEnd");Sr(iy,"onAnimationIteration");Sr(sy,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(oy,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function Mp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sS(r,e,void 0,t),t.currentTarget=null}function ly(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Mp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Mp(i,a,c),s=l}}}if(Ka)throw t=zu,Ka=!1,zu=null,t}function _e(t,e){var n=e[Xu];n===void 0&&(n=e[Xu]=new Set);var r=t+"__bubble";n.has(r)||(cy(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),cy(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[oa]){t[oa]=!0,g_.forEach(function(n){n!=="selectionchange"&&(aC.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,zc("selectionchange",!1,e))}}function cy(t,e,n,r){switch(G_(e)){case 1:var i=SS;break;case 4:i=CS;break;default:i=uh}n=i.bind(null,e,n,t),i=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}A_(function(){var c=s,d=oh(n),u=[];e:{var h=ay.get(t);if(h!==void 0){var g=hh,y=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":g=FS;break;case"focusin":y="focus",g=Oc;break;case"focusout":y="blur",g=Oc;break;case"beforeblur":case"afterblur":g=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=US;break;case ry:case iy:case sy:g=NS;break;case oy:g=BS;break;case"scroll":g=ES;break;case"wheel":g=HS;break;case"copy":case"cut":case"paste":g=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ip}var S=(e&4)!==0,b=!S&&t==="scroll",m=S?h!==null?h+"Capture":null:h;S=[];for(var f=c,_;f!==null;){_=f;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,m!==null&&(v=no(f,m),v!=null&&S.push(co(f,v,_)))),b)break;f=f.return}0<S.length&&(h=new g(h,y,null,n,d),u.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(Ar(y)||y[Rn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Ar(y):null,y!==null&&(b=ti(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(S=xp,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(S=Ip,v="onPointerLeave",m="onPointerEnter",f="pointer"),b=g==null?h:gi(g),_=y==null?h:gi(y),h=new S(v,f+"leave",g,n,d),h.target=b,h.relatedTarget=_,v=null,Ar(d)===c&&(S=new S(m,f+"enter",y,n,d),S.target=_,S.relatedTarget=b,v=S),b=v,g&&y)t:{for(S=g,m=y,f=0,_=S;_;_=si(_))f++;for(_=0,v=m;v;v=si(v))_++;for(;0<f-_;)S=si(S),f--;for(;0<_-f;)m=si(m),_--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break t;S=si(S),m=si(m)}S=null}else S=null;g!==null&&Fp(u,h,g,S,!1),y!==null&&b!==null&&Fp(u,b,y,S,!0)}}e:{if(h=c?gi(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=XS;else if(bp(h))if(J_)E=tC;else{E=ZS;var x=JS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=eC);if(E&&(E=E(t,c))){X_(u,E,n,d);break e}x&&x(t,h,c),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Du(h,"number",h.value)}switch(x=c?gi(c):window,t){case"focusin":(bp(x)||x.contentEditable==="true")&&(pi=x,Vu=c,Us=null);break;case"focusout":Us=Vu=pi=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Lp(u,n,d);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":Lp(u,n,d)}var C;if(ph)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fi?Q_(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Y_&&n.locale!=="ko"&&(fi||O!=="onCompositionStart"?O==="onCompositionEnd"&&fi&&(C=K_()):(er=d,dh="value"in er?er.value:er.textContent,fi=!0)),x=Ja(c,O),0<x.length&&(O=new kp(O,t,null,n,d),u.push({event:O,listeners:x}),C?O.data=C:(C=q_(n),C!==null&&(O.data=C)))),(C=GS?KS(t,n):YS(t,n))&&(c=Ja(c,"onBeforeInput"),0<c.length&&(d=new kp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=C))}ly(u,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(co(t,s,i)),s=no(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=no(n,s),l!=null&&o.unshift(co(n,l,a))):i||(l=no(n,s),l!=null&&o.push(co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(lC,`
`).replace(cC,"")}function aa(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(k(425))}function Za(){}var Ku=null,Yu=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,dC=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(hC)}:qu;function hC(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),an="__reactFiber$"+os,uo="__reactProps$"+os,Rn="__reactContainer$"+os,Xu="__reactEvents$"+os,fC="__reactListeners$"+os,pC="__reactHandles$"+os;function Ar(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Up(t);t!==null;){if(n=t[an])return n;t=Up(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[an]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Kl(t){return t[uo]||null}var Ju=[],_i=-1;function Cr(t){return{current:t}}function ve(t){0>_i||(t.current=Ju[_i],Ju[_i]=null,_i--)}function ge(t,e){_i++,Ju[_i]=t.current,t.current=e}var _r={},it=Cr(_r),wt=Cr(!1),Wr=_r;function $i(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function el(){ve(wt),ve(it)}function zp(t,e,n){if(it.current!==_r)throw Error(k(168));ge(it,e),ge(wt,n)}function uy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Jw(t)||"Unknown",i));return xe({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Wr=it.current,ge(it,t),ge(wt,wt.current),!0}function Bp(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=uy(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ve(wt),ve(it),ge(it,t)):ve(wt),ge(wt,n)}var wn=null,Yl=!1,Hc=!1;function dy(t){wn===null?wn=[t]:wn.push(t)}function mC(t){Yl=!0,dy(t)}function Er(){if(!Hc&&wn!==null){Hc=!0;var t=0,e=ce;try{var n=wn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Yl=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),M_(ah,Er),i}finally{ce=e,Hc=!1}}return null}var yi=[],vi=0,nl=null,rl=0,Dt=[],Lt=0,Hr=null,En=1,xn="";function Tr(t,e){yi[vi++]=rl,yi[vi++]=nl,nl=t,rl=e}function hy(t,e,n){Dt[Lt++]=En,Dt[Lt++]=xn,Dt[Lt++]=Hr,Hr=t;var r=En;t=xn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Xt(e)+i|n<<i|r,xn=s+t}else En=1<<s|n<<i|r,xn=t}function gh(t){t.return!==null&&(Tr(t,1),hy(t,1,0))}function _h(t){for(;t===nl;)nl=yi[--vi],yi[vi]=null,rl=yi[--vi],yi[vi]=null;for(;t===Hr;)Hr=Dt[--Lt],Dt[Lt]=null,xn=Dt[--Lt],Dt[Lt]=null,En=Dt[--Lt],Dt[Lt]=null}var bt=null,Nt=null,we=!1,Gt=null;function fy(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Nt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:En,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Nt=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(we){var e=Nt;if(e){var n=e;if(!Wp(t,e)){if(Zu(t))throw Error(k(418));e=or(n.nextSibling);var r=bt;e&&Wp(t,e)?fy(r,n):(t.flags=t.flags&-4097|2,we=!1,bt=t)}}else{if(Zu(t))throw Error(k(418));t.flags=t.flags&-4097|2,we=!1,bt=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function la(t){if(t!==bt)return!1;if(!we)return Hp(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=Nt)){if(Zu(t))throw py(),Error(k(418));for(;e;)fy(t,e),e=or(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=bt?or(t.stateNode.nextSibling):null;return!0}function py(){for(var t=Nt;t;)t=or(t.nextSibling)}function Ui(){Nt=bt=null,we=!1}function yh(t){Gt===null?Gt=[t]:Gt.push(t)}var gC=Fn.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function my(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=ur(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,v){return f===null||f.tag!==6?(f=Xc(_,m.mode,v),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,v){var E=_.type;return E===hi?d(m,f,_.props.children,v,_.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kn&&Vp(E)===f.type)?(v=i(f,_.props),v.ref=Es(m,f,_),v.return=m,v):(v=Da(_.type,_.key,_.props,null,m.mode,v),v.ref=Es(m,f,_),v.return=m,v)}function c(m,f,_,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Jc(_,m.mode,v),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function d(m,f,_,v,E){return f===null||f.tag!==7?(f=$r(_,m.mode,v,E),f.return=m,f):(f=i(f,_),f.return=m,f)}function u(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xc(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jo:return _=Da(f.type,f.key,f.props,null,m.mode,_),_.ref=Es(m,null,f),_.return=m,_;case di:return f=Jc(f,m.mode,_),f.return=m,f;case Kn:var v=f._init;return u(m,v(f._payload),_)}if(As(f)||ys(f))return f=$r(f,m.mode,_,null),f.return=m,f;ca(m,f)}return null}function h(m,f,_,v){var E=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(m,f,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return _.key===E?l(m,f,_,v):null;case di:return _.key===E?c(m,f,_,v):null;case Kn:return E=_._init,h(m,f,E(_._payload),v)}if(As(_)||ys(_))return E!==null?null:d(m,f,_,v,null);ca(m,_)}return null}function g(m,f,_,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(_)||null,a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return m=m.get(v.key===null?_:v.key)||null,l(f,m,v,E);case di:return m=m.get(v.key===null?_:v.key)||null,c(f,m,v,E);case Kn:var x=v._init;return g(m,f,_,x(v._payload),E)}if(As(v)||ys(v))return m=m.get(_)||null,d(f,m,v,E,null);ca(f,v)}return null}function y(m,f,_,v){for(var E=null,x=null,C=f,O=f=0,G=null;C!==null&&O<_.length;O++){C.index>O?(G=C,C=null):G=C.sibling;var H=h(m,C,_[O],v);if(H===null){C===null&&(C=G);break}t&&C&&H.alternate===null&&e(m,C),f=s(H,f,O),x===null?E=H:x.sibling=H,x=H,C=G}if(O===_.length)return n(m,C),we&&Tr(m,O),E;if(C===null){for(;O<_.length;O++)C=u(m,_[O],v),C!==null&&(f=s(C,f,O),x===null?E=C:x.sibling=C,x=C);return we&&Tr(m,O),E}for(C=r(m,C);O<_.length;O++)G=g(C,m,O,_[O],v),G!==null&&(t&&G.alternate!==null&&C.delete(G.key===null?O:G.key),f=s(G,f,O),x===null?E=G:x.sibling=G,x=G);return t&&C.forEach(function(ke){return e(m,ke)}),we&&Tr(m,O),E}function S(m,f,_,v){var E=ys(_);if(typeof E!="function")throw Error(k(150));if(_=E.call(_),_==null)throw Error(k(151));for(var x=E=null,C=f,O=f=0,G=null,H=_.next();C!==null&&!H.done;O++,H=_.next()){C.index>O?(G=C,C=null):G=C.sibling;var ke=h(m,C,H.value,v);if(ke===null){C===null&&(C=G);break}t&&C&&ke.alternate===null&&e(m,C),f=s(ke,f,O),x===null?E=ke:x.sibling=ke,x=ke,C=G}if(H.done)return n(m,C),we&&Tr(m,O),E;if(C===null){for(;!H.done;O++,H=_.next())H=u(m,H.value,v),H!==null&&(f=s(H,f,O),x===null?E=H:x.sibling=H,x=H);return we&&Tr(m,O),E}for(C=r(m,C);!H.done;O++,H=_.next())H=g(C,m,O,H.value,v),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?O:H.key),f=s(H,f,O),x===null?E=H:x.sibling=H,x=H);return t&&C.forEach(function(Se){return e(m,Se)}),we&&Tr(m,O),E}function b(m,f,_,v){if(typeof _=="object"&&_!==null&&_.type===hi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:e:{for(var E=_.key,x=f;x!==null;){if(x.key===E){if(E=_.type,E===hi){if(x.tag===7){n(m,x.sibling),f=i(x,_.props.children),f.return=m,m=f;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kn&&Vp(E)===x.type){n(m,x.sibling),f=i(x,_.props),f.ref=Es(m,x,_),f.return=m,m=f;break e}n(m,x);break}else e(m,x);x=x.sibling}_.type===hi?(f=$r(_.props.children,m.mode,v,_.key),f.return=m,m=f):(v=Da(_.type,_.key,_.props,null,m.mode,v),v.ref=Es(m,f,_),v.return=m,m=v)}return o(m);case di:e:{for(x=_.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Jc(_,m.mode,v),f.return=m,m=f}return o(m);case Kn:return x=_._init,b(m,f,x(_._payload),v)}if(As(_))return y(m,f,_,v);if(ys(_))return S(m,f,_,v);ca(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=Xc(_,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return b}var zi=my(!0),gy=my(!1),il=Cr(null),sl=null,wi=null,vh=null;function wh(){vh=wi=sl=null}function Sh(t){var e=il.current;ve(il),t._currentValue=e}function td(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){sl=t,vh=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(sl===null)throw Error(k(308));wi=t,sl.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Dr=null;function Ch(t){Dr===null?Dr=[t]:Dr.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ch(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,Ch(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}function Gp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(h=e,g=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){u=y.call(g,u,h);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(g,u,h):y,h==null)break e;u=xe({},u,h);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=u}}function Kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Lo={},dn=Cr(Lo),ho=Cr(Lo),fo=Cr(Lo);function Lr(t){if(t===Lo)throw Error(k(174));return t}function xh(t,e){switch(ge(fo,e),ge(ho,t),ge(dn,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}ve(dn),ge(dn,e)}function Bi(){ve(dn),ve(ho),ve(fo)}function vy(t){Lr(fo.current);var e=Lr(dn.current),n=Ou(e,t.type);e!==n&&(ge(ho,t),ge(dn,n))}function kh(t){ho.current===t&&(ve(dn),ve(ho))}var Ce=Cr(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Ih(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var Na=Fn.ReactCurrentDispatcher,Gc=Fn.ReactCurrentBatchConfig,Vr=0,Ee=null,Fe=null,Be=null,ll=!1,zs=!1,po=0,_C=0;function tt(){throw Error(k(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,r,i,s){if(Vr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?SC:CC,t=n(r,i),zs){s=0;do{if(zs=!1,po=0,25<=s)throw Error(k(301));s+=1,Be=Fe=null,e.updateQueue=null,Na.current=EC,t=n(r,i)}while(zs)}if(Na.current=cl,e=Fe!==null&&Fe.next!==null,Vr=0,Be=Fe=Ee=null,ll=!1,e)throw Error(k(300));return t}function bh(){var t=po!==0;return po=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ee.memoizedState=Be=t:Be=Be.next=t,Be}function $t(){if(Fe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=Be===null?Ee.memoizedState:Be.next;if(e!==null)Be=e,Fe=t;else{if(t===null)throw Error(k(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Be===null?Ee.memoizedState=Be=t:Be=Be.next=t}return Be}function mo(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=$t(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Vr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,Ee.lanes|=d,Gr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=$t(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wy(){}function Sy(t,e){var n=Ee,r=$t(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Ph(xy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,go(9,Ey.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(k(349));Vr&30||Cy(n,e,i)}return i}function Cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ey(t,e,n,r){e.value=n,e.getSnapshot=r,ky(e)&&Iy(t)}function xy(t,e,n){return n(function(){ky(e)&&Iy(t)})}function ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Iy(t){var e=An(t,1);e!==null&&Jt(e,t,1,-1)}function Yp(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=wC.bind(null,Ee,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ty(){return $t().memoizedState}function ba(t,e,n,r){var i=sn();Ee.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Th(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=go(1|e,n,s,r)}function Qp(t,e){return ba(8390656,8,t,e)}function Ph(t,e){return Ql(2048,8,t,e)}function Ny(t,e){return Ql(4,2,t,e)}function by(t,e){return Ql(4,4,t,e)}function Py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ry(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,Py.bind(null,e,t),n)}function Rh(){}function Ay(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dy(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ly(t,e,n){return Vr&21?(nn(n,e)||(n=$_(),Ee.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function yC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Gc.transition;Gc.transition={};try{t(!1),e()}finally{ce=n,Gc.transition=r}}function Oy(){return $t().memoizedState}function vC(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(t))Fy(e,n);else if(n=_y(t,e,n,r),n!==null){var i=ct();Jt(n,t,r,i),jy(n,e,r)}}function wC(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(t))Fy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ch(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=ct(),Jt(n,t,r,i),jy(n,e,r))}}function My(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Fy(t,e){zs=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}var cl={readContext:jt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},SC={readContext:jt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ba(4194308,4,Py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return ba(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vC.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:Rh,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=yC.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=sn();if(we){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ve===null)throw Error(k(349));Vr&30||Cy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qp(xy.bind(null,r,s,t),[t]),r.flags|=2048,go(9,Ey.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Ve.identifierPrefix;if(we){var n=xn,r=En;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_C++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CC={readContext:jt,useCallback:Ay,useContext:jt,useEffect:Ph,useImperativeHandle:Ry,useInsertionEffect:Ny,useLayoutEffect:by,useMemo:Dy,useReducer:Kc,useRef:Ty,useState:function(){return Kc(mo)},useDebugValue:Rh,useDeferredValue:function(t){var e=$t();return Ly(e,Fe.memoizedState,t)},useTransition:function(){var t=Kc(mo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:wy,useSyncExternalStore:Sy,useId:Oy,unstable_isNewReconciler:!1},EC={readContext:jt,useCallback:Ay,useContext:jt,useEffect:Ph,useImperativeHandle:Ry,useInsertionEffect:Ny,useLayoutEffect:by,useMemo:Dy,useReducer:Yc,useRef:Ty,useState:function(){return Yc(mo)},useDebugValue:Rh,useDeferredValue:function(t){var e=$t();return Fe===null?e.memoizedState=t:Ly(e,Fe.memoizedState,t)},useTransition:function(){var t=Yc(mo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:wy,useSyncExternalStore:Sy,useId:Oy,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=cr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Jt(e,t,i,r),Ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=cr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Jt(e,t,i,r),Ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=cr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Jt(e,t,r,n),Ta(e,t,r))}};function qp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function $y(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=St(e)?Wr:it.current,r=e.contextTypes,s=(r=r!=null)?$i(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=St(e)?Wr:it.current,i.context=$i(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=Xw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xC=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,pd=r),id(t,e)},n}function zy(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jC.bind(null,t,e,n),e.then(t,t))}function Zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function em(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var kC=Fn.ReactCurrentOwner,_t=!1;function at(t,e,n,r){e.child=t===null?gy(e,null,n,r):zi(e,t.child,n,r)}function tm(t,e,n,r,i){n=n.render;var s=e.ref;return Pi(e,i),r=Nh(t,e,n,r,s,i),n=bh(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(we&&n&&gh(e),e.flags|=1,at(t,e,r,i),e.child)}function nm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$h(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,By(t,e,s,r,i)):(t=Da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function By(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return sd(t,e,n,r,i)}function Wy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ci,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ci,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ci,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ci,Tt),Tt|=r;return at(t,e,i,n),e.child}function Hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,r,i){var s=St(n)?Wr:it.current;return s=$i(e,s),Pi(e,i),n=Nh(t,e,n,r,s,i),r=bh(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(we&&r&&gh(e),e.flags|=1,at(t,e,n,i),e.child)}function rm(t,e,n,r,i){if(St(n)){var s=!0;tl(e)}else s=!1;if(Pi(e,i),e.stateNode===null)Pa(t,e),$y(e,n,r),rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=St(n)?Wr:it.current,c=$i(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Xp(e,o,r,c),Yn=!1;var h=e.memoizedState;o.state=h,ol(e,r,o,i),l=e.memoizedState,a!==r||h!==l||wt.current||Yn?(typeof d=="function"&&(nd(e,n,d,r),l=e.memoizedState),(a=Yn||qp(e,n,a,r,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ht(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=St(n)?Wr:it.current,l=$i(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&Xp(e,o,r,l),Yn=!1,h=e.memoizedState,o.state=h,ol(e,r,o,i);var y=e.memoizedState;a!==u||h!==y||wt.current||Yn?(typeof g=="function"&&(nd(e,n,g,r),y=e.memoizedState),(c=Yn||qp(e,n,c,r,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return od(t,e,n,r,s,i)}function od(t,e,n,r,i,s){Hy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bp(e,n,!1),Dn(t,e,s);r=e.stateNode,kC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,a,s)):at(t,e,a,s),e.memoizedState=r.state,i&&Bp(e,n,!0),e.child}function Vy(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),xh(t,e.containerInfo)}function im(t,e,n,r,i){return Ui(),yh(i),e.flags|=256,at(t,e,n,r),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ce,i&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zl(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=ad,t):Ah(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ad,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ah(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ua(t,e,n,r){return r!==null&&yh(r),zi(e,t.child,null,n),t=Ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(k(422))),ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zl({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if(!(e.mode&1))return ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Qc(s,r,void 0),ua(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Jt(r,t,i,-1))}return jh(),r=Qc(Error(k(421))),ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$C.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=or(i.nextSibling),bt=e,we=!0,Gt=null,t!==null&&(Dt[Lt++]=En,Dt[Lt++]=xn,Dt[Lt++]=Hr,En=t.id,xn=t.overflow,Hr=e),e=Ah(e,r.children),e.flags|=4096,e)}function sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),td(t.return,e,n)}function qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ky(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sm(t,n,e);else if(t.tag===19)sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TC(t,e,n){switch(e.tag){case 3:Vy(e),Ui();break;case 5:vy(e);break;case 1:St(e.type)&&tl(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(ge(Ce,Ce.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ky(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Wy(t,e,n)}return Dn(t,e,n)}var Yy,cd,Qy,qy;Yy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Qy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(dn.current);var s=null;switch(n){case"input":i=Ru(t,i),r=Ru(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Lu(t,i),r=Lu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}Mu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(eo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};qy=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NC(t,e,n){var r=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return St(e.type)&&el(),nt(e),null;case 3:return r=e.stateNode,Bi(),ve(wt),ve(it),Ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(_d(Gt),Gt=null))),cd(t,e),nt(e),null;case 5:kh(e);var i=Lr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return nt(e),null}if(t=Lr(dn.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[uo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ls.length;i++)_e(Ls[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":pp(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":gp(r,s),_e("invalid",r)}Mu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Zo(r),mp(r,s,!0);break;case"textarea":Zo(r),_p(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[uo]=r,Yy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fu(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ls.length;i++)_e(Ls[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":pp(t,r),i=Ru(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":gp(t,r),i=Lu(t,r),_e("invalid",t);break;default:i=r}Mu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?T_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&nh(t,s,l,o))}switch(n){case"input":Zo(t),mp(t,r,!1);break;case"textarea":Zo(t),_p(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ii(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)qy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Lr(fo.current),Lr(dn.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return nt(e),null;case 13:if(ve(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Nt!==null&&e.mode&1&&!(e.flags&128))py(),Ui(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[an]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Gt!==null&&(_d(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ue===0&&(Ue=3):jh())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Bi(),cd(t,e),t===null&&lo(e.stateNode.containerInfo),nt(e),null;case 10:return Sh(e.type._context),nt(e),null;case 17:return St(e.type)&&el(),nt(e),null;case 19:if(ve(Ce),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Hi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return nt(e),null}else 2*Pe()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Fh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function bC(t,e){switch(_h(e),e.tag){case 1:return St(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bi(),ve(wt),ve(it),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(ve(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ce),null;case 4:return Bi(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var da=!1,rt=!1,PC=typeof WeakSet=="function"?WeakSet:Set,L=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function ud(t,e,n){try{n()}catch(r){Te(t,e,r)}}var om=!1;function RC(t,e){if(Ku=qa,t=ty(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yu={focusedElem:t,selectionRange:n},qa=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,b=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ht(e.type,S),b);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=om,om=!1,y}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ud(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[uo],delete e[Xu],delete e[fC],delete e[pC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jy(t){return t.tag===5||t.tag===3||t.tag===4}function am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var Ke=null,Vt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)Zy(t,e,n),n=n.sibling}function Zy(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:rt||Si(n,e);case 6:var r=Ke,i=Vt;Ke=null,Wn(t,e,n),Ke=r,Vt=i,Ke!==null&&(Vt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Vt?(t=Ke,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),so(t)):Wc(Ke,n.stateNode));break;case 4:r=Ke,i=Vt,Ke=n.stateNode.containerInfo,Vt=!0,Wn(t,e,n),Ke=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ud(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!rt&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Wn(t,e,n),rt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PC),e.forEach(function(r){var i=UC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Vt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ke===null)throw Error(k(160));Zy(s,o,i),Ke=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,t),e=e.sibling}function ev(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),rn(t),r&4){try{Bs(3,t,t.return),Xl(3,t)}catch(S){Te(t,t.return,S)}try{Bs(5,t,t.return)}catch(S){Te(t,t.return,S)}}break;case 1:Wt(e,t),rn(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Wt(e,t),rn(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(S){Te(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&C_(i,s),Fu(a,o);var c=Fu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?T_(i,u):d==="dangerouslySetInnerHTML"?k_(i,u):d==="children"?to(i,u):nh(i,d,u,c)}switch(a){case"input":Au(i,s);break;case"textarea":E_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ii(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ii(i,!!s.multiple,s.defaultValue,!0):Ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[uo]=s}catch(S){Te(t,t.return,S)}}break;case 6:if(Wt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Te(t,t.return,S)}}break;case 3:if(Wt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(S){Te(t,t.return,S)}break;case 4:Wt(e,t),rn(t);break;case 13:Wt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oh=Pe())),r&4&&lm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||d,Wt(e,t),rt=c):Wt(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(L=t,d=t.child;d!==null;){for(u=L=d;L!==null;){switch(h=L,g=h.child,h.tag){case 0:case 11:case 14:case 15:Bs(4,h,h.return);break;case 1:Si(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){Te(r,n,S)}}break;case 5:Si(h,h.return);break;case 22:if(h.memoizedState!==null){um(u);continue}}g!==null?(g.return=h,L=g):um(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I_("display",o))}catch(S){Te(t,t.return,S)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(S){Te(t,t.return,S)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Wt(e,t),rn(t),r&4&&lm(t);break;case 21:break;default:Wt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=am(t);fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=am(t);hd(t,a,o);break;default:throw Error(k(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AC(t,e,n){L=t,tv(t)}function tv(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=da;var c=rt;if(da=o,(rt=l)&&!c)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?dm(i):l!==null?(l.return=o,L=l):dm(i);for(;s!==null;)L=s,tv(s),s=s.sibling;L=i,da=a,rt=c}cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):cm(t)}}function cm(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&so(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}rt||e.flags&512&&dd(e)}catch(h){Te(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function um(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function dm(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{dd(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var DC=Math.ceil,ul=Fn.ReactCurrentDispatcher,Dh=Fn.ReactCurrentOwner,Ft=Fn.ReactCurrentBatchConfig,ie=0,Ve=null,Oe=null,Qe=0,Tt=0,Ci=Cr(0),Ue=0,_o=null,Gr=0,Jl=0,Lh=0,Ws=null,gt=null,Oh=0,Hi=1/0,yn=null,dl=!1,pd=null,lr=null,ha=!1,tr=null,hl=0,Hs=0,md=null,Ra=-1,Aa=0;function ct(){return ie&6?Pe():Ra!==-1?Ra:Ra=Pe()}function cr(t){return t.mode&1?ie&2&&Qe!==0?Qe&-Qe:gC.transition!==null?(Aa===0&&(Aa=$_()),Aa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:G_(t.type)),t):1}function Jt(t,e,n,r){if(50<Hs)throw Hs=0,md=null,Error(k(185));Ro(t,n,r),(!(ie&2)||t!==Ve)&&(t===Ve&&(!(ie&2)&&(Jl|=n),Ue===4&&qn(t,Qe)),Ct(t,r),n===1&&ie===0&&!(e.mode&1)&&(Hi=Pe()+500,Yl&&Er()))}function Ct(t,e){var n=t.callbackNode;gS(t,e);var r=Qa(t,t===Ve?Qe:0);if(r===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?mC(hm.bind(null,t)):dy(hm.bind(null,t)),dC(function(){!(ie&6)&&Er()}),n=null;else{switch(U_(r)){case 1:n=ah;break;case 4:n=F_;break;case 16:n=Ya;break;case 536870912:n=j_;break;default:n=Ya}n=cv(n,nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nv(t,e){if(Ra=-1,Aa=0,ie&6)throw Error(k(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=Qa(t,t===Ve?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=ie;ie|=2;var s=iv();(Ve!==t||Qe!==e)&&(yn=null,Hi=Pe()+500,jr(t,e));do try{MC();break}catch(a){rv(t,a)}while(!0);wh(),ul.current=s,ie=i,Oe!==null?e=0:(Ve=null,Qe=0,e=Ue)}if(e!==0){if(e===2&&(i=Bu(t),i!==0&&(r=i,e=gd(t,i))),e===1)throw n=_o,jr(t,0),qn(t,r),Ct(t,Pe()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!LC(i)&&(e=fl(t,r),e===2&&(s=Bu(t),s!==0&&(r=s,e=gd(t,s))),e===1))throw n=_o,jr(t,0),qn(t,r),Ct(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Nr(t,gt,yn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Oh+500-Pe(),10<e)){if(Qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qu(Nr.bind(null,t,gt,yn),e);break}Nr(t,gt,yn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DC(r/1960))-r,10<r){t.timeoutHandle=qu(Nr.bind(null,t,gt,yn),r);break}Nr(t,gt,yn);break;case 5:Nr(t,gt,yn);break;default:throw Error(k(329))}}}return Ct(t,Pe()),t.callbackNode===n?nv.bind(null,t):null}function gd(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=gt,gt=n,e!==null&&_d(e)),t}function _d(t){gt===null?gt=t:gt.push.apply(gt,t)}function LC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Lh,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function hm(t){if(ie&6)throw Error(k(327));Ri();var e=Qa(t,0);if(!(e&1))return Ct(t,Pe()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=Bu(t);r!==0&&(e=r,n=gd(t,r))}if(n===1)throw n=_o,jr(t,0),qn(t,e),Ct(t,Pe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,gt,yn),Ct(t,Pe()),null}function Mh(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Hi=Pe()+500,Yl&&Er())}}function Kr(t){tr!==null&&tr.tag===0&&!(ie&6)&&Ri();var e=ie;ie|=1;var n=Ft.transition,r=ce;try{if(Ft.transition=null,ce=1,t)return t()}finally{ce=r,Ft.transition=n,ie=e,!(ie&6)&&Er()}}function Fh(){Tt=Ci.current,ve(Ci)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uC(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(_h(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Bi(),ve(wt),ve(it),Ih();break;case 5:kh(r);break;case 4:Bi();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:Sh(r.type._context);break;case 22:case 23:Fh()}n=n.return}if(Ve=t,Oe=t=ur(t.current,null),Qe=Tt=e,Ue=0,_o=null,Lh=Jl=Gr=0,gt=Ws=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function rv(t,e){do{var n=Oe;try{if(wh(),Na.current=cl,ll){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(Vr=0,Be=Fe=Ee=null,zs=!1,po=0,Dh.current=null,n===null||n.return===null){Ue=1,_o=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Zp(o);if(g!==null){g.flags&=-257,em(g,o,a,s,e),g.mode&1&&Jp(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if(!(e&1)){Jp(s,c,e),jh();break e}l=Error(k(426))}}else if(we&&a.mode&1){var b=Zp(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),em(b,o,a,s,e),yh(Wi(l,a));break e}}s=l=Wi(l,a),Ue!==4&&(Ue=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Uy(s,l,e);Gp(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(lr===null||!lr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=zy(s,a,e);Gp(s,v);break e}}s=s.return}while(s!==null)}ov(n)}catch(E){e=E,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function iv(){var t=ul.current;return ul.current=cl,t===null?cl:t}function jh(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||!(Gr&268435455)&&!(Jl&268435455)||qn(Ve,Qe)}function fl(t,e){var n=ie;ie|=2;var r=iv();(Ve!==t||Qe!==e)&&(yn=null,jr(t,e));do try{OC();break}catch(i){rv(t,i)}while(!0);if(wh(),ie=n,ul.current=r,Oe!==null)throw Error(k(261));return Ve=null,Qe=0,Ue}function OC(){for(;Oe!==null;)sv(Oe)}function MC(){for(;Oe!==null&&!aS();)sv(Oe)}function sv(t){var e=lv(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?ov(t):Oe=e,Dh.current=null}function ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Oe=null;return}}else if(n=NC(n,e,Tt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Ue===0&&(Ue=5)}function Nr(t,e,n){var r=ce,i=Ft.transition;try{Ft.transition=null,ce=1,FC(t,e,n,r)}finally{Ft.transition=i,ce=r}return null}function FC(t,e,n,r){do Ri();while(tr!==null);if(ie&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_S(t,s),t===Ve&&(Oe=Ve=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,cv(Ya,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ce;ce=1;var a=ie;ie|=4,Dh.current=null,RC(t,n),ev(n,t),rC(Yu),qa=!!Ku,Yu=Ku=null,t.current=n,AC(n),lS(),ie=a,ce=o,Ft.transition=s}else t.current=n;if(ha&&(ha=!1,tr=t,hl=i),s=t.pendingLanes,s===0&&(lr=null),dS(n.stateNode),Ct(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,t=pd,pd=null,t;return hl&1&&t.tag!==0&&Ri(),s=t.pendingLanes,s&1?t===md?Hs++:(Hs=0,md=t):Hs=0,Er(),null}function Ri(){if(tr!==null){var t=U_(hl),e=Ft.transition,n=ce;try{if(Ft.transition=null,ce=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,hl=0,ie&6)throw Error(k(331));var i=ie;for(ie|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Bs(8,d,s)}var u=d.child;if(u!==null)u.return=d,L=u;else for(;L!==null;){d=L;var h=d.sibling,g=d.return;if(Xy(d),d===c){L=null;break}if(h!==null){h.return=g,L=h;break}L=g}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,L=_;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(E){Te(a,a.return,E)}if(a===o){L=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,L=v;break e}L=a.return}}if(ie=i,Er(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{ce=n,Ft.transition=e}}return!1}function fm(t,e,n){e=Wi(n,e),e=Uy(t,e,1),t=ar(t,e,1),e=ct(),t!==null&&(Ro(t,1,e),Ct(t,e))}function Te(t,e,n){if(t.tag===3)fm(t,t,n);else for(;e!==null;){if(e.tag===3){fm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Wi(n,t),t=zy(e,t,1),e=ar(e,t,1),t=ct(),e!==null&&(Ro(e,1,t),Ct(e,t));break}}e=e.return}}function jC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Qe&n)===n&&(Ue===4||Ue===3&&(Qe&130023424)===Qe&&500>Pe()-Oh?jr(t,0):Lh|=n),Ct(t,e)}function av(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=ct();t=An(t,e),t!==null&&(Ro(t,e,n),Ct(t,n))}function $C(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function UC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),av(t,n)}var lv;lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,TC(t,e,n);_t=!!(t.flags&131072)}else _t=!1,we&&e.flags&1048576&&hy(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=$i(e,it.current);Pi(e,n),i=Nh(null,e,r,t,i,n);var s=bh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,rd(e,r,t,n),e=od(null,e,r,!0,s,n)):(e.tag=0,we&&s&&gh(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BC(r),t=Ht(r,t),i){case 0:e=sd(null,e,r,t,n);break e;case 1:e=rm(null,e,r,t,n);break e;case 11:e=tm(null,e,r,t,n);break e;case 14:e=nm(null,e,r,Ht(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),rm(t,e,r,i,n);case 3:e:{if(Vy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yy(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(k(423)),e),e=im(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(k(424)),e),e=im(t,e,r,n,i);break e}else for(Nt=or(e.stateNode.containerInfo.firstChild),bt=e,we=!0,Gt=null,n=gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=Dn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return vy(e),t===null&&ed(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qu(r,i)?o=null:s!==null&&Qu(r,s)&&(e.flags|=32),Hy(t,e),at(t,e,o,n),e.child;case 6:return t===null&&ed(e),null;case 13:return Gy(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),tm(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(il,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!wt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),td(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pi(e,n),i=jt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),nm(t,e,r,i,n);case 15:return By(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Pa(t,e),e.tag=1,St(r)?(t=!0,tl(e)):t=!1,Pi(e,n),$y(e,r,i),rd(e,r,i,n),od(null,e,r,!0,t,n);case 19:return Ky(t,e,n);case 22:return Wy(t,e,n)}throw Error(k(156,e.tag))};function cv(t,e){return M_(t,e)}function zC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new zC(t,e,n,r)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BC(t){if(typeof t=="function")return $h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===sh)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$h(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return $r(n.children,i,s,e);case rh:o=8,i|=8;break;case Tu:return t=Ot(12,n,e,i|2),t.elementType=Tu,t.lanes=s,t;case Nu:return t=Ot(13,n,e,i),t.elementType=Nu,t.lanes=s,t;case bu:return t=Ot(19,n,e,i),t.elementType=bu,t.lanes=s,t;case v_:return Zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case __:o=10;break e;case y_:o=9;break e;case ih:o=11;break e;case sh:o=14;break e;case Kn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uh(t,e,n,r,i,s,o,a,l){return t=new WC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function HC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return _r;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(St(n))return uy(t,n,e)}return e}function dv(t,e,n,r,i,s,o,a,l){return t=Uh(n,r,!0,t,i,s,o,a,l),t.context=uv(null),n=t.current,r=ct(),i=cr(n),s=Nn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Ro(t,i,r),Ct(t,r),t}function ec(t,e,n,r){var i=e.current,s=ct(),o=cr(i);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Jt(t,i,o,s),Ta(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){pm(t,e),(t=t.alternate)&&pm(t,e)}function VC(){return null}var hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}tc.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));ec(t,e,null,null)};tc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){ec(null,t,null,null)}),e[Rn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&V_(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mm(){}function GC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=pl(o);s.call(c)}}var o=dv(e,r,t,0,null,!1,!1,"",mm);return t._reactRootContainer=o,t[Rn]=o.current,lo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=pl(l);a.call(c)}}var l=Uh(t,0,!1,null,null,!1,!1,"",mm);return t._reactRootContainer=l,t[Rn]=l.current,lo(t.nodeType===8?t.parentNode:t),Kr(function(){ec(e,l,n,r)}),l}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=pl(o);a.call(l)}}ec(e,o,t,i)}else o=GC(n,e,t,i,r);return pl(o)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(lh(e,n|1),Ct(e,Pe()),!(ie&6)&&(Hi=Pe()+500,Er()))}break;case 13:Kr(function(){var r=An(t,1);if(r!==null){var i=ct();Jt(r,t,1,i)}}),zh(t,1)}};ch=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ct();Jt(e,t,134217728,n)}zh(t,134217728)}};B_=function(t){if(t.tag===13){var e=cr(t),n=An(t,e);if(n!==null){var r=ct();Jt(n,t,e,r)}zh(t,e)}};W_=function(){return ce};H_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};$u=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(k(90));S_(r),Au(r,i)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};P_=Mh;R_=Kr;var KC={usingClientEntryPoint:!1,Events:[Do,gi,Kl,N_,b_,Mh]},ks={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YC={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L_(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||VC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Wl=fa.inject(YC),un=fa}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(k(200));return HC(t,e,null,n)};Rt.createRoot=function(t,e){if(!Wh(t))throw Error(k(299));var n=!1,r="",i=hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uh(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,lo(t.nodeType===8?t.parentNode:t),new Bh(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=L_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Kr(t)};Rt.hydrate=function(t,e,n){if(!nc(e))throw Error(k(200));return rc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dv(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};Rt.render=function(t,e,n){if(!nc(e))throw Error(k(200));return rc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!nc(t))throw Error(k(40));return t._reactRootContainer?(Kr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Mh;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return rc(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(t){console.error(t)}}fv(),f_.exports=Rt;var pv=f_.exports;const QC=Qd(pv);var mv,gm=pv;mv=gm.createRoot,gm.hydrateRoot;const qC=()=>{};var _m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw as(e)},as=function(t){return new Error("Firebase Database ("+gv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[d],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new JC;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const y=c<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(t){const e=_v(t);return Hh.encodeByteArray(e,!0)},ml=function(t){return yv(t).replace(/\./g,"")},gl=function(t){try{return Hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return vv(void 0,t)}function vv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eE(n)||(t[n]=vv(t[n],e[n]));return t}function eE(t){return t!=="__proto__"}/**
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
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof _m>"u")return;const t=_m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gl(t[1]);return e&&JSON.parse(e)},Vh=()=>{try{return qC()||nE()||rE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wv=t=>{var e,n;return(n=(e=Vh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},sE=t=>{const e=wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sv=()=>{var t;return(t=Vh())==null?void 0:t.config},Cv=t=>{var e;return(e=Vh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ev(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function oE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}const Vs={};function aE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vs))Vs[e]?t.emulator.push(e):t.prod.push(e);return t}function lE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ym=!1;function xv(t,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Vs[t]===e||Vs[t]||ym)return;Vs[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=aE().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{ym=!0,o()},h}function d(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){const h=lE(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),S=n("learnmore"),b=document.getElementById(S)||document.createElement("a"),m=n("preprendIcon"),f=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const _=h.element;a(_),d(b,S);const v=c();l(f,m),_.append(f,y,b,v),document.body.appendChild(_)}s?(y.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function cE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dE(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iv(){return gv.NODE_ADMIN===!0}function hE(){try{return typeof indexedDB=="object"}catch{return!1}}function fE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pE,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xr(i,a,r)}}function mE(t,e){return t.replace(gE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){return JSON.parse(t)}function $e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=yo(gl(s[0])||""),n=yo(gl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_E=function(t){const e=Tv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yE=function(t){const e=Tv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vm(s)&&vm(o)){if(!Yr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wE(t,e){const n=new SE(t,e);return n.subscribe.bind(n)}class SE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}function ic(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class xE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(t){return t===br?void 0:t}function IE(t){return t.instantiationMode==="EAGER"}/**
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
 */class TE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const NE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},bE=he.INFO,PE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},RE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kh{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=RE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const AE=(t,e)=>e.some(n=>t instanceof n);let wm,Sm;function DE(){return wm||(wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return Sm||(Sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nv=new WeakMap,vd=new WeakMap,bv=new WeakMap,eu=new WeakMap,Yh=new WeakMap;function OE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nv.set(n,t)}).catch(()=>{}),Yh.set(e,t),e}function ME(t){if(vd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vd.set(t,e)}let wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FE(t){wd=t(wd)}function jE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tu(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),dr(r)}:LE().includes(t)?function(...e){return t.apply(tu(this),e),dr(Nv.get(this))}:function(...e){return dr(t.apply(tu(this),e))}}function $E(t){return typeof t=="function"?jE(t):(t instanceof IDBTransaction&&ME(t),AE(t,DE())?new Proxy(t,wd):t)}function dr(t){if(t instanceof IDBRequest)return OE(t);if(eu.has(t))return eu.get(t);const e=$E(t);return e!==t&&(eu.set(t,e),Yh.set(e,t)),e}const tu=t=>Yh.get(t);function UE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],nu=new Map;function Cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return nu.set(e,s),s}FE(t=>({...t,get:(e,n,r)=>Cm(e,n)||t.get(e,n,r),has:(e,n)=>!!Cm(e,n)||t.has(e,n)}));/**
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
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sd="@firebase/app",Em="0.14.2";/**
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
 */const Ln=new Kh("@firebase/app"),VE="@firebase/app-compat",GE="@firebase/analytics-compat",KE="@firebase/analytics",YE="@firebase/app-check-compat",QE="@firebase/app-check",qE="@firebase/auth",XE="@firebase/auth-compat",JE="@firebase/database",ZE="@firebase/data-connect",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",ix="@firebase/installations-compat",sx="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",lx="@firebase/performance-compat",cx="@firebase/remote-config",ux="@firebase/remote-config-compat",dx="@firebase/storage",hx="@firebase/storage-compat",fx="@firebase/firestore",px="@firebase/ai",mx="@firebase/firestore-compat",gx="firebase",_x="12.2.0";/**
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
 */const Cd="[DEFAULT]",yx={[Sd]:"fire-core",[VE]:"fire-core-compat",[KE]:"fire-analytics",[GE]:"fire-analytics-compat",[QE]:"fire-app-check",[YE]:"fire-app-check-compat",[qE]:"fire-auth",[XE]:"fire-auth-compat",[JE]:"fire-rtdb",[ZE]:"fire-data-connect",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[ix]:"fire-iid-compat",[sx]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[lx]:"fire-perf-compat",[cx]:"fire-rc",[ux]:"fire-rc-compat",[dx]:"fire-gcs",[hx]:"fire-gcs-compat",[fx]:"fire-fst",[mx]:"fire-fst-compat",[px]:"fire-vertex","fire-js":"fire-js",[gx]:"fire-js-all"};/**
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
 */const yl=new Map,vx=new Map,Ed=new Map;function xm(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gi(t){const e=t.name;if(Ed.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of yl.values())xm(n,t);for(const n of vx.values())xm(n,t);return!0}function Qh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Mo("app","Firebase",wx);/**
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
 */class Sx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=_x;function Pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Cd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=Sv()),!n)throw hr.create("no-options");const s=yl.get(i);if(s){if(Yr(n,s.options)&&Yr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new TE(i);for(const l of Ed.values())o.addComponent(l);const a=new Sx(n,r,o);return yl.set(i,a),a}function Rv(t=Cd){const e=yl.get(t);if(!e&&t===Cd&&Sv())return Pv();if(!e)throw hr.create("no-app",{appName:t});return e}function fr(t,e,n){let r=yx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}Gi(new Qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Cx="firebase-heartbeat-database",Ex=1,vo="firebase-heartbeat-store";let ru=null;function Av(){return ru||(ru=UE(Cx,Ex,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),ru}async function xx(t){try{const n=(await Av()).transaction(vo),r=await n.objectStore(vo).get(Dv(t));return await n.done,r}catch(e){if(e instanceof xr)Ln.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function km(t,e){try{const r=(await Av()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,Dv(t)),await r.done}catch(n){if(n instanceof xr)Ln.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function Dv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kx=1024,Ix=30;class Tx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Im();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ix){const o=Px(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Im(),{heartbeatsToSend:r,unsentEntries:i}=Nx(this._heartbeatsCache.heartbeats),s=ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function Im(){return new Date().toISOString().substring(0,10)}function Nx(t,e=kx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hE()?fE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tm(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}function Px(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Rx(t){Gi(new Qr("platform-logger",e=>new WE(e),"PRIVATE")),Gi(new Qr("heartbeat",e=>new Tx(e),"PRIVATE")),fr(Sd,Em,t),fr(Sd,Em,"esm2020"),fr("fire-js","")}Rx("");var Ax="firebase",Dx="12.2.1";/**
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
 */fr(Ax,Dx,"app");function Lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=Lv,Ov=new Mo("auth","Firebase",Lv());/**
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
 */const vl=new Kh("@firebase/auth");function Ox(t,...e){vl.logLevel<=he.WARN&&vl.warn(`Auth (${us}): ${t}`,...e)}function La(t,...e){vl.logLevel<=he.ERROR&&vl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw Xh(t,...e)}function Zt(t,...e){return Xh(t,...e)}function qh(t,e,n){const r={...Lx(),[e]:n};return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return qh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fn(t,"argument-error"),qh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ov.create(t,...e)}function z(t,e,...n){if(!t)throw Xh(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function On(t,e){t||kn(e)}/**
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
 */function xd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Fx(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fx()||uE()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||kv()}get(){return jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bx=new Fo(3e4,6e4);function Zh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ds(t,e,n,r,i={}){return Fv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cs({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return cE()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ls(t.emulatorConfig.host)&&(c.credentials="include"),Mv.fetch()(await jv(t,t.config.apiHost,n,a),c)})}async function Fv(t,e,n){t._canInitEmulator=!1;const r={...Ux,...e};try{const i=new Hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qh(t,d,c);fn(t,d)}}catch(i){if(i instanceof xr)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Wx(t,e,n,r,i={}){const s=await ds(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function jv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Jh(t.config,i):`${t.config.apiScheme}://${i}`;return zx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Hx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),Bx.get())})}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Vx(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function wl(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gx(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=ef(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(iu(i.auth_time)),issuedAtTime:Gs(iu(i.iat)),expirationTime:Gs(iu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function iu(t){return Number(t)*1e3}function ef(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const i=gl(n);return i?JSON.parse(i):(La("Failed to decode base64 JWT payload"),null)}catch(i){return La("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bm(t){const e=ef(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&Kx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sl(t){var u;const e=t.auth,n=await t.getIdToken(),r=await wo(t,wl(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?$v(i.providerUserInfo):[],o=qx(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new kd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Qx(t){const e=Et(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $v(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Xx(t,e){const n=await Fv(t,{},async()=>{const r=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await jv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ls(t.emulatorConfig.host)&&(l.credentials="include"),Mv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jx(t,e){return ds(t,"POST","/v2/accounts:revokeToken",Zh(t,e))}/**
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
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=bm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ai;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Hn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Yx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gx(this,e)}reload(){return Qx(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await wo(this,Vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:g,providerData:y,stsTokenManager:S}=n;z(u&&S,e,"internal-error");const b=Ai.fromJSON(this.name,S);z(typeof u=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),z(typeof h=="boolean",e,"internal-error"),z(typeof g=="boolean",e,"internal-error"),Hn(s,e.name),Hn(o,e.name),Hn(a,e.name),Hn(l,e.name),Hn(c,e.name),Hn(d,e.name);const m=new Qt({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:b,createdAt:c,lastLoginAt:d});return y&&Array.isArray(y)&&(m.providerData=y.map(f=>({...f}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$v(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ai;a.updateFromIdToken(r);const l=new Qt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Pm=new Map;function In(t){On(t instanceof Function,"Expected a class definition");let e=Pm.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pm.set(t,e),e)}/**
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
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uv.type="NONE";const Rm=Uv;/**
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
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wl(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(In(Rm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||In(Rm);const o=Oa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const h=await wl(e,{idToken:d}).catch(()=>{});if(!h)break;u=await Qt._fromGetAccountInfoResponse(e,h,d)}else u=Qt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Di(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Di(s,e,r))}}/**
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
 */function Am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gv(e))return"Blackberry";if(Kv(e))return"Webos";if(Bv(e))return"Safari";if((e.includes("chrome/")||Wv(e))&&!e.includes("edge/"))return"Chrome";if(Vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zv(t=dt()){return/firefox\//i.test(t)}function Bv(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wv(t=dt()){return/crios\//i.test(t)}function Hv(t=dt()){return/iemobile/i.test(t)}function Vv(t=dt()){return/android/i.test(t)}function Gv(t=dt()){return/blackberry/i.test(t)}function Kv(t=dt()){return/webos/i.test(t)}function tf(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zx(t=dt()){var e;return tf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ek(){return dE()&&document.documentMode===10}function Yv(t=dt()){return tf(t)||Vv(t)||Kv(t)||Gv(t)||/windows phone/i.test(t)||Hv(t)}/**
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
 */function Qv(t,e=[]){let n;switch(t){case"Browser":n=Am(dt());break;case"Worker":n=`${Am(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nk(t,e={}){return ds(t,"GET","/v2/passwordPolicy",Zh(t,e))}/**
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
 */const rk=6;class ik{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dm(this),this.idTokenSubscription=new Dm(this),this.beforeStateQueue=new tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wl(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Ur(this));const n=e?Et(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nk(this),n=new ik(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ox(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oc(t){return Et(t)}class Dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=wE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ok(t){nf=t}function ak(t){return nf.loadJS(t)}function lk(){return nf.gapiScript}function ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function uk(t,e){const n=Qh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yr(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hk(t,e,n){const r=oc(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qv(e),{host:o,port:a}=fk(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Yr(c,r.config.emulator)&&Yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(o)?(Ev(`${s}//${o}${l}`),xv("Auth",!0)):pk()}function qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fk(t){const e=qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lm(o)}}}function Lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
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
 */async function Li(t,e){return Wx(t,"POST","/v1/accounts:signInWithIdp",Zh(t,e))}/**
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
 */const mk="http://localhost";class qr extends Xv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
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
 */class rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends jo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class Jn extends jo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends jo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=Om(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Om(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cl extends xr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cl(e,n,r,i)}}function Jv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cl._fromErrorAndOperation(t,s,e,r):s})}async function gk(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
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
 */async function _k(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await wo(t,Jv(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ef(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
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
 */async function yk(t,e,n=!1){if(Kt(t.app))return Promise.reject(Ur(t));const r="signIn",i=await Jv(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function vk(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function wk(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function Sk(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function Ck(t){return Et(t).signOut()}const El="__sak";/**
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
 */class Zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ek=1e3,xk=10;class e0 extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ek()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const kk=e0;/**
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
 */class t0 extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t0.type="SESSION";const n0=t0;/**
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
 */function Ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Ik(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=sf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function Nk(t){hn().location.href=t}/**
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
 */function r0(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Rk(){return r0()?self:null}/**
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
 */const i0="firebaseLocalStorageDb",Ak=1,xl="firebaseLocalStorage",s0="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function Dk(){const t=indexedDB.deleteDatabase(i0);return new $o(t).toPromise()}function Id(){const t=indexedDB.open(i0,Ak);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:s0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await Dk(),e(await Id()))})})}async function Mm(t,e,n){const r=lc(t,!0).put({[s0]:e,value:n});return new $o(r).toPromise()}async function Lk(t,e){const n=lc(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function Fm(t,e){const n=lc(t,!0).delete(e);return new $o(n).toPromise()}const Ok=800,Mk=3;class o0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(Rk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await Mm(e,El,"1"),await Fm(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lc(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o0.type="LOCAL";const Fk=o0;new Fo(3e4,6e4);/**
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
 */function a0(t,e){return e?In(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class of extends Xv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jk(t){return yk(t.auth,new of(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),_k(n,new of(t),t.bypassAuthState)}async function Uk(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),gk(n,new of(t),t.bypassAuthState)}/**
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
 */class l0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jk;case"linkViaPopup":case"linkViaRedirect":return Uk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:fn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zk=new Fo(2e3,1e4);async function Bk(t,e,n){if(Kt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=oc(t);Mx(t,e,rf);const i=a0(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends l0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zk.get())};e()}}Or.currentPopupAction=null;/**
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
 */const Wk="pendingRedirect",Ma=new Map;class Hk extends l0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await Vk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vk(t,e){const n=Yk(e),r=Kk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gk(t,e){Ma.set(t._key(),e)}function Kk(t){return In(t._redirectPersistence)}function Yk(t){return Oa(Wk,t.config.apiKey,t.name)}async function Qk(t,e,n=!1){if(Kt(t.app))return Promise.reject(Ur(t));const r=oc(t),i=a0(r,e),o=await new Hk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qk=10*60*1e3;class Xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qk&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c0(t);default:return!1}}/**
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
 */async function Zk(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
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
 */const eI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tI=/^https?/;async function nI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zk(t);for(const n of e)try{if(rI(n))return}catch{}fn(t,"unauthorized-domain")}function rI(t){const e=xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tI.test(n))return!1;if(eI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iI=new Fo(3e4,6e4);function $m(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sI(t){return new Promise((e,n)=>{var i,s,o;function r(){$m(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$m(),n(Zt(t,"network-request-failed"))},timeout:iI.get()})}if((s=(i=hn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=hn().gapi)!=null&&o.load)r();else{const a=ck("iframefcb");return hn()[a]=()=>{gapi.load?r():n(Zt(t,"network-request-failed"))},ak(`${lk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function oI(t){return Fa=Fa||sI(t),Fa}/**
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
 */const aI=new Fo(5e3,15e3),lI="__/auth/iframe",cI="emulator/auth/iframe",uI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jh(e,cI):`https://${t.config.authDomain}/${lI}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=dI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${cs(r).slice(1)}`}async function fI(t){const e=await oI(t),n=hn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:hI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},aI.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mI=500,gI=600,_I="_blank",yI="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vI(t,e,n,r=mI,i=gI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...pI,width:r.toString(),height:i.toString(),top:s,left:o},c=dt().toLowerCase();n&&(a=Wv(c)?_I:n),zv(c)&&(e=e||yI,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(Zx(c)&&a!=="_self")return wI(e||"",a),new Um(null);const u=window.open(e||"",a,d);z(u,t,"popup-blocked");try{u.focus()}catch{}return new Um(u)}function wI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SI="__/auth/handler",CI="emulator/auth/handler",EI=encodeURIComponent("fac");async function zm(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof rf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof jo){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${EI}=${encodeURIComponent(l)}`:"";return`${xI(t)}?${cs(a).slice(1)}${c}`}function xI({config:t}){return t.emulator?Jh(t,CI):`https://${t.authDomain}/${SI}`}/**
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
 */const su="webStorageSupport";class kI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n0,this._completeRedirectFn=Qk,this._overrideRedirectResult=Gk}async _openPopup(e,n,r,i){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await zm(e,n,r,xd(),i);return vI(e,s,sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zm(e,n,r,xd(),i);return Nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fI(e),r=new Xk(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[su];s!==void 0&&n(!!s),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yv()||Bv()||tf()}}const II=kI;var Bm="@firebase/auth",Wm="1.11.0";/**
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
 */class TI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bI(t){Gi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qv(t)},c=new sk(r,i,s,l);return dk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gi(new Qr("auth-internal",e=>{const n=oc(e.getProvider("auth").getImmediate());return(r=>new TI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Bm,Wm,NI(t)),fr(Bm,Wm,"esm2020")}/**
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
 */const PI=5*60,RI=Cv("authIdTokenMaxAge")||PI;let Hm=null;const AI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RI)return;const i=n==null?void 0:n.token;Hm!==i&&(Hm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function u0(t=Rv()){const e=Qh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uk(t,{popupRedirectResolver:II,persistence:[Fk,kk,n0]}),r=Cv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AI(s.toString());wk(n,o,()=>o(n.currentUser)),vk(n,a=>o(a))}}const i=wv("auth");return i&&hk(n,`http://${i}`),n}function DI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ok({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bI("Browser");var Vm={};const Gm="@firebase/database",Km="1.1.0";/**
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
 */let d0="";function LI(t){d0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OI(e)}}catch{}return new MI},Mr=h0("localStorage"),FI=h0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Kh("@firebase/database"),jI=function(){let t=1;return function(){return t++}}(),f0=function(t){const e=EE(t),n=new vE;n.update(e);const r=n.digest();return Hh.encodeByteArray(r)},Uo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Uo.apply(null,r):typeof r=="object"?e+=$e(r):e+=r,e+=" "}return e};let Ks=null,Ym=!0;const $I=function(t,e){N(!e,"Can't turn on custom loggers persistently."),Oi.logLevel=he.VERBOSE,Ks=Oi.log.bind(Oi)},Ye=function(...t){if(Ym===!0&&(Ym=!1,Ks===null&&FI.get("logging_enabled")===!0&&$I()),Ks){const e=Uo.apply(null,t);Ks(e)}},zo=function(t){return function(...e){Ye(t,...e)}},Td=function(...t){const e="FIREBASE INTERNAL ERROR: "+Uo(...t);Oi.error(e)},Mn=function(...t){const e=`FIREBASE FATAL ERROR: ${Uo(...t)}`;throw Oi.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Uo(...t);Oi.warn(e)},UI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},af=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",Xr="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Yi||e===Xr)return-1;if(e===Yi||t===Xr)return 1;{const n=Qm(t),r=Qm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},BI=function(t,e){return t===e?0:t<e?-1:1},Is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},lf=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$e(e[r]),n+=":",n+=lf(t[e[r]]);return n+="}",n},p0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const m0=function(t){N(!af(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},WI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GI=new RegExp("^-?(0*)\\d{1,10}$"),KI=-2147483648,YI=2147483647,Qm=function(t){if(GI.test(t)){const e=Number(t);if(e>=KI&&e<=YI)return e}return null},hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},QI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class qI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class ja{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ja.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="5",g0="v",_0="s",y0="r",v0="f",w0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,S0="ls",C0="p",Nd="ac",E0="websocket",x0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function I0(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===E0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JI(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.counters_={}}incrementCounter(e,n=1){pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={},au={};function uf(t){const e=t.toString();return ou[e]||(ou[e]=new ZI),ou[e]}function eT(t,e){const n=t.toString();return au[n]||(au[n]=e()),au[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&hs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="start",nT="close",rT="pLPCommand",iT="pRTLPCB",T0="id",N0="pw",b0="ser",sT="cb",oT="seg",aT="ts",lT="d",cT="dframe",P0=1870,R0=30,uT=P0-R0,dT=25e3,hT=3e4;class Ei{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zo(e),this.stats_=uf(n),this.urlFn=l=>(this.appCheckToken&&(l[Nd]=this.appCheckToken),I0(n,x0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hT)),zI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new df((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qm)this.id=a,this.password=l;else if(o===nT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[qm]="t",r[b0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[g0]=cf,this.transportSessionId&&(r[_0]=this.transportSessionId),this.lastSessionId&&(r[S0]=this.lastSessionId),this.applicationId&&(r[C0]=this.applicationId),this.appCheckToken&&(r[Nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&w0.test(location.hostname)&&(r[y0]=v0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WI()&&!HI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yv(n),i=p0(r,uT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cT]="t",r[T0]=e,r[N0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class df{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jI(),window[rT+this.uniqueCallbackIdentifier]=e,window[iT+this.uniqueCallbackIdentifier]=n,this.myIFrame=df.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[T0]=this.myID,e[N0]=this.myPW,e[b0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+R0+r.length<=P0;){const o=this.pendingSegs.shift();r=r+"&"+oT+i+"="+o.seg+"&"+aT+i+"="+o.ts+"&"+lT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=16384,pT=45e3;let kl=null;typeof MozWebSocket<"u"?kl=MozWebSocket:typeof WebSocket<"u"&&(kl=WebSocket);class Yt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zo(this.connId),this.stats_=uf(n),this.connURL=Yt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[g0]=cf,typeof location<"u"&&location.hostname&&w0.test(location.hostname)&&(o[y0]=v0),n&&(o[_0]=n),r&&(o[S0]=r),i&&(o[Nd]=i),s&&(o[C0]=s),I0(e,E0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let r;Iv(),this.mySock=new kl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kl!==null&&!Yt.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=yo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=p0(n,fT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static get ALL_TRANSPORTS(){return[Ei,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Yt&&Yt.isAvailable();let r=n&&!Yt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Yt];else{const i=this.transports_=[];for(const s of So.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}So.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=6e4,gT=5e3,_T=10*1024,yT=100*1024,lu="t",Xm="d",vT="s",Jm="r",wT="e",Zm="o",eg="a",tg="n",ng="p",ST="h";class CT{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zo("c:"+this.id+":"),this.transportManager_=new So(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_T?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lu in e){const n=e[lu];n===eg?this.upgradeIfSecondaryHealthy_():n===Jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Is("t",e),r=Is("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ng,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Is("t",e),r=Is("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Is(lu,e);if(Xm in e){const r=e[Xm];if(n===ST){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vT?this.onConnectionShutdown_(r):n===Jm?this.onReset_(r):n===wT?Td("Server Error: "+r):n===Zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Td("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cf!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ng,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends D0{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=32,ig=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new fe("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yr(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function hf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ET(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Co(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function L0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return lt(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xT(t,e){const n=Co(t,0),r=Co(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ni(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ff(t,e){if(yr(t)!==yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yr(t)>yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kT{constructor(e,n){this.errorPrefix_=n,this.parts_=Co(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sc(this.parts_[r]);O0(this)}}function IT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sc(e),O0(t)}function TT(t){const e=t.parts_.pop();t.byteLength_-=sc(e),t.parts_.length>0&&(t.byteLength_-=1)}function O0(t){if(t.byteLength_>ig)throw new Error(t.errorPrefix_+"has a key path longer than "+ig+" bytes ("+t.byteLength_+").");if(t.parts_.length>rg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rg+") or object contains a cycle "+Pr(t))}function Pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends D0{static getInstance(){return new pf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=1e3,NT=60*5*1e3,sg=30*1e3,bT=1.3,PT=3e4,RT="server_kill",og=3;class bn extends A0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bn.nextPersistentConnectionId_++,this.log_=zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ts,this.maxReconnectDelay_=NT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Iv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($e(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Oo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;bn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pn(e,"w")){const r=Vi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_E(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Td("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PT&&(this.reconnectDelay_=Ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new CT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ut(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(RT)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ut(u),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yd(this.interruptReasons_)&&(this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=og&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=og&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+d0.replace(/\./g,"-")]=1,Gh()?e["framework.cordova"]=1:kv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return yd(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new X(Yi,e),i=new X(Yi,n);return this.compare(r,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class M0 extends cc{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw as("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Xr,ma)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,ma)}toString(){return".key"}}const Mi=new M0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??yt.EMPTY_NODE,this.right=s??yt.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class AT{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new AT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t,e){return ni(t.name,e.name)}function mf(t,e){return ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd;function LT(t){bd=t}const F0=function(t){return typeof t=="number"?"number:"+m0(t):"string:"+t},j0=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pn(e,".sv"),"Priority must be a string or number.")}else N(t===bd||t.isEmpty(),"priority of unexpected type.");N(t===bd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag;class ze{static set __childrenNodeConstructor(e){ag=e}static get __childrenNodeConstructor(){return ag}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),j0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:q(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+F0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=m0(this.value_):e+=this.value_,this.lazyHash_=f0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),s=ze.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $0,U0;function OT(t){$0=t}function MT(t){U0=t}class FT extends cc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Xr,new ze("[PRIORITY-POST]",U0))}makePost(e,n){const r=$0(e);return new X(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const be=new FT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=Math.log(2);class $T{constructor(e){const n=s=>parseInt(Math.log(s)/jT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new We(h,u.node,We.BLACK,null,null);{const g=parseInt(d/2,10)+l,y=i(l,g),S=i(g+1,c);return u=t[g],h=n?n(u):u,new We(h,u.node,We.BLACK,y,S)}},s=function(l){let c=null,d=null,u=t.length;const h=function(y,S){const b=u-y,m=u;u-=y;const f=i(b+1,m),_=t[b],v=n?n(_):_;g(new We(v,_.node,S,null,f))},g=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<l.count;++y){const S=l.nextBitIsOne(),b=Math.pow(2,l.count-(y+1));S?h(b,We.BLACK):(h(b,We.BLACK),h(b,We.RED))}return d},o=new $T(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;const oi={};class Tn{static get Default(){return N(oi&&be,"ChildrenNode.ts has not been loaded"),cu=cu||new Tn({".priority":oi},{".priority":be}),cu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return pn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(X.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Tl(r,e.getCompare()):a=oi;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Tn(d,c)}addToIndexes(e,n){const r=_l(this.indexes_,(i,s)=>{const o=Vi(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Tl(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new Tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=_l(this.indexes_,i=>{if(i===oi)return i;{const s=n.get(e.name);return s?i.remove(new X(e.name,s)):i}});return new Tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class j{static get EMPTY_NODE(){return Ns||(Ns=new j(new yt(mf),null,Tn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&j0(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new X(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ns:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{N(q(e)!==".priority"||yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(be,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+F0(this.getPriority().val())+":"),this.forEachChild(be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":f0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new X(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bo?-1:0}withIndex(e){if(e===Mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(be),i=n.getIterator(be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mi?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UT extends j{constructor(){super(new yt(mf),j.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Bo=new UT;Object.defineProperties(X,{MIN:{value:new X(Yi,j.EMPTY_NODE)},MAX:{value:new X(Xr,Bo)}});M0.__EMPTY_NODE=j.EMPTY_NODE;ze.__childrenNodeConstructor=j;LT(Bo);MT(Bo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=!0;function je(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,je(e))}if(!(t instanceof Array)&&zT){const n=[];let r=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=je(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Tl(n,DT,o=>o.name,mf);if(r){const o=Tl(n,be.getCompare());return new j(s,je(e),new Tn({".priority":o},{".priority":be}))}else return new j(s,je(e),Tn.Default)}else{let n=j.EMPTY_NODE;return Xe(t,(r,i)=>{if(pn(t,r)&&r.substring(0,1)!=="."){const s=je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(je(e))}}OT(je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT extends cc{constructor(e){super(),this.indexPath_=e,N(!J(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}makePost(e,n){const r=je(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Bo);return new X(Xr,e)}toString(){return Co(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT extends cc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const r=je(e);return new X(n,r)}toString(){return".value"}}const HT=new WT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return{type:"value",snapshotNode:t}}function Qi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Eo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Eo(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qi(n,r)):o.trackChildChange(xo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(be,(i,s)=>{n.hasChild(i)||r.trackChildChange(Eo(i,s))}),n.isLeafNode()||n.forEachChild(be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xo(i,s,o))}else r.trackChildChange(Qi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.indexedFilter_=new gf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new X(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(be,(o,a)=>{s.matches(new X(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new X(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new X(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(xo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Eo(n,u));const S=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Qi(h.name,h.node)),S.updateImmediateChild(h.name,h.node)):S}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Eo(c.name,c.node)),s.trackChildChange(Qi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new _f;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KT(t){return t.loadsAllData()?new gf(t.getIndex()):t.hasLimit()?new GT(t):new ko(t)}function lg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===be?n="$priority":t.index_===HT?n="$value":t.index_===Mi?n="$key":(N(t.index_ instanceof BT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=$e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+$e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=$e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+$e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends A0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nl.getListenId_(e,r),a={};this.listens_[o]=a;const l=lg(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Vi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Nl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lg(e._queryParams),r=e._path.toString(),i=new Oo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yo(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){return{value:null,children:new Map}}function B0(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,bl());const i=t.children.get(r);e=me(e),B0(i,e,n)}}function Pd(t,e,n){t.value!==null?n(e,t.value):QT(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);Pd(i,s,n)})}function QT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=10*1e3,XT=30*1e3,JT=5*60*1e3;class ZT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qT(e);const r=ug+(XT-ug)*Math.random();Ys(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Xe(e,(i,s)=>{s>0&&pn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*JT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qt||(qt={}));function yf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=qt.ACK_USER_WRITE,this.source=yf()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Pl(se(),n,this.revert)}}else return N(q(this.path)===e,"operationForChild called for unrelated child."),new Pl(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.source=e,this.path=n,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Io(this.source,se()):new Io(this.source,me(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=qt.OVERWRITE}operationForChild(e){return J(this.path)?new Jr(this.source,se(),this.snap.getImmediateChild(e)):new Jr(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=qt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Jr(this.source,se(),n.value):new qi(this.source,se(),n)}else return N(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VT(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,r,n),bs(t,i,"child_added",e,r,n),bs(t,i,"child_moved",s,r,n),bs(t,i,"child_changed",e,r,n),bs(t,i,"value",e,r,n),i}function bs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>rN(t,a,l)),o.forEach(a=>{const l=nN(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function nN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rN(t,e,n){if(e.childName==null||n.childName==null)throw as("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){return{eventCache:t,serverCache:e}}function Qs(t,e,n,r){return uc(new vr(e,n,r),t.serverCache)}function W0(t,e,n,r){return uc(t.eventCache,new vr(e,n,r))}function Rl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;const iN=()=>(uu||(uu=new yt(BI)),uu);class pe{static fromObject(e){let n=new pe(null);return Xe(e,(r,i)=>{n=n.set(new fe(r),i)}),n}constructor(e,n=iN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(J(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),n);return s!=null?{path:Ne(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(me(e)):new pe(null)}}set(e,n){if(J(e))return new pe(n,this.children);{const r=q(e),s=(this.children.get(r)||new pe(null)).set(me(e),n),o=this.children.insert(r,s);return new pe(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new pe(null):new pe(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(me(e)):null}}setTree(e,n){if(J(e))return n;{const r=q(e),s=(this.children.get(r)||new pe(null)).setTree(me(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new pe(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(me(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),Ne(n,i),r):new pe(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new pe(null))}}function qs(t,e,n){if(J(e))return new en(new pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=lt(i,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(i,s))}else{const i=new pe(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function Rd(t,e,n){let r=t;return Xe(n,(i,s)=>{r=qs(r,Ne(e,i),s)}),r}function dg(t,e){if(J(e))return en.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new en(n)}}function Ad(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function hg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(r,i)=>{e.push(new X(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new X(r,i.value))}),e}function pr(t,e){if(J(e))return t;{const n=ri(t,e);return n!=null?new en(new pe(n)):new en(t.writeTree_.subtree(e))}}function Dd(t){return t.writeTree_.isEmpty()}function Xi(t,e){return H0(se(),t.writeTree_,e)}function H0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=H0(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t,e){return Y0(e,t)}function sN(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=r}function oN(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Rd(t.visibleWrites,e,n),t.lastWriteId=r}function aN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cN(a,r.path)?i=!1:Mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return uN(t),!0;if(r.snap)t.visibleWrites=dg(t.visibleWrites,r.path);else{const a=r.children;Xe(a,l=>{t.visibleWrites=dg(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function cN(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt(Ne(t.path,n),e))return!0;return!1}function uN(t){t.visibleWrites=V0(t.allWrites,dN,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dN(t){return t.visible}function V0(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Mt(n,o)?(a=lt(n,o),r=qs(r,a,s.snap)):Mt(o,n)&&(a=lt(o,n),r=qs(r,se(),s.snap.getChild(a)));else if(s.children){if(Mt(n,o))a=lt(n,o),r=Rd(r,a,s.children);else if(Mt(o,n))if(a=lt(o,n),J(a))r=Rd(r,se(),s.children);else{const l=Vi(s.children,q(a));if(l){const c=l.getChild(me(a));r=qs(r,se(),c)}}}else throw as("WriteRecord should have .snap or .children")}}return r}function G0(t,e,n,r,i){if(!r&&!i){const s=ri(t.visibleWrites,e);if(s!=null)return s;{const o=pr(t.visibleWrites,e);if(Dd(o))return n;if(n==null&&!Ad(o,se()))return null;{const a=n||j.EMPTY_NODE;return Xi(o,a)}}}else{const s=pr(t.visibleWrites,e);if(!i&&Dd(s))return n;if(!i&&n==null&&!Ad(s,se()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Mt(c.path,e)||Mt(e,c.path))},a=V0(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Xi(a,l)}}}function hN(t,e,n){let r=j.EMPTY_NODE;const i=ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pr(t.visibleWrites,e);return n.forEachChild(be,(o,a)=>{const l=Xi(pr(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pr(t.visibleWrites,e);return hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fN(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(Ad(t.visibleWrites,s))return null;{const o=pr(t.visibleWrites,s);return Dd(o)?i.getChild(n):Xi(o,i.getChild(n))}}function pN(t,e,n,r){const i=Ne(e,n),s=ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pr(t.visibleWrites,i);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function mN(t,e){return ri(t.visibleWrites,e)}function gN(t,e,n,r,i,s,o){let a;const l=pr(t.visibleWrites,e),c=ri(l,se());if(c!=null)a=c;else if(n!=null)a=Xi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function _N(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Al(t,e,n,r){return G0(t.writeTree,t.treePath,e,n,r)}function Sf(t,e){return hN(t.writeTree,t.treePath,e)}function fg(t,e,n,r){return fN(t.writeTree,t.treePath,e,n,r)}function Dl(t,e){return mN(t.writeTree,Ne(t.treePath,e))}function yN(t,e,n,r,i,s){return gN(t.writeTree,t.treePath,e,n,r,i,s)}function Cf(t,e,n){return pN(t.writeTree,t.treePath,e,n)}function K0(t,e){return Y0(Ne(t.treePath,e),t.writeTree)}function Y0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Eo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xo(r,e.snapshotNode,i.oldSnap));else throw as("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Q0=new wN;class Ef{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zr(this.viewCache_),s=yN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return{filter:t}}function CN(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function EN(t,e,n,r,i){const s=new vN;let o,a;if(n.type===qt.OVERWRITE){const c=n;c.source.fromUser?o=Ld(t,e,c.path,c.snap,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Ll(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===qt.MERGE){const c=n;c.source.fromUser?o=kN(t,e,c.path,c.children,r,i,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Od(t,e,c.path,c.children,r,i,a,s))}else if(n.type===qt.ACK_USER_WRITE){const c=n;c.revert?o=NN(t,e,c.path,r,i,s):o=IN(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===qt.LISTEN_COMPLETE)o=TN(t,e,n.path,r,s);else throw as("Unknown operation type: "+n.type);const l=s.getChanges();return xN(e,o,l),{viewCache:o,changes:l}}function xN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(z0(Rl(e)))}}function q0(t,e,n,r,i,s){const o=e.eventCache;if(Dl(r,n)!=null)return e;{let a,l;if(J(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zr(e),d=c instanceof j?c:j.EMPTY_NODE,u=Sf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Al(r,Zr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=q(n);if(c===".priority"){N(yr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=fg(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=me(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=fg(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Cf(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Qs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Ll(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=q(n);if(!l.isCompleteForPath(n)&&yr(n)>1)return e;const y=me(n),b=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?c=d.updatePriority(l.getNode(),b):c=d.updateChild(l.getNode(),g,b,y,Q0,null)}const u=W0(e,c,l.isFullyInitialized()||J(n),d.filtersNodes()),h=new Ef(i,u,s);return q0(t,u,n,i,h,a)}function Ld(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Ef(i,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qs(e,c,!0,t.filter.filtersNodes());else{const u=q(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=me(n),g=a.getNode().getImmediateChild(u);let y;if(J(h))y=r;else{const S=d.getCompleteChild(u);S!=null?hf(h)===".priority"&&S.getChild(L0(h)).isEmpty()?y=S:y=S.updateChild(h,r):y=j.EMPTY_NODE}if(g.equals(y))l=e;else{const S=t.filter.updateChild(a.getNode(),u,y,h,d,o);l=Qs(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pg(t,e){return t.eventCache.isCompleteForChild(e)}function kN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ne(n,l);pg(e,q(d))&&(a=Ld(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ne(n,l);pg(e,q(d))||(a=Ld(t,a,d,c,i,s,o))}),a}function mg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Od(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=r:c=new pe(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),y=mg(t,g,h);l=Ll(t,l,new fe(u),y,i,s,o,a)}}),c.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const y=e.serverCache.getNode().getImmediateChild(u),S=mg(t,y,h);l=Ll(t,l,new fe(u),S,i,s,o,a)}}),l}function IN(t,e,n,r,i,s,o){if(Dl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ll(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let c=new pe(null);return l.getNode().forEachChild(Mi,(d,u)=>{c=c.set(new fe(d),u)}),Od(t,e,n,c,i,s,a,o)}else return e}else{let c=new pe(null);return r.foreach((d,u)=>{const h=Ne(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Od(t,e,n,c,i,s,a,o)}}function TN(t,e,n,r,i){const s=e.serverCache,o=W0(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return q0(t,o,n,r,Q0,i)}function NN(t,e,n,r,i,s){let o;if(Dl(r,n)!=null)return e;{const a=new Ef(r,e,i),l=e.eventCache.getNode();let c;if(J(n)||q(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Al(r,Zr(e));else{const u=e.serverCache.getNode();N(u instanceof j,"serverChildren would be complete if leaf node"),d=Sf(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=q(n);let u=Cf(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,me(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,j.EMPTY_NODE,me(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Al(r,Zr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Dl(r,se())!=null,Qs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gf(r.getIndex()),s=KT(r);this.processor_=SN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new vr(l,o.isFullyInitialized(),i.filtersNodes()),u=new vr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=uc(u,d),this.eventGenerator_=new eN(this.query_)}get query(){return this.query_}}function PN(t){return t.viewCache_.serverCache.getNode()}function RN(t){return Rl(t.viewCache_)}function AN(t,e){const n=Zr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function gg(t){return t.eventRegistrations_.length===0}function DN(t,e){t.eventRegistrations_.push(e)}function _g(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yg(t,e,n,r){e.type===qt.MERGE&&e.source.queryId!==null&&(N(Zr(t.viewCache_),"We should always have a full cache before handling merges"),N(Rl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=EN(t.processor_,i,e,n,r);return CN(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,X0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function LN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(s,o)=>{r.push(Qi(s,o))}),n.isFullyInitialized()&&r.push(z0(n.getNode())),X0(t,r,n.getNode(),e)}function X0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class J0{constructor(){this.views=new Map}}function ON(t){N(!Ol,"__referenceConstructor has already been defined"),Ol=t}function MN(){return N(Ol,"Reference.ts has not been loaded"),Ol}function FN(t){return t.views.size===0}function xf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),yg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yg(o,e,n,r));return s}}function Z0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Al(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Sf(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=uc(new vr(a,l,!1),new vr(r,i,!1));return new bN(e,c)}return o}function jN(t,e,n,r,i,s){const o=Z0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DN(o,n),LN(o,n)}function $N(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(_g(c,n,r)),gg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(_g(l,n,r)),gg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!wr(t)&&s.push(new(MN())(e._repo,e._path)),{removed:s,events:o}}function e1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mr(t,e){let n=null;for(const r of t.views.values())n=n||AN(r,e);return n}function t1(t,e){if(e._queryParams.loadsAllData())return hc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function n1(t,e){return t1(t,e)!=null}function wr(t){return hc(t)!=null}function hc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml;function UN(t){N(!Ml,"__referenceConstructor has already been defined"),Ml=t}function zN(){return N(Ml,"Reference.ts has not been loaded"),Ml}let BN=1;class vg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=_N(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r1(t,e,n,r,i){return sN(t.pendingWriteTree_,e,n,r,i),i?fs(t,new Jr(yf(),e,n)):[]}function WN(t,e,n,r){oN(t.pendingWriteTree_,e,n,r);const i=pe.fromObject(n);return fs(t,new qi(yf(),e,i))}function nr(t,e,n=!1){const r=aN(t.pendingWriteTree_,e);if(lN(t.pendingWriteTree_,e)){let s=new pe(null);return r.snap!=null?s=s.set(se(),!0):Xe(r.children,o=>{s=s.set(new fe(o),!0)}),fs(t,new Pl(r.path,s,n))}else return[]}function Wo(t,e,n){return fs(t,new Jr(vf(),e,n))}function HN(t,e,n){const r=pe.fromObject(n);return fs(t,new qi(vf(),e,r))}function VN(t,e){return fs(t,new Io(vf(),e))}function GN(t,e,n){const r=If(t,n);if(r){const i=Tf(r),s=i.path,o=i.queryId,a=lt(s,e),l=new Io(wf(o),a);return Nf(t,s,l)}else return[]}function Fl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||n1(o,e))){const l=$N(o,e,n,r);FN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,g)=>wr(g));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=QN(h);for(let y=0;y<g.length;++y){const S=g[y],b=S.query,m=a1(t,S);t.listenProvider_.startListening(Xs(b),To(t,b),m.hashFn,m.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Xs(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(fc(h));t.listenProvider_.stopListening(Xs(h),g)}))}qN(t,c)}return a}function i1(t,e,n,r){const i=If(t,r);if(i!=null){const s=Tf(i),o=s.path,a=s.queryId,l=lt(o,e),c=new Jr(wf(a),l,n);return Nf(t,o,c)}else return[]}function KN(t,e,n,r){const i=If(t,r);if(i){const s=Tf(i),o=s.path,a=s.queryId,l=lt(o,e),c=pe.fromObject(n),d=new qi(wf(a),l,c);return Nf(t,o,d)}else return[]}function Md(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const y=lt(h,i);s=s||mr(g,y),o=o||wr(g)});let a=t.syncPointTree_.get(i);a?(o=o||wr(a),s=s||mr(a,se())):(a=new J0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const S=mr(y,se());S&&(s=s.updateImmediateChild(g,S))}));const c=n1(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=fc(e);N(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=XN();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=dc(t.pendingWriteTree_,i);let u=jN(a,e,n,d,s,l);if(!c&&!o&&!r){const h=t1(a,e);u=u.concat(JN(t,e,h))}return u}function kf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=mr(a,l);if(c)return c});return G0(i,e,s,n,!0)}function YN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=lt(c,n);r=r||mr(d,u)});let i=t.syncPointTree_.get(n);i?r=r||mr(i,se()):(i=new J0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new vr(r,!0,!1):null,a=dc(t.pendingWriteTree_,e._path),l=Z0(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return RN(l)}function fs(t,e){return s1(e,t.syncPointTree_,null,dc(t.pendingWriteTree_,se()))}function s1(t,e,n,r){if(J(t.path))return o1(t,e,n,r);{const i=e.get(se());n==null&&i!=null&&(n=mr(i,se()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=K0(r,o);s=s.concat(s1(a,l,c,d))}return i&&(s=s.concat(xf(i,t,r,n))),s}}function o1(t,e,n,r){const i=e.get(se());n==null&&i!=null&&(n=mr(i,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=K0(r,o),d=t.operationForChild(o);d&&(s=s.concat(o1(d,a,l,c)))}),i&&(s=s.concat(xf(i,t,r,n))),s}function a1(t,e){const n=e.query,r=To(t,n);return{hashFn:()=>(PN(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GN(t,n._path,r):VN(t,n._path);{const s=VI(i,n);return Fl(t,n,null,s)}}}}function To(t,e){const n=fc(e);return t.queryToTagMap.get(n)}function fc(t){return t._path.toString()+"$"+t._queryIdentifier}function If(t,e){return t.tagToQueryMap.get(e)}function Tf(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Nf(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=dc(t.pendingWriteTree_,e);return xf(r,n,i,null)}function QN(t){return t.fold((e,n,r)=>{if(n&&wr(n))return[hc(n)];{let i=[];return n&&(i=e1(n)),Xe(r,(s,o)=>{i=i.concat(o)}),i}})}function Xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zN())(t._repo,t._path):t}function qN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=fc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function XN(){return BN++}function JN(t,e,n){const r=e._path,i=To(t,e),s=a1(t,n),o=t.listenProvider_.startListening(Xs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!J(c)&&d&&wr(d))return[hc(d).query];{let h=[];return d&&(h=h.concat(e1(d).map(g=>g.query))),Xe(u,(g,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Xs(d),To(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bf(n)}node(){return this.node_}}class Pf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Pf(this.syncTree_,n)}node(){return kf(this.syncTree_,this.path_)}}const ZN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wg=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tb(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},tb=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},l1=function(t,e,n,r){return Rf(e,new Pf(n,t),r)},c1=function(t,e,n){return Rf(t,new bf(e),n)};function Rf(t,e,n){const r=t.getPriority().val(),i=wg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=wg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ze(i))),o.forEachChild(be,(a,l)=>{const c=Rf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Df(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=q(n);for(;i!==null;){const s=Vi(r.node.children,i)||{children:{},childCount:0};r=new Af(i,r,s),n=me(n),i=q(n)}return r}function ps(t){return t.node.value}function u1(t,e){t.node.value=e,Fd(t)}function d1(t){return t.node.childCount>0}function nb(t){return ps(t)===void 0&&!d1(t)}function pc(t,e){Xe(t.node.children,(n,r)=>{e(new Af(n,t,r))})}function h1(t,e,n,r){n&&!r&&e(t),pc(t,i=>{h1(i,e,!0,r)}),n&&r&&e(t)}function rb(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ho(t){return new fe(t.parent===null?t.name:Ho(t.parent)+"/"+t.name)}function Fd(t){t.parent!==null&&ib(t.parent,t.name,t)}function ib(t,e,n){const r=nb(n),i=pn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Fd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/[\[\].#$\/\u0000-\u001F\u007F]/,ob=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Lf=function(t){return typeof t=="string"&&t.length!==0&&!sb.test(t)},f1=function(t){return typeof t=="string"&&t.length!==0&&!ob.test(t)},ab=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),f1(t)},lb=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!af(t)||t&&typeof t=="object"&&pn(t,".sv")},cb=function(t,e,n,r){mc(ic(t,"value"),e,n)},mc=function(t,e,n){const r=n instanceof fe?new kT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pr(r)+" with contents = "+e.toString());if(af(e))throw new Error(t+"contains "+e.toString()+" "+Pr(r));if(typeof e=="string"&&e.length>du/3&&sc(e)>du)throw new Error(t+"contains a string greater than "+du+" utf8 bytes "+Pr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Lf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IT(r,o),mc(t,a,r),TT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pr(r)+" in addition to actual children.")}},ub=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Co(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Lf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Mt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},db=function(t,e,n,r){const i=ic(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Xe(e,(o,a)=>{const l=new fe(o);if(mc(i,a,Ne(n,l)),hf(l)===".priority"&&!lb(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),ub(i,s)},p1=function(t,e,n,r){if(!f1(n))throw new Error(ic(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),p1(t,e,n)},m1=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ab(n))throw new Error(ic(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ff(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function g1(t,e,n){gc(t,n),_1(t,r=>ff(r,e))}function Ut(t,e,n){gc(t,n),_1(t,r=>Mt(r,e)||Mt(e,r))}function _1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ks&&Ye("event: "+n.toString()),hs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="repo_interrupt",_b=25;class yb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bl(),this.transactionQueueTree_=new Af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vb(t,e,n){if(t.stats_=uf(t.repoInfo_),t.forceRestClient_||QI())t.server_=new Nl(t.repoInfo_,(r,i,s,o)=>{Sg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bn(t.repoInfo_,e,(r,i,s,o)=>{Sg(t,r,i,s,o)},r=>{Cg(t,r)},r=>{Sb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eT(t.repoInfo_,()=>new ZT(t.stats_,t.server_)),t.infoData_=new YT,t.infoSyncTree_=new vg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Wo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Of(t,"connected",!1),t.serverSyncTree_=new vg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function wb(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _c(t){return ZN({timestamp:wb(t)})}function Sg(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=_l(n,c=>je(c));o=KN(t.serverSyncTree_,s,l,i)}else{const l=je(n);o=i1(t.serverSyncTree_,s,l,i)}else if(r){const l=_l(n,c=>je(c));o=HN(t.serverSyncTree_,s,l)}else{const l=je(n);o=Wo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ji(t,s)),Ut(t.eventQueue_,a,o)}function Cg(t,e){Of(t,"connected",e),e===!1&&kb(t)}function Sb(t,e){Xe(e,(n,r)=>{Of(t,n,r)})}function Of(t,e,n){const r=new fe("/.info/"+e),i=je(n);t.infoData_.updateSnapshot(r,i);const s=Wo(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function Mf(t){return t.nextWriteId_++}function Cb(t,e,n){const r=YN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=je(i).withIndex(e._queryParams.getIndex());Md(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wo(t.serverSyncTree_,e._path,s);else{const a=To(t.serverSyncTree_,e);o=i1(t.serverSyncTree_,e._path,s,a)}return Ut(t.eventQueue_,e._path,o),Fl(t.serverSyncTree_,e,n,null,!0),s},i=>(Vo(t,"get for query "+$e(e)+" failed: "+i),Promise.reject(new Error(i))))}function Eb(t,e,n,r,i){Vo(t,"set",{path:e.toString(),value:n,priority:r});const s=_c(t),o=je(n,r),a=kf(t.serverSyncTree_,e),l=c1(o,a,s),c=Mf(t),d=r1(t.serverSyncTree_,e,l,c,!0);gc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const y=h==="ok";y||ut("set at "+e+" failed: "+h);const S=nr(t.serverSyncTree_,c,!y);Ut(t.eventQueue_,e,S),jd(t,i,h,g)});const u=jf(t,e);Ji(t,u),Ut(t.eventQueue_,u,[])}function xb(t,e,n,r){Vo(t,"update",{path:e.toString(),value:n});let i=!0;const s=_c(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=l1(Ne(e,a),je(l),t.serverSyncTree_,s)}),i)Ye("update() called with empty data.  Don't do anything."),jd(t,r,"ok",void 0);else{const a=Mf(t),l=WN(t.serverSyncTree_,e,o,a);gc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||ut("update at "+e+" failed: "+c);const h=nr(t.serverSyncTree_,a,!u),g=h.length>0?Ji(t,e):e;Ut(t.eventQueue_,g,h),jd(t,r,c,d)}),Xe(n,c=>{const d=jf(t,Ne(e,c));Ji(t,d)}),Ut(t.eventQueue_,e,[])}}function kb(t){Vo(t,"onDisconnectEvents");const e=_c(t),n=bl();Pd(t.onDisconnect_,se(),(i,s)=>{const o=l1(i,s,t.serverSyncTree_,e);B0(n,i,o)});let r=[];Pd(n,se(),(i,s)=>{r=r.concat(Wo(t.serverSyncTree_,i,s));const o=jf(t,i);Ji(t,o)}),t.onDisconnect_=bl(),Ut(t.eventQueue_,se(),r)}function Ib(t,e,n){let r;q(e._path)===".info"?r=Md(t.infoSyncTree_,e,n):r=Md(t.serverSyncTree_,e,n),g1(t.eventQueue_,e._path,r)}function Eg(t,e,n){let r;q(e._path)===".info"?r=Fl(t.infoSyncTree_,e,n):r=Fl(t.serverSyncTree_,e,n),g1(t.eventQueue_,e._path,r)}function Tb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gb)}function Vo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function jd(t,e,n,r){e&&hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function y1(t,e,n){return kf(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Ff(t,e=t.transactionQueueTree_){if(e||yc(t,e),ps(e)){const n=w1(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Nb(t,Ho(e),n)}else d1(e)&&pc(e,n=>{Ff(t,n)})}function Nb(t,e,n){const r=n.map(c=>c.currentWriteId),i=y1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=lt(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Vo(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(nr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();yc(t,Df(t.transactionQueueTree_,e)),Ff(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)hs(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ut("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=v1(t,e),r=Ho(n),i=w1(t,n);return bb(t,i,r),r}function bb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let d=!1,u;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_b)d=!0,u="maxretry",i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=y1(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){mc("transaction failed: Data returned ",g,l.path);let y=je(g);typeof g=="object"&&g!=null&&pn(g,".priority")||(y=y.updatePriority(h.getPriority()));const b=l.currentWriteId,m=_c(t),f=c1(y,h,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=f,l.currentWriteId=Mf(t),o.splice(o.indexOf(b),1),i=i.concat(r1(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(nr(t.serverSyncTree_,b,!0))}else d=!0,u="nodata",i=i.concat(nr(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}yc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)hs(r[a]);Ff(t,t.transactionQueueTree_)}function v1(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ps(r)===void 0;)r=Df(r,n),e=me(e),n=q(e);return r}function w1(t,e){const n=[];return S1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function S1(t,e,n){const r=ps(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pc(e,i=>{S1(t,i,n)})}function yc(t,e){const n=ps(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,u1(e,n.length>0?n:void 0)}pc(e,r=>{yc(t,r)})}function jf(t,e){const n=Ho(v1(t,e)),r=Df(t.transactionQueueTree_,e);return rb(r,i=>{hu(t,i)}),hu(t,r),h1(r,i=>{hu(t,i)}),n}function hu(t,e){const n=ps(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(nr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?u1(e,void 0):n.length=s+1,Ut(t.eventQueue_,Ho(e),i);for(let o=0;o<r.length;o++)hs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const xg=function(t,e){const n=Ab(t),r=n.namespace;n.domain==="firebase.com"&&Mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new k0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},Ab=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=Pb(t.substring(d,u)));const h=Rb(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class Lb{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $f{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:hf(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=cg(this._queryParams),n=lf(e);return n==="{}"?"default":n}get _queryObject(){return cg(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof $f))return!1;const n=this._repo===e._repo,r=ff(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ET(this._path)}}class jn extends $f{constructor(e,n){super(e,n,new _f,!1)}get parent(){const e=L0(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class No{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=$d(this.ref,e);return new No(this._node.getChild(n),r,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new No(i,$d(this.ref,r),be)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function de(t,e){return t=Et(t),t._checkNotDeleted("ref"),e!==void 0?$d(t._root,e):t._root}function $d(t,e){return t=Et(t),q(t._path)===null?hb("child","path",e):p1("child","path",e),new jn(t._repo,Ne(t._path,e))}function Ob(t){return m1("remove",t._path),ln(t,null)}function ln(t,e){t=Et(t),m1("set",t._path),cb("set",e,t._path);const n=new Oo;return Eb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $a(t,e){db("update",e,t._path);const n=new Oo;return xb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function cn(t){t=Et(t);const e=new C1(()=>{}),n=new vc(e);return Cb(t._repo,t,n).then(r=>new No(r,new jn(t._repo,t._path),t._queryParams.getIndex()))}class vc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Db("value",this,new No(e.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lb(this,e,n):null}matches(e){return e instanceof vc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Mb(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{Eg(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new C1(n,s||void 0),a=new vc(o);return Ib(t._repo,t,a),()=>Eg(t._repo,t,a)}function kg(t,e,n,r){return Mb(t,"value",e,n,r)}ON(jn);UN(jn);/**
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
 */const Fb="FIREBASE_DATABASE_EMULATOR_HOST",Ud={};let jb=!1;function $b(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ls(s);t.repoInfo_=new k0(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Ub(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xg(s,i),a=o.repoInfo,l;typeof process<"u"&&Vm&&(l=Vm[Fb]),l?(s=`http://${l}?ns=${a.namespace}`,o=xg(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new XI(t.name,t.options,e);fb("Invalid Firebase Database URL",o),J(o.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Bb(a,t,c,new qI(t,n));return new Wb(d,t)}function zb(t,e){const n=Ud[e];(!n||n[t.key]!==t)&&Mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Tb(t),delete n[t.key]}function Bb(t,e,n,r){let i=Ud[e.name];i||(i={},Ud[e.name]=i);let s=i[t.toURLString()];return s&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new yb(t,jb,n,r),i[t.toURLString()]=s,s}class Wb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mn("Cannot call "+e+" on a deleted database.")}}function E1(t=Rv(),e){const n=Qh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sE("database");r&&Hb(n,...r)}return n}function Hb(t,e,n,r={}){t=Et(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Yr(r,s.repoInfo_.emulatorOptions))return;Mn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ja(ja.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:oE(r.mockUserToken,t.app.options.projectId);o=new ja(a)}ls(e)&&(Ev(e),xv("Database",!0)),$b(s,i,r,o)}/**
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
 */function Vb(t){LI(us),Gi(new Qr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ub(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),fr(Gm,Km,t),fr(Gm,Km,"esm2020")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Vb();const Gb={apiKey:"AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",authDomain:"vgtk-parser.firebaseapp.com",projectId:"vgtk-parser",storageBucket:"vgtk-parser.firebasestorage.app",messagingSenderId:"369828135879",appId:"1:369828135879:web:ad18e0c1b525f3cbef0fe2",measurementId:"G-CETL1LFGEM",databaseURL:"https://vgtk-parser-default-rtdb.europe-west1.firebasedatabase.app/"},Kb=Pv(Gb),De=E1(Kb),Q=u0();de(De,"users");de(De,"hours/");function x1(t){var a;const e=t.match(/на\s+(.+?)\s+года/i);if(!e)return null;const n=e[1].trim();let r=new Date(n);if(isNaN(r)){const l=n.split(/\s+/),c=parseInt(l[0],10),d=(a=l[1])==null?void 0:a.toLowerCase(),u=parseInt(l[2],10),g={января:0,февраля:1,марта:2,апреля:3,мая:4,июня:5,июля:6,августа:7,сентября:8,октября:9,ноября:10,декабря:11}[d];g!=null&&(r=new Date(u,g,c))}if(!r||isNaN(r))return null;const i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();return`${i}-${s}-${o}`}const Yb="на 9 сентября 2025 года  (ВТОРНИК)",Qb=x1(Yb);console.log(Qb);var vt=function(){return vt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vt.apply(this,arguments)};function jl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ye="-ms-",Js="-moz-",le="-webkit-",k1="comm",wc="rule",Uf="decl",qb="@import",I1="@keyframes",Xb="@layer",T1=Math.abs,zf=String.fromCharCode,zd=Object.assign;function Jb(t,e){return He(t,0)^45?(((e<<2^He(t,0))<<2^He(t,1))<<2^He(t,2))<<2^He(t,3):0}function N1(t){return t.trim()}function vn(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,n){return t.replace(e,n)}function Ua(t,e,n){return t.indexOf(e,n)}function He(t,e){return t.charCodeAt(e)|0}function Zi(t,e,n){return t.slice(e,n)}function on(t){return t.length}function b1(t){return t.length}function Os(t,e){return e.push(t),t}function Zb(t,e){return t.map(e).join("")}function Ig(t,e){return t.filter(function(n){return!vn(n,e)})}var Sc=1,es=1,P1=0,zt=0,Le=0,ms="";function Cc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Sc,column:es,length:o,return:"",siblings:a}}function Gn(t,e){return zd(Cc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ai(t){for(;t.root;)t=Gn(t.root,{children:[t]});Os(t,t.siblings)}function eP(){return Le}function tP(){return Le=zt>0?He(ms,--zt):0,es--,Le===10&&(es=1,Sc--),Le}function tn(){return Le=zt<P1?He(ms,zt++):0,es++,Le===10&&(es=1,Sc++),Le}function zr(){return He(ms,zt)}function za(){return zt}function Ec(t,e){return Zi(ms,t,e)}function Bd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nP(t){return Sc=es=1,P1=on(ms=t),zt=0,[]}function rP(t){return ms="",t}function fu(t){return N1(Ec(zt-1,Wd(t===91?t+2:t===40?t+1:t)))}function iP(t){for(;(Le=zr())&&Le<33;)tn();return Bd(t)>2||Bd(Le)>3?"":" "}function sP(t,e){for(;--e&&tn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ec(t,za()+(e<6&&zr()==32&&tn()==32))}function Wd(t){for(;tn();)switch(Le){case t:return zt;case 34:case 39:t!==34&&t!==39&&Wd(Le);break;case 40:t===41&&Wd(t);break;case 92:tn();break}return zt}function oP(t,e){for(;tn()&&t+Le!==57;)if(t+Le===84&&zr()===47)break;return"/*"+Ec(e,zt-1)+"*"+zf(t===47?t:tn())}function aP(t){for(;!Bd(zr());)tn();return Ec(t,zt)}function lP(t){return rP(Ba("",null,null,null,[""],t=nP(t),0,[0],t))}function Ba(t,e,n,r,i,s,o,a,l){for(var c=0,d=0,u=o,h=0,g=0,y=0,S=1,b=1,m=1,f=0,_="",v=i,E=s,x=r,C=_;b;)switch(y=f,f=tn()){case 40:if(y!=108&&He(C,u-1)==58){Ua(C+=Y(fu(f),"&","&\f"),"&\f",T1(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=fu(f);break;case 9:case 10:case 13:case 32:C+=iP(y);break;case 92:C+=sP(za()-1,7);continue;case 47:switch(zr()){case 42:case 47:Os(cP(oP(tn(),za()),e,n,l),l);break;default:C+="/"}break;case 123*S:a[c++]=on(C)*m;case 125*S:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:m==-1&&(C=Y(C,/\f/g,"")),g>0&&on(C)-u&&Os(g>32?Ng(C+";",r,n,u-1,l):Ng(Y(C," ","")+";",r,n,u-2,l),l);break;case 59:C+=";";default:if(Os(x=Tg(C,e,n,c,d,i,a,_,v=[],E=[],u,s),s),f===123)if(d===0)Ba(C,e,x,x,v,s,u,a,E);else switch(h===99&&He(C,3)===110?100:h){case 100:case 108:case 109:case 115:Ba(t,x,x,r&&Os(Tg(t,x,x,0,0,i,a,_,i,v=[],u,E),E),i,E,u,a,r?v:E);break;default:Ba(C,x,x,x,[""],E,0,a,E)}}c=d=g=0,S=m=1,_=C="",u=o;break;case 58:u=1+on(C),g=y;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&tP()==125)continue}switch(C+=zf(f),f*S){case 38:m=d>0?1:(C+="\f",-1);break;case 44:a[c++]=(on(C)-1)*m,m=1;break;case 64:zr()===45&&(C+=fu(tn())),h=zr(),d=u=on(_=C+=aP(za())),f++;break;case 45:y===45&&on(C)==2&&(S=0)}}return s}function Tg(t,e,n,r,i,s,o,a,l,c,d,u){for(var h=i-1,g=i===0?s:[""],y=b1(g),S=0,b=0,m=0;S<r;++S)for(var f=0,_=Zi(t,h+1,h=T1(b=o[S])),v=t;f<y;++f)(v=N1(b>0?g[f]+" "+_:Y(_,/&\f/g,g[f])))&&(l[m++]=v);return Cc(t,e,n,i===0?wc:a,l,c,d,u)}function cP(t,e,n,r){return Cc(t,e,n,k1,zf(eP()),Zi(t,2,-2),0,r)}function Ng(t,e,n,r,i){return Cc(t,e,n,Uf,Zi(t,0,r),Zi(t,r+1,-1),r,i)}function R1(t,e,n){switch(Jb(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 4789:return Js+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+Js+t+ye+t+t;case 5936:switch(He(t,e+11)){case 114:return le+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return le+t+ye+t+t;case 6165:return le+t+ye+"flex-"+t+t;case 5187:return le+t+Y(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+ye+"flex-$1$2")+t;case 5443:return le+t+ye+"flex-item-"+Y(t,/flex-|-self/g,"")+(vn(t,/flex-|baseline/)?"":ye+"grid-row-"+Y(t,/flex-|-self/g,""))+t;case 4675:return le+t+ye+"flex-line-pack"+Y(t,/align-content|flex-|-self/g,"")+t;case 5548:return le+t+ye+Y(t,"shrink","negative")+t;case 5292:return le+t+ye+Y(t,"basis","preferred-size")+t;case 6060:return le+"box-"+Y(t,"-grow","")+le+t+ye+Y(t,"grow","positive")+t;case 4554:return le+Y(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4200:if(!vn(t,/flex-|baseline/))return ye+"grid-column-align"+Zi(t,e)+t;break;case 2592:case 3360:return ye+Y(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,vn(r.props,/grid-\w+-end/)})?~Ua(t+(n=n[e].value),"span",0)?t:ye+Y(t,"-start","")+t+ye+"grid-row-span:"+(~Ua(n,"span",0)?vn(n,/\d+/):+vn(n,/\d+/)-+vn(t,/\d+/))+";":ye+Y(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return vn(r.props,/grid-\w+-start/)})?t:ye+Y(Y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(t)-1-e>6)switch(He(t,e+1)){case 109:if(He(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Js+(He(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ua(t,"stretch",0)?R1(Y(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ye+i+":"+s+c+(o?ye+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(He(t,e+6)===121)return Y(t,":",":"+le)+t;break;case 6444:switch(He(t,He(t,14)===45?18:11)){case 120:return Y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(He(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ye+"$2box$3")+t;case 100:return Y(t,":",":"+ye)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(t,"scroll-","scroll-snap-")+t}return t}function $l(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function uP(t,e,n,r){switch(t.type){case Xb:if(t.children.length)break;case qb:case Uf:return t.return=t.return||t.value;case k1:return"";case I1:return t.return=t.value+"{"+$l(t.children,r)+"}";case wc:if(!on(t.value=t.props.join(",")))return""}return on(n=$l(t.children,r))?t.return=t.value+"{"+n+"}":""}function dP(t){var e=b1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function hP(t){return function(e){e.root||(e=e.return)&&t(e)}}function fP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Uf:t.return=R1(t.value,t.length,n);return;case I1:return $l([Gn(t,{value:Y(t.value,"@","@"+le)})],r);case wc:if(t.length)return Zb(n=t.props,function(i){switch(vn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ai(Gn(t,{props:[Y(i,/:(read-\w+)/,":"+Js+"$1")]})),ai(Gn(t,{props:[i]})),zd(t,{props:Ig(n,r)});break;case"::placeholder":ai(Gn(t,{props:[Y(i,/:(plac\w+)/,":"+le+"input-$1")]})),ai(Gn(t,{props:[Y(i,/:(plac\w+)/,":"+Js+"$1")]})),ai(Gn(t,{props:[Y(i,/:(plac\w+)/,ye+"input-$1")]})),ai(Gn(t,{props:[i]})),zd(t,{props:Ig(n,r)});break}return""})}}var pP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It={},ts=typeof process<"u"&&It!==void 0&&(It.REACT_APP_SC_ATTR||It.SC_ATTR)||"data-styled",A1="active",D1="data-styled-version",xc="6.1.13",Bf=`/*!sc*/
`,Ul=typeof window<"u"&&"HTMLElement"in window,mP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==""?It.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&It.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.SC_DISABLE_SPEEDY!==void 0&&It.SC_DISABLE_SPEEDY!==""&&It.SC_DISABLE_SPEEDY!=="false"&&It.SC_DISABLE_SPEEDY),kc=Object.freeze([]),ns=Object.freeze({});function gP(t,e,n){return n===void 0&&(n=ns),t.theme!==n.theme&&t.theme||e||n.theme}var L1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_P=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yP=/(^-|-$)/g;function bg(t){return t.replace(_P,"-").replace(yP,"")}var vP=/(a)(d)/gi,_a=52,Pg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hd(t){var e,n="";for(e=Math.abs(t);e>_a;e=e/_a|0)n=Pg(e%_a)+n;return(Pg(e%_a)+n).replace(vP,"$1-$2")}var pu,O1=5381,xi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},M1=function(t){return xi(O1,t)};function wP(t){return Hd(M1(t)>>>0)}function SP(t){return t.displayName||t.name||"Component"}function mu(t){return typeof t=="string"&&!0}var F1=typeof Symbol=="function"&&Symbol.for,j1=F1?Symbol.for("react.memo"):60115,CP=F1?Symbol.for("react.forward_ref"):60112,EP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kP=((pu={})[CP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pu[j1]=$1,pu);function Rg(t){return("type"in(e=t)&&e.type.$$typeof)===j1?$1:"$$typeof"in t?kP[t.$$typeof]:EP;var e}var IP=Object.defineProperty,TP=Object.getOwnPropertyNames,Ag=Object.getOwnPropertySymbols,NP=Object.getOwnPropertyDescriptor,bP=Object.getPrototypeOf,Dg=Object.prototype;function U1(t,e,n){if(typeof e!="string"){if(Dg){var r=bP(e);r&&r!==Dg&&U1(t,r,n)}var i=TP(e);Ag&&(i=i.concat(Ag(e)));for(var s=Rg(t),o=Rg(e),a=0;a<i.length;++a){var l=i[a];if(!(l in xP||n&&n[l]||o&&l in o||s&&l in s)){var c=NP(e,l);try{IP(t,l,c)}catch{}}}}return t}function rs(t){return typeof t=="function"}function Wf(t){return typeof t=="object"&&"styledComponentId"in t}function Fr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Lg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function bo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Vd(t,e,n){if(n===void 0&&(n=!1),!n&&!bo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Vd(t[r],e[r]);else if(bo(e))for(var r in e)t[r]=Vd(t[r],e[r]);return t}function Hf(t,e){Object.defineProperty(t,"toString",{value:e})}function Go(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var PP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Go(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Bf);return n},t}(),Wa=new Map,zl=new Map,Ha=1,ya=function(t){if(Wa.has(t))return Wa.get(t);for(;zl.has(Ha);)Ha++;var e=Ha++;return Wa.set(t,e),zl.set(e,t),e},RP=function(t,e){Ha=e+1,Wa.set(t,e),zl.set(e,t)},AP="style[".concat(ts,"][").concat(D1,'="').concat(xc,'"]'),DP=new RegExp("^".concat(ts,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},OP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Bf),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(DP);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(RP(d,c),LP(t,d,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Og=function(t){for(var e=document.querySelectorAll(AP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ts)!==A1&&(OP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function MP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var z1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ts,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ts,A1),r.setAttribute(D1,xc);var o=MP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},FP=function(){function t(e){this.element=z1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Go(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),jP=function(){function t(e){this.element=z1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),$P=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Mg=Ul,UP={isServer:!Ul,useCSSOMInjection:!mP},B1=function(){function t(e,n,r){e===void 0&&(e=ns),n===void 0&&(n={});var i=this;this.options=vt(vt({},UP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ul&&Mg&&(Mg=!1,Og(this)),Hf(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(u){var h=function(m){return zl.get(m)}(u);if(h===void 0)return"continue";var g=s.names.get(h),y=o.getGroup(u);if(g===void 0||!g.size||y.length===0)return"continue";var S="".concat(ts,".g").concat(u,'[id="').concat(h,'"]'),b="";g!==void 0&&g.forEach(function(m){m.length>0&&(b+="".concat(m,","))}),l+="".concat(y).concat(S,'{content:"').concat(b,'"}').concat(Bf)},d=0;d<a;d++)c(d);return l}(i)})}return t.registerId=function(e){return ya(e)},t.prototype.rehydrate=function(){!this.server&&Ul&&Og(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(vt(vt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $P(i):r?new FP(i):new jP(i)}(this.options),new PP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ya(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ya(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ya(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),zP=/&/g,BP=/^\s*\/\/.*$/gm;function W1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=W1(n.children,e)),n})}function WP(t){var e,n,r,i=ns,s=i.options,o=s===void 0?ns:s,a=i.plugins,l=a===void 0?kc:a,c=function(h,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},d=l.slice();d.push(function(h){h.type===wc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(zP,n).replace(r,c))}),o.prefix&&d.push(fP),d.push(uP);var u=function(h,g,y,S){g===void 0&&(g=""),y===void 0&&(y=""),S===void 0&&(S="&"),e=S,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=h.replace(BP,""),m=lP(y||g?"".concat(y," ").concat(g," { ").concat(b," }"):b);o.namespace&&(m=W1(m,o.namespace));var f=[];return $l(m,dP(d.concat(hP(function(_){return f.push(_)})))),f};return u.hash=l.length?l.reduce(function(h,g){return g.name||Go(15),xi(h,g.name)},O1).toString():"",u}var HP=new B1,Gd=WP(),H1=Fi.createContext({shouldForwardProp:void 0,styleSheet:HP,stylis:Gd});H1.Consumer;Fi.createContext(void 0);function Fg(){return I.useContext(H1)}var VP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Gd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hf(this,function(){throw Go(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gd),this.name+e.hash},t}(),GP=function(t){return t>="A"&&t<="Z"};function jg(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;GP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var V1=function(t){return t==null||t===!1||t===""},G1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!V1(s)&&(Array.isArray(s)&&s.isCss||rs(s)?r.push("".concat(jg(i),":"),s,";"):bo(s)?r.push.apply(r,jl(jl(["".concat(i," {")],G1(s),!1),["}"],!1)):r.push("".concat(jg(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in pP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Br(t,e,n,r){if(V1(t))return[];if(Wf(t))return[".".concat(t.styledComponentId)];if(rs(t)){if(!rs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Br(i,e,n,r)}var s;return t instanceof VP?n?(t.inject(n,r),[t.getName(r)]):[t]:bo(t)?G1(t):Array.isArray(t)?Array.prototype.concat.apply(kc,t.map(function(o){return Br(o,e,n,r)})):[t.toString()]}function KP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(rs(n)&&!Wf(n))return!1}return!0}var YP=M1(xc),QP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KP(e),this.componentId=n,this.baseHash=xi(YP,n),this.baseStyle=r,B1.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fr(i,this.staticRulesId);else{var s=Lg(Br(this.rules,e,n,r)),o=Hd(xi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Fr(i,o),this.staticRulesId=o}else{for(var l=xi(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var u=this.rules[d];if(typeof u=="string")c+=u;else if(u){var h=Lg(Br(u,e,n,r));l=xi(l,h+d),c+=h}}if(c){var g=Hd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Fr(i,g)}}return i},t}(),K1=Fi.createContext(void 0);K1.Consumer;var gu={};function qP(t,e,n){var r=Wf(t),i=t,s=!mu(t),o=e.attrs,a=o===void 0?kc:o,l=e.componentId,c=l===void 0?function(v,E){var x=typeof v!="string"?"sc":bg(v);gu[x]=(gu[x]||0)+1;var C="".concat(x,"-").concat(wP(xc+x+gu[x]));return E?"".concat(E,"-").concat(C):C}(e.displayName,e.parentComponentId):l,d=e.displayName,u=d===void 0?function(v){return mu(v)?"styled.".concat(v):"Styled(".concat(SP(v),")")}(t):d,h=e.displayName&&e.componentId?"".concat(bg(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;y=function(v,E){return S(v,E)&&b(v,E)}}else y=S}var m=new QP(n,h,r?i.componentStyle:void 0);function f(v,E){return function(x,C,O){var G=x.attrs,H=x.componentStyle,ke=x.defaultProps,Se=x.foldedComponentIds,Je=x.styledComponentId,pt=x.target,mt=Fi.useContext(K1),xt=Fg(),Ze=x.shouldForwardProp||xt.shouldForwardProp,A=gP(C,mt,ke)||ns,M=function(V,U,te){for(var ue,Ie=vt(vt({},U),{className:void 0,theme:te}),B=0;B<V.length;B+=1){var ae=rs(ue=V[B])?ue(Ie):ue;for(var ne in ae)Ie[ne]=ne==="className"?Fr(Ie[ne],ae[ne]):ne==="style"?vt(vt({},Ie[ne]),ae[ne]):ae[ne]}return U.className&&(Ie.className=Fr(Ie.className,U.className)),Ie}(G,C,A),$=M.as||pt,oe={};for(var re in M)M[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&M.theme===A||(re==="forwardedAs"?oe.as=M.forwardedAs:Ze&&!Ze(re,$)||(oe[re]=M[re]));var P=function(V,U){var te=Fg(),ue=V.generateAndInjectStyles(U,te.styleSheet,te.stylis);return ue}(H,M),F=Fr(Se,Je);return P&&(F+=" "+P),M.className&&(F+=" "+M.className),oe[mu($)&&!L1.has($)?"class":"className"]=F,oe.ref=O,I.createElement($,oe)}(_,v,E)}f.displayName=u;var _=Fi.forwardRef(f);return _.attrs=g,_.componentStyle=m,_.displayName=u,_.shouldForwardProp=y,_.foldedComponentIds=r?Fr(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=h,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var O=0,G=x;O<G.length;O++)Vd(E,G[O],!0);return E}({},i.defaultProps,v):v}}),Hf(_,function(){return".".concat(_.styledComponentId)}),s&&U1(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function $g(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ug=function(t){return Object.assign(t,{isCss:!0})};function XP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(rs(t)||bo(t))return Ug(Br($g(kc,jl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Br(r):Ug(Br($g(r,e)))}function Kd(t,e,n){if(n===void 0&&(n=ns),!e)throw Go(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,XP.apply(void 0,jl([i],s,!1)))};return r.attrs=function(i){return Kd(t,e,vt(vt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Kd(t,e,vt(vt({},n),i))},r}var Y1=function(t){return Kd(qP,t)},R=Y1;L1.forEach(function(t){R[t]=Y1(t)});const JP=t=>{switch(t){case 0:return"var(--input-background-color)";case 1:return"green";case 2:return"red"}},zg=R.div`
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
`,Bg=R.form`
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
`,_u=R.div`
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
`,Vn=R.div`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
    margin-bottom: 5px;
  }
`,ZP=R.div`
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
`,eR=R.input`
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
`,tR=R.div`
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
`,va=R.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,nR=R.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`,rR=R.header`
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
`,yu=R.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`,ot=R.button`
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
  border-color: ${t=>JP(t.handleState)};

  &:hover {
    background: var(--hover-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 44px;
    font-size: 16px;
  }
`,iR=R.button`
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
`,sR=R.button`
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
`,oR=R.input`
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
`,aR=R.div`
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
`,Wg=R.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`,li=R.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`,lR=R.div`
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
`;R.div`
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;const cR=R.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`,uR=R.div`
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
`,Hg=R.button`
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
`,dR=R.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,wa=R.button`
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
`,hR=R.div`
  padding: 20px;
  background: ${t=>t.theme==="dark"?"#2d2d2d":"#ffffff"};
  border-radius: 12px;
  min-width: 300px;
`,fR=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 18px;
    text-transform: capitalize;
  }
`,pR=R.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 15px;
`,mR=R.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 8px;
  color: ${t=>t.theme==="dark"?"#aaa":"#666"};
`,gR=R.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,_R=R.button`
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
`,yR=R.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${t=>t.theme==="dark"?"#4a90e2":"#007bff"};
`,Vg=({handleInputChange:t,inputValue:e})=>p.jsx("div",{children:p.jsx(eR,{required:!0,type:"text",value:e,onChange:t})}),Q1=async()=>{try{const e=await(await fetch("https://www.vgtk.by/schedule/lessons/day-today.php")).text(),n=document.createElement("div");n.innerHTML=e;const r=n.querySelector("table");(u=>{for(let h=0;h<u.rows.length;h++){let g=u.rows[h];for(let y=0;y<g.cells.length;y++){let S=g.cells[y],b=parseInt(S.getAttribute("rowspan"));if(S.hasAttribute("rowspan")&&b>1){let m=S.cloneNode(!0);S.removeAttribute("rowspan");for(let f=1;f<b;f++){let _=u.rows[h+f];if(_&&y<=_.cells.length){let v=_.insertCell(y);v.innerHTML=m.innerHTML}}}}}})(r);const s=new Set,o=new Map,a=/^[А-Я]{1,3}-\d{2,3}$/,l=/^[А-Я\s.]+$/;let c=null;for(let u=0;u<r.rows.length;u++){const h=r.rows[u],g=h.cells[0];if(g){const y=g.innerText.trim();l.test(y)&&y.length>5&&(c=y,o.has(c)||o.set(c,[]))}Array.from(h.cells).forEach(y=>{const S=y.innerText.trim();if(a.test(S)&&c){s.add(S);const b=o.get(c);b&&!b.includes(S)&&b.push(S)}})}o.forEach((u,h)=>{o.set(h,u.sort())});const d=Object.fromEntries(o);return{allGroups:Array.from(s).sort(),groupsByDepartment:d}}catch(t){return console.error("Ошибка при парсинге групп:",t),{allGroups:[],groupsByDepartment:{}}}};let vu=[],Zs={};const vR=async()=>{const t=await Q1();return vu=t.allGroups,Zs=t.groupsByDepartment,console.log("Загружены группы:",vu),console.log("Группы по отделениям:",Zs),{allGroups:vu,groupsByDepartment:Zs}};vR();const wu=R.select`
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
`,wR=({handleSelectChange:t,selectValue:e})=>{const[n,r]=I.useState([]),[i,s]=I.useState(!0),[o,a]=I.useState(null);return I.useEffect(()=>{(async()=>{try{s(!0);const c=await Q1();r(c.allGroups),a(null)}catch(c){console.error("Ошибка загрузки групп:",c),a("Не удалось загрузить список групп")}finally{s(!1)}})()},[]),i?p.jsx(wu,{type:"text",required:!0,disabled:!0,children:p.jsx("option",{children:"Загрузка групп..."})}):o?p.jsx(wu,{type:"text",required:!0,disabled:!0,children:p.jsx("option",{children:o})}):p.jsxs(wu,{type:"text",required:!0,value:e,onChange:t,children:[p.jsx("option",{value:"",disabled:!0,selected:!e,hidden:!0,children:"Группа"}),n.map(l=>p.jsx("option",{value:l,children:l},l))]})},SR=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`,Gg=({handleCheckBoxChange:t,label:e})=>p.jsx("label",{children:p.jsxs(SR,{children:[p.jsx("div",{children:e}),p.jsx("input",{onChange:t,type:"checkbox"})]})});var q1={exports:{}},CR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ER=CR,xR=ER;function X1(){}function J1(){}J1.resetWarningCache=X1;var kR=function(){function t(r,i,s,o,a,l){if(l!==xR){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J1,resetWarningCache:X1};return n.PropTypes=n,n};q1.exports=kR();var IR=q1.exports;const Rr=Qd(IR),Vf=Fi.memo(({handleChangeTheme:t,theme:e})=>p.jsx(p.Fragment,{children:p.jsxs("label",{className:"switch",children:[p.jsx("input",{onChange:t,type:"checkbox",className:"themeSwitcher",checked:e==="light"}),p.jsx("span",{className:"slider"})]})}));Vf.displayName="ThemeSwitcher";Vf.propTypes={handleChangeTheme:Rr.func,theme:Rr.string};const TR=""+new URL("gerb-EUG4mf70.png",import.meta.url).href,NR=""+new URL("inco-Cw7QgD9S.png",import.meta.url).href;function bR(){const t=I.useRef(null),[e,n]=I.useState(null);return I.useEffect(()=>{const r=document.createElement("div");return t.current=r,document.body.appendChild(r),t.current&&n(t.current),()=>{document.body.removeChild(r)}},[]),e}const Sn=({active:t,setActive:e,children:n})=>{const r=()=>{e(!1)},i=bR();return i&&QC.createPortal(p.jsx("div",{className:t?"modal active":"modal",onClick:r,children:p.jsx("div",{className:t?"modal_content active":"modal_content",onClick:s=>s.stopPropagation(),children:n})}),i)};Sn.propTypes={active:Rr.bool,setActive:Rr.func,children:Rr.oneOfType([Rr.object,Rr.array])};const PR=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,RR=PR?"dark":"light",AR=()=>{const[t,e]=I.useState(localStorage.getItem("app-theme")||RR);return I.useLayoutEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("app-theme",t)},[t]),{theme:t,setTheme:e}};var Ge=[];for(var Su=0;Su<256;++Su)Ge.push((Su+256).toString(16).slice(1));function DR(t,e=0){return(Ge[t[e+0]]+Ge[t[e+1]]+Ge[t[e+2]]+Ge[t[e+3]]+"-"+Ge[t[e+4]]+Ge[t[e+5]]+"-"+Ge[t[e+6]]+Ge[t[e+7]]+"-"+Ge[t[e+8]]+Ge[t[e+9]]+"-"+Ge[t[e+10]]+Ge[t[e+11]]+Ge[t[e+12]]+Ge[t[e+13]]+Ge[t[e+14]]+Ge[t[e+15]]).toLowerCase()}var Sa,LR=new Uint8Array(16);function OR(){if(!Sa&&(Sa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Sa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Sa(LR)}var MR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Kg={randomUUID:MR};function FR(t,e,n){if(Kg.randomUUID&&!e&&!t)return Kg.randomUUID();t=t||{};var r=t.random||(t.rng||OR)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,DR(r)}const Cu={1:"09.00 - 09.45",2:"09.55 - 10.40",3:"10.50 - 11.35",4:"11.45 - 12.30",5:"12.40 - 13.25",6:"13.35 - 14.20",7:"14.30 - 15.15",8:"15.25 - 16.10",9:"16.20 - 17.05",10:"17.15 - 18.00",11:"18.10 - 18.55"},jR=R.button`
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
`,$R=({handleClick:t,displayName:e,displayNameAlt:n})=>{const[r,i]=I.useState(!1),s=()=>{t(),i(o=>!o)};return p.jsx(jR,{isToggled:r,onClick:s,children:r?e||"Название":n||"Алтернативное название"})};/*! *****************************************************************************
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
***************************************************************************** */function UR(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{c(r.next(d))}catch(u){o(u)}}function l(d){try{c(r.throw(d))}catch(u){o(u)}}function c(d){d.done?s(d.value):i(d.value).then(a,l)}c((r=r.apply(t,[])).next())})}function zR(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var ki=function(){return ki=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ki.apply(this,arguments)},Z1=function(t){return{loading:t==null,value:t}},BR=function(){return function(t,e){switch(e.type){case"error":return ki(ki({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Z1(e.defaultValue);case"value":return ki(ki({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},WR=function(t){var e=t?t():void 0,n=I.useReducer(BR(),Z1(e)),r=n[0],i=n[1],s=I.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=I.useCallback(function(l){i({type:"error",error:l})},[]),a=I.useCallback(function(l){i({type:"value",value:l})},[]);return I.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},HR=function(t,e){var n=WR(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return I.useEffect(function(){var l=Sk(t,function(c){return UR(void 0,void 0,void 0,function(){var d;return zR(this,function(u){switch(u.label){case 0:return[3,4];case 1:return u.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return u.sent(),[3,4];case 3:return d=u.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const VR=R.div`
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
`,GR=R.div`
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
`,KR=R.h2`
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
`,YR=R.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 12px;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 10px;
    border-radius: 8px;
  }
`,QR=R.table`
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
`,qR=R.th`
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
`,Yg=R.th`
  width: 55px;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 45px;
    font-size: 12px;
    min-width: 40px;
  }
`,XR=R.td`
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
`,JR=R.td`
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
`,ZR=R.div`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,eA=R.div`
  position: absolute;
  right: 2px;
  bottom: 2px;
  font-size: 10px;
  opacity: 0.8;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`,Eu=R.td`
  text-align: center;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"transparent"};
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    min-width: 50px;
  }
`,tA=R.td`
  position: sticky;
  left: 0;
  font-weight: bold;
  background: ${({$isHovered:t})=>t?"rgba(199, 18, 18, 0.301)":"#efefef"};
  z-index: 2;
  border: 2px solid #999;
  transition: background 0.2s ease;
`,nA=R.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Qg=R.h3`
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`,rA=R.div`
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
`,xu=R.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`,qg=R.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,Xg=R.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`,ci=R.button`
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
`,iA=R.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #000;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`,sA=R.h4`
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`,oA=R.div`
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
`,aA=R.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`,lA=R.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    min-height: 44px;
  }
`,cA=R.div`
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
`;function uA(t){if(!(t instanceof Date)||isNaN(t))return"";const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${n}-${r}`}function Yd(t){const[e,n,r]=t.split("-").map(Number);return new Date(Date.UTC(r,n-1,e))}function dA(t){return!t||t.length===0?1:t.reduce((n,r)=>Math.max(n,r.id||0),0)+1}function hA(t=""){return typeof t=="string"&&t.trim().startsWith("П")}function fA(t){return[...t].sort((e,n)=>Yd(e)-Yd(n))}const pA=({rawData:t,onRawDataChange:e,userTarification:n})=>{const[r,i]=I.useState(()=>{const P=new Date;return new Date(P.getFullYear(),P.getMonth(),1)}),[s,o]=I.useState(!1),[a,l]=I.useState(!1),[c,d]=I.useState(""),[u,h]=I.useState({date:"",lessonName:"",groupName:"",total:0}),[g,y]=I.useState([]),[S,b]=I.useState({isLab:!1,cabinet:""}),[m,f]=I.useState(null),[_,v]=I.useState(null),{datesInMonth:E,rows:x,totalsByDate:C,grandTotal:O}=I.useMemo(()=>{const P=Object.keys(t||{}),F=fA(P),V=F.map(B=>({ds:B,date:Yd(B)})).filter(({date:B})=>B.getFullYear()===r.getFullYear()&&B.getMonth()===r.getMonth()).map(B=>B.ds),U=new Set;(n||[]).forEach(B=>{B&&U.add(`${B.lesson}|||${B.groupName}`)}),Object.values(t||{}).flat().forEach(B=>{B&&B.lessonName&&B.groupName&&U.add(`${B.lessonName}|||${B.groupName}`)});const te=Array.from(U).map(B=>{const[ae,ne]=B.split("|||"),mn=hA(ne),gn=[];F.forEach(Me=>{(Array.isArray(t[Me])?t[Me]:[]).filter(kt=>kt.lessonName===ae&&kt.groupName===ne).sort((kt,Un)=>(kt.id||0)-(Un.id||0)).forEach(kt=>gn.push({item:kt,ds:Me}))});const $n=new Map;let et=0,_n=0;gn.forEach(({item:Me,ds:ii},kt)=>{mn?(et+=1,$n.set(`${ii}-${Me.id}`,et)):(_n+=1,_n===1&&(et+=1),$n.set(`${ii}-${Me.id}`,et),_n===2&&(_n=0))});const Ko={};let Yo=et;return V.forEach(Me=>{const kt=(Array.isArray(t[Me])?t[Me]:[]).filter(Bt=>Bt.lessonName===ae&&Bt.groupName===ne),Un=kt.filter(Bt=>Bt.isLab).length,zn=kt.filter(Bt=>!Bt.isLab).length,kr=Un+zn,st=new Set;kt.forEach(Bt=>{const Re=$n.get(`${Me}-${Bt.id}`);Re&&st.add(Re)}),Ko[Me]={labs:Un,lectures:zn,total:kr,indices:Array.from(st).sort((Bt,Re)=>Bt-Re)}}),{lessonName:ae,groupName:ne,cells:Ko,sum:Yo}}),ue={};let Ie=0;return V.forEach(B=>{const ae=te.reduce((ne,mn)=>{var gn;return ne+(((gn=mn.cells[B])==null?void 0:gn.total)||0)},0);ue[B]=ae,Ie+=ae}),{datesInMonth:V,rows:te,totalsByDate:ue,grandTotal:Ie}},[t,r,n]),G=()=>i(P=>new Date(P.getFullYear(),P.getMonth()-1,1)),H=()=>i(P=>new Date(P.getFullYear(),P.getMonth()+1,1)),ke=({labs:P,lectures:F})=>P>0&&F>0?"linear-gradient(25deg, rgb(255,122,92) 50%, rgb(102,153,204) 50%)":P>0?"rgb(255,122,92)":F>0?"rgb(102,153,204)":"transparent",Se="rgba(199, 18, 18, 0.301)",Je=(P,F,V)=>{const U=ke(P);return m===F||_===V?{background:U,boxShadow:`inset 0 0 0 1000px ${Se}`}:{background:U}},pt=(P,F,V,U)=>{const te=Array.isArray(t[P])?t[P].filter(ue=>ue.lessonName===F&&ue.groupName===V):[];h({date:P,lessonName:F,groupName:V,total:U}),y(te),b({isLab:!1,cabinet:""}),o(!0)},mt=async P=>{var $n;const F=($n=Q==null?void 0:Q.currentUser)==null?void 0:$n.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:V,lessonName:U,groupName:te,isLab:ue,cabinet:Ie}=P,B=t[V]||[],ne={id:dA(B),lessonName:U,groupName:te,isLab:ue,cabinet:Ie},mn=[...B,ne];e(et=>({...et,[V]:mn}));const gn=`users/${F}/hours/${V}`;try{await ln(de(De,gn),mn),console.log(`Урок ${ne.id} добавлен на ${V} и отправлен в DB.`),s&&u.date===V&&y(et=>[...et,ne])}catch(et){console.error("Ошибка при добавлении урока в Firebase:",et),alert("Ошибка при добавлении урока."),e(_n=>({..._n,[V]:B}))}},xt=async(P,F)=>{var B;const V=(B=Q==null?void 0:Q.currentUser)==null?void 0:B.uid;if(!V){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:U}=u;if(!U||!Array.isArray(t[U]))return;const te=t[U],ue=te.map(ae=>ae.id===P?{...ae,...F}:ae);e(ae=>({...ae,[U]:ue}));const Ie=`users/${V}/hours/${U}`;try{await ln(de(De,Ie),ue),console.log(`Урок ${P} на ${U} обновлен в DB.`),y(ae=>ae.map(ne=>ne.id===P?{...ne,...F}:ne))}catch(ae){console.error("Ошибка при обновлении урока в Firebase:",ae),alert("Ошибка при обновлении урока."),e(ne=>({...ne,[U]:te}))}},Ze=async P=>{var Ie;const F=(Ie=Q==null?void 0:Q.currentUser)==null?void 0:Ie.uid;if(!F){console.error("Пользователь не авторизован."),alert("Пожалуйста, авторизуйтесь.");return}const{date:V}=u;if(!V||!Array.isArray(t[V]))return;const U=t[V],te=U.filter(B=>B.id!==P);e(B=>({...B,[V]:te}));const ue=`users/${F}/hours/${V}`;try{te.length===0?await ln(de(De,ue),null):await ln(de(De,ue),te),console.log(`Урок ${P} на ${V} удален из DB.`),y(B=>B.filter(ae=>ae.id!==P)),te.length===0&&o(!1)}catch(B){console.error("Ошибка при удалении урока из Firebase:",B),alert("Ошибка при удалении урока."),e(ae=>({...ae,[V]:U}))}},A=(P,F,V)=>{const U=[...g];U[P]={...U[P],[F]:V},y(U)},M=P=>xt(P.id,{isLab:P.isLab,cabinet:P.cabinet}),$=P=>Ze(P.id),oe=()=>{mt({date:u.date,lessonName:u.lessonName,groupName:u.groupName,isLab:S.isLab,cabinet:S.cabinet}),b({isLab:!1,cabinet:""})},re=()=>{if(!c){alert("Пожалуйста, выберите дату.");return}if(Object.keys(t).includes(c)){alert("Дата уже существует в таблице.");return}e(P=>({...P,[c]:[]})),l(!1),console.log(`Дата ${c} добавлена локально.`)};return p.jsxs(VR,{children:[p.jsxs(GR,{children:[p.jsx(ot,{onClick:G,children:"← Пред. месяц"}),p.jsxs(KR,{children:["Расписание за"," ",r.toLocaleString("ru-RU",{month:"long",year:"numeric"})]}),p.jsx(ot,{onClick:H,children:"След. месяц →"}),p.jsx(ot,{onClick:()=>{l(!0),d("")},children:"Добавить дату"})]}),p.jsx(YR,{children:p.jsxs(QR,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(qR,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Предмет / Группа"}),E.map(P=>p.jsx(Yg,{$isHovered:m===P,onMouseEnter:()=>f(P),onMouseLeave:()=>f(null),children:P},P)),p.jsx(Yg,{$isHovered:_==="header-row-key",onMouseEnter:()=>v("header-row-key"),onMouseLeave:()=>v(null),children:"Итого (занятий)"})]})}),p.jsx("tbody",{children:x.map(({lessonName:P,groupName:F,cells:V,sum:U})=>{const te=`${P}|||${F}`;return p.jsxs("tr",{onMouseEnter:()=>v(te),onMouseLeave:()=>v(null),children:[p.jsxs(XR,{$isHovered:_===te,children:[P,p.jsx("br",{}),p.jsxs("small",{children:["(",F,")"]})]}),E.map(ue=>{const{labs:Ie,lectures:B,total:ae,indices:ne}=V[ue]||{labs:0,lectures:0,total:0,indices:[]};return p.jsxs(JR,{onClick:()=>pt(ue,P,F,C[ue]),style:Je({labs:Ie,lectures:B},ue,te),onMouseEnter:()=>{f(ue),v(te)},onMouseLeave:()=>{f(null),v(null)},children:[p.jsx(ZR,{children:ae||""}),ne&&ne.length>0&&p.jsx(eA,{children:ne.join(",")})]},ue)}),p.jsx(Eu,{$isHovered:_===te,children:U})]},te)})}),p.jsx("tfoot",{children:p.jsxs("tr",{onMouseEnter:()=>v("footer-row-key"),onMouseLeave:()=>v(null),children:[p.jsx(tA,{$isHovered:_==="footer-row-key",children:"Всего часов по дням:"}),E.map(P=>p.jsx(Eu,{$isHovered:m===P||_==="footer-row-key",onMouseEnter:()=>{f(P),v("footer-row-key")},onMouseLeave:()=>{f(null),v(null)},children:C[P]},P)),p.jsx(Eu,{$isHovered:_==="footer-row-key",children:O})]})})]})}),p.jsx(Sn,{active:s,setActive:o,children:p.jsxs(nA,{children:[p.jsxs(Qg,{children:[u.lessonName," (",u.groupName,")",p.jsx("br",{}),"Дата: ",u.date]}),g.length>0?g.map((P,F)=>p.jsxs(rA,{children:[p.jsxs(xu,{children:[p.jsxs(qg,{value:P.isLab?"lab":"lec",onChange:V=>A(F,"isLab",V.target.value==="lab"),children:[p.jsx("option",{value:"lec",children:"Лекция"}),p.jsx("option",{value:"lab",children:"Лабораторная"})]}),p.jsx(Xg,{type:"text",value:P.cabinet||"",onChange:V=>A(F,"cabinet",V.target.value),placeholder:"Кабинет"})]}),p.jsxs(xu,{children:[p.jsx(ci,{$variant:"primary",onClick:()=>M(g[F]),children:"Сохранить"}),p.jsx(ci,{$variant:"danger",onClick:()=>$(P),children:"Удалить"})]})]},P.id)):p.jsx("p",{children:"Пока нет занятий по этому предмету и группе на эту дату."}),p.jsxs(iA,{children:[p.jsx(sA,{children:"Добавить занятие"}),p.jsxs(xu,{children:[p.jsxs(qg,{value:S.isLab?"lab":"lec",onChange:P=>b(F=>({...F,isLab:P.target.value==="lab"})),children:[p.jsx("option",{value:"lec",children:"Лекция"}),p.jsx("option",{value:"lab",children:"Лабораторная"})]}),p.jsx(Xg,{type:"text",value:S.cabinet,onChange:P=>b(F=>({...F,cabinet:P.target.value})),placeholder:"Кабинет"})]}),p.jsx(ci,{$variant:"success",onClick:oe,children:"Добавить"})]}),p.jsx(oA,{children:p.jsx(ci,{onClick:()=>o(!1),children:"Закрыть"})})]})}),p.jsx(Sn,{active:a,setActive:l,children:p.jsxs(aA,{children:[p.jsx(Qg,{children:"Выберите дату для добавления"}),p.jsx(lA,{type:"date",onChange:P=>{const F=P.target.valueAsDate;d(F?uA(F):"")}}),p.jsxs(cA,{children:[p.jsx(ci,{$variant:"success",onClick:re,disabled:!c,children:"Добавить"}),p.jsx(ci,{onClick:()=>l(!1),children:"Отмена"})]})]})})]})},mA={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#e6f3ff","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#fff0e6","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#e6ffe6","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#ffe6e6","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#e6e6ff","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#fff4e6","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#f0e6ff","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#ffe6f0"},gA={"ОТДЕЛЕНИЕ АРХИТЕКТУРЫ И ГРАДОСТРОИТЕЛЬСТВА":"#1a3b4f","ОТДЕЛЕНИЕ АВТОСЕРВИСА И ЭЛЕКТРОННЫХ СИСТЕМ":"#4f3b1a","ОТДЕЛЕНИЕ АВТОМАТИЗАЦИИ И МАШИНОСТРОЕНИЯ":"#1a4f1a","ОТДЕЛЕНИЕ РОБОТОТЕХНИКИ И АВТОМАТИЗАЦИИ ПРОИЗВОДСТВ":"#4f1a1a","ОТДЕЛЕНИЕ СВАРОЧНЫХ И АВТОМОБИЛЬНЫХ ТЕХНОЛОГИЙ":"#1a1a4f","ОТДЕЛЕНИЕ ТРАНСПОРТА":"#4f3d1a","ОТДЕЛЕНИЕ ЭЛЕКТРОНИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ":"#2d1a4f","ОТДЕЛЕНИЕ СТРОИТЕЛЬНЫХ ТЕХНОЛОГИЙ":"#4f1a3b"},_A=t=>{console.log("Поиск отделения для группы:",t),console.log("Доступные отделения:",Zs);for(const[e,n]of Object.entries(Zs))if(n.includes(t))return console.log("Найдено отделение:",e),e;return console.log("Отделение не найдено для группы:",t),null},Jg=R.div`
  padding: 10px;
  max-width: 100%;
`,Zg=R.input`
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
`,yA=R.div`
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
`,vA=R.div`
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
`,wA=R.div`
  background: ${({theme:t,$departmentColor:e,$darkDepartmentColor:n})=>(console.log("GroupTitle props:",{theme:t,$departmentColor:e,$darkDepartmentColor:n}),t==="dark"&&n?(console.log("Используем темный цвет:",n),n):t==="light"&&e?(console.log("Используем светлый цвет:",e),e):(console.log("Используем цвет по умолчанию"),t==="dark"?"#3d3d3d":"#f5f5f5"))};
  padding: 12px 15px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid
    ${({theme:t})=>t==="dark"?"#444":"#e0e0e0"};

  /* Добавляем небольшой контраст для текста в темной теме */
  color: ${({theme:t,$darkDepartmentColor:e})=>t==="dark"&&e?"#fff":"inherit"};
`,SA=R.div`
  display: flex;
  flex-direction: column;
`,CA=R.div`
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
`,EA=R.div`
  width: 40px;
  font-weight: bold;
  color: ${({theme:t})=>t==="dark"?"#aaa":"#666"};
`,xA=R.div`
  flex: 1;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,kA=R.div`
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
`,e_=R.div`
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
`,IA=R.div`
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
`,t_=R.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    color: #4a90e2;
    font-size: 18px;
  }
`,TA=({schedule:t,dateSchedule:e,theme:n="light"})=>{const[r,i]=I.useState(""),[s,o]=I.useState(0),[a,l]=I.useState(!1);if(console.log("AllGroupsSchedule рендер, theme:",n),!t||!Array.isArray(t)||t.length===0)return p.jsxs(Jg,{children:[p.jsx(Zg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),p.jsx(e_,{children:"Нет данных о расписании"})]});const c=t.filter(d=>{if(!d)return!1;const u=d.groupName||"",h=r.toLowerCase(),g=u.toLowerCase().includes(h),S=(d.lessons||[]).some(b=>b?(b.lessonName||"").toLowerCase().includes(h):!1);return g||S});return I.useEffect(()=>{l(!0),o(c.length);const d=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(d)},[c.length]),p.jsxs(Jg,{children:[p.jsx(Zg,{theme:n,placeholder:"🔍 Поиск группы или предмета...",value:r,onChange:d=>i(d.target.value)}),p.jsxs(IA,{theme:n,children:[p.jsxs(t_,{children:["📊 Найдено групп: ",p.jsx("span",{children:c.length})]}),r&&p.jsxs(t_,{children:['🔍 Поиск: "',r,'"']})]}),p.jsx(yA,{className:a?"searching":"",children:c.map((d,u)=>{const h=d.groupName||`Группа ${u+1}`,g=d.lessons||[],y=_A(h);console.log(`Группа ${h}: отделение =`,y);const S=y?mA[y]:null,b=y?gA[y]:null;return console.log(`Цвета для ${h}:`,{departmentColor:S,darkDepartmentColor:b}),p.jsxs(vA,{theme:n,style:{animationDelay:`${u*.1}s`},children:[p.jsx(wA,{theme:n,$departmentColor:S,$darkDepartmentColor:b,children:h}),p.jsx(SA,{children:g.map((m,f)=>{const _=(m==null?void 0:m.lessonNumber)||f+1,v=(m==null?void 0:m.lessonName)||"Название не указано",E=(m==null?void 0:m.cabinet)||"---";return p.jsxs(CA,{theme:n,index:f,children:[p.jsx(EA,{theme:n,children:_}),p.jsxs(xA,{theme:n,children:[v,(m==null?void 0:m.isLab)&&" 🔬"]}),p.jsx(kA,{theme:n,children:E})]},f)})})]},h+u)})}),c.length===0&&p.jsxs(e_,{children:['😕 Ничего не найдено по запросу "',r,'"']})]})},NA=()=>{var f,_;const[t,e]=I.useState(!1),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,c]=I.useState(!1),[d,u]=I.useState(null),g=u0().currentUser,y=E1();I.useEffect(()=>{g&&S()},[g]);const S=async()=>{if(g)try{const v=de(y,`users/${g.uid}/telegram`),E=await cn(v);E.exists()&&(c(!0),u(E.val()))}catch(v){console.error("Ошибка при проверке статуса:",v)}},b=async v=>{if(v.preventDefault(),!g){s("Необходимо войти в систему");return}const E=n.toUpperCase().trim();if(!E||E.length!==6){s("Введите корректный 6-значный код");return}e(!0),s(""),a("");try{const x=de(y,"tempLinks"),C=await cn(x);if(!C.exists()){s("Код не найден"),e(!1);return}const O=C.val();let G=null,H=null;for(const[xt,Ze]of Object.entries(O))if(Ze.code===E&&!Ze.used&&Ze.expiresAt>Date.now()){G=xt,H=Ze;break}if(!G){s("Код не найден или истек"),e(!1);return}const ke=de(y,`telegramLinks/${G}`);if((await cn(ke)).exists()){s("Этот Telegram уже привязан к другому аккаунту"),e(!1);return}const Je=de(y,`users/${g.uid}/telegram`);if((await cn(Je)).exists()){s("К этому аккаунту уже привязан Telegram"),e(!1);return}await $a(de(y,`tempLinks/${G}`),{used:!0});const mt={};mt[`telegramLinks/${G}`]={firebaseUid:g.uid,linkedAt:Date.now(),telegramInfo:H.telegramInfo},mt[`users/${g.uid}/telegram`]={telegramId:Number(G),linkedAt:Date.now(),telegramInfo:H.telegramInfo},await $a(de(y),mt),setTimeout(async()=>{try{await Ob(de(y,`tempLinks/${G}`))}catch(xt){console.error("Ошибка при удалении временного кода:",xt)}},5*60*1e3),a("Telegram успешно привязан!"),r(""),S()}catch(x){console.error("Ошибка при привязке:",x),s("Ошибка при привязке Telegram")}finally{e(!1)}},m=async()=>{if(!(!g||!d)&&window.confirm("Вы уверены, что хотите отвязать Telegram?")){e(!0),s(""),a("");try{const v={};v[`users/${g.uid}/telegram`]=null,v[`telegramLinks/${d.telegramId}`]=null,await $a(de(y),v),c(!1),u(null),a("Telegram успешно отвязан")}catch(v){console.error("Ошибка при отвязке:",v),s("Ошибка при отвязке Telegram")}finally{e(!1)}}};return g?p.jsxs("div",{className:"telegram-link-container",children:[p.jsx("h3",{children:"📱 Привязка Telegram"}),i&&p.jsxs("div",{className:"alert alert-error",children:["❌ ",i]}),o&&p.jsxs("div",{className:"alert alert-success",children:["✅ ",o]}),l?p.jsxs("div",{className:"telegram-linked",children:[p.jsxs("div",{className:"telegram-info",children:[p.jsx("div",{className:"info-icon",children:"✅"}),p.jsxs("div",{className:"info-text",children:[p.jsx("strong",{children:"Telegram привязан"}),((f=d==null?void 0:d.telegramInfo)==null?void 0:f.username)&&p.jsxs("div",{children:["@",d.telegramInfo.username]}),((_=d==null?void 0:d.telegramInfo)==null?void 0:_.first_name)&&p.jsxs("div",{children:[d.telegramInfo.first_name," ",d.telegramInfo.last_name]}),p.jsxs("div",{className:"linked-date",children:["Привязан: ",new Date(d.linkedAt).toLocaleString()]})]})]}),p.jsx("button",{onClick:m,disabled:t,className:"btn btn-danger",children:t?"Отвязка...":"Отвязать Telegram"})]}):p.jsxs("div",{className:"telegram-unlinked",children:[p.jsxs("div",{className:"instruction-box",children:[p.jsx("h4",{children:"Как привязать Telegram:"}),p.jsxs("ol",{children:[p.jsxs("li",{children:["Откройте Telegram бота ",p.jsx("strong",{children:"@vgtk_schedule_bot"})]}),p.jsxs("li",{children:["Нажмите кнопку ",p.jsx("strong",{children:'"🔗 Привязать аккаунт"'})," или отправьте команду ",p.jsx("strong",{children:"/link"})]}),p.jsx("li",{children:"Бот пришлет вам 6-значный код"}),p.jsx("li",{children:"Введите этот код в поле ниже"})]})]}),p.jsxs("form",{onSubmit:b,className:"code-form",children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"telegram-code",children:"Код из Telegram:"}),p.jsx("input",{type:"text",id:"telegram-code",value:n,onChange:v=>r(v.target.value.toUpperCase()),placeholder:"Например: A1B2C3",maxLength:"6",className:"code-input",disabled:t,autoComplete:"off",autoFocus:!0})]}),p.jsx("button",{type:"submit",disabled:t||n.length!==6,className:"btn btn-primary",children:t?"Проверка...":"Привязать Telegram"})]}),p.jsx("div",{className:"note",children:p.jsx("small",{children:"⏰ Код действителен 15 минут"})})]}),p.jsx("style",{jsx:!0,children:`
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
      `})]}):p.jsx("div",{className:"telegram-link-container",children:p.jsx("div",{className:"alert alert-warning",children:"⚠️ Необходимо войти в систему для привязки Telegram"})})},bA=new Cn,Ps="commonAltNamings",ui=t=>{const e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${n}-${r}`},ku=t=>{const e=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],n=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];return`${t.getDate()} ${e[t.getMonth()]} ${t.getFullYear()} года (${n[t.getDay()].toUpperCase()})`},PA=async()=>{try{const t=de(De,"schedules_by_date"),e=await cn(t);return e.exists()?Object.keys(e.val()).sort():[]}catch(t){return console.error("Ошибка получения доступных дат:",t),[]}},RA=async t=>{try{const e=de(De,`schedules_by_date/${t}`),n=await cn(e);return n.exists()?n.val():null}catch(e){return console.error("Ошибка получения расписания по дате:",e),null}};function AA(){var ip;const[t,e]=I.useState(!1),[n,r]=I.useState(!1),[i,s]=I.useState([]),[o,a]=I.useState([]),[l,c]=I.useState([]),[d,u]=I.useState("Пожалуйста подождите"),[h,g]=I.useState(null),[y,S]=I.useState(""),[b,m]=I.useState(""),[f,_]=I.useState(!1),[v,E]=I.useState(!1),[x,C]=I.useState(!1),[O,G]=I.useState(0),[H,ke]=I.useState(0),[Se,Je]=I.useState(JSON.parse(localStorage.getItem("userTarification"))||[]),[pt,mt]=I.useState([]),[xt,Ze]=I.useState(!1),[A,M]=I.useState(!1),[$,oe]=I.useState(!1),[re,P]=I.useState(""),[F,V]=I.useState(""),[U,te]=I.useState(""),[ue,Ie]=I.useState(""),[B,ae]=I.useState(""),[ne,mn]=I.useState(localStorage.getItem("userCabinet")||null),[gn,$n]=I.useState(""),[et,_n]=I.useState("my"),[Ko,Yo]=I.useState(!1),[Me,ii]=I.useState([]),[kt,Un]=I.useState(!1),[zn,kr]=I.useState(new Date),[st,Bt]=HR(Q),{theme:Re,setTheme:Ic}=AR(),Bn=I.useCallback(async(w,T=!1)=>{Yo(!0);try{const D=ui(w),K=await RA(D);K&&K.schedule?(s(K.schedule),u(K.date||ku(w)),g(D),kr(w),console.log(`✅ Расписание на ${D} загружено, групп: ${K.schedule.length}`),T&&localStorage.setItem("lastSelectedDate",D)):(console.log(`❌ Расписание на ${D} не найдено`),s([]),u(`Нет расписания на ${ku(w)}`),g(null))}catch(D){console.error("Ошибка при загрузке расписания:",D),s([]),u("Ошибка загрузки расписания")}finally{Yo(!1)}},[]),Gf=I.useCallback(w=>{if(Me.length===0){alert("Нет доступных дат с расписанием");return}let T;if(h){const[W,ee,Ae]=h.split("-");T=new Date(Ae,ee-1,W)}else T=new Date;const D=new Date(T);D.setDate(T.getDate()+w);const K=ui(D);if(Me.includes(K))Bn(D,!0);else{let W=new Date(D),ee=!1,Ae=1;const Ir=30;for(;Ae<=Ir&&!ee;){W.setDate(T.getDate()+w*Ae);const Qo=ui(W);if(Me.includes(Qo)){Bn(W,!0),ee=!0;break}Ae++}ee||alert(`Нет доступного расписания ${w===1?"вперед":"назад"} в ближайшие ${Ir} дней`)}},[Me,h,Bn]),ew=I.useCallback(w=>{const T=ui(w);Me.includes(T)?(Bn(w,!0),kr(w),Un(!1)):alert(`Расписание на ${ku(w)} не опубликовано`)},[Me,Bn]),tw=(w,T)=>{const D=new Date(w,T+1,0).getDate(),K=new Date(w,T,1).getDay(),W=[];for(let ee=0;ee<(K===0?6:K-1);ee++)W.push(null);for(let ee=1;ee<=D;ee++)W.push(new Date(w,T,ee));return W},Kf=w=>{const T=new Date(zn);T.setMonth(zn.getMonth()+w),kr(T)};I.useEffect(()=>{(async()=>{const T=await PA();ii(T);const D=localStorage.getItem("lastSelectedDate");if(D&&T.includes(D)){const[K,W,ee]=D.split("-"),Ae=new Date(ee,W-1,K);Bn(Ae,!0),kr(Ae)}else if(T.length>0){const[K,W,ee]=T[0].split("-"),Ae=new Date(ee,W-1,K);Bn(Ae,!0),kr(Ae)}else u("Нет доступного расписания")})()},[Bn]),I.useEffect(()=>{if(!h)return;const w=de(De,`schedules_by_date/${h}`),T=kg(w,D=>{D.exists()&&D.val().schedule&&(console.log(`🔄 Расписание на дату ${h} обновилось в реальном времени`),s(D.val().schedule))},D=>{console.error("Ошибка при подписке на обновления расписания:",D)});return()=>T()},[h]);const Yf=I.useCallback((w,T)=>{const D=[];return w.forEach(K=>{K.lessons.forEach(W=>{W.cabinet&&W.cabinet.includes(T)&&D.push({...W,groupName:K.groupName})})}),D.sort((K,W)=>{const ee=parseFloat(K==null?void 0:K.lessonNumber)||0,Ae=parseFloat(W==null?void 0:W.lessonNumber)||0;return ee-Ae}),D},[]);I.useEffect(()=>{if(ne&&i.length>0){const w=Yf(i,ne);c(w)}},[i,ne,Yf]);const Qf=async w=>{if(!st)localStorage.setItem(Ps,JSON.stringify(w));else try{await ln(de(De,`${Ps}`),w)}catch(T){console.error("Ошибка сохранения общих альтернативных названий:",T)}mt(w)};I.useEffect(()=>{(async()=>{if(st)try{const T=await cn(de(De,`${Ps}`));if(T.exists())mt(T.val());else{const D=JSON.parse(localStorage.getItem(Ps))||[];D.length>0?await Qf(D):mt([])}}catch(T){console.error("Ошибка загрузки общих альтернативных названий:",T)}else{const T=JSON.parse(localStorage.getItem(Ps))||[];mt(T)}})()},[st]);const qf=w=>{var T;st?ln(de(De,`users/${(T=Q==null?void 0:Q.currentUser)==null?void 0:T.uid}/tarification`),w):localStorage.setItem("userTarification",JSON.stringify(w))},nw=w=>{var T;st?$a(de(De,`users/${(T=Q==null?void 0:Q.currentUser)==null?void 0:T.uid}/userInfo`),{cabinet:w}):localStorage.setItem("userCabinet",w)},rw=w=>{S(w.target.value)},iw=w=>{ae(w.target.value)},Xf=I.useCallback(w=>{e(!0),V(w)},[]),sw=I.useCallback(()=>{Ie(!0)},[]),ow=I.useCallback(w=>{r(!0),te(Se.find(T=>T.id===w))},[Se]),aw=()=>{C(w=>!w)},lw=()=>{_(w=>!w)},cw=w=>{m(w.target.value)},uw=w=>{P(w.target.value)},dw=I.useCallback(()=>{Ic(Re==="light"?"dark":"light")},[Ic,Re]),Jf=w=>Se.some(T=>T.groupName.toLowerCase().trim()===w.groupName.toLowerCase().trim()&&T.lesson.toLowerCase().trim()===w.lessonName.toLowerCase().trim()),Zf=w=>pt.filter(T=>T.lessonName.toLowerCase().trim()===w.toLowerCase().trim()).flatMap(T=>T.altNaming),ep=async(w,T)=>{const D=w.lesson,K=pt.find(ee=>ee.lessonName.toLowerCase().trim()===D.toLowerCase().trim());let W;if(K){if(K.altNaming.some(ee=>ee.toLowerCase().trim()===T.toLowerCase().trim())){alert("Название уже существует");return}W=pt.map(ee=>ee.lessonName.toLowerCase().trim()===D.toLowerCase().trim()?{...ee,altNaming:[...ee.altNaming,T]}:ee)}else W=[...pt,{lessonName:D,altNaming:[T]}];await Qf(W),gs()},hw=w=>{Jf(w)?alert('Группа с таким занятием уже существует. Удалите её в разделе "Редактировать" и внесите в ручном режиме.'):($n(w.lessonName),M(!0))},tp=()=>{var w;cn(de(De,`users/${(w=Q==null?void 0:Q.currentUser)==null?void 0:w.uid}/hours`)).then(T=>{T.exists()?ke(T.val()):console.log("No data available")}).catch(T=>{console.error(T)})},fw=()=>{if(Se.some(T=>T.groupName.toLowerCase().trim()===b.toLowerCase().trim()&&T.lesson.toLowerCase().trim()===y.toLowerCase().trim()))console.log("Группа с таким названием и уроком уже существует!");else{const T={id:FR(),groupName:b,lesson:y,lecture:f,labs:x};Je(D=>[...D,T]),qf([...Se,T]),gs()}},np=(w,T)=>{w.preventDefault(),T()},gs=I.useCallback(()=>{const w=[];let T=0;const D=W=>(W||"").toLowerCase().trim(),K=new Map(i.map(W=>[D(W.groupName||""),W]));Se.forEach(W=>{const{groupName:ee,lesson:Ae,labs:Ir,lecture:Qo}=W,ww=D(ee),sp=K.get(ww);if(!sp)return;const Sw=Zf(Ae);sp.lessons.forEach(_s=>{const op=D(_s==null?void 0:_s.lessonName),Cw=op===D(Ae),Ew=Sw.some(qo=>op===D(qo)),ap=!!_s.isLab;if((Cw||Ew)&&(Ir&&ap||!ap&&Qo)){const qo={..._s,lessonName:Ae};qo.id=`${++T}`,w.push(qo)}})}),w.sort((W,ee)=>{const Ae=parseFloat(W==null?void 0:W.lessonNumber)||0,Ir=parseFloat(ee==null?void 0:ee.lessonNumber)||0;return Ae!==Ir?Ae-Ir:((W==null?void 0:W.id)||"").localeCompare((ee==null?void 0:ee.id)||"")}),a(w)},[i,Se,pt]),pw=()=>{const w=h||x1(d),T=()=>{var D;G(1),ln(de(De,`users/${(D=Q==null?void 0:Q.currentUser)==null?void 0:D.uid}/hours/${w}`),o).then(()=>{alert("Сохранено"),G(1),setTimeout(()=>{G(0)},5e3),tp()}).catch(K=>{console.log(K),G(2),setTimeout(()=>{G(0)},5e3)})};o.length<9?confirm("Вы пытаетесь добавить в тарификацию меньше, чем 9 занятий, продолжить?")&&T():T()},mw=()=>Bk(Q,bA).then(()=>{}).catch(w=>{const T=w.code,D=w.message;console.log("error ",T,D)}),gw=()=>{Ck(Q).then(()=>{}).catch(w=>{console.log(w)})},rp=w=>{const T=Se.filter(D=>D.id!==w);Je(T),qf(T),gs()},_w=()=>{mn(re),P(""),nw(re)};I.useEffect(()=>{gs(),tp()},[i,Se,pt,gs]),I.useEffect(()=>{var w,T;st?cn(de(De,`users/${(w=Q==null?void 0:Q.currentUser)==null?void 0:w.uid}/tarification`)).then(D=>{var K;D.exists()?Je(D.val()):localStorage.getItem("userTarification")&&ln(de(De,`users/${(K=Q==null?void 0:Q.currentUser)==null?void 0:K.uid}/tarification`),JSON.parse(localStorage.getItem("userTarification")||[]))}).catch(D=>{console.error(D)}):Je(JSON.parse(localStorage.getItem("userTarification"))||[]),st&&cn(de(De,`users/${(T=Q==null?void 0:Q.currentUser)==null?void 0:T.uid}/userInfo`)).then(D=>{var K;D.exists()?mn(D.val().cabinet):localStorage.getItem("userCabinet")?(ln(de(De,`users/${(K=Q==null?void 0:Q.currentUser)==null?void 0:K.uid}/userInfo`),{cabinet:localStorage.getItem("userCabinet")}),console.log("localStorage To DB")):console.log("No cabinet yet")}).catch(D=>{console.error(D)})},[st]),I.useEffect(()=>{var K;const w=(K=Q==null?void 0:Q.currentUser)==null?void 0:K.uid;if(!w)return;const T=de(De,`users/${w}/hours`),D=kg(T,W=>{W.exists()?ke(W.val()):(console.log("No data available"),ke(null))},W=>{console.error(W)});return()=>D()},[]);const yw=tw(zn.getFullYear(),zn.getMonth()),vw=["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];return p.jsxs(tR,{children:[p.jsxs(rR,{children:[p.jsx("a",{href:"https://www.vgtk.by",children:p.jsx(yu,{src:TR,alt:""})}),st?p.jsx(yu,{src:st.photoURL}):p.jsx(yu,{src:NR}),p.jsxs(dR,{children:[p.jsx(wa,{onClick:()=>Gf(-1),theme:Re,children:"◀"}),p.jsx(sR,{onClick:()=>Un(!0),style:{cursor:"pointer",userSelect:"none"},children:Ko?"Загрузка...":d}),p.jsx(wa,{onClick:()=>Gf(1),theme:Re,children:"▶"})]}),st?p.jsxs(p.Fragment,{children:[p.jsx(ot,{onClick:gw,children:"Выйти"}),p.jsx(ot,{onClick:sw,children:"Настройки профиля"})]}):p.jsx(ot,{onClick:mw,children:"Войти"}),p.jsx(Vf,{handleChangeTheme:dw,theme:Re})]}),p.jsx(Sn,{active:kt,setActive:Un,children:p.jsxs(hR,{theme:Re,children:[p.jsxs(fR,{theme:Re,children:[p.jsx(wa,{onClick:()=>Kf(-1),theme:Re,children:"◀"}),p.jsx("h3",{children:zn.toLocaleString("ru",{month:"long",year:"numeric"})}),p.jsx(wa,{onClick:()=>Kf(1),theme:Re,children:"▶"})]}),p.jsxs(pR,{children:[vw.map(w=>p.jsx(mR,{theme:Re,children:w},w)),yw.map((w,T)=>{if(!w)return p.jsx(gR,{},`empty-${T}`);const D=ui(w),K=Me.includes(D),W=ui(new Date)===D;return p.jsxs(_R,{isAvailable:K,isToday:W,onClick:()=>K&&ew(w),theme:Re,disabled:!K,children:[w.getDate(),K&&p.jsx(yR,{theme:Re})]},D)})]}),p.jsx("div",{style:{marginTop:"15px",fontSize:"12px",opacity:.7},children:"💡 Доступные даты отмечены точкой"})]})}),p.jsxs(ZP,{children:[p.jsxs(Bg,{onSubmit:w=>{np(w,fw)},action:"",children:[p.jsx(Vg,{handleInputChange:rw,inputValue:y,placeholder:"Название предмета"}),p.jsx(wR,{handleSelectChange:cw}),p.jsxs(nR,{children:[p.jsx(Gg,{label:"Лабораторные",handleCheckBoxChange:aw}),p.jsx(Gg,{label:"Лекции",handleCheckBoxChange:lw})]}),p.jsx(ot,{type:"submit",children:"Добавить"}),p.jsx(ot,{onClick:()=>{Ze(w=>!w)},type:"button",children:"Редактировать"})]}),xt&&p.jsxs(p.Fragment,{children:["Ваша тарификация:",Se.map(w=>p.jsxs(zg,{children:[p.jsx(Vn,{children:w.lesson}),p.jsx(va,{children:w.groupName}),p.jsxs("p",{children:["Лаб. ",w.labs?"Есть":"Нет"]}),p.jsxs("p",{children:["Лекции ",w.lecture?"Есть":"Нет"]}),p.jsx(ot,{onClick:()=>{ow(w.id)},children:"Добавить названия"}),p.jsx(iR,{onClick:()=>rp(w.id),children:"Удалить"})]},w.id))]})]}),p.jsxs("div",{children:[p.jsxs(Wg,{children:[p.jsxs(uR,{children:[p.jsx(Hg,{active:et==="my",onClick:()=>_n("my"),theme:Re,children:"📋 Моё расписание"}),p.jsx(Hg,{active:et==="all",onClick:()=>_n("all"),theme:Re,children:"🏫 Все группы"})]}),et==="my"&&p.jsxs(p.Fragment,{children:[p.jsxs(aR,{children:[p.jsx(oR,{onChange:uw,value:re,type:"text",placeholder:`Ваш кабинет: ${ne||"не указан"}`}),p.jsx(lR,{onClick:_w,children:"+"})]}),p.jsx("div",{children:p.jsx($R,{displayName:"Ваш кабинет",displayNameAlt:"Ваше расписание",handleClick:()=>{oe(w=>!w)}})})]})]}),et==="my"?p.jsxs(p.Fragment,{children:[p.jsxs(cR,{children:[!$&&o.map(w=>p.jsxs(_u,{children:[p.jsx(li,{children:w.lessonNumber}),p.jsx(Vn,{children:Cu[w.lessonNumber]}),p.jsx(Vn,{children:w.lessonName}),p.jsx(va,{onClick:()=>{Xf(w.groupName)},children:w.groupName}),p.jsx(li,{children:w.cabinet})]},w.id)),$&&l.map((w,T)=>p.jsxs(_u,{children:[p.jsx(li,{children:w.lessonNumber}),p.jsx(Vn,{children:Cu[w.lessonNumber]}),p.jsx(Vn,{children:w.lessonName}),p.jsx(va,{onClick:()=>{Xf(w.groupName)},children:w.groupName}),p.jsx(li,{children:w.cabinet})]},`${w.lessonName+w.lessonNumber+T}`))]}),p.jsx(Wg,{children:st&&p.jsxs(p.Fragment,{children:[p.jsx(ot,{handleState:O,onClick:pw,children:"Добавить в учет часов"}),p.jsx(ot,{onClick:()=>{E(!0)},children:"Открыть учет часов"})]})})]}):p.jsx(TA,{schedule:i,dateSchedule:d,theme:Re})]}),p.jsxs(Sn,{active:t,setActive:e,children:[p.jsxs("div",{children:["Расписание группы ",F]}),p.jsx("div",{children:(ip=i.find(w=>w.groupName.toLowerCase().trim()===F.toLowerCase().trim()))==null?void 0:ip.lessons.map(w=>p.jsxs(_u,{children:[p.jsx(li,{children:w.lessonNumber}),p.jsx(Vn,{children:Cu[w.lessonNumber]}),p.jsx(Vn,{children:w.lessonName}),p.jsx(li,{children:w.cabinet}),!Jf(w)&&w.cabinet&&p.jsx(ot,{onClick:()=>hw(w),children:"Добавить"})||p.jsx(ot,{onClick:()=>rp(w.id),children:"Удалить"})]},w.lessonNumber))})]}),p.jsx(Sn,{active:ue,setActive:Ie,children:p.jsx(NA,{})}),p.jsxs(Sn,{active:n,setActive:r,children:[p.jsxs("div",{children:["Введите альтернативные названия для предмета ",p.jsx("br",{})," ",U==null?void 0:U.lesson]}),p.jsxs(Bg,{onSubmit:w=>{np(w,()=>{ep(U,B),ae("")})},action:"",children:[p.jsx(Vg,{handleInputChange:iw,inputValue:B,placeholder:"Альтернативное название"}),p.jsx(ot,{type:"submit",children:"Добавить"})]}),p.jsx("div",{children:"Альтернативные названия:"}),U&&Zf(U.lesson).map(w=>p.jsx("p",{children:w},w))]}),p.jsx(Sn,{active:v,setActive:E,children:p.jsx(pA,{rawData:H,onRawDataChange:w=>{ke(w)},userTarification:Se})}),p.jsx(Sn,{active:A,setActive:M,children:Se.map(w=>w.groupName===F&&p.jsxs(zg,{children:[p.jsx(Vn,{children:w.lesson}),p.jsx(va,{children:w.groupName}),p.jsx(ot,{onClick:()=>{ep(w,gn),M(!1)},children:"Добавить названия"})]},w.id))})]})}mv(document.getElementById("root")).render(p.jsx(AA,{}));
