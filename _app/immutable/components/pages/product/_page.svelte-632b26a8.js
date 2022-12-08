import{S as j,i as z,s as K,R as W,k as _,q as k,a as q,e as G,l as b,m as v,r as w,h as u,c as S,b as P,I as d,T as X,B as N,P as Y,n as h,Q as Z,J as $,u as tt}from"../../../chunks/index-a6d6efdd.js";import{r as J,d as M,g as et,a as at,l as O,e as Q,f as st}from"../../../chunks/firebase-dc3cb49a.js";import{u as lt,a as U}from"../../../chunks/state-239d256a.js";import{p as rt}from"../../../chunks/stores-70726012.js";import{b as ot}from"../../../chunks/paths-6cd3a76e.js";function nt(n){let t,a=n[12].message+"",c;return{c(){t=_("h2"),c=k(a),this.h()},l(l){t=b(l,"H2",{class:!0});var e=v(t);c=w(e,a),e.forEach(u),this.h()},h(){h(t,"class","mx-auto text-xl")},m(l,e){P(l,t,e),d(t,c)},p:N,d(l){l&&u(t)}}}function ct(n){let t,a,c,l,e,s,r=n[1].name+"",i,f,y,E,L=n[1].price.toLocaleString()+"",T,A,o,m=n[0]?"Add to Cart":"Login first",D,I,C,R,B;return{c(){t=_("div"),a=_("img"),l=q(),e=_("div"),s=_("h1"),i=k(r),f=q(),y=_("p"),E=k("Rp "),T=k(L),A=q(),o=_("button"),D=k(m),this.h()},l(g){t=b(g,"DIV",{class:!0});var p=v(t);a=b(p,"IMG",{class:!0,src:!0,alt:!0}),l=S(p),e=b(p,"DIV",{class:!0});var x=v(e);s=b(x,"H1",{class:!0});var V=v(s);i=w(V,r),V.forEach(u),f=S(x),y=b(x,"P",{class:!0});var H=v(y);E=w(H,"Rp "),T=w(H,L),H.forEach(u),A=S(x),o=b(x,"BUTTON",{class:!0});var F=v(o);D=w(F,m),F.forEach(u),x.forEach(u),p.forEach(u),this.h()},h(){h(a,"class","h-48 w-48"),Z(a.src,c=n[1].image)||h(a,"src",c),h(a,"alt",n[1].name+"-image"),h(s,"class","font-bold text-xl text-black"),h(y,"class","text-2xl"),o.disabled=I=!n[0],h(o,"class",C="mt-4 py-2 w-full rounded-lg text-center font-bold "+(n[0]?"text-white bg-green-400":"text-gray-500 bg-gray-200")),h(e,"class","flex flex-col"),h(t,"class","flex py-4 gap-4")},m(g,p){P(g,t,p),d(t,a),d(t,l),d(t,e),d(e,s),d(s,i),d(e,f),d(e,y),d(y,E),d(y,T),d(e,A),d(e,o),d(o,D),R||(B=$(o,"click",n[3]),R=!0)},p(g,p){p&1&&m!==(m=g[0]?"Add to Cart":"Login first")&&tt(D,m),p&1&&I!==(I=!g[0])&&(o.disabled=I),p&1&&C!==(C="mt-4 py-2 w-full rounded-lg text-center font-bold "+(g[0]?"text-white bg-green-400":"text-gray-500 bg-gray-200"))&&h(o,"class",C)},d(g){g&&u(t),R=!1,B()}}}function it(n){let t,a;return{c(){t=_("span"),a=k("Loading data...")},l(c){t=b(c,"SPAN",{});var l=v(t);a=w(l,"Loading data..."),l.forEach(u)},m(c,l){P(c,t,l),d(t,a)},p:N,d(c){c&&u(t)}}}function dt(n){let t,a,c,l,e,s={ctx:n,current:null,token:null,hasCatch:!0,pending:it,then:ct,catch:nt,value:1,error:12};return W(n[2],s),{c(){t=_("head"),a=_("title"),c=k("Product Detail"),l=q(),e=G(),s.block.c()},l(r){t=b(r,"HEAD",{});var i=v(t);a=b(i,"TITLE",{});var f=v(a);c=w(f,"Product Detail"),f.forEach(u),i.forEach(u),l=S(r),e=G(),s.block.l(r)},m(r,i){P(r,t,i),d(t,a),d(a,c),P(r,l,i),P(r,e,i),s.block.m(r,s.anchor=i),s.mount=()=>e.parentNode,s.anchor=e},p(r,[i]){n=r,X(s,n,i)},i:N,o:N,d(r){r&&u(t),r&&u(l),r&&u(e),s.block.d(r),s.token=null,s=null}}}function ut(n,t,a){let c;Y(n,rt,o=>a(7,c=o));const l=c.url.searchParams.get("id");let e,s,r,i,f,E=(async()=>{const o=J(Q,"products/"+l),m=(await M(o)).val();if(m)return L(),m;throw new Error("Product Not Found")})();lt.subscribe(o=>{a(0,s=o)});const L=async()=>{e=et(at),a(1,f=await E),r={item_id:l,item_name:f.name,price:f.price},i={...r,quantity:1},O(e,"select_item",r)},T=()=>{s||(window.location.href=ot+"/login");const o={...i,image:f.image},m=J(Q,"cart/"+s.uid+"/"+i.item_id);M(m).then(D=>{D.val()?U("This item is already in the cart"):(st(m,o),U("Item added to cart"),A())})},A=()=>{const o={currency:"IDR",value:i.price,items:[i]};O(e,"add_to_cart",o)};return[s,f,E,T]}class bt extends j{constructor(t){super(),z(this,t,ut,dt,K,{})}}export{bt as default};