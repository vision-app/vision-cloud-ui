"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([23],{518:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function e(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},529:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("链接列表 LinkList")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-link-list",[a("u-link-list-item",{attrs:{disabled:""}},[s._v("设置")]),a("u-link-list-item",{attrs:{to:"/components/u-navbar"}},[s._v("跳转到 Navbar")]),a("u-link-list-item",[s._v("重启")])],1),a("u-link-list",[a("u-link-list-item",{attrs:{disabled:""}},[s._v("设置")]),a("u-link-list-item",{attrs:{to:"/components/u-navbar"}},[s._v("跳转到 Navbar")]),a("u-link-list-item",[s._v("重启")]),a("u-link-list-item",{attrs:{disabled:""}},[s._v("保存为镜像")]),a("u-link-list-item",{attrs:{to:"/components/u-select"}},[s._v("跳转到 Select")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("设置"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/components/u-navbar"')]),s._v(">")]),s._v("跳转到 Navbar"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("重启"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("设置"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/components/u-navbar"')]),s._v(">")]),s._v("跳转到 Navbar"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("重启"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("保存为镜像"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/components/u-select"')]),s._v(">")]),s._v("跳转到 Select"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("使用指令")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-link-list",[a("u-link-list-item",{attrs:{disabled:""}},[s._v("设置")]),a("u-link-list-item",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"跳转到 Navbar",expression:"'跳转到 Navbar'"}],attrs:{to:"/components/u-navbar"}},[s._v("显示Tips")]),a("u-link-list-item",[s._v("重启")]),a("u-link-list-item",{attrs:{disabled:""}},[s._v("保存为镜像")]),a("u-link-list-item",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"跳转到 Select",expression:"'跳转到 Select'"}],attrs:{to:"/components/u-select"}},[s._v("显示Tips")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("设置"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"'跳转到 Navbar'\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/components/u-navbar"')]),s._v(">")]),s._v("显示Tips"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("重启"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("保存为镜像"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"'跳转到 Select'\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/components/u-select"')]),s._v(">")]),s._v("显示Tips"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-link-list")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("LinkList API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("maxCount")]),a("td",[s._v("Number")]),a("td",[s._v("3")]),a("td",[s._v("一列最多显示链接个数")])]),a("tr",[a("td",[s._v("menuTitle")]),a("td",[s._v("String")]),a("td",[s._v("'更多'")]),a("td",[s._v("菜单标题")])]),a("tr",[a("td",[s._v("placement")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'bottom-end'")])]),a("td",[s._v("菜单的弹出方向。可选值："),a("code",{pre:!0},[s._v("'top'")]),s._v(", "),a("code",{pre:!0},[s._v("'bottom'")]),s._v(", "),a("code",{pre:!0},[s._v("'left'")]),s._v(", "),a("code",{pre:!0},[s._v("'right'")]),s._v(", "),a("code",{pre:!0},[s._v("'top-start'")]),s._v(", "),a("code",{pre:!0},[s._v("'top-end'")]),s._v(", "),a("code",{pre:!0},[s._v("'bottom-start'")]),s._v(", "),a("code",{pre:!0},[s._v("'bottom-end'")]),s._v(", "),a("code",{pre:!0},[s._v("'left-start")]),s._v("',"),a("code",{pre:!0},[s._v("'left-end'")]),s._v(", "),a("code",{pre:!0},[s._v("'right-start'")]),s._v(", "),a("code",{pre:!0},[s._v("'right-end'")])])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入"),a("code",{pre:!0},[s._v("<u-link-list-item>")]),s._v("子组件。")]),a("h2",[s._v("LinkListItem API")]),a("p",[s._v("属性全部透传。")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h3",[s._v("Events")]),a("p",[s._v("事件全部透传。")]),a("h4",[s._v("@click")]),a("p",[s._v("点击此项时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event")]),a("td",[s._v("MouseEvent")]),a("td",[s._v("鼠标事件对象")])])])])])},staticRenderFns:[]},l=a(0)(null,n,!1,null,null,null);t.default=l.exports}});