"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([3],{518:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function r(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function l(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=r(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},579:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-button",{nativeOn:{click:function(t){return s.open(t)}}},[s._v("Toast")])],1)},staticRenderFns:[]},r={components:{C75f147:a(0)({methods:{open:function(){this.$toast.show("Hello world")}}},n,!1,null,null,null).exports}},l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("消息提示 Toast")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h4",[s._v("声明式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toast.show()}}},[s._v("toast")]),a("u-toast",{ref:"toast",attrs:{message:"消息提示",position:"static"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toast.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"static"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastInfo.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastInfo",attrs:{message:"消息提示",state:"info"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastInfo.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastInfo"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastSucc.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastSucc",attrs:{message:"消息提示",state:"success"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastSucc.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastSucc"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastWarn.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastWarn",attrs:{message:"消息提示",state:"warnning"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastWarn.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastWarn"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warnning"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastError.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastError",attrs:{message:"消息提示",state:"error"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastError.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastError"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("命令式")]),a("p",[s._v("推荐使用下面的方式")]),a("div",{staticClass:"u-example"},[a("C75f147")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),s._v("Toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        open() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$toast.show("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello world'")]),s._v(");\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("position")]),a("td",[s._v("String")]),a("td",[s._v("top-center")]),a("td",[s._v("显示的位置，可选的值有：top-center, top-left, top-right, bottom-center, bottom-left, bottom-right, static")])]),a("tr",[a("td",[s._v("duration")]),a("td",[s._v("Number")]),a("td",[s._v("2000")]),a("td",[s._v("默认的显示位置")])]),a("tr",[a("td",[s._v("single")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("只显示一个toast提示，，需要手动设置，默认为false")])]),a("tr",[a("td",[s._v("state")]),a("td",[s._v("String")]),a("td",[s._v("''")]),a("td",[s._v("可选值有info，success, warnning, error和默认的五种样式toast")])]),a("tr",[a("td",[s._v("message")]),a("td",[s._v("String")]),a("td",[s._v("''")]),a("td",[s._v("提示内容")])]),a("tr",[a("td",[s._v("closeable")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("是否可关闭提示，默认不可关闭")])])])]),a("h3",[s._v("Methods")]),a("h4",[s._v("show")]),a("p",[s._v("显示 toast 信息")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("message")]),a("td",[s._v("String")]),a("td",[s._v("提示内容")])])])])])},staticRenderFns:[]},e=a(0)(r,l,!1,null,null,null);t.default=e.exports}});