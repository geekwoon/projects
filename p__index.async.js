(self.webpackChunk=self.webpackChunk||[]).push([[866],{74381:function(r,u,e){"use strict";e.r(u),e.d(u,{default:function(){return L}});var s=e(15009),t=e.n(s),a=e(99289),p=e.n(a),l=e(5574),v=e.n(l),i=e(67294),c={container:"container___bQRsR",leftArrow:"leftArrow___L3rBW",arrow:"arrow___jW_zd",rightArrow:"rightArrow___ZJAyS",content:"content___Blfln"},o=e(85893),f=function(y){var S=y.content,d=y.interval,w=d===void 0?3e3:d,m=(0,i.useState)(0),T=v()(m,2),n=T[0],N=T[1],A=(0,i.useRef)(),x=S;(0,i.useEffect)(function(){return x.length>1&&(A.current=setInterval(function(){N(function(I){return(I+1)%x.length})},w)),function(){clearInterval(A.current)}},[x.length,w]);var M=function(){N(function(R){return R===0?x.length-1:R-1})},$=function(){N(function(R){return(R+1)%x.length})};return console.log("current = ",x[n]),(0,o.jsxs)("div",{className:c.container,children:[x.length>1&&(0,o.jsx)("div",{className:c.leftArrow,children:(0,o.jsx)("div",{className:c.arrow,onClick:M})}),(0,o.jsx)("div",{className:c.content,children:x[n]}),x.length>1&&(0,o.jsx)("div",{className:c.rightArrow,children:(0,o.jsx)("div",{className:c.arrow,onClick:$})})]})},O=f,h=e(97857),j=e.n(h);function E(g,y){return b.apply(this,arguments)}function b(){return b=p()(t()().mark(function g(y,S){var d,w,m;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d={method:"GET",headers:{"Content-Type":"application/json"}},w=j()(j()({},d),S),n.prev=2,n.next=5,fetch(y,w);case 5:if(m=n.sent,m.ok){n.next=8;break}throw new Error("HTTP error! status: ".concat(m.status));case 8:return n.next=10,m.json();case 10:return n.abrupt("return",n.sent);case 13:throw n.prev=13,n.t0=n.catch(2),console.error("\u8BF7\u6C42\u5931\u8D25:",n.t0),n.t0;case 17:case"end":return n.stop()}},g,null,[[2,13]])})),b.apply(this,arguments)}function k(g){return C.apply(this,arguments)}function C(){return C=p()(t()().mark(function g(y){return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",E("/all",{method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}));case 1:case"end":return d.stop()}},g)})),C.apply(this,arguments)}var P={container:"container___lGekF"};function L(){var g=(0,i.useState)(""),y=v()(g,2),S=y[0],d=y[1];return(0,i.useEffect)(function(){var w=function(){var m=p()(t()().mark(function T(){var n;return t()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,k();case 2:n=A.sent,console.log("response = ",n),d(JSON.stringify(n));case 5:case"end":return A.stop()}},T)}));return function(){return m.apply(this,arguments)}}();w()},[]),(0,o.jsxs)("div",{className:P.container,children:[(0,o.jsx)(O,{content:[S]}),(0,o.jsx)("p",{children:"\u8F6E\u64AD\u56FE\u2F70\u4F8B"})]})}},75251:function(r,u,e){"use strict";var s;var t=e(67294),a=Symbol.for("react.element"),p=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,v=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(o,f,O){var h,j={},E=null,b=null;O!==void 0&&(E=""+O),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(b=f.ref);for(h in f)l.call(f,h)&&!i.hasOwnProperty(h)&&(j[h]=f[h]);if(o&&o.defaultProps)for(h in f=o.defaultProps,f)j[h]===void 0&&(j[h]=f[h]);return{$$typeof:a,type:o,key:E,ref:b,props:j,_owner:v.current}}s=p,u.jsx=c,u.jsxs=c},85893:function(r,u,e){"use strict";r.exports=e(75251)},37923:function(r){function u(e,s){(s==null||s>e.length)&&(s=e.length);for(var t=0,a=new Array(s);t<s;t++)a[t]=e[t];return a}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},82187:function(r){function u(e){if(Array.isArray(e))return e}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},73964:function(r){function u(e,s){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,p,l,v,i=[],c=!0,o=!1;try{if(l=(t=t.call(e)).next,s===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(a=l.call(t)).done)&&(i.push(a.value),i.length!==s);c=!0);}catch(f){o=!0,p=f}finally{try{if(!c&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(o)throw p}}return i}}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},69094:function(r){function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},5574:function(r,u,e){var s=e(82187),t=e(73964),a=e(96263),p=e(69094);function l(v,i){return s(v)||t(v,i)||a(v,i)||p()}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports},96263:function(r,u,e){var s=e(37923);function t(a,p){if(a){if(typeof a=="string")return s(a,p);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return s(a,p)}}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
