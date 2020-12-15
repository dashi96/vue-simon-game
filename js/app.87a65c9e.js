(function(e){function t(t){for(var s,a,r=t[0],c=t[1],u=t[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-simon-game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Simon The Game Copy")]),n("small",[e._v("by Dashi Dantsaranov")]),n("div",{attrs:{id:"status"}},[e._v(" "+e._s(e.displayMessage)+" ")]),n("div",{attrs:{id:"simon"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"light col noSelect",class:{bright:e.isActive&&"green"===e.currentLight},attrs:{id:"green"},on:{click:function(t){return e.captureTap("green")}}}),n("div",{staticClass:"light col noSelect",class:{bright:e.isActive&&"red"===e.currentLight},attrs:{id:"red"},on:{click:function(t){return e.captureTap("red")}}})]),n("div",{staticClass:"row"},[n("div",{staticClass:"light col noSelect",class:{bright:e.isActive&&"yellow"===e.currentLight},attrs:{id:"yellow"},on:{click:function(t){return e.captureTap("yellow")}}}),n("div",{staticClass:"light col noSelect",class:{bright:e.isActive&&"blue"===e.currentLight},attrs:{id:"blue"},on:{click:function(t){return e.captureTap("blue")}}})])]),n("div",{staticClass:"flex"},[n("div",{staticClass:"game-options"},[n("h3",[e._v("Game Options:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.modeGame,expression:"modeGame"}],attrs:{type:"radio",name:"mode",value:"easy"},domProps:{checked:e._q(e.modeGame,"easy")},on:{change:function(t){e.modeGame="easy"}}}),e._v("Easy"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.modeGame,expression:"modeGame"}],attrs:{type:"radio",name:"mode",value:"normal"},domProps:{checked:e._q(e.modeGame,"normal")},on:{change:function(t){e.modeGame="normal"}}}),e._v("Normal"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.modeGame,expression:"modeGame"}],attrs:{type:"radio",name:"mode",value:"hard"},domProps:{checked:e._q(e.modeGame,"hard")},on:{change:function(t){e.modeGame="hard"}}}),e._v("Hard"),n("br")]),n("div",{staticClass:"row",attrs:{id:"controls"}},[n("div",{staticClass:"col"},[n("button",{staticClass:"start",on:{click:e.start}},[e._v(" "+e._s(e.buttonMessage)+" ")])])])]),n("div",{attrs:{id:"history"}},[n("p",[n("strong",[e._v("Current Sequence:")]),e._v(" "+e._s(e.current))]),n("p",[n("strong",[e._v("Longest Sequence:")]),e._v(" "+e._s(e.longest))])]),n("div",{staticClass:"hide"},e._l(e.sounds,(function(e,t){return n("audio",{key:t,ref:"sound"+t,refInFor:!0},[n("source",{attrs:{src:e,type:"audio/mpeg"}})])})),0)])},o=[],a=(n("4160"),n("159b"),{name:"app",data:function(){return{longest:0,sequence:["red","blank"],taps:"",lights:["red","green","yellow","blue"],isActive:!1,currentLight:"",iterationCounter:0,displayMessage:"",buttonMessage:"Start",disabled:!0,speed:400,modeGame:"normal",sounds:{green:"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",red:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",yellow:"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",blue:"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}}},computed:{current:function(){return this.sequence.length/2}},mounted:function(){},methods:{start:function(){this.sequence=[],this.addToSequence(),this.playSequence(this.sequence),this.startTimer(),this.iterationCounter=0,this.displayMessage="",this.speed=400},playSound:function(e){void 0!==this.$refs["sound"+e]&&this.$refs["sound"+e][0].play()},chooseRandomLight:function(){var e=Math.floor(4*Math.random());return this.lights[e]},addToSequence:function(){this.sequence.push(this.chooseRandomLight(),"blank"),this.buttonMessage="Restart"},playSequence:function(e){clearTimeout(),"easy"===this.modeGame&&(this.speed=1500,"normal"===this.modeGame&&(this.speed=1e3,"hard"===this.modeGame&&(this.speed=400)));var t=this;e.forEach((function(e,n){setTimeout((function(){t.changeLightState(n),t.playSound(e)}),n*t.speed),t.isActive=!1}))},changeLightState:function(e){var t=this;this.isActive=!0,this.currentLight=t.sequence[e]},captureTap:function(e,t){this.playSound(e),this.taps=e,this.currentLight=e,setTimeout(function(){this.gameEvaluation(e)}.bind(this),200)},gameEvaluation:function(e){this.sequence[this.iterationCounter]===this.taps?(this.iterationCounter+=2,this.currentLight="blank",clearTimeout(),this.iterationCounter===this.sequence.length&&(this.currentLight=!1,this.addToSequence(),this.displayMessage="Round: ".concat(this.current),setTimeout(function(){this.playSequence(this.sequence),this.displayMessage=""}.bind(this),2e3),this.startTimer(),this.iterationCounter=0)):this.sequence.length/2>this.longest?(this.currentLight=!1,this.longest=this.sequence.length/2-1,this.displayMessage="Sorry, not quite right. But hey, this is your longest sequence yet!",this.buttonMessage="Try Again",clearTimeout()):(this.currentLight=!1,this.displayMessage="Sorry, not quite right. But you're close, give it another try.",this.buttonMessage="Try Again")},startTimer:function(){}}}),r=a,c=(n("5c0b"),n("2877")),u=Object(c["a"])(r,i,o,!1,null,null,null),l=u.exports;s["a"].config.productionTip=!0,new s["a"]({render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.87a65c9e.js.map