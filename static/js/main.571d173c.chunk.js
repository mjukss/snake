(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);for(var r=n(0),i=n(1),c=n.n(i),a=n(8),s=n.n(a),o=(n(15),n(6)),u=n(2),f=n(9),O=n.n(f),j=n(3),l=n.n(j),b=[],p=-1,d=0,g=0;g<400;g++)19===p&&(d+=1),19===p&&(p=-1),b.push([p+=1,d]);console.log(b);var S=function(t){var e=t.apple,n=t.tail,i=t.position;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:l.a.grid}),Object(r.jsx)("div",{className:l.a.unitWrapper,children:b.map((function(t,c){return Object(r.jsx)("div",{className:O()(l.a.unit,JSON.stringify(t)===JSON.stringify(i)&&l.a.active,JSON.stringify(n).includes(JSON.stringify(t))&&l.a.tail,JSON.stringify(e).includes(JSON.stringify(t))&&l.a.apple)},"".concat(c))}))})]})},y=function(){var t=Object(i.useState)(0),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(0),s=Object(u.a)(a,2),f=s[0],O=s[1],j=Object(i.useState)([0,0]),l=Object(u.a)(j,2),b=l[0],p=l[1],d=Object(i.useState)(""),g=Object(u.a)(d,2),y=g[0],h=g[1],v=Object(i.useState)([[-2,7],[-1,7]]),w=Object(u.a)(v,2),J=w[0],N=w[1],x=Object(i.useState)([4,3]),_=Object(u.a)(x,2),A=_[0],m=_[1],k=Object(i.useState)(!1),E=Object(u.a)(k,2),F=E[0],L=E[1],D=Object(i.useState)(!1),G=Object(u.a)(D,2),P=G[0],R=G[1];Object(i.useEffect)((function(){I(),setTimeout((function(){L(!F)}),100)}),[F]);var C=Object(i.useRef)("");Object(i.useEffect)((function(){window.addEventListener("keydown",(function(t){("ArrowRight"===t.key&&"ArrowLeft"!==C.current||"ArrowLeft"===t.key&&"ArrowRight"!==C.current||"ArrowUp"===t.key&&"ArrowDown"!==C.current||"ArrowDown"===t.key&&"ArrowUp"!==C.current)&&(h(t.key),C.current=t.key)}))}),[]);var I=function(){"ArrowRight"===y?c(n+1):"ArrowLeft"===y?c(n-1):"ArrowUp"===y?O(f-1):"ArrowDown"===y&&O(f+1),f>19?O(0):f<0?O(19):n>19?c(0):n<0&&c(19)};Object(i.useEffect)((function(){I()}),[y]);var M=Object(i.useRef)(!0);Object(i.useEffect)((function(){M.current?M.current=!1:(p([n,f]),function(){var t=Object(o.a)(J);t.unshift(b),t.pop(),N(Object(o.a)(t))}(),U(),W())}),[n,f]);var W=function(){JSON.stringify(J).includes(JSON.stringify(b))&&(console.log("Auch"),N([[-1,0],[-2,0]]),p([-5,0]),R(!P),h(""))},T=function(t){return Math.floor(Math.random()*Math.floor(t))},U=function(){if(JSON.stringify(b)===JSON.stringify(A)){!function(){for(var t=[T(19),T(19)];JSON.stringify(J).includes(JSON.stringify(t))||JSON.stringify(b)===JSON.stringify(t);)t=[T(19),T(19)];m(t)}();var t=Object(o.a)(J);t.unshift(b),N(t)}};return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsx)("h1",{children:"Snake"}),P?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Press arrow to start"}),Object(r.jsx)(S,{apple:A,tail:J,position:b})]}):Object(r.jsx)("button",{onClick:function(){return R(!P)},children:"Play"})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),c(t),a(t)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),h()},3:function(t,e,n){t.exports={unitWrapper:"Grid_unitWrapper__We6xJ",unit:"Grid_unit__3i-t1",active:"Grid_active__9v9qI",tail:"Grid_tail__3Zpz5",apple:"Grid_apple__gPStO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.571d173c.chunk.js.map