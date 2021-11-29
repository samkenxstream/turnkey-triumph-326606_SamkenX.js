(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{215:function(e,t,n){"use strict";n.r(t);var r={components:{Layout:n(173).a}},o=n(14),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Web3js setup",description:"Get started with maticjs",keywords:"pos client, erc20, withdrawExit, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/setup/web3js.md"}},[n("h2",{attrs:{id:"setupweb3js"}},[e._v("Setup web3.js")]),e._v(" "),n("p",[e._v("In order to use web3.js, you need to first install web3js plugin.")]),e._v(" "),n("h3",{attrs:{id:"installation"}},[e._v("Installation")]),e._v(" "),n("pre",[n("code",[e._v("npm install @maticnetwork/maticjs-web3\n")])]),e._v(" "),n("h3",{attrs:{id:"setup"}},[e._v("setup")]),e._v(" "),n("pre",[n("code",[e._v("import { use } from '@maticnetwork/maticjs'\nimport { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'\n\n// install web3 plugin\nuse(Web3ClientPlugin)\n")])]),e._v(" "),n("p",[e._v("Let's see one example of creating "),n("code",[e._v("POSClient")]),e._v(" using web3 -")]),e._v(" "),n("pre",[n("code",[e._v("import { POSClient,use } from \"@maticnetwork/maticjs\"\nimport { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'\nimport HDWalletProvider from \"@truffle/hdwallet-provider\"\n\n// install web3 plugin\nuse(Web3ClientPlugin);\n\nconst posClient = new POSClient();\nawait posClient.init({\n    network: 'testnet',\n    version: 'mumbai',\n    parent: {\n      provider: new HDWalletProvider(privateKey, mainRPC),\n      defaultConfig: {\n        from : fromAddress\n      }\n    },\n    child: {\n      provider: new HDWalletProvider(privateKey, childRPC),\n      defaultConfig: {\n        from : fromAddress\n      }\n    }\n});\n")])])])}),[],!1,null,null,null);t.default=component.exports}}]);