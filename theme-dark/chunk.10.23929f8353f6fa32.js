"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?49b5151730a7be9f8a5e05fd0082cb4a") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?49b5151730a7be9f8a5e05fd0082cb4a#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?49b5151730a7be9f8a5e05fd0082cb4a") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?49b5151730a7be9f8a5e05fd0082cb4a#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?49b5151730a7be9f8a5e05fd0082cb4a") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?49b5151730a7be9f8a5e05fd0082cb4a#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?49b5151730a7be9f8a5e05fd0082cb4a") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?49b5151730a7be9f8a5e05fd0082cb4a#vusion-icon-font") format("svg");\n}'},webpackJsonp([10],{495:function(t,s,a){function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=i,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var i="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},529:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={data:function(){return{data:[{text:"苹果",value:"A"},{text:"香蕉",value:"B"},{text:"蛋糕",value:"C"}],value:"A"}},watch:{value:function(t){console.log(t)}}},e={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-suggest",{attrs:{data:t.data,value:t.value},on:{"update:value":function(s){t.value=s}}})},staticRenderFns:[]},i={components:{C047ebf:a(0)(n,e,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("选择框 Suggest")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("p",[this._v("有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。")]),s("h4",[this._v("Data方式")]),s("h4",[this._v("标签方式")]),s("div",{staticClass:"u-example"},[s("C047ebf")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-suggest")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"data"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value.sync")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-suggest")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("data")]),this._v(": [\n                { "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'苹果'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'A'")]),this._v(" },\n                { "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'香蕉'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'B'")]),this._v(" },\n                { "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'蛋糕'")]),this._v(", "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'C'")]),this._v(" },\n            ],\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'A'")]),this._v(",\n        };\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        value(newValue) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue)\n        }\n    }\n}\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("Suggest API")]),s("h3",[this._v("Attrs/Props")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Attr/Prop")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("data")]),s("td",[this._v("Array<{ text, value }>")]),s("td"),s("td",[this._v("Data书写方式中的数据列表")])]),s("tr",[s("td",[this._v("value.sync, v-model")]),s("td",[this._v("Any")]),s("td"),s("td",[this._v("当前选择的值")])]),s("tr",[s("td",[this._v("field")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("'text'")])]),s("td",[this._v("显示文本字段")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])])])},staticRenderFns:[]},l=a(0)(i,h,!1,null,null,null);s.default=l.exports}});