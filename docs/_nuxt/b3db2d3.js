(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{390:function(t,e,U){"use strict";U.r(e);U(60);var R=U(25),n=U(26),r=U(40),L=U(30),o=U(21),c=U(17),F=(U(15),U(4),U(28),U(59),U(189),U(83),U(56),U(69),U(10),U(11),U(34),U(84),U(48),U(58),U(70),U(190),U(88)),d=U(102);function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var U,R=Object(o.a)(t);if(e){var n=Object(o.a)(this).constructor;U=Reflect.construct(R,arguments,n)}else U=R.apply(this,arguments);return Object(L.a)(this,U)}}var f=function(t,e,U,desc){var R,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,U):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,U,desc);else for(var i=t.length-1;i>=0;i--)(R=t[i])&&(r=(n<3?R(r):n>3?R(e,U,r):R(e,U))||r);return n>3&&r&&Object.defineProperty(e,U,r),r},v=function(t){Object(r.a)(U,t);var e=l(U);function U(){return Object(R.a)(this,U),e.apply(this,arguments)}return Object(n.a)(U,[{key:"replaceMoveHtml",get:function(){var t=String(this.move);t=t.replace("z","__z");["(\\(R U R' U'\\))","(\\(R U R'\\))","(\\(L' U' L U\\))","(\\(L' U' L\\))"].forEach((function(e){t=t.replace(new RegExp(e,"g"),'<strong class="'.concat("red--text text--lighten-1",'">$1</strong>'))}));return["(\\(U R U' R'\\))","(U \\(R U' R'\\))","(\\(U' L' U L\\))","(U' \\(L' U L\\))"].forEach((function(e){t=t.replace(new RegExp(e,"g"),'<strong class="'.concat("light-blue--text text--accent-3",'">$1</strong>'))})),t}},{key:"getAnimCube3Data",get:function(){var t=this.move,e=this.initmove,U={z:"__y",y:"__z",__z:"z",__y:"y"};(t.includes("z")||t.includes("y"))&&Object.keys(U).forEach((function(e){t=t.replace(e,U[e])})),this.makePattern||this.initmove?(e.includes("z")||e.includes("y"))&&Object.keys(U).forEach((function(t){e=e.replace(t,U[t])})):e=this.reverseMove(t);var R=""===this.initmove?"initrevmove=#":"initmove=".concat(e);return"move=".concat(t,"&").concat(R,"&colorscheme=").concat(this.animCubeConf.colorscheme,"&hint=").concat(this.animCubeConf.hint,"&doublespeed=").concat(this.animCubeConf.doublespeed)}},{key:"getMakePattern",get:function(){return this.makePattern||this.initmove?this.makePattern:this.reverseMove(this.move)}},{key:"getCtegoryIconName",get:function(){return d.a.CATEGORY_ICON_NAMES[this.category]}},{key:"reverseMove",value:function(t){return t.replace(/\(/g,"").replace(/\)/g,"").split(" ").map((function(s){return s.endsWith("'")?s.replace("'",""):s+"'"})).slice().reverse().join(" ")}}]),U}(F.Vue);f([Object(F.Prop)({type:String,default:""})],v.prototype,"category",void 0),f([Object(F.Prop)({type:String,default:""})],v.prototype,"title",void 0),f([Object(F.Prop)({type:String,default:""})],v.prototype,"move",void 0),f([Object(F.Prop)({type:String,default:""})],v.prototype,"makePattern",void 0),f([Object(F.Prop)({type:String,default:""})],v.prototype,"initmove",void 0),f([Object(F.Prop)({type:Object,default:function(){return{colorscheme:"ywgbro",hint:5,doublespeed:10}}})],v.prototype,"animCubeConf",void 0);var y=v=f([F.Component],v),h=U(98),S=U(127),A=U.n(S),m=U(375),C=U(374),D=U(416),O=U(366),M=U(182),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,U=t._self._c||e;return U("v-card",{attrs:{id:t.title,height:"100%"}},[U("v-card-text",{staticClass:"pb-sm-1"},[U("div",{staticClass:"ext-subtitle-1"},[U("v-chip",{attrs:{outlined:"",small:"","active-class":"yellow--text text--darken-3",to:"?s="+t.category}},[U("v-icon",{attrs:{left:"","x-small":""}},[t._v(t._s(t.getCtegoryIconName))]),t._v("\n        "+t._s(t.category)+"\n      ")],1)],1)]),t._v(" "),U("v-card-title",{staticClass:"headline font-weight-black pt-sm-1"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),U("v-card-text",{staticClass:"pb-sm-1"},[U("div",{staticClass:"mx-auto",staticStyle:{width:"220px",height:"240px"}},[U("script",[t._v('AnimCube3("'+t._s(t.getAnimCube3Data)+'")')])])]),t._v(" "),U("v-card-subtitle",[U("p",{staticClass:"grey--text text--darken-4 font-weight-regular text-h6 text-sm-h6 text-md-h6 text-lg-subtitle-1",domProps:{innerHTML:t._s(t.replaceMoveHtml)}}),t._v(" "),U("v-divider"),t._v(" "),t.getMakePattern?U("p",[t._v("\n      make pattern "),U("br"),t._v(" "),U("span",{staticClass:"text-subtitle-1"},[t._v("\n        "+t._s(t.getMakePattern)+"\n      ")])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;A()(component,{VCard:m.a,VCardSubtitle:C.a,VCardText:C.b,VCardTitle:C.c,VChip:D.a,VDivider:O.a,VIcon:M.a})},422:function(t,e,U){"use strict";U.r(e);U(60);var R=U(25),n=U(26),r=U(40),L=U(30),o=U(21),c=U(17),F=(U(15),U(4),U(58),U(28),U(70),U(63),U(56),U(69),U(10),U(88)),d=["PLL\tUb\tM2' U' M U2 M' U' M2'\t(M2' U' M U2' M' U' M2') *2\t","PLL\tUa\tM2' U M U2 M' U M2'\t(M2' U M U2 M' U M2') *2\t","PLL\tH\tM2' U M2' U2 M2' U M2'\tM2' U M2' U2 M2' U M2'\t","PLL\tAb\tx (L U' L) D2 (L' U L) D2 L2 x'\t(x (L U' L) D2 (L' U L) D2 L2 x') *2\t","PLL\tAa\tx L2' D2 (L' U' L) D2 (L' U L') x'\t(x L2' D2 (L' U' L) D2 (L' U L') x') *2\t","PLL\tT\t(R U R' U') R' F R2 U' R' U' (R U R') F'\t(R U R' U') R' F R2 U' R' U' (R U R') F'\t","PLL\tNb\tr' D' F (r U' r') F' D (r2 U r' U') (r' F r F')\tr' D' F (r U' r') F' D (r2 U r' U') (r' F r F')\t","PLL\tNa\t(R U R') U (R U R') F' (R U R' U') (R' F R2 U' R') (U2 R U' R')\t(R U R') U (R U R') F' (R U R' U') (R' F R2 U' R') (U2 R U' R')\t","PLL\tZ\tM U M2' U M2' U M U2 M2' U'\tM U M2' U M2' U M U2 M2' U'\t","PLL\tE\tx' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x\tx' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x\t","PLL\tV\t(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R\t(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R\t","PLL\tF\tR' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R\tR' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R\t","PLL\tRb\tR2 F R (U R U' R') F' R U2' R' U2' R U\tR2 F R (U R U' R') F' R U2' R' U2' R U\t","PLL\tRa\t(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'\t(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'\t","PLL\tJb\t(R U R') F' (R U R' U') R' F R2 U' R' U'\t(R U R') F' (R U R' U') R' F R2 U' R' U'\t","PLL\tJa\t(L' U' L) F (L' U' L U) L F' L2' U L U\t(L' U' L) F (L' U' L U) L F' L2' U L U\t","PLL\tY\tF (R U' R' U') (R U R') F' (R U R' U') (R' F R F')\tF (R U' R' U') (R U R') F' (R U R' U') (R' F R F')\t","PLL\tGd\t(R U R') (U' D) R2 U' R U' R' U R' U R2 D'\t((R U R') (U' D) R2 U' R U' R' U R' U R2 D)*3\t","PLL\tGc\tR2 U' R U' R U R' U R2 (D' U) (R U' R') D\t(R2 U' R U' R U R' U R2 (D' U) (R U' R') D) *3\t","PLL\tGb\t(R' U' R) (U D') R2 U R' U R U' R U' R2 D\t((R' U' R) (U D') R2 U R' U R U' R U' R2 D) *3\t","PLL\tGa\tR2 U R' U R' U' R U' R2 (D U') (R' U R) D'\t(R2 U R' U R' U' R U' R2 (D U') (R' U R) D) *3\t","OLL\tLine to †\tF (R U R' U') F'\t(F (R U R' U') F') *2\tF (R U R' U') F' F (R U R' U') F'","OLL\tL-shape to †\tf (R U R' U') f'\t(f (R U R' U') f') *2\tf (R U R' U') f' f (R U R' U') f'","OLL\tDot to †\tF (R U R' U') F' f (R U R' U') f'\tF (R U R' U') F' f (R U R' U') f'\tF (R U R' U') F' f (R U R' U') f'","OLL\t21\t(R U R') U R U' R' U R U2' R'\t(R U R') U R U' R' U R U2' R'\t","OLL\t22\tR U2' (R2' U' R2 U' R2') U2' R\tR U2' (R2' U' R2 U' R2') U2' R\t","OLL\t23\tR2 D R' U2 R D' R' U2 R'\t(R2 D R' U2 R D' R' U2 R') *2\t","OLL\t24\t(r U R' U') (r' F R F')\t((r U R' U') (r' F R F')) *2\t","OLL\t25\t(F R' F' r) (U R U' r')\t((F R' F' r) (U R U' r')) *2\t","OLL\t26\tR U2' R' U' R U' R'\t(R U2' R' U' R U' R') *5\t","OLL\t27\t(R U R') U R U2 R'\t((R U R') U R U2 R') *5\t","F2L\t1A:Up01\tU2 (R U R') U (R U' R')\t\t","F2L\t1A:Up02\ty U2 (L' U' L) U' (L' U L)\t\t","F2L\t1A:Up03\tU (R U2 R') U (R U' R')\t\t","F2L\t1A:Up04\ty U' (L' U2 L) U' (L' U L)\t\t","F2L\t1A:Up05-01\tU (R U' R') U' (R U' R' U R U' R')\t\t","F2L\t1A:Up05-02\tU (F R' F' R) U (R U R')\t\t","F2L\t1A:Up06-01\ty U' (L' U L) U (L' U L U' L' U L)\t\t","F2L\t1A:Up06-02\tU' R U (R2' F R F') (R U' R')\t\t","F2L\t1A:Up07\t(R U2 R') U' (R U R')\t\t","F2L\t1A:Up08\ty (L' U2 L) U (L' U' L)\t\t","F2L\t1A:Side/Front:different:01\t(R U R')\t\t","F2L\t1A:Side/Front:different:02\ty (L' U' L) \t\t","F2L\t1A:Side/Front:different:03\tU' (R U R') U (R U R')\t\t","F2L\t1A:Side/Front:different:04\ty U (L' U' L) U' (L' U' L)\t\t","F2L\t1A:Side/Front:different:05\tR' U2 R2 U R2' U R\t\t","F2L\t1A:Side/Front:different:06\ty L U2 L2' U' L2 U' L'\t\t","F2L\t1A:Side/Front:different:07\tU' (R U' R') U (R U R')\t\t","F2L\t1A:Side/Front:different:08\ty U (L' U L) U' (L' U' L)\t\t","F2L\t1A:Side/Front:same:01\ty U' (L' U L)\t\t","F2L\t1A:Side/Front:same:02\tU (R U' R')\t\t","F2L\t1A:Side/Front:same:03\ty U (L' U2 L) U2 (L' U L)\t\t","F2L\t1A:Side/Front:same:04\tU' (R U2 R') U2 (R U' R')\t\t","F2L\t1A:Side/Front:same:05\tU' (R U R') U2 (R U' R')\t\t","F2L\t1A:Side/Front:same:06\ty U (L' U' L) U2 (L' U L)\t\t","F2L\t1A:Side/Front:same:07\tM U (L F' L') U' M'\t\t","F2L\t1A:Side/Front:same:08\ty M U' (R' F R) U M'\t\t","F2L\t1B:Edge01\tU (R U R') U2 (R U R')\t\t","F2L\t1B:Edge02\ty U' (L' U' L) U2 (L' U' L)\t\t","F2L\t1B:Edge03\tU (F' U' F) U' (R U R')\t\t","F2L\t1B:Edge04\ty U' (F U F') U (L' U' L)\t\t","F2L\t1B:Edge05\t(U R U' R')3\t\t","F2L\t1B:Edge06\tU' (R' F R F') (R U' R')\t\t","F2L\t1B:Corner01\t(R U R') U' (R U R')\t\t","F2L\t1B:Corner02\ty (L' U' L) U (L' U' L)\t\t","F2L\t1B:Corner03\t(R U' R') U (R U' R')\t\t","F2L\t1B:Corner04\ty (L' U L) U' (L' U L)\t\t","F2L\t1B:Corner05\tU' (R' F R F') (R U R')\t\t","F2L\t1B:Corner06\ty U (L F' L' F) (L' U' L)\t\t","F2L\t1C:Edge01\t(R U' R') U (R U2 R' U R U' R')\t\t","F2L\t1C:Edge02\ty' (L' U L) U' (L' U2' L U' L' U L)\t\t","F2L\t1C:Edge03\t(R U' R') (F' L' U2 L F)\t\t","F2L\t1C:Edge04\ty (L' U L) (F R U2' R' F')\t\t","F2L\t1C:Edge05\tR2' U2' F R2 F' U2' R' U R'\t\t","F2L\t2A:Advanced:Up01\tU' R' U R2 U' R'\t\t","F2L\t2A:Advanced:Up02\ty U L U' L2' U L\t\t","F2L\t2A:Advanced:Up03\tU2 (R' U R) U' (S R S')\t\t","F2L\t2A:Advanced:Up04\ty U2 (L U' L') U (S' L' S)\t\t","F2L\t2A:Advanced:Up05\tU2 L2' u L2 u' L2'\t\t","F2L\t2A:Advanced:Up06\tL F' U F L'\t\t","F2L\t2A:Advanced:Side/Front01\tR' U' R2 U R'\t\t","F2L\t2A:Advanced:Side/Front02\ty L U L2' U' L\t\t","F2L\t2A:Advanced:Side/Front03\tF D R D' F'\t\t","F2L\t2A:Advanced:Side/Front04\ty F' D' L' D F\t\t","F2L\t2A:Advanced:Side/Front05\tU' (L' U' L) (R U' R')\t\t","F2L\t2A:Advanced:Side/Front06\tU (R U R') (L' U L)\t\t","F2L\t2A:Advanced:Side/Front07\t(F U2 F') (R U R')\t\t","F2L\t2A:Advanced:Side/Front08\ty (F' U2 F) (L' U' L)\t\t","F2L\t2A:Advanced:Side/Front09\tU (R U R') (L U L')\t\t","F2L\t2A:Advanced:Side/Front10\ty U' (L' U' L) (R' U' R)\t\t","F2L\t2A:Advanced:Side/Front11\tU2 F' (L U L') F\t\t","F2L\t2A:Advanced:Side/Front12\ty U2' F (R' U' R) F'\t\t","F2L\t2B:Advanced:Right Slot01\tU (R U' R') (L' U L)\t\t","F2L\t2B:Advanced:Right Slot02\ty (L' U2 L) U' (L U L')\t\t","F2L\t2B:Advanced:Right Slot03\tU2 (R U' R') U (L' U' L)\t\t","F2L\t2B:Advanced:Right Slot04\ty U' L' U' L2 U2 L'\t\t","F2L\t2B:Advanced:Right Slot05\t(R U R') U' (L' U L)\t\t","F2L\t2B:Advanced:Right Slot06\tU' (R U R') (F U F')\t\t","F2L\t2B:Advanced:Left Slot01\ty U' (L' U L) (R U' R')\t\t","F2L\t2B:Advanced:Left Slot02\t(R U2 R') U (R' U' R)\t\t","F2L\t2B:Advanced:Left Slot03\t(F R' F' R) U (R' U2 R)\t\t","F2L\t2B:Advanced:Left Slot04\tU R U R2' U2 R\t\t","F2L\t2B:Advanced:Left Slot05\t(S R' S')\t\t","F2L\t2B:Advanced:Left Slot06\tU (F U' F') (R' U' R)\t\t","F2L\t2B:Advanced:Opposite Slot01\tU' (F' U F) (L U2 L')\t\t","F2L\t2B:Advanced:Opposite Slot02\tU (R U' R') U (f' L f)\t\t","F2L\t2B:Advanced:Opposite Slot03\t(R U' R') (L U2 L')\t\t","F2L\t2B:Advanced:Opposite Slot04\t(R U R') (f' L f)\t\t","F2L\t2B:Advanced:Opposite Slot05\t(R U' R') U (L U L')\t\t","F2L\t2B:Advanced:Opposite Slot06\t(R' F R F') (L U2 L')\t\t","F2L\t3:Corner Is Solved01\tR2 U' R2' U R2\t\t","F2L\t3:Corner Is Solved02\tf' R' U R f\t\t","F2L\t3:Corner Is Solved03\ty L2' U L2 U' L2'\t\t","F2L\t3:Corner Is Solved04\ty f L U' L' f'\t\t","F2L\t3:Corner Is Solved05\tL2' u' L2 u L2'\t\t","F2L\t3:Corner Is Solved06\t(L' u' L) U (L' u L)\t\t","F2L\t3:Pair In The Wrong Slot01\tR' F R2 U' R2' F' R\t\t","F2L\t3:Pair In The Wrong Slot02\ty L F' L2' U L2 F L'\t\t","F2L\t3:Pair In The Wrong Slot03\tR (L U2 L') R'\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot01\tL F2' L' F U' F\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot02\ty R' F2 R F' U F'\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot03\t(R' F R U' F') (R U' R')\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot04\ty (L F' L' U F) (L' U L)\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot05\t(L' U L) (M' U R U' r') (R U' R')\t\t","F2L\t3:Flipped Edge & Corner In Adjacent Slot06\ty (R U' R') (M' U' L' U l) (L' U L)\t\t","F2L\t3:Other Easy Cases01\t(R' F R U' F') U (R U' R')\t\t","F2L\t3:Other Easy Cases02\ty (L F' L' U F) U' (L' U L)\t\t","CROSS\tU to D\tF2\t\t","CROSS\tU right edge to D\tR' F\t\t","CROSS\tU left edge to D\tL F'\t\t","CROSS\tMiddle right edge to D\tF\t\t","CROSS\tMiddle left edge to D\tF'\t\t"];function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var U,R=Object(o.a)(t);if(e){var n=Object(o.a)(this).constructor;U=Reflect.construct(R,arguments,n)}else U=R.apply(this,arguments);return Object(L.a)(this,U)}}var f=function(t,e,U,desc){var R,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,U):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,U,desc);else for(var i=t.length-1;i>=0;i--)(R=t[i])&&(r=(n<3?R(r):n>3?R(e,U,r):R(e,U))||r);return n>3&&r&&Object.defineProperty(e,U,r),r},v=function(data){return data.map((function(line,i){var t=line.split("\t").map((function(s){return s.trim()}));return{id:i,category:t[0],title:t[1],move:t[2],makePattern:t[3],initmove:t[4]}}))},y=function(t){Object(r.a)(U,t);var e=l(U);function U(){var t;return Object(R.a)(this,U),(t=e.apply(this,arguments)).keywords="",t.cubingData=v(d),t.cubing_data_length=d.length,t}return Object(n.a)(U,[{key:"onChangeRoutee",value:function(){this.keywords=this.$route.query.s&&String(this.$route.query.s)||""}},{key:"filterCubingData",get:function(){var t=function(t,e,U){return String(t[e]).toLowerCase().includes(U.toLowerCase().trim())},e=[],U=this.$route.query.s?String(this.$route.query.s).trim().split(" "):[];return U.length?(this.cubingData.forEach((function(R){var n=[];U.forEach((function(r){(t(R,"category",r)||t(R,"title",r))&&n.push(!0),U.length===n.length&&e.push(R)}))})),e):this.cubingData}},{key:"search",value:function(){!this.keywords||this.keywords&&!String(this.keywords).trim()?this.$router.push({path:"/"}):this.$router.push({path:"?s="+this.keywords})}},{key:"clearSearch",value:function(){this.$router.push({path:"/"})}}]),U}(F.Vue);f([Object(F.Watch)("$route",{immediate:!0})],y.prototype,"onChangeRoutee",null);var h=y=f([Object(F.Component)({head:function(){return{title:"Top Page"}}})],y),S=U(98),A=U(127),m=U.n(A),C=U(417),D=U(372),O=U(418),M=U(419),P=U(420),k=U(421),component=Object(S.a)(h,(function(){var t=this,e=t.$createElement,U=t._self._c||e;return U("v-row",{attrs:{justify:"center",align:"center"}},[U("v-col",{attrs:{cols:"12"}},[U("v-container",[U("v-form",{on:{submit:function(t){t.preventDefault()}}},[U("v-row",[U("v-text-field",{attrs:{placeholder:"Search","hide-details":"auto",clearable:"",messages:t.filterCubingData.length+"/"+t.cubing_data_length},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},"click:clear":t.clearSearch},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),U("v-spacer")],1)],1)],1)],1),t._v(" "),t._l(t.filterCubingData,(function(t){return U("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[U("CubeComponent",{attrs:{category:t.category,title:t.title,move:t.move,"make-pattern":t.makePattern,initmove:t.initmove}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{CubeComponent:U(390).default}),m()(component,{VCol:C.a,VContainer:D.a,VForm:O.a,VRow:M.a,VSpacer:P.a,VTextField:k.a})}}]);