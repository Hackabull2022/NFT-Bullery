(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(e,t,n){e.exports=n(580)},293:function(e,t){},294:function(e,t){},296:function(e,t){},300:function(e,t){},325:function(e,t){},327:function(e,t){},341:function(e,t){},343:function(e,t){},376:function(e,t){},378:function(e,t){},485:function(e,t){},486:function(e,t){},580:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(78),s=n.n(i),u=n(42),l=n(13),o=n.n(l),c=n(23),p=n(17),m=n(66),y=n(6),d=n(95),f=n(134),T=function(e){var t=e.children;return r.a.createElement(d.d,{h:"100vh"},r.a.createElement(d.b,{bg:"#226F54",p:4,justifyContent:"space-around",alignItems:"center"},r.a.createElement(d.a,null,r.a.createElement(d.e,{fontWeight:"bold",style:{fontSize:30,color:"#F4F0BB"}},"BULLery")),r.a.createElement(m.b,{to:"/"},r.a.createElement(f.a,{size:"sm",colorScheme:"green"},"Mint NFT")),r.a.createElement(m.b,{to:"my-animal"},r.a.createElement(f.a,{size:"sm",colorScheme:"green"},"My NFT")),r.a.createElement(m.b,{to:"sale-animal"},r.a.createElement(f.a,{size:"sm",colorScheme:"green"},"Sale NFT"))),r.a.createElement(d.b,{direction:"column",h:"full",justifyContent:"center",alignItems:"center"},t))},b=n(236),k=new(n.n(b).a)(window.ethereum),v=new k.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_saleAnimalToken",type:"address"}],name:"setSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTypes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_animalTokenOwner",type:"address"}],name:"getAnimalTokens",outputs:[{components:[{internalType:"uint256",name:"animalTokenId",type:"uint256"},{internalType:"uint256",name:"animalType",type:"uint256"},{internalType:"uint256",name:"animalPrice",type:"uint256"}],internalType:"struct MintAnimalToken.AnimalTokenData[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"saleAnimalToken",outputs:[{internalType:"contract SaleAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0xd14336810124061C9208E7f13e17946Fd109fC47"),h=new k.eth.Contract([{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"purchaseAnimalToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"setForSaleAnimalToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_mintAnimalTokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"animalTokenPrices",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_animalTokenId",type:"uint256"}],name:"getAnimalTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOnSaleAnimalTokenArrayLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintAnimalTokenAddress",outputs:[{internalType:"contract MintAnimalToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"onSaleAnimalTokenArray",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0xFf9E99e79f6c0961C0090CC77FE8F26526bc4F54"),w=n(139),x=function(e){var t=e.animalType;return r.a.createElement(w.a,{w:150,h:150,src:"images/".concat(t,".png"),alt:"AnimalCard"})},E=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],u=i[1],l=function(){var e=Object(c.a)(o.a.mark(function e(){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.methods.mintAnimalToken().send({from:t});case 5:if(!e.sent.status){e.next=17;break}return e.next=9,v.methods.balanceOf(t).call();case 9:return n=e.sent,e.next=12,v.methods.tokenOfOwnerByIndex(t,parseInt(n,10)-1).call();case 12:return a=e.sent,e.next=15,v.methods.animalTypes(a).call();case 15:r=e.sent,u(r);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0);case 22:case"end":return e.stop()}},e,null,[[0,19]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.b,{w:"full",h:"100vh",justifyContent:"center",alignItems:"center",direction:"column"},r.a.createElement(d.a,null,s?r.a.createElement(x,{animalType:s}):r.a.createElement(d.e,null,"Let's mint Bull NFT to Bullary!")),r.a.createElement(f.a,{mt:4,size:"sm",colorScheme:"green",onClick:l},"Mint"))},A=n(140),g=function(e){var t=e.animalTokenId,n=e.animalType,i=e.animalPrice,s=e.saleStatus,u=e.account,l=Object(a.useState)(""),m=Object(p.a)(l,2),y=m[0],T=m[1],b=Object(a.useState)(i),v=Object(p.a)(b,2),w=v[0],E=v[1],g=function(){var e=Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u&&s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,h.methods.setForSaleAnimalToken(t,k.utils.toWei(y,"ether")).send({from:u});case 5:e.sent.status&&E(k.utils.toWei(y,"ether")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{textAlign:"center",w:150},r.a.createElement(x,{animalType:n}),r.a.createElement(d.a,{mt:2},"0"===w?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.b,null,r.a.createElement(A.a,{type:"number",value:y,onChange:function(e){T(e.target.value)}}),r.a.createElement(A.c,{children:"Matic"})),r.a.createElement(f.a,{size:"sm",colorScheme:"green",mt:2,onClick:g},"Sell")):r.a.createElement(d.e,{d:"inline-block"},k.utils.fromWei(w)," Matic")))},O=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],u=i[1],l=Object(a.useState)(!1),m=Object(p.a)(l,2),y=m[0],T=m[1],b=function(){var e=Object(c.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.methods.balanceOf(t).call();case 3:if("0"!==e.sent){e.next=6;break}return e.abrupt("return");case 6:return n=[],e.next=9,v.methods.getAnimalTokens(t).call();case 9:e.sent.map(function(e){n.push({animalTokenId:e.animalTokenId,animalType:e.animalType,animalPrice:e.animalPrice})}),u(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,14]])}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.methods.isApprovedForAll(t,"0xFf9E99e79f6c0961C0090CC77FE8F26526bc4F54").call();case 3:(n=e.sent)&&T(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.methods.setApprovalForAll("0xFf9E99e79f6c0961C0090CC77FE8F26526bc4F54",!y).send({from:t});case 5:e.sent.status&&T(!y),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){t&&(k(),b())},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{alignItems:"center"},r.a.createElement(d.e,{display:"inline-block"},"Sale Status : ",y?"True":"False"),r.a.createElement(f.a,{size:"xs",ml:2,colorScheme:y?"red":"green",onClick:h},y?"Cancel":"Approve")),r.a.createElement(d.c,{templateColumns:"repeat(4, 1fr)",gap:8,mt:4},s&&s.map(function(e,n){return r.a.createElement(g,{key:n,animalTokenId:e.animalTokenId,animalType:e.animalType,animalPrice:e.animalPrice,saleStatus:y,account:t})})))},M=function(e){var t=e.animalType,n=e.animalPrice,i=e.animalTokenId,s=e.account,u=e.getOnSaleAnimalTokens,l=Object(a.useState)(!1),m=Object(p.a)(l,2),y=m[0],T=m[1],b=function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.methods.ownerOf(i).call();case 3:t=e.sent,T(t.toLocaleLowerCase()===s.toLocaleLowerCase()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,h.methods.purchaseAnimalToken(i).send({from:s,value:n});case 5:e.sent.status&&u(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){b()},[]),r.a.createElement(d.a,{textAlign:"center",w:150},r.a.createElement(x,{animalType:t}),r.a.createElement(d.a,null,r.a.createElement(d.e,{d:"inline-block"},k.utils.fromWei(n)," Matic"),r.a.createElement(f.a,{size:"sm",colorScheme:"green",m:2,disabled:y,onClick:w},"Buy")))},F=function(e){var t=e.account,n=Object(a.useState)(),i=Object(p.a)(n,2),s=i[0],u=i[1],l=function(){var e=Object(c.a)(o.a.mark(function e(){var t,n,a,r,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.methods.getOnSaleAnimalTokenArrayLength().call();case 3:t=e.sent,n=[],a=0;case 6:if(!(a<parseInt(t,10))){e.next=20;break}return e.next=9,h.methods.onSaleAnimalTokenArray(a).call();case 9:return r=e.sent,e.next=12,v.methods.animalTypes(r).call();case 12:return i=e.sent,e.next=15,h.methods.animalTokenPrices(r).call();case 15:s=e.sent,n.push({animalTokenId:r,animalType:i,animalPrice:s});case 17:a++,e.next=6;break;case 20:u(n),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.error(e.t0);case 26:case"end":return e.stop()}},e,null,[[0,23]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){l()},[]),r.a.createElement(d.c,{mt:4,templateColumns:"repeat(4, 1fr)",gap:8},s&&s.map(function(e,n){return r.a.createElement(M,{key:n,animalType:e.animalType,animalPrice:e.animalPrice,animalTokenId:e.animalTokenId,account:t,getOnSaleAnimalTokens:l})}))},I=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],i=t[1],s=function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=8;break}return e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:t=e.sent,i(t[0]),e.next=9;break;case 8:alert("Install Metamask!");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){s()},[n]),r.a.createElement(m.a,null,r.a.createElement(T,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",element:r.a.createElement(E,{account:n})}),r.a.createElement(y.a,{path:"my-animal",element:r.a.createElement(O,{account:n})}),r.a.createElement(y.a,{path:"sale-animal",element:r.a.createElement(F,{account:n})}))))},S=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,585)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)})};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(I,null))),document.getElementById("root")),S()}},[[270,3,2]]]);
//# sourceMappingURL=main.2d0b5888.chunk.js.map