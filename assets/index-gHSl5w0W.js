(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&c(E)}).observe(document,{childList:!0,subtree:!0});function s(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function c(f){if(f.ep)return;f.ep=!0;const w=s(f);fetch(f.href,w)}})();function n1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ds={exports:{}},ei={},Os={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function r1(){if(ed)return ne;ed=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),D=Symbol.iterator;function U(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,K={};function J(g,C,H){this.props=g,this.context=C,this.refs=K,this.updater=H||le}J.prototype.isReactComponent={},J.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},J.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Y(){}Y.prototype=J.prototype;function $(g,C,H){this.props=g,this.context=C,this.refs=K,this.updater=H||le}var ie=$.prototype=new Y;ie.constructor=$,G(ie,J.prototype),ie.isPureReactComponent=!0;var de=Array.isArray,se=Object.prototype.hasOwnProperty,oe={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function X(g,C,H){var Z,q={},re=null,ae=null;if(C!=null)for(Z in C.ref!==void 0&&(ae=C.ref),C.key!==void 0&&(re=""+C.key),C)se.call(C,Z)&&!V.hasOwnProperty(Z)&&(q[Z]=C[Z]);var ue=arguments.length-2;if(ue===1)q.children=H;else if(1<ue){for(var me=Array(ue),Pe=0;Pe<ue;Pe++)me[Pe]=arguments[Pe+2];q.children=me}if(g&&g.defaultProps)for(Z in ue=g.defaultProps,ue)q[Z]===void 0&&(q[Z]=ue[Z]);return{$$typeof:i,type:g,key:re,ref:ae,props:q,_owner:oe.current}}function Ve(g,C){return{$$typeof:i,type:g.type,key:C,ref:g.ref,props:g.props,_owner:g._owner}}function Ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function _e(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(H){return C[H]})}var He=/\/+/g;function fe(g,C){return typeof g=="object"&&g!==null&&g.key!=null?_e(""+g.key):C.toString(36)}function Ne(g,C,H,Z,q){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var ae=!1;if(g===null)ae=!0;else switch(re){case"string":case"number":ae=!0;break;case"object":switch(g.$$typeof){case i:case a:ae=!0}}if(ae)return ae=g,q=q(ae),g=Z===""?"."+fe(ae,0):Z,de(q)?(H="",g!=null&&(H=g.replace(He,"$&/")+"/"),Ne(q,C,H,"",function(Pe){return Pe})):q!=null&&(Ue(q)&&(q=Ve(q,H+(!q.key||ae&&ae.key===q.key?"":(""+q.key).replace(He,"$&/")+"/")+g)),C.push(q)),1;if(ae=0,Z=Z===""?".":Z+":",de(g))for(var ue=0;ue<g.length;ue++){re=g[ue];var me=Z+fe(re,ue);ae+=Ne(re,C,H,me,q)}else if(me=U(g),typeof me=="function")for(g=me.call(g),ue=0;!(re=g.next()).done;)re=re.value,me=Z+fe(re,ue++),ae+=Ne(re,C,H,me,q);else if(re==="object")throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return ae}function We(g,C,H){if(g==null)return g;var Z=[],q=0;return Ne(g,Z,"","",function(re){return C.call(H,re,q++)}),Z}function Me(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(H){(g._status===0||g._status===-1)&&(g._status=1,g._result=H)},function(H){(g._status===0||g._status===-1)&&(g._status=2,g._result=H)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var ye={current:null},R={transition:null},P={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:R,ReactCurrentOwner:oe};function T(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:We,forEach:function(g,C,H){We(g,function(){C.apply(this,arguments)},H)},count:function(g){var C=0;return We(g,function(){C++}),C},toArray:function(g){return We(g,function(C){return C})||[]},only:function(g){if(!Ue(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=J,ne.Fragment=s,ne.Profiler=f,ne.PureComponent=$,ne.StrictMode=c,ne.Suspense=j,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,ne.act=T,ne.cloneElement=function(g,C,H){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var Z=G({},g.props),q=g.key,re=g.ref,ae=g._owner;if(C!=null){if(C.ref!==void 0&&(re=C.ref,ae=oe.current),C.key!==void 0&&(q=""+C.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(me in C)se.call(C,me)&&!V.hasOwnProperty(me)&&(Z[me]=C[me]===void 0&&ue!==void 0?ue[me]:C[me])}var me=arguments.length-2;if(me===1)Z.children=H;else if(1<me){ue=Array(me);for(var Pe=0;Pe<me;Pe++)ue[Pe]=arguments[Pe+2];Z.children=ue}return{$$typeof:i,type:g.type,key:q,ref:re,props:Z,_owner:ae}},ne.createContext=function(g){return g={$$typeof:E,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ne.createElement=X,ne.createFactory=function(g){var C=X.bind(null,g);return C.type=g,C},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:S,render:g}},ne.isValidElement=Ue,ne.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:Me}},ne.memo=function(g,C){return{$$typeof:M,type:g,compare:C===void 0?null:C}},ne.startTransition=function(g){var C=R.transition;R.transition={};try{g()}finally{R.transition=C}},ne.unstable_act=T,ne.useCallback=function(g,C){return ye.current.useCallback(g,C)},ne.useContext=function(g){return ye.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return ye.current.useDeferredValue(g)},ne.useEffect=function(g,C){return ye.current.useEffect(g,C)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(g,C,H){return ye.current.useImperativeHandle(g,C,H)},ne.useInsertionEffect=function(g,C){return ye.current.useInsertionEffect(g,C)},ne.useLayoutEffect=function(g,C){return ye.current.useLayoutEffect(g,C)},ne.useMemo=function(g,C){return ye.current.useMemo(g,C)},ne.useReducer=function(g,C,H){return ye.current.useReducer(g,C,H)},ne.useRef=function(g){return ye.current.useRef(g)},ne.useState=function(g){return ye.current.useState(g)},ne.useSyncExternalStore=function(g,C,H){return ye.current.useSyncExternalStore(g,C,H)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var td;function ta(){return td||(td=1,Os.exports=r1()),Os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function i1(){if(nd)return ei;nd=1;var i=ta(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(S,j,M){var O,D={},U=null,le=null;M!==void 0&&(U=""+M),j.key!==void 0&&(U=""+j.key),j.ref!==void 0&&(le=j.ref);for(O in j)c.call(j,O)&&!w.hasOwnProperty(O)&&(D[O]=j[O]);if(S&&S.defaultProps)for(O in j=S.defaultProps,j)D[O]===void 0&&(D[O]=j[O]);return{$$typeof:a,type:S,key:U,ref:le,props:D,_owner:f.current}}return ei.Fragment=s,ei.jsx=E,ei.jsxs=E,ei}var rd;function o1(){return rd||(rd=1,Ds.exports=i1()),Ds.exports}var h=o1(),Te=ta();const yt=n1(Te);var ko={},Fs={exports:{}},ct={},As={exports:{}},$s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function l1(){return id||(id=1,function(i){function a(R,P){var T=R.length;R.push(P);e:for(;0<T;){var g=T-1>>>1,C=R[g];if(0<f(C,P))R[g]=P,R[T]=C,T=g;else break e}}function s(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var P=R[0],T=R.pop();if(T!==P){R[0]=T;e:for(var g=0,C=R.length,H=C>>>1;g<H;){var Z=2*(g+1)-1,q=R[Z],re=Z+1,ae=R[re];if(0>f(q,T))re<C&&0>f(ae,q)?(R[g]=ae,R[re]=T,g=re):(R[g]=q,R[Z]=T,g=Z);else if(re<C&&0>f(ae,T))R[g]=ae,R[re]=T,g=re;else break e}}return P}function f(R,P){var T=R.sortIndex-P.sortIndex;return T!==0?T:R.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var E=Date,S=E.now();i.unstable_now=function(){return E.now()-S}}var j=[],M=[],O=1,D=null,U=3,le=!1,G=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(R){for(var P=s(M);P!==null;){if(P.callback===null)c(M);else if(P.startTime<=R)c(M),P.sortIndex=P.expirationTime,a(j,P);else break;P=s(M)}}function de(R){if(K=!1,ie(R),!G)if(s(j)!==null)G=!0,Me(se);else{var P=s(M);P!==null&&ye(de,P.startTime-R)}}function se(R,P){G=!1,K&&(K=!1,Y(X),X=-1),le=!0;var T=U;try{for(ie(P),D=s(j);D!==null&&(!(D.expirationTime>P)||R&&!_e());){var g=D.callback;if(typeof g=="function"){D.callback=null,U=D.priorityLevel;var C=g(D.expirationTime<=P);P=i.unstable_now(),typeof C=="function"?D.callback=C:D===s(j)&&c(j),ie(P)}else c(j);D=s(j)}if(D!==null)var H=!0;else{var Z=s(M);Z!==null&&ye(de,Z.startTime-P),H=!1}return H}finally{D=null,U=T,le=!1}}var oe=!1,V=null,X=-1,Ve=5,Ue=-1;function _e(){return!(i.unstable_now()-Ue<Ve)}function He(){if(V!==null){var R=i.unstable_now();Ue=R;var P=!0;try{P=V(!0,R)}finally{P?fe():(oe=!1,V=null)}}else oe=!1}var fe;if(typeof $=="function")fe=function(){$(He)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,We=Ne.port2;Ne.port1.onmessage=He,fe=function(){We.postMessage(null)}}else fe=function(){J(He,0)};function Me(R){V=R,oe||(oe=!0,fe())}function ye(R,P){X=J(function(){R(i.unstable_now())},P)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_continueExecution=function(){G||le||(G=!0,Me(se))},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return s(j)},i.unstable_next=function(R){switch(U){case 1:case 2:case 3:var P=3;break;default:P=U}var T=U;U=P;try{return R()}finally{U=T}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=U;U=R;try{return P()}finally{U=T}},i.unstable_scheduleCallback=function(R,P,T){var g=i.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?g+T:g):T=g,R){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=T+C,R={id:O++,callback:P,priorityLevel:R,startTime:T,expirationTime:C,sortIndex:-1},T>g?(R.sortIndex=T,a(M,R),s(j)===null&&R===s(M)&&(K?(Y(X),X=-1):K=!0,ye(de,T-g))):(R.sortIndex=C,a(j,R),G||le||(G=!0,Me(se))),R},i.unstable_shouldYield=_e,i.unstable_wrapCallback=function(R){var P=U;return function(){var T=U;U=P;try{return R.apply(this,arguments)}finally{U=T}}}}($s)),$s}var od;function s1(){return od||(od=1,As.exports=l1()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function a1(){if(ld)return ct;ld=1;var i=ta(),a=s1();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},D={};function U(e){return j.call(D,e)?!0:j.call(O,e)?!1:M.test(e)?D[e]=!0:(O[e]=!0,!1)}function le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,n,r){if(t===null||typeof t>"u"||le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,o,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,$);J[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,$);J[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,$);J[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,n,r){var o=J.hasOwnProperty(t)?J[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,n,o,r)&&(n=null),r||o===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),oe=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),_e=Symbol.for("react.context"),He=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),R=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,g;function C(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var H=!1;function Z(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),l=r.stack.split(`
`),u=o.length-1,d=l.length-1;1<=u&&0<=d&&o[u]!==l[d];)d--;for(;1<=u&&0<=d;u--,d--)if(o[u]!==l[d]){if(u!==1||d!==1)do if(u--,d--,0>d||o[u]!==l[d]){var p=`
`+o[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function q(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case oe:return"Portal";case Ve:return"Profiler";case X:return"StrictMode";case fe:return"Suspense";case Ne:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _e:return(e.displayName||"Context")+".Consumer";case Ue:return(e._context.displayName||"Context")+".Provider";case He:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case We:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pe(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Pe(e))}function la(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vo(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function aa(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Uo(e,t){aa(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(mr(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function da(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sf=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(e,t){if(t){if(sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,$n=null,Bn=null;function ya(e){if(e=$r(e)){if(typeof Zo!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Oi(t),Zo(e.stateNode,e.type,t))}}function va(e){$n?Bn?Bn.push(e):Bn=[e]:$n=e}function xa(){if($n){var e=$n,t=Bn;if(Bn=$n=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function wa(e,t){return e(t)}function Sa(){}var Jo=!1;function ka(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return wa(e,t,n)}finally{Jo=!1,($n!==null||Bn!==null)&&(Sa(),xa())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var qo=!1;if(S)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){qo=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{qo=!1}function af(e,t,n,r,o,l,u,d,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(_){this.onError(_)}}var wr=!1,hi=null,mi=!1,el=null,uf={onError:function(e){wr=!0,hi=e}};function cf(e,t,n,r,o,l,u,d,p){wr=!1,hi=null,af.apply(uf,arguments)}function df(e,t,n,r,o,l,u,d,p){if(cf.apply(this,arguments),wr){if(wr){var x=hi;wr=!1,hi=null}else throw Error(s(198));mi||(mi=!0,el=x)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if(wn(e)!==e)throw Error(s(188))}function ff(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ea(o),e;if(l===r)return Ea(o),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=l;else{for(var u=!1,d=o.child;d;){if(d===n){u=!0,n=o,r=l;break}if(d===r){u=!0,r=o,n=l;break}d=d.sibling}if(!u){for(d=l.child;d;){if(d===n){u=!0,n=l,r=o;break}if(d===r){u=!0,r=l,n=o;break}d=d.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function ja(e){return e=ff(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var _a=a.unstable_scheduleCallback,Na=a.unstable_cancelCallback,pf=a.unstable_shouldYield,hf=a.unstable_requestPaint,Re=a.unstable_now,mf=a.unstable_getCurrentPriorityLevel,tl=a.unstable_ImmediatePriority,Pa=a.unstable_UserBlockingPriority,gi=a.unstable_NormalPriority,gf=a.unstable_LowPriority,La=a.unstable_IdlePriority,yi=null,Ot=null;function yf(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:wf,vf=Math.log,xf=Math.LN2;function wf(e){return e>>>=0,e===0?32:31-(vf(e)/xf|0)|0}var vi=64,xi=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var d=u&~o;d!==0?r=Sr(d):(l&=u,l!==0&&(r=Sr(l)))}else u=n&~o,u!==0?r=Sr(u):l!==0&&(r=Sr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),o=1<<n,r|=e[n],t&=~o;return r}function Sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-zt(l),d=1<<u,p=o[u];p===-1?((d&n)===0||(d&r)!==0)&&(o[u]=Sf(d,t)):p<=t&&(e.expiredLanes|=d),l&=~d}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-zt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ge=0;function Ma(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ra,ol,Ia,Da,Oa,ll=!1,Si=[],Zt=null,Jt=null,qt=null,Cr=new Map,Er=new Map,en=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fa(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function jr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=$r(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jf(e,t,n,r,o){switch(t){case"focusin":return Zt=jr(Zt,e,t,n,r,o),!0;case"dragenter":return Jt=jr(Jt,e,t,n,r,o),!0;case"mouseover":return qt=jr(qt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Cr.set(l,jr(Cr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Er.set(l,jr(Er.get(l)||null,e,t,n,r,o)),!0}return!1}function Aa(e){var t=Sn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Oa(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yo=r,n.target.dispatchEvent(r),Yo=null}else return t=$r(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function $a(e,t,n){ki(e)&&n.delete(t)}function zf(){ll=!1,Zt!==null&&ki(Zt)&&(Zt=null),Jt!==null&&ki(Jt)&&(Jt=null),qt!==null&&ki(qt)&&(qt=null),Cr.forEach($a),Er.forEach($a)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,zf)))}function _r(e){function t(o){return zr(o,e)}if(0<Si.length){zr(Si[0],e);for(var n=1;n<Si.length;n++){var r=Si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&zr(Zt,e),Jt!==null&&zr(Jt,e),qt!==null&&zr(qt,e),Cr.forEach(t),Er.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Aa(n),n.blockedOn===null&&en.shift()}var bn=de.ReactCurrentBatchConfig,Ci=!0;function _f(e,t,n,r){var o=ge,l=bn.transition;bn.transition=null;try{ge=1,sl(e,t,n,r)}finally{ge=o,bn.transition=l}}function Nf(e,t,n,r){var o=ge,l=bn.transition;bn.transition=null;try{ge=4,sl(e,t,n,r)}finally{ge=o,bn.transition=l}}function sl(e,t,n,r){if(Ci){var o=al(e,t,n,r);if(o===null)jl(e,t,r,Ei,n),Fa(e,r);else if(jf(o,e,t,n,r))r.stopPropagation();else if(Fa(e,r),t&4&&-1<Ef.indexOf(e)){for(;o!==null;){var l=$r(o);if(l!==null&&Ra(l),l=al(e,t,n,r),l===null&&jl(e,t,r,Ei,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Ei=null;function al(e,t,n,r){if(Ei=null,e=Xo(r),e=Sn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ei=e,null}function Ba(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case tl:return 1;case Pa:return 4;case gi:case gf:return 16;case La:return 536870912;default:return 16}default:return 16}}var tn=null,ul=null,ji=null;function ba(){if(ji)return ji;var e,t=ul,n=t.length,r,o="value"in tn?tn.value:tn.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[l-r];r++);return ji=o.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Va(){return!1}function ft(e){function t(n,r,o,l,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_i:Va,this.isPropagationStopped=Va,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=ft(Vn),Nr=T({},Vn,{view:0,detail:0}),Pf=ft(Nr),dl,fl,Pr,Ni=T({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(dl=e.screenX-Pr.screenX,fl=e.screenY-Pr.screenY):fl=dl=0,Pr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Ua=ft(Ni),Lf=T({},Ni,{dataTransfer:0}),Tf=ft(Lf),Mf=T({},Nr,{relatedTarget:0}),pl=ft(Mf),Rf=T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),If=ft(Rf),Df=T({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=ft(Df),Ff=T({},Vn,{data:0}),Ha=ft(Ff),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bf[e])?!!t[e]:!1}function hl(){return bf}var Vf=T({},Nr,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=ft(Vf),Hf=T({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=ft(Hf),Wf=T({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Qf=ft(Wf),Gf=T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=ft(Gf),Yf=T({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=ft(Yf),Zf=[9,13,27,32],ml=S&&"CompositionEvent"in window,Lr=null;S&&"documentMode"in document&&(Lr=document.documentMode);var Jf=S&&"TextEvent"in window&&!Lr,Qa=S&&(!ml||Lr&&8<Lr&&11>=Lr),Ga=" ",Ka=!1;function Ya(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function qf(e,t){switch(e){case"compositionend":return Xa(t);case"keypress":return t.which!==32?null:(Ka=!0,Ga);case"textInput":return e=t.data,e===Ga&&Ka?null:e;default:return null}}function ep(e,t){if(Un)return e==="compositionend"||!ml&&Ya(e,t)?(e=ba(),ji=ul=tn=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function Ja(e,t,n,r){va(r),t=Ri(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Mr=null;function np(e){gu(e,0)}function Pi(e){var t=Kn(e);if(la(t))return e}function rp(e,t){if(e==="change")return t}var qa=!1;if(S){var gl;if(S){var yl="oninput"in document;if(!yl){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),yl=typeof eu.oninput=="function"}gl=yl}else gl=!1;qa=gl&&(!document.documentMode||9<document.documentMode)}function tu(){Tr&&(Tr.detachEvent("onpropertychange",nu),Mr=Tr=null)}function nu(e){if(e.propertyName==="value"&&Pi(Mr)){var t=[];Ja(t,Mr,e,Xo(e)),ka(np,t)}}function ip(e,t,n){e==="focusin"?(tu(),Tr=t,Mr=n,Tr.attachEvent("onpropertychange",nu)):e==="focusout"&&tu()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Mr)}function lp(e,t){if(e==="click")return Pi(t)}function sp(e,t){if(e==="input"||e==="change")return Pi(t)}function ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:ap;function Rr(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!j.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function up(e){var t=lu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ou(n.ownerDocument.documentElement,n)){if(r!==null&&vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=iu(n,l);var u=iu(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=S&&"documentMode"in document&&11>=document.documentMode,Hn=null,xl=null,Ir=null,wl=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wl||Hn==null||Hn!==fi(r)||(r=Hn,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Rr(Ir,r)||(Ir=r,r=Ri(xl,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},Sl={},au={};S&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Ti(e){if(Sl[e])return Sl[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in au)return Sl[e]=t[n];return e}var uu=Ti("animationend"),cu=Ti("animationiteration"),du=Ti("animationstart"),fu=Ti("transitionend"),pu=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){pu.set(e,t),w(t,[e])}for(var kl=0;kl<hu.length;kl++){var Cl=hu[kl],dp=Cl.toLowerCase(),fp=Cl[0].toUpperCase()+Cl.slice(1);nn(dp,"on"+fp)}nn(uu,"onAnimationEnd"),nn(cu,"onAnimationIteration"),nn(du,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(fu,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,df(r,t,void 0,e),e.currentTarget=null}function gu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var u=r.length-1;0<=u;u--){var d=r[u],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==l&&o.isPropagationStopped())break e;mu(o,d,x),l=p}else for(u=0;u<r.length;u++){if(d=r[u],p=d.instance,x=d.currentTarget,d=d.listener,p!==l&&o.isPropagationStopped())break e;mu(o,d,x),l=p}}}if(mi)throw e=el,mi=!1,el=null,e}function we(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(yu(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),yu(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[Mi]){e[Mi]=!0,c.forEach(function(n){n!=="selectionchange"&&(pp.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,El("selectionchange",!1,t))}}function yu(e,t,n,r){switch(Ba(t)){case 1:var o=_f;break;case 4:o=Nf;break;default:o=sl}n=o.bind(null,t,n,e),o=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;u=u.return}for(;d!==null;){if(u=Sn(d),u===null)return;if(p=u.tag,p===5||p===6){r=l=u;continue e}d=d.parentNode}}r=r.return}ka(function(){var x=l,_=Xo(n),N=[];e:{var z=pu.get(e);if(z!==void 0){var I=cl,A=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":I=Uf;break;case"focusin":A="focus",I=pl;break;case"focusout":A="blur",I=pl;break;case"beforeblur":case"afterblur":I=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Qf;break;case uu:case cu:case du:I=If;break;case fu:I=Kf;break;case"scroll":I=Pf;break;case"wheel":I=Xf;break;case"copy":case"cut":case"paste":I=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Wa}var B=(t&4)!==0,Ie=!B&&e==="scroll",y=B?z!==null?z+"Capture":null:z;B=[];for(var m=x,v;m!==null;){v=m;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,y!==null&&(L=vr(m,y),L!=null&&B.push(Fr(m,L,v)))),Ie)break;m=m.return}0<B.length&&(z=new I(z,A,null,n,_),N.push({event:z,listeners:B}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",z&&n!==Yo&&(A=n.relatedTarget||n.fromElement)&&(Sn(A)||A[bt]))break e;if((I||z)&&(z=_.window===_?_:(z=_.ownerDocument)?z.defaultView||z.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=x,A=A?Sn(A):null,A!==null&&(Ie=wn(A),A!==Ie||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=x),I!==A)){if(B=Ua,L="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(B=Wa,L="onPointerLeave",y="onPointerEnter",m="pointer"),Ie=I==null?z:Kn(I),v=A==null?z:Kn(A),z=new B(L,m+"leave",I,n,_),z.target=Ie,z.relatedTarget=v,L=null,Sn(_)===x&&(B=new B(y,m+"enter",A,n,_),B.target=v,B.relatedTarget=Ie,L=B),Ie=L,I&&A)t:{for(B=I,y=A,m=0,v=B;v;v=Qn(v))m++;for(v=0,L=y;L;L=Qn(L))v++;for(;0<m-v;)B=Qn(B),m--;for(;0<v-m;)y=Qn(y),v--;for(;m--;){if(B===y||y!==null&&B===y.alternate)break t;B=Qn(B),y=Qn(y)}B=null}else B=null;I!==null&&vu(N,z,I,B,!1),A!==null&&Ie!==null&&vu(N,Ie,A,B,!0)}}e:{if(z=x?Kn(x):window,I=z.nodeName&&z.nodeName.toLowerCase(),I==="select"||I==="input"&&z.type==="file")var b=rp;else if(Za(z))if(qa)b=sp;else{b=op;var W=ip}else(I=z.nodeName)&&I.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(b=lp);if(b&&(b=b(e,x))){Ja(N,b,n,_);break e}W&&W(e,z,x),e==="focusout"&&(W=z._wrapperState)&&W.controlled&&z.type==="number"&&Ho(z,"number",z.value)}switch(W=x?Kn(x):window,e){case"focusin":(Za(W)||W.contentEditable==="true")&&(Hn=W,xl=x,Ir=null);break;case"focusout":Ir=xl=Hn=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,su(N,n,_);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":su(N,n,_)}var Q;if(ml)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Un?Ya(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(Qa&&n.locale!=="ko"&&(Un||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Un&&(Q=ba()):(tn=_,ul="value"in tn?tn.value:tn.textContent,Un=!0)),W=Ri(x,ee),0<W.length&&(ee=new Ha(ee,e,null,n,_),N.push({event:ee,listeners:W}),Q?ee.data=Q:(Q=Xa(n),Q!==null&&(ee.data=Q)))),(Q=Jf?qf(e,n):ep(e,n))&&(x=Ri(x,"onBeforeInput"),0<x.length&&(_=new Ha("onBeforeInput","beforeinput",null,n,_),N.push({event:_,listeners:x}),_.data=Q))}gu(N,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=vr(e,n),l!=null&&r.unshift(Fr(e,l,o)),l=vr(e,t),l!=null&&r.push(Fr(e,l,o))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,o){for(var l=t._reactName,u=[];n!==null&&n!==r;){var d=n,p=d.alternate,x=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&x!==null&&(d=x,o?(p=vr(n,l),p!=null&&u.unshift(Fr(n,p,d))):o||(p=vr(n,l),p!=null&&u.push(Fr(n,p,d)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var hp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(mp,"")}function Ii(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(s(425))}function Di(){}var zl=null,_l=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof wu<"u"?function(e){return wu.resolve(null).then(e).catch(vp)}:Pl;function vp(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);_r(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Gn,Ar="__reactProps$"+Gn,bt="__reactContainer$"+Gn,Tl="__reactEvents$"+Gn,xp="__reactListeners$"+Gn,wp="__reactHandles$"+Gn;function Sn(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Su(e);e!==null;){if(n=e[Ft])return n;e=Su(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[Ft]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Oi(e){return e[Ar]||null}var Ml=[],Yn=-1;function on(e){return{current:e}}function Se(e){0>Yn||(e.current=Ml[Yn],Ml[Yn]=null,Yn--)}function xe(e,t){Yn++,Ml[Yn]=e.current,e.current=t}var ln={},Ze=on(ln),ot=on(!1),kn=ln;function Xn(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function Fi(){Se(ot),Se(Ze)}function ku(e,t,n){if(Ze.current!==ln)throw Error(s(168));xe(Ze,t),xe(ot,n)}function Cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(s(108,ae(e)||"Unknown",o));return T({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,kn=Ze.current,xe(Ze,e),xe(ot,ot.current),!0}function Eu(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Cu(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,Se(ot),Se(Ze),xe(Ze,e)):Se(ot),xe(ot,n)}var Vt=null,$i=!1,Rl=!1;function ju(e){Vt===null?Vt=[e]:Vt.push(e)}function Sp(e){$i=!0,ju(e)}function sn(){if(!Rl&&Vt!==null){Rl=!0;var e=0,t=ge;try{var n=Vt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,$i=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),_a(tl,sn),o}finally{ge=t,Rl=!1}}return null}var Zn=[],Jn=0,Bi=null,bi=0,vt=[],xt=0,Cn=null,Ut=1,Ht="";function En(e,t){Zn[Jn++]=bi,Zn[Jn++]=Bi,Bi=e,bi=t}function zu(e,t,n){vt[xt++]=Ut,vt[xt++]=Ht,vt[xt++]=Cn,Cn=e;var r=Ut;e=Ht;var o=32-zt(r)-1;r&=~(1<<o),n+=1;var l=32-zt(t)+o;if(30<l){var u=o-o%5;l=(r&(1<<u)-1).toString(32),r>>=u,o-=u,Ut=1<<32-zt(t)+o|n<<o|r,Ht=l+e}else Ut=1<<l|n<<o|r,Ht=e}function Il(e){e.return!==null&&(En(e,1),zu(e,1,0))}function Dl(e){for(;e===Bi;)Bi=Zn[--Jn],Zn[Jn]=null,bi=Zn[--Jn],Zn[Jn]=null;for(;e===Cn;)Cn=vt[--xt],vt[xt]=null,Ht=vt[--xt],vt[xt]=null,Ut=vt[--xt],vt[xt]=null}var pt=null,ht=null,Ee=!1,Nt=null;function _u(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ht=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ht=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Ee){var t=ht;if(t){var n=t;if(!Nu(e,t)){if(Ol(e))throw Error(s(418));t=rn(n.nextSibling);var r=pt;t&&Nu(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,Ee=!1,pt=e)}}else{if(Ol(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ee=!1,pt=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function Vi(e){if(e!==pt)return!1;if(!Ee)return Pu(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=ht)){if(Ol(e))throw Lu(),Error(s(418));for(;t;)_u(e,t),t=rn(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=pt?rn(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=ht;e;)e=rn(e.nextSibling)}function qn(){ht=pt=null,Ee=!1}function Al(e){Nt===null?Nt=[e]:Nt.push(e)}var kp=de.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var d=o.refs;u===null?delete d[l]:d[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Ui(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tu(e){var t=e._init;return t(e._payload)}function Mu(e){function t(y,m){if(e){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function o(y,m){return y=mn(y,m),y.index=0,y.sibling=null,y}function l(y,m,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,m,v,L){return m===null||m.tag!==6?(m=Ps(v,y.mode,L),m.return=y,m):(m=o(m,v),m.return=y,m)}function p(y,m,v,L){var b=v.type;return b===V?_(y,m,v.props.children,L,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Me&&Tu(b)===m.type)?(L=o(m,v.props),L.ref=Br(y,m,v),L.return=y,L):(L=ho(v.type,v.key,v.props,null,y.mode,L),L.ref=Br(y,m,v),L.return=y,L)}function x(y,m,v,L){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ls(v,y.mode,L),m.return=y,m):(m=o(m,v.children||[]),m.return=y,m)}function _(y,m,v,L,b){return m===null||m.tag!==7?(m=Mn(v,y.mode,L,b),m.return=y,m):(m=o(m,v),m.return=y,m)}function N(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ps(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case se:return v=ho(m.type,m.key,m.props,null,y.mode,v),v.ref=Br(y,null,m),v.return=y,v;case oe:return m=Ls(m,y.mode,v),m.return=y,m;case Me:var L=m._init;return N(y,L(m._payload),v)}if(mr(m)||P(m))return m=Mn(m,y.mode,v,null),m.return=y,m;Ui(y,m)}return null}function z(y,m,v,L){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:d(y,m,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case se:return v.key===b?p(y,m,v,L):null;case oe:return v.key===b?x(y,m,v,L):null;case Me:return b=v._init,z(y,m,b(v._payload),L)}if(mr(v)||P(v))return b!==null?null:_(y,m,v,L,null);Ui(y,v)}return null}function I(y,m,v,L,b){if(typeof L=="string"&&L!==""||typeof L=="number")return y=y.get(v)||null,d(m,y,""+L,b);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case se:return y=y.get(L.key===null?v:L.key)||null,p(m,y,L,b);case oe:return y=y.get(L.key===null?v:L.key)||null,x(m,y,L,b);case Me:var W=L._init;return I(y,m,v,W(L._payload),b)}if(mr(L)||P(L))return y=y.get(v)||null,_(m,y,L,b,null);Ui(m,L)}return null}function A(y,m,v,L){for(var b=null,W=null,Q=m,ee=m=0,Ke=null;Q!==null&&ee<v.length;ee++){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var pe=z(y,Q,v[ee],L);if(pe===null){Q===null&&(Q=Ke);break}e&&Q&&pe.alternate===null&&t(y,Q),m=l(pe,m,ee),W===null?b=pe:W.sibling=pe,W=pe,Q=Ke}if(ee===v.length)return n(y,Q),Ee&&En(y,ee),b;if(Q===null){for(;ee<v.length;ee++)Q=N(y,v[ee],L),Q!==null&&(m=l(Q,m,ee),W===null?b=Q:W.sibling=Q,W=Q);return Ee&&En(y,ee),b}for(Q=r(y,Q);ee<v.length;ee++)Ke=I(Q,y,ee,v[ee],L),Ke!==null&&(e&&Ke.alternate!==null&&Q.delete(Ke.key===null?ee:Ke.key),m=l(Ke,m,ee),W===null?b=Ke:W.sibling=Ke,W=Ke);return e&&Q.forEach(function(gn){return t(y,gn)}),Ee&&En(y,ee),b}function B(y,m,v,L){var b=P(v);if(typeof b!="function")throw Error(s(150));if(v=b.call(v),v==null)throw Error(s(151));for(var W=b=null,Q=m,ee=m=0,Ke=null,pe=v.next();Q!==null&&!pe.done;ee++,pe=v.next()){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var gn=z(y,Q,pe.value,L);if(gn===null){Q===null&&(Q=Ke);break}e&&Q&&gn.alternate===null&&t(y,Q),m=l(gn,m,ee),W===null?b=gn:W.sibling=gn,W=gn,Q=Ke}if(pe.done)return n(y,Q),Ee&&En(y,ee),b;if(Q===null){for(;!pe.done;ee++,pe=v.next())pe=N(y,pe.value,L),pe!==null&&(m=l(pe,m,ee),W===null?b=pe:W.sibling=pe,W=pe);return Ee&&En(y,ee),b}for(Q=r(y,Q);!pe.done;ee++,pe=v.next())pe=I(Q,y,ee,pe.value,L),pe!==null&&(e&&pe.alternate!==null&&Q.delete(pe.key===null?ee:pe.key),m=l(pe,m,ee),W===null?b=pe:W.sibling=pe,W=pe);return e&&Q.forEach(function(t1){return t(y,t1)}),Ee&&En(y,ee),b}function Ie(y,m,v,L){if(typeof v=="object"&&v!==null&&v.type===V&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case se:e:{for(var b=v.key,W=m;W!==null;){if(W.key===b){if(b=v.type,b===V){if(W.tag===7){n(y,W.sibling),m=o(W,v.props.children),m.return=y,y=m;break e}}else if(W.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Me&&Tu(b)===W.type){n(y,W.sibling),m=o(W,v.props),m.ref=Br(y,W,v),m.return=y,y=m;break e}n(y,W);break}else t(y,W);W=W.sibling}v.type===V?(m=Mn(v.props.children,y.mode,L,v.key),m.return=y,y=m):(L=ho(v.type,v.key,v.props,null,y.mode,L),L.ref=Br(y,m,v),L.return=y,y=L)}return u(y);case oe:e:{for(W=v.key;m!==null;){if(m.key===W)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(y,m.sibling),m=o(m,v.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Ls(v,y.mode,L),m.return=y,y=m}return u(y);case Me:return W=v._init,Ie(y,m,W(v._payload),L)}if(mr(v))return A(y,m,v,L);if(P(v))return B(y,m,v,L);Ui(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(y,m.sibling),m=o(m,v),m.return=y,y=m):(n(y,m),m=Ps(v,y.mode,L),m.return=y,y=m),u(y)):n(y,m)}return Ie}var er=Mu(!0),Ru=Mu(!1),Hi=on(null),Wi=null,tr=null,$l=null;function Bl(){$l=tr=Wi=null}function bl(e){var t=Hi.current;Se(Hi),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Wi=e,$l=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Wi===null)throw Error(s(308));tr=e,Wi.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var jn=null;function Ul(e){jn===null?jn=[e]:jn.push(e)}function Iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ul(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ce&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ul(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var o=e.updateQueue;an=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var p=d,x=p.next;p.next=null,u===null?l=x:u.next=x,u=p;var _=e.alternate;_!==null&&(_=_.updateQueue,d=_.lastBaseUpdate,d!==u&&(d===null?_.firstBaseUpdate=x:d.next=x,_.lastBaseUpdate=p))}if(l!==null){var N=o.baseState;u=0,_=x=p=null,d=l;do{var z=d.lane,I=d.eventTime;if((r&z)===z){_!==null&&(_=_.next={eventTime:I,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var A=e,B=d;switch(z=t,I=n,B.tag){case 1:if(A=B.payload,typeof A=="function"){N=A.call(I,N,z);break e}N=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=B.payload,z=typeof A=="function"?A.call(I,N,z):A,z==null)break e;N=T({},N,z);break e;case 2:an=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,z=o.effects,z===null?o.effects=[d]:z.push(d))}else I={eventTime:I,lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},_===null?(x=_=I,p=N):_=_.next=I,u|=z;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;z=d,d=z.next,z.next=null,o.lastBaseUpdate=z,o.shared.pending=null}}while(!0);if(_===null&&(p=N),o.baseState=p,o.firstBaseUpdate=x,o.lastBaseUpdate=_,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Nn|=u,e.lanes=u,e.memoizedState=N}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var br={},At=on(br),Vr=on(br),Ur=on(br);function zn(e){if(e===br)throw Error(s(174));return e}function Wl(e,t){switch(xe(Ur,t),xe(Vr,e),xe(At,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qo(t,e)}Se(At),xe(At,t)}function rr(){Se(At),Se(Vr),Se(Ur)}function Au(e){zn(Ur.current);var t=zn(At.current),n=Qo(t,e.type);t!==n&&(xe(Vr,e),xe(At,n))}function Ql(e){Vr.current===e&&(Se(At),Se(Vr))}var je=on(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Kl(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Yi=de.ReactCurrentDispatcher,Yl=de.ReactCurrentBatchConfig,_n=0,ze=null,Ae=null,Qe=null,Xi=!1,Hr=!1,Wr=0,Cp=0;function Je(){throw Error(s(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Zl(e,t,n,r,o,l){if(_n=l,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?_p:Np,e=n(r,o),Hr){l=0;do{if(Hr=!1,Wr=0,25<=l)throw Error(s(301));l+=1,Qe=Ae=null,t.updateQueue=null,Yi.current=Pp,e=n(r,o)}while(Hr)}if(Yi.current=qi,t=Ae!==null&&Ae.next!==null,_n=0,Qe=Ae=ze=null,Xi=!1,t)throw Error(s(300));return e}function Jl(){var e=Wr!==0;return Wr=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ze.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function St(){if(Ae===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Qe===null?ze.memoizedState:Qe.next;if(t!==null)Qe=t,Ae=e;else{if(e===null)throw Error(s(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Qe===null?ze.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Qr(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=St(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Ae,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var d=u=null,p=null,x=l;do{var _=x.lane;if((_n&_)===_)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var N={lane:_,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(d=p=N,u=r):p=p.next=N,ze.lanes|=_,Nn|=_}x=x.next}while(x!==null&&x!==l);p===null?u=r:p.next=d,_t(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ze.lanes|=l,Nn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=St(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);_t(l,t.memoizedState)||(st=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function $u(){}function Bu(e,t){var n=ze,r=St(),o=t(),l=!_t(r.memoizedState,o);if(l&&(r.memoizedState=o,st=!0),r=r.queue,ts(Uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Gr(9,Vu.bind(null,n,r,o,t),void 0,null),Ge===null)throw Error(s(349));(_n&30)!==0||bu(n,t,o)}return o}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&Wu(e)}function Uu(e,t,n){return n(function(){Hu(t)&&Wu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Wu(e){var t=Wt(e,1);t!==null&&Mt(t,e,1,-1)}function Qu(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,ze,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return St().memoizedState}function Zi(e,t,n,r){var o=$t();ze.flags|=e,o.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Ji(e,t,n,r){var o=St();r=r===void 0?null:r;var l=void 0;if(Ae!==null){var u=Ae.memoizedState;if(l=u.destroy,r!==null&&Xl(r,u.deps)){o.memoizedState=Gr(t,n,l,r);return}}ze.flags|=e,o.memoizedState=Gr(1|t,n,l,r)}function Ku(e,t){return Zi(8390656,8,e,t)}function ts(e,t){return Ji(2048,8,e,t)}function Yu(e,t){return Ji(4,2,e,t)}function Xu(e,t){return Ji(4,4,e,t)}function Zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ju(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4,4,Zu.bind(null,t,e),n)}function ns(){}function qu(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return(_n&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(_t(n,t)||(n=Ta(),ze.lanes|=n,Nn|=n,e.baseState=!0),t)}function Ep(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{ge=n,Yl.transition=r}}function nc(){return St().memoizedState}function jp(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))ic(t,n);else if(n=Iu(e,t,n,r),n!==null){var o=rt();Mt(n,e,r,o),oc(n,t,r)}}function zp(e,t,n){var r=pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,d=l(u,n);if(o.hasEagerState=!0,o.eagerState=d,_t(d,u)){var p=t.interleaved;p===null?(o.next=o,Ul(t)):(o.next=p.next,p.next=o),t.interleaved=o;return}}catch{}finally{}n=Iu(e,t,o,r),n!==null&&(o=rt(),Mt(n,e,r,o),oc(n,t,r))}}function rc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function ic(e,t){Hr=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var qi={readContext:wt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},_p={readContext:wt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,Zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jp.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:ns,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=Ep.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,o=$t();if(Ee){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ge===null)throw Error(s(349));(_n&30)!==0||bu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ku(Uu.bind(null,r,l,e),[e]),r.flags|=2048,Gr(9,Vu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ge.identifierPrefix;if(Ee){var n=Ht,r=Ut;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:wt,useCallback:qu,useContext:wt,useEffect:ts,useImperativeHandle:Ju,useInsertionEffect:Yu,useLayoutEffect:Xu,useMemo:ec,useReducer:ql,useRef:Gu,useState:function(){return ql(Qr)},useDebugValue:ns,useDeferredValue:function(e){var t=St();return tc(t,Ae.memoizedState,e)},useTransition:function(){var e=ql(Qr)[0],t=St().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Bu,useId:nc,unstable_isNewReconciler:!1},Pp={readContext:wt,useCallback:qu,useContext:wt,useEffect:ts,useImperativeHandle:Ju,useInsertionEffect:Yu,useLayoutEffect:Xu,useMemo:ec,useReducer:es,useRef:Gu,useState:function(){return es(Qr)},useDebugValue:ns,useDeferredValue:function(e){var t=St();return Ae===null?t.memoizedState=e:tc(t,Ae.memoizedState,e)},useTransition:function(){var e=es(Qr)[0],t=St().memoizedState;return[e,t]},useMutableSource:$u,useSyncExternalStore:Bu,useId:nc,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),o=pn(e),l=Qt(r,o);l.payload=t,n!=null&&(l.callback=n),t=un(e,l,o),t!==null&&(Mt(t,e,o,r),Qi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),o=pn(e),l=Qt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=un(e,l,o),t!==null&&(Mt(t,e,o,r),Qi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=pn(e),o=Qt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(Mt(t,e,r,n),Qi(t,e,r))}};function lc(e,t,n,r,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,u):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(o,l):!0}function sc(e,t,n){var r=!1,o=ln,l=t.contextType;return typeof l=="object"&&l!==null?l=wt(l):(o=lt(t)?kn:Ze.current,r=t.contextTypes,l=(r=r!=null)?Xn(e,o):ln),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Hl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=wt(l):(l=lt(t)?kn:Ze.current,o.context=Xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(rs(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&eo.enqueueReplaceState(o,o.state,null),Gi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=q(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lp=typeof WeakMap=="function"?WeakMap:Map;function uc(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,Ss=r),ls(e,t)},n}function cc(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ls(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Hp.bind(null,e,t,n),t.then(e,e))}function fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Tp=de.ReactCurrentOwner,st=!1;function nt(e,t,n,r){t.child=e===null?Ru(t,null,n,r):er(t,e.child,n,r)}function hc(e,t,n,r,o){n=n.render;var l=t.ref;return nr(t,o),r=Zl(e,t,n,r,l,o),n=Jl(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Ee&&n&&Il(t),t.flags|=1,nt(e,t,r,o),t.child)}function mc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ns(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,gc(e,t,l,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(u,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=mn(l,r),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Rr(l,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return ss(e,t,n,r,o)}function yc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(lr,mt),mt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(lr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,xe(lr,mt),mt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,xe(lr,mt),mt|=r;return nt(e,t,o,n),t.child}function vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ss(e,t,n,r,o){var l=lt(n)?kn:Ze.current;return l=Xn(t,l),nr(t,o),n=Zl(e,t,n,r,l,o),r=Jl(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Ee&&r&&Il(t),t.flags|=1,nt(e,t,n,o),t.child)}function xc(e,t,n,r,o){if(lt(n)){var l=!0;Ai(t)}else l=!1;if(nr(t,o),t.stateNode===null)no(e,t),sc(t,n,r),is(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var p=u.context,x=n.contextType;typeof x=="object"&&x!==null?x=wt(x):(x=lt(n)?kn:Ze.current,x=Xn(t,x));var _=n.getDerivedStateFromProps,N=typeof _=="function"||typeof u.getSnapshotBeforeUpdate=="function";N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==r||p!==x)&&ac(t,u,r,x),an=!1;var z=t.memoizedState;u.state=z,Gi(t,r,u,o),p=t.memoizedState,d!==r||z!==p||ot.current||an?(typeof _=="function"&&(rs(t,n,_,r),p=t.memoizedState),(d=an||lc(t,n,d,r,z,p,x))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),u.props=r,u.state=p,u.context=x,r=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Du(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:Pt(t.type,d),u.props=x,N=t.pendingProps,z=u.context,p=n.contextType,typeof p=="object"&&p!==null?p=wt(p):(p=lt(n)?kn:Ze.current,p=Xn(t,p));var I=n.getDerivedStateFromProps;(_=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==N||z!==p)&&ac(t,u,r,p),an=!1,z=t.memoizedState,u.state=z,Gi(t,r,u,o);var A=t.memoizedState;d!==N||z!==A||ot.current||an?(typeof I=="function"&&(rs(t,n,I,r),A=t.memoizedState),(x=an||lc(t,n,x,r,z,A,p)||!1)?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,A,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,A,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),u.props=r,u.state=A,u.context=p,r=x):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,l,o)}function as(e,t,n,r,o,l){vc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&Eu(t,n,!1),Gt(e,t,l);r=t.stateNode,Tp.current=t;var d=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=er(t,e.child,null,l),t.child=er(t,null,d,l)):nt(e,t,d,l),t.memoizedState=r.state,o&&Eu(t,n,!0),t.child}function wc(e){var t=e.stateNode;t.pendingContext?ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ku(e,t.context,!1),Wl(e,t.containerInfo)}function Sc(e,t,n,r,o){return qn(),Al(o),t.flags|=256,nt(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,t,n){var r=t.pendingProps,o=je.current,l=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),xe(je,o&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,l?(r=t.mode,l=t.child,u={mode:"hidden",children:u},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=mo(u,r,0,null),e=Mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=cs(n),t.memoizedState=us,e):ds(t,u));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return Mp(e,t,u,r,d,o,n);if(l){l=r.fallback,u=t.mode,o=e.child,d=o.sibling;var p={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=mn(o,p),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?l=mn(d,l):(l=Mn(l,u,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,u=e.child.memoizedState,u=u===null?cs(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=us,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Al(r),er(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,n,r,o,l,u){if(n)return t.flags&256?(t.flags&=-257,r=os(Error(s(422))),to(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=mo({mode:"visible",children:r.children},o,0,null),l=Mn(l,o,u,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&er(t,e.child,null,u),t.child.memoizedState=cs(u),t.memoizedState=us,l);if((t.mode&1)===0)return to(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(s(419)),r=os(l,r,void 0),to(e,t,u,r)}if(d=(u&e.childLanes)!==0,st||d){if(r=Ge,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Wt(e,o),Mt(r,e,o,-1))}return _s(),r=os(Error(s(421))),to(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Wp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ht=rn(o.nextSibling),pt=t,Ee=!0,Nt=null,e!==null&&(vt[xt++]=Ut,vt[xt++]=Ht,vt[xt++]=Cn,Ut=e.id,Ht=e.overflow,Cn=t),t=ds(t,r.children),t.flags|=4096,t)}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function fs(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Ec(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(nt(e,t,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(je,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fs(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ki(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fs(t,!0,n,null,l);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t,n){switch(t.tag){case 3:wc(t),qn();break;case 5:Au(t);break;case 1:lt(t.type)&&Ai(t);break;case 4:Wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;xe(Hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?kc(e,t,n):(xe(je,je.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);xe(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ec(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),xe(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,yc(e,t,n)}return Gt(e,t,n)}var jc,ps,zc,_c;jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ps=function(){},zc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,zn(At.current);var l=null;switch(n){case"input":o=Vo(e,o),r=Vo(e,r),l=[];break;case"select":o=T({},o,{value:void 0}),r=T({},r,{value:void 0}),l=[];break;case"textarea":o=Wo(e,o),r=Wo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}Go(n,r);var u;n=null;for(x in o)if(!r.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var d=o[x];for(u in d)d.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(f.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var p=r[x];if(d=o!=null?o[x]:void 0,r.hasOwnProperty(x)&&p!==d&&(p!=null||d!=null))if(x==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(n||(n={}),n[u]=p[u])}else n||(l||(l=[]),l.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(l=l||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(f.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&we("scroll",e),l||d===p||(l=[])):(l=l||[]).push(x,p))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},_c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return lt(t.type)&&Fi(),qe(t),null;case 3:return r=t.stateNode,rr(),Se(ot),Se(Ze),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(Es(Nt),Nt=null))),ps(e,t),qe(t),null;case 5:Ql(t);var o=zn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)zc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return qe(t),null}if(e=zn(At.current),Vi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ft]=t,r[Ar]=l,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(o=0;o<Dr.length;o++)we(Dr[o],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":sa(r,l),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},we("invalid",r);break;case"textarea":ca(r,l),we("invalid",r)}Go(n,l),o=null;for(var u in l)if(l.hasOwnProperty(u)){var d=l[u];u==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&Ii(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&Ii(r.textContent,d,e),o=["children",""+d]):f.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&we("scroll",r)}switch(n){case"input":di(r),ua(r,l,!0);break;case"textarea":di(r),fa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Ft]=t,e[Ar]=r,jc(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ko(n,r),n){case"dialog":we("cancel",e),we("close",e),o=r;break;case"iframe":case"object":case"embed":we("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dr.length;o++)we(Dr[o],e);o=r;break;case"source":we("error",e),o=r;break;case"img":case"image":case"link":we("error",e),we("load",e),o=r;break;case"details":we("toggle",e),o=r;break;case"input":sa(e,r),o=Vo(e,r),we("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=T({},r,{value:void 0}),we("invalid",e);break;case"textarea":ca(e,r),o=Wo(e,r),we("invalid",e);break;default:o=r}Go(n,o),d=o;for(l in d)if(d.hasOwnProperty(l)){var p=d[l];l==="style"?ga(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ha(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&gr(e,p):typeof p=="number"&&gr(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?p!=null&&l==="onScroll"&&we("scroll",e):p!=null&&ie(e,l,p,u))}switch(n){case"input":di(e),ua(e,r,!1);break;case"textarea":di(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?An(e,!!r.multiple,l,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=zn(Ur.current),zn(At.current),Vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(l=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return qe(t),null;case 13:if(Se(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Lu(),qn(),t.flags|=98560,l=!1;else if(l=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ft]=t}else qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),l=!1}else Nt!==null&&(Es(Nt),Nt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?$e===0&&($e=3):_s())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return rr(),ps(e,t),e===null&&Or(t.stateNode.containerInfo),qe(t),null;case 10:return bl(t.type._context),qe(t),null;case 17:return lt(t.type)&&Fi(),qe(t),null;case 19:if(Se(je),l=t.memoizedState,l===null)return qe(t),null;if(r=(t.flags&128)!==0,u=l.rendering,u===null)if(r)Kr(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ki(e),u!==null){for(t.flags|=128,Kr(l,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(je,je.current&1|2),t.child}e=e.sibling}l.tail!==null&&Re()>sr&&(t.flags|=128,r=!0,Kr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ki(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Ee)return qe(t),null}else 2*Re()-l.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Re(),t.sibling=null,n=je.current,xe(je,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(mt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Dp(e,t){switch(Dl(t),t.tag){case 1:return lt(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),Se(ot),Se(Ze),Kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(Se(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(je),null;case 4:return rr(),null;case 10:return bl(t.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var ro=!1,et=!1,Op=typeof WeakSet=="function"?WeakSet:Set,F=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function hs(e,t,n){try{n()}catch(r){Le(e,t,r)}}var Nc=!1;function Fp(e,t){if(zl=Ci,e=lu(),vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,d=-1,p=-1,x=0,_=0,N=e,z=null;t:for(;;){for(var I;N!==n||o!==0&&N.nodeType!==3||(d=u+o),N!==l||r!==0&&N.nodeType!==3||(p=u+r),N.nodeType===3&&(u+=N.nodeValue.length),(I=N.firstChild)!==null;)z=N,N=I;for(;;){if(N===e)break t;if(z===n&&++x===o&&(d=u),z===l&&++_===r&&(p=u),(I=N.nextSibling)!==null)break;N=z,z=N.parentNode}N=I}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},Ci=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var B=A.memoizedProps,Ie=A.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?B:Pt(t.type,B),Ie);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(L){Le(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return A=Nc,Nc=!1,A}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&hs(t,n,l)}o=o.next}while(o!==r)}}function io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Ar],delete t[Tl],delete t[xp],delete t[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var Ye=null,Lt=!1;function cn(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 5:et||or(n,t);case 6:var r=Ye,o=Lt;Ye=null,cn(e,t,n),Ye=r,Lt=o,Ye!==null&&(Lt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Lt?(e=Ye,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),_r(e)):Ll(Ye,n.stateNode));break;case 4:r=Ye,o=Lt,Ye=n.stateNode.containerInfo,Lt=!0,cn(e,t,n),Ye=r,Lt=o;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&hs(n,t,u),o=o.next}while(o!==r)}cn(e,t,n);break;case 1:if(!et&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Le(n,t,d)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,cn(e,t,n),et=r):cn(e,t,n);break;default:cn(e,t,n)}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Op),t.forEach(function(r){var o=Qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:Ye=d.stateNode,Lt=!1;break e;case 3:Ye=d.stateNode.containerInfo,Lt=!0;break e;case 4:Ye=d.stateNode.containerInfo,Lt=!0;break e}d=d.return}if(Ye===null)throw Error(s(160));Mc(l,u,o),Ye=null,Lt=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(x){Le(o,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Bt(e),r&4){try{Yr(3,e,e.return),io(3,e)}catch(B){Le(e,e.return,B)}try{Yr(5,e,e.return)}catch(B){Le(e,e.return,B)}}break;case 1:Tt(t,e),Bt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Tt(t,e),Bt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{gr(o,"")}catch(B){Le(e,e.return,B)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&aa(o,l),Ko(d,u);var x=Ko(d,l);for(u=0;u<p.length;u+=2){var _=p[u],N=p[u+1];_==="style"?ga(o,N):_==="dangerouslySetInnerHTML"?ha(o,N):_==="children"?gr(o,N):ie(o,_,N,x)}switch(d){case"input":Uo(o,l);break;case"textarea":da(o,l);break;case"select":var z=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var I=l.value;I!=null?An(o,!!l.multiple,I,!1):z!==!!l.multiple&&(l.defaultValue!=null?An(o,!!l.multiple,l.defaultValue,!0):An(o,!!l.multiple,l.multiple?[]:"",!1))}o[Ar]=l}catch(B){Le(e,e.return,B)}}break;case 6:if(Tt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(B){Le(e,e.return,B)}}break;case 3:if(Tt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(B){Le(e,e.return,B)}break;case 4:Tt(t,e),Bt(e);break;case 13:Tt(t,e),Bt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ws=Re())),r&4&&Rc(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(et=(x=et)||_,Tt(t,e),et=x):Tt(t,e),Bt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!_&&(e.mode&1)!==0)for(F=e,_=e.child;_!==null;){for(N=F=_;F!==null;){switch(z=F,I=z.child,z.tag){case 0:case 11:case 14:case 15:Yr(4,z,z.return);break;case 1:or(z,z.return);var A=z.stateNode;if(typeof A.componentWillUnmount=="function"){r=z,n=z.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(B){Le(r,n,B)}}break;case 5:or(z,z.return);break;case 22:if(z.memoizedState!==null){Fc(N);continue}}I!==null?(I.return=z,F=I):Fc(N)}_=_.sibling}e:for(_=null,N=e;;){if(N.tag===5){if(_===null){_=N;try{o=N.stateNode,x?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=N.stateNode,p=N.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=ma("display",u))}catch(B){Le(e,e.return,B)}}}else if(N.tag===6){if(_===null)try{N.stateNode.nodeValue=x?"":N.memoizedProps}catch(B){Le(e,e.return,B)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;_===N&&(_=null),N=N.return}_===N&&(_=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Tt(t,e),Bt(e),r&4&&Rc(e);break;case 21:break;default:Tt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lc(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gr(o,""),r.flags&=-33);var l=Tc(e);ys(e,l,o);break;case 3:case 4:var u=r.stateNode.containerInfo,d=Tc(e);gs(e,d,u);break;default:throw Error(s(161))}}catch(p){Le(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){F=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,l=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||ro;if(!u){var d=o.alternate,p=d!==null&&d.memoizedState!==null||et;d=ro;var x=et;if(ro=u,(et=p)&&!x)for(F=o;F!==null;)u=F,p=u.child,u.tag===22&&u.memoizedState!==null?Ac(o):p!==null?(p.return=u,F=p):Ac(o);for(;l!==null;)F=l,Dc(l),l=l.sibling;F=o,ro=d,et=x}Oc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,F=l):Oc(e)}}function Oc(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Fu(t,l,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,u,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var _=x.memoizedState;if(_!==null){var N=_.dehydrated;N!==null&&_r(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}et||t.flags&512&&ms(t)}catch(z){Le(t,t.return,z)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Fc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Ac(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{io(4,t)}catch(p){Le(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(p){Le(t,o,p)}}var l=t.return;try{ms(t)}catch(p){Le(t,l,p)}break;case 5:var u=t.return;try{ms(t)}catch(p){Le(t,u,p)}}}catch(p){Le(t,t.return,p)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var $p=Math.ceil,oo=de.ReactCurrentDispatcher,vs=de.ReactCurrentOwner,kt=de.ReactCurrentBatchConfig,ce=0,Ge=null,Oe=null,Xe=0,mt=0,lr=on(0),$e=0,Xr=null,Nn=0,lo=0,xs=0,Zr=null,at=null,ws=0,sr=1/0,Kt=null,so=!1,Ss=null,dn=null,ao=!1,fn=null,uo=0,Jr=0,ks=null,co=-1,fo=0;function rt(){return(ce&6)!==0?Re():co!==-1?co:co=Re()}function pn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Xe!==0?Xe&-Xe:kp.transition!==null?(fo===0&&(fo=Ta()),fo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ba(e.type)),e)}function Mt(e,t,n,r){if(50<Jr)throw Jr=0,ks=null,Error(s(185));kr(e,n,r),((ce&2)===0||e!==Ge)&&(e===Ge&&((ce&2)===0&&(lo|=n),$e===4&&hn(e,Xe)),ut(e,r),n===1&&ce===0&&(t.mode&1)===0&&(sr=Re()+500,$i&&sn()))}function ut(e,t){var n=e.callbackNode;kf(e,t);var r=wi(e,e===Ge?Xe:0);if(r===0)n!==null&&Na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Na(n),t===1)e.tag===0?Sp(Bc.bind(null,e)):ju(Bc.bind(null,e)),yp(function(){(ce&6)===0&&sn()}),n=null;else{switch(Ma(r)){case 1:n=tl;break;case 4:n=Pa;break;case 16:n=gi;break;case 536870912:n=La;break;default:n=gi}n=Kc(n,$c.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $c(e,t){if(co=-1,fo=0,(ce&6)!==0)throw Error(s(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=wi(e,e===Ge?Xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=po(e,r);else{t=r;var o=ce;ce|=2;var l=Vc();(Ge!==e||Xe!==t)&&(Kt=null,sr=Re()+500,Ln(e,t));do try{Vp();break}catch(d){bc(e,d)}while(!0);Bl(),oo.current=l,ce=o,Oe!==null?t=0:(Ge=null,Xe=0,t=$e)}if(t!==0){if(t===2&&(o=nl(e),o!==0&&(r=o,t=Cs(e,o))),t===1)throw n=Xr,Ln(e,0),hn(e,r),ut(e,Re()),n;if(t===6)hn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Bp(o)&&(t=po(e,r),t===2&&(l=nl(e),l!==0&&(r=l,t=Cs(e,l))),t===1))throw n=Xr,Ln(e,0),hn(e,r),ut(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Tn(e,at,Kt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=ws+500-Re(),10<t)){if(wi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(Tn.bind(null,e,at,Kt),t);break}Tn(e,at,Kt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-zt(r);l=1<<u,u=t[u],u>o&&(o=u),r&=~l}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$p(r/1960))-r,10<r){e.timeoutHandle=Pl(Tn.bind(null,e,at,Kt),r);break}Tn(e,at,Kt);break;case 5:Tn(e,at,Kt);break;default:throw Error(s(329))}}}return ut(e,Re()),e.callbackNode===n?$c.bind(null,e):null}function Cs(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=po(e,t),e!==2&&(t=at,at=n,t!==null&&Es(t)),e}function Es(e){at===null?at=e:at.push.apply(at,e)}function Bp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!_t(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~xs,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Bc(e){if((ce&6)!==0)throw Error(s(327));ar();var t=wi(e,0);if((t&1)===0)return ut(e,Re()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=Xr,Ln(e,0),hn(e,t),ut(e,Re()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,at,Kt),ut(e,Re()),null}function js(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(sr=Re()+500,$i&&sn())}}function Pn(e){fn!==null&&fn.tag===0&&(ce&6)===0&&ar();var t=ce;ce|=1;var n=kt.transition,r=ge;try{if(kt.transition=null,ge=1,e)return e()}finally{ge=r,kt.transition=n,ce=t,(ce&6)===0&&sn()}}function zs(){mt=lr.current,Se(lr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gp(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:rr(),Se(ot),Se(Ze),Kl();break;case 5:Ql(r);break;case 4:rr();break;case 13:Se(je);break;case 19:Se(je);break;case 10:bl(r.type._context);break;case 22:case 23:zs()}n=n.return}if(Ge=e,Oe=e=mn(e.current,null),Xe=mt=t,$e=0,Xr=null,xs=lo=Nn=0,at=Zr=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var u=l.next;l.next=o,r.next=u}n.pending=r}jn=null}return e}function bc(e,t){do{var n=Oe;try{if(Bl(),Yi.current=qi,Xi){for(var r=ze.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xi=!1}if(_n=0,Qe=Ae=ze=null,Hr=!1,Wr=0,vs.current=null,n===null||n.return===null){$e=1,Xr=t,Oe=null;break}e:{var l=e,u=n.return,d=n,p=t;if(t=Xe,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,_=d,N=_.tag;if((_.mode&1)===0&&(N===0||N===11||N===15)){var z=_.alternate;z?(_.updateQueue=z.updateQueue,_.memoizedState=z.memoizedState,_.lanes=z.lanes):(_.updateQueue=null,_.memoizedState=null)}var I=fc(u);if(I!==null){I.flags&=-257,pc(I,u,d,l,t),I.mode&1&&dc(l,x,t),t=I,p=x;var A=t.updateQueue;if(A===null){var B=new Set;B.add(p),t.updateQueue=B}else A.add(p);break e}else{if((t&1)===0){dc(l,x,t),_s();break e}p=Error(s(426))}}else if(Ee&&d.mode&1){var Ie=fc(u);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),pc(Ie,u,d,l,t),Al(ir(p,d));break e}}l=p=ir(p,d),$e!==4&&($e=2),Zr===null?Zr=[l]:Zr.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var y=uc(l,p,t);Ou(l,y);break e;case 1:d=p;var m=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var L=cc(l,d,t);Ou(l,L);break e}}l=l.return}while(l!==null)}Hc(n)}catch(b){t=b,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Vc(){var e=oo.current;return oo.current=qi,e===null?qi:e}function _s(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||(Nn&268435455)===0&&(lo&268435455)===0||hn(Ge,Xe)}function po(e,t){var n=ce;ce|=2;var r=Vc();(Ge!==e||Xe!==t)&&(Kt=null,Ln(e,t));do try{bp();break}catch(o){bc(e,o)}while(!0);if(Bl(),ce=n,oo.current=r,Oe!==null)throw Error(s(261));return Ge=null,Xe=0,$e}function bp(){for(;Oe!==null;)Uc(Oe)}function Vp(){for(;Oe!==null&&!pf();)Uc(Oe)}function Uc(e){var t=Gc(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Hc(e):Oe=t,vs.current=null}function Hc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ip(n,t,mt),n!==null){Oe=n;return}}else{if(n=Dp(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);$e===0&&($e=5)}function Tn(e,t,n){var r=ge,o=kt.transition;try{kt.transition=null,ge=1,Up(e,t,n,r)}finally{kt.transition=o,ge=r}return null}function Up(e,t,n,r){do ar();while(fn!==null);if((ce&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Cf(e,l),e===Ge&&(Oe=Ge=null,Xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ao||(ao=!0,Kc(gi,function(){return ar(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=kt.transition,kt.transition=null;var u=ge;ge=1;var d=ce;ce|=4,vs.current=null,Fp(e,n),Ic(n,e),up(_l),Ci=!!zl,_l=zl=null,e.current=n,Ap(n),hf(),ce=d,ge=u,kt.transition=l}else e.current=n;if(ao&&(ao=!1,fn=e,uo=o),l=e.pendingLanes,l===0&&(dn=null),yf(n.stateNode),ut(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(so)throw so=!1,e=Ss,Ss=null,e;return(uo&1)!==0&&e.tag!==0&&ar(),l=e.pendingLanes,(l&1)!==0?e===ks?Jr++:(Jr=0,ks=e):Jr=0,sn(),null}function ar(){if(fn!==null){var e=Ma(uo),t=kt.transition,n=ge;try{if(kt.transition=null,ge=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,uo=0,(ce&6)!==0)throw Error(s(331));var o=ce;for(ce|=4,F=e.current;F!==null;){var l=F,u=l.child;if((F.flags&16)!==0){var d=l.deletions;if(d!==null){for(var p=0;p<d.length;p++){var x=d[p];for(F=x;F!==null;){var _=F;switch(_.tag){case 0:case 11:case 15:Yr(8,_,l)}var N=_.child;if(N!==null)N.return=_,F=N;else for(;F!==null;){_=F;var z=_.sibling,I=_.return;if(Pc(_),_===x){F=null;break}if(z!==null){z.return=I,F=z;break}F=I}}}var A=l.alternate;if(A!==null){var B=A.child;if(B!==null){A.child=null;do{var Ie=B.sibling;B.sibling=null,B=Ie}while(B!==null)}}F=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,F=u;else e:for(;F!==null;){if(l=F,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Yr(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,F=y;break e}F=l.return}}var m=e.current;for(F=m;F!==null;){u=F;var v=u.child;if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,F=v;else e:for(u=m;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:io(9,d)}}catch(b){Le(d,d.return,b)}if(d===u){F=null;break e}var L=d.sibling;if(L!==null){L.return=d.return,F=L;break e}F=d.return}}if(ce=o,sn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{ge=n,kt.transition=t}}return!1}function Wc(e,t,n){t=ir(n,t),t=uc(e,t,1),e=un(e,t,1),t=rt(),e!==null&&(kr(e,1,t),ut(e,t))}function Le(e,t,n){if(e.tag===3)Wc(e,e,n);else for(;t!==null;){if(t.tag===3){Wc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=ir(n,e),e=cc(t,e,1),t=un(t,e,1),e=rt(),t!==null&&(kr(t,1,e),ut(t,e));break}}t=t.return}}function Hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Xe&n)===n&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>Re()-ws?Ln(e,0):xs|=n),ut(e,t)}function Qc(e,t){t===0&&((e.mode&1)===0?t=1:(t=xi,xi<<=1,(xi&130023424)===0&&(xi=4194304)));var n=rt();e=Wt(e,t),e!==null&&(kr(e,t,n),ut(e,n))}function Wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qc(e,n)}function Qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),Qc(e,n)}var Gc;Gc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,Rp(e,t,n);st=(e.flags&131072)!==0}else st=!1,Ee&&(t.flags&1048576)!==0&&zu(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var o=Xn(t,Ze.current);nr(t,n),o=Zl(null,t,r,e,o,n);var l=Jl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(l=!0,Ai(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hl(t),o.updater=eo,t.stateNode=o,o._reactInternals=t,is(t,r,e,n),t=as(null,t,r,!0,l,n)):(t.tag=0,Ee&&l&&Il(t),nt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kp(r),e=Pt(r,e),o){case 0:t=ss(null,t,r,e,n);break e;case 1:t=xc(null,t,r,e,n);break e;case 11:t=hc(null,t,r,e,n);break e;case 14:t=mc(null,t,r,Pt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),ss(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),xc(e,t,r,o,n);case 3:e:{if(wc(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Du(e,t),Gi(t,r,null,n);var u=t.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=ir(Error(s(423)),t),t=Sc(e,t,r,n,o);break e}else if(r!==o){o=ir(Error(s(424)),t),t=Sc(e,t,r,n,o);break e}else for(ht=rn(t.stateNode.containerInfo.firstChild),pt=t,Ee=!0,Nt=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===o){t=Gt(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&Fl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,u=o.children,Nl(r,o)?u=null:l!==null&&Nl(r,l)&&(t.flags|=32),vc(e,t),nt(e,t,u,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return kc(e,t,n);case 4:return Wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),hc(e,t,r,o,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,u=o.value,xe(Hi,r._currentValue),r._currentValue=u,l!==null)if(_t(l.value,u)){if(l.children===o.children&&!ot.current){t=Gt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){u=l.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=Qt(-1,n&-n),p.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var _=x.pending;_===null?p.next=p:(p.next=_.next,_.next=p),x.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),Vl(l.return,n,t),d.lanes|=n;break}p=p.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(s(341));u.lanes|=n,d=u.alternate,d!==null&&(d.lanes|=n),Vl(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}nt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,nr(t,n),o=wt(o),r=r(o),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,o=Pt(r,t.pendingProps),o=Pt(r.type,o),mc(e,t,r,o,n);case 15:return gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),no(e,t),t.tag=1,lt(r)?(e=!0,Ai(t)):e=!1,nr(t,n),sc(t,r,o),is(t,r,o,n),as(null,t,r,!0,e,n);case 19:return Ec(e,t,n);case 22:return yc(e,t,n)}throw Error(s(156,t.tag))};function Kc(e,t){return _a(e,t)}function Gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new Gp(e,t,n,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kp(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===He)return 11;if(e===We)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,l){var u=2;if(r=e,typeof e=="function")Ns(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case V:return Mn(n.children,o,l,t);case X:u=8,o|=8;break;case Ve:return e=Ct(12,n,t,o|2),e.elementType=Ve,e.lanes=l,e;case fe:return e=Ct(13,n,t,o),e.elementType=fe,e.lanes=l,e;case Ne:return e=Ct(19,n,t,o),e.elementType=Ne,e.lanes=l,e;case ye:return mo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:u=10;break e;case _e:u=9;break e;case He:u=11;break e;case We:u=14;break e;case Me:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Ct(u,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Mn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Ls(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ts(e,t,n,r,o,l,u,d,p){return e=new Yp(e,t,n,d,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ct(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hl(l),e}function Xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yc(e){if(!e)return ln;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(lt(n))return Cu(e,n,t)}return t}function Xc(e,t,n,r,o,l,u,d,p){return e=Ts(n,r,!0,e,o,l,u,d,p),e.context=Yc(null),n=e.current,r=rt(),o=pn(n),l=Qt(r,o),l.callback=t??null,un(n,l,o),e.current.lanes=o,kr(e,o,r),ut(e,r),e}function go(e,t,n,r){var o=t.current,l=rt(),u=pn(o);return n=Yc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(l,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,u),e!==null&&(Mt(e,o,u,l),Qi(e,o,u)),u}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ms(e,t){Zc(e,t),(e=e.alternate)&&Zc(e,t)}function Zp(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rs(e){this._internalRoot=e}vo.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));go(e,t,null,null)},vo.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){go(null,e,null,null)}),t[bt]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Da();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Aa(e)}};function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function Jp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var x=yo(u);l.call(x)}}var u=Xc(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=u,e[bt]=u.current,Or(e.nodeType===8?e.parentNode:e),Pn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var x=yo(p);d.call(x)}}var p=Ts(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=p,e[bt]=p.current,Or(e.nodeType===8?e.parentNode:e),Pn(function(){go(t,p,n,r)}),p}function wo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var u=l;if(typeof o=="function"){var d=o;o=function(){var p=yo(u);d.call(p)}}go(t,u,e,o)}else u=Jp(n,t,e,o,r);return yo(u)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(il(t,n|1),ut(t,Re()),(ce&6)===0&&(sr=Re()+500,sn()))}break;case 13:Pn(function(){var r=Wt(e,1);if(r!==null){var o=rt();Mt(r,e,1,o)}}),Ms(e,1)}},ol=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=rt();Mt(t,e,134217728,n)}Ms(e,134217728)}},Ia=function(e){if(e.tag===13){var t=pn(e),n=Wt(e,t);if(n!==null){var r=rt();Mt(n,e,t,r)}Ms(e,t)}},Da=function(){return ge},Oa=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},Zo=function(e,t,n){switch(t){case"input":if(Uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oi(r);if(!o)throw Error(s(90));la(r),Uo(r,o)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}},wa=js,Sa=Pn;var qp={usingClientEntryPoint:!1,Events:[$r,Kn,Oi,va,xa,js]},qr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ja(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{yi=So.inject(e1),Ot=So}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp,ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Is(t))throw Error(s(200));return Xp(e,t,null,n)},ct.createRoot=function(e,t){if(!Is(e))throw Error(s(299));var n=!1,r="",o=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ts(e,1,!1,null,null,n,!1,r,o),e[bt]=t.current,Or(e.nodeType===8?e.parentNode:e),new Rs(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ja(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return Pn(e)},ct.hydrate=function(e,t,n){if(!xo(t))throw Error(s(200));return wo(null,e,t,!0,n)},ct.hydrateRoot=function(e,t,n){if(!Is(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",u=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Xc(t,null,e,1,n??null,o,!1,l,u),e[bt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vo(t)},ct.render=function(e,t,n){if(!xo(t))throw Error(s(200));return wo(null,e,t,!1,n)},ct.unmountComponentAtNode=function(e){if(!xo(e))throw Error(s(40));return e._reactRootContainer?(Pn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1},ct.unstable_batchedUpdates=js,ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return wo(e,t,n,!1,r)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var sd;function u1(){if(sd)return Fs.exports;sd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),Fs.exports=a1(),Fs.exports}var ad;function c1(){if(ad)return ko;ad=1;var i=u1();return ko.createRoot=i.createRoot,ko.hydrateRoot=i.hydrateRoot,ko}var d1=c1(),_d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ud=yt.createContext&&yt.createContext(_d),f1=["attr","size","title"];function p1(i,a){if(i==null)return{};var s,c,f=h1(i,a);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);for(c=0;c<w.length;c++)s=w[c],a.indexOf(s)===-1&&{}.propertyIsEnumerable.call(i,s)&&(f[s]=i[s])}return f}function h1(i,a){if(i==null)return{};var s={};for(var c in i)if({}.hasOwnProperty.call(i,c)){if(a.indexOf(c)!==-1)continue;s[c]=i[c]}return s}function Po(){return Po=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var c in s)({}).hasOwnProperty.call(s,c)&&(i[c]=s[c])}return i},Po.apply(null,arguments)}function cd(i,a){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);a&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),s.push.apply(s,c)}return s}function Lo(i){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?cd(Object(s),!0).forEach(function(c){m1(i,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):cd(Object(s)).forEach(function(c){Object.defineProperty(i,c,Object.getOwnPropertyDescriptor(s,c))})}return i}function m1(i,a,s){return(a=g1(a))in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,i}function g1(i){var a=y1(i,"string");return typeof a=="symbol"?a:a+""}function y1(i,a){if(typeof i!="object"||!i)return i;var s=i[Symbol.toPrimitive];if(s!==void 0){var c=s.call(i,a);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}function Nd(i){return i&&i.map((a,s)=>yt.createElement(a.tag,Lo({key:s},a.attr),Nd(a.child)))}function Ce(i){return a=>yt.createElement(v1,Po({attr:Lo({},i.attr)},a),Nd(i.child))}function v1(i){var a=s=>{var c=i.attr,f=i.size,w=i.title,E=p1(i,f1),S=f||s.size||"1em",j;return s.className&&(j=s.className),i.className&&(j=(j?j+" ":"")+i.className),yt.createElement("svg",Po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,E,{className:j,style:Lo(Lo({color:i.color||s.color},s.style),i.style),height:S,width:S,xmlns:"http://www.w3.org/2000/svg"}),w&&yt.createElement("title",null,w),i.children)};return ud!==void 0?yt.createElement(ud.Consumer,null,s=>a(s)):a(_d)}function x1(i){return Ce({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}function w1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"},child:[]}]})(i)}function S1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(i)}function k1(i){return Ce({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function C1(i){return Ce({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(i)}function E1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function j1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"},child:[]}]})(i)}function Pd(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(i)}function Ro(i){return Ce({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(i)}function z1(i){return Ce({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(i)}function _1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(i)}function N1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(i)}function P1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(i)}function L1(i){return Ce({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function T1(i){return Ce({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(i)}function M1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(i)}function R1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(i)}function I1(i){return Ce({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"},child:[]}]})(i)}function D1(i){return Ce({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(i)}function O1(i){return Ce({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(i)}function F1(i){return Ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(i)}function A1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(i)}function $1(i){return Ce({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(i)}function B1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(i)}function b1(i){return Ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(i)}var ke="-ms-",ii="-moz-",he="-webkit-",Ld="comm",Io="rule",na="decl",V1="@import",U1="@namespace",Td="@keyframes",H1="@layer",Md=Math.abs,ra=String.fromCharCode,Ks=Object.assign;function W1(i,a){return be(i,0)^45?(((a<<2^be(i,0))<<2^be(i,1))<<2^be(i,2))<<2^be(i,3):0}function Rd(i){return i.trim()}function Xt(i,a){return(i=a.exec(i))?i[0]:i}function te(i,a,s){return i.replace(a,s)}function Eo(i,a,s){return i.indexOf(a,s)}function be(i,a){return i.charCodeAt(a)|0}function Fn(i,a,s){return i.slice(a,s)}function Rt(i){return i.length}function Id(i){return i.length}function ni(i,a){return a.push(i),i}function Q1(i,a){return i.map(a).join("")}function dd(i,a){return i.filter(function(s){return!Xt(s,a)})}var Do=1,dr=1,Dd=0,jt=0,Fe=0,hr="";function Oo(i,a,s,c,f,w,E,S){return{value:i,root:a,parent:s,type:c,props:f,children:w,line:Do,column:dr,length:E,return:"",siblings:S}}function yn(i,a){return Ks(Oo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},a)}function ur(i){for(;i.root;)i=yn(i.root,{children:[i]});ni(i,i.siblings)}function G1(){return Fe}function K1(){return Fe=jt>0?be(hr,--jt):0,dr--,Fe===10&&(dr=1,Do--),Fe}function Dt(){return Fe=jt<Dd?be(hr,jt++):0,dr++,Fe===10&&(dr=1,Do++),Fe}function xn(){return be(hr,jt)}function jo(){return jt}function Fo(i,a){return Fn(hr,i,a)}function ai(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y1(i){return Do=dr=1,Dd=Rt(hr=i),jt=0,[]}function X1(i){return hr="",i}function Bs(i){return Rd(Fo(jt-1,Ys(i===91?i+2:i===40?i+1:i)))}function Z1(i){for(;(Fe=xn())&&Fe<33;)Dt();return ai(i)>2||ai(Fe)>3?"":" "}function J1(i,a){for(;--a&&Dt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Fo(i,jo()+(a<6&&xn()==32&&Dt()==32))}function Ys(i){for(;Dt();)switch(Fe){case i:return jt;case 34:case 39:i!==34&&i!==39&&Ys(Fe);break;case 40:i===41&&Ys(i);break;case 92:Dt();break}return jt}function q1(i,a){for(;Dt()&&i+Fe!==57;)if(i+Fe===84&&xn()===47)break;return"/*"+Fo(a,jt-1)+"*"+ra(i===47?i:Dt())}function e0(i){for(;!ai(xn());)Dt();return Fo(i,jt)}function t0(i){return X1(zo("",null,null,null,[""],i=Y1(i),0,[0],i))}function zo(i,a,s,c,f,w,E,S,j){for(var M=0,O=0,D=E,U=0,le=0,G=0,K=1,J=1,Y=1,$=0,ie="",de=f,se=w,oe=c,V=ie;J;)switch(G=$,$=Dt()){case 40:if(G!=108&&be(V,D-1)==58){Eo(V+=te(Bs($),"&","&\f"),"&\f",Md(M?S[M-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:V+=Bs($);break;case 9:case 10:case 13:case 32:V+=Z1(G);break;case 92:V+=J1(jo()-1,7);continue;case 47:switch(xn()){case 42:case 47:ni(n0(q1(Dt(),jo()),a,s,j),j),(ai(G||1)==5||ai(xn()||1)==5)&&Rt(V)&&Fn(V,-1,void 0)!==" "&&(V+=" ");break;default:V+="/"}break;case 123*K:S[M++]=Rt(V)*Y;case 125*K:case 59:case 0:switch($){case 0:case 125:J=0;case 59+O:Y==-1&&(V=te(V,/\f/g,"")),le>0&&(Rt(V)-D||K===0&&G===47)&&ni(le>32?pd(V+";",c,s,D-1,j):pd(te(V," ","")+";",c,s,D-2,j),j);break;case 59:V+=";";default:if(ni(oe=fd(V,a,s,M,O,f,S,ie,de=[],se=[],D,w),w),$===123)if(O===0)zo(V,a,oe,oe,de,w,D,S,se);else{switch(U){case 99:if(be(V,3)===110)break;case 108:if(be(V,2)===97)break;default:O=0;case 100:case 109:case 115:}O?zo(i,oe,oe,c&&ni(fd(i,oe,oe,0,0,f,S,ie,f,de=[],D,se),se),f,se,D,S,c?de:se):zo(V,oe,oe,oe,[""],se,0,S,se)}}M=O=le=0,K=Y=1,ie=V="",D=E;break;case 58:D=1+Rt(V),le=G;default:if(K<1){if($==123)--K;else if($==125&&K++==0&&K1()==125)continue}switch(V+=ra($),$*K){case 38:Y=O>0?1:(V+="\f",-1);break;case 44:S[M++]=(Rt(V)-1)*Y,Y=1;break;case 64:xn()===45&&(V+=Bs(Dt())),U=xn(),O=D=Rt(ie=V+=e0(jo())),$++;break;case 45:G===45&&Rt(V)==2&&(K=0)}}return w}function fd(i,a,s,c,f,w,E,S,j,M,O,D){for(var U=f-1,le=f===0?w:[""],G=Id(le),K=0,J=0,Y=0;K<c;++K)for(var $=0,ie=Fn(i,U+1,U=Md(J=E[K])),de=i;$<G;++$)(de=Rd(J>0?le[$]+" "+ie:te(ie,/&\f/g,le[$])))&&(j[Y++]=de);return Oo(i,a,s,f===0?Io:S,j,M,O,D)}function n0(i,a,s,c){return Oo(i,a,s,Ld,ra(G1()),Fn(i,2,-2),0,c)}function pd(i,a,s,c,f){return Oo(i,a,s,na,Fn(i,0,c),Fn(i,c+1,-1),c,f)}function Od(i,a,s){switch(W1(i,a)){case 5103:return he+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+i+i;case 4855:return he+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return ii+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return he+i+ii+i+ke+i+i;case 5936:switch(be(i,a+11)){case 114:return he+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return he+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return he+i+ke+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return he+i+ke+i+i;case 6165:return he+i+ke+"flex-"+i+i;case 5187:return he+i+te(i,/(\w+).+(:[^]+)/,he+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return he+i+ke+"flex-item-"+te(i,/flex-|-self/g,"")+(Xt(i,/flex-|baseline/)?"":ke+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return he+i+ke+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return he+i+ke+te(i,"shrink","negative")+i;case 5292:return he+i+ke+te(i,"basis","preferred-size")+i;case 6060:return he+"box-"+te(i,"-grow","")+he+i+ke+te(i,"grow","positive")+i;case 4554:return he+te(i,/([^-])(transform)/g,"$1"+he+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+he+i+i;case 4200:if(!Xt(i,/flex-|baseline/))return ke+"grid-column-align"+Fn(i,a)+i;break;case 2592:case 3360:return ke+te(i,"template-","")+i;case 4384:case 3616:return s&&s.some(function(c,f){return a=f,Xt(c.props,/grid-\w+-end/)})?~Eo(i+(s=s[a].value),"span",0)?i:ke+te(i,"-start","")+i+ke+"grid-row-span:"+(~Eo(s,"span",0)?Xt(s,/\d+/):+Xt(s,/\d+/)-+Xt(i,/\d+/))+";":ke+te(i,"-start","")+i;case 4896:case 4128:return s&&s.some(function(c){return Xt(c.props,/grid-\w+-start/)})?i:ke+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,he+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(i)-1-a>6)switch(be(i,a+1)){case 109:if(be(i,a+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+ii+(be(i,a+3)==108?"$3":"$2-$3"))+i;case 115:return~Eo(i,"stretch",0)?Od(te(i,"stretch","fill-available"),a,s)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,w,E,S,j,M){return ke+f+":"+w+M+(E?ke+f+"-span:"+(S?j:+j-+w)+M:"")+i});case 4949:if(be(i,a+6)===121)return te(i,":",":"+he)+i;break;case 6444:switch(be(i,be(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(be(i,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+ke+"$2box$3")+i;case 100:return te(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function To(i,a){for(var s="",c=0;c<i.length;c++)s+=a(i[c],c,i,a)||"";return s}function r0(i,a,s,c){switch(i.type){case H1:if(i.children.length)break;case V1:case U1:case na:return i.return=i.return||i.value;case Ld:return"";case Td:return i.return=i.value+"{"+To(i.children,c)+"}";case Io:if(!Rt(i.value=i.props.join(",")))return""}return Rt(s=To(i.children,c))?i.return=i.value+"{"+s+"}":""}function i0(i){var a=Id(i);return function(s,c,f,w){for(var E="",S=0;S<a;S++)E+=i[S](s,c,f,w)||"";return E}}function o0(i){return function(a){a.root||(a=a.return)&&i(a)}}function l0(i,a,s,c){if(i.length>-1&&!i.return)switch(i.type){case na:i.return=Od(i.value,i.length,s);return;case Td:return To([yn(i,{value:te(i.value,"@","@"+he)})],c);case Io:if(i.length)return Q1(s=i.props,function(f){switch(Xt(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ur(yn(i,{props:[te(f,/:(read-\w+)/,":"+ii+"$1")]})),ur(yn(i,{props:[f]})),Ks(i,{props:dd(s,c)});break;case"::placeholder":ur(yn(i,{props:[te(f,/:(plac\w+)/,":"+he+"input-$1")]})),ur(yn(i,{props:[te(f,/:(plac\w+)/,":"+ii+"$1")]})),ur(yn(i,{props:[te(f,/:(plac\w+)/,ke+"input-$1")]})),ur(yn(i,{props:[f]})),Ks(i,{props:dd(s,c)});break}return""})}}var cr={},bs,Vs;const fr=typeof process<"u"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",Fd="active",Ad="data-styled-version",Ao="6.5.3",ia=`/*!sc*/
`,oi=typeof window<"u"&&typeof document<"u";function hd(i){if(typeof process<"u"&&cr!==void 0){const a=cr[i];if(a!==void 0&&a!=="")return a!=="false"}}const s0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Vs=(bs=hd("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&bs!==void 0?bs:hd("SC_DISABLE_SPEEDY"))!==null&&Vs!==void 0?Vs:typeof process<"u"&&cr!==void 0&&!1),a0="sc-keyframes-";function $o(i,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let _o=new Map,Mo=new Map,No=1;const Co=i=>{if(_o.has(i))return _o.get(i);for(;Mo.has(No);)No++;const a=No++;return _o.set(i,a),Mo.set(a,i),a},u0=i=>Mo.get(i),c0=(i,a)=>{No=a+1,_o.set(i,a),Mo.set(a,i)},oa=Object.freeze([]),pr=Object.freeze({});function d0(i,a,s=pr){return i.theme!==s.theme&&i.theme||a||s.theme}const f0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p0=/(^-|-$)/g;function $d(i){return i.replace(f0,"-").replace(p0,"")}const h0=/(a)(d)/gi,md=i=>String.fromCharCode(i+(i>25?39:97));function Bd(i){let a,s="";for(a=Math.abs(i);a>52;a=a/52|0)s=md(a%52)+s;return(md(a%52)+s).replace(h0,"$1-$2")}const Xs=5381,Dn=(i,a)=>{let s=a.length;for(;s;)i=33*i^a.charCodeAt(--s);return i},bd=i=>Dn(Xs,i);function m0(i){return Bd(bd(i)>>>0)}function g0(i){return i.displayName||i.name||"Component"}function Zs(i){return typeof i=="string"&&!0}function y0(i){return Zs(i)?`styled.${i}`:`Styled(${g0(i)})`}const Vd=Symbol.for("react.memo"),v0=Symbol.for("react.forward_ref"),x0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},w0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ud={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},S0={[v0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Vd]:Ud};function gd(i){return("type"in(a=i)&&a.type.$$typeof)===Vd?Ud:"$$typeof"in i?S0[i.$$typeof]:x0;var a}const k0=Object.defineProperty,C0=Object.getOwnPropertyNames,E0=Object.getOwnPropertySymbols,j0=Object.getOwnPropertyDescriptor,z0=Object.getPrototypeOf,_0=Object.prototype;function Hd(i,a,s){if(typeof a!="string"){const c=z0(a);c&&c!==_0&&Hd(i,c,s);const f=C0(a).concat(E0(a)),w=gd(i),E=gd(a);for(let S=0;S<f.length;++S){const j=f[S];if(!(j in w0||s&&s[j]||E&&j in E||w&&j in w)){const M=j0(a,j);try{k0(i,j,M)}catch{}}}}return i}function Bo(i){return typeof i=="function"}const N0=Symbol.for("react.forward_ref");function Wd(i){return i!=null&&(typeof i=="object"||typeof i=="function")&&i.$$typeof===N0&&"styledComponentId"in i}function ri(i,a){return i&&a?i+" "+a:i||a||""}function yd(i,a){return i.join("")}function ui(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Js(i,a,s=!1){if(!s&&!ui(i)&&!Array.isArray(i))return a;if(Array.isArray(a))for(let c=0;c<a.length;c++)i[c]=Js(i[c],a[c]);else if(ui(a))for(const c in a)i[c]=Js(i[c],a[c]);return i}function Qd(i,a){Object.defineProperty(i,"toString",{value:a})}const P0=class{constructor(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i,this._cGroup=0,this._cIndex=0}indexOfGroup(i){if(i===this._cGroup)return this._cIndex;let a=this._cIndex;if(i>this._cGroup)for(let s=this._cGroup;s<i;s++)a+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=i;s--)a-=this.groupSizes[s];return this._cGroup=i,this._cIndex=a,a}insertRules(i,a){if(i>=this.groupSizes.length){const f=this.groupSizes,w=f.length;let E=w;for(;i>=E;)if(E<<=1,E<0)throw $o(16,`${i}`);this.groupSizes=new Uint32Array(E),this.groupSizes.set(f),this.length=E;for(let S=w;S<E;S++)this.groupSizes[S]=0}let s=this.indexOfGroup(i+1),c=0;for(let f=0,w=a.length;f<w;f++)this.tag.insertRule(s,a[f])&&(this.groupSizes[i]++,s++,c++);c>0&&this._cGroup>i&&(this._cIndex+=c)}clearGroup(i){if(i<this.length){const a=this.groupSizes[i],s=this.indexOfGroup(i),c=s+a;this.groupSizes[i]=0;for(let f=s;f<c;f++)this.tag.deleteRule(s);a>0&&this._cGroup>i&&(this._cIndex-=a)}}getGroup(i){let a="";if(i>=this.length||this.groupSizes[i]===0)return a;const s=this.groupSizes[i],c=this.indexOfGroup(i),f=c+s;for(let w=c;w<f;w++)a+=this.tag.getRule(w)+ia;return a}},L0=`style[${fr}][${Ad}="${Ao}"]`,T0=new RegExp(`^${fr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),vd=i=>typeof ShadowRoot<"u"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11,qs=i=>{if(!i)return document;if(vd(i))return i;if("getRootNode"in i){const a=i.getRootNode();if(vd(a))return a}return document},M0=(i,a,s)=>{const c=s.split(",");let f;for(let w=0,E=c.length;w<E;w++)(f=c[w])&&i.registerName(a,f)},R0=(i,a)=>{var s;const c=((s=a.textContent)!==null&&s!==void 0?s:"").split(ia),f=[];for(let w=0,E=c.length;w<E;w++){const S=c[w].trim();if(!S)continue;const j=S.match(T0);if(j){const M=0|parseInt(j[1],10),O=j[2];M!==0&&(c0(O,M),M0(i,O,j[3]),i.getTag().insertRules(M,f)),f.length=0}else f.push(S)}},Us=i=>{const a=qs(i.options.target).querySelectorAll(L0);for(let s=0,c=a.length;s<c;s++){const f=a[s];f&&f.getAttribute(fr)!==Fd&&(R0(i,f),f.parentNode&&f.parentNode.removeChild(f))}};let ti=!1;function I0(){if(ti!==!1)return ti;if(typeof document<"u"){const i=document.head.querySelector('meta[property="csp-nonce"]');if(i)return ti=i.nonce||i.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return ti=a.getAttribute("content")||void 0}return ti=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Gd=(i,a)=>{const s=document.head,c=i||s,f=document.createElement("style"),w=(j=>{const M=Array.from(j.querySelectorAll(`style[${fr}]`));return M[M.length-1]})(c),E=w!==void 0?w.nextSibling:null;f.setAttribute(fr,Fd),f.setAttribute(Ad,Ao);const S=a||I0();return S&&f.setAttribute("nonce",S),c.insertBefore(f,E),f},D0=class{constructor(i,a){this.element=Gd(i,a),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var c;if(s.sheet)return s.sheet;const f=(c=s.getRootNode().styleSheets)!==null&&c!==void 0?c:document.styleSheets;for(let w=0,E=f.length;w<E;w++){const S=f[w];if(S.ownerNode===s)return S}throw $o(17)})(this.element),this.length=0}insertRule(i,a){try{return this.sheet.insertRule(a,i),this.length++,!0}catch{return!1}}deleteRule(i){this.sheet.deleteRule(i),this.length--}getRule(i){const a=this.sheet.cssRules[i];return a&&a.cssText?a.cssText:""}},O0=class{constructor(i,a){this.element=Gd(i,a),this.nodes=this.element.childNodes,this.length=0}insertRule(i,a){if(i<=this.length&&i>=0){const s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1}deleteRule(i){this.element.removeChild(this.nodes[i]),this.length--}getRule(i){return i<this.length?this.nodes[i].textContent:""}};let xd=oi;const F0={isServer:!oi,useCSSOMInjection:!s0};class bo{static registerId(a){return Co(a)}constructor(a=pr,s={},c){this.options=Object.assign(Object.assign({},F0),a),this.gs=s,this.keyframeIds=new Set,this.names=new Map(c),this.server=!!a.isServer,!this.server&&oi&&xd&&(xd=!1,Us(this)),Qd(this,()=>(f=>{const w=f.getTag(),{length:E}=w;let S="";for(let j=0;j<E;j++){const M=u0(j);if(M===void 0)continue;const O=f.names.get(M);if(O===void 0||!O.size)continue;const D=w.getGroup(j);if(D.length===0)continue;const U=fr+".g"+j+'[id="'+M+'"]';let le="";for(const G of O)G.length>0&&(le+=G+",");S+=D+U+'{content:"'+le+'"}'+ia}return S})(this))}rehydrate(){!this.server&&oi&&Us(this)}reconstructWithOptions(a,s=!0){const c=new bo(Object.assign(Object.assign({},this.options),a),this.gs,s&&this.names||void 0);return c.keyframeIds=new Set(this.keyframeIds),!this.server&&oi&&a.target!==this.options.target&&qs(this.options.target)!==qs(a.target)&&Us(c),c}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:s,target:c,nonce:f})=>s?new D0(c,f):new O0(c,f))(this.options),new P0(a)));var a}hasNameForId(a,s){var c,f;return(f=(c=this.names.get(a))===null||c===void 0?void 0:c.has(s))!==null&&f!==void 0&&f}registerName(a,s){Co(a),a.startsWith(a0)&&this.keyframeIds.add(a);const c=this.names.get(a);c?c.add(s):this.names.set(a,new Set([s]))}insertRules(a,s,c){this.registerName(a,s),this.getTag().insertRules(Co(a),c)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Co(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Kd=new WeakSet,A0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $0(i,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||i in A0||i.startsWith("--")?String(a).trim():a+"px"}const In=47;function wd(i){if(i.charCodeAt(0)===45&&i.charCodeAt(1)===45)return i;let a="";for(let s=0;s<i.length;s++){const c=i.charCodeAt(s);a+=c>=65&&c<=90?"-"+String.fromCharCode(c+32):i[s]}return a.startsWith("ms-")?"-"+a:a}const B0=Symbol.for("sc-keyframes");function b0(i){return typeof i=="object"&&i!==null&&B0 in i}function Yd(i){return Bo(i)&&!(i.prototype&&i.prototype.isReactComponent)}const Xd=i=>i==null||i===!1||i==="",V0=Symbol.for("react.client.reference");function Sd(i){return i.$$typeof===V0}function Zd(i,a){for(const s in i){const c=i[s];i.hasOwnProperty(s)&&!Xd(c)&&(Array.isArray(c)&&Kd.has(c)||Bo(c)?a.push(wd(s)+":",c,";"):ui(c)?(a.push(s+" {"),Zd(c,a),a.push("}")):a.push(wd(s)+": "+$0(s,c)+";"))}}function On(i,a,s,c,f=[]){if(Xd(i))return f;const w=typeof i;if(w==="string")return f.push(i),f;if(w==="function"){if(Sd(i))return f;if(Yd(i)&&a){const E=i(a);return On(E,a,s,c,f)}return f.push(i),f}if(Array.isArray(i)){for(let E=0;E<i.length;E++)On(i[E],a,s,c,f);return f}return Wd(i)?(f.push(`.${i.styledComponentId}`),f):b0(i)?(s?(i.inject(s,c),f.push(i.getName(c))):f.push(i),f):Sd(i)?f:ui(i)?i.toString!==Object.prototype.toString?(f.push(i.toString()),f):(Zd(i,f),f):(f.push(i.toString()),f)}const U0=bd(Ao);class H0{constructor(a,s,c){this.rules=a,this.componentId=s,this.baseHash=Dn(U0,s),this.baseStyle=c,bo.registerId(s)}generateAndInjectStyles(a,s,c){let f=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,c):"";{let w="";for(let E=0;E<this.rules.length;E++){const S=this.rules[E];if(typeof S=="string")w+=S;else if(S)if(Yd(S)){const j=S(a);typeof j=="string"?w+=j:j!=null&&j!==!1&&(w+=yd(On(j,a,s,c)))}else w+=yd(On(S,a,s,c))}if(w){this.dynamicNameCache||(this.dynamicNameCache=new Map);const E=c.hash?c.hash+w:w;let S=this.dynamicNameCache.get(E);if(!S){if(S=Bd(Dn(Dn(this.baseHash,c.hash),w)>>>0),this.dynamicNameCache.size>=200){const j=this.dynamicNameCache.keys().next().value;j!==void 0&&this.dynamicNameCache.delete(j)}this.dynamicNameCache.set(E,S)}if(!s.hasNameForId(this.componentId,S)){const j=c(w,"."+S,void 0,this.componentId);s.insertRules(this.componentId,S,j)}f=ri(f,S)}}return f}}const W0=/&/g;function Jd(i,a){let s=0;for(;--a>=0&&i.charCodeAt(a)===92;)s++;return!(1&~s)}function Hs(i){const a=i.length;let s="",c=0,f=0,w=0,E=!1,S=!1;for(let j=0;j<a;j++){const M=i.charCodeAt(j);if(w!==0||E||M!==In||i.charCodeAt(j+1)!==42)if(E)M===42&&i.charCodeAt(j+1)===In&&(E=!1,j++);else if(M!==34&&M!==39||Jd(i,j)){if(w===0)if(M===123)f++;else if(M===125){if(f--,f<0){S=!0;let O=j+1;for(;O<a;){const D=i.charCodeAt(O);if(D===59||D===10)break;O++}O<a&&i.charCodeAt(O)===59&&O++,f=0,j=O-1,c=O;continue}f===0&&(s+=i.substring(c,j+1),c=j+1)}else M===59&&f===0&&(s+=i.substring(c,j+1),c=j+1)}else w===0?w=M:w===M&&(w=0);else E=!0,j++}return S||f!==0||w!==0?(c<a&&f===0&&w===0&&(s+=i.substring(c)),s):i}function qd(i,a){const s=a+" ",c=","+s;for(let f=0;f<i.length;f++){const w=i[f];if(w.type==="rule"){w.value=(s+w.value).replaceAll(",",c);const E=w.props,S=[];for(let j=0;j<E.length;j++)S[j]=s+E[j];w.props=S}Array.isArray(w.children)&&w.type!=="@keyframes"&&qd(w.children,a)}return i}function Q0({options:i=pr,plugins:a=oa}=pr){let s,c,f;const w=(U,le,G)=>G.startsWith(c)&&G.endsWith(c)&&G.replaceAll(c,"").length>0?`.${s}`:U,E=a.slice();E.push(U=>{U.type===Io&&U.value.includes("&")&&(f||(f=new RegExp(`\\${c}\\b`,"g")),U.props[0]=U.props[0].replace(W0,c).replace(f,w))}),i.prefix&&E.push(l0),E.push(r0);let S=[];const j=i0(E.concat(o0(U=>S.push(U)))),M=(U,le="",G="",K="&")=>{s=K,c=le,f=void 0;const J=function($){const ie=$.indexOf("//")!==-1,de=$.indexOf("}")!==-1;if(!ie&&!de)return $;if(!ie)return Hs($);const se=$.length;let oe="",V=0,X=0,Ve=0,Ue=0,_e=0,He=!1;for(;X<se;){const fe=$.charCodeAt(X);if(fe!==34&&fe!==39||Jd($,X))if(Ve===0)if(fe===In&&X+1<se&&$.charCodeAt(X+1)===42){for(X+=2;X+1<se&&($.charCodeAt(X)!==42||$.charCodeAt(X+1)!==In);)X++;X+=2}else if(fe!==40)if(fe!==41)if(Ue>0)X++;else if(fe===42&&X+1<se&&$.charCodeAt(X+1)===In)oe+=$.substring(V,X),X+=2,V=X,He=!0;else if(fe===In&&X+1<se&&$.charCodeAt(X+1)===In){for(oe+=$.substring(V,X);X<se&&$.charCodeAt(X)!==10;)X++;V=X,He=!0}else fe===123?_e++:fe===125&&_e--,X++;else Ue>0&&Ue--,X++;else Ue++,X++;else X++;else Ve===0?Ve=fe:Ve===fe&&(Ve=0),X++}return He?(V<se&&(oe+=$.substring(V)),_e===0?oe:Hs(oe)):_e===0?$:Hs($)}(U);let Y=t0(G||le?G+" "+le+" { "+J+" }":J);return i.namespace&&(Y=qd(Y,i.namespace)),S=[],To(Y,j),S},O=i;let D=Xs;for(let U=0;U<a.length;U++)a[U].name||$o(15),D=Dn(D,a[U].name);return O!=null&&O.namespace&&(D=Dn(D,O.namespace)),O!=null&&O.prefix&&(D=Dn(D,"p")),M.hash=D!==Xs?D.toString():"",M}const G0=new bo,K0=Q0(),ef=yt.createContext({shouldForwardProp:void 0,styleSheet:G0,stylis:K0,stylisPlugins:void 0});ef.Consumer;function Y0(){return yt.useContext(ef)}const tf=yt.createContext(void 0);tf.Consumer;const kd=Object.prototype.hasOwnProperty,Ws={};function X0(i,a){const s=typeof i!="string"?"sc":$d(i);Ws[s]=(Ws[s]||0)+1;const c=s+"-"+m0(Ao+s+Ws[s]);return a?a+"-"+c:c}function Z0(i,a,s){const c=Wd(i),f=i,w=!Zs(i),{attrs:E=oa,componentId:S=X0(a.displayName,a.parentComponentId),displayName:j=y0(i)}=a,M=a.displayName&&a.componentId?$d(a.displayName)+"-"+a.componentId:a.componentId||S,O=c&&f.attrs?f.attrs.concat(E).filter(Boolean):E;let{shouldForwardProp:D}=a;if(c&&f.shouldForwardProp){const K=f.shouldForwardProp;if(a.shouldForwardProp){const J=a.shouldForwardProp;D=(Y,$)=>K(Y,$)&&J(Y,$)}else D=K}const U=new H0(s,M,c?f.componentStyle:void 0);function le(K,J){return function(Y,$,ie){const{attrs:de,componentStyle:se,defaultProps:oe,foldedComponentIds:V,styledComponentId:X,target:Ve}=Y,Ue=yt.useContext(tf),_e=Y0(),He=Y.shouldForwardProp||_e.shouldForwardProp,fe=d0($,Ue,oe)||pr;let Ne,We;{const P=yt.useRef(null),T=P.current;if(T!==null&&T[1]===fe&&T[2]===_e.styleSheet&&T[3]===_e.stylis&&T[7]===se&&function(g,C,H){const Z=g,q=C;let re=0;for(const ae in q)if(kd.call(q,ae)&&(re++,Z[ae]!==q[ae]))return!1;return re===H}(T[0],$,T[4]))Ne=T[5],We=T[6];else{Ne=function(C,H,Z){const q=Object.assign(Object.assign({},H),{className:void 0,theme:Z}),re=C.length>1;for(let ae=0;ae<C.length;ae++){const ue=C[ae],me=Bo(ue)?ue(re?Object.assign({},q):q):ue;for(const Pe in me)Pe==="className"?q.className=ri(q.className,me[Pe]):Pe==="style"?q.style=Object.assign(Object.assign({},q.style),me[Pe]):Pe in H&&H[Pe]===void 0||(q[Pe]=me[Pe])}return"className"in H&&typeof H.className=="string"&&(q.className=ri(q.className,H.className)),q}(de,$,fe),We=se.generateAndInjectStyles(Ne,_e.styleSheet,_e.stylis);let g=0;for(const C in $)kd.call($,C)&&g++;P.current=[$,fe,_e.styleSheet,_e.stylis,g,Ne,We,se]}}const Me=Ne.as||Ve,ye=function(P,T,g,C){const H={};for(const Z in P)P[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&P.theme===g||(Z==="forwardedAs"?H.as=P.forwardedAs:C&&!C(Z,T)||(H[Z]=P[Z]));return H}(Ne,Me,fe,He);let R=ri(V,X);return We&&(R+=" "+We),Ne.className&&(R+=" "+Ne.className),ye[Zs(Me)&&Me.includes("-")?"class":"className"]=R,ie&&(ye.ref=ie),Te.createElement(Me,ye)}(G,K,J)}le.displayName=j;let G=yt.forwardRef(le);return G.attrs=O,G.componentStyle=U,G.displayName=j,G.shouldForwardProp=D,G.foldedComponentIds=c?ri(f.foldedComponentIds,f.styledComponentId):"",G.styledComponentId=M,G.target=c?f.target:i,Object.defineProperty(G,"defaultProps",{get(){return this._foldedDefaultProps},set(K){this._foldedDefaultProps=c?function(J,...Y){for(const $ of Y)Js(J,$,!0);return J}({},f.defaultProps,K):K}}),Qd(G,()=>`.${G.styledComponentId}`),w&&Hd(G,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}var J0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Cd(i,a){const s=[i[0]];for(let c=0,f=a.length;c<f;c+=1)s.push(a[c],i[c+1]);return s}const Ed=i=>(Kd.add(i),i);function q0(i,...a){if(Bo(i)||ui(i))return Ed(On(Cd(oa,[i,...a])));const s=i;return a.length===0&&s.length===1&&typeof s[0]=="string"?On(s):Ed(On(Cd(s,a)))}function ea(i,a,s=pr){if(!a)throw $o(1,a);const c=(f,...w)=>i(a,s,q0(f,...w));return c.attrs=f=>ea(i,a,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)})),c.withConfig=f=>ea(i,a,Object.assign(Object.assign({},s),f)),c}const nf=i=>ea(Z0,i),k=nf;J0.forEach(i=>{k[i]=nf(i)});const it={Wrapper:k.section`
        width: 100%;

        padding: 84px 24px;

        background: #050505;

        border-top: 1px solid #1f1f1f;

        scroll-margin-top: 90px;

        @media (max-width: 768px) {
            padding: 64px 18px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:k.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,Header:k.div`
        max-width: 720px;

        margin-bottom: 40px;
    `,Label:k.p`
        margin: 0 0 10px;

        color: #777777;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,Title:k.h2`
        margin: 0;

        color: #f5f5f5;

        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1.05;
    `,Text:k.p`
        max-width: 670px;

        margin: 20px 0 0;

        color: #929292;

        font-size: 0.92rem;
        line-height: 1.8;
    `,Grid:k.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,Card:k.article`
        padding: 24px;

        background: #090909;

        border: 1px solid #252525;
        border-radius: 18px;

        box-shadow: 0 8px 26px rgba(0, 0, 0, 0.16);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #414141;

            box-shadow:
                0 12px 32px rgba(0, 0, 0, 0.28),
                0 0 0 1px rgba(255, 255, 255, 0.025);
        }
    `,IconBox:k.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        margin-bottom: 18px;

        color: #d8e9ff;

        border: 1px solid #2c3f55;
        border-radius: 11px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,CardTitle:k.h3`
        margin: 0 0 9px;

        color: #e8e8e8;

        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.4;
    `,CardText:k.p`
        margin: 0;

        color: #818181;

        font-size: 0.8rem;
        line-height: 1.7;
    `,Developer:k.div`
        margin-top: 46px;
        padding-top: 30px;

        border-top: 1px solid #1e1e1e;
    `,DeveloperLabel:k.p`
        margin: 0 0 7px;

        color: #666666;

        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,DeveloperName:k.a`
        display: inline-block;

        color: #eeeeee;

        border-bottom: 1px solid transparent;

        font-size: 1rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #6e6e6e;

            text-shadow: 0 1px 10px rgba(255, 255, 255, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 4px;
        }
    `,DeveloperText:k.p`
        max-width: 560px;

        margin: 9px 0 0;

        color: #747474;

        font-size: 0.78rem;
        line-height: 1.7;
    `},eh=[{icon:h.jsx(R1,{"aria-hidden":"true"}),title:"Local Storage",text:"Your water records stay in your browser and remain available after refresh."},{icon:h.jsx(F1,{"aria-hidden":"true"}),title:"Daily Progress",text:"Track glasses, milliliters, daily goals, and progress for the selected date."},{icon:h.jsx(_1,{"aria-hidden":"true"}),title:"Private by Design",text:"The tracker works locally without requiring an account or sending your intake data to a server."}],th=()=>h.jsx(it.Wrapper,{id:"about",children:h.jsxs(it.Container,{children:[h.jsxs(it.Header,{children:[h.jsx(it.Label,{children:"About The App"}),h.jsx(it.Title,{children:"A simple way to keep hydration visible"}),h.jsx(it.Text,{children:"Water Intake is a lightweight daily hydration tracker designed to make logging water quick and easy. Set a daily target, choose your glass size, review previous days, and keep a clear record of every entry."})]}),h.jsx(it.Grid,{children:eh.map(({icon:i,title:a,text:s})=>h.jsxs(it.Card,{children:[h.jsx(it.IconBox,{children:i}),h.jsx(it.CardTitle,{children:a}),h.jsx(it.CardText,{children:s})]},a))}),h.jsxs(it.Developer,{children:[h.jsx(it.DeveloperLabel,{children:"Developed by"}),h.jsx(it.DeveloperName,{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"}),h.jsx(it.DeveloperText,{children:"Full-Stack Web Developer building practical web applications, developer tools, and useful digital products."})]})]})}),nh={Button:k.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 900;

        display: grid;
        place-items: center;

        width: 46px;
        height: 46px;

        padding: 0;

        color: #f5f5f5;
        background: #0b0b0b;

        border: 1px solid #383838;
        border-radius: 13px;

        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.34);

        opacity: ${({$visible:i})=>i?1:0};

        visibility: ${({$visible:i})=>i?"visible":"hidden"};

        pointer-events: ${({$visible:i})=>i?"auto":"none"};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            visibility 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 14px;
            height: 14px;
        }

        &:hover {
            border-color: #686868;

            box-shadow:
                0 12px 30px rgba(0, 0, 0, 0.42),
                0 0 0 2px rgba(255, 255, 255, 0.035);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 44px;
            height: 44px;
        }
    `},rh=()=>{const[i,a]=Te.useState(!1);Te.useEffect(()=>{const c=()=>{a(window.scrollY>320)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c)}},[]);const s=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return h.jsx(nh.Button,{type:"button",$visible:i,onClick:s,"aria-label":"Back to top",title:"Back to top",children:h.jsx(b1,{"aria-hidden":"true"})})},Et={Wrapper:k.footer`
        width: 100%;

        padding: 50px 24px 24px;

        background: #030303;

        border-top: 1px solid #1e1e1e;

        @media (max-width: 768px) {
            padding: 42px 18px 22px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:k.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,Top:k.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;

        padding-bottom: 34px;

        @media (max-width: 760px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 26px;
        }
    `,Brand:k.div`
        display: flex;
        align-items: center;
        gap: 14px;

        max-width: 500px;
    `,Logo:k.img`
        flex-shrink: 0;

        width: 54px;
        height: 54px;

        padding: 4px;

        object-fit: contain;

        background: #080808;

        border: 1px solid #292929;
        border-radius: 13px;
    `,Title:k.h2`
        margin: 0;

        color: #e8e8e8;

        font-size: 1rem;
        font-weight: 700;
    `,Text:k.p`
        max-width: 430px;

        margin: 6px 0 0;

        color: #717171;

        font-size: 0.76rem;
        line-height: 1.65;
    `,Links:k.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 7px;

        @media (max-width: 760px) {
            justify-content: flex-start;
        }
    `,IconLink:k.a`
        display: grid;
        place-items: center;

        width: 39px;
        height: 39px;

        color: #a8a8a8;

        border: 1px solid #292929;
        border-radius: 10px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 14px;
            height: 14px;
        }

        &:hover {
            border-color: #575757;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.15);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,Bottom:k.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        padding-top: 22px;

        border-top: 1px solid #1b1b1b;

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
        }
    `,Copyright:k.p`
        margin: 0;

        color: #616161;

        font-size: 0.72rem;
        line-height: 1.6;

        a {
            color: #9b9b9b;

            border-bottom: 1px solid transparent;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        a:hover {
            border-color: #666666;

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.13);
        }

        a:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,Note:k.p`
        margin: 0;

        color: #525252;

        font-size: 0.7rem;
    `},ih=[{label:"Portfolio",href:"https://www.ashishranjan.net",icon:h.jsx(L1,{"aria-hidden":"true"})},{label:"GitHub",href:"https://github.com/a2rp",icon:h.jsx(k1,{"aria-hidden":"true"})},{label:"CodePen",href:"https://codepen.io/ash1198",icon:h.jsx(E1,{"aria-hidden":"true"})},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:h.jsx(S1,{"aria-hidden":"true"})},{label:"Facebook",href:"https://www.facebook.com/theash.ashish",icon:h.jsx(C1,{"aria-hidden":"true"})},{label:"YouTube",href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",icon:h.jsx(x1,{"aria-hidden":"true"})},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:h.jsx(M1,{"aria-hidden":"true"})},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:h.jsx(P1,{"aria-hidden":"true"})},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:h.jsx(I1,{"aria-hidden":"true"})},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:h.jsx(w1,{"aria-hidden":"true"})}],oh=()=>{const i=new Date().getFullYear();return h.jsx(Et.Wrapper,{children:h.jsxs(Et.Container,{children:[h.jsxs(Et.Top,{children:[h.jsxs(Et.Brand,{children:[h.jsx(Et.Logo,{src:"/water-intake/logo.png",alt:"Water Intake logo"}),h.jsxs("div",{children:[h.jsx(Et.Title,{children:"Water Intake"}),h.jsx(Et.Text,{children:"A simple daily hydration tracker that keeps your records in your browser."})]})]}),h.jsx(Et.Links,{"aria-label":"External links",children:ih.map(({label:a,href:s,icon:c})=>h.jsx(Et.IconLink,{href:s,target:s.startsWith("mailto:")?void 0:"_blank",rel:s.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":a,title:a,children:c},a))})]}),h.jsxs(Et.Bottom,{children:[h.jsxs(Et.Copyright,{children:["Copyright © ",i," ",h.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),h.jsx(Et.Note,{children:"Stay consistent. Stay hydrated."})]})]})})},tt={Wrapper:k.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        width: 100%;

        background: rgba(4, 4, 4, 0.96);

        border-bottom: 1px solid #202020;

        box-shadow: 0 7px 28px rgba(0, 0, 0, 0.22);

        transform: ${({$hidden:i})=>i?"translateY(-100%)":"translateY(0)"};

        transition:
            transform 220ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
    `,Container:k.div`
        display: flex;
        align-items: center;
        gap: 24px;

        width: min(1120px, calc(100% - 40px));
        min-height: 72px;

        margin: 0 auto;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1120px);
            min-height: 68px;
        }
    `,Brand:k.a`
        display: flex;
        align-items: center;
        gap: 11px;

        flex-shrink: 0;

        margin-right: auto;

        color: inherit;

        border: 1px solid transparent;
        border-radius: 12px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #303030;

            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.25);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.1);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,Logo:k.img`
        width: 46px;
        height: 46px;

        padding: 3px;

        object-fit: contain;

        background: #090909;

        border: 1px solid #2c2c2c;
        border-radius: 11px;
    `,BrandText:k.div`
        min-width: 0;
    `,BrandName:k.div`
        color: #eeeeee;

        font-size: 0.92rem;
        font-weight: 700;
        line-height: 1.2;
    `,BrandLabel:k.div`
        margin-top: 3px;

        color: #686868;

        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        line-height: 1.2;
        text-transform: uppercase;
    `,Navigation:k.nav`
        display: flex;
        align-items: center;
        gap: 5px;

        @media (max-width: 760px) {
            display: none;
        }
    `,NavLink:k.a`
        min-height: 38px;

        padding: 9px 11px;

        color: #929292;

        border: 1px solid transparent;
        border-radius: 9px;

        font-size: 0.74rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #343434;

            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.13);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,Status:k.div`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        min-height: 36px;

        padding: 7px 10px;

        color: #737373;

        border: 1px solid #272727;
        border-radius: 999px;

        font-size: 0.68rem;
        font-weight: 700;

        svg {
            width: 12px;
            height: 12px;
        }

        @media (max-width: 920px) {
            display: none;
        }
    `,MenuButton:k.button`
        display: none;
        place-items: center;

        width: 42px;
        height: 42px;

        padding: 0;

        color: #d5d5d5;
        background: transparent;

        border: 1px solid #313131;
        border-radius: 10px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover {
            border-color: #626262;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.25);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        @media (max-width: 760px) {
            display: grid;
        }
    `,MobileNavigation:k.nav`
        display: none;

        width: 100%;

        background: #050505;

        border-top: 1px solid #202020;

        @media (max-width: 760px) {
            display: block;
        }
    `,MobileInner:k.div`
        display: grid;
        gap: 5px;

        width: min(1120px, calc(100% - 28px));

        margin: 0 auto;
        padding: 10px 0 14px;
    `,MobileLink:k.a`
        display: flex;
        align-items: center;

        min-height: 44px;

        padding: 10px 12px;

        color: #9a9a9a;

        border: 1px solid #252525;
        border-radius: 9px;

        font-size: 0.78rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #505050;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `},lh=()=>{const i=Te.useRef(0),[a,s]=Te.useState(!1),[c,f]=Te.useState(!1);Te.useEffect(()=>{const E=()=>{const S=window.scrollY;S<=20?s(!1):S>i.current&&S>110?(s(!0),f(!1)):S<i.current&&s(!1),i.current=S};return E(),window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E)}},[]),Te.useEffect(()=>{const E=S=>{S.key==="Escape"&&f(!1)};return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[]);const w=()=>{f(!1),s(!1)};return h.jsxs(tt.Wrapper,{$hidden:a,children:[h.jsxs(tt.Container,{children:[h.jsxs(tt.Brand,{href:"#tracker","aria-label":"Water Intake home",onClick:w,children:[h.jsx(tt.Logo,{src:"/water-intake/logo.png",alt:"Water Intake logo"}),h.jsxs(tt.BrandText,{children:[h.jsx(tt.BrandName,{children:"Water Intake"}),h.jsx(tt.BrandLabel,{children:"Daily Hydration Tracker"})]})]}),h.jsxs(tt.Navigation,{"aria-label":"Main navigation",children:[h.jsx(tt.NavLink,{href:"#tracker",children:"Tracker"}),h.jsx(tt.NavLink,{href:"#about",children:"About"})]}),h.jsxs(tt.Status,{children:[h.jsx(Ro,{"aria-hidden":"true"}),"Local data"]}),h.jsx(tt.MenuButton,{type:"button",onClick:()=>f(E=>!E),"aria-expanded":c,"aria-controls":"mobile-navigation","aria-label":c?"Close navigation menu":"Open navigation menu",title:c?"Close menu":"Open menu",children:c?h.jsx(z1,{"aria-hidden":"true"}):h.jsx(B1,{"aria-hidden":"true"})})]}),c&&h.jsx(tt.MobileNavigation,{id:"mobile-navigation","aria-label":"Mobile navigation",children:h.jsxs(tt.MobileInner,{children:[h.jsx(tt.MobileLink,{href:"#tracker",onClick:w,children:"Tracker"}),h.jsx(tt.MobileLink,{href:"#about",onClick:w,children:"About"})]})})]})},Yt={Overlay:k.div`
        position: fixed;
        inset: 0;
        z-index: 1200;

        display: grid;
        place-items: center;

        padding: 20px;

        background: rgba(0, 0, 0, 0.78);

        backdrop-filter: blur(8px);
    `,Card:k.div`
        width: min(450px, 100%);

        padding: 28px;

        background: #0c0c0c;

        border: 1px solid #333333;
        border-radius: 20px;

        box-shadow: 0 26px 80px rgba(0, 0, 0, 0.58);

        @media (max-width: 480px) {
            padding: 22px 18px;
        }
    `,IconBox:k.div`
        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        margin-bottom: 20px;

        color: ${({$tone:i})=>i==="danger"?"#ff9b9b":"#ddecff"};

        border: 1px solid
            ${({$tone:i})=>i==="danger"?"#693333":"#30475f"};

        border-radius: 12px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,Content:k.div``,Title:k.h2`
        margin: 0;

        color: #f2f2f2;

        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        line-height: 1.3;
    `,Message:k.p`
        margin: 12px 0 0;

        color: #8d8d8d;

        font-size: 0.86rem;
        line-height: 1.7;
    `,Actions:k.div`
        display: flex;
        justify-content: flex-end;
        gap: 9px;

        margin-top: 28px;

        @media (max-width: 420px) {
            flex-direction: column-reverse;
        }
    `,CancelButton:k.button`
        min-height: 42px;

        padding: 9px 15px;

        color: #a5a5a5;
        background: #0b0b0b;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.76rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #575757;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.24);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 420px) {
            width: 100%;
        }
    `,ConfirmButton:k.button`
        min-height: 42px;

        padding: 9px 15px;

        color: ${({$tone:i})=>i==="danger"?"#ffb0b0":"#ddecff"};

        background: #0b0b0b;

        border: 1px solid
            ${({$tone:i})=>i==="danger"?"#703737":"#395675"};

        border-radius: 10px;

        font: inherit;
        font-size: 0.76rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: ${({$tone:i})=>i==="danger"?"#a64e4e":"#5c82a9"};

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.24);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 420px) {
            width: 100%;
        }
    `},sh=({isOpen:i,title:a="Are you sure?",message:s="",confirmText:c="Confirm",cancelText:f="Cancel",tone:w="default",onConfirm:E,onCancel:S})=>{if(Te.useEffect(()=>{if(!i)return;const M=document.body.style.overflow,O=D=>{D.key==="Escape"&&(S==null||S())};return document.body.style.overflow="hidden",document.addEventListener("keydown",O),()=>{document.body.style.overflow=M,document.removeEventListener("keydown",O)}},[i,S]),!i)return null;const j=M=>{M.target===M.currentTarget&&(S==null||S())};return h.jsx(Yt.Overlay,{onMouseDown:j,role:"presentation",children:h.jsxs(Yt.Card,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-dialog-title","aria-describedby":s?"confirm-dialog-message":void 0,children:[h.jsx(Yt.IconBox,{$tone:w,children:h.jsx(T1,{"aria-hidden":"true"})}),h.jsxs(Yt.Content,{children:[h.jsx(Yt.Title,{id:"confirm-dialog-title",children:a}),s&&h.jsx(Yt.Message,{id:"confirm-dialog-message",children:s})]}),h.jsxs(Yt.Actions,{children:[h.jsx(Yt.CancelButton,{type:"button",onClick:S,children:f}),h.jsx(Yt.ConfirmButton,{type:"button",$tone:w,onClick:E,autoFocus:!0,children:c})]})]})})},De={Wrapper:k.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,Section:k.section`
        padding: 22px;

        background: #080808;

        border: 1px solid #252525;
        border-radius: 17px;

        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.14);
    `,SectionHeader:k.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

        margin-bottom: 18px;

        > svg {
            width: 16px;
            height: 16px;

            color: #646464;
        }
    `,Label:k.p`
        margin: 0 0 4px;

        color: #606060;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,Title:k.h2`
        margin: 0;

        color: #dcdcdc;

        font-size: 1rem;
        font-weight: 700;
    `,QuickActions:k.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    `,DateControls:k.div`
        display: grid;
        grid-template-columns:
            auto
            minmax(150px, 1fr)
            auto
            auto;
        gap: 8px;

        @media (max-width: 520px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,Button:k.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 13px;

        color: #9d9d9d;
        background: #080808;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 12px;
            height: 12px;
        }

        &:hover:not(:disabled) {
            border-color: #5b5b5b;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    `,PrimaryButton:k.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 13px;

        color: #dcecff;
        background: #08111b;

        border: 1px solid #355474;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 12px;
            height: 12px;
        }

        &:hover {
            border-color: #5c83aa;

            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 9px rgba(174, 215, 255, 0.18);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,NumberInput:k.input`
        width: 80px;
        min-height: 42px;

        padding: 9px 11px;

        color: #dddddd;
        background: #070707;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.78rem;

        outline: none;

        appearance: textfield;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            appearance: none;
        }

        &:focus {
            border-color: #5c83aa;

            box-shadow: 0 0 0 3px rgba(85, 139, 192, 0.08);
        }
    `,DateInput:k.input`
        width: 100%;
        min-height: 42px;

        padding: 9px 11px;

        color: #c8c8c8;
        background: #070707;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;

        outline: none;

        color-scheme: dark;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:focus {
            border-color: #5c83aa;

            box-shadow: 0 0 0 3px rgba(85, 139, 192, 0.08);
        }
    `},ah=({selectedDate:i,addCount:a,setAddCount:s,onDateChange:c,onPreviousDay:f,onNextDay:w,onToday:E,onAddGlasses:S,onUndo:j,canUndo:M})=>h.jsxs(De.Wrapper,{children:[h.jsxs(De.Section,{children:[h.jsx(De.SectionHeader,{children:h.jsxs("div",{children:[h.jsx(De.Label,{children:"Log Water"}),h.jsx(De.Title,{children:"Add glasses"})]})}),h.jsxs(De.QuickActions,{children:[h.jsx(De.PrimaryButton,{type:"button",onClick:()=>S(1),children:"+1"}),h.jsx(De.Button,{type:"button",onClick:()=>S(2),children:"+2"}),h.jsx(De.Button,{type:"button",onClick:()=>S(3),children:"+3"}),h.jsx(De.NumberInput,{type:"number",inputMode:"numeric",min:"1",step:"1",value:a,onChange:O=>s(O.target.value),"aria-label":"Custom number of glasses"}),h.jsxs(De.PrimaryButton,{type:"button",onClick:()=>S(a),children:[h.jsx(N1,{"aria-hidden":"true"}),"Add"]}),h.jsxs(De.Button,{type:"button",onClick:j,disabled:!M,children:[h.jsx(j1,{"aria-hidden":"true"}),"Undo"]})]})]}),h.jsxs(De.Section,{children:[h.jsxs(De.SectionHeader,{children:[h.jsxs("div",{children:[h.jsx(De.Label,{children:"Selected Day"}),h.jsx(De.Title,{children:"Browse records"})]}),h.jsx(A1,{"aria-hidden":"true"})]}),h.jsxs(De.DateControls,{children:[h.jsxs(De.Button,{type:"button",onClick:f,"aria-label":"Previous day",children:[h.jsx(O1,{"aria-hidden":"true"}),"Prev"]}),h.jsx(De.DateInput,{type:"date",value:i,onChange:O=>c(O.target.value),"aria-label":"Selected date"}),h.jsx(De.Button,{type:"button",onClick:E,children:"Today"}),h.jsxs(De.Button,{type:"button",onClick:w,"aria-label":"Next day",children:["Next",h.jsx(D1,{"aria-hidden":"true"})]})]})]})]}),gt={Wrapper:k.section`
        padding: 22px;

        background: #070707;

        border: 1px solid #252525;
        border-radius: 18px;

        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.14);
    `,Header:k.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 18px;

        @media (max-width: 480px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
        }
    `,Label:k.p`
        margin: 0 0 5px;

        color: #616161;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,Title:k.h2`
        margin: 0;

        color: #dddddd;

        font-size: 1rem;
        font-weight: 700;
    `,Count:k.span`
        color: #626262;

        font-size: 0.68rem;
        font-weight: 700;
    `,Empty:k.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-height: 190px;

        padding: 30px;

        text-align: center;

        border: 1px dashed #292929;
        border-radius: 13px;

        svg {
            width: 21px;
            height: 21px;

            margin-bottom: 12px;

            color: #425970;
        }

        strong {
            color: #999999;

            font-size: 0.82rem;
        }

        span {
            max-width: 390px;

            margin-top: 7px;

            color: #5e5e5e;

            font-size: 0.72rem;
            line-height: 1.6;
        }
    `,List:k.div`
        display: grid;
        gap: 8px;
    `,Item:k.article`
        display: flex;
        align-items: center;
        gap: 13px;

        min-height: 64px;

        padding: 11px 12px;

        border: 1px solid #242424;
        border-radius: 11px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #3f3f3f;

            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
        }
    `,ItemNumber:k.div`
        flex-shrink: 0;

        color: #4f4f4f;

        font-size: 0.67rem;
        font-weight: 700;
    `,ItemContent:k.div`
        flex: 1;

        min-width: 0;
    `,ItemTitle:k.div`
        color: #bcbcbc;

        font-size: 0.78rem;
        font-weight: 700;
    `,ItemMeta:k.div`
        display: flex;
        flex-wrap: wrap;
        gap: 5px 14px;

        margin-top: 4px;

        color: #666666;

        font-size: 0.68rem;
    `,DeleteButton:k.button`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 38px;
        height: 38px;

        padding: 0;

        color: #d08a8a;
        background: transparent;

        border: 1px solid #3c2b2b;
        border-radius: 9px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 13px;
            height: 13px;
        }

        &:hover {
            border-color: #754242;

            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

            text-shadow: 0 0 8px rgba(255, 140, 140, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `},uh=({logs:i=[],formattedDate:a,onDelete:s})=>h.jsxs(gt.Wrapper,{children:[h.jsxs(gt.Header,{children:[h.jsxs("div",{children:[h.jsx(gt.Label,{children:"Intake History"}),h.jsx(gt.Title,{children:a})]}),h.jsxs(gt.Count,{children:[i.length," ",i.length===1?"entry":"entries"]})]}),i.length===0?h.jsxs(gt.Empty,{children:[h.jsx(Ro,{"aria-hidden":"true"}),h.jsx("strong",{children:"No water logged"}),h.jsx("span",{children:"Add your first glass for this day using the controls above."})]}):h.jsx(gt.List,{children:i.map((c,f)=>h.jsxs(gt.Item,{children:[h.jsx(gt.ItemNumber,{children:String(i.length-f).padStart(2,"0")}),h.jsxs(gt.ItemContent,{children:[h.jsxs(gt.ItemTitle,{children:["Glass #",i.length-f]}),h.jsxs(gt.ItemMeta,{children:[h.jsx("span",{children:new Date(c.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),h.jsxs("span",{children:[c.ml," ml"]})]})]}),h.jsx(gt.DeleteButton,{type:"button",onClick:()=>s(c),"aria-label":`Delete glass ${i.length-f}`,title:"Delete entry",children:h.jsx(Pd,{"aria-hidden":"true"})})]},c.id))})]}),Be={Wrapper:k.section`
        padding: 24px;

        background: #070707;

        border: 1px solid #272727;
        border-radius: 20px;

        box-shadow: 0 10px 34px rgba(0, 0, 0, 0.18);

        @media (max-width: 520px) {
            padding: 19px;
        }
    `,Header:k.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 26px;

        @media (max-width: 500px) {
            flex-direction: column;
            gap: 12px;
        }
    `,Label:k.p`
        margin: 0 0 5px;

        color: #626262;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,Title:k.h2`
        margin: 0;

        color: #dfdfdf;

        font-size: 1.05rem;
        font-weight: 700;
    `,Status:k.div`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        padding: 7px 10px;

        color: #9ebeda;

        border: 1px solid #2d4358;
        border-radius: 999px;

        font-size: 0.67rem;
        font-weight: 700;

        svg {
            width: 11px;
            height: 11px;
        }
    `,Content:k.div`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 42px;
        align-items: center;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
            gap: 28px;
        }
    `,RingArea:k.div`
        position: relative;

        display: grid;
        place-items: center;

        width: 156px;
        height: 156px;

        @media (max-width: 700px) {
            margin: 0 auto;
        }
    `,Ring:k.div`
        display: grid;
        place-items: center;

        color: #8ac5ff;

        svg {
            display: block;
        }
    `,RingText:k.div`
        position: absolute;

        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
            color: #e9e9e9;

            font-size: 1.7rem;
            font-weight: 700;
            letter-spacing: -0.035em;
            line-height: 1;
        }

        span {
            margin-top: 5px;

            color: #646464;

            font-size: 0.65rem;
            font-weight: 700;
        }
    `,Stats:k.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,Stat:k.div`
        min-height: 92px;

        padding: 16px;

        border: 1px solid #232323;
        border-radius: 13px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #414141;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }
    `,StatValue:k.div`
        color: #d8d8d8;

        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.03em;
    `,StatLabel:k.div`
        margin-top: 7px;

        color: #5e5e5e;

        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    `},ch=({value:i,max:a,size:s=156,stroke:c=10})=>{const f=Math.max(1,Number(a)||1),w=Math.max(0,Math.min(Number(i)||0,f)),E=(s-c)/2,S=2*Math.PI*E,j=S*(w/f),M=S-j;return h.jsx(Be.Ring,{"aria-label":`Progress ${w} of ${f} glasses`,children:h.jsxs("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,"aria-hidden":"true",children:[h.jsx("circle",{cx:s/2,cy:s/2,r:E,fill:"none",stroke:"#202020",strokeWidth:c}),h.jsx("circle",{cx:s/2,cy:s/2,r:E,fill:"none",stroke:"#8ac5ff",strokeWidth:c,strokeLinecap:"round",strokeDasharray:`${S} ${S}`,strokeDashoffset:M,transform:`rotate(-90 ${s/2} ${s/2})`})]})})},dh=({count:i,goal:a,percentage:s,consumedMl:c,glassMl:f})=>h.jsxs(Be.Wrapper,{children:[h.jsxs(Be.Header,{children:[h.jsxs("div",{children:[h.jsx(Be.Label,{children:"Daily Progress"}),h.jsx(Be.Title,{children:"Hydration overview"})]}),h.jsxs(Be.Status,{children:[h.jsx(Ro,{"aria-hidden":"true"}),s,"% complete"]})]}),h.jsxs(Be.Content,{children:[h.jsxs(Be.RingArea,{children:[h.jsx(ch,{value:i,max:a}),h.jsxs(Be.RingText,{children:[h.jsxs("strong",{children:[i,"/",a]}),h.jsx("span",{children:"glasses"})]})]}),h.jsxs(Be.Stats,{children:[h.jsxs(Be.Stat,{children:[h.jsx(Be.StatValue,{children:c}),h.jsx(Be.StatLabel,{children:"ml consumed"})]}),h.jsxs(Be.Stat,{children:[h.jsx(Be.StatValue,{children:a}),h.jsx(Be.StatLabel,{children:"daily goal"})]}),h.jsxs(Be.Stat,{children:[h.jsx(Be.StatValue,{children:f}),h.jsx(Be.StatLabel,{children:"current ml / glass"})]})]})]})]}),ve={Wrapper:k.section`
        padding: 22px;

        background: #070707;

        border: 1px solid #252525;
        border-radius: 18px;

        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.14);
    `,Header:k.div`
        margin-bottom: 18px;
    `,Label:k.p`
        margin: 0 0 5px;

        color: #606060;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,Title:k.h2`
        margin: 0;

        color: #dddddd;

        font-size: 1rem;
        font-weight: 700;
    `,Grid:k.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 780px) {
            grid-template-columns: 1fr;
        }
    `,Setting:k.article`
        display: flex;
        gap: 14px;

        padding: 18px;

        border: 1px solid #242424;
        border-radius: 13px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #404040;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 450px) {
            flex-direction: column;
        }
    `,IconBox:k.div`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 40px;
        height: 40px;

        color: #aaccee;

        border: 1px solid #30475d;
        border-radius: 10px;

        svg {
            width: 15px;
            height: 15px;
        }
    `,SettingContent:k.div`
        flex: 1;

        min-width: 0;
    `,SettingTitle:k.h3`
        margin: 0;

        color: #cfcfcf;

        font-size: 0.84rem;
        font-weight: 700;
    `,SettingText:k.p`
        margin: 6px 0 14px;

        color: #686868;

        font-size: 0.7rem;
        line-height: 1.6;
    `,Controls:k.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 7px;
    `,Input:k.input`
        width: 110px;
        min-height: 40px;

        padding: 8px 10px;

        color: #d0d0d0;
        background: #060606;

        border: 1px solid #303030;
        border-radius: 9px;

        font: inherit;
        font-size: 0.75rem;

        outline: none;

        appearance: textfield;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            appearance: none;
        }

        &:focus {
            border-color: #5c83aa;

            box-shadow: 0 0 0 3px rgba(85, 139, 192, 0.08);
        }
    `,Button:k.button`
        min-height: 40px;

        padding: 8px 12px;

        color: #9c9c9c;
        background: transparent;

        border: 1px solid #303030;
        border-radius: 9px;

        font: inherit;
        font-size: 0.7rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover:not(:disabled) {
            border-color: #5b5b5b;

            box-shadow: 0 5px 14px rgba(0, 0, 0, 0.19);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    `,DangerButton:k.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 40px;

        padding: 8px 12px;

        color: #d58d8d;
        background: transparent;

        border: 1px solid #4b2d2d;
        border-radius: 9px;

        font: inherit;
        font-size: 0.7rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 12px;
            height: 12px;
        }

        &:hover:not(:disabled) {
            border-color: #7c4343;

            box-shadow: 0 5px 14px rgba(0, 0, 0, 0.19);

            text-shadow: 0 0 8px rgba(255, 140, 140, 0.13);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    `,ClearSection:k.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;

        margin-top: 16px;
        padding-top: 18px;

        border-top: 1px solid #202020;

        @media (max-width: 560px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `,ClearTitle:k.h3`
        margin: 0;

        color: #b9b9b9;

        font-size: 0.78rem;
    `,ClearText:k.p`
        margin: 5px 0 0;

        color: #5e5e5e;

        font-size: 0.68rem;
        line-height: 1.6;
    `},fh=({editingGoal:i,editingGlassMl:a,setEditingGoal:s,setEditingGlassMl:c,minGlassMl:f,onSaveGoal:w,onResetGoal:E,onSaveGlassMl:S,onResetGlassMl:j,onClearDay:M,hasLogs:O})=>h.jsxs(ve.Wrapper,{children:[h.jsx(ve.Header,{children:h.jsxs("div",{children:[h.jsx(ve.Label,{children:"Settings"}),h.jsx(ve.Title,{children:"Daily preferences"})]})}),h.jsxs(ve.Grid,{children:[h.jsxs(ve.Setting,{children:[h.jsx(ve.IconBox,{children:h.jsx($1,{"aria-hidden":"true"})}),h.jsxs(ve.SettingContent,{children:[h.jsx(ve.SettingTitle,{children:"Daily goal"}),h.jsx(ve.SettingText,{children:"Number of glasses you want to drink each day."}),h.jsxs(ve.Controls,{children:[h.jsx(ve.Input,{type:"number",inputMode:"numeric",min:"1",step:"1",value:i,onChange:D=>s(D.target.value),onKeyDown:D=>{D.key==="Enter"&&w()},"aria-label":"Daily goal in glasses"}),h.jsx(ve.Button,{type:"button",onClick:w,children:"Set goal"}),h.jsx(ve.DangerButton,{type:"button",onClick:E,children:"Reset"})]})]})]}),h.jsxs(ve.Setting,{children:[h.jsx(ve.IconBox,{children:h.jsx(Ro,{"aria-hidden":"true"})}),h.jsxs(ve.SettingContent,{children:[h.jsx(ve.SettingTitle,{children:"Glass size"}),h.jsx(ve.SettingText,{children:"Milliliters recorded for each new glass you log."}),h.jsxs(ve.Controls,{children:[h.jsx(ve.Input,{type:"number",inputMode:"numeric",min:f,step:"50",value:a,onChange:D=>c(D.target.value),onKeyDown:D=>{D.key==="Enter"&&S()},"aria-label":"Glass size in milliliters"}),h.jsx(ve.Button,{type:"button",onClick:S,children:"Set ml"}),h.jsx(ve.DangerButton,{type:"button",onClick:j,children:"Reset"})]})]})]})]}),h.jsxs(ve.ClearSection,{children:[h.jsxs("div",{children:[h.jsx(ve.ClearTitle,{children:"Clear selected day"}),h.jsx(ve.ClearText,{children:"Permanently remove every water entry for the selected date."})]}),h.jsxs(ve.DangerButton,{type:"button",onClick:M,disabled:!O,children:[h.jsx(Pd,{"aria-hidden":"true"}),"Clear day"]})]})]}),ph="water-intake.v1",hh="water-intake.goal.v1",mh="water-intake.glassml.v1",Rn=8,It=250,li=50,gh=(i,a,s)=>{try{const c=window.localStorage.getItem(i);if(c===null)return a;const f=JSON.parse(c);return typeof s=="function"?s(f):f}catch{return a}},Qs=(i,a,s)=>{const[c,f]=Te.useState(()=>gh(i,a,s)),[w,E]=Te.useState(!1);return Te.useEffect(()=>{try{window.localStorage.setItem(i,JSON.stringify(c)),E(!1)}catch{E(!0)}},[i,c]),{value:c,setValue:f,error:w,removeValue:()=>{try{window.localStorage.removeItem(i),f(a),E(!1)}catch{E(!0)}}}},rf=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,si=()=>{const i=new Date,a=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),c=String(i.getDate()).padStart(2,"0");return`${a}-${s}-${c}`},ci=i=>{if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;const a=new Date(`${i}T12:00:00`);if(Number.isNaN(a.getTime()))return!1;const s=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),f=String(a.getDate()).padStart(2,"0");return`${s}-${c}-${f}`===i},Gs=i=>ci(i)?new Date(`${i}T12:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"Invalid date",jd=(i,a)=>{const s=ci(i)?i:si(),c=new Date(`${s}T12:00:00`);c.setDate(c.getDate()+Number(a||0));const f=c.getFullYear(),w=String(c.getMonth()+1).padStart(2,"0"),E=String(c.getDate()).padStart(2,"0");return`${f}-${w}-${E}`},vn=(i,a=1,s=1)=>{const c=Math.floor(Number(i)),f=Math.max(1,Math.floor(Number(s)||1)),w=Math.max(f,Math.floor(Number(a)||f));return Number.isFinite(c)?Math.max(f,c):w},yh=(i,a)=>{const s=Number(i);if(Number.isFinite(s)&&s>0)return s;if(typeof i=="string"){const c=Date.parse(i);if(Number.isFinite(c))return c}return a},vh=(i,a=It,s=0)=>{if(!i||typeof i!="object"||!ci(i.date))return null;const c=vn(a,It,li),f=Number(i.ml),w=Number.isFinite(f)&&f>0?Math.round(f):c,E=Date.now()-s;return{id:typeof i.id=="string"&&i.id.trim()?i.id:rf(),date:i.date,ml:w,createdAt:yh(i.createdAt,E)}},xh=(i,a=It)=>Array.isArray(i)?i.map((s,c)=>vh(s,a,c)).filter(Boolean):[],wh=({count:i,date:a,ml:s})=>{const c=vn(i,1,1),f=ci(a)?a:si(),w=vn(s,It,li),E=Date.now();return Array.from({length:c},(S,j)=>({id:rf(),date:f,ml:w,createdAt:E+j}))},Sh=(i,a)=>!Array.isArray(i)||!ci(a)?[]:i.filter(s=>s&&s.date===a).sort((s,c)=>Number(c.createdAt)-Number(s.createdAt)),kh=i=>Array.isArray(i)?i.reduce((a,s)=>{const c=Number(s==null?void 0:s.ml);return!Number.isFinite(c)||c<=0?a:a+c},0):0,Ch=(i,a)=>{const s=Math.max(0,Number(i)||0),c=Math.max(1,Number(a)||1);return Math.min(100,Math.round(s/c*100))},dt={Wrapper:k.main`
        width: 100%;

        padding: 56px 24px 82px;

        background:
            radial-gradient(
                circle at 50% -240px,
                rgba(82, 154, 220, 0.08),
                transparent 480px
            ),
            #000000;

        scroll-margin-top: 80px;

        @media (max-width: 768px) {
            padding: 42px 18px 68px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,Container:k.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,Hero:k.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 40px;

        margin-bottom: 28px;

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
        }
    `,HeroContent:k.div`
        max-width: 720px;
    `,Label:k.p`
        margin: 0 0 9px;

        color: #66809a;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,Title:k.h1`
        margin: 0;

        color: #f1f1f1;

        font-size: clamp(3rem, 8vw, 5.8rem);
        font-weight: 700;
        letter-spacing: -0.055em;
        line-height: 0.92;
    `,Description:k.p`
        max-width: 620px;

        margin: 20px 0 0;

        color: #7f7f7f;

        font-size: 0.9rem;
        line-height: 1.8;
    `,Summary:k.div`
        min-width: 180px;

        padding: 17px;

        text-align: right;

        border: 1px solid #252525;
        border-radius: 14px;

        @media (max-width: 700px) {
            min-width: 0;

            text-align: left;
        }
    `,SummaryValue:k.div`
        color: #dcecff;

        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: -0.025em;
    `,SummaryLabel:k.div`
        margin-top: 4px;

        color: #616161;

        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
    `,SummaryText:k.div`
        margin-top: 9px;

        color: #737373;

        font-size: 0.7rem;
    `,ErrorNotice:k.div`
        margin-bottom: 14px;
        padding: 13px 15px;

        color: #d0aaaa;

        border: 1px solid #593737;
        border-radius: 11px;

        font-size: 0.73rem;
        line-height: 1.6;
    `,Content:k.div`
        display: grid;
        gap: 14px;
    `,StorageNote:k.p`
        margin: 5px 0 0;

        color: #515151;

        text-align: center;

        font-size: 0.67rem;
        line-height: 1.6;
    `},Eh=()=>{const{value:i,setValue:a,error:s}=Qs(mh,It,P=>vn(P,It,li)),{value:c,setValue:f,error:w}=Qs(hh,Rn,P=>vn(P,Rn,1)),{value:E,setValue:S,error:j}=Qs(ph,[],P=>xh(P,i)),[M,O]=Te.useState(si),[D,U]=Te.useState("1"),[le,G]=Te.useState(String(c)),[K,J]=Te.useState(String(i)),[Y,$]=Te.useState(null);Te.useEffect(()=>{G(String(c))},[c]),Te.useEffect(()=>{J(String(i))},[i]);const ie=Te.useMemo(()=>Sh(E,M),[E,M]),de=ie.length,se=Te.useMemo(()=>kh(ie),[ie]),oe=Ch(de,c),V=s||w||j,X=P=>{$({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...P})},Ve=()=>{$(null)},Ue=()=>{const P=Y==null?void 0:Y.onConfirm;$(null),typeof P=="function"&&P()},_e=P=>{const T=vn(P,1,1),g=wh({count:T,date:M,ml:i});S(C=>[...g,...C]),U("1")},He=()=>{const P=ie[0];P&&S(T=>T.filter(g=>g.id!==P.id))},fe=P=>{X({title:"Delete water entry?",message:`Delete this ${P.ml} ml entry from ${Gs(M)}?`,confirmText:"Delete",tone:"danger",onConfirm:()=>{S(T=>T.filter(g=>g.id!==P.id))}})},Ne=()=>{ie.length!==0&&X({title:"Clear selected day?",message:`Remove all ${ie.length} water entries from ${Gs(M)}?`,confirmText:"Clear day",tone:"danger",onConfirm:()=>{S(P=>P.filter(T=>T.date!==M))}})},We=()=>{const P=vn(le,Rn,1);G(String(P)),P!==c&&X({title:"Update daily goal?",message:`Set your daily goal to ${P} glasses?`,confirmText:"Set goal",onConfirm:()=>f(P)})},Me=()=>{if(c===Rn){G(String(Rn));return}X({title:"Reset daily goal?",message:`Reset the daily goal to ${Rn} glasses?`,confirmText:"Reset",tone:"danger",onConfirm:()=>f(Rn)})},ye=()=>{const P=vn(K,It,li);J(String(P)),P!==i&&X({title:"Update glass size?",message:`New entries will use ${P} ml per glass. Existing entries will keep their original amounts.`,confirmText:"Set glass size",onConfirm:()=>a(P)})},R=()=>{if(i===It){J(String(It));return}X({title:"Reset glass size?",message:`Reset new water entries to ${It} ml per glass?`,confirmText:"Reset",tone:"danger",onConfirm:()=>a(It)})};return h.jsx(dt.Wrapper,{id:"tracker",children:h.jsxs(dt.Container,{children:[h.jsxs(dt.Hero,{children:[h.jsxs(dt.HeroContent,{children:[h.jsx(dt.Label,{children:"Daily Hydration"}),h.jsx(dt.Title,{children:"Water Intake"}),h.jsx(dt.Description,{children:"Log your water, review previous days, and keep your daily hydration goal visible without creating an account."})]}),h.jsxs(dt.Summary,{children:[h.jsxs(dt.SummaryValue,{children:[de,"/",c]}),h.jsx(dt.SummaryLabel,{children:"glasses logged"}),h.jsxs(dt.SummaryText,{children:[se," ml recorded"]})]})]}),V&&h.jsx(dt.ErrorNotice,{role:"alert",children:"Browser storage could not be updated. Recent changes may not remain after refresh."}),h.jsxs(dt.Content,{children:[h.jsx(dh,{count:de,goal:c,percentage:oe,consumedMl:se,glassMl:i}),h.jsx(ah,{selectedDate:M,addCount:D,setAddCount:U,onDateChange:P=>O(P||si()),onPreviousDay:()=>O(jd(M,-1)),onNextDay:()=>O(jd(M,1)),onToday:()=>O(si()),onAddGlasses:_e,onUndo:He,canUndo:ie.length>0}),h.jsx(fh,{editingGoal:le,editingGlassMl:K,setEditingGoal:G,setEditingGlassMl:J,minGlassMl:li,onSaveGoal:We,onResetGoal:Me,onSaveGlassMl:ye,onResetGlassMl:R,onClearDay:Ne,hasLogs:ie.length>0}),h.jsx(uh,{logs:ie,formattedDate:Gs(M),onDelete:fe}),h.jsx(dt.StorageNote,{children:"Water records are stored locally in this browser. Each entry keeps the glass size used when it was created."})]}),h.jsx(sh,{isOpen:!!Y,title:Y==null?void 0:Y.title,message:Y==null?void 0:Y.message,confirmText:Y==null?void 0:Y.confirmText,cancelText:Y==null?void 0:Y.cancelText,tone:Y==null?void 0:Y.tone,onConfirm:Ue,onCancel:Ve})]})})},zd={Wrapper:k.div`
        width: 100%;
        min-height: 100vh;

        color: #f2f2f2;
        background: #000000;
    `,Main:k.div`
        width: 100%;
        min-height: calc(100vh - 72px);

        padding-top: 72px;

        @media (max-width: 600px) {
            min-height: calc(100vh - 68px);

            padding-top: 68px;
        }
    `},jh=()=>h.jsxs(zd.Wrapper,{children:[h.jsx(lh,{}),h.jsxs(zd.Main,{children:[h.jsx(Eh,{}),h.jsx(th,{})]}),h.jsx(oh,{}),h.jsx(rh,{})]}),of=document.getElementById("root");if(!of)throw new Error("Root element was not found.");d1.createRoot(of).render(h.jsx(h.Fragment,{children:h.jsx(jh,{})}));
