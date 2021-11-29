(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{174:function(t,e){t.exports=[{text:"Introduction",url:"introduction"},{text:"Basics",url:"basics",expand:!0,children:[{text:"Installation",url:"installation"},{text:"How it works",url:"how-it-works"}]},{text:"Plasma",url:"plasma",expand:!0,children:[{text:"Initialize Plasma client",url:"initialize"},{text:"ERC20",url:"erc20",expand:!0,children:[{text:"Balance of erc20",url:"balanceOfERC20"},{text:"Approve ERC20",url:"approveERC20TokensForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Transfer ERC20",url:"transferERC20Tokens"},{text:"Start Withdraw",url:"startWithdraw"},{text:"Withdraw ERC20",url:"withdraw"}]},{text:"ERC721",url:"erc721",expand:!0,children:[{text:"Balance Of ERC721",url:"balanceOfERC721"},{text:"Safe Deposit ERC721",url:"safeDepositERC721Tokens"},{text:"Token Of Owner By Index ERC721",url:"tokenOfOwnerByIndexERC721"},{text:"Start Withdraw For NFT",url:"startWithdrawForNFT"},{text:"Withdraw ERC721",url:"withdrawNFT"},{text:"Transfer ERC721",url:"transferERC721Tokens"}]},{text:"Deposit Ethers",url:"depositEthers"},{text:"Deposit Status From TxHash",url:"depositStatusFromTxHash"},{text:"Get Transfer Signature",url:"getTransferSignature"},{text:"Transfer with Signature",url:"transferWithSignature"},{text:"Process Exit",url:"processExits"},{text:"Withdraw Manager",url:"WithdrawManager",expand:!0,children:[{text:"Exit Mintable Burnt Tokens",url:"startExitForMintableBurntToken"},{text:"Exit Metadata Mintable Burnt Tokens",url:"startExitForMetadataMintableBurntToken"}]}]},{text:"POS API",url:"pos",expand:!0,children:[{text:"Initialize POS client",url:"initialize"},{text:"ERC20",url:"ERC20",expand:!0,children:[{text:"Approve ERC20 Deposit",url:"approveERC20ForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Burn ERC20",url:"burnERC20"},{text:"Exit ERC20",url:"exitERC20"}]},{text:"ERC721",url:"ERC721",expand:!0,children:[{text:"Approve ERC721 Deposit",url:"approveERC721ForDeposit"},{text:"Deposit ERC721",url:"depositERC721ForUser"},{text:"Burn ERC721",url:"burnERC721"},{text:"Exit ERC721",url:"exitERC721"}]},{text:"ERC1155",url:"ERC1155",expand:!0,children:[{text:"Approve ERC1155 Deposit",url:"approveERC1155ForDeposit"},{text:"Deposit ERC1155",url:"depositERC1155ForUser"},{text:"Burn ERC1155",url:"burnERC1155"},{text:"Exit ERC1155",url:"exitERC1155"},{text:"Transfer ERC1155",url:"transferERC1155"}]},{text:"Deposit Ethers",url:"depositEtherForUser"}]}]},175:function(t,e,r){"use strict";var n={components:{Docs:r(173).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(174);this.savedLinks=t}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v2/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},280:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(175).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v2/docs/plasma/initialize.md"}},[r("h1",{attrs:{id:"initializeplasmaclient"}},[t._v("Initialize Plasma client")]),t._v(" "),r("h4",{attrs:{id:"nodesyntax"}},[t._v("Node Syntax")]),t._v(" "),r("pre",[r("code",{staticClass:"js language-js"},[t._v("const Matic = require('maticjs')\n\nconst maticPlasmaClient = new Matic(options)\nmaticPlasmaClient.initialize()\n")])]),t._v(" "),r("h4",{attrs:{id:"es6syntax"}},[t._v("Es6 Syntax")]),t._v(" "),r("pre",[r("code",{staticClass:"js language-js"},[t._v("import Matic from 'maticjs'\n\nconst maticPlasmaClient = new Matic(options)\nmaticPlasmaClient.initialize()\n")])]),t._v(" "),r("h2",{attrs:{id:"options"}},[t._v("Options")]),t._v(" "),r("p",[t._v("Options can be provided in constructor in order to customize the client.")]),t._v(" "),r("pre",[r("code",[t._v('import Matic from \'maticjs\';\n\nconst options = {\n    network: "testnet",\n    version: "mumbai",\n    maticProvider: window.web3,\n    parentProvider: ethereumprovider,\n    parentDefaultOptions: { from: account },\n    maticDefaultOptions: { from: account },\n}\nconst maticPlasmaClient = new Matic(options)\n')])]),t._v(" "),r("p",[t._v("Available options are :")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("network")]),t._v(" can be "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("code",[t._v("version")]),t._v(" can be "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("code",[t._v("maticProvider")]),t._v(" can be "),r("code",[t._v("string")]),t._v(" or "),r("code",[t._v("Web3.providers")]),t._v(" instance. This provider must connect to Matic chain. Value can be anyone of following:")]),t._v(" "),r("li",[r("code",[t._v("network.Matic.RPC")])]),t._v(" "),r("li",[r("code",[t._v("new Web3.providers.HttpProvider(network.Matic.RPC)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/WalletConnect/walletconnect-monorepo#for-web3-provider-web3js"}},[t._v("WalletConnect Provider instance")])]),t._v(" "),r("li",[r("code",[t._v("parentProvider")]),t._v(" can be "),r("code",[t._v("string")]),t._v(" or "),r("code",[t._v("Web3.providers")]),t._v(" instance. This provider must connect to Ethereum chain (testnet or mainchain). Value can be anyone of following:")]),t._v(" "),r("li",[r("code",[t._v("network.Main.RPC")])]),t._v(" "),r("li",[r("code",[t._v("new Web3.providers.HttpProvider(network.Main.RPC)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/WalletConnect/walletconnect-monorepo#for-web3-provider-web3js"}},[t._v("WalletConnect Provider instance")])]),t._v(" "),r("li",[r("code",[t._v("parentDefaultOptions")]),t._v(" is simple Javascript "),r("code",[t._v("object")]),t._v(" with following options")]),t._v(" "),r("li",[r("code",[t._v("from")]),t._v(" must be valid account address(required)")]),t._v(" "),r("li",[r("code",[t._v("maticDefaultOptions")]),t._v(" is simple Javascript "),r("code",[t._v("object")]),t._v(" with following options")]),t._v(" "),r("li",[r("code",[t._v("from")]),t._v(" must be valid account address(required)")])]),t._v(" "),r("hr")])}),[],!1,null,null,null);e.default=component.exports}}]);