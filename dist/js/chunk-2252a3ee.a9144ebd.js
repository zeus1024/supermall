(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2252a3ee"],{4917:function(n,o,t){"use strict";t("abdc")},"8f20":function(n,o,t){n.exports=t.p+"img/404.696d5c55.png"},abdc:function(n,o,t){},dda8:function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"error"},[e("div",[e("img",{attrs:{src:t("8f20")}}),e("p",[n._v("您所访问的商品不存在 ")]),e("p",[n._v(n._s(n.errorTime)+" 秒以后自动返回首页")]),e("p"),n._v(" 或者您可以 "),e("span",{staticClass:"goHome",on:{click:n.goHome}},[n._v(" 点击这里 ")]),n._v("返回首页 "),e("p")])])},r=[],c={name:"Error",data:function(){return{errorTime:10,countDown:null}},created:function(){this.countdown()},methods:{countdown:function(){var n=this;this.countDown=window.setInterval((function(){n.errorTime--}),1e3),setTimeout((function(){0==n.$route.path.indexOf("/error")?(window.clearInterval(n.countDown),n.goHome()):window.clearInterval(n.countDown)}),1e4)},goHome:function(){this.$router.push("/home")}}},i=c,u=(t("4917"),t("2877")),s=Object(u["a"])(i,e,r,!1,null,"76056fbc",null);o["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2252a3ee.a9144ebd.js.map