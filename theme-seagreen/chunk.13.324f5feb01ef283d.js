"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([13],{518:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function c(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=e(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(c(),window.HAS_CREATE_FONT_STYLE=!0)}},537:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("状态图标 StatusIcon")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-status-icon",{attrs:{name:"success"}},[s._v("运行中")]),a("u-status-icon",{attrs:{name:"pause"}},[s._v("已停服")]),a("u-status-icon",{attrs:{name:"warning"}},[s._v("异常")]),a("u-status-icon",{attrs:{name:"waiting"}},[s._v("重启中")]),a("u-status-icon",{attrs:{name:"error"}},[s._v("更新失败")]),a("u-status-icon",{attrs:{name:"mount"}},[s._v("已绑定")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),s._v("运行中"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pause"')]),s._v(">")]),s._v("已停服"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),s._v("异常"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"waiting"')]),s._v(">")]),s._v("重启中"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(">")]),s._v("更新失败"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mount"')]),s._v(">")]),s._v("已绑定"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-status-icon")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("name")]),a("td",[s._v("String")]),a("td",[s._v("``")]),a("td",[s._v("对应图标的name，")])]),a("tr",[a("td",[s._v("size")]),a("td",[s._v("NUmber, String")]),a("td",[a("code",{pre:!0},[s._v("24")])]),a("td",[s._v("图标对应的font-size值大小")])])])])])},staticRenderFns:[]},e=a(0)(null,n,!1,null,null,null);t.default=e.exports}});