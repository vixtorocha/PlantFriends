(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/zz-plant.ac885e5c.jpg"},function(e,a,t){e.exports=t.p+"static/media/peacelily.6a7f2002.jpg"},function(e,a,t){e.exports=t.p+"static/media/pothos.ebcfa506.jpg"},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),i=(t(14),t(3)),o=t(4),s=t(6),u=t(5),h=t(7);t(15);var m=function(e){var a=e.name,t=e.link;return r.a.createElement("div",{className:"tc bg-white dib br3 pa3 ma2 grow bw2 shadow-3"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,"Descri\xe7\xe3o")))},d=function(e){var a=e.plants;return r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(m,{key:t,id:a[t].id,name:a[t].name,link:a[t].link})}))},p=[{id:1,name:"ZZ-Plant",link:t(16)},{id:2,name:"Peace Lily",link:t(17)},{id:3,name:"Pothos",link:t(18)}],f=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"p2"},r.a.createElement("input",{className:"pa3 ba b--blue bg-white",type:"search",placeholder:"search plants",onChange:a}))},w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"}},e.children)},b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={plants:p,searchField:""},e}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.plants.filter(function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return p.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"washed-blue f1"},"Plantfriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(w,null,r.a.createElement(d,{plants:a}))):r.a.createElement("h1",{className:"washed-blue f1"},"Loading")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.48e5b7d6.chunk.js.map