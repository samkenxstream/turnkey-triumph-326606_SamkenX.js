(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{244:function(t,e,n){"use strict";n.r(e);var o={components:{Layout:n(173).a}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"withdrawExitMany erc721 plasma  ",description:"Get started with maticjs",keywords:"plasma client, erc721, withdrawExitMany, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/plasma/erc721/withdraw-exit-many.md"}},[n("h1",{attrs:{id:"withdrawexitmany"}},[t._v("withdrawExitMany")]),t._v(" "),n("p",[n("code",[t._v("withdrawExitMany")]),t._v(" method can be used to approve all tokens.")]),t._v(" "),n("pre",[n("code",[t._v("const erc721RootToken = plasmaClient.erc721(<root token address>, true);\n\nconst approveResult = await erc721RootToken.withdrawExitMany(<burn tx hash>);\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);