(this["webpackJsonpreact-smart-bid"]=this["webpackJsonpreact-smart-bid"]||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(53),m=t.n(c),r=t(54),s=t(55),i=t(67),o=t(56),u=t(68),E=t(1),p=t.n(E),d=t(134);t(76);function N(e){var a=e.isOpen,t=e.onToggle;return n.a.createElement("div",{className:"action-buttons"},n.a.createElement(d.a,{type:a?"up":"down",onClick:t}),n.a.createElement(d.a,{type:"tool"}),n.a.createElement(d.a,{type:"setting"}))}var y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onToggle=function(){t.setState((function(e){return{isOpen:!e.isOpen}}))},t.state={isOpen:!0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.children,l=this.state.isOpen;console.log({children:t});var c=t.find((function(e){return"CardHeader"===e.type.name})),m=t.find((function(e){return"CardBody"===e.type.name})),r=c?n.a.cloneElement(c,{isOpen:l,onToggle:this.onToggle}):null,s=m?n.a.cloneElement(t.find((function(e){return"CardBody"===e.type.name})),{isOpen:l}):null;return n.a.createElement("div",{className:p()("card",a)},r,s)}}]),a}(l.Component);y.Header=function(e){var a=e.className,t=e.withActionButtons,l=e.isOpen,c=e.onToggle,m=e.children;return n.a.createElement("div",{className:p()("card-header",a)},m," ",t&&n.a.createElement(N,{isOpen:l,onToggle:c}))},y.Body=function(e){var a=e.className,t=e.isOpen,l=e.children;return n.a.createElement("div",{className:p()("card-body",{"is-open":t},a)},l)};t(121);var v=t(63),f=t.n(v),h=function(e){var a=e.index;return n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,"Security doors"),n.a.createElement("td",null,"16 jun 2014"),n.a.createElement("td",null,n.a.createElement(k,{type:"special"},"$483.00")))},g=function(){return n.a.createElement(y,{className:"transactions-card"},n.a.createElement(y.Header,{withActionButtons:!0},"Transactions worldwide"),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"row",style:{marginTop:0}},n.a.createElement("div",{className:"col-6"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"No."),n.a.createElement("td",null,"Transactions"),n.a.createElement("td",null,"Date"),n.a.createElement("td",null,"Amount"))),n.a.createElement("tbody",null,[1,2,3,4,5,6].map((function(e){return n.a.createElement(h,{key:e})}))))),n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{src:f.a,alt:"worldwide map",style:{width:"100%"}})))))},b=t(64),x=t(69);t(122);function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var L={warning:{backgroundColor:"var(--orange-100)"},new:{backgroundColor:"var(--java)"},special:{backgroundColor:"var(--turkoise)"},monthly:{backgroundColor:"var(--java-500)"}};function k(e){var a=e.type,t=e.children,l=e.className,c=e.style,m=Object(x.a)(e,["type","children","className","style"]);return n.a.createElement("span",Object.assign({className:p()("label",l),style:O({backgroundColor:L[a].backgroundColor},c)},m),t)}t(123);var j=function(){return n.a.createElement("tr",null,n.a.createElement("td",null,"Pending..."),n.a.createElement("td",{className:"flex flex-align-center"},n.a.createElement(d.a,{type:"clock-circle",style:{marginRight:5}})," 11:20 PM"),n.a.createElement("td",null,"Samantha"),n.a.createElement("td",{className:"percentage"},n.a.createElement(d.a,{type:"rise"})," 24%"))},B=function(){return n.a.createElement(y,{className:"user-project-card"},n.a.createElement(y.Header,{withActionButtons:!0},"User Project list"),n.a.createElement(y.Body,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Status"),n.a.createElement("td",null,"Date"),n.a.createElement("td",null,"User"),n.a.createElement("td",null,"Value"))),n.a.createElement("tbody",null,n.a.createElement(j,null),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(k,{type:"warning"},"Canceled")),n.a.createElement("td",{className:"flex flex-align-center"},n.a.createElement(d.a,{type:"clock-circle",style:{marginRight:5}})," 11:20 PM"),n.a.createElement("td",null,"Samantha"),n.a.createElement("td",{className:"percentage"},n.a.createElement(d.a,{type:"rise"})," 24%")),n.a.createElement(j,null),n.a.createElement(j,null),n.a.createElement(j,null),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(k,{type:"special"},"Completed")),n.a.createElement("td",{className:"flex flex-align-center"},n.a.createElement(d.a,{type:"clock-circle",style:{marginRight:5}})," 11:20 PM"),n.a.createElement("td",null,"Samantha"),n.a.createElement("td",{className:"percentage"},n.a.createElement(d.a,{type:"rise"})," 24%")),n.a.createElement(j,null)))))};t(124);function P(){return n.a.createElement(y,{className:"messages-card"},n.a.createElement(y.Header,{withActionButtons:!0},"Messages"),n.a.createElement(y.Body,null,n.a.createElement("section",{className:"notifications"},n.a.createElement("div",{className:"flex",style:{marginBottom:10}},n.a.createElement(d.a,{type:"mail",style:{fontSize:30,marginRight:15,position:"relative",top:2}}),n.a.createElement("h1",{style:{fontSize:36}},"New messages")),n.a.createElement("div",null,"You have 22 new messages and 16 waiting in draft folder")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("header",{className:"flex flex-space-between"},n.a.createElement("span",{className:"name"},"John Doe"),n.a.createElement("span",{className:"time-ago"},"5m ago")),n.a.createElement("section",null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga impedit?")),n.a.createElement("footer",null,n.a.createElement("span",{className:"date"},"Yesterday 8:48 PM \u22c5 10.06.2014"))),n.a.createElement("li",null,n.a.createElement("header",{className:"flex flex-space-between"},n.a.createElement("span",{className:"name"},"John Doe"),n.a.createElement("span",{className:"time-ago"},"5m ago")),n.a.createElement("section",null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga impedit?")),n.a.createElement("footer",null,n.a.createElement("span",{className:"date"},"Yesterday 8:48 PM \u22c5 10.06.2014"))),n.a.createElement("li",null,n.a.createElement("header",{className:"flex flex-space-between"},n.a.createElement("span",{className:"name"},"John Doe"),n.a.createElement("span",{className:"time-ago"},"5m ago")),n.a.createElement("section",null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga impedit?")),n.a.createElement("footer",null,n.a.createElement("span",{className:"date"},"Yesterday 8:48 PM \u22c5 10.06.2014"))),n.a.createElement("li",null,n.a.createElement("header",{className:"flex flex-space-between"},n.a.createElement("span",{className:"name"},"John Doe"),n.a.createElement("span",{className:"time-ago"},"5m ago")),n.a.createElement("section",null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga impedit?")),n.a.createElement("footer",null,n.a.createElement("span",{className:"date"},"Yesterday 8:48 PM \u22c5 10.06.2014"))),n.a.createElement("li",null,n.a.createElement("header",{className:"flex flex-space-between"},n.a.createElement("span",{className:"name"},"John Doe"),n.a.createElement("span",{className:"time-ago"},"5m ago")),n.a.createElement("section",null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, accusantium deleniti ducimus eos esse eum fuga impedit?")),n.a.createElement("footer",null,n.a.createElement("span",{className:"date"},"Yesterday 8:48 PM \u22c5 10.06.2014"))))))}t(125);function T(e){var a=e.percent;return n.a.createElement("div",{className:"progress progress-outer"},n.a.createElement("div",{className:"progress-inner",style:{width:"".concat(a,"%"),backgroundColor:"green"}}))}var A=t(65),D=t.n(A);t(126);function C(){return n.a.createElement("div",{className:"SideNav"},n.a.createElement("div",{className:"user-details"},n.a.createElement(M,{className:"user-image",src:D.a}),n.a.createElement("div",{className:"user-name"}),n.a.createElement("div",{className:"user-role-dropdown"},n.a.createElement("span",{className:"user-title"},"Art Director"),n.a.createElement(d.a,{type:"caret-down"}))),n.a.createElement("nav",null,n.a.createElement("ul",{className:"menu"},n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"),n.a.createElement(d.a,{type:"left",className:"item-caret"}))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"),n.a.createElement(k,{type:"warning",className:"item-label"},"16/24"),n.a.createElement(d.a,{type:"left",className:"item-caret"}))),n.a.createElement("li",{className:"menu-item open"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"),n.a.createElement(d.a,{type:"down",className:"item-caret"})),n.a.createElement("div",{className:"menu-item-body"},n.a.createElement("ul",{className:"submenu"},n.a.createElement("li",{className:"submenu-item"},"Dashboard v1.1"),n.a.createElement("li",{className:"submenu-item"},"Dashboard v1.2"),n.a.createElement("li",{className:"submenu-item"},"Dashboard v1.3"),n.a.createElement("li",{className:"submenu-item"},"Dashboard v1.4")))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"),n.a.createElement(k,{type:"special",className:"item-label"},"SPECIAL"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"),n.a.createElement(k,{type:"new",className:"item-label"},"NEW"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))),n.a.createElement("li",{className:"menu-item selected"},n.a.createElement("div",{className:"menu-item-head"},n.a.createElement(d.a,{type:"pie-chart",className:"item-icon"}),n.a.createElement("span",{className:"item-text"},"Lorem ipsum"))))))}t(127);var M=function(e){var a=e.src,t=e.className;return n.a.createElement("img",{className:p()("Avatar",t),src:a,alt:""})},S=t(66),H=t.n(S);t(128);function I(){return n.a.createElement(y,{className:"graph-card"},n.a.createElement(y.Header,null,n.a.createElement("span",null,"Income"),n.a.createElement("div",{className:"action-buttons"},n.a.createElement("button",{className:"selected"},"Today"),n.a.createElement("button",null,"Monthly"),n.a.createElement("button",null,"Annual"))),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"left"},n.a.createElement("img",{src:H.a,alt:""})),n.a.createElement("div",{className:"right"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"value"},"2,346"),n.a.createElement("div",{className:"flex flex-space-between"},n.a.createElement("div",{className:"text-label"},"Total orders in period"),n.a.createElement("div",{className:"percentage-value"},"62%",n.a.createElement(d.a,{type:"rise"}))),n.a.createElement(T,{percent:62})),n.a.createElement("li",null,n.a.createElement("div",{className:"value"},"2,346"),n.a.createElement("div",{className:"flex flex-space-between"},n.a.createElement("div",{className:"text-label"},"Total orders in period"),n.a.createElement("div",{className:"percentage-value"},"99%",n.a.createElement(d.a,{type:"rise"}))),n.a.createElement(T,{percent:99})),n.a.createElement("li",null,n.a.createElement("div",{className:"value"},"2,346"),n.a.createElement("div",{className:"flex flex-space-between"},n.a.createElement("div",{className:"text-label"},"Total orders in period"),n.a.createElement("div",{className:"percentage-value"},"33%",n.a.createElement(d.a,{type:"fall"}))),n.a.createElement(T,{percent:33}))))))}t(129);function J(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{className:"col-3 status-card"},n.a.createElement(y.Header,null,n.a.createElement("span",null,"Income"),n.a.createElement(k,{type:"monthly"},"Monthly")),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"value"},"40,886,200"),n.a.createElement("footer",null,n.a.createElement("span",{className:"text-label"},"Total income"),n.a.createElement("span",{className:"percentage"},"98%",n.a.createElement(d.a,{type:"rise"}))))),n.a.createElement(y,{className:"col-3 status-card"},n.a.createElement(y.Header,null,n.a.createElement("span",null,"Income"),n.a.createElement(k,{type:"monthly"},"Monthly")),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"value"},"40,886,200"),n.a.createElement("footer",null,n.a.createElement("span",{className:"text-label"},"Total income"),n.a.createElement("span",{className:"percentage"},"98%",n.a.createElement(d.a,{type:"rise"}))))),n.a.createElement(y,{className:"col-3 status-card"},n.a.createElement(y.Header,null,n.a.createElement("span",null,"Income"),n.a.createElement(k,{type:"monthly"},"Monthly")),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"value"},"40,886,200"),n.a.createElement("footer",null,n.a.createElement("span",{className:"text-label"},"Total income"),n.a.createElement("span",{className:"percentage"},"98%",n.a.createElement(d.a,{type:"rise"}))))),n.a.createElement(y,{className:"col-3 status-card"},n.a.createElement(y.Header,null,n.a.createElement("span",null,"Income"),n.a.createElement(k,{type:"monthly"},"Monthly")),n.a.createElement(y.Body,null,n.a.createElement("div",{className:"value"},"40,886,200"),n.a.createElement("footer",null,n.a.createElement("span",{className:"text-label"},"Total income"),n.a.createElement("span",{className:"percentage"},"98%",n.a.createElement(d.a,{type:"rise"}))))))}t(130);var Y=function(){return n.a.createElement(y,{className:"todo-card"},n.a.createElement(y.Header,{withActionButtons:!0},"Small to do list"),n.a.createElement(y.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),"Lorem ipsum dolor sit amet."),n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null,"Lorem ipsum dolor sit amet.")),n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null,"Lorem ipsum dolor sit amet."),n.a.createElement(k,{type:"special",style:{marginLeft:10}},n.a.createElement(d.a,{type:"clock-circle"})," ",n.a.createElement("span",null,"1 mins"))),n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null,"Lorem ipsum dolor sit amet.")),n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null,"Lorem ipsum dolor sit amet.")),n.a.createElement("li",null,n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null,"Lorem ipsum dolor sit amet.")))))};t(131);var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"left"},n.a.createElement(C,null)),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"main-content"},n.a.createElement("div",{className:"row status-cards-container"},n.a.createElement(J,null)),n.a.createElement("div",{className:"row"},n.a.createElement(I,null)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement(P,null)),n.a.createElement("div",{className:"col-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement(B,null)),n.a.createElement("div",{className:"col-6"},n.a.createElement(Y,null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(g,null))))))))};t(132),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,a,t){e.exports=t.p+"static/media/map.a79e2456.png"},65:function(e,a,t){e.exports=t.p+"static/media/profile-image.cfe1ce66.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/graph.fc4fce5f.png"},71:function(e,a,t){e.exports=t(133)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.2a570300.chunk.js.map