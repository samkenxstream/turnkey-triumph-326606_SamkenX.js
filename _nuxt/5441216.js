(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(173).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"withdraw challenge ERC20 Plasma ",description:"Get started with maticjs",keywords:"plasma client, erc20, withdrawChallenge, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/plasma/erc20/withdraw-confirm.md"}},[n("h1",{attrs:{id:"withdrawconfirm"}},[t._v("withdrawConfirm")]),t._v(" "),n("p",[n("code",[t._v("withdrawConfirm")]),t._v(" method is the second step in plasma withdraw process. In this step - proof of your burn transaction (first transaction) is submitted and an erc721 token of equivalent value is created.")]),t._v(" "),n("p",[t._v("After this process is successful - challenge period is started and upon completion of the the challenge period, user can get back the withdrawn amount to their account on the root chain.")]),t._v(" "),n("p",[t._v("The challenge period is 7 days for mainnet.")]),t._v(" "),n("p",[n("strong",[t._v("Note")]),t._v("- withdrawStart transaction must be checkpointed in order to challenge the withdraw.")]),t._v(" "),n("pre",[n("code",[t._v("const erc20Token = plasmaClient.erc20(<token address>, true);\n\nconst result = await erc20Token.withdrawConfirm(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])]),t._v(" "),n("p",[t._v("Once challenge period is completed, "),n("code",[t._v("withdrawExit")]),t._v(" can be called to exit the withdraw process and get back the withdrawn amount.")])])}),[],!1,null,null,null);e.default=component.exports}}]);