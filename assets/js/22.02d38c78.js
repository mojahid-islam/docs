(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{305:function(t,s,a){t.exports=a.p+"assets/img/image_select.4e71f892.png"},306:function(t){t.exports=JSON.parse('{"type":"image-select","name":"Image Select","description":null,"icon":null,"model":{"mode":"background-image"},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"compiler":{"name":"compiler","title":"Compiler","type":"bool","default":false,"order":25},"output":{"name":"output","title":"Output","fieldClasses":"full-width","properties":["background-image"],"type":"object","order":25},"permissions":{"type":"input","inputType":"text","name":"permissions","title":"Permissions","order":30},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":35},"mode":{"name":"mode","title":"Mode","type":"input","inputType":"text","default":"background-image","order":40},"width":{"name":"width","title":"Width","type":"input","inputType":"text","order":40},"height":{"name":"height","title":"Height","type":"input","inputType":"text","order":45},"tiles":{"name":"tiles","title":"Tiles","type":"bool","default":false,"order":50},"presets":{"name":"presets","title":"Presets","type":"bool","default":false,"order":50}}}')},409:function(t,s,a){"use strict";a.r(s);var e=a(306),n={data:function(){return{builder:e,defaults:{}}}},r=a(1),p=Object(r.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"image-select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-select","aria-hidden":"true"}},[t._v("#")]),t._v(" Image Select")]),t._v(" "),e("p",[t._v("Select from an array of images as radio buttons.")]),t._v(" "),e("p",[e("span",{staticStyle:{display:"block","text-align":"center"}},[e("img",{attrs:{src:a(305),alt:""}})])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#arguments"}},[t._v("Arguments")]),e("ul",[e("li",[e("a",{attrs:{href:"#layout-options"}},[t._v("Layout Options")])])])]),e("li",[e("a",{attrs:{href:"#example-declaration"}},[t._v("Example Declaration")])]),e("li",[e("a",{attrs:{href:"#example-declaration"}},[t._v("Example Declaration")])]),e("li",[e("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")])])])]),e("p")]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[e("div",{staticStyle:{width:"150px"}},[t._v("Default")])]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("image_select")])]),t._v(" "),e("td",[t._v("Value identifying the field type.")])]),t._v(" "),e("tr",[e("td",[t._v("output")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of CSS selectors to dynamically generate CSS.")])]),t._v(" "),e("tr",[e("td",[t._v("mode")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("background-image")])]),t._v(" "),e("td",[t._v("CSS attribute for dynamically generated CSS to output the value.")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Set of key pair array values representing the layout options.  See 'Layout Options' below.")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Set the width of the images used in "),e("code",[t._v("options")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Set the height of the images used in "),e("code",[t._v("options")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("tiles")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Flag to set tiling for the array of "),e("code",[t._v("options")]),t._v(" images.")])]),t._v(" "),e("tr",[e("td",[t._v("presets")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Flag to permit the use of a JSON string or array to override multiple preferences.")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),e("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/output.html"}},[t._v("Using the "),e("code",[t._v("output")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),e("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),e("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),e("h3",{attrs:{id:"layout-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Layout Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("alt")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Alt test for the layout image.")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Title for the layout image.")])]),t._v(" "),e("tr",[e("td",[t._v("img")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("URL of the image.")])]),t._v(" "),e("tr",[e("td",[t._v("presets")]),t._v(" "),e("td",[t._v("string/array")]),t._v(" "),e("td",[t._v("For use with preset.  Optional array or JSON string of values for specified fields")])]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Extra class name for the layout image.")])])])]),t._v(" "),e("h2",{attrs:{id:"example-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),e("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),e("h2",{attrs:{id:"example-declaration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),e("h4",{attrs:{id:"image-select-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-select-layout","aria-hidden":"true"}},[t._v("#")]),t._v(" Image Select Layout")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'image_select'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Main Layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Select main content and sidebar alignment. Choose between 1, 2 or 3 column layout.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1 Column'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/1col.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2 Column Left'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/2cl.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2 Column Right'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/2cr.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'4'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3 Column Middle'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/3cm.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'5'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3 Column Left'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/3cl.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'6'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3 Column Right'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/img/3cr.png'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"image-select-preset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-select-preset","aria-hidden":"true"}},[t._v("#")]),t._v(" Image Select Preset")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-presets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'image_select'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'presets'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Preset'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This allows you to set a json string or array to override multiple preferences in your theme.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This allows you to set a json string or array to override multiple preferences in your theme.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array of preset options")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Preset 1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'../sample/presets/preset1.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'presets'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'switch-on'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'switch-off'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'switch-custom'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JSON string of preset options")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'alt'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Preset 2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'img'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ReduxFramework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'../sample/presets/preset2.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'presets'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v('\'{"slider1":"1", "slider2":"0", "switch-on":"0"}\'')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("This example in based on the example usage provided above. Be sure to change "),e("code",[t._v("$redux_demo")]),t._v(" to the value you specified in your "),e("router-link",{attrs:{to:"/configuration/global_arguments.html#opt_name"}},[t._v("opt_name")]),t._v(" argument.")],1),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Layout value: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-layout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Preset value: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-presets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=p.exports}}]);