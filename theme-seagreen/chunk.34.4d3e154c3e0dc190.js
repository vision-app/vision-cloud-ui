"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'},webpackJsonp([34],{473:function(t,s,i){function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var s=document.createElement("style"),i=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=a,s.type="text/css",i?i.appendChild(s):window.addEventListener("load",function(){i.appendChild(s)})}var a="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},508:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("复合滑块 ComboSlider")]),s("div",{staticClass:"u-example"},[s("u-combo-slider")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("div",{staticClass:"u-example"},[s("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("unit")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("tip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"步长为10GB"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB",disabled:"",value:40}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("unit")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("tip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"步长为10GB"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"40"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-combo-slider")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value.sync, v-model")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("滑块的值")])]),s("tr",[s("td",[this._v("min")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最小值")])]),s("tr",[s("td",[this._v("max")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最大值")])]),s("tr",[s("td",[this._v("step")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("间隔。"),s("code",{pre:!0},[this._v("0")]),this._v("表示连续")])]),s("tr",[s("td",[this._v("unit")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("单位")])]),s("tr",[s("td",[this._v("tip")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("提示")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@input")]),s("p",[this._v("滑块的值改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("Number")]),s("td",[this._v("滑块的值")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("滑块的值改变后触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Number")]),s("td",[this._v("改变后的值")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("Number")]),s("td",[this._v("旧的值")])])])])])},staticRenderFns:[]},n=i(0)(null,e,!1,null,null,null);s.default=n.exports}});