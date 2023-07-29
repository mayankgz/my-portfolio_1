(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function iv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ka={},rv={get exports(){return Ka},set exports(n){Ka=n}},El={},fr={},sv={get exports(){return fr},set exports(n){fr=n}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),ov=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),lv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),hv=Symbol.for("react.suspense"),pv=Symbol.for("react.memo"),mv=Symbol.for("react.lazy"),vf=Symbol.iterator;function gv(n){return n===null||typeof n!="object"?null:(n=vf&&n[vf]||n["@@iterator"],typeof n=="function"?n:null)}var cm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,fm={};function Rs(n,e,t){this.props=n,this.context=e,this.refs=fm,this.updater=t||cm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Rs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function hm(){}hm.prototype=Rs.prototype;function dd(n,e,t){this.props=n,this.context=e,this.refs=fm,this.updater=t||cm}var fd=dd.prototype=new hm;fd.constructor=dd;dm(fd,Rs.prototype);fd.isPureReactComponent=!0;var xf=Array.isArray,pm=Object.prototype.hasOwnProperty,hd={current:null},mm={key:!0,ref:!0,__self:!0,__source:!0};function gm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pm.call(e,i)&&!mm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:n,key:s,ref:o,props:r,_owner:hd.current}}function _v(n,e){return{$$typeof:Ho,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function pd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ho}function vv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var yf=/\/+/g;function Yl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?vv(""+n.key):e.toString(36)}function Oa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ho:case ov:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Yl(o,0):i,xf(r)?(t="",n!=null&&(t=n.replace(yf,"$&/")+"/"),Oa(r,e,t,"",function(u){return u})):r!=null&&(pd(r)&&(r=_v(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(yf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Yl(s,a);o+=Oa(s,e,t,l,r)}else if(l=gv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Yl(s,a++),o+=Oa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(n,e,t){if(n==null)return n;var i=[],r=0;return Oa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function xv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qt={current:null},Fa={transition:null},yv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:hd};Fe.Children={map:Ko,forEach:function(n,e,t){Ko(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ko(n,function(){e++}),e},toArray:function(n){return Ko(n,function(e){return e})||[]},only:function(n){if(!pd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Fe.Component=Rs;Fe.Fragment=av;Fe.Profiler=uv;Fe.PureComponent=dd;Fe.StrictMode=lv;Fe.Suspense=hv;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;Fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)pm.call(e,l)&&!mm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ho,type:n.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(n){return n={$$typeof:dv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cv,_context:n},n.Consumer=n};Fe.createElement=gm;Fe.createFactory=function(n){var e=gm.bind(null,n);return e.type=n,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(n){return{$$typeof:fv,render:n}};Fe.isValidElement=pd;Fe.lazy=function(n){return{$$typeof:mv,_payload:{_status:-1,_result:n},_init:xv}};Fe.memo=function(n,e){return{$$typeof:pv,type:n,compare:e===void 0?null:e}};Fe.startTransition=function(n){var e=Fa.transition;Fa.transition={};try{n()}finally{Fa.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(n,e){return qt.current.useCallback(n,e)};Fe.useContext=function(n){return qt.current.useContext(n)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(n){return qt.current.useDeferredValue(n)};Fe.useEffect=function(n,e){return qt.current.useEffect(n,e)};Fe.useId=function(){return qt.current.useId()};Fe.useImperativeHandle=function(n,e,t){return qt.current.useImperativeHandle(n,e,t)};Fe.useInsertionEffect=function(n,e){return qt.current.useInsertionEffect(n,e)};Fe.useLayoutEffect=function(n,e){return qt.current.useLayoutEffect(n,e)};Fe.useMemo=function(n,e){return qt.current.useMemo(n,e)};Fe.useReducer=function(n,e,t){return qt.current.useReducer(n,e,t)};Fe.useRef=function(n){return qt.current.useRef(n)};Fe.useState=function(n){return qt.current.useState(n)};Fe.useSyncExternalStore=function(n,e,t){return qt.current.useSyncExternalStore(n,e,t)};Fe.useTransition=function(){return qt.current.useTransition()};Fe.version="18.2.0";(function(n){n.exports=Fe})(sv);const _m=iv(fr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=fr,Mv=Symbol.for("react.element"),wv=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,bv=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Av={key:!0,ref:!0,__self:!0,__source:!0};function vm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ev.call(e,i)&&!Av.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Mv,type:n,key:s,ref:o,props:r,_owner:bv.current}}El.Fragment=wv;El.jsx=vm;El.jsxs=vm;(function(n){n.exports=El})(rv);const ee=Ka.jsx,He=Ka.jsxs;var tc={},nc={},Tv={get exports(){return nc},set exports(n){nc=n}},hn={},ic={},Cv={get exports(){return ic},set exports(n){ic=n}},xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,W){var V=D.length;D.push(W);e:for(;0<V;){var pe=V-1>>>1,te=D[pe];if(0<r(te,W))D[pe]=W,D[V]=te,V=pe;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],V=D.pop();if(V!==W){D[0]=V;e:for(var pe=0,te=D.length,G=te>>>1;pe<G;){var Q=2*(pe+1)-1,le=D[Q],ce=Q+1,z=D[ce];if(0>r(le,V))ce<te&&0>r(z,le)?(D[pe]=z,D[ce]=V,pe=ce):(D[pe]=le,D[Q]=V,pe=Q);else if(ce<te&&0>r(z,V))D[pe]=z,D[ce]=V,pe=ce;else break e}}return W}function r(D,W){var V=D.sortIndex-W.sortIndex;return V!==0?V:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function y(D){if(_=!1,v(D),!x)if(t(l)!==null)x=!0,ie(S);else{var W=t(u);W!==null&&ne(y,W.startTime-D)}}function S(D,W){x=!1,_&&(_=!1,c(P),P=-1),m=!0;var V=h;try{for(v(W),f=t(l);f!==null&&(!(f.expirationTime>W)||D&&!H());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,h=f.priorityLevel;var te=pe(f.expirationTime<=W);W=n.unstable_now(),typeof te=="function"?f.callback=te:f===t(l)&&i(l),v(W)}else i(l);f=t(l)}if(f!==null)var G=!0;else{var Q=t(u);Q!==null&&ne(y,Q.startTime-W),G=!1}return G}finally{f=null,h=V,m=!1}}var T=!1,C=null,P=-1,w=5,E=-1;function H(){return!(n.unstable_now()-E<w)}function q(){if(C!==null){var D=n.unstable_now();E=D;var W=!0;try{W=C(!0,D)}finally{W?N():(T=!1,C=null)}}else T=!1}var N;if(typeof g=="function")N=function(){g(q)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,$=F.port2;F.port1.onmessage=q,N=function(){$.postMessage(null)}}else N=function(){p(q,0)};function ie(D){C=D,T||(T=!0,N())}function ne(D,W){P=p(function(){D(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,ie(S))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var V=h;h=W;try{return D()}finally{h=V}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=h;h=D;try{return W()}finally{h=V}},n.unstable_scheduleCallback=function(D,W,V){var pe=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?pe+V:pe):V=pe,D){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,D={id:d++,callback:W,priorityLevel:D,startTime:V,expirationTime:te,sortIndex:-1},V>pe?(D.sortIndex=V,e(u,D),t(l)===null&&D===t(u)&&(_?(c(P),P=-1):_=!0,ne(y,V-pe))):(D.sortIndex=te,e(l,D),x||m||(x=!0,ie(S))),D},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(D){var W=h;return function(){var V=h;h=W;try{return D.apply(this,arguments)}finally{h=V}}}})(xm);(function(n){n.exports=xm})(Cv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=fr,fn=ic;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sm=new Set,yo={};function wr(n,e){ys(n,e),ys(n+"Capture",e)}function ys(n,e){for(yo[n]=e,n=0;n<e.length;n++)Sm.add(e[n])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Mf={};function Pv(n){return rc.call(Mf,n)?!0:rc.call(Sf,n)?!1:Lv.test(n)?Mf[n]=!0:(Sf[n]=!0,!1)}function Rv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Dv(n,e,t,i){if(e===null||typeof e>"u"||Rv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new Yt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new Yt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new Yt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new Yt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new Yt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new Yt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new Yt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new Yt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new Yt(n,5,!1,n.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(md,gd);Pt[e]=new Yt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(md,gd);Pt[e]=new Yt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(md,gd);Pt[e]=new Yt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new Yt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new Yt(n,1,!1,n.toLowerCase(),null,!0,!0)});function _d(n,e,t,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dv(e,t,r,i)&&(t=null),i||r===null?Pv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var mi=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),ac=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),Em=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Os(n){return n===null||typeof n!="object"?null:(n=wf&&n[wf]||n["@@iterator"],typeof n=="function"?n:null)}var at=Object.assign,$l;function eo(n){if($l===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+n}var Kl=!1;function Ql(n,e){if(!n||Kl)return"";Kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?eo(n):""}function Iv(n){switch(n.tag){case 5:return eo(n.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return n=Ql(n.type,!1),n;case 11:return n=Ql(n.type.render,!1),n;case 1:return n=Ql(n.type,!0),n;default:return""}}function lc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zr:return"Fragment";case Qr:return"Portal";case sc:return"Profiler";case vd:return"StrictMode";case oc:return"Suspense";case ac:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case wm:return(n.displayName||"Context")+".Consumer";case Mm:return(n._context.displayName||"Context")+".Provider";case xd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case yd:return e=n.displayName||null,e!==null?e:lc(n.type)||"Memo";case Mi:e=n._payload,n=n._init;try{return lc(n(e))}catch{}}return null}function Nv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lc(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function bm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uv(n){var e=bm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zo(n){n._valueTracker||(n._valueTracker=Uv(n))}function Am(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=bm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function uc(n,e){var t=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ef(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tm(n,e){e=e.checked,e!=null&&_d(n,"checked",e,!1)}function cc(n,e){Tm(n,e);var t=Fi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?dc(n,e.type,t):e.hasOwnProperty("defaultValue")&&dc(n,e.type,Fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function dc(n,e,t){(e!=="number"||Qa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var to=Array.isArray;function ds(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function fc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Af(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(to(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fi(t)}}function Cm(n,e){var t=Fi(e.value),i=Fi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Tf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Lm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Lm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Jo,Pm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function So(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kv=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(n){kv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ao[e]=ao[n]})});function Rm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ao.hasOwnProperty(n)&&ao[n]?(""+e).trim():e+"px"}function Dm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Rm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ov=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pc(n,e){if(e){if(Ov[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function mc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=null;function Sd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _c=null,fs=null,hs=null;function Cf(n){if(n=Wo(n)){if(typeof _c!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=Ll(e),_c(n.stateNode,n.type,e))}}function Im(n){fs?hs?hs.push(n):hs=[n]:fs=n}function Nm(){if(fs){var n=fs,e=hs;if(hs=fs=null,Cf(n),e)for(n=0;n<e.length;n++)Cf(e[n])}}function Um(n,e){return n(e)}function km(){}var Zl=!1;function Om(n,e,t){if(Zl)return n(e,t);Zl=!0;try{return Um(n,e,t)}finally{Zl=!1,(fs!==null||hs!==null)&&(km(),Nm())}}function Mo(n,e){var t=n.stateNode;if(t===null)return null;var i=Ll(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var vc=!1;if(di)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{vc=!1}function Fv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(d){this.onError(d)}}var lo=!1,Za=null,Ja=!1,xc=null,zv={onError:function(n){lo=!0,Za=n}};function Bv(n,e,t,i,r,s,o,a,l){lo=!1,Za=null,Fv.apply(zv,arguments)}function Hv(n,e,t,i,r,s,o,a,l){if(Bv.apply(this,arguments),lo){if(lo){var u=Za;lo=!1,Za=null}else throw Error(oe(198));Ja||(Ja=!0,xc=u)}}function Er(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Fm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Lf(n){if(Er(n)!==n)throw Error(oe(188))}function Vv(n){var e=n.alternate;if(!e){if(e=Er(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Lf(r),n;if(s===i)return Lf(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function zm(n){return n=Vv(n),n!==null?Bm(n):null}function Bm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Bm(n);if(e!==null)return e;n=n.sibling}return null}var Hm=fn.unstable_scheduleCallback,Pf=fn.unstable_cancelCallback,Gv=fn.unstable_shouldYield,Wv=fn.unstable_requestPaint,ht=fn.unstable_now,jv=fn.unstable_getCurrentPriorityLevel,Md=fn.unstable_ImmediatePriority,Vm=fn.unstable_UserBlockingPriority,el=fn.unstable_NormalPriority,Xv=fn.unstable_LowPriority,Gm=fn.unstable_IdlePriority,bl=null,Yn=null;function qv(n){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(bl,n,void 0,(n.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:Kv,Yv=Math.log,$v=Math.LN2;function Kv(n){return n>>>=0,n===0?32:31-(Yv(n)/$v|0)|0}var ea=64,ta=4194304;function no(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=no(a):(s&=o,s!==0&&(i=no(s)))}else o=t&~r,o!==0?i=no(o):s!==0&&(i=no(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Un(e),r=1<<t,i|=n[t],e&=~r;return i}function Qv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Qv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function yc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wm(){var n=ea;return ea<<=1,!(ea&4194240)&&(ea=64),n}function Jl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Un(e),n[e]=t}function Jv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Un(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function wd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Un(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var je=0;function jm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xm,Ed,qm,Ym,$m,Sc=!1,na=[],Li=null,Pi=null,Ri=null,wo=new Map,Eo=new Map,bi=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(n,e){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function zs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Ed(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function t0(n,e,t,i,r){switch(e){case"focusin":return Li=zs(Li,n,e,t,i,r),!0;case"dragenter":return Pi=zs(Pi,n,e,t,i,r),!0;case"mouseover":return Ri=zs(Ri,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,zs(wo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,zs(Eo.get(s)||null,n,e,t,i,r)),!0}return!1}function Km(n){var e=ir(n.target);if(e!==null){var t=Er(e);if(t!==null){if(e=t.tag,e===13){if(e=Fm(t),e!==null){n.blockedOn=e,$m(n.priority,function(){qm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function za(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gc=i,t.target.dispatchEvent(i),gc=null}else return e=Wo(t),e!==null&&Ed(e),n.blockedOn=t,!1;e.shift()}return!0}function Df(n,e,t){za(n)&&t.delete(e)}function n0(){Sc=!1,Li!==null&&za(Li)&&(Li=null),Pi!==null&&za(Pi)&&(Pi=null),Ri!==null&&za(Ri)&&(Ri=null),wo.forEach(Df),Eo.forEach(Df)}function Bs(n,e){n.blockedOn===e&&(n.blockedOn=null,Sc||(Sc=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,n0)))}function bo(n){function e(r){return Bs(r,n)}if(0<na.length){Bs(na[0],n);for(var t=1;t<na.length;t++){var i=na[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Li!==null&&Bs(Li,n),Pi!==null&&Bs(Pi,n),Ri!==null&&Bs(Ri,n),wo.forEach(e),Eo.forEach(e),t=0;t<bi.length;t++)i=bi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<bi.length&&(t=bi[0],t.blockedOn===null);)Km(t),t.blockedOn===null&&bi.shift()}var ps=mi.ReactCurrentBatchConfig,nl=!0;function i0(n,e,t,i){var r=je,s=ps.transition;ps.transition=null;try{je=1,bd(n,e,t,i)}finally{je=r,ps.transition=s}}function r0(n,e,t,i){var r=je,s=ps.transition;ps.transition=null;try{je=4,bd(n,e,t,i)}finally{je=r,ps.transition=s}}function bd(n,e,t,i){if(nl){var r=Mc(n,e,t,i);if(r===null)uu(n,e,i,il,t),Rf(n,i);else if(t0(r,n,e,t,i))i.stopPropagation();else if(Rf(n,i),e&4&&-1<e0.indexOf(n)){for(;r!==null;){var s=Wo(r);if(s!==null&&Xm(s),s=Mc(n,e,t,i),s===null&&uu(n,e,i,il,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(n,e,i,null,t)}}var il=null;function Mc(n,e,t,i){if(il=null,n=Sd(i),n=ir(n),n!==null)if(e=Er(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Fm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return il=n,null}function Qm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jv()){case Md:return 1;case Vm:return 4;case el:case Xv:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var Ti=null,Ad=null,Ba=null;function Zm(){if(Ba)return Ba;var n,e=Ad,t=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ba=r.slice(n,1<i?1-i:void 0)}function Ha(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ia(){return!0}function If(){return!1}function pn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:If,this.isPropagationStopped=If,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Td=pn(Ds),Go=at({},Ds,{view:0,detail:0}),s0=pn(Go),eu,tu,Hs,Al=at({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hs&&(Hs&&n.type==="mousemove"?(eu=n.screenX-Hs.screenX,tu=n.screenY-Hs.screenY):tu=eu=0,Hs=n),eu)},movementY:function(n){return"movementY"in n?n.movementY:tu}}),Nf=pn(Al),o0=at({},Al,{dataTransfer:0}),a0=pn(o0),l0=at({},Go,{relatedTarget:0}),nu=pn(l0),u0=at({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=pn(u0),d0=at({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f0=pn(d0),h0=at({},Ds,{data:0}),Uf=pn(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=g0[n])?!!e[n]:!1}function Cd(){return _0}var v0=at({},Go,{key:function(n){if(n.key){var e=p0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(n){return n.type==="keypress"?Ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x0=pn(v0),y0=at({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=pn(y0),S0=at({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),M0=pn(S0),w0=at({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=pn(w0),b0=at({},Al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=pn(b0),T0=[9,13,27,32],Ld=di&&"CompositionEvent"in window,uo=null;di&&"documentMode"in document&&(uo=document.documentMode);var C0=di&&"TextEvent"in window&&!uo,Jm=di&&(!Ld||uo&&8<uo&&11>=uo),Of=String.fromCharCode(32),Ff=!1;function eg(n,e){switch(n){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Jr=!1;function L0(n,e){switch(n){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(Ff=!0,Of);case"textInput":return n=e.data,n===Of&&Ff?null:n;default:return null}}function P0(n,e){if(Jr)return n==="compositionend"||!Ld&&eg(n,e)?(n=Zm(),Ba=Ad=Ti=null,Jr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jm&&e.locale!=="ko"?null:e.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!R0[n.type]:e==="textarea"}function ng(n,e,t,i){Im(i),e=rl(e,"onChange"),0<e.length&&(t=new Td("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var co=null,Ao=null;function D0(n){hg(n,0)}function Tl(n){var e=ns(n);if(Am(e))return n}function I0(n,e){if(n==="change")return e}var ig=!1;if(di){var iu;if(di){var ru="oninput"in document;if(!ru){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),ru=typeof Bf.oninput=="function"}iu=ru}else iu=!1;ig=iu&&(!document.documentMode||9<document.documentMode)}function Hf(){co&&(co.detachEvent("onpropertychange",rg),Ao=co=null)}function rg(n){if(n.propertyName==="value"&&Tl(Ao)){var e=[];ng(e,Ao,n,Sd(n)),Om(D0,e)}}function N0(n,e,t){n==="focusin"?(Hf(),co=e,Ao=t,co.attachEvent("onpropertychange",rg)):n==="focusout"&&Hf()}function U0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Ao)}function k0(n,e){if(n==="click")return Tl(e)}function O0(n,e){if(n==="input"||n==="change")return Tl(e)}function F0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var On=typeof Object.is=="function"?Object.is:F0;function To(n,e){if(On(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rc.call(e,r)||!On(n[r],e[r]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,e){var t=Vf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vf(t)}}function sg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?sg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function og(){for(var n=window,e=Qa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Qa(n.document)}return e}function Pd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function z0(n){var e=og(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&sg(t.ownerDocument.documentElement,t)){if(i!==null&&Pd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Gf(t,s);var o=Gf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var B0=di&&"documentMode"in document&&11>=document.documentMode,es=null,wc=null,fo=null,Ec=!1;function Wf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ec||es==null||es!==Qa(i)||(i=es,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&To(fo,i)||(fo=i,i=rl(wc,"onSelect"),0<i.length&&(e=new Td("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=es)))}function ra(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ts={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},su={},ag={};di&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Cl(n){if(su[n])return su[n];if(!ts[n])return n;var e=ts[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ag)return su[n]=e[t];return n}var lg=Cl("animationend"),ug=Cl("animationiteration"),cg=Cl("animationstart"),dg=Cl("transitionend"),fg=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(n,e){fg.set(n,e),wr(e,[n])}for(var ou=0;ou<jf.length;ou++){var au=jf[ou],H0=au.toLowerCase(),V0=au[0].toUpperCase()+au.slice(1);Vi(H0,"on"+V0)}Vi(lg,"onAnimationEnd");Vi(ug,"onAnimationIteration");Vi(cg,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(dg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Xf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Hv(i,e,void 0,n),n.currentTarget=null}function hg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,a,u),s=l}}}if(Ja)throw n=xc,Ja=!1,xc=null,n}function Qe(n,e){var t=e[Lc];t===void 0&&(t=e[Lc]=new Set);var i=n+"__bubble";t.has(i)||(pg(e,n,2,!1),t.add(i))}function lu(n,e,t){var i=0;e&&(i|=4),pg(t,n,i,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[sa]){n[sa]=!0,Sm.forEach(function(t){t!=="selectionchange"&&(G0.has(t)||lu(t,!1,n),lu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sa]||(e[sa]=!0,lu("selectionchange",!1,e))}}function pg(n,e,t,i){switch(Qm(e)){case 1:var r=i0;break;case 4:r=r0;break;default:r=bd}t=r.bind(null,e,t,n),r=void 0,!vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Om(function(){var u=s,d=Sd(t),f=[];e:{var h=fg.get(n);if(h!==void 0){var m=Td,x=n;switch(n){case"keypress":if(Ha(t)===0)break e;case"keydown":case"keyup":m=x0;break;case"focusin":x="focus",m=nu;break;case"focusout":x="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M0;break;case lg:case ug:case cg:m=c0;break;case dg:m=E0;break;case"scroll":m=s0;break;case"wheel":m=A0;break;case"copy":case"cut":case"paste":m=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kf}var _=(e&4)!==0,p=!_&&n==="scroll",c=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,c!==null&&(y=Mo(g,c),y!=null&&_.push(Lo(g,y,v)))),p)break;g=g.return}0<_.length&&(h=new m(h,x,null,t,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",h&&t!==gc&&(x=t.relatedTarget||t.fromElement)&&(ir(x)||x[fi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?ir(x):null,x!==null&&(p=Er(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(_=Nf,y="onMouseLeave",c="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=kf,y="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?h:ns(m),v=x==null?h:ns(x),h=new _(y,g+"leave",m,t,d),h.target=p,h.relatedTarget=v,y=null,ir(d)===u&&(_=new _(c,g+"enter",x,t,d),_.target=v,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,c=x,g=0,v=_;v;v=Cr(v))g++;for(v=0,y=c;y;y=Cr(y))v++;for(;0<g-v;)_=Cr(_),g--;for(;0<v-g;)c=Cr(c),v--;for(;g--;){if(_===c||c!==null&&_===c.alternate)break t;_=Cr(_),c=Cr(c)}_=null}else _=null;m!==null&&qf(f,h,m,_,!1),x!==null&&p!==null&&qf(f,p,x,_,!0)}}e:{if(h=u?ns(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=I0;else if(zf(h))if(ig)S=O0;else{S=U0;var T=N0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=k0);if(S&&(S=S(n,u))){ng(f,S,t,d);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&dc(h,"number",h.value)}switch(T=u?ns(u):window,n){case"focusin":(zf(T)||T.contentEditable==="true")&&(es=T,wc=u,fo=null);break;case"focusout":fo=wc=es=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Wf(f,t,d);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":Wf(f,t,d)}var C;if(Ld)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jr?eg(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Jm&&t.locale!=="ko"&&(Jr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jr&&(C=Zm()):(Ti=d,Ad="value"in Ti?Ti.value:Ti.textContent,Jr=!0)),T=rl(u,P),0<T.length&&(P=new Uf(P,n,null,t,d),f.push({event:P,listeners:T}),C?P.data=C:(C=tg(t),C!==null&&(P.data=C)))),(C=C0?L0(n,t):P0(n,t))&&(u=rl(u,"onBeforeInput"),0<u.length&&(d=new Uf("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=C))}hg(f,e)})}function Lo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function rl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Mo(n,t),s!=null&&i.unshift(Lo(n,s,r)),s=Mo(n,e),s!=null&&i.push(Lo(n,s,r))),n=n.return}return i}function Cr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Mo(t,s),l!=null&&o.unshift(Lo(t,l,a))):r||(l=Mo(t,s),l!=null&&o.push(Lo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var W0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(W0,`
`).replace(j0,"")}function oa(n,e,t){if(e=Yf(e),Yf(n)!==e&&t)throw Error(oe(425))}function sl(){}var bc=null,Ac=null;function Tc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(n){return $f.resolve(null).then(n).catch(Y0)}:Cc;function Y0(n){setTimeout(function(){throw n})}function cu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),bo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);bo(e)}function Di(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Kf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),qn="__reactFiber$"+Is,Po="__reactProps$"+Is,fi="__reactContainer$"+Is,Lc="__reactEvents$"+Is,$0="__reactListeners$"+Is,K0="__reactHandles$"+Is;function ir(n){var e=n[qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[fi]||t[qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Kf(n);n!==null;){if(t=n[qn])return t;n=Kf(n)}return e}n=t,t=n.parentNode}return null}function Wo(n){return n=n[qn]||n[fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function Ll(n){return n[Po]||null}var Pc=[],is=-1;function Gi(n){return{current:n}}function et(n){0>is||(n.current=Pc[is],Pc[is]=null,is--)}function $e(n,e){is++,Pc[is]=n.current,n.current=e}var zi={},Ft=Gi(zi),Qt=Gi(!1),hr=zi;function Ss(n,e){var t=n.type.contextTypes;if(!t)return zi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(n){return n=n.childContextTypes,n!=null}function ol(){et(Qt),et(Ft)}function Qf(n,e,t){if(Ft.current!==zi)throw Error(oe(168));$e(Ft,e),$e(Qt,t)}function mg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Nv(n)||"Unknown",r));return at({},t,i)}function al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zi,hr=Ft.current,$e(Ft,n),$e(Qt,Qt.current),!0}function Zf(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=mg(n,e,hr),i.__reactInternalMemoizedMergedChildContext=n,et(Qt),et(Ft),$e(Ft,n)):et(Qt),$e(Qt,t)}var ri=null,Pl=!1,du=!1;function gg(n){ri===null?ri=[n]:ri.push(n)}function Q0(n){Pl=!0,gg(n)}function Wi(){if(!du&&ri!==null){du=!0;var n=0,e=je;try{var t=ri;for(je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ri=null,Pl=!1}catch(r){throw ri!==null&&(ri=ri.slice(n+1)),Hm(Md,Wi),r}finally{je=e,du=!1}}return null}var rs=[],ss=0,ll=null,ul=0,_n=[],vn=0,pr=null,oi=1,ai="";function Ji(n,e){rs[ss++]=ul,rs[ss++]=ll,ll=n,ul=e}function _g(n,e,t){_n[vn++]=oi,_n[vn++]=ai,_n[vn++]=pr,pr=n;var i=oi;n=ai;var r=32-Un(i)-1;i&=~(1<<r),t+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-Un(e)+r|t<<r|i,ai=s+n}else oi=1<<s|t<<r|i,ai=n}function Rd(n){n.return!==null&&(Ji(n,1),_g(n,1,0))}function Dd(n){for(;n===ll;)ll=rs[--ss],rs[ss]=null,ul=rs[--ss],rs[ss]=null;for(;n===pr;)pr=_n[--vn],_n[vn]=null,ai=_n[--vn],_n[vn]=null,oi=_n[--vn],_n[vn]=null}var cn=null,un=null,tt=!1,Rn=null;function vg(n,e){var t=yn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,cn=n,un=Di(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,cn=n,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=pr!==null?{id:oi,overflow:ai}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=yn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,cn=n,un=null,!0):!1;default:return!1}}function Rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dc(n){if(tt){var e=un;if(e){var t=e;if(!Jf(n,e)){if(Rc(n))throw Error(oe(418));e=Di(t.nextSibling);var i=cn;e&&Jf(n,e)?vg(i,t):(n.flags=n.flags&-4097|2,tt=!1,cn=n)}}else{if(Rc(n))throw Error(oe(418));n.flags=n.flags&-4097|2,tt=!1,cn=n}}}function eh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;cn=n}function aa(n){if(n!==cn)return!1;if(!tt)return eh(n),tt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Tc(n.type,n.memoizedProps)),e&&(e=un)){if(Rc(n))throw xg(),Error(oe(418));for(;e;)vg(n,e),e=Di(e.nextSibling)}if(eh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){un=Di(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}un=null}}else un=cn?Di(n.stateNode.nextSibling):null;return!0}function xg(){for(var n=un;n;)n=Di(n.nextSibling)}function Ms(){un=cn=null,tt=!1}function Id(n){Rn===null?Rn=[n]:Rn.push(n)}var Z0=mi.ReactCurrentBatchConfig;function Ln(n,e){if(n&&n.defaultProps){e=at({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var cl=Gi(null),dl=null,os=null,Nd=null;function Ud(){Nd=os=dl=null}function kd(n){var e=cl.current;et(cl),n._currentValue=e}function Ic(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ms(n,e){dl=n,Nd=os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kt=!0),n.firstContext=null)}function Mn(n){var e=n._currentValue;if(Nd!==n)if(n={context:n,memoizedValue:e,next:null},os===null){if(dl===null)throw Error(oe(308));os=n,dl.dependencies={lanes:0,firstContext:n}}else os=os.next=n;return e}var rr=null;function Od(n){rr===null?rr=[n]:rr.push(n)}function yg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Od(e)):(t.next=r.next,r.next=t),e.interleaved=t,hi(n,i)}function hi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var wi=!1;function Fd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ui(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(n,t)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(n,t)}function Va(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wd(n,t)}}function th(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function fl(n,e,t,i){var r=n.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(h=e,m=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=at({},f,h);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gr|=o,n.lanes=o,n.memoizedState=f}}function nh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Mg=new ym.Component().refs;function Nc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:at({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Rl={isMounted:function(n){return(n=n._reactInternals)?Er(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=jt(),r=Ui(n),s=ui(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ii(n,s,r),e!==null&&(kn(e,n,r,i),Va(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=jt(),r=Ui(n),s=ui(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ii(n,s,r),e!==null&&(kn(e,n,r,i),Va(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=jt(),i=Ui(n),r=ui(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(n,r,i),e!==null&&(kn(e,n,i,t),Va(e,n,i))}};function ih(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(t,i)||!To(r,s):!0}function wg(n,e,t){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Zt(e)?hr:Ft.current,i=e.contextTypes,s=(i=i!=null)?Ss(n,r):zi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function rh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Rl.enqueueReplaceState(e,e.state,null)}function Uc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Mg,Fd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Zt(e)?hr:Ft.current,r.context=Ss(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),fl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Mg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function la(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function sh(n){var e=n._init;return e(n._payload)}function Eg(n){function e(c,g){if(n){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function t(c,g){if(!n)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=ki(c,g),c.index=0,c.sibling=null,c}function s(c,g,v){return c.index=v,n?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return n&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,y){return g===null||g.tag!==6?(g=vu(v,c.mode,y),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,y){var S=v.type;return S===Zr?d(c,g,v.props.children,y,v.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mi&&sh(S)===g.type)?(y=r(g,v.props),y.ref=Vs(c,g,v),y.return=c,y):(y=Ya(v.type,v.key,v.props,null,c.mode,y),y.ref=Vs(c,g,v),y.return=c,y)}function u(c,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=xu(v,c.mode,y),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function d(c,g,v,y,S){return g===null||g.tag!==7?(g=ur(v,c.mode,y,S),g.return=c,g):(g=r(g,v),g.return=c,g)}function f(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=vu(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qo:return v=Ya(g.type,g.key,g.props,null,c.mode,v),v.ref=Vs(c,null,g),v.return=c,v;case Qr:return g=xu(g,c.mode,v),g.return=c,g;case Mi:var y=g._init;return f(c,y(g._payload),v)}if(to(g)||Os(g))return g=ur(g,c.mode,v,null),g.return=c,g;la(c,g)}return null}function h(c,g,v,y){var S=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(c,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return v.key===S?l(c,g,v,y):null;case Qr:return v.key===S?u(c,g,v,y):null;case Mi:return S=v._init,h(c,g,S(v._payload),y)}if(to(v)||Os(v))return S!==null?null:d(c,g,v,y,null);la(c,v)}return null}function m(c,g,v,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(v)||null,a(g,c,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qo:return c=c.get(y.key===null?v:y.key)||null,l(g,c,y,S);case Qr:return c=c.get(y.key===null?v:y.key)||null,u(g,c,y,S);case Mi:var T=y._init;return m(c,g,v,T(y._payload),S)}if(to(y)||Os(y))return c=c.get(v)||null,d(g,c,y,S,null);la(g,y)}return null}function x(c,g,v,y){for(var S=null,T=null,C=g,P=g=0,w=null;C!==null&&P<v.length;P++){C.index>P?(w=C,C=null):w=C.sibling;var E=h(c,C,v[P],y);if(E===null){C===null&&(C=w);break}n&&C&&E.alternate===null&&e(c,C),g=s(E,g,P),T===null?S=E:T.sibling=E,T=E,C=w}if(P===v.length)return t(c,C),tt&&Ji(c,P),S;if(C===null){for(;P<v.length;P++)C=f(c,v[P],y),C!==null&&(g=s(C,g,P),T===null?S=C:T.sibling=C,T=C);return tt&&Ji(c,P),S}for(C=i(c,C);P<v.length;P++)w=m(C,c,P,v[P],y),w!==null&&(n&&w.alternate!==null&&C.delete(w.key===null?P:w.key),g=s(w,g,P),T===null?S=w:T.sibling=w,T=w);return n&&C.forEach(function(H){return e(c,H)}),tt&&Ji(c,P),S}function _(c,g,v,y){var S=Os(v);if(typeof S!="function")throw Error(oe(150));if(v=S.call(v),v==null)throw Error(oe(151));for(var T=S=null,C=g,P=g=0,w=null,E=v.next();C!==null&&!E.done;P++,E=v.next()){C.index>P?(w=C,C=null):w=C.sibling;var H=h(c,C,E.value,y);if(H===null){C===null&&(C=w);break}n&&C&&H.alternate===null&&e(c,C),g=s(H,g,P),T===null?S=H:T.sibling=H,T=H,C=w}if(E.done)return t(c,C),tt&&Ji(c,P),S;if(C===null){for(;!E.done;P++,E=v.next())E=f(c,E.value,y),E!==null&&(g=s(E,g,P),T===null?S=E:T.sibling=E,T=E);return tt&&Ji(c,P),S}for(C=i(c,C);!E.done;P++,E=v.next())E=m(C,c,P,E.value,y),E!==null&&(n&&E.alternate!==null&&C.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?S=E:T.sibling=E,T=E);return n&&C.forEach(function(q){return e(c,q)}),tt&&Ji(c,P),S}function p(c,g,v,y){if(typeof v=="object"&&v!==null&&v.type===Zr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:e:{for(var S=v.key,T=g;T!==null;){if(T.key===S){if(S=v.type,S===Zr){if(T.tag===7){t(c,T.sibling),g=r(T,v.props.children),g.return=c,c=g;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mi&&sh(S)===T.type){t(c,T.sibling),g=r(T,v.props),g.ref=Vs(c,T,v),g.return=c,c=g;break e}t(c,T);break}else e(c,T);T=T.sibling}v.type===Zr?(g=ur(v.props.children,c.mode,y,v.key),g.return=c,c=g):(y=Ya(v.type,v.key,v.props,null,c.mode,y),y.ref=Vs(c,g,v),y.return=c,c=y)}return o(c);case Qr:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{t(c,g);break}else e(c,g);g=g.sibling}g=xu(v,c.mode,y),g.return=c,c=g}return o(c);case Mi:return T=v._init,p(c,g,T(v._payload),y)}if(to(v))return x(c,g,v,y);if(Os(v))return _(c,g,v,y);la(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(c,g.sibling),g=r(g,v),g.return=c,c=g):(t(c,g),g=vu(v,c.mode,y),g.return=c,c=g),o(c)):t(c,g)}return p}var ws=Eg(!0),bg=Eg(!1),jo={},$n=Gi(jo),Ro=Gi(jo),Do=Gi(jo);function sr(n){if(n===jo)throw Error(oe(174));return n}function zd(n,e){switch($e(Do,e),$e(Ro,n),$e($n,jo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hc(e,n)}et($n),$e($n,e)}function Es(){et($n),et(Ro),et(Do)}function Ag(n){sr(Do.current);var e=sr($n.current),t=hc(e,n.type);e!==t&&($e(Ro,n),$e($n,t))}function Bd(n){Ro.current===n&&(et($n),et(Ro))}var st=Gi(0);function hl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Hd(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Ga=mi.ReactCurrentDispatcher,hu=mi.ReactCurrentBatchConfig,mr=0,ot=null,xt=null,bt=null,pl=!1,ho=!1,Io=0,J0=0;function It(){throw Error(oe(321))}function Vd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!On(n[t],e[t]))return!1;return!0}function Gd(n,e,t,i,r,s){if(mr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=n===null||n.memoizedState===null?ix:rx,n=t(i,r),ho){s=0;do{if(ho=!1,Io=0,25<=s)throw Error(oe(301));s+=1,bt=xt=null,e.updateQueue=null,Ga.current=sx,n=t(i,r)}while(ho)}if(Ga.current=ml,e=xt!==null&&xt.next!==null,mr=0,bt=xt=ot=null,pl=!1,e)throw Error(oe(300));return n}function Wd(){var n=Io!==0;return Io=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ot.memoizedState=bt=n:bt=bt.next=n,bt}function wn(){if(xt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=xt.next;var e=bt===null?ot.memoizedState:bt.next;if(e!==null)bt=e,xt=n;else{if(n===null)throw Error(oe(310));xt=n,n={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},bt===null?ot.memoizedState=bt=n:bt=bt.next=n}return bt}function No(n,e){return typeof e=="function"?e(n):e}function pu(n){var e=wn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=xt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((mr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ot.lanes|=d,gr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ot.lanes|=s,gr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function mu(n){var e=wn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Tg(){}function Cg(n,e){var t=ot,i=wn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,jd(Rg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(t.flags|=2048,Uo(9,Pg.bind(null,t,i,r,e),void 0,null),At===null)throw Error(oe(349));mr&30||Lg(t,e,r)}return r}function Lg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Pg(n,e,t,i){e.value=t,e.getSnapshot=i,Dg(e)&&Ig(n)}function Rg(n,e,t){return t(function(){Dg(e)&&Ig(n)})}function Dg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!On(n,t)}catch{return!0}}function Ig(n){var e=hi(n,1);e!==null&&kn(e,n,1,-1)}function oh(n){var e=Wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},e.queue=n,n=n.dispatch=nx.bind(null,ot,n),[e.memoizedState,n]}function Uo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ng(){return wn().memoizedState}function Wa(n,e,t,i){var r=Wn();ot.flags|=n,r.memoizedState=Uo(1|e,t,void 0,i===void 0?null:i)}function Dl(n,e,t,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,i!==null&&Vd(i,o.deps)){r.memoizedState=Uo(e,t,s,i);return}}ot.flags|=n,r.memoizedState=Uo(1|e,t,s,i)}function ah(n,e){return Wa(8390656,8,n,e)}function jd(n,e){return Dl(2048,8,n,e)}function Ug(n,e){return Dl(4,2,n,e)}function kg(n,e){return Dl(4,4,n,e)}function Og(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Fg(n,e,t){return t=t!=null?t.concat([n]):null,Dl(4,4,Og.bind(null,e,n),t)}function Xd(){}function zg(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Bg(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Hg(n,e,t){return mr&21?(On(t,e)||(t=Wm(),ot.lanes|=t,gr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=t)}function ex(n,e){var t=je;je=t!==0&&4>t?t:4,n(!0);var i=hu.transition;hu.transition={};try{n(!1),e()}finally{je=t,hu.transition=i}}function Vg(){return wn().memoizedState}function tx(n,e,t){var i=Ui(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Gg(n))Wg(e,t);else if(t=yg(n,e,t,i),t!==null){var r=jt();kn(t,n,i,r),jg(t,e,i)}}function nx(n,e,t){var i=Ui(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gg(n))Wg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=yg(n,e,r,i),t!==null&&(r=jt(),kn(t,n,i,r),jg(t,e,i))}}function Gg(n){var e=n.alternate;return n===ot||e!==null&&e===ot}function Wg(n,e){ho=pl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function jg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wd(n,t)}}var ml={readContext:Mn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},ix={readContext:Mn,useCallback:function(n,e){return Wn().memoizedState=[n,e===void 0?null:e],n},useContext:Mn,useEffect:ah,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Wa(4194308,4,Og.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Wa(4194308,4,n,e)},useInsertionEffect:function(n,e){return Wa(4,2,n,e)},useMemo:function(n,e){var t=Wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Wn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=tx.bind(null,ot,n),[i.memoizedState,n]},useRef:function(n){var e=Wn();return n={current:n},e.memoizedState=n},useState:oh,useDebugValue:Xd,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=oh(!1),e=n[0];return n=ex.bind(null,n[1]),Wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ot,r=Wn();if(tt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),At===null)throw Error(oe(349));mr&30||Lg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ah(Rg.bind(null,i,s,n),[n]),i.flags|=2048,Uo(9,Pg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Wn(),e=At.identifierPrefix;if(tt){var t=ai,i=oi;t=(i&~(1<<32-Un(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Io++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=J0++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},rx={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:jd,useImperativeHandle:Fg,useInsertionEffect:Ug,useLayoutEffect:kg,useMemo:Bg,useReducer:pu,useRef:Ng,useState:function(){return pu(No)},useDebugValue:Xd,useDeferredValue:function(n){var e=wn();return Hg(e,xt.memoizedState,n)},useTransition:function(){var n=pu(No)[0],e=wn().memoizedState;return[n,e]},useMutableSource:Tg,useSyncExternalStore:Cg,useId:Vg,unstable_isNewReconciler:!1},sx={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:jd,useImperativeHandle:Fg,useInsertionEffect:Ug,useLayoutEffect:kg,useMemo:Bg,useReducer:mu,useRef:Ng,useState:function(){return mu(No)},useDebugValue:Xd,useDeferredValue:function(n){var e=wn();return xt===null?e.memoizedState=n:Hg(e,xt.memoizedState,n)},useTransition:function(){var n=mu(No)[0],e=wn().memoizedState;return[n,e]},useMutableSource:Tg,useSyncExternalStore:Cg,useId:Vg,unstable_isNewReconciler:!1};function bs(n,e){try{var t="",i=e;do t+=Iv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function gu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function kc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function Xg(n,e,t){t=ui(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){_l||(_l=!0,Xc=i),kc(n,e)},t}function qg(n,e,t){t=ui(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){kc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){kc(n,e),typeof i!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function lh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ox;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=yx.bind(null,n,e,t),e.then(n,n))}function uh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ch(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ui(-1,1),e.tag=2,Ii(t,e,1))),t.lanes|=1),n)}var ax=mi.ReactCurrentOwner,Kt=!1;function Vt(n,e,t,i){e.child=n===null?bg(e,null,t,i):ws(e,n.child,t,i)}function dh(n,e,t,i,r){t=t.render;var s=e.ref;return ms(e,r),i=Gd(n,e,t,i,s,r),t=Wd(),n!==null&&!Kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,pi(n,e,r)):(tt&&t&&Rd(e),e.flags|=1,Vt(n,e,i,r),e.child)}function fh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ef(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Yg(n,e,s,i,r)):(n=Ya(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:To,t(o,i)&&n.ref===e.ref)return pi(n,e,r)}return e.flags|=1,n=ki(s,i),n.ref=e.ref,n.return=e,e.child=n}function Yg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(To(s,i)&&n.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kt=!0);else return e.lanes=n.lanes,pi(n,e,r)}return Oc(n,e,t,i,r)}function $g(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ls,an),an|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,$e(ls,an),an|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,$e(ls,an),an|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,$e(ls,an),an|=i;return Vt(n,e,r,t),e.child}function Kg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Oc(n,e,t,i,r){var s=Zt(t)?hr:Ft.current;return s=Ss(e,s),ms(e,r),t=Gd(n,e,t,i,s,r),i=Wd(),n!==null&&!Kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,pi(n,e,r)):(tt&&i&&Rd(e),e.flags|=1,Vt(n,e,t,r),e.child)}function hh(n,e,t,i,r){if(Zt(t)){var s=!0;al(e)}else s=!1;if(ms(e,r),e.stateNode===null)ja(n,e),wg(e,t,i),Uc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=Zt(t)?hr:Ft.current,u=Ss(e,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&rh(e,o,i,u),wi=!1;var h=e.memoizedState;o.state=h,fl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Qt.current||wi?(typeof d=="function"&&(Nc(e,t,d,i),l=e.memoizedState),(a=wi||ih(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Sg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=Zt(t)?hr:Ft.current,l=Ss(e,l));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&rh(e,o,i,l),wi=!1,h=e.memoizedState,o.state=h,fl(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||Qt.current||wi?(typeof m=="function"&&(Nc(e,t,m,i),x=e.memoizedState),(u=wi||ih(e,t,u,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Fc(n,e,t,i,s,r)}function Fc(n,e,t,i,r,s){Kg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zf(e,t,!1),pi(n,e,s);i=e.stateNode,ax.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ws(e,n.child,null,s),e.child=ws(e,null,a,s)):Vt(n,e,a,s),e.memoizedState=i.state,r&&Zf(e,t,!0),e.child}function Qg(n){var e=n.stateNode;e.pendingContext?Qf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Qf(n,e.context,!1),zd(n,e.containerInfo)}function ph(n,e,t,i,r){return Ms(),Id(r),e.flags|=256,Vt(n,e,t,i),e.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Bc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zg(n,e,t){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),$e(st,r&1),n===null)return Dc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,i,0,null),n=ur(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Bc(t),e.memoizedState=zc,n):qd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=ur(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Bc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zc,i}return s=n.child,n=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qd(n,e){return e=Ul({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ua(n,e,t,i){return i!==null&&Id(i),ws(e,n.child,null,t),n=qd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=gu(Error(oe(422))),ua(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ul({mode:"visible",children:i.children},r,0,null),s=ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,n.child,null,o),e.child.memoizedState=Bc(o),e.memoizedState=zc,s);if(!(e.mode&1))return ua(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=gu(s,i,void 0),ua(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(n,r),kn(i,n,r,-1))}return Jd(),i=gu(Error(oe(421))),ua(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Sx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,un=Di(r.nextSibling),cn=e,tt=!0,Rn=null,n!==null&&(_n[vn++]=oi,_n[vn++]=ai,_n[vn++]=pr,oi=n.id,ai=n.overflow,pr=e),e=qd(e,i.children),e.flags|=4096,e)}function mh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ic(n.return,e,t)}function _u(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Jg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(n,e,i.children,t),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mh(n,t,e);else if(n.tag===19)mh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if($e(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&hl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),_u(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&hl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}_u(e,!0,t,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function pi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),gr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=ki(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ki(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ux(n,e,t){switch(e.tag){case 3:Qg(e),Ms();break;case 5:Ag(e);break;case 1:Zt(e.type)&&al(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(st,st.current&1),e.flags|=128,null):t&e.child.childLanes?Zg(n,e,t):($e(st,st.current&1),n=pi(n,e,t),n!==null?n.sibling:null);$e(st,st.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Jg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,$g(n,e,t)}return pi(n,e,t)}var e_,Hc,t_,n_;e_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hc=function(){};t_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,sr($n.current);var s=null;switch(t){case"input":r=uc(n,r),i=uc(n,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=fc(n,r),i=fc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=sl)}pc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};n_=function(n,e,t,i){t!==i&&(e.flags|=4)};function Gs(n,e){if(!tt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Nt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cx(n,e,t){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Zt(e.type)&&ol(),Nt(e),null;case 3:return i=e.stateNode,Es(),et(Qt),et(Ft),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(aa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&($c(Rn),Rn=null))),Hc(n,e),Nt(e),null;case 5:Bd(e);var r=sr(Do.current);if(t=e.type,n!==null&&e.stateNode!=null)t_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Nt(e),null}if(n=sr($n.current),aa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Po]=s,n=(e.mode&1)!==0,t){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<io.length;r++)Qe(io[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":Ef(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":Af(i,s),Qe("invalid",i)}pc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,n),r=["children",""+a]):yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(t){case"input":Zo(i),bf(i,s,!0);break;case"textarea":Zo(i),Tf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[qn]=e,n[Po]=i,e_(n,e,!1,!1),e.stateNode=n;e:{switch(o=mc(t,i),t){case"dialog":Qe("cancel",n),Qe("close",n),r=i;break;case"iframe":case"object":case"embed":Qe("load",n),r=i;break;case"video":case"audio":for(r=0;r<io.length;r++)Qe(io[r],n);r=i;break;case"source":Qe("error",n),r=i;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),r=i;break;case"details":Qe("toggle",n),r=i;break;case"input":Ef(n,i),r=uc(n,i),Qe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Qe("invalid",n);break;case"textarea":Af(n,i),r=fc(n,i),Qe("invalid",n);break;default:r=i}pc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&So(n,l):typeof l=="number"&&So(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",n):l!=null&&_d(n,s,l,o))}switch(t){case"input":Zo(n),bf(n,i,!1);break;case"textarea":Zo(n),Tf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ds(n,!!i.multiple,s,!1):i.defaultValue!=null&&ds(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=sl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(n&&e.stateNode!=null)n_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=sr(Do.current),sr($n.current),aa(e)){if(i=e.stateNode,t=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==t)&&(n=cn,n!==null))switch(n.tag){case 3:oa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Nt(e),null;case 13:if(et(st),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tt&&un!==null&&e.mode&1&&!(e.flags&128))xg(),Ms(),e.flags|=98560,s=!1;else if(s=aa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[qn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Rn!==null&&($c(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||st.current&1?yt===0&&(yt=3):Jd())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return Es(),Hc(n,e),n===null&&Co(e.stateNode.containerInfo),Nt(e),null;case 10:return kd(e.type._context),Nt(e),null;case 17:return Zt(e.type)&&ol(),Nt(e),null;case 19:if(et(st),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(yt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=hl(n),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return $e(st,st.current&1|2),e.child}n=n.sibling}s.tail!==null&&ht()>As&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(n=hl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Nt(e),null}else 2*ht()-s.renderingStartTime>As&&t!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,t=st.current,$e(st,i?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return Zd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function dx(n,e){switch(Dd(e),e.tag){case 1:return Zt(e.type)&&ol(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Es(),et(Qt),et(Ft),Hd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(et(st),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ms()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return et(st),null;case 4:return Es(),null;case 10:return kd(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var ca=!1,Ot=!1,fx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function as(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ut(n,e,i)}else t.current=null}function Vc(n,e,t){try{t()}catch(i){ut(n,e,i)}}var gh=!1;function hx(n,e){if(bc=nl,n=og(),Pd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=n,h=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ac={focusedElem:n,selectionRange:t},nl=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ln(e.type,_),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){ut(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return x=gh,gh=!1,x}function po(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vc(e,t,s)}r=r.next}while(r!==i)}}function Il(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Gc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function i_(n){var e=n.alternate;e!==null&&(n.alternate=null,i_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[qn],delete e[Po],delete e[Lc],delete e[$0],delete e[K0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function r_(n){return n.tag===5||n.tag===3||n.tag===4}function _h(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||r_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(n=n.child,n!==null))for(Wc(n,e,t),n=n.sibling;n!==null;)Wc(n,e,t),n=n.sibling}function jc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(jc(n,e,t),n=n.sibling;n!==null;)jc(n,e,t),n=n.sibling}var Ct=null,Pn=!1;function _i(n,e,t){for(t=t.child;t!==null;)s_(n,e,t),t=t.sibling}function s_(n,e,t){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(bl,t)}catch{}switch(t.tag){case 5:Ot||as(t,e);case 6:var i=Ct,r=Pn;Ct=null,_i(n,e,t),Ct=i,Pn=r,Ct!==null&&(Pn?(n=Ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ct.removeChild(t.stateNode));break;case 18:Ct!==null&&(Pn?(n=Ct,t=t.stateNode,n.nodeType===8?cu(n.parentNode,t):n.nodeType===1&&cu(n,t),bo(n)):cu(Ct,t.stateNode));break;case 4:i=Ct,r=Pn,Ct=t.stateNode.containerInfo,Pn=!0,_i(n,e,t),Ct=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(t,e,o),r=r.next}while(r!==i)}_i(n,e,t);break;case 1:if(!Ot&&(as(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){ut(t,e,a)}_i(n,e,t);break;case 21:_i(n,e,t);break;case 22:t.mode&1?(Ot=(i=Ot)||t.memoizedState!==null,_i(n,e,t),Ot=i):_i(n,e,t);break;default:_i(n,e,t)}}function vh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new fx),e.forEach(function(i){var r=Mx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function bn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Pn=!1;break e;case 3:Ct=a.stateNode.containerInfo,Pn=!0;break e;case 4:Ct=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Ct===null)throw Error(oe(160));s_(s,o,r),Ct=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,n),e=e.sibling}function o_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(e,n),Hn(n),i&4){try{po(3,n,n.return),Il(3,n)}catch(_){ut(n,n.return,_)}try{po(5,n,n.return)}catch(_){ut(n,n.return,_)}}break;case 1:bn(e,n),Hn(n),i&512&&t!==null&&as(t,t.return);break;case 5:if(bn(e,n),Hn(n),i&512&&t!==null&&as(t,t.return),n.flags&32){var r=n.stateNode;try{So(r,"")}catch(_){ut(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tm(r,s),mc(a,o);var u=mc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Dm(r,f):d==="dangerouslySetInnerHTML"?Pm(r,f):d==="children"?So(r,f):_d(r,d,f,u)}switch(a){case"input":cc(r,s);break;case"textarea":Cm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(_){ut(n,n.return,_)}}break;case 6:if(bn(e,n),Hn(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){ut(n,n.return,_)}}break;case 3:if(bn(e,n),Hn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(_){ut(n,n.return,_)}break;case 4:bn(e,n),Hn(n);break;case 13:bn(e,n),Hn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=ht())),i&4&&vh(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Ot=(u=Ot)||d,bn(e,n),Ot=u):bn(e,n),Hn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!d&&n.mode&1)for(_e=n,d=n.child;d!==null;){for(f=_e=d;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:po(4,h,h.return);break;case 1:as(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){ut(i,t,_)}}break;case 5:as(h,h.return);break;case 22:if(h.memoizedState!==null){yh(f);continue}}m!==null?(m.return=h,_e=m):yh(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rm("display",o))}catch(_){ut(n,n.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){ut(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bn(e,n),Hn(n),i&4&&vh(n);break;case 21:break;default:bn(e,n),Hn(n)}}function Hn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(r_(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(So(r,""),i.flags&=-33);var s=_h(n);jc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_h(n);Wc(n,a,o);break;default:throw Error(oe(161))}}catch(l){ut(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function px(n,e,t){_e=n,a_(n)}function a_(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=ca;var u=Ot;if(ca=o,(Ot=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Sh(r):l!==null?(l.return=o,_e=l):Sh(r);for(;s!==null;)_e=s,a_(s),s=s.sibling;_e=r,ca=a,Ot=u}xh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):xh(n)}}function xh(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Il(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ln(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}nh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&bo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Ot||e.flags&512&&Gc(e)}catch(h){ut(e,e.return,h)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function yh(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function Sh(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Il(4,e)}catch(l){ut(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{Gc(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{Gc(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===n){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var mx=Math.ceil,gl=mi.ReactCurrentDispatcher,Yd=mi.ReactCurrentOwner,Sn=mi.ReactCurrentBatchConfig,Ve=0,At=null,_t=null,Lt=0,an=0,ls=Gi(0),yt=0,ko=null,gr=0,Nl=0,$d=0,mo=null,$t=null,Kd=0,As=1/0,ii=null,_l=!1,Xc=null,Ni=null,da=!1,Ci=null,vl=0,go=0,qc=null,Xa=-1,qa=0;function jt(){return Ve&6?ht():Xa!==-1?Xa:Xa=ht()}function Ui(n){return n.mode&1?Ve&2&&Lt!==0?Lt&-Lt:Z0.transition!==null?(qa===0&&(qa=Wm()),qa):(n=je,n!==0||(n=window.event,n=n===void 0?16:Qm(n.type)),n):1}function kn(n,e,t,i){if(50<go)throw go=0,qc=null,Error(oe(185));Vo(n,t,i),(!(Ve&2)||n!==At)&&(n===At&&(!(Ve&2)&&(Nl|=t),yt===4&&Ai(n,Lt)),Jt(n,i),t===1&&Ve===0&&!(e.mode&1)&&(As=ht()+500,Pl&&Wi()))}function Jt(n,e){var t=n.callbackNode;Zv(n,e);var i=tl(n,n===At?Lt:0);if(i===0)t!==null&&Pf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Pf(t),e===1)n.tag===0?Q0(Mh.bind(null,n)):gg(Mh.bind(null,n)),q0(function(){!(Ve&6)&&Wi()}),t=null;else{switch(jm(i)){case 1:t=Md;break;case 4:t=Vm;break;case 16:t=el;break;case 536870912:t=Gm;break;default:t=el}t=m_(t,l_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function l_(n,e){if(Xa=-1,qa=0,Ve&6)throw Error(oe(327));var t=n.callbackNode;if(gs()&&n.callbackNode!==t)return null;var i=tl(n,n===At?Lt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xl(n,i);else{e=i;var r=Ve;Ve|=2;var s=c_();(At!==n||Lt!==e)&&(ii=null,As=ht()+500,lr(n,e));do try{vx();break}catch(a){u_(n,a)}while(1);Ud(),gl.current=s,Ve=r,_t!==null?e=0:(At=null,Lt=0,e=yt)}if(e!==0){if(e===2&&(r=yc(n),r!==0&&(i=r,e=Yc(n,r))),e===1)throw t=ko,lr(n,0),Ai(n,i),Jt(n,ht()),t;if(e===6)Ai(n,i);else{if(r=n.current.alternate,!(i&30)&&!gx(r)&&(e=xl(n,i),e===2&&(s=yc(n),s!==0&&(i=s,e=Yc(n,s))),e===1))throw t=ko,lr(n,0),Ai(n,i),Jt(n,ht()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:er(n,$t,ii);break;case 3:if(Ai(n,i),(i&130023424)===i&&(e=Kd+500-ht(),10<e)){if(tl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Cc(er.bind(null,n,$t,ii),e);break}er(n,$t,ii);break;case 4:if(Ai(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mx(i/1960))-i,10<i){n.timeoutHandle=Cc(er.bind(null,n,$t,ii),i);break}er(n,$t,ii);break;case 5:er(n,$t,ii);break;default:throw Error(oe(329))}}}return Jt(n,ht()),n.callbackNode===t?l_.bind(null,n):null}function Yc(n,e){var t=mo;return n.current.memoizedState.isDehydrated&&(lr(n,e).flags|=256),n=xl(n,e),n!==2&&(e=$t,$t=t,e!==null&&$c(e)),n}function $c(n){$t===null?$t=n:$t.push.apply($t,n)}function gx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(n,e){for(e&=~$d,e&=~Nl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Un(e),i=1<<t;n[t]=-1,e&=~i}}function Mh(n){if(Ve&6)throw Error(oe(327));gs();var e=tl(n,0);if(!(e&1))return Jt(n,ht()),null;var t=xl(n,e);if(n.tag!==0&&t===2){var i=yc(n);i!==0&&(e=i,t=Yc(n,i))}if(t===1)throw t=ko,lr(n,0),Ai(n,e),Jt(n,ht()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,er(n,$t,ii),Jt(n,ht()),null}function Qd(n,e){var t=Ve;Ve|=1;try{return n(e)}finally{Ve=t,Ve===0&&(As=ht()+500,Pl&&Wi())}}function _r(n){Ci!==null&&Ci.tag===0&&!(Ve&6)&&gs();var e=Ve;Ve|=1;var t=Sn.transition,i=je;try{if(Sn.transition=null,je=1,n)return n()}finally{je=i,Sn.transition=t,Ve=e,!(Ve&6)&&Wi()}}function Zd(){an=ls.current,et(ls)}function lr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,X0(t)),_t!==null)for(t=_t.return;t!==null;){var i=t;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:Es(),et(Qt),et(Ft),Hd();break;case 5:Bd(i);break;case 4:Es();break;case 13:et(st);break;case 19:et(st);break;case 10:kd(i.type._context);break;case 22:case 23:Zd()}t=t.return}if(At=n,_t=n=ki(n.current,null),Lt=an=e,yt=0,ko=null,$d=Nl=gr=0,$t=mo=null,rr!==null){for(e=0;e<rr.length;e++)if(t=rr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}rr=null}return n}function u_(n,e){do{var t=_t;try{if(Ud(),Ga.current=ml,pl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(mr=0,bt=xt=ot=null,ho=!1,Io=0,Yd.current=null,t===null||t.return===null){yt=1,ko=e,_t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=uh(o);if(m!==null){m.flags&=-257,ch(m,o,a,s,e),m.mode&1&&lh(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){lh(s,u,e),Jd();break e}l=Error(oe(426))}}else if(tt&&a.mode&1){var p=uh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ch(p,o,a,s,e),Id(bs(l,a));break e}}s=l=bs(l,a),yt!==4&&(yt=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Xg(s,l,e);th(s,c);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ni===null||!Ni.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=qg(s,a,e);th(s,y);break e}}s=s.return}while(s!==null)}f_(t)}catch(S){e=S,_t===t&&t!==null&&(_t=t=t.return);continue}break}while(1)}function c_(){var n=gl.current;return gl.current=ml,n===null?ml:n}function Jd(){(yt===0||yt===3||yt===2)&&(yt=4),At===null||!(gr&268435455)&&!(Nl&268435455)||Ai(At,Lt)}function xl(n,e){var t=Ve;Ve|=2;var i=c_();(At!==n||Lt!==e)&&(ii=null,lr(n,e));do try{_x();break}catch(r){u_(n,r)}while(1);if(Ud(),Ve=t,gl.current=i,_t!==null)throw Error(oe(261));return At=null,Lt=0,yt}function _x(){for(;_t!==null;)d_(_t)}function vx(){for(;_t!==null&&!Gv();)d_(_t)}function d_(n){var e=p_(n.alternate,n,an);n.memoizedProps=n.pendingProps,e===null?f_(n):_t=e,Yd.current=null}function f_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=dx(t,e),t!==null){t.flags&=32767,_t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,_t=null;return}}else if(t=cx(t,e,an),t!==null){_t=t;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=n}while(e!==null);yt===0&&(yt=5)}function er(n,e,t){var i=je,r=Sn.transition;try{Sn.transition=null,je=1,xx(n,e,t,i)}finally{Sn.transition=r,je=i}return null}function xx(n,e,t,i){do gs();while(Ci!==null);if(Ve&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Jv(n,s),n===At&&(_t=At=null,Lt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||da||(da=!0,m_(el,function(){return gs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=je;je=1;var a=Ve;Ve|=4,Yd.current=null,hx(n,t),o_(t,n),z0(Ac),nl=!!bc,Ac=bc=null,n.current=t,px(t),Wv(),Ve=a,je=o,Sn.transition=s}else n.current=t;if(da&&(da=!1,Ci=n,vl=r),s=n.pendingLanes,s===0&&(Ni=null),qv(t.stateNode),Jt(n,ht()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,n=Xc,Xc=null,n;return vl&1&&n.tag!==0&&gs(),s=n.pendingLanes,s&1?n===qc?go++:(go=0,qc=n):go=0,Wi(),null}function gs(){if(Ci!==null){var n=jm(vl),e=Sn.transition,t=je;try{if(Sn.transition=null,je=16>n?16:n,Ci===null)var i=!1;else{if(n=Ci,Ci=null,vl=0,Ve&6)throw Error(oe(331));var r=Ve;for(Ve|=4,_e=n.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:po(8,d,s)}var f=d.child;if(f!==null)f.return=d,_e=f;else for(;_e!==null;){d=_e;var h=d.sibling,m=d.return;if(i_(d),d===u){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,_e=c;break e}_e=s.return}}var g=n.current;for(_e=g;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=g;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Il(9,a)}}catch(S){ut(a,a.return,S)}if(a===o){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if(Ve=r,Wi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(bl,n)}catch{}i=!0}return i}finally{je=t,Sn.transition=e}}return!1}function wh(n,e,t){e=bs(t,e),e=Xg(n,e,1),n=Ii(n,e,1),e=jt(),n!==null&&(Vo(n,1,e),Jt(n,e))}function ut(n,e,t){if(n.tag===3)wh(n,n,t);else for(;e!==null;){if(e.tag===3){wh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ni===null||!Ni.has(i))){n=bs(t,n),n=qg(e,n,1),e=Ii(e,n,1),n=jt(),e!==null&&(Vo(e,1,n),Jt(e,n));break}}e=e.return}}function yx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=jt(),n.pingedLanes|=n.suspendedLanes&t,At===n&&(Lt&t)===t&&(yt===4||yt===3&&(Lt&130023424)===Lt&&500>ht()-Kd?lr(n,0):$d|=t),Jt(n,e)}function h_(n,e){e===0&&(n.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var t=jt();n=hi(n,e),n!==null&&(Vo(n,e,t),Jt(n,t))}function Sx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),h_(n,t)}function Mx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),h_(n,t)}var p_;p_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qt.current)Kt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kt=!1,ux(n,e,t);Kt=!!(n.flags&131072)}else Kt=!1,tt&&e.flags&1048576&&_g(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(n,e),n=e.pendingProps;var r=Ss(e,Ft.current);ms(e,t),r=Gd(null,e,i,n,r,t);var s=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fd(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Uc(e,i,n,t),e=Fc(null,e,i,!0,s,t)):(e.tag=0,tt&&s&&Rd(e),Vt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ex(i),n=Ln(i,n),r){case 0:e=Oc(null,e,i,n,t);break e;case 1:e=hh(null,e,i,n,t);break e;case 11:e=dh(null,e,i,n,t);break e;case 14:e=fh(null,e,i,Ln(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Oc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),hh(n,e,i,r,t);case 3:e:{if(Qg(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sg(n,e),fl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(oe(423)),e),e=ph(n,e,i,t,r);break e}else if(i!==r){r=bs(Error(oe(424)),e),e=ph(n,e,i,t,r);break e}else for(un=Di(e.stateNode.containerInfo.firstChild),cn=e,tt=!0,Rn=null,t=bg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ms(),i===r){e=pi(n,e,t);break e}Vt(n,e,i,t)}e=e.child}return e;case 5:return Ag(e),n===null&&Dc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Tc(i,r)?o=null:s!==null&&Tc(i,s)&&(e.flags|=32),Kg(n,e),Vt(n,e,o,t),e.child;case 6:return n===null&&Dc(e),null;case 13:return Zg(n,e,t);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ws(e,null,i,t):Vt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dh(n,e,i,r,t);case 7:return Vt(n,e,e.pendingProps,t),e.child;case 8:return Vt(n,e,e.pendingProps.children,t),e.child;case 12:return Vt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(cl,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!Qt.current){e=pi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ic(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ic(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,t),r=Mn(r),i=i(r),e.flags|=1,Vt(n,e,i,t),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),fh(n,e,i,r,t);case 15:return Yg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),ja(n,e),e.tag=1,Zt(i)?(n=!0,al(e)):n=!1,ms(e,t),wg(e,i,r),Uc(e,i,r,t),Fc(null,e,i,!0,n,t);case 19:return Jg(n,e,t);case 22:return $g(n,e,t)}throw Error(oe(156,e.tag))};function m_(n,e){return Hm(n,e)}function wx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,e,t,i){return new wx(n,e,t,i)}function ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===xd)return 11;if(n===yd)return 14}return 2}function ki(n,e){var t=n.alternate;return t===null?(t=yn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ya(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ef(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Zr:return ur(t.children,r,s,e);case vd:o=8,r|=8;break;case sc:return n=yn(12,t,e,r|2),n.elementType=sc,n.lanes=s,n;case oc:return n=yn(13,t,e,r),n.elementType=oc,n.lanes=s,n;case ac:return n=yn(19,t,e,r),n.elementType=ac,n.lanes=s,n;case Em:return Ul(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Mm:o=10;break e;case wm:o=9;break e;case xd:o=11;break e;case yd:o=14;break e;case Mi:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=yn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ur(n,e,t,i){return n=yn(7,n,i,e),n.lanes=t,n}function Ul(n,e,t,i){return n=yn(22,n,i,e),n.elementType=Em,n.lanes=t,n.stateNode={isHidden:!1},n}function vu(n,e,t){return n=yn(6,n,null,e),n.lanes=t,n}function xu(n,e,t){return e=yn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function bx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tf(n,e,t,i,r,s,o,a,l){return n=new bx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),n}function Ax(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function g_(n){if(!n)return zi;n=n._reactInternals;e:{if(Er(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(Zt(t))return mg(n,t,e)}return e}function __(n,e,t,i,r,s,o,a,l){return n=tf(t,i,!0,n,r,s,o,a,l),n.context=g_(null),t=n.current,i=jt(),r=Ui(t),s=ui(i,r),s.callback=e??null,Ii(t,s,r),n.current.lanes=r,Vo(n,r,i),Jt(n,i),n}function kl(n,e,t,i){var r=e.current,s=jt(),o=Ui(r);return t=g_(t),e.context===null?e.context=t:e.pendingContext=t,e=ui(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ii(r,e,o),n!==null&&(kn(n,r,o,s),Va(n,r,o)),o}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Eh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function nf(n,e){Eh(n,e),(n=n.alternate)&&Eh(n,e)}function Tx(){return null}var v_=typeof reportError=="function"?reportError:function(n){console.error(n)};function rf(n){this._internalRoot=n}Ol.prototype.render=rf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));kl(n,e,null,null)};Ol.prototype.unmount=rf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;_r(function(){kl(null,n,null,null)}),e[fi]=null}};function Ol(n){this._internalRoot=n}Ol.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ym();n={blockedOn:null,target:n,priority:e};for(var t=0;t<bi.length&&e!==0&&e<bi[t].priority;t++);bi.splice(t,0,n),t===0&&Km(n)}};function sf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bh(){}function Cx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=yl(o);s.call(u)}}var o=__(e,i,n,0,null,!1,!1,"",bh);return n._reactRootContainer=o,n[fi]=o.current,Co(n.nodeType===8?n.parentNode:n),_r(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=yl(l);a.call(u)}}var l=tf(n,0,!1,null,null,!1,!1,"",bh);return n._reactRootContainer=l,n[fi]=l.current,Co(n.nodeType===8?n.parentNode:n),_r(function(){kl(e,l,t,i)}),l}function zl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yl(o);a.call(l)}}kl(e,o,n,r)}else o=Cx(t,e,n,r,i);return yl(o)}Xm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=no(e.pendingLanes);t!==0&&(wd(e,t|1),Jt(e,ht()),!(Ve&6)&&(As=ht()+500,Wi()))}break;case 13:_r(function(){var i=hi(n,1);if(i!==null){var r=jt();kn(i,n,1,r)}}),nf(n,1)}};Ed=function(n){if(n.tag===13){var e=hi(n,134217728);if(e!==null){var t=jt();kn(e,n,134217728,t)}nf(n,134217728)}};qm=function(n){if(n.tag===13){var e=Ui(n),t=hi(n,e);if(t!==null){var i=jt();kn(t,n,e,i)}nf(n,e)}};Ym=function(){return je};$m=function(n,e){var t=je;try{return je=n,e()}finally{je=t}};_c=function(n,e,t){switch(e){case"input":if(cc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ll(i);if(!r)throw Error(oe(90));Am(i),cc(i,r)}}}break;case"textarea":Cm(n,t);break;case"select":e=t.value,e!=null&&ds(n,!!t.multiple,e,!1)}};Um=Qd;km=_r;var Lx={usingClientEntryPoint:!1,Events:[Wo,ns,Ll,Im,Nm,Qd]},Ws={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Px={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zm(n),n===null?null:n.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{bl=fa.inject(Px),Yn=fa}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(oe(200));return Ax(n,e,null,t)};hn.createRoot=function(n,e){if(!sf(n))throw Error(oe(299));var t=!1,i="",r=v_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tf(n,1,!1,null,null,t,!1,i,r),n[fi]=e.current,Co(n.nodeType===8?n.parentNode:n),new rf(e)};hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=zm(e),n=n===null?null:n.stateNode,n};hn.flushSync=function(n){return _r(n)};hn.hydrate=function(n,e,t){if(!Fl(e))throw Error(oe(200));return zl(null,n,e,!0,t)};hn.hydrateRoot=function(n,e,t){if(!sf(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=v_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=__(e,null,n,1,t??null,r,!1,s,o),n[fi]=e.current,Co(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ol(e)};hn.render=function(n,e,t){if(!Fl(e))throw Error(oe(200));return zl(null,n,e,!1,t)};hn.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(oe(40));return n._reactRootContainer?(_r(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[fi]=null})}),!0):!1};hn.unstable_batchedUpdates=Qd;hn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Fl(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return zl(n,e,t,!1,i)};hn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=hn})(Tv);var Ah=nc;tc.createRoot=Ah.createRoot,tc.hydrateRoot=Ah.hydrateRoot;const Rx="/my-portfolio_1/assets/photo-9a49c6d3.png",Dx="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQACWAJYAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAMgBQAMBIgACEQEDEQH/xAAtAAADAQEBAQAAAAAAAAAAAAACAwQBAAUHAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA+0NVw9DSEvn0qXphlM8meyQuFbiVN04NEbDcoSMbK0oJRhIfxBlM5ndwJZh6ORWxIr0JKMpaIka2UNV8tKarh6GkJfPpUvTGbO8meaCsQaTLrUA+cweeoM1GNJZBIfxCNM5mbwO8J6PQXxIr0JKPp6ChOtPPVfKLYrh6HaKekxw6YWraJYah44wQukAGLIHHLCNRDCAjUu4gypAHdwPbhfvnehEqvQkrWyOKk6089V8oLVGMAzAYsho6RvYQBaIzhIAHACYaZjBOINGaBGpdxDlKAM3gd7C/fP8AQjz+cmnNkcVJJhFlSQWLIYJ6CY8Hm6dokCXYF2EALBBIdM4hN0dD0CNS7iHKZjO7jNzgHzEFzVQ9srqoDjJ8eswx0LN0wh4LuI7u4zewLO0AWCZo6DpAaSyGaBGpdxBlM5ndwjTWMdMYTOCKGTNp4aQrGAYY8F3acQ8HnadncZ2iHmEAJiYSyMFiwiXo0lGEh/Hn9TOOm9BBFzFjHzMCPgig5200eIVzFnEPB52naGh5nG9mg7oDMwgFvUYadOFqRjJjKCUYSH8KOdoub0EELeWObO009CGsnbTRxgnGAcQcHmEZocMzNN4SAPlDxFglNSQHTadj5xzZHFBKMiagio52i5vQQRHoDWTsGbqYqOc6eHGJxiziXowO07V8NHNC1LBZlMWCtpPPdMC+RhuPSNbI4ZI5sTMVtVHO0XL6KCI+WOdKYRkmKWStp4cZNj0GGnihJYC2fSlWkH07hDTmLRW4lTdOC+RhvPQA9khZK1sStQVVnO0XL6KCHWKGNnI0iCHtjdVSuaQrslBYjR6TIS+cilemHs7yZ5ylwrcSpunBojYegnuI39w2PuGH3Dj7hEvcL3uCd3Ci7hre4anuJF9xrO4JHca/uDX3D97iV/cPHuJ09x//xAAbEAEBAQEBAQEBAAAAAAAAAAACAQMAERASIP/aAAgBAQABAgDhppn0uWuuQQeuUoZTDHgYeuRRRUvzXK/x5jsUjtiWHtlKV8D0z6XLXTMMPXKcGUwxYWVpkaUVL81ys+XvMtA0dsQw98StM/memmfS5a6ZFhaZziolmgsyjdMzTZZfmuUHyz856ho7YlB64aZ6Z/A9c+ly10zND0z8FlQWcJprzNlll+a5WfbC89EdsQw+0z0z6dnppnxuWmmQRugtNlRopNnISzop91ys+3hoNEdsQiu0z0z+BaZTjc28xTWDJZbEaZZUJ0sv3TO/x4HnojtiUV2memfS56PMk0JA2VGdLLT55LyPS/xpnZZ8sDz0RKKK7TN5+ZkJHvBUelR+2WdLKj06fxpnZfll7PTNsFFFc82OkNR6cbTLOs6WdZ55OlU9ll+6Z2X75loFoCiguRR6cbT042ydOs6XvLPqnyX7pnZ/EUemYRRvUIzpxqnTvbJ8s6fLLPntM6WX7rnZ9nGmvMoorkfPktnTp8nTrPtlneyqSyy/dcrPs409RxpvI+dOlsnyXyfLPtl69L1nssv3XKzmPgRqJpsXWWT5L5Pkt/mXrLOl9Ullll+a5WaZsXpTTaZTZess+S3vel732z2XrL16dKhEbLL81y7TNjjbf1YUVL1n2Wz32WyWWzpZbEb0UugiiKl+FdpnoOELl6UqXrLPelve+xWS+2exSqKWxS6iIoqXjSu0zYliM9sKll6yz5LZ77KpLKj7FKi5aXFpmUUVKaaV2mbHsRfsBRRvWWd7Ep76UjFEx+ipWdCuDK1zNKKRNKK7TPQy+m/viyouRU6KNS9UWyVFoIi4mWLAytMiimbCgiu0zY7OlRXioouRUnShOe/oaaAsvTOMMphjwMrTOLPRBQo0rtM2OlLnXi4ouZZ+Fs+y56vM6DTXOUMphiwMrTLzPRFQ00rtM2OnBfq0ssrmHPYhpoLYstNMyg9cpQymGPAytcr2ejF4oortM9M+liMRKKK7TNj33N6Z9Oy10zKD1ylDKYYsD7XLzPRGicUV2mbHSxSoRlFdpnpn3oeufS5665BB65ShlMMef//EADAQAAEDAwQCAAUDBAMBAAAAAAEAAhEQITEDEkFRIGETInGBsTKRoWLB0fAjMOFC/9oACAEBAAM/AFByg8F7BfkVIIug8fE088io1m9OGCnMdtcIIUqRFOEWmaAiDcFfDu39H4rPhNwiLHjwm/PSOm8k3acgcIOAIwVIXIyoMHKhDWbI/WMIgkEQR4bSg8F7BfkCpBW8fEYL8hfvQazenDBRY4h1iOEIQIvSy2ldKbG46R0zIPyfhWmk+E3Cg+EEEWKdpPJj5cm6bqNDmmQVK5GVBgqF8Ubm/rH8rgyCMgqDWDlB43sF+RS6IKDx8TTzyO6jVb04YKLHbTYjukiCgs+05l8oQIQIgwQthkXb+F8t8/hTc0vWbhEujCg0lAzIyjpPLgPlORKbqN3NMhSFyMqDByoTdYbm2f32vSiu0oOG9meQKkFbx8RgvyEQAeDQarenDBRZY56pIqS6AoF0CCDdbTb9J/hQSFnxtIRBqbSTAVoAklHQfLcHI7+ibqMDm4KlcjKgwVCDhBXpQacqDlbxvYL8gKyIdPSIK3fOwXyRUag6dwU7Dsi1JFINlDqAiDcFbT/SoQ2+/GbjKg1hE9dp+i/dwbkdpuo0ObhSFyMqDBzQOEFelFSwgGy3DewX5AQnE+lFkQtw3szyEDk0Dx74RmDnxhWVr4W0yMVv4TdEWNbLg4T9DUltwcic/wDqbqs3NNlK5Gahwgr0oNADI/lEEGUCN7c5IUnP3KJEAe1CDvmbY8imFuvyiDB8LEQoKugRdbb8ec4RBjwmQQIR03b2i3Le/om6rNzTIUjwDhBWVBtQuMBQcqZc0fUUgZRU3CHBRW76ojxIpaDhQfXnNwiDWytZO0XS24/+h2m6jA5pkFHTIMHacT4BwuuVFxSDeyhA/M37ikFXU3Fdw90gVKurrtRHXnNwozX0gIR0nkx8uT/lA6Zabg98o6Z/pODXtblmF/Ck5rNxW6m4pZSoqFfw2/RT5ThEWNbIgDacI5BiMXTXtDXE5uAjpO7acGv7qRSKwpEjPhNxWf8AotBW0zwhyo8ZE8qDBqe12UAbjITCNjmiCITtJ3bTg+EikXV6YXIpanVZ8b0K7UH1W9ZU3Cg1j6q6M49rezbicTdHTdfBwUGmJlCk+VpCtSPCfK9LQVtIPC+9LeE3Cg0gqKQg9u1xn7o6bosZwaTSRSK3XPnKIrakGk2OF8P6HlCBBv1T34TcKCvSil7kq5wPog5sOCdpmDg4PaNlaaT5dI0ioU/XwmkK2UCINwg2SSY4pPjNwtwXpQbrtSYJgfhNDxtNkHjabNWx22furKyupHjBU3FbqRIU0lRWVdQVBzKDhBFkdMyP0nBr+yt4bgvSviji0ngXX++0NSxBP9k5liM4pNJ8puKwuRWRPKjKt4RhXQIg37COncXbweqz47gvSIKgoXtn+EdofFvqhqNIPOJWx0X9HtRSFI8bqbjwm4rI9qDBUlSiskBFpmgcCDcHIR0jIksOD1X9lZEWmfvXcvSgmFwVb0jkWW4bSZ6untMG/M9q0KaSor7pNwvdZG4Uut98FFriOqSKSLCEWmgIg3BR0jIuw4PX1V4NqSnaTokyLog367WKbgvSMyoN0TJhBpH56Qczafyiwwf3V7msikIlQbq6m7f2RBgoWgqCtw3NzyKXQ1Bb9QRaYIgigIurIItMigIgiQeEdI7gfkPPVW6zQDYjB6TmEsdb/coTAvAruoZlQm7gHH5UAf7IOkTz1hHTftJno90ECBek0hDaTNwpm6P36RcyWj61goEFzRfkVGqJFncFFrocII4KlSIqWmRQEQbgr4ZkXZx6p7TdVsHIwekdP5XZ/PselJGfav3TcvShXRFxbhbTP+lfGYZA/wAJ2kYcJBwTyiIvSylXUTEyiTFkQP4XU2F1uG5v3FLEkH0i0reC9meRT2hqtkQHgWKLHEOBBHFARepaZFA4QbhfDMi7fwjpug4o3WZB+x6WxxDgAcn39EQe67l6RCveytco34B6QLNpv1Pacx5nnmM1tlbhS9OJUIOBczPIQmxsiiDlB3/IwX5CjNBrNkWeMFFjtpEEKVIipaZFARBuCg4J2m6Djte03XZDs8HpO0jsP6hj/wAQA913BekRddm6j/cLAJt0hqDa7HfKOk4iSQbA+AcF6UCw5XFCPsg8F7BfkCnsIgrePiMzyKjVbOHDBRY7a4QQggRepaZFQ8YR03QccUGq0XgjBHBT9N2131ntH+/2ruC9KCoREXwoIOEHt2udnFk7TM8KTNQ4QV6UGpacoOG9gvyKkHKDx8TTF+QKjVb04YKcx21wghWUiFzTaZX/xAAaEQEAAgMBAAAAAAAAAAAAAAABAEARQWBh/9oACAECAQE/AKSQdNFINTEGpjq/OL//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAEDAQE/AAJ//9k=";function Ix(){let n=document.querySelector(".container"),e=document.querySelectorAll(".foreground");return document.body.addEventListener("mousemove",t=>{let i=(window.innerWidth/2-t.pageX)/30,r=(window.innerHeight/2-t.pageY)/30;n.style.transform=`rotateX(${-r}deg) rotateY(${-i}deg)`,[].forEach.call(e,s=>{s.style.transform=`translateY(${r}px) translateX(${i}px)`})}),He("div",{id:"About",children:[ee("div",{id:"about_heading",children:ee("h1",{children:"Hi There!"})}),He("div",{id:"outer_container",children:[ee("div",{id:"right_container",children:ee("div",{class:"container",children:ee("div",{className:"card-container",children:He("div",{className:"card",children:[ee("img",{class:"background",src:Dx,alt:""}),ee("img",{class:"foreground",src:Rx,alt:""})]})})})}),He("div",{id:"left_container",children:[ee("div",{id:"about_me",children:ee("h2",{children:"About Me"})}),ee("div",{id:"left_container_text",children:"Hello! My name is Mayank Gagneja and I enjoy creating things that live on the internet. My interest in web development started back in 2020. As a MERN stack developer, I have expertise in building robust and scalable web applications using the latest technologies. With proficiency in MongoDB, ExpressJS, ReactJS, and NodeJS, I have the skills to develop end-to-end solutions that cater to business needs. I have a passion for delivering high-quality code and am constantly seeking to improve my skills and stay up-to-date with the latest industry trends."})]})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="151",Lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nx=0,Th=1,Ux=2,x_=1,kx=2,ro=3,Bi=0,en=1,si=2,Oi=0,_s=1,Ch=2,Lh=3,Ph=4,Ox=5,Yr=100,Fx=101,zx=102,Rh=103,Dh=104,Bx=200,Hx=201,Vx=202,Gx=203,y_=204,S_=205,Wx=206,jx=207,Xx=208,qx=209,Yx=210,$x=0,Kx=1,Qx=2,Kc=3,Zx=4,Jx=5,ey=6,ty=7,M_=0,ny=1,iy=2,ci=0,ry=1,sy=2,oy=3,ay=4,ly=5,w_=300,Ts=301,Cs=302,Qc=303,Zc=304,Bl=306,Jc=1e3,In=1001,ed=1002,Gt=1003,Ih=1004,yu=1005,xn=1006,uy=1007,Oo=1008,vr=1009,cy=1010,dy=1011,E_=1012,fy=1013,or=1014,ar=1015,Fo=1016,hy=1017,py=1018,vs=1020,my=1021,Nn=1023,gy=1024,_y=1025,cr=1026,Ls=1027,vy=1028,xy=1029,yy=1030,Sy=1031,My=1033,Su=33776,Mu=33777,wu=33778,Eu=33779,Nh=35840,Uh=35841,kh=35842,Oh=35843,wy=36196,Fh=37492,zh=37496,Bh=37808,Hh=37809,Vh=37810,Gh=37811,Wh=37812,jh=37813,Xh=37814,qh=37815,Yh=37816,$h=37817,Kh=37818,Qh=37819,Zh=37820,Jh=37821,bu=36492,Ey=36283,ep=36284,tp=36285,np=36286,xr=3e3,Ze=3001,by=3200,Ay=3201,b_=0,Ty=1,jn="srgb",zo="srgb-linear",A_="display-p3",Au=7680,Cy=519,ip=35044,rp="300 es",td=1035;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,nd=180/Math.PI;function Xo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Ly(n,e){return(n%e+e)%e}function Cu(n,e,t){return(1-t)*n+t*e}function sp(n){return(n&n-1)===0&&n!==0}function Py(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],_=r[0],p=r[3],c=r[6],g=r[1],v=r[4],y=r[7],S=r[2],T=r[5],C=r[8];return s[0]=o*_+a*g+l*S,s[3]=o*p+a*v+l*T,s[6]=o*c+a*y+l*C,s[1]=u*_+d*g+f*S,s[4]=u*p+d*v+f*T,s[7]=u*c+d*y+f*C,s[2]=h*_+m*g+x*S,s[5]=h*p+m*v+x*T,s[8]=h*c+m*y+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*s,m=u*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new ze;function T_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hl(n){return typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n))}function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ry=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dy=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Iy(n){return n.convertSRGBToLinear().applyMatrix3(Dy)}function Ny(n){return n.applyMatrix3(Ry).convertLinearToSRGB()}const Uy={[zo]:n=>n,[jn]:n=>n.convertSRGBToLinear(),[A_]:Iy},ky={[zo]:n=>n,[jn]:n=>n.convertLinearToSRGB(),[A_]:Ny},rn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return zo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Uy[e],r=ky[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Rr;class C_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=Sl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class L_{constructor(e=null){this.isSource=!0,this.uuid=Xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oy=0;class dn extends br{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=In,r=In,s=xn,o=Oo,a=Nn,l=vr,u=dn.DEFAULT_ANISOTROPY,d=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Xo(),this.name="",this.source=new L_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=Hl(e.userData),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=w_;dn.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],m=l[5],x=l[9],_=l[2],p=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(m+1)/2,S=(c+1)/2,T=(d+h)/4,C=(f+_)/4,P=(x+p)/4;return v>y&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=C/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=C/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(f-_)/g,this.z=(h-d)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yr extends br{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new L_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P_ extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fy extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==h||u!==m||d!==x){let p=1-a;const c=l*h+u*m+d*x+f*_,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const S=Math.sqrt(v),T=Math.atan2(S,c*g);p=Math.sin(p*T)/S,a=Math.sin(a*T)/S}const y=a*g;if(l=l*p+h*y,u=u*p+m*y,d=d*p+x*y,f=f*p+_*y,p===1-a){const S=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=S,u*=S,d*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+d*f+l*m-u*h,e[t+1]=l*x+d*h+u*f-a*m,e[t+2]=u*x+d*m+a*h-l*f,e[t+3]=d*x-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*f+u*m*x,this._y=u*m*f-h*d*x,this._z=u*d*x+h*m*f,this._w=u*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+u*m*x,this._y=u*m*f-h*d*x,this._z=u*d*x-h*m*f,this._w=u*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-u*m*x,this._y=u*m*f+h*d*x,this._z=u*d*x+h*m*f,this._w=u*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-u*m*x,this._y=u*m*f+h*d*x,this._z=u*d*x-h*m*f,this._w=u*d*f+h*m*x;break;case"YZX":this._x=h*d*f+u*m*x,this._y=u*m*f+h*d*x,this._z=u*d*x-h*m*f,this._w=u*d*f-h*m*x;break;case"XZY":this._x=h*d*f-u*m*x,this._y=u*m*f-h*d*x,this._z=u*d*x+h*m*f,this._w=u*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],d=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,d=t._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-t)*d)/u,h=Math.sin(t*d)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,d=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+d*-a-f*-o,this.y=d*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new I,op=new Sr;class qo{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Zn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else r.boundingBox===null&&r.computeBoundingBox(),Dr.copy(r.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),pa.subVectors(this.max,js),Ir.subVectors(e.a,js),Nr.subVectors(e.b,js),Ur.subVectors(e.c,js),vi.subVectors(Nr,Ir),xi.subVectors(Ur,Nr),Ki.subVectors(Ir,Ur);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!Iu(t,Ir,Nr,Ur,pa)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Ir,Nr,Ur,pa))?!1:(ma.crossVectors(vi,xi),t=[ma.x,ma.y,ma.z],Iu(t,Ir,Nr,Ur,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Zn=new I,Dr=new qo,Ir=new I,Nr=new I,Ur=new I,vi=new I,xi=new I,Ki=new I,js=new I,pa=new I,ma=new I,Qi=new I;function Iu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qi.fromArray(n,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=t.dot(Qi),d=i.dot(Qi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const zy=new qo,Xs=new I,Nu=new I;class af{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Nu)),this.expandByPoint(Xs.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new I,Uu=new I,ga=new I,yi=new I,ku=new I,_a=new I,Ou=new I;class R_{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uu.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Uu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=yi.dot(this.direction),l=-yi.dot(ga),u=yi.lengthSq(),d=Math.abs(1-o*o);let f,h,m,x;if(d>0)if(f=o*l-a,h=o*a-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uu).addScaledVector(ga,h),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){ku.subVectors(t,e),_a.subVectors(i,e),Ou.crossVectors(ku,_a);let o=this.direction.dot(Ou),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(_a.crossVectors(yi,_a));if(l<0)return null;const u=a*this.direction.dot(ku.cross(yi));if(u<0||l+u>o)return null;const d=-a*yi.dot(Ou);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,d,f,h,m,x,_,p){const c=this.elements;return c[0]=e,c[4]=t,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=m,c[7]=x,c[11]=_,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,x=a*d,_=a*f;t[0]=l*d,t[4]=-l*f,t[8]=u,t[1]=m+x*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,x=u*d,_=u*f;t[0]=h+_*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,x=u*d,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,x=a*d,_=a*f;t[0]=l*d,t[4]=x*u-m,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,x=a*l,_=a*u;t[0]=l*d,t[4]=_-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=m*f+x,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*u,x=a*l,_=a*u;t[0]=l*d,t[4]=-f,t[8]=u*d,t[1]=h*f+_,t[5]=o*d,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*d,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,Hy)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Si.crossVectors(i,sn),Si.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Si.crossVectors(i,sn)),Si.normalize(),va.crossVectors(sn,Si),r[0]=Si.x,r[4]=va.x,r[8]=sn.x,r[1]=Si.y,r[5]=va.y,r[9]=sn.y,r[2]=Si.z,r[6]=va.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],_=i[6],p=i[10],c=i[14],g=i[3],v=i[7],y=i[11],S=i[15],T=r[0],C=r[4],P=r[8],w=r[12],E=r[1],H=r[5],q=r[9],N=r[13],F=r[2],$=r[6],ie=r[10],ne=r[14],D=r[3],W=r[7],V=r[11],pe=r[15];return s[0]=o*T+a*E+l*F+u*D,s[4]=o*C+a*H+l*$+u*W,s[8]=o*P+a*q+l*ie+u*V,s[12]=o*w+a*N+l*ne+u*pe,s[1]=d*T+f*E+h*F+m*D,s[5]=d*C+f*H+h*$+m*W,s[9]=d*P+f*q+h*ie+m*V,s[13]=d*w+f*N+h*ne+m*pe,s[2]=x*T+_*E+p*F+c*D,s[6]=x*C+_*H+p*$+c*W,s[10]=x*P+_*q+p*ie+c*V,s[14]=x*w+_*N+p*ne+c*pe,s[3]=g*T+v*E+y*F+S*D,s[7]=g*C+v*H+y*$+S*W,s[11]=g*P+v*q+y*ie+S*V,s[15]=g*w+v*N+y*ne+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],_=e[7],p=e[11],c=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+_*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*d-s*l*d)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*d-i*u*d)+c*(-r*a*d-t*l*f+t*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],_=e[13],p=e[14],c=e[15],g=f*p*u-_*h*u+_*l*m-a*p*m-f*l*c+a*h*c,v=x*h*u-d*p*u-x*l*m+o*p*m+d*l*c-o*h*c,y=d*_*u-x*f*u+x*a*m-o*_*m-d*a*c+o*f*c,S=x*f*l-d*_*l-x*a*h+o*_*h+d*a*p-o*f*p,T=t*g+i*v+r*y+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*c-i*h*c)*C,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*c+i*l*c)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(d*p*s-x*h*s+x*r*m-t*p*m-d*r*c+t*h*c)*C,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*c-t*l*c)*C,e[7]=(o*h*s-d*l*s+d*r*u-t*h*u-o*r*m+t*l*m)*C,e[8]=y*C,e[9]=(x*f*s-d*_*s-x*i*m+t*_*m+d*i*c-t*f*c)*C,e[10]=(o*_*s-x*a*s+x*i*u-t*_*u-o*i*c+t*a*c)*C,e[11]=(d*a*s-o*f*s-d*i*u+t*f*u+o*i*m-t*a*m)*C,e[12]=S*C,e[13]=(d*_*r-x*f*r+x*i*h-t*_*h-d*i*p+t*f*p)*C,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-d*a*r+d*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,d=o+o,f=a+a,h=s*u,m=s*d,x=s*f,_=o*d,p=o*f,c=a*f,g=l*u,v=l*d,y=l*f,S=i.x,T=i.y,C=i.z;return r[0]=(1-(_+c))*S,r[1]=(m+y)*S,r[2]=(x-v)*S,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(h+c))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(x+v)*C,r[9]=(p-g)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,d=1/o,f=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,m=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const kr=new I,An=new vt,By=new I(0,0,0),Hy=new I(1,1,1),Si=new I,va=new I,sn=new I,ap=new vt,lp=new Sr;class Vl{constructor(e=0,t=0,i=0,r=Vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vl.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vy=0;const up=new I,Or=new Sr,ei=new vt,xa=new I,qs=new I,Gy=new I,Wy=new Sr,cp=new I(1,0,0),dp=new I(0,1,0),fp=new I(0,0,1),jy={type:"added"},hp={type:"removed"};class Xt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new I,t=new Vl,i=new Sr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ze}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(qs,xa,this.up):ei.lookAt(xa,qs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=Hl(e.userData),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new I(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new I,ti=new I,Fu=new I,ni=new I,Fr=new I,zr=new I,pp=new I,zu=new I,Bu=new I,Hu=new I;let ya=!1;class Dn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Tn.subVectors(r,t),ti.subVectors(i,t),Fu.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(ti),l=Tn.dot(Fu),u=ti.dot(ti),d=ti.dot(Fu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(u*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,i,r,s,o,a,l){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ni),l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),ti.subVectors(e,t),Tn.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Tn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),zr.subVectors(s,i),zu.subVectors(e,i);const l=Fr.dot(zu),u=zr.dot(zu);if(l<=0&&u<=0)return t.copy(i);Bu.subVectors(e,r);const d=Fr.dot(Bu),f=zr.dot(Bu);if(d>=0&&f<=d)return t.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Fr,o);Hu.subVectors(e,s);const m=Fr.dot(Hu),x=zr.dot(Hu);if(x>=0&&m<=x)return t.copy(s);const _=m*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(zr,a);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return pp.subVectors(s,r),a=(f-d)/(f-d+(m-x)),t.copy(r).addScaledVector(pp,a);const c=1/(p+_+h);return o=_*c,a=h*c,t.copy(i).addScaledVector(Fr,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xy=0;class Yo extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=_s,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=y_,this.blendDst=S_,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Au,this.stencilZFail=Au,this.stencilZPass=Au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=Hl(e.userData),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rn.workingColorSpace){if(e=Ly(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vu(o,s,e+1/3),this.g=Vu(o,s,e),this.b=Vu(o,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,d=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,d,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const i=D_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return rn.fromWorkingColorSpace(kt.copy(this),e),Wt(kt.r*255,0,255)<<16^Wt(kt.g*255,0,255)<<8^Wt(kt.b*255,0,255)<<0}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=jn){rn.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Cn),Cn.h+=e,Cn.s+=t,Cn.l+=i,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Sa);const i=Cu(Cn.h,Sa.h,t),r=Cu(Cn.s,Sa.s,t),s=Cu(Cn.l,Sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const kt=new qe;qe.NAMES=D_;class I_ extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,Ma=new Pe;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ip,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class N_ extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class U_ extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dr extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qy=0;const gn=new vt,Gu=new Xt,Br=new I,on=new qo,Ys=new qo,Et=new I;class Ar extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?U_:N_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(on.min,Ys.min),on.expandByPoint(Et),Et.addVectors(on.max,Ys.max),on.expandByPoint(Et)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Et.fromBufferAttribute(a,u),l&&(Br.fromBufferAttribute(e,u),Et.add(Br)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<a;E++)u[E]=new I,d[E]=new I;const f=new I,h=new I,m=new I,x=new Pe,_=new Pe,p=new Pe,c=new I,g=new I;function v(E,H,q){f.fromArray(r,E*3),h.fromArray(r,H*3),m.fromArray(r,q*3),x.fromArray(o,E*2),_.fromArray(o,H*2),p.fromArray(o,q*2),h.sub(f),m.sub(f),_.sub(x),p.sub(x);const N=1/(_.x*p.y-p.x*_.y);isFinite(N)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(N),g.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(N),u[E].add(c),u[H].add(c),u[q].add(c),d[E].add(g),d[H].add(g),d[q].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,H=y.length;E<H;++E){const q=y[E],N=q.start,F=q.count;for(let $=N,ie=N+F;$<ie;$+=3)v(i[$+0],i[$+1],i[$+2])}const S=new I,T=new I,C=new I,P=new I;function w(E){C.fromArray(s,E*3),P.copy(C);const H=u[E];S.copy(H),S.sub(C.multiplyScalar(C.dot(H))).normalize(),T.crossVectors(P,H);const N=T.dot(d[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=N}for(let E=0,H=y.length;E<H;++E){const q=y[E],N=q.start,F=q.count;for(let $=N,ie=N+F;$<ie;$+=3)w(i[$+0]),w(i[$+1]),w(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let c=0;c<d;c++)h[x++]=u[m++]}return new Kn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ar,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=Hl(e.userData),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new vt,Vn=new R_,wa=new af,gp=new I,Hr=new I,Vr=new I,Gr=new I,Wu=new I,Ea=new I,ba=new Pe,Aa=new Pe,Ta=new Pe,_p=new I,vp=new I,xp=new I,Ca=new I,La=new I;class li extends Xt{constructor(e=new Ar,t=new I_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],f=s[l];d!==0&&(Wu.fromBufferAttribute(f,e),o?Ea.addScaledVector(Wu,d):Ea.addScaledVector(Wu.sub(t),d))}t.add(Ea)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),wa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(wa,gp)===null||Vn.origin.distanceToSquared(gp)>(e.far-e.near)**2))||(mp.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(mp),i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,d=i.attributes.uv2,f=i.attributes.normal,h=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,_=h.length;x<_;x++){const p=h[x],c=r[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,S=v;y<S;y+=3){const T=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);o=Pa(this,c,e,Vn,u,d,f,T,C,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,c=_;p<c;p+=3){const g=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);o=Pa(this,r,e,Vn,u,d,f,g,v,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,_=h.length;x<_;x++){const p=h[x],c=r[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,S=v;y<S;y+=3){const T=y,C=y+1,P=y+2;o=Pa(this,c,e,Vn,u,d,f,T,C,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,c=_;p<c;p+=3){const g=p,v=p+1,y=p+2;o=Pa(this,r,e,Vn,u,d,f,g,v,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Yy(n,e,t,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bi,a),l===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(La);return u<t.near||u>t.far?null:{distance:u,point:La.clone(),object:n}}function Pa(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Hr),n.getVertexPosition(l,Vr),n.getVertexPosition(u,Gr);const d=Yy(n,e,t,i,Hr,Vr,Gr,Ca);if(d){r&&(ba.fromBufferAttribute(r,a),Aa.fromBufferAttribute(r,l),Ta.fromBufferAttribute(r,u),d.uv=Dn.getInterpolation(Ca,Hr,Vr,Gr,ba,Aa,Ta,new Pe)),s&&(ba.fromBufferAttribute(s,a),Aa.fromBufferAttribute(s,l),Ta.fromBufferAttribute(s,u),d.uv2=Dn.getInterpolation(Ca,Hr,Vr,Gr,ba,Aa,Ta,new Pe)),o&&(_p.fromBufferAttribute(o,a),vp.fromBufferAttribute(o,l),xp.fromBufferAttribute(o,u),d.normal=Dn.getInterpolation(Ca,Hr,Vr,Gr,_p,vp,xp,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new I,materialIndex:0};Dn.getNormal(Hr,Vr,Gr,f.normal),d.face=f}return d}class Ns extends Ar{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(u,3)),this.setAttribute("normal",new dr(d,3)),this.setAttribute("uv",new dr(f,2));function x(_,p,c,g,v,y,S,T,C,P,w){const E=y/C,H=S/P,q=y/2,N=S/2,F=T/2,$=C+1,ie=P+1;let ne=0,D=0;const W=new I;for(let V=0;V<ie;V++){const pe=V*H-N;for(let te=0;te<$;te++){const G=te*E-q;W[_]=G*g,W[p]=pe*v,W[c]=F,u.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[c]=T>0?1:-1,d.push(W.x,W.y,W.z),f.push(te/C),f.push(1-V/P),ne+=1}}for(let V=0;V<P;V++)for(let pe=0;pe<C;pe++){const te=h+pe+$*V,G=h+pe+$*(V+1),Q=h+(pe+1)+$*(V+1),le=h+(pe+1)+$*V;l.push(te,G,le),l.push(G,Q,le),D+=6}a.addGroup(m,D,w),m+=D,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function $y(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function k_(n){return n.getRenderTarget()===null&&n.outputEncoding===Ze?jn:zo}const Ky={clone:Ps,merge:Ht};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class O_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends O_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,jr=1;class Jy extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ln(Wr,jr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new ln(Wr,jr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ln(Wr,jr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ln(Wr,jr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ln(Wr,jr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new ln(Wr,jr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ci,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class F_ extends dn{constructor(e,t,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eS extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new F_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ns(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Oi});s.uniforms.tEquirect.value=t;const o=new li(r,s),a=t.minFilter;return t.minFilter===Oo&&(t.minFilter=xn),new Jy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ju=new I,tS=new I,nS=new ze;class Ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ju.subVectors(i,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nS.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new af,Ra=new I;class uf{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],d=i[6],f=i[7],h=i[8],m=i[9],x=i[10],_=i[11],p=i[12],c=i[13],g=i[14],v=i[15];return t[0].setComponents(a-r,f-l,_-h,v-p).normalize(),t[1].setComponents(a+r,f+l,_+h,v+p).normalize(),t[2].setComponents(a+s,f+u,_+m,v+c).normalize(),t[3].setComponents(a-s,f-u,_-m,v-c).normalize(),t[4].setComponents(a-o,f-d,_-x,v-g).normalize(),t[5].setComponents(a+o,f+d,_+x,v+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,h=u.usage,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,d,f){const h=d.array,m=d.updateRange;n.bindBuffer(f,u),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(s(f.buffer,u,d),f.version=u.version)}return{get:o,remove:a,update:l}}class cf extends Ar{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=t/l,m=[],x=[],_=[],p=[];for(let c=0;c<d;c++){const g=c*h-o;for(let v=0;v<u;v++){const y=v*f-s;x.push(y,-g,0),_.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,y=g+u*(c+1),S=g+1+u*(c+1),T=g+1+u*c;m.push(v,y,T),m.push(y,S,T)}this.setIndex(m),this.setAttribute("position",new dr(x,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.width,e.height,e.widthSegments,e.heightSegments)}}var rS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,aS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS="vec3 transformed = vec3( position );",dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,JS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,HM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$M=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QM=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:rS,alphamap_pars_fragment:sS,alphatest_fragment:oS,alphatest_pars_fragment:aS,aomap_fragment:lS,aomap_pars_fragment:uS,begin_vertex:cS,beginnormal_vertex:dS,bsdfs:fS,iridescence_fragment:hS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:vS,color_fragment:xS,color_pars_fragment:yS,color_pars_vertex:SS,color_vertex:MS,common:wS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:bS,displacementmap_pars_vertex:AS,displacementmap_vertex:TS,emissivemap_fragment:CS,emissivemap_pars_fragment:LS,encodings_fragment:PS,encodings_pars_fragment:RS,envmap_fragment:DS,envmap_common_pars_fragment:IS,envmap_pars_fragment:NS,envmap_pars_vertex:US,envmap_physical_pars_fragment:qS,envmap_vertex:kS,fog_vertex:OS,fog_pars_vertex:FS,fog_fragment:zS,fog_pars_fragment:BS,gradientmap_pars_fragment:HS,lightmap_fragment:VS,lightmap_pars_fragment:GS,lights_lambert_fragment:WS,lights_lambert_pars_fragment:jS,lights_pars_begin:XS,lights_toon_fragment:YS,lights_toon_pars_fragment:$S,lights_phong_fragment:KS,lights_phong_pars_fragment:QS,lights_physical_fragment:ZS,lights_physical_pars_fragment:JS,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:rM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:lM,map_particle_fragment:uM,map_particle_pars_fragment:cM,metalnessmap_fragment:dM,metalnessmap_pars_fragment:fM,morphcolor_vertex:hM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:xM,normal_pars_vertex:yM,normal_vertex:SM,normalmap_pars_fragment:MM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:AM,output_fragment:TM,packing:CM,premultiplied_alpha_fragment:LM,project_vertex:PM,dithering_fragment:RM,dithering_pars_fragment:DM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:kM,shadowmap_vertex:OM,shadowmask_pars_fragment:FM,skinbase_vertex:zM,skinning_pars_vertex:BM,skinning_vertex:HM,skinnormal_vertex:VM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:jM,tonemapping_pars_fragment:XM,transmission_fragment:qM,transmission_pars_fragment:YM,uv_pars_fragment:$M,uv_pars_vertex:KM,uv_vertex:QM,worldpos_vertex:ZM,background_vert:JM,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distanceRGBA_vert:a1,distanceRGBA_frag:l1,equirect_vert:u1,equirect_frag:c1,linedashed_vert:d1,linedashed_frag:f1,meshbasic_vert:h1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:w1,meshphysical_frag:E1,meshtoon_vert:b1,meshtoon_frag:A1,points_vert:T1,points_frag:C1,shadow_vert:L1,shadow_frag:P1,sprite_vert:R1,sprite_frag:D1},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},Xn={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Xn.physical={uniforms:Ht([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Da={r:0,b:0,g:0};function I1(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,d,f=null,h=0,m=null;function x(p,c){let g=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?t:e).get(v));const y=n.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(a,l):v&&v.isColor&&(_(v,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Bl)?(d===void 0&&(d=new li(new Ns(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ps(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=v.encoding!==Ze,(f!==v||h!==v.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new li(new cf(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ps(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=v.encoding!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,c){p.getRGB(Da,k_(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function N1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,d=!1;function f(F,$,ie,ne,D){let W=!1;if(o){const V=_(ne,ie,$);u!==V&&(u=V,m(u.object)),W=c(F,ne,ie,D),W&&g(F,ne,ie,D)}else{const V=$.wireframe===!0;(u.geometry!==ne.id||u.program!==ie.id||u.wireframe!==V)&&(u.geometry=ne.id,u.program=ie.id,u.wireframe=V,W=!0)}D!==null&&t.update(D,34963),(W||d)&&(d=!1,P(F,$,ie,ne),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,$,ie){const ne=ie.wireframe===!0;let D=a[F.id];D===void 0&&(D={},a[F.id]=D);let W=D[$.id];W===void 0&&(W={},D[$.id]=W);let V=W[ne];return V===void 0&&(V=p(h()),W[ne]=V),V}function p(F){const $=[],ie=[],ne=[];for(let D=0;D<r;D++)$[D]=0,ie[D]=0,ne[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ie,attributeDivisors:ne,object:F,attributes:{},index:null}}function c(F,$,ie,ne){const D=u.attributes,W=$.attributes;let V=0;const pe=ie.getAttributes();for(const te in pe)if(pe[te].location>=0){const Q=D[te];let le=W[te];if(le===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;V++}return u.attributesNum!==V||u.index!==ne}function g(F,$,ie,ne){const D={},W=$.attributes;let V=0;const pe=ie.getAttributes();for(const te in pe)if(pe[te].location>=0){let Q=W[te];Q===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),D[te]=le,V++}u.attributes=D,u.attributesNum=V,u.index=ne}function v(){const F=u.newAttributes;for(let $=0,ie=F.length;$<ie;$++)F[$]=0}function y(F){S(F,0)}function S(F,$){const ie=u.newAttributes,ne=u.enabledAttributes,D=u.attributeDivisors;ie[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),D[F]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,$),D[F]=$)}function T(){const F=u.newAttributes,$=u.enabledAttributes;for(let ie=0,ne=$.length;ie<ne;ie++)$[ie]!==F[ie]&&(n.disableVertexAttribArray(ie),$[ie]=0)}function C(F,$,ie,ne,D,W){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(F,$,ie,D,W):n.vertexAttribPointer(F,$,ie,ne,D,W)}function P(F,$,ie,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=ne.attributes,W=ie.getAttributes(),V=$.defaultAttributeValues;for(const pe in W){const te=W[pe];if(te.location>=0){let G=D[pe];if(G===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(G=F.instanceColor)),G!==void 0){const Q=G.normalized,le=G.itemSize,ce=t.get(G);if(ce===void 0)continue;const z=ce.buffer,Te=ce.type,be=ce.bytesPerElement;if(G.isInterleavedBufferAttribute){const ue=G.data,Ee=ue.stride,We=G.offset;if(ue.isInstancedInterleavedBuffer){for(let Se=0;Se<te.locationSize;Se++)S(te.location+Se,ue.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<te.locationSize;Se++)y(te.location+Se);n.bindBuffer(34962,z);for(let Se=0;Se<te.locationSize;Se++)C(te.location+Se,le/te.locationSize,Te,Q,Ee*be,(We+le/te.locationSize*Se)*be)}else{if(G.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)S(te.location+ue,G.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ue=0;ue<te.locationSize;ue++)y(te.location+ue);n.bindBuffer(34962,z);for(let ue=0;ue<te.locationSize;ue++)C(te.location+ue,le/te.locationSize,Te,Q,le*be,le/te.locationSize*ue*be)}}else if(V!==void 0){const Q=V[pe];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(te.location,Q);break;case 3:n.vertexAttrib3fv(te.location,Q);break;case 4:n.vertexAttrib4fv(te.location,Q);break;default:n.vertexAttrib1fv(te.location,Q)}}}}T()}function w(){q();for(const F in a){const $=a[F];for(const ie in $){const ne=$[ie];for(const D in ne)x(ne[D].object),delete ne[D];delete $[ie]}delete a[F]}}function E(F){if(a[F.id]===void 0)return;const $=a[F.id];for(const ie in $){const ne=$[ie];for(const D in ne)x(ne[D].object),delete ne[D];delete $[ie]}delete a[F.id]}function H(F){for(const $ in a){const ie=a[$];if(ie[F.id]===void 0)continue;const ne=ie[F.id];for(const D in ne)x(ne[D].object),delete ne[D];delete ie[F.id]}}function q(){N(),d=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function U1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function k1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),_=n.getParameter(34921),p=n.getParameter(36347),c=n.getParameter(36348),g=n.getParameter(36349),v=h>0,y=o||e.has("OES_texture_float"),S=v&&y,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:T}}function O1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,c=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):u();else{const g=s?0:i,v=g*4;let y=c.clippingState||null;l.value=y,y=d(x,h,v,m);for(let S=0;S!==v;++S)y[S]=t[S];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const c=m+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,y=m;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function F1(n){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=Ts:a===Zc&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qc||a===Zc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new eS(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class z1 extends O_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,yp=[.125,.215,.35,.446,.526,.582],nr=20,Xu=new z1,Sp=new qe;let qu=null;const tr=(1+Math.sqrt(5))/2,Xr=1/tr,Mp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,tr,Xr),new I(0,tr,-Xr),new I(Xr,0,tr),new I(-Xr,0,tr),new I(tr,Xr,0),new I(-tr,Xr,0)];class wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Fo,format:Nn,encoding:xr,depthBuffer:!1},r=Ep(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(s)),this._blurMaterial=H1(s,e,t)}return r}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,i,r){const a=new ln(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Sp),d.toneMapping=ci,d.autoClear=!1;const m=new I_({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new li(new Ns,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Sp),_=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;Ia(r,g*v,c>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ts||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mp[(r-1)%Mp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new li(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):nr;p>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);const c=[];let g=0;for(let C=0;C<nr;++C){const P=C/_,w=Math.exp(-P*P/2);c.push(w),C===0?g+=w:C<p&&(g+=2*w)}for(let C=0;C<c.length;C++)c[C]=c[C]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],S=3*y*(r>v-us?r-v+us:0),T=4*(this._cubeSize-y);Ia(t,S,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Xu)}}function B1(n){const e=[],t=[],i=[];let r=n;const s=n-us+1+yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-us?l=yp[o-n+us-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,_=3,p=2,c=1,g=new Float32Array(_*x*m),v=new Float32Array(p*x*m),y=new Float32Array(c*x*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,P=T>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];g.set(w,_*x*T),v.set(h,p*x*T);const E=[T,T,T,T,T,T];y.set(E,c*x*T)}const S=new Ar;S.setAttribute("position",new Kn(g,_)),S.setAttribute("uv",new Kn(v,p)),S.setAttribute("faceIndex",new Kn(y,c)),e.push(S),r>us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ep(n,e,t){const i=new yr(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function H1(n,e,t){const i=new Float32Array(nr),r=new I(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function bp(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ap(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Qc||l===Zc,d=l===Ts||l===Cs;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new wp(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function G1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W1(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,c=_.length;p<c;p++)e.update(_[p],34962)}}function u(f){const h=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let v=0,y=g.length;v<y;v+=3){const S=g[v+0],T=g[v+1],C=g[v+2];h.push(S,T,T,C,C,S)}}else{const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const S=v+0,T=v+1,C=v+2;h.push(S,T,T,C,C,S)}}const p=new(T_(h)?U_:N_)(h,1);p.version=_;const c=s.get(f);c&&e.remove(c),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function j1(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function d(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,a,h*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f}function X1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q1(n,e){return n[0]-e[0]}function Y1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let $=function(){N.dispose(),s.delete(d),d.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let E=d.attributes.position.count*w,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const q=new Float32Array(E*H*4*_),N=new P_(q,E,H,_);N.type=ar,N.needsUpdate=!0;const F=w*4;for(let ie=0;ie<_;ie++){const ne=T[ie],D=C[ie],W=P[ie],V=E*H*4*ie;for(let pe=0;pe<ne.count;pe++){const te=pe*F;v===!0&&(o.fromBufferAttribute(ne,pe),q[V+te+0]=o.x,q[V+te+1]=o.y,q[V+te+2]=o.z,q[V+te+3]=0),y===!0&&(o.fromBufferAttribute(D,pe),q[V+te+4]=o.x,q[V+te+5]=o.y,q[V+te+6]=o.z,q[V+te+7]=0),S===!0&&(o.fromBufferAttribute(W,pe),q[V+te+8]=o.x,q[V+te+9]=o.y,q[V+te+10]=o.z,q[V+te+11]=W.itemSize===4?o.w:1)}}p={count:_,texture:N,size:new Pe(E,H)},s.set(d,p),d.addEventListener("dispose",$)}let c=0;for(let v=0;v<h.length;v++)c+=h[v];const g=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[d.id]=_}for(let y=0;y<x;y++){const S=_[y];S[0]=y,S[1]=h[y]}_.sort(Y1);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(q1);const p=d.morphAttributes.position,c=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const S=a[y],T=S[0],C=S[1];T!==Number.MAX_SAFE_INTEGER&&C?(p&&d.getAttribute("morphTarget"+y)!==p[T]&&d.setAttribute("morphTarget"+y,p[T]),c&&d.getAttribute("morphNormal"+y)!==c[T]&&d.setAttribute("morphNormal"+y,c[T]),r[y]=C,g+=C):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),c&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const v=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function K1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const B_=new dn,H_=new P_,V_=new Fy,G_=new F_,Tp=[],Cp=[],Lp=new Float32Array(16),Pp=new Float32Array(9),Rp=new Float32Array(4);function Us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function tw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Rp.set(i),n.uniformMatrix2fv(this.addr,!1,Rp),Mt(t,i)}}function nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Pp.set(i),n.uniformMatrix3fv(this.addr,!1,Pp),Mt(t,i)}}function iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Lp.set(i),n.uniformMatrix4fv(this.addr,!1,Lp),Mt(t,i)}}function rw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function lw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function fw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||B_,r)}function hw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||V_,r)}function pw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||G_,r)}function mw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||H_,r)}function gw(n){switch(n){case 5126:return Q1;case 35664:return Z1;case 35665:return J1;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return uw;case 36295:return cw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function _w(n,e){n.uniform1fv(this.addr,e)}function vw(n,e){const t=Us(e,this.size,2);n.uniform2fv(this.addr,t)}function xw(n,e){const t=Us(e,this.size,3);n.uniform3fv(this.addr,t)}function yw(n,e){const t=Us(e,this.size,4);n.uniform4fv(this.addr,t)}function Sw(n,e){const t=Us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mw(n,e){const t=Us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ww(n,e){const t=Us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ew(n,e){n.uniform1iv(this.addr,e)}function bw(n,e){n.uniform2iv(this.addr,e)}function Aw(n,e){n.uniform3iv(this.addr,e)}function Tw(n,e){n.uniform4iv(this.addr,e)}function Cw(n,e){n.uniform1uiv(this.addr,e)}function Lw(n,e){n.uniform2uiv(this.addr,e)}function Pw(n,e){n.uniform3uiv(this.addr,e)}function Rw(n,e){n.uniform4uiv(this.addr,e)}function Dw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||B_,s[o])}function Iw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||V_,s[o])}function Nw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||G_,s[o])}function Uw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||H_,s[o])}function kw(n){switch(n){case 5126:return _w;case 35664:return vw;case 35665:return xw;case 35666:return yw;case 35674:return Sw;case 35675:return Mw;case 35676:return ww;case 5124:case 35670:return Ew;case 35667:case 35671:return bw;case 35668:case 35672:return Aw;case 35669:case 35673:return Tw;case 5125:return Cw;case 36294:return Lw;case 36295:return Pw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gw(t.type)}}class Fw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=kw(t.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function Dp(n,e){n.seq.push(e),n.map[e.id]=e}function Bw(n,e,t){const i=n.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Dp(t,u===void 0?new Ow(a,n,e):new Fw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zw(a),Dp(t,f)),t=f}}}class $a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ip(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Hw=0;function Vw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Gw(n){switch(n){case xr:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Np(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vw(n.getShaderSource(e),o)}else return r}function Ww(n,e){const t=Gw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jw(n,e){let t;switch(e){case ry:t="Linear";break;case sy:t="Reinhard";break;case oy:t="OptimizedCineon";break;case ay:t="ACESFilmic";break;case ly:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(so).join(`
`)}function qw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function Up(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(n){return n.replace($w,Kw)}function Kw(n,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return id(t)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(n){return n.replace(Qw,Zw)}function Zw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ro&&(e="SHADOWMAP_TYPE_VSM"),e}function eE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case Cs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function nE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case M_:e="ENVMAP_BLENDING_MULTIPLY";break;case ny:e="ENVMAP_BLENDING_MIX";break;case iy:e="ENVMAP_BLENDING_ADD";break}return e}function iE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jw(t),u=eE(t),d=tE(t),f=nE(t),h=iE(t),m=t.isWebGL2?"":Xw(t),x=qw(s),_=r.createProgram();let p,c,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(so).join(`
`),p.length>0&&(p+=`
`),c=[m,x].filter(so).join(`
`),c.length>0&&(c+=`
`)):(p=[Fp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),c=[m,Fp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ci?jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Ww("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=id(o),o=Up(o,t),o=kp(o,t),a=id(a),a=Up(a,t),a=kp(a,t),o=Op(o),a=Op(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+p+o,y=g+c+a,S=Ip(r,35633,v),T=Ip(r,35632,y);if(r.attachShader(_,S),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const w=r.getProgramInfoLog(_).trim(),E=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(T).trim();let q=!0,N=!0;if(r.getProgramParameter(_,35714)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,T);else{const F=Np(r,S,"vertex"),$=Np(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+w+`
`+F+`
`+$)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(E===""||H==="")&&(N=!1);N&&(this.diagnostics={runnable:q,programLog:w,vertexShader:{log:E,prefix:p},fragmentShader:{log:H,prefix:c}})}r.deleteShader(S),r.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new $a(r,_)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=Yw(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Hw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let sE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aE(e),t.set(e,i)),i}}class aE{constructor(e){this.id=sE++,this.code=e,this.usedTimes=0}}function lE(n,e,t,i,r,s,o){const a=new lf,l=new oE,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===1?"uv2":"uv"}function p(w,E,H,q,N){const F=q.fog,$=N.geometry,ie=w.isMeshStandardMaterial?q.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||ie),D=ne&&ne.mapping===Bl?ne.image.height:null,W=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const V=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=V!==void 0?V.length:0;let te=0;$.morphAttributes.position!==void 0&&(te=1),$.morphAttributes.normal!==void 0&&(te=2),$.morphAttributes.color!==void 0&&(te=3);let G,Q,le,ce;if(W){const ge=Xn[W];G=ge.vertexShader,Q=ge.fragmentShader}else G=w.vertexShader,Q=w.fragmentShader,l.update(w),le=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const z=n.getRenderTarget(),Te=N.isInstancedMesh===!0,be=!!w.map,ue=!!w.matcap,Ee=!!ne,We=!!w.aoMap,Se=!!w.lightMap,Re=!!w.bumpMap,lt=!!w.normalMap,it=!!w.displacementMap,pt=!!w.emissiveMap,ct=!!w.metalnessMap,Ge=!!w.roughnessMap,Ye=w.clearcoat>0,Rt=w.iridescence>0,A=w.sheen>0,M=w.transmission>0,j=Ye&&!!w.clearcoatMap,re=Ye&&!!w.clearcoatNormalMap,ae=Ye&&!!w.clearcoatRoughnessMap,fe=Rt&&!!w.iridescenceMap,L=Rt&&!!w.iridescenceThicknessMap,Z=A&&!!w.sheenColorMap,B=A&&!!w.sheenRoughnessMap,he=!!w.specularMap,ve=!!w.specularColorMap,ye=!!w.specularIntensityMap,me=M&&!!w.transmissionMap,xe=M&&!!w.thicknessMap,Ce=!!w.gradientMap,Ne=!!w.alphaMap,dt=w.alphaTest>0,R=!!w.extensions,Y=!!$.attributes.uv2;return{isWebGL2:d,shaderID:W,shaderName:w.type,vertexShader:G,fragmentShader:Q,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:Te,instancingColor:Te&&N.instanceColor!==null,supportsVertexTextures:h,outputEncoding:z===null?n.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:xr,map:be,matcap:ue,envMap:Ee,envMapMode:Ee&&ne.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:Se,bumpMap:Re,normalMap:lt,displacementMap:h&&it,emissiveMap:pt,normalMapObjectSpace:lt&&w.normalMapType===Ty,normalMapTangentSpace:lt&&w.normalMapType===b_,decodeVideoTexture:be&&w.map.isVideoTexture===!0&&w.map.encoding===Ze,metalnessMap:ct,roughnessMap:Ge,clearcoat:Ye,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:Rt,iridescenceMap:fe,iridescenceThicknessMap:L,sheen:A,sheenColorMap:Z,sheenRoughnessMap:B,specularMap:he,specularColorMap:ve,specularIntensityMap:ye,transmission:M,transmissionMap:me,thicknessMap:xe,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===_s,alphaMap:Ne,alphaTest:dt,combine:w.combine,mapUv:be&&_(w.map.channel),aoMapUv:We&&_(w.aoMap.channel),lightMapUv:Se&&_(w.lightMap.channel),bumpMapUv:Re&&_(w.bumpMap.channel),normalMapUv:lt&&_(w.normalMap.channel),displacementMapUv:it&&_(w.displacementMap.channel),emissiveMapUv:pt&&_(w.emissiveMap.channel),metalnessMapUv:ct&&_(w.metalnessMap.channel),roughnessMapUv:Ge&&_(w.roughnessMap.channel),clearcoatMapUv:j&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:L&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:B&&_(w.sheenRoughnessMap.channel),specularMapUv:he&&_(w.specularMap.channel),specularColorMapUv:ve&&_(w.specularColorMap.channel),specularIntensityMapUv:ye&&_(w.specularIntensityMap.channel),transmissionMapUv:me&&_(w.transmissionMap.channel),thicknessMapUv:xe&&_(w.thicknessMap.channel),alphaMapUv:Ne&&_(w.alphaMap.channel),vertexTangents:lt&&!!$.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUvs2:Y,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(be||Ne),fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:ci,useLegacyLights:n.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===en,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:R&&w.extensions.derivatives===!0,extensionFragDepth:R&&w.extensions.fragDepth===!0,extensionDrawBuffers:R&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function c(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)E.push(H),E.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(g(E,w),v(E,w),E.push(n.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function g(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function v(w,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),w.push(a.mask)}function y(w){const E=x[w.type];let H;if(E){const q=Xn[E];H=Ky.clone(q.uniforms)}else H=w.uniforms;return H}function S(w,E){let H;for(let q=0,N=u.length;q<N;q++){const F=u[q];if(F.cacheKey===E){H=F,++H.usedTimes;break}}return H===void 0&&(H=new rE(n,E,w,s),u.push(H)),H}function T(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:P}}function uE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,_,p){let c=n[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},n[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=m,c.groupOrder=x,c.renderOrder=f.renderOrder,c.z=_,c.group=p),e++,c}function a(f,h,m,x,_,p){const c=o(f,h,m,x,_,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):t.push(c)}function l(f,h,m,x,_,p){const c=o(f,h,m,x,_,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):t.unshift(c)}function u(f,h){t.length>1&&t.sort(f||cE),i.length>1&&i.sort(h||zp),r.length>1&&r.sort(h||zp)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function dE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bp,n.set(i,[o])):r>=s.length?(o=new Bp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pE=0;function mE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gE(n,e){const t=new fE,i=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new vt,a=new vt;function l(d,f){let h=0,m=0,x=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,c=0,g=0,v=0,y=0,S=0,T=0,C=0,P=0;d.sort(mE);const w=f===!0?Math.PI:1;for(let H=0,q=d.length;H<q;H++){const N=d[H],F=N.color,$=N.intensity,ie=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=F.r*$*w,m+=F.g*$*w,x+=F.b*$*w;else if(N.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(N.sh.coefficients[D],$);else if(N.isDirectionalLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const W=N.shadow,V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.directionalShadow[_]=V,r.directionalShadowMap[_]=ne,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=D,_++}else if(N.isSpotLight){const D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(F).multiplyScalar($*w),D.distance=ie,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,r.spot[c]=D;const W=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,W.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[c]=W.matrix,N.castShadow){const V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.spotShadow[c]=V,r.spotShadowMap[c]=ne,T++}c++}else if(N.isRectAreaLight){const D=t.get(N);D.color.copy(F).multiplyScalar($),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),r.rectArea[g]=D,g++}else if(N.isPointLight){const D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*w),D.distance=N.distance,D.decay=N.decay,N.castShadow){const W=N.shadow,V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,r.pointShadow[p]=V,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=N.shadow.matrix,S++}r.point[p]=D,p++}else if(N.isHemisphereLight){const D=t.get(N);D.skyColor.copy(N.color).multiplyScalar($*w),D.groundColor.copy(N.groundColor).multiplyScalar($*w),r.hemi[v]=D,v++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const E=r.hash;(E.directionalLength!==_||E.pointLength!==p||E.spotLength!==c||E.rectAreaLength!==g||E.hemiLength!==v||E.numDirectionalShadows!==y||E.numPointShadows!==S||E.numSpotShadows!==T||E.numSpotMaps!==C)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+C-P,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=P,E.directionalLength=_,E.pointLength=p,E.spotLength=c,E.rectAreaLength=g,E.hemiLength=v,E.numDirectionalShadows=y,E.numPointShadows=S,E.numSpotShadows=T,E.numSpotMaps=C,r.version=pE++)}function u(d,f){let h=0,m=0,x=0,_=0,p=0;const c=f.matrixWorldInverse;for(let g=0,v=d.length;g<v;g++){const y=d[g];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(c),h++}else if(y.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Hp(n,e){const t=new gE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function _E(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Hp(n,e),t.set(s,[l])):o>=a.length?(l=new Hp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class vE extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ME(n,e,t){let i=new uf;const r=new Pe,s=new Pe,o=new nt,a=new vE({depthPacking:Ay}),l=new xE,u={},d=t.maxTextureSize,f={[Bi]:en,[en]:Bi,[si]:si},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:yE,fragmentShader:SE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ar;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new li(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_,this.render=function(y,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=n.getRenderTarget(),P=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),E=n.state;E.setBlending(Oi),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let H=0,q=y.length;H<q;H++){const N=y[H],F=N.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const $=F.getFrameExtents();if(r.multiply($),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,F.mapSize.y=s.y)),F.map===null){const ne=this.type!==ro?{minFilter:Gt,magFilter:Gt}:{};F.map=new yr(r.x,r.y,ne),F.map.texture.name=N.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ie=F.getViewportCount();for(let ne=0;ne<ie;ne++){const D=F.getViewport(ne);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),E.viewport(o),F.updateMatrices(N,ne),i=F.getFrustum(),v(S,T,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===ro&&c(F,T),F.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(C,P,w)};function c(y,S){const T=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,T,h,_,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,T,m,_,null)}function g(y,S,T,C){let P=null;const w=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)P=w;else if(P=T.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const E=P.uuid,H=S.uuid;let q=u[E];q===void 0&&(q={},u[E]=q);let N=q[H];N===void 0&&(N=P.clone(),q[H]=N),P=N}if(P.visible=S.visible,P.wireframe=S.wireframe,C===ro?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const E=n.properties.get(P);E.light=T}return P}function v(y,S,T,C,P){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===ro)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const H=e.update(y),q=y.material;if(Array.isArray(q)){const N=H.groups;for(let F=0,$=N.length;F<$;F++){const ie=N[F],ne=q[ie.materialIndex];if(ne&&ne.visible){const D=g(y,ne,C,P);n.renderBufferDirect(T,null,H,D,y,ie)}}}else if(q.visible){const N=g(y,q,C,P);n.renderBufferDirect(T,null,H,N,y,null)}}const E=y.children;for(let H=0,q=E.length;H<q;H++)v(E[H],S,T,C,P)}}function wE(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const Y=new nt;let se=null;const ge=new nt(0,0,0,0);return{setMask:function(Me){se!==Me&&!R&&(n.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){R=Me},setClear:function(Me,Ke,rt,Dt,gi){gi===!0&&(Me*=Dt,Ke*=Dt,rt*=Dt),Y.set(Me,Ke,rt,Dt),ge.equals(Y)===!1&&(n.clearColor(Me,Ke,rt,Dt),ge.copy(Y))},reset:function(){R=!1,se=null,ge.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,se=null,ge=null;return{setTest:function(Me){Me?z(2929):Te(2929)},setMask:function(Me){Y!==Me&&!R&&(n.depthMask(Me),Y=Me)},setFunc:function(Me){if(se!==Me){switch(Me){case $x:n.depthFunc(512);break;case Kx:n.depthFunc(519);break;case Qx:n.depthFunc(513);break;case Kc:n.depthFunc(515);break;case Zx:n.depthFunc(514);break;case Jx:n.depthFunc(518);break;case ey:n.depthFunc(516);break;case ty:n.depthFunc(517);break;default:n.depthFunc(515)}se=Me}},setLocked:function(Me){R=Me},setClear:function(Me){ge!==Me&&(n.clearDepth(Me),ge=Me)},reset:function(){R=!1,Y=null,se=null,ge=null}}}function o(){let R=!1,Y=null,se=null,ge=null,Me=null,Ke=null,rt=null,Dt=null,gi=null;return{setTest:function(ft){R||(ft?z(2960):Te(2960))},setMask:function(ft){Y!==ft&&!R&&(n.stencilMask(ft),Y=ft)},setFunc:function(ft,mn,Bn){(se!==ft||ge!==mn||Me!==Bn)&&(n.stencilFunc(ft,mn,Bn),se=ft,ge=mn,Me=Bn)},setOp:function(ft,mn,Bn){(Ke!==ft||rt!==mn||Dt!==Bn)&&(n.stencilOp(ft,mn,Bn),Ke=ft,rt=mn,Dt=Bn)},setLocked:function(ft){R=ft},setClear:function(ft){gi!==ft&&(n.clearStencil(ft),gi=ft)},reset:function(){R=!1,Y=null,se=null,ge=null,Me=null,Ke=null,rt=null,Dt=null,gi=null}}}const a=new r,l=new s,u=new o,d=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,_=[],p=null,c=!1,g=null,v=null,y=null,S=null,T=null,C=null,P=null,w=!1,E=null,H=null,q=null,N=null,F=null;const $=n.getParameter(35661);let ie=!1,ne=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(D)[1]),ie=ne>=1):D.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),ie=ne>=2);let W=null,V={};const pe=n.getParameter(3088),te=n.getParameter(2978),G=new nt().fromArray(pe),Q=new nt().fromArray(te);function le(R,Y,se){const ge=new Uint8Array(4),Me=n.createTexture();n.bindTexture(R,Me),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Ke=0;Ke<se;Ke++)n.texImage2D(Y+Ke,0,6408,1,1,0,6408,5121,ge);return Me}const ce={};ce[3553]=le(3553,3553,1),ce[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),z(2929),l.setFunc(Kc),it(!1),pt(Th),z(2884),Re(Oi);function z(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Te(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function be(R,Y){return m[R]!==Y?(n.bindFramebuffer(R,Y),m[R]=Y,i&&(R===36009&&(m[36160]=Y),R===36160&&(m[36009]=Y)),!0):!1}function ue(R,Y){let se=_,ge=!1;if(R)if(se=x.get(Y),se===void 0&&(se=[],x.set(Y,se)),R.isWebGLMultipleRenderTargets){const Me=R.texture;if(se.length!==Me.length||se[0]!==36064){for(let Ke=0,rt=Me.length;Ke<rt;Ke++)se[Ke]=36064+Ke;se.length=Me.length,ge=!0}}else se[0]!==36064&&(se[0]=36064,ge=!0);else se[0]!==1029&&(se[0]=1029,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ee(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const We={[Yr]:32774,[Fx]:32778,[zx]:32779};if(i)We[Rh]=32775,We[Dh]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(We[Rh]=R.MIN_EXT,We[Dh]=R.MAX_EXT)}const Se={[Bx]:0,[Hx]:1,[Vx]:768,[y_]:770,[Yx]:776,[Xx]:774,[Wx]:772,[Gx]:769,[S_]:771,[qx]:775,[jx]:773};function Re(R,Y,se,ge,Me,Ke,rt,Dt){if(R===Oi){c===!0&&(Te(3042),c=!1);return}if(c===!1&&(z(3042),c=!0),R!==Ox){if(R!==g||Dt!==w){if((v!==Yr||T!==Yr)&&(n.blendEquation(32774),v=Yr,T=Yr),Dt)switch(R){case _s:n.blendFuncSeparate(1,771,1,771);break;case Ch:n.blendFunc(1,1);break;case Lh:n.blendFuncSeparate(0,769,0,1);break;case Ph:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case _s:n.blendFuncSeparate(770,771,1,771);break;case Ch:n.blendFunc(770,1);break;case Lh:n.blendFuncSeparate(0,769,0,1);break;case Ph:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,S=null,C=null,P=null,g=R,w=Dt}return}Me=Me||Y,Ke=Ke||se,rt=rt||ge,(Y!==v||Me!==T)&&(n.blendEquationSeparate(We[Y],We[Me]),v=Y,T=Me),(se!==y||ge!==S||Ke!==C||rt!==P)&&(n.blendFuncSeparate(Se[se],Se[ge],Se[Ke],Se[rt]),y=se,S=ge,C=Ke,P=rt),g=R,w=!1}function lt(R,Y){R.side===si?Te(2884):z(2884);let se=R.side===en;Y&&(se=!se),it(se),R.blending===_s&&R.transparent===!1?Re(Oi):Re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ge=R.stencilWrite;u.setTest(ge),ge&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ge(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?z(32926):Te(32926)}function it(R){E!==R&&(R?n.frontFace(2304):n.frontFace(2305),E=R)}function pt(R){R!==Nx?(z(2884),R!==H&&(R===Th?n.cullFace(1029):R===Ux?n.cullFace(1028):n.cullFace(1032))):Te(2884),H=R}function ct(R){R!==q&&(ie&&n.lineWidth(R),q=R)}function Ge(R,Y,se){R?(z(32823),(N!==Y||F!==se)&&(n.polygonOffset(Y,se),N=Y,F=se)):Te(32823)}function Ye(R){R?z(3089):Te(3089)}function Rt(R){R===void 0&&(R=33984+$-1),W!==R&&(n.activeTexture(R),W=R)}function A(R,Y,se){se===void 0&&(W===null?se=33984+$-1:se=W);let ge=V[se];ge===void 0&&(ge={type:void 0,texture:void 0},V[se]=ge),(ge.type!==R||ge.texture!==Y)&&(W!==se&&(n.activeTexture(se),W=se),n.bindTexture(R,Y||ce[R]),ge.type=R,ge.texture=Y)}function M(){const R=V[W];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){G.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),G.copy(R))}function xe(R){Q.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Q.copy(R))}function Ce(R,Y){let se=f.get(Y);se===void 0&&(se=new WeakMap,f.set(Y,se));let ge=se.get(R);ge===void 0&&(ge=n.getUniformBlockIndex(Y,R.name),se.set(R,ge))}function Ne(R,Y){const ge=f.get(Y).get(R);d.get(Y)!==ge&&(n.uniformBlockBinding(Y,ge,R.__bindingPointIndex),d.set(Y,ge))}function dt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},W=null,V={},m={},x=new WeakMap,_=[],p=null,c=!1,g=null,v=null,y=null,S=null,T=null,C=null,P=null,w=!1,E=null,H=null,q=null,N=null,F=null,G.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:z,disable:Te,bindFramebuffer:be,drawBuffers:ue,useProgram:Ee,setBlending:Re,setMaterial:lt,setFlipSided:it,setCullFace:pt,setLineWidth:ct,setPolygonOffset:Ge,setScissorTest:Ye,activeTexture:Rt,bindTexture:A,unbindTexture:M,compressedTexImage2D:j,compressedTexImage3D:re,texImage2D:ve,texImage3D:ye,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:B,texStorage3D:he,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:L,compressedTexSubImage3D:Z,scissor:me,viewport:xe,reset:dt}}function EE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return c?new OffscreenCanvas(A,M):Sl("canvas")}function v(A,M,j,re){let ae=1;if((A.width>re||A.height>re)&&(ae=re/Math.max(A.width,A.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=M?Py:Math.floor,L=fe(ae*A.width),Z=fe(ae*A.height);_===void 0&&(_=g(L,Z));const B=j?g(L,Z):_;return B.width=L,B.height=Z,B.getContext("2d").drawImage(A,0,0,L,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+L+"x"+Z+")."),B}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return sp(A.width)&&sp(A.height)}function S(A){return a?!1:A.wrapS!==In||A.wrapT!==In||A.minFilter!==Gt&&A.minFilter!==xn}function T(A,M){return A.generateMipmaps&&M&&A.minFilter!==Gt&&A.minFilter!==xn}function C(A){n.generateMipmap(A)}function P(A,M,j,re,ae=!1){if(a===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=M;return M===6403&&(j===5126&&(fe=33326),j===5131&&(fe=33325),j===5121&&(fe=33321)),M===33319&&(j===5126&&(fe=33328),j===5131&&(fe=33327),j===5121&&(fe=33323)),M===6408&&(j===5126&&(fe=34836),j===5131&&(fe=34842),j===5121&&(fe=re===Ze&&ae===!1?35907:32856),j===32819&&(fe=32854),j===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(A,M,j){return T(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){return A===Gt||A===Ih||A===yu?9728:9729}function H(A){const M=A.target;M.removeEventListener("dispose",H),N(M),M.isVideoTexture&&x.delete(M)}function q(A){const M=A.target;M.removeEventListener("dispose",q),$(M)}function N(A){const M=i.get(A);if(M.__webglInit===void 0)return;const j=A.source,re=p.get(j);if(re){const ae=re[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(A),Object.keys(re).length===0&&p.delete(j)}i.remove(A)}function F(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const j=A.source,re=p.get(j);delete re[M.__cacheKey],o.memory.textures--}function $(A){const M=A.texture,j=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,fe=M.length;ae<fe;ae++){const L=i.get(M[ae]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(A)}let ie=0;function ne(){ie=0}function D(){const A=ie;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),ie+=1,A}function W(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function V(A,M){const j=i.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(j,A,M);return}}t.bindTexture(3553,j.__webglTexture,33984+M)}function pe(A,M){const j=i.get(A);if(A.version>0&&j.__version!==A.version){Te(j,A,M);return}t.bindTexture(35866,j.__webglTexture,33984+M)}function te(A,M){const j=i.get(A);if(A.version>0&&j.__version!==A.version){Te(j,A,M);return}t.bindTexture(32879,j.__webglTexture,33984+M)}function G(A,M){const j=i.get(A);if(A.version>0&&j.__version!==A.version){be(j,A,M);return}t.bindTexture(34067,j.__webglTexture,33984+M)}const Q={[Jc]:10497,[In]:33071,[ed]:33648},le={[Gt]:9728,[Ih]:9984,[yu]:9986,[xn]:9729,[uy]:9985,[Oo]:9987};function ce(A,M,j){if(j?(n.texParameteri(A,10242,Q[M.wrapS]),n.texParameteri(A,10243,Q[M.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,Q[M.wrapR]),n.texParameteri(A,10240,le[M.magFilter]),n.texParameteri(A,10241,le[M.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(M.wrapS!==In||M.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,E(M.magFilter)),n.texParameteri(A,10241,E(M.minFilter)),M.minFilter!==Gt&&M.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Gt||M.minFilter!==yu&&M.minFilter!==Oo||M.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function z(A,M){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",H));const re=M.source;let ae=p.get(re);ae===void 0&&(ae={},p.set(re,ae));const fe=W(M);if(fe!==A.__cacheKey){ae[fe]===void 0&&(ae[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[fe].usedTimes++;const L=ae[A.__cacheKey];L!==void 0&&(ae[A.__cacheKey].usedTimes--,L.usedTimes===0&&F(M)),A.__cacheKey=fe,A.__webglTexture=ae[fe].texture}return j}function Te(A,M,j){let re=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=35866),M.isData3DTexture&&(re=32879);const ae=z(A,M),fe=M.source;t.bindTexture(re,A.__webglTexture,33984+j);const L=i.get(fe);if(fe.version!==L.__version||ae===!0){t.activeTexture(33984+j),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const Z=S(M)&&y(M.image)===!1;let B=v(M.image,Z,!1,d);B=Rt(M,B);const he=y(B)||a,ve=s.convert(M.format,M.encoding);let ye=s.convert(M.type),me=P(M.internalFormat,ve,ye,M.encoding,M.isVideoTexture);ce(re,M,he);let xe;const Ce=M.mipmaps,Ne=a&&M.isVideoTexture!==!0,dt=L.__version===void 0||ae===!0,R=w(M,B,he);if(M.isDepthTexture)me=6402,a?M.type===ar?me=36012:M.type===or?me=33190:M.type===vs?me=35056:me=33189:M.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===cr&&me===6402&&M.type!==E_&&M.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=or,ye=s.convert(M.type)),M.format===Ls&&me===6402&&(me=34041,M.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=vs,ye=s.convert(M.type))),dt&&(Ne?t.texStorage2D(3553,1,me,B.width,B.height):t.texImage2D(3553,0,me,B.width,B.height,0,ve,ye,null));else if(M.isDataTexture)if(Ce.length>0&&he){Ne&&dt&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let Y=0,se=Ce.length;Y<se;Y++)xe=Ce[Y],Ne?t.texSubImage2D(3553,Y,0,0,xe.width,xe.height,ve,ye,xe.data):t.texImage2D(3553,Y,me,xe.width,xe.height,0,ve,ye,xe.data);M.generateMipmaps=!1}else Ne?(dt&&t.texStorage2D(3553,R,me,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,ve,ye,B.data)):t.texImage2D(3553,0,me,B.width,B.height,0,ve,ye,B.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&dt&&t.texStorage3D(35866,R,me,Ce[0].width,Ce[0].height,B.depth);for(let Y=0,se=Ce.length;Y<se;Y++)xe=Ce[Y],M.format!==Nn?ve!==null?Ne?t.compressedTexSubImage3D(35866,Y,0,0,0,xe.width,xe.height,B.depth,ve,xe.data,0,0):t.compressedTexImage3D(35866,Y,me,xe.width,xe.height,B.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,Y,0,0,0,xe.width,xe.height,B.depth,ve,ye,xe.data):t.texImage3D(35866,Y,me,xe.width,xe.height,B.depth,0,ve,ye,xe.data)}else{Ne&&dt&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let Y=0,se=Ce.length;Y<se;Y++)xe=Ce[Y],M.format!==Nn?ve!==null?Ne?t.compressedTexSubImage2D(3553,Y,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(3553,Y,me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,Y,0,0,xe.width,xe.height,ve,ye,xe.data):t.texImage2D(3553,Y,me,xe.width,xe.height,0,ve,ye,xe.data)}else if(M.isDataArrayTexture)Ne?(dt&&t.texStorage3D(35866,R,me,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ve,ye,B.data)):t.texImage3D(35866,0,me,B.width,B.height,B.depth,0,ve,ye,B.data);else if(M.isData3DTexture)Ne?(dt&&t.texStorage3D(32879,R,me,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ve,ye,B.data)):t.texImage3D(32879,0,me,B.width,B.height,B.depth,0,ve,ye,B.data);else if(M.isFramebufferTexture){if(dt)if(Ne)t.texStorage2D(3553,R,me,B.width,B.height);else{let Y=B.width,se=B.height;for(let ge=0;ge<R;ge++)t.texImage2D(3553,ge,me,Y,se,0,ve,ye,null),Y>>=1,se>>=1}}else if(Ce.length>0&&he){Ne&&dt&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let Y=0,se=Ce.length;Y<se;Y++)xe=Ce[Y],Ne?t.texSubImage2D(3553,Y,0,0,ve,ye,xe):t.texImage2D(3553,Y,me,ve,ye,xe);M.generateMipmaps=!1}else Ne?(dt&&t.texStorage2D(3553,R,me,B.width,B.height),t.texSubImage2D(3553,0,0,0,ve,ye,B)):t.texImage2D(3553,0,me,ve,ye,B);T(M,he)&&C(re),L.__version=fe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function be(A,M,j){if(M.image.length!==6)return;const re=z(A,M),ae=M.source;t.bindTexture(34067,A.__webglTexture,33984+j);const fe=i.get(ae);if(ae.version!==fe.__version||re===!0){t.activeTexture(33984+j),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const L=M.isCompressedTexture||M.image[0].isCompressedTexture,Z=M.image[0]&&M.image[0].isDataTexture,B=[];for(let Y=0;Y<6;Y++)!L&&!Z?B[Y]=v(M.image[Y],!1,!0,u):B[Y]=Z?M.image[Y].image:M.image[Y],B[Y]=Rt(M,B[Y]);const he=B[0],ve=y(he)||a,ye=s.convert(M.format,M.encoding),me=s.convert(M.type),xe=P(M.internalFormat,ye,me,M.encoding),Ce=a&&M.isVideoTexture!==!0,Ne=fe.__version===void 0||re===!0;let dt=w(M,he,ve);ce(34067,M,ve);let R;if(L){Ce&&Ne&&t.texStorage2D(34067,dt,xe,he.width,he.height);for(let Y=0;Y<6;Y++){R=B[Y].mipmaps;for(let se=0;se<R.length;se++){const ge=R[se];M.format!==Nn?ye!==null?Ce?t.compressedTexSubImage2D(34069+Y,se,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(34069+Y,se,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+Y,se,0,0,ge.width,ge.height,ye,me,ge.data):t.texImage2D(34069+Y,se,xe,ge.width,ge.height,0,ye,me,ge.data)}}}else{R=M.mipmaps,Ce&&Ne&&(R.length>0&&dt++,t.texStorage2D(34067,dt,xe,B[0].width,B[0].height));for(let Y=0;Y<6;Y++)if(Z){Ce?t.texSubImage2D(34069+Y,0,0,0,B[Y].width,B[Y].height,ye,me,B[Y].data):t.texImage2D(34069+Y,0,xe,B[Y].width,B[Y].height,0,ye,me,B[Y].data);for(let se=0;se<R.length;se++){const Me=R[se].image[Y].image;Ce?t.texSubImage2D(34069+Y,se+1,0,0,Me.width,Me.height,ye,me,Me.data):t.texImage2D(34069+Y,se+1,xe,Me.width,Me.height,0,ye,me,Me.data)}}else{Ce?t.texSubImage2D(34069+Y,0,0,0,ye,me,B[Y]):t.texImage2D(34069+Y,0,xe,ye,me,B[Y]);for(let se=0;se<R.length;se++){const ge=R[se];Ce?t.texSubImage2D(34069+Y,se+1,0,0,ye,me,ge.image[Y]):t.texImage2D(34069+Y,se+1,xe,ye,me,ge.image[Y])}}}T(M,ve)&&C(34067),fe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,j,re,ae){const fe=s.convert(j.format,j.encoding),L=s.convert(j.type),Z=P(j.internalFormat,fe,L,j.encoding);i.get(M).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,Z,M.width,M.height,M.depth,0,fe,L,null):t.texImage2D(ae,0,Z,M.width,M.height,0,fe,L,null)),t.bindFramebuffer(36160,A),Ge(M)?h.framebufferTexture2DMultisampleEXT(36160,re,ae,i.get(j).__webglTexture,0,ct(M)):(ae===3553||ae>=34069&&ae<=34074)&&n.framebufferTexture2D(36160,re,ae,i.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(A,M,j){if(n.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let re=33189;if(j||Ge(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ar?re=36012:ae.type===or&&(re=33190));const fe=ct(M);Ge(M)?h.renderbufferStorageMultisampleEXT(36161,fe,re,M.width,M.height):n.renderbufferStorageMultisample(36161,fe,re,M.width,M.height)}else n.renderbufferStorage(36161,re,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=ct(M);j&&Ge(M)===!1?n.renderbufferStorageMultisample(36161,re,35056,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(36161,re,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<re.length;ae++){const fe=re[ae],L=s.convert(fe.format,fe.encoding),Z=s.convert(fe.type),B=P(fe.internalFormat,L,Z,fe.encoding),he=ct(M);j&&Ge(M)===!1?n.renderbufferStorageMultisample(36161,he,B,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(36161,he,B,M.width,M.height):n.renderbufferStorage(36161,B,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function We(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ae=ct(M);if(M.depthTexture.format===cr)Ge(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,ae):n.framebufferTexture2D(36160,36096,3553,re,0);else if(M.depthTexture.format===Ls)Ge(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,ae):n.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Se(A){const M=i.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,A)}else if(j){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=n.createRenderbuffer(),Ee(M.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ee(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Re(A,M,j){const re=i.get(A);M!==void 0&&ue(re.__webglFramebuffer,A,A.texture,36064,3553),j!==void 0&&Se(A)}function lt(A){const M=A.texture,j=i.get(A),re=i.get(M);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,L=y(A)||a;if(ae){j.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)j.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const Z=A.texture;for(let B=0,he=Z.length;B<he;B++){const ve=i.get(Z[B]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ge(A)===!1){const Z=fe?M:[M];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let B=0;B<Z.length;B++){const he=Z[B];j.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(36161,j.__webglColorRenderbuffer[B]);const ve=s.convert(he.format,he.encoding),ye=s.convert(he.type),me=P(he.internalFormat,ve,ye,he.encoding,A.isXRRenderTarget===!0),xe=ct(A);n.renderbufferStorageMultisample(36161,xe,me,A.width,A.height),n.framebufferRenderbuffer(36160,36064+B,36161,j.__webglColorRenderbuffer[B])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,re.__webglTexture),ce(34067,M,L);for(let Z=0;Z<6;Z++)ue(j.__webglFramebuffer[Z],A,M,36064,34069+Z);T(M,L)&&C(34067),t.unbindTexture()}else if(fe){const Z=A.texture;for(let B=0,he=Z.length;B<he;B++){const ve=Z[B],ye=i.get(ve);t.bindTexture(3553,ye.__webglTexture),ce(3553,ve,L),ue(j.__webglFramebuffer,A,ve,36064+B,3553),T(ve,L)&&C(3553)}t.unbindTexture()}else{let Z=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Z=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Z,re.__webglTexture),ce(Z,M,L),ue(j.__webglFramebuffer,A,M,36064,Z),T(M,L)&&C(Z),t.unbindTexture()}A.depthBuffer&&Se(A)}function it(A){const M=y(A)||a,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ae=j.length;re<ae;re++){const fe=j[re];if(T(fe,M)){const L=A.isWebGLCubeRenderTarget?34067:3553,Z=i.get(fe).__webglTexture;t.bindTexture(L,Z),C(L),t.unbindTexture()}}}function pt(A){if(a&&A.samples>0&&Ge(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,re=A.height;let ae=16384;const fe=[],L=A.stencilBuffer?33306:36096,Z=i.get(A),B=A.isWebGLMultipleRenderTargets===!0;if(B)for(let he=0;he<M.length;he++)t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,Z.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Z.__webglFramebuffer);for(let he=0;he<M.length;he++){fe.push(36064+he),A.depthBuffer&&fe.push(L);const ve=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(ae|=256),A.stencilBuffer&&(ae|=1024)),B&&n.framebufferRenderbuffer(36008,36064,36161,Z.__webglColorRenderbuffer[he]),ve===!0&&(n.invalidateFramebuffer(36008,[L]),n.invalidateFramebuffer(36009,[L])),B){const ye=i.get(M[he]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,j,re,0,0,j,re,ae,9728),m&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let he=0;he<M.length;he++){t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+he,36161,Z.__webglColorRenderbuffer[he]);const ve=i.get(M[he]).__webglTexture;t.bindFramebuffer(36160,Z.__webglFramebuffer),n.framebufferTexture2D(36009,36064+he,3553,ve,0)}t.bindFramebuffer(36009,Z.__webglMultisampledFramebuffer)}}function ct(A){return Math.min(f,A.samples)}function Ge(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(A){const M=o.render.frame;x.get(A)!==M&&(x.set(A,M),A.update())}function Rt(A,M){const j=A.encoding,re=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===td||j!==xr&&(j===Ze?a===!1?e.has("EXT_sRGB")===!0&&re===Nn?(A.format=td,A.minFilter=xn,A.generateMipmaps=!1):M=C_.sRGBToLinear(M):(re!==Nn||ae!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=D,this.resetTextureUnits=ne,this.setTexture2D=V,this.setTexture2DArray=pe,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=Re,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ge}function bE(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===vr)return 5121;if(s===hy)return 32819;if(s===py)return 32820;if(s===cy)return 5120;if(s===dy)return 5122;if(s===E_)return 5123;if(s===fy)return 5124;if(s===or)return 5125;if(s===ar)return 5126;if(s===Fo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===my)return 6406;if(s===Nn)return 6408;if(s===gy)return 6409;if(s===_y)return 6410;if(s===cr)return 6402;if(s===Ls)return 34041;if(s===td)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vy)return 6403;if(s===xy)return 36244;if(s===yy)return 33319;if(s===Sy)return 33320;if(s===My)return 36249;if(s===Su||s===Mu||s===wu||s===Eu)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Su)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Su)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nh||s===Uh||s===kh||s===Oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fh||s===zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fh)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bh||s===Hh||s===Vh||s===Gh||s===Wh||s===jh||s===Xh||s===qh||s===Yh||s===$h||s===Kh||s===Qh||s===Zh||s===Jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===bu)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ey||s===ep||s===tp||s===np)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===bu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class AE extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Na extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),c=this._getHandJoint(u,_);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=p.radius),c.visible=p!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class CE extends dn{constructor(e,t,i,r,s,o,a,l,u,d){if(d=d!==void 0?d:cr,d!==cr&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===cr&&(i=or),i===void 0&&d===Ls&&(i=vs),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class LE extends br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,m=null,x=null;const _=t.getContextAttributes();let p=null,c=null;const g=[],v=[],y=new Set,S=new Map,T=new ln;T.layers.enable(1),T.viewport=new nt;const C=new ln;C.layers.enable(2),C.viewport=new nt;const P=[T,C],w=new AE;w.layers.enable(1),w.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=g[G];return Q===void 0&&(Q=new $u,g[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=g[G];return Q===void 0&&(Q=new $u,g[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=g[G];return Q===void 0&&(Q=new $u,g[G]=Q),Q.getHandSpace()};function q(G){const Q=v.indexOf(G.inputSource);if(Q===-1)return;const le=g[Q];le!==void 0&&le.dispatchEvent({type:G.type,data:G.inputSource})}function N(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",F);for(let G=0;G<g.length;G++){const Q=v[G];Q!==null&&(v[G]=null,g[G].disconnect(Q))}E=null,H=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,c=null,te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",N),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),c=new yr(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:vr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let Q=null,le=null,ce=null;_.depth&&(ce=_.stencil?35056:33190,Q=_.stencil?Ls:cr,le=_.stencil?vs:or);const z={colorFormat:32856,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(z),r.updateRenderState({layers:[h]}),c=new yr(h.textureWidth,h.textureHeight,{format:Nn,type:vr,depthTexture:new CE(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const Te=e.properties.get(c);Te.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(G){for(let Q=0;Q<G.removed.length;Q++){const le=G.removed[Q],ce=v.indexOf(le);ce>=0&&(v[ce]=null,g[ce].disconnect(le))}for(let Q=0;Q<G.added.length;Q++){const le=G.added[Q];let ce=v.indexOf(le);if(ce===-1){for(let Te=0;Te<g.length;Te++)if(Te>=v.length){v.push(le),ce=Te;break}else if(v[Te]===null){v[Te]=le,ce=Te;break}if(ce===-1)break}const z=g[ce];z&&z.connect(le)}}const $=new I,ie=new I;function ne(G,Q,le){$.setFromMatrixPosition(Q.matrixWorld),ie.setFromMatrixPosition(le.matrixWorld);const ce=$.distanceTo(ie),z=Q.projectionMatrix.elements,Te=le.projectionMatrix.elements,be=z[14]/(z[10]-1),ue=z[14]/(z[10]+1),Ee=(z[9]+1)/z[5],We=(z[9]-1)/z[5],Se=(z[8]-1)/z[0],Re=(Te[8]+1)/Te[0],lt=be*Se,it=be*Re,pt=ce/(-Se+Re),ct=pt*-Se;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ct),G.translateZ(pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ge=be+pt,Ye=ue+pt,Rt=lt-ct,A=it+(ce-ct),M=Ee*ue/Ye*Ge,j=We*ue/Ye*Ge;G.projectionMatrix.makePerspective(Rt,A,M,j,Ge,Ye),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function D(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;w.near=C.near=T.near=G.near,w.far=C.far=T.far=G.far,(E!==w.near||H!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),E=w.near,H=w.far);const Q=G.parent,le=w.cameras;D(w,Q);for(let ce=0;ce<le.length;ce++)D(le[ce],Q);le.length===2?ne(w,T,C):w.projectionMatrix.copy(T.projectionMatrix),W(G,w,Q)};function W(G,Q,le){le===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ce=G.children;for(let z=0,Te=ce.length;z<Te;z++)ce[z].updateMatrixWorld(!0);G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=nd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return y};let V=null;function pe(G,Q){if(d=Q.getViewerPose(u||o),x=Q,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ce=!1;le.length!==w.cameras.length&&(w.cameras.length=0,ce=!0);for(let z=0;z<le.length;z++){const Te=le[z];let be=null;if(m!==null)be=m.getViewport(Te);else{const Ee=f.getViewSubImage(h,Te);be=Ee.viewport,z===0&&(e.setRenderTargetTextures(c,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(c))}let ue=P[z];ue===void 0&&(ue=new ln,ue.layers.enable(z),ue.viewport=new nt,P[z]=ue),ue.matrix.fromArray(Te.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Te.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(be.x,be.y,be.width,be.height),z===0&&(w.matrix.copy(ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ce===!0&&w.cameras.push(ue)}}for(let le=0;le<g.length;le++){const ce=v[le],z=g[le];ce!==null&&z!==void 0&&z.update(ce,Q,u||o)}if(V&&V(G,Q),Q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let le=null;for(const ce of y)Q.detectedPlanes.has(ce)||(le===null&&(le=[]),le.push(ce));if(le!==null)for(const ce of le)y.delete(ce),S.delete(ce),i.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Q.detectedPlanes)if(!y.has(ce))y.add(ce),S.set(ce,Q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ce});else{const z=S.get(ce);ce.lastChangedTime>z&&(S.set(ce,ce.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ce}))}}x=null}const te=new z_;te.setAnimationLoop(pe),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function PE(n,e){function t(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,k_(n)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,v,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),f(p,c)):c.isMeshPhongMaterial?(s(p,c),d(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),_(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,t(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===en&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,t(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===en&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,t(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,t(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*v,t(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=v*.5,c.map&&(p.map.value=c.map,t(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function d(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===en&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function _(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(x(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(g,S);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function d(g){const v=f();g.__bindingPointIndex=v;const y=n.createBuffer(),S=g.__size,T=g.usage;return n.bindBuffer(35345,y),n.bufferData(35345,S,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,S=g.__cache;n.bindBuffer(35345,v);for(let T=0,C=y.length;T<C;T++){const P=y[T];if(m(P,T,S)===!0){const w=P.__offset,E=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let q=0;q<E.length;q++){const N=E[q],F=_(N);typeof N=="number"?(P.__data[0]=N,n.bufferSubData(35345,w+H,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=N.elements[0],P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=N.elements[0],P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=N.elements[0]):(N.toArray(P.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,w,P.__data)}}n.bindBuffer(35345,null)}function m(g,v,y){const S=g.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const T=Array.isArray(S)?S:[S],C=[];for(let P=0;P<T.length;P++)C.push(T[P].clone());y[v]=C}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(S)?S:[S];for(let P=0;P<T.length;P++){const w=T[P];if(w.equals(C[P])===!1)return w.copy(C[P]),!0}}return!1}function x(g){const v=g.uniforms;let y=0;const S=16;let T=0;for(let C=0,P=v.length;C<P;C++){const w=v[C],E={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let q=0,N=H.length;q<N;q++){const F=H[q],$=_(F);E.boundary+=$.boundary,E.storage+=$.storage}if(w.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,C>0){T=y%S;const q=S-T;T!==0&&q-E.boundary<0&&(y+=S-T,w.__offset=y)}y+=E.storage}return T=y%S,T>0&&(y+=S-T),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function DE(){const n=Sl("canvas");return n.style.display="block",n}class W_{constructor(e={}){const{canvas:t=DE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=null,x=null;const _=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xr,this.useLegacyLights=!0,this.toneMapping=ci,this.toneMappingExposure=1;const c=this;let g=!1,v=0,y=0,S=null,T=-1,C=null;const P=new nt,w=new nt;let E=null,H=t.width,q=t.height,N=1,F=null,$=null;const ie=new nt(0,0,H,q),ne=new nt(0,0,H,q);let D=!1;const W=new uf;let V=!1,pe=!1,te=null;const G=new vt,Q=new I,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return S===null?N:1}let z=i;function Te(b,k){for(let X=0;X<b.length;X++){const U=b[X],K=t.getContext(U,k);if(K!==null)return K}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),z===null){const k=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&k.shift(),z=Te(k,b),z===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,ue,Ee,We,Se,Re,lt,it,pt,ct,Ge,Ye,Rt,A,M,j,re,ae,fe,L,Z,B,he,ve;function ye(){be=new G1(z),ue=new k1(z,be,e),be.init(ue),B=new bE(z,be,ue),Ee=new wE(z,be,ue),We=new X1,Se=new uE,Re=new EE(z,be,Ee,Se,ue,B,We),lt=new F1(c),it=new V1(c),pt=new iS(z,ue),he=new N1(z,be,pt,ue),ct=new W1(z,pt,We,he),Ge=new K1(z,ct,pt,We),fe=new $1(z,ue,Re),j=new O1(Se),Ye=new lE(c,lt,it,be,ue,he,j),Rt=new PE(c,Se),A=new dE,M=new _E(be,ue),ae=new I1(c,lt,it,Ee,Ge,h,l),re=new ME(c,Ge,ue),ve=new RE(z,We,ue,Ee),L=new U1(z,be,We,ue),Z=new j1(z,be,We,ue),We.programs=Ye.programs,c.capabilities=ue,c.extensions=be,c.properties=Se,c.renderLists=A,c.shadowMap=re,c.state=Ee,c.info=We}ye();const me=new LE(c,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(H,q,!1))},this.getSize=function(b){return b.set(H,q)},this.setSize=function(b,k,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,q=k,t.width=Math.floor(b*N),t.height=Math.floor(k*N),X===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(H*N,q*N).floor()},this.setDrawingBufferSize=function(b,k,X){H=b,q=k,N=X,t.width=Math.floor(b*X),t.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,k,X,U){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,k,X,U),Ee.viewport(P.copy(ie).multiplyScalar(N).floor())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,k,X,U){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,k,X,U),Ee.scissor(w.copy(ne).multiplyScalar(N).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(b){Ee.setScissorTest(D=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(b=!0,k=!0,X=!0){let U=0;b&&(U|=16384),k&&(U|=256),X&&(U|=1024),z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),A.dispose(),M.dispose(),Se.dispose(),lt.dispose(),it.dispose(),Ge.dispose(),he.dispose(),ve.dispose(),Ye.dispose(),me.dispose(),me.removeEventListener("sessionstart",Me),me.removeEventListener("sessionend",Ke),te&&(te.dispose(),te=null),rt.stop()};function xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const b=We.autoReset,k=re.enabled,X=re.autoUpdate,U=re.needsUpdate,K=re.type;ye(),We.autoReset=b,re.enabled=k,re.autoUpdate=X,re.needsUpdate=U,re.type=K}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){const k=b.target;k.removeEventListener("dispose",dt),R(k)}function R(b){Y(b),Se.remove(b)}function Y(b){const k=Se.get(b).programs;k!==void 0&&(k.forEach(function(X){Ye.releaseProgram(X)}),b.isShaderMaterial&&Ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,U,K,we){k===null&&(k=le);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Le=J_(b,k,X,U,K);Ee.setMaterial(U,Ae);let De=X.index,Ue=1;U.wireframe===!0&&(De=ct.getWireframeAttribute(X),Ue=2);const ke=X.drawRange,Oe=X.attributes.position;let Xe=ke.start*Ue,zt=(ke.start+ke.count)*Ue;we!==null&&(Xe=Math.max(Xe,we.start*Ue),zt=Math.min(zt,(we.start+we.count)*Ue)),De!==null?(Xe=Math.max(Xe,0),zt=Math.min(zt,De.count)):Oe!=null&&(Xe=Math.max(Xe,0),zt=Math.min(zt,Oe.count));const En=zt-Xe;if(En<0||En===1/0)return;he.setup(K,U,Le,X,De);let qi,mt=L;if(De!==null&&(qi=pt.get(De),mt=Z,mt.setIndex(qi)),K.isMesh)U.wireframe===!0?(Ee.setLineWidth(U.wireframeLinewidth*ce()),mt.setMode(1)):mt.setMode(4);else if(K.isLine){let Be=U.linewidth;Be===void 0&&(Be=1),Ee.setLineWidth(Be*ce()),K.isLineSegments?mt.setMode(1):K.isLineLoop?mt.setMode(2):mt.setMode(3)}else K.isPoints?mt.setMode(0):K.isSprite&&mt.setMode(4);if(K.isInstancedMesh)mt.renderInstances(Xe,En,K.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Wl=Math.min(X.instanceCount,Be);mt.renderInstances(Xe,En,Wl)}else mt.render(Xe,En)},this.compile=function(b,k){function X(U,K,we){U.transparent===!0&&U.side===si&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,$o(U,K,we),U.side=Bi,U.needsUpdate=!0,$o(U,K,we),U.side=si):$o(U,K,we)}x=M.get(b),x.init(),p.push(x),b.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(x.pushLight(U),U.castShadow&&x.pushShadow(U))}),x.setupLights(c.useLegacyLights),b.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let we=0;we<K.length;we++){const Ae=K[we];X(Ae,b,U)}else X(K,b,U)}),p.pop(),x=null};let se=null;function ge(b){se&&se(b)}function Me(){rt.stop()}function Ke(){rt.start()}const rt=new z_;rt.setAnimationLoop(ge),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(b){se=b,me.setAnimationLoop(b),b===null?rt.stop():rt.start()},me.addEventListener("sessionstart",Me),me.addEventListener("sessionend",Ke),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),b.isScene===!0&&b.onBeforeRender(c,b,k,S),x=M.get(b,p.length),x.init(),p.push(x),G.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(G),pe=this.localClippingEnabled,V=j.init(this.clippingPlanes,pe),m=A.get(b,_.length),m.init(),_.push(m),Dt(b,k,0,c.sortObjects),m.finish(),c.sortObjects===!0&&m.sort(F,$),V===!0&&j.beginShadows();const X=x.state.shadowsArray;if(re.render(X,b,k),V===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(m,b),x.setupLights(c.useLegacyLights),k.isArrayCamera){const U=k.cameras;for(let K=0,we=U.length;K<we;K++){const Ae=U[K];gi(m,b,Ae,Ae.viewport)}}else gi(m,b,k);S!==null&&(Re.updateMultisampleRenderTarget(S),Re.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(c,b,k),he.resetDefaultState(),T=-1,C=null,p.pop(),p.length>0?x=p[p.length-1]:x=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Dt(b,k,X,U){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){U&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const Ae=Ge.update(b),Le=b.material;Le.visible&&m.push(b,Ae,Le,X,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==We.render.frame&&(b.skeleton.update(),b.skeleton.frame=We.render.frame),!b.frustumCulled||W.intersectsObject(b))){U&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const Ae=Ge.update(b),Le=b.material;if(Array.isArray(Le)){const De=Ae.groups;for(let Ue=0,ke=De.length;Ue<ke;Ue++){const Oe=De[Ue],Xe=Le[Oe.materialIndex];Xe&&Xe.visible&&m.push(b,Ae,Xe,X,Q.z,Oe)}}else Le.visible&&m.push(b,Ae,Le,X,Q.z,null)}}const we=b.children;for(let Ae=0,Le=we.length;Ae<Le;Ae++)Dt(we[Ae],k,X,U)}function gi(b,k,X,U){const K=b.opaque,we=b.transmissive,Ae=b.transparent;x.setupLightsView(X),V===!0&&j.setGlobalState(c.clippingPlanes,X),we.length>0&&ft(K,we,k,X),U&&Ee.viewport(P.copy(U)),K.length>0&&mn(K,k,X),we.length>0&&mn(we,k,X),Ae.length>0&&mn(Ae,k,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ft(b,k,X,U){if(te===null){const Le=ue.isWebGL2;te=new yr(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Fo:vr,minFilter:Oo,samples:Le&&a===!0?4:0})}const K=c.getRenderTarget();c.setRenderTarget(te),c.clear();const we=c.toneMapping;c.toneMapping=ci,mn(b,X,U),Re.updateMultisampleRenderTarget(te),Re.updateRenderTargetMipmap(te);let Ae=!1;for(let Le=0,De=k.length;Le<De;Le++){const Ue=k[Le],ke=Ue.object,Oe=Ue.geometry,Xe=Ue.material,zt=Ue.group;if(Xe.side===si&&ke.layers.test(U.layers)){const En=Xe.side;Xe.side=en,Xe.needsUpdate=!0,Bn(ke,X,U,Oe,Xe,zt),Xe.side=En,Xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(Re.updateMultisampleRenderTarget(te),Re.updateRenderTargetMipmap(te)),c.setRenderTarget(K),c.toneMapping=we}function mn(b,k,X){const U=k.isScene===!0?k.overrideMaterial:null;for(let K=0,we=b.length;K<we;K++){const Ae=b[K],Le=Ae.object,De=Ae.geometry,Ue=U===null?Ae.material:U,ke=Ae.group;Le.layers.test(X.layers)&&Bn(Le,k,X,De,Ue,ke)}}function Bn(b,k,X,U,K,we){b.onBeforeRender(c,k,X,U,K,we),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(c,k,X,U,b,we),K.transparent===!0&&K.side===si&&K.forceSinglePass===!1?(K.side=en,K.needsUpdate=!0,c.renderBufferDirect(X,k,U,K,b,we),K.side=Bi,K.needsUpdate=!0,c.renderBufferDirect(X,k,U,K,b,we),K.side=si):c.renderBufferDirect(X,k,U,K,b,we),b.onAfterRender(c,k,X,U,K,we)}function $o(b,k,X){k.isScene!==!0&&(k=le);const U=Se.get(b),K=x.state.lights,we=x.state.shadowsArray,Ae=K.state.version,Le=Ye.getParameters(b,K.state,we,k,X),De=Ye.getProgramCacheKey(Le);let Ue=U.programs;U.environment=b.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(b.isMeshStandardMaterial?it:lt).get(b.envMap||U.environment),Ue===void 0&&(b.addEventListener("dispose",dt),Ue=new Map,U.programs=Ue);let ke=Ue.get(De);if(ke!==void 0){if(U.currentProgram===ke&&U.lightsStateVersion===Ae)return mf(b,Le),ke}else Le.uniforms=Ye.getUniforms(b),b.onBuild(X,Le,c),b.onBeforeCompile(Le,c),ke=Ye.acquireProgram(Le,De),Ue.set(De,ke),U.uniforms=Le.uniforms;const Oe=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=j.uniform),mf(b,Le),U.needsLights=tv(b),U.lightsStateVersion=Ae,U.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Xe=ke.getUniforms(),zt=$a.seqWithValue(Xe.seq,Oe);return U.currentProgram=ke,U.uniformsList=zt,ke}function mf(b,k){const X=Se.get(b);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function J_(b,k,X,U,K){k.isScene!==!0&&(k=le),Re.resetTextureUnits();const we=k.fog,Ae=U.isMeshStandardMaterial?k.environment:null,Le=S===null?c.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:xr,De=(U.isMeshStandardMaterial?it:lt).get(U.envMap||Ae),Ue=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!U.normalMap&&!!X.attributes.tangent,Oe=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color,En=U.toneMapped?c.toneMapping:ci,qi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=qi!==void 0?qi.length:0,Be=Se.get(U),Wl=x.state.lights;if(V===!0&&(pe===!0||b!==C)){const tn=b===C&&U.id===T;j.setState(U,b,tn)}let wt=!1;U.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Wl.state.version||Be.outputEncoding!==Le||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==De||U.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==j.numPlanes||Be.numIntersection!==j.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==ke||Be.morphTargets!==Oe||Be.morphNormals!==Xe||Be.morphColors!==zt||Be.toneMapping!==En||ue.isWebGL2===!0&&Be.morphTargetsCount!==mt)&&(wt=!0):(wt=!0,Be.__version=U.version);let Yi=Be.currentProgram;wt===!0&&(Yi=$o(U,k,K));let gf=!1,ks=!1,jl=!1;const Bt=Yi.getUniforms(),$i=Be.uniforms;if(Ee.useProgram(Yi.program)&&(gf=!0,ks=!0,jl=!0),U.id!==T&&(T=U.id,ks=!0),gf||C!==b){if(Bt.setValue(z,"projectionMatrix",b.projectionMatrix),ue.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,ks=!0,jl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const tn=Bt.map.cameraPosition;tn!==void 0&&tn.setValue(z,Q.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&Bt.setValue(z,"viewMatrix",b.matrixWorldInverse)}if(K.isSkinnedMesh){Bt.setOptional(z,K,"bindMatrix"),Bt.setOptional(z,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(ue.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Bt.setValue(z,"boneTexture",tn.boneTexture,Re),Bt.setValue(z,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xl=X.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0&&ue.isWebGL2===!0)&&fe.update(K,X,Yi),(ks||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,Bt.setValue(z,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&($i.envMap.value=De,$i.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ks&&(Bt.setValue(z,"toneMappingExposure",c.toneMappingExposure),Be.needsLights&&ev($i,jl),we&&U.fog===!0&&Rt.refreshFogUniforms($i,we),Rt.refreshMaterialUniforms($i,U,N,q,te),$a.upload(z,Be.uniformsList,$i,Re)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&($a.upload(z,Be.uniformsList,$i,Re),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Bt.setValue(z,"center",K.center),Bt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(z,"normalMatrix",K.normalMatrix),Bt.setValue(z,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const tn=U.uniformsGroups;for(let ql=0,nv=tn.length;ql<nv;ql++)if(ue.isWebGL2){const _f=tn[ql];ve.update(_f,Yi),ve.bind(_f,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function ev(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function tv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,k,X){Se.get(b.texture).__webglTexture=k,Se.get(b.depthTexture).__webglTexture=X;const U=Se.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const X=Se.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){S=b,v=k,y=X;let U=!0,K=null,we=!1,Ae=!1;if(b){const De=Se.get(b);De.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(36160,null),U=!1):De.__webglFramebuffer===void 0?Re.setupRenderTarget(b):De.__hasExternalTextures&&Re.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ae=!0);const ke=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(K=ke[k],we=!0):ue.isWebGL2&&b.samples>0&&Re.useMultisampledRTT(b)===!1?K=Se.get(b).__webglMultisampledFramebuffer:K=ke,P.copy(b.viewport),w.copy(b.scissor),E=b.scissorTest}else P.copy(ie).multiplyScalar(N).floor(),w.copy(ne).multiplyScalar(N).floor(),E=D;if(Ee.bindFramebuffer(36160,K)&&ue.drawBuffers&&U&&Ee.drawBuffers(b,K),Ee.viewport(P),Ee.scissor(w),Ee.setScissorTest(E),we){const De=Se.get(b.texture);z.framebufferTexture2D(36160,36064,34069+k,De.__webglTexture,X)}else if(Ae){const De=Se.get(b.texture),Ue=k||0;z.framebufferTextureLayer(36160,36064,De.__webglTexture,X||0,Ue)}T=-1},this.readRenderTargetPixels=function(b,k,X,U,K,we,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){Ee.bindFramebuffer(36160,Le);try{const De=b.texture,Ue=De.format,ke=De.type;if(Ue!==Nn&&B.convert(Ue)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=ke===Fo&&(be.has("EXT_color_buffer_half_float")||ue.isWebGL2&&be.has("EXT_color_buffer_float"));if(ke!==vr&&B.convert(ke)!==z.getParameter(35738)&&!(ke===ar&&(ue.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-U&&X>=0&&X<=b.height-K&&z.readPixels(k,X,U,K,B.convert(Ue),B.convert(ke),we)}finally{const De=S!==null?Se.get(S).__webglFramebuffer:null;Ee.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(b,k,X=0){const U=Math.pow(2,-X),K=Math.floor(k.image.width*U),we=Math.floor(k.image.height*U);Re.setTexture2D(k,0),z.copyTexSubImage2D(3553,X,0,0,b.x,b.y,K,we),Ee.unbindTexture()},this.copyTextureToTexture=function(b,k,X,U=0){const K=k.image.width,we=k.image.height,Ae=B.convert(X.format),Le=B.convert(X.type);Re.setTexture2D(X,0),z.pixelStorei(37440,X.flipY),z.pixelStorei(37441,X.premultiplyAlpha),z.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?z.texSubImage2D(3553,U,b.x,b.y,K,we,Ae,Le,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(3553,U,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Ae,k.mipmaps[0].data):z.texSubImage2D(3553,U,b.x,b.y,Ae,Le,k.image),U===0&&X.generateMipmaps&&z.generateMipmap(3553),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X,U,K=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,De=B.convert(U.format),Ue=B.convert(U.type);let ke;if(U.isData3DTexture)Re.setTexture3D(U,0),ke=32879;else if(U.isDataArrayTexture)Re.setTexture2DArray(U,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,U.flipY),z.pixelStorei(37441,U.premultiplyAlpha),z.pixelStorei(3317,U.unpackAlignment);const Oe=z.getParameter(3314),Xe=z.getParameter(32878),zt=z.getParameter(3316),En=z.getParameter(3315),qi=z.getParameter(32877),mt=X.isCompressedTexture?X.mipmaps[0]:X.image;z.pixelStorei(3314,mt.width),z.pixelStorei(32878,mt.height),z.pixelStorei(3316,b.min.x),z.pixelStorei(3315,b.min.y),z.pixelStorei(32877,b.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(ke,K,k.x,k.y,k.z,we,Ae,Le,De,Ue,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,K,k.x,k.y,k.z,we,Ae,Le,De,mt.data)):z.texSubImage3D(ke,K,k.x,k.y,k.z,we,Ae,Le,De,Ue,mt),z.pixelStorei(3314,Oe),z.pixelStorei(32878,Xe),z.pixelStorei(3316,zt),z.pixelStorei(3315,En),z.pixelStorei(32877,qi),K===0&&U.generateMipmaps&&z.generateMipmap(ke),Ee.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Re.setTextureCube(b,0):b.isData3DTexture?Re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Re.setTexture2DArray(b,0):Re.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){v=0,y=0,S=null,Ee.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class IE extends W_{}IE.prototype.isWebGL1Renderer=!0;class Vp extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class NE extends Yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b_,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j_ extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ku=new vt,Gp=new I,Wp=new I;class UE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jp=new vt,$s=new I,Qu=new I;class kE extends UE{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),i.position.copy($s),Qu.copy(i.position),Qu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qu),i.updateMatrixWorld(),r.makeTranslation(-$s.x,-$s.y,-$s.z),jp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jp)}}class Xp extends j_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OE extends j_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class FE{constructor(e,t,i=0,r=1/0){this.ray=new R_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return rd(e,this,i,t),i.sort(qp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rd(e[r],this,i,t);return i.sort(qp),i}}function qp(n,e){return n.distance-e.distance}function rd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)rd(r[s],e,t,!0)}}class Yp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);const $p={type:"change"},Zu={type:"start"},Kp={type:"end"};class zE extends br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ye),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($p),i.update(),s=r.NONE},this.update=function(){const L=new I,Z=new Sr().setFromUnitVectors(e.up,new I(0,1,0)),B=Z.clone().invert(),he=new I,ve=new Sr,ye=2*Math.PI;return function(){const xe=i.object.position;L.copy(xe).sub(i.target),L.applyQuaternion(Z),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&w(C()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ce=i.minAzimuthAngle,Ne=i.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Ne)&&(Ce<-Math.PI?Ce+=ye:Ce>Math.PI&&(Ce-=ye),Ne<-Math.PI?Ne+=ye:Ne>Math.PI&&(Ne-=ye),Ce<=Ne?a.theta=Math.max(Ce,Math.min(Ne,a.theta)):a.theta=a.theta>(Ce+Ne)/2?Math.max(Ce,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),L.setFromSpherical(a),L.applyQuaternion(B),xe.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),u=1,f||he.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o?(i.dispatchEvent($p),he.copy(i.object.position),ve.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",M),i.domElement.removeEventListener("pointerdown",Re),i.domElement.removeEventListener("pointercancel",it),i.domElement.removeEventListener("wheel",Ge),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",it),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yp,l=new Yp;let u=1;const d=new I;let f=!1;const h=new Pe,m=new Pe,x=new Pe,_=new Pe,p=new Pe,c=new Pe,g=new Pe,v=new Pe,y=new Pe,S=[],T={};function C(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function w(L){l.theta-=L}function E(L){l.phi-=L}const H=function(){const L=new I;return function(B,he){L.setFromMatrixColumn(he,0),L.multiplyScalar(-B),d.add(L)}}(),q=function(){const L=new I;return function(B,he){i.screenSpacePanning===!0?L.setFromMatrixColumn(he,1):(L.setFromMatrixColumn(he,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(B),d.add(L)}}(),N=function(){const L=new I;return function(B,he){const ve=i.domElement;if(i.object.isPerspectiveCamera){const ye=i.object.position;L.copy(ye).sub(i.target);let me=L.length();me*=Math.tan(i.object.fov/2*Math.PI/180),H(2*B*me/ve.clientHeight,i.object.matrix),q(2*he*me/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(B*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),q(he*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(L){i.object.isPerspectiveCamera?u/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(L){i.object.isPerspectiveCamera?u*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(L){h.set(L.clientX,L.clientY)}function ne(L){g.set(L.clientX,L.clientY)}function D(L){_.set(L.clientX,L.clientY)}function W(L){m.set(L.clientX,L.clientY),x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;w(2*Math.PI*x.x/Z.clientHeight),E(2*Math.PI*x.y/Z.clientHeight),h.copy(m),i.update()}function V(L){v.set(L.clientX,L.clientY),y.subVectors(v,g),y.y>0?F(P()):y.y<0&&$(P()),g.copy(v),i.update()}function pe(L){p.set(L.clientX,L.clientY),c.subVectors(p,_).multiplyScalar(i.panSpeed),N(c.x,c.y),_.copy(p),i.update()}function te(L){L.deltaY<0?$(P()):L.deltaY>0&&F(P()),i.update()}function G(L){let Z=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),Z=!0;break}Z&&(L.preventDefault(),i.update())}function Q(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);h.set(L,Z)}}function le(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);_.set(L,Z)}}function ce(){const L=S[0].pageX-S[1].pageX,Z=S[0].pageY-S[1].pageY,B=Math.sqrt(L*L+Z*Z);g.set(0,B)}function z(){i.enableZoom&&ce(),i.enablePan&&le()}function Te(){i.enableZoom&&ce(),i.enableRotate&&Q()}function be(L){if(S.length==1)m.set(L.pageX,L.pageY);else{const B=fe(L),he=.5*(L.pageX+B.x),ve=.5*(L.pageY+B.y);m.set(he,ve)}x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;w(2*Math.PI*x.x/Z.clientHeight),E(2*Math.PI*x.y/Z.clientHeight),h.copy(m)}function ue(L){if(S.length===1)p.set(L.pageX,L.pageY);else{const Z=fe(L),B=.5*(L.pageX+Z.x),he=.5*(L.pageY+Z.y);p.set(B,he)}c.subVectors(p,_).multiplyScalar(i.panSpeed),N(c.x,c.y),_.copy(p)}function Ee(L){const Z=fe(L),B=L.pageX-Z.x,he=L.pageY-Z.y,ve=Math.sqrt(B*B+he*he);v.set(0,ve),y.set(0,Math.pow(v.y/g.y,i.zoomSpeed)),F(y.y),g.copy(v)}function We(L){i.enableZoom&&Ee(L),i.enablePan&&ue(L)}function Se(L){i.enableZoom&&Ee(L),i.enableRotate&&be(L)}function Re(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",lt),i.domElement.addEventListener("pointerup",it)),j(L),L.pointerType==="touch"?Rt(L):pt(L))}function lt(L){i.enabled!==!1&&(L.pointerType==="touch"?A(L):ct(L))}function it(L){re(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",it)),i.dispatchEvent(Kp),s=r.NONE}function pt(L){let Z;switch(L.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Lr.DOLLY:if(i.enableZoom===!1)return;ne(L),s=r.DOLLY;break;case Lr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;D(L),s=r.PAN}else{if(i.enableRotate===!1)return;ie(L),s=r.ROTATE}break;case Lr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ie(L),s=r.ROTATE}else{if(i.enablePan===!1)return;D(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Zu)}function ct(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(L);break;case r.DOLLY:if(i.enableZoom===!1)return;V(L);break;case r.PAN:if(i.enablePan===!1)return;pe(L);break}}function Ge(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Zu),te(L),i.dispatchEvent(Kp))}function Ye(L){i.enabled===!1||i.enablePan===!1||G(L)}function Rt(L){switch(ae(L),S.length){case 1:switch(i.touches.ONE){case Pr.ROTATE:if(i.enableRotate===!1)return;Q(),s=r.TOUCH_ROTATE;break;case Pr.PAN:if(i.enablePan===!1)return;le(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Pr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(),s=r.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Zu)}function A(L){switch(ae(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ue(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(L),i.update();break;default:s=r.NONE}}function M(L){i.enabled!==!1&&L.preventDefault()}function j(L){S.push(L)}function re(L){delete T[L.pointerId];for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId==L.pointerId){S.splice(Z,1);return}}function ae(L){let Z=T[L.pointerId];Z===void 0&&(Z=new Pe,T[L.pointerId]=Z),Z.set(L.pageX,L.pageY)}function fe(L){const Z=L.pointerId===S[0].pointerId?S[1]:S[0];return T[Z.pointerId]}i.domElement.addEventListener("contextmenu",M),i.domElement.addEventListener("pointerdown",Re),i.domElement.addEventListener("pointercancel",it),i.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}var _o=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===d?"block":"none";n=d}var r=(performance||Date).now(),s=r,o=0,a=t(new _o.Panel("FPS","#0ff","#002")),l=t(new _o.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new _o.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var d=(performance||Date).now();if(l.update(d-r,200),d>=s+1e3&&(a.update(o*1e3/(d-s),100),s=d,o=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};_o.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,u=3*o,d=2*o,f=3*o,h=15*o,m=74*o,x=30*o,_=document.createElement("canvas");_.width=a,_.height=l,_.style.cssText="width:80px;height:48px";var p=_.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,a,l),p.fillStyle=e,p.fillText(n,u,d),p.fillRect(f,h,m,x),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f,h,m,x),{dom:_,update:function(c,g){i=Math.min(i,c),r=Math.max(r,c),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,a,h),p.fillStyle=e,p.fillText(s(c)+" "+n+" ("+s(i)+"-"+s(r)+")",u,d),p.drawImage(_,f+o,h,m-o,x,f,h,m-o,x),p.fillRect(f+m-o,h,o,x),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f+m-o,h,o,s((1-c/g)*x))}}};const BE=_o;function HE(n){if(n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function cs(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),u=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var d=n.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var Qp=Array.prototype.forEach,Ks=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(Ks.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(Ks.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=Ks.call(arguments);return function(){for(var t=Ks.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(Qp&&e.forEach&&e.forEach===Qp)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Ks.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},VE=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:cs},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:cs},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:cs},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:cs}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Qs=void 0,Ua=void 0,sd=function(){Ua=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(VE,function(t){if(t.litmus(e))return J.each(t.conversions,function(i,r){if(Qs=i.read(e),Ua===!1&&Qs!==!1)return Ua=Qs,Qs.conversionName=r,Qs.conversion=i,J.BREAK}),J.BREAK}),Ua},Zp=void 0,Ml={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),u=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Zp=t*8)|e&~(255<<Zp)}},GE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fn=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},zn=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Hi=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},ji=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Xi=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},Tt=function(){function n(){if(Fn(this,n),this.__state=sd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return zn(n,[{key:"toString",value:function(){return cs(this)}},{key:"toHexString",value:function(){return cs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function ff(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Tt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Tt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function hf(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Tt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Tt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Tt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=Ml.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")J.extend(n.__state,Ml.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};Tt.recalculateHSV=function(n){var e=Ml.rgb_to_hsv(n.r,n.g,n.b);J.extend(n.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};Tt.COMPONENTS=["r","g","b","h","s","v","hex","a"];ff(Tt.prototype,"r",2);ff(Tt.prototype,"g",1);ff(Tt.prototype,"b",0);hf(Tt.prototype,"h");hf(Tt.prototype,"s");hf(Tt.prototype,"v");Object.defineProperty(Tt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Tt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ml.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Tr=function(){function n(e,t){Fn(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return zn(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),WE={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},X_={};J.each(WE,function(n,e){J.each(n,function(t){X_[t]=e})});var jE=/(\d+(\.\d+)?)px/;function Gn(n){if(n==="0"||J.isUndefined(n))return 0;var e=n.match(jE);return J.isNull(e)?0:parseFloat(e[1])}var O={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;J.isUndefined(s)&&(s=!0),J.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=X_[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=a.initKeyboardEvent||a.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),O},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),O},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return O},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return O},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Gn(t["border-left-width"])+Gn(t["border-right-width"])+Gn(t["padding-left"])+Gn(t["padding-right"])+Gn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Gn(t["border-top-width"])+Gn(t["border-bottom-width"])+Gn(t["padding-top"])+Gn(t["padding-bottom"])+Gn(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},q_=function(n){ji(e,n);function e(t,i){Fn(this,e);var r=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return O.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return zn(e,[{key:"setValue",value:function(i){var r=Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Tr),XE=function(n){ji(e,n);function e(t,i,r){Fn(this,e);var s=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),J.isArray(o)){var l={};J.each(o,function(u){l[u]=u}),o=l}return J.each(o,function(u,d){var f=document.createElement("option");f.innerHTML=d,f.setAttribute("value",u),a.__select.appendChild(f)}),s.updateDisplay(),O.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return zn(e,[{key:"setValue",value:function(i){var r=Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return O.isActive(this.__select)?this:(this.__select.value=this.getValue(),Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Tr),qE=function(n){ji(e,n);function e(t,i){Fn(this,e);var r=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),O.bind(r.__input,"keyup",o),O.bind(r.__input,"change",o),O.bind(r.__input,"blur",a),O.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return zn(e,[{key:"updateDisplay",value:function(){return O.isActive(this.__input)||(this.__input.value=this.getValue()),Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Tr);function Jp(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Y_=function(n){ji(e,n);function e(t,i,r){Fn(this,e);var s=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Jp(s.__impliedStep),s}return zn(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Jp(i),this}}]),e}(Tr);function YE(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var wl=function(n){ji(e,n);function e(t,i,r){Fn(this,e);var s=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var x=parseFloat(o.__input.value);J.isNaN(x)||o.setValue(x)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function d(){u()}function f(x){var _=a-x.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=x.clientY}function h(){O.unbind(window,"mousemove",f),O.unbind(window,"mouseup",h),u()}function m(x){O.bind(window,"mousemove",f),O.bind(window,"mouseup",h),a=x.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),O.bind(s.__input,"change",l),O.bind(s.__input,"blur",d),O.bind(s.__input,"mousedown",m),O.bind(s.__input,"keydown",function(x){x.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return zn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():YE(this.getValue(),this.__precision),Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Y_);function em(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var od=function(n){ji(e,n);function e(t,i,r,s,o){Fn(this,e);var a=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),O.bind(a.__background,"mousedown",u),O.bind(a.__background,"touchstart",h),O.addClass(a.__background,"slider"),O.addClass(a.__foreground,"slider-fg");function u(_){document.activeElement.blur(),O.bind(window,"mousemove",d),O.bind(window,"mouseup",f),d(_)}function d(_){_.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(em(_.clientX,p.left,p.right,l.__min,l.__max)),!1}function f(){O.unbind(window,"mousemove",d),O.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(_){_.touches.length===1&&(O.bind(window,"touchmove",m),O.bind(window,"touchend",x),m(_))}function m(_){var p=_.touches[0].clientX,c=l.__background.getBoundingClientRect();l.setValue(em(p,c.left,c.right,l.__min,l.__max))}function x(){O.unbind(window,"touchmove",m),O.unbind(window,"touchend",x),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return zn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Y_),$_=function(n){ji(e,n);function e(t,i,r){Fn(this,e);var s=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,O.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),O.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return zn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Tr),ad=function(n){ji(e,n);function e(t,i){Fn(this,e);var r=Xi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new Tt(r.getValue()),r.__temp=new Tt(0);var s=r;r.domElement=document.createElement("div"),O.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",O.bind(r.__input,"keydown",function(_){_.keyCode===13&&f.call(this)}),O.bind(r.__input,"blur",f),O.bind(r.__selector,"mousedown",function(){O.addClass(this,"drag").bind(window,"mouseup",function(){O.removeClass(s.__selector,"drag")})}),O.bind(r.__selector,"touchstart",function(){O.addClass(this,"drag").bind(window,"touchend",function(){O.removeClass(s.__selector,"drag")})});var o=document.createElement("div");J.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),tm(o,"top","rgba(0,0,0,0)","#000"),J.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),KE(r.__hue_field),J.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),O.bind(r.__saturation_field,"mousedown",a),O.bind(r.__saturation_field,"touchstart",a),O.bind(r.__field_knob,"mousedown",a),O.bind(r.__field_knob,"touchstart",a),O.bind(r.__hue_field,"mousedown",l),O.bind(r.__hue_field,"touchstart",l);function a(_){m(_),O.bind(window,"mousemove",m),O.bind(window,"touchmove",m),O.bind(window,"mouseup",u),O.bind(window,"touchend",u)}function l(_){x(_),O.bind(window,"mousemove",x),O.bind(window,"touchmove",x),O.bind(window,"mouseup",d),O.bind(window,"touchend",d)}function u(){O.unbind(window,"mousemove",m),O.unbind(window,"touchmove",m),O.unbind(window,"mouseup",u),O.unbind(window,"touchend",u),h()}function d(){O.unbind(window,"mousemove",x),O.unbind(window,"touchmove",x),O.unbind(window,"mouseup",d),O.unbind(window,"touchend",d),h()}function f(){var _=sd(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),c=_.touches&&_.touches[0]||_,g=c.clientX,v=c.clientY,y=(g-p.left)/(p.right-p.left),S=1-(v-p.top)/(p.bottom-p.top);return S>1?S=1:S<0&&(S=0),y>1?y=1:y<0&&(y=0),s.__color.v=S,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function x(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__hue_field.getBoundingClientRect(),c=_.touches&&_.touches[0]||_,g=c.clientY,v=1-(g-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),s.__color.h=v*360,s.setValue(s.__color.toOriginal()),!1}return r}return zn(e,[{key:"updateDisplay",value:function(){var i=sd(this.getValue());if(i!==!1){var r=!1;J.each(Tt.COMPONENTS,function(a){if(!J.isUndefined(i[a])&&!J.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&J.extend(this.__color.__state,i)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,tm(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Tr),$E=["-moz-","-o-","-webkit-","-ms-",""];function tm(n,e,t,i){n.style.background="",J.each($E,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function KE(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var QE={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},ZE=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,JE=function(e,t){var i=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new XE(e,t,arguments[2]):J.isNumber(i)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new od(e,t,arguments[2],arguments[3],arguments[4]):new od(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new wl(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new wl(e,t,{min:arguments[2],max:arguments[3]}):J.isString(i)?new qE(e,t):J.isFunction(i)?new $_(e,t,""):J.isBoolean(i)?new q_(e,t):null};function eb(n){setTimeout(n,1e3/60)}var tb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||eb,nb=function(){function n(){Fn(this,n),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),O.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;O.bind(this.backgroundElement,"click",function(){e.hide()})}return zn(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",O.unbind(t.domElement,"webkitTransitionEnd",r),O.unbind(t.domElement,"transitionend",r),O.unbind(t.domElement,"oTransitionEnd",r)};O.bind(this.domElement,"webkitTransitionEnd",i),O.bind(this.domElement,"transitionend",i),O.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-O.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-O.getHeight(this.domElement)/2+"px"}}]),n}(),ib=HE(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);QE.inject(ib);var nm="dg",im=72,rm=20,Bo="Default",oo=function(){try{return!!window.localStorage}catch{return!1}}(),vo=void 0,sm=!0,$r=void 0,Ju=!1,K_=[],Je=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),O.addClass(this.domElement,nm),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=J.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=J.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),J.isUndefined(i.load)?i.load={preset:Bo}:i.preset&&(i.load.preset=i.preset),J.isUndefined(i.parent)&&i.hideable&&K_.push(this),i.resizable=J.isUndefined(i.parent)&&i.resizable,i.autoPlace&&J.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=oo&&localStorage.getItem(Kr(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(h){t.parent?t.getRoot().preset=h:i.load.preset=h,ab(this),t.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,cd(t,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?O.addClass(t.__ul,n.CLASS_CLOSED):O.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){oo&&(r=h,h?O.bind(window,"unload",s):O.unbind(window,"unload",s),localStorage.setItem(Kr(t,"isLocal"),h))}}}),J.isUndefined(i.parent)){if(this.closed=i.closed||!1,O.addClass(this.domElement,n.CLASS_MAIN),O.makeSelectable(this.domElement,!1),oo&&r){t.useLocalStorage=!0;var a=localStorage.getItem(Kr(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,O.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(O.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(O.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),O.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);O.addClass(l,"controller-name"),o=pf(t,l);var u=function(h){return h.preventDefault(),t.closed=!t.closed,!1};O.addClass(this.__ul,n.CLASS_CLOSED),O.addClass(o,"title"),O.bind(o,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(J.isUndefined(i.parent)&&(sm&&($r=document.createElement("div"),O.addClass($r,nm),O.addClass($r,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild($r),sm=!1),$r.appendChild(this.domElement),O.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||cd(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},O.bind(window,"resize",this.__resizeHandler),O.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),O.bind(this.__ul,"transitionend",this.__resizeHandler),O.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&ob(this),s=function(){oo&&localStorage.getItem(Kr(t,"isLocal"))==="true"&&localStorage.setItem(Kr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function d(){var f=t.getRoot();f.width+=1,J.defer(function(){f.width-=1})}i.parent||d()};Je.toggleHide=function(){Ju=!Ju,J.each(K_,function(n){n.domElement.style.display=Ju?"none":""})};Je.CLASS_AUTO_PLACE="a";Je.CLASS_AUTO_PLACE_CONTAINER="ac";Je.CLASS_MAIN="main";Je.CLASS_CONTROLLER_ROW="cr";Je.CLASS_TOO_TALL="taller-than-window";Je.CLASS_CLOSED="closed";Je.CLASS_CLOSE_BUTTON="close-button";Je.CLASS_CLOSE_TOP="close-top";Je.CLASS_CLOSE_BOTTOM="close-bottom";Je.CLASS_DRAG="drag";Je.DEFAULT_WIDTH=245;Je.TEXT_CLOSED="Close Controls";Je.TEXT_OPEN="Open Controls";Je._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===im||n.keyCode===im)&&Je.toggleHide()};O.bind(window,"keydown",Je._keydownHandler,!1);J.extend(Je.prototype,{add:function(e,t){return xo(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return xo(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&$r.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),O.unbind(window,"keydown",Je._keydownHandler,!1),om(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Je(t);this.__folders[e]=i;var r=pf(this,i.domElement);return O.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],om(e);var t=this;J.each(e.__folders,function(i){e.removeFolder(i)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=O.getOffset(e.__ul).top,i=0;J.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=O.getHeight(r))}),window.innerHeight-t-rm<i?(O.addClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-rm+"px"):(O.removeClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(vo)&&(vo=new nb,vo.domElement.innerHTML=ZE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&sb(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&cd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ka(this)),e.folders={},J.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ka(this),ld(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Bo]=ka(this,!0)),this.load.remembered[e]=ka(this),this.preset=e,ud(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?Q_(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||ld(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Z_(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function pf(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function om(n){O.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&O.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function ld(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function rb(n,e,t){if(t.__li=e,t.__gui=n,J.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),xo(n,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),xo(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof od){var i=new wl(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),O.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof wl){var r=function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=xo(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o};t.min=J.compose(r,t.min),t.max=J.compose(r,t.max)}else t instanceof q_?(O.bind(e,"click",function(){O.fakeEvent(t.__checkbox,"click")}),O.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof $_?(O.bind(e,"click",function(){O.fakeEvent(t.__button,"click")}),O.bind(e,"mouseover",function(){O.addClass(t.__button,"hover")}),O.bind(e,"mouseout",function(){O.removeClass(t.__button,"hover")})):t instanceof ad&&(O.addClass(e,"color"),t.updateDisplay=J.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&ld(n.getRoot(),!0),s},t.setValue)}function Q_(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[Bo])o=s[Bo];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function xo(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new ad(e,t);else{var s=[e,t].concat(i.factoryArgs);r=JE.apply(n,s)}i.before instanceof Tr&&(i.before=i.before.__li),Q_(n,r),O.addClass(r.domElement,"c");var o=document.createElement("span");O.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=pf(n,a,i.before);return O.addClass(l,Je.CLASS_CONTROLLER_ROW),r instanceof ad?O.addClass(l,"color"):O.addClass(l,GE(r.getValue())),rb(n,l,r),n.__controllers.push(r),r}function Kr(n,e){return document.location.href+"."+e}function ud(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function am(n,e){e.style.display=n.useLocalStorage?"block":"none"}function sb(n){var e=n.__save_row=document.createElement("li");O.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),O.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",O.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",O.addClass(i,"button"),O.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",O.addClass(r,"button"),O.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",O.addClass(s,"button"),O.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?J.each(n.load.remembered,function(f,h){ud(n,h,h===n.preset)}):ud(n,Bo,!1),O.bind(o,"change",function(){for(var f=0;f<n.__preset_select.length;f++)n.__preset_select[f].innerHTML=n.__preset_select[f].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),oo){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(Kr(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),am(n,a),O.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,am(n,a)})}var d=document.getElementById("dg-new-constructor");O.bind(d,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&vo.hide()}),O.bind(t,"click",function(){d.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),vo.show(),d.focus(),d.select()}),O.bind(i,"click",function(){n.save()}),O.bind(r,"click",function(){var f=prompt("Enter a new preset name.");f&&n.saveAs(f)}),O.bind(s,"click",function(){n.revert()})}function ob(n){var e=void 0;n.__resize_handle=document.createElement("div"),J.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){O.removeClass(n.__closeButton,Je.CLASS_DRAG),O.unbind(window,"mousemove",t),O.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,O.addClass(n.__closeButton,Je.CLASS_DRAG),O.bind(window,"mousemove",t),O.bind(window,"mouseup",i),!1}O.bind(n.__resize_handle,"mousedown",r),O.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function cd(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function ka(n,e){var t={};return J.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];J.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function ab(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Z_(n){n.length!==0&&tb.call(window,function(){Z_(n)}),J.each(n,function(e){e.updateDisplay()})}function lb(){return He("div",{children:[He("h1",{id:"head",children:["Hello!!,",ee("br",{})," I am Mayank"]}),ee("p",{className:"disp",children:" A Full Stack MERN Developer"})]})}const ub="/my-portfolio_1/assets/logo-afc85f4a.png";function cb(){return He("div",{children:[He("div",{className:"nav_toggle",children:[" ",ee("i",{class:"fa-solid fa-bars"})]}),He("nav",{class:"border-white-200 dark:bg-gray-900 absolute top-6 right-24 flex items-center mb-4 justify-between",children:[ee("img",{id:"image",src:ub}),ee("div",{class:"max-w-screen-md flex flex-wrap items-center justify-between  p-4 relative",children:ee("div",{class:"hidden w-full md:block md:w-auto",id:"navbar-default",children:He("ul",{class:"font-large flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 text-white-500 right-24 check",children:[ee("li",{children:ee("a",{href:"#home",class:"block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white",children:"Home"})}),ee("li",{children:ee("a",{href:"#About",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"About"})}),ee("li",{children:ee("a",{href:"#Tech_Stack",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Techstack"})}),ee("li",{children:ee("a",{href:"#Proj",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"HandsOn"})}),ee("li",{children:ee("a",{href:"#contact_back",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Contact"})})]})})})]})]})}function db(){return fr.useEffect(()=>{const n=new BE,e=1e3;var t,i,r,s,o,a,l,u,d,f=new I,h=new Pe,m=!1,x=new Ei(new I(0,0,1),0),_=new I,p=new FE;function c(){t={move:!0,followMouse:!0,attraction:.01,velocityLimit:2,lightColor:1797375,lightIntensity:1,shuffle:v},i=new Vp;const E=document.getElementById("first");a=new W_({canvas:E,antialias:!0}),a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(a.domElement),r=new ln(75,window.innerWidth/window.innerHeight,.1,1e3),s=new zE(r,a.domElement),g();function H(){if(requestAnimationFrame(H),s.update(),o.color.set(t.lightColor),o.intensity=t.lightIntensity,t.move)for(var q=0;q<l.length;q++)l[q].move();a.render(i,r),n.update()}C(),window.addEventListener("resize",C,!1),document.addEventListener("mousemove",P,!1),document.addEventListener("mouseout",w,!1),H()}function g(){i=new Vp,i.background=new qe(0),i.add(new OE(8421504));var E=new Xp(16777215,.5,1e3);E.position.set(0,0,0),i.add(E),o=new Xp(t.lightColor,t.lightIntensity,500),o.position.set(0,0,0),i.add(o),r.position.z=150,u=new Ns(12,12,12),d=new NE({color:16777215,roughness:.5,metalness:.9}),l=[];for(var H=0;H<e;H++){var q=new y;l.push(q),i.add(q.o3d)}v()}function v(){for(var E=0;E<l.length;E++)l[E].shuffle()}function y(){this.velocity=new I(T(1,!0),T(1,!0),T(1,!0)),this.destination=f,this.init()}y.prototype.init=function(E){this.o3d=new Xt,this.o3d.add(new li(u,d))},y.prototype.move=function(){var E;m&&t.followMouse?E=_:E=this.destination;var H=E.clone().sub(this.o3d.position).normalize();this.velocity.x+=t.attraction*H.x,this.velocity.y+=t.attraction*H.y,this.velocity.z+=t.attraction*H.z,this.limitVelocity(),this.o3d.lookAt(this.o3d.position.clone().add(this.velocity)),this.o3d.position.add(this.velocity)},y.prototype.limitVelocity=function(E){this.velocity.x=S(this.velocity.x,-t.velocityLimit,t.velocityLimit),this.velocity.y=S(this.velocity.y,-t.velocityLimit,t.velocityLimit),this.velocity.z=S(this.velocity.z,-t.velocityLimit,t.velocityLimit)},y.prototype.shuffle=function(){this.velocity=new I(T(1,!0),T(1,!0),T(1,!0));var E=new I(T(1,!0),T(1,!0),T(1,!0)).normalize().multiplyScalar(100);this.o3d.position.set(E.x,E.y,E.z);var H=T(.4)+.1;this.o3d.scale.set(H,H,H)};function S(E,H,q){return Math.min(Math.max(E,H),q)}function T(E,H){return H?Math.random()*2*E-E:Math.random()*E}function C(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function P(E){var H=new I;r.getWorldDirection(H),H.normalize(),x.normal=H,m=!0,h.x=E.clientX/window.innerWidth*2-1,h.y=-(E.clientY/window.innerHeight)*2+1,p.setFromCamera(h,r),p.ray.intersectPlane(x,_),o.position.set(_.x,_.y,_.z)}function w(E){m=!1,o.position.set(f.x,f.y,f.z)}c()}),He("div",{id:"home",children:[ee(cb,{}),ee(lb,{}),ee("canvas",{id:"first"})]})}var fb=Object.defineProperty,hb=Object.defineProperties,pb=Object.getOwnPropertyDescriptors,lm=Object.getOwnPropertySymbols,mb=Object.prototype.hasOwnProperty,gb=Object.prototype.propertyIsEnumerable,um=(n,e,t)=>e in n?fb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Zs=(n,e)=>{for(var t in e||(e={}))mb.call(e,t)&&um(n,t,e[t]);if(lm)for(var t of lm(e))gb.call(e,t)&&um(n,t,e[t]);return n},Js=(n,e)=>hb(n,pb(e)),_b=class extends fr.Component{constructor(n){super(n),this.ref=_m.createRef(),this.state={style:{}};const e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},e,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(n=()=>{},e){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:Js(Zs({},this.state.style),{willChange:"transform"})})),this.setTransition(),n(e)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:Js(Zs({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(n=()=>{},e){return e.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.update.bind(this,e)),n(e)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:Js(Zs({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:Js(Zs({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(n=()=>{},e){return this.setTransition(),this.settings.reset&&this.reset(),n(e)}getValues(n){const e=(n.nativeEvent.clientX-this.left)/this.width,t=(n.nativeEvent.clientY-this.top)/this.height,i=Math.min(Math.max(e,0),1),r=Math.min(Math.max(t,0),1),s=(this.reverse*(this.settings.max/2-i*this.settings.max)).toFixed(2),o=(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),a=i*100,l=r*100;return{tiltX:s,tiltY:o,percentageX:a,percentageY:l}}updateElementPosition(){const n=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=n.left,this.top=n.top}update(n){const e=this.getValues(n);this.setState(Object.assign({},this.state,{style:Js(Zs({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:e.tiltY}deg) rotateY(${this.settings.axis==="y"?0:e.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const n=Object.assign({},this.props.style,this.state.style);return ee("div",{style:n,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};const vb={reverse:!1,max:35,perspective:1e3,scale:1,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},ec=n=>ee(_b,{options:vb,style:{height:"auto",width:300,border:"1px solid black",padding:"2rem"},children:He("div",{className:"cd",children:[ee("img",{src:n.src}),He("div",{className:"bottom",children:[ee("div",{className:"tech_heading_1",children:He("b",{children:[" ",n.heading]})}),ee("div",{className:"tech_discription",children:ee("p",{className:"hello",children:n.text})}),ee("div",{className:"list_heading",children:n.extra_heading}),ee("p",{className:"tech_discription",children:n.extra_disc}),ee("div",{className:"list_heading",children:n.list_heading}),He("ul",{children:[ee("li",{children:n.item_1}),ee("li",{children:n.item_2}),ee("li",{children:n.item_3}),ee("li",{children:n.item_4}),ee("li",{children:n.item_5}),ee("li",{children:n.item_6}),ee("li",{children:n.item_7})]})]})]})});const xb="/my-portfolio_1/assets/frontend-4a9442fc.png",yb="/my-portfolio_1/assets/backend-ef28c281.jpg",Sb="/my-portfolio_1/assets/code-479a1fea.png";function Mb(){return He("div",{id:"Tech_Stack",children:[ee("div",{className:"tech_heading",children:" Tech Stacks"}),He("div",{id:"card_section",children:[ee(ec,{src:xb,heading:"FRONTEND DEVELOPER",text:"I value simple content structure, clean design patterns, and thoughtful interactions from scratch, and enjoy bringing ideas to life in the browser.",list_heading:"Tools I Use :",extra_heading:"Languages I Use",extra_disc:"HTML, CSS, JS",item_1:"React js",item_2:"Bootstrap",item_3:"Material UI",item_4:"TailWind CSS",item_5:"3-JS"}),ee(ec,{src:yb,heading:"BACKEND DEVELOPER",text:"I am a backend developer, responsible for designing and maintaining the server-side of web applications. My focus is on server-side logic, database management, API development, security, and performance optimization.",list_heading:"Tools I Use :",item_1:"Node Js",item_2:"Mongo DB",item_3:"Express JS",item_4:"SQL",item_5:"CORS",item_6:"Web Sockets"}),ee(ec,{src:Sb,heading:"LANGUAGES",text:"I am a highly skilled developer proficient in multiple programming languages. From C++ and Java(beginner) to javascript, Node.js, and SQL, I have a diverse range of language expertise. I possess a deep understanding of each language's intricacies and can adapt quickly to new technologies.",list_heading:"Languages I Speak :",item_1:"C++",item_2:"HTML , CSS , JAVASCRIPT",item_3:"SQL",item_4:"Node Js",item_5:"Java (Beginner)"})]})]})}const wb="/my-portfolio_1/assets/we-connect-4c458da5.jpg",Eb="/my-portfolio_1/assets/goal-spot-b4643a72.jpg",bb="/my-portfolio_1/assets/campus-blocks-d918c0b0.jpg",Ab="/my-portfolio_1/assets/flight-booking-7c051140.jpg",Tb="/my-portfolio_1/assets/API-4ddbd4a0.jpg",Cb="/my-portfolio_1/assets/jwt-680f601d.jpg";function qr(n){return ee("div",{children:ee("div",{class:"container_1",children:He("div",{class:"card_1",children:[ee("div",{class:"front",children:ee("img",{src:n.src})}),He("div",{class:"back",children:[ee("h2",{children:n.txt}),ee("button",{children:ee("a",{href:n.anc,children:n.button_val})})]})]})})})}function Lb(){return He("div",{id:"Proj",children:[ee("h1",{className:"heading_123",children:"My WoRKS"}),He("div",{className:"project_page",children:[ee(qr,{src:wb,txt:"Real Time Chat Application using Mern Stack",anc:"https://github.com/mayankgz/We---Connect-final",button_val:"GitHub Repo"}),ee(qr,{src:Eb,txt:"An E-commerce Website for buying programming courses with search engine and API integration",anc:"https://github.com/mayankgz/goalspot-search-engine",button_val:"GitHub Repo"}),ee(qr,{src:bb,txt:"Campus Block,BVCOE official website. which is built from scratch",anc:"https://campusblocksbvcoe.netlify.app/",button_val:"Live Link"}),ee(qr,{src:Tb,txt:"An experimental web page with search engine using giphy API",anc:"https://github.com/mayankgz/Giphy-API",button_val:"GitHub Repo"}),ee(qr,{src:Cb,txt:"An Advance Authentication enabled website using passport JWT(Java Web Token)",anc:"https://github.com/mayankgz/Authentication-JWT",button_val:"GitHub Repo"}),ee(qr,{src:Ab,txt:"An Online Flight Booking Web app (under development)",anc:"https://github.com/mayankgz/flight_booking",button_val:"GitHub Repo"})]})]})}function Pb(){return ee("div",{id:"contact_back",children:He("footer",{children:[He("div",{className:"row",children:[ee("div",{className:"col",children:ee("p",{className:"para_footer",children:" I am excited about the endless possibilities that lie ahead in the world of web development. My expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack empowers me to create powerful and efficient web applications that cater to modern user needs. I take pride in my problem-solving abilities and my passion for writing clean, scalable code."})}),He("div",{className:"col",children:[He("h3",{children:["Address",ee("div",{className:"underline",children:ee("span",{})})]}),ee("p",{children:"633,West Parmanand Colony"}),ee("p",{children:"Near Mukherjee Nagar"}),ee("p",{children:"Delhi-110009"}),ee("p",{className:"email-id",children:"mayankgagneja2002@gmail.com"}),ee("h4",{children:"+91-7835880943"})]}),He("div",{className:"col",children:[He("h3",{children:["Links ",ee("div",{className:"underline",children:ee("span",{})})]}),He("ul",{children:[ee("li",{children:ee("a",{href:"",children:"Home"})}),ee("li",{children:ee("a",{href:"",children:"About"})}),ee("li",{children:ee("a",{href:"",children:"Tech Stack"})}),ee("li",{children:ee("a",{href:"",children:"Projects"})}),ee("li",{children:ee("a",{href:"",children:"Contacts"})})]})]}),He("div",{className:"col",children:[He("h3",{children:["Newsletter",ee("div",{className:"underline",children:ee("span",{})})]}),He("form",{children:[ee("i",{class:"fa-regular fa-envelope"}),ee("input",{type:"email",placeholder:"enter your Email-id",required:!0}),He("button",{type:"submit",children:[" ",ee("i",{class:"fa-solid fa-arrow-right"})]})]})]}),He("div",{className:"social-icon",children:[ee("i",{class:"fa-solid fa-code"}),ee("i",{class:"fa-brands fa-linkedin"}),ee("i",{class:"fa-brands fa-facebook"}),ee("i",{class:"fa-brands fa-github"})]})]}),ee("hr",{}),ee("p",{className:"copyright",children:"mayank Gagneja All Rights Reserved "})]})})}function Rb(){return He("div",{className:"App",children:[ee(db,{}),ee(Ix,{}),ee(Mb,{}),ee(Lb,{}),ee(Pb,{})]})}tc.createRoot(document.getElementById("root")).render(ee(_m.StrictMode,{children:ee(Rb,{})}));
