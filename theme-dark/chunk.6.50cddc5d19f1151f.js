"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?49b5151730a7be9f8a5e05fd0082cb4a") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?49b5151730a7be9f8a5e05fd0082cb4a#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?49b5151730a7be9f8a5e05fd0082cb4a") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?49b5151730a7be9f8a5e05fd0082cb4a#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?49b5151730a7be9f8a5e05fd0082cb4a") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?49b5151730a7be9f8a5e05fd0082cb4a#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?49b5151730a7be9f8a5e05fd0082cb4a") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?49b5151730a7be9f8a5e05fd0082cb4a#vusion-icon-font") format("svg");\n}'},webpackJsonp([6],{495:function(t,s,a){function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=i,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var i="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},507:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("u-tag",{attrs:{closeable:this.closeable,color:this.color}},[this._v(this._s(this.text))])},staticRenderFns:[]},e={components:{C29d7ca:a(0)({data:function(){return{closeable:!0,text:"标签一",color:"#ff4949"}},methods:{}},n,!1,null,null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("选择扩展 Tag")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("h4",[this._v("声明式")]),s("div",{staticClass:"u-example"},[s("u-tag",{attrs:{type:"primary"}},[this._v("标签一")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-tag")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("标签一"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-tag")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("方法")]),s("div",{staticClass:"u-example"},[s("C29d7ca")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-tag")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":closeable")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"closeable"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":color")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"color"')]),this._v(">")]),this._v("{{text}}"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-tag")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("closeable")]),this._v(": "),s("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'标签一'")]),this._v(",\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'#ff4949'")]),this._v(",\n        };\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])},staticRenderFns:[]},l=a(0)(e,i,!1,null,null,null);s.default=l.exports}});