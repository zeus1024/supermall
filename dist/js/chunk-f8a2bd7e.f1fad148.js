(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8a2bd7e"],{"0b41":function(t,e,n){"use strict";n("cd06")},"114e":function(t,e,n){"use strict";n("87a6")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),h=p.set,m=p.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,r){a(t,u,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[l],{that:t,AS_ENTRIES:n})})),p=m(e),v=function(t,e,n){var r,i,o=p(t),s=b(t,e);return s?s.value=n:(o.last=s={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),f?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},b=function(t,e){var n,r=p(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=b(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(u.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),f&&r(u.prototype,"size",{get:function(){return p(this).size}}),u},setStrong:function(t,e,n){var r=e+" Iterator",i=m(e),o=m(r);l(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),h=n("7156");t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),v=-1!==t.indexOf("Weak"),b=m?"set":"add",g=i[t],w=g&&g.prototype,y=g,x={},k=function(t){var e=w[t];s(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},T=o(t,"function"!=typeof g||!(v||w.forEach&&!f((function(){(new g).entries().next()}))));if(T)y=n.getConstructor(e,t,m,b),a.enable();else if(o(t,!0)){var _=new y,O=_[b](v?{}:-0,1)!=_,S=f((function(){_.has(1)})),$=d((function(t){new g(t)})),C=!v&&f((function(){var t=new g,e=5;while(e--)t[b](e,e);return!t.has(-0)}));$||(y=e((function(e,n){l(e,y,t);var r=h(new g,e,y);return void 0!=n&&c(n,r[b],{that:r,AS_ENTRIES:m}),r})),y.prototype=w,w.constructor=y),(S||C)&&(k("delete"),k("has"),m&&k("get")),(C||O)&&k(b),v&&w.clear&&delete w.clear}return x[t]=y,r({global:!0,forced:y!=g},x),p(y,t),v||n.setStrong(y,t,m),y}},"87a6":function(t,e,n){},"9ab8":function(t,e,n){"use strict";n("e62d")},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"home"}},[n("nav-bar",{attrs:{id:"home-nav"}},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabcontrol1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{pullingUp:t.loadMore,scrollPosition:t.scrollPosition}},[n("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("home-recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"tabcontrol2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTopClick.apply(null,arguments)}}})],1)},i=[],o=n("6b75");function s(t){if(Array.isArray(t))return Object(o["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=n("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||a(t)||Object(c["a"])(t)||l()}var f=n("ade3"),d=(n("6062"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.error}},[n("swiper",t._l(t.banners,(function(e){return n("swiper-item",{key:t.banners.acm},[n("a",[n("img",{attrs:{src:e.image,alt:"kong"},on:{load:t.imageLoad}})])])})),1)],1)}),p=[],h=n("dc2c"),m={name:"HomeSwiper",components:{Swiper:h["a"],SwiperItem:h["b"]},props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)},error:function(){this.$router.push("/error")}}},v=m,b=n("2877"),g=Object(b["a"])(v,d,p,!1,null,null,null),w=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend",on:{click:t.godetail}},t._l(t.recommends,(function(e){return n("div",{staticClass:"recommend-item"},[n("a",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],key:e.image,attrs:{alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},x=[],k={name:"HomeRecommendView",props:{recommends:{type:Array,default:function(){return[]}}},methods:{godetail:function(){this.$router.push("/details/1m70y5k")}}},T=k,_=(n("114e"),Object(b["a"])(T,y,x,!1,null,"4f301240",null)),O=_.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature",on:{click:t.godetail}},[t._m(0)])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",[r("img",{attrs:{src:n("5cbe"),alt:""}})])}],C={name:"FeatureView",methods:{godetail:function(){this.$router.push("/details/1m70y5k")}}},j=C,I=(n("9ab8"),Object(b["a"])(j,S,$,!1,null,"2f6dd48c",null)),E=I.exports,z=n("a7ac"),F=n("5d17"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{staticClass:"tab-control-item",class:{active:r==t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},L=[],A={name:"TabControl",props:{titles:{text:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},G=A,N=(n("0b41"),Object(b["a"])(G,H,L,!1,null,"6d2ccb9d",null)),P=N.exports,D=n("b33d"),M=n("1bab");function B(){return Object(M["a"])({url:"/home/multidata"})}function R(t,e){return Object(M["a"])({url:"/home/data",params:{type:t,page:e}})}var V=n("aff8"),Y={name:"home",components:Object(f["a"])({HomeSwiper:w,HomeRecommendView:O,FeatureView:E,NavBar:z["a"],Scroll:F["a"],TabControl:P,GoodsList:D["a"]},"Scroll",F["a"]),data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isTabFixed:!1,tabOffsetTop:0,scrollY:0}},mixins:[V["b"],V["a"]],created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.scrollY,0)},deactivated:function(){this.scrollY=this.$refs.scroll.getScrollY(),this.$bus.$off("ImageLoad",this.refresh)},mounted:function(){},computed:{showGoods:function(){return this.goods[this.currentType].list}},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,0),this.$refs.tabcontrol1.currentIndex=t,this.$refs.tabcontrol2.currentIndex=t},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},getHomeMultidata:function(){var t=this;B().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;R(t,n).then((function(n){var r;(r=e.goods[t].list).push.apply(r,u(n.data.list));var i=new Set(e.goods[t].list);e.goods[t].list=Array.from(i),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))},scrollPosition:function(t){this.isShowBackTop=-t.y>1e3,this.isTabFixed=-t.y>this.tabOffsetTop}}},J=Y,K=(n("d125"),Object(b["a"])(J,r,i,!1,null,"2d9d7ad8",null));e["default"]=K.exports},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cd06:function(t,e,n){},d125:function(t,e,n){"use strict";n("de61")},de61:function(t,e,n){},e62d:function(t,e,n){},f183:function(t,e,n){var r=n("23e7"),i=n("d012"),o=n("861d"),s=n("5135"),a=n("9bf2").f,c=n("241c"),l=n("057f"),u=n("90e3"),f=n("bb2f"),d=!1,p=u("meta"),h=0,m=Object.isExtensible||function(){return!0},v=function(t){a(t,p,{value:{objectID:"O"+h++,weakData:{}}})},b=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,p)){if(!m(t))return"F";if(!e)return"E";v(t)}return t[p].objectID},g=function(t,e){if(!s(t,p)){if(!m(t))return!0;if(!e)return!1;v(t)}return t[p].weakData},w=function(t){return f&&d&&m(t)&&!s(t,p)&&v(t),t},y=function(){x.enable=function(){},d=!0;var t=c.f,e=[].splice,n={};n[p]=1,t(n).length&&(c.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===p){e.call(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},x=t.exports={enable:y,fastKey:b,getWeakData:g,onFreeze:w};i[p]=!0}}]);
//# sourceMappingURL=chunk-f8a2bd7e.f1fad148.js.map