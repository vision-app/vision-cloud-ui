"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?a0df0eae1dd45fe98751b4fa20582791") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?a0df0eae1dd45fe98751b4fa20582791#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?a0df0eae1dd45fe98751b4fa20582791") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?a0df0eae1dd45fe98751b4fa20582791#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?a0df0eae1dd45fe98751b4fa20582791") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?a0df0eae1dd45fe98751b4fa20582791#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?a0df0eae1dd45fe98751b4fa20582791") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?a0df0eae1dd45fe98751b4fa20582791#vusion-icon-font") format("svg");\n}'},webpackJsonp([44],{467:function(t,s,a){function h(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function i(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=h(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var n="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},487:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("步骤条 Steps")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("p",[this._v("步骤从"),s("code",{pre:!0},[this._v("0")]),this._v("开始。")]),s("div",{staticClass:"u-example"},[s("u-steps",{attrs:{value:1}},[s("u-step",{attrs:{title:"Step1"}},[this._v("Content1")]),s("u-step",{attrs:{title:"Step2"}},[this._v("Content2")]),s("u-step",{attrs:{title:"Step3"}},[this._v("Content3")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-steps")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Step1"')]),this._v(">")]),this._v("Content1"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Step2"')]),this._v(">")]),this._v("Content2"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Step3"')]),this._v(">")]),this._v("Content3"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-steps")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("自定义标题")]),s("div",{staticClass:"u-example"},[s("u-steps",{attrs:{value:1}},[s("u-step",[s("span",{attrs:{slot:"title"},slot:"title"},[this._v("Step "),s("u-label",[this._v("1")])],1),this._v("\n        Content1\n    ")]),s("u-step",[s("span",{attrs:{slot:"title"},slot:"title"},[this._v("Step "),s("u-label",[this._v("2")])],1),this._v("\n        Content2\n    ")]),s("u-step",[s("span",{attrs:{slot:"title"},slot:"title"},[this._v("Step "),s("u-label",[this._v("3")])],1),this._v("\n        Content3\n    ")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-steps")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(">")]),this._v("Step "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),this._v("1"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(">")]),this._v("\n        Content1\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(">")]),this._v("Step "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),this._v("2"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(">")]),this._v("\n        Content2\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(">")]),this._v("Step "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),this._v("3"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-label")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(">")]),this._v("\n        Content3\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-step")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-steps")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("Steps API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("当前步骤数")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入"),s("code",{pre:!0},[this._v("<u-step>")]),this._v("子组件。")]),s("h3",[this._v("Events")]),s("h4",[this._v("@change")]),s("p",[this._v("步骤数改变后触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value")]),s("td",[this._v("Number")]),s("td",[this._v("当前步骤数")])]),s("tr",[s("td",[this._v("oldValue")]),s("td",[this._v("Number")]),s("td",[this._v("旧的步骤数")])])])]),s("h2",[this._v("Step API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("title")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("步骤名")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入文本或HTML。")]),s("h4",[this._v("title")]),s("p",[this._v("自定义标题文本。")])])},staticRenderFns:[]},i=a(0)(null,h,!1,null,null,null);s.default=i.exports}});