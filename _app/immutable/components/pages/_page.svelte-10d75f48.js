import{S as O,i as j,s as z,k as E,a as q,q as P,l as C,m as D,c as B,r as T,h,n as g,Q as L,b as S,I as v,J as te,u as Q,B as R,f as p,d as V,t as I,R as F,e as G,g as M,C as le,w as ae,x as ie,y as re,D as ne,E as se,z as ce}from"../../chunks/index-b30536f4.js";import{b as oe}from"../../chunks/paths-6cd3a76e.js";import{r as K,d as U,e as W}from"../../chunks/firebase-dc3cb49a.js";import{u as fe}from"../../chunks/state-5c67334c.js";function ue(c){var N;let t,a,e,r,l,f,o,m,d,k,u=((N=c[3])==null?void 0:N.toLocaleString())+"",H,w,_;return{c(){t=E("div"),a=E("img"),l=q(),f=E("h1"),o=P(c[1]),m=q(),d=E("p"),k=P("Rp "),H=P(u),this.h()},l(i){t=C(i,"DIV",{class:!0});var s=D(t);a=C(s,"IMG",{class:!0,src:!0,alt:!0}),l=B(s),f=C(s,"H1",{class:!0});var n=D(f);o=T(n,c[1]),n.forEach(h),m=B(s),d=C(s,"P",{});var b=D(d);k=T(b,"Rp "),H=T(b,u),b.forEach(h),s.forEach(h),this.h()},h(){g(a,"class","h-36 w-36 mx-auto"),L(a.src,e=c[2])||g(a,"src",e),g(a,"alt",r=c[1]+"-image"),g(f,"class","font-bold text-lg text-gray-500"),g(t,"class","item-card border-2 border-gray-300 h-72 rounded-lg p-2 cursor-pointer overflow-clip")},m(i,s){S(i,t,s),v(t,a),v(t,l),v(t,f),v(f,o),v(t,m),v(t,d),v(d,k),v(d,H),w||(_=te(t,"click",c[5]),w=!0)},p(i,[s]){var n;s&4&&!L(a.src,e=i[2])&&g(a,"src",e),s&2&&r!==(r=i[1]+"-image")&&g(a,"alt",r),s&2&&Q(o,i[1]),s&8&&u!==(u=((n=i[3])==null?void 0:n.toLocaleString())+"")&&Q(H,u)},i:R,o:R,d(i){i&&h(t),w=!1,_()}}}function me(c,t,a){let{id:e}=t,{name:r}=t,{image:l}=t,{price:f}=t;const o=d=>{window.location.href=oe+"/product?id="+d},m=()=>o(e);return c.$$set=d=>{"id"in d&&a(0,e=d.id),"name"in d&&a(1,r=d.name),"image"in d&&a(2,l=d.image),"price"in d&&a(3,f=d.price)},[e,r,l,f,o,m]}class de extends O{constructor(t){super(),j(this,t,me,ue,z,{id:0,name:1,image:2,price:3})}}function _e(c){let t,a,e,r,l,f;return{c(){t=E("div"),a=E("img"),this.h()},l(o){t=C(o,"DIV",{class:!0});var m=D(t);a=C(m,"IMG",{src:!0,alt:!0}),m.forEach(h),this.h()},h(){L(a.src,e=c[1])||g(a,"src",e),g(a,"alt",r=c[0]+"-thumbnail"),g(t,"class","campaign-card w-60 h-28 border-2 border-gray-300 rounded-lg cursor-pointer overflow-hidden")},m(o,m){S(o,t,m),v(t,a),l||(f=te(t,"click",c[2]),l=!0)},p(o,[m]){m&2&&!L(a.src,e=o[1])&&g(a,"src",e),m&1&&r!==(r=o[0]+"-thumbnail")&&g(a,"alt",r)},i:R,o:R,d(o){o&&h(t),l=!1,f()}}}function he(c,t,a){let{id:e}=t,{name:r}=t,{thumbnail:l}=t;const f=()=>{window.location.href=oe+"/campaign?id="+e};return c.$$set=o=>{"id"in o&&a(3,e=o.id),"name"in o&&a(0,r=o.name),"thumbnail"in o&&a(1,l=o.thumbnail)},[r,l,f,e]}class ge extends O{constructor(t){super(),j(this,t,he,_e,z,{id:3,name:0,thumbnail:1})}}function X(c,t,a){const e=c.slice();return e[5]=t[a],e[7]=a,e}function Y(c,t,a){const e=c.slice();return e[8]=t[a],e[7]=a,e}function Z(c){let t,a;const e=[c[8],{id:c[7]}];let r={};for(let l=0;l<e.length;l+=1)r=le(r,e[l]);return t=new ge({props:r}),{c(){ae(t.$$.fragment)},l(l){ie(t.$$.fragment,l)},m(l,f){re(t,l,f),a=!0},p(l,f){const o=f&1?ne(e,[se(l[8]),e[1]]):{};t.$set(o)},i(l){a||(p(t.$$.fragment,l),a=!0)},o(l){I(t.$$.fragment,l),a=!1},d(l){ce(t,l)}}}function x(c){let t,a,e=c[8]&&Z(c);return{c(){e&&e.c(),t=G()},l(r){e&&e.l(r),t=G()},m(r,l){e&&e.m(r,l),S(r,t,l),a=!0},p(r,l){r[8]?e?(e.p(r,l),l&1&&p(e,1)):(e=Z(r),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(M(),I(e,1,1,()=>{e=null}),V())},i(r){a||(p(e),a=!0)},o(r){I(e),a=!1},d(r){e&&e.d(r),r&&h(t)}}}function $(c){let t,a;const e=[c[5],{id:c[7]}];let r={};for(let l=0;l<e.length;l+=1)r=le(r,e[l]);return t=new de({props:r}),{c(){ae(t.$$.fragment)},l(l){ie(t.$$.fragment,l)},m(l,f){re(t,l,f),a=!0},p(l,f){const o=f&2?ne(e,[se(l[5]),e[1]]):{};t.$set(o)},i(l){a||(p(t.$$.fragment,l),a=!0)},o(l){I(t.$$.fragment,l),a=!1},d(l){ce(t,l)}}}function ee(c){let t,a,e=c[5]&&$(c);return{c(){e&&e.c(),t=G()},l(r){e&&e.l(r),t=G()},m(r,l){e&&e.m(r,l),S(r,t,l),a=!0},p(r,l){r[5]?e?(e.p(r,l),l&2&&p(e,1)):(e=$(r),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(M(),I(e,1,1,()=>{e=null}),V())},i(r){a||(p(e),a=!0)},o(r){I(e),a=!1},d(r){e&&e.d(r),r&&h(t)}}}function pe(c){let t,a,e,r,l,f,o,m,d,k=c[0],u=[];for(let i=0;i<k.length;i+=1)u[i]=x(Y(c,k,i));const H=i=>I(u[i],1,1,()=>{u[i]=null});let w=c[1],_=[];for(let i=0;i<w.length;i+=1)_[i]=ee(X(c,w,i));const N=i=>I(_[i],1,1,()=>{_[i]=null});return{c(){t=E("head"),a=E("title"),e=P("Home"),r=q(),l=E("section"),f=E("div");for(let i=0;i<u.length;i+=1)u[i].c();o=q(),m=E("section");for(let i=0;i<_.length;i+=1)_[i].c();this.h()},l(i){t=C(i,"HEAD",{});var s=D(t);a=C(s,"TITLE",{});var n=D(a);e=T(n,"Home"),n.forEach(h),s.forEach(h),r=B(i),l=C(i,"SECTION",{id:!0,class:!0});var b=D(l);f=C(b,"DIV",{class:!0});var A=D(f);for(let y=0;y<u.length;y+=1)u[y].l(A);A.forEach(h),b.forEach(h),o=B(i),m=C(i,"SECTION",{class:!0});var J=D(m);for(let y=0;y<_.length;y+=1)_[y].l(J);J.forEach(h),this.h()},h(){g(f,"class","flex gap-2 relative min-w-max overflow-x-scroll pb-2"),g(l,"id","campaign-list"),g(l,"class","py-2 overflow-x-scroll"),g(m,"class","item-container grid gap-2 py-2 md:grid-cols-3 grid-cols-2")},m(i,s){S(i,t,s),v(t,a),v(a,e),S(i,r,s),S(i,l,s),v(l,f);for(let n=0;n<u.length;n+=1)u[n].m(f,null);S(i,o,s),S(i,m,s);for(let n=0;n<_.length;n+=1)_[n].m(m,null);d=!0},p(i,[s]){if(s&1){k=i[0];let n;for(n=0;n<k.length;n+=1){const b=Y(i,k,n);u[n]?(u[n].p(b,s),p(u[n],1)):(u[n]=x(b),u[n].c(),p(u[n],1),u[n].m(f,null))}for(M(),n=k.length;n<u.length;n+=1)H(n);V()}if(s&2){w=i[1];let n;for(n=0;n<w.length;n+=1){const b=X(i,w,n);_[n]?(_[n].p(b,s),p(_[n],1)):(_[n]=ee(b),_[n].c(),p(_[n],1),_[n].m(m,null))}for(M(),n=w.length;n<_.length;n+=1)N(n);V()}},i(i){if(!d){for(let s=0;s<k.length;s+=1)p(u[s]);for(let s=0;s<w.length;s+=1)p(_[s]);d=!0}},o(i){u=u.filter(Boolean);for(let s=0;s<u.length;s+=1)I(u[s]);_=_.filter(Boolean);for(let s=0;s<_.length;s+=1)I(_[s]);d=!1},d(i){i&&h(t),i&&h(r),i&&h(l),F(u,i),i&&h(o),i&&h(m),F(_,i)}}}function be(c,t,a){fe.subscribe(o=>{});let e=[];const r=async()=>{const o=K(W,"campaign");U(o).then(m=>{const d=m.val();a(0,e=d)})};let l=[];const f=async()=>{const o=K(W,"products");U(o).then(m=>{const d=m.val();a(1,l=d)})};return r(),f(),[e,l]}class Ce extends O{constructor(t){super(),j(this,t,be,pe,z,{})}}export{Ce as default};
