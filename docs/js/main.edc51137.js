(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)a=u[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={main:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-auto-text/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push(["f48d","chunk-vendors"]),n()})({3550:function(e,t,n){"use strict";var r=n("bfbf"),o=n.n(r);o.a},bfbf:function(e,t,n){var r=n("e90c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("cfcc1814",r,!0,{sourceMap:!1,shadowMode:!1})},e90c:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".auto-text.clip{overflow:hidden;white-space:nowrap;text-overflow:clip}.auto-text.break{word-break:break-word}.auto-text.ellipsis{overflow:hidden;text-overflow:ellipsis;min-width:0;white-space:nowrap}",""])},f48d:function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("auto-text",{attrs:{"min-size":24,size:48,width:100}},[e._v(e._s(e.text))])],1)},i=[],a={name:"App",data:function(){return{text:"a"}},methods:{},mounted:function(){var e=this;setTimeout(function(){e.text="asfasfasfasdfasf"},1e3)}},u=a,s=n("2877"),c=Object(s["a"])(u,o,i,!1,null,"14934a7b",null),l=c.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"box"},[n("div",{staticClass:"auto-text",class:e.overflow,style:e.styles},[e._t("default",[e._v(e._s(e.text))])],2)])},p=[],d=(n("c5f6"),{name:"auto-text",props:{width:Number,text:String,size:{type:Number,required:!0},minSize:{type:Number,default:16},overflow:{type:String,default:"ellipsis",validator:function(e){return"ellipsis"===e||"clip"===e||"break"===e}}},data:function(){return{fontSize:this.size,styles:{}}},watch:{text:function(){this.computeFontsize()}},mounted:function(){this.computeFontsize()},methods:{createTempSpan:function(e){var t="get-text-width-"+this._uid,n=document.createElement("span");return n.innerText=e,n.className=t,n.style.whiteSpace="nowrap",this.$el.appendChild(n),n},removeTempSpan:function(e){this.$el.removeChild(e)},getTextWidth:function(e,t){return t.style.fontSize=e+"px",t.offsetWidth},computeFontsize:function(){var e=this;this.$nextTick(function(){var t=e.text||e.$el.innerText,n=e.width||e.$el.clientWidth,r=e.minSize,o=e.size,i=e.createTempSpan(t),a=e.getTextWidth(o,i);while(a>n&&o>r)o-=1,a=e.getTextWidth(o,i);e.removeTempSpan(i),e.fontSize=o,e.styles={fontSize:o+"px",width:n+"px"}})}}}),h=d,m=(n("3550"),Object(s["a"])(h,f,p,!1,null,null,null)),v=m.exports;"undefined"!==typeof window&&window.Vue&&window.Vue.component(v.name,v);var w=v,x=n("c5d4"),b=n.n(x);r["a"].config.productionTip=!1,r["a"].component(b.a.name,b.a),r["a"].component(w.name,w),new r["a"]({render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=main.edc51137.js.map