"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([54],{515:function(t,a,s){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var a=document.createElement("style"),s=document.getElementsByTagName("head")[0];a.innerHTML=e(t),a.id=n,a.type="text/css",s?s.appendChild(a):window.addEventListener("load",function(){s.appendChild(a)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},542:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("u-article",[s("h1",[t._v("分页 Pagination")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-pagination",{attrs:{total:11}}),s("u-pagination",{attrs:{total:11,page:6}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"11"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"11"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":page")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"6"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("显示数量")]),s("p",[t._v("当页数多时，可以使用"),s("code",{pre:!0},[t._v("side")]),t._v("和"),s("code",{pre:!0},[t._v("around")]),t._v("来设置两边和中间恒定显示的数量。")]),s("div",{staticClass:"u-example"},[s("u-pagination",{attrs:{total:11,page:6,side:1,around:3}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"11"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":page")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"6"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":side")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":around")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"3"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("只读和禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-pagination",{attrs:{total:11,readonly:""}}),s("u-pagination",{attrs:{total:11,disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"11"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":total")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"11"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pagination")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),s("h2",[t._v("API")]),s("h3",[t._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop/Attr")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("page")]),s("td",[t._v("Number")]),s("td",[s("code",{pre:!0},[t._v("1")])]),s("td",[t._v("当前页码")])]),s("tr",[s("td",[t._v("total")]),s("td",[t._v("Number")]),s("td",[s("code",{pre:!0},[t._v("11")])]),s("td",[t._v("总页数")])]),s("tr",[s("td",[t._v("side")]),s("td",[t._v("Number")]),s("td",[s("code",{pre:!0},[t._v("2")])]),s("td",[t._v("当页数多时，两边恒定显示的数量")])]),s("tr",[s("td",[t._v("around")]),s("td",[t._v("Number")]),s("td",[s("code",{pre:!0},[t._v("5")])]),s("td",[t._v("当页数多时，中间恒定显示的数量")])]),s("tr",[s("td",[t._v("readonly")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否只读")])]),s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否禁用")])])])]),s("h3",[t._v("Events")]),s("h4",[t._v("@before-select")]),s("p",[t._v("选择分页前触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.page")]),s("td",[t._v("Number")]),s("td",[t._v("选择的页码")])]),s("tr",[s("td",[t._v("$event.oldPage")]),s("td",[t._v("Number")]),s("td",[t._v("旧的页码")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止选择流程")])])])]),s("h4",[t._v("@select")]),s("p",[t._v("选择分页时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.page")]),s("td",[t._v("Number")]),s("td",[t._v("选择的页码")])]),s("tr",[s("td",[t._v("$event.oldPage")]),s("td",[t._v("Number")]),s("td",[t._v("旧的页码")])])])]),s("h4",[t._v("@change")]),s("p",[t._v("页码改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.page")]),s("td",[t._v("Number")]),s("td",[t._v("当前页码")])]),s("tr",[s("td",[t._v("$event.oldPage")]),s("td",[t._v("Number")]),s("td",[t._v("旧的页码")])])])])])},staticRenderFns:[]},e=s(0)(null,n,!1,null,null,null);a.default=e.exports}});