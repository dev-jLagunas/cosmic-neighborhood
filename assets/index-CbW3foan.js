(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const at={},pr=[],Kt=()=>{},kd=()=>!1,go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),dl=n=>n.startsWith("onUpdate:"),mt=Object.assign,pl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hd=Object.prototype.hasOwnProperty,$e=(n,e)=>Hd.call(n,e),Pe=Array.isArray,mr=n=>_o(n)==="[object Map]",Cf=n=>_o(n)==="[object Set]",ze=n=>typeof n=="function",ft=n=>typeof n=="string",Vi=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Pf=n=>(st(n)||ze(n))&&ze(n.then)&&ze(n.catch),Lf=Object.prototype.toString,_o=n=>Lf.call(n),Vd=n=>_o(n).slice(8,-1),Df=n=>_o(n)==="[object Object]",ml=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Gd=/-(\w)/g,vn=vo(n=>n.replace(Gd,(e,t)=>t?t.toUpperCase():"")),Wd=/\B([A-Z])/g,wr=vo(n=>n.replace(Wd,"-$1").toLowerCase()),xo=vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=vo(n=>n?`on${xo(n)}`:""),ci=(n,e)=>!Object.is(n,e),Ho=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},If=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Xd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},qd=n=>{const e=ft(n)?Number(n):NaN;return isNaN(e)?n:e};let Kl;const Uf=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gl(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?Kd(i):gl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ft(n)||st(n))return n}const jd=/;(?![^(]*\))/g,Yd=/:([^]+)/,$d=/\/\*[^]*?\*\//g;function Kd(n){const e={};return n.replace($d,"").split(jd).forEach(t=>{if(t){const i=t.split(Yd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ln(n){let e="";if(ft(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Ln(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jd=hl(Zd);function Nf(n){return!!n||n===""}const Ci=n=>ft(n)?n:n==null?"":Pe(n)||st(n)&&(n.toString===Lf||!ze(n.toString))?JSON.stringify(n,Of,2):String(n),Of=(n,e)=>e&&e.__v_isRef?Of(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Vo(i,s)+" =>"]=r,t),{})}:Cf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Vo(t))}:Vi(e)?Vo(e):st(e)&&!Pe(e)&&!Df(e)?String(e):e,Vo=(n,e="")=>{var t;return Vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Bf(n){return new Ff(n)}function Qd(n,e=Vt){e&&e.active&&e.effects.push(n)}function zf(){return Vt}function ep(n){Vt&&Vt.cleanups.push(n)}let Fi;class _l{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qd(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(tp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),mi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=si,t=Fi;try{return si=!0,Fi=this,this._runnings++,Zl(this),this.fn()}finally{Jl(this),this._runnings--,Fi=t,si=e}}stop(){this.active&&(Zl(this),Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function tp(n){return n.value}function Zl(n){n._trackId++,n._depsLength=0}function Jl(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)kf(n.deps[e],n);n.deps.length=n._depsLength}}function kf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let si=!0,Ia=0;const Hf=[];function pi(){Hf.push(si),si=!1}function mi(){const n=Hf.pop();si=n===void 0?!0:n}function vl(){Ia++}function xl(){for(Ia--;!Ia&&Ua.length;)Ua.shift()()}function Vf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&kf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Ua=[];function Gf(n,e,t){vl();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Ua.push(i.scheduler)))}xl()}const Wf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},io=new WeakMap,Bi=Symbol(""),Na=Symbol("");function Bt(n,e,t){if(si&&Fi){let i=io.get(n);i||io.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Wf(()=>i.delete(t))),Vf(Fi,r)}}function In(n,e,t,i,r,s){const o=io.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Vi(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(n)?ml(t)&&a.push(o.get("length")):(a.push(o.get(Bi)),mr(n)&&a.push(o.get(Na)));break;case"delete":Pe(n)||(a.push(o.get(Bi)),mr(n)&&a.push(o.get(Na)));break;case"set":mr(n)&&a.push(o.get(Bi));break}vl();for(const l of a)l&&Gf(l,4);xl()}function np(n,e){const t=io.get(n);return t&&t.get(e)}const ip=hl("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vi)),Ql=rp();function rp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,o=this.length;s<o;s++)Bt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){pi(),vl();const i=Ke(this)[e].apply(this,t);return xl(),mi(),i}}),n}function sp(n){Vi(n)||(n=String(n));const e=Ke(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class qf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?vp:Kf:s?$f:Yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!r){if(o&&$e(Ql,t))return Reflect.get(Ql,t,i);if(t==="hasOwnProperty")return sp}const a=Reflect.get(e,t,i);return(Vi(t)?Xf.has(t):ip(t))||(r||Bt(e,"get",t),s)?a:yt(a)?o&&ml(t)?a:a.value:st(a)?r?Jf(a):cs(a):a}}class jf extends qf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Jr(s);if(!ro(i)&&!Jr(i)&&(s=Ke(s),i=Ke(i)),!Pe(e)&&yt(s)&&!yt(i))return l?!1:(s.value=i,!0)}const o=Pe(e)&&ml(t)?Number(t)<e.length:$e(e,t),a=Reflect.set(e,t,i,r);return e===Ke(r)&&(o?ci(i,s)&&In(e,"set",t,i):In(e,"add",t,i)),a}deleteProperty(e,t){const i=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&In(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Vi(t)||!Xf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Pe(e)?"length":Bi),Reflect.ownKeys(e)}}class op extends qf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ap=new jf,lp=new op,cp=new jf(!0);const Ml=n=>n,Mo=n=>Reflect.getPrototypeOf(n);function gs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||(ci(e,s)&&Bt(r,"get",e),Bt(r,"get",s));const{has:o}=Mo(r),a=i?Ml:t?bl:Qr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function _s(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||(ci(n,r)&&Bt(i,"has",n),Bt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function vs(n,e=!1){return n=n.__v_raw,!e&&Bt(Ke(n),"iterate",Bi),Reflect.get(n,"size",n)}function ec(n){n=Ke(n);const e=Ke(this);return Mo(e).has.call(e,n)||(e.add(n),In(e,"add",n,n)),this}function tc(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=Mo(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?ci(e,o)&&In(t,"set",n,e):In(t,"add",n,e),this}function nc(n){const e=Ke(this),{has:t,get:i}=Mo(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&In(e,"delete",n,void 0),s}function ic(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&In(n,"clear",void 0,void 0),t}function xs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ke(o),l=e?Ml:n?bl:Qr;return!n&&Bt(a,"iterate",Bi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ms(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ml:e?bl:Qr;return!e&&Bt(s,"iterate",l?Na:Bi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function zn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function up(){const n={get(s){return gs(this,s)},get size(){return vs(this)},has:_s,add:ec,set:tc,delete:nc,clear:ic,forEach:xs(!1,!1)},e={get(s){return gs(this,s,!1,!0)},get size(){return vs(this)},has:_s,add:ec,set:tc,delete:nc,clear:ic,forEach:xs(!1,!0)},t={get(s){return gs(this,s,!0)},get size(){return vs(this,!0)},has(s){return _s.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:xs(!0,!1)},i={get(s){return gs(this,s,!0,!0)},get size(){return vs(this,!0)},has(s){return _s.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ms(s,!1,!1),t[s]=Ms(s,!0,!1),e[s]=Ms(s,!1,!0),i[s]=Ms(s,!0,!0)}),[n,t,e,i]}const[fp,hp,dp,pp]=up();function Sl(n,e){const t=e?n?pp:dp:n?hp:fp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($e(t,r)&&r in i?t:i,r,s)}const mp={get:Sl(!1,!1)},gp={get:Sl(!1,!0)},_p={get:Sl(!0,!1)};const Yf=new WeakMap,$f=new WeakMap,Kf=new WeakMap,vp=new WeakMap;function xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(n){return n.__v_skip||!Object.isExtensible(n)?0:xp(Vd(n))}function cs(n){return Jr(n)?n:yl(n,!1,ap,mp,Yf)}function Zf(n){return yl(n,!1,cp,gp,$f)}function Jf(n){return yl(n,!0,lp,_p,Kf)}function yl(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Mp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function zi(n){return Jr(n)?zi(n.__v_raw):!!(n&&n.__v_isReactive)}function Jr(n){return!!(n&&n.__v_isReadonly)}function ro(n){return!!(n&&n.__v_isShallow)}function Qf(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function El(n){return Object.isExtensible(n)&&If(n,"__v_skip",!0),n}const Qr=n=>st(n)?cs(n):n,bl=n=>st(n)?Jf(n):n;class eh{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _l(()=>e(this._value),()=>$s(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return(!e._cacheable||e.effect.dirty)&&ci(e._value,e._value=e.effect.run())&&$s(e,4),th(e),e.effect._dirtyLevel>=2&&$s(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Sp(n,e,t=!1){let i,r;const s=ze(n);return s?(i=n,r=Kt):(i=n.get,r=n.set),new eh(i,r,s||!r,t)}function th(n){var e;si&&Fi&&(n=Ke(n),Vf(Fi,(e=n.dep)!=null?e:n.dep=Wf(()=>n.dep=void 0,n instanceof eh?n:void 0)))}function $s(n,e=4,t){n=Ke(n);const i=n.dep;i&&Gf(i,e)}function yt(n){return!!(n&&n.__v_isRef===!0)}function Un(n){return nh(n,!1)}function yp(n){return nh(n,!0)}function nh(n,e){return yt(n)?n:new Ep(n,e)}class Ep{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Qr(e)}get value(){return th(this),this._value}set value(e){const t=this.__v_isShallow||ro(e)||Jr(e);e=t?e:Ke(e),ci(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Qr(e),$s(this,4))}}function Et(n){return yt(n)?n.value:n}const bp={get:(n,e,t)=>Et(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ih(n){return zi(n)?n:new Proxy(n,bp)}function Tp(n){const e=Pe(n)?new Array(n.length):{};for(const t in n)e[t]=wp(n,t);return e}class Ap{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return np(Ke(this._object),this._key)}}function wp(n,e,t){const i=n[e];return yt(i)?i:new Ap(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oi(n,e,t,i){try{return i?n(...i):n()}catch(r){So(r,e,t)}}function Qt(n,e,t,i){if(ze(n)){const r=oi(n,e,t,i);return r&&Pf(r)&&r.catch(s=>{So(s,e,t)}),r}if(Pe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Qt(n[s],e,t,i));return r}}function So(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){pi(),oi(l,null,10,[n,o,a]),mi();return}}Rp(n,t,r,i)}function Rp(n,e,t,i=!0){console.error(n)}let es=!1,Oa=!1;const Pt=[];let dn=0;const gr=[];let Zn=null,Li=0;const rh=Promise.resolve();let Tl=null;function Al(n){const e=Tl||rh;return n?e.then(this?n.bind(this):n):e}function Cp(n){let e=dn+1,t=Pt.length;for(;e<t;){const i=e+t>>>1,r=Pt[i],s=ts(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function wl(n){(!Pt.length||!Pt.includes(n,es&&n.allowRecurse?dn+1:dn))&&(n.id==null?Pt.push(n):Pt.splice(Cp(n.id),0,n),sh())}function sh(){!es&&!Oa&&(Oa=!0,Tl=rh.then(ah))}function Pp(n){const e=Pt.indexOf(n);e>dn&&Pt.splice(e,1)}function Lp(n){Pe(n)?gr.push(...n):(!Zn||!Zn.includes(n,n.allowRecurse?Li+1:Li))&&gr.push(n),sh()}function rc(n,e,t=es?dn+1:0){for(;t<Pt.length;t++){const i=Pt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Pt.splice(t,1),t--,i()}}}function oh(n){if(gr.length){const e=[...new Set(gr)].sort((t,i)=>ts(t)-ts(i));if(gr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Li=0;Li<Zn.length;Li++)Zn[Li]();Zn=null,Li=0}}const ts=n=>n.id==null?1/0:n.id,Dp=(n,e)=>{const t=ts(n)-ts(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ah(n){Oa=!1,es=!0,Pt.sort(Dp);try{for(dn=0;dn<Pt.length;dn++){const e=Pt[dn];e&&e.active!==!1&&oi(e,null,14)}}finally{dn=0,Pt.length=0,oh(),es=!1,Tl=null,(Pt.length||gr.length)&&ah()}}function Ip(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||at;h&&(r=t.map(p=>ft(p)?p.trim():p)),f&&(r=t.map(Xd))}let a,l=i[a=ko(e)]||i[a=ko(vn(e))];!l&&s&&(l=i[a=ko(wr(e))]),l&&Qt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qt(c,n,6,r)}}function lh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=lh(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(Pe(s)?s.forEach(l=>o[l]=null):mt(o,s),st(n)&&i.set(n,o),o)}function yo(n,e){return!n||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,wr(e))||$e(n,e))}let Wt=null,Eo=null;function so(n){const e=Wt;return Wt=n,Eo=n&&n.type.__scopeId||null,e}function ch(n){Eo=n}function uh(){Eo=null}function kr(n,e=Wt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&gc(-1);const s=so(e);let o;try{o=n(...r)}finally{so(s),i._d&&gc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Go(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:x}=n,m=so(n);let d,T;try{if(t.shapeFlag&4){const R=r||i,O=R;d=fn(c.call(O,R,u,f,p,h,g)),T=a}else{const R=e;d=fn(R.length>1?R(f,{attrs:a,slots:o,emit:l}):R(f,null)),T=e.props?a:Up(a)}}catch(R){qr.length=0,So(R,n,1),d=Ye(Zt)}let S=d;if(T&&x!==!1){const R=Object.keys(T),{shapeFlag:O}=S;R.length&&O&7&&(s&&R.some(dl)&&(T=Np(T,s)),S=ui(S,T,!1,!0))}return t.dirs&&(S=ui(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),d=S,so(m),d}const Up=n=>{let e;for(const t in n)(t==="class"||t==="style"||go(t))&&((e||(e={}))[t]=n[t]);return e},Np=(n,e)=>{const t={};for(const i in n)(!dl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Op(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?sc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!yo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sc(i,o,c):!0:!!o;return!1}function sc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!yo(t,s))return!0}return!1}function Fp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const fh="components";function Bp(n,e){return dh(fh,n,!0,e)||n}const hh=Symbol.for("v-ndc");function zp(n){return ft(n)?dh(fh,n,!1)||n:n||hh}function dh(n,e,t=!0,i=!1){const r=Wt||Mt;if(r){const s=r.type;{const a=Om(s,!1);if(a&&(a===e||a===vn(e)||a===xo(vn(e))))return s}const o=oc(r[n]||s[n],e)||oc(r.appContext[n],e);return!o&&i?s:o}}function oc(n,e){return n&&(n[e]||n[vn(e)]||n[xo(vn(e))])}const kp=n=>n.__isSuspense;function Hp(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):Lp(n)}const Vp=Symbol.for("v-scx"),Gp=()=>on(Vp);function Wp(n,e){return Rl(n,null,e)}const Ss={};function Wr(n,e,t){return Rl(n,e,t)}function Rl(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=at){if(e&&s){const C=e;e=(...P)=>{C(...P),O()}}const l=Mt,c=C=>i===!0?C:hr(C,i===!1?1:void 0);let u,f=!1,h=!1;if(yt(n)?(u=()=>n.value,f=ro(n)):zi(n)?(u=()=>c(n),f=!0):Pe(n)?(h=!0,f=n.some(C=>zi(C)||ro(C)),u=()=>n.map(C=>{if(yt(C))return C.value;if(zi(C))return c(C);if(ze(C))return oi(C,l,2)})):ze(n)?e?u=()=>oi(n,l,2):u=()=>(p&&p(),Qt(n,l,3,[g])):u=Kt,e&&i){const C=u;u=()=>hr(C())}let p,g=C=>{p=S.onStop=()=>{oi(C,l,4),p=S.onStop=void 0}},x;if(wo)if(g=Kt,e?t&&Qt(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const C=Gp();x=C.__watcherHandles||(C.__watcherHandles=[])}else return Kt;let m=h?new Array(n.length).fill(Ss):Ss;const d=()=>{if(!(!S.active||!S.dirty))if(e){const C=S.run();(i||f||(h?C.some((P,N)=>ci(P,m[N])):ci(C,m)))&&(p&&p(),Qt(e,l,3,[C,m===Ss?void 0:h&&m[0]===Ss?[]:m,g]),m=C)}else S.run()};d.allowRecurse=!!e;let T;r==="sync"?T=d:r==="post"?T=()=>Ot(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),T=()=>wl(d));const S=new _l(u,Kt,T),R=zf(),O=()=>{S.stop(),R&&pl(R.effects,S)};return e?t?d():m=S.run():r==="post"?Ot(S.run.bind(S),l&&l.suspense):S.run(),x&&x.push(O),O}function Xp(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?ph(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const o=us(this),a=Rl(r,s.bind(i),t);return o(),a}function ph(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function hr(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yt(n))hr(n.value,e,t);else if(Pe(n))for(let i=0;i<n.length;i++)hr(n[i],e,t);else if(Cf(n)||mr(n))n.forEach(i=>{hr(i,e,t)});else if(Df(n))for(const i in n)hr(n[i],e,t);return n}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(pi(),Qt(l,t,8,[n.el,a,n,e]),mi())}}const Jn=Symbol("_leaveCb"),ys=Symbol("_enterCb");function qp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cl(()=>{n.isMounted=!0}),Mh(()=>{n.isUnmounting=!0}),n}const jt=[Function,Array],mh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},jp={name:"BaseTransition",props:mh,setup(n,{slots:e}){const t=Lm(),i=qp();return()=>{const r=e.default&&_h(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==Zt){s=h;break}}const o=Ke(n),{mode:a}=o;if(i.isLeaving)return Wo(s);const l=ac(s);if(!l)return Wo(s);const c=Fa(l,o,i,t);Ba(l,c);const u=t.subTree,f=u&&ac(u);if(f&&f.type!==Zt&&!Di(l,f)){const h=Fa(f,o,i,t);if(Ba(f,h),a==="out-in"&&l.type!==Zt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Wo(s);a==="in-out"&&l.type!==Zt&&(h.delayLeave=(p,g,x)=>{const m=gh(i,f);m[String(f.key)]=f,p[Jn]=()=>{g(),p[Jn]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}},Yp=jp;function gh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Fa(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:x,onAppear:m,onAfterAppear:d,onAppearCancelled:T}=e,S=String(n.key),R=gh(t,n),O=(N,y)=>{N&&Qt(N,i,9,y)},C=(N,y)=>{const M=y[1];O(N,y),Pe(N)?N.every(k=>k.length<=1)&&M():N.length<=1&&M()},P={mode:s,persisted:o,beforeEnter(N){let y=a;if(!t.isMounted)if(r)y=x||a;else return;N[Jn]&&N[Jn](!0);const M=R[S];M&&Di(n,M)&&M.el[Jn]&&M.el[Jn](),O(y,[N])},enter(N){let y=l,M=c,k=u;if(!t.isMounted)if(r)y=m||l,M=d||c,k=T||u;else return;let z=!1;const I=N[ys]=te=>{z||(z=!0,te?O(k,[N]):O(M,[N]),P.delayedLeave&&P.delayedLeave(),N[ys]=void 0)};y?C(y,[N,I]):I()},leave(N,y){const M=String(n.key);if(N[ys]&&N[ys](!0),t.isUnmounting)return y();O(f,[N]);let k=!1;const z=N[Jn]=I=>{k||(k=!0,y(),I?O(g,[N]):O(p,[N]),N[Jn]=void 0,R[M]===n&&delete R[M])};R[M]=n,h?C(h,[N,z]):z()},clone(N){return Fa(N,e,t,i)}};return P}function Wo(n){if(bo(n))return n=ui(n),n.children=null,n}function ac(n){if(!bo(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ze(t.default))return t.default()}}function Ba(n,e){n.shapeFlag&6&&n.component?Ba(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _h(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ut?(o.patchFlag&128&&r++,i=i.concat(_h(o.children,e,a))):(e||o.type!==Zt)&&i.push(a!=null?ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function vh(n,e){return ze(n)?mt({name:n.name},e,{setup:n}):n}const Ks=n=>!!n.type.__asyncLoader,bo=n=>n.type.__isKeepAlive;function $p(n,e){xh(n,"a",e)}function Kp(n,e){xh(n,"da",e)}function xh(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(To(e,i,t),t){let r=t.parent;for(;r&&r.parent;)bo(r.parent.vnode)&&Zp(i,e,t,r),r=r.parent}}function Zp(n,e,t,i){const r=To(e,n,i,!0);Sh(()=>{pl(i[e],r)},t)}function To(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;pi();const a=us(t),l=Qt(e,t,n,o);return a(),mi(),l});return i?r.unshift(s):r.push(s),s}}const Nn=n=>(e,t=Mt)=>(!wo||n==="sp")&&To(n,(...i)=>e(...i),t),Jp=Nn("bm"),Cl=Nn("m"),Qp=Nn("bu"),em=Nn("u"),Mh=Nn("bum"),Sh=Nn("um"),tm=Nn("sp"),nm=Nn("rtg"),im=Nn("rtc");function rm(n,e=Mt){To("ec",n,e)}function Zs(n,e,t,i){let r;const s=t;if(Pe(n)||ft(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(st(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}const za=n=>n?Fh(n)?Il(n)||n.proxy:za(n.parent):null,Xr=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>za(n.parent),$root:n=>za(n.root),$emit:n=>n.emit,$options:n=>Pl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,wl(n.update)}),$nextTick:n=>n.n||(n.n=Al.bind(n.proxy)),$watch:n=>Xp.bind(n)}),Xo=(n,e)=>n!==at&&!n.__isScriptSetup&&$e(n,e),sm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xo(i,e))return o[e]=1,i[e];if(r!==at&&$e(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,s[e];if(t!==at&&$e(t,e))return o[e]=4,t[e];ka&&(o[e]=0)}}const u=Xr[e];let f,h;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&$e(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,$e(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xo(r,e)?(r[e]=t,!0):i!==at&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&$e(n,o)||Xo(e,o)||(a=s[0])&&$e(a,o)||$e(i,o)||$e(Xr,o)||$e(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lc(n){return Pe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ka=!0;function om(n){const e=Pl(n),t=n.proxy,i=n.ctx;ka=!1,e.beforeCreate&&cc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:S,unmounted:R,render:O,renderTracked:C,renderTriggered:P,errorCaptured:N,serverPrefetch:y,expose:M,inheritAttrs:k,components:z,directives:I,filters:te}=e;if(c&&am(c,i,null),o)for(const re in o){const W=o[re];ze(W)&&(i[re]=W.bind(t))}if(r){const re=r.call(t,t);st(re)&&(n.data=cs(re))}if(ka=!0,s)for(const re in s){const W=s[re],de=ze(W)?W.bind(t,t):ze(W.get)?W.get.bind(t,t):Kt,he=!ze(W)&&ze(W.set)?W.set.bind(t):Kt,ye=Gt({get:de,set:he});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Re=>ye.value=Re})}if(a)for(const re in a)yh(a[re],i,t,re);if(l){const re=ze(l)?l.call(t):l;Reflect.ownKeys(re).forEach(W=>{Js(W,re[W])})}u&&cc(u,n,"c");function ne(re,W){Pe(W)?W.forEach(de=>re(de.bind(t))):W&&re(W.bind(t))}if(ne(Jp,f),ne(Cl,h),ne(Qp,p),ne(em,g),ne($p,x),ne(Kp,m),ne(rm,N),ne(im,C),ne(nm,P),ne(Mh,T),ne(Sh,R),ne(tm,y),Pe(M))if(M.length){const re=n.exposed||(n.exposed={});M.forEach(W=>{Object.defineProperty(re,W,{get:()=>t[W],set:de=>t[W]=de})})}else n.exposed||(n.exposed={});O&&n.render===Kt&&(n.render=O),k!=null&&(n.inheritAttrs=k),z&&(n.components=z),I&&(n.directives=I)}function am(n,e,t=Kt){Pe(n)&&(n=Ha(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=on(r.from||i,r.default,!0):s=on(r.from||i):s=on(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cc(n,e,t){Qt(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function yh(n,e,t,i){const r=i.includes(".")?ph(t,i):()=>t[i];if(ft(n)){const s=e[n];ze(s)&&Wr(r,s)}else if(ze(n))Wr(r,n.bind(t));else if(st(n))if(Pe(n))n.forEach(s=>yh(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&Wr(r,s,n)}}function Pl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>oo(l,c,o,!0)),oo(l,e,o)),st(e)&&s.set(e,l),l}function oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&oo(n,s,t,!0),r&&r.forEach(o=>oo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=lm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const lm={data:uc,props:fc,emits:fc,methods:Hr,computed:Hr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Hr,directives:Hr,watch:um,provide:uc,inject:cm};function uc(n,e){return e?n?function(){return mt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function cm(n,e){return Hr(Ha(n),Ha(e))}function Ha(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?mt(Object.create(null),n,e):e}function fc(n,e){return n?Pe(n)&&Pe(e)?[...new Set([...n,...e])]:mt(Object.create(null),lc(n),lc(e??{})):e}function um(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function Eh(){return{app:null,config:{isNativeTag:kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fm=0;function hm(n,e){return function(i,r=null){ze(i)||(i=mt({},i)),r!=null&&!st(r)&&(r=null);const s=Eh(),o=new WeakSet;let a=!1;const l=s.app={_uid:fm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Ye(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Il(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=_r;_r=l;try{return c()}finally{_r=u}}};return l}}let _r=null;function Js(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function on(n,e,t=!1){const i=Mt||Wt;if(i||_r){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:_r._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}function dm(){return!!(Mt||Wt||_r)}const bh={},Th=()=>Object.create(bh),Ah=n=>Object.getPrototypeOf(n)===bh;function pm(n,e,t,i=!1){const r={},s=Th();n.propsDefaults=Object.create(null),wh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Zf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(yo(n.emitsOptions,h))continue;const p=e[h];if(l)if($e(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=vn(h);r[g]=Va(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{wh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!$e(e,f)&&((u=wr(f))===f||!$e(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Va(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!$e(e,f))&&(delete s[f],c=!0)}c&&In(n.attrs,"set","")}function wh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;r&&$e(r,u=vn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:yo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Va(r,l,f,c[f],n,!$e(c,f))}}return o}function Va(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=us(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===wr(t))&&(i=!0))}return i}function Rh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[h,p]=Rh(f,e,!0);mt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,pr),pr;if(Pe(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);hc(f)&&(o[f]=at)}else if(s)for(const u in s){const f=vn(u);if(hc(f)){const h=s[u],p=o[f]=Pe(h)||ze(h)?{type:h}:mt({},h);if(p){const g=mc(Boolean,p.type),x=mc(String,p.type);p[0]=g>-1,p[1]=x<0||g<x,(g>-1||$e(p,"default"))&&a.push(f)}}}const c=[o,a];return st(n)&&i.set(n,c),c}function hc(n){return n[0]!=="$"&&!Gr(n)}function dc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function pc(n,e){return dc(n)===dc(e)}function mc(n,e){return Pe(e)?e.findIndex(t=>pc(t,n)):ze(e)&&pc(e,n)?0:-1}const Ch=n=>n[0]==="_"||n==="$stable",Ll=n=>Pe(n)?n.map(fn):[fn(n)],gm=(n,e,t)=>{if(e._n)return e;const i=kr((...r)=>Ll(e(...r)),t);return i._c=!1,i},Ph=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ch(r))continue;const s=n[r];if(ze(s))e[r]=gm(r,s,i);else if(s!=null){const o=Ll(s);e[r]=()=>o}}},Lh=(n,e)=>{const t=Ll(e);n.slots.default=()=>t},_m=(n,e)=>{const t=n.slots=Th();if(n.vnode.shapeFlag&32){const i=e._;i?(mt(t,e),If(t,"_",i,!0)):Ph(e,t)}else e&&Lh(n,e)},vm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(mt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Ph(e,r)),o=e}else e&&(Lh(n,e),o={default:1});if(s)for(const a in r)!Ch(a)&&o[a]==null&&delete r[a]};function Ga(n,e,t,i,r=!1){if(Pe(n)){n.forEach((h,p)=>Ga(h,e&&(Pe(e)?e[p]:e),t,i,r));return}if(Ks(i)&&!r)return;const s=i.shapeFlag&4?Il(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,$e(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),ze(l))oi(l,a,12,[o,u]);else{const h=ft(l),p=yt(l);if(h||p){const g=()=>{if(n.f){const x=h?$e(f,l)?f[l]:u[l]:l.value;r?Pe(x)&&pl(x,s):Pe(x)?x.includes(s)||x.push(s):h?(u[l]=[s],$e(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,$e(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=Hp;function xm(n){return Mm(n)}function Mm(n,e){const t=Uf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Kt,insertStaticContent:g}=n,x=(A,w,B,Y=null,q=null,ae=null,E=void 0,_=null,D=!!w.dynamicChildren)=>{if(A===w)return;A&&!Di(A,w)&&(Y=F(A),Re(A,q,ae,!0),A=null),w.patchFlag===-2&&(D=!1,w.dynamicChildren=null);const{type:U,ref:G,shapeFlag:$}=w;switch(U){case Ao:m(A,w,B,Y);break;case Zt:d(A,w,B,Y);break;case jo:A==null&&T(w,B,Y,E);break;case Ut:z(A,w,B,Y,q,ae,E,_,D);break;default:$&1?O(A,w,B,Y,q,ae,E,_,D):$&6?I(A,w,B,Y,q,ae,E,_,D):($&64||$&128)&&U.process(A,w,B,Y,q,ae,E,_,D,L)}G!=null&&q&&Ga(G,A&&A.ref,ae,w||A,!w)},m=(A,w,B,Y)=>{if(A==null)i(w.el=a(w.children),B,Y);else{const q=w.el=A.el;w.children!==A.children&&c(q,w.children)}},d=(A,w,B,Y)=>{A==null?i(w.el=l(w.children||""),B,Y):w.el=A.el},T=(A,w,B,Y)=>{[A.el,A.anchor]=g(A.children,w,B,Y,A.el,A.anchor)},S=({el:A,anchor:w},B,Y)=>{let q;for(;A&&A!==w;)q=h(A),i(A,B,Y),A=q;i(w,B,Y)},R=({el:A,anchor:w})=>{let B;for(;A&&A!==w;)B=h(A),r(A),A=B;r(w)},O=(A,w,B,Y,q,ae,E,_,D)=>{w.type==="svg"?E="svg":w.type==="math"&&(E="mathml"),A==null?C(w,B,Y,q,ae,E,_,D):y(A,w,q,ae,E,_,D)},C=(A,w,B,Y,q,ae,E,_)=>{let D,U;const{props:G,shapeFlag:$,transition:le,dirs:ie}=A;if(D=A.el=o(A.type,ae,G&&G.is,G),$&8?u(D,A.children):$&16&&N(A.children,D,null,Y,q,qo(A,ae),E,_),ie&&xi(A,null,Y,"created"),P(D,A,A.scopeId,E,Y),G){for(const Me in G)Me!=="value"&&!Gr(Me)&&s(D,Me,null,G[Me],ae,A.children,Y,q,ge);"value"in G&&s(D,"value",null,G.value,ae),(U=G.onVnodeBeforeMount)&&cn(U,Y,A)}ie&&xi(A,null,Y,"beforeMount");const oe=Sm(q,le);oe&&le.beforeEnter(D),i(D,w,B),((U=G&&G.onVnodeMounted)||oe||ie)&&Ot(()=>{U&&cn(U,Y,A),oe&&le.enter(D),ie&&xi(A,null,Y,"mounted")},q)},P=(A,w,B,Y,q)=>{if(B&&p(A,B),Y)for(let ae=0;ae<Y.length;ae++)p(A,Y[ae]);if(q){let ae=q.subTree;if(w===ae){const E=q.vnode;P(A,E,E.scopeId,E.slotScopeIds,q.parent)}}},N=(A,w,B,Y,q,ae,E,_,D=0)=>{for(let U=D;U<A.length;U++){const G=A[U]=_?Qn(A[U]):fn(A[U]);x(null,G,w,B,Y,q,ae,E,_)}},y=(A,w,B,Y,q,ae,E)=>{const _=w.el=A.el;let{patchFlag:D,dynamicChildren:U,dirs:G}=w;D|=A.patchFlag&16;const $=A.props||at,le=w.props||at;let ie;if(B&&Mi(B,!1),(ie=le.onVnodeBeforeUpdate)&&cn(ie,B,w,A),G&&xi(w,A,B,"beforeUpdate"),B&&Mi(B,!0),U?M(A.dynamicChildren,U,_,B,Y,qo(w,q),ae):E||W(A,w,_,null,B,Y,qo(w,q),ae,!1),D>0){if(D&16)k(_,w,$,le,B,Y,q);else if(D&2&&$.class!==le.class&&s(_,"class",null,le.class,q),D&4&&s(_,"style",$.style,le.style,q),D&8){const oe=w.dynamicProps;for(let Me=0;Me<oe.length;Me++){const ce=oe[Me],xe=$[ce],Le=le[ce];(Le!==xe||ce==="value")&&s(_,ce,xe,Le,q,A.children,B,Y,ge)}}D&1&&A.children!==w.children&&u(_,w.children)}else!E&&U==null&&k(_,w,$,le,B,Y,q);((ie=le.onVnodeUpdated)||G)&&Ot(()=>{ie&&cn(ie,B,w,A),G&&xi(w,A,B,"updated")},Y)},M=(A,w,B,Y,q,ae,E)=>{for(let _=0;_<w.length;_++){const D=A[_],U=w[_],G=D.el&&(D.type===Ut||!Di(D,U)||D.shapeFlag&70)?f(D.el):B;x(D,U,G,null,Y,q,ae,E,!0)}},k=(A,w,B,Y,q,ae,E)=>{if(B!==Y){if(B!==at)for(const _ in B)!Gr(_)&&!(_ in Y)&&s(A,_,B[_],null,E,w.children,q,ae,ge);for(const _ in Y){if(Gr(_))continue;const D=Y[_],U=B[_];D!==U&&_!=="value"&&s(A,_,U,D,E,w.children,q,ae,ge)}"value"in Y&&s(A,"value",B.value,Y.value,E)}},z=(A,w,B,Y,q,ae,E,_,D)=>{const U=w.el=A?A.el:a(""),G=w.anchor=A?A.anchor:a("");let{patchFlag:$,dynamicChildren:le,slotScopeIds:ie}=w;ie&&(_=_?_.concat(ie):ie),A==null?(i(U,B,Y),i(G,B,Y),N(w.children||[],B,G,q,ae,E,_,D)):$>0&&$&64&&le&&A.dynamicChildren?(M(A.dynamicChildren,le,B,q,ae,E,_),(w.key!=null||q&&w===q.subTree)&&Dh(A,w,!0)):W(A,w,B,G,q,ae,E,_,D)},I=(A,w,B,Y,q,ae,E,_,D)=>{w.slotScopeIds=_,A==null?w.shapeFlag&512?q.ctx.activate(w,B,Y,E,D):te(w,B,Y,q,ae,E,D):ee(A,w,D)},te=(A,w,B,Y,q,ae,E)=>{const _=A.component=Pm(A,Y,q);if(bo(A)&&(_.ctx.renderer=L),Dm(_),_.asyncDep){if(q&&q.registerDep(_,ne),!A.el){const D=_.subTree=Ye(Zt);d(null,D,w,B)}}else ne(_,A,w,B,q,ae,E)},ee=(A,w,B)=>{const Y=w.component=A.component;if(Op(A,w,B))if(Y.asyncDep&&!Y.asyncResolved){re(Y,w,B);return}else Y.next=w,Pp(Y.update),Y.effect.dirty=!0,Y.update();else w.el=A.el,Y.vnode=w},ne=(A,w,B,Y,q,ae,E)=>{const _=()=>{if(A.isMounted){let{next:G,bu:$,u:le,parent:ie,vnode:oe}=A;{const Ae=Ih(A);if(Ae){G&&(G.el=oe.el,re(A,G,E)),Ae.asyncDep.then(()=>{A.isUnmounted||_()});return}}let Me=G,ce;Mi(A,!1),G?(G.el=oe.el,re(A,G,E)):G=oe,$&&Ho($),(ce=G.props&&G.props.onVnodeBeforeUpdate)&&cn(ce,ie,G,oe),Mi(A,!0);const xe=Go(A),Le=A.subTree;A.subTree=xe,x(Le,xe,f(Le.el),F(Le),A,q,ae),G.el=xe.el,Me===null&&Fp(A,xe.el),le&&Ot(le,q),(ce=G.props&&G.props.onVnodeUpdated)&&Ot(()=>cn(ce,ie,G,oe),q)}else{let G;const{el:$,props:le}=w,{bm:ie,m:oe,parent:Me}=A,ce=Ks(w);if(Mi(A,!1),ie&&Ho(ie),!ce&&(G=le&&le.onVnodeBeforeMount)&&cn(G,Me,w),Mi(A,!0),$&&ve){const xe=()=>{A.subTree=Go(A),ve($,A.subTree,A,q,null)};ce?w.type.__asyncLoader().then(()=>!A.isUnmounted&&xe()):xe()}else{const xe=A.subTree=Go(A);x(null,xe,B,Y,A,q,ae),w.el=xe.el}if(oe&&Ot(oe,q),!ce&&(G=le&&le.onVnodeMounted)){const xe=w;Ot(()=>cn(G,Me,xe),q)}(w.shapeFlag&256||Me&&Ks(Me.vnode)&&Me.vnode.shapeFlag&256)&&A.a&&Ot(A.a,q),A.isMounted=!0,w=B=Y=null}},D=A.effect=new _l(_,Kt,()=>wl(U),A.scope),U=A.update=()=>{D.dirty&&D.run()};U.id=A.uid,Mi(A,!0),U()},re=(A,w,B)=>{w.component=A;const Y=A.vnode.props;A.vnode=w,A.next=null,mm(A,w.props,Y,B),vm(A,w.children,B),pi(),rc(A),mi()},W=(A,w,B,Y,q,ae,E,_,D=!1)=>{const U=A&&A.children,G=A?A.shapeFlag:0,$=w.children,{patchFlag:le,shapeFlag:ie}=w;if(le>0){if(le&128){he(U,$,B,Y,q,ae,E,_,D);return}else if(le&256){de(U,$,B,Y,q,ae,E,_,D);return}}ie&8?(G&16&&ge(U,q,ae),$!==U&&u(B,$)):G&16?ie&16?he(U,$,B,Y,q,ae,E,_,D):ge(U,q,ae,!0):(G&8&&u(B,""),ie&16&&N($,B,Y,q,ae,E,_,D))},de=(A,w,B,Y,q,ae,E,_,D)=>{A=A||pr,w=w||pr;const U=A.length,G=w.length,$=Math.min(U,G);let le;for(le=0;le<$;le++){const ie=w[le]=D?Qn(w[le]):fn(w[le]);x(A[le],ie,B,null,q,ae,E,_,D)}U>G?ge(A,q,ae,!0,!1,$):N(w,B,Y,q,ae,E,_,D,$)},he=(A,w,B,Y,q,ae,E,_,D)=>{let U=0;const G=w.length;let $=A.length-1,le=G-1;for(;U<=$&&U<=le;){const ie=A[U],oe=w[U]=D?Qn(w[U]):fn(w[U]);if(Di(ie,oe))x(ie,oe,B,null,q,ae,E,_,D);else break;U++}for(;U<=$&&U<=le;){const ie=A[$],oe=w[le]=D?Qn(w[le]):fn(w[le]);if(Di(ie,oe))x(ie,oe,B,null,q,ae,E,_,D);else break;$--,le--}if(U>$){if(U<=le){const ie=le+1,oe=ie<G?w[ie].el:Y;for(;U<=le;)x(null,w[U]=D?Qn(w[U]):fn(w[U]),B,oe,q,ae,E,_,D),U++}}else if(U>le)for(;U<=$;)Re(A[U],q,ae,!0),U++;else{const ie=U,oe=U,Me=new Map;for(U=oe;U<=le;U++){const Oe=w[U]=D?Qn(w[U]):fn(w[U]);Oe.key!=null&&Me.set(Oe.key,U)}let ce,xe=0;const Le=le-oe+1;let Ae=!1,Ee=0;const Ue=new Array(Le);for(U=0;U<Le;U++)Ue[U]=0;for(U=ie;U<=$;U++){const Oe=A[U];if(xe>=Le){Re(Oe,q,ae,!0);continue}let Ce;if(Oe.key!=null)Ce=Me.get(Oe.key);else for(ce=oe;ce<=le;ce++)if(Ue[ce-oe]===0&&Di(Oe,w[ce])){Ce=ce;break}Ce===void 0?Re(Oe,q,ae,!0):(Ue[Ce-oe]=U+1,Ce>=Ee?Ee=Ce:Ae=!0,x(Oe,w[Ce],B,null,q,ae,E,_,D),xe++)}const ke=Ae?ym(Ue):pr;for(ce=ke.length-1,U=Le-1;U>=0;U--){const Oe=oe+U,Ce=w[Oe],v=Oe+1<G?w[Oe+1].el:Y;Ue[U]===0?x(null,Ce,B,v,q,ae,E,_,D):Ae&&(ce<0||U!==ke[ce]?ye(Ce,B,v,2):ce--)}}},ye=(A,w,B,Y,q=null)=>{const{el:ae,type:E,transition:_,children:D,shapeFlag:U}=A;if(U&6){ye(A.component.subTree,w,B,Y);return}if(U&128){A.suspense.move(w,B,Y);return}if(U&64){E.move(A,w,B,L);return}if(E===Ut){i(ae,w,B);for(let $=0;$<D.length;$++)ye(D[$],w,B,Y);i(A.anchor,w,B);return}if(E===jo){S(A,w,B);return}if(Y!==2&&U&1&&_)if(Y===0)_.beforeEnter(ae),i(ae,w,B),Ot(()=>_.enter(ae),q);else{const{leave:$,delayLeave:le,afterLeave:ie}=_,oe=()=>i(ae,w,B),Me=()=>{$(ae,()=>{oe(),ie&&ie()})};le?le(ae,oe,Me):Me()}else i(ae,w,B)},Re=(A,w,B,Y=!1,q=!1)=>{const{type:ae,props:E,ref:_,children:D,dynamicChildren:U,shapeFlag:G,patchFlag:$,dirs:le}=A;if(_!=null&&Ga(_,null,B,A,!0),G&256){w.ctx.deactivate(A);return}const ie=G&1&&le,oe=!Ks(A);let Me;if(oe&&(Me=E&&E.onVnodeBeforeUnmount)&&cn(Me,w,A),G&6)pe(A.component,B,Y);else{if(G&128){A.suspense.unmount(B,Y);return}ie&&xi(A,null,w,"beforeUnmount"),G&64?A.type.remove(A,w,B,q,L,Y):U&&(ae!==Ut||$>0&&$&64)?ge(U,w,B,!1,!0):(ae===Ut&&$&384||!q&&G&16)&&ge(D,w,B),Y&&je(A)}(oe&&(Me=E&&E.onVnodeUnmounted)||ie)&&Ot(()=>{Me&&cn(Me,w,A),ie&&xi(A,null,w,"unmounted")},B)},je=A=>{const{type:w,el:B,anchor:Y,transition:q}=A;if(w===Ut){Q(B,Y);return}if(w===jo){R(A);return}const ae=()=>{r(B),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:E,delayLeave:_}=q,D=()=>E(B,ae);_?_(A.el,ae,D):D()}else ae()},Q=(A,w)=>{let B;for(;A!==w;)B=h(A),r(A),A=B;r(w)},pe=(A,w,B)=>{const{bum:Y,scope:q,update:ae,subTree:E,um:_}=A;Y&&Ho(Y),q.stop(),ae&&(ae.active=!1,Re(E,A,w,B)),_&&Ot(_,w),Ot(()=>{A.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},ge=(A,w,B,Y=!1,q=!1,ae=0)=>{for(let E=ae;E<A.length;E++)Re(A[E],w,B,Y,q)},F=A=>A.shapeFlag&6?F(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el);let ue=!1;const se=(A,w,B)=>{A==null?w._vnode&&Re(w._vnode,null,null,!0):x(w._vnode||null,A,w,null,null,null,B),ue||(ue=!0,rc(),oh(),ue=!1),w._vnode=A},L={p:x,um:Re,m:ye,r:je,mt:te,mc:N,pc:W,pbc:M,n:F,o:n};let be,ve;return{render:se,hydrate:be,createApp:hm(se,be)}}function qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Mi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Sm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dh(n,e,t=!1){const i=n.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),t||Dh(o,a)),a.type===Ao&&(a.el=o.el)}}function ym(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ih(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ih(e)}const Em=n=>n.__isTeleport,Ut=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),qr=[];let sn=null;function nt(n=!1){qr.push(sn=n?null:[])}function bm(){qr.pop(),sn=qr[qr.length-1]||null}let ns=1;function gc(n){ns+=n}function Uh(n){return n.dynamicChildren=ns>0?sn||pr:null,bm(),ns>0&&sn&&sn.push(n),n}function ct(n,e,t,i,r,s){return Uh(Ie(n,e,t,i,r,s,!0))}function Wa(n,e,t,i,r){return Uh(Ye(n,e,t,i,r,!0))}function Xa(n){return n?n.__v_isVNode===!0:!1}function Di(n,e){return n.type===e.type&&n.key===e.key}const Nh=({key:n})=>n??null,Qs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||yt(n)||ze(n)?{i:Wt,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,r=null,s=n===Ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nh(e),ref:e&&Qs(e),scopeId:Eo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Dl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),ns>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const Ye=Tm;function Tm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===hh)&&(n=Zt),Xa(n)){const a=ui(n,e,!0);return t&&Dl(a,t),ns>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag|=-2,a}if(Fm(n)&&(n=n.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Ln(a)),st(l)&&(Qf(l)&&!Pe(l)&&(l=mt({},l)),e.style=gl(l))}const o=ft(n)?1:kp(n)?128:Em(n)?64:st(n)?4:ze(n)?2:0;return Ie(n,e,t,i,r,o,s,!0)}function Am(n){return n?Qf(n)||Ah(n)?mt({},n):n:null}function ui(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?wm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Nh(c),ref:e&&e.ref?t&&s?Pe(s)?s.concat(Qs(e)):[s,Qs(e)]:Qs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ut?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ui(n.ssContent),ssFallback:n.ssFallback&&ui(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function ao(n=" ",e=0){return Ye(Ao,null,n,e)}function Oh(n="",e=!1){return e?(nt(),Wa(Zt,null,n)):Ye(Zt,null,n)}function fn(n){return n==null||typeof n=="boolean"?Ye(Zt):Pe(n)?Ye(Ut,null,n.slice()):typeof n=="object"?Qn(n):Ye(Ao,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ui(n)}function Dl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Dl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ah(e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),i&64?(t=16,e=[ao(e)]):t=8);n.children=e,n.shapeFlag|=t}function wm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ln([e.class,i.class]));else if(r==="style")e.style=gl([e.style,i.style]);else if(go(r)){const s=e[r],o=i[r];o&&s!==o&&!(Pe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){Qt(n,e,7,[t,i])}const Rm=Eh();let Cm=0;function Pm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rm,s={uid:Cm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(i,r),emitsOptions:lh(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ip.bind(null,s),n.ce&&n.ce(s),s}let Mt=null;const Lm=()=>Mt||Wt;let lo,qa;{const n=Uf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};lo=e("__VUE_INSTANCE_SETTERS__",t=>Mt=t),qa=e("__VUE_SSR_SETTERS__",t=>wo=t)}const us=n=>{const e=Mt;return lo(n),n.scope.on(),()=>{n.scope.off(),lo(e)}},_c=()=>{Mt&&Mt.scope.off(),lo(null)};function Fh(n){return n.vnode.shapeFlag&4}let wo=!1;function Dm(n,e=!1){e&&qa(e);const{props:t,children:i}=n.vnode,r=Fh(n);pm(n,t,r,e),_m(n,i);const s=r?Im(n,e):void 0;return e&&qa(!1),s}function Im(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sm);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Nm(n):null,s=us(n);pi();const o=oi(i,n,0,[n.props,r]);if(mi(),s(),Pf(o)){if(o.then(_c,_c),e)return o.then(a=>{vc(n,a,e)}).catch(a=>{So(a,n,0)});n.asyncDep=o}else vc(n,o,e)}else Bh(n,e)}function vc(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=ih(e)),Bh(n,t)}let xc;function Bh(n,e,t){const i=n.type;if(!n.render){if(!e&&xc&&!i.render){const r=i.template||Pl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=mt(mt({isCustomElement:s,delimiters:a},o),l);i.render=xc(r,c)}}n.render=i.render||Kt}{const r=us(n);pi();try{om(n)}finally{mi(),r()}}}const Um={get(n,e){return Bt(n,"get",""),n[e]}};function Nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Um),slots:n.slots,emit:n.emit,expose:e}}function Il(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ih(El(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Xr)return Xr[t](n)},has(e,t){return t in e||t in Xr}}))}function Om(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Fm(n){return ze(n)&&"__vccOpts"in n}const Gt=(n,e)=>Sp(n,e,wo);function Ul(n,e,t){const i=arguments.length;return i===2?st(e)&&!Pe(e)?Xa(e)?Ye(n,null,[e]):Ye(n,e):Ye(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xa(t)&&(t=[t]),Ye(n,e,t))}const Bm="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const zm="http://www.w3.org/2000/svg",km="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Mc=ei&&ei.createElement("template"),Hm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ei.createElementNS(zm,n):e==="mathml"?ei.createElementNS(km,n):ei.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Mc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Mc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},kn="transition",Ur="animation",is=Symbol("_vtc"),co=(n,{slots:e})=>Ul(Yp,Vm(n),e);co.displayName="Transition";const zh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};co.props=mt({},mh,zh);const Si=(n,e=[])=>{Pe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sc=n=>n?Pe(n)?n.some(e=>e.length>1):n.length>1:!1;function Vm(n){const e={};for(const z in n)z in zh||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Gm(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:S,onLeave:R,onLeaveCancelled:O,onBeforeAppear:C=d,onAppear:P=T,onAppearCancelled:N=S}=e,y=(z,I,te)=>{yi(z,I?u:a),yi(z,I?c:o),te&&te()},M=(z,I)=>{z._isLeaving=!1,yi(z,f),yi(z,p),yi(z,h),I&&I()},k=z=>(I,te)=>{const ee=z?P:T,ne=()=>y(I,z,te);Si(ee,[I,ne]),yc(()=>{yi(I,z?l:s),Hn(I,z?u:a),Sc(ee)||Ec(I,i,x,ne)})};return mt(e,{onBeforeEnter(z){Si(d,[z]),Hn(z,s),Hn(z,o)},onBeforeAppear(z){Si(C,[z]),Hn(z,l),Hn(z,c)},onEnter:k(!1),onAppear:k(!0),onLeave(z,I){z._isLeaving=!0;const te=()=>M(z,I);Hn(z,f),Hn(z,h),qm(),yc(()=>{z._isLeaving&&(yi(z,f),Hn(z,p),Sc(R)||Ec(z,i,m,te))}),Si(R,[z,te])},onEnterCancelled(z){y(z,!1),Si(S,[z])},onAppearCancelled(z){y(z,!0),Si(N,[z])},onLeaveCancelled(z){M(z),Si(O,[z])}})}function Gm(n){if(n==null)return null;if(st(n))return[Yo(n.enter),Yo(n.leave)];{const e=Yo(n);return[e,e]}}function Yo(n){return qd(n)}function Hn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[is]||(n[is]=new Set)).add(e)}function yi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[is];t&&(t.delete(e),t.size||(n[is]=void 0))}function yc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Wm=0;function Ec(n,e,t,i){const r=n._endId=++Wm,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Xm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Xm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${kn}Delay`),s=i(`${kn}Duration`),o=bc(r,s),a=i(`${Ur}Delay`),l=i(`${Ur}Duration`),c=bc(a,l);let u=null,f=0,h=0;e===kn?o>0&&(u=kn,f=o,h=s.length):e===Ur?c>0&&(u=Ur,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?kn:Ur:null,h=u?u===kn?s.length:l.length:0);const p=u===kn&&/\b(transform|all)(,|$)/.test(i(`${kn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function bc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Tc(t)+Tc(n[i])))}function Tc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function qm(){return document.body.offsetHeight}function jm(n,e,t){const i=n[is];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ac=Symbol("_vod"),Ym=Symbol("_vsh"),$m=Symbol(""),Km=/(^|;)\s*display\s*:/;function Zm(n,e,t){const i=n.style,r=ft(t);let s=!1;if(t&&!r){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&eo(i,a,"")}else for(const o in e)t[o]==null&&eo(i,o,"");for(const o in t)o==="display"&&(s=!0),eo(i,o,t[o])}else if(r){if(e!==t){const o=i[$m];o&&(t+=";"+o),i.cssText=t,s=Km.test(t)}}else e&&n.removeAttribute("style");Ac in n&&(n[Ac]=s?i.display:"",n[Ym]&&(i.display="none"))}const wc=/\s*!important$/;function eo(n,e,t){if(Pe(t))t.forEach(i=>eo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Jm(n,e);wc.test(t)?n.setProperty(wr(i),t.replace(wc,""),"important"):n[i]=t}}const Rc=["Webkit","Moz","ms"],$o={};function Jm(n,e){const t=$o[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return $o[e]=i;i=xo(i);for(let r=0;r<Rc.length;r++){const s=Rc[r]+i;if(s in n)return $o[e]=s}return e}const Cc="http://www.w3.org/1999/xlink";function Qm(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Cc,e.slice(6,e.length)):n.setAttributeNS(Cc,e,t);else{const s=Jd(e);t==null||s&&!Nf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function e0(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Nf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function t0(n,e,t,i){n.addEventListener(e,t,i)}function n0(n,e,t,i){n.removeEventListener(e,t,i)}const Pc=Symbol("_vei");function i0(n,e,t,i,r=null){const s=n[Pc]||(n[Pc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=r0(e);if(i){const c=s[e]=a0(i,r);t0(n,a,c,l)}else o&&(n0(n,a,o,l),s[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function r0(n){let e;if(Lc.test(n)){e={};let i;for(;i=n.match(Lc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wr(n.slice(2)),e]}let Ko=0;const s0=Promise.resolve(),o0=()=>Ko||(s0.then(()=>Ko=0),Ko=Date.now());function a0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qt(l0(i,t.value),e,5,[i])};return t.value=n,t.attached=o0(),t}function l0(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Dc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,c0=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?jm(n,i,c):e==="style"?Zm(n,t,i):go(e)?dl(e)||i0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u0(n,e,i,c))?e0(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Qm(n,e,i,c))};function u0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Dc(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Dc(e)&&ft(t)?!1:e in n}const f0=mt({patchProp:c0},Hm);let Ic;function h0(){return Ic||(Ic=xm(f0))}const d0=(...n)=>{const e=h0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=m0(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,p0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function p0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function m0(n){return ft(n)?document.querySelector(n):n}var g0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let kh;const Ro=n=>kh=n,Hh=Symbol();function Uc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var jr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(jr||(jr={}));function _0(){const n=Bf(!0),e=n.run(()=>Un({}));let t=[],i=[];const r=El({install(s){Ro(r),r._a=s,s.provide(Hh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!g0?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const v0=()=>{};function Nc(n,e,t,i=v0){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&zf()&&ep(r),r}function Wi(n,...e){n.slice().forEach(t=>{t(...e)})}const x0=n=>n();function Vh(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Uc(r)&&Uc(i)&&n.hasOwnProperty(t)&&!yt(i)&&!zi(i)?n[t]=Vh(r,i):n[t]=i}return n}const{assign:Kn}=Object;function M0(n){return!!(yt(n)&&n.effect)}function S0(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Tp(t.state.value[n]);return Kn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=El(Gt(()=>{Ro(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=y0(n,c,e,t,i,!0),l}function y0(n,e,t={},i,r,s){let o;const a=Kn({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const g=i.state.value[n];Un({});let x;function m(N){let y;c=u=!1,typeof N=="function"?(N(i.state.value[n]),y={type:jr.patchFunction,storeId:n,events:p}):(Vh(i.state.value[n],N),y={type:jr.patchObject,payload:N,storeId:n,events:p});const M=x=Symbol();Al().then(()=>{x===M&&(c=!0)}),u=!0,Wi(f,y,i.state.value[n])}const d=function(){const{state:y}=t,M=y?y():{};this.$patch(k=>{Kn(k,M)})};function T(){o.stop(),f=[],h=[],i._s.delete(n)}function S(N,y){return function(){Ro(i);const M=Array.from(arguments),k=[],z=[];function I(ne){k.push(ne)}function te(ne){z.push(ne)}Wi(h,{args:M,name:N,store:O,after:I,onError:te});let ee;try{ee=y.apply(this&&this.$id===n?this:O,M)}catch(ne){throw Wi(z,ne),ne}return ee instanceof Promise?ee.then(ne=>(Wi(k,ne),ne)).catch(ne=>(Wi(z,ne),Promise.reject(ne))):(Wi(k,ee),ee)}}const R={_p:i,$id:n,$onAction:Nc.bind(null,h),$patch:m,$reset:d,$subscribe(N,y={}){const M=Nc(f,N,y.detached,()=>k()),k=o.run(()=>Wr(()=>i.state.value[n],z=>{(y.flush==="sync"?u:c)&&N({storeId:n,type:jr.direct,events:p},z)},Kn({},l,y)));return M},$dispose:T},O=cs(R);i._s.set(n,O);const P=(i._a&&i._a.runWithContext||x0)(()=>i._e.run(()=>(o=Bf()).run(e)));for(const N in P){const y=P[N];if(!(yt(y)&&!M0(y)||zi(y))){if(typeof y=="function"){const M=S(N,y);P[N]=M,a.actions[N]=y}}}return Kn(O,P),Kn(Ke(O),P),Object.defineProperty(O,"$state",{get:()=>i.state.value[n],set:N=>{m(y=>{Kn(y,N)})}}),i._p.forEach(N=>{Kn(O,o.run(()=>N({store:O,app:i._a,pinia:i,options:a})))}),g&&s&&t.hydrate&&t.hydrate(O.$state,g),c=!0,u=!0,O}function E0(n,e,t){let i,r;typeof n=="string"?(i=n,r=e):(r=n,i=n.id);function s(o,a){const l=dm();return o=o||(l?on(Hh,null):null),o&&Ro(o),o=kh,o._s.has(i)||S0(i,r,o),o._s.get(i)}return s.$id=i,s}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ur=typeof document<"u";function b0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const et=Object.assign;function Zo(n,e){const t={};for(const i in e){const r=e[i];t[i]=ln(r)?r.map(n):n(r)}return t}const Yr=()=>{},ln=Array.isArray,Gh=/#/g,T0=/&/g,A0=/\//g,w0=/=/g,R0=/\?/g,Wh=/\+/g,C0=/%5B/g,P0=/%5D/g,Xh=/%5E/g,L0=/%60/g,qh=/%7B/g,D0=/%7C/g,jh=/%7D/g,I0=/%20/g;function Nl(n){return encodeURI(""+n).replace(D0,"|").replace(C0,"[").replace(P0,"]")}function U0(n){return Nl(n).replace(qh,"{").replace(jh,"}").replace(Xh,"^")}function ja(n){return Nl(n).replace(Wh,"%2B").replace(I0,"+").replace(Gh,"%23").replace(T0,"%26").replace(L0,"`").replace(qh,"{").replace(jh,"}").replace(Xh,"^")}function N0(n){return ja(n).replace(w0,"%3D")}function O0(n){return Nl(n).replace(Gh,"%23").replace(R0,"%3F")}function F0(n){return n==null?"":O0(n).replace(A0,"%2F")}function rs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const B0=/\/$/,z0=n=>n.replace(B0,"");function Jo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=G0(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:rs(o)}}function k0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Oc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function H0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Sr(e.matched[i],t.matched[r])&&Yh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Sr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Yh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!V0(n[t],e[t]))return!1;return!0}function V0(n,e){return ln(n)?Fc(n,e):ln(e)?Fc(e,n):n===e}function Fc(n,e){return ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function G0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var ss;(function(n){n.pop="pop",n.push="push"})(ss||(ss={}));var $r;(function(n){n.back="back",n.forward="forward",n.unknown=""})($r||($r={}));function W0(n){if(!n)if(ur){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),z0(n)}const X0=/^[^#]+#/;function q0(n,e){return n.replace(X0,"#")+e}function j0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Co=()=>({left:window.scrollX,top:window.scrollY});function Y0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=j0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bc(n,e){return(history.state?history.state.position-e:-1)+n}const Ya=new Map;function $0(n,e){Ya.set(n,e)}function K0(n){const e=Ya.get(n);return Ya.delete(n),e}let Z0=()=>location.protocol+"//"+location.host;function $h(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Oc(l,"")}return Oc(t,n)+i+r}function J0(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=$h(n,location),g=t.value,x=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(t.value,g,{delta:m,type:ss.pop,direction:m?m>0?$r.forward:$r.back:$r.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:Co()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function zc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Co():null}}function Q0(n){const{history:e,location:t}=window,i={value:$h(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Z0()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,zc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:Co()});s(u.current,u,!0);const f=et({},zc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function eg(n){n=W0(n);const e=Q0(n),t=J0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:n,go:i,createHref:q0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function tg(n){return typeof n=="string"||n&&typeof n=="object"}function Kh(n){return typeof n=="string"||typeof n=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zh=Symbol("");var kc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(kc||(kc={}));function yr(n,e){return et(new Error,{type:n,[Zh]:!0},e)}function En(n,e){return n instanceof Error&&Zh in n&&(e==null||!!(n.type&e))}const Hc="[^/]+?",ng={sensitive:!1,strict:!1,start:!0,end:!0},ig=/[.+*?^${}()[\]/\\]/g;function rg(n,e){const t=et({},ng,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(ig,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:x,optional:m,regexp:d}=h;s.push({name:g,repeatable:x,optional:m});const T=d||Hc;if(T!==Hc){p+=10;try{new RegExp(`(${T})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+R.message)}}let S=x?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=20,m&&(p+=-8),x&&(p+=-20),T===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:x,optional:m}=p,d=g in c?c[g]:"";if(ln(d)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=ln(d)?d.join("/"):d;if(!T)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function sg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function og(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=sg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Vc(i))return 1;if(Vc(r))return-1}return r.length-i.length}function Vc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const ag={type:0,value:""},lg=/[a-zA-Z0-9_]/;function cg(n){if(!n)return[[]];if(n==="/")return[[ag]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:lg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function ug(n,e,t){const i=rg(cg(n.path),t),r=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fg(n,e){const t=[],i=new Map;e=Xc({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=hg(u);g.aliasOf=h&&h.record;const x=Xc(e,u),m=[g];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of S)m.push(et({},g,{components:h?h.record.components:g.components,path:R,aliasOf:h?h.record:g}))}let d,T;for(const S of m){const{path:R}=S;if(f&&R[0]!=="/"){const O=f.record.path,C=O[O.length-1]==="/"?"":"/";S.path=f.record.path+(R&&C+R)}if(d=ug(S,f,x),h?h.alias.push(d):(T=T||d,T!==d&&T.alias.push(d),p&&u.name&&!Wc(d)&&o(u.name)),g.children){const O=g.children;for(let C=0;C<O.length;C++)s(O[C],d,h&&h.children[C])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return T?()=>{o(T)}:Yr}function o(u){if(Kh(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&og(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Jh(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Wc(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},g,x;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw yr(1,{location:u});x=h.record.name,p=et(Gc(f.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),u.params&&Gc(u.params,h.keys.map(T=>T.name))),g=h.stringify(p)}else if(u.path!=null)g=u.path,h=t.find(T=>T.re.test(g)),h&&(p=h.parse(g),x=h.record.name);else{if(h=f.name?i.get(f.name):t.find(T=>T.re.test(f.path)),!h)throw yr(1,{location:u,currentLocation:f});x=h.record.name,p=et({},f.params,u.params),g=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:x,path:g,params:p,matched:m,meta:pg(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Gc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function hg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:dg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function dg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Wc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function pg(n){return n.reduce((e,t)=>et(e,t.meta),{})}function Xc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Jh(n,e){return e.children.some(t=>t===n||Jh(n,t))}function mg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Wh," "),o=s.indexOf("="),a=rs(o<0?s:s.slice(0,o)),l=o<0?null:rs(s.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qc(n){let e="";for(let t in n){const i=n[t];if(t=N0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(i)?i.map(s=>s&&ja(s)):[i&&ja(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function gg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const _g=Symbol(""),jc=Symbol(""),Po=Symbol(""),Qh=Symbol(""),$a=Symbol("");function Nr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ti(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(yr(4,{from:t,to:e})):h instanceof Error?l(h):tg(h)?l(yr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Qo(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(vg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ti(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=b0(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&ti(p,t,i,o,a,r)()}))}}return s}function vg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Yc(n){const e=on(Po),t=on(Qh),i=Gt(()=>{const l=Et(n.to);return e.resolve(l)}),r=Gt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sr.bind(null,u));if(h>-1)return h;const p=$c(l[c-2]);return c>1&&$c(u)===p&&f[f.length-1].path!==p?f.findIndex(Sr.bind(null,l[c-2])):h}),s=Gt(()=>r.value>-1&&yg(t.params,i.value.params)),o=Gt(()=>r.value>-1&&r.value===t.matched.length-1&&Yh(t.params,i.value.params));function a(l={}){return Sg(l)?e[Et(n.replace)?"replace":"push"](Et(n.to)).catch(Yr):Promise.resolve()}return{route:i,href:Gt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const xg=vh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yc,setup(n,{slots:e}){const t=cs(Yc(n)),{options:i}=on(Po),r=Gt(()=>({[Kc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Kc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Ul("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Mg=xg;function Sg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function yg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function $c(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Kc=(n,e,t)=>n??e??t,Eg=vh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=on($a),r=Gt(()=>n.route||i.value),s=on(jc,0),o=Gt(()=>{let c=Et(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Gt(()=>r.value.matched[o.value]);Js(jc,Gt(()=>o.value+1)),Js(_g,a),Js($a,r);const l=Un();return Wr(()=>[l.value,a.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Sr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Zc(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ul(h,et({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Zc(t.default,{Component:m,route:c})||m}}});function Zc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ed=Eg;function bg(n){const e=fg(n.routes,n),t=n.parseQuery||mg,i=n.stringifyQuery||qc,r=n.history,s=Nr(),o=Nr(),a=Nr(),l=yp(Vn);let c=Vn;ur&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zo.bind(null,F=>""+F),f=Zo.bind(null,F0),h=Zo.bind(null,rs);function p(F,ue){let se,L;return Kh(F)?(se=e.getRecordMatcher(F),L=ue):L=F,e.addRoute(L,se)}function g(F){const ue=e.getRecordMatcher(F);ue&&e.removeRoute(ue)}function x(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,ue){if(ue=et({},ue||l.value),typeof F=="string"){const w=Jo(t,F,ue.path),B=e.resolve({path:w.path},ue),Y=r.createHref(w.fullPath);return et(w,B,{params:h(B.params),hash:rs(w.hash),redirectedFrom:void 0,href:Y})}let se;if(F.path!=null)se=et({},F,{path:Jo(t,F.path,ue.path).path});else{const w=et({},F.params);for(const B in w)w[B]==null&&delete w[B];se=et({},F,{params:f(w)}),ue.params=f(ue.params)}const L=e.resolve(se,ue),be=F.hash||"";L.params=u(h(L.params));const ve=k0(i,et({},F,{hash:U0(be),path:L.path})),A=r.createHref(ve);return et({fullPath:ve,hash:be,query:i===qc?gg(F.query):F.query||{}},L,{redirectedFrom:void 0,href:A})}function T(F){return typeof F=="string"?Jo(t,F,l.value.path):et({},F)}function S(F,ue){if(c!==F)return yr(8,{from:ue,to:F})}function R(F){return P(F)}function O(F){return R(et(T(F),{replace:!0}))}function C(F){const ue=F.matched[F.matched.length-1];if(ue&&ue.redirect){const{redirect:se}=ue;let L=typeof se=="function"?se(F):se;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=T(L):{path:L},L.params={}),et({query:F.query,hash:F.hash,params:L.path!=null?{}:F.params},L)}}function P(F,ue){const se=c=d(F),L=l.value,be=F.state,ve=F.force,A=F.replace===!0,w=C(se);if(w)return P(et(T(w),{state:typeof w=="object"?et({},be,w.state):be,force:ve,replace:A}),ue||se);const B=se;B.redirectedFrom=ue;let Y;return!ve&&H0(i,L,se)&&(Y=yr(16,{to:B,from:L}),ye(L,L,!0,!1)),(Y?Promise.resolve(Y):M(B,L)).catch(q=>En(q)?En(q,2)?q:he(q):W(q,B,L)).then(q=>{if(q){if(En(q,2))return P(et({replace:A},T(q.to),{state:typeof q.to=="object"?et({},be,q.to.state):be,force:ve}),ue||B)}else q=z(B,L,!0,A,be);return k(B,L,q),q})}function N(F,ue){const se=S(F,ue);return se?Promise.reject(se):Promise.resolve()}function y(F){const ue=Q.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(F):F()}function M(F,ue){let se;const[L,be,ve]=Tg(F,ue);se=Qo(L.reverse(),"beforeRouteLeave",F,ue);for(const w of L)w.leaveGuards.forEach(B=>{se.push(ti(B,F,ue))});const A=N.bind(null,F,ue);return se.push(A),ge(se).then(()=>{se=[];for(const w of s.list())se.push(ti(w,F,ue));return se.push(A),ge(se)}).then(()=>{se=Qo(be,"beforeRouteUpdate",F,ue);for(const w of be)w.updateGuards.forEach(B=>{se.push(ti(B,F,ue))});return se.push(A),ge(se)}).then(()=>{se=[];for(const w of ve)if(w.beforeEnter)if(ln(w.beforeEnter))for(const B of w.beforeEnter)se.push(ti(B,F,ue));else se.push(ti(w.beforeEnter,F,ue));return se.push(A),ge(se)}).then(()=>(F.matched.forEach(w=>w.enterCallbacks={}),se=Qo(ve,"beforeRouteEnter",F,ue,y),se.push(A),ge(se))).then(()=>{se=[];for(const w of o.list())se.push(ti(w,F,ue));return se.push(A),ge(se)}).catch(w=>En(w,8)?w:Promise.reject(w))}function k(F,ue,se){a.list().forEach(L=>y(()=>L(F,ue,se)))}function z(F,ue,se,L,be){const ve=S(F,ue);if(ve)return ve;const A=ue===Vn,w=ur?history.state:{};se&&(L||A?r.replace(F.fullPath,et({scroll:A&&w&&w.scroll},be)):r.push(F.fullPath,be)),l.value=F,ye(F,ue,se,A),he()}let I;function te(){I||(I=r.listen((F,ue,se)=>{if(!pe.listening)return;const L=d(F),be=C(L);if(be){P(et(be,{replace:!0}),L).catch(Yr);return}c=L;const ve=l.value;ur&&$0(Bc(ve.fullPath,se.delta),Co()),M(L,ve).catch(A=>En(A,12)?A:En(A,2)?(P(A.to,L).then(w=>{En(w,20)&&!se.delta&&se.type===ss.pop&&r.go(-1,!1)}).catch(Yr),Promise.reject()):(se.delta&&r.go(-se.delta,!1),W(A,L,ve))).then(A=>{A=A||z(L,ve,!1),A&&(se.delta&&!En(A,8)?r.go(-se.delta,!1):se.type===ss.pop&&En(A,20)&&r.go(-1,!1)),k(L,ve,A)}).catch(Yr)}))}let ee=Nr(),ne=Nr(),re;function W(F,ue,se){he(F);const L=ne.list();return L.length?L.forEach(be=>be(F,ue,se)):console.error(F),Promise.reject(F)}function de(){return re&&l.value!==Vn?Promise.resolve():new Promise((F,ue)=>{ee.add([F,ue])})}function he(F){return re||(re=!F,te(),ee.list().forEach(([ue,se])=>F?se(F):ue()),ee.reset()),F}function ye(F,ue,se,L){const{scrollBehavior:be}=n;if(!ur||!be)return Promise.resolve();const ve=!se&&K0(Bc(F.fullPath,0))||(L||!se)&&history.state&&history.state.scroll||null;return Al().then(()=>be(F,ue,ve)).then(A=>A&&Y0(A)).catch(A=>W(A,F,ue))}const Re=F=>r.go(F);let je;const Q=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:x,resolve:d,options:n,push:R,replace:O,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:de,install(F){const ue=this;F.component("RouterLink",Mg),F.component("RouterView",ed),F.config.globalProperties.$router=ue,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Et(l)}),ur&&!je&&l.value===Vn&&(je=!0,R(r.location).catch(be=>{}));const se={};for(const be in Vn)Object.defineProperty(se,be,{get:()=>l.value[be],enumerable:!0});F.provide(Po,ue),F.provide(Qh,Zf(se)),F.provide($a,l);const L=F.unmount;Q.add(F),F.unmount=function(){Q.delete(F),Q.size<1&&(c=Vn,I&&I(),I=null,l.value=Vn,je=!1,re=!1),L()}}};function ge(F){return F.reduce((ue,se)=>ue.then(()=>y(se)),Promise.resolve())}return pe}function Tg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Sr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Sr(c,l))||r.push(l))}return[t,i,r]}function td(){return on(Po)}const Ol=E0({id:"animation",state:()=>({triggeredByRouting:!1}),actions:{triggerAnimation(){return this.triggeredByRouting=!0,new Promise(n=>setTimeout(n,8e3))},resetAnimationTrigger(){this.triggeredByRouting=!1}}}),Ag={class:"border-b w-full py-4"},wg={class:"flex justify-evenly text-slate-200"},Rg={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Cg={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Pg={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Lg={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Dg={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Ig={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Ug={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Ng={class:"hover:scale-125 duration-500 ease-in-out cursor-pointer"},Og={__name:"Navbar",setup(n){const{triggerAnimation:e}=Ol(),t=td(),i=async r=>{t.currentRoute.value.name==="home"&&await e(),t.push(r)};return(r,s)=>(nt(),ct("nav",Ag,[Ie("ul",wg,[Ie("li",Rg,[Ie("a",{onClick:s[0]||(s[0]=o=>i("/mercury"))},"MERCURY")]),Ie("li",Cg,[Ie("a",{onClick:s[1]||(s[1]=o=>i("/venus"))},"VENUS")]),Ie("li",Pg,[Ie("a",{onClick:s[2]||(s[2]=o=>i("/earth"))},"EARTH")]),Ie("li",Lg,[Ie("a",{onClick:s[3]||(s[3]=o=>i("/mars"))},"MARS")]),Ie("li",Dg,[Ie("a",{onClick:s[4]||(s[4]=o=>i("/jupiter"))},"JUPITER")]),Ie("li",Ig,[Ie("a",{onClick:s[5]||(s[5]=o=>i("/saturn"))},"SATURN")]),Ie("li",Ug,[Ie("a",{onClick:s[6]||(s[6]=o=>i("/uranus"))},"URANUS")]),Ie("li",Ng,[Ie("a",{onClick:s[7]||(s[7]=o=>i("/neptune"))},"NEPTUNE")])])]))}},Fg={class:"border-b border-b-slate-700 tracking-widest flex justify-between items-center text-lg py-2"},Bg={class:"flex items-center justify-center"},zg=["src","alt"],kg=Ie("i",{class:"fa-solid fa-chevron-right pr-8"},null,-1),Gn={__name:"PlanetLink",props:{imgSrc:String,name:String},setup(n){return(e,t)=>(nt(),ct("li",Fg,[Ie("span",Bg,[Ie("img",{src:n.imgSrc,alt:n.name,class:"h-5 px-5"},null,8,zg),ao(" "+Ci(n.name),1)]),kg]))}},Ka="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='290'%20height='290'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='145'%20cy='145'%20r='145'/%3e%3ccircle%20id='c'%20cx='145'%20cy='145'%20r='145'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='145'%20cy='145'%20r='145'%20fill='%23DEF4FC'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23B1D5E2'%20fill-rule='nonzero'%20d='M154%20253c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm86-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-110%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012-12-5.373-12-12%205.373-12%2012-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h73c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H99v.01c-6.395.262-11.5%205.53-11.5%2011.99s5.105%2011.728%2011.5%2011.99v.01h45c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-2l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h52c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H70c-6.627%200-12-5.373-12-12s5.373-12%2012-12h3c6.627%200%2012-5.373%2012-12zm160%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012-12-5.373-12-12%205.373-12%2012-12zm-223%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm199-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm24-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-58c-6.627%200-12-5.373-12-12s5.373-12%2012-12h58z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23d)'%20opacity='.078'%20d='M146%200h145v290H146z'/%3e%3c/g%3e%3c/svg%3e",Za="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='400'%20height='400'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='200'%20cy='200'%20r='200'/%3e%3ccircle%20id='c'%20cx='200'%20cy='200'%20r='200'/%3e%3ccircle%20id='e'%20cx='200'%20cy='200'%20r='200'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='200'%20cy='200'%20r='200'%20fill='%23F7CC7F'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23FFE6AE'%20fill-rule='nonzero'%20d='M310%20311c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H189l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H79c-6.627%200-12-5.373-12-12s5.373-12%2012-12h231zm-20-144c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-19v.01c-6.395.263-11.5%205.53-11.5%2011.99s5.105%2011.727%2011.5%2011.99v.01h80c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h1c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h6c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H120c-6.627%200-12-5.373-12-12s5.373-12%2012-12h9c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H59c-6.627%200-12-5.373-12-12s5.373-12%2012-12h231zm-173%2096c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h76zm326-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h41zM-9.5%20167c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-44c-6.627%200-12-5.373-12-12s5.373-12%2012-12h44zM278%20119c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-139%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm158-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-68l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99S222.604%2070.727%20229%2070.99L229%2071h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H40c-6.627%200-12-5.373-12-12s5.373-12%2012-12h257zm3%2048c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm-192%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H88c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23E29F58'%20fill-rule='nonzero'%20d='M205%20263c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zM99%20203c0-6.627-5.373-12-12-12H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h14c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-30c-6.627%200-12-5.373-12-12s5.373-12%2012-12h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H64v.01c-6.395.262-11.5%205.53-11.5%2011.99s5.105%2011.728%2011.5%2011.99v.01h160c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-68l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H83c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12zm128%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm176%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H302c-6.627%200-12-5.373-12-12s5.373-12%2012-12h101zm-368%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H15c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm313-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20z'%20mask='url(%23d)'/%3e%3cmask%20id='f'%20fill='%23fff'%3e%3cuse%20xlink:href='%23e'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23f)'%20opacity='.078'%20d='M201-25h225v450H201z'/%3e%3c/g%3e%3c/svg%3e",Ja="/cosmic-neighborhood/assets/planet-earth-BR7pivE8.svg",Qa="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='336'%20height='336'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='c'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='e'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='g'%20cx='168'%20cy='168'%20r='168'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='168'%20cy='168'%20r='168'%20fill='%23FF6A45'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23FF9B6B'%20fill-rule='nonzero'%20d='M102%2036c0-6.627-5.373-12-12-12H55c-6.627%200-12-5.373-12-12S48.373%200%2055%200h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-56l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99S148.604%2047.727%20155%2047.99V48H168c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12zm172%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h5z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23FF9B6B'%20fill-rule='nonzero'%20d='M209%20324c0-6.627-5.373-12-12-12h-35c-6.627%200-12-5.373-12-12s5.373-12%2012-12h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-56l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99v.01H275c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H148c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12zm172%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h5z'%20mask='url(%23d)'/%3e%3cmask%20id='f'%20fill='%23fff'%3e%3cuse%20xlink:href='%23e'/%3e%3c/mask%3e%3cpath%20fill='%23D04237'%20fill-rule='nonzero'%20d='M217%20264c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-117%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H80c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm163-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H112l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h19c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H11c-6.627%200-12-5.373-12-12s5.373-12%2012-12h32c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-64c-6.627%200-12-5.373-12-12s5.373-12%2012-12h284zm-52%2048c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zM139%2072c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H99c-6.627%200-12-5.373-12-12s5.373-12%2012-12h40zm209%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-40c-6.627%200-12-5.373-12-12s5.373-12%2012-12h40z'%20mask='url(%23f)'/%3e%3cmask%20id='h'%20fill='%23fff'%3e%3cuse%20xlink:href='%23g'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23h)'%20opacity='.078'%20d='M169-16h184v368H169z'/%3e%3c/g%3e%3c/svg%3e",el="/cosmic-neighborhood/assets/planet-jupiter-B5WIKH-L.svg",tl="data:image/svg+xml,%3csvg%20width='668'%20height='668'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.285%2053.283c.113-.12.228-.24.345-.357%2028.705-28.705%20177.658%2073.709%20332.696%20228.747%20155.038%20155.038%20257.452%20303.991%20228.747%20332.696-.117.117-.236.232-.357.345l-45.524-45.524c.122-.112.242-.227.359-.344%2024.049-24.049-61.757-148.848-191.653-278.745C248.001%20160.205%20123.202%2074.399%2099.153%2098.448a11.74%2011.74%200%2000-.344.359L53.285%2053.283zm56.563%2056.563c22.886-22.886%20141.637%2058.759%20265.238%20182.36%20123.601%20123.601%20205.246%20242.352%20182.36%20265.238l-17.143-17.143c.123-.111.242-.226.36-.343%2021.14-21.14-54.091-130.647-168.033-244.589-113.942-113.942-223.449-189.173-244.589-168.033-.117.118-.232.238-.343.36l-17.85-17.85z'%20fill='%23B87D43'/%3e%3ccircle%20cx='334'%20cy='318'%20r='208'%20fill='%23FCCB6B'/%3e%3cmask%20id='a'%20maskUnits='userSpaceOnUse'%20x='126'%20y='110'%20width='416'%20height='416'%3e%3ccircle%20cx='334'%20cy='318'%20r='208'%20fill='%23fff'/%3e%3c/mask%3e%3cg%20mask='url(%23a)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M540.369%20518.472c-4.686-4.687-12.284-4.687-16.97%200-4.687%204.686-4.687%2012.284%200%2016.97l110.308%20110.309c4.687%204.686%2012.285%204.686%2016.971%200s4.686-12.284%200-16.971L540.369%20518.472zM384.806%20362.908c-4.687-4.686-12.285-4.686-16.971%200s-4.686%2012.284%200%2016.971l55.154%2055.154-.007.007c4.337%204.708%204.222%2012.042-.346%2016.61-4.568%204.568-11.903%204.683-16.61.346l-.007.008-113.137-113.137c-4.687-4.687-12.284-4.687-16.971%200-4.686%204.686-4.686%2012.284%200%2016.97l181.727%20181.727c4.686%204.686%2012.284%204.686%2016.97%200%204.687-4.687%204.687-12.285%200-16.971l-34.648-34.648c-4.686-4.687-4.686-12.285%200-16.971s12.284-4.686%2016.971%200l21.213%2021.213c4.686%204.687%2012.284%204.687%2016.97%200%204.687-4.686%204.687-12.284%200-16.97L384.806%20362.908zm77.074%20212.839c-4.686-4.686-12.284-4.686-16.97%200-4.687%204.687-4.687%2012.285%200%2016.971l51.619%2051.619c4.686%204.686%2012.284%204.686%2016.97%200%204.686-4.687%204.686-12.285%200-16.971l-51.619-51.619zM258.941%20372.808c-4.687-4.687-12.285-4.687-16.971%200-4.686%204.686-4.686%2012.284%200%2016.97l51.619%2051.619c4.686%204.686%2012.284%204.686%2016.97%200%204.687-4.686%204.687-12.284%200-16.971l-51.618-51.618zM63.779%20194.617c4.687-4.687%2012.284-4.687%2016.97%200l117.38%20117.379c4.687%204.687%204.687%2012.285%200%2016.971-4.686%204.686-12.284%204.686-16.97%200l-117.38-117.38c-4.686-4.686-4.686-12.284%200-16.97zm193.747%2074.953c-4.686-4.686-12.284-4.686-16.97%200-4.686%204.686-4.686%2012.284%200%2016.971l6.364%206.364c4.686%204.686%204.686%2012.284%200%2016.97-4.686%204.686-12.284%204.686-16.971%200L48.223%20128.149c-4.687-4.687-4.687-12.285%200-16.971%204.686-4.686%2012.284-4.686%2016.97%200l141.422%20141.421.007-.007c4.707%204.337%2012.042%204.222%2016.61-.346%204.568-4.568%204.683-11.902.346-16.61l.007-.007-16.97-16.971c-4.687-4.686-4.687-12.284%200-16.97%204.686-4.686%2012.284-4.687%2016.97%200l110.309%20110.308c4.686%204.687%204.686%2012.285%200%2016.971s-12.284%204.686-16.971%200l-59.397-59.397zM55.294%2050.367c4.686-4.686%2012.284-4.686%2016.97%200l110.309%20110.309c4.686%204.686%204.686%2012.284%200%2016.97-4.686%204.686-12.284%204.686-16.97%200L55.293%2067.338c-4.685-4.687-4.685-12.285%200-16.971z'%20fill='%23ECB55A'/%3e%3c/g%3e%3cg%3e%3cmask%20id='b'%20maskUnits='userSpaceOnUse'%20x='126'%20y='110'%20width='416'%20height='416'%3e%3ccircle%20cx='334'%20cy='318'%20r='208'%20fill='%23fff'/%3e%3c/mask%3e%3cg%20mask='url(%23b)'%3e%3cpath%20opacity='.078'%20fill='%23000'%20d='M334%20110h209.089v416H334z'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.284%2053.285c-.12.112-.24.227-.357.345-28.705%2028.704%2073.709%20177.657%20228.747%20332.695C436.712%20541.363%20585.665%20643.777%20614.37%20615.072c.117-.117.232-.236.344-.357l-45.523-45.524c-.112.122-.227.242-.344.359-24.05%2024.05-148.848-61.756-278.745-191.653S74.399%20123.202%2098.449%2099.152c.117-.117.237-.232.359-.344L53.284%2053.285zm56.562%2056.562c-22.886%2022.886%2058.76%20141.637%20182.361%20265.238s242.352%20205.247%20265.238%20182.36l-17.143-17.143c-.112.123-.226.243-.343.36-21.14%2021.14-130.647-54.091-244.589-168.033C181.428%20258.687%20106.197%20149.18%20127.337%20128.04c.117-.117.237-.231.36-.343l-17.851-17.85z'%20fill='%23B87D43'/%3e%3c/svg%3e",nl="/cosmic-neighborhood/assets/planet-uranus-OrYdWk6-.svg",il="/cosmic-neighborhood/assets/planet-neptune-CYlNWYFY.svg",fs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hg={class:"mt-60 overflow-x-hidden overflow-y-visible z-50"},Vg={class:"flex flex-col text-slate-200"},Gg={__name:"Sidebar",emits:["closeSidebar"],setup(n,{emit:e}){const{triggerAnimation:t}=Ol(),i=e,r=td(),s=async o=>{i("closeSidebar"),r.currentRoute.value.name==="home"&&await t(),r.push(o)};return(o,a)=>(nt(),ct("nav",Hg,[Ie("ul",Vg,[Ye(Gn,{imgSrc:Et(Ka),name:"Mercury",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0s"},onClick:a[0]||(a[0]=l=>s("/mercury"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(Za),name:"Venus",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.1s"},onClick:a[1]||(a[1]=l=>s("/venus"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(Ja),name:"Earth",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.2s"},onClick:a[2]||(a[2]=l=>s("/earth"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(Qa),name:"Mars",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.3s"},onClick:a[3]||(a[3]=l=>s("/mars"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(el),name:"Jupiter",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.4s"},onClick:a[4]||(a[4]=l=>s("/jupiter"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(tl),name:"Saturn",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.5s"},onClick:a[5]||(a[5]=l=>s("/saturn"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(nl),name:"Uranus",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.6s"},onClick:a[6]||(a[6]=l=>s("/uranus"))},null,8,["imgSrc"]),Ye(Gn,{imgSrc:Et(il),name:"Neptune",class:"planet-link hover:bg-slate-800 bg-opacity-45 duration-500",style:{"animation-delay":"0.7s"},onClick:a[7]||(a[7]=l=>s("/neptune"))},null,8,["imgSrc"])])]))}},Wg=fs(Gg,[["__scopeId","data-v-505c445a"]]),Xg="/cosmic-neighborhood/assets/spacelogo-RGO_HTi6.png",qg=n=>(ch("data-v-b9fc0b53"),n=n(),uh(),n),jg={class:"h-screen overflow-x-hidden overflow-y-scroll"},Yg={class:"text-center md:border-b"},$g=["src"],Kg=qg(()=>Ie("h1",{class:"text-3xl text-center tracking-widest text-slate-50 mb-4"}," OUR COSMIC NEIGHBORHOOD ",-1)),Zg={__name:"App",setup(n){const e=Un(!1);return(t,i)=>{const r=Bp("router-link");return nt(),ct("main",jg,[Ie("header",Yg,[Ye(r,{to:"/"},{default:kr(()=>[Ie("img",{src:Et(Xg),alt:"space logo",class:"w-32 mx-auto"},null,8,$g)]),_:1}),Kg,Ie("button",{onClick:i[0]||(i[0]=s=>e.value=!e.value),class:"text-white md:hidden duration-500 hover:scale-125"},[Ie("i",{class:Ln(e.value?"fa-solid fa-times text-2xl":"fa-solid fa-bars text-2xl")},null,2)])]),Ye(Og,{class:"hidden md:block"}),Ye(co,{name:"fade"},{default:kr(()=>[e.value?(nt(),Wa(Wg,{key:0,class:"block fixed inset-0 bg-space-color bg-opacity-90 md:hidden",onCloseSidebar:i[1]||(i[1]=s=>e.value=!1)})):Oh("",!0)]),_:1}),Ye(Et(ed),null,{default:kr(({Component:s})=>[Ye(co,{name:"page"},{default:kr(()=>[(nt(),Wa(zp(s)))]),_:2},1024)]),_:1})])}}},Jg=fs(Zg,[["__scopeId","data-v-b9fc0b53"]]),Qg="/cosmic-neighborhood/assets/astronaut-front-BN-eKBFe.png",e_="/cosmic-neighborhood/assets/astronaut-side-BA7TnZSr.png",t_="/cosmic-neighborhood/assets/astronaut-back1-Cno9tUag.png",n_="/cosmic-neighborhood/assets/astronaut-back2-nYe-H9qv.png",i_="/cosmic-neighborhood/assets/astronaut-back3-nyNorktQ.png",r_="/cosmic-neighborhood/assets/astronaut-back4--1QKN2lS.png",s_="/cosmic-neighborhood/assets/astronaut-back5-BxqJ8dDy.png",o_="/cosmic-neighborhood/assets/astronaut-back6-DAfEgWlo.png",a_={class:""},l_={class:"relative -z-10 floating"},c_=["src","data-index"],u_={__name:"HomeView",setup(n){const e=Un(0),t=Un(null),i=()=>{t.value===null&&(t.value=setInterval(()=>{e.value=(e.value+1)%s.length,e.value===0&&(clearInterval(t.value),t.value=null,r.resetAnimationTrigger())},1100))},r=Ol();Wp(()=>{r.triggeredByRouting&&i()});const s=[Qg,e_,t_,n_,i_,r_,s_,o_];return(o,a)=>(nt(),ct("section",a_,[Ie("div",l_,[(nt(),ct(Ut,null,Zs(s,(l,c)=>Ie("img",{key:c,src:l,alt:"astronaut images",class:Ln({active:c===e.value,"final-animate":c===7&&c===e.value}),"data-index":c},null,10,c_)),64))])]))}},f_=fs(u_,[["__scopeId","data-v-baa02cce"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="164",Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},h_=0,Jc=1,d_=2,nd=1,p_=2,Cn=3,fi=0,Ft=1,Pn=2,ai=0,vr=1,Qc=2,eu=3,tu=4,m_=5,Ii=100,g_=101,__=102,v_=103,x_=104,M_=200,S_=201,y_=202,E_=203,rl=204,sl=205,b_=206,T_=207,A_=208,w_=209,R_=210,C_=211,P_=212,L_=213,D_=214,I_=0,U_=1,N_=2,uo=3,O_=4,F_=5,B_=6,z_=7,id=0,k_=1,H_=2,li=0,V_=1,G_=2,W_=3,X_=4,q_=5,j_=6,Y_=7,rd=300,Er=301,br=302,ol=303,al=304,Lo=306,ll=1e3,Ni=1001,cl=1002,Jt=1003,$_=1004,Es=1005,rn=1006,ea=1007,Oi=1008,hi=1009,K_=1010,Z_=1011,sd=1012,od=1013,Tr=1014,ri=1015,Do=1016,ad=1017,ld=1018,hs=1020,J_=35902,Q_=1021,e2=1022,mn=1023,t2=1024,n2=1025,xr=1026,os=1027,i2=1028,cd=1029,r2=1030,ud=1031,fd=1033,ta=33776,na=33777,ia=33778,ra=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,fu=37810,hu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,vu=37817,xu=37818,Mu=37819,Su=37820,yu=37821,sa=36492,Eu=36494,bu=36495,s2=36283,Tu=36284,Au=36285,wu=36286,o2=3200,a2=3201,hd=0,l2=1,ii="",un="srgb",gi="srgb-linear",Bl="display-p3",Io="display-p3-linear",fo="linear",rt="srgb",ho="rec709",po="p3",ji=7680,Ru=519,c2=512,u2=513,f2=514,dd=515,h2=516,d2=517,p2=518,m2=519,Cu=35044,Pu="300 es",Dn=2e3,mo=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Kr=Math.PI/180,as=180/Math.PI;function Rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function zl(n,e){return(n%e+e)%e}function g2(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function _2(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function v2(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function x2(n,e=1){return e-Math.abs(zl(n,e*2)-e)}function M2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function S2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function y2(n,e){return n+Math.floor(Math.random()*(e-n+1))}function E2(n,e){return n+Math.random()*(e-n)}function b2(n){return n*(.5-Math.random())}function T2(n){n!==void 0&&(Lu=n);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A2(n){return n*Kr}function w2(n){return n*as}function R2(n){return(n&n-1)===0&&n!==0}function C2(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function P2(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function L2(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const to={DEG2RAD:Kr,RAD2DEG:as,generateUUID:Rr,clamp:Ct,euclideanModulo:zl,mapLinear:g2,inverseLerp:_2,lerp:Zr,damp:v2,pingpong:x2,smoothstep:M2,smootherstep:S2,randInt:y2,randFloat:E2,randFloatSpread:b2,seededRandom:T2,degToRad:A2,radToDeg:w2,isPowerOfTwo:R2,ceilPowerOfTwo:C2,floorPowerOfTwo:P2,setQuaternionFromProperEuler:L2,normalize:Dt,denormalize:fr};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],T=r[1],S=r[4],R=r[7],O=r[2],C=r[5],P=r[8];return s[0]=o*x+a*T+l*O,s[3]=o*m+a*S+l*C,s[6]=o*d+a*R+l*P,s[1]=c*x+u*T+f*O,s[4]=c*m+u*S+f*C,s[7]=c*d+u*R+f*P,s[2]=h*x+p*T+g*O,s[5]=h*m+p*S+g*C,s[8]=h*d+p*R+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new We;function pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function D2(){const n=ls("canvas");return n.style.display="block",n}const Du={};function I2(n){n in Du||(Du[n]=!0,console.warn(n))}const Iu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[gi]:{transfer:fo,primaries:ho,toReference:n=>n,fromReference:n=>n},[un]:{transfer:rt,primaries:ho,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Io]:{transfer:fo,primaries:po,toReference:n=>n.applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Iu)},[Bl]:{transfer:rt,primaries:po,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uu),fromReference:n=>n.applyMatrix3(Iu).convertLinearToSRGB()}},U2=new Set([gi,Io]),tt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!U2.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=bs[e].toReference,r=bs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return bs[n].primaries},getTransfer:function(n){return n===ii?fo:bs[n].transfer}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class N2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=ls("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O2=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?N2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F2=0;class Nt extends Gi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Ni,r=Ni,s=rn,o=Oi,a=mn,l=hi,c=Nt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=Rr(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=rd;Nt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,R=(p+1)/2,O=(d+1)/2,C=(u+h)/4,P=(f+x)/4,N=(g+m)/4;return S>R&&S>O?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=P/i):R>O?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=C/r,s=N/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=P/s,r=N/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-x)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B2 extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends B2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gd extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z2 extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*x,T=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const O=Math.sqrt(S),C=Math.atan2(O,d*T);m=Math.sin(m*C)/O,a=Math.sin(a*C)/O}const R=a*T;if(l=l*m+h*R,c=c*m+p*R,u=u*m+g*R,f=f*m+x*R,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new X,Nu=new Hi;class ds{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),As.subVectors(this.max,Or),$i.subVectors(e.a,Or),Ki.subVectors(e.b,Or),Zi.subVectors(e.c,Or),Wn.subVectors(Ki,$i),Xn.subVectors(Zi,Ki),Ei.subVectors($i,Zi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-Ei.z,Ei.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,Ei.z,0,-Ei.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-Ei.y,Ei.x,0];return!ua(t,$i,Ki,Zi,As)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,$i,Ki,Zi,As))?!1:(ws.crossVectors(Wn,Xn),t=[ws.x,ws.y,ws.z],ua(t,$i,Ki,Zi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new X,new X,new X,new X,new X,new X,new X,new X],en=new X,Ts=new ds,$i=new X,Ki=new X,Zi=new X,Wn=new X,Xn=new X,Ei=new X,Or=new X,As=new X,ws=new X,bi=new X;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bi.fromArray(n,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const k2=new ds,Fr=new X,fa=new X;class Uo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):k2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(fa)),this.expandByPoint(Fr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new X,ha=new X,Rs=new X,qn=new X,da=new X,Cs=new X,pa=new X;class kl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ha.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=qn.dot(this.direction),l=-qn.dot(Rs),c=qn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(Rs,h),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){da.subVectors(t,e),Cs.subVectors(i,e),pa.crossVectors(da,Cs);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Cs.crossVectors(qn,Cs));if(l<0)return null;const c=a*this.direction.dot(da.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H2,e,V2)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),jn.crossVectors(i,kt),jn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),jn.crossVectors(i,kt)),jn.normalize(),Ps.crossVectors(kt,jn),r[0]=jn.x,r[4]=Ps.x,r[8]=kt.x,r[1]=jn.y,r[5]=Ps.y,r[9]=kt.y,r[2]=jn.z,r[6]=Ps.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],T=i[3],S=i[7],R=i[11],O=i[15],C=r[0],P=r[4],N=r[8],y=r[12],M=r[1],k=r[5],z=r[9],I=r[13],te=r[2],ee=r[6],ne=r[10],re=r[14],W=r[3],de=r[7],he=r[11],ye=r[15];return s[0]=o*C+a*M+l*te+c*W,s[4]=o*P+a*k+l*ee+c*de,s[8]=o*N+a*z+l*ne+c*he,s[12]=o*y+a*I+l*re+c*ye,s[1]=u*C+f*M+h*te+p*W,s[5]=u*P+f*k+h*ee+p*de,s[9]=u*N+f*z+h*ne+p*he,s[13]=u*y+f*I+h*re+p*ye,s[2]=g*C+x*M+m*te+d*W,s[6]=g*P+x*k+m*ee+d*de,s[10]=g*N+x*z+m*ne+d*he,s[14]=g*y+x*I+m*re+d*ye,s[3]=T*C+S*M+R*te+O*W,s[7]=T*P+S*k+R*ee+O*de,s[11]=T*N+S*z+R*ne+O*he,s[15]=T*y+S*I+R*re+O*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],T=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,S=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,R=u*x*c-g*f*c+g*a*p-o*x*p-u*a*d+o*f*d,O=g*f*l-u*x*l-g*a*h+o*x*h+u*a*m-o*f*m,C=t*T+i*S+r*R+s*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=T*P,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=S*P,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=R*P,e[9]=(g*f*s-u*x*s-g*i*p+t*x*p+u*i*d-t*f*d)*P,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=O*P,e[13]=(u*x*r-g*f*r+g*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,x=o*u,m=o*f,d=a*f,T=l*c,S=l*u,R=l*f,O=i.x,C=i.y,P=i.z;return r[0]=(1-(x+d))*O,r[1]=(p+R)*O,r[2]=(g-S)*O,r[3]=0,r[4]=(p-R)*C,r[5]=(1-(h+d))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+S)*P,r[9]=(m-T)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/o,f=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Dn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Dn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,x;if(a===Dn)g=(o+s)*f,x=-2*f;else if(a===mo)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new X,tn=new ut,H2=new X(0,0,0),V2=new X(1,1,1),jn=new X,Ps=new X,kt=new X,Ou=new ut,Fu=new Hi;class xn{constructor(e=0,t=0,i=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G2=0;const Bu=new X,Qi=new Hi,An=new ut,Ls=new X,Br=new X,W2=new X,X2=new Hi,zu=new X(1,0,0),ku=new X(0,1,0),Hu=new X(0,0,1),Vu={type:"added"},q2={type:"removed"},er={type:"childadded",child:null},ma={type:"childremoved",child:null};class bt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new X,t=new xn,i=new Hi,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new We}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Br,Ls,this.up):An.lookAt(Ls,Br,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(An),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q2),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,W2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,X2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new X(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new X,wn=new X,ga=new X,Rn=new X,tr=new X,nr=new X,Gu=new X,_a=new X,va=new X,xa=new X;class pn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),wn.subVectors(i,t),ga.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(wn),l=nn.dot(ga),c=wn.dot(wn),u=wn.dot(ga),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),wn.subVectors(e,t),nn.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),_a.subVectors(e,i);const l=tr.dot(_a),c=nr.dot(_a);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,r);const u=tr.dot(va),f=nr.dot(va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(tr,o);xa.subVectors(e,s);const p=tr.dot(xa),g=nr.dot(xa);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(nr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Gu.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Gu,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=zl(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return tt.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ct(Rt.r*255,0,255))*65536+Math.round(Ct(Rt.g*255,0,255))*256+Math.round(Ct(Rt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=un){tt.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Ds);const i=Zr(Yn.h,Ds.h,t),r=Zr(Yn.s,Ds.s,t),s=Zr(Yn.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Je;Je.NAMES=vd;let j2=0;class Cr extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j2++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=vr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rl&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xd extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new X,Is=new Ne;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return I2("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class Md extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Y2=0;const Yt=new ut,Sa=new bt,ir=new X,Ht=new ds,zr=new ds,xt=new X;class Mn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Sd:Md)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Ht.min,zr.min),Ht.expandByPoint(xt),xt.addVectors(Ht.max,zr.max),Ht.expandByPoint(xt)):(Ht.expandByPoint(zr.min),Ht.expandByPoint(zr.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),xt.add(ir)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new X,l[N]=new X;const c=new X,u=new X,f=new X,h=new Ne,p=new Ne,g=new Ne,x=new X,m=new X;function d(N,y,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(k),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(k),a[N].add(x),a[y].add(x),a[M].add(x),l[N].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,y=T.length;N<y;++N){const M=T[N],k=M.start,z=M.count;for(let I=k,te=k+z;I<te;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new X,R=new X,O=new X,C=new X;function P(N){O.fromBufferAttribute(r,N),C.copy(O);const y=a[N];S.copy(y),S.sub(O.multiplyScalar(O.dot(y))).normalize(),R.crossVectors(C,y);const k=R.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,k)}for(let N=0,y=T.length;N<y;++N){const M=T[N],k=M.start,z=M.count;for(let I=k,te=k+z;I<te;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new _n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new ut,Ti=new kl,Us=new Uo,Xu=new X,rr=new X,sr=new X,or=new X,ya=new X,Ns=new X,Os=new Ne,Fs=new Ne,Bs=new Ne,qu=new X,ju=new X,Yu=new X,zs=new X,ks=new X;class gn extends bt{constructor(e=new Mn,t=new xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ya.fromBufferAttribute(f,e),o?Ns.addScaledVector(ya,u):Ns.addScaledVector(ya.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Us.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Us,Xu)===null||Ti.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let R=T,O=S;R<O;R+=3){const C=a.getX(R),P=a.getX(R+1),N=a.getX(R+2);r=Hs(this,d,e,i,c,u,f,C,P,N),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const T=a.getX(m),S=a.getX(m+1),R=a.getX(m+2);r=Hs(this,o,e,i,c,u,f,T,S,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=T,O=S;R<O;R+=3){const C=R,P=R+1,N=R+2;r=Hs(this,d,e,i,c,u,f,C,P,N),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const T=m,S=m+1,R=m+2;r=Hs(this,o,e,i,c,u,f,T,S,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function $2(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fi,a),l===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:n}}function Hs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,rr),n.getVertexPosition(l,sr),n.getVertexPosition(c,or);const u=$2(n,e,t,i,rr,sr,or,zs);if(u){r&&(Os.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),u.uv=pn.getInterpolation(zs,rr,sr,or,Os,Fs,Bs,new Ne)),s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(zs,rr,sr,or,Os,Fs,Bs,new Ne)),o&&(qu.fromBufferAttribute(o,a),ju.fromBufferAttribute(o,l),Yu.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(zs,rr,sr,or,qu,ju,Yu,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};pn.getNormal(rr,sr,or,f.normal),u.face=f}return u}class ps extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(f,2));function g(x,m,d,T,S,R,O,C,P,N,y){const M=R/P,k=O/N,z=R/2,I=O/2,te=C/2,ee=P+1,ne=N+1;let re=0,W=0;const de=new X;for(let he=0;he<ne;he++){const ye=he*k-I;for(let Re=0;Re<ee;Re++){const je=Re*M-z;de[x]=je*T,de[m]=ye*S,de[d]=te,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[d]=C>0?1:-1,u.push(de.x,de.y,de.z),f.push(Re/P),f.push(1-he/N),re+=1}}for(let he=0;he<N;he++)for(let ye=0;ye<P;ye++){const Re=h+ye+ee*he,je=h+ye+ee*(he+1),Q=h+(ye+1)+ee*(he+1),pe=h+(ye+1)+ee*he;l.push(Re,je,pe),l.push(je,Q,pe),W+=6}a.addGroup(p,W,y),p+=W,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function K2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Z2={clone:Ar,merge:It};var J2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J2,this.fragmentShader=Q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=K2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ed extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new X,$u=new Ne,Ku=new Ne;class $t extends Ed{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ku),t.subVectors(Ku,$u)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class ev extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new $t(ar,lr,e,t);s.layers=this.layers,this.add(s);const o=new $t(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new $t(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new $t(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new $t(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bd extends Nt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tv extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ai});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=rn),new ev(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ea=new X,nv=new X,iv=new We;class ni{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ea.subVectors(i,t).cross(nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iv.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Uo,Vs=new X;class Hl{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,o=new ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],T=r[13],S=r[14],R=r[15];if(i[0].setComponents(l-s,h-c,m-p,R-d).normalize(),i[1].setComponents(l+s,h+c,m+p,R+d).normalize(),i[2].setComponents(l+o,h+u,m+g,R+T).normalize(),i[3].setComponents(l-o,h-u,m-g,R-T).normalize(),i[4].setComponents(l-a,h-f,m-x,R-S).normalize(),t===Dn)i[5].setComponents(l+a,h+f,m+x,R+S).normalize();else if(t===mo)i[5].setComponents(a,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class No extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let S=0;S<c;S++){const R=S*f-s;g.push(R,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const S=T+c*d,R=T+c*(d+1),O=T+1+c*(d+1),C=T+1+c*d;p.push(S,R,C),p.push(R,O,C)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ov=`#ifdef USE_ALPHAHASH
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
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
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
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vv=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rv=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ov=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#endif`,Zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,i1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,r1=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
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
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,S1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,fx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hx=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
}`,yx=`#define MATCAP
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
}`,Ex=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Tx=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
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
}`,wx=`#define PHONG
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
#include <alphahash_pars_fragment>
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Px=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:sv,alphahash_pars_fragment:ov,alphamap_fragment:av,alphamap_pars_fragment:lv,alphatest_fragment:cv,alphatest_pars_fragment:uv,aomap_fragment:fv,aomap_pars_fragment:hv,batching_pars_vertex:dv,batching_vertex:pv,begin_vertex:mv,beginnormal_vertex:gv,bsdfs:_v,iridescence_fragment:vv,bumpmap_pars_fragment:xv,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:Ev,color_fragment:bv,color_pars_fragment:Tv,color_pars_vertex:Av,color_vertex:wv,common:Rv,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Dv,emissivemap_fragment:Iv,emissivemap_pars_fragment:Uv,colorspace_fragment:Nv,colorspace_pars_fragment:Ov,envmap_fragment:Fv,envmap_common_pars_fragment:Bv,envmap_pars_fragment:zv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Zv,envmap_vertex:Hv,fog_vertex:Vv,fog_pars_vertex:Gv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:qv,lightmap_pars_fragment:jv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:$v,lights_pars_begin:Kv,lights_toon_fragment:Jv,lights_toon_pars_fragment:Qv,lights_phong_fragment:e1,lights_phong_pars_fragment:t1,lights_physical_fragment:n1,lights_physical_pars_fragment:i1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:o1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:f1,map_pars_fragment:h1,map_particle_fragment:d1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:_1,morphcolor_vertex:v1,morphnormal_vertex:x1,morphtarget_pars_vertex:M1,morphtarget_vertex:S1,normal_fragment_begin:y1,normal_fragment_maps:E1,normal_pars_fragment:b1,normal_pars_vertex:T1,normal_vertex:A1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:L1,opaque_fragment:D1,packing:I1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:O1,dithering_pars_fragment:F1,roughnessmap_fragment:B1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:H1,shadowmap_vertex:V1,shadowmask_pars_fragment:G1,skinbase_vertex:W1,skinning_pars_vertex:X1,skinning_vertex:q1,skinnormal_vertex:j1,specularmap_fragment:Y1,specularmap_pars_fragment:$1,tonemapping_fragment:K1,tonemapping_pars_fragment:Z1,transmission_fragment:J1,transmission_pars_fragment:Q1,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:rx,background_frag:sx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:ux,depth_frag:fx,distanceRGBA_vert:hx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:_x,meshbasic_vert:vx,meshbasic_frag:xx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:yx,meshmatcap_frag:Ex,meshnormal_vert:bx,meshnormal_frag:Tx,meshphong_vert:Ax,meshphong_frag:wx,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Dx,points_frag:Ix,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:Fx},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:It([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Gs={r:0,b:0,g:0},wi=new xn,Bx=new ut;function zx(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const R=g(T);R===null?d(a,l):R&&R.isColor&&(d(R,1),S=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(T,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===Lo)?(u===void 0&&(u=new gn(new ps(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ar(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wi.copy(S.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(wi)),u.material.toneMapped=tt.getTransfer(R.colorSpace)!==rt,(f!==R||h!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new gn(new No(2,2),new di({name:"BackgroundMaterial",uniforms:Ar(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(R.colorSpace)!==rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(Gs,yd(n)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:x,addToRenderList:m}}function kx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,k,z,I,te){let ee=!1;const ne=f(I,z,k);s!==ne&&(s=ne,c(s.object)),ee=p(M,I,z,te),ee&&g(M,I,z,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,R(M,k,z,I),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,k,z){const I=z.wireframe===!0;let te=i[M.id];te===void 0&&(te={},i[M.id]=te);let ee=te[k.id];ee===void 0&&(ee={},te[k.id]=ee);let ne=ee[I];return ne===void 0&&(ne=h(l()),ee[I]=ne),ne}function h(M){const k=[],z=[],I=[];for(let te=0;te<t;te++)k[te]=0,z[te]=0,I[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,k,z,I){const te=s.attributes,ee=k.attributes;let ne=0;const re=z.getAttributes();for(const W in re)if(re[W].location>=0){const he=te[W];let ye=ee[W];if(ye===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;ne++}return s.attributesNum!==ne||s.index!==I}function g(M,k,z,I){const te={},ee=k.attributes;let ne=0;const re=z.getAttributes();for(const W in re)if(re[W].location>=0){let he=ee[W];he===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),te[W]=ye,ne++}s.attributes=te,s.attributesNum=ne,s.index=I}function x(){const M=s.newAttributes;for(let k=0,z=M.length;k<z;k++)M[k]=0}function m(M){d(M,0)}function d(M,k){const z=s.newAttributes,I=s.enabledAttributes,te=s.attributeDivisors;z[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),te[M]!==k&&(n.vertexAttribDivisor(M,k),te[M]=k)}function T(){const M=s.newAttributes,k=s.enabledAttributes;for(let z=0,I=k.length;z<I;z++)k[z]!==M[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function S(M,k,z,I,te,ee,ne){ne===!0?n.vertexAttribIPointer(M,k,z,te,ee):n.vertexAttribPointer(M,k,z,I,te,ee)}function R(M,k,z,I){x();const te=I.attributes,ee=z.getAttributes(),ne=k.defaultAttributeValues;for(const re in ee){const W=ee[re];if(W.location>=0){let de=te[re];if(de===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const he=de.normalized,ye=de.itemSize,Re=e.get(de);if(Re===void 0)continue;const je=Re.buffer,Q=Re.type,pe=Re.bytesPerElement,ge=Q===n.INT||Q===n.UNSIGNED_INT||de.gpuType===od;if(de.isInterleavedBufferAttribute){const F=de.data,ue=F.stride,se=de.offset;if(F.isInstancedInterleavedBuffer){for(let L=0;L<W.locationSize;L++)d(W.location+L,F.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let L=0;L<W.locationSize;L++)m(W.location+L);n.bindBuffer(n.ARRAY_BUFFER,je);for(let L=0;L<W.locationSize;L++)S(W.location+L,ye/W.locationSize,Q,he,ue*pe,(se+ye/W.locationSize*L)*pe,ge)}else{if(de.isInstancedBufferAttribute){for(let F=0;F<W.locationSize;F++)d(W.location+F,de.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let F=0;F<W.locationSize;F++)m(W.location+F);n.bindBuffer(n.ARRAY_BUFFER,je);for(let F=0;F<W.locationSize;F++)S(W.location+F,ye/W.locationSize,Q,he,ye*pe,ye/W.locationSize*F*pe,ge)}}else if(ne!==void 0){const he=ne[re];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(W.location,he);break;case 3:n.vertexAttrib3fv(W.location,he);break;case 4:n.vertexAttrib4fv(W.location,he);break;default:n.vertexAttrib1fv(W.location,he)}}}}T()}function O(){N();for(const M in i){const k=i[M];for(const z in k){const I=k[z];for(const te in I)u(I[te].object),delete I[te];delete k[z]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const k=i[M.id];for(const z in k){const I=k[z];for(const te in I)u(I[te].object),delete I[te];delete k[z]}delete i[M.id]}function P(M){for(const k in i){const z=i[k];if(z[M.id]===void 0)continue;const I=z[M.id];for(const te in I)u(I[te].object),delete I[te];delete z[M.id]}}function N(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Hx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)t.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:O}}function Gx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ni,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,S=T*4;let R=d.clippingState||null;l.value=R,R=u(g,h,S,p);for(let O=0;O!==S;++O)R[O]=t[O];d.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,R=p;S!==x;++S,R+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Wx(n){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=Er:a===al&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ad extends Ed{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,Zu=[.125,.215,.35,.446,.526,.582],Ui=20,ba=new Ad,Ju=new Je;let Ta=null,Aa=0,wa=0,Ra=!1;const Pi=(1+Math.sqrt(5))/2,cr=1/Pi,Qu=[new X(-Pi,cr,0),new X(Pi,cr,0),new X(-cr,0,Pi),new X(cr,0,Pi),new X(0,Pi,-cr),new X(0,Pi,cr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,wa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Do,format:mn,colorSpace:gi,depthBuffer:!1},r=tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xx(s)),this._blurMaterial=qx(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ju),u.toneMapping=li,u.autoClear=!1;const p=new xd({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new gn(new ps,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Ju),x=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const S=this._cubeSize;Ws(r,T*S,d>2?S:0,S,S),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qu[(r-s-1)%Qu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ui;m>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const d=[];let T=0;for(let P=0;P<Ui;++P){const N=P/x,y=Math.exp(-N*N/2);d.push(y),P===0?T+=y:P<m&&(T+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const R=this._sizeLods[r],O=3*R*(r>S-dr?r-S+dr:0),C=4*(this._cubeSize-R);Ws(t,O,C,3*R,2*R),l.setRenderTarget(t),l.render(f,ba)}}function Xx(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+Zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-dr?l=Zu[o-n+dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,T=new Float32Array(x*g*p),S=new Float32Array(m*g*p),R=new Float32Array(d*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,N=C>2?0:-1,y=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];T.set(y,x*g*C),S.set(h,m*g*C);const M=[C,C,C,C,C,C];R.set(M,d*g*C)}const O=new Mn;O.setAttribute("position",new _n(T,x)),O.setAttribute("uv",new _n(S,m)),O.setAttribute("faceIndex",new _n(R,d)),e.push(O),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tf(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qx(n,e,t){const i=new Float32Array(Ui),r=new X(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function nf(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function rf(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function jx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ol||l===al,u=l===Er||l===br;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Yx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $x(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let S=0,R=T.length;S<R;S+=3){const O=T[S+0],C=T[S+1],P=T[S+2];h.push(O,C,C,P,P,O)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,R=T.length/3-1;S<R;S+=3){const O=S+0,C=S+1,P=S+2;h.push(O,C,C,P,P,O)}}else return;const m=new(pd(h)?Sd:Md)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Kx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(h[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T];for(let T=0;T<x.length;T++)t.update(d,i,x[T])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Zx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Jx(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let R=0;g===!0&&(R=1),x===!0&&(R=2),m===!0&&(R=3);let O=a.attributes.position.count*R,C=1;O>e.maxTextureSize&&(C=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*C*4*f),N=new gd(P,O,C,f);N.type=ri,N.needsUpdate=!0;const y=R*4;for(let k=0;k<f;k++){const z=d[k],I=T[k],te=S[k],ee=O*C*4*k;for(let ne=0;ne<z.count;ne++){const re=ne*y;g===!0&&(r.fromBufferAttribute(z,ne),P[ee+re+0]=r.x,P[ee+re+1]=r.y,P[ee+re+2]=r.z,P[ee+re+3]=0),x===!0&&(r.fromBufferAttribute(I,ne),P[ee+re+4]=r.x,P[ee+re+5]=r.y,P[ee+re+6]=r.z,P[ee+re+7]=0),m===!0&&(r.fromBufferAttribute(te,ne),P[ee+re+8]=r.x,P[ee+re+9]=r.y,P[ee+re+10]=r.z,P[ee+re+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Ne(O,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Qx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class wd extends Nt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:xr,u!==xr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xr&&(i=Tr),i===void 0&&u===os&&(i=hs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rd=new Nt,Cd=new wd(1,1);Cd.compareFunction=dd;const Pd=new gd,Ld=new z2,Dd=new bd,sf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sf[r];if(s===void 0&&(s=new Float32Array(r),sf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function rM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),_t(t,i)}}function sM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),_t(t,i)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),_t(t,i)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Cd:Rd;t.setTexture2D(e||s,r)}function gM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function _M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function xM(n){switch(n){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return hM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return vM}}function MM(n,e){n.uniform1fv(this.addr,e)}function SM(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function yM(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function EM(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function bM(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TM(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AM(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wM(n,e){n.uniform1iv(this.addr,e)}function RM(n,e){n.uniform2iv(this.addr,e)}function CM(n,e){n.uniform3iv(this.addr,e)}function PM(n,e){n.uniform4iv(this.addr,e)}function LM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function IM(n,e){n.uniform3uiv(this.addr,e)}function UM(n,e){n.uniform4uiv(this.addr,e)}function NM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rd,s[o])}function OM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ld,s[o])}function FM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dd,s[o])}function BM(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pd,s[o])}function zM(n){switch(n){case 5126:return MM;case 35664:return SM;case 35665:return yM;case 35666:return EM;case 35674:return bM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return wM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return BM}}class kM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}}class HM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function uf(n,e){n.seq.push(e),n.map[e.id]=e}function GM(n,e,t){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),o=Ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){uf(t,c===void 0?new kM(a,n,e):new HM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new VM(a),uf(t,f)),t=f}}}class no{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ff(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const WM=37297;let XM=0;function qM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jM(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===po&&t===ho?i="LinearDisplayP3ToLinearSRGB":e===ho&&t===po&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case Io:return[i,"LinearTransferOETF"];case un:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qM(n.getShaderSource(e),o)}else return r}function YM(n,e){const t=jM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $M(n,e){let t;switch(e){case V_:t="Linear";break;case G_:t="Reinhard";break;case W_:t="OptimizedCineon";break;case X_:t="ACESFilmic";break;case j_:t="AgX";break;case Y_:t="Neutral";break;case q_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function ZM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(n){return n.replace(QM,tS)}const eS=new Map;function tS(n,e){let t=Ge[e];if(t===void 0){const i=eS.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(n){return n.replace(nS,iS)}function iS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gf(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function sS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case br:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function aS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function lS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rS(t),c=sS(t),u=oS(t),f=aS(t),h=lS(t),p=KM(t),g=ZM(s),x=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ge.tonemapping_pars_fragment:"",t.toneMapping!==li?$M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,YM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=ul(o),o=df(o,t),o=pf(o,t),a=ul(a),a=df(a,t),a=pf(a,t),o=mf(o),a=mf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+o,R=T+d+a,O=ff(r,r.VERTEX_SHADER,S),C=ff(r,r.FRAGMENT_SHADER,R);r.attachShader(x,O),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(k){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),I=r.getShaderInfoLog(O).trim(),te=r.getShaderInfoLog(C).trim();let ee=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,O,C);else{const re=hf(r,O,"vertex"),W=hf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+re+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||te==="")&&(ne=!1);ne&&(k.diagnostics={runnable:ee,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(O),r.deleteShader(C),N=new no(r,x),y=JM(r,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,WM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=C,this}let uS=0;class fS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hS(e),t.set(e,i)),i}}class hS{constructor(e){this.id=uS++,this.code=e,this.usedTimes=0}}function dS(n,e,t,i,r,s,o){const a=new _d,l=new fS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,k,z,I){const te=z.fog,ee=I.geometry,ne=y.isMeshStandardMaterial?z.environment:null,re=(y.isMeshStandardMaterial?t:e).get(y.envMap||ne),W=re&&re.mapping===Lo?re.image.height:null,de=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const he=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ye=he!==void 0?he.length:0;let Re=0;ee.morphAttributes.position!==void 0&&(Re=1),ee.morphAttributes.normal!==void 0&&(Re=2),ee.morphAttributes.color!==void 0&&(Re=3);let je,Q,pe,ge;if(de){const Ze=hn[de];je=Ze.vertexShader,Q=Ze.fragmentShader}else je=y.vertexShader,Q=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const F=n.getRenderTarget(),ue=I.isInstancedMesh===!0,se=I.isBatchedMesh===!0,L=!!y.map,be=!!y.matcap,ve=!!re,A=!!y.aoMap,w=!!y.lightMap,B=!!y.bumpMap,Y=!!y.normalMap,q=!!y.displacementMap,ae=!!y.emissiveMap,E=!!y.metalnessMap,_=!!y.roughnessMap,D=y.anisotropy>0,U=y.clearcoat>0,G=y.dispersion>0,$=y.iridescence>0,le=y.sheen>0,ie=y.transmission>0,oe=D&&!!y.anisotropyMap,Me=U&&!!y.clearcoatMap,ce=U&&!!y.clearcoatNormalMap,xe=U&&!!y.clearcoatRoughnessMap,Le=$&&!!y.iridescenceMap,Ae=$&&!!y.iridescenceThicknessMap,Ee=le&&!!y.sheenColorMap,Ue=le&&!!y.sheenRoughnessMap,ke=!!y.specularMap,Oe=!!y.specularColorMap,Ce=!!y.specularIntensityMap,v=ie&&!!y.transmissionMap,H=ie&&!!y.thicknessMap,j=!!y.gradientMap,fe=!!y.alphaMap,me=y.alphaTest>0,He=!!y.alphaHash,Xe=!!y.extensions;let lt=li;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(lt=n.toneMapping);const vt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:Q,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:se,instancing:ue,instancingColor:ue&&I.instanceColor!==null,instancingMorph:ue&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gi,alphaToCoverage:!!y.alphaToCoverage,map:L,matcap:be,envMap:ve,envMapMode:ve&&re.mapping,envMapCubeUVHeight:W,aoMap:A,lightMap:w,bumpMap:B,normalMap:Y,displacementMap:h&&q,emissiveMap:ae,normalMapObjectSpace:Y&&y.normalMapType===l2,normalMapTangentSpace:Y&&y.normalMapType===hd,metalnessMap:E,roughnessMap:_,anisotropy:D,anisotropyMap:oe,clearcoat:U,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:xe,dispersion:G,iridescence:$,iridescenceMap:Le,iridescenceThicknessMap:Ae,sheen:le,sheenColorMap:Ee,sheenRoughnessMap:Ue,specularMap:ke,specularColorMap:Oe,specularIntensityMap:Ce,transmission:ie,transmissionMap:v,thicknessMap:H,gradientMap:j,opaque:y.transparent===!1&&y.blending===vr&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:me,alphaHash:He,combine:y.combine,mapUv:L&&x(y.map.channel),aoMapUv:A&&x(y.aoMap.channel),lightMapUv:w&&x(y.lightMap.channel),bumpMapUv:B&&x(y.bumpMap.channel),normalMapUv:Y&&x(y.normalMap.channel),displacementMapUv:q&&x(y.displacementMap.channel),emissiveMapUv:ae&&x(y.emissiveMap.channel),metalnessMapUv:E&&x(y.metalnessMap.channel),roughnessMapUv:_&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:Me&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(y.sheenRoughnessMap.channel),specularMapUv:ke&&x(y.specularMap.channel),specularColorMapUv:Oe&&x(y.specularColorMap.channel),specularIntensityMapUv:Ce&&x(y.specularIntensityMap.channel),transmissionMapUv:v&&x(y.transmissionMap.channel),thicknessMapUv:H&&x(y.thicknessMap.channel),alphaMapUv:fe&&x(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Y||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!ee.attributes.uv&&(L||fe),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:L&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pn,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xe&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)M.push(k),M.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(T(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const M=g[y.type];let k;if(M){const z=hn[M];k=Z2.clone(z.uniforms)}else k=y.uniforms;return k}function O(y,M){let k;for(let z=0,I=u.length;z<I;z++){const te=u[z];if(te.cacheKey===M){k=te,++k.usedTimes;break}}return k===void 0&&(k=new cS(n,M,y,s),u.push(k)),k}function C(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:R,acquireProgram:O,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:N}}function pS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function mS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||mS),i.length>1&&i.sort(h||_f),r.length>1&&r.sort(h||_f)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new vf,n.set(i,[o])):r>=s.length?(o=new vf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function vS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xS=0;function MS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SS(n){const e=new _S,t=vS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new ut,o=new ut;function a(c,u){let f=0,h=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,x=0,m=0,d=0,T=0,S=0,R=0,O=0,C=0,P=0,N=0;c.sort(MS);const y=u===!0?Math.PI:1;for(let k=0,z=c.length;k<z;k++){const I=c[k],te=I.color,ee=I.intensity,ne=I.distance,re=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=te.r*ee*y,h+=te.g*ee*y,p+=te.b*ee*y;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],ee);N++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const de=I.shadow,he=t.get(I);he.shadowBias=de.bias,he.shadowNormalBias=de.normalBias,he.shadowRadius=de.radius,he.shadowMapSize=de.mapSize,i.directionalShadow[g]=he,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=I.shadow.matrix,S++}i.directional[g]=W,g++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(te).multiplyScalar(ee*y),W.distance=ne,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[m]=W;const de=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,de.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[m]=de.matrix,I.castShadow){const he=t.get(I);he.shadowBias=de.bias,he.shadowNormalBias=de.normalBias,he.shadowRadius=de.radius,he.shadowMapSize=de.mapSize,i.spotShadow[m]=he,i.spotShadowMap[m]=re,O++}m++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(te).multiplyScalar(ee),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[d]=W,d++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*y),W.distance=I.distance,W.decay=I.decay,I.castShadow){const de=I.shadow,he=t.get(I);he.shadowBias=de.bias,he.shadowNormalBias=de.normalBias,he.shadowRadius=de.radius,he.shadowMapSize=de.mapSize,he.shadowCameraNear=de.camera.near,he.shadowCameraFar=de.camera.far,i.pointShadow[x]=he,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=I.shadow.matrix,R++}i.point[x]=W,x++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(ee*y),W.groundColor.copy(I.groundColor).multiplyScalar(ee*y),i.hemi[T]=W,T++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==g||M.pointLength!==x||M.spotLength!==m||M.rectAreaLength!==d||M.hemiLength!==T||M.numDirectionalShadows!==S||M.numPointShadows!==R||M.numSpotShadows!==O||M.numSpotMaps!==C||M.numLightProbes!==N)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=d,i.point.length=x,i.hemi.length=T,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=O+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,M.directionalLength=g,M.pointLength=x,M.spotLength=m,M.rectAreaLength=d,M.hemiLength=T,M.numDirectionalShadows=S,M.numPointShadows=R,M.numSpotShadows=O,M.numSpotMaps=C,M.numLightProbes=N,i.version=xS++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const S=c[d];if(S.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),f++}else if(S.isSpotLight){const R=i.spot[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const R=i.point[h];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const R=i.hemi[x];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function xf(n){const e=new SS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xf(n),e.set(r,[a])):s>=o.length?(a=new xf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ES extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bS extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`;function wS(n,e,t){let i=new Hl;const r=new Ne,s=new Ne,o=new St,a=new ES({depthPacking:a2}),l=new bS,c={},u=t.maxTextureSize,f={[fi]:Ft,[Ft]:fi,[Pn]:Pn},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let d=this.type;this.render=function(C,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ai),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=d!==Cn&&this.type===Cn,te=d===Cn&&this.type!==Cn;for(let ee=0,ne=C.length;ee<ne;ee++){const re=C[ee],W=re.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||I===!0||te===!0){const ye=this.type!==Cn?{minFilter:Jt,magFilter:Jt}:{};W.map!==null&&W.map.dispose(),W.map=new ki(r.x,r.y,ye),W.map.texture.name=re.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const he=W.getViewportCount();for(let ye=0;ye<he;ye++){const Re=W.getViewport(ye);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),z.viewport(o),W.updateMatrices(re,ye),i=W.getFrustum(),R(P,N,W.camera,re,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&T(W,N),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,k)};function T(C,P){const N=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,p,x,null)}function S(C,P,N,y){let M=null;const k=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)M=k;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=M.uuid,I=P.uuid;let te=c[z];te===void 0&&(te={},c[z]=te);let ee=te[I];ee===void 0&&(ee=M.clone(),te[I]=ee,P.addEventListener("dispose",O)),M=ee}if(M.visible=P.visible,M.wireframe=P.wireframe,y===Cn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=N}return M}function R(C,P,N,y,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Cn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const I=e.update(C),te=C.material;if(Array.isArray(te)){const ee=I.groups;for(let ne=0,re=ee.length;ne<re;ne++){const W=ee[ne],de=te[W.materialIndex];if(de&&de.visible){const he=S(C,de,y,M);C.onBeforeShadow(n,C,P,N,I,he,W),n.renderBufferDirect(N,null,I,he,C,W),C.onAfterShadow(n,C,P,N,I,he,W)}}}else if(te.visible){const ee=S(C,te,y,M);C.onBeforeShadow(n,C,P,N,I,ee,null),n.renderBufferDirect(N,null,I,ee,C,null),C.onAfterShadow(n,C,P,N,I,ee,null)}}const z=C.children;for(let I=0,te=z.length;I<te;I++)R(z[I],P,N,y,M)}function O(C){C.target.removeEventListener("dispose",O);for(const N in c){const y=c[N],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function RS(n){function e(){let v=!1;const H=new St;let j=null;const fe=new St(0,0,0,0);return{setMask:function(me){j!==me&&!v&&(n.colorMask(me,me,me,me),j=me)},setLocked:function(me){v=me},setClear:function(me,He,Xe,lt,vt){vt===!0&&(me*=lt,He*=lt,Xe*=lt),H.set(me,He,Xe,lt),fe.equals(H)===!1&&(n.clearColor(me,He,Xe,lt),fe.copy(H))},reset:function(){v=!1,j=null,fe.set(-1,0,0,0)}}}function t(){let v=!1,H=null,j=null,fe=null;return{setTest:function(me){me?ge(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(me){H!==me&&!v&&(n.depthMask(me),H=me)},setFunc:function(me){if(j!==me){switch(me){case I_:n.depthFunc(n.NEVER);break;case U_:n.depthFunc(n.ALWAYS);break;case N_:n.depthFunc(n.LESS);break;case uo:n.depthFunc(n.LEQUAL);break;case O_:n.depthFunc(n.EQUAL);break;case F_:n.depthFunc(n.GEQUAL);break;case B_:n.depthFunc(n.GREATER);break;case z_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=me}},setLocked:function(me){v=me},setClear:function(me){fe!==me&&(n.clearDepth(me),fe=me)},reset:function(){v=!1,H=null,j=null,fe=null}}}function i(){let v=!1,H=null,j=null,fe=null,me=null,He=null,Xe=null,lt=null,vt=null;return{setTest:function(Ze){v||(Ze?ge(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Ze){H!==Ze&&!v&&(n.stencilMask(Ze),H=Ze)},setFunc:function(Ze,ht,it){(j!==Ze||fe!==ht||me!==it)&&(n.stencilFunc(Ze,ht,it),j=Ze,fe=ht,me=it)},setOp:function(Ze,ht,it){(He!==Ze||Xe!==ht||lt!==it)&&(n.stencilOp(Ze,ht,it),He=Ze,Xe=ht,lt=it)},setLocked:function(Ze){v=Ze},setClear:function(Ze){vt!==Ze&&(n.clearStencil(Ze),vt=Ze)},reset:function(){v=!1,H=null,j=null,fe=null,me=null,He=null,Xe=null,lt=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,m=null,d=null,T=null,S=null,R=null,O=null,C=new Je(0,0,0),P=0,N=!1,y=null,M=null,k=null,z=null,I=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ne=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),ee=ne>=1):re.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ee=ne>=2);let W=null,de={};const he=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Re=new St().fromArray(he),je=new St().fromArray(ye);function Q(v,H,j,fe){const me=new Uint8Array(4),He=n.createTexture();n.bindTexture(v,He),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<j;Xe++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(H,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(H+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return He}const pe={};pe[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(uo),B(!1),Y(Jc),ge(n.CULL_FACE),A(ai);function ge(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function F(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function ue(v,H){return u[v]!==H?(n.bindFramebuffer(v,H),u[v]=H,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=H),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=H),!0):!1}function se(v,H){let j=h,fe=!1;if(v){j=f.get(H),j===void 0&&(j=[],f.set(H,j));const me=v.textures;if(j.length!==me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let He=0,Xe=me.length;He<Xe;He++)j[He]=n.COLOR_ATTACHMENT0+He;j.length=me.length,fe=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,fe=!0);fe&&n.drawBuffers(j)}function L(v){return p!==v?(n.useProgram(v),p=v,!0):!1}const be={[Ii]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[__]:n.FUNC_REVERSE_SUBTRACT};be[v_]=n.MIN,be[x_]=n.MAX;const ve={[M_]:n.ZERO,[S_]:n.ONE,[y_]:n.SRC_COLOR,[rl]:n.SRC_ALPHA,[R_]:n.SRC_ALPHA_SATURATE,[A_]:n.DST_COLOR,[b_]:n.DST_ALPHA,[E_]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[w_]:n.ONE_MINUS_DST_COLOR,[T_]:n.ONE_MINUS_DST_ALPHA,[C_]:n.CONSTANT_COLOR,[P_]:n.ONE_MINUS_CONSTANT_COLOR,[L_]:n.CONSTANT_ALPHA,[D_]:n.ONE_MINUS_CONSTANT_ALPHA};function A(v,H,j,fe,me,He,Xe,lt,vt,Ze){if(v===ai){g===!0&&(F(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),v!==m_){if(v!==x||Ze!==N){if((m!==Ii||S!==Ii)&&(n.blendEquation(n.FUNC_ADD),m=Ii,S=Ii),Ze)switch(v){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}d=null,T=null,R=null,O=null,C.set(0,0,0),P=0,x=v,N=Ze}return}me=me||H,He=He||j,Xe=Xe||fe,(H!==m||me!==S)&&(n.blendEquationSeparate(be[H],be[me]),m=H,S=me),(j!==d||fe!==T||He!==R||Xe!==O)&&(n.blendFuncSeparate(ve[j],ve[fe],ve[He],ve[Xe]),d=j,T=fe,R=He,O=Xe),(lt.equals(C)===!1||vt!==P)&&(n.blendColor(lt.r,lt.g,lt.b,vt),C.copy(lt),P=vt),x=v,N=!1}function w(v,H){v.side===Pn?F(n.CULL_FACE):ge(n.CULL_FACE);let j=v.side===Ft;H&&(j=!j),B(j),v.blending===vr&&v.transparent===!1?A(ai):A(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),r.setMask(v.colorWrite);const fe=v.stencilWrite;o.setTest(fe),fe&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),ae(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(v){y!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),y=v)}function Y(v){v!==h_?(ge(n.CULL_FACE),v!==M&&(v===Jc?n.cullFace(n.BACK):v===d_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),M=v}function q(v){v!==k&&(ee&&n.lineWidth(v),k=v)}function ae(v,H,j){v?(ge(n.POLYGON_OFFSET_FILL),(z!==H||I!==j)&&(n.polygonOffset(H,j),z=H,I=j)):F(n.POLYGON_OFFSET_FILL)}function E(v){v?ge(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function _(v){v===void 0&&(v=n.TEXTURE0+te-1),W!==v&&(n.activeTexture(v),W=v)}function D(v,H,j){j===void 0&&(W===null?j=n.TEXTURE0+te-1:j=W);let fe=de[j];fe===void 0&&(fe={type:void 0,texture:void 0},de[j]=fe),(fe.type!==v||fe.texture!==H)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(v,H||pe[v]),fe.type=v,fe.texture=H)}function U(){const v=de[W];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ee(v){Re.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),Re.copy(v))}function Ue(v){je.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),je.copy(v))}function ke(v,H){let j=l.get(H);j===void 0&&(j=new WeakMap,l.set(H,j));let fe=j.get(v);fe===void 0&&(fe=n.getUniformBlockIndex(H,v.name),j.set(v,fe))}function Oe(v,H){const fe=l.get(H).get(v);a.get(H)!==fe&&(n.uniformBlockBinding(H,fe,v.__bindingPointIndex),a.set(H,fe))}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,de={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,m=null,d=null,T=null,S=null,R=null,O=null,C=new Je(0,0,0),P=0,N=!1,y=null,M=null,k=null,z=null,I=null,Re.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:F,bindFramebuffer:ue,drawBuffers:se,useProgram:L,setBlending:A,setMaterial:w,setFlipSided:B,setCullFace:Y,setLineWidth:q,setPolygonOffset:ae,setScissorTest:E,activeTexture:_,bindTexture:D,unbindTexture:U,compressedTexImage2D:G,compressedTexImage3D:$,texImage2D:Le,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:xe,texSubImage2D:le,texSubImage3D:ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:Me,scissor:Ee,viewport:Ue,reset:Ce}}function CS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):ls("canvas")}function x(E,_,D){let U=1;const G=ae(E);if((G.width>D||G.height>D)&&(U=D/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(U*G.width),le=Math.floor(U*G.height);f===void 0&&(f=g($,le));const ie=_?g($,le):f;return ie.width=$,ie.height=le,ie.getContext("2d").drawImage(E,0,0,$,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+$+"x"+le+")."),ie}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==Jt&&E.minFilter!==rn}function d(E){n.generateMipmap(E)}function T(E,_,D,U,G=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===n.RED&&(D===n.FLOAT&&($=n.R32F),D===n.HALF_FLOAT&&($=n.R16F),D===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.R8UI),D===n.UNSIGNED_SHORT&&($=n.R16UI),D===n.UNSIGNED_INT&&($=n.R32UI),D===n.BYTE&&($=n.R8I),D===n.SHORT&&($=n.R16I),D===n.INT&&($=n.R32I)),_===n.RG&&(D===n.FLOAT&&($=n.RG32F),D===n.HALF_FLOAT&&($=n.RG16F),D===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.RG8UI),D===n.UNSIGNED_SHORT&&($=n.RG16UI),D===n.UNSIGNED_INT&&($=n.RG32UI),D===n.BYTE&&($=n.RG8I),D===n.SHORT&&($=n.RG16I),D===n.INT&&($=n.RG32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),_===n.RGBA){const le=G?fo:tt.getTransfer(U);D===n.FLOAT&&($=n.RGBA32F),D===n.HALF_FLOAT&&($=n.RGBA16F),D===n.UNSIGNED_BYTE&&($=le===rt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),C(_),_.isVideoTexture&&u.delete(_)}function O(E){const _=E.target;_.removeEventListener("dispose",O),N(_)}function C(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,U=h.get(D);if(U){const G=U[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&P(E),Object.keys(U).length===0&&h.delete(D)}i.remove(E)}function P(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const D=E.source,U=h.get(D);delete U[_.__cacheKey],o.memory.textures--}function N(E){const _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let G=0;G<_.__webglFramebuffer[U].length;G++)n.deleteFramebuffer(_.__webglFramebuffer[U][G]);else n.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)n.deleteFramebuffer(_.__webglFramebuffer[U]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let U=0,G=D.length;U<G;U++){const $=i.get(D[U]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(D[U])}i.remove(E)}let y=0;function M(){y=0}function k(){const E=y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),y+=1,E}function z(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function I(E,_){const D=i.get(E);if(E.isVideoTexture&&Y(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const U=E.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(D,E,_);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function te(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Re(D,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function ee(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Re(D,E,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function ne(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){je(D,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const re={[ll]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},W={[Jt]:n.NEAREST,[$_]:n.NEAREST_MIPMAP_NEAREST,[Es]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},de={[c2]:n.NEVER,[m2]:n.ALWAYS,[u2]:n.LESS,[dd]:n.LEQUAL,[f2]:n.EQUAL,[p2]:n.GEQUAL,[h2]:n.GREATER,[d2]:n.NOTEQUAL};function he(E,_){if(_.type===ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===ea||_.magFilter===Es||_.magFilter===Oi||_.minFilter===rn||_.minFilter===ea||_.minFilter===Es||_.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,W[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,W[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==Es&&_.minFilter!==Oi||_.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ye(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const U=_.source;let G=h.get(U);G===void 0&&(G={},h.set(U,G));const $=z(_);if($!==E.__cacheKey){G[$]===void 0&&(G[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),G[$].usedTimes++;const le=G[E.__cacheKey];le!==void 0&&(G[E.__cacheKey].usedTimes--,le.usedTimes===0&&P(_)),E.__cacheKey=$,E.__webglTexture=G[$].texture}return D}function Re(E,_,D){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);const G=ye(E,_),$=_.source;t.bindTexture(U,E.__webglTexture,n.TEXTURE0+D);const le=i.get($);if($.version!==le.__version||G===!0){t.activeTexture(n.TEXTURE0+D);const ie=tt.getPrimaries(tt.workingColorSpace),oe=_.colorSpace===ii?null:tt.getPrimaries(_.colorSpace),Me=_.colorSpace===ii||ie===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ce=x(_.image,!1,r.maxTextureSize);ce=q(_,ce);const xe=s.convert(_.format,_.colorSpace),Le=s.convert(_.type);let Ae=T(_.internalFormat,xe,Le,_.colorSpace,_.isVideoTexture);he(U,_);let Ee;const Ue=_.mipmaps,ke=_.isVideoTexture!==!0,Oe=le.__version===void 0||G===!0,Ce=$.dataReady,v=S(_,ce);if(_.isDepthTexture)Ae=n.DEPTH_COMPONENT16,_.type===ri?Ae=n.DEPTH_COMPONENT32F:_.type===Tr?Ae=n.DEPTH_COMPONENT24:_.type===hs&&(Ae=n.DEPTH24_STENCIL8),Oe&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ae,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,xe,Le,null));else if(_.isDataTexture)if(Ue.length>0){ke&&Oe&&t.texStorage2D(n.TEXTURE_2D,v,Ae,Ue[0].width,Ue[0].height);for(let H=0,j=Ue.length;H<j;H++)Ee=Ue[H],ke?Ce&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Ee.width,Ee.height,xe,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,H,Ae,Ee.width,Ee.height,0,xe,Le,Ee.data);_.generateMipmaps=!1}else ke?(Oe&&t.texStorage2D(n.TEXTURE_2D,v,Ae,ce.width,ce.height),Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,Le,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ce.width,ce.height,0,xe,Le,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,v,Ae,Ue[0].width,Ue[0].height,ce.depth);for(let H=0,j=Ue.length;H<j;H++)Ee=Ue[H],_.format!==mn?xe!==null?ke?Ce&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Ee.width,Ee.height,ce.depth,xe,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Ae,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,Ee.width,Ee.height,ce.depth,xe,Le,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Ae,Ee.width,Ee.height,ce.depth,0,xe,Le,Ee.data)}else{ke&&Oe&&t.texStorage2D(n.TEXTURE_2D,v,Ae,Ue[0].width,Ue[0].height);for(let H=0,j=Ue.length;H<j;H++)Ee=Ue[H],_.format!==mn?xe!==null?ke?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Ae,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Ce&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Ee.width,Ee.height,xe,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,H,Ae,Ee.width,Ee.height,0,xe,Le,Ee.data)}else if(_.isDataArrayTexture)ke?(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,v,Ae,ce.width,ce.height,ce.depth),Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Le,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ce.width,ce.height,ce.depth,0,xe,Le,ce.data);else if(_.isData3DTexture)ke?(Oe&&t.texStorage3D(n.TEXTURE_3D,v,Ae,ce.width,ce.height,ce.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Le,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ce.width,ce.height,ce.depth,0,xe,Le,ce.data);else if(_.isFramebufferTexture){if(Oe)if(ke)t.texStorage2D(n.TEXTURE_2D,v,Ae,ce.width,ce.height);else{let H=ce.width,j=ce.height;for(let fe=0;fe<v;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ae,H,j,0,xe,Le,null),H>>=1,j>>=1}}else if(Ue.length>0){if(ke&&Oe){const H=ae(Ue[0]);t.texStorage2D(n.TEXTURE_2D,v,Ae,H.width,H.height)}for(let H=0,j=Ue.length;H<j;H++)Ee=Ue[H],ke?Ce&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,xe,Le,Ee):t.texImage2D(n.TEXTURE_2D,H,Ae,xe,Le,Ee);_.generateMipmaps=!1}else if(ke){if(Oe){const H=ae(ce);t.texStorage2D(n.TEXTURE_2D,v,Ae,H.width,H.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Le,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ae,xe,Le,ce);m(_)&&d(U),le.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function je(E,_,D){if(_.image.length!==6)return;const U=ye(E,_),G=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const $=i.get(G);if(G.version!==$.__version||U===!0){t.activeTexture(n.TEXTURE0+D);const le=tt.getPrimaries(tt.workingColorSpace),ie=_.colorSpace===ii?null:tt.getPrimaries(_.colorSpace),oe=_.colorSpace===ii||le===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let j=0;j<6;j++)!Me&&!ce?xe[j]=x(_.image[j],!0,r.maxCubemapSize):xe[j]=ce?_.image[j].image:_.image[j],xe[j]=q(_,xe[j]);const Le=xe[0],Ae=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type),Ue=T(_.internalFormat,Ae,Ee,_.colorSpace),ke=_.isVideoTexture!==!0,Oe=$.__version===void 0||U===!0,Ce=G.dataReady;let v=S(_,Le);he(n.TEXTURE_CUBE_MAP,_);let H;if(Me){ke&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,v,Ue,Le.width,Le.height);for(let j=0;j<6;j++){H=xe[j].mipmaps;for(let fe=0;fe<H.length;fe++){const me=H[fe];_.format!==mn?Ae!==null?ke?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,me.width,me.height,Ae,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,me.width,me.height,Ae,Ee,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ue,me.width,me.height,0,Ae,Ee,me.data)}}}else{if(H=_.mipmaps,ke&&Oe){H.length>0&&v++;const j=ae(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,v,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(ce){ke?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe[j].width,xe[j].height,Ae,Ee,xe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,xe[j].width,xe[j].height,0,Ae,Ee,xe[j].data);for(let fe=0;fe<H.length;fe++){const He=H[fe].image[j].image;ke?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,He.width,He.height,Ae,Ee,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ue,He.width,He.height,0,Ae,Ee,He.data)}}else{ke?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,Ee,xe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Ae,Ee,xe[j]);for(let fe=0;fe<H.length;fe++){const me=H[fe];ke?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Ae,Ee,me.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ue,Ae,Ee,me.image[j])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),$.__version=G.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,D,U,G,$){const le=s.convert(D.format,D.colorSpace),ie=s.convert(D.type),oe=T(D.internalFormat,le,ie,D.colorSpace);if(!i.get(_).__hasExternalTextures){const ce=Math.max(1,_.width>>$),xe=Math.max(1,_.height>>$);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,$,oe,ce,xe,_.depth,0,le,ie,null):t.texImage2D(G,$,oe,ce,xe,0,le,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),B(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,G,i.get(D).__webglTexture,0,w(_)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,G,i.get(D).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let U=n.DEPTH_COMPONENT24;if(D||B(_)){const G=_.depthTexture;G&&G.isDepthTexture&&(G.type===ri?U=n.DEPTH_COMPONENT32F:G.type===Tr&&(U=n.DEPTH_COMPONENT24));const $=w(_);B(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,U,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,U,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,U,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){const U=w(_);D&&B(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,U,n.DEPTH24_STENCIL8,_.width,_.height):B(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const U=_.textures;for(let G=0;G<U.length;G++){const $=U[G],le=s.convert($.format,$.colorSpace),ie=s.convert($.type),oe=T($.internalFormat,le,ie,$.colorSpace),Me=w(_);D&&B(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,oe,_.width,_.height):B(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),I(_.depthTexture,0);const U=i.get(_.depthTexture).__webglTexture,G=w(_);if(_.depthTexture.format===xr)B(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(_.depthTexture.format===os)B(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function F(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ge(_.__webglFramebuffer,E)}else if(D){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]=n.createRenderbuffer(),pe(_.__webglDepthbuffer[U],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),pe(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,_,D){const U=i.get(E);_!==void 0&&Q(U.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&F(E)}function se(E){const _=E.texture,D=i.get(E),U=i.get(_);E.addEventListener("dispose",O);const G=E.textures,$=E.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,o.memory.textures++),$){D.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ie]=[];for(let oe=0;oe<_.mipmaps.length;oe++)D.__webglFramebuffer[ie][oe]=n.createFramebuffer()}else D.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)D.__webglFramebuffer[ie]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(le)for(let ie=0,oe=G.length;ie<oe;ie++){const Me=i.get(G[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&B(E)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ie=0;ie<G.length;ie++){const oe=G[ie];D.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const Me=s.convert(oe.format,oe.colorSpace),ce=s.convert(oe.type),xe=T(oe.internalFormat,Me,ce,oe.colorSpace,E.isXRRenderTarget===!0),Le=w(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,D.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),he(n.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)Q(D.__webglFramebuffer[ie][oe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else Q(D.__webglFramebuffer[ie],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ie=0,oe=G.length;ie<oe;ie++){const Me=G[ie],ce=i.get(Me);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),he(n.TEXTURE_2D,Me),Q(D.__webglFramebuffer,E,Me,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),m(Me)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,U.__webglTexture),he(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)Q(D.__webglFramebuffer[oe],E,_,n.COLOR_ATTACHMENT0,ie,oe);else Q(D.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ie,0);m(_)&&d(ie),t.unbindTexture()}E.depthBuffer&&F(E)}function L(E){const _=E.textures;for(let D=0,U=_.length;D<U;D++){const G=_[D];if(m(G)){const $=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(G).__webglTexture;t.bindTexture($,le),d($),t.unbindTexture()}}}const be=[],ve=[];function A(E){if(E.samples>0){if(B(E)===!1){const _=E.textures,D=E.width,U=E.height;let G=n.COLOR_BUFFER_BIT;const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(E),ie=_.length>1;if(ie)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const Me=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,D,U,0,0,D,U,G,n.NEAREST),l===!0&&(be.length=0,ve.length=0,be.push(n.COLOR_ATTACHMENT0+oe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(be.push($),ve.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const Me=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(E){return Math.min(r.maxSamples,E.samples)}function B(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function q(E,_){const D=E.colorSpace,U=E.format,G=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==gi&&D!==ii&&(tt.getTransfer(D)===rt?(U!==mn||G!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=te,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=ue,this.setupRenderTarget=se,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=B}function PS(n,e){function t(i,r=ii){let s;const o=tt.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===ad)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return n.UNSIGNED_SHORT_5_5_5_1;if(i===J_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===K_)return n.BYTE;if(i===Z_)return n.SHORT;if(i===sd)return n.UNSIGNED_SHORT;if(i===od)return n.INT;if(i===Tr)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Do)return n.HALF_FLOAT;if(i===Q_)return n.ALPHA;if(i===e2)return n.RGB;if(i===mn)return n.RGBA;if(i===t2)return n.LUMINANCE;if(i===n2)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===i2)return n.RED;if(i===cd)return n.RED_INTEGER;if(i===r2)return n.RG;if(i===ud)return n.RG_INTEGER;if(i===fd)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===ra)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ou||i===au||i===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ou||i===au)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===Mu||i===Su||i===yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===du)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===Eu||i===bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sa)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s2||i===Tu||i===Au||i===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class LS extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
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

}`;class NS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new di({vertexShader:IS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gn(new No(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class OS extends Gi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=new NS,m=t.getContextAttributes();let d=null,T=null;const S=[],R=[],O=new Ne;let C=null;const P=new $t;P.layers.enable(1),P.viewport=new St;const N=new $t;N.layers.enable(2),N.viewport=new St;const y=[P,N],M=new LS;M.layers.enable(1),M.layers.enable(2);let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=S[Q];return pe===void 0&&(pe=new Pa,S[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=S[Q];return pe===void 0&&(pe=new Pa,S[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=S[Q];return pe===void 0&&(pe=new Pa,S[Q]=pe),pe.getHandSpace()};function I(Q){const pe=R.indexOf(Q.inputSource);if(pe===-1)return;const ge=S[pe];ge!==void 0&&(ge.update(Q.inputSource,Q.frame,c||o),ge.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<S.length;Q++){const pe=R[Q];pe!==null&&(R[Q]=null,S[Q].disconnect(pe))}k=null,z=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,T=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ki(p.framebufferWidth,p.framebufferHeight,{format:mn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,ge=null,F=null;m.depth&&(F=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?os:xr,ge=m.stencil?hs:Tr);const ue={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ki(h.textureWidth,h.textureHeight,{format:mn,type:hi,depthTexture:new wd(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(Q){for(let pe=0;pe<Q.removed.length;pe++){const ge=Q.removed[pe],F=R.indexOf(ge);F>=0&&(R[F]=null,S[F].disconnect(ge))}for(let pe=0;pe<Q.added.length;pe++){const ge=Q.added[pe];let F=R.indexOf(ge);if(F===-1){for(let se=0;se<S.length;se++)if(se>=R.length){R.push(ge),F=se;break}else if(R[se]===null){R[se]=ge,F=se;break}if(F===-1)break}const ue=S[F];ue&&ue.connect(ge)}}const ne=new X,re=new X;function W(Q,pe,ge){ne.setFromMatrixPosition(pe.matrixWorld),re.setFromMatrixPosition(ge.matrixWorld);const F=ne.distanceTo(re),ue=pe.projectionMatrix.elements,se=ge.projectionMatrix.elements,L=ue[14]/(ue[10]-1),be=ue[14]/(ue[10]+1),ve=(ue[9]+1)/ue[5],A=(ue[9]-1)/ue[5],w=(ue[8]-1)/ue[0],B=(se[8]+1)/se[0],Y=L*w,q=L*B,ae=F/(-w+B),E=ae*-w;pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(E),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const _=L+ae,D=be+ae,U=Y-E,G=q+(F-E),$=ve*be/D*_,le=A*be/D*_;Q.projectionMatrix.makePerspective(U,G,$,le,_,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function de(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;x.texture!==null&&(Q.near=x.depthNear,Q.far=x.depthFar),M.near=N.near=P.near=Q.near,M.far=N.far=P.far=Q.far,(k!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,z=M.far,P.near=k,P.far=z,N.near=k,N.far=z,P.updateProjectionMatrix(),N.updateProjectionMatrix(),Q.updateProjectionMatrix());const pe=Q.parent,ge=M.cameras;de(M,pe);for(let F=0;F<ge.length;F++)de(ge[F],pe);ge.length===2?W(M,P,N):M.projectionMatrix.copy(P.projectionMatrix),he(Q,M,pe)};function he(Q,pe,ge){ge===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(ge.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=as*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null};let ye=null;function Re(Q,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let F=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let se=0;se<ge.length;se++){const L=ge[se];let be=null;if(p!==null)be=p.getViewport(L);else{const A=f.getViewSubImage(h,L);be=A.viewport,se===0&&(e.setRenderTargetTextures(T,A.colorTexture,h.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(T))}let ve=y[se];ve===void 0&&(ve=new $t,ve.layers.enable(se),ve.viewport=new St,y[se]=ve),ve.matrix.fromArray(L.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(L.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(be.x,be.y,be.width,be.height),se===0&&(M.matrix.copy(ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(ve)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const se=f.getDepthInformation(ge[0]);se&&se.isValid&&se.texture&&x.init(e,se,r.renderState)}}for(let ge=0;ge<S.length;ge++){const F=R[ge],ue=S[ge];F!==null&&ue!==void 0&&ue.update(F,pe,c||o)}x.render(e,M),ye&&ye(Q,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const je=new Td;je.setAnimationLoop(Re),this.setAnimationLoop=function(Q){ye=Q},this.dispose=function(){}}}const Ri=new xn,FS=new ut;function BS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,yd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,S,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,R)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ft&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ft&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),S=T.envMap,R=T.envMapRotation;if(S&&(m.envMap.value=S,Ri.copy(R),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Ri)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const O=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*O,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const R=S.program;i.uniformBlockBinding(T,R)}function c(T,S){let R=r[T.id];R===void 0&&(g(T),R=u(T),r[T.id]=R,T.addEventListener("dispose",m));const O=S.program;i.updateUBOMapping(T,O);const C=e.render.frame;s[T.id]!==C&&(h(T),s[T.id]=C)}function u(T){const S=f();T.__bindingPointIndex=S;const R=n.createBuffer(),O=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,R),R}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=r[T.id],R=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,P=R.length;C<P;C++){const N=Array.isArray(R[C])?R[C]:[R[C]];for(let y=0,M=N.length;y<M;y++){const k=N[y];if(p(k,C,y,O)===!0){const z=k.__offset,I=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let ee=0;ee<I.length;ee++){const ne=I[ee],re=x(ne);typeof ne=="number"||typeof ne=="boolean"?(k.__data[0]=ne,n.bufferSubData(n.UNIFORM_BUFFER,z+te,k.__data)):ne.isMatrix3?(k.__data[0]=ne.elements[0],k.__data[1]=ne.elements[1],k.__data[2]=ne.elements[2],k.__data[3]=0,k.__data[4]=ne.elements[3],k.__data[5]=ne.elements[4],k.__data[6]=ne.elements[5],k.__data[7]=0,k.__data[8]=ne.elements[6],k.__data[9]=ne.elements[7],k.__data[10]=ne.elements[8],k.__data[11]=0):(ne.toArray(k.__data,te),te+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,R,O){const C=T.value,P=S+"_"+R;if(O[P]===void 0)return typeof C=="number"||typeof C=="boolean"?O[P]=C:O[P]=C.clone(),!0;{const N=O[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return O[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(T){const S=T.uniforms;let R=0;const O=16;for(let P=0,N=S.length;P<N;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,k=y.length;M<k;M++){const z=y[M],I=Array.isArray(z.value)?z.value:[z.value];for(let te=0,ee=I.length;te<ee;te++){const ne=I[te],re=x(ne),W=R%O;W!==0&&O-W<re.boundary&&(R+=O-W),z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=R,R+=re.storage}}}const C=R%O;return C>0&&(R+=O-C),T.__size=R,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const R=o.indexOf(S.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class kS{constructor(e={}){const{canvas:t=D2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const S=this;let R=!1,O=0,C=0,P=null,N=-1,y=null;const M=new St,k=new St;let z=null;const I=new Je(0);let te=0,ee=t.width,ne=t.height,re=1,W=null,de=null;const he=new St(0,0,ee,ne),ye=new St(0,0,ee,ne);let Re=!1;const je=new Hl;let Q=!1,pe=!1;const ge=new ut,F=new X,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return P===null?re:1}let L=i;function be(b,V){return t.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",v,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",j,!1),L===null){const V="webgl2";if(L=be(V,b),L===null)throw be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,A,w,B,Y,q,ae,E,_,D,U,G,$,le,ie,oe,Me,ce,xe,Le,Ae,Ee,Ue,ke;function Oe(){ve=new Yx(L),ve.init(),Ee=new PS(L,ve),A=new Vx(L,ve,e,Ee),w=new RS(L),B=new Zx(L),Y=new pS,q=new CS(L,ve,w,Y,A,Ee,B),ae=new Wx(S),E=new jx(S),_=new rv(L),Ue=new kx(L,_),D=new $x(L,_,B,Ue),U=new Qx(L,D,_,B),xe=new Jx(L,A,q),oe=new Gx(Y),G=new dS(S,ae,E,ve,A,Ue,oe),$=new BS(S,Y),le=new gS,ie=new yS(ve),ce=new zx(S,ae,E,w,U,h,l),Me=new wS(S,U,A),ke=new zS(L,B,A,w),Le=new Hx(L,ve,B),Ae=new Kx(L,ve,B),B.programs=G.programs,S.capabilities=A,S.extensions=ve,S.properties=Y,S.renderLists=le,S.shadowMap=Me,S.state=w,S.info=B}Oe();const Ce=new OS(S,L);this.xr=Ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(ee,ne,!1))},this.getSize=function(b){return b.set(ee,ne)},this.setSize=function(b,V,J=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,ne=V,t.width=Math.floor(b*re),t.height=Math.floor(V*re),J===!0&&(t.style.width=b+"px",t.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(ee*re,ne*re).floor()},this.setDrawingBufferSize=function(b,V,J){ee=b,ne=V,re=J,t.width=Math.floor(b*J),t.height=Math.floor(V*J),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,V,J,K){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,V,J,K),w.viewport(M.copy(he).multiplyScalar(re).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,V,J,K){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,V,J,K),w.scissor(k.copy(ye).multiplyScalar(re).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(b){w.setScissorTest(Re=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(b=!0,V=!0,J=!0){let K=0;if(b){let Z=!1;if(P!==null){const Se=P.texture.format;Z=Se===fd||Se===ud||Se===cd}if(Z){const Se=P.texture.type,Te=Se===hi||Se===Tr||Se===sd||Se===hs||Se===ad||Se===ld,we=ce.getClearColor(),De=ce.getClearAlpha(),Fe=we.r,Ve=we.g,qe=we.b;Te?(p[0]=Fe,p[1]=Ve,p[2]=qe,p[3]=De,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Fe,g[1]=Ve,g[2]=qe,g[3]=De,L.clearBufferiv(L.COLOR,0,g))}else K|=L.COLOR_BUFFER_BIT}V&&(K|=L.DEPTH_BUFFER_BIT),J&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",v,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",j,!1),le.dispose(),ie.dispose(),Y.dispose(),ae.dispose(),E.dispose(),U.dispose(),Ue.dispose(),ke.dispose(),G.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ze),Ce.removeEventListener("sessionend",ht),it.stop()};function v(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=B.autoReset,V=Me.enabled,J=Me.autoUpdate,K=Me.needsUpdate,Z=Me.type;Oe(),B.autoReset=b,Me.enabled=V,Me.autoUpdate=J,Me.needsUpdate=K,Me.type=Z}function j(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const V=b.target;V.removeEventListener("dispose",fe),me(V)}function me(b){He(b),Y.remove(b)}function He(b){const V=Y.get(b).programs;V!==void 0&&(V.forEach(function(J){G.releaseProgram(J)}),b.isShaderMaterial&&G.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,J,K,Z,Se){V===null&&(V=ue);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,we=Od(b,V,J,K,Z);w.setMaterial(K,Te);let De=J.index,Fe=1;if(K.wireframe===!0){if(De=D.getWireframeAttribute(J),De===void 0)return;Fe=2}const Ve=J.drawRange,qe=J.attributes.position;let dt=Ve.start*Fe,Tt=(Ve.start+Ve.count)*Fe;Se!==null&&(dt=Math.max(dt,Se.start*Fe),Tt=Math.min(Tt,(Se.start+Se.count)*Fe)),De!==null?(dt=Math.max(dt,0),Tt=Math.min(Tt,De.count)):qe!=null&&(dt=Math.max(dt,0),Tt=Math.min(Tt,qe.count));const zt=Tt-dt;if(zt<0||zt===1/0)return;Ue.setup(Z,K,we,J,De);let yn,Qe=Le;if(De!==null&&(yn=_.get(De),Qe=Ae,Qe.setIndex(yn)),Z.isMesh)K.wireframe===!0?(w.setLineWidth(K.wireframeLinewidth*se()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(Z.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),w.setLineWidth(Be*se()),Z.isLineSegments?Qe.setMode(L.LINES):Z.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else Z.isPoints?Qe.setMode(L.POINTS):Z.isSprite&&Qe.setMode(L.TRIANGLES);if(Z.isBatchedMesh)Z._multiDrawInstances!==null?Qe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances):Qe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Qe.renderInstances(dt,zt,Z.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Dr=Math.min(J.instanceCount,Be);Qe.renderInstances(dt,zt,Dr)}else Qe.render(dt,zt)};function Xe(b,V,J){b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,ms(b,V,J),b.side=fi,b.needsUpdate=!0,ms(b,V,J),b.side=Pn):ms(b,V,J)}this.compile=function(b,V,J=null){J===null&&(J=b),m=ie.get(J),m.init(V),T.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),b!==J&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(S._useLegacyLights);const K=new Set;return b.traverse(function(Z){const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const we=Se[Te];Xe(we,J,Z),K.add(we)}else Xe(Se,J,Z),K.add(Se)}),T.pop(),m=null,K},this.compileAsync=function(b,V,J=null){const K=this.compile(b,V,J);return new Promise(Z=>{function Se(){if(K.forEach(function(Te){Y.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){Z(b);return}setTimeout(Se,10)}ve.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let lt=null;function vt(b){lt&&lt(b)}function Ze(){it.stop()}function ht(){it.start()}const it=new Td;it.setAnimationLoop(vt),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(b){lt=b,Ce.setAnimationLoop(b),b===null?it.stop():it.start()},Ce.addEventListener("sessionstart",Ze),Ce.addEventListener("sessionend",ht),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(V),V=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,V,P),m=ie.get(b,T.length),m.init(V),T.push(m),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),je.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,Q=oe.init(this.clippingPlanes,pe),x=le.get(b,d.length),x.init(),d.push(x),On(b,V,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(W,de);const J=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1;J&&ce.addToRenderList(x,b),this.info.render.frame++,Q===!0&&oe.beginShadows();const K=m.state.shadowsArray;Me.render(K,b,V),Q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,Se=x.transmissive;if(m.setupLights(S._useLegacyLights),V.isArrayCamera){const Te=V.cameras;if(Se.length>0)for(let we=0,De=Te.length;we<De;we++){const Fe=Te[we];Fn(Z,Se,b,Fe)}J&&ce.render(b);for(let we=0,De=Te.length;we<De;we++){const Fe=Te[we];Xt(x,b,Fe,Fe.viewport)}}else Se.length>0&&Fn(Z,Se,b,V),J&&ce.render(b),Xt(x,b,V);P!==null&&(q.updateMultisampleRenderTarget(P),q.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(S,b,V),Ue.resetDefaultState(),N=-1,y=null,T.pop(),T.length>0?(m=T[T.length-1],Q===!0&&oe.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function On(b,V,J,K){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||je.intersectsSprite(b)){K&&F.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const Te=U.update(b),we=b.material;we.visible&&x.push(b,Te,we,J,F.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||je.intersectsObject(b))){const Te=U.update(b),we=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),F.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),F.copy(Te.boundingSphere.center)),F.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const De=Te.groups;for(let Fe=0,Ve=De.length;Fe<Ve;Fe++){const qe=De[Fe],dt=we[qe.materialIndex];dt&&dt.visible&&x.push(b,Te,dt,J,F.z,qe)}}else we.visible&&x.push(b,Te,we,J,F.z,null)}}const Se=b.children;for(let Te=0,we=Se.length;Te<we;Te++)On(Se[Te],V,J,K)}function Xt(b,V,J,K){const Z=b.opaque,Se=b.transmissive,Te=b.transparent;m.setupLightsView(J),Q===!0&&oe.setGlobalState(S.clippingPlanes,J),K&&w.viewport(M.copy(K)),Z.length>0&&Sn(Z,V,J),Se.length>0&&Sn(Se,V,J),Te.length>0&&Sn(Te,V,J),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Fn(b,V,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new ki(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Do:hi,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Se=m.state.transmissionRenderTarget[K.id],Te=K.viewport||M;Se.setSize(Te.z,Te.w);const we=S.getRenderTarget();S.setRenderTarget(Se),S.getClearColor(I),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear();const De=S.toneMapping;S.toneMapping=li;const Fe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),Q===!0&&oe.setGlobalState(S.clippingPlanes,K),Sn(b,J,K),q.updateMultisampleRenderTarget(Se),q.updateRenderTargetMipmap(Se),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let qe=0,dt=V.length;qe<dt;qe++){const Tt=V[qe],zt=Tt.object,yn=Tt.geometry,Qe=Tt.material,Be=Tt.group;if(Qe.side===Pn&&zt.layers.test(K.layers)){const Dr=Qe.side;Qe.side=Ft,Qe.needsUpdate=!0,Lr(zt,J,K,yn,Qe,Be),Qe.side=Dr,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(Se),q.updateRenderTargetMipmap(Se))}S.setRenderTarget(we),S.setClearColor(I,te),Fe!==void 0&&(K.viewport=Fe),S.toneMapping=De}function Sn(b,V,J){const K=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Se=b.length;Z<Se;Z++){const Te=b[Z],we=Te.object,De=Te.geometry,Fe=K===null?Te.material:K,Ve=Te.group;we.layers.test(J.layers)&&Lr(we,V,J,De,Fe,Ve)}}function Lr(b,V,J,K,Z,Se){b.onBeforeRender(S,V,J,K,Z,Se),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(S,V,J,K,b,Se),Z.transparent===!0&&Z.side===Pn&&Z.forceSinglePass===!1?(Z.side=Ft,Z.needsUpdate=!0,S.renderBufferDirect(J,V,K,Z,b,Se),Z.side=fi,Z.needsUpdate=!0,S.renderBufferDirect(J,V,K,Z,b,Se),Z.side=Pn):S.renderBufferDirect(J,V,K,Z,b,Se),b.onAfterRender(S,V,J,K,Z,Se)}function ms(b,V,J){V.isScene!==!0&&(V=ue);const K=Y.get(b),Z=m.state.lights,Se=m.state.shadowsArray,Te=Z.state.version,we=G.getParameters(b,Z.state,Se,V,J),De=G.getProgramCacheKey(we);let Fe=K.programs;K.environment=b.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(b.isMeshStandardMaterial?E:ae).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",fe),Fe=new Map,K.programs=Fe);let Ve=Fe.get(De);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Te)return jl(b,we),Ve}else we.uniforms=G.getUniforms(b),b.onBuild(J,we,S),b.onBeforeCompile(we,S),Ve=G.acquireProgram(we,De),Fe.set(De,Ve),K.uniforms=we.uniforms;const qe=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=oe.uniform),jl(b,we),K.needsLights=Bd(b),K.lightsStateVersion=Te,K.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function ql(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=no.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function jl(b,V){const J=Y.get(b);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Od(b,V,J,K,Z){V.isScene!==!0&&(V=ue),q.resetTextureUnits();const Se=V.fog,Te=K.isMeshStandardMaterial?V.environment:null,we=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gi,De=(K.isMeshStandardMaterial?E:ae).get(K.envMap||Te),Fe=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color;let zt=li;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(zt=S.toneMapping);const yn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qe=yn!==void 0?yn.length:0,Be=Y.get(K),Dr=m.state.lights;if(Q===!0&&(pe===!0||b!==y)){const qt=b===y&&K.id===N;oe.setState(K,b,qt)}let ot=!1;K.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Dr.state.version||Be.outputColorSpace!==we||Z.isBatchedMesh&&Be.batching===!1||!Z.isBatchedMesh&&Be.batching===!0||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Be.instancingMorph===!1&&Z.morphTexture!==null||Be.envMap!==De||K.fog===!0&&Be.fog!==Se||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==oe.numPlanes||Be.numIntersection!==oe.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Ve||Be.morphTargets!==qe||Be.morphNormals!==dt||Be.morphColors!==Tt||Be.toneMapping!==zt||Be.morphTargetsCount!==Qe)&&(ot=!0):(ot=!0,Be.__version=K.version);let vi=Be.currentProgram;ot===!0&&(vi=ms(K,V,Z));let Yl=!1,Ir=!1,Fo=!1;const At=vi.getUniforms(),Bn=Be.uniforms;if(w.useProgram(vi.program)&&(Yl=!0,Ir=!0,Fo=!0),K.id!==N&&(N=K.id,Ir=!0),Yl||y!==b){At.setValue(L,"projectionMatrix",b.projectionMatrix),At.setValue(L,"viewMatrix",b.matrixWorldInverse);const qt=At.map.cameraPosition;qt!==void 0&&qt.setValue(L,F.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ir=!0,Fo=!0)}if(Z.isSkinnedMesh){At.setOptional(L,Z,"bindMatrix"),At.setOptional(L,Z,"bindMatrixInverse");const qt=Z.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),At.setValue(L,"boneTexture",qt.boneTexture,q))}Z.isBatchedMesh&&(At.setOptional(L,Z,"batchingTexture"),At.setValue(L,"batchingTexture",Z._matricesTexture,q));const Bo=J.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&xe.update(Z,J,vi),(Ir||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,At.setValue(L,"receiveShadow",Z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bn.envMap.value=De,Bn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),Ir&&(At.setValue(L,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&Fd(Bn,Fo),Se&&K.fog===!0&&$.refreshFogUniforms(Bn,Se),$.refreshMaterialUniforms(Bn,K,re,ne,m.state.transmissionRenderTarget[b.id]),no.upload(L,ql(Be),Bn,q)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(no.upload(L,ql(Be),Bn,q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(L,"center",Z.center),At.setValue(L,"modelViewMatrix",Z.modelViewMatrix),At.setValue(L,"normalMatrix",Z.normalMatrix),At.setValue(L,"modelMatrix",Z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const qt=K.uniformsGroups;for(let zo=0,zd=qt.length;zo<zd;zo++){const $l=qt[zo];ke.update($l,vi),ke.bind($l,vi)}}return vi}function Fd(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Bd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,V,J){Y.get(b.texture).__webglTexture=V,Y.get(b.depthTexture).__webglTexture=J;const K=Y.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const J=Y.get(b);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,J=0){P=b,O=V,C=J;let K=!0,Z=null,Se=!1,Te=!1;if(b){const De=Y.get(b);De.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(L.FRAMEBUFFER,null),K=!1):De.__webglFramebuffer===void 0?q.setupRenderTarget(b):De.__hasExternalTextures&&q.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const Ve=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?Z=Ve[V][J]:Z=Ve[V],Se=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?Z=Y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[J]:Z=Ve,M.copy(b.viewport),k.copy(b.scissor),z=b.scissorTest}else M.copy(he).multiplyScalar(re).floor(),k.copy(ye).multiplyScalar(re).floor(),z=Re;if(w.bindFramebuffer(L.FRAMEBUFFER,Z)&&K&&w.drawBuffers(b,Z),w.viewport(M),w.scissor(k),w.setScissorTest(z),Se){const De=Y.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,De.__webglTexture,J)}else if(Te){const De=Y.get(b.texture),Fe=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,J||0,Fe)}N=-1},this.readRenderTargetPixels=function(b,V,J,K,Z,Se,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){w.bindFramebuffer(L.FRAMEBUFFER,we);try{const De=b.texture,Fe=De.format,Ve=De.type;if(!A.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-K&&J>=0&&J<=b.height-Z&&L.readPixels(V,J,K,Z,Ee.convert(Fe),Ee.convert(Ve),Se)}finally{const De=P!==null?Y.get(P).__webglFramebuffer:null;w.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(b,V,J=0){const K=Math.pow(2,-J),Z=Math.floor(V.image.width*K),Se=Math.floor(V.image.height*K);q.setTexture2D(V,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,b.x,b.y,Z,Se),w.unbindTexture()},this.copyTextureToTexture=function(b,V,J,K=0){const Z=V.image.width,Se=V.image.height,Te=Ee.convert(J.format),we=Ee.convert(J.type);q.setTexture2D(J,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,K,b.x,b.y,Z,Se,Te,we,V.image.data):V.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,K,b.x,b.y,V.mipmaps[0].width,V.mipmaps[0].height,Te,V.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,K,b.x,b.y,Te,we,V.image),K===0&&J.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(b,V,J,K,Z=0){const Se=b.max.x-b.min.x,Te=b.max.y-b.min.y,we=b.max.z-b.min.z,De=Ee.convert(K.format),Fe=Ee.convert(K.type);let Ve;if(K.isData3DTexture)q.setTexture3D(K,0),Ve=L.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)q.setTexture2DArray(K,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment);const qe=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tt=L.getParameter(L.UNPACK_SKIP_PIXELS),zt=L.getParameter(L.UNPACK_SKIP_ROWS),yn=L.getParameter(L.UNPACK_SKIP_IMAGES),Qe=J.isCompressedTexture?J.mipmaps[Z]:J.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),J.isDataTexture||J.isData3DTexture?L.texSubImage3D(Ve,Z,V.x,V.y,V.z,Se,Te,we,De,Fe,Qe.data):K.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,Z,V.x,V.y,V.z,Se,Te,we,De,Qe.data):L.texSubImage3D(Ve,Z,V.x,V.y,V.z,Se,Te,we,De,Fe,Qe),L.pixelStorei(L.UNPACK_ROW_LENGTH,qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yn),Z===0&&K.generateMipmaps&&L.generateMipmap(Ve),w.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),w.unbindTexture()},this.resetState=function(){O=0,C=0,P=null,w.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Io?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class HS extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Id extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mf=new ut,fl=new kl,qs=new Uo,js=new X;class VS extends bt{constructor(e=new Mn,t=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Mf.copy(r).invert(),fl.copy(e.ray).applyMatrix4(Mf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);js.fromBufferAttribute(f,m),Sf(js,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)js.fromBufferAttribute(f,g),Sf(js,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sf(n,e,t,i,r,s,o){const a=fl.distanceSqToPoint(n);if(a<t){const l=new X;fl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Gl extends Mn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,h=new X,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const T=[],S=d/i;let R=0;d===0&&o===0?R=.5/t:d===i&&l===Math.PI&&(R=-.5/t);for(let O=0;O<=t;O++){const C=O/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+R,1-S),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const S=u[d][T+1],R=u[d][T],O=u[d+1][T],C=u[d+1][T+1];(d!==0||o>0)&&p.push(S,R,C),(d!==i-1||l<Math.PI)&&p.push(R,O,C)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class GS extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const yf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class WS{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const XS=new WS;class Wl{constructor(e){this.manager=e!==void 0?e:XS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";class qS extends Wl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ls("img");function l(){u(),yf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jS extends Wl{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,o=new qS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ud extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const La=new ut,Ef=new X,bf=new X;class YS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $S extends YS{constructor(){super(new Ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KS extends Ud{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZS extends Ud{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const Af={type:"change"},Da={type:"start"},wf={type:"end"},Ys=new kl,Rf=new ni,JS=Math.cos(70*to.DEG2RAD);class QS extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",Me),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Me),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Af),i.update(),s=r.NONE},this.update=function(){const v=new X,H=new Hi().setFromUnitVectors(e.up,new X(0,1,0)),j=H.clone().invert(),fe=new X,me=new Hi,He=new X,Xe=2*Math.PI;return function(vt=null){const Ze=i.object.position;v.copy(Ze).sub(i.target),v.applyQuaternion(H),a.setFromVector3(v),i.autoRotate&&s===r.NONE&&z(M(vt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ht=i.minAzimuthAngle,it=i.maxAzimuthAngle;isFinite(ht)&&isFinite(it)&&(ht<-Math.PI?ht+=Xe:ht>Math.PI&&(ht-=Xe),it<-Math.PI?it+=Xe:it>Math.PI&&(it-=Xe),ht<=it?a.theta=Math.max(ht,Math.min(it,a.theta)):a.theta=a.theta>(ht+it)/2?Math.max(ht,a.theta):Math.min(it,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let On=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=he(a.radius);else{const Xt=a.radius;a.radius=he(a.radius*c),On=Xt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(j),Ze.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let Xt=null;if(i.object.isPerspectiveCamera){const Fn=v.length();Xt=he(Fn*c);const Sn=Fn-Xt;i.object.position.addScaledVector(R,Sn),i.object.updateMatrixWorld(),On=!!Sn}else if(i.object.isOrthographicCamera){const Fn=new X(O.x,O.y,0);Fn.unproject(i.object);const Sn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),On=Sn!==i.object.zoom;const Lr=new X(O.x,O.y,0);Lr.unproject(i.object),i.object.position.sub(Lr).add(Fn),i.object.updateMatrixWorld(),Xt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Xt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Xt).add(i.object.position):(Ys.origin.copy(i.object.position),Ys.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ys.direction))<JS?e.lookAt(i.target):(Rf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ys.intersectPlane(Rf,i.target))))}else if(i.object.isOrthographicCamera){const Xt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Xt!==i.object.zoom&&(i.object.updateProjectionMatrix(),On=!0)}return c=1,C=!1,On||fe.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||He.distanceToSquared(i.target)>o?(i.dispatchEvent(Af),fe.copy(i.object.position),me.copy(i.object.quaternion),He.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Le),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",$),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",D),i.domElement.getRootNode().removeEventListener("keydown",ie,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Me),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Tf,l=new Tf;let c=1;const u=new X,f=new Ne,h=new Ne,p=new Ne,g=new Ne,x=new Ne,m=new Ne,d=new Ne,T=new Ne,S=new Ne,R=new X,O=new Ne;let C=!1;const P=[],N={};let y=!1;function M(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function k(v){const H=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*H)}function z(v){l.theta-=v}function I(v){l.phi-=v}const te=function(){const v=new X;return function(j,fe){v.setFromMatrixColumn(fe,0),v.multiplyScalar(-j),u.add(v)}}(),ee=function(){const v=new X;return function(j,fe){i.screenSpacePanning===!0?v.setFromMatrixColumn(fe,1):(v.setFromMatrixColumn(fe,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(j),u.add(v)}}(),ne=function(){const v=new X;return function(j,fe){const me=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;v.copy(He).sub(i.target);let Xe=v.length();Xe*=Math.tan(i.object.fov/2*Math.PI/180),te(2*j*Xe/me.clientHeight,i.object.matrix),ee(2*fe*Xe/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(j*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),ee(fe*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function re(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function de(v,H){if(!i.zoomToCursor)return;C=!0;const j=i.domElement.getBoundingClientRect(),fe=v-j.left,me=H-j.top,He=j.width,Xe=j.height;O.x=fe/He*2-1,O.y=-(me/Xe)*2+1,R.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function ye(v){f.set(v.clientX,v.clientY)}function Re(v){de(v.clientX,v.clientX),d.set(v.clientX,v.clientY)}function je(v){g.set(v.clientX,v.clientY)}function Q(v){h.set(v.clientX,v.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const H=i.domElement;z(2*Math.PI*p.x/H.clientHeight),I(2*Math.PI*p.y/H.clientHeight),f.copy(h),i.update()}function pe(v){T.set(v.clientX,v.clientY),S.subVectors(T,d),S.y>0?re(k(S.y)):S.y<0&&W(k(S.y)),d.copy(T),i.update()}function ge(v){x.set(v.clientX,v.clientY),m.subVectors(x,g).multiplyScalar(i.panSpeed),ne(m.x,m.y),g.copy(x),i.update()}function F(v){de(v.clientX,v.clientY),v.deltaY<0?W(k(v.deltaY)):v.deltaY>0&&re(k(v.deltaY)),i.update()}function ue(v){let H=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),H=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),H=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),H=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),H=!0;break}H&&(v.preventDefault(),i.update())}function se(v){if(P.length===1)f.set(v.pageX,v.pageY);else{const H=Oe(v),j=.5*(v.pageX+H.x),fe=.5*(v.pageY+H.y);f.set(j,fe)}}function L(v){if(P.length===1)g.set(v.pageX,v.pageY);else{const H=Oe(v),j=.5*(v.pageX+H.x),fe=.5*(v.pageY+H.y);g.set(j,fe)}}function be(v){const H=Oe(v),j=v.pageX-H.x,fe=v.pageY-H.y,me=Math.sqrt(j*j+fe*fe);d.set(0,me)}function ve(v){i.enableZoom&&be(v),i.enablePan&&L(v)}function A(v){i.enableZoom&&be(v),i.enableRotate&&se(v)}function w(v){if(P.length==1)h.set(v.pageX,v.pageY);else{const j=Oe(v),fe=.5*(v.pageX+j.x),me=.5*(v.pageY+j.y);h.set(fe,me)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const H=i.domElement;z(2*Math.PI*p.x/H.clientHeight),I(2*Math.PI*p.y/H.clientHeight),f.copy(h)}function B(v){if(P.length===1)x.set(v.pageX,v.pageY);else{const H=Oe(v),j=.5*(v.pageX+H.x),fe=.5*(v.pageY+H.y);x.set(j,fe)}m.subVectors(x,g).multiplyScalar(i.panSpeed),ne(m.x,m.y),g.copy(x)}function Y(v){const H=Oe(v),j=v.pageX-H.x,fe=v.pageY-H.y,me=Math.sqrt(j*j+fe*fe);T.set(0,me),S.set(0,Math.pow(T.y/d.y,i.zoomSpeed)),re(S.y),d.copy(T);const He=(v.pageX+H.x)*.5,Xe=(v.pageY+H.y)*.5;de(He,Xe)}function q(v){i.enableZoom&&Y(v),i.enablePan&&B(v)}function ae(v){i.enableZoom&&Y(v),i.enableRotate&&w(v)}function E(v){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",_),i.domElement.addEventListener("pointerup",D)),!Ue(v)&&(Ae(v),v.pointerType==="touch"?ce(v):U(v)))}function _(v){i.enabled!==!1&&(v.pointerType==="touch"?xe(v):G(v))}function D(v){switch(Ee(v),P.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",D),i.dispatchEvent(wf),s=r.NONE;break;case 1:const H=P[0],j=N[H];ce({pointerId:H,pageX:j.x,pageY:j.y});break}}function U(v){let H;switch(v.button){case 0:H=i.mouseButtons.LEFT;break;case 1:H=i.mouseButtons.MIDDLE;break;case 2:H=i.mouseButtons.RIGHT;break;default:H=-1}switch(H){case Xi.DOLLY:if(i.enableZoom===!1)return;Re(v),s=r.DOLLY;break;case Xi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;je(v),s=r.PAN}else{if(i.enableRotate===!1)return;ye(v),s=r.ROTATE}break;case Xi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;ye(v),s=r.ROTATE}else{if(i.enablePan===!1)return;je(v),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Da)}function G(v){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Q(v);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(v);break;case r.PAN:if(i.enablePan===!1)return;ge(v);break}}function $(v){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(v.preventDefault(),i.dispatchEvent(Da),F(le(v)),i.dispatchEvent(wf))}function le(v){const H=v.deltaMode,j={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(H){case 1:j.deltaY*=16;break;case 2:j.deltaY*=100;break}return v.ctrlKey&&!y&&(j.deltaY*=10),j}function ie(v){v.key==="Control"&&(y=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(v){v.key==="Control"&&(y=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function Me(v){i.enabled===!1||i.enablePan===!1||ue(v)}function ce(v){switch(ke(v),P.length){case 1:switch(i.touches.ONE){case qi.ROTATE:if(i.enableRotate===!1)return;se(v),s=r.TOUCH_ROTATE;break;case qi.PAN:if(i.enablePan===!1)return;L(v),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case qi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(v),s=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(v),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Da)}function xe(v){switch(ke(v),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;w(v),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;B(v),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(v),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ae(v),i.update();break;default:s=r.NONE}}function Le(v){i.enabled!==!1&&v.preventDefault()}function Ae(v){P.push(v.pointerId)}function Ee(v){delete N[v.pointerId];for(let H=0;H<P.length;H++)if(P[H]==v.pointerId){P.splice(H,1);return}}function Ue(v){for(let H=0;H<P.length;H++)if(P[H]==v.pointerId)return!0;return!1}function ke(v){let H=N[v.pointerId];H===void 0&&(H=new Ne,N[v.pointerId]=H),H.set(v.pageX,v.pageY)}function Oe(v){const H=v.pointerId===P[0]?P[1]:P[0];return N[H]}i.domElement.addEventListener("contextmenu",Le),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",D),i.domElement.addEventListener("wheel",$,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ie,{passive:!0,capture:!0}),this.update()}}const ey="/cosmic-neighborhood/3d-skins/stardot.png",ty={class:"webgl"},ny={__name:"Planet3DModel",props:["planetSkin"],setup(n){const e=n,t=new HS,i=new jS,r=i.load(e.planetSkin),s=i.load(ey),o=()=>{const g=new Gl(1,64,64),x=new GS({map:r}),m=new gn(g,x);return t.add(m),m},a=()=>{const g=new Mn,x=new Id({size:.15,map:s,transparent:!0,depthWrite:!1}),m=[];for(let T=0;T<1e4;T++){const S=to.randFloatSpread(200),R=to.randFloatSpread(200),O=to.randFloatSpread(200);m.push(S,R,O)}g.setAttribute("position",new an(m,3));const d=new VS(g,x);t.add(d)},l={width:window.innerWidth,height:window.innerHeight},c=()=>{const g=new KS(16777215,.9);g.position.set(1,1,2),t.add(g);const x=new ZS(16777215,.08);t.add(x)},u=()=>{const g=new $t(45,l.width/l.height,.1,100);return g.position.z=20,t.add(g),g},f=()=>{const g=document.querySelector(".webgl"),x=new kS({canvas:g});return x.setSize(l.width,l.height),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x},h=(g,x)=>{window.addEventListener("resize",()=>{l.width=window.innerWidth,l.height=window.innerHeight,g.aspect=l.width/l.height,g.updateProjectionMatrix(),x.setSize(l.width,l.height),x.setPixelRatio(Math.min(window.devicePixelRatio,2))})};return Cl(()=>{const g=o();a(),c();const x=u(),m=f(),d=new QS(x,m.domElement);d.enableDamping=!0,h(x,m);const T=()=>{requestAnimationFrame(T),g.rotation.y+=.003,d.update(),m.render(t,x)};T()}),(g,x)=>(nt(),ct("canvas",ty))}},iy=fs(ny,[["__scopeId","data-v-cba81249"]]),Nd=n=>(ch("data-v-cb58bd04"),n=n(),uh(),n),ry={class:"font-league-spartan relative lg:my-28"},sy={class:"border-b border-t border-b-slate-700 border-t-slate-700 py-4 flex justify-evenly items-center mt-4 md:absolute md:flex-col md:gap-3 md:border-b-0 md:border-t-0 md:bottom-40 md:right-10 lg:left-96"},oy=["onClick"],ay={class:"flex flex-col items-center justify-center md:w-1000 md:pl-3 md:mx-auto lg:flex-none lg:grid lg:grid-cols-1"},ly=["src"],cy={class:"px-4 flex flex-col w-90vw md:w-1/2 md:px-0 lg:w-full lg:pl-6"},uy={class:"text-4xl font-antonio"},fy={class:"text-slate-400 tracking-widest"},hy=Nd(()=>Ie("span",{class:"text-slate-400 pr-2 tracking-widest"},"Source:",-1)),dy=["href"],py=Nd(()=>Ie("i",{class:"fa-solid fa-link font-xs pl-2"},null,-1)),my=[py],gy={class:"flex flex-col gap-2 my-6 md:flex-row md:w-90vw md:mx-auto md:justify-center md:items-center md:mt-4"},_y={class:"text-2xl border border-slate-700 w-90vw mx-auto px-4 py-2 flex justify-between items-center md:flex-col md:w-44 md:items-start"},vy={class:"text-base text-slate-500"},xy={key:0,class:"fixed inset-0"},My={__name:"PlanetDisplay",props:{tabs:Array,planetData:Object,planetSkin:String},setup(n){const e=n,t=Un(!1),i=Un(e.tabs[0].id),r=Gt(()=>e.tabs.filter(c=>c.id===i.value));let s=Un(!1);const o=c=>{i.value=c,t.value=!0},a=()=>{s.value=!0},l=()=>{s.value=!1};return(c,u)=>(nt(),ct(Ut,null,[Ie("article",ry,[Ie("div",sy,[(nt(!0),ct(Ut,null,Zs(e.tabs,f=>(nt(),ct("button",{key:f.id,class:Ln(["text-xl hover:scale-110 md:text-base md:border md:border-slate-700 md:px-4 md:py-2 md:w-72 md:hover:bg-slate-500 md:hover:bg-opacity-50 duration-300",{active:i.value===f.id}]),onClick:h=>o(f.id)},Ci(f.name),11,oy))),128))]),Ie("div",ay,[(nt(!0),ct(Ut,null,Zs(r.value,f=>(nt(),ct("div",{key:f.id,class:Ln(["text-center md:text-start lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center",{active:i.value===f.id}])},[Ie("img",{src:f.img,alt:"planet images",class:Ln([{"roll-in-blurred-left":t.value},"mx-auto h-20 my-8 md:h-44 lg:h-80 lg:row-span-2"]),onAnimationend:u[0]||(u[0]=h=>t.value=!1)},null,42,ly),Ie("div",cy,[Ie("h1",uy,Ci(f.planet),1),Ie("h4",fy,Ci(f.name),1),Ie("p",{class:Ln([{"fade-in-fwd":t.value},"py-4 md:h-40"]),onAnimationend:u[1]||(u[1]=h=>t.value=!1)},Ci(f.content),35),Ie("p",null,[hy,ao("Wikipedia "),Ie("a",{href:f.source,target:"_blank"},my,8,dy)])])],2))),128))]),Ie("div",gy,[(nt(!0),ct(Ut,null,Zs(n.planetData,(f,h,p)=>(nt(),ct("ul",{key:p},[Ie("li",_y,[Ie("span",vy,Ci(h),1),ao(" "+Ci(f),1)])]))),128))]),Ie("div",{class:"w-90vw mx-auto my-4 hover:bg-slate-500 hover:bg-opacity-50 duration-300 lg:w-2/3 2xl:w-1/3"},[Ie("button",{class:"text-xl border border-slate-700 px-4 py-2 w-full text-slate-300",onClick:a}," See 3D Model ")])]),Et(s)?(nt(),ct("section",xy,[Ye(iy,{planetSkin:n.planetSkin},null,8,["planetSkin"]),Ie("button",{class:"text-6xl text-slate-300 absolute top-10 left-10 font-bold",onClick:l}," X ")])):Oh("",!0)],64))}},_i=fs(My,[["__scopeId","data-v-cb58bd04"]]),Sy="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='290'%20height='290'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='145'%20cy='145'%20r='145'/%3e%3ccircle%20id='c'%20cx='145'%20cy='145'%20r='145'/%3e%3cpath%20id='e'%20d='M0%200c76.768%200%20139%2062.232%20139%20139S76.768%20278%200%20278z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='145'%20cy='145'%20r='145'%20fill='%23DEF4FC'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23B1D5E2'%20fill-rule='nonzero'%20d='M154%20253c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm86-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-110%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012-12-5.373-12-12%205.373-12%2012-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h73c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H99v.01c-6.395.262-11.5%205.53-11.5%2011.99s5.105%2011.728%2011.5%2011.99v.01h45c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-2l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h52c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H70c-6.627%200-12-5.373-12-12s5.373-12%2012-12h3c6.627%200%2012-5.373%2012-12zm160%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012-12-5.373-12-12%205.373-12%2012-12zm-223%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm199-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm24-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-58c-6.627%200-12-5.373-12-12s5.373-12%2012-12h58z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23d)'%20opacity='.078'%20d='M146%200h145v290H146z'/%3e%3cg%20transform='translate(146%206)'%3e%3cmask%20id='f'%20fill='%23fff'%3e%3cuse%20xlink:href='%23e'/%3e%3c/mask%3e%3cuse%20fill='%237A939C'%20xlink:href='%23e'/%3e%3ccircle%20cx='1'%20cy='140'%20r='131'%20fill='%239AB2BB'%20mask='url(%23f)'/%3e%3ccircle%20cx='1'%20cy='139'%20r='95'%20fill='%23E8903F'%20mask='url(%23f)'/%3e%3ccircle%20cx='.5'%20cy='139.5'%20r='41.5'%20fill='%23FFEA87'%20mask='url(%23f)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yy="3d-skins/mercury-skin.jpg",Ey={__name:"MercuryView",setup(n){const e=[{id:"overview",planet:"Mercury",name:"Overview",content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)",img:Ka},{id:"structure",planet:"Mercury",name:"Structure",content:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",img:Sy},{id:"geology",planet:"Mercury",name:"Geology",content:"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",img:Ka}],t={rotation:"58.6 Days",revolution:"87.97 Days",radius:"2,439.7 KM",temperature:"430°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:yy})]))}},by="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='400'%20height='400'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='200'%20cy='200'%20r='200'/%3e%3ccircle%20id='c'%20cx='200'%20cy='200'%20r='200'/%3e%3ccircle%20id='e'%20cx='200'%20cy='200'%20r='200'/%3e%3cpath%20id='g'%20d='M0%200c106.591%200%20193%2086.409%20193%20193S106.591%20386%200%20386z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='200'%20cy='200'%20r='200'%20fill='%23F7CC7F'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23FFE6AE'%20fill-rule='nonzero'%20d='M310%20311c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H189l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H79c-6.627%200-12-5.373-12-12s5.373-12%2012-12h231zm-20-144c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-19v.01c-6.395.263-11.5%205.53-11.5%2011.99s5.105%2011.727%2011.5%2011.99v.01h80c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h1c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h6c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H120c-6.627%200-12-5.373-12-12s5.373-12%2012-12h9c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H59c-6.627%200-12-5.373-12-12s5.373-12%2012-12h231zm-173%2096c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h76zm326-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h41zM-9.5%20167c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-44c-6.627%200-12-5.373-12-12s5.373-12%2012-12h44zM278%20119c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-139%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm158-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-68l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99S222.604%2070.727%20229%2070.99L229%2071h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-76c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12s-5.373-12-12-12H40c-6.627%200-12-5.373-12-12s5.373-12%2012-12h257zm3%2048c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm-192%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H88c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23E29F58'%20fill-rule='nonzero'%20d='M205%20263c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zM99%20203c0-6.627-5.373-12-12-12H2c-6.627%200-12-5.373-12-12s5.373-12%2012-12h14c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-30c-6.627%200-12-5.373-12-12s5.373-12%2012-12h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H64v.01c-6.395.262-11.5%205.53-11.5%2011.99s5.105%2011.728%2011.5%2011.99v.01h160c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-68l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h3c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H83c-6.627%200-12-5.373-12-12s5.373-12%2012-12h4c6.627%200%2012-5.373%2012-12zm128%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm176%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H302c-6.627%200-12-5.373-12-12s5.373-12%2012-12h101zm-368%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H15c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm313-48c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20z'%20mask='url(%23d)'/%3e%3cmask%20id='f'%20fill='%23fff'%3e%3cuse%20xlink:href='%23e'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23f)'%20opacity='.078'%20d='M201-25h225v450H201z'/%3e%3cg%20transform='translate(201%207)'%3e%3cmask%20id='h'%20fill='%23fff'%3e%3cuse%20xlink:href='%23g'/%3e%3c/mask%3e%3cuse%20fill='%23C08240'%20xlink:href='%23g'/%3e%3ccircle%20cx='1'%20cy='194'%20r='185'%20fill='%23A34D28'%20mask='url(%23h)'/%3e%3ccircle%20cx='1'%20cy='193'%20r='83'%20fill='%23FAD14C'%20mask='url(%23h)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ty="3d-skins/venus-skin.jpg",Ay={__name:"VenusView",setup(n){const e=[{id:"overview",planet:"Venus",name:"Overview",content:"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",source:"https://en.wikipedia.org/wiki/Venus",img:Za},{id:"structure",planet:"Venus",name:"Structure",content:"The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",source:"https://en.wikipedia.org/wiki/Venus#Internal_structure",img:by},{id:"geology",planet:"Venus",name:"Geology",content:"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",source:"https://en.wikipedia.org/wiki/Venus#Surface_geology",img:Za}],t={rotation:"243 Days",revolution:"224.7 Days",radius:"6,051.8 KM",temperature:"471°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Ty})]))}},wy="/cosmic-neighborhood/assets/planet-earth-internal-DR4UKgYe.svg",Ry="3d-skins/earth-skin.jpg",Cy={__name:"EarthView",setup(n){const e=[{id:"overview",planet:"Earth",name:"Overview",content:"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",source:"https://en.wikipedia.org/wiki/Earth",img:Ja},{id:"structure",planet:"Earth",name:"Structure",content:"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",source:"https://en.wikipedia.org/wiki/Earth#Internal_structure",img:wy},{id:"geology",planet:"Earth",name:"Geology",content:"The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",source:"https://en.wikipedia.org/wiki/Earth#Surface",img:Ja}],t={rotation:"0.99 Days",revolution:"365.26 Days",radius:"6,371 KM",temperature:"16°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Ry})]))}},Py="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='336'%20height='336'%3e%3cdefs%3e%3ccircle%20id='a'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='c'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='e'%20cx='168'%20cy='168'%20r='168'/%3e%3ccircle%20id='g'%20cx='168'%20cy='168'%20r='168'/%3e%3cpath%20id='i'%20d='M0%200c88.918%200%20161%2072.082%20161%20161S88.918%20322%200%20322z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='168'%20cy='168'%20r='168'%20fill='%23FF6A45'%20fill-rule='nonzero'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20xlink:href='%23a'/%3e%3c/mask%3e%3cpath%20fill='%23FF9B6B'%20fill-rule='nonzero'%20d='M102%2036c0-6.627-5.373-12-12-12H55c-6.627%200-12-5.373-12-12S48.373%200%2055%200h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-56l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99S148.604%2047.727%20155%2047.99V48H168c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H41c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12zm172%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h5z'%20mask='url(%23b)'/%3e%3cmask%20id='d'%20fill='%23fff'%3e%3cuse%20xlink:href='%23c'/%3e%3c/mask%3e%3cpath%20fill='%23FF9B6B'%20fill-rule='nonzero'%20d='M209%20324c0-6.627-5.373-12-12-12h-35c-6.627%200-12-5.373-12-12s5.373-12%2012-12h156c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-56l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99v.01H275c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H148c-6.627%200-12-5.373-12-12s5.373-12%2012-12h49c6.627%200%2012-5.373%2012-12zm172%2012c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-5c-6.627%200-12-5.373-12-12s5.373-12%2012-12h5z'%20mask='url(%23d)'/%3e%3cmask%20id='f'%20fill='%23fff'%3e%3cuse%20xlink:href='%23e'/%3e%3c/mask%3e%3cpath%20fill='%23D04237'%20fill-rule='nonzero'%20d='M217%20264c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-62c-6.627%200-12-5.373-12-12s5.373-12%2012-12h62zm-117%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H80c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zm163-96c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H112l-.001.01c-6.395.263-11.499%205.53-11.499%2011.99s5.104%2011.727%2011.499%2011.99l.001.01h19c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H11c-6.627%200-12-5.373-12-12s5.373-12%2012-12h32c6.627%200%2012-5.373%2012-12s-5.373-12-12-12h-64c-6.627%200-12-5.373-12-12s5.373-12%2012-12h284zm-52%2048c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-20c-6.627%200-12-5.373-12-12s5.373-12%2012-12h20zM139%2072c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012H99c-6.627%200-12-5.373-12-12s5.373-12%2012-12h40zm209%200c6.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012h-40c-6.627%200-12-5.373-12-12s5.373-12%2012-12h40z'%20mask='url(%23f)'/%3e%3cmask%20id='h'%20fill='%23fff'%3e%3cuse%20xlink:href='%23g'/%3e%3c/mask%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20mask='url(%23h)'%20opacity='.078'%20d='M169-16h184v368H169z'/%3e%3cg%20transform='translate(169%207)'%3e%3cmask%20id='j'%20fill='%23fff'%3e%3cuse%20xlink:href='%23i'/%3e%3c/mask%3e%3cuse%20fill='%2397271E'%20xlink:href='%23i'/%3e%3ccircle%20cx='1'%20cy='161'%20r='154'%20fill='%23DC5D1C'%20mask='url(%23j)'/%3e%3ccircle%20cx='1'%20cy='161'%20r='79'%20fill='%23F8A053'%20mask='url(%23j)'/%3e%3ccircle%20cx='1'%20cy='161'%20r='54'%20fill='%23FFCA79'%20mask='url(%23j)'/%3e%3ccircle%20cx='1'%20cy='162'%20r='40'%20fill='%23FFF5C6'%20mask='url(%23j)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ly="3d-skins/mars-skin.jpg",Dy={__name:"MarsView",setup(n){const e=[{id:"overview",planet:"Mars",name:"Overview",content:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',source:"https://en.wikipedia.org/wiki/Mars",img:Qa},{id:"structure",planet:"Mars",name:"Structure",content:"Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",source:"https://en.wikipedia.org/wiki/Mars#Internal_structure",img:Py},{id:"geology",planet:"Mars",name:"Geology",content:"Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",source:"https://en.wikipedia.org/wiki/Mars#Surface_geology",img:Qa}],t={rotation:"1.03 Days",revolution:"1.88 Years",radius:"3,389.5 KM",temperature:"-28°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Ly})]))}},Iy="/cosmic-neighborhood/assets/planet-jupiter-internal-U09-YmCa.svg",Uy="3d-skins/jupiter-skin.jpg",Ny={__name:"JupiterView",setup(n){const e=[{id:"overview",planet:"Jupiter",name:"Overview",content:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",source:"https://en.wikipedia.org/wiki/Jupiter",img:el},{id:"structure",planet:"Jupiter",name:"Structure",content:"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",source:"https://en.wikipedia.org/wiki/Jupiter#Internal_structure",img:Iy},{id:"geology",planet:"Jupiter",name:"Geology",content:"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",source:"https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",img:el}],t={rotation:"9.93 Hours",revolution:"11.86 Years",radius:"69,911 KM",temperature:"-108°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Uy})]))}},Oy="/cosmic-neighborhood/assets/planet-saturn-internal-nebjX8Qh.svg",Fy="3d-skins/saturn-skin.jpg",By={__name:"SaturnView",setup(n){const e=[{id:"overview",planet:"Saturn",name:"Overview",content:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",source:"https://en.wikipedia.org/wiki/Saturn",img:tl},{id:"structure",planet:"Saturn",name:"Structure",content:"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",source:"https://en.wikipedia.org/wiki/Saturn#Internal_structure",img:Oy},{id:"geology",planet:"Saturn",name:"Geology",content:"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",source:"https://en.wikipedia.org/wiki/Saturn#Atmosphere",img:tl}],t={rotation:"10.8 Hours",revolution:"29.46 Years",radius:"58,232 KM",temperature:"-138°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Fy})]))}},zy="/cosmic-neighborhood/assets/planet-uranus-internal-DcQ_rz5t.svg",ky="3d-skins/uranus-skin.jpg",Hy={__name:"UranusView",setup(n){const e=[{id:"overview",planet:"Uranus",name:"Overview",content:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",source:"https://en.wikipedia.org/wiki/Uranus",img:nl},{id:"structure",planet:"Uranus",name:"Structure",content:"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",source:"https://en.wikipedia.org/wiki/Uranus#Internal_structure",img:zy},{id:"geology",planet:"Uranus",name:"Geology",content:"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",source:"https://en.wikipedia.org/wiki/Uranus#Atmosphere",img:nl}],t={rotation:"17.2 Hours",revolution:"84 Years",radius:"25,362 KM",temperature:"-195°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:ky})]))}},Vy="/cosmic-neighborhood/assets/planet-neptune-internal-D-Z4ZUMw.svg",Gy="3d-skins/neptune-skin.jpg",Wy={__name:"NeptuneView",setup(n){const e=[{id:"overview",planet:"Neptune",name:"Overview",content:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",source:"https://en.wikipedia.org/wiki/Neptune",img:il},{id:"structure",planet:"Neptune",name:"Structure",content:"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",source:"https://en.wikipedia.org/wiki/Neptune#Internal_structure",img:Vy},{id:"geology",planet:"Neptune",name:"Geology",content:"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",source:"https://en.wikipedia.org/wiki/Neptune#Atmosphere",img:il}],t={rotation:"16.08 Hours",revolution:"164.79 Years",radius:"24,622 KM",temperature:"-201°c"};return(i,r)=>(nt(),ct("section",null,[Ye(_i,{tabs:e,"planet-data":t,planetSkin:Gy})]))}},Xy=bg({history:eg("/cosmic-neighborhood/"),routes:[{path:"/",name:"home",component:f_},{path:"/mercury",name:"mecury",component:Ey},{path:"/venus",name:"venus",component:Ay},{path:"/earth",name:"earth",component:Cy},{path:"/mars",name:"mars",component:Dy},{path:"/jupiter",name:"jupiter",component:Ny},{path:"/saturn",name:"saturn",component:By},{path:"/uranus",name:"uranus",component:Hy},{path:"/neptune",name:"neptune",component:Wy},{path:"/:pathMatch(.*)",redirect:"/"}]}),Xl=d0(Jg);Xl.use(_0());Xl.use(Xy);Xl.mount("#app");
