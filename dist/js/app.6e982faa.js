(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},c=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4643":"81abf45d","chunk-2d2163ab":"fcebbdb6","chunk-2d21a3d2":"7608a0fa","chunk-695b7bea":"826a7d76","chunk-00c44ca1":"70bf352d","chunk-46eabc67":"d9c06424"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-695b7bea":1,"chunk-00c44ca1":1,"chunk-46eabc67":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c4643":"31d6cfe0","chunk-2d2163ab":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-695b7bea":"a2b4958a","chunk-00c44ca1":"08a7a85b","chunk-46eabc67":"8032daf4"}[t]+".css",i=u.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"50bd":function(t,e,n){"use strict";n("8cf8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Details"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showTabBar?r("div",[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:"wffff"},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1):t._e()},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},s=[],l={name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.push(this.path)}}},f=l,d=(n("cb1d"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,"2fa6f535",null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},b=[],v={name:"TabBar"},g=v,y=(n("50bd"),Object(d["a"])(g,h,b,!1,null,"349c576a",null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:k,TabBarItem:m},data:function(){return{}},computed:{showTabBar:function(){return-1==this.$route.path.indexOf("/detail")}}},_=x,w=Object(d["a"])(_,c,o,!1,null,null,null),O=w.exports,T={name:"App",components:{MainTabBar:O}},j=T,E=(n("034f"),Object(d["a"])(j,a,i,!1,null,null,null)),S=E.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-695b7bea"),n.e("chunk-00c44ca1")]).then(n.bind(null,"b3d7"))},B=function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},A=function(){return n.e("chunk-2d2163ab").then(n.bind(null,"c228"))},$=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},M=function(){return Promise.all([n.e("chunk-695b7bea"),n.e("chunk-46eabc67")]).then(n.bind(null,"3ba4"))};r["a"].use(C["a"]);var L=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/details/:iid",component:M},{path:"/category",component:B},{path:"/profile",component:$},{path:"/cart",component:A}],N=new C["a"]({routes:L,mode:"hash"}),D=N;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(S)},router:D}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},"8cf8":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},cb1d:function(t,e,n){"use strict";n("e363")},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e363:function(t,e,n){},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.6e982faa.js.map