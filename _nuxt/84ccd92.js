(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{222:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(173).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"transfer ERC20 Plasma",description:"Transfer erc20 plasma tokens",keywords:"plasma client, erc20, transfer, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/plasma/erc20/transfer.md"}},[n("h1",{attrs:{id:"transfer"}},[t._v("transfer")]),t._v(" "),n("p",[n("code",[t._v("transfer")]),t._v(" method can be used to transfer amount from one address to another address.")]),t._v(" "),n("pre",[n("code",[t._v("const erc20Token = plasmaClient.erc20(<token address>);\n\nconst result = await erc20Token.transfer(<to>,<amount>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);