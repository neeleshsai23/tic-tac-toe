(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(6),l=n.n(a),u=(n(14),n(1)),c=n(2),r=n(4),h=n(3),o=n(5),p=n(7),d=(n(19),n(20),function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).selectInputX=function(){i.setState((function(t){return{input1:"X",input2:"O",open:!1}}))},i.selectInputO=function(){i.setState((function(t){return{input1:"O",input2:"X",open:!1}}))},i.reset=function(){i.setState((function(t){return{input1:"X",input2:"O",counter:0,winner:"X",open:!0,end:!1}})),i.inputs=[],i.disable=[]},i.state={values:["X","O"],input1:"X",input2:"O",counter:0,winner:"X",open:!0,end:!1},i.inputs=[],i.disable=[],i.handleClick=i.handleClick.bind(Object(o.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(t){this.state.counter%2==0?(this.inputs[t.target.value]=this.state.input1,this.disable[t.target.value]=!0):(this.inputs[t.target.value]=this.state.input2,this.disable[t.target.value]=!0),"X"==this.inputs[0]&&"X"==this.inputs[1]&&"X"==this.inputs[2]||"X"==this.inputs[0]&&"X"==this.inputs[3]&&"X"==this.inputs[6]||"X"==this.inputs[0]&&"X"==this.inputs[4]&&"X"==this.inputs[8]||"X"==this.inputs[1]&&"X"==this.inputs[4]&&"X"==this.inputs[7]||"X"==this.inputs[2]&&"X"==this.inputs[4]&&"X"==this.inputs[6]||"X"==this.inputs[2]&&"X"==this.inputs[5]&&"X"==this.inputs[8]||"X"==this.inputs[3]&&"X"==this.inputs[4]&&"X"==this.inputs[5]||"X"==this.inputs[6]&&"X"==this.inputs[7]&&"X"==this.inputs[8]?this.setState((function(t){return{end:!0}})):"O"==this.inputs[0]&&"O"==this.inputs[1]&&"O"==this.inputs[2]||"O"==this.inputs[0]&&"O"==this.inputs[3]&&"O"==this.inputs[6]||"O"==this.inputs[0]&&"O"==this.inputs[4]&&"O"==this.inputs[7]||"O"==this.inputs[1]&&"O"==this.inputs[4]&&"O"==this.inputs[7]||"O"==this.inputs[2]&&"O"==this.inputs[4]&&"O"==this.inputs[6]||"O"==this.inputs[2]&&"O"==this.inputs[5]&&"O"==this.inputs[8]||"O"==this.inputs[3]&&"O"==this.inputs[4]&&"O"==this.inputs[5]||"O"==this.inputs[6]&&"O"==this.inputs[7]&&"O"==this.inputs[8]?this.setState((function(t){return{winner:"O",end:!0}})):8==this.state.counter&&this.setState((function(t){return{winner:"draw",end:!0}})),this.setState((function(t){return{counter:t.counter+1}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"board"},s.a.createElement("button",{className:"box1 inputbtn",value:"0",onClick:this.handleClick,disabled:this.disable[0]},s.a.createElement("span",null,this.inputs[0])),s.a.createElement("button",{className:"box2 inputbtn",value:"1",onClick:this.handleClick,disabled:this.disable[1]},s.a.createElement("span",null,this.inputs[1])),s.a.createElement("button",{className:"box3 inputbtn",value:"2",onClick:this.handleClick,disabled:this.disable[2]},s.a.createElement("span",null,this.inputs[2])),s.a.createElement("button",{className:"box4 inputbtn",value:"3",onClick:this.handleClick,disabled:this.disable[3]},s.a.createElement("span",null,this.inputs[3])),s.a.createElement("button",{className:"box5 inputbtn",value:"4",onClick:this.handleClick,disabled:this.disable[4]},s.a.createElement("span",null,this.inputs[4])),s.a.createElement("button",{className:"box6 inputbtn",value:"5",onClick:this.handleClick,disabled:this.disable[5]},s.a.createElement("span",null,this.inputs[5])),s.a.createElement("button",{className:"box7 inputbtn",value:"6",onClick:this.handleClick,disabled:this.disable[6]},s.a.createElement("span",null,this.inputs[6])),s.a.createElement("button",{className:"box8 inputbtn",value:"7",onClick:this.handleClick,disabled:this.disable[7]},s.a.createElement("span",null,this.inputs[7])),s.a.createElement("button",{className:"box9 inputbtn",value:"8",onClick:this.handleClick,disabled:this.disable[8]},s.a.createElement("span",null,this.inputs[8])),s.a.createElement(p.Modal,{classNames:{overlay:"modalOverlay",modal:"modalBox",animationIn:"enterAnimation",animationOut:"leaveAnimation"},open:this.state.open,closeOnEsc:!1,closeOnOverlayClick:!1,showCloseIcon:!1,center:!0},s.a.createElement("p",null,"Select Player"),s.a.createElement("div",{className:"selectbtns"},s.a.createElement("button",{className:"playerbtn leftbtn",onClick:this.selectInputX},this.state.values[0]),s.a.createElement("button",{className:"playerbtn rightbtn",onClick:this.selectInputO},this.state.values[1]))),s.a.createElement(p.Modal,{classNames:{overlay:"modalOverlay",modal:"modalBox",animationIn:"enterAnimation",animationOut:"leaveAnimation"},open:this.state.end,closeOnEsc:!1,closeOnOverlayClick:!1,showCloseIcon:!1,center:!0},s.a.createElement("div",{className:"resultbox"},"draw"===this.state.winner?s.a.createElement("p",null,this.state.winner," Match!"):s.a.createElement("p",null,this.state.winner," is Winner!"),s.a.createElement("div",null,s.a.createElement("button",{className:"retrybtn",onClick:this.reset},"\u21bb")))))}}]),n}(i.Component)),b=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).openBoard=function(){i.setState({isClicked:!0})},i.state={isClicked:!1},i}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("header",{className:"title"},s.a.createElement("h1",null,"TIC-TAC-TOE")),s.a.createElement("div",{className:"play"},!this.state.isClicked&&s.a.createElement("button",{type:"button",className:"playbtn",onClick:this.openBoard},"Play"),this.state.isClicked&&s.a.createElement(d,null)))}}]),n}(i.Component),m=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement(b,null)}}]),n}(i.Component);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root"))},9:function(t,e,n){t.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.d7154eef.chunk.js.map