(this.webpackJsonpacmproj=this.webpackJsonpacmproj||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=(n(12),n(1)),s=n(2),l=n(4),u=n(3),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.overTen?a.a.createElement("div",null,a.a.createElement("h3",null,"High score wohoo!!"),a.a.createElement("button",{onClick:this.props.resetButton},"Reset")):null}}]),n}(o.Component),m=(n(13),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).handleClick=function(){o.setState({count:o.state.count+1})},o.resetButton=function(){o.setState({count:0,overTen:!1})},o.state={count:0,overTen:!1},o}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){console.log("did update",t.count,this.state.count),this.state.count>10&&this.state.count!=t.count&&0==this.state.overTen&&this.setState({overTen:!0})}},{key:"componentWillUpdate",value:function(e,t){console.log("will update",t.count,this.state.count)}},{key:"render",value:function(){var e=this.state.count;return a.a.createElement("div",null,a.a.createElement("h1",{className:"heading"},"No of times button clicked : ",e),a.a.createElement("h3",{className:"heading"}," High Score : 10 "),a.a.createElement(h,{overTen:this.state.overTen,resetButton:this.resetButton}),a.a.createElement("div",null,a.a.createElement("button",{className:"one",onClick:this.handleClick},"Click me!")))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.01ea27f3.chunk.js.map