(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(t,e,n){var content=n(375);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("ef377442",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n.r(e);var r={name:"Rightbar",props:["toc"]},c=(n(374),n(36)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-bar pl-0 pt-4 pt-md-0 pl-md-4 "},[n("p",{staticClass:"font-medium font-sm mb-0 pb-2 bb"},[t._v("\n        On this page\n    ")]),t._v(" "),t.toc&&t.toc.length>0?n("ul",{staticClass:"nav font-sm"},t._l(t.toc,(function(link){return n("li",{key:link.id,staticClass:"nav-item"},[n("NuxtLink",{staticClass:"pt-2 hover:text-blue-600",class:{"pl-4":3==link.depth},attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";var r=n(377),c=n.n(r);n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385);c.a.languages.vue=c.a.languages.markup,e.a=c.a},374:function(t,e,n){"use strict";n(371)},375:function(t,e,n){(e=n(52)(!1)).push([t.i,".right-bar a,.right-bar a:visited{color:rgba(0,0,0,.63)}",""]),t.exports=e},405:function(t,e,n){"use strict";n.r(e);n(70);var r=n(27),c=n(373),l={layout:"doc",mounted:function(){c.a.highlightAll()},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("docs").fetch();case 3:return r=e.sent,e.abrupt("return",{document:r});case 5:case"end":return e.stop()}}),e)})))()}},o=n(36),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row flex-wrap-reverse"},[e("div",{staticClass:"w-12/12 w-md-8/12 w-lg-9/12 w-xl-4/5 py-4 pr-4"},[e("nuxt-content",{attrs:{document:this.document}})],1),this._v(" "),this.document?e("div",{staticClass:"w-12/12 w-md-4/12 w-lg-3/12 w-xl-1/5 position-relative display-block"},[e("div",{staticClass:"sticky",staticStyle:{top:"calc(4.5rem + 2px)"}},[e("right-bar",{attrs:{toc:this.document.toc}})],1)]):this._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RightBar:n(372).default})}}]);