(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var c=n(6),r=n(4),a=n(7),o=n(0),i=n.n(o),u=n(3),s=n(8),d=(n(16),["2.jpg","1.jpg","0.jpg"]),l=function(t){return{x:0,y:-4*t,scale:1.4,rot:20*Math.random()-10,delay:100*t}},f=function(t){return{x:0,rot:0,scale:4.5,y:-1e3}},b=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};function j(){var t=Object(o.useState)(function(){return new Set}),e=Object(r.a)(t,1)[0],n=Object(u.c)(d.length,function(t){return Object(c.a)({},l(t),{from:f(t)})}),a=Object(r.a)(n,2),j=a[0],p=a[1],g=Object(s.a)(function(t){var n=Object(r.a)(t.args,1)[0],c=t.down,a=Object(r.a)(t.delta,1)[0],o=(t.distance,Object(r.a)(t.direction,1)[0]),i=t.velocity,u=o<0?-1:1;!c&&i>.2&&e.add(n),p(function(t){if(n===t){var r=e.has(n);return{x:r?(200+window.innerWidth)*u:c?a:0,rot:a/100+(r?10*u*i:0),scale:c?1.1:1,delay:void 0,config:{friction:50,tension:c?800:r?200:500}}}}),c||e.size!==d.length||setTimeout(function(){return e.clear()||p(function(t){return l(t)})},600)});return j.map(function(t,e){var n=t.x,c=t.y,r=t.rot,a=t.scale;return i.a.createElement(u.a.div,{key:e,style:{transform:Object(u.b)([n,c],function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")})}},i.a.createElement(u.a.div,Object.assign({},g(e),{style:{transform:Object(u.b)([r,a],b),backgroundImage:"url(".concat(d[e],")")}})))})}Object(a.render)(i.a.createElement(j,null),document.getElementById("deck"))},16:function(t,e,n){},9:function(t,e,n){t.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.7bcd1ea8.chunk.js.map