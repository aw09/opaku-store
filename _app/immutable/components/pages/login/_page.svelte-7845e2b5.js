import{S as b,i as x,s as G,k as u,q as y,l as m,m as v,r as P,h as d,n as o,Q as w,b as E,I as h,J as I,B as p}from"../../../chunks/index-b30536f4.js";import{m as k,g as q,a as W,s as A,l as B,G as D,n as L,c as S}from"../../../chunks/firebase-dc3cb49a.js";import{b as f}from"../../../chunks/paths-6cd3a76e.js";import"../../../chunks/state-5c67334c.js";function T(n){let t,e,s,l,r,c,_;return{c(){t=u("div"),e=u("button"),s=u("img"),r=y(" Login with Google"),this.h()},l(a){t=m(a,"DIV",{class:!0});var i=v(t);e=m(i,"BUTTON",{class:!0});var g=v(e);s=m(g,"IMG",{class:!0,src:!0,alt:!0}),r=P(g," Login with Google"),g.forEach(d),i.forEach(d),this.h()},h(){o(s,"class","inline-block pr-2"),w(s.src,l=f+"/icon/google.png")||o(s,"src",l),o(s,"alt","google"),o(e,"class","p-2 border-2 border-gray-200 rounded-lg text-xl"),o(t,"class","flex justify-center pt-10")},m(a,i){E(a,t,i),h(t,e),h(e,s),h(e,r),c||(_=I(e,"click",n[0]),c=!0)},p,i:p,o:p,d(a){a&&d(t),c=!1,_()}}}function U(n){return[()=>{k(S,L).then(e=>{const s=q(W),l=e.user;A(s,{email:l.email}),B(s,"login",{method:"google"}),window.location.href=f?f:"/"}).catch(e=>{e.code,e.message,e.customData.email,D.credentialFromError(e)})}]}class J extends b{constructor(t){super(),x(this,t,U,T,G,{})}}export{J as default};
