import{S as nt,i as rt,s as at,a as ot,e as B,c as st,b as W,g as ue,t as F,d as de,f as J,h as G,j as it,o as Ie,k as lt,l as ct,m as ft,n as ve,p as D,q as ut,r as dt,u as pt,v as M,w as Y,x as je,y as X,z as Z,A as le}from"./chunks/index-b30536f4.js";import{S as xe,I as V,g as We,f as Ee,s as z,a as Le,i as ht,P as He,b as mt,c as _t}from"./chunks/singletons-0d8e06aa.js";import{s as gt}from"./chunks/paths-6cd3a76e.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const t=new URL(r);for(const s of vt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(t),t}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(r){return r.replace(/\/$/,"")+Rt}function Ot(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ne.delete(s)}return pe(r,e)};const ne=new Map;function It(r,e){const t=et(r,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:o,...c}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&ne.set(t,{body:o,init:c,ttl:1e3*Number(n)}),Promise.resolve(new Response(o,c))}return pe(r,e)}function Lt(r,e,t){if(ne.size>0){const s=et(r,t),o=ne.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);ne.delete(s)}}return pe(e,t)}function et(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(c)return e.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const n=s.split(/\[(.+?)\](?!\])/);return"/"+n.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(q=>parseInt(q,16))));const g=$t.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,R,U,P]=g;return e.push({name:U,matcher:P,optional:!!b,rest:!!R,chained:R?h===1&&n[0]==="":!1}),R?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function At(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter(At)}function Nt(r,e,t){const s={},o=r.slice(1);let c="";for(let n=0;n<e.length;n+=1){const u=e[n];let _=o[n];if(u.chained&&u.rest&&c&&(_=_?c+"/"+_:c),c="",_===void 0)u.rest&&(s[u.name]="");else{if(u.matcher&&!t[u.matcher](_)){if(u.optional&&u.chained){let h=o.indexOf(void 0,n);if(h===-1){const g=e[n+1];if((g==null?void 0:g.rest)&&g.chained)c=_;else return}for(;h>=n;)o[h]=o[h-1],h-=1;continue}return}s[u.name]=_}}if(!c)return s}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([u,[_,h,g]])=>{const{pattern:b,params:R}=Pt(u),U={id:u,exec:P=>{const q=b.exec(P);if(q)return Nt(q,R,s)},errors:[1,...g||[]].map(P=>r[P]),layouts:[0,...h||[]].map(n),leaf:c(_)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function c(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function n(u){return u===void 0?u:[o.has(u),r[u]]}}function Tt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=M(o,c(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,u){e&&X(e,n,u),W(n,t,u),s=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&2&&(_.form=n[1]),o!==(o=n[0][0])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=M(o,c(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Dt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[Vt]},$$scope:{ctx:n}}}}return o&&(e=M(o,c(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,u){e&&X(e,n,u),W(n,t,u),s=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&523&&(_.$$scope={dirty:u,ctx:n}),o!==(o=n[0][0])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=M(o,c(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Vt(r){let e,t,s;var o=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=M(o,c(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,u){e&&X(e,n,u),W(n,t,u),s=!0},p(n,u){const _={};if(u&8&&(_.data=n[3]),u&2&&(_.form=n[1]),o!==(o=n[0][1])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=M(o,c(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Me(r){let e,t=r[5]&&Ye(r);return{c(){e=lt("div"),t&&t.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ft(e);t&&t.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,o){W(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Ye(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function Ye(r){let e;return{c(){e=ut(r[6])},l(t){e=dt(t,r[6])},m(t,s){W(t,e,s)},p(t,s){s&64&&pt(e,t[6])},d(t){t&&G(e)}}}function qt(r){let e,t,s,o,c;const n=[Dt,Tt],u=[];function _(g,b){return g[0][1]?0:1}e=_(r),t=u[e]=n[e](r);let h=r[4]&&Me(r);return{c(){t.c(),s=ot(),h&&h.c(),o=B()},l(g){t.l(g),s=st(g),h&&h.l(g),o=B()},m(g,b){u[e].m(g,b),W(g,s,b),h&&h.m(g,b),W(g,o,b),c=!0},p(g,[b]){let R=e;e=_(g),e===R?u[e].p(g,b):(ue(),F(u[R],1,1,()=>{u[R]=null}),de(),t=u[e],t?t.p(g,b):(t=u[e]=n[e](g),t.c()),J(t,1),t.m(s.parentNode,s)),g[4]?h?h.p(g,b):(h=Me(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){c||(J(t),c=!0)},o(g){F(t),c=!1},d(g){u[e].d(g),g&&G(s),h&&h.d(g),g&&G(o)}}}function Ct(r,e,t){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:n}=e,{data_0:u=null}=e,{data_1:_=null}=e;it(s.page.notify);let h=!1,g=!1,b=null;return Ie(()=>{const R=s.page.subscribe(()=>{h&&(t(5,g=!0),t(6,b=document.title||"untitled page"))});return t(4,h=!0),R}),r.$$set=R=>{"stores"in R&&t(7,s=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,c=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,n,u,_,h,g,b,s,o]}class Bt extends nt{constructor(e){super(),rt(this,e,Ct,qt,at,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Jt=function(r,e){return new URL(r,e).href},Xe={},C=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=Jt(c,s),c in Xe)return;Xe[c]=!0;const n=c.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const b=o[g];if(b.href===c&&(!n||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=n?"stylesheet":Ft,n||(h.as="script",h.crossOrigin=""),h.href=c,document.head.appendChild(h),n)return new Promise((g,b)=>{h.addEventListener("load",g),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Gt={},he=[()=>C(()=>import("./chunks/0-d93ecc0f.js"),["./chunks/0-d93ecc0f.js","./chunks/_layout-89876d63.js","./components/pages/_layout.svelte-758408bb.js","./chunks/index-b30536f4.js","./chunks/IconBase-9e4d8c2c.js","./assets/IconBase-d93538e2.css","./chunks/state-9ea8d592.js","./chunks/index-dc88078b.js","./chunks/firebase-c0b386ca.js","./chunks/paths-6cd3a76e.js","./assets/_layout-cc373897.css"],import.meta.url),()=>C(()=>import("./chunks/1-659576a4.js"),["./chunks/1-659576a4.js","./components/error.svelte-4d1e05f7.js","./chunks/index-b30536f4.js","./chunks/stores-b6bff587.js","./chunks/singletons-0d8e06aa.js","./chunks/index-dc88078b.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/2-185faf0d.js"),["./chunks/2-185faf0d.js","./components/pages/_page.svelte-bbb07b54.js","./chunks/index-b30536f4.js","./chunks/paths-6cd3a76e.js","./chunks/firebase-c0b386ca.js"],import.meta.url),()=>C(()=>import("./chunks/3-7f398010.js"),["./chunks/3-7f398010.js","./components/pages/campaign/_page.svelte-ae056fee.js","./chunks/index-b30536f4.js","./chunks/firebase-c0b386ca.js","./chunks/paths-6cd3a76e.js","./chunks/stores-b6bff587.js","./chunks/singletons-0d8e06aa.js","./chunks/index-dc88078b.js"],import.meta.url),()=>C(()=>import("./chunks/4-9c194929.js"),["./chunks/4-9c194929.js","./components/pages/cart/_page.svelte-f4c44f35.js","./chunks/index-b30536f4.js","./chunks/firebase-c0b386ca.js","./chunks/state-9ea8d592.js","./chunks/index-dc88078b.js","./chunks/IconBase-9e4d8c2c.js","./assets/IconBase-d93538e2.css"],import.meta.url),()=>C(()=>import("./chunks/5-8949c062.js"),["./chunks/5-8949c062.js","./components/pages/login/_page.svelte-53afc90d.js","./chunks/index-b30536f4.js","./chunks/firebase-c0b386ca.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/6-93db9954.js"),["./chunks/6-93db9954.js","./components/pages/product/_page.svelte-6efc6f7d.js","./chunks/index-b30536f4.js","./chunks/firebase-c0b386ca.js","./chunks/state-9ea8d592.js","./chunks/index-dc88078b.js","./chunks/stores-b6bff587.js","./chunks/singletons-0d8e06aa.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>C(()=>import("./chunks/7-e8ef1e44.js"),["./chunks/7-e8ef1e44.js","./components/pages/tes/_page.svelte-ade71b3a.js","./chunks/index-b30536f4.js"],import.meta.url)],Kt=[],zt={"/":[2],"/campaign":[3],"/cart":[4],"/login":[5],"/product":[6],"/tes":[7]},Wt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,t){this.status=e,this.location=t}}async function Ht(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function s(o,c=!1){if(o===Mt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===Qt)return-1/0;if(o===xt)return-0;if(c)throw new Error("Invalid input");if(o in t)return t[o];const n=e[o];if(!n||typeof n!="object")t[o]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[o]=new Date(n[1]);break;case"Set":const _=new Set;t[o]=_;for(let b=1;b<n.length;b+=1)_.add(s(n[b]));break;case"Map":const h=new Map;t[o]=h;for(let b=1;b<n.length;b+=2)h.set(s(n[b]),s(n[b+1]));break;case"RegExp":t[o]=new RegExp(n[1],n[2]);break;case"Object":t[o]=Object(n[1]);break;case"BigInt":t[o]=BigInt(n[1]);break;case"null":const g=Object.create(null);t[o]=g;for(let b=1;b<n.length;b+=2)g[n[b]]=s(n[b+1]);break}else{const u=new Array(n.length);t[o]=u;for(let _=0;_<n.length;_+=1){const h=n[_];h!==Yt&&(u[_]=s(h))}}else{const u={};t[o]=u;for(const _ in n){const h=n[_];u[_]=s(h)}}return t[o]}return s(0)}const Re=Ut(he,Kt,zt,Gt),Pe=he[0],Ae=he[1];Pe();Ae();let re={};try{re=JSON.parse(sessionStorage[xe])}catch{}function Se(r){re[r]=Le()}function tn({target:r,base:e}){var Ge;const t=[];let s=null;const o={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,url:null},n=!1,u=!1,_=!0,h=!1,g=!1,b=!1,R=!1,U,P=(Ge=history.state)==null?void 0:Ge[V];P||(P=Date.now(),history.replaceState({...history.state,[V]:P},"",location.href));const q=re[P];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let K,Ne,ae;async function Ue(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),i=we(a,!0);s=null,await De(i,a,[])}async function me(a,{noScroll:i=!1,replaceState:l=!1,keepFocus:f=!1,state:d={},invalidateAll:m=!1},p,v){return typeof a=="string"&&(a=new URL(a,We(document))),ye({url:a,scroll:i?Le():null,keepfocus:f,redirect_chain:p,details:{state:d,replaceState:l},nav_token:v,accepted:()=>{m&&(R=!0)},blocked:()=>{},type:"goto"})}async function Te(a){const i=we(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:i.id,promise:Ce(i).then(l=>(l.type==="loaded"&&l.state.error&&(s=null),l))},s.promise}async function oe(...a){const l=Re.filter(f=>a.some(d=>f.exec(d))).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(l)}async function De(a,i,l,f,d={},m){var v,E;Ne=d;let p=a&&await Ce(a);if(p||(p=await Je(i,{id:null},await te(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,Ne!==d)return!1;if(p.type==="redirect")if(l.length>10||l.includes(i.pathname))p=await se({status:500,error:await te(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return me(new URL(p.location,i).href,{},[...l,i.pathname],d),!1;else((E=(v=p.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await ie(i);if(t.length=0,R=!1,h=!0,f&&f.details){const{details:y}=f,k=y.replaceState?0:1;y.state[V]=P+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(s=null,u){c=p.state,p.props.page&&(p.props.page.url=i);const y=fe();U.$set(p.props),y()}else Ve(p);if(f){const{scroll:y,keepfocus:k}=f;if(k||Oe(),await le(),_){const O=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await le();_=!0,p.props.page&&(K=p.props.page),m&&m(),h=!1}function Ve(a){var d,m;c=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),K=a.props.page;const l=fe();U=new Bt({target:r,props:{...a.props,stores:z},hydrate:!0}),l();const f={from:null,to:ce("to",{params:c.params,route:{id:(m=(d=c.route)==null?void 0:d.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};o.after_navigate.forEach(p=>p(f)),u=!0}async function Q({url:a,params:i,branch:l,status:f,error:d,route:m,form:p}){var j;const v=l.filter(Boolean);let E="never";for(const I of l)(I==null?void 0:I.slash)!==void 0&&(E=I.slash);a.pathname=wt(a.pathname,E),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:l,error:d,route:m},props:{components:v.map(I=>I.node.component)}};p!==void 0&&(y.props.form=p);let k={},O=!K;for(let I=0;I<v.length;I+=1){const A=v[I];k={...k,...A.data},(O||!c.branch.some(T=>T===A))&&(y.props[`data_${I}`]=k,O=O||Object.keys((j=A.data)!=null?j:{}).length>0)}if(O||(O=Object.keys(K.data).length!==Object.keys(k).length),!c.url||a.href!==c.url.href||c.error!==d||p!==void 0||O){y.props.page={error:d,params:i,route:m,status:f,url:new URL(a),form:p,data:O?k:K.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(A,T)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function _e({loader:a,parent:i,url:l,params:f,route:d,server_data_node:m}){var y,k,O,N,j,I,A;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let T=function(...w){for(const S of w){const{href:L}=new URL(S,l);v.dependencies.add(L)}};const x={route:{get id(){return v.route=!0,d.id}},params:new Proxy(f,{get:(w,S)=>(v.params.add(S),w[S])}),data:(k=m==null?void 0:m.data)!=null?k:null,url:Et(l,()=>{v.url=!0}),async fetch(w,S){let L;w instanceof Request?(L=w.url,S={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...S}):L=w;const $=new URL(L,l).href;return T($),u?Lt(L,$,S):It(L,S)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,i()}};Object.defineProperties(x,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),p=(O=await E.shared.load.call(null,x))!=null?O:null,p=p?await Ht(p):null}return{node:E,loader:a,server:m,shared:(N=E.shared)!=null&&N.load?{type:"data",data:p,uses:v}:null,data:(j=p!=null?p:m==null?void 0:m.data)!=null?j:null,slash:(A=(I=E.shared)==null?void 0:I.trailingSlash)!=null?A:m==null?void 0:m.slash}}function qe(a,i,l,f,d){if(R)return!0;if(!f)return!1;if(f.parent&&a||f.route&&i||f.url&&l)return!0;for(const m of f.params)if(d[m]!==c.params[m])return!0;for(const m of f.dependencies)if(t.some(p=>p(new URL(m))))return!0;return!1}function ge(a,i){var l,f;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((f=a.uses.params)!=null?f:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ce({id:a,invalidating:i,url:l,params:f,route:d}){var x;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:p,leaf:v}=d,E=[...p,v];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const k=c.url?a!==c.url.pathname+c.url.search:!1,O=c.route?a!==c.route.id:!1,N=E.reduce((w,S,L)=>{var ee;const $=c.branch[L],H=!!(S!=null&&S[0])&&(($==null?void 0:$.loader)!==S[1]||qe(w.some(Boolean),O,k,(ee=$.server)==null?void 0:ee.uses,f));return w.push(H),w},[]);if(N.some(Boolean)){try{y=await Qe(l,N)}catch(w){return se({status:500,error:await te(w,{url:l,params:f,route:{id:d.id}}),url:l,route:d})}if(y.type==="redirect")return y}const j=y==null?void 0:y.nodes;let I=!1;const A=E.map(async(w,S)=>{var ee;if(!w)return;const L=c.branch[S],$=j==null?void 0:j[S];if((!$||$.type==="skip")&&w[1]===(L==null?void 0:L.loader)&&!qe(I,O,k,(ee=L.shared)==null?void 0:ee.uses,f))return L;if(I=!0,($==null?void 0:$.type)==="error")throw $;return _e({loader:w[1],url:l,params:f,route:d,parent:async()=>{var ze;const Ke={};for(let be=0;be<S;be+=1)Object.assign(Ke,(ze=await A[be])==null?void 0:ze.data);return Ke},server_data_node:ge($===void 0&&w[0]?{type:"skip"}:$!=null?$:null,L==null?void 0:L.server)})});for(const w of A)w.catch(()=>{});const T=[];for(let w=0;w<E.length;w+=1)if(E[w])try{T.push(await A[w])}catch(S){if(S instanceof Ze)return{type:"redirect",location:S.location};let L=500,$;j!=null&&j.includes(S)?(L=(x=S.status)!=null?x:L,$=S.error):S instanceof $e?(L=S.status,$=S.body):$=await te(S,{params:f,url:l,route:{id:d.id}});const H=await Be(w,T,m);return H?await Q({url:l,params:f,branch:T.slice(0,H.idx).concat(H.node),status:L,error:$,route:d}):await Je(l,{id:d.id},$,L)}else T.push(void 0);return await Q({url:l,params:f,branch:T,status:200,error:null,route:d,form:i?void 0:null})}async function Be(a,i,l){for(;a--;)if(l[a]){let f=a;for(;!i[f];)f-=1;try{return{idx:f+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:i,url:l,route:f}){var y;const d={},m=await Pe();let p=null;if(m.server)try{const k=await Qe(l,[!0]);if(k.type!=="data"||k.nodes[0]&&k.nodes[0].type!=="data")throw 0;p=(y=k.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||n)&&await ie(l)}const v=await _e({loader:Pe,url:l,params:d,route:f,parent:()=>Promise.resolve({}),server_data_node:ge(p)}),E={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Q({url:l,params:d,branch:[v,E],status:a,error:i,route:null})}function we(a,i){if(ht(a,e))return;const l=yt(a.pathname.slice(e.length)||"/");for(const f of Re){const d=f.exec(l);if(d)return{id:a.pathname+a.search,invalidating:i,route:f,params:bt(d),url:a}}}function Fe({url:a,type:i,intent:l,delta:f}){var v,E,y,k,O;let d=!1;const m={from:ce("from",{params:c.params,route:{id:(E=(v=c.route)==null?void 0:v.id)!=null?E:null},url:c.url}),to:ce("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(O=(k=l==null?void 0:l.route)==null?void 0:k.id)!=null?O:null},url:a}),willUnload:!l,type:i};f!==void 0&&(m.delta=f);const p={...m,cancel:()=>{d=!0}};return g||o.before_navigate.forEach(N=>N(p)),d?null:m}async function ye({url:a,scroll:i,keepfocus:l,redirect_chain:f,details:d,type:m,delta:p,nav_token:v,accepted:E,blocked:y}){const k=we(a,!1),O=Fe({url:a,type:m,delta:p,intent:k});if(!O){y();return}Se(P),E(),g=!0,u&&z.navigating.set(O),await De(k,a,f,{scroll:i,keepfocus:l,details:d},v,()=>{g=!1,o.after_navigate.forEach(N=>N(O)),z.navigating.set(null)})}async function Je(a,i,l,f){return a.origin===location.origin&&a.pathname===location.pathname&&!n?await se({status:f,error:l,url:a,route:i}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}function tt(){let a;r.addEventListener("mousemove",m=>{const p=m.target;clearTimeout(a),a=setTimeout(()=>{f(p,2)},20)});function i(m){f(m.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const l=new IntersectionObserver(m=>{for(const p of m)p.isIntersecting&&(oe(new URL(p.target.href).pathname),l.unobserve(p.target))},{threshold:0});function f(m,p){const{url:v,options:E,external:y}=Ee(m,e);y||(p<=E.preload_data?Te(v):p<=E.preload_code&&oe(v.pathname))}function d(){l.disconnect();for(const m of r.querySelectorAll("a")){const{url:p,external:v,options:E}=Ee(m,e);v||(E.preload_code===He.viewport&&l.observe(m),E.preload_code===He.eager&&oe(p.pathname))}}o.after_navigate.push(d),d()}return{after_navigate:a=>{Ie(()=>(o.after_navigate.push(a),()=>{const i=o.after_navigate.indexOf(a);o.after_navigate.splice(i,1)}))},before_navigate:a=>{Ie(()=>(o.before_navigate.push(a),()=>{const i=o.before_navigate.indexOf(a);o.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(h||!u)&&(_=!1)},goto:(a,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return me(a,i,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:i}=new URL(a,location.href);t.push(l=>l.href===i)}return Ue()},invalidateAll:()=>(R=!0,Ue()),preload_data:async a=>{const i=new URL(a,We(document));await Te(i)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:l,route:f}=c;if(!f)return;const d=await Be(c.branch.length,l,f.errors);if(d){const m=await Q({url:i,params:c.params,branch:l.slice(0,d.idx).concat(d.node),status:500,error:a.error,route:f});c=m.state;const p=fe();U.$set(m.props),p(),le().then(Oe)}}else if(a.type==="redirect")me(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...K,form:a.data,status:a.status}},l=fe();U.$set(i),l(),a.type==="success"&&le().then(Oe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var f,d;let l=!1;if(!g){const m={from:ce("from",{params:c.params,route:{id:(d=(f=c.route)==null?void 0:f.id)!=null?d:null},url:c.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};o.before_navigate.forEach(p=>p(m))}l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[xe]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||tt(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:l,url:f,options:d,has:m}=Ee(i.composedPath()[0],e);if(!l||!f||!(l instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||m.download)return;if(d.reload||m.rel_external||m.target){Fe({url:f,type:"link"})||i.preventDefault(),g=!0;return}const[v,E]=f.href.split("#");if(E!==void 0&&v===location.href.split("#")[0]){b=!0,Se(P),c.url=f,z.page.set({...K,url:f}),z.page.notify();return}ye({url:f,scroll:d.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var l;if((l=i.state)!=null&&l[V]){if(i.state[V]===P)return;const f=i.state[V]-P;ye({url:new URL(location.href),scroll:re[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[V]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:l,params:f,route:d,data:m,form:p})=>{var y;n=!0;const v=new URL(location.href);let E;try{const k=l.map(async(O,N)=>{const j=m[N];return _e({loader:he[O],url:v,params:f,route:d,parent:async()=>{const I={};for(let A=0;A<N;A+=1)Object.assign(I,(await k[A]).data);return I},server_data_node:ge(j)})});E=await Q({url:v,params:f,branch:await Promise.all(k),status:a,error:i,form:p,route:(y=Re.find(({id:O})=>O===d.id))!=null?y:null})}catch(k){if(k instanceof Ze){await ie(new URL(k.location,location.href));return}E=await se({status:k instanceof $e?k.status:500,error:await te(k,{url:v,params:f,route:d}),url:v,route:d})}Ve(E)}}}async function Qe(r,e){var c;const t=new URL(r);t.pathname=St(r.pathname);const s=await pe(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(c=o.nodes)==null||c.forEach(n=>{var u,_;(n==null?void 0:n.type)==="data"&&(n.data=en(n.data),n.uses={dependencies:new Set((u=n.uses.dependencies)!=null?u:[]),params:new Set((_=n.uses.params)!=null?_:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),o}function te(r,e){var t;return r instanceof $e?r.body:(t=Wt.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const nn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of nn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function fe(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:t,target:s,version:o}){gt(t),_t(o);const c=tn({target:s,base:t.base});mt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{sn as start};
