import{S as x,i as G,s as y,k as g,q as k,l as m,m as b,r as P,h as d,n as i,Q as w,b as I,I as h,J as q,B as p}from"../../../chunks/index-b30536f4.js";import{j as E,G as v,b as T,c as W,k as j,m as A,a as B}from"../../../chunks/firebase-c0b386ca.js";import{b as f}from"../../../chunks/paths-6cd3a76e.js";function D(r){let s,e,t,l,a,c,_;return{c(){s=g("div"),e=g("button"),t=g("img"),a=k(" Login with Google"),this.h()},l(o){s=m(o,"DIV",{class:!0});var n=b(s);e=m(n,"BUTTON",{class:!0});var u=b(e);t=m(u,"IMG",{class:!0,src:!0,alt:!0}),a=P(u," Login with Google"),u.forEach(d),n.forEach(d),this.h()},h(){i(t,"class","inline-block pr-2"),w(t.src,l=f+"/icon/google.png")||i(t,"src",l),i(t,"alt","google"),i(e,"class","p-2 border-2 border-gray-200 rounded-lg text-xl"),i(s,"class","flex justify-center pt-10")},m(o,n){I(o,s,n),h(s,e),h(e,t),h(e,a),c||(_=q(e,"click",r[0]),c=!0)},p,i:p,o:p,d(o){o&&d(s),c=!1,_()}}}function F(r){return[()=>{E(B,A).then(e=>{const t=v.credentialFromResult(e);t==null||t.accessToken;const l=T(W),a=e.user;j(l,{email:a.email}),window.location.href=f?f:"/"}).catch(e=>{e.code,e.message,e.customData.email,v.credentialFromError(e)})}]}class $ extends x{constructor(s){super(),G(this,s,F,D,y,{})}}export{$ as default};
