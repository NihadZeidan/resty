(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(3),r=n(5),s=n(4),o=n(1),i=n.n(o),l=n(11),u=n.n(l),h=(n(16),n(17),n(18),n(0)),j=function(){return Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:" RESTy"})})},d=(n(20),function(){return Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:"\xa9 2021 Code Fellows and LTUC "})})}),b=n(6),O=n.n(b),f=n(10),p=n(7);n(22),n(23);var x=function(){return Object(h.jsx)("div",{className:"loader"})},g=function(t){var e=t.condition,n=t.children;return e?n:null},m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).handleMethod=function(t){t.preventDefault();var e=t.target.value,n=Object(p.a)(Object(p.a)({},c.state),{},{Method:e});c.setState(n)},c.handelSubmit=function(){var t=Object(f.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),setTimeout(Object(f.a)(O.a.mark((function t(){var n,a,r,s,o,i,l,u,h;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.body.value,"POST"!==c.state.Method&&"PUT"!==c.state.Method){t.next=7;break}return t.next=4,fetch(c.state.RESTurl,{method:c.state.Method,mode:"cors",headers:{"Content-Type":"application/json"},body:n});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,fetch(c.state.RESTurl);case 9:t.t0=t.sent;case 10:return a=t.t0,t.next=13,a.json();case 13:r=t.sent,c.setState({results:r,Body:n,flag:!c.state.flag}),s=a.results,o=a.count,r&&(i=c.state,l=i.Method,u=i.RESTurl,localStorage.getItem("recentInput")?(h=JSON.parse(localStorage.getItem("recentInput")),h.find((function(t){return t.Method===l&&t.RESTurl===u}))||(h.push({Method:l,RESTurl:u}),localStorage.setItem("recentInput",JSON.stringify(h)))):localStorage.setItem("recentInput",JSON.stringify([{Method:l,RESTurl:u}]))),c.props.handler(s,o,r,a);case 19:case"end":return t.stop()}}),t)}))),2e3);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.handleURL=function(t){var e=t.target.value,n=Object(p.a)(Object(p.a)({},c.state),{},{RESTurl:e});c.setState(n)},c.toggle=function(){c.setState({flag:!c.state.flag})},c.state={RESTurl:"",Method:"",Body:{},results:[],flag:!1},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsxs)("form",{className:"from",onSubmit:this.handelSubmit,children:[Object(h.jsx)("input",{type:"text",onChange:this.handleURL,placeholder:"Enter URL HERE"}),Object(h.jsx)("textarea",{name:"body",placeholder:"Body Data must be an object"}),Object(h.jsx)("button",{onClick:this.toggle,children:" GO !! "}),Object(h.jsx)(g,{condition:this.state.flag,children:Object(h.jsx)(x,{})}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:this.handleMethod,className:"get",value:"GET",children:"GET"}),Object(h.jsx)("button",{onClick:this.handleMethod,className:"post",value:"POST",children:"POST"}),Object(h.jsx)("button",{onClick:this.handleMethod,className:"put",value:"PUT",children:"PUT"}),Object(h.jsx)("button",{onClick:this.handleMethod,className:"delete",value:"DELETE",children:"DELETE"})]})]}),Object(h.jsxs)("div",{className:"result",children:[Object(h.jsxs)("p",{children:[" URL: ",this.state.RESTurl," "]}),Object(h.jsxs)("p",{children:[" METHOD: ",this.state.Method," "]})]})]})}}]),n}(i.a.Component),v=(n(24),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(i.a.Fragment,{children:Object(h.jsxs)("p",{id:"headers",children:[" Header:  ",this.props.data.headers]})})}}]),n}(i.a.Component)),S=n(8),T=n.n(S),y=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).getDate=function(){var t=JSON.parse(localStorage.getItem("recentInput"));c.setState({localData:t,flag:!c.state.flag})},c.state={flag:!1,localData:{}},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:this.getDate,children:"Show History"}),Object(h.jsx)(g,{condition:this.state.flag,children:Object(h.jsx)(T.a,{data:this.state.localData})})]})}}]),n}(i.a.Component),E=(n(28),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).formHandleUpdate=function(t,e,n,a){c.setState({results:t,count:e,response:n,header:a})},c.state={results:[],count:0,response:{},header:{}},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(y,{children:" "}),Object(h.jsx)(m,{handler:this.formHandleUpdate}),Object(h.jsx)(v,{data:this.state.header}),Object(h.jsx)(T.a,{className:"json",data:this.state.response}),Object(h.jsx)(d,{})]})}}]),n}(i.a.Component)),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},k=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(E,{})})}}]),n}(i.a.Component),M=document.getElementById("root");u.a.render(Object(h.jsx)(k,{}),M),C()}],[[29,1,2]]]);
//# sourceMappingURL=main.502225a9.chunk.js.map