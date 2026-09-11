(()=>{var tA=Object.create;var ey=Object.defineProperty;var eA=Object.getOwnPropertyDescriptor;var nA=Object.getOwnPropertyNames;var iA=Object.getPrototypeOf,sA=Object.prototype.hasOwnProperty;var ns=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var rA=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of nA(t))!sA.call(n,s)&&s!==e&&ey(n,s,{get:()=>t[s],enumerable:!(i=eA(t,s))||i.enumerable});return n};var ga=(n,t,e)=>(e=n!=null?tA(iA(n)):{},rA(t||!n||!n.__esModule?ey(e,"default",{value:n,enumerable:!0}):e,n));var hy=ns(Ne=>{"use strict";function qp(n,t){var e=n.length;n.push(t);t:for(;0<e;){var i=e-1>>>1,s=n[i];if(0<Ju(s,t))n[i]=t,n[e]=s,e=i;else break t}}function is(n){return n.length===0?null:n[0]}function Qu(n){if(n.length===0)return null;var t=n[0],e=n.pop();if(e!==t){n[0]=e;t:for(var i=0,s=n.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=n[a],l=a+1,c=n[l];if(0>Ju(o,e))l<s&&0>Ju(c,o)?(n[i]=c,n[l]=e,i=l):(n[i]=o,n[a]=e,i=a);else if(l<s&&0>Ju(c,e))n[i]=c,n[l]=e,i=l;else break t}}return t}function Ju(n,t){var e=n.sortIndex-t.sortIndex;return e!==0?e:n.id-t.id}Ne.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(ny=performance,Ne.unstable_now=function(){return ny.now()}):(kp=Date,iy=kp.now(),Ne.unstable_now=function(){return kp.now()-iy});var ny,kp,iy,Cs=[],fr=[],aA=1,Ei=null,Tn=3,Yp=!1,ql=!1,Yl=!1,Zp=!1,ay=typeof setTimeout=="function"?setTimeout:null,oy=typeof clearTimeout=="function"?clearTimeout:null,sy=typeof setImmediate<"u"?setImmediate:null;function Ku(n){for(var t=is(fr);t!==null;){if(t.callback===null)Qu(fr);else if(t.startTime<=n)Qu(fr),t.sortIndex=t.expirationTime,qp(Cs,t);else break;t=is(fr)}}function Jp(n){if(Yl=!1,Ku(n),!ql)if(is(Cs)!==null)ql=!0,co||(co=!0,lo());else{var t=is(fr);t!==null&&Kp(Jp,t.startTime-n)}}var co=!1,Zl=-1,ly=5,cy=-1;function uy(){return Zp?!0:!(Ne.unstable_now()-cy<ly)}function Xp(){if(Zp=!1,co){var n=Ne.unstable_now();cy=n;var t=!0;try{t:{ql=!1,Yl&&(Yl=!1,oy(Zl),Zl=-1),Yp=!0;var e=Tn;try{e:{for(Ku(n),Ei=is(Cs);Ei!==null&&!(Ei.expirationTime>n&&uy());){var i=Ei.callback;if(typeof i=="function"){Ei.callback=null,Tn=Ei.priorityLevel;var s=i(Ei.expirationTime<=n);if(n=Ne.unstable_now(),typeof s=="function"){Ei.callback=s,Ku(n),t=!0;break e}Ei===is(Cs)&&Qu(Cs),Ku(n)}else Qu(Cs);Ei=is(Cs)}if(Ei!==null)t=!0;else{var r=is(fr);r!==null&&Kp(Jp,r.startTime-n),t=!1}}break t}finally{Ei=null,Tn=e,Yp=!1}t=void 0}}finally{t?lo():co=!1}}}var lo;typeof sy=="function"?lo=function(){sy(Xp)}:typeof MessageChannel<"u"?(Wp=new MessageChannel,ry=Wp.port2,Wp.port1.onmessage=Xp,lo=function(){ry.postMessage(null)}):lo=function(){ay(Xp,0)};var Wp,ry;function Kp(n,t){Zl=ay(function(){n(Ne.unstable_now())},t)}Ne.unstable_IdlePriority=5;Ne.unstable_ImmediatePriority=1;Ne.unstable_LowPriority=4;Ne.unstable_NormalPriority=3;Ne.unstable_Profiling=null;Ne.unstable_UserBlockingPriority=2;Ne.unstable_cancelCallback=function(n){n.callback=null};Ne.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ly=0<n?Math.floor(1e3/n):5};Ne.unstable_getCurrentPriorityLevel=function(){return Tn};Ne.unstable_next=function(n){switch(Tn){case 1:case 2:case 3:var t=3;break;default:t=Tn}var e=Tn;Tn=t;try{return n()}finally{Tn=e}};Ne.unstable_requestPaint=function(){Zp=!0};Ne.unstable_runWithPriority=function(n,t){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var e=Tn;Tn=n;try{return t()}finally{Tn=e}};Ne.unstable_scheduleCallback=function(n,t,e){var i=Ne.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?i+e:i):e=i,n){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=e+s,n={id:aA++,callback:t,priorityLevel:n,startTime:e,expirationTime:s,sortIndex:-1},e>i?(n.sortIndex=e,qp(fr,n),is(Cs)===null&&n===is(fr)&&(Yl?(oy(Zl),Zl=-1):Yl=!0,Kp(Jp,e-i))):(n.sortIndex=s,qp(Cs,n),ql||Yp||(ql=!0,co||(co=!0,lo()))),n};Ne.unstable_shouldYield=uy;Ne.unstable_wrapCallback=function(n){var t=Tn;return function(){var e=Tn;Tn=t;try{return n.apply(this,arguments)}finally{Tn=e}}}});var dy=ns((gO,fy)=>{"use strict";fy.exports=hy()});var Ty=ns(Bt=>{"use strict";var $p=Symbol.for("react.transitional.element"),oA=Symbol.for("react.portal"),lA=Symbol.for("react.fragment"),cA=Symbol.for("react.strict_mode"),uA=Symbol.for("react.profiler"),hA=Symbol.for("react.consumer"),fA=Symbol.for("react.context"),dA=Symbol.for("react.forward_ref"),pA=Symbol.for("react.suspense"),mA=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),gA=Symbol.for("react.activity"),py=Symbol.iterator;function _A(n){return n===null||typeof n!="object"?null:(n=py&&n[py]||n["@@iterator"],typeof n=="function"?n:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Sy={};function ho(n,t,e){this.props=n,this.context=t,this.refs=Sy,this.updater=e||yy}ho.prototype.isReactComponent={};ho.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function My(){}My.prototype=ho.prototype;function tm(n,t,e){this.props=n,this.context=t,this.refs=Sy,this.updater=e||yy}var em=tm.prototype=new My;em.constructor=tm;xy(em,ho.prototype);em.isPureReactComponent=!0;var my=Array.isArray;function jp(){}var Ee={H:null,A:null,T:null,S:null},by=Object.prototype.hasOwnProperty;function nm(n,t,e){var i=e.ref;return{$$typeof:$p,type:n,key:t,ref:i!==void 0?i:null,props:e}}function vA(n,t){return nm(n.type,t,n.props)}function im(n){return typeof n=="object"&&n!==null&&n.$$typeof===$p}function yA(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return t[e]})}var gy=/\/+/g;function Qp(n,t){return typeof n=="object"&&n!==null&&n.key!=null?yA(""+n.key):t.toString(36)}function xA(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(jp,jp):(n.status="pending",n.then(function(t){n.status==="pending"&&(n.status="fulfilled",n.value=t)},function(t){n.status==="pending"&&(n.status="rejected",n.reason=t)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function uo(n,t,e,i,s){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case $p:case oA:a=!0;break;case vy:return a=n._init,uo(a(n._payload),t,e,i,s)}}if(a)return s=s(n),a=i===""?"."+Qp(n,0):i,my(s)?(e="",a!=null&&(e=a.replace(gy,"$&/")+"/"),uo(s,t,e,"",function(c){return c})):s!=null&&(im(s)&&(s=vA(s,e+(s.key==null||n&&n.key===s.key?"":(""+s.key).replace(gy,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(my(n))for(var l=0;l<n.length;l++)i=n[l],r=o+Qp(i,l),a+=uo(i,t,e,r,s);else if(l=_A(n),typeof l=="function")for(n=l.call(n),l=0;!(i=n.next()).done;)i=i.value,r=o+Qp(i,l++),a+=uo(i,t,e,r,s);else if(r==="object"){if(typeof n.then=="function")return uo(xA(n),t,e,i,s);throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function ju(n,t,e){if(n==null)return n;var i=[],s=0;return uo(n,i,"","",function(r){return t.call(e,r,s++)}),i}function SA(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var _y=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},MA={map:ju,forEach:function(n,t,e){ju(n,function(){t.apply(this,arguments)},e)},count:function(n){var t=0;return ju(n,function(){t++}),t},toArray:function(n){return ju(n,function(t){return t})||[]},only:function(n){if(!im(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Bt.Activity=gA;Bt.Children=MA;Bt.Component=ho;Bt.Fragment=lA;Bt.Profiler=uA;Bt.PureComponent=tm;Bt.StrictMode=cA;Bt.Suspense=pA;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(n){return Ee.H.useMemoCache(n)}};Bt.cache=function(n){return function(){return n.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(n,t,e){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var i=xy({},n.props),s=n.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!by.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=e;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return nm(n.type,s,i)};Bt.createContext=function(n){return n={$$typeof:fA,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:hA,_context:n},n};Bt.createElement=function(n,t,e){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)by.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=e;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return nm(n,r,s)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(n){return{$$typeof:dA,render:n}};Bt.isValidElement=im;Bt.lazy=function(n){return{$$typeof:vy,_payload:{_status:-1,_result:n},_init:SA}};Bt.memo=function(n,t){return{$$typeof:mA,type:n,compare:t===void 0?null:t}};Bt.startTransition=function(n){var t=Ee.T,e={};Ee.T=e;try{var i=n(),s=Ee.S;s!==null&&s(e,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(jp,_y)}catch(r){_y(r)}finally{t!==null&&e.types!==null&&(t.types=e.types),Ee.T=t}};Bt.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Bt.use=function(n){return Ee.H.use(n)};Bt.useActionState=function(n,t,e){return Ee.H.useActionState(n,t,e)};Bt.useCallback=function(n,t){return Ee.H.useCallback(n,t)};Bt.useContext=function(n){return Ee.H.useContext(n)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(n,t){return Ee.H.useDeferredValue(n,t)};Bt.useEffect=function(n,t){return Ee.H.useEffect(n,t)};Bt.useEffectEvent=function(n){return Ee.H.useEffectEvent(n)};Bt.useId=function(){return Ee.H.useId()};Bt.useImperativeHandle=function(n,t,e){return Ee.H.useImperativeHandle(n,t,e)};Bt.useInsertionEffect=function(n,t){return Ee.H.useInsertionEffect(n,t)};Bt.useLayoutEffect=function(n,t){return Ee.H.useLayoutEffect(n,t)};Bt.useMemo=function(n,t){return Ee.H.useMemo(n,t)};Bt.useOptimistic=function(n,t){return Ee.H.useOptimistic(n,t)};Bt.useReducer=function(n,t,e){return Ee.H.useReducer(n,t,e)};Bt.useRef=function(n){return Ee.H.useRef(n)};Bt.useState=function(n){return Ee.H.useState(n)};Bt.useSyncExternalStore=function(n,t,e){return Ee.H.useSyncExternalStore(n,t,e)};Bt.useTransition=function(){return Ee.H.useTransition()};Bt.version="19.2.8"});var Jl=ns((vO,Ey)=>{"use strict";Ey.exports=Ty()});var wy=ns(Pn=>{"use strict";var bA=Jl();function Ay(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dr(){}var On={d:{f:dr,r:function(){throw Error(Ay(522))},D:dr,C:dr,L:dr,m:dr,X:dr,S:dr,M:dr},p:0,findDOMNode:null},TA=Symbol.for("react.portal");function EA(n,t,e){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:TA,key:i==null?null:""+i,children:n,containerInfo:t,implementation:e}}var Kl=bA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function $u(n,t){if(n==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Pn.createPortal=function(n,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ay(299));return EA(n,t,null,e)};Pn.flushSync=function(n){var t=Kl.T,e=On.p;try{if(Kl.T=null,On.p=2,n)return n()}finally{Kl.T=t,On.p=e,On.d.f()}};Pn.preconnect=function(n,t){typeof n=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,On.d.C(n,t))};Pn.prefetchDNS=function(n){typeof n=="string"&&On.d.D(n)};Pn.preinit=function(n,t){if(typeof n=="string"&&t&&typeof t.as=="string"){var e=t.as,i=$u(e,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;e==="style"?On.d.S(n,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):e==="script"&&On.d.X(n,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Pn.preinitModule=function(n,t){if(typeof n=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var e=$u(t.as,t.crossOrigin);On.d.M(n,{crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&On.d.M(n)};Pn.preload=function(n,t){if(typeof n=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var e=t.as,i=$u(e,t.crossOrigin);On.d.L(n,e,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Pn.preloadModule=function(n,t){if(typeof n=="string")if(t){var e=$u(t.as,t.crossOrigin);On.d.m(n,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:e,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else On.d.m(n)};Pn.requestFormReset=function(n){On.d.r(n)};Pn.unstable_batchedUpdates=function(n,t){return n(t)};Pn.useFormState=function(n,t,e){return Kl.H.useFormState(n,t,e)};Pn.useFormStatus=function(){return Kl.H.useHostTransitionStatus()};Pn.version="19.2.8"});var Dy=ns((xO,Ry)=>{"use strict";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(n){console.error(n)}}Cy(),Ry.exports=wy()});var H1=ns(Ef=>{"use strict";var rn=dy(),nS=Jl(),AA=Dy();function j(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function iS(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ic(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function sS(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function rS(n){if(n.tag===31){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Ny(n){if(Ic(n)!==n)throw Error(j(188))}function wA(n){var t=n.alternate;if(!t){if(t=Ic(n),t===null)throw Error(j(188));return t!==n?null:n}for(var e=n,i=t;;){var s=e.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){e=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===e)return Ny(s),n;if(r===i)return Ny(s),t;r=r.sibling}throw Error(j(188))}if(e.return!==i.return)e=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===e){a=!0,e=s,i=r;break}if(o===i){a=!0,i=s,e=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===e){a=!0,e=r,i=s;break}if(o===i){a=!0,i=r,e=s;break}o=o.sibling}if(!a)throw Error(j(189))}}if(e.alternate!==i)throw Error(j(190))}if(e.tag!==3)throw Error(j(188));return e.stateNode.current===e?n:t}function aS(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=aS(n),t!==null)return t;n=n.sibling}return null}var Ce=Object.assign,CA=Symbol.for("react.element"),th=Symbol.for("react.transitional.element"),sc=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),oS=Symbol.for("react.strict_mode"),Bm=Symbol.for("react.profiler"),lS=Symbol.for("react.consumer"),Is=Symbol.for("react.context"),Ug=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),Fm=Symbol.for("react.suspense_list"),Lg=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Vm=Symbol.for("react.activity"),RA=Symbol.for("react.memo_cache_sentinel"),Uy=Symbol.iterator;function Ql(n){return n===null||typeof n!="object"?null:(n=Uy&&n[Uy]||n["@@iterator"],typeof n=="function"?n:null)}var DA=Symbol.for("react.client.reference");function Gm(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===DA?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case vo:return"Fragment";case Bm:return"Profiler";case oS:return"StrictMode";case zm:return"Suspense";case Fm:return"SuspenseList";case Vm:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case sc:return"Portal";case Is:return n.displayName||"Context";case lS:return(n._context.displayName||"Context")+".Consumer";case Ug:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lg:return t=n.displayName||null,t!==null?t:Gm(n.type)||"Memo";case pr:t=n._payload,n=n._init;try{return Gm(n(t))}catch{}}return null}var rc=Array.isArray,Lt=nS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=AA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ma={pending:!1,data:null,method:null,action:null},Hm=[],yo=-1;function ls(n){return{current:n}}function hn(n){0>yo||(n.current=Hm[yo],Hm[yo]=null,yo--)}function be(n,t){yo++,Hm[yo]=n.current,n.current=t}var os=ls(null),Mc=ls(null),Er=ls(null),Lh=ls(null);function Oh(n,t){switch(be(Er,t),be(Mc,n),be(os,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?Fx(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=Fx(t),n=C1(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}hn(os),be(os,n)}function Bo(){hn(os),hn(Mc),hn(Er)}function km(n){n.memoizedState!==null&&be(Lh,n);var t=os.current,e=C1(t,n.type);t!==e&&(be(Mc,n),be(os,e))}function Ph(n){Mc.current===n&&(hn(os),hn(Mc)),Lh.current===n&&(hn(Lh),Lc._currentValue=Ma)}var sm,Ly;function va(n){if(sm===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);sm=t&&t[1]||"",Ly=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sm+n+Ly}var rm=!1;function am(n,t){if(!n||rm)return"";rm=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(n,[],f)}else{try{f.call()}catch(p){h=p}n.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=n())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=i&&0<=s);break}}}finally{rm=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?va(e):""}function NA(n,t){switch(n.tag){case 26:case 27:case 5:return va(n.type);case 16:return va("Lazy");case 13:return n.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return am(n.type,!1);case 11:return am(n.type.render,!1);case 1:return am(n.type,!0);case 31:return va("Activity");default:return""}}function Oy(n){try{var t="",e=null;do t+=NA(n,e),e=n,n=n.return;while(n);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xm=Object.prototype.hasOwnProperty,Og=rn.unstable_scheduleCallback,om=rn.unstable_cancelCallback,UA=rn.unstable_shouldYield,LA=rn.unstable_requestPaint,li=rn.unstable_now,OA=rn.unstable_getCurrentPriorityLevel,cS=rn.unstable_ImmediatePriority,uS=rn.unstable_UserBlockingPriority,Ih=rn.unstable_NormalPriority,PA=rn.unstable_LowPriority,hS=rn.unstable_IdlePriority,IA=rn.log,BA=rn.unstable_setDisableYieldValue,Bc=null,ci=null;function xr(n){if(typeof IA=="function"&&BA(n),ci&&typeof ci.setStrictMode=="function")try{ci.setStrictMode(Bc,n)}catch{}}var ui=Math.clz32?Math.clz32:VA,zA=Math.log,FA=Math.LN2;function VA(n){return n>>>=0,n===0?32:31-(zA(n)/FA|0)|0}var eh=256,nh=262144,ih=4194304;function ya(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function cf(n,t,e){var i=n.pendingLanes;if(i===0)return 0;var s=0,r=n.suspendedLanes,a=n.pingedLanes;n=n.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=ya(i):(a&=o,a!==0?s=ya(a):e||(e=o&~n,e!==0&&(s=ya(e))))):(o=i&~r,o!==0?s=ya(o):a!==0?s=ya(a):e||(e=i&~n,e!==0&&(s=ya(e)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,e=t&-t,r>=e||r===32&&(e&4194048)!==0)?t:s}function zc(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function GA(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(){var n=ih;return ih<<=1,(ih&62914560)===0&&(ih=4194304),n}function lm(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function Fc(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function HA(n,t,e,i,s,r){var a=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var o=n.entanglements,l=n.expirationTimes,c=n.hiddenUpdates;for(e=a&~e;0<e;){var u=31-ui(e),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}e&=~f}i!==0&&dS(n,i,0),r!==0&&s===0&&n.tag!==0&&(n.suspendedLanes|=r&~(a&~t))}function dS(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var i=31-ui(t);n.entangledLanes|=t,n.entanglements[i]=n.entanglements[i]|1073741824|e&261930}function pS(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var i=31-ui(e),s=1<<i;s&t|n[i]&t&&(n[i]|=t),e&=~s}}function mS(n,t){var e=t&-t;return e=(e&42)!==0?1:Pg(e),(e&(n.suspendedLanes|t))!==0?0:e}function Pg(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ig(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function gS(){var n=ae.p;return n!==0?n:(n=window.event,n===void 0?32:F1(n.type))}function Py(n,t){var e=ae.p;try{return ae.p=n,t()}finally{ae.p=e}}var zr=Math.random().toString(36).slice(2),mn="__reactFiber$"+zr,Yn="__reactProps$"+zr,Zo="__reactContainer$"+zr,Wm="__reactEvents$"+zr,kA="__reactListeners$"+zr,XA="__reactHandles$"+zr,Iy="__reactResources$"+zr,Vc="__reactMarker$"+zr;function Bg(n){delete n[mn],delete n[Yn],delete n[Wm],delete n[kA],delete n[XA]}function xo(n){var t=n[mn];if(t)return t;for(var e=n.parentNode;e;){if(t=e[Zo]||e[mn]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=Xx(n);n!==null;){if(e=n[mn])return e;n=Xx(n)}return t}n=e,e=n.parentNode}return null}function Jo(n){if(n=n[mn]||n[Zo]){var t=n.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return n}return null}function ac(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(j(33))}function Do(n){var t=n[Iy];return t||(t=n[Iy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function un(n){n[Vc]=!0}var _S=new Set,vS={};function Ua(n,t){zo(n,t),zo(n+"Capture",t)}function zo(n,t){for(vS[n]=t,n=0;n<t.length;n++)_S.add(t[n])}var WA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),By={},zy={};function qA(n){return Xm.call(zy,n)?!0:Xm.call(By,n)?!1:WA.test(n)?zy[n]=!0:(By[n]=!0,!1)}function vh(n,t,e){if(qA(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function sh(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function Rs(n,t,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+i)}}function wi(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yS(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function YA(n,t,e){var i=Object.getOwnPropertyDescriptor(n.constructor.prototype,t);if(!n.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){e=""+a,r.call(this,a)}}),Object.defineProperty(n,t,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(a){e=""+a},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function qm(n){if(!n._valueTracker){var t=yS(n)?"checked":"value";n._valueTracker=YA(n,t,""+n[t])}}function xS(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),i="";return n&&(i=yS(n)?n.checked?"true":"false":n.value),n=i,n!==e?(t.setValue(n),!0):!1}function Bh(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ZA=/[\n"\\]/g;function Di(n){return n.replace(ZA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ym(n,t,e,i,s,r,a,o){n.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?n.type=a:n.removeAttribute("type"),t!=null?a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+wi(t)):n.value!==""+wi(t)&&(n.value=""+wi(t)):a!=="submit"&&a!=="reset"||n.removeAttribute("value"),t!=null?Zm(n,a,wi(t)):e!=null?Zm(n,a,wi(e)):i!=null&&n.removeAttribute("value"),s==null&&r!=null&&(n.defaultChecked=!!r),s!=null&&(n.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+wi(o):n.removeAttribute("name")}function SS(n,t,e,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),t!=null||e!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){qm(n);return}e=e!=null?""+wi(e):"",t=t!=null?""+wi(t):e,o||t===n.value||(n.value=t),n.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=o?n.checked:!!i,n.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(n.name=a),qm(n)}function Zm(n,t,e){t==="number"&&Bh(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function No(n,t,e,i){if(n=n.options,t){t={};for(var s=0;s<e.length;s++)t["$"+e[s]]=!0;for(e=0;e<n.length;e++)s=t.hasOwnProperty("$"+n[e].value),n[e].selected!==s&&(n[e].selected=s),s&&i&&(n[e].defaultSelected=!0)}else{for(e=""+wi(e),t=null,s=0;s<n.length;s++){if(n[s].value===e){n[s].selected=!0,i&&(n[s].defaultSelected=!0);return}t!==null||n[s].disabled||(t=n[s])}t!==null&&(t.selected=!0)}}function MS(n,t,e){if(t!=null&&(t=""+wi(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+wi(e):""}function bS(n,t,e,i){if(t==null){if(i!=null){if(e!=null)throw Error(j(92));if(rc(i)){if(1<i.length)throw Error(j(93));i=i[0]}e=i}e==null&&(e=""),t=e}e=wi(t),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i),qm(n)}function Fo(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var JA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fy(n,t,e){var i=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":i?n.setProperty(t,e):typeof e!="number"||e===0||JA.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function TS(n,t,e){if(t!=null&&typeof t!="object")throw Error(j(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&e[s]!==i&&Fy(n,s,i)}else for(var r in t)t.hasOwnProperty(r)&&Fy(n,r,t[r])}function zg(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yh(n){return QA.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Bs(){}var Jm=null;function Fg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var So=null,Uo=null;function Vy(n){var t=Jo(n);if(t&&(n=t.stateNode)){var e=n[Yn]||null;t:switch(n=t.stateNode,t.type){case"input":if(Ym(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Di(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var i=e[t];if(i!==n&&i.form===n.form){var s=i[Yn]||null;if(!s)throw Error(j(90));Ym(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<e.length;t++)i=e[t],i.form===n.form&&xS(i)}break t;case"textarea":MS(n,e.value,e.defaultValue);break t;case"select":t=e.value,t!=null&&No(n,!!e.multiple,t,!1)}}}var cm=!1;function ES(n,t,e){if(cm)return n(t,e);cm=!0;try{var i=n(t);return i}finally{if(cm=!1,(So!==null||Uo!==null)&&(Sf(),So&&(t=So,n=Uo,Uo=So=null,Vy(t),n)))for(t=0;t<n.length;t++)Vy(n[t])}}function bc(n,t){var e=n.stateNode;if(e===null)return null;var i=e[Yn]||null;if(i===null)return null;e=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break t;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(j(231,t,typeof e));return e}var Hs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Km=!1;if(Hs)try{fo={},Object.defineProperty(fo,"passive",{get:function(){Km=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Km=!1}var fo,Sr=null,Vg=null,xh=null;function AS(){if(xh)return xh;var n,t=Vg,e=t.length,i,s="value"in Sr?Sr.value:Sr.textContent,r=s.length;for(n=0;n<e&&t[n]===s[n];n++);var a=e-n;for(i=1;i<=a&&t[e-i]===s[r-i];i++);return xh=s.slice(n,1<i?1-i:void 0)}function Sh(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function rh(){return!0}function Gy(){return!1}function Zn(n){function t(e,i,s,r,a){this._reactName=e,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(e=n[o],this[o]=e?e(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?rh:Gy,this.isPropagationStopped=Gy,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=rh)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=rh)},persist:function(){},isPersistent:rh}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=Zn(La),Gc=Ce({},La,{view:0,detail:0}),jA=Zn(Gc),um,hm,jl,hf=Ce({},Gc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jl&&(jl&&n.type==="mousemove"?(um=n.screenX-jl.screenX,hm=n.screenY-jl.screenY):hm=um=0,jl=n),um)},movementY:function(n){return"movementY"in n?n.movementY:hm}}),Hy=Zn(hf),$A=Ce({},hf,{dataTransfer:0}),tw=Zn($A),ew=Ce({},Gc,{relatedTarget:0}),fm=Zn(ew),nw=Ce({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),iw=Zn(nw),sw=Ce({},La,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rw=Zn(sw),aw=Ce({},La,{data:0}),ky=Zn(aw),ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uw(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=cw[n])?!!t[n]:!1}function Gg(){return uw}var hw=Ce({},Gc,{key:function(n){if(n.key){var t=ow[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Sh(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gg,charCode:function(n){return n.type==="keypress"?Sh(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sh(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fw=Zn(hw),dw=Ce({},hf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xy=Zn(dw),pw=Ce({},Gc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gg}),mw=Zn(pw),gw=Ce({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=Zn(gw),vw=Ce({},hf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Zn(vw),xw=Ce({},La,{newState:0,oldState:0}),Sw=Zn(xw),Mw=[9,13,27,32],Hg=Hs&&"CompositionEvent"in window,cc=null;Hs&&"documentMode"in document&&(cc=document.documentMode);var bw=Hs&&"TextEvent"in window&&!cc,wS=Hs&&(!Hg||cc&&8<cc&&11>=cc),Wy=" ",qy=!1;function CS(n,t){switch(n){case"keyup":return Mw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Mo=!1;function Tw(n,t){switch(n){case"compositionend":return RS(t);case"keypress":return t.which!==32?null:(qy=!0,Wy);case"textInput":return n=t.data,n===Wy&&qy?null:n;default:return null}}function Ew(n,t){if(Mo)return n==="compositionend"||!Hg&&CS(n,t)?(n=AS(),xh=Vg=Sr=null,Mo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wS&&t.locale!=="ko"?null:t.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yy(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!Aw[n.type]:t==="textarea"}function DS(n,t,e,i){So?Uo?Uo.push(i):Uo=[i]:So=i,t=ef(t,"onChange"),0<t.length&&(e=new uf("onChange","change",null,e,i),n.push({event:e,listeners:t}))}var uc=null,Tc=null;function ww(n){E1(n,0)}function ff(n){var t=ac(n);if(xS(t))return n}function Zy(n,t){if(n==="change")return t}var NS=!1;Hs&&(Hs?(oh="oninput"in document,oh||(dm=document.createElement("div"),dm.setAttribute("oninput","return;"),oh=typeof dm.oninput=="function"),ah=oh):ah=!1,NS=ah&&(!document.documentMode||9<document.documentMode));var ah,oh,dm;function Jy(){uc&&(uc.detachEvent("onpropertychange",US),Tc=uc=null)}function US(n){if(n.propertyName==="value"&&ff(Tc)){var t=[];DS(t,Tc,n,Fg(n)),ES(ww,t)}}function Cw(n,t,e){n==="focusin"?(Jy(),uc=t,Tc=e,uc.attachEvent("onpropertychange",US)):n==="focusout"&&Jy()}function Rw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ff(Tc)}function Dw(n,t){if(n==="click")return ff(t)}function Nw(n,t){if(n==="input"||n==="change")return ff(t)}function Uw(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var fi=typeof Object.is=="function"?Object.is:Uw;function Ec(n,t){if(fi(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),i=Object.keys(t);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var s=e[i];if(!Xm.call(t,s)||!fi(n[s],t[s]))return!1}return!0}function Ky(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qy(n,t){var e=Ky(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=t&&i>=t)return{node:e,offset:t-n};n=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Ky(e)}}function LS(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?LS(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function OS(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Bh(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Bh(n.document)}return t}function kg(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var Lw=Hs&&"documentMode"in document&&11>=document.documentMode,bo=null,Qm=null,hc=null,jm=!1;function jy(n,t,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;jm||bo==null||bo!==Bh(i)||(i=bo,"selectionStart"in i&&kg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),hc&&Ec(hc,i)||(hc=i,i=ef(Qm,"onSelect"),0<i.length&&(t=new uf("onSelect","select",null,t,e),n.push({event:t,listeners:i}),t.target=bo)))}function _a(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var To={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},pm={},PS={};Hs&&(PS=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Oa(n){if(pm[n])return pm[n];if(!To[n])return n;var t=To[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in PS)return pm[n]=t[e];return n}var IS=Oa("animationend"),BS=Oa("animationiteration"),zS=Oa("animationstart"),Ow=Oa("transitionrun"),Pw=Oa("transitionstart"),Iw=Oa("transitioncancel"),FS=Oa("transitionend"),VS=new Map,$m="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$m.push("scrollEnd");function Wi(n,t){VS.set(n,t),Ua(t,[n])}var zh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ai=[],Eo=0,Xg=0;function df(){for(var n=Eo,t=Xg=Eo=0;t<n;){var e=Ai[t];Ai[t++]=null;var i=Ai[t];Ai[t++]=null;var s=Ai[t];Ai[t++]=null;var r=Ai[t];if(Ai[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&GS(e,s,r)}}function pf(n,t,e,i){Ai[Eo++]=n,Ai[Eo++]=t,Ai[Eo++]=e,Ai[Eo++]=i,Xg|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Wg(n,t,e,i){return pf(n,t,e,i),Fh(n)}function Pa(n,t){return pf(n,null,null,t),Fh(n)}function GS(n,t,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var s=!1,r=n.return;r!==null;)r.childLanes|=e,i=r.alternate,i!==null&&(i.childLanes|=e),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(s=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,s&&t!==null&&(s=31-ui(e),n=r.hiddenUpdates,i=n[s],i===null?n[s]=[t]:i.push(t),t.lane=e|536870912),r):null}function Fh(n){if(50<xc)throw xc=0,xg=null,Error(j(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var Ao={};function Bw(n,t,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,t,e,i){return new Bw(n,t,e,i)}function qg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fs(n,t){var e=n.alternate;return e===null?(e=ai(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function HS(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function Mh(n,t,e,i,s,r){var a=0;if(i=n,typeof n=="function")qg(n)&&(a=1);else if(typeof n=="string")a=VC(n,e,os.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case Vm:return n=ai(31,e,t,s),n.elementType=Vm,n.lanes=r,n;case vo:return ba(e.children,s,r,t);case oS:a=8,s|=24;break;case Bm:return n=ai(12,e,t,s|2),n.elementType=Bm,n.lanes=r,n;case zm:return n=ai(13,e,t,s),n.elementType=zm,n.lanes=r,n;case Fm:return n=ai(19,e,t,s),n.elementType=Fm,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Is:a=10;break t;case lS:a=9;break t;case Ug:a=11;break t;case Lg:a=14;break t;case pr:a=16,i=null;break t}a=29,e=Error(j(130,n===null?"null":typeof n,"")),i=null}return t=ai(a,e,t,s),t.elementType=n,t.type=i,t.lanes=r,t}function ba(n,t,e,i){return n=ai(7,n,i,t),n.lanes=e,n}function mm(n,t,e){return n=ai(6,n,null,t),n.lanes=e,n}function kS(n){var t=ai(18,null,null,0);return t.stateNode=n,t}function gm(n,t,e){return t=ai(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var $y=new WeakMap;function Ni(n,t){if(typeof n=="object"&&n!==null){var e=$y.get(n);return e!==void 0?e:(t={value:n,source:t,stack:Oy(t)},$y.set(n,t),t)}return{value:n,source:t,stack:Oy(t)}}var wo=[],Co=0,Vh=null,Ac=0,Ci=[],Ri=0,Or=null,ss=1,rs="";function Os(n,t){wo[Co++]=Ac,wo[Co++]=Vh,Vh=n,Ac=t}function XS(n,t,e){Ci[Ri++]=ss,Ci[Ri++]=rs,Ci[Ri++]=Or,Or=n;var i=ss;n=rs;var s=32-ui(i)-1;i&=~(1<<s),e+=1;var r=32-ui(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,ss=1<<32-ui(t)+s|e<<s|i,rs=r+n}else ss=1<<r|e<<s|i,rs=n}function Yg(n){n.return!==null&&(Os(n,1),XS(n,1,0))}function Zg(n){for(;n===Vh;)Vh=wo[--Co],wo[Co]=null,Ac=wo[--Co],wo[Co]=null;for(;n===Or;)Or=Ci[--Ri],Ci[Ri]=null,rs=Ci[--Ri],Ci[Ri]=null,ss=Ci[--Ri],Ci[Ri]=null}function WS(n,t){Ci[Ri++]=ss,Ci[Ri++]=rs,Ci[Ri++]=Or,ss=t.id,rs=t.overflow,Or=n}var gn=null,we=null,ee=!1,Ar=null,Ui=!1,tg=Error(j(519));function Pr(n){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wc(Ni(t,n)),tg}function tx(n){var t=n.stateNode,e=n.type,i=n.memoizedProps;switch(t[mn]=n,t[Yn]=i,e){case"dialog":qt("cancel",t),qt("close",t);break;case"iframe":case"object":case"embed":qt("load",t);break;case"video":case"audio":for(e=0;e<Nc.length;e++)qt(Nc[e],t);break;case"source":qt("error",t);break;case"img":case"image":case"link":qt("error",t),qt("load",t);break;case"details":qt("toggle",t);break;case"input":qt("invalid",t),SS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":qt("invalid",t);break;case"textarea":qt("invalid",t),bS(t,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||i.suppressHydrationWarning===!0||w1(t.textContent,e)?(i.popover!=null&&(qt("beforetoggle",t),qt("toggle",t)),i.onScroll!=null&&qt("scroll",t),i.onScrollEnd!=null&&qt("scrollend",t),i.onClick!=null&&(t.onclick=Bs),t=!0):t=!1,t||Pr(n,!0)}function ex(n){for(gn=n.return;gn;)switch(gn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:gn=gn.return}}function po(n){if(n!==gn)return!1;if(!ee)return ex(n),ee=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Eg(n.type,n.memoizedProps)),e=!e),e&&we&&Pr(n),ex(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(317));we=kx(n)}else if(t===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(317));we=kx(n)}else t===27?(t=we,Fr(n.type)?(n=Rg,Rg=null,we=n):we=t):we=gn?Oi(n.stateNode.nextSibling):null;return!0}function wa(){we=gn=null,ee=!1}function _m(){var n=Ar;return n!==null&&(Wn===null?Wn=n:Wn.push.apply(Wn,n),Ar=null),n}function wc(n){Ar===null?Ar=[n]:Ar.push(n)}var eg=ls(null),Ia=null,zs=null;function gr(n,t,e){be(eg,t._currentValue),t._currentValue=e}function Vs(n){n._currentValue=eg.current,hn(eg)}function ng(n,t,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===e)break;n=n.return}}function ig(n,t,e,i){var s=n.child;for(s!==null&&(s.return=n);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=e,o=r.alternate,o!==null&&(o.lanes|=e),ng(r.return,e,n),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(j(341));a.lanes|=e,r=a.alternate,r!==null&&(r.lanes|=e),ng(a,e,n),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===n){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Ko(n,t,e,i){n=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(j(387));if(a=a.memoizedProps,a!==null){var o=s.type;fi(s.pendingProps.value,a.value)||(n!==null?n.push(o):n=[o])}}else if(s===Lh.current){if(a=s.alternate,a===null)throw Error(j(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(n!==null?n.push(Lc):n=[Lc])}s=s.return}n!==null&&ig(t,n,e,i),t.flags|=262144}function Gh(n){for(n=n.firstContext;n!==null;){if(!fi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ca(n){Ia=n,zs=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function _n(n){return qS(Ia,n)}function lh(n,t){return Ia===null&&Ca(n),qS(n,t)}function qS(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},zs===null){if(n===null)throw Error(j(308));zs=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else zs=zs.next=t;return e}var zw=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},Fw=rn.unstable_scheduleCallback,Vw=rn.unstable_NormalPriority,tn={$$typeof:Is,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jg(){return{controller:new zw,data:new Map,refCount:0}}function Hc(n){n.refCount--,n.refCount===0&&Fw(Vw,function(){n.controller.abort()})}var fc=null,sg=0,Vo=0,Lo=null;function Gw(n,t){if(fc===null){var e=fc=[];sg=0,Vo=x0(),Lo={status:"pending",value:void 0,then:function(i){e.push(i)}}}return sg++,t.then(nx,nx),t}function nx(){if(--sg===0&&fc!==null){Lo!==null&&(Lo.status="fulfilled");var n=fc;fc=null,Vo=0,Lo=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Hw(n,t){var e=[],i={status:"pending",value:null,reason:null,then:function(s){e.push(s)}};return n.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<e.length;s++)(0,e[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<e.length;s++)(0,e[s])(void 0)}),i}var ix=Lt.S;Lt.S=function(n,t){a1=li(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gw(n,t),ix!==null&&ix(n,t)};var Ta=ls(null);function Kg(){var n=Ta.current;return n!==null?n:ve.pooledCache}function bh(n,t){t===null?be(Ta,Ta.current):be(Ta,t.pool)}function YS(){var n=Kg();return n===null?null:{parent:tn._currentValue,pool:n}}var Qo=Error(j(460)),Qg=Error(j(474)),mf=Error(j(542)),Hh={then:function(){}};function sx(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ZS(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(Bs,Bs),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,ax(n),n;default:if(typeof t.status=="string")t.then(Bs,Bs);else{if(n=ve,n!==null&&100<n.shellSuspendCounter)throw Error(j(482));n=t,n.status="pending",n.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,ax(n),n}throw Ea=t,Qo}}function xa(n){try{var t=n._init;return t(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ea=e,Qo):e}}var Ea=null;function rx(){if(Ea===null)throw Error(j(459));var n=Ea;return Ea=null,n}function ax(n){if(n===Qo||n===mf)throw Error(j(483))}var Oo=null,Cc=0;function ch(n){var t=Cc;return Cc+=1,Oo===null&&(Oo=[]),ZS(Oo,n,t)}function $l(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function uh(n,t){throw t.$$typeof===CA?Error(j(525)):(n=Object.prototype.toString.call(t),Error(j(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function JS(n){function t(d,v){if(n){var S=d.deletions;S===null?(d.deletions=[v],d.flags|=16):S.push(v)}}function e(d,v){if(!n)return null;for(;v!==null;)t(d,v),v=v.sibling;return null}function i(d){for(var v=new Map;d!==null;)d.key!==null?v.set(d.key,d):v.set(d.index,d),d=d.sibling;return v}function s(d,v){return d=Fs(d,v),d.index=0,d.sibling=null,d}function r(d,v,S){return d.index=S,n?(S=d.alternate,S!==null?(S=S.index,S<v?(d.flags|=67108866,v):S):(d.flags|=67108866,v)):(d.flags|=1048576,v)}function a(d){return n&&d.alternate===null&&(d.flags|=67108866),d}function o(d,v,S,y){return v===null||v.tag!==6?(v=mm(S,d.mode,y),v.return=d,v):(v=s(v,S),v.return=d,v)}function l(d,v,S,y){var b=S.type;return b===vo?u(d,v,S.props.children,y,S.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pr&&xa(b)===v.type)?(v=s(v,S.props),$l(v,S),v.return=d,v):(v=Mh(S.type,S.key,S.props,null,d.mode,y),$l(v,S),v.return=d,v)}function c(d,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=gm(S,d.mode,y),v.return=d,v):(v=s(v,S.children||[]),v.return=d,v)}function u(d,v,S,y,b){return v===null||v.tag!==7?(v=ba(S,d.mode,y,b),v.return=d,v):(v=s(v,S),v.return=d,v)}function f(d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=mm(""+v,d.mode,S),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case th:return S=Mh(v.type,v.key,v.props,null,d.mode,S),$l(S,v),S.return=d,S;case sc:return v=gm(v,d.mode,S),v.return=d,v;case pr:return v=xa(v),f(d,v,S)}if(rc(v)||Ql(v))return v=ba(v,d.mode,S,null),v.return=d,v;if(typeof v.then=="function")return f(d,ch(v),S);if(v.$$typeof===Is)return f(d,lh(d,v),S);uh(d,v)}return null}function h(d,v,S,y){var b=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return b!==null?null:o(d,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case th:return S.key===b?l(d,v,S,y):null;case sc:return S.key===b?c(d,v,S,y):null;case pr:return S=xa(S),h(d,v,S,y)}if(rc(S)||Ql(S))return b!==null?null:u(d,v,S,y,null);if(typeof S.then=="function")return h(d,v,ch(S),y);if(S.$$typeof===Is)return h(d,v,lh(d,S),y);uh(d,S)}return null}function p(d,v,S,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return d=d.get(S)||null,o(v,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case th:return d=d.get(y.key===null?S:y.key)||null,l(v,d,y,b);case sc:return d=d.get(y.key===null?S:y.key)||null,c(v,d,y,b);case pr:return y=xa(y),p(d,v,S,y,b)}if(rc(y)||Ql(y))return d=d.get(S)||null,u(v,d,y,b,null);if(typeof y.then=="function")return p(d,v,S,ch(y),b);if(y.$$typeof===Is)return p(d,v,S,lh(v,y),b);uh(v,y)}return null}function g(d,v,S,y){for(var b=null,E=null,A=v,x=v=0,T=null;A!==null&&x<S.length;x++){A.index>x?(T=A,A=null):T=A.sibling;var R=h(d,A,S[x],y);if(R===null){A===null&&(A=T);break}n&&A&&R.alternate===null&&t(d,A),v=r(R,v,x),E===null?b=R:E.sibling=R,E=R,A=T}if(x===S.length)return e(d,A),ee&&Os(d,x),b;if(A===null){for(;x<S.length;x++)A=f(d,S[x],y),A!==null&&(v=r(A,v,x),E===null?b=A:E.sibling=A,E=A);return ee&&Os(d,x),b}for(A=i(A);x<S.length;x++)T=p(A,d,x,S[x],y),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?x:T.key),v=r(T,v,x),E===null?b=T:E.sibling=T,E=T);return n&&A.forEach(function(D){return t(d,D)}),ee&&Os(d,x),b}function _(d,v,S,y){if(S==null)throw Error(j(151));for(var b=null,E=null,A=v,x=v=0,T=null,R=S.next();A!==null&&!R.done;x++,R=S.next()){A.index>x?(T=A,A=null):T=A.sibling;var D=h(d,A,R.value,y);if(D===null){A===null&&(A=T);break}n&&A&&D.alternate===null&&t(d,A),v=r(D,v,x),E===null?b=D:E.sibling=D,E=D,A=T}if(R.done)return e(d,A),ee&&Os(d,x),b;if(A===null){for(;!R.done;x++,R=S.next())R=f(d,R.value,y),R!==null&&(v=r(R,v,x),E===null?b=R:E.sibling=R,E=R);return ee&&Os(d,x),b}for(A=i(A);!R.done;x++,R=S.next())R=p(A,d,x,R.value,y),R!==null&&(n&&R.alternate!==null&&A.delete(R.key===null?x:R.key),v=r(R,v,x),E===null?b=R:E.sibling=R,E=R);return n&&A.forEach(function(N){return t(d,N)}),ee&&Os(d,x),b}function m(d,v,S,y){if(typeof S=="object"&&S!==null&&S.type===vo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case th:t:{for(var b=S.key;v!==null;){if(v.key===b){if(b=S.type,b===vo){if(v.tag===7){e(d,v.sibling),y=s(v,S.props.children),y.return=d,d=y;break t}}else if(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pr&&xa(b)===v.type){e(d,v.sibling),y=s(v,S.props),$l(y,S),y.return=d,d=y;break t}e(d,v);break}else t(d,v);v=v.sibling}S.type===vo?(y=ba(S.props.children,d.mode,y,S.key),y.return=d,d=y):(y=Mh(S.type,S.key,S.props,null,d.mode,y),$l(y,S),y.return=d,d=y)}return a(d);case sc:t:{for(b=S.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){e(d,v.sibling),y=s(v,S.children||[]),y.return=d,d=y;break t}else{e(d,v);break}else t(d,v);v=v.sibling}y=gm(S,d.mode,y),y.return=d,d=y}return a(d);case pr:return S=xa(S),m(d,v,S,y)}if(rc(S))return g(d,v,S,y);if(Ql(S)){if(b=Ql(S),typeof b!="function")throw Error(j(150));return S=b.call(S),_(d,v,S,y)}if(typeof S.then=="function")return m(d,v,ch(S),y);if(S.$$typeof===Is)return m(d,v,lh(d,S),y);uh(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(e(d,v.sibling),y=s(v,S),y.return=d,d=y):(e(d,v),y=mm(S,d.mode,y),y.return=d,d=y),a(d)):e(d,v)}return function(d,v,S,y){try{Cc=0;var b=m(d,v,S,y);return Oo=null,b}catch(A){if(A===Qo||A===mf)throw A;var E=ai(29,A,null,d.mode);return E.lanes=y,E.return=d,E}}}var Ra=JS(!0),KS=JS(!1),mr=!1;function jg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rg(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function wr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Cr(n,t,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Fh(n),GS(n,null,e),t}return pf(n,i,t,e),Fh(n)}function dc(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,pS(n,e)}}function vm(n,t){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var s=null,r=null;if(e=e.firstBaseUpdate,e!==null){do{var a={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,e=e.next}while(e!==null);r===null?s=r=t:r=r.next=t}else s=r=t;e={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var ag=!1;function pc(){if(ag){var n=Lo;if(n!==null)throw n}}function mc(n,t,e,i){ag=!1;var s=n.updateQueue;mr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var f=s.baseState;a=0,u=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?($t&h)===h:(i&h)===h){h!==0&&h===Vo&&(ag=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=n,_=o;h=t;var m=e;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(m,f,h);break t}f=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break t;f=Ce({},f,h);break t;case 2:mr=!0}}h=o.callback,h!==null&&(n.flags|=64,p&&(n.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),Br|=a,n.lanes=a,n.memoizedState=f}}function QS(n,t){if(typeof n!="function")throw Error(j(191,n));n.call(t)}function jS(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)QS(e[n],t)}var Go=ls(null),kh=ls(0);function ox(n,t){n=qs,be(kh,n),be(Go,t),qs=n|t.baseLanes}function og(){be(kh,qs),be(Go,Go.current)}function $g(){qs=kh.current,hn(Go),hn(kh)}var di=ls(null),Li=null;function _r(n){var t=n.alternate;be(Je,Je.current&1),be(di,n),Li===null&&(t===null||Go.current!==null||t.memoizedState!==null)&&(Li=n)}function lg(n){be(Je,Je.current),be(di,n),Li===null&&(Li=n)}function $S(n){n.tag===22?(be(Je,Je.current),be(di,n),Li===null&&(Li=n)):vr(n)}function vr(){be(Je,Je.current),be(di,di.current)}function ri(n){hn(di),Li===n&&(Li=null),hn(Je)}var Je=ls(0);function Xh(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||wg(e)||Cg(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=0,Vt=null,me=null,je=null,Wh=!1,Po=!1,Da=!1,qh=0,Rc=0,Io=null,kw=0;function He(){throw Error(j(321))}function t0(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!fi(n[e],t[e]))return!1;return!0}function e0(n,t,e,i,s,r){return ks=r,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=n===null||n.memoizedState===null?DM:f0,Da=!1,r=e(i,s),Da=!1,Po&&(r=eM(t,e,i,s)),tM(n),r}function tM(n){Lt.H=Dc;var t=me!==null&&me.next!==null;if(ks=0,je=me=Vt=null,Wh=!1,Rc=0,Io=null,t)throw Error(j(300));n===null||en||(n=n.dependencies,n!==null&&Gh(n)&&(en=!0))}function eM(n,t,e,i){Vt=n;var s=0;do{if(Po&&(Io=null),Rc=0,Po=!1,25<=s)throw Error(j(301));if(s+=1,je=me=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Lt.H=NM,r=t(e,i)}while(Po);return r}function Xw(){var n=Lt.H,t=n.useState()[0];return t=typeof t.then=="function"?kc(t):t,n=n.useState()[0],(me!==null?me.memoizedState:null)!==n&&(Vt.flags|=1024),t}function n0(){var n=qh!==0;return qh=0,n}function i0(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function s0(n){if(Wh){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}Wh=!1}ks=0,je=me=Vt=null,Po=!1,Rc=qh=0,Io=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Vt.memoizedState=je=n:je=je.next=n,je}function Ke(){if(me===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=me.next;var t=je===null?Vt.memoizedState:je.next;if(t!==null)je=t,me=n;else{if(n===null)throw Vt.alternate===null?Error(j(467)):Error(j(310));me=n,n={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},je===null?Vt.memoizedState=je=n:je=je.next=n}return je}function gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kc(n){var t=Rc;return Rc+=1,Io===null&&(Io=[]),n=ZS(Io,n,t),t=Vt,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?DM:f0),n}function _f(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return kc(n);if(n.$$typeof===Is)return _n(n)}throw Error(j(438,String(n)))}function r0(n){var t=null,e=Vt.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=gf(),Vt.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),i=0;i<n;i++)e[i]=RA;return t.index++,e}function Xs(n,t){return typeof t=="function"?t(n):t}function Th(n){var t=Ke();return a0(t,me,n)}function a0(n,t,e){var i=n.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=e;var s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=n.baseState,s===null)n.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?($t&f)===f:(ks&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Vo&&(u=!0);else if((ks&h)===h){c=c.next,h===Vo&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Vt.lanes|=h,Br|=h;f=c.action,Da&&e(r,f),r=c.hasEagerState?c.eagerState:e(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Vt.lanes|=f,Br|=f;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!fi(r,n.memoizedState)&&(en=!0,u&&(e=Lo,e!==null)))throw e;n.memoizedState=r,n.baseState=a,n.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function ym(n){var t=Ke(),e=t.queue;if(e===null)throw Error(j(311));e.lastRenderedReducer=n;var i=e.dispatch,s=e.pending,r=t.memoizedState;if(s!==null){e.pending=null;var a=s=s.next;do r=n(r,a.action),a=a.next;while(a!==s);fi(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),e.lastRenderedState=r}return[r,i]}function nM(n,t,e){var i=Vt,s=Ke(),r=ee;if(r){if(e===void 0)throw Error(j(407));e=e()}else e=t();var a=!fi((me||s).memoizedState,e);if(a&&(s.memoizedState=e,en=!0),s=s.queue,o0(rM.bind(null,i,s,n),[n]),s.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,Ho(9,{destroy:void 0},sM.bind(null,i,s,e,t),null),ve===null)throw Error(j(349));r||(ks&127)!==0||iM(i,t,e)}return e}function iM(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=Vt.updateQueue,t===null?(t=gf(),Vt.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function sM(n,t,e,i){t.value=e,t.getSnapshot=i,aM(t)&&oM(n)}function rM(n,t,e){return e(function(){aM(t)&&oM(n)})}function aM(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!fi(n,e)}catch{return!0}}function oM(n){var t=Pa(n,2);t!==null&&qn(t,n,2)}function cg(n){var t=In();if(typeof n=="function"){var e=n;if(n=e(),Da){xr(!0);try{e()}finally{xr(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:n},t}function lM(n,t,e,i){return n.baseState=e,a0(n,me,typeof i=="function"?i:Xs)}function Ww(n,t,e,i,s){if(yf(n))throw Error(j(485));if(n=t.action,n!==null){var r={payload:s,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Lt.T!==null?e(!0):r.isTransition=!1,i(r),e=t.pending,e===null?(r.next=t.pending=r,cM(t,r)):(r.next=e.next,t.pending=e.next=r)}}function cM(n,t){var e=t.action,i=t.payload,s=n.state;if(t.isTransition){var r=Lt.T,a={};Lt.T=a;try{var o=e(s,i),l=Lt.S;l!==null&&l(a,o),lx(n,t,o)}catch(c){ug(n,t,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Lt.T=r}}else try{r=e(s,i),lx(n,t,r)}catch(c){ug(n,t,c)}}function lx(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){cx(n,t,i)},function(i){return ug(n,t,i)}):cx(n,t,e)}function cx(n,t,e){t.status="fulfilled",t.value=e,uM(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,cM(n,e)))}function ug(n,t,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=e,uM(t),t=t.next;while(t!==i)}n.action=null}function uM(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function hM(n,t){return t}function ux(n,t){if(ee){var e=ve.formState;if(e!==null){t:{var i=Vt;if(ee){if(we){e:{for(var s=we,r=Ui;s.nodeType!==8;){if(!r){s=null;break e}if(s=Oi(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){we=Oi(s.nextSibling),i=s.data==="F!";break t}}Pr(i)}i=!1}i&&(t=e[0])}}return e=In(),e.memoizedState=e.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hM,lastRenderedState:t},e.queue=i,e=wM.bind(null,Vt,i),i.dispatch=e,i=cg(!1),r=h0.bind(null,Vt,!1,i.queue),i=In(),s={state:t,dispatch:null,action:n,pending:null},i.queue=s,e=Ww.bind(null,Vt,s,r,e),s.dispatch=e,i.memoizedState=n,[t,e,!1]}function hx(n){var t=Ke();return fM(t,me,n)}function fM(n,t,e){if(t=a0(n,t,hM)[0],n=Th(Xs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=kc(t)}catch(a){throw a===Qo?mf:a}else i=t;t=Ke();var s=t.queue,r=s.dispatch;return e!==t.memoizedState&&(Vt.flags|=2048,Ho(9,{destroy:void 0},qw.bind(null,s,e),null)),[i,r,n]}function qw(n,t){n.action=t}function fx(n){var t=Ke(),e=me;if(e!==null)return fM(t,e,n);Ke(),t=t.memoizedState,e=Ke();var i=e.queue.dispatch;return e.memoizedState=n,[t,i,!1]}function Ho(n,t,e,i){return n={tag:n,create:e,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=gf(),Vt.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,t.lastEffect=n),n}function dM(){return Ke().memoizedState}function Eh(n,t,e,i){var s=In();Vt.flags|=n,s.memoizedState=Ho(1|t,{destroy:void 0},e,i===void 0?null:i)}function vf(n,t,e,i){var s=Ke();i=i===void 0?null:i;var r=s.memoizedState.inst;me!==null&&i!==null&&t0(i,me.memoizedState.deps)?s.memoizedState=Ho(t,r,e,i):(Vt.flags|=n,s.memoizedState=Ho(1|t,r,e,i))}function dx(n,t){Eh(8390656,8,n,t)}function o0(n,t){vf(2048,8,n,t)}function Yw(n){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=gf(),Vt.updateQueue=t,t.events=[n];else{var e=t.events;e===null?t.events=[n]:e.push(n)}}function pM(n){var t=Ke().memoizedState;return Yw({ref:t,nextImpl:n}),function(){if((re&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function mM(n,t){return vf(4,2,n,t)}function gM(n,t){return vf(4,4,n,t)}function _M(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function vM(n,t,e){e=e!=null?e.concat([n]):null,vf(4,4,_M.bind(null,t,n),e)}function l0(){}function yM(n,t){var e=Ke();t=t===void 0?null:t;var i=e.memoizedState;return t!==null&&t0(t,i[1])?i[0]:(e.memoizedState=[n,t],n)}function xM(n,t){var e=Ke();t=t===void 0?null:t;var i=e.memoizedState;if(t!==null&&t0(t,i[1]))return i[0];if(i=n(),Da){xr(!0);try{n()}finally{xr(!1)}}return e.memoizedState=[i,t],i}function c0(n,t,e){return e===void 0||(ks&1073741824)!==0&&($t&261930)===0?n.memoizedState=t:(n.memoizedState=e,n=l1(),Vt.lanes|=n,Br|=n,e)}function SM(n,t,e,i){return fi(e,t)?e:Go.current!==null?(n=c0(n,e,i),fi(n,t)||(en=!0),n):(ks&42)===0||(ks&1073741824)!==0&&($t&261930)===0?(en=!0,n.memoizedState=e):(n=l1(),Vt.lanes|=n,Br|=n,t)}function MM(n,t,e,i,s){var r=ae.p;ae.p=r!==0&&8>r?r:8;var a=Lt.T,o={};Lt.T=o,h0(n,!1,t,e);try{var l=s(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=Hw(l,i);gc(n,t,u,hi(n))}else gc(n,t,i,hi(n))}catch(f){gc(n,t,{then:function(){},status:"rejected",reason:f},hi())}finally{ae.p=r,a!==null&&o.types!==null&&(a.types=o.types),Lt.T=a}}function Zw(){}function hg(n,t,e,i){if(n.tag!==5)throw Error(j(476));var s=bM(n).queue;MM(n,s,t,Ma,e===null?Zw:function(){return TM(n),e(i)})}function bM(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Ma,baseState:Ma,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:Ma},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function TM(n){var t=bM(n);t.next===null&&(t=n.alternate.memoizedState),gc(n,t.next.queue,{},hi())}function u0(){return _n(Lc)}function EM(){return Ke().memoizedState}function AM(){return Ke().memoizedState}function Jw(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=hi();n=wr(e);var i=Cr(t,n,e);i!==null&&(qn(i,t,e),dc(i,t,e)),t={cache:Jg()},n.payload=t;return}t=t.return}}function Kw(n,t,e){var i=hi();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},yf(n)?CM(t,e):(e=Wg(n,t,e,i),e!==null&&(qn(e,n,i),RM(e,t,i)))}function wM(n,t,e){var i=hi();gc(n,t,e,i)}function gc(n,t,e,i){var s={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(yf(n))CM(t,s);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,e);if(s.hasEagerState=!0,s.eagerState=o,fi(o,a))return pf(n,t,s,0),ve===null&&df(),!1}catch{}if(e=Wg(n,t,s,i),e!==null)return qn(e,n,i),RM(e,t,i),!0}return!1}function h0(n,t,e,i){if(i={lane:2,revertLane:x0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},yf(n)){if(t)throw Error(j(479))}else t=Wg(n,e,i,2),t!==null&&qn(t,n,2)}function yf(n){var t=n.alternate;return n===Vt||t!==null&&t===Vt}function CM(n,t){Po=Wh=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function RM(n,t,e){if((e&4194048)!==0){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,pS(n,e)}}var Dc={readContext:_n,use:_f,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Dc.useEffectEvent=He;var DM={readContext:_n,use:_f,useCallback:function(n,t){return In().memoizedState=[n,t===void 0?null:t],n},useContext:_n,useEffect:dx,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Eh(4194308,4,_M.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Eh(4194308,4,n,t)},useInsertionEffect:function(n,t){Eh(4,2,n,t)},useMemo:function(n,t){var e=In();t=t===void 0?null:t;var i=n();if(Da){xr(!0);try{n()}finally{xr(!1)}}return e.memoizedState=[i,t],i},useReducer:function(n,t,e){var i=In();if(e!==void 0){var s=e(t);if(Da){xr(!0);try{e(t)}finally{xr(!1)}}}else s=t;return i.memoizedState=i.baseState=s,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},i.queue=n,n=n.dispatch=Kw.bind(null,Vt,n),[i.memoizedState,n]},useRef:function(n){var t=In();return n={current:n},t.memoizedState=n},useState:function(n){n=cg(n);var t=n.queue,e=wM.bind(null,Vt,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:l0,useDeferredValue:function(n,t){var e=In();return c0(e,n,t)},useTransition:function(){var n=cg(!1);return n=MM.bind(null,Vt,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var i=Vt,s=In();if(ee){if(e===void 0)throw Error(j(407));e=e()}else{if(e=t(),ve===null)throw Error(j(349));($t&127)!==0||iM(i,t,e)}s.memoizedState=e;var r={value:e,getSnapshot:t};return s.queue=r,dx(rM.bind(null,i,r,n),[n]),i.flags|=2048,Ho(9,{destroy:void 0},sM.bind(null,i,r,e,t),null),e},useId:function(){var n=In(),t=ve.identifierPrefix;if(ee){var e=rs,i=ss;e=(i&~(1<<32-ui(i)-1)).toString(32)+e,t="_"+t+"R_"+e,e=qh++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=kw++,t="_"+t+"r_"+e.toString(32)+"_";return n.memoizedState=t},useHostTransitionStatus:u0,useFormState:ux,useActionState:ux,useOptimistic:function(n){var t=In();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=h0.bind(null,Vt,!0,e),e.dispatch=t,[n,t]},useMemoCache:r0,useCacheRefresh:function(){return In().memoizedState=Jw.bind(null,Vt)},useEffectEvent:function(n){var t=In(),e={impl:n};return t.memoizedState=e,function(){if((re&2)!==0)throw Error(j(440));return e.impl.apply(void 0,arguments)}}},f0={readContext:_n,use:_f,useCallback:yM,useContext:_n,useEffect:o0,useImperativeHandle:vM,useInsertionEffect:mM,useLayoutEffect:gM,useMemo:xM,useReducer:Th,useRef:dM,useState:function(){return Th(Xs)},useDebugValue:l0,useDeferredValue:function(n,t){var e=Ke();return SM(e,me.memoizedState,n,t)},useTransition:function(){var n=Th(Xs)[0],t=Ke().memoizedState;return[typeof n=="boolean"?n:kc(n),t]},useSyncExternalStore:nM,useId:EM,useHostTransitionStatus:u0,useFormState:hx,useActionState:hx,useOptimistic:function(n,t){var e=Ke();return lM(e,me,n,t)},useMemoCache:r0,useCacheRefresh:AM};f0.useEffectEvent=pM;var NM={readContext:_n,use:_f,useCallback:yM,useContext:_n,useEffect:o0,useImperativeHandle:vM,useInsertionEffect:mM,useLayoutEffect:gM,useMemo:xM,useReducer:ym,useRef:dM,useState:function(){return ym(Xs)},useDebugValue:l0,useDeferredValue:function(n,t){var e=Ke();return me===null?c0(e,n,t):SM(e,me.memoizedState,n,t)},useTransition:function(){var n=ym(Xs)[0],t=Ke().memoizedState;return[typeof n=="boolean"?n:kc(n),t]},useSyncExternalStore:nM,useId:EM,useHostTransitionStatus:u0,useFormState:fx,useActionState:fx,useOptimistic:function(n,t){var e=Ke();return me!==null?lM(e,me,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:r0,useCacheRefresh:AM};NM.useEffectEvent=pM;function xm(n,t,e,i){t=n.memoizedState,e=e(i,t),e=e==null?t:Ce({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var fg={enqueueSetState:function(n,t,e){n=n._reactInternals;var i=hi(),s=wr(i);s.payload=t,e!=null&&(s.callback=e),t=Cr(n,s,i),t!==null&&(qn(t,n,i),dc(t,n,i))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var i=hi(),s=wr(i);s.tag=1,s.payload=t,e!=null&&(s.callback=e),t=Cr(n,s,i),t!==null&&(qn(t,n,i),dc(t,n,i))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=hi(),i=wr(e);i.tag=2,t!=null&&(i.callback=t),t=Cr(n,i,e),t!==null&&(qn(t,n,e),dc(t,n,e))}};function px(n,t,e,i,s,r,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!Ec(e,i)||!Ec(s,r):!0}function mx(n,t,e,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,i),t.state!==n&&fg.enqueueReplaceState(t,t.state,null)}function Na(n,t){var e=t;if("ref"in t){e={};for(var i in t)i!=="ref"&&(e[i]=t[i])}if(n=n.defaultProps){e===t&&(e=Ce({},e));for(var s in n)e[s]===void 0&&(e[s]=n[s])}return e}function UM(n){zh(n)}function LM(n){console.error(n)}function OM(n){zh(n)}function Yh(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function gx(n,t,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function dg(n,t,e){return e=wr(e),e.tag=3,e.payload={element:null},e.callback=function(){Yh(n,t)},e}function PM(n){return n=wr(n),n.tag=3,n}function IM(n,t,e,i){var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;n.payload=function(){return s(r)},n.callback=function(){gx(t,e,i)}}var a=e.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gx(t,e,i),typeof s!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Qw(n,t,e,i,s){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=e.alternate,t!==null&&Ko(t,e,s,!0),e=di.current,e!==null){switch(e.tag){case 31:case 13:return Li===null?jh():e.alternate===null&&ke===0&&(ke=3),e.flags&=-257,e.flags|=65536,e.lanes=s,i===Hh?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([i]):t.add(i),Nm(n,i,s)),!1;case 22:return e.flags|=65536,i===Hh?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([i]):e.add(i)),Nm(n,i,s)),!1}throw Error(j(435,e.tag))}return Nm(n,i,s),jh(),!1}if(ee)return t=di.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==tg&&(n=Error(j(422),{cause:i}),wc(Ni(n,e)))):(i!==tg&&(t=Error(j(423),{cause:i}),wc(Ni(t,e))),n=n.current.alternate,n.flags|=65536,s&=-s,n.lanes|=s,i=Ni(i,e),s=dg(n.stateNode,i,s),vm(n,s),ke!==4&&(ke=2)),!1;var r=Error(j(520),{cause:i});if(r=Ni(r,e),yc===null?yc=[r]:yc.push(r),ke!==4&&(ke=2),t===null)return!0;i=Ni(i,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=s&-s,e.lanes|=n,n=dg(e.stateNode,i,n),vm(e,n),!1;case 1:if(t=e.type,r=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))))return e.flags|=65536,s&=-s,e.lanes|=s,s=PM(s),IM(s,n,e,i),vm(e,s),!1}e=e.return}while(e!==null);return!1}var d0=Error(j(461)),en=!1;function pn(n,t,e,i){t.child=n===null?KS(t,null,e,i):Ra(t,n.child,e,i)}function _x(n,t,e,i,s){e=e.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Ca(t),i=e0(n,t,e,a,r,s),o=n0(),n!==null&&!en?(i0(n,t,s),Ws(n,t,s)):(ee&&o&&Yg(t),t.flags|=1,pn(n,t,i,s),t.child)}function vx(n,t,e,i,s){if(n===null){var r=e.type;return typeof r=="function"&&!qg(r)&&r.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=r,BM(n,t,r,i,s)):(n=Mh(e.type,null,i,t,t.mode,s),n.ref=t.ref,n.return=t,t.child=n)}if(r=n.child,!p0(n,s)){var a=r.memoizedProps;if(e=e.compare,e=e!==null?e:Ec,e(a,i)&&n.ref===t.ref)return Ws(n,t,s)}return t.flags|=1,n=Fs(r,i),n.ref=t.ref,n.return=t,t.child=n}function BM(n,t,e,i,s){if(n!==null){var r=n.memoizedProps;if(Ec(r,i)&&n.ref===t.ref)if(en=!1,t.pendingProps=i=r,p0(n,s))(n.flags&131072)!==0&&(en=!0);else return t.lanes=n.lanes,Ws(n,t,s)}return pg(n,t,e,i,s)}function zM(n,t,e,i){var s=i.children,r=n!==null?n.memoizedState:null;if(n===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|e:e,n!==null){for(i=t.child=n.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return yx(n,t,r,e,i)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&bh(t,r!==null?r.cachePool:null),r!==null?ox(t,r):og(),$S(t);else return i=t.lanes=536870912,yx(n,t,r!==null?r.baseLanes|e:e,e,i)}else r!==null?(bh(t,r.cachePool),ox(t,r),vr(t),t.memoizedState=null):(n!==null&&bh(t,null),og(),vr(t));return pn(n,t,s,e),t.child}function oc(n,t){return n!==null&&n.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yx(n,t,e,i,s){var r=Kg();return r=r===null?null:{parent:tn._currentValue,pool:r},t.memoizedState={baseLanes:e,cachePool:r},n!==null&&bh(t,null),og(),$S(t),n!==null&&Ko(n,t,i,!0),t.childLanes=s,null}function Ah(n,t){return t=Zh({mode:t.mode,children:t.children},n.mode),t.ref=n.ref,n.child=t,t.return=n,t}function xx(n,t,e){return Ra(t,n.child,null,e),n=Ah(t,t.pendingProps),n.flags|=2,ri(t),t.memoizedState=null,n}function jw(n,t,e){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,n===null){if(ee){if(i.mode==="hidden")return n=Ah(t,i),t.lanes=536870912,oc(null,n);if(lg(t),(n=we)?(n=D1(n,Ui),n=n!==null&&n.data==="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:Or!==null?{id:ss,overflow:rs}:null,retryLane:536870912,hydrationErrors:null},e=kS(n),e.return=t,t.child=e,gn=t,we=null)):n=null,n===null)throw Pr(t);return t.lanes=536870912,null}return Ah(t,i)}var r=n.memoizedState;if(r!==null){var a=r.dehydrated;if(lg(t),s)if(t.flags&256)t.flags&=-257,t=xx(n,t,e);else if(t.memoizedState!==null)t.child=n.child,t.flags|=128,t=null;else throw Error(j(558));else if(en||Ko(n,t,e,!1),s=(e&n.childLanes)!==0,en||s){if(i=ve,i!==null&&(a=mS(i,e),a!==0&&a!==r.retryLane))throw r.retryLane=a,Pa(n,a),qn(i,n,a),d0;jh(),t=xx(n,t,e)}else n=r.treeContext,we=Oi(a.nextSibling),gn=t,ee=!0,Ar=null,Ui=!1,n!==null&&WS(t,n),t=Ah(t,i),t.flags|=4096;return t}return n=Fs(n.child,{mode:i.mode,children:i.children}),n.ref=t.ref,t.child=n,n.return=t,n}function wh(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(j(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function pg(n,t,e,i,s){return Ca(t),e=e0(n,t,e,i,void 0,s),i=n0(),n!==null&&!en?(i0(n,t,s),Ws(n,t,s)):(ee&&i&&Yg(t),t.flags|=1,pn(n,t,e,s),t.child)}function Sx(n,t,e,i,s,r){return Ca(t),t.updateQueue=null,e=eM(t,i,e,s),tM(n),i=n0(),n!==null&&!en?(i0(n,t,r),Ws(n,t,r)):(ee&&i&&Yg(t),t.flags|=1,pn(n,t,e,r),t.child)}function Mx(n,t,e,i,s){if(Ca(t),t.stateNode===null){var r=Ao,a=e.contextType;typeof a=="object"&&a!==null&&(r=_n(a)),r=new e(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fg,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},jg(t),a=e.contextType,r.context=typeof a=="object"&&a!==null?_n(a):Ao,r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(xm(t,e,a,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&fg.enqueueReplaceState(r,r.state,null),mc(t,i,r,s),pc(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(n===null){r=t.stateNode;var o=t.memoizedProps,l=Na(e,o);r.props=l;var c=r.context,u=e.contextType;a=Ao,typeof u=="object"&&u!==null&&(a=_n(u));var f=e.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&mx(t,r,i,a),mr=!1;var h=t.memoizedState;r.state=h,mc(t,i,r,s),pc(),c=t.memoizedState,o||h!==c||mr?(typeof f=="function"&&(xm(t,e,f,i),c=t.memoizedState),(l=mr||px(t,e,l,i,h,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,rg(n,t),a=t.memoizedProps,u=Na(e,a),r.props=u,f=t.pendingProps,h=r.context,c=e.contextType,l=Ao,typeof c=="object"&&c!==null&&(l=_n(c)),o=e.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==f||h!==l)&&mx(t,r,i,l),mr=!1,h=t.memoizedState,r.state=h,mc(t,i,r,s),pc();var p=t.memoizedState;a!==f||h!==p||mr||n!==null&&n.dependencies!==null&&Gh(n.dependencies)?(typeof o=="function"&&(xm(t,e,o,i),p=t.memoizedState),(u=mr||px(t,e,u,i,h,p,l)||n!==null&&n.dependencies!==null&&Gh(n.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(t.flags|=1024),i=!1)}return r=i,wh(n,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,n!==null&&i?(t.child=Ra(t,n.child,null,s),t.child=Ra(t,null,e,s)):pn(n,t,e,s),t.memoizedState=r.state,n=t.child):n=Ws(n,t,s),n}function bx(n,t,e,i){return wa(),t.flags|=256,pn(n,t,e,i),t.child}var Sm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mm(n){return{baseLanes:n,cachePool:YS()}}function bm(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=oi),n}function FM(n,t,e){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=n!==null&&n.memoizedState===null?!1:(Je.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,n===null){if(ee){if(s?_r(t):vr(t),(n=we)?(n=D1(n,Ui),n=n!==null&&n.data!=="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:Or!==null?{id:ss,overflow:rs}:null,retryLane:536870912,hydrationErrors:null},e=kS(n),e.return=t,t.child=e,gn=t,we=null)):n=null,n===null)throw Pr(t);return Cg(n)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(vr(t),s=t.mode,o=Zh({mode:"hidden",children:o},s),i=ba(i,s,e,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Mm(e),i.childLanes=bm(n,a,e),t.memoizedState=Sm,oc(null,i)):(_r(t),mg(t,o))}var l=n.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(_r(t),t.flags&=-257,t=Tm(n,t,e)):t.memoizedState!==null?(vr(t),t.child=n.child,t.flags|=128,t=null):(vr(t),o=i.fallback,s=t.mode,i=Zh({mode:"visible",children:i.children},s),o=ba(o,s,e,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ra(t,n.child,null,e),i=t.child,i.memoizedState=Mm(e),i.childLanes=bm(n,a,e),t.memoizedState=Sm,t=oc(null,i));else if(_r(t),Cg(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(j(419)),i.stack="",i.digest=a,wc({value:i,source:null,stack:null}),t=Tm(n,t,e)}else if(en||Ko(n,t,e,!1),a=(e&n.childLanes)!==0,en||a){if(a=ve,a!==null&&(i=mS(a,e),i!==0&&i!==l.retryLane))throw l.retryLane=i,Pa(n,i),qn(a,n,i),d0;wg(o)||jh(),t=Tm(n,t,e)}else wg(o)?(t.flags|=192,t.child=n.child,t=null):(n=l.treeContext,we=Oi(o.nextSibling),gn=t,ee=!0,Ar=null,Ui=!1,n!==null&&WS(t,n),t=mg(t,i.children),t.flags|=4096);return t}return s?(vr(t),o=i.fallback,s=t.mode,l=n.child,c=l.sibling,i=Fs(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Fs(c,o):(o=ba(o,s,e,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,oc(null,i),i=t.child,o=n.child.memoizedState,o===null?o=Mm(e):(s=o.cachePool,s!==null?(l=tn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=YS(),o={baseLanes:o.baseLanes|e,cachePool:s}),i.memoizedState=o,i.childLanes=bm(n,a,e),t.memoizedState=Sm,oc(n.child,i)):(_r(t),e=n.child,n=e.sibling,e=Fs(e,{mode:"visible",children:i.children}),e.return=t,e.sibling=null,n!==null&&(a=t.deletions,a===null?(t.deletions=[n],t.flags|=16):a.push(n)),t.child=e,t.memoizedState=null,e)}function mg(n,t){return t=Zh({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Zh(n,t){return n=ai(22,n,null,t),n.lanes=0,n}function Tm(n,t,e){return Ra(t,n.child,null,e),n=mg(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Tx(n,t,e){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),ng(n.return,t,e)}function Em(n,t,e,i,s,r){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=e,a.tailMode=s,a.treeForkCount=r)}function VM(n,t,e){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Je.current,o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,be(Je,a),pn(n,t,i,e),i=ee?Ac:0,!o&&n!==null&&(n.flags&128)!==0)t:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tx(n,e,t);else if(n.tag===19)Tx(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(s){case"forwards":for(e=t.child,s=null;e!==null;)n=e.alternate,n!==null&&Xh(n)===null&&(s=e),e=e.sibling;e=s,e===null?(s=t.child,t.child=null):(s=e.sibling,e.sibling=null),Em(t,!1,s,e,r,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,s=t.child,t.child=null;s!==null;){if(n=s.alternate,n!==null&&Xh(n)===null){t.child=s;break}n=s.sibling,s.sibling=e,e=s,s=n}Em(t,!0,e,null,r,i);break;case"together":Em(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ws(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),Br|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(Ko(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(j(153));if(t.child!==null){for(n=t.child,e=Fs(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=Fs(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function p0(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&Gh(n)))}function $w(n,t,e){switch(t.tag){case 3:Oh(t,t.stateNode.containerInfo),gr(t,tn,n.memoizedState.cache),wa();break;case 27:case 5:km(t);break;case 4:Oh(t,t.stateNode.containerInfo);break;case 10:gr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lg(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_r(t),t.flags|=128,null):(e&t.child.childLanes)!==0?FM(n,t,e):(_r(t),n=Ws(n,t,e),n!==null?n.sibling:null);_r(t);break;case 19:var s=(n.flags&128)!==0;if(i=(e&t.childLanes)!==0,i||(Ko(n,t,e,!1),i=(e&t.childLanes)!==0),s){if(i)return VM(n,t,e);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Je,Je.current),i)break;return null;case 22:return t.lanes=0,zM(n,t,e,t.pendingProps);case 24:gr(t,tn,n.memoizedState.cache)}return Ws(n,t,e)}function GM(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)en=!0;else{if(!p0(n,e)&&(t.flags&128)===0)return en=!1,$w(n,t,e);en=(n.flags&131072)!==0}else en=!1,ee&&(t.flags&1048576)!==0&&XS(t,Ac,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(n=xa(t.elementType),t.type=n,typeof n=="function")qg(n)?(i=Na(n,i),t.tag=1,t=Mx(null,t,n,i,e)):(t.tag=0,t=pg(null,t,n,i,e));else{if(n!=null){var s=n.$$typeof;if(s===Ug){t.tag=11,t=_x(null,t,n,i,e);break t}else if(s===Lg){t.tag=14,t=vx(null,t,n,i,e);break t}}throw t=Gm(n)||n,Error(j(306,t,""))}}return t;case 0:return pg(n,t,t.type,t.pendingProps,e);case 1:return i=t.type,s=Na(i,t.pendingProps),Mx(n,t,i,s,e);case 3:t:{if(Oh(t,t.stateNode.containerInfo),n===null)throw Error(j(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,rg(n,t),mc(t,i,null,e);var a=t.memoizedState;if(i=a.cache,gr(t,tn,i),i!==r.cache&&ig(t,[tn],e,!0),pc(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=bx(n,t,i,e);break t}else if(i!==s){s=Ni(Error(j(424)),t),wc(s),t=bx(n,t,i,e);break t}else for(n=t.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,we=Oi(n.firstChild),gn=t,ee=!0,Ar=null,Ui=!0,e=KS(t,null,i,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(wa(),i===s){t=Ws(n,t,e);break t}pn(n,t,i,e)}t=t.child}return t;case 26:return wh(n,t),n===null?(e=qx(t.type,null,t.pendingProps,null))?t.memoizedState=e:ee||(e=t.type,n=t.pendingProps,i=nf(Er.current).createElement(e),i[mn]=t,i[Yn]=n,vn(i,e,n),un(i),t.stateNode=i):t.memoizedState=qx(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return km(t),n===null&&ee&&(i=t.stateNode=N1(t.type,t.pendingProps,Er.current),gn=t,Ui=!0,s=we,Fr(t.type)?(Rg=s,we=Oi(i.firstChild)):we=s),pn(n,t,t.pendingProps.children,e),wh(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&ee&&((s=i=we)&&(i=wC(i,t.type,t.pendingProps,Ui),i!==null?(t.stateNode=i,gn=t,we=Oi(i.firstChild),Ui=!1,s=!0):s=!1),s||Pr(t)),km(t),s=t.type,r=t.pendingProps,a=n!==null?n.memoizedProps:null,i=r.children,Eg(s,r)?i=null:a!==null&&Eg(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=e0(n,t,Xw,null,null,e),Lc._currentValue=s),wh(n,t),pn(n,t,i,e),t.child;case 6:return n===null&&ee&&((n=e=we)&&(e=CC(e,t.pendingProps,Ui),e!==null?(t.stateNode=e,gn=t,we=null,n=!0):n=!1),n||Pr(t)),null;case 13:return FM(n,t,e);case 4:return Oh(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=Ra(t,null,i,e):pn(n,t,i,e),t.child;case 11:return _x(n,t,t.type,t.pendingProps,e);case 7:return pn(n,t,t.pendingProps,e),t.child;case 8:return pn(n,t,t.pendingProps.children,e),t.child;case 12:return pn(n,t,t.pendingProps.children,e),t.child;case 10:return i=t.pendingProps,gr(t,t.type,i.value),pn(n,t,i.children,e),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ca(t),s=_n(s),i=i(s),t.flags|=1,pn(n,t,i,e),t.child;case 14:return vx(n,t,t.type,t.pendingProps,e);case 15:return BM(n,t,t.type,t.pendingProps,e);case 19:return VM(n,t,e);case 31:return jw(n,t,e);case 22:return zM(n,t,e,t.pendingProps);case 24:return Ca(t),i=_n(tn),n===null?(s=Kg(),s===null&&(s=ve,r=Jg(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=e),s=r),t.memoizedState={parent:i,cache:s},jg(t),gr(t,tn,s)):((n.lanes&e)!==0&&(rg(n,t),mc(t,null,null,e),pc()),s=n.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),gr(t,tn,i)):(i=r.cache,gr(t,tn,i),i!==s.cache&&ig(t,[tn],e,!0))),pn(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Ds(n){n.flags|=4}function Am(n,t,e,i,s){if((t=(n.mode&32)!==0)&&(t=!1),t){if(n.flags|=16777216,(s&335544128)===s)if(n.stateNode.complete)n.flags|=8192;else if(h1())n.flags|=8192;else throw Ea=Hh,Qg}else n.flags&=-16777217}function Ex(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!O1(t))if(h1())n.flags|=8192;else throw Ea=Hh,Qg}function hh(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?fS():536870912,n.lanes|=t,ko|=t)}function tc(n,t){if(!ee)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ae(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(t)for(var s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=n,s=s.sibling;else for(s=n.child;s!==null;)e|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=n,s=s.sibling;return n.subtreeFlags|=i,n.childLanes=e,t}function tC(n,t,e){var i=t.pendingProps;switch(Zg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return e=t.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Vs(tn),Bo(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(po(t)?Ds(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_m())),Ae(t),null;case 26:var s=t.type,r=t.memoizedState;return n===null?(Ds(t),r!==null?(Ae(t),Ex(t,r)):(Ae(t),Am(t,s,null,i,e))):r?r!==n.memoizedState?(Ds(t),Ae(t),Ex(t,r)):(Ae(t),t.flags&=-16777217):(n=n.memoizedProps,n!==i&&Ds(t),Ae(t),Am(t,s,n,i,e)),null;case 27:if(Ph(t),e=Er.current,s=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ae(t),null}n=os.current,po(t)?tx(t,n):(n=N1(s,i,e),t.stateNode=n,Ds(t))}return Ae(t),null;case 5:if(Ph(t),s=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ae(t),null}if(r=os.current,po(t))tx(t,r);else{var a=nf(Er.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[mn]=t,r[Yn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(vn(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ds(t)}}return Ae(t),Am(t,t.type,n===null?null:n.memoizedProps,t.pendingProps,e),null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==i&&Ds(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(n=Er.current,po(t)){if(n=t.stateNode,e=t.memoizedProps,i=null,s=gn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}n[mn]=t,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||w1(n.nodeValue,e)),n||Pr(t,!0)}else n=nf(n).createTextNode(i),n[mn]=t,t.stateNode=n}return Ae(t),null;case 31:if(e=t.memoizedState,n===null||n.memoizedState!==null){if(i=po(t),e!==null){if(n===null){if(!i)throw Error(j(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(557));n[mn]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),n=!1}else e=_m(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return t.flags&256?(ri(t),t):(ri(t),null);if((t.flags&128)!==0)throw Error(j(558))}return Ae(t),null;case 13:if(i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(s=po(t),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[mn]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else s=_m(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ri(t),t):(ri(t),null)}return ri(t),(t.flags&128)!==0?(t.lanes=e,t):(e=i!==null,n=n!==null&&n.memoizedState!==null,e&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),e!==n&&e&&(t.child.flags|=8192),hh(t,t.updateQueue),Ae(t),null);case 4:return Bo(),n===null&&S0(t.stateNode.containerInfo),Ae(t),null;case 10:return Vs(t.type),Ae(t),null;case 19:if(hn(Je),i=t.memoizedState,i===null)return Ae(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)tc(i,!1);else{if(ke!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(r=Xh(n),r!==null){for(t.flags|=128,tc(i,!1),n=r.updateQueue,t.updateQueue=n,hh(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)HS(e,n),e=e.sibling;return be(Je,Je.current&1|2),ee&&Os(t,i.treeForkCount),t.child}n=n.sibling}i.tail!==null&&li()>Kh&&(t.flags|=128,s=!0,tc(i,!1),t.lanes=4194304)}else{if(!s)if(n=Xh(r),n!==null){if(t.flags|=128,s=!0,n=n.updateQueue,t.updateQueue=n,hh(t,n),tc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ee)return Ae(t),null}else 2*li()-i.renderingStartTime>Kh&&e!==536870912&&(t.flags|=128,s=!0,tc(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(n=i.last,n!==null?n.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=li(),n.sibling=null,e=Je.current,be(Je,s?e&1|2:e&1),ee&&Os(t,i.treeForkCount),n):(Ae(t),null);case 22:case 23:return ri(t),$g(),i=t.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(e&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),e=t.updateQueue,e!==null&&hh(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==e&&(t.flags|=2048),n!==null&&hn(Ta),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Vs(tn),Ae(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function eC(n,t){switch(Zg(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Vs(tn),Bo(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ph(t),null;case 31:if(t.memoizedState!==null){if(ri(t),t.alternate===null)throw Error(j(340));wa()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 13:if(ri(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(j(340));wa()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return hn(Je),null;case 4:return Bo(),null;case 10:return Vs(t.type),null;case 22:case 23:return ri(t),$g(),n!==null&&hn(Ta),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Vs(tn),null;case 25:return null;default:return null}}function HM(n,t){switch(Zg(t),t.tag){case 3:Vs(tn),Bo();break;case 26:case 27:case 5:Ph(t);break;case 4:Bo();break;case 31:t.memoizedState!==null&&ri(t);break;case 13:ri(t);break;case 19:hn(Je);break;case 10:Vs(t.type);break;case 22:case 23:ri(t),$g(),n!==null&&hn(Ta);break;case 24:Vs(tn)}}function Xc(n,t){try{var e=t.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var s=i.next;e=s;do{if((e.tag&n)===n){i=void 0;var r=e.create,a=e.inst;i=r(),a.destroy=i}e=e.next}while(e!==s)}}catch(o){he(t,t.return,o)}}function Ir(n,t,e){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&n)===n){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=e,c=o;try{c()}catch(u){he(s,l,u)}}}i=i.next}while(i!==r)}}catch(u){he(t,t.return,u)}}function kM(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{jS(t,e)}catch(i){he(n,n.return,i)}}}function XM(n,t,e){e.props=Na(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){he(n,t,i)}}function _c(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof e=="function"?n.refCleanup=e(i):e.current=i}}catch(s){he(n,t,s)}}function as(n,t){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(s){he(n,t,s)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(s){he(n,t,s)}else e.current=null}function WM(n){var t=n.type,e=n.memoizedProps,i=n.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(s){he(n,n.return,s)}}function wm(n,t,e){try{var i=n.stateNode;SC(i,n.type,e,t),i[Yn]=t}catch(s){he(n,n.return,s)}}function qM(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Fr(n.type)||n.tag===4}function Cm(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||qM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Fr(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gg(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Bs));else if(i!==4&&(i===27&&Fr(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(gg(n,t,e),n=n.sibling;n!==null;)gg(n,t,e),n=n.sibling}function Jh(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(i!==4&&(i===27&&Fr(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Jh(n,t,e),n=n.sibling;n!==null;)Jh(n,t,e),n=n.sibling}function YM(n){var t=n.stateNode,e=n.memoizedProps;try{for(var i=n.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);vn(t,i,e),t[mn]=n,t[Yn]=e}catch(r){he(n,n.return,r)}}var Ps=!1,$e=!1,Rm=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,cn=null;function nC(n,t){if(n=n.containerInfo,bg=of,n=OS(n),kg(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else t:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{e.nodeType,r.nodeType}catch{e=null;break t}var a=0,o=-1,l=-1,c=0,u=0,f=n,h=null;e:for(;;){for(var p;f!==e||s!==0&&f.nodeType!==3||(o=a+s),f!==r||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break e;if(h===e&&++c===s&&(o=a),h===r&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}e=o===-1||l===-1?null:{start:o,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(Tg={focusedElem:n,selectionRange:e},of=!1,cn=t;cn!==null;)if(t=cn,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,cn=n;else for(;cn!==null;){switch(t=cn,r=t.alternate,n=t.flags,t.tag){case 0:if((n&4)!==0&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)s=n[e],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&r!==null){n=void 0,e=t,s=r.memoizedProps,r=r.memoizedState,i=e.stateNode;try{var g=Na(e.type,s);n=i.getSnapshotBeforeUpdate(g,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(_){he(e,e.return,_)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)Ag(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ag(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(j(163))}if(n=t.sibling,n!==null){n.return=t.return,cn=n;break}cn=t.return}}function ZM(n,t,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Us(n,e),i&4&&Xc(5,e);break;case 1:if(Us(n,e),i&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(a){he(e,e.return,a)}else{var s=Na(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(s,t,n.__reactInternalSnapshotBeforeUpdate)}catch(a){he(e,e.return,a)}}i&64&&kM(e),i&512&&_c(e,e.return);break;case 3:if(Us(n,e),i&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{jS(n,t)}catch(a){he(e,e.return,a)}}break;case 27:t===null&&i&4&&YM(e);case 26:case 5:Us(n,e),t===null&&i&4&&WM(e),i&512&&_c(e,e.return);break;case 12:Us(n,e);break;case 31:Us(n,e),i&4&&QM(n,e);break;case 13:Us(n,e),i&4&&jM(n,e),i&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=hC.bind(null,e),RC(n,e))));break;case 22:if(i=e.memoizedState!==null||Ps,!i){t=t!==null&&t.memoizedState!==null||$e,s=Ps;var r=$e;Ps=i,($e=t)&&!r?Ls(n,e,(e.subtreeFlags&8772)!==0):Us(n,e),Ps=s,$e=r}break;case 30:break;default:Us(n,e)}}function JM(n){var t=n.alternate;t!==null&&(n.alternate=null,JM(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Bg(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ue=null,Xn=!1;function Ns(n,t,e){for(e=e.child;e!==null;)KM(n,t,e),e=e.sibling}function KM(n,t,e){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(Bc,e)}catch{}switch(e.tag){case 26:$e||as(e,t),Ns(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:$e||as(e,t);var i=Ue,s=Xn;Fr(e.type)&&(Ue=e.stateNode,Xn=!1),Ns(n,t,e),Sc(e.stateNode),Ue=i,Xn=s;break;case 5:$e||as(e,t);case 6:if(i=Ue,s=Xn,Ue=null,Ns(n,t,e),Ue=i,Xn=s,Ue!==null)if(Xn)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(e.stateNode)}catch(r){he(e,t,r)}else try{Ue.removeChild(e.stateNode)}catch(r){he(e,t,r)}break;case 18:Ue!==null&&(Xn?(n=Ue,Gx(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Yo(n)):Gx(Ue,e.stateNode));break;case 4:i=Ue,s=Xn,Ue=e.stateNode.containerInfo,Xn=!0,Ns(n,t,e),Ue=i,Xn=s;break;case 0:case 11:case 14:case 15:Ir(2,e,t),$e||Ir(4,e,t),Ns(n,t,e);break;case 1:$e||(as(e,t),i=e.stateNode,typeof i.componentWillUnmount=="function"&&XM(e,t,i)),Ns(n,t,e);break;case 21:Ns(n,t,e);break;case 22:$e=(i=$e)||e.memoizedState!==null,Ns(n,t,e),$e=i;break;default:Ns(n,t,e)}}function QM(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Yo(n)}catch(e){he(t,t.return,e)}}}function jM(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Yo(n)}catch(e){he(t,t.return,e)}}function iC(n){switch(n.tag){case 31:case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new Ax),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new Ax),t;default:throw Error(j(435,n.tag))}}function fh(n,t){var e=iC(n);t.forEach(function(i){if(!e.has(i)){e.add(i);var s=fC.bind(null,n,i);i.then(s,s)}})}function Hn(n,t){var e=t.deletions;if(e!==null)for(var i=0;i<e.length;i++){var s=e[i],r=n,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(Fr(o.type)){Ue=o.stateNode,Xn=!1;break t}break;case 5:Ue=o.stateNode,Xn=!1;break t;case 3:case 4:Ue=o.stateNode.containerInfo,Xn=!0;break t}o=o.return}if(Ue===null)throw Error(j(160));KM(r,a,s),Ue=null,Xn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$M(t,n),t=t.sibling}var Xi=null;function $M(n,t){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Hn(t,n),kn(n),i&4&&(Ir(3,n,n.return),Xc(3,n),Ir(5,n,n.return));break;case 1:Hn(t,n),kn(n),i&512&&($e||e===null||as(e,e.return)),i&64&&Ps&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var s=Xi;if(Hn(t,n),kn(n),i&512&&($e||e===null||as(e,e.return)),i&4){var r=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){t:{i=n.type,e=n.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Vc]||r[mn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),vn(r,i,e),r[mn]=n,un(r),i=r;break t;case"link":var a=Zx("link","href",s).get(i+(e.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&r.getAttribute("rel")===(e.rel==null?null:e.rel)&&r.getAttribute("title")===(e.title==null?null:e.title)&&r.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),vn(r,i,e),s.head.appendChild(r);break;case"meta":if(a=Zx("meta","content",s).get(i+(e.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(e.content==null?null:""+e.content)&&r.getAttribute("name")===(e.name==null?null:e.name)&&r.getAttribute("property")===(e.property==null?null:e.property)&&r.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&r.getAttribute("charset")===(e.charSet==null?null:e.charSet)){a.splice(o,1);break e}}r=s.createElement(i),vn(r,i,e),s.head.appendChild(r);break;default:throw Error(j(468,i))}r[mn]=n,un(r),i=r}n.stateNode=i}else Jx(s,n.type,n.stateNode);else n.stateNode=Yx(s,i,n.memoizedProps);else r!==i?(r===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):r.count--,i===null?Jx(s,n.type,n.stateNode):Yx(s,i,n.memoizedProps)):i===null&&n.stateNode!==null&&wm(n,n.memoizedProps,e.memoizedProps)}break;case 27:Hn(t,n),kn(n),i&512&&($e||e===null||as(e,e.return)),e!==null&&i&4&&wm(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Hn(t,n),kn(n),i&512&&($e||e===null||as(e,e.return)),n.flags&32){s=n.stateNode;try{Fo(s,"")}catch(g){he(n,n.return,g)}}i&4&&n.stateNode!=null&&(s=n.memoizedProps,wm(n,s,e!==null?e.memoizedProps:s)),i&1024&&(Rm=!0);break;case 6:if(Hn(t,n),kn(n),i&4){if(n.stateNode===null)throw Error(j(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(g){he(n,n.return,g)}}break;case 3:if(Dh=null,s=Xi,Xi=sf(t.containerInfo),Hn(t,n),Xi=s,kn(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(g){he(n,n.return,g)}Rm&&(Rm=!1,t1(n));break;case 4:i=Xi,Xi=sf(n.stateNode.containerInfo),Hn(t,n),kn(n),Xi=i;break;case 12:Hn(t,n),kn(n);break;case 31:Hn(t,n),kn(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,fh(n,i)));break;case 13:Hn(t,n),kn(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(xf=li()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,fh(n,i)));break;case 22:s=n.memoizedState!==null;var l=e!==null&&e.memoizedState!==null,c=Ps,u=$e;if(Ps=c||s,$e=u||l,Hn(t,n),$e=u,Ps=c,kn(n),i&8192)t:for(t=n.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(e===null||l||Ps||$e||Sa(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){l=e=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(g){he(l,l.return,g)}}}else if(t.tag===6){if(e===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){he(l,l.return,g)}}}else if(t.tag===18){if(e===null){l=t;try{var p=l.stateNode;s?Hx(p,!0):Hx(l.stateNode,!1)}catch(g){he(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,fh(n,e))));break;case 19:Hn(t,n),kn(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,fh(n,i)));break;case 30:break;case 21:break;default:Hn(t,n),kn(n)}}function kn(n){var t=n.flags;if(t&2){try{for(var e,i=n.return;i!==null;){if(qM(i)){e=i;break}i=i.return}if(e==null)throw Error(j(160));switch(e.tag){case 27:var s=e.stateNode,r=Cm(n);Jh(n,r,s);break;case 5:var a=e.stateNode;e.flags&32&&(Fo(a,""),e.flags&=-33);var o=Cm(n);Jh(n,o,a);break;case 3:case 4:var l=e.stateNode.containerInfo,c=Cm(n);gg(n,c,l);break;default:throw Error(j(161))}}catch(u){he(n,n.return,u)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function t1(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;t1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function Us(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ZM(n,t.alternate,t),t=t.sibling}function Sa(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:Ir(4,t,t.return),Sa(t);break;case 1:as(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&XM(t,t.return,e),Sa(t);break;case 27:Sc(t.stateNode);case 26:case 5:as(t,t.return),Sa(t);break;case 22:t.memoizedState===null&&Sa(t);break;case 30:Sa(t);break;default:Sa(t)}n=n.sibling}}function Ls(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=n,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:Ls(s,r,e),Xc(4,r);break;case 1:if(Ls(s,r,e),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){he(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)QS(l[s],o)}catch(c){he(i,i.return,c)}}e&&a&64&&kM(r),_c(r,r.return);break;case 27:YM(r);case 26:case 5:Ls(s,r,e),e&&i===null&&a&4&&WM(r),_c(r,r.return);break;case 12:Ls(s,r,e);break;case 31:Ls(s,r,e),e&&a&4&&QM(s,r);break;case 13:Ls(s,r,e),e&&a&4&&jM(s,r);break;case 22:r.memoizedState===null&&Ls(s,r,e),_c(r,r.return);break;case 30:break;default:Ls(s,r,e)}t=t.sibling}}function m0(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&Hc(e))}function g0(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Hc(n))}function ki(n,t,e,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)e1(n,t,e,i),t=t.sibling}function e1(n,t,e,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ki(n,t,e,i),s&2048&&Xc(9,t);break;case 1:ki(n,t,e,i);break;case 3:ki(n,t,e,i),s&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Hc(n)));break;case 12:if(s&2048){ki(n,t,e,i),n=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ki(n,t,e,i);break;case 31:ki(n,t,e,i);break;case 13:ki(n,t,e,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?ki(n,t,e,i):vc(n,t):r._visibility&2?ki(n,t,e,i):(r._visibility|=2,go(n,t,e,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&m0(a,t);break;case 24:ki(n,t,e,i),s&2048&&g0(t.alternate,t);break;default:ki(n,t,e,i)}}function go(n,t,e,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=n,a=t,o=e,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:go(r,a,o,l,s),Xc(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?go(r,a,o,l,s):vc(r,a):(u._visibility|=2,go(r,a,o,l,s)),s&&c&2048&&m0(a.alternate,a);break;case 24:go(r,a,o,l,s),s&&c&2048&&g0(a.alternate,a);break;default:go(r,a,o,l,s)}t=t.sibling}}function vc(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,i=t,s=i.flags;switch(i.tag){case 22:vc(e,i),s&2048&&m0(i.alternate,i);break;case 24:vc(e,i),s&2048&&g0(i.alternate,i);break;default:vc(e,i)}t=t.sibling}}var lc=8192;function mo(n,t,e){if(n.subtreeFlags&lc)for(n=n.child;n!==null;)n1(n,t,e),n=n.sibling}function n1(n,t,e){switch(n.tag){case 26:mo(n,t,e),n.flags&lc&&n.memoizedState!==null&&GC(e,Xi,n.memoizedState,n.memoizedProps);break;case 5:mo(n,t,e);break;case 3:case 4:var i=Xi;Xi=sf(n.stateNode.containerInfo),mo(n,t,e),Xi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=lc,lc=16777216,mo(n,t,e),lc=i):mo(n,t,e));break;default:mo(n,t,e)}}function i1(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function ec(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];cn=i,r1(i,n)}i1(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s1(n),n=n.sibling}function s1(n){switch(n.tag){case 0:case 11:case 15:ec(n),n.flags&2048&&Ir(9,n,n.return);break;case 3:ec(n);break;case 12:ec(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Ch(n)):ec(n);break;default:ec(n)}}function Ch(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var i=t[e];cn=i,r1(i,n)}i1(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:Ir(8,t,t.return),Ch(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Ch(t));break;default:Ch(t)}n=n.sibling}}function r1(n,t){for(;cn!==null;){var e=cn;switch(e.tag){case 0:case 11:case 15:Ir(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hc(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,cn=i;else t:for(e=n;cn!==null;){i=cn;var s=i.sibling,r=i.return;if(JM(i),i===e){cn=null;break t}if(s!==null){s.return=r,cn=s;break t}cn=r}}}var sC={getCacheForType:function(n){var t=_n(tn),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e},cacheSignal:function(){return _n(tn).controller.signal}},rC=typeof WeakMap=="function"?WeakMap:Map,re=0,ve=null,Yt=null,$t=0,ue=0,si=null,Mr=!1,jo=!1,_0=!1,qs=0,ke=0,Br=0,Aa=0,v0=0,oi=0,ko=0,yc=null,Wn=null,_g=!1,xf=0,a1=0,Kh=1/0,Qh=null,Rr=null,sn=0,Dr=null,Xo=null,Gs=0,vg=0,yg=null,o1=null,xc=0,xg=null;function hi(){return(re&2)!==0&&$t!==0?$t&-$t:Lt.T!==null?x0():gS()}function l1(){if(oi===0)if(($t&536870912)===0||ee){var n=nh;nh<<=1,(nh&3932160)===0&&(nh=262144),oi=n}else oi=536870912;return n=di.current,n!==null&&(n.flags|=32),oi}function qn(n,t,e){(n===ve&&(ue===2||ue===9)||n.cancelPendingCommit!==null)&&(Wo(n,0),br(n,$t,oi,!1)),Fc(n,e),((re&2)===0||n!==ve)&&(n===ve&&((re&2)===0&&(Aa|=e),ke===4&&br(n,$t,oi,!1)),cs(n))}function c1(n,t,e){if((re&6)!==0)throw Error(j(327));var i=!e&&(t&127)===0&&(t&n.expiredLanes)===0||zc(n,t),s=i?lC(n,t):Dm(n,t,!0),r=i;do{if(s===0){jo&&!i&&br(n,t,0,!1);break}else{if(e=n.current.alternate,r&&!aC(e)){s=Dm(n,t,!1),r=!1;continue}if(s===2){if(r=t,n.errorRecoveryDisabledLanes&r)var a=0;else a=n.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=n;s=yc;var l=o.current.memoizedState.isDehydrated;if(l&&(Wo(o,a).flags|=256),a=Dm(o,a,!1),a!==2){if(_0&&!l){o.errorRecoveryDisabledLanes|=r,Aa|=r,s=4;break t}r=Wn,Wn=s,r!==null&&(Wn===null?Wn=r:Wn.push.apply(Wn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Wo(n,0),br(n,t,0,!0);break}t:{switch(i=n,r=s,r){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:br(i,t,oi,!Mr);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=xf+300-li(),10<s)){if(br(i,t,oi,!Mr),cf(i,0,!0)!==0)break t;Gs=t,i.timeoutHandle=R1(wx.bind(null,i,e,Wn,Qh,_g,t,oi,Aa,ko,Mr,r,"Throttled",-0,0),s);break t}wx(i,e,Wn,Qh,_g,t,oi,Aa,ko,Mr,r,null,-0,0)}}break}while(!0);cs(n)}function wx(n,t,e,i,s,r,a,o,l,c,u,f,h,p){if(n.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bs},n1(t,r,f);var g=(r&62914560)===r?xf-li():(r&4194048)===r?a1-li():0;if(g=HC(f,g),g!==null){Gs=r,n.cancelPendingCommit=g(Rx.bind(null,n,t,r,e,i,s,a,o,l,u,f,null,h,p)),br(n,r,a,!c);return}}Rx(n,t,r,e,i,s,a,o,l)}function aC(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var s=e[i],r=s.getSnapshot;s=s.value;try{if(!fi(r(),s))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(n,t,e,i){t&=~v0,t&=~Aa,n.suspendedLanes|=t,n.pingedLanes&=~t,i&&(n.warmLanes|=t),i=n.expirationTimes;for(var s=t;0<s;){var r=31-ui(s),a=1<<r;i[r]=-1,s&=~a}e!==0&&dS(n,e,t)}function Sf(){return(re&6)===0?(Wc(0,!1),!1):!0}function y0(){if(Yt!==null){if(ue===0)var n=Yt.return;else n=Yt,zs=Ia=null,s0(n),Oo=null,Cc=0,n=Yt;for(;n!==null;)HM(n.alternate,n),n=n.return;Yt=null}}function Wo(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,TC(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),Gs=0,y0(),ve=n,Yt=e=Fs(n.current,null),$t=t,ue=0,si=null,Mr=!1,jo=zc(n,t),_0=!1,ko=oi=v0=Aa=Br=ke=0,Wn=yc=null,_g=!1,(t&8)!==0&&(t|=t&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=t;0<i;){var s=31-ui(i),r=1<<s;t|=n[s],i&=~r}return qs=t,df(),e}function u1(n,t){Vt=null,Lt.H=Dc,t===Qo||t===mf?(t=rx(),ue=3):t===Qg?(t=rx(),ue=4):ue=t===d0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,si=t,Yt===null&&(ke=1,Yh(n,Ni(t,n.current)))}function h1(){var n=di.current;return n===null?!0:($t&4194048)===$t?Li===null:($t&62914560)===$t||($t&536870912)!==0?n===Li:!1}function f1(){var n=Lt.H;return Lt.H=Dc,n===null?Dc:n}function d1(){var n=Lt.A;return Lt.A=sC,n}function jh(){ke=4,Mr||($t&4194048)!==$t&&di.current!==null||(jo=!0),(Br&134217727)===0&&(Aa&134217727)===0||ve===null||br(ve,$t,oi,!1)}function Dm(n,t,e){var i=re;re|=2;var s=f1(),r=d1();(ve!==n||$t!==t)&&(Qh=null,Wo(n,t)),t=!1;var a=ke;t:do try{if(ue!==0&&Yt!==null){var o=Yt,l=si;switch(ue){case 8:y0(),a=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(t=!0);var c=ue;if(ue=0,si=null,Ro(n,o,l,c),e&&jo){a=0;break t}break;default:c=ue,ue=0,si=null,Ro(n,o,l,c)}}oC(),a=ke;break}catch(u){u1(n,u)}while(!0);return t&&n.shellSuspendCounter++,zs=Ia=null,re=i,Lt.H=s,Lt.A=r,Yt===null&&(ve=null,$t=0,df()),a}function oC(){for(;Yt!==null;)p1(Yt)}function lC(n,t){var e=re;re|=2;var i=f1(),s=d1();ve!==n||$t!==t?(Qh=null,Kh=li()+500,Wo(n,t)):jo=zc(n,t);t:do try{if(ue!==0&&Yt!==null){t=Yt;var r=si;e:switch(ue){case 1:ue=0,si=null,Ro(n,t,r,1);break;case 2:case 9:if(sx(r)){ue=0,si=null,Cx(t);break}t=function(){ue!==2&&ue!==9||ve!==n||(ue=7),cs(n)},r.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:sx(r)?(ue=0,si=null,Cx(t)):(ue=0,si=null,Ro(n,t,r,7));break;case 5:var a=null;switch(Yt.tag){case 26:a=Yt.memoizedState;case 5:case 27:var o=Yt;if(a?O1(a):o.stateNode.complete){ue=0,si=null;var l=o.sibling;if(l!==null)Yt=l;else{var c=o.return;c!==null?(Yt=c,Mf(c)):Yt=null}break e}}ue=0,si=null,Ro(n,t,r,5);break;case 6:ue=0,si=null,Ro(n,t,r,6);break;case 8:y0(),ke=6;break t;default:throw Error(j(462))}}cC();break}catch(u){u1(n,u)}while(!0);return zs=Ia=null,Lt.H=i,Lt.A=s,re=e,Yt!==null?0:(ve=null,$t=0,df(),ke)}function cC(){for(;Yt!==null&&!UA();)p1(Yt)}function p1(n){var t=GM(n.alternate,n,qs);n.memoizedProps=n.pendingProps,t===null?Mf(n):Yt=t}function Cx(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=Sx(e,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=Sx(e,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:s0(t);default:HM(e,t),t=Yt=HS(t,qs),t=GM(e,t,qs)}n.memoizedProps=n.pendingProps,t===null?Mf(n):Yt=t}function Ro(n,t,e,i){zs=Ia=null,s0(t),Oo=null,Cc=0;var s=t.return;try{if(Qw(n,s,t,e,$t)){ke=1,Yh(n,Ni(e,n.current)),Yt=null;return}}catch(r){if(s!==null)throw Yt=s,r;ke=1,Yh(n,Ni(e,n.current)),Yt=null;return}t.flags&32768?(ee||i===1?n=!0:jo||($t&536870912)!==0?n=!1:(Mr=n=!0,(i===2||i===9||i===3||i===6)&&(i=di.current,i!==null&&i.tag===13&&(i.flags|=16384))),m1(t,n)):Mf(t)}function Mf(n){var t=n;do{if((t.flags&32768)!==0){m1(t,Mr);return}n=t.return;var e=tC(t.alternate,t,qs);if(e!==null){Yt=e;return}if(t=t.sibling,t!==null){Yt=t;return}Yt=t=n}while(t!==null);ke===0&&(ke=5)}function m1(n,t){do{var e=eC(n.alternate,n);if(e!==null){e.flags&=32767,Yt=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){Yt=n;return}Yt=n=e}while(n!==null);ke=6,Yt=null}function Rx(n,t,e,i,s,r,a,o,l){n.cancelPendingCommit=null;do bf();while(sn!==0);if((re&6)!==0)throw Error(j(327));if(t!==null){if(t===n.current)throw Error(j(177));if(r=t.lanes|t.childLanes,r|=Xg,HA(n,e,r,a,o,l),n===ve&&(Yt=ve=null,$t=0),Xo=t,Dr=n,Gs=e,vg=r,yg=s,o1=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,dC(Ih,function(){return x1(),null})):(n.callbackNode=null,n.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Lt.T,Lt.T=null,s=ae.p,ae.p=2,a=re,re|=4;try{nC(n,t,e)}finally{re=a,ae.p=s,Lt.T=i}}sn=1,g1(),_1(),v1()}}function g1(){if(sn===1){sn=0;var n=Dr,t=Xo,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=Lt.T,Lt.T=null;var i=ae.p;ae.p=2;var s=re;re|=4;try{$M(t,n);var r=Tg,a=OS(n.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&LS(o.ownerDocument.documentElement,o)){if(l!==null&&kg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,_=Math.min(l.start,g),m=l.end===void 0?_:Math.min(l.end,g);!p.extend&&_>m&&(a=m,m=_,_=a);var d=Qy(o,_),v=Qy(o,m);if(d&&v&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var S=f.createRange();S.setStart(d.node,d.offset),p.removeAllRanges(),_>m?(p.addRange(S),p.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),p.addRange(S))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var y=f[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}of=!!bg,Tg=bg=null}finally{re=s,ae.p=i,Lt.T=e}}n.current=t,sn=2}}function _1(){if(sn===2){sn=0;var n=Dr,t=Xo,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=Lt.T,Lt.T=null;var i=ae.p;ae.p=2;var s=re;re|=4;try{ZM(n,t.alternate,t)}finally{re=s,ae.p=i,Lt.T=e}}sn=3}}function v1(){if(sn===4||sn===3){sn=0,LA();var n=Dr,t=Xo,e=Gs,i=o1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?sn=5:(sn=0,Xo=Dr=null,y1(n,n.pendingLanes));var s=n.pendingLanes;if(s===0&&(Rr=null),Ig(e),t=t.stateNode,ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Lt.T,s=ae.p,ae.p=2,Lt.T=null;try{for(var r=n.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Lt.T=t,ae.p=s}}(Gs&3)!==0&&bf(),cs(n),s=n.pendingLanes,(e&261930)!==0&&(s&42)!==0?n===xg?xc++:(xc=0,xg=n):xc=0,Wc(0,!1)}}function y1(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,Hc(t)))}function bf(){return g1(),_1(),v1(),x1()}function x1(){if(sn!==5)return!1;var n=Dr,t=vg;vg=0;var e=Ig(Gs),i=Lt.T,s=ae.p;try{ae.p=32>e?32:e,Lt.T=null,e=yg,yg=null;var r=Dr,a=Gs;if(sn=0,Xo=Dr=null,Gs=0,(re&6)!==0)throw Error(j(331));var o=re;if(re|=4,s1(r.current),e1(r,r.current,a,e),re=o,Wc(0,!1),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(Bc,r)}catch{}return!0}finally{ae.p=s,Lt.T=i,y1(n,t)}}function Dx(n,t,e){t=Ni(e,t),t=dg(n.stateNode,t,2),n=Cr(n,t,2),n!==null&&(Fc(n,2),cs(n))}function he(n,t,e){if(n.tag===3)Dx(n,n,e);else for(;t!==null;){if(t.tag===3){Dx(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){n=Ni(e,n),e=PM(2),i=Cr(t,e,2),i!==null&&(IM(e,i,t,n),Fc(i,2),cs(i));break}}t=t.return}}function Nm(n,t,e){var i=n.pingCache;if(i===null){i=n.pingCache=new rC;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(e)||(_0=!0,s.add(e),n=uC.bind(null,n,t,e),t.then(n,n))}function uC(n,t,e){var i=n.pingCache;i!==null&&i.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,ve===n&&($t&e)===e&&(ke===4||ke===3&&($t&62914560)===$t&&300>li()-xf?(re&2)===0&&Wo(n,0):v0|=e,ko===$t&&(ko=0)),cs(n)}function S1(n,t){t===0&&(t=fS()),n=Pa(n,t),n!==null&&(Fc(n,t),cs(n))}function hC(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),S1(n,e)}function fC(n,t){var e=0;switch(n.tag){case 31:case 13:var i=n.stateNode,s=n.memoizedState;s!==null&&(e=s.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),S1(n,e)}function dC(n,t){return Og(n,t)}var $h=null,_o=null,Sg=!1,tf=!1,Um=!1,Tr=0;function cs(n){n!==_o&&n.next===null&&(_o===null?$h=_o=n:_o=_o.next=n),tf=!0,Sg||(Sg=!0,mC())}function Wc(n,t){if(!Um&&tf){Um=!0;do for(var e=!1,i=$h;i!==null;){if(!t)if(n!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-ui(42|n)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(e=!0,Nx(i,r))}else r=$t,r=cf(i,i===ve?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||zc(i,r)||(e=!0,Nx(i,r));i=i.next}while(e);Um=!1}}function pC(){M1()}function M1(){tf=Sg=!1;var n=0;Tr!==0&&bC()&&(n=Tr);for(var t=li(),e=null,i=$h;i!==null;){var s=i.next,r=b1(i,t);r===0?(i.next=null,e===null?$h=s:e.next=s,s===null&&(_o=e)):(e=i,(n!==0||(r&3)!==0)&&(tf=!0)),i=s}sn!==0&&sn!==5||Wc(n,!1),Tr!==0&&(Tr=0)}function b1(n,t){for(var e=n.suspendedLanes,i=n.pingedLanes,s=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var a=31-ui(r),o=1<<a,l=s[a];l===-1?((o&e)===0||(o&i)!==0)&&(s[a]=GA(o,t)):l<=t&&(n.expiredLanes|=o),r&=~o}if(t=ve,e=$t,e=cf(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,e===0||n===t&&(ue===2||ue===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&om(i),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||zc(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(i!==null&&om(i),Ig(e)){case 2:case 8:e=uS;break;case 32:e=Ih;break;case 268435456:e=hS;break;default:e=Ih}return i=T1.bind(null,n),e=Og(e,i),n.callbackPriority=t,n.callbackNode=e,t}return i!==null&&i!==null&&om(i),n.callbackPriority=2,n.callbackNode=null,2}function T1(n,t){if(sn!==0&&sn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(bf()&&n.callbackNode!==e)return null;var i=$t;return i=cf(n,n===ve?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(c1(n,i,t),b1(n,li()),n.callbackNode!=null&&n.callbackNode===e?T1.bind(null,n):null)}function Nx(n,t){if(bf())return null;c1(n,t,!0)}function mC(){EC(function(){(re&6)!==0?Og(cS,pC):M1()})}function x0(){if(Tr===0){var n=Vo;n===0&&(n=eh,eh<<=1,(eh&261888)===0&&(eh=256)),Tr=n}return Tr}function Ux(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:yh(""+n)}function Lx(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function gC(n,t,e,i,s){if(t==="submit"&&e&&e.stateNode===s){var r=Ux((s[Yn]||null).action),a=i.submitter;a&&(t=(t=a[Yn]||null)?Ux(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new uf("action","action",null,i,s);n.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Tr!==0){var l=a?Lx(s,a):new FormData(s);hg(e,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?Lx(s,a):new FormData(s),hg(e,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(dh=0;dh<$m.length;dh++)ph=$m[dh],Ox=ph.toLowerCase(),Px=ph[0].toUpperCase()+ph.slice(1),Wi(Ox,"on"+Px);var ph,Ox,Px,dh;Wi(IS,"onAnimationEnd");Wi(BS,"onAnimationIteration");Wi(zS,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Ow,"onTransitionRun");Wi(Pw,"onTransitionStart");Wi(Iw,"onTransitionCancel");Wi(FS,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_C=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nc));function E1(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){zh(u)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){zh(u)}s.currentTarget=null,r=l}}}}function qt(n,t){var e=t[Wm];e===void 0&&(e=t[Wm]=new Set);var i=n+"__bubble";e.has(i)||(A1(t,n,2,!1),e.add(i))}function Lm(n,t,e){var i=0;t&&(i|=4),A1(e,n,i,t)}var mh="_reactListening"+Math.random().toString(36).slice(2);function S0(n){if(!n[mh]){n[mh]=!0,_S.forEach(function(e){e!=="selectionchange"&&(_C.has(e)||Lm(e,!1,n),Lm(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[mh]||(t[mh]=!0,Lm("selectionchange",!1,t))}}function A1(n,t,e,i){switch(F1(t)){case 2:var s=WC;break;case 8:s=qC;break;default:s=E0}e=s.bind(null,t,e,n),s=void 0,!Km||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?n.addEventListener(t,e,{capture:!0,passive:s}):n.addEventListener(t,e,!0):s!==void 0?n.addEventListener(t,e,{passive:s}):n.addEventListener(t,e,!1)}function Om(n,t,e,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=xo(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}ES(function(){var c=r,u=Fg(e),f=[];t:{var h=VS.get(n);if(h!==void 0){var p=uf,g=n;switch(n){case"keypress":if(Sh(e)===0)break t;case"keydown":case"keyup":p=fw;break;case"focusin":g="focus",p=fm;break;case"focusout":g="blur",p=fm;break;case"beforeblur":case"afterblur":p=fm;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mw;break;case IS:case BS:case zS:p=iw;break;case FS:p=_w;break;case"scroll":case"scrollend":p=jA;break;case"wheel":p=yw;break;case"copy":case"cut":case"paste":p=rw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xy;break;case"toggle":case"beforetoggle":p=Sw}var _=(t&4)!==0,m=!_&&(n==="scroll"||n==="scrollend"),d=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,S;v!==null;){var y=v;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||d===null||(y=bc(v,d),y!=null&&_.push(Uc(v,y,S))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,e,u),f.push({event:h,listeners:_}))}}if((t&7)===0){t:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&e!==Jm&&(g=e.relatedTarget||e.fromElement)&&(xo(g)||g[Zo]))break t;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=e.relatedTarget||e.toElement,p=c,g=g?xo(g):null,g!==null&&(m=Ic(g),_=g.tag,g!==m||_!==5&&_!==27&&_!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Hy,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Xy,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:ac(p),S=g==null?h:ac(g),h=new _(y,v+"leave",p,e,u),h.target=m,h.relatedTarget=S,y=null,xo(u)===c&&(_=new _(d,v+"enter",g,e,u),_.target=S,_.relatedTarget=m,y=_),m=y,p&&g)e:{for(_=vC,d=p,v=g,S=0,y=d;y;y=_(y))S++;y=0;for(var b=v;b;b=_(b))y++;for(;0<S-y;)d=_(d),S--;for(;0<y-S;)v=_(v),y--;for(;S--;){if(d===v||v!==null&&d===v.alternate){_=d;break e}d=_(d),v=_(v)}_=null}else _=null;p!==null&&Ix(f,h,p,_,!1),g!==null&&m!==null&&Ix(f,m,g,_,!0)}}t:{if(h=c?ac(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=Zy;else if(Yy(h))if(NS)E=Nw;else{E=Rw;var A=Cw}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&zg(c.elementType)&&(E=Zy):E=Dw;if(E&&(E=E(n,c))){DS(f,E,e,u);break t}A&&A(n,h,c),n==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Zm(h,"number",h.value)}switch(A=c?ac(c):window,n){case"focusin":(Yy(A)||A.contentEditable==="true")&&(bo=A,Qm=c,hc=null);break;case"focusout":hc=Qm=bo=null;break;case"mousedown":jm=!0;break;case"contextmenu":case"mouseup":case"dragend":jm=!1,jy(f,e,u);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":jy(f,e,u)}var x;if(Hg)t:{switch(n){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Mo?CS(n,e)&&(T="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(T="onCompositionStart");T&&(wS&&e.locale!=="ko"&&(Mo||T!=="onCompositionStart"?T==="onCompositionEnd"&&Mo&&(x=AS()):(Sr=u,Vg="value"in Sr?Sr.value:Sr.textContent,Mo=!0)),A=ef(c,T),0<A.length&&(T=new ky(T,n,null,e,u),f.push({event:T,listeners:A}),x?T.data=x:(x=RS(e),x!==null&&(T.data=x)))),(x=bw?Tw(n,e):Ew(n,e))&&(T=ef(c,"onBeforeInput"),0<T.length&&(A=new ky("onBeforeInput","beforeinput",null,e,u),f.push({event:A,listeners:T}),A.data=x)),gC(f,n,c,e,u)}E1(f,t)})}function Uc(n,t,e){return{instance:n,listener:t,currentTarget:e}}function ef(n,t){for(var e=t+"Capture",i=[];n!==null;){var s=n,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=bc(n,e),s!=null&&i.unshift(Uc(n,s,r)),s=bc(n,t),s!=null&&i.push(Uc(n,s,r))),n.tag===3)return i;n=n.return}return[]}function vC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ix(n,t,e,i,s){for(var r=t._reactName,a=[];e!==null&&e!==i;){var o=e,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=bc(e,r),c!=null&&a.unshift(Uc(e,c,l))):s||(c=bc(e,r),c!=null&&a.push(Uc(e,c,l)))),e=e.return}a.length!==0&&n.push({event:t,listeners:a})}var yC=/\r\n?/g,xC=/\u0000|\uFFFD/g;function Bx(n){return(typeof n=="string"?n:""+n).replace(yC,`
`).replace(xC,"")}function w1(n,t){return t=Bx(t),Bx(n)===t}function pe(n,t,e,i,s,r){switch(e){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Fo(n,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Fo(n,""+i);break;case"className":sh(n,"class",i);break;case"tabIndex":sh(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sh(n,e,i);break;case"style":TS(n,i,r);break;case"data":if(t!=="object"){sh(n,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=yh(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(e==="formAction"?(t!=="input"&&pe(n,t,"name",s.name,s,null),pe(n,t,"formEncType",s.formEncType,s,null),pe(n,t,"formMethod",s.formMethod,s,null),pe(n,t,"formTarget",s.formTarget,s,null)):(pe(n,t,"encType",s.encType,s,null),pe(n,t,"method",s.method,s,null),pe(n,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=yh(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=Bs);break;case"onScroll":i!=null&&qt("scroll",n);break;case"onScrollEnd":i!=null&&qt("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(j(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=yh(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":qt("beforetoggle",n),qt("toggle",n),vh(n,"popover",i);break;case"xlinkActuate":Rs(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Rs(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Rs(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Rs(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Rs(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Rs(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Rs(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Rs(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Rs(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vh(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=KA.get(e)||e,vh(n,e,i))}}function Mg(n,t,e,i,s,r){switch(e){case"style":TS(n,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(e=i.__html,e!=null){if(s.children!=null)throw Error(j(60));n.innerHTML=e}}break;case"children":typeof i=="string"?Fo(n,i):(typeof i=="number"||typeof i=="bigint")&&Fo(n,""+i);break;case"onScroll":i!=null&&qt("scroll",n);break;case"onScrollEnd":i!=null&&qt("scrollend",n);break;case"onClick":i!=null&&(n.onclick=Bs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vS.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(s=e.endsWith("Capture"),t=e.slice(2,s?e.length-7:void 0),r=n[Yn]||null,r=r!=null?r[e]:null,typeof r=="function"&&n.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,i,s);break t}e in n?n[e]=i:i===!0?n.setAttribute(e,""):vh(n,e,i)}}}function vn(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",n),qt("load",n);var i=!1,s=!1,r;for(r in e)if(e.hasOwnProperty(r)){var a=e[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:pe(n,t,r,a,e,null)}}s&&pe(n,t,"srcSet",e.srcSet,e,null),i&&pe(n,t,"src",e.src,e,null);return;case"input":qt("invalid",n);var o=r=a=s=null,l=null,c=null;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:pe(n,t,i,u,e,null)}}SS(n,r,o,l,c,a,s,!1);return;case"select":qt("invalid",n),i=a=r=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:pe(n,t,s,o,e,null)}t=r,e=a,n.multiple=!!i,t!=null?No(n,!!i,t,!1):e!=null&&No(n,!!i,e,!0);return;case"textarea":qt("invalid",n),r=s=i=null;for(a in e)if(e.hasOwnProperty(a)&&(o=e[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:pe(n,t,a,o,e,null)}bS(n,i,s,r);return;case"option":for(l in e)e.hasOwnProperty(l)&&(i=e[l],i!=null)&&(l==="selected"?n.selected=i&&typeof i!="function"&&typeof i!="symbol":pe(n,t,l,i,e,null));return;case"dialog":qt("beforetoggle",n),qt("toggle",n),qt("cancel",n),qt("close",n);break;case"iframe":case"object":qt("load",n);break;case"video":case"audio":for(i=0;i<Nc.length;i++)qt(Nc[i],n);break;case"image":qt("error",n),qt("load",n);break;case"details":qt("toggle",n);break;case"embed":case"source":case"link":qt("error",n),qt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:pe(n,t,c,i,e,null)}return;default:if(zg(t)){for(u in e)e.hasOwnProperty(u)&&(i=e[u],i!==void 0&&Mg(n,t,u,i,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(i=e[o],i!=null&&pe(n,t,o,i,e,null))}function SC(n,t,e,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(p in e){var f=e[p];if(e.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||pe(n,t,p,null,i,f)}}for(var h in i){var p=i[h];if(f=e[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==f&&pe(n,t,h,p,i,f)}}Ym(n,a,o,l,c,u,r,s);return;case"select":p=a=o=h=null;for(r in e)if(l=e[r],e.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||pe(n,t,r,null,i,l)}for(s in i)if(r=i[s],l=e[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&pe(n,t,s,r,i,l)}t=o,e=a,i=p,h!=null?No(n,!!e,h,!1):!!i!=!!e&&(t!=null?No(n,!!e,t,!0):No(n,!!e,e?[]:"",!1));return;case"textarea":p=h=null;for(o in e)if(s=e[o],e.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pe(n,t,o,null,i,s)}for(a in i)if(s=i[a],r=e[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":h=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==r&&pe(n,t,a,s,i,r)}MS(n,h,p);return;case"option":for(var g in e)h=e[g],e.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&(g==="selected"?n.selected=!1:pe(n,t,g,null,i,h));for(l in i)h=i[l],p=e[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?n.selected=h&&typeof h!="function"&&typeof h!="symbol":pe(n,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in e)h=e[_],e.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&pe(n,t,_,null,i,h);for(c in i)if(h=i[c],p=e[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,t));break;default:pe(n,t,c,h,i,p)}return;default:if(zg(t)){for(var m in e)h=e[m],e.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Mg(n,t,m,void 0,i,h);for(u in i)h=i[u],p=e[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||Mg(n,t,u,h,i,p);return}}for(var d in e)h=e[d],e.hasOwnProperty(d)&&h!=null&&!i.hasOwnProperty(d)&&pe(n,t,d,null,i,h);for(f in i)h=i[f],p=e[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||pe(n,t,f,h,i,p)}function zx(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,t=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var s=e[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&zx(a)){for(a=0,o=s.responseEnd,i+=1;i<e.length;i++){var l=e[i],c=l.startTime;if(c>o)break;var u=l.transferSize,f=l.initiatorType;u&&zx(f)&&(l=l.responseEnd,a+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+a)/(s.duration/1e3),n++,10<n)break}}if(0<n)return t/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var bg=null,Tg=null;function nf(n){return n.nodeType===9?n:n.ownerDocument}function Fx(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C1(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Eg(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pm=null;function bC(){var n=window.event;return n&&n.type==="popstate"?n===Pm?!1:(Pm=n,!0):(Pm=null,!1)}var R1=typeof setTimeout=="function"?setTimeout:void 0,TC=typeof clearTimeout=="function"?clearTimeout:void 0,Vx=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof Vx<"u"?function(n){return Vx.resolve(null).then(n).catch(AC)}:R1;function AC(n){setTimeout(function(){throw n})}function Fr(n){return n==="head"}function Gx(n,t){var e=t,i=0;do{var s=e.nextSibling;if(n.removeChild(e),s&&s.nodeType===8)if(e=s.data,e==="/$"||e==="/&"){if(i===0){n.removeChild(s),Yo(t);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")Sc(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Sc(e);for(var r=e.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[Vc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||e.removeChild(r),r=a}}else e==="body"&&Sc(n.ownerDocument.body);e=s}while(e);Yo(t)}function Hx(n,t){var e=n;n=0;do{var i=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=i}while(e)}function Ag(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ag(e),Bg(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function wC(n,t,e,i){for(;n.nodeType===1;){var s=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[Vc])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==s.rel||n.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||n.getAttribute("title")!==(s.title==null?null:s.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(s.src==null?null:s.src)||n.getAttribute("type")!==(s.type==null?null:s.type)||n.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=Oi(n.nextSibling),n===null)break}return null}function CC(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Oi(n.nextSibling),n===null))return null;return n}function D1(n,t){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Oi(n.nextSibling),n===null))return null;return n}function wg(n){return n.data==="$?"||n.data==="$~"}function Cg(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function RC(n,t){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=t;else if(n.data!=="$?"||e.readyState!=="loading")t();else{var i=function(){t(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function Oi(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return n}var Rg=null;function kx(n){n=n.nextSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(t===0)return Oi(n.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}n=n.nextSibling}return null}function Xx(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return n;t--}else e!=="/$"&&e!=="/&"||t++}n=n.previousSibling}return null}function N1(n,t,e){switch(t=nf(e),n){case"html":if(n=t.documentElement,!n)throw Error(j(452));return n;case"head":if(n=t.head,!n)throw Error(j(453));return n;case"body":if(n=t.body,!n)throw Error(j(454));return n;default:throw Error(j(451))}}function Sc(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Bg(n)}var Pi=new Map,Wx=new Set;function sf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ys=ae.d;ae.d={f:DC,r:NC,D:UC,C:LC,L:OC,m:PC,X:BC,S:IC,M:zC};function DC(){var n=Ys.f(),t=Sf();return n||t}function NC(n){var t=Jo(n);t!==null&&t.tag===5&&t.type==="form"?TM(t):Ys.r(n)}var $o=typeof document>"u"?null:document;function U1(n,t,e){var i=$o;if(i&&typeof t=="string"&&t){var s=Di(t);s='link[rel="'+n+'"][href="'+s+'"]',typeof e=="string"&&(s+='[crossorigin="'+e+'"]'),Wx.has(s)||(Wx.add(s),n={rel:n,crossOrigin:e,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),vn(t,"link",n),un(t),i.head.appendChild(t)))}}function UC(n){Ys.D(n),U1("dns-prefetch",n,null)}function LC(n,t){Ys.C(n,t),U1("preconnect",n,t)}function OC(n,t,e){Ys.L(n,t,e);var i=$o;if(i&&n&&t){var s='link[rel="preload"][as="'+Di(t)+'"]';t==="image"&&e&&e.imageSrcSet?(s+='[imagesrcset="'+Di(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(s+='[imagesizes="'+Di(e.imageSizes)+'"]')):s+='[href="'+Di(n)+'"]';var r=s;switch(t){case"style":r=qo(n);break;case"script":r=tl(n)}Pi.has(r)||(n=Ce({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),Pi.set(r,n),i.querySelector(s)!==null||t==="style"&&i.querySelector(qc(r))||t==="script"&&i.querySelector(Yc(r))||(t=i.createElement("link"),vn(t,"link",n),un(t),i.head.appendChild(t)))}}function PC(n,t){Ys.m(n,t);var e=$o;if(e&&n){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Di(i)+'"][href="'+Di(n)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=tl(n)}if(!Pi.has(r)&&(n=Ce({rel:"modulepreload",href:n},t),Pi.set(r,n),e.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Yc(r)))return}i=e.createElement("link"),vn(i,"link",n),un(i),e.head.appendChild(i)}}}function IC(n,t,e){Ys.S(n,t,e);var i=$o;if(i&&n){var s=Do(i).hoistableStyles,r=qo(n);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(qc(r)))o.loading=5;else{n=Ce({rel:"stylesheet",href:n,"data-precedence":t},e),(e=Pi.get(r))&&M0(n,e);var l=a=i.createElement("link");un(l),vn(l,"link",n),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Rh(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function BC(n,t){Ys.X(n,t);var e=$o;if(e&&n){var i=Do(e).hoistableScripts,s=tl(n),r=i.get(s);r||(r=e.querySelector(Yc(s)),r||(n=Ce({src:n,async:!0},t),(t=Pi.get(s))&&b0(n,t),r=e.createElement("script"),un(r),vn(r,"link",n),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function zC(n,t){Ys.M(n,t);var e=$o;if(e&&n){var i=Do(e).hoistableScripts,s=tl(n),r=i.get(s);r||(r=e.querySelector(Yc(s)),r||(n=Ce({src:n,async:!0,type:"module"},t),(t=Pi.get(s))&&b0(n,t),r=e.createElement("script"),un(r),vn(r,"link",n),e.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function qx(n,t,e,i){var s=(s=Er.current)?sf(s):null;if(!s)throw Error(j(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=qo(e.href),e=Do(s).hoistableStyles,i=e.get(t),i||(i={type:"style",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=qo(e.href);var r=Do(s).hoistableStyles,a=r.get(n);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,a),(r=s.querySelector(qc(n)))&&!r._p&&(a.instance=r,a.state.loading=5),Pi.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Pi.set(n,e),r||FC(s,n,e,a.state))),t&&i===null)throw Error(j(528,""));return a}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tl(e),e=Do(s).hoistableScripts,i=e.get(t),i||(i={type:"script",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,n))}}function qo(n){return'href="'+Di(n)+'"'}function qc(n){return'link[rel="stylesheet"]['+n+"]"}function L1(n){return Ce({},n,{"data-precedence":n.precedence,precedence:null})}function FC(n,t,e,i){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=n.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),vn(t,"link",e),un(t),n.head.appendChild(t))}function tl(n){return'[src="'+Di(n)+'"]'}function Yc(n){return"script[async]"+n}function Yx(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var i=n.querySelector('style[data-href~="'+Di(e.href)+'"]');if(i)return t.instance=i,un(i),i;var s=Ce({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),un(i),vn(i,"style",s),Rh(i,e.precedence,n),t.instance=i;case"stylesheet":s=qo(e.href);var r=n.querySelector(qc(s));if(r)return t.state.loading|=4,t.instance=r,un(r),r;i=L1(e),(s=Pi.get(s))&&M0(i,s),r=(n.ownerDocument||n).createElement("link"),un(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),vn(r,"link",i),t.state.loading|=4,Rh(r,e.precedence,n),t.instance=r;case"script":return r=tl(e.src),(s=n.querySelector(Yc(r)))?(t.instance=s,un(s),s):(i=e,(s=Pi.get(r))&&(i=Ce({},e),b0(i,s)),n=n.ownerDocument||n,s=n.createElement("script"),un(s),vn(s,"link",i),n.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Rh(i,e.precedence,n));return t.instance}function Rh(n,t,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(n,r.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function M0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function b0(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Dh=null;function Zx(n,t,e){if(Dh===null){var i=new Map,s=Dh=new Map;s.set(e,i)}else s=Dh,i=s.get(e),i||(i=new Map,s.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),s=0;s<e.length;s++){var r=e[s];if(!(r[Vc]||r[mn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=n+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function Jx(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function VC(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(n=t.disabled,typeof t.precedence=="string"&&n==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function O1(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function GC(n,t,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=qo(i.href),r=t.querySelector(qc(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=rf.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=r,un(r);return}r=t.ownerDocument||t,i=L1(i),(s=Pi.get(s))&&M0(i,s),r=r.createElement("link"),un(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),vn(r,"link",i),e.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=rf.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}var Im=0;function HC(n,t){return n.stylesheets&&n.count===0&&Nh(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var i=setTimeout(function(){if(n.stylesheets&&Nh(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4+t);0<n.imgBytes&&Im===0&&(Im=62500*MC());var s=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Nh(n,n.stylesheets),n.unsuspend)){var r=n.unsuspend;n.unsuspend=null,r()}},(n.imgBytes>Im?50:800)+t);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function rf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var af=null;function Nh(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,af=new Map,t.forEach(kC,n),af=null,rf.call(n))}function kC(n,t){if(!(t.state.loading&4)){var e=af.get(n);if(e)var i=e.get(null);else{e=new Map,af.set(n,e);for(var s=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(e.set(a.dataset.precedence,a),i=a)}i&&e.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=e.get(a)||i,r===i&&e.set(null,s),e.set(a,s),this.count++,i=rf.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(s,n.firstChild)),t.state.loading|=4}}var Lc={$$typeof:Is,Provider:null,Consumer:null,_currentValue:Ma,_currentValue2:Ma,_threadCount:0};function XC(n,t,e,i,s,r,a,o,l){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lm(0),this.hiddenUpdates=lm(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function P1(n,t,e,i,s,r,a,o,l,c,u,f){return n=new XC(n,t,e,a,l,c,u,f,o),t=1,r===!0&&(t|=24),r=ai(3,null,null,t),n.current=r,r.stateNode=n,t=Jg(),t.refCount++,n.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:e,cache:t},jg(r),n}function I1(n){return n?(n=Ao,n):Ao}function B1(n,t,e,i,s,r){s=I1(s),i.context===null?i.context=s:i.pendingContext=s,i=wr(t),i.payload={element:e},r=r===void 0?null:r,r!==null&&(i.callback=r),e=Cr(n,i,t),e!==null&&(qn(e,n,t),dc(e,n,t))}function Kx(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function T0(n,t){Kx(n,t),(n=n.alternate)&&Kx(n,t)}function z1(n){if(n.tag===13||n.tag===31){var t=Pa(n,67108864);t!==null&&qn(t,n,67108864),T0(n,67108864)}}function Qx(n){if(n.tag===13||n.tag===31){var t=hi();t=Pg(t);var e=Pa(n,t);e!==null&&qn(e,n,t),T0(n,t)}}var of=!0;function WC(n,t,e,i){var s=Lt.T;Lt.T=null;var r=ae.p;try{ae.p=2,E0(n,t,e,i)}finally{ae.p=r,Lt.T=s}}function qC(n,t,e,i){var s=Lt.T;Lt.T=null;var r=ae.p;try{ae.p=8,E0(n,t,e,i)}finally{ae.p=r,Lt.T=s}}function E0(n,t,e,i){if(of){var s=Dg(i);if(s===null)Om(n,t,i,lf,e),jx(n,i);else if(ZC(s,n,t,e,i))i.stopPropagation();else if(jx(n,i),t&4&&-1<YC.indexOf(n)){for(;s!==null;){var r=Jo(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=ya(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-ui(a);o.entanglements[1]|=l,a&=~l}cs(r),(re&6)===0&&(Kh=li()+500,Wc(0,!1))}}break;case 31:case 13:o=Pa(r,2),o!==null&&qn(o,r,2),Sf(),T0(r,2)}if(r=Dg(i),r===null&&Om(n,t,i,lf,e),r===s)break;s=r}s!==null&&i.stopPropagation()}else Om(n,t,i,null,e)}}function Dg(n){return n=Fg(n),A0(n)}var lf=null;function A0(n){if(lf=null,n=xo(n),n!==null){var t=Ic(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=sS(t),n!==null)return n;n=null}else if(e===31){if(n=rS(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return lf=n,null}function F1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(OA()){case cS:return 2;case uS:return 8;case Ih:case PA:return 32;case hS:return 268435456;default:return 32}default:return 32}}var Ng=!1,Nr=null,Ur=null,Lr=null,Oc=new Map,Pc=new Map,yr=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jx(n,t){switch(n){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Oc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(t.pointerId)}}function nc(n,t,e,i,s,r){return n===null||n.nativeEvent!==r?(n={blockedOn:t,domEventName:e,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Jo(t),t!==null&&z1(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),n)}function ZC(n,t,e,i,s){switch(t){case"focusin":return Nr=nc(Nr,n,t,e,i,s),!0;case"dragenter":return Ur=nc(Ur,n,t,e,i,s),!0;case"mouseover":return Lr=nc(Lr,n,t,e,i,s),!0;case"pointerover":var r=s.pointerId;return Oc.set(r,nc(Oc.get(r)||null,n,t,e,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Pc.set(r,nc(Pc.get(r)||null,n,t,e,i,s)),!0}return!1}function V1(n){var t=xo(n.target);if(t!==null){var e=Ic(t);if(e!==null){if(t=e.tag,t===13){if(t=sS(e),t!==null){n.blockedOn=t,Py(n.priority,function(){Qx(e)});return}}else if(t===31){if(t=rS(e),t!==null){n.blockedOn=t,Py(n.priority,function(){Qx(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Uh(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=Dg(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);Jm=i,e.target.dispatchEvent(i),Jm=null}else return t=Jo(e),t!==null&&z1(t),n.blockedOn=e,!1;t.shift()}return!0}function $x(n,t,e){Uh(n)&&e.delete(t)}function JC(){Ng=!1,Nr!==null&&Uh(Nr)&&(Nr=null),Ur!==null&&Uh(Ur)&&(Ur=null),Lr!==null&&Uh(Lr)&&(Lr=null),Oc.forEach($x),Pc.forEach($x)}function gh(n,t){n.blockedOn===t&&(n.blockedOn=null,Ng||(Ng=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,JC)))}var _h=null;function tS(n){_h!==n&&(_h=n,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,function(){_h===n&&(_h=null);for(var t=0;t<n.length;t+=3){var e=n[t],i=n[t+1],s=n[t+2];if(typeof i!="function"){if(A0(i||e)===null)continue;break}var r=Jo(e);r!==null&&(n.splice(t,3),t-=3,hg(r,{pending:!0,data:s,method:e.method,action:i},i,s))}}))}function Yo(n){function t(l){return gh(l,n)}Nr!==null&&gh(Nr,n),Ur!==null&&gh(Ur,n),Lr!==null&&gh(Lr,n),Oc.forEach(t),Pc.forEach(t);for(var e=0;e<yr.length;e++){var i=yr[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<yr.length&&(e=yr[0],e.blockedOn===null);)V1(e),e.blockedOn===null&&yr.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var s=e[i],r=e[i+1],a=s[Yn]||null;if(typeof r=="function")a||tS(e);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Yn]||null)o=a.formAction;else if(A0(s)!==null)continue}else o=a.action;typeof o=="function"?e[i+1]=o:(e.splice(i,3),i-=3),tS(e)}}}function G1(){function n(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function w0(n){this._internalRoot=n}Tf.prototype.render=w0.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(j(409));var e=t.current,i=hi();B1(e,i,n,t,null,null)};Tf.prototype.unmount=w0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;B1(n.current,2,null,n,null,null),Sf(),t[Zo]=null}};function Tf(n){this._internalRoot=n}Tf.prototype.unstable_scheduleHydration=function(n){if(n){var t=gS();n={blockedOn:null,target:n,priority:t};for(var e=0;e<yr.length&&t!==0&&t<yr[e].priority;e++);yr.splice(e,0,n),e===0&&V1(n)}};var eS=nS.version;if(eS!=="19.2.8")throw Error(j(527,eS,"19.2.8"));ae.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(j(188)):(n=Object.keys(n).join(","),Error(j(268,n)));return n=wA(t),n=n!==null?aS(n):null,n=n===null?null:n.stateNode,n};var KC={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ic=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ic.isDisabled&&ic.supportsFiber))try{Bc=ic.inject(KC),ci=ic}catch{}var ic;Ef.createRoot=function(n,t){if(!iS(n))throw Error(j(299));var e=!1,i="",s=UM,r=LM,a=OM;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=P1(n,1,!1,null,null,e,i,null,s,r,a,G1),n[Zo]=t.current,S0(n),new w0(t)};Ef.hydrateRoot=function(n,t,e){if(!iS(n))throw Error(j(299));var i=!1,s="",r=UM,a=LM,o=OM,l=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(l=e.formState)),t=P1(n,1,!0,t,e??null,i,s,l,r,a,o,G1),t.context=I1(null),e=t.current,i=hi(),i=Pg(i),s=wr(i),s.callback=null,Cr(e,s,i),e=i,t.current.lanes=e,Fc(t,e),cs(t),n[Zo]=t.current,S0(n),new Tf(t)};Ef.version="19.2.8"});var W1=ns((MO,X1)=>{"use strict";function k1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k1)}catch(n){console.error(n)}}k1(),X1.exports=H1()});var HE=ns(Vp=>{"use strict";var fO=Symbol.for("react.transitional.element"),dO=Symbol.for("react.fragment");function GE(n,t,e){var i=null;if(e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),"key"in t){e={};for(var s in t)s!=="key"&&(e[s]=t[s])}else e=t;return t=e.ref,{$$typeof:fO,type:n,key:i,ref:t!==void 0?t:null,props:e}}Vp.Fragment=dO;Vp.jsx=GE;Vp.jsxs=GE});var qu=ns((vz,kE)=>{"use strict";kE.exports=HE()});var WE=ga(W1(),1);var pa=ga(Jl(),1);var Jr=ga(Jl());function Zs(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tb(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$c={duration:.5,overwrite:!1,delay:0},W0,yn,Le,Bi=1e8,xe=1/Bi,P0=Math.PI*2,QC=P0/4,jC=0,eb=Math.sqrt,$C=Math.cos,tR=Math.sin,an=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},Ks=function(t){return typeof t=="number"},Pf=function(t){return typeof t>"u"},fs=function(t){return typeof t=="object"},Qn=function(t){return t!==!1},q0=function(){return typeof window<"u"},Af=function(t){return Xe(t)||an(t)},nb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,eR=/random\([^)]+\)/g,nR=/,\s*/g,q1=/(?:-?\.?\d|\.)+/gi,Y0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,C0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Z0=/[+-]=-?[.\d]+/,iR=/[^,'"\[\]\s]+/gi,sR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,us,I0,J0,mi={},Df={},ib,sb=function(t){return(Df=nl(t,mi))&&wn},If=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},tu=function(t,e){return!e&&console.warn(t)},rb=function(t,e){return t&&(mi[t]=e)&&Df&&(Df[t]=e)||mi},eu=function(){return 0},rR={suppressEvents:!0,isStart:!0,kill:!1},wf={suppressEvents:!0,kill:!1},aR={suppressEvents:!0},K0={},Gr=[],B0={},ab,Jn={},R0={},Y1=30,Cf=[],Q0="",j0=function(t){var e=t[0],i,s;if(fs(e)||Xe(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=Cf.length;s--&&!Cf[s].targetTest(e););i=Cf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new n_(t[s],i)))||t.splice(s,1);return t},Hr=function(t){return t._gsap||j0(zi(t))[0]._gsap},$0=function(t,e,i){return(i=t[e])&&Xe(i)?t[e]():Pf(i)&&t.getAttribute&&t.getAttribute(e)||i},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},We=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},Ga=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},oR=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},Nf=function(){var t=Gr.length,e=Gr.slice(0),i,s;for(B0={},Gr.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},t_=function(t){return!!(t._initted||t._startAt||t.add)},ob=function(t,e,i,s){Gr.length&&!yn&&Nf(),t.render(e,i,s||!!(yn&&e<0&&t_(t))),Gr.length&&!yn&&Nf()},lb=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(iR).length<2?e:an(t)?t.trim():t},cb=function(t){return t},gi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},lR=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},nl=function(t,e){for(var i in e)t[i]=e[i];return t},Z1=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=fs(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Uf=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},Kc=function(t){var e=t.parent||Be,i=t.keyframes?lR(An(t.keyframes)):gi;if(Qn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},cR=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},ub=function(t,e,i,s,r){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},Bf=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=e._prev,a=e._next;r?r._next=a:t[i]===e&&(t[i]=a),a?a._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},kr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ba=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},uR=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},z0=function(t,e,i,s){return t._startAt&&(yn?t._startAt.revert(wf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},hR=function n(t){return!t||t._ts&&n(t.parent)},J1=function(t){return t._repeat?il(t._tTime,t=t.duration()+t._rDelay)*t:0},il=function(t,e){var i=Math.floor(t=Ie(t/e));return t&&i===t?i-1:i},Lf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zf=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},Ff=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ie(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zf(t),i._dirty||Ba(i,t)),t},hb=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Lf(t.rawTime(),e),(!e._dur||su(0,e.totalDuration(),i)-e._tTime>xe)&&e.render(i,!0)),Ba(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-xe}},hs=function(t,e,i,s){return e.parent&&kr(e),e._start=Ie((Ks(i)?i:i||t!==Be?Ii(t,i,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ub(t,e,"_first","_last",t._sort?"_start":0),F0(e)||(t._recent=e),s||hb(t,e),t._ts<0&&Ff(t,t._tTime),t},fb=function(t,e){return(mi.ScrollTrigger||If("scrollTrigger",e))&&mi.ScrollTrigger.create(e,t)},db=function(t,e,i,s,r){if(r_(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!yn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ab!==Kn.frame)return Gr.push(t),t._lazy=[r,s],1},fR=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},F0=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dR=function(t,e,i,s){var r=t.ratio,a=e<0||!e&&(!t._start&&fR(t)&&!(!t._initted&&F0(t))||(t._ts<0||t._dp._ts<0)&&!F0(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=su(0,t._tDur,e),u=il(l,o),t._yoyo&&u&1&&(a=1-a),u!==il(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||yn||s||t._zTime===xe||!e&&t._zTime){if(!t._initted&&db(t,e,s,i,l))return;for(f=t._zTime,t._zTime=e||(i?xe:0),i||(i=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&z0(t,e,i,!0),t._onUpdate&&!i&&pi(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&kr(t,1),!i&&!yn&&(pi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},pR=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},sl=function(t,e,i,s){var r=t._repeat,a=Ie(e)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Ie(a*(r+1)+t._rDelay*r):a,o>0&&!s&&Ff(t,t._tTime=t._tDur*o),t.parent&&zf(t),i||Ba(t.parent,t),t},K1=function(t){return t instanceof En?Ba(t):sl(t,t._dur)},mR={_start:0,endTime:eu,totalDuration:eu},Ii=function n(t,e,i){var s=t.labels,r=t._recent||mR,a=t.duration()>=Bi?r.endTime(!1):t._dur,o,l,c;return an(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(e in s||(s[e]=a),s[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(An(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},Qc=function(t,e,i){var s=Ks(e[1]),r=(s?2:1)+(t<2?0:1),a=e[r],o,l;if(s&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;a.immediateRender=Qn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Qe(e[0],a,e[r+1])},Xr=function(t,e){return t||t===0?e(t):e},su=function(t,e,i){return i<t?t:i>e?e:i},xn=function(t,e){return!an(t)||!(e=sR.exec(t))?"":e[1]},gR=function(t,e,i){return Xr(i,function(s){return su(t,e,s)})},V0=[].slice,pb=function(t,e){return t&&fs(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fs(t[0]))&&!t.nodeType&&t!==us},_R=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return an(s)&&!e||pb(s,1)?(r=i).push.apply(r,zi(s)):i.push(s)})||i},zi=function(t,e,i){return Le&&!e&&Le.selector?Le.selector(t):an(t)&&!i&&(I0||!rl())?V0.call((e||J0).querySelectorAll(t),0):An(t)?_R(t,i):pb(t)?V0.call(t,0):t?[t]:[]},G0=function(t){return t=zi(t)[0]||tu("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return zi(e,i.querySelectorAll?i:i===t?tu("Invalid scope")||J0.createElement("div"):t)}},mb=function(t){return t.sort(function(){return .5-Math.random()})},gb=function(t){if(Xe(t))return t;var e=fs(t)?t:{each:t},i=za(e.ease),s=e.from||0,r=parseFloat(e.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=e.axis,u=s,f=s;return an(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],f=s[1]),function(h,p,g){var _=(g||e).length,m=a[_],d,v,S,y,b,E,A,x,T;if(!m){if(T=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!T){for(A=-Bi;A<(A=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],d=l?Math.min(T,_)*u-.5:s%T,v=T===Bi?0:l?_*f/T-.5:s/T|0,A=0,x=Bi,E=0;E<_;E++)S=E%T-d,y=v-(E/T|0),m[E]=b=c?Math.abs(c==="y"?y:S):eb(S*S+y*y),b>A&&(A=b),b<x&&(x=b);s==="random"&&mb(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(s==="edges"?-1:1),m.b=_<0?r-_:r,m.u=xn(e.amount||e.each)||0,i=i&&_<0?DR(i):i}return _=(m[h]-m.min)/m.max||0,Ie(m.b+(i?i(_):_)*m.v)+m.u}},H0=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=Ie(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(Ks(i)?0:xn(i))}},_b=function(t,e){var i=An(t),s,r;return!i&&fs(t)&&(s=i=t.radius||Bi,t.values?(t=zi(t.values),(r=!Ks(t[0]))&&(s*=s)):t=H0(t.increment)),Xr(e,i?Xe(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Bi,u=0,f=t.length,h,p;f--;)r?(h=t[f].x-o,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!s||c<=s?t[u]:a,r||u===a||Ks(a)?u:u+xn(a)}:H0(t))},vb=function(t,e,i,s){return Xr(An(t)?!e:i===!0?!!(i=0):!s,function(){return An(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},vR=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(r,a){return a(r)},s)}},yR=function(t,e){return function(i){return t(parseFloat(i))+(e||xn(i))}},xR=function(t,e,i){return xb(t,e,0,1,i)},yb=function(t,e,i){return Xr(i,function(s){return t[~~e(s)]})},SR=function n(t,e,i){var s=e-t;return An(t)?yb(t,n(0,t.length),e):Xr(i,function(r){return(s+(r-t)%s)%s+t})},MR=function n(t,e,i){var s=e-t,r=s*2;return An(t)?yb(t,n(0,t.length-1),e):Xr(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},al=function(t){return t.replace(eR,function(e){var i=e.indexOf("[")+1,s=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(nR);return vb(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},xb=function(t,e,i,s,r){var a=e-t,o=s-i;return Xr(r,function(l){return i+((l-t)/a*o||0)})},bR=function n(t,e,i,s){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=an(t),o={},l,c,u,f,h;if(i===!0&&(s=1)&&(i=null),a)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(n(t[c-1],t[c]));f--,r=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=e}else s||(t=nl(An(t)?[]:{},t));if(!u){for(l in e)i_.call(o,t,l,"get",e[l]);r=function(g){return l_(g,o)||(a?t.p:t)}}}return Xr(i,r)},Q1=function(t,e,i){var s=t.labels,r=Bi,a,o,l;for(a in s)o=s[a]-e,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},pi=function(t,e,i){var s=t.vars,r=s[e],a=Le,o=t._ctx,l,c,u;if(r)return l=s[e+"Params"],c=s.callbackScope||t,i&&Gr.length&&Nf(),o&&(Le=o),u=l?r.apply(c,l):r.call(c),Le=a,u},Zc=function(t){return kr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yn),t.progress()<1&&pi(t,"onInterrupt"),t},el,Sb=[],Mb=function(t){if(t)if(t=!t.name&&t.default||t,q0()||t.headless){var e=t.name,i=Xe(t),s=e&&!i&&t.init?function(){this._props=[]}:t,r={init:eu,render:l_,add:i_,kill:VR,modifier:FR,rawVars:0},a={targetTest:0,get:0,getSetter:Vf,aliases:{},register:0};if(rl(),t!==s){if(Jn[e])return;gi(s,gi(Uf(t,r),a)),nl(s.prototype,nl(r,Uf(t,a))),Jn[s.prop=e]=s,t.targetTest&&(Cf.push(s),K0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rb(e,s),t.register&&t.register(wn,s,zn)}else Sb.push(t)},ye=255,Jc={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},D0=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ye+.5|0},bb=function(t,e,i){var s=t?Ks(t)?[t>>16,t>>8&ye,t&ye]:0:Jc.black,r,a,o,l,c,u,f,h,p,g;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jc[t])s=Jc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ye,s&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(s=g=t.match(q1),!e)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,s.length>3&&(s[3]*=1),s[0]=D0(l+1/3,r,a),s[1]=D0(l,r,a),s[2]=D0(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(Y0),i&&s.length<4&&(s[3]=1),s}else s=t.match(q1)||Jc.transparent;s=s.map(Number)}return e&&!g&&(r=s[0]/ye,a=s[1]/ye,o=s[2]/ye,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(a-o)/p+(a<o?6:0):f===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},Tb=function(t){var e=[],i=[],s=-1;return t.split(Js).forEach(function(r){var a=r.match(Va)||[];e.push.apply(e,a),i.push(s+=a.length+1)}),e.c=i,e},j1=function(t,e,i){var s="",r=(t+s).match(Js),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=bb(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Tb(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Js,"1").split(Va),f=c.length-1;o<f;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=t.split(Js),f=c.length-1;o<f;o++)s+=c[o]+r[o];return s+c[f]},Js=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jc)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),TR=/hsl[a]?\(/,e_=function(t){var e=t.join(" "),i;if(Js.lastIndex=0,Js.test(e))return i=TR.test(e),t[1]=j1(t[1],i),t[0]=j1(t[0],i,Tb(t[1])),!0},nu,Kn=(function(){var n=Date.now,t=500,e=33,i=n(),s=i,r=1e3/240,a=r,o=[],l,c,u,f,h,p,g=function _(m){var d=n()-s,v=m===!0,S,y,b,E;if((d>t||d<0)&&(i+=d-e),s+=d,b=s-i,S=b-a,(S>0||v)&&(E=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=S+(S>=r?4:r-S),y=1),v||(l=c(_)),y)for(p=0;p<o.length;p++)o[p](b,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ib&&(!I0&&q0()&&(us=I0=window,J0=us.document||{},mi.gsap=wn,(us.gsapVersions||(us.gsapVersions=[])).push(wn.version),sb(Df||us.GreenSockGlobals||!us.gsap&&us||{}),Sb.forEach(Mb)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},nu=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),nu=0,c=eu},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,d,v){var S=d?function(y,b,E,A){m(y,b,E,A),f.remove(S)}:m;return f.remove(m),o[v?"unshift":"push"](S),rl(),S},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f})(),rl=function(){return!nu&&Kn.wake()},ne={},ER=/^[\d.\-M][\d.\-,\s]/,AR=/["']/g,wR=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[s]=isNaN(c)?c.replace(AR,"").trim():+c,s=l.substr(o+1).trim();return e},CR=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},RR=function(t){var e=(t+"").split("("),i=ne[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[wR(e[1])]:CR(t).split(",").map(lb)):ne._CE&&ER.test(t)?ne._CE("",t):i},DR=function(t){return function(e){return 1-t(1-e)}},za=function(t,e){return t&&(Xe(t)?t:ne[t]||RR(t))||e},Ha=function(t,e,i,s){i===void 0&&(i=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:s},a;return Bn(t,function(o){ne[o]=mi[o]=r,ne[a=o.toLowerCase()]=i;for(var l in r)ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[o+"."+l]=r[l]}),r},Eb=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},N0=function n(t,e,i){var s=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),a=r/P0*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*tR((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Eb(o);return r=P0/r,l.config=function(c,u){return n(t,c,u)},l},U0=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Eb(i);return s.config=function(r){return n(t,r)},s};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Ha(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;Ha("Elastic",N0("in"),N0("out"),N0());(function(n,t){var e=1/t,i=2*e,s=2.5*e,r=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<s?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};Ha("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ha("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ha("Circ",function(n){return-(eb(1-n*n)-1)});Ha("Sine",function(n){return n===1?1:-$C(n*QC)+1});Ha("Back",U0("in"),U0("out"),U0());ne.SteppedEase=ne.steps=mi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),r=e?1:0,a=1-xe;return function(o){return((s*su(0,a,o)|0)+r)*i}}};$c.ease=ne["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Q0+=n+","+n+"Params,"});var n_=function(t,e){this.id=jC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:$0,this.set=e?e.getSetter:Vf},iu=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,sl(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),nu||Kn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,sl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(rl(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ff(this,i),!r._dp||r.parent||hb(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hs(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ob(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+J1(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+J1(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?il(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Lf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-xe?0:this._rts,this.totalTime(su(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),zf(this),uR(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Ie(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&hs(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Qn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lf(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=aR);var s=yn;return yn=i,t_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,K1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,K1(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(Ii(this,i),Qn(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Qn(s)),this._dur||(this._zTime=-xe),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-xe)},t.eventCallback=function(i,s,r){var a=this.vars;return arguments.length>1?(s?(a[i]=s,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this,r=s._prom;return new Promise(function(a){var o=Xe(i)?i:cb,l=function(){var u=s.then;s.then=null,r&&r(),Xe(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),a(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Zc(this)},n})();gi(iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var En=(function(n){tb(t,n);function t(i,s){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Qn(i.sortChildren),Be&&hs(i.parent||Be,Zs(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&fb(Zs(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,a){return Qc(0,arguments,this),this},e.from=function(s,r,a){return Qc(1,arguments,this),this},e.fromTo=function(s,r,a,o){return Qc(2,arguments,this),this},e.set=function(s,r,a){return r.duration=0,r.parent=this,Kc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qe(s,r,Ii(this,a),1),this},e.call=function(s,r,a){return hs(this,Qe.delayedCall(0,s,r),a)},e.staggerTo=function(s,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Qe(s,a,Ii(this,l)),this},e.staggerFrom=function(s,r,a,o,l,c,u){return a.runBackwards=1,Kc(a).immediateRender=Qn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,u)},e.staggerFromTo=function(s,r,a,o,l,c,u,f){return o.startAt=a,Kc(o).immediateRender=Qn(o.immediateRender),this.staggerTo(s,r,o,l,c,u,f)},e.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ie(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,g,_,m,d,v,S,y,b,E,A;if(this!==Be&&u>l&&s>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,y=this._start,S=this._ts,d=!S,f&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(h=Ie(u%m),u===l?(_=this._repeat,h=c):(b=Ie(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=il(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),E&&_&1&&(h=c-h,A=1),_!==b&&!this._lock){var x=E&&b&1,T=x===(E&&_&1);if(_<b&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ie(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=pR(this,Ie(o),Ie(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!r&&!b&&(pi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!d){v=0,g&&(u+=this._zTime=-xe);break}}p=g}else{p=this._last;for(var R=s<0?s:h;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,r,a||yn&&t_(p)),h!==this._time||!this._ts&&!d){v=0,g&&(u+=this._zTime=R?-xe:xe);break}}p=g}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-xe)._zTime=h>=o?1:-1,this._ts))return this._start=y,zf(this),this.render(s,r,a);this._onUpdate&&!r&&pi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!r&&!(s<0&&!o)&&(u||o||!l)&&(pi(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var a=this;if(Ks(r)||(r=Ii(this,r,s)),!(s instanceof iu)){if(An(s))return s.forEach(function(o){return a.add(o,r)}),this;if(an(s))return this.addLabel(s,r);if(Xe(s))s=Qe.delayedCall(0,s);else return this}return this!==s?hs(this,s,r):this},e.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Bi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Qe?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},e.remove=function(s){return an(s)?this.removeLabel(s):Xe(s)?this.killTweensOf(s):(s.parent===this&&Bf(this,s),s===this._recent&&(this._recent=this._last),Ba(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(Kn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=Ii(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,a){var o=Qe.delayedCall(0,r||eu,a);return o.data="isPause",this._hasPause=1,hs(this,o,Ii(this,s))},e.removePause=function(s){var r=this._first;for(s=Ii(this,s);r;)r._start===s&&r.data==="isPause"&&kr(r),r=r._next},e.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Vr!==o[l]&&o[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var a=[],o=zi(s),l=this._first,c=Ks(r),u;l;)l instanceof Qe?oR(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(s,r){r=r||{};var a=this,o=Ii(a,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Qe.to(a,gi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xe,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&sl(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},e.tweenFromTo=function(s,r,a){return this.tweenTo(r,gi({startAt:{time:Ii(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Q1(this,Ii(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Q1(this,Ii(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=Ie(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return Ba(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return n.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ba(this)},e.totalDuration=function(s){var r=0,a=this,o=a._last,l=Bi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,hs(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ie(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;sl(a,a===Be&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(Be._ts&&(ob(Be,Lf(s,Be)),ab=Kn.frame),Kn.frame>=Y1){Y1+=jn.autoSleep||120;var r=Be._first;if((!r||!r._ts)&&jn.autoSleep&&Kn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kn.sleep()}}},t})(iu);gi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var NR=function(t,e,i,s,r,a,o){var l=new zn(this._pt,t,e,0,1,o_,null,r),c=0,u=0,f,h,p,g,_,m,d,v;for(l.b=i,l.e=s,i+="",s+="",(d=~s.indexOf("random("))&&(s=al(s)),a&&(v=[i,s],a(v,t,e),i=v[0],s=v[1]),h=i.match(C0)||[];f=C0.exec(s);)g=f[0],_=s.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ga(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=C0.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(Z0.test(s)||d)&&(l.e=0),this._pt=l,l},i_=function(t,e,i,s,r,a,o,l,c,u){Xe(s)&&(s=s(r||0,t,a));var f=t[e],h=i!=="get"?i:Xe(f)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=Xe(f)?c?IR:Cb:a_,g;if(an(s)&&(~s.indexOf("random(")&&(s=al(s)),s.charAt(1)==="="&&(g=Ga(h,s)+(xn(h)||0),(g||g===0)&&(s=g))),!u||h!==s||k0)return!isNaN(h*s)&&s!==""?(g=new zn(this._pt,t,e,+h||0,s-(h||0),typeof f=="boolean"?zR:Rb,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!f&&!(e in t)&&If(e,s),NR.call(this,t,e,h,s,p,l||jn.stringFilter,c))},UR=function(t,e,i,s,r){if(Xe(t)&&(t=jc(t,r,e,i,s)),!fs(t)||t.style&&t.nodeType||An(t)||nb(t))return an(t)?jc(t,r,e,i,s):t;var a={},o;for(o in t)a[o]=jc(t[o],r,e,i,s);return a},s_=function(t,e,i,s,r,a){var o,l,c,u;if(Jn[t]&&(o=new Jn[t]).init(r,o.rawVars?e[t]:UR(e[t],s,r,a,i),i,s,a)!==!1&&(i._pt=l=new zn(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==el))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Vr,k0,r_=function n(t,e,i){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,f=s.yoyoEase,h=s.keyframes,p=s.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,v=d&&d.data==="nested"?d.vars.targets:m,S=t._overwrite==="auto"&&!W0,y=t.timeline,b=s.easeReverse||f,E,A,x,T,R,D,N,G,X,P,k,B,Z;if(y&&(!h||!r)&&(r="none"),t._ease=za(r,$c.ease),t._rEase=b&&(za(b)||t._ease),t._from=!y&&!!s.runBackwards,t._from&&(t.ratio=1),!y||h&&!s.stagger){if(G=m[0]?Hr(m[0]).harness:0,B=G&&s[G.prop],E=Uf(s,K0),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?wf:rR),_._lazy=0),a){if(kr(t._startAt=Qe.set(m,gi({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Qn(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn||!o&&!p)&&t._startAt.revert(wf),o&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),x=gi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qn(l),immediateRender:o,stagger:0,parent:d},E),B&&(x[G.prop]=B),kr(t._startAt=Qe.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn?t._startAt.revert(wf):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,xe,xe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Qn(l)||l&&!g,A=0;A<m.length;A++){if(R=m[A],N=R._gsap||j0(m)[A]._gsap,t._ptLookup[A]=P={},B0[N.id]&&Gr.length&&Nf(),k=v===m?A:v.indexOf(R),G&&(X=new G).init(R,B||E,t,k,v)!==!1&&(t._pt=T=new zn(t._pt,R,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function($){P[$]=T}),X.priority&&(D=1)),!G||B)for(x in E)Jn[x]&&(X=s_(x,E,t,k,R,v))?X.priority&&(D=1):P[x]=T=i_.call(t,R,x,"get",E[x],k,v,0,s.stringFilter);t._op&&t._op[A]&&t.kill(R,t._op[A]),S&&t._pt&&(Vr=t,Be.killTweensOf(R,P,t.globalTime(e)),Z=!t.parent,Vr=0),t._pt&&l&&(B0[N.id]=1)}D&&c_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,h&&e<=0&&y.render(Bi,!0,!0)},LR=function(t,e,i,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,p;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,p=t._targets.length;p--;){if(u=h[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return k0=1,t.vars[e]="+=0",r_(t,o),k0=0,l?tu(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(s||s===0)&&!r?s:u.s+(s||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=We(i)+xn(f.e)),f.b&&(f.b=u.s+xn(f.b))},OR=function(t,e){var i=t[0]?Hr(t[0]).harness:0,s=i&&i.aliases,r,a,o,l;if(!s)return e;r=nl({},e);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},PR=function(t,e,i,s){var r=e.ease||s||"power1.inOut",a,o;if(An(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},jc=function(t,e,i,s,r){return Xe(t)?t.call(e,i,s,r):an(t)&&~t.indexOf("random(")?al(t):t},Ab=Q0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wb={};Bn(Ab+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return wb[n]=1});var Qe=(function(n){tb(t,n);function t(i,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=n.call(this,a?s:Kc(s))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=s.parent||Be,v=(An(i)||nb(i)?Ks(i[0]):"length"in s)?[i]:zi(i),S,y,b,E,A,x,T,R;if(o._targets=v.length?j0(v):tu("GSAP target "+i+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||Af(c)||Af(u)){s=o.vars;var D=s.easeReverse||s.yoyoEase;if(S=o.timeline=new En({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),S.kill(),S.parent=S._dp=Zs(o),S._start=0,h||Af(c)||Af(u)){if(E=v.length,T=h&&gb(h),fs(h))for(A in h)~Ab.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(y=0;y<E;y++)b=Uf(s,wb),b.stagger=0,D&&(b.easeReverse=D),R&&nl(b,R),x=v[y],b.duration=+jc(c,Zs(o),y,x,v),b.delay=(+jc(u,Zs(o),y,x,v)||0)-o._delay,!h&&E===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),S.to(x,b,T?T(y,x,v):0),S._ease=ne.none;S.duration()?c=u=0:o.timeline=0}else if(g){Kc(gi(S.vars.defaults,{ease:"none"})),S._ease=za(g.ease||s.ease||"none");var N=0,G,X,P;if(An(g))g.forEach(function(k){return S.to(v,k,">")}),S.duration();else{b={};for(A in g)A==="ease"||A==="easeEach"||PR(A,g[A],b,g.easeEach);for(A in b)for(G=b[A].sort(function(k,B){return k.t-B.t}),N=0,y=0;y<G.length;y++)X=G[y],P={ease:X.e,duration:(X.t-(y?G[y-1].t:0))/100*c},P[A]=X.v,S.to(v,P,N),N+=P.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!W0&&(Vr=Zs(o),Be.killTweensOf(v),Vr=0),hs(d,Zs(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(f||!c&&!g&&o._start===Ie(d._time)&&Qn(f)&&hR(Zs(o))&&d.data!=="nested")&&(o._tTime=-xe,o.render(Math.max(0,-u)||0)),m&&fb(Zs(o),m),o}var e=t.prototype;return e.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-xe&&!u?l:s<xe?0:s,h,p,g,_,m,d,v,S;if(!c)dR(this,s,r,a);else if(f!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,r,a);if(h=Ie(f%_),f===l?(g=this._repeat,h=c):(m=Ie(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),d=this._yoyo&&g&1,d&&(h=c-h),m=il(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ie(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(db(this,u?s:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(pi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;S&&S.render(s<0?s:S._dur*S._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&z0(this,s,r,a),pi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&pi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&z0(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&kr(this,1),!r&&!(u&&!o)&&(f||o||d)&&(pi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,a,o,l){nu||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||r_(this,c),u=this._ease(c/this._dur),LR(this,s,r,a,o,u,c,l)?this.resetTo(s,r,a,o,1):(Ff(this,0),this.parent||ub(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Vr&&Vr.vars.overwrite!==!0)._first||Zc(this),this.parent&&a!==this.timeline.totalDuration()&&sl(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?zi(s):o,c=this._ptLookup,u=this._pt,f,h,p,g,_,m,d;if((!r||r==="all")&&cR(o,l))return r==="all"&&(this._pt=0),Zc(this);for(f=this._op=this._op||[],r!=="all"&&(an(r)&&(_={},Bn(r,function(v){return _[v]=1}),r=_),r=OR(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],r==="all"?(f[d]=r,g=h,p={}):(p=f[d]=f[d]||{},g=r);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Bf(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Zc(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Qc(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return Qc(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return Be.killTweensOf(s,r,a)},t})(iu);gi(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(n){Qe[n]=function(){var t=new En,e=V0.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var a_=function(t,e,i){return t[e]=i},Cb=function(t,e,i){return t[e](i)},IR=function(t,e,i,s){return t[e](s.fp,i)},BR=function(t,e,i){return t.setAttribute(e,i)},Vf=function(t,e){return Xe(t[e])?Cb:Pf(t[e])&&t.setAttribute?BR:a_},Rb=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},zR=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},o_=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},l_=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},FR=function(t,e,i,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,e,i),r=a},VR=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Bf(this,e,"_pt"):e.dep||(i=1),e=s;return!i},GR=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},c_=function(t){for(var e=t._pt,i,s,r,a;e;){for(i=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:a=e,e=i}t._pt=r},zn=(function(){function n(e,i,s,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=s,this.r=o||Rb,this.d=l||this,this.set=c||a_,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=GR,this.m=i,this.mt=r,this.tween=s},n})();Bn(Q0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return K0[n]=1});mi.TweenMax=mi.TweenLite=Qe;mi.TimelineLite=mi.TimelineMax=En;Be=new En({sortChildren:!1,defaults:$c,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=e_;var Fa=[],Rf={},HR=[],$1=0,kR=0,L0=function(t){return(Rf[t]||HR).map(function(e){return e()})},X0=function(){var t=Date.now(),e=[];t-$1>2&&(L0("matchMediaInit"),Fa.forEach(function(i){var s=i.queries,r=i.conditions,a,o,l,c;for(o in s)a=us.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),L0("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),$1=t,L0("matchMedia"))},Db=(function(){function n(e,i){this.selector=i&&G0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=kR++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,s,r){Xe(i)&&(r=s,s=i,i=Xe);var a=this,o=function(){var c=Le,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=G0(r)),Le=a,f=s.apply(a,arguments),Xe(f)&&a._r.push(f),Le=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Xe?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var s=Le;Le=null,i(this),Le=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof n?i.push.apply(i,s.getTweens()):s instanceof Qe&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=Fa.length;a--;)Fa[a].id===this.id&&Fa.splice(a,1)},t.revert=function(i){this.kill(i||{})},n})(),XR=(function(){function n(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=n.prototype;return t.add=function(i,s,r){fs(i)||(i={matches:i});var a=new Db(0,r||this.scope),o=a.conditions={},l,c,u;Le&&!a.selector&&(a.selector=Le.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(c in i)c==="all"?u=1:(l=us.matchMedia(i[c]),l&&(Fa.indexOf(a)<0&&Fa.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(X0):l.addEventListener("change",X0)));return u&&s(a,function(f){return a.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},n})(),Of={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Mb(s)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,i,s){an(t)&&(t=zi(t)[0]);var r=Hr(t||{}).get,a=i?cb:lb;return i==="native"&&(i=""),t&&(e?a((Jn[e]&&Jn[e].get||r)(t,e,i,s)):function(o,l,c){return a((Jn[o]&&Jn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=zi(t),t.length>1){var s=t.map(function(u){return wn.quickSetter(u,e,i)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}t=t[0]||{};var a=Jn[e],o=Hr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;el._pt=0,f.init(t,i?u+i:u,el,0,[t]),f.render(1,f),el._pt&&l_(1,el)}:o.set(t,l);return a?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,e,i){var s,r=wn.to(t,gi((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=za(t.ease,$c.ease)),Z1($c,t||{})},config:function(t){return Z1(jn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!Jn[o]&&!mi[o]&&tu(e+" effect requires "+o+" plugin.")}),R0[e]=function(o,l,c){return i(zi(o),gi(l||{},r),c)},a&&(En.prototype[e]=function(o,l,c){return this.add(R0[e](o,fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=za(e)},parseEase:function(t,e){return arguments.length?za(t,e):ne},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new En(t),s,r;for(i.smoothChildTiming=Qn(t.smoothChildTiming),Be.remove(i),i._dp=0,i._time=i._tTime=Be._time,s=Be._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Qe&&s.vars.onComplete===s._targets[0]))&&hs(i,s,s._start-s._delay),s=r;return hs(Be,i,0),i},context:function(t,e){return t?new Db(t,e):Le},matchMedia:function(t){return new XR(t)},matchMediaRefresh:function(){return Fa.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||X0()},addEventListener:function(t,e){var i=Rf[t]||(Rf[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Rf[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:SR,wrapYoyo:MR,distribute:gb,random:vb,snap:_b,normalize:xR,getUnit:xn,clamp:gR,splitColor:bb,toArray:zi,selector:G0,mapRange:xb,pipe:vR,unitize:yR,interpolate:bR,shuffle:mb},install:sb,effects:R0,ticker:Kn,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:Be,core:{PropTween:zn,globals:rb,Tween:Qe,Timeline:En,Animation:iu,getCache:Hr,_removeLinkedListItem:Bf,reverting:function(){return yn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return W0=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Of[n]=Qe[n]});Kn.add(En.updateRoot);el=Of.to({},{duration:0});var WR=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},qR=function(t,e){var i=t._targets,s,r,a;for(s in e)for(r=i.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=WR(a,s)),a&&a.modifier&&a.modifier(e[s],t,i[r],s))},O0=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(an(r)&&(l={},Bn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}qR(o,r)}}}},wn=Of.registerPlugin({name:"attr",init:function(t,e,i,s,r){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},O0("roundProps",H0),O0("modifiers"),O0("snap",_b))||Of;Qe.version=En.version=wn.version="3.15.0";ib=1;q0()&&rl();var YR=ne.Power0,ZR=ne.Power1,JR=ne.Power2,KR=ne.Power3,QR=ne.Power4,jR=ne.Linear,$R=ne.Quad,t2=ne.Cubic,e2=ne.Quart,n2=ne.Quint,i2=ne.Strong,s2=ne.Elastic,r2=ne.Back,a2=ne.SteppedEase,o2=ne.Bounce,l2=ne.Sine,c2=ne.Expo,u2=ne.Circ;var Nb,Wr,ll,m_,qa,h2,Ub,g_,f2=function(){return typeof window<"u"},js={},Wa=180/Math.PI,cl=Math.PI/180,ol=Math.atan2,Lb=1e8,__=/([A-Z])/g,d2=/(left|right|width|margin|padding|x)/i,p2=/[\s,\(]\S/,ds={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},h_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},m2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},g2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_2=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},v2=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Gb=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Hb=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},y2=function(t,e,i){return t.style[e]=i},x2=function(t,e,i){return t.style.setProperty(e,i)},S2=function(t,e,i){return t._gsap[e]=i},M2=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},b2=function(t,e,i,s,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},T2=function(t,e,i,s,r){var a=t._gsap;a[e]=i,a.renderTransform(r,a)},ze="transform",$n=ze+"Origin",E2=function n(t,e){var i=this,s=this.target,r=s.style,a=s._gsap;if(t in js&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ds[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Qs(s,o)}):this.tfm[t]=a.x?a[t]:Qs(s,t),t===$n&&(this.tfm.zOrigin=a.zOrigin);else return ds.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(ze)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=ze}(r||e)&&this.props.push(t,e,r[t])},kb=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},A2=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(__,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=g_(),(!r||!r.isStart)&&!i[ze]&&(kb(i),s.zOrigin&&i[$n]&&(i[$n]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Xb=function(t,e){var i={target:t,props:[],revert:A2,save:E2};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},Wb,f_=function(t,e){var i=Wr.createElementNS?Wr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wr.createElement(t);return i&&i.style?i:Wr.createElement(t)},_i=function n(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(__,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&n(t,ul(e)||e,1)||""},Ob="O,Moz,ms,Ms,Webkit".split(","),ul=function(t,e,i){var s=e||qa,r=s.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ob[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Ob[a]:"")+t},d_=function(){f2()&&window.document&&(Nb=window,Wr=Nb.document,ll=Wr.documentElement,qa=f_("div")||{style:{}},h2=f_("div"),ze=ul(ze),$n=ze+"Origin",qa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wb=!!ul("perspective"),g_=wn.core.reverting,m_=1)},Pb=function(t){var e=t.ownerSVGElement,i=f_("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),ll.appendChild(i);try{r=s.getBBox()}catch{}return i.removeChild(s),ll.removeChild(i),r},Ib=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},qb=function(t){var e,i;try{e=t.getBBox()}catch{e=Pb(t),i=1}return e&&(e.width||e.height)||i||(e=Pb(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ib(t,["x","cx","x1"])||0,y:+Ib(t,["y","cy","y1"])||0,width:0,height:0}:e},Yb=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qb(t))},Yr=function(t,e){if(e){var i=t.style,s;e in js&&e!==$n&&(e=ze),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(__,"-$1").toLowerCase())):i.removeAttribute(e)}},qr=function(t,e,i,s,r,a){var o=new zn(t._pt,e,i,0,1,a?Hb:Gb);return t._pt=o,o.b=s,o.e=r,t._props.push(i),o},Bb={deg:1,rad:1,turn:1},w2={grid:1,flex:1},Zr=function n(t,e,i,s){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=qa.style,l=d2.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",g,_,m,d;if(s===a||!r||Bb[s]||Bb[a])return r;if(a!=="px"&&!h&&(r=n(t,e,i,"px")),d=t.getCTM&&Yb(t),(p||a==="%")&&(js[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],We(p?r/g*f:r/100*g);if(o[l?"width":"height"]=f+(h?a:s),_=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Kn.time&&!m.uncache)return We(r/m.width*f);if(p&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=f+s,g=t[u],v?t.style[e]=v:Yr(t,e)}else(p||a==="%")&&!w2[_i(_,"display")]&&(o.position=_i(t,"position")),_===t&&(o.position="static"),_.appendChild(qa),g=qa[u],_.removeChild(qa),o.position="absolute";return l&&p&&(m=Hr(_),m.time=Kn.time,m.width=_[u]),We(h?g*r/f:g&&r?f/g*r:0)},Qs=function(t,e,i,s){var r;return m_||d_(),e in ds&&e!=="transform"&&(e=ds[e],~e.indexOf(",")&&(e=e.split(",")[0])),js[e]&&e!=="transform"?(r=ou(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Hf(_i(t,$n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Gf[e]&&Gf[e](t,e,i)||_i(t,e)||$0(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Zr(t,e,r,i)+i:r},C2=function(t,e,i,s){if(!i||i==="none"){var r=ul(e,t,1),a=r&&_i(t,r,1);a&&a!==i?(e=r,i=a):e==="borderColor"&&(i=_i(t,"borderTopColor"))}var o=new zn(this._pt,t.style,e,0,1,o_),l=0,c=0,u,f,h,p,g,_,m,d,v,S,y,b;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=_i(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[e],t.style[e]=s,s=_i(t,e)||s,_?t.style[e]=_:Yr(t,e)),u=[i,s],e_(u),i=u[0],s=u[1],h=i.match(Va)||[],b=s.match(Va)||[],b.length){for(;f=Va.exec(s);)m=f[0],v=s.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ga(p,m)+y),d=parseFloat(m),S=m.substr((d+"").length),l=Va.lastIndex-S.length,S||(S=S||jn.units[e]||y,l===s.length&&(s+=S,o.e+=S)),y!==S&&(p=Zr(t,e,_,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=e==="display"&&s==="none"?Hb:Gb;return Z0.test(s)&&(o.e=0),this._pt=o,o},zb={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},R2=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=zb[i]||i,e[1]=zb[s]||s,e.join(" ")},D2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,r=e.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],js[o]&&(l=1,o=o==="transformOrigin"?$n:ze),Yr(i,o);l&&(Yr(i,ze),a&&(a.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ou(i,1),a.uncache=1,kb(s)))}},Gf={clearProps:function(t,e,i,s,r){if(r.data!=="isFromStart"){var a=t._pt=new zn(t._pt,e,i,0,0,D2);return a.u=s,a.pr=-10,a.tween=r,t._props.push(i),1}}},au=[1,0,0,1,0,0],Zb={},Jb=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Fb=function(t){var e=_i(t,ze);return Jb(e)?au:e.substr(7).match(Y0).map(We)},v_=function(t,e){var i=t._gsap||Hr(t),s=t.style,r=Fb(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?au:r):(r===au&&!t.offsetParent&&t!==ll&&!i.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ll.appendChild(t)),r=Fb(t),l?s.display=l:Yr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ll.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},p_=function(t,e,i,s,r,a){var o=t._gsap,l=r||v_(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],S=e.split(" "),y=parseFloat(S[0])||0,b=parseFloat(S[1])||0,E,A,x,T;i?l!==au&&(A=p*m-g*_)&&(x=y*(m/A)+b*(-_/A)+(_*v-m*d)/A,T=y*(-g/A)+b*(p/A)-(p*v-g*d)/A,y=x,b=T):(E=qb(t),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(S[1]||S[0]).indexOf("%")?b/100*E.height:b)),s||s!==!1&&o.smooth?(d=y-c,v=b-u,o.xOffset=f+(d*p+v*_)-d,o.yOffset=h+(d*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!s,o.origin=e,o.originIsAbsolute=!!i,t.style[$n]="0px 0px",a&&(qr(a,o,"xOrigin",c,y),qr(a,o,"yOrigin",u,b),qr(a,o,"xOffset",f,o.xOffset),qr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},ou=function(t,e){var i=t._gsap||new n_(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=_i(t,$n)||"0",u,f,h,p,g,_,m,d,v,S,y,b,E,A,x,T,R,D,N,G,X,P,k,B,Z,$,it,at,mt,Kt,Qt,Gt;return u=f=h=_=m=d=v=S=y=0,p=g=1,i.svg=!!(t.getCTM&&Yb(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),s.scale=s.rotate=s.translate="none"),A=v_(t,i.svg),i.svg&&(i.uncache?(Z=t.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),p_(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),b=i.xOrigin||0,E=i.yOrigin||0,A!==au&&(D=A[0],N=A[1],G=A[2],X=A[3],u=P=A[4],f=k=A[5],A.length===6?(p=Math.sqrt(D*D+N*N),g=Math.sqrt(X*X+G*G),_=D||N?ol(N,D)*Wa:0,v=G||X?ol(G,X)*Wa+_:0,v&&(g*=Math.abs(Math.cos(v*cl))),i.svg&&(u-=b-(b*D+E*G),f-=E-(b*N+E*X))):(Gt=A[6],Kt=A[7],it=A[8],at=A[9],mt=A[10],Qt=A[11],u=A[12],f=A[13],h=A[14],x=ol(Gt,mt),m=x*Wa,x&&(T=Math.cos(-x),R=Math.sin(-x),B=P*T+it*R,Z=k*T+at*R,$=Gt*T+mt*R,it=P*-R+it*T,at=k*-R+at*T,mt=Gt*-R+mt*T,Qt=Kt*-R+Qt*T,P=B,k=Z,Gt=$),x=ol(-G,mt),d=x*Wa,x&&(T=Math.cos(-x),R=Math.sin(-x),B=D*T-it*R,Z=N*T-at*R,$=G*T-mt*R,Qt=X*R+Qt*T,D=B,N=Z,G=$),x=ol(N,D),_=x*Wa,x&&(T=Math.cos(x),R=Math.sin(x),B=D*T+N*R,Z=P*T+k*R,N=N*T-D*R,k=k*T-P*R,D=B,P=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=We(Math.sqrt(D*D+N*N+G*G)),g=We(Math.sqrt(k*k+Gt*Gt)),x=ol(P,k),v=Math.abs(x)>2e-4?x*Wa:0,y=Qt?1/(Qt<0?-Qt:Qt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Jb(_i(t,ze)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=We(p),i.scaleY=We(g),i.rotation=We(_)+o,i.rotationX=We(m)+o,i.rotationY=We(d)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(s[$n]=Hf(c)),i.xOffset=i.yOffset=0,i.force3D=jn.force3D,i.renderTransform=i.svg?U2:Wb?Kb:N2,i.uncache=0,i},Hf=function(t){return(t=t.split(" "))[0]+" "+t[1]},u_=function(t,e,i){var s=xn(e);return We(parseFloat(e)+parseFloat(Zr(t,"x",i+"px",s)))+s},N2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kb(t,e)},ka="0deg",ru="0px",Xa=") ",Kb=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,S=i.zOrigin,y="",b=d==="auto"&&t&&t!==1||d===!0;if(S&&(f!==ka||u!==ka)){var E=parseFloat(u)*cl,A=Math.sin(E),x=Math.cos(E),T;E=parseFloat(f)*cl,T=Math.cos(E),a=u_(v,a,A*T*-S),o=u_(v,o,-Math.sin(E)*-S),l=u_(v,l,x*T*-S+S)}m!==ru&&(y+="perspective("+m+Xa),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(b||a!==ru||o!==ru||l!==ru)&&(y+=l!==ru||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Xa),c!==ka&&(y+="rotate("+c+Xa),u!==ka&&(y+="rotateY("+u+Xa),f!==ka&&(y+="rotateX("+f+Xa),(h!==ka||p!==ka)&&(y+="skew("+h+", "+p+Xa),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Xa),v.style[ze]=y||"translate(0, 0)"},U2=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,S=parseFloat(a),y=parseFloat(o),b,E,A,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cl,c*=cl,b=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=cl,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),b*=T,E*=T)),b=We(b),E=We(E),A=We(A),x=We(x)):(b=f,x=h,E=A=0),(S&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(S=Zr(p,"x",a,"px"),y=Zr(p,"y",o,"px")),(g||_||m||d)&&(S=We(S+g-(g*b+_*A)+m),y=We(y+_-(g*E+_*x)+d)),(s||r)&&(T=p.getBBox(),S=We(S+s/100*T.width),y=We(y+r/100*T.height)),T="matrix("+b+","+E+","+A+","+x+","+S+","+y+")",p.setAttribute("transform",T),v&&(p.style[ze]=T)},L2=function(t,e,i,s,r){var a=360,o=an(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Wa:1),c=l-s,u=s+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Lb)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Lb)%a-~~(c/a)*a)),t._pt=h=new zn(t._pt,e,i,s,c,m2),h.e=u,h.u="deg",t._props.push(i),h},Vb=function(t,e){for(var i in e)t[i]=e[i];return t},O2=function(t,e,i){var s=Vb({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,p,g;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ze]=e,o=ou(i,1),Yr(i,ze),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ze],a[ze]=e,o=ou(i,1),a[ze]=c);for(l in js)c=s[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=xn(c),g=xn(u),f=p!==g?Zr(i,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new zn(t._pt,o,l,f,h-f,h_),t._pt.u=g||0,t._props.push(l));Vb(o,s)};Bn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",s="Bottom",r="Left",a=(t<3?[e,i,s,r]:[e+r,e+i,s+i,s+r]).map(function(o){return t<2?n+o:"border"+o+n});Gf[t>1?"border"+n:n]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return Qs(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,p,f)}});var y_={name:"css",register:d_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,r){var a=this._props,o=t.style,l=i.vars.startAt,c,u,f,h,p,g,_,m,d,v,S,y,b,E,A,x,T;m_||d_(),this.styles=this.styles||Xb(t),x=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Jn[_]&&s_(_,e,i,s,t,r)))){if(p=typeof u,g=Gf[_],p==="function"&&(u=u.call(i,s,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=al(u)),g)g(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Js.lastIndex=0,Js.test(c)||(m=xn(c),d=xn(u),d?m!==d&&(c=Zr(t,_,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,s,r,0,0,_),a.push(_),x.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,s,t,r):l[_],an(c)&&~c.indexOf("random(")&&(c=al(c)),xn(c+"")||c==="auto"||(c+=jn.units[_]||xn(Qs(t,_))||""),(c+"").charAt(1)==="="&&(c=Qs(t,_))):c=Qs(t,_),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in ds&&(_==="autoAlpha"&&(h===1&&Qs(t,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,o.visibility),qr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ds[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in js,S){if(this.styles.save(_),T=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=_i(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=u,u=_i(t,"perspective"),R?t.style.perspective=R:Yr(t,"perspective")}f=parseFloat(u)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||ou(t,e.parseTransform),E=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new zn(this._pt,o,ze,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new zn(this._pt,b,"scaleY",b.scaleY,(v?Ga(b.scaleY,v+f):f)-b.scaleY||0,h_),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push($n,0,o[$n]),u=R2(u),b.svg?p_(t,u,0,E,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==b.zOrigin&&qr(this,b,"zOrigin",b.zOrigin,d),qr(this,o,_,Hf(c),Hf(u)));continue}else if(_==="svgOrigin"){p_(t,u,1,E,0,this);continue}else if(_ in Zb){L2(this,b,_,h,v?Ga(h,v+u):u);continue}else if(_==="smoothOrigin"){qr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){O2(this,u,t);continue}}else _ in o||(_=ul(_)||_);if(S||(f||f===0)&&(h||h===0)&&!p2.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),d=xn(u)||(_ in jn.units?jn.units[_]:m),m!==d&&(h=Zr(t,_,c,d)),this._pt=new zn(this._pt,S?b:o,_,h,(v?Ga(h,v+f):f)-h,!S&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?v2:h_),this._pt.u=d||0,S&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=_2):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=g2);else if(_ in o)C2.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,s,r);else if(_!=="parseTransform"){If(_,u);continue}S||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),a.push(_)}}A&&c_(this)},render:function(t,e){if(e.tween._time||!g_())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Qs,aliases:ds,getSetter:function(t,e,i){var s=ds[e];return s&&s.indexOf(",")<0&&(e=s),e in js&&e!==$n&&(t._gsap.x||Qs(t,"x"))?i&&Ub===i?e==="scale"?M2:S2:(Ub=i||{})&&(e==="scale"?b2:T2):t.style&&!Pf(t.style[e])?y2:~e.indexOf("-")?x2:Vf(t,e)},core:{_removeProperty:Yr,_getMatrix:v_}};wn.utils.checkPrefix=ul;wn.core.getStyleSaver=Xb;(function(n,t,e,i){var s=Bn(n+","+t+","+e,function(r){js[r]=1});Bn(t,function(r){jn.units[r]="deg",Zb[r]=1}),ds[s[13]]=n+","+t,Bn(i,function(r){var a=r.split(":");ds[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){jn.units[n]="px"});wn.registerPlugin(y_);var Fn=wn.registerPlugin(y_)||wn,DO=Fn.core.Tween;var Qb=typeof document<"u"?Jr.useLayoutEffect:Jr.useEffect,jb=n=>n&&!Array.isArray(n)&&typeof n=="object",kf=[],P2={},$b=Fn,lu=(n,t=kf)=>{let e=P2;jb(n)?(e=n,n=null,t="dependencies"in e?e.dependencies:kf):jb(t)&&(e=t,t="dependencies"in e?e.dependencies:kf),n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");let{scope:i,revertOnUpdate:s}=e,r=(0,Jr.useRef)(!1),a=(0,Jr.useRef)($b.context(()=>{},i)),o=(0,Jr.useRef)(c=>a.current.add(null,c)),l=t&&t.length&&!s;return l&&Qb(()=>(r.current=!0,()=>a.current.revert()),kf),Qb(()=>{if(n&&a.current.add(n,i),!l||!r.current)return()=>a.current.revert()},t),{context:a.current,contextSafe:o.current}};lu.register=n=>{$b=n};lu.headless=!0;var I2={"cover-01":"https://music.apple.com/cn/album/liszt-hungarian-rhapsodies/1452171951","cover-02":"https://music.apple.com/cn/album/transcendental-liszt-%C3%A9tudes/1440779332","cover-03":"https://music.apple.com/cn/album/chopin-nocturnes/715385413","cover-04":"https://music.apple.com/cn/album/50-of-the-best-chopin/479082366","cover-05":"https://music.apple.com/cn/album/rachmaninoff-150/1705084833","cover-06":"https://music.apple.com/cn/album/rachmaninoff-symphony-no-2/1720950253","cover-07":"https://music.apple.com/cn/album/heifetz-tchaikovsky-mendelssohn-concertos/1719321513","cover-08":"https://music.apple.com/cn/album/sibelius-violin-concerto-in-d-minor-op-47-ep/458436919","cover-09":"https://music.apple.com/cn/album/sviatoslav-richter-the-complete-album-collection/946039986","cover-10":"https://music.apple.com/cn/album/sviatoslav-richter-pianist-of-the-century-complete-dg-solo/1452336583","cover-11":"https://music.apple.com/cn/album/great-recordings-of-the-century-liszt/691349969","cover-12":"https://music.apple.com/cn/album/gy%C3%B6rgy-cziffra-the-early-columbia-records/903181458"},Fi=(n,t,e,i)=>({id:n,title:t,artist:e,coverSrc:`./assets/covers/${n}.jpg`,tracks:i,appleMusicUrl:I2[n]}),hl=[Fi("cover-01","The 19 Hungarian Rhapsodies","Roberto Szidon",["Hungarian Rhapsody No. 1 in C-sharp Minor","Hungarian Rhapsody No. 2 in C-sharp Minor","Hungarian Rhapsody No. 3 in B-flat Major","Hungarian Rhapsody No. 4 in E-flat Major","Hungarian Rhapsody No. 5 in E Minor"]),Fi("cover-02","Transcendental","Daniil Trifonov",["Prelude in C Major","Fus\xE9es","Paysage","Mazeppa","Chasse-neige"]),Fi("cover-03","The Nocturnes","Arthur Rubinstein \xB7 Fr\xE9d\xE9ric Chopin",["Nocturne in B-flat Minor, Op. 9 No. 1","Nocturne in E-flat Major, Op. 9 No. 2","Nocturne in F-sharp Major, Op. 15 No. 2","Nocturne in C Minor, Op. 48 No. 1","Nocturne in E Major, Op. 62 No. 2"]),Fi("cover-04","50 of the Best: Chopin","Fr\xE9d\xE9ric Chopin",["Ballade No. 1 in G Minor, Op. 23","Etude in C Minor, Op. 10 No. 12","Prelude in D-flat Major, Op. 28 No. 15","Polonaise in A-flat Major, Op. 53","Waltz in C-sharp Minor, Op. 64 No. 2"]),Fi("cover-05","Rachmaninoff 150","Kirill Gerstein \xB7 Berlin Philharmonic \xB7 Kirill Petrenko",["Piano Concerto No. 2: I. Moderato","Piano Concerto No. 2: II. Adagio sostenuto","Piano Concerto No. 2: III. Allegro scherzando","M\xE9lodie, Op. 3 No. 3","Variations on a Theme of Corelli, Op. 42"]),Fi("cover-06","Rachmaninoff: Symphony No. 2","Berlin Philharmonic \xB7 Kirill Petrenko",["I. Largo - Allegro moderato","II. Allegro molto","III. Adagio","IV. Allegro vivace"]),Fi("cover-07","Violin Concertos","Jascha Heifetz",["Tchaikovsky: Violin Concerto in D Major, Op. 35","Mendelssohn: Violin Concerto in E Minor, Op. 64","Tchaikovsky: Canzonetta","Mendelssohn: Allegro molto appassionato"]),Fi("cover-08","Violin Concerto in D Minor","Jascha Heifetz",["Sibelius: Violin Concerto in D Minor, Op. 47","Sibelius: Adagio di molto","Glazunov: Violin Concerto in A Minor, Op. 82","Sarasate: Zigeunerweisen, Op. 20"]),Fi("cover-09","The Complete Album Collection","Sviatoslav Richter",["Bach: The Well-Tempered Clavier, Book I","Beethoven: Piano Sonata No. 23, Op. 57","Schubert: Piano Sonata in B-flat Major, D. 960","Schumann: Fantasie in C Major, Op. 17","Prokofiev: Piano Sonata No. 7, Op. 83"]),Fi("cover-10","Pianist of the Century","Sviatoslav Richter",["Bach: Partita No. 1 in B-flat Major, BWV 825","Haydn: Piano Sonata in E-flat Major, Hob. XVI:52","Liszt: Piano Sonata in B Minor, S. 178","Debussy: Pr\xE9ludes, Book I","Rachmaninoff: \xC9tudes-tableaux, Op. 39"]),Fi("cover-11","Hungarian Rhapsodies","Georges Cziffra",["Hungarian Rhapsody No. 2 in C-sharp Minor","Hungarian Rhapsody No. 6 in D-flat Major","Hungarian Rhapsody No. 12 in C-sharp Minor","Hungarian Rhapsody No. 15 in A Minor","Hungarian Rhapsody No. 19 in D Minor"]),Fi("cover-12","The Early Columbia Recordings","Gy\xF6rgy Cziffra",["Liszt: La Campanella","Liszt: Mephisto Waltz No. 1","Chopin: Etude in A-flat Major, Op. 25 No. 1","Chopin: Scherzo No. 3 in C-sharp Minor","Brahms: Paganini Variations, Op. 35"])];var tT={"cover-01":"./assets/covers/cover-01.jpg","cover-02":"./assets/covers/cover-02.jpg","cover-03":"./assets/covers/cover-03.jpg","cover-04":"./assets/covers/cover-04.jpg","cover-05":"./assets/covers/cover-05.jpg","cover-06":"./assets/covers/cover-06.jpg","cover-07":"./assets/covers/cover-07.jpg","cover-08":"./assets/covers/cover-08.jpg","cover-09":"./assets/covers/cover-09.jpg","cover-10":"./assets/covers/cover-10.jpg","cover-11":"./assets/covers/cover-11.jpg","cover-12":"./assets/covers/cover-12.jpg"};var TT=0,ev=1,ET=2;var Uu=1,AT=2,Fl=3,rr=0,Vn=1,Ss=2,Ms=0,to=1,nv=2,iv=3,sv=4,wT=5;var ia=100,CT=101,RT=102,DT=103,NT=104,UT=200,LT=201,OT=202,PT=203,fd=204,dd=205,IT=206,BT=207,zT=208,FT=209,VT=210,GT=211,HT=212,kT=213,XT=214,pd=0,md=1,gd=2,eo=3,_d=4,vd=5,yd=6,xd=7,rv=0,WT=1,qT=2,Ki=0,av=1,ov=2,lv=3,Lu=4,cv=5,uv=6,hv=7;var fv=300,ua=301,io=302,Wd=303,qd=304,Ou=306,Al=1e3,gs=1001,Sd=1002,dn=1003,YT=1004;var Pu=1005;var Mn=1006,Yd=1007;var bs=1008;var ni=1009,dv=1010,pv=1011,Vl=1012,Zd=1013,Qi=1014,ji=1015,Ts=1016,Jd=1017,Kd=1018,Gl=1020,mv=35902,gv=35899,_v=1021,vv=1022,Hi=1023,_s=1026,ha=1027,yv=1028,Qd=1029,fa=1030,jd=1031;var $d=1033,Iu=33776,Bu=33777,zu=33778,Fu=33779,tp=35840,ep=35841,np=35842,ip=35843,sp=36196,rp=37492,ap=37496,op=37488,lp=37489,Vu=37490,cp=37491,up=37808,hp=37809,fp=37810,dp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,yp=37817,xp=37818,Sp=37819,Mp=37820,bp=37821,Tp=36492,Ep=36494,Ap=36495,wp=36283,Cp=36284,Gu=36285,Rp=36286;var pu=2300,Md=2301,ud=2302,X_=2303,W_=2400,q_=2401,Y_=2402;var ZT=3200;var Dp=0,JT=1,lr="",Sn="srgb",mu="srgb-linear",gu="linear",le="srgb";var Qa=7680;var Z_=519,KT=512,QT=513,jT=514,Np=515,$T=516,tE=517,Up=518,eE=519,J_=35044;var xv="300 es",Ji=2e3,wl=2001;function B2(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function z2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nE(){let n=Cl("canvas");return n.style.display="block",n}var eT={},Rl=null;function Sv(...n){let t="THREE."+n.shift();Rl?Rl("log",t,...n):console.log(t,...n)}function iE(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=iE(n);let t="THREE."+n.shift();if(Rl)Rl("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Dt(...n){n=iE(n);let t="THREE."+n.shift();if(Rl)Rl("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function $a(...n){let t=n.join(" ");t in eT||(eT[t]=!0,Nt(...n))}function sE(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var rE={[pd]:md,[gd]:yd,[_d]:xd,[eo]:vd,[md]:pd,[yd]:gd,[xd]:_d,[vd]:eo},vs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var x_=Math.PI/180,bd=180/Math.PI;function Hu(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function F2(n,t){return(n%t+t)%t}function S_(n,t,e){return(1-e)*n+e*t}function cu(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Av=class Av{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Av.prototype.isVector2=!0;var Zt=Av,ys=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);d=Math.sin(d*v)/S,o=Math.sin(o*v)/S,l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+_*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wv=class wv{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nT.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nT.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return M_.copy(this).projectOnVector(t),this.sub(M_)}reflect(t){return this.sub(M_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wv.prototype.isVector3=!0;var V=wv,M_=new V,nT=new ys,Cv=class Cv{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],v=s[1],S=s[4],y=s[7],b=s[2],E=s[5],A=s[8];return r[0]=a*_+o*v+l*b,r[3]=a*m+o*S+l*E,r[6]=a*d+o*y+l*A,r[1]=c*_+u*v+f*b,r[4]=c*m+u*S+f*E,r[7]=c*d+u*y+f*A,r[2]=h*_+p*v+g*b,r[5]=h*m+p*S+g*E,r[8]=h*d+p*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $a("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(b_.makeScale(t,e)),this}rotate(t){return $a("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(b_.makeRotation(-t)),this}translate(t,e){return $a("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(b_.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Cv.prototype.isMatrix3=!0;var It=Cv,b_=new It,iT=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sT=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V2(){let n={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=El(s.r),s.g=El(s.g),s.b=El(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===lr?gu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mu]:{primaries:t,whitePoint:i,transfer:gu,toXYZ:iT,fromXYZ:sT,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:iT,fromXYZ:sT,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}var te=V2();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function El(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fl,Td=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fl===void 0&&(fl=Cl("canvas")),fl.width=t.width,fl.height=t.height;let s=fl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fl}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sr(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sr(e[i]/255)*255):e[i]=sr(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},G2=0,Dl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=Hu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(T_(s[a].image)):r.push(T_(s[a]))}else r=T_(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function T_(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var H2=0,E_=new V,Nn=class n extends vs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gs,s=gs,r=Mn,a=bs,o=Hi,l=ni,c=n.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Hu(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(E_).x}get height(){return this.source.getSize(E_).y}get depth(){return this.source.getSize(E_).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=fv;Nn.DEFAULT_ANISOTROPY=1;var Rv=class Rv{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(p+1)/2,b=(d+1)/2,E=(u+h)/4,A=(f+_)/4,x=(g+m)/4;return S>y&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=A/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=x/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rv.prototype.isVector4=!0;var Pe=Rv,Ed=class extends vs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Nn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Dl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Ed{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_u=class extends Nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ad=class extends Nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xd=class Xd{constructor(t,e,i,s,r,a,o,l,c,u,f,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,f,h,p,g,_,m)}set(t,e,i,s,r,a,o,l,c,u,f,h,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xd().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/dl.setFromMatrixColumn(t,0).length(),r=1/dl.setFromMatrixColumn(t,1).length(),a=1/dl.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){let h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k2,t,X2)}lookAt(t,e,i){let s=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Kr.crossVectors(i,vi),Kr.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Kr.crossVectors(i,vi)),Kr.normalize(),Xf.crossVectors(vi,Kr),s[0]=Kr.x,s[4]=Xf.x,s[8]=vi.x,s[1]=Kr.y,s[5]=Xf.y,s[9]=vi.y,s[2]=Kr.z,s[6]=Xf.z,s[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],S=i[7],y=i[11],b=i[15],E=s[0],A=s[4],x=s[8],T=s[12],R=s[1],D=s[5],N=s[9],G=s[13],X=s[2],P=s[6],k=s[10],B=s[14],Z=s[3],$=s[7],it=s[11],at=s[15];return r[0]=a*E+o*R+l*X+c*Z,r[4]=a*A+o*D+l*P+c*$,r[8]=a*x+o*N+l*k+c*it,r[12]=a*T+o*G+l*B+c*at,r[1]=u*E+f*R+h*X+p*Z,r[5]=u*A+f*D+h*P+p*$,r[9]=u*x+f*N+h*k+p*it,r[13]=u*T+f*G+h*B+p*at,r[2]=g*E+_*R+m*X+d*Z,r[6]=g*A+_*D+m*P+d*$,r[10]=g*x+_*N+m*k+d*it,r[14]=g*T+_*G+m*B+d*at,r[3]=v*E+S*R+y*X+b*Z,r[7]=v*A+S*D+y*P+b*$,r[11]=v*x+S*N+y*k+b*it,r[15]=v*T+S*G+y*B+b*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15],v=l*p-c*h,S=o*p-c*f,y=o*h-l*f,b=a*p-c*u,E=a*h-l*u,A=a*f-o*u;return e*(_*v-m*S+d*y)-i*(g*v-m*b+d*E)+s*(g*S-_*b+d*A)-r*(g*y-_*E+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=e*o-i*a,S=e*l-s*a,y=e*c-r*a,b=i*l-s*o,E=i*c-r*o,A=s*c-r*l,x=u*_-f*g,T=u*m-h*g,R=u*d-p*g,D=f*m-h*_,N=f*d-p*_,G=h*d-p*m,X=v*G-S*N+y*D+b*R-E*T+A*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/X;return t[0]=(o*G-l*N+c*D)*P,t[1]=(s*N-i*G-r*D)*P,t[2]=(_*A-m*E+d*b)*P,t[3]=(h*E-f*A-p*b)*P,t[4]=(l*R-a*G-c*T)*P,t[5]=(e*G-s*R+r*T)*P,t[6]=(m*y-g*A-d*S)*P,t[7]=(u*A-h*y+p*S)*P,t[8]=(a*N-o*R+c*x)*P,t[9]=(i*R-e*N-r*x)*P,t[10]=(g*E-_*y+d*v)*P,t[11]=(f*y-u*E-p*v)*P,t[12]=(o*T-a*D-l*x)*P,t[13]=(e*D-i*T+s*x)*P,t[14]=(_*S-g*b-m*v)*P,t[15]=(u*b-f*S+h*v)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,g=r*f,_=a*u,m=a*f,d=o*f,v=l*c,S=l*u,y=l*f,b=i.x,E=i.y,A=i.z;return s[0]=(1-(_+d))*b,s[1]=(p+y)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+d))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-v)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=dl.set(s[0],s[1],s[2]).length(),o=dl.set(s[4],s[5],s[6]).length(),l=dl.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qi.copy(this);let c=1/a,u=1/o,f=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=f,qi.elements[9]*=f,qi.elements[10]*=f,e.setFromRotationMatrix(qi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Ji,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Ji)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===wl)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ji,l=!1){let c=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Ji)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===wl)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Xd.prototype.isMatrix4=!0;var Oe=Xd,dl=new V,qi=new Oe,k2=new V(0,0,0),X2=new V(1,1,1),Kr=new V,Xf=new V,vi=new V,rT=new Oe,aT=new ys,ar=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rT.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rT,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return aT.setFromEuler(this),this.setFromQuaternion(aT,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ar.DEFAULT_ORDER="XYZ";var Nl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},W2=0,oT=new V,pl=new ys,$s=new Oe,Wf=new V,uu=new V,q2=new V,Y2=new ys,lT=new V(1,0,0),cT=new V(0,1,0),uT=new V(0,0,1),hT={type:"added"},Z2={type:"removed"},ml={type:"childadded",child:null},A_={type:"childremoved",child:null},Un=class n extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Hu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new ar,i=new ys,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new It}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pl.setFromAxisAngle(t,e),this.quaternion.multiply(pl),this}rotateOnWorldAxis(t,e){return pl.setFromAxisAngle(t,e),this.quaternion.premultiply(pl),this}rotateX(t){return this.rotateOnAxis(lT,t)}rotateY(t){return this.rotateOnAxis(cT,t)}rotateZ(t){return this.rotateOnAxis(uT,t)}translateOnAxis(t,e){return oT.copy(t).applyQuaternion(this.quaternion),this.position.add(oT.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lT,t)}translateY(t){return this.translateOnAxis(cT,t)}translateZ(t){return this.translateOnAxis(uT,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($s.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wf.copy(t):Wf.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$s.lookAt(uu,Wf,this.up):$s.lookAt(Wf,uu,this.up),this.quaternion.setFromRotationMatrix($s),s&&($s.extractRotation(s.matrixWorld),pl.setFromRotationMatrix($s),this.quaternion.premultiply(pl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hT),ml.child=t,this.dispatchEvent(ml),ml.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z2),A_.child=t,this.dispatchEvent(A_),A_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$s.multiply(t.parent.matrixWorld)),t.applyMatrix4($s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hT),ml.child=t,this.dispatchEvent(ml),ml.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,t,q2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uu,Y2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Un.DEFAULT_UP=new V(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ja=class extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}},J2={type:"move"},Ul=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},aE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},qf={h:0,s:0,l:0};function w_(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=F2(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=w_(a,r,t+1/3),this.g=w_(a,r,t),this.b=w_(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let i=aE[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=El(t.r),this.g=El(t.g),this.b=El(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return te.workingToColorSpace(Rn.copy(this),t),Math.round(ie(Rn.r*255,0,255))*65536+Math.round(ie(Rn.g*255,0,255))*256+Math.round(ie(Rn.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Rn.copy(this),e);let i=Rn.r,s=Rn.g,r=Rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Sn){te.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,i=Rn.g,s=Rn.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qr),this.setHSL(Qr.h+t,Qr.s+e,Qr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qr),t.getHSL(qf);let i=S_(Qr.h,qf.h,e),s=S_(Qr.s,qf.s,e),r=S_(Qr.l,qf.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Jt;Jt.NAMES=aE;var vu=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yi=new V,tr=new V,C_=new V,er=new V,gl=new V,_l=new V,fT=new V,R_=new V,D_=new V,N_=new V,U_=new Pe,L_=new Pe,O_=new Pe,na=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Yi.subVectors(t,e),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Yi.subVectors(s,e),tr.subVectors(i,e),C_.subVectors(t,e);let a=Yi.dot(Yi),o=Yi.dot(tr),l=Yi.dot(C_),c=tr.dot(tr),u=tr.dot(C_),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,er.x),l.addScaledVector(a,er.y),l.addScaledVector(o,er.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return U_.setScalar(0),L_.setScalar(0),O_.setScalar(0),U_.fromBufferAttribute(t,e),L_.fromBufferAttribute(t,i),O_.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(U_,r.x),a.addScaledVector(L_,r.y),a.addScaledVector(O_,r.z),a}static isFrontFacing(t,e,i,s){return Yi.subVectors(i,e),tr.subVectors(t,e),Yi.cross(tr).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Yi.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;gl.subVectors(s,i),_l.subVectors(r,i),R_.subVectors(t,i);let l=gl.dot(R_),c=_l.dot(R_);if(l<=0&&c<=0)return e.copy(i);D_.subVectors(t,s);let u=gl.dot(D_),f=_l.dot(D_);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(gl,a);N_.subVectors(t,r);let p=gl.dot(N_),g=_l.dot(N_);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(_l,o);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return fT.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(fT,o);let d=1/(m+_+h);return a=_*d,o=h*d,e.copy(i).addScaledVector(gl,a).addScaledVector(_l,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sa=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Zi):Zi.fromBufferAttribute(r,a),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yf.copy(i.boundingBox)),Yf.applyMatrix4(t.matrixWorld),this.union(Yf)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hu),Zf.subVectors(this.max,hu),vl.subVectors(t.a,hu),yl.subVectors(t.b,hu),xl.subVectors(t.c,hu),jr.subVectors(yl,vl),$r.subVectors(xl,yl),Ya.subVectors(vl,xl);let e=[0,-jr.z,jr.y,0,-$r.z,$r.y,0,-Ya.z,Ya.y,jr.z,0,-jr.x,$r.z,0,-$r.x,Ya.z,0,-Ya.x,-jr.y,jr.x,0,-$r.y,$r.x,0,-Ya.y,Ya.x,0];return!P_(e,vl,yl,xl,Zf)||(e=[1,0,0,0,1,0,0,0,1],!P_(e,vl,yl,xl,Zf))?!1:(Jf.crossVectors(jr,$r),e=[Jf.x,Jf.y,Jf.z],P_(e,vl,yl,xl,Zf))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nr=[new V,new V,new V,new V,new V,new V,new V,new V],Zi=new V,Yf=new sa,vl=new V,yl=new V,xl=new V,jr=new V,$r=new V,Ya=new V,hu=new V,Zf=new V,Jf=new V,Za=new V;function P_(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Za.fromArray(n,r);let o=s.x*Math.abs(Za.x)+s.y*Math.abs(Za.y)+s.z*Math.abs(Za.z),l=t.dot(Za),c=e.dot(Za),u=i.dot(Za);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var nn=new V,Kf=new Zt,K2=0,xi=class extends vs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=J_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Kf.fromBufferAttribute(this,e),Kf.applyMatrix3(t),this.setXY(e,Kf.x,Kf.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cu(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cu(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cu(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cu(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cu(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==J_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var yu=class extends xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var xu=class extends xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Gi=class extends xi{constructor(t,e,i){super(new Float32Array(t),e,i)}},Q2=new sa,fu=new V,I_=new V,Ll=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Q2.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fu.subVectors(t,this.center);let e=fu.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fu,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(I_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fu.copy(t.center).add(I_)),this.expandByPoint(fu.copy(t.center).sub(I_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},j2=0,Vi=new Oe,B_=new Un,Sl=new V,yi=new sa,du=new sa,fn=new V,xs=class n extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j2++}),this.uuid=Hu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B2(t)?xu:yu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vi.makeRotationFromQuaternion(t),this.applyMatrix4(Vi),this}rotateX(t){return Vi.makeRotationX(t),this.applyMatrix4(Vi),this}rotateY(t){return Vi.makeRotationY(t),this.applyMatrix4(Vi),this}rotateZ(t){return Vi.makeRotationZ(t),this.applyMatrix4(Vi),this}translate(t,e,i){return Vi.makeTranslation(t,e,i),this.applyMatrix4(Vi),this}scale(t,e,i){return Vi.makeScale(t,e,i),this.applyMatrix4(Vi),this}lookAt(t){return B_.lookAt(t),B_.updateMatrix(),this.applyMatrix4(B_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sl).negate(),this.translate(Sl.x,Sl.y,Sl.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gi(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];du.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(yi.min,du.min),yi.expandByPoint(fn),fn.addVectors(yi.max,du.max),yi.expandByPoint(fn)):(yi.expandByPoint(du.min),yi.expandByPoint(du.max))}yi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(Sl.fromBufferAttribute(t,c),fn.add(Sl)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;let c=new V,u=new V,f=new V,h=new Zt,p=new Zt,g=new Zt,_=new V,m=new V;function d(x,T,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),p.sub(h),g.sub(h);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(_),o[T].add(_),o[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,T=v.length;x<T;++x){let R=v[x],D=R.start,N=R.count;for(let G=D,X=D+N;G<X;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let S=new V,y=new V,b=new V,E=new V;function A(x){b.fromBufferAttribute(s,x),E.copy(b);let T=o[x];S.copy(T),S.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);let D=y.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,D)}for(let x=0,T=v.length;x<T;++x){let R=v[x],D=R.start,N=R.count;for(let G=D,X=D+N;G<X;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new xi(h,u,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $2=0,ra=class extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=Hu(),this.name="",this.type="Material",this.blending=to,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=dd,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fd&&(i.blendSrc=this.blendSrc),this.blendDst!==dd&&(i.blendDst=this.blendDst),this.blendEquation!==ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ir=new V,z_=new V,Qf=new V,ta=new V,F_=new V,jf=new V,V_=new V,Su=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ir)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ir.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ir.copy(this.origin).addScaledVector(this.direction,e),ir.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){z_.copy(t).add(e).multiplyScalar(.5),Qf.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(z_);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qf),o=ta.dot(this.direction),l=-ta.dot(Qf),c=ta.lengthSq(),u=Math.abs(1-a*a),f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(z_).addScaledVector(Qf,h),p}intersectSphere(t,e){ir.subVectors(t.center,this.origin);let i=ir.dot(this.direction),s=ir.dot(ir)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ir)!==null}intersectTriangle(t,e,i,s,r){F_.subVectors(e,t),jf.subVectors(i,t),V_.crossVectors(F_,jf);let a=this.direction.dot(V_),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ta.subVectors(this.origin,t);let l=o*this.direction.dot(jf.crossVectors(ta,jf));if(l<0)return null;let c=o*this.direction.dot(F_.cross(ta));if(c<0||l+c>a)return null;let u=-o*ta.dot(V_);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mu=class extends ra{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dT=new Oe,Ja=new Su,$f=new Ll,pT=new V,td=new V,ed=new V,nd=new V,G_=new V,id=new V,mT=new V,sd=new V,ei=class extends Un{constructor(t=new xs,e=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){id.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(G_.fromBufferAttribute(f,t),a?id.addScaledVector(G_,u):id.addScaledVector(G_.sub(e),u))}e.add(id)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$f.copy(i.boundingSphere),$f.applyMatrix4(r),Ja.copy(t.ray).recast(t.near),!($f.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere($f,pT)===null||Ja.origin.distanceToSquared(pT)>(t.far-t.near)**2))&&(dT.copy(r).invert(),Ja.copy(t.ray).applyMatrix4(dT),!(i.boundingBox!==null&&Ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ja)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=S;y<b;y+=3){let E=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=rd(this,d,t,i,c,u,f,E,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=rd(this,a,t,i,c,u,f,v,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=S;y<b;y+=3){let E=y,A=y+1,x=y+2;s=rd(this,d,t,i,c,u,f,E,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=m,S=m+1,y=m+2;s=rd(this,a,t,i,c,u,f,v,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function t3(n,t,e,i,s,r,a,o){let l;if(t.side===Vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===rr,o),l===null)return null;sd.copy(o),sd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(sd);return c<e.near||c>e.far?null:{distance:c,point:sd.clone(),object:n}}function rd(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,td),n.getVertexPosition(l,ed),n.getVertexPosition(c,nd);let u=t3(n,t,e,i,td,ed,nd,mT);if(u){let f=new V;na.getBarycoord(mT,td,ed,nd,f),s&&(u.uv=na.getInterpolatedAttribute(s,o,l,c,f,new Zt)),r&&(u.uv1=na.getInterpolatedAttribute(r,o,l,c,f,new Zt)),a&&(u.normal=na.getInterpolatedAttribute(a,o,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new V,materialIndex:0};na.getNormal(td,ed,nd,h.normal),u.face=h,u.barycoord=f}return u}var wd=class extends Nn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=dn,u=dn,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var H_=new V,e3=new V,n3=new It,ms=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=H_.subVectors(i,e).cross(e3.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(H_),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||n3.getNormalMatrix(t),s=this.coplanarPoint(H_).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ka=new Ll,i3=new Zt(.5,.5),ad=new V,Ol=class{constructor(t=new ms,e=new ms,i=new ms,s=new ms,r=new ms,a=new ms){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ji,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],v=r[12],S=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,p-u,d-g,b-v).normalize(),s[1].setComponents(c+a,p+u,d+g,b+v).normalize(),s[2].setComponents(c+o,p+f,d+_,b+S).normalize(),s[3].setComponents(c-o,p-f,d-_,b-S).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,d-m,b-y).normalize();else if(s[4].setComponents(c-l,p-h,d-m,b-y).normalize(),e===Ji)s[5].setComponents(c+l,p+h,d+m,b+y).normalize();else if(e===wl)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ka.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ka.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ka)}intersectsSprite(t){Ka.center.set(0,0,0);let e=i3.distanceTo(t.center);return Ka.radius=.7071067811865476+e,Ka.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ka)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ad.x=s.normal.x>0?t.max.x:t.min.x,ad.y=s.normal.y>0?t.max.y:t.min.y,ad.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ad)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bu=class extends Nn{constructor(t=[],e=ua,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pl=class extends Nn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var or=class extends Nn{constructor(t,e,i=Qi,s,r,a,o=dn,l=dn,c,u=_s,f=1){if(u!==_s&&u!==ha)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cd=class extends or{constructor(t,e=Qi,i=ua,s,r,a=dn,o=dn,l,c=_s){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Tu=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},aa=class n extends xs{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(u,3)),this.setAttribute("uv",new Gi(f,2));function g(_,m,d,v,S,y,b,E,A,x,T){let R=y/A,D=b/x,N=y/2,G=b/2,X=E/2,P=A+1,k=x+1,B=0,Z=0,$=new V;for(let it=0;it<k;it++){let at=it*D-G;for(let mt=0;mt<P;mt++){let Kt=mt*R-N;$[_]=Kt*v,$[m]=at*S,$[d]=X,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=E>0?1:-1,u.push($.x,$.y,$.z),f.push(mt/A),f.push(1-it/x),B+=1}}for(let it=0;it<x;it++)for(let at=0;at<A;at++){let mt=h+at+P*it,Kt=h+at+P*(it+1),Qt=h+(at+1)+P*(it+1),Gt=h+(at+1)+P*it;l.push(mt,Kt,Gt),l.push(Kt,Qt,Gt),Z+=6}o.addGroup(p,Z,T),p+=Z,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Eu=class n extends xs{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let v=d*h-a;for(let S=0;S<c;S++){let y=S*f-r;g.push(y,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let S=v+c*d,y=v+c*(d+1),b=v+1+c*(d+1),E=v+1+c*d;p.push(S,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function so(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(gT(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(gT(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ln(n){let t={};for(let e=0;e<n.length;e++){let i=so(n[e]);for(let s in i)t[s]=i[s]}return t}function gT(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function s3(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mv(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var oE={clone:so,merge:Ln},r3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends ra{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r3,this.fragmentShader=a3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=s3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new It().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rd=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},no=class extends ra{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Dd=class extends ra{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nd=class extends ra{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function od(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var oa=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ud=class extends oa{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:W_,endingEnd:W_}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case q_:r=t,o=2*e-i;break;case Y_:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case q_:a=t,l=2*i-e;break;case Y_:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let b=0;b!==o;++b)r[b]=d*a[u+b]+v*a[c+b]+S*a[l+b]+y*a[f+b];return r}},Ld=class extends oa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Od=class extends oa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pd=class extends oa{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(i-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let h=o*2,p=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],d=p*h+g*2,v=f[d],S=f[d+1],y=t*h+g*2,b=u[y],E=u[y+1],A=(i-e)/(s-e),x,T,R,D,N;for(let G=0;G<8;G++){x=A*A,T=x*A,R=1-A,D=R*R,N=D*R;let P=N*e+3*D*A*v+3*R*x*b+T*s-i;if(Math.abs(P)<1e-10)break;let k=3*D*(v-e)+6*R*A*(b-v)+3*x*(s-b);if(Math.abs(k)<1e-10)break;A=A-P/k,A=Math.max(0,Math.min(1,A))}r[g]=N*_+3*D*A*S+3*R*x*E+T*m}return r}},bi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=od(e,this.TimeBufferType),this.values=od(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:od(t.times,Array),values:od(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Od(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ld(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ud(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pd(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pu:e=this.InterpolantFactoryMethodDiscrete;break;case Md:e=this.InterpolantFactoryMethodLinear;break;case ud:e=this.InterpolantFactoryMethodSmooth;break;case X_:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pu;case this.InterpolantFactoryMethodLinear:return Md;case this.InterpolantFactoryMethodSmooth:return ud;case this.InterpolantFactoryMethodBezier:return X_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&z2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ud,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){let _=e[f+g];if(_!==e[h+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Md;var la=class extends bi{constructor(t,e,i){super(t,e,i)}};la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=pu;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;var Id=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};Id.prototype.ValueTypeName="color";var Bd=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};Bd.prototype.ValueTypeName="number";var zd=class extends oa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ys.slerpFlat(r,0,a,c-o,a,c,l);return r}},Au=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new zd(this.times,this.values,this.getValueSize(),t)}};Au.prototype.ValueTypeName="quaternion";Au.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends bi{constructor(t,e,i){super(t,e,i)}};ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=pu;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Fd=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}};Fd.prototype.ValueTypeName="vector";var hd={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(_T(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!_T(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function _T(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vd=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lE=new Vd,Il=class{constructor(t){this.manager=t!==void 0?t:lE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ml=new WeakMap,Gd=class extends Il{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=hd.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Ml.get(a);f===void 0&&(f=[],Ml.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Cl("img");function l(){u(),e&&e(this);let f=Ml.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}Ml.delete(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),hd.remove(`image:${t}`);let h=Ml.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(f)}Ml.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hd.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var wu=class extends Il{constructor(t){super(t)}load(t,e,i,s){let r=new Nn,a=new Gd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Cu=class extends Un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ru=class extends Cu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},k_=new Oe,vT=new V,yT=new V,K_=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;vT.setFromMatrixPosition(t.matrixWorld),e.position.copy(vT),yT.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yT),e.updateMatrixWorld(),k_.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(k_,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===wl||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(k_)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ld=new V,cd=new ys,ps=new V,Du=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ld,cd,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ld,cd,ps.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ld,cd,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ld,cd,ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ea=new V,xT=new Zt,ST=new Zt,Dn=class extends Du{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(x_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(x_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ea.x,ea.y).multiplyScalar(-t/ea.z),ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ea.x,ea.y).multiplyScalar(-t/ea.z)}getViewSize(t,e){return this.getViewBounds(t,xT,ST),e.subVectors(ST,xT)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(x_*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bl=class extends Du{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Q_=class extends K_{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zl=class extends Cu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bl=-90,Tl=1,Hd=class extends Un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(bl,Tl,t,e);s.layers=this.layers,this.add(s);let r=new Dn(bl,Tl,t,e);r.layers=this.layers,this.add(r);let a=new Dn(bl,Tl,t,e);a.layers=this.layers,this.add(a);let o=new Dn(bl,Tl,t,e);o.layers=this.layers,this.add(o);let l=new Dn(bl,Tl,t,e);l.layers=this.layers,this.add(l);let c=new Dn(bl,Tl,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},kd=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bv="\\[\\]\\.:\\/",o3=new RegExp("["+bv+"]","g"),Tv="[^"+bv+"]",l3="[^"+bv.replace("\\.","")+"]",c3=/((?:WC+[\/:])*)/.source.replace("WC",Tv),u3=/(WCOD+)?/.source.replace("WCOD",l3),h3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tv),f3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tv),d3=new RegExp("^"+c3+u3+h3+f3+"$"),p3=["material","materials","bones","map"],j_=class{constructor(t,e,i){let s=i||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o3,"")}static parseTrackName(t){let e=d3.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);p3.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=j_;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IO=new Float32Array(1);var MT=new Oe,Nu=class{constructor(t,e,i=0,s=1/0){this.ray=new Su(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Dt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return MT.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(MT),this}intersectObject(t,e=!0,i=[]){return $_(t,this,i,e),i.sort(bT),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)$_(t[s],this,i,e);return i.sort(bT),i}};function bT(n,t){return n.distance-t.distance}function $_(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)$_(r[a],t,e,!0)}}var Dv=class Dv{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Dv.prototype.isMatrix2=!0;var tv=Dv;function Ev(n,t,e,i){let s=m3(i);switch(e){case _v:return n*t;case yv:return n*t/s.components*s.byteLength;case Qd:return n*t/s.components*s.byteLength;case fa:return n*t*2/s.components*s.byteLength;case jd:return n*t*2/s.components*s.byteLength;case vv:return n*t*3/s.components*s.byteLength;case Hi:return n*t*4/s.components*s.byteLength;case $d:return n*t*4/s.components*s.byteLength;case Iu:case Bu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zu:case Fu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ep:case ip:return Math.max(n,16)*Math.max(t,8)/4;case tp:case np:return Math.max(n,8)*Math.max(t,8)/2;case sp:case rp:case op:case lp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ap:case Vu:case cp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case up:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hp:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fp:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dp:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pp:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mp:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gp:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _p:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vp:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yp:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xp:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sp:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mp:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bp:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tp:case Ep:case Ap:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wp:case Cp:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gu:case Rp:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m3(n){switch(n){case ni:case dv:return{byteLength:1,components:1};case Vl:case pv:case Ts:return{byteLength:2,components:1};case Jd:case Kd:return{byteLength:2,components:4};case Qi:case Zd:case ji:return{byteLength:4,components:1};case mv:case gv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function NE(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _3(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var v3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,w3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N3=`#ifdef USE_IRIDESCENCE
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
#endif`,U3=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G3=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,H3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,k3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,X3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z3="gl_FragColor = linearToOutputTexel( gl_FragColor );",J3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Q3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j3=`#ifdef USE_ENVMAP
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
#endif`,$3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rD=`#ifdef USE_GRADIENTMAP
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
}`,aD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,uD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_D=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,SD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ED=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CD=`#if defined( USE_POINTS_UV )
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
#endif`,RD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ND=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ID=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,HD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$D=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,iN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oN=`#ifdef USE_SKINNING
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
#endif`,lN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fN=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dN=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,mN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,_N=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yN=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,xN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,EN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,wN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DN=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NN=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UN=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LN=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,PN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BN=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,FN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,GN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kN=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,WN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qN=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,YN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,JN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,QN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:v3,alphahash_pars_fragment:y3,alphamap_fragment:x3,alphamap_pars_fragment:S3,alphatest_fragment:M3,alphatest_pars_fragment:b3,aomap_fragment:T3,aomap_pars_fragment:E3,batching_pars_vertex:A3,batching_vertex:w3,begin_vertex:C3,beginnormal_vertex:R3,bsdfs:D3,iridescence_fragment:N3,bumpmap_pars_fragment:U3,clipping_planes_fragment:L3,clipping_planes_pars_fragment:O3,clipping_planes_pars_vertex:P3,clipping_planes_vertex:I3,color_fragment:B3,color_pars_fragment:z3,color_pars_vertex:F3,color_vertex:V3,common:G3,cube_uv_reflection_fragment:H3,defaultnormal_vertex:k3,displacementmap_pars_vertex:X3,displacementmap_vertex:W3,emissivemap_fragment:q3,emissivemap_pars_fragment:Y3,colorspace_fragment:Z3,colorspace_pars_fragment:J3,envmap_fragment:K3,envmap_common_pars_fragment:Q3,envmap_pars_fragment:j3,envmap_pars_vertex:$3,envmap_physical_pars_fragment:uD,envmap_vertex:tD,fog_vertex:eD,fog_pars_vertex:nD,fog_fragment:iD,fog_pars_fragment:sD,gradientmap_pars_fragment:rD,lightmap_pars_fragment:aD,lights_lambert_fragment:oD,lights_lambert_pars_fragment:lD,lights_pars_begin:cD,lights_toon_fragment:hD,lights_toon_pars_fragment:fD,lights_phong_fragment:dD,lights_phong_pars_fragment:pD,lights_physical_fragment:mD,lights_physical_pars_fragment:gD,lights_fragment_begin:_D,lights_fragment_maps:vD,lights_fragment_end:yD,lightprobes_pars_fragment:xD,logdepthbuf_fragment:SD,logdepthbuf_pars_fragment:MD,logdepthbuf_pars_vertex:bD,logdepthbuf_vertex:TD,map_fragment:ED,map_pars_fragment:AD,map_particle_fragment:wD,map_particle_pars_fragment:CD,metalnessmap_fragment:RD,metalnessmap_pars_fragment:DD,morphinstance_vertex:ND,morphcolor_vertex:UD,morphnormal_vertex:LD,morphtarget_pars_vertex:OD,morphtarget_vertex:PD,normal_fragment_begin:ID,normal_fragment_maps:BD,normal_pars_fragment:zD,normal_pars_vertex:FD,normal_vertex:VD,normalmap_pars_fragment:GD,clearcoat_normal_fragment_begin:HD,clearcoat_normal_fragment_maps:kD,clearcoat_pars_fragment:XD,iridescence_pars_fragment:WD,opaque_fragment:qD,packing:YD,premultiplied_alpha_fragment:ZD,project_vertex:JD,dithering_fragment:KD,dithering_pars_fragment:QD,roughnessmap_fragment:jD,roughnessmap_pars_fragment:$D,shadowmap_pars_fragment:tN,shadowmap_pars_vertex:eN,shadowmap_vertex:nN,shadowmask_pars_fragment:iN,skinbase_vertex:sN,skinning_pars_vertex:rN,skinning_vertex:aN,skinnormal_vertex:oN,specularmap_fragment:lN,specularmap_pars_fragment:cN,tonemapping_fragment:uN,tonemapping_pars_fragment:hN,transmission_fragment:fN,transmission_pars_fragment:dN,uv_pars_fragment:pN,uv_pars_vertex:mN,uv_vertex:gN,worldpos_vertex:_N,background_vert:vN,background_frag:yN,backgroundCube_vert:xN,backgroundCube_frag:SN,cube_vert:MN,cube_frag:bN,depth_vert:TN,depth_frag:EN,distance_vert:AN,distance_frag:wN,equirect_vert:CN,equirect_frag:RN,linedashed_vert:DN,linedashed_frag:NN,meshbasic_vert:UN,meshbasic_frag:LN,meshlambert_vert:ON,meshlambert_frag:PN,meshmatcap_vert:IN,meshmatcap_frag:BN,meshnormal_vert:zN,meshnormal_frag:FN,meshphong_vert:VN,meshphong_frag:GN,meshphysical_vert:HN,meshphysical_frag:kN,meshtoon_vert:XN,meshtoon_frag:WN,points_vert:qN,points_frag:YN,shadow_vert:ZN,shadow_frag:JN,sprite_vert:KN,sprite_frag:QN},pt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},As={basic:{uniforms:Ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ln([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ln([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ln([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ln([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ln([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ln([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ln([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ln([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ln([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ln([pt.common,pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ln([pt.lights,pt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};As.physical={uniforms:Ln([As.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Lp={r:0,b:0,g:0},jN=new Oe,UE=new It;UE.set(-1,0,0,0,1,0,0,0,1);function $N(n,t,e,i,s,r){let a=new Jt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(v){let S=!1,y=p(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){let y=p(S);y&&(y.isCubeTexture||y.mapping===Ou)?(c===void 0&&(c=new ei(new aa(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:so(As.backgroundCube.uniforms),vertexShader:As.backgroundCube.vertexShader,fragmentShader:As.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jN.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(UE),c.material.toneMapped=te.getTransfer(y.colorSpace)!==le,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ei(new Eu(2,2),new Mi({name:"BackgroundMaterial",uniforms:so(As.background.uniforms),vertexShader:As.background.vertexShader,fragmentShader:As.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Lp,Mv(n)),e.buffers.color.setClear(Lp.r,Lp.g,Lp.b,S,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:d}}function tU(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,N,G,X,P){let k=!1,B=f(D,X,G,N);r!==B&&(r=B,c(r.object)),k=p(D,X,G,P),k&&g(D,X,G,P),P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(D,N,G,X),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,N,G,X){let P=X.wireframe===!0,k=i[N.id];k===void 0&&(k={},i[N.id]=k);let B=D.isInstancedMesh===!0?D.id:0,Z=k[B];Z===void 0&&(Z={},k[B]=Z);let $=Z[G.id];$===void 0&&($={},Z[G.id]=$);let it=$[P];return it===void 0&&(it=h(l()),$[P]=it),it}function h(D){let N=[],G=[],X=[];for(let P=0;P<e;P++)N[P]=0,G[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:X,object:D,attributes:{},index:null}}function p(D,N,G,X){let P=r.attributes,k=N.attributes,B=0,Z=G.getAttributes();for(let $ in Z)if(Z[$].location>=0){let at=P[$],mt=k[$];if(mt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==X}function g(D,N,G,X){let P={},k=N.attributes,B=0,Z=G.getAttributes();for(let $ in Z)if(Z[$].location>=0){let at=k[$];at===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));let mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),P[$]=mt,B++}r.attributes=P,r.attributesNum=B,r.index=X}function _(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function m(D){d(D,0)}function d(D,N){let G=r.newAttributes,X=r.enabledAttributes,P=r.attributeDivisors;G[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),P[D]!==N&&(n.vertexAttribDivisor(D,N),P[D]=N)}function v(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,X=N.length;G<X;G++)N[G]!==D[G]&&(n.disableVertexAttribArray(G),N[G]=0)}function S(D,N,G,X,P,k,B){B===!0?n.vertexAttribIPointer(D,N,G,P,k):n.vertexAttribPointer(D,N,G,X,P,k)}function y(D,N,G,X){_();let P=X.attributes,k=G.getAttributes(),B=N.defaultAttributeValues;for(let Z in k){let $=k[Z];if($.location>=0){let it=P[Z];if(it===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let at=it.normalized,mt=it.itemSize,Kt=t.get(it);if(Kt===void 0)continue;let Qt=Kt.buffer,Gt=Kt.type,J=Kt.bytesPerElement,rt=Gt===n.INT||Gt===n.UNSIGNED_INT||it.gpuType===Zd;if(it.isInterleavedBufferAttribute){let et=it.data,Ut=et.stride,Ot=it.offset;if(et.isInstancedInterleavedBuffer){for(let Ct=0;Ct<$.locationSize;Ct++)d($.location+Ct,et.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)m($.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Ct=0;Ct<$.locationSize;Ct++)S($.location+Ct,mt/$.locationSize,Gt,at,Ut*J,(Ot+mt/$.locationSize*Ct)*J,rt)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)d($.location+et,it.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let et=0;et<$.locationSize;et++)S($.location+et,mt/$.locationSize,Gt,at,mt*J,mt/$.locationSize*et*J,rt)}}else if(B!==void 0){let at=B[Z];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv($.location,at);break;case 3:n.vertexAttrib3fv($.location,at);break;case 4:n.vertexAttrib4fv($.location,at);break;default:n.vertexAttrib1fv($.location,at)}}}}v()}function b(){T();for(let D in i){let N=i[D];for(let G in N){let X=N[G];for(let P in X){let k=X[P];for(let B in k)u(k[B].object),delete k[B];delete X[P]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let N=i[D.id];for(let G in N){let X=N[G];for(let P in X){let k=X[P];for(let B in k)u(k[B].object),delete k[B];delete X[P]}}delete i[D.id]}function A(D){for(let N in i){let G=i[N];for(let X in G){let P=G[X];if(P[D.id]===void 0)continue;let k=P[D.id];for(let B in k)u(k[B].object),delete k[B];delete P[D.id]}}}function x(D){for(let N in i){let G=i[N],X=D.isInstancedMesh===!0?D.id:0,P=G[X];if(P!==void 0){for(let k in P){let B=P[k];for(let Z in B)u(B[Z].object),delete B[Z];delete P[k]}delete G[X],Object.keys(G).length===0&&delete i[N]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function eU(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nU(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ji&&!x)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:E}}function iU(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ms,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:i,S=v*4,y=d.clippingState||null;l.value=y,y=u(g,h,S,p);for(let b=0;b!==S;++b)y[b]=e[b];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=p;S!==_;++S,y+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var da=4,cE=[.125,.215,.35,.446,.526,.582],ro=20,sU=256,ku=new Bl,uE=new Jt,Nv=null,Uv=0,Lv=0,Ov=!1,rU=new V,Pp=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=rU}=r;Nv=this._renderer.getRenderTarget(),Uv=this._renderer.getActiveCubeFace(),Lv=this._renderer.getActiveMipmapLevel(),Ov=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nv,Uv,Lv),this._renderer.xr.enabled=Ov,t.scissorTest=!1,Hl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ua||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nv=this._renderer.getRenderTarget(),Uv=this._renderer.getActiveCubeFace(),Lv=this._renderer.getActiveMipmapLevel(),Ov=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ts,format:Hi,colorSpace:mu,depthBuffer:!1},s=hE(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hE(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aU(r)),this._blurMaterial=lU(r,t,e),this._ggxMaterial=oU(r,t,e)}return s}_compileMaterial(t){let e=new ei(new xs,t);this._renderer.compile(e,ku)}_sceneToCubeUV(t,e,i,s,r){let l=new Dn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(uE),f.toneMapping=Ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new aa,new Mu({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy(uE),d=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let b=this._cubeSize;Hl(s,y*b,S>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(_,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ua||t.mapping===io;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dE()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fE());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Hl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ku)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-da?i-g+da:0),d=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Hl(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(o,ku),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Hl(t,m,d,3*_,2*_),s.setRenderTarget(t),s.render(o,ku)}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[s];f.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ro-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ro;m>ro&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);let d=[],v=0;for(let A=0;A<ro;++A){let x=A/_,T=Math.exp(-x*x/2);d.push(T),A===0?v+=T:A<m&&(v+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;let y=this._sizeLods[s],b=3*y*(s>S-da?s-S+da:0),E=4*(this._cubeSize-y);Hl(e,b,E,3*y,2*y),l.setRenderTarget(e),l.render(f,ku)}};function aU(n){let t=[],e=[],i=[],s=n,r=n-da+1+cE.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-da?l=cE[a-n+da-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),S=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,x=E>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(T,_*g*E),S.set(h,m*g*E);let R=[E,E,E,E,E,E];y.set(R,d*g*E)}let b=new xs;b.setAttribute("position",new xi(v,_)),b.setAttribute("uv",new xi(S,m)),b.setAttribute("faceIndex",new xi(y,d)),i.push(new ei(b,null)),s>da&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function hE(n,t,e){let i=new Si(n,t,e);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oU(n,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sU,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function lU(n,t,e){let i=new Float32Array(ro),s=new V(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zp(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function fE(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function dE(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function zp(){return`

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
	`}var Ip=class extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new aa(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Ms});r.uniforms.tEquirect.value=e;let a=new ei(s,r),o=e.minFilter;return e.minFilter===bs&&(e.minFilter=Mn),new Hd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function cU(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Wd||p===qd)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Ip(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===Wd||p===qd,_=p===ua||p===io;if(g||_){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Pp(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Pp(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Wd?h.mapping=ua:p===qd&&(h.mapping=io),h}function l(h){let p=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function uU(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$a("WebGLRenderer: "+i+" extension not supported."),s}}}function hU(n,t,e,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(p!==null){let v=p.array;_=p.version;for(let S=0,y=v.length;S<y;S+=3){let b=v[S+0],E=v[S+1],A=v[S+2];h.push(b,E,E,A,A,b)}}else{let v=g.array;_=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){let b=S+0,E=S+1,A=S+2;h.push(b,E,E,A,A,b)}}let m=new(g.count>=65535?xu:yu)(h,1);m.version=_;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function fU(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),e.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),e.update(h,i,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dU(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function pU(n,t,e){let i=new WeakMap,s=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*f),A=new _u(E,y,b,f);A.type=ji,A.needsUpdate=!0;let x=S*4;for(let R=0;R<f;R++){let D=m[R],N=d[R],G=v[R],X=y*b*4*R;for(let P=0;P<D.count;P++){let k=P*x;p===!0&&(s.fromBufferAttribute(D,P),E[X+k+0]=s.x,E[X+k+1]=s.y,E[X+k+2]=s.z,E[X+k+3]=0),g===!0&&(s.fromBufferAttribute(N,P),E[X+k+4]=s.x,E[X+k+5]=s.y,E[X+k+6]=s.z,E[X+k+7]=0),_===!0&&(s.fromBufferAttribute(G,P),E[X+k+8]=s.x,E[X+k+9]=s.y,E[X+k+10]=s.z,E[X+k+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Zt(y,b)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function mU(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var gU={[av]:"LINEAR_TONE_MAPPING",[ov]:"REINHARD_TONE_MAPPING",[lv]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[uv]:"AGX_TONE_MAPPING",[hv]:"NEUTRAL_TONE_MAPPING",[cv]:"CUSTOM_TONE_MAPPING"};function _U(n,t,e,i,s,r){let a=new Si(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new or(t,e):void 0}),o=new Si(t,e,{type:Ts,depthBuffer:!1,stencilBuffer:!1}),l=new xs;l.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Gi([0,2,0,0,2,0],2));let c=new Rd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ei(l,c),f=new Bl(-1,1,1,-1,0,1),h=null,p=null,g=!1,_,m=null,d=[],v=!1;this.setSize=function(S,y){a.setSize(S,y),o.setSize(S,y);for(let b=0;b<d.length;b++){let E=d[b];E.setSize&&E.setSize(S,y)}},this.setEffects=function(S){d=S,v=d.length>0&&d[0].isRenderPass===!0;let y=a.width,b=a.height;for(let E=0;E<d.length;E++){let A=d[E];A.setSize&&A.setSize(y,b)}},this.begin=function(S,y){if(g||S.toneMapping===Ki&&d.length===0)return!1;if(m=y,y!==null){let b=y.width,E=y.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return v===!1&&S.setRenderTarget(a),_=S.toneMapping,S.toneMapping=Ki,!0},this.hasRenderPass=function(){return v},this.end=function(S,y){S.toneMapping=_,g=!0;let b=a,E=o;for(let A=0;A<d.length;A++){let x=d[A];if(x.enabled!==!1&&(x.render(S,E,b,y),x.needsSwap!==!1)){let T=b;b=E,E=T}}if(h!==S.outputColorSpace||p!==S.toneMapping){h=S.outputColorSpace,p=S.toneMapping,c.defines={},te.getTransfer(h)===le&&(c.defines.SRGB_TRANSFER="");let A=gU[p];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(m),S.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var LE=new Nn,Bv=new or(1,1),OE=new _u,PE=new Ad,IE=new bu,pE=[],mE=[],gE=new Float32Array(16),_E=new Float32Array(9),vE=new Float32Array(4);function Xl(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=pE[s];if(r===void 0&&(r=new Float32Array(s),pE[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fp(n,t){let e=mE[t];e===void 0&&(e=new Int32Array(t),mE[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vU(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function xU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function SU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function MU(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;vE.set(i),n.uniformMatrix2fv(this.addr,!1,vE),ln(e,i)}}function bU(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;_E.set(i),n.uniformMatrix3fv(this.addr,!1,_E),ln(e,i)}}function TU(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;gE.set(i),n.uniformMatrix4fv(this.addr,!1,gE),ln(e,i)}}function EU(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function AU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function wU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function CU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function RU(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function DU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function NU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function UU(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function LU(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bv.compareFunction=e.isReversedDepthBuffer()?Up:Np,r=Bv):r=LE,e.setTexture2D(t||r,s)}function OU(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||PE,s)}function PU(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||IE,s)}function IU(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||OE,s)}function BU(n){switch(n){case 5126:return vU;case 35664:return yU;case 35665:return xU;case 35666:return SU;case 35674:return MU;case 35675:return bU;case 35676:return TU;case 5124:case 35670:return EU;case 35667:case 35671:return AU;case 35668:case 35672:return wU;case 35669:case 35673:return CU;case 5125:return RU;case 36294:return DU;case 36295:return NU;case 36296:return UU;case 35678:case 36198:case 36298:case 36306:case 35682:return LU;case 35679:case 36299:case 36307:return OU;case 35680:case 36300:case 36308:case 36293:return PU;case 36289:case 36303:case 36311:case 36292:return IU}}function zU(n,t){n.uniform1fv(this.addr,t)}function FU(n,t){let e=Xl(t,this.size,2);n.uniform2fv(this.addr,e)}function VU(n,t){let e=Xl(t,this.size,3);n.uniform3fv(this.addr,e)}function GU(n,t){let e=Xl(t,this.size,4);n.uniform4fv(this.addr,e)}function HU(n,t){let e=Xl(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kU(n,t){let e=Xl(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function XU(n,t){let e=Xl(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function WU(n,t){n.uniform1iv(this.addr,t)}function qU(n,t){n.uniform2iv(this.addr,t)}function YU(n,t){n.uniform3iv(this.addr,t)}function ZU(n,t){n.uniform4iv(this.addr,t)}function JU(n,t){n.uniform1uiv(this.addr,t)}function KU(n,t){n.uniform2uiv(this.addr,t)}function QU(n,t){n.uniform3uiv(this.addr,t)}function jU(n,t){n.uniform4uiv(this.addr,t)}function $U(n,t,e){let i=this.cache,s=t.length,r=Fp(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Bv:a=LE;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tL(n,t,e){let i=this.cache,s=t.length,r=Fp(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||PE,r[a])}function eL(n,t,e){let i=this.cache,s=t.length,r=Fp(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||IE,r[a])}function nL(n,t,e){let i=this.cache,s=t.length,r=Fp(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||OE,r[a])}function iL(n){switch(n){case 5126:return zU;case 35664:return FU;case 35665:return VU;case 35666:return GU;case 35674:return HU;case 35675:return kU;case 35676:return XU;case 5124:case 35670:return WU;case 35667:case 35671:return qU;case 35668:case 35672:return YU;case 35669:case 35673:return ZU;case 5125:return JU;case 36294:return KU;case 36295:return QU;case 36296:return jU;case 35678:case 36198:case 36298:case 36306:case 35682:return $U;case 35679:case 36299:case 36307:return tL;case 35680:case 36300:case 36308:case 36293:return eL;case 36289:case 36303:case 36311:case 36292:return nL}}var zv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=BU(e.type)}},Fv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iL(e.type)}},Vv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Pv=/(\w+)(\])?(\[|\.)?/g;function yE(n,t){n.seq.push(t),n.map[t.id]=t}function sL(n,t,e){let i=n.name,s=i.length;for(Pv.lastIndex=0;;){let r=Pv.exec(i),a=Pv.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yE(e,c===void 0?new zv(o,n,t):new Fv(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Vv(o),yE(e,f)),e=f}}}var kl=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sL(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function xE(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var rL=37297,aL=0;function oL(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var SE=new It;function lL(n){te._getMatrix(SE,te.workingColorSpace,n);let t=`mat3( ${SE.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gu:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ME(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+oL(n.getShaderSource(t),o)}else return r}function cL(n,t){let e=lL(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var uL={[av]:"Linear",[ov]:"Reinhard",[lv]:"Cineon",[Lu]:"ACESFilmic",[uv]:"AgX",[hv]:"Neutral",[cv]:"Custom"};function hL(n,t){let e=uL[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Op=new V;function fL(){te.getLuminanceCoefficients(Op);let n=Op.x.toFixed(4),t=Op.y.toFixed(4),e=Op.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wu).join(`
`)}function pL(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mL(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Wu(n){return n!==""}function bE(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function TE(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gv(n){return n.replace(gL,vL)}var _L=new Map;function vL(n,t){let e=kt[t];if(e===void 0){let i=_L.get(t);if(i!==void 0)e=kt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Gv(e)}var yL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EE(n){return n.replace(yL,xL)}function xL(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function AE(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var SL={[Uu]:"SHADOWMAP_TYPE_PCF",[Fl]:"SHADOWMAP_TYPE_VSM"};function ML(n){return SL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bL={[ua]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function TL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var EL={[io]:"ENVMAP_MODE_REFRACTION"};function AL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wL={[rv]:"ENVMAP_BLENDING_MULTIPLY",[WT]:"ENVMAP_BLENDING_MIX",[qT]:"ENVMAP_BLENDING_ADD"};function CL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wL[n.combine]||"ENVMAP_BLENDING_NONE"}function RL(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function DL(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ML(e),c=TL(e),u=AL(e),f=CL(e),h=RL(e),p=dL(e),g=pL(r),_=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wu).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wu).join(`
`),d.length>0&&(d+=`
`)):(m=[AE(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wu).join(`
`),d=[AE(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?hL("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,cL("linearToOutputTexel",e.outputColorSpace),fL(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wu).join(`
`)),a=Gv(a),a=bE(a,e),a=TE(a,e),o=Gv(o),o=bE(o,e),o=TE(o,e),a=EE(a),o=EE(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=v+m+a,y=v+d+o,b=xE(s,s.VERTEX_SHADER,S),E=xE(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(E)||"",P=N.trim(),k=G.trim(),B=X.trim(),Z=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,E);else{let it=ME(s,b,"vertex"),at=ME(s,E,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+it+`
`+at)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(k===""||B==="")&&($=!1);$&&(D.diagnostics={runnable:Z,programLog:P,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(b),s.deleteShader(E),x=new kl(s,_),T=mL(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,rL)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aL++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var NL=0,Hv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kv(t),e.set(t,i)),i}},kv=class{constructor(t){this.id=NL++,this.code=t,this.usedTimes=0}};function UL(n){return n===fa||n===Vu||n===Gu}function LL(n,t,e,i,s,r){let a=new Nl,o=new Hv,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,D,N,G){let X=D.fog,P=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||k,B),$=Z&&Z.mapping===Ou?Z.image.height:null,it=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let at=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,mt=at!==void 0?at.length:0,Kt=0;P.morphAttributes.position!==void 0&&(Kt=1),P.morphAttributes.normal!==void 0&&(Kt=2),P.morphAttributes.color!==void 0&&(Kt=3);let Qt,Gt,J,rt;if(it){let St=As[it];Qt=St.vertexShader,Gt=St.fragmentShader}else{Qt=x.vertexShader,Gt=x.fragmentShader;let St=o.getVertexShaderStage(x),Ve=o.getFragmentShaderStage(x);o.update(x,St,Ve),J=St.id,rt=Ve.id}let et=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,De=!!x.map,Xt=!!x.matcap,oe=!!Z,nt=!!x.aoMap,ot=!!x.lightMap,Pt=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,Ht=!!x.displacementMap,Te=!!x.emissiveMap,fe=!!x.metalnessMap,Fe=!!x.roughnessMap,L=x.anisotropy>0,Gn=x.clearcoat>0,ce=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,I=x.transmission>0,H=L&&!!x.anisotropyMap,q=Gn&&!!x.clearcoatMap,st=Gn&&!!x.clearcoatNormalMap,ct=Gn&&!!x.clearcoatRoughnessMap,Y=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,ut=M&&!!x.sheenColorMap,Tt=M&&!!x.sheenRoughnessMap,dt=!!x.specularMap,ht=!!x.specularColorMap,wt=!!x.specularIntensityMap,Rt=I&&!!x.transmissionMap,zt=I&&!!x.thicknessMap,U=!!x.gradientMap,lt=!!x.alphaMap,K=x.alphaTest>0,ft=!!x.alphaHash,vt=!!x.extensions,tt=Ki;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(tt=n.toneMapping);let bt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Xt,envMap:oe,envMapMode:oe&&Z.mapping,envMapCubeUVHeight:$,aoMap:nt,lightMap:ot,bumpMap:Pt,normalMap:jt,displacementMap:Ht,emissiveMap:Te,normalMapObjectSpace:jt&&x.normalMapType===JT,normalMapTangentSpace:jt&&x.normalMapType===Dp,packedNormalMap:jt&&x.normalMapType===Dp&&UL(x.normalMap.format),metalnessMap:fe,roughnessMap:Fe,anisotropy:L,anisotropyMap:H,clearcoat:Gn,clearcoatMap:q,clearcoatNormalMap:st,clearcoatRoughnessMap:ct,dispersion:ce,iridescence:C,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:ut,sheenRoughnessMap:Tt,specularMap:dt,specularColorMap:ht,specularIntensityMap:wt,transmission:I,transmissionMap:Rt,thicknessMap:zt,gradientMap:U,opaque:x.transparent===!1&&x.blending===to&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:K,alphaHash:ft,combine:x.combine,mapUv:De&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:Pt&&g(x.bumpMap.channel),normalMapUv:jt&&g(x.normalMap.channel),displacementMapUv:Ht&&g(x.displacementMap.channel),emissiveMapUv:Te&&g(x.emissiveMap.channel),metalnessMapUv:fe&&g(x.metalnessMap.channel),roughnessMapUv:Fe&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(x.sheenRoughnessMap.channel),specularMapUv:dt&&g(x.specularMap.channel),specularColorMapUv:ht&&g(x.specularColorMap.channel),specularIntensityMapUv:wt&&g(x.specularIntensityMap.channel),transmissionMapUv:Rt&&g(x.transmissionMap.channel),thicknessMapUv:zt&&g(x.thicknessMap.channel),alphaMapUv:lt&&g(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(jt||L),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(De||lt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Kt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ss,flipSided:x.side===Vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(T,x),v(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let T=p[x.type],R;if(T){let D=As[T];R=oE.clone(D.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new DL(n,T,x,s),c.push(R),u.set(T,R)),R}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function OL(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function PL(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function wE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function CE(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,_,m,d){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:d},n[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=d),t++,v}function l(h,p,g,_,m,d){let v=o(h,p,g,_,m,d);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(h,p,g,_,m,d){let v=o(h,p,g,_,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,p,g){e.length>1&&e.sort(h||PL),i.length>1&&i.sort(p||wE),s.length>1&&s.sort(p||wE),g&&(e.reverse(),i.reverse(),s.reverse())}function f(){for(let h=t,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function IL(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new CE,n.set(i,[a])):s>=r.length?(a=new CE,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function BL(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function zL(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var FL=0;function VL(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GL(n){let t=new BL,e=zL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new Oe,a=new Oe;function o(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,S=0,y=0,b=0,E=0,A=0;c.sort(VL);for(let T=0,R=c.length;T<R;T++){let D=c[T],N=D.color,G=D.intensity,X=D.distance,P=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===fa?P=D.shadow.map.texture:P=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*G,f+=N.g*G,h+=N.b*G;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],G);A++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=k,p++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(N).multiplyScalar(G),k.distance=X,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[_]=k;let B=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,B.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[_]=B.matrix,D.castShadow){let Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=P,y++}_++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(N).multiplyScalar(G),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=k,m++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let B=D.shadow,Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=k,g++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(G),k.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[d]=k,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==b||x.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,x.directionalLength=p,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=b,x.numLightProbes=A,i.version=FL++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let S=c[d];if(S.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function RE(n){let t=new GL(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function HL(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new RE(n),t.set(s,[o])):r>=a.length?(o=new RE(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var kL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WL=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],qL=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],DE=new Oe,Xu=new V,Iv=new V;function YL(n,t,e){let i=new Ol,s=new Zt,r=new Zt,a=new Pe,o=new Dd,l=new Nd,c={},u=e.maxTextureSize,f={[rr]:Vn,[Vn]:rr,[Ss]:Ss},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:kL,fragmentShader:XL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new xs;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ei(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let d=this.type;this.render=function(E,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===AT&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uu);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ms),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(P=>P.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,P=E.length;X<P;X++){let k=E[X],B=k.shadow;if(B===void 0){Nt("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fl){if(k.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Si(s.x,s.y,{format:fa,type:Ts,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new or(s.x,s.y,ji),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=_s,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn}else k.isPointLight?(B.map=new Ip(s.x),B.map.depthTexture=new Cd(s.x,Qi)):(B.map=new Si(s.x,s.y),B.map.depthTexture=new or(s.x,s.y,Qi)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=_s,this.type===Uu?(B.map.depthTexture.compareFunction=$?Up:Np,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn);B.camera.updateProjectionMatrix()}let it=B.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<it;at++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,at),n.clear();else{at===0&&(n.setRenderTarget(B.map),n.clear());let mt=B.getViewport(at);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),N.viewport(a)}if(k.isPointLight){let mt=B.camera,Kt=B.matrix,Qt=k.distance||mt.far;Qt!==mt.far&&(mt.far=Qt,mt.updateProjectionMatrix()),Xu.setFromMatrixPosition(k.matrixWorld),mt.position.copy(Xu),Iv.copy(mt.position),Iv.add(WL[at]),mt.up.copy(qL[at]),mt.lookAt(Iv),mt.updateMatrixWorld(),Kt.makeTranslation(-Xu.x,-Xu.y,-Xu.z),DE.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(DE,mt.coordinateSystem,mt.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),y(A,x,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Fl&&v(B,x),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,D)};function v(E,A){let x=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(s.x,s.y,{format:fa,type:Ts})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,x,p,_,null)}function S(E,A,x,T){let R=null,D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,G=A.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let P=X[G];P===void 0&&(P=R.clone(),X[G]=P,A.addEventListener("dispose",b)),R=P}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Fl?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=n.properties.get(R);N.light=x}return R}function y(E,A,x,T,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Fl)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let G=t.update(E),X=E.material;if(Array.isArray(X)){let P=G.groups;for(let k=0,B=P.length;k<B;k++){let Z=P[k],$=X[Z.materialIndex];if($&&$.visible){let it=S(E,$,T,R);E.onBeforeShadow(n,E,A,x,G,it,Z),n.renderBufferDirect(x,null,G,it,E,Z),E.onAfterShadow(n,E,A,x,G,it,Z)}}}else if(X.visible){let P=S(E,X,T,R);E.onBeforeShadow(n,E,A,x,G,P,null),n.renderBufferDirect(x,null,G,P,E,null),E.onAfterShadow(n,E,A,x,G,P,null)}}let N=E.children;for(let G=0,X=N.length;G<X;G++)y(N[G],A,x,T,R)}function b(E){E.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function ZL(n,t){function e(){let U=!1,lt=new Pe,K=null,ft=new Pe(0,0,0,0);return{setMask:function(vt){K!==vt&&!U&&(n.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){U=vt},setClear:function(vt,tt,bt,St,Ve){Ve===!0&&(vt*=St,tt*=St,bt*=St),lt.set(vt,tt,bt,St),ft.equals(lt)===!1&&(n.clearColor(vt,tt,bt,St),ft.copy(lt))},reset:function(){U=!1,K=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,lt=!1,K=null,ft=null,vt=null;return{setReversed:function(tt){if(lt!==tt){let bt=t.get("EXT_clip_control");tt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),lt=tt;let St=vt;vt=null,this.setClear(St)}},getReversed:function(){return lt},setTest:function(tt){tt?et(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(tt){K!==tt&&!U&&(n.depthMask(tt),K=tt)},setFunc:function(tt){if(lt&&(tt=rE[tt]),ft!==tt){switch(tt){case pd:n.depthFunc(n.NEVER);break;case md:n.depthFunc(n.ALWAYS);break;case gd:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case _d:n.depthFunc(n.EQUAL);break;case vd:n.depthFunc(n.GEQUAL);break;case yd:n.depthFunc(n.GREATER);break;case xd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=tt}},setLocked:function(tt){U=tt},setClear:function(tt){vt!==tt&&(vt=tt,lt&&(tt=1-tt),n.clearDepth(tt))},reset:function(){U=!1,K=null,ft=null,vt=null,lt=!1}}}function s(){let U=!1,lt=null,K=null,ft=null,vt=null,tt=null,bt=null,St=null,Ve=null;return{setTest:function(Se){U||(Se?et(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(Se){lt!==Se&&!U&&(n.stencilMask(Se),lt=Se)},setFunc:function(Se,$i,ts){(K!==Se||ft!==$i||vt!==ts)&&(n.stencilFunc(Se,$i,ts),K=Se,ft=$i,vt=ts)},setOp:function(Se,$i,ts){(tt!==Se||bt!==$i||St!==ts)&&(n.stencilOp(Se,$i,ts),tt=Se,bt=$i,St=ts)},setLocked:function(Se){U=Se},setClear:function(Se){Ve!==Se&&(n.clearStencil(Se),Ve=Se)},reset:function(){U=!1,lt=null,K=null,ft=null,vt=null,tt=null,bt=null,St=null,Ve=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,S=null,y=null,b=null,E=null,A=null,x=new Jt(0,0,0),T=0,R=!1,D=null,N=null,G=null,X=null,P=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),B=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=Z>=2);let it=null,at={},mt=n.getParameter(n.SCISSOR_BOX),Kt=n.getParameter(n.VIEWPORT),Qt=new Pe().fromArray(mt),Gt=new Pe().fromArray(Kt);function J(U,lt,K,ft){let vt=new Uint8Array(4),tt=n.createTexture();n.bindTexture(U,tt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<K;bt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(lt+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return tt}let rt={};rt[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(eo),Pt(!1),jt(ev),et(n.CULL_FACE),nt(Ms);function et(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ut(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ot(U,lt){return h[U]!==lt?(n.bindFramebuffer(U,lt),h[U]=lt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ct(U,lt){let K=g,ft=!1;if(U){K=p.get(lt),K===void 0&&(K=[],p.set(lt,K));let vt=U.textures;if(K.length!==vt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,bt=vt.length;tt<bt;tt++)K[tt]=n.COLOR_ATTACHMENT0+tt;K.length=vt.length,ft=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ft=!0);ft&&n.drawBuffers(K)}function De(U){return _!==U?(n.useProgram(U),_=U,!0):!1}let Xt={[ia]:n.FUNC_ADD,[CT]:n.FUNC_SUBTRACT,[RT]:n.FUNC_REVERSE_SUBTRACT};Xt[DT]=n.MIN,Xt[NT]=n.MAX;let oe={[UT]:n.ZERO,[LT]:n.ONE,[OT]:n.SRC_COLOR,[fd]:n.SRC_ALPHA,[VT]:n.SRC_ALPHA_SATURATE,[zT]:n.DST_COLOR,[IT]:n.DST_ALPHA,[PT]:n.ONE_MINUS_SRC_COLOR,[dd]:n.ONE_MINUS_SRC_ALPHA,[FT]:n.ONE_MINUS_DST_COLOR,[BT]:n.ONE_MINUS_DST_ALPHA,[GT]:n.CONSTANT_COLOR,[HT]:n.ONE_MINUS_CONSTANT_COLOR,[kT]:n.CONSTANT_ALPHA,[XT]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(U,lt,K,ft,vt,tt,bt,St,Ve,Se){if(U===Ms){m===!0&&(Ut(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),U!==wT){if(U!==d||Se!==R){if((v!==ia||b!==ia)&&(n.blendEquation(n.FUNC_ADD),v=ia,b=ia),Se)switch(U){case to:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nv:n.blendFunc(n.ONE,n.ONE);break;case iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",U);break}else switch(U){case to:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case iv:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",U);break}S=null,y=null,E=null,A=null,x.set(0,0,0),T=0,d=U,R=Se}return}vt=vt||lt,tt=tt||K,bt=bt||ft,(lt!==v||vt!==b)&&(n.blendEquationSeparate(Xt[lt],Xt[vt]),v=lt,b=vt),(K!==S||ft!==y||tt!==E||bt!==A)&&(n.blendFuncSeparate(oe[K],oe[ft],oe[tt],oe[bt]),S=K,y=ft,E=tt,A=bt),(St.equals(x)===!1||Ve!==T)&&(n.blendColor(St.r,St.g,St.b,Ve),x.copy(St),T=Ve),d=U,R=!1}function ot(U,lt){U.side===Ss?Ut(n.CULL_FACE):et(n.CULL_FACE);let K=U.side===Vn;lt&&(K=!K),Pt(K),U.blending===to&&U.transparent===!1?nt(Ms):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function jt(U){U!==TT?(et(n.CULL_FACE),U!==N&&(U===ev?n.cullFace(n.BACK):U===ET?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),N=U}function Ht(U){U!==G&&(B&&n.lineWidth(U),G=U)}function Te(U,lt,K){U?(et(n.POLYGON_OFFSET_FILL),(X!==lt||P!==K)&&(X=lt,P=K,a.getReversed()&&(lt=-lt),n.polygonOffset(lt,K))):Ut(n.POLYGON_OFFSET_FILL)}function fe(U){U?et(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=n.TEXTURE0+k-1),it!==U&&(n.activeTexture(U),it=U)}function L(U,lt,K){K===void 0&&(it===null?K=n.TEXTURE0+k-1:K=it);let ft=at[K];ft===void 0&&(ft={type:void 0,texture:void 0},at[K]=ft),(ft.type!==U||ft.texture!==lt)&&(it!==K&&(n.activeTexture(K),it=K),n.bindTexture(U,lt||rt[U]),ft.type=U,ft.texture=lt)}function Gn(){let U=at[it];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function I(){try{n.texSubImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function st(){try{n.texStorage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Y(){try{n.texImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function ut(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function Tt(U,lt){f[U]!==lt&&(n.pixelStorei(U,lt),f[U]=lt)}function dt(U){Qt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function ht(U){Gt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Gt.copy(U))}function wt(U,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let ft=K.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(lt,U.name),K.set(U,ft))}function Rt(U,lt){let ft=c.get(lt).get(U);l.get(lt)!==ft&&(n.uniformBlockBinding(lt,ft,U.__bindingPointIndex),l.set(lt,ft))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},it=null,at={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,S=null,y=null,b=null,E=null,A=null,x=new Jt(0,0,0),T=0,R=!1,D=null,N=null,G=null,X=null,P=null,Qt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Ut,bindFramebuffer:Ot,drawBuffers:Ct,useProgram:De,setBlending:nt,setMaterial:ot,setFlipSided:Pt,setCullFace:jt,setLineWidth:Ht,setPolygonOffset:Te,setScissorTest:fe,activeTexture:Fe,bindTexture:L,unbindTexture:Gn,compressedTexImage2D:ce,compressedTexImage3D:C,texImage2D:Y,texImage3D:Q,pixelStorei:Tt,getParameter:ut,updateUBOMapping:wt,uniformBlockBinding:Rt,texStorage2D:st,texStorage3D:ct,texSubImage2D:M,texSubImage3D:I,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:dt,viewport:ht,reset:zt}}function JL(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):Cl("canvas")}function m(C,M,I){let H=1,q=ce(C);if((q.width>I||q.height>I)&&(H=I/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let st=Math.floor(H*q.width),ct=Math.floor(H*q.height);h===void 0&&(h=_(st,ct));let Y=M?_(st,ct):h;return Y.width=st,Y.height=ct,Y.getContext("2d").drawImage(C,0,0,st,ct),Nt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+st+"x"+ct+")."),Y}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function d(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,M,I,H,q,st=!1){if(C!==null){if(n[C]!==void 0)return n[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;H&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===n.RED&&(I===n.FLOAT&&(Y=n.R32F),I===n.HALF_FLOAT&&(Y=n.R16F),I===n.UNSIGNED_BYTE&&(Y=n.R8),I===n.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),I===n.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),M===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.R8UI),I===n.UNSIGNED_SHORT&&(Y=n.R16UI),I===n.UNSIGNED_INT&&(Y=n.R32UI),I===n.BYTE&&(Y=n.R8I),I===n.SHORT&&(Y=n.R16I),I===n.INT&&(Y=n.R32I)),M===n.RG&&(I===n.FLOAT&&(Y=n.RG32F),I===n.HALF_FLOAT&&(Y=n.RG16F),I===n.UNSIGNED_BYTE&&(Y=n.RG8),I===n.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),I===n.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RG8UI),I===n.UNSIGNED_SHORT&&(Y=n.RG16UI),I===n.UNSIGNED_INT&&(Y=n.RG32UI),I===n.BYTE&&(Y=n.RG8I),I===n.SHORT&&(Y=n.RG16I),I===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),I===n.UNSIGNED_INT&&(Y=n.RGB32UI),I===n.BYTE&&(Y=n.RGB8I),I===n.SHORT&&(Y=n.RGB16I),I===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),I===n.UNSIGNED_INT&&(Y=n.RGBA32UI),I===n.BYTE&&(Y=n.RGBA8I),I===n.SHORT&&(Y=n.RGBA16I),I===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&(I===n.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),I===n.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),M===n.RGBA){let Q=st?gu:te.getTransfer(q);I===n.FLOAT&&(Y=n.RGBA32F),I===n.HALF_FLOAT&&(Y=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Y=Q===le?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),I===n.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(C,M){let I;return C?M===null||M===Qi||M===Gl?I=n.DEPTH24_STENCIL8:M===ji?I=n.DEPTH32F_STENCIL8:M===Vl&&(I=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===Gl?I=n.DEPTH_COMPONENT24:M===ji?I=n.DEPTH_COMPONENT32F:M===Vl&&(I=n.DEPTH_COMPONENT16),I}function E(C,M){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function x(C){let M=C.target;M.removeEventListener("dispose",x),D(M)}function T(C){let M=i.get(C);if(M.__webglInit===void 0)return;let I=C.source,H=p.get(I);if(H){let q=H[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(H).length===0&&p.delete(I)}i.remove(C)}function R(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let I=C.source,H=p.get(I);delete H[M.__cacheKey],a.memory.textures--}function D(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let q=0;q<M.__webglFramebuffer[H].length;q++)n.deleteFramebuffer(M.__webglFramebuffer[H][q]);else n.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)n.deleteFramebuffer(M.__webglFramebuffer[H]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let I=C.textures;for(let H=0,q=I.length;H<q;H++){let st=i.get(I[H]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(I[H])}i.remove(C)}let N=0;function G(){N=0}function X(){return N}function P(C){N=C}function k(){let C=N;return C>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function B(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){let I=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let H=C.image;if(H===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(I,C,M);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+M)}function $(C,M){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Ut(I,C,M);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+M)}function it(C,M){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Ut(I,C,M);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+M)}function at(C,M){let I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){Ot(I,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+M)}let mt={[Al]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Sd]:n.MIRRORED_REPEAT},Kt={[dn]:n.NEAREST,[YT]:n.NEAREST_MIPMAP_NEAREST,[Pu]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Yd]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},Qt={[KT]:n.NEVER,[eE]:n.ALWAYS,[QT]:n.LESS,[Np]:n.LEQUAL,[jT]:n.EQUAL,[Up]:n.GEQUAL,[$T]:n.GREATER,[tE]:n.NOTEQUAL};function Gt(C,M){if(M.type===ji&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===Yd||M.magFilter===Pu||M.magFilter===bs||M.minFilter===Mn||M.minFilter===Yd||M.minFilter===Pu||M.minFilter===bs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,mt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,mt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,mt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Kt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Kt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Qt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==Pu&&M.minFilter!==bs||M.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(C,M){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let H=M.source,q=p.get(H);q===void 0&&(q={},p.set(H,q));let st=B(M);if(st!==C.__cacheKey){q[st]===void 0&&(q[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[st].usedTimes++;let ct=q[C.__cacheKey];ct!==void 0&&(q[C.__cacheKey].usedTimes--,ct.usedTimes===0&&R(M)),C.__cacheKey=st,C.__webglTexture=q[st].texture}return I}function rt(C,M,I){return Math.floor(Math.floor(C/I)/M)}function et(C,M,I,H){let st=C.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,I,H,M.data);else{st.sort((Tt,dt)=>Tt.start-dt.start);let ct=0;for(let Tt=1;Tt<st.length;Tt++){let dt=st[ct],ht=st[Tt],wt=dt.start+dt.count,Rt=rt(ht.start,M.width,4),zt=rt(dt.start,M.width,4);ht.start<=wt+1&&Rt===zt&&rt(ht.start+ht.count-1,M.width,4)===Rt?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++ct,st[ct]=ht)}st.length=ct+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Tt=0,dt=st.length;Tt<dt;Tt++){let ht=st[Tt],wt=Math.floor(ht.start/4),Rt=Math.ceil(ht.count/4),zt=wt%M.width,U=Math.floor(wt/M.width),lt=Rt,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,zt,U,lt,K,I,H,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function Ut(C,M,I){let H=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=n.TEXTURE_3D);let q=J(C,M),st=M.source;e.bindTexture(H,C.__webglTexture,n.TEXTURE0+I);let ct=i.get(st);if(st.version!==ct.__version||q===!0){if(e.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let K=te.getPrimaries(te.workingColorSpace),ft=M.colorSpace===lr?null:te.getPrimaries(M.colorSpace),vt=M.colorSpace===lr||K===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,s.maxTextureSize);Q=Gn(M,Q);let ut=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),dt=y(M.internalFormat,ut,Tt,M.normalized,M.colorSpace,M.isVideoTexture);Gt(H,M);let ht,wt=M.mipmaps,Rt=M.isVideoTexture!==!0,zt=ct.__version===void 0||q===!0,U=st.dataReady,lt=E(M,Q);if(M.isDepthTexture)dt=b(M.format===ha,M.type),zt&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,Tt,null));else if(M.isDataTexture)if(wt.length>0){Rt&&zt&&e.texStorage2D(n.TEXTURE_2D,lt,dt,wt[0].width,wt[0].height);for(let K=0,ft=wt.length;K<ft;K++)ht=wt[K],Rt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ht.width,ht.height,ut,Tt,ht.data):e.texImage2D(n.TEXTURE_2D,K,dt,ht.width,ht.height,0,ut,Tt,ht.data);M.generateMipmaps=!1}else Rt?(zt&&e.texStorage2D(n.TEXTURE_2D,lt,dt,Q.width,Q.height),U&&et(M,Q,ut,Tt)):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,Tt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Rt&&zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,dt,wt[0].width,wt[0].height,Q.depth);for(let K=0,ft=wt.length;K<ft;K++)if(ht=wt[K],M.format!==Hi)if(ut!==null)if(Rt){if(U)if(M.layerUpdates.size>0){let vt=Ev(ht.width,ht.height,M.format,M.type);for(let tt of M.layerUpdates){let bt=ht.data.subarray(tt*vt/ht.data.BYTES_PER_ELEMENT,(tt+1)*vt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,tt,ht.width,ht.height,1,ut,bt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,Q.depth,ut,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,dt,ht.width,ht.height,Q.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,Q.depth,ut,Tt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,dt,ht.width,ht.height,Q.depth,0,ut,Tt,ht.data)}else{Rt&&zt&&e.texStorage2D(n.TEXTURE_2D,lt,dt,wt[0].width,wt[0].height);for(let K=0,ft=wt.length;K<ft;K++)ht=wt[K],M.format!==Hi?ut!==null?Rt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,K,dt,ht.width,ht.height,0,ht.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ht.width,ht.height,ut,Tt,ht.data):e.texImage2D(n.TEXTURE_2D,K,dt,ht.width,ht.height,0,ut,Tt,ht.data)}else if(M.isDataArrayTexture)if(Rt){if(zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,dt,Q.width,Q.height,Q.depth),U)if(M.layerUpdates.size>0){let K=Ev(Q.width,Q.height,M.format,M.type);for(let ft of M.layerUpdates){let vt=Q.data.subarray(ft*K/Q.data.BYTES_PER_ELEMENT,(ft+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,Q.width,Q.height,1,ut,Tt,vt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Tt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,ut,Tt,Q.data);else if(M.isData3DTexture)Rt?(zt&&e.texStorage3D(n.TEXTURE_3D,lt,dt,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,ut,Tt,Q.data);else if(M.isFramebufferTexture){if(zt)if(Rt)e.texStorage2D(n.TEXTURE_2D,lt,dt,Q.width,Q.height);else{let K=Q.width,ft=Q.height;for(let vt=0;vt<lt;vt++)e.texImage2D(n.TEXTURE_2D,vt,dt,K,ft,0,ut,Tt,null),K>>=1,ft>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),f.add(M),K.onpaint=ft=>{let vt=ft.changedElements;for(let tt of f)vt.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let vt=n.RGBA,tt=n.RGBA,bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,vt,tt,bt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Rt&&zt){let K=ce(wt[0]);e.texStorage2D(n.TEXTURE_2D,lt,dt,K.width,K.height)}for(let K=0,ft=wt.length;K<ft;K++)ht=wt[K],Rt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ut,Tt,ht):e.texImage2D(n.TEXTURE_2D,K,dt,ut,Tt,ht);M.generateMipmaps=!1}else if(Rt){if(zt){let K=ce(Q);e.texStorage2D(n.TEXTURE_2D,lt,dt,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Tt,Q)}else e.texImage2D(n.TEXTURE_2D,0,dt,ut,Tt,Q);d(M)&&v(H),ct.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ot(C,M,I){if(M.image.length!==6)return;let H=J(C,M),q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+I);let st=i.get(q);if(q.version!==st.__version||H===!0){e.activeTexture(n.TEXTURE0+I);let ct=te.getPrimaries(te.workingColorSpace),Y=M.colorSpace===lr?null:te.getPrimaries(M.colorSpace),Q=M.colorSpace===lr||ct===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,dt=[];for(let tt=0;tt<6;tt++)!ut&&!Tt?dt[tt]=m(M.image[tt],!0,s.maxCubemapSize):dt[tt]=Tt?M.image[tt].image:M.image[tt],dt[tt]=Gn(M,dt[tt]);let ht=dt[0],wt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),zt=y(M.internalFormat,wt,Rt,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,lt=st.__version===void 0||H===!0,K=q.dataReady,ft=E(M,ht);Gt(n.TEXTURE_CUBE_MAP,M);let vt;if(ut){U&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,zt,ht.width,ht.height);for(let tt=0;tt<6;tt++){vt=dt[tt].mipmaps;for(let bt=0;bt<vt.length;bt++){let St=vt[bt];M.format!==Hi?wt!==null?U?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,zt,St.width,St.height,0,St.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,St.width,St.height,wt,Rt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,zt,St.width,St.height,0,wt,Rt,St.data)}}}else{if(vt=M.mipmaps,U&&lt){vt.length>0&&ft++;let tt=ce(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,zt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Tt){U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,dt[tt].width,dt[tt].height,wt,Rt,dt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,zt,dt[tt].width,dt[tt].height,0,wt,Rt,dt[tt].data);for(let bt=0;bt<vt.length;bt++){let Ve=vt[bt].image[tt].image;U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Ve.width,Ve.height,wt,Rt,Ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,zt,Ve.width,Ve.height,0,wt,Rt,Ve.data)}}else{U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,Rt,dt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,zt,wt,Rt,dt[tt]);for(let bt=0;bt<vt.length;bt++){let St=vt[bt];U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,wt,Rt,St.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,zt,wt,Rt,St.image[tt])}}}d(M)&&v(n.TEXTURE_CUBE_MAP),st.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ct(C,M,I,H,q,st){let ct=r.convert(I.format,I.colorSpace),Y=r.convert(I.type),Q=y(I.internalFormat,ct,Y,I.normalized,I.colorSpace),ut=i.get(M),Tt=i.get(I);if(Tt.__renderTarget=M,!ut.__hasExternalTextures){let dt=Math.max(1,M.width>>st),ht=Math.max(1,M.height>>st);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,st,Q,dt,ht,M.depth,0,ct,Y,null):e.texImage2D(q,st,Q,dt,ht,0,ct,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,q,Tt.__webglTexture,0,fe(M)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,q,Tt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function De(C,M,I){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let H=M.depthTexture,q=H&&H.isDepthTexture?H.type:null,st=b(M.stencilBuffer,q),ct=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(M),st,M.width,M.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(M),st,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,st,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{let H=M.textures;for(let q=0;q<H.length;q++){let st=H[q],ct=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),Q=y(st.internalFormat,ct,Y,st.normalized,st.colorSpace);Fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(M),Q,M.width,M.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(M),Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xt(C,M,I){let H=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(M.depthTexture);if(q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,M.depthTexture);let ut=r.convert(M.depthTexture.format),Tt=r.convert(M.depthTexture.type),dt;M.depthTexture.format===_s?dt=n.DEPTH_COMPONENT24:M.depthTexture.format===ha&&(dt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,M.width,M.height,0,ut,Tt,null)}}else Z(M.depthTexture,0);let st=q.__webglTexture,ct=fe(M),Y=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Q=M.depthTexture.format===ha?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===_s)Fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,st,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,st,0);else if(M.depthTexture.format===ha)Fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,st,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(C){let M=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){let q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),M.__depthDisposeCallback=q}M.__boundDepthTexture=H}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let H=0;H<6;H++)Xt(M.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?Xt(M.__webglFramebuffer[0],C,0):Xt(M.__webglFramebuffer,C,0)}else if(I){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=n.createRenderbuffer(),De(M.__webglDepthbuffer[H],C,!1);else{let q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,st)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),De(M.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(C,M,I){let H=i.get(C);M!==void 0&&Ct(H.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&oe(C)}function ot(C){let M=C.texture,I=i.get(C),H=i.get(M);C.addEventListener("dispose",x);let q=C.textures,st=C.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=M.version,a.memory.textures++),st){I.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[Y]=[];for(let Q=0;Q<M.mipmaps.length;Q++)I.__webglFramebuffer[Y][Q]=n.createFramebuffer()}else I.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)I.__webglFramebuffer[Y]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ct)for(let Y=0,Q=q.length;Y<Q;Y++){let ut=i.get(q[Y]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Fe(C)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let Q=q[Y];I.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[Y]);let ut=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),dt=y(Q.internalFormat,ut,Tt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ht=fe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,I.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),De(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ct(I.__webglFramebuffer[Y][Q],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Ct(I.__webglFramebuffer[Y],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(M)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,Q=q.length;Y<Q;Y++){let ut=q[Y],Tt=i.get(ut),dt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Tt.__webglTexture),Gt(dt,ut),Ct(I.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+Y,dt,0),d(ut)&&v(dt)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,H.__webglTexture),Gt(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ct(I.__webglFramebuffer[Q],C,M,n.COLOR_ATTACHMENT0,Y,Q);else Ct(I.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,Y,0);d(M)&&v(Y),e.unbindTexture()}C.depthBuffer&&oe(C)}function Pt(C){let M=C.textures;for(let I=0,H=M.length;I<H;I++){let q=M[I];if(d(q)){let st=S(C),ct=i.get(q).__webglTexture;e.bindTexture(st,ct),v(st),e.unbindTexture()}}}let jt=[],Ht=[];function Te(C){if(C.samples>0){if(Fe(C)===!1){let M=C.textures,I=C.width,H=C.height,q=n.COLOR_BUFFER_BIT,st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),Y=M.length>1;if(Y)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Tt=i.get(M[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,q,n.NEAREST),l===!0&&(jt.length=0,Ht.length=0,jt.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(jt.push(st),Ht.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Tt=i.get(M[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function fe(C){return Math.min(s.maxSamples,C.samples)}function Fe(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Gn(C,M){let I=C.colorSpace,H=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==mu&&I!==lr&&(te.getTransfer(I)===le?(H!==Hi||q!==ni)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",I)),M}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=P,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=nt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function KL(n,t){function e(i,s=lr){let r,a=te.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===Jd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dv)return n.BYTE;if(i===pv)return n.SHORT;if(i===Vl)return n.UNSIGNED_SHORT;if(i===Zd)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===_v)return n.ALPHA;if(i===vv)return n.RGB;if(i===Hi)return n.RGBA;if(i===_s)return n.DEPTH_COMPONENT;if(i===ha)return n.DEPTH_STENCIL;if(i===yv)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===fa)return n.RG;if(i===jd)return n.RG_INTEGER;if(i===$d)return n.RGBA_INTEGER;if(i===Iu||i===Bu||i===zu||i===Fu)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Iu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Iu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tp||i===ep||i===np||i===ip)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===np)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ip)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sp||i===rp||i===ap||i===op||i===lp||i===Vu||i===cp)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sp||i===rp)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ap)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===op)return r.COMPRESSED_R11_EAC;if(i===lp)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vu)return r.COMPRESSED_RG11_EAC;if(i===cp)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===up||i===hp||i===fp||i===dp||i===pp||i===mp||i===gp||i===_p||i===vp||i===yp||i===xp||i===Sp||i===Mp||i===bp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===up)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_p)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bp)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tp||i===Ep||i===Ap)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tp)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ep)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ap)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wp||i===Cp||i===Gu||i===Rp)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var QL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Tu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mi({vertexShader:QL,fragmentShader:jL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ei(new Eu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wv=class extends vs{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Xv,d={},v=e.getContextAttributes(),S=null,y=null,b=[],E=[],A=new Zt,x=null,T=new Dn;T.viewport=new Pe;let R=new Dn;R.viewport=new Pe;let D=[T,R],N=new kd,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=b[J];return rt===void 0&&(rt=new Ul,b[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=b[J];return rt===void 0&&(rt=new Ul,b[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=b[J];return rt===void 0&&(rt=new Ul,b[J]=rt),rt.getHandSpace()};function P(J){let rt=E.indexOf(J.inputSource);if(rt===-1)return;let et=b[rt];et!==void 0&&(et.update(J.inputSource,J.frame,c||a),et.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let J=0;J<b.length;J++){let rt=E[J];rt!==null&&(E[J]=null,b[J].disconnect(rt))}G=null,X=null,m.reset();for(let J in d)delete d[J];t.setRenderTarget(S),p=null,h=null,f=null,s=null,y=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Ut=null,Ot=null;v.depth&&(Ot=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?ha:_s,Ut=v.stencil?Gl:Qi);let Ct={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Si(h.textureWidth,h.textureHeight,{format:Hi,type:ni,depthTexture:new or(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Si(p.framebufferWidth,p.framebufferHeight,{format:Hi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(J){for(let rt=0;rt<J.removed.length;rt++){let et=J.removed[rt],Ut=E.indexOf(et);Ut>=0&&(E[Ut]=null,b[Ut].disconnect(et))}for(let rt=0;rt<J.added.length;rt++){let et=J.added[rt],Ut=E.indexOf(et);if(Ut===-1){for(let Ct=0;Ct<b.length;Ct++)if(Ct>=E.length){E.push(et),Ut=Ct;break}else if(E[Ct]===null){E[Ct]=et,Ut=Ct;break}if(Ut===-1)break}let Ot=b[Ut];Ot&&Ot.connect(et)}}let Z=new V,$=new V;function it(J,rt,et){Z.setFromMatrixPosition(rt.matrixWorld),$.setFromMatrixPosition(et.matrixWorld);let Ut=Z.distanceTo($),Ot=rt.projectionMatrix.elements,Ct=et.projectionMatrix.elements,De=Ot[14]/(Ot[10]-1),Xt=Ot[14]/(Ot[10]+1),oe=(Ot[9]+1)/Ot[5],nt=(Ot[9]-1)/Ot[5],ot=(Ot[8]-1)/Ot[0],Pt=(Ct[8]+1)/Ct[0],jt=De*ot,Ht=De*Pt,Te=Ut/(-ot+Pt),fe=Te*-ot;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(fe),J.translateZ(Te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Fe=De+Te,L=Xt+Te,Gn=jt-fe,ce=Ht+(Ut-fe),C=oe*Xt/L*Fe,M=nt*Xt/L*Fe;J.projectionMatrix.makePerspective(Gn,ce,C,M,Fe,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let rt=J.near,et=J.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(et=m.depthFar)),N.near=R.near=T.near=rt,N.far=R.far=T.far=et,(G!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,X=N.far),N.layers.mask=J.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let Ut=J.parent,Ot=N.cameras;at(N,Ut);for(let Ct=0;Ct<Ot.length;Ct++)at(Ot[Ct],Ut);Ot.length===2?it(N,T,R):N.projectionMatrix.copy(T.projectionMatrix),mt(J,N,Ut)};function mt(J,rt,et){et===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(et.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return d[J]};let Kt=null;function Qt(J,rt){if(u=rt.getViewerPose(c||a),g=rt,u!==null){let et=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;et.length!==N.cameras.length&&(N.cameras.length=0,Ut=!0);for(let Xt=0;Xt<et.length;Xt++){let oe=et[Xt],nt=null;if(p!==null)nt=p.getViewport(oe);else{let Pt=f.getViewSubImage(h,oe);nt=Pt.viewport,Xt===0&&(t.setRenderTargetTextures(y,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(y))}let ot=D[Xt];ot===void 0&&(ot=new Dn,ot.layers.enable(Xt),ot.viewport=new Pe,D[Xt]=ot),ot.matrix.fromArray(oe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(oe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(nt.x,nt.y,nt.width,nt.height),Xt===0&&(N.matrix.copy(ot.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ut===!0&&N.cameras.push(ot)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let Xt=f.getDepthInformation(et[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(Ot&&Ot.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let Xt=0;Xt<et.length;Xt++){let oe=et[Xt].camera;if(oe){let nt=d[oe];nt||(nt=new Tu,d[oe]=nt);let ot=f.getCameraImage(oe);nt.sourceTexture=ot}}}}for(let et=0;et<b.length;et++){let Ut=E[et],Ot=b[et];Ut!==null&&Ot!==void 0&&Ot.update(Ut,rt,c||a)}Kt&&Kt(J,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let Gt=new NE;Gt.setAnimationLoop(Qt),this.setAnimationLoop=function(J){Kt=J},this.dispose=function(){}}},$L=new Oe,BE=new It;BE.set(-1,0,0,0,1,0,0,0,1);function tO(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Mv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4($L.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(BE),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eO(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(m(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",v));let A=b.program;i.updateUBOMapping(y,A);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let b=f();y.__bindingPointIndex=b;let E=n.createBuffer(),A=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],E=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,T=E.length;x<T;x++){let R=E[x];if(Array.isArray(R))for(let D=0,N=R.length;D<N;D++)p(R[D],x,D,A);else p(R,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,E,A){if(_(y,b,E,A)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let N=T[D],G=d(N);g(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function _(y,b,E,A){let x=y.value,T=b+"_"+E;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let b=y.uniforms,E=0,A=16;for(let T=0,R=b.length;T<R;T++){let D=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,G=D.length;N<G;N++){let X=D[N],P=Array.isArray(X.value)?X.value:[X.value];for(let k=0,B=P.length;k<B;k++){let Z=P[k],$=d(Z),it=E%A,at=it%$.boundary,mt=it+at;E+=at,mt!==0&&A-mt<$.storage&&(E+=A-mt),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=$.storage}}}let x=E%A;return x>0&&(E+=A-x),y.__size=E,y.__cache={},this}function d(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",y),b}function v(y){let b=y.target;b.removeEventListener("dispose",v);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var nO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Es=null;function iO(){return Es===null&&(Es=new wd(nO,16,16,fa,Ts),Es.name="DFG_LUT",Es.minFilter=Mn,Es.magFilter=Mn,Es.wrapS=gs,Es.wrapT=gs,Es.generateMipmaps=!1,Es.needsUpdate=!0),Es}var Bp=class{constructor(t={}){let{canvas:e=nE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,m=new Set([$d,jd,Qd]),d=new Set([ni,Qi,Vl,Gl,Jd,Kd]),v=new Uint32Array(4),S=new Int32Array(4),y=new V,b=null,E=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,N=null,G=null,X=null,P=null;this._outputColorSpace=Sn;let k=0,B=0,Z=null,$=-1,it=null,at=new Pe,mt=new Pe,Kt=null,Qt=new Jt(0),Gt=0,J=e.width,rt=e.height,et=1,Ut=null,Ot=null,Ct=new Pe(0,0,J,rt),De=new Pe(0,0,J,rt),Xt=!1,oe=new Ol,nt=!1,ot=!1,Pt=new Oe,jt=new V,Ht=new Pe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Fe(){return Z===null?et:1}let L=i;function Gn(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Ve,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",$i,!1),L===null){let O="webgl2";if(L=Gn(O,w),L===null)throw Gn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let ce,C,M,I,H,q,st,ct,Y,Q,ut,Tt,dt,ht,wt,Rt,zt,U,lt,K,ft,vt,tt;function bt(){ce=new uU(L),ce.init(),ft=new KL(L,ce),C=new nU(L,ce,t,ft),M=new ZL(L,ce),C.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),G=L.createFramebuffer(),X=L.createFramebuffer(),P=L.createFramebuffer(),I=new dU(L),H=new OL,q=new JL(L,ce,M,H,C,ft,I),st=new cU(R),ct=new _3(L),vt=new tU(L,ct),Y=new hU(L,ct,I,vt),Q=new mU(L,Y,ct,vt,I),U=new pU(L,C,q),wt=new iU(H),ut=new LL(R,st,ce,C,vt,wt),Tt=new tO(R,H),dt=new IL,ht=new HL(ce),zt=new $N(R,st,M,Q,g,l),Rt=new YL(R,Q,C),tt=new eO(L,I,C,M),lt=new eU(L,ce,I),K=new fU(L,ce,I),I.programs=ut.programs,R.capabilities=C,R.extensions=ce,R.properties=H,R.renderLists=dt,R.shadowMap=Rt,R.state=M,R.info=I}bt(),_!==ni&&(T=new _U(_,e.width,e.height,o,s,r));let St=new Wv(R,L);this.xr=St,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(J,rt,!1))},this.getSize=function(w){return w.set(J,rt)},this.setSize=function(w,O,W=!0){if(St.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,rt=O,e.width=Math.floor(w*et),e.height=Math.floor(O*et),W===!0&&(e.style.width=w+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(J*et,rt*et).floor()},this.setDrawingBufferSize=function(w,O,W){J=w,rt=O,et=W,e.width=Math.floor(w*W),e.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===ni){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(at)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,O,W,z){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,O,W,z),M.viewport(at.copy(Ct).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,O,W,z){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,O,W,z),M.scissor(mt.copy(De).multiplyScalar(et).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){M.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){Ut=w},this.setTransparentSort=function(w){Ot=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let z=0;if(w){let F=!1;if(Z!==null){let _t=Z.texture.format;F=m.has(_t)}if(F){let _t=Z.texture.type,xt=d.has(_t),gt=zt.getClearColor(),Mt=zt.getClearAlpha(),Et=gt.r,Ft=gt.g,Wt=gt.b;xt?(v[0]=Et,v[1]=Ft,v[2]=Wt,v[3]=Mt,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=Et,S[1]=Ft,S[2]=Wt,S[3]=Mt,L.clearBufferiv(L.COLOR,0,S))}else z|=L.COLOR_BUFFER_BIT}O&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ve,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",$i,!1),zt.dispose(),dt.dispose(),ht.dispose(),H.dispose(),st.dispose(),Q.dispose(),vt.dispose(),tt.dispose(),ut.dispose(),St.dispose(),St.removeEventListener("sessionstart",Yv),St.removeEventListener("sessionend",Zv),ma.stop()};function Ve(w){w.preventDefault(),Sv("WebGLRenderer: Context Lost."),D=!0}function Se(){Sv("WebGLRenderer: Context Restored."),D=!1;let w=I.autoReset,O=Rt.enabled,W=Rt.autoUpdate,z=Rt.needsUpdate,F=Rt.type;bt(),I.autoReset=w,Rt.enabled=O,Rt.autoUpdate=W,Rt.needsUpdate=z,Rt.type=F}function $i(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ts(w){let O=w.target;O.removeEventListener("dispose",ts),YE(O)}function YE(w){ZE(w),H.remove(w)}function ZE(w){let O=H.get(w).programs;O!==void 0&&(O.forEach(function(W){ut.releaseProgram(W)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,z,F,_t){O===null&&(O=Te);let xt=F.isMesh&&F.matrixWorld.determinantAffine()<0,gt=QE(w,O,W,z,F);M.setMaterial(z,xt);let Mt=W.index,Et=1;if(z.wireframe===!0){if(Mt=Y.getWireframeAttribute(W),Mt===void 0)return;Et=2}let Ft=W.drawRange,Wt=W.attributes.position,At=Ft.start*Et,de=(Ft.start+Ft.count)*Et;_t!==null&&(At=Math.max(At,_t.start*Et),de=Math.min(de,(_t.start+_t.count)*Et)),Mt!==null?(At=Math.max(At,0),de=Math.min(de,Mt.count)):Wt!=null&&(At=Math.max(At,0),de=Math.min(de,Wt.count));let Ye=de-At;if(Ye<0||Ye===1/0)return;vt.setup(F,z,gt,W,Mt);let Ge,ge=lt;if(Mt!==null&&(Ge=ct.get(Mt),ge=K,ge.setIndex(Ge)),F.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*Fe()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(F.isLine){let bn=z.linewidth;bn===void 0&&(bn=1),M.setLineWidth(bn*Fe()),F.isLineSegments?ge.setMode(L.LINES):F.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else F.isPoints?ge.setMode(L.POINTS):F.isSprite&&ge.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))ge.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let bn=F._multiDrawStarts,yt=F._multiDrawCounts,ii=F._multiDrawCount,se=Mt?ct.get(Mt).bytesPerElement:1,Ti=H.get(z).currentProgram.getUniforms();for(let es=0;es<ii;es++)Ti.setValue(L,"_gl_DrawID",es),ge.render(bn[es]/se,yt[es])}else if(F.isInstancedMesh)ge.renderInstances(At,Ye,F.count);else if(W.isInstancedBufferGeometry){let bn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,bn);ge.renderInstances(At,Ye,yt)}else ge.render(At,Ye)};function qv(w,O,W){w.transparent===!0&&w.side===Ss&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,Zu(w,O,W),w.side=rr,w.needsUpdate=!0,Zu(w,O,W),w.side=Ss):Zu(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),E=ht.get(W),E.init(O),x.push(E),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),w!==W&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),E.setupLights();let z=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let _t=F.material;if(_t)if(Array.isArray(_t))for(let xt=0;xt<_t.length;xt++){let gt=_t[xt];qv(gt,W,F),z.add(gt)}else qv(_t,W,F),z.add(_t)}),E=x.pop(),z},this.compileAsync=function(w,O,W=null){let z=this.compile(w,O,W);return new Promise(F=>{function _t(){if(z.forEach(function(xt){H.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){F(w);return}setTimeout(_t,10)}ce.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Gp=null;function JE(w){Gp&&Gp(w)}function Yv(){ma.stop()}function Zv(){ma.start()}let ma=new NE;ma.setAnimationLoop(JE),typeof self<"u"&&ma.setContext(self),this.setAnimationLoop=function(w){Gp=w,St.setAnimationLoop(w),w===null?ma.stop():ma.start()},St.addEventListener("sessionstart",Yv),St.addEventListener("sessionend",Zv),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(w,O);let W=St.enabled===!0&&St.isPresenting===!0,z=T!==null&&(Z===null||W)&&T.begin(R,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(O),O=St.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,O,Z),E=ht.get(w,x.length),E.init(O),E.state.textureUnits=q.getTextureUnits(),x.push(E),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),oe.setFromProjectionMatrix(Pt,Ji,O.reversedDepth),ot=this.localClippingEnabled,nt=wt.init(this.clippingPlanes,ot),b=dt.get(w,A.length),b.init(),A.push(b),St.enabled===!0&&St.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Hp(xt,O,-1/0,R.sortObjects)}Hp(w,O,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(Ut,Ot,O.reversedDepth),fe=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,fe&&zt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&wt.beginShadows();let F=E.state.shadowsArray;if(Rt.render(F,w,O),nt===!0&&wt.endShadows(),(z&&T.hasRenderPass())===!1){let xt=b.opaque,gt=b.transmissive;if(E.setupLights(),O.isArrayCamera){let Mt=O.cameras;if(gt.length>0)for(let Et=0,Ft=Mt.length;Et<Ft;Et++){let Wt=Mt[Et];Kv(xt,gt,w,Wt)}fe&&zt.render(w);for(let Et=0,Ft=Mt.length;Et<Ft;Et++){let Wt=Mt[Et];Jv(b,w,Wt,Wt.viewport)}}else gt.length>0&&Kv(xt,gt,w,O),fe&&zt.render(w),Jv(b,w,O)}Z!==null&&B===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),z&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,O),vt.resetDefaultState(),$=-1,it=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),nt===!0&&wt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function Hp(w,O,W,z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){z&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let xt=Q.update(w),gt=w.material;gt.visible&&b.push(w,xt,gt,W,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){let xt=Q.update(w),gt=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(gt)){let Mt=xt.groups;for(let Et=0,Ft=Mt.length;Et<Ft;Et++){let Wt=Mt[Et],At=gt[Wt.materialIndex];At&&At.visible&&b.push(w,xt,At,W,Ht.z,Wt)}}else gt.visible&&b.push(w,xt,gt,W,Ht.z,null)}}let _t=w.children;for(let xt=0,gt=_t.length;xt<gt;xt++)Hp(_t[xt],O,W,z)}function Jv(w,O,W,z){let{opaque:F,transmissive:_t,transparent:xt}=w;E.setupLightsView(W),nt===!0&&wt.setGlobalState(R.clippingPlanes,W),z&&M.viewport(at.copy(z)),F.length>0&&Yu(F,O,W),_t.length>0&&Yu(_t,O,W),xt.length>0&&Yu(xt,O,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Kv(w,O,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let At=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Si(1,1,{generateMipmaps:!0,type:At?Ts:ni,minFilter:bs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}let _t=E.state.transmissionRenderTarget[z.id],xt=z.viewport||at;_t.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),Mt=R.getActiveCubeFace(),Et=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Qt),Gt=R.getClearAlpha(),Gt<1&&R.setClearColor(16777215,.5),R.clear(),fe&&zt.render(W);let Ft=R.toneMapping;R.toneMapping=Ki;let Wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),nt===!0&&wt.setGlobalState(R.clippingPlanes,z),Yu(w,W,z),q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t),ce.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let de=0,Ye=O.length;de<Ye;de++){let Ge=O[de],{object:ge,geometry:bn,material:yt,group:ii}=Ge;if(yt.side===Ss&&ge.layers.test(z.layers)){let se=yt.side;yt.side=Vn,yt.needsUpdate=!0,Qv(ge,W,z,bn,yt,ii),yt.side=se,yt.needsUpdate=!0,At=!0}}At===!0&&(q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t))}R.setRenderTarget(gt,Mt,Et),R.setClearColor(Qt,Gt),Wt!==void 0&&(z.viewport=Wt),R.toneMapping=Ft}function Yu(w,O,W){let z=O.isScene===!0?O.overrideMaterial:null;for(let F=0,_t=w.length;F<_t;F++){let xt=w[F],{object:gt,geometry:Mt,group:Et}=xt,Ft=xt.material;Ft.allowOverride===!0&&z!==null&&(Ft=z),gt.layers.test(W.layers)&&Qv(gt,O,W,Mt,Ft,Et)}}function Qv(w,O,W,z,F,_t){w.onBeforeRender(R,O,W,z,F,_t),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(R,O,W,z,w,_t),F.transparent===!0&&F.side===Ss&&F.forceSinglePass===!1?(F.side=Vn,F.needsUpdate=!0,R.renderBufferDirect(W,O,z,F,w,_t),F.side=rr,F.needsUpdate=!0,R.renderBufferDirect(W,O,z,F,w,_t),F.side=Ss):R.renderBufferDirect(W,O,z,F,w,_t),w.onAfterRender(R,O,W,z,F,_t)}function Zu(w,O,W){O.isScene!==!0&&(O=Te);let z=H.get(w),F=E.state.lights,_t=E.state.shadowsArray,xt=F.state.version,gt=ut.getParameters(w,F.state,_t,O,W,E.state.lightProbeGridArray),Mt=ut.getProgramCacheKey(gt),Et=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,z.fog=O.fog;let Ft=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=st.get(w.envMap||z.environment,Ft),z.envMapRotation=z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Et===void 0&&(w.addEventListener("dispose",ts),Et=new Map,z.programs=Et);let Wt=Et.get(Mt);if(Wt!==void 0){if(z.currentProgram===Wt&&z.lightsStateVersion===xt)return $v(w,gt),Wt}else gt.uniforms=ut.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,W,gt),w.onBeforeCompile(gt,R),Wt=ut.acquireProgram(gt,Mt),Et.set(Mt,Wt),z.uniforms=gt.uniforms;let At=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=wt.uniform),$v(w,gt),z.needsLights=$E(w),z.lightsStateVersion=xt,z.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Wt,z.uniformsList=null,Wt}function jv(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=kl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function $v(w,O){let W=H.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function KE(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let W=0,z=w.length;W<z;W++){let F=w[W];if(F.texture!==null&&F.boundingBox.containsPoint(y))return F}return null}function QE(w,O,W,z,F){O.isScene!==!0&&(O=Te),q.resetTextureUnits();let _t=O.fog,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?O.environment:null,gt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:te.workingColorSpace,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Et=st.get(z.envMap||xt,Mt),Ft=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!W.morphAttributes.position,de=!!W.morphAttributes.normal,Ye=!!W.morphAttributes.color,Ge=Ki;z.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ge=R.toneMapping);let ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bn=ge!==void 0?ge.length:0,yt=H.get(z),ii=E.state.lights;if(nt===!0&&(ot===!0||w!==it)){let Me=w===it&&z.id===$;wt.setState(z,w,Me)}let se=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ii.state.version||yt.outputColorSpace!==gt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==Et||z.fog===!0&&yt.fog!==_t||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==wt.numPlanes||yt.numIntersection!==wt.numIntersection)||yt.vertexAlphas!==Ft||yt.vertexTangents!==Wt||yt.morphTargets!==At||yt.morphNormals!==de||yt.morphColors!==Ye||yt.toneMapping!==Ge||yt.morphTargetsCount!==bn||!!yt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,yt.__version=z.version);let Ti=yt.currentProgram;se===!0&&(Ti=Zu(z,O,F),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Ti,yt));let es=!1,cr=!1,ao=!1,_e=Ti.getUniforms(),Ze=yt.uniforms;if(M.useProgram(Ti.program)&&(es=!0,cr=!0,ao=!0),z.id!==$&&($=z.id,cr=!0),yt.needsLights){let Me=KE(E.state.lightProbeGridArray,F);yt.lightProbeGrid!==Me&&(yt.lightProbeGrid=Me,cr=!0)}if(es||it!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_e.setValue(L,"projectionMatrix",w.projectionMatrix),_e.setValue(L,"viewMatrix",w.matrixWorldInverse);let hr=_e.map.cameraPosition;hr!==void 0&&hr.setValue(L,jt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),it!==w&&(it=w,cr=!0,ao=!0)}if(yt.needsLights&&(ii.state.directionalShadowMap.length>0&&_e.setValue(L,"directionalShadowMap",ii.state.directionalShadowMap,q),ii.state.spotShadowMap.length>0&&_e.setValue(L,"spotShadowMap",ii.state.spotShadowMap,q),ii.state.pointShadowMap.length>0&&_e.setValue(L,"pointShadowMap",ii.state.pointShadowMap,q)),F.isSkinnedMesh){_e.setOptional(L,F,"bindMatrix"),_e.setOptional(L,F,"bindMatrixInverse");let Me=F.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),_e.setValue(L,"boneTexture",Me.boneTexture,q))}F.isBatchedMesh&&(_e.setOptional(L,F,"batchingTexture"),_e.setValue(L,"batchingTexture",F._matricesTexture,q),_e.setOptional(L,F,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",F._indirectTexture,q),_e.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",F._colorsTexture,q));let ur=W.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&U.update(F,W,Ti),(cr||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,_e.setValue(L,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&O.environment!==null&&(Ze.envMapIntensity.value=O.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=iO()),cr){if(_e.setValue(L,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&jE(Ze,ao),_t&&z.fog===!0&&Tt.refreshFogUniforms(Ze,_t),Tt.refreshMaterialUniforms(Ze,z,et,rt,E.state.transmissionRenderTarget[w.id]),yt.needsLights&&yt.lightProbeGrid){let Me=yt.lightProbeGrid;Ze.probesSH.value=Me.texture,Ze.probesMin.value.copy(Me.boundingBox.min),Ze.probesMax.value.copy(Me.boundingBox.max),Ze.probesResolution.value.copy(Me.resolution)}kl.upload(L,jv(yt),Ze,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kl.upload(L,jv(yt),Ze,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(L,"center",F.center),_e.setValue(L,"modelViewMatrix",F.modelViewMatrix),_e.setValue(L,"normalMatrix",F.normalMatrix),_e.setValue(L,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let Me=z.uniformsGroups;for(let hr=0,oo=Me.length;hr<oo;hr++){let ty=Me[hr];tt.update(ty,Ti),tt.bind(ty,Ti)}}return Ti}function jE(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function $E(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,O,W){let z=H.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=O,H.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let W=H.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){Z=w,k=O,B=W;let z=null,F=!1,_t=!1;if(w){let gt=H.get(w);if(gt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,gt.__webglFramebuffer),at.copy(w.viewport),mt.copy(w.scissor),Kt=w.scissorTest,M.viewport(at),M.scissor(mt),M.setScissorTest(Kt),$=-1;return}else if(gt.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(gt.__hasExternalTextures)q.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ft=w.depthTexture;if(gt.__boundDepthTexture!==Ft){if(Ft!==null&&H.has(Ft)&&(w.width!==Ft.image.width||w.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}let Mt=w.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(_t=!0);let Et=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Et[O])?z=Et[O][W]:z=Et[O],F=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?z=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[W]:z=Et,at.copy(w.viewport),mt.copy(w.scissor),Kt=w.scissorTest}else at.copy(Ct).multiplyScalar(et).floor(),mt.copy(De).multiplyScalar(et).floor(),Kt=Xt;if(W!==0&&(z=G),M.bindFramebuffer(L.FRAMEBUFFER,z)&&M.drawBuffers(w,z),M.viewport(at),M.scissor(mt),M.setScissorTest(Kt),F){let gt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,W)}else if(_t){let gt=O;for(let Mt=0;Mt<w.textures.length;Mt++){let Et=H.get(w.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,W,gt)}}else if(w!==null&&W!==0){let gt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,W)}$=-1},this.readRenderTargetPixels=function(w,O,W,z,F,_t,xt,gt=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){M.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let Et=w.textures[gt],Ft=Et.format,Wt=Et.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),!C.textureFormatReadable(Ft)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Wt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-z&&W>=0&&W<=w.height-F&&L.readPixels(O,W,z,F,ft.convert(Ft),ft.convert(Wt),_t)}finally{let Et=Z!==null?H.get(Z).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,z,F,_t,xt,gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(O>=0&&O<=w.width-z&&W>=0&&W<=w.height-F){M.bindFramebuffer(L.FRAMEBUFFER,Mt);let Et=w.textures[gt],Ft=Et.format,Wt=Et.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),!C.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(O,W,z,F,ft.convert(Ft),ft.convert(Wt),0);let de=Z!==null?H.get(Z).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,de);let Ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sE(L,Ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(At),L.deleteSync(Ye),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){let z=Math.pow(2,-W),F=Math.floor(w.image.width*z),_t=Math.floor(w.image.height*z),xt=O!==null?O.x:0,gt=O!==null?O.y:0;q.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,xt,gt,F,_t),M.unbindTexture()},this.copyTextureToTexture=function(w,O,W=null,z=null,F=0,_t=0){let xt,gt,Mt,Et,Ft,Wt,At,de,Ye,Ge=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(W!==null)xt=W.max.x-W.min.x,gt=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Ft=W.min.y,Wt=W.isBox3?W.min.z:0;else{let Ze=Math.pow(2,-F);xt=Math.floor(Ge.width*Ze),gt=Math.floor(Ge.height*Ze),w.isDataArrayTexture?Mt=Ge.depth:w.isData3DTexture?Mt=Math.floor(Ge.depth*Ze):Mt=1,Et=0,Ft=0,Wt=0}z!==null?(At=z.x,de=z.y,Ye=z.z):(At=0,de=0,Ye=0);let ge=ft.convert(O.format),bn=ft.convert(O.type),yt;O.isData3DTexture?(q.setTexture3D(O,0),yt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),yt=L.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),yt=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let ii=M.getParameter(L.UNPACK_ROW_LENGTH),se=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Ti=M.getParameter(L.UNPACK_SKIP_PIXELS),es=M.getParameter(L.UNPACK_SKIP_ROWS),cr=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,Ge.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ge.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),M.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let ao=w.isDataArrayTexture||w.isData3DTexture,_e=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let Ze=H.get(w),ur=H.get(O),Me=H.get(Ze.__renderTarget),hr=H.get(ur.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let oo=0;oo<Mt;oo++)ao&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(w).__webglTexture,F,Wt+oo),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(O).__webglTexture,_t,Ye+oo)),L.blitFramebuffer(Et,Ft,xt,gt,At,de,xt,gt,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||H.has(w)){let Ze=H.get(w),ur=H.get(O);M.bindFramebuffer(L.READ_FRAMEBUFFER,X),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,P);for(let Me=0;Me<Mt;Me++)ao?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,F,Wt+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,F),_e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ur.__webglTexture,_t,Ye+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ur.__webglTexture,_t),F!==0?L.blitFramebuffer(Et,Ft,xt,gt,At,de,xt,gt,L.COLOR_BUFFER_BIT,L.NEAREST):_e?L.copyTexSubImage3D(yt,_t,At,de,Ye+Me,Et,Ft,xt,gt):L.copyTexSubImage2D(yt,_t,At,de,Et,Ft,xt,gt);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,_t,At,de,Ye,xt,gt,Mt,ge,bn,Ge.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,_t,At,de,Ye,xt,gt,Mt,ge,Ge.data):L.texSubImage3D(yt,_t,At,de,Ye,xt,gt,Mt,ge,bn,Ge):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,At,de,xt,gt,ge,bn,Ge.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,At,de,Ge.width,Ge.height,ge,Ge.data):L.texSubImage2D(L.TEXTURE_2D,_t,At,de,xt,gt,ge,bn,Ge);M.pixelStorei(L.UNPACK_ROW_LENGTH,ii),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Ti),M.pixelStorei(L.UNPACK_SKIP_ROWS,es),M.pixelStorei(L.UNPACK_SKIP_IMAGES,cr),_t===0&&O.generateMipmaps&&L.generateMipmap(yt),M.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){k=0,B=0,Z=null,M.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var ws=(n,t,e)=>Math.min(e,Math.max(t,n)),zE=.6,FE=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,rO=(n,t)=>{let e=t??[...document.scripts].find(i=>/\/assets\/app\.js(?:\?|$)/.test(i.src))?.src;return e?new URL(`../${n.replace(/^\.\//,"")}`,e).href:new URL(n,document.baseURI).href},Wl=(n,t)=>ws(Math.round(n),0,t-1),aO=({start:n,cursor:t,velocity:e=0,count:i})=>{let r=t+ws(e*.18,-.65,.65)-n,a=Math.abs(r)<.28?n:n+Math.sign(r)*Math.max(1,Math.round(Math.abs(r)));return Wl(a,i)},oO=(n,t,e)=>{n.aspect=t/Math.max(e,1),n.updateProjectionMatrix()},lO=n=>n?10.6:9.2,cO=(n,t=!1)=>{let e=Math.abs(n),i=ws(1-e*.075,.76,1);return t?{x:0,y:-n*2.4,z:.25-e*.56,rotationX:ws(n*1.02,-1.02,1.02),rotationY:ws(n*.12,-.12,.12),rotationZ:n*-.015,scale:i}:{x:n*1.76,y:Math.sin(n*.3)*-.03,z:.18-e*1.25,rotationX:n<0?.008*Math.min(e,1):n*.008,rotationY:n===0?0:n<0?zE*Math.min(e,1):(Math.PI-zE)*Math.min(e,1),rotationZ:n<0?-.012*Math.min(e,1):n*-.012,scale:i}},uO=()=>{let n=document.createElement("canvas");n.width=n.height=256;let t=n.getContext("2d");t.fillStyle="#878787",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,.18)",t.lineWidth=1;for(let i=7;i<190;i+=8)t.beginPath(),t.arc(128,128,i,0,Math.PI*2),t.stroke();let e=new Pl(n);return e.wrapS=e.wrapT=Al,e.repeat.set(2,2),e},hO=n=>{let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d");e.fillStyle="#181a1a",e.fillRect(0,0,1024,1024),e.strokeStyle="rgba(191, 198, 190, .13)",e.lineWidth=2;for(let s=28;s<520;s+=28)e.beginPath(),e.arc(770,290,s,0,Math.PI*2),e.stroke();e.fillStyle="#d9ded8",e.font="500 30px Avenir Next, Arial, sans-serif",e.fillText("ARCHIVE / 01",76,108),e.font="600 54px Avenir Next, Arial, sans-serif",e.fillText(n.artist.toUpperCase(),76,182),e.font="400 28px Avenir Next, Arial, sans-serif",e.fillStyle="#a9b0aa",e.fillText(n.title,76,228),e.strokeStyle="#d9ded8",e.lineWidth=1,e.beginPath(),e.moveTo(76,272),e.lineTo(948,272),e.stroke(),e.font="400 27px Avenir Next, Arial, sans-serif",n.tracks.forEach((s,r)=>{let a=346+r*76;e.fillStyle="#777f79",e.fillText(String(r+1).padStart(2,"0"),78,a),e.fillStyle="#c8cec8",e.fillText(s,142,a)}),e.fillStyle="#747c76",e.font="400 20px Avenir Next, Arial, sans-serif",e.fillText("ORIGINAL ALBUM SERIES  \xB7  APPLE MUSIC",76,932);let i=new Pl(t);return i.colorSpace=Sn,i.anisotropy=4,i},VE=({canvas:n,albums:t,covers:e={},startIndex:i=3,onActiveChange:s,onOpen:r})=>{let a=new vu,o=new Dn(31,1,.1,100),l=new Bp({canvas:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});l.outputColorSpace=Sn,l.toneMapping=Lu,l.toneMappingExposure=1.1,l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),a.add(new Ru(13226185,724236,1.8));let c=new zl(15922414,2.2);c.position.set(-3,5,8),a.add(c);let u=new zl(8426629,1.25);u.position.set(5,1,-4),a.add(u);let f=new aa(2.7,2.7,.055),h=new no({color:3093554,roughness:.68,metalness:.12}),p=uO(),g=new wu;window.location.protocol==="file:"&&g.setCrossOrigin(void 0);let _=[],m=[],d=[],v=new Set,S=new Set,y=nt=>{if(v.has(nt)||S.has(nt))return;let ot=t[nt],Pt=m[nt];S.add(nt);let jt=e[ot.id]??rO(ot.coverSrc);g.load(jt,Ht=>{Ht.colorSpace=Sn,Ht.anisotropy=Math.min(l.capabilities.getMaxAnisotropy(),4),Ht.minFilter=bs,Pt.map=Ht,Pt.needsUpdate=!0,S.delete(nt),v.add(nt),$()})},b=nt=>{for(let ot=Math.max(0,Math.floor(nt)-4);ot<=Math.min(t.length-1,Math.ceil(nt)+4);ot+=1)y(ot)};t.forEach(nt=>{let ot=new no({color:16777215,roughness:.86,metalness:.015,bumpMap:p,bumpScale:.012}),Pt=new no({color:16777215,roughness:.9,metalness:.02,map:hO(nt),bumpMap:p,bumpScale:.01}),jt=new ei(f,[h,h,h,h,ot,Pt]);jt.userData.albumId=nt.id,a.add(jt),_.push(jt),m.push(ot),d.push(Pt)});let E={cursor:ws(i,0,t.length-1),intro:0,mobile:!1},A=t.map(()=>({value:0})),x=new Nu,T=new Zt,R=-1,D=!1,N=null,G=Wl(i,t.length),X=0,P=null,k=!1,B=null,Z=()=>{if(k)return;let nt=Wl(E.cursor,t.length);nt!==R&&(R=nt,s?.(R),b(R)),_.forEach((ot,Pt)=>{let jt=Pt-E.cursor,Ht=cO(jt,E.mobile),Te=Math.abs(jt)<4.35;if(ot.visible=Te,!Te)return;let fe=A[Pt].value*.12;ot.position.set(Ht.x,Ht.y+fe,Ht.z+fe-(1-E.intro)*1.3),ot.rotation.set(Ht.rotationX,Ht.rotationY,Ht.rotationZ);let Fe=Ht.scale+A[Pt].value*.025;ot.scale.setScalar(Fe*(.96+E.intro*.04))}),l.render(a,o)},$=()=>{B===null&&(B=requestAnimationFrame(()=>{B=null,Z()}))},it=nt=>{let ot=Wl(nt,t.length);G=ot,Fn.killTweensOf(E),Fn.to(E,{cursor:ot,duration:FE()?.12:E.mobile?.3:.34,ease:"power2.out",onUpdate:$,onComplete:$})},at=nt=>it(nt),mt=nt=>at(G+nt),Kt=()=>r?.(t[Wl(E.cursor,t.length)]),Qt=()=>{let nt=n.getBoundingClientRect();E.mobile=nt.width<=760,oO(o,nt.width,nt.height),o.position.set(0,E.mobile?0:.05,lO(E.mobile)),o.lookAt(0,0,0),l.setSize(nt.width,nt.height,!1),$()},Gt=nt=>{let ot=n.getBoundingClientRect();T.x=(nt.clientX-ot.left)/ot.width*2-1,T.y=-((nt.clientY-ot.top)/ot.height)*2+1},J=nt=>{Gt(nt),x.setFromCamera(T,o);let ot=x.intersectObjects(_.filter(Pt=>Pt.visible),!1)[0];return ot?.object?t.findIndex(Pt=>Pt.id===ot.object.userData.albumId):-1},rt=nt=>{P!==null&&(clearTimeout(P),P=null),X=0,Fn.killTweensOf(E),G=Wl(E.cursor,t.length);let ot=performance.now();N={x:nt.clientX,y:nt.clientY,cursor:E.cursor,start:G,time:ot,samples:[{value:E.cursor,time:ot}]},D=!1,n.setPointerCapture?.(nt.pointerId)},et=nt=>{if(!N)return;let ot=nt.clientX-N.x,Pt=nt.clientY-N.y;if(Math.hypot(ot,Pt)>8&&(D=!0),!D)return;let Ht=E.mobile?ws(n.clientHeight*.18,110,150):ws(n.clientWidth*.15,180,260),Te=E.mobile?-Pt/Ht:-ot/Ht;E.cursor=ws(N.cursor+Te,-.35,t.length-.65);let fe=performance.now();for(N.samples.push({value:E.cursor,time:fe});N.samples.length>2&&fe-N.samples[0].time>120;)N.samples.shift();$()},Ut=()=>{let nt=N?.samples??[],ot=nt.at(-1);if(!ot||performance.now()-ot.time>120)return 0;let Pt=nt.find(Ht=>ot.time-Ht.time<=120)??nt[0],jt=Math.max((ot.time-Pt.time)/1e3,.016);return ws((ot.value-Pt.value)/jt,-6,6)},Ot=nt=>{if(!N)return;let ot=performance.now()-N.time,Pt=D,jt=N.start,Ht=Ut();if(N=null,D=!1,Pt)it(aO({start:jt,cursor:E.cursor,velocity:Ht,count:t.length}));else if(ot<550){let Te=J(nt);Te>=0&&r?.(t[Te])}},Ct=()=>{N=null,D=!1,it(G)},De=nt=>{if(E.mobile)return;nt.preventDefault();let ot=nt.deltaMode===1?16:nt.deltaMode===2?n.clientHeight:1,Pt=nt.deltaY*ot;if(!Pt)return;X+=Pt;let jt=Math.max(60,n.clientWidth*.08);for(;Math.abs(X)>=jt;){let Ht=Math.sign(X);X-=Ht*jt,mt(Ht)}P!==null&&clearTimeout(P),P=setTimeout(()=>{P=null,X=0,it(G)},120)},Xt=nt=>{let ot=J(nt);ot<0||Fn.to(A[ot],{value:1,duration:.2,onUpdate:$})},oe=()=>{A.forEach((nt,ot)=>Fn.to(A[ot],{value:0,duration:.2,onUpdate:$}))};return n.addEventListener("pointerdown",rt),n.addEventListener("pointermove",et),n.addEventListener("pointerup",Ot),n.addEventListener("pointercancel",Ct),n.addEventListener("wheel",De,{passive:!1}),n.addEventListener("pointerover",Xt),n.addEventListener("pointerout",oe),window.addEventListener("resize",Qt),Qt(),b(i),Fn.to(E,{intro:1,duration:FE()?.12:.9,ease:"power3.out",onUpdate:$}),{moveBy:mt,moveTo:at,openCurrent:Kt,destroy:()=>{k=!0,P!==null&&clearTimeout(P),B!==null&&cancelAnimationFrame(B),Fn.killTweensOf(E),A.forEach(nt=>Fn.killTweensOf(nt)),n.removeEventListener("pointerdown",rt),n.removeEventListener("pointermove",et),n.removeEventListener("pointerup",Ot),n.removeEventListener("pointercancel",Ct),n.removeEventListener("wheel",De),n.removeEventListener("pointerover",Xt),n.removeEventListener("pointerout",oe),window.removeEventListener("resize",Qt),f.dispose(),p.dispose(),[...m,...d].forEach(nt=>{nt.map?.dispose(),nt.dispose()}),h.dispose(),l.dispose()}}};var qe=ga(qu(),1);Fn.registerPlugin(lu);function XE(){let n=(0,pa.useRef)(null),t=(0,pa.useRef)(null),e=(0,pa.useRef)(null),[i,s]=(0,pa.useState)(3),r=hl[i];return lu(()=>{Fn.fromTo(".album-ui",{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.7,ease:"power3.out",delay:.35})},{scope:n}),(0,pa.useEffect)(()=>(e.current=VE({canvas:t.current,albums:hl,covers:tT,startIndex:3,onActiveChange:s,onOpen:o=>window.location.assign(o.appleMusicUrl)}),()=>e.current?.destroy()),[]),(0,qe.jsxs)("main",{ref:n,className:"album-page",onKeyDown:o=>{o.key==="ArrowLeft"||o.key==="ArrowUp"?(o.preventDefault(),e.current?.moveBy(-1)):o.key==="ArrowRight"||o.key==="ArrowDown"?(o.preventDefault(),e.current?.moveBy(1)):o.key==="Home"?(o.preventDefault(),e.current?.moveTo(0)):o.key==="End"?(o.preventDefault(),e.current?.moveTo(hl.length-1)):o.key==="Enter"&&(o.preventDefault(),e.current?.openCurrent())},tabIndex:0,"aria-label":"\u53E4\u5178\u4E50\u4E13\u8F91\u6863\u6848",children:[(0,qe.jsxs)("header",{className:"album-ui album-header",children:[(0,qe.jsxs)("a",{className:"album-back",href:"../index.html#interests","aria-label":"\u8FD4\u56DE\u5174\u8DA3\u533A",children:["\u2196 ",(0,qe.jsx)("span",{children:"\u8FD4\u56DE\u5174\u8DA3"})]}),(0,qe.jsx)("p",{className:"album-kicker",children:"CLASSICAL ARCHIVE"}),(0,qe.jsxs)("p",{className:"album-count","aria-live":"polite",children:[String(i+1).padStart(2,"0")," / ",String(hl.length).padStart(2,"0")]})]}),(0,qe.jsxs)("section",{className:"album-stage","aria-label":"\u4E13\u8F91\u5C01\u9762\u753B\u5ECA",children:[(0,qe.jsx)("canvas",{ref:t,"aria-label":"\u62D6\u52A8\u6D4F\u89C8\u4E13\u8F91\uFF0C\u70B9\u51FB\u4E13\u8F91\u524D\u5F80 Apple Music"}),(0,qe.jsxs)("div",{className:"album-guide album-ui","aria-hidden":"true",children:["DRAG TO EXPLORE ",(0,qe.jsx)("span",{children:"\u2194"})]})]}),(0,qe.jsxs)("footer",{className:"album-ui album-footer",children:[(0,qe.jsxs)("div",{children:[(0,qe.jsx)("p",{className:"album-meta-label",children:"NOW IN VIEW"}),(0,qe.jsx)("h1",{children:r.title}),(0,qe.jsx)("p",{children:r.artist})]}),(0,qe.jsxs)("a",{className:"apple-link",href:r.appleMusicUrl,children:["\u5728 Apple Music \u4E2D\u6253\u5F00 ",(0,qe.jsx)("span",{children:"\u2197"})]})]}),(0,qe.jsx)("ul",{className:"sr-only","aria-label":"\u4E13\u8F91\u5217\u8868",children:hl.map(o=>(0,qe.jsx)("li",{children:(0,qe.jsxs)("a",{href:o.appleMusicUrl,children:[o.title," \xB7 ",o.artist]})},o.id))})]})}var qE=ga(qu(),1);(0,WE.createRoot)(document.getElementById("app")).render((0,qE.jsx)(XE,{}));})();
