(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,e,n){"use strict";n.r(e);var o={components:{Layout:n(173).a}},c=n(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Plugin",description:"Using plugin you can inject your code into matic.js",keywords:"plugin, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/advanced/plugin.md"}},[n("h1",{attrs:{id:"plugin"}},[t._v("Plugin")]),t._v(" "),n("p",[t._v("Using plugin you can inject your code into "),n("code",[t._v("matic.js")]),t._v(". It can be used to write common set of generic codes which can be provided to anyone using a package.")]),t._v(" "),n("div",{staticClass:"highlight"},[t._v("\nPlugin makes the `matic.js` light weight as it implements only important logical part.\n")]),t._v(" "),n("p",[n("br"),t._v("\nInfact web3 library is supported using plugin which allows us to use our favourite library.")]),t._v(" "),n("h3",{attrs:{id:"plugindevelopment"}},[t._v("Plugin development")]),t._v(" "),n("p",[t._v("Plugin is a class which implements "),n("code",[t._v("IPlugin")]),t._v(".")]),t._v(" "),n("pre",[n("code",[t._v('import { IPlugin } from "@maticnetwork/maticjs";\n\nexport class MyPlugin implements IPlugin {\n\n    // variable matic is - default export of matic.js\n    setup(matic) {\n\n        // get web3client\n        const web3Client = matic.Web3Client ;\n    }\n}\n')])]),t._v(" "),n("p",[t._v("As you can see - you just need to implement a "),n("code",[t._v("setup")]),t._v(" method which will be called with default export of "),n("code",[t._v("matic.js")]),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"useplugin"}},[t._v("Use Plugin")]),t._v(" "),n("p",[n("code",[t._v("matic.js")]),t._v(" expose "),n("code",[t._v("use")]),t._v(" method for using a plugin.")]),t._v(" "),n("pre",[n("code",[t._v("import { use } from '@maticnetwork/maticjs'\n\nuse(MyPlugin)\n")])]),t._v(" "),n("p",[t._v("You can use multiple plugins and they will be called in the same order as they are declared.")]),t._v(" "),n("p",[n("strong",[t._v("Some plugin repo are -")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/maticnetwork/maticjs-web3"}},[t._v("Matic web3.js")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/maticnetwork/maticjs-ethers"}},[t._v("Matic ethers")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/maticnetwork/fx-portal.js"}},[t._v("FxPortal.js")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);