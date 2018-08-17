webpackJsonp([7],{729:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{time:"20:12:12"}},methods:{change:function(s){console.log(s)}}},l={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-time-picker",{attrs:{time:s.time},on:{change:function(t){s.change(t.time)}}})},staticRenderFns:[]},r={components:{"c-c728e0de":a(0)(e,l,!1,null,null,null).exports}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("时间选择 TimePicker")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"15:46:33"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("只读和禁用")]),a("u-example",[a("div",[a("u-linear-layout",[a("u-time-picker",{attrs:{time:"15:46:33",readonly:"readonly"}}),a("u-time-picker",{attrs:{time:"15:46:33",disabled:"disabled"}})],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"15:46:33"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"15:46:33"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("日期范围")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33","min-time":"12:30:00","max-time":"14:45:00"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"15:46:33"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min-time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12:30:00"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("max-time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"14:45:00"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("方法")]),a("u-example",[a("div",[a("c-c728e0de")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":time")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"change($event.time)"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-time-picker")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'20:12:12'")]),s._v(",\n\t\t};\n\t},\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        change(time) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(time);\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h2",[s._v("TimePicker API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("time")]),a("td",[s._v("String")]),a("td",[s._v("'00:00'")]),a("td",[s._v("当前的时间值")])]),a("tr",[a("td",[s._v("minTime")]),a("td",[s._v("String")]),a("td",[s._v("'00:00'")]),a("td",[s._v("最小时间")])]),a("tr",[a("td",[s._v("maxTime")]),a("td",[s._v("String")]),a("td",[s._v("'23:59'")]),a("td",[s._v("最大时间")])]),a("tr",[a("td",[s._v("autofocus")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否自动获得焦点")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])]),a("tr",[a("td",[s._v("visible")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("是否显示")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@change")]),a("p",[s._v("时间改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("time")]),a("td",[s._v("Object")]),a("td",[s._v("改变后的时间")])])])])],1)},staticRenderFns:[]},n=a(0)(r,v,!1,null,null,null);t.default=n.exports}});