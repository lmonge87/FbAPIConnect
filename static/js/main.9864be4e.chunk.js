(this["webpackJsonpjson-parser"]=this["webpackJsonpjson-parser"]||[]).push([[0],{46:function(e,t,a){e.exports=a(76)},51:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(51),a(8)),o=a(12),u=a(5),i=a(43),m=a(44),d=a(33),E=a(15),p=a(9),f=a.n(p),h=a(19),b=a(26),v=a(10),g=a(20),w=a(21),k=a(78),y=a(25),O=a.n(y);function j(e){var t=e.accessToken,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(void 0),d=Object(s.a)(m,2),p=d[0],y=d[1],j=Object(n.useState)(!1),x=Object(s.a)(j,2),N=x[0],I=x[1],S=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=y,e.next=4,A(l);case 4:e.t1=e.sent,(0,e.t0)(e.t1),i("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://graph.facebook.com/search?type=adinterest&q=[".concat(a,"]&limit=10000&locale=en_US&access_token=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),I(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=p&&p.map((function(e){return[[{interests:[{id:e.id,name:e.name}]}],{name:e.name},{audience:e.audience_size}]})),B=F&&F.map((function(e){return[JSON.stringify(e[0]),e[1].name,e[2].audience]}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"mt-3"},r.a.createElement(u.a,{xs:"8"},r.a.createElement(v.a,{onSubmit:S},r.a.createElement(v.a.Row,{className:"align-items-center"},r.a.createElement(u.a,{xs:"auto"},r.a.createElement(v.a.Label,{srOnly:!0},"Ad Interest"),r.a.createElement(v.a.Control,{className:"mb-2",type:"text",placeholder:"Ad Interest",name:"interest",value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement(u.a,{xs:"auto"},r.a.createElement(g.a,{disabled:!l.length,type:"submit",className:"mb-2"},"Get Data")),r.a.createElement(u.a,{xs:"auto"},r.a.createElement(g.a,{variant:"danger",className:"mb-2",onClick:function(){I(!1),y(void 0)}},"Clear"))))),p&&!p.length&&r.a.createElement(u.a,null,r.a.createElement("h4",null,r.a.createElement(E.a,{variant:"danger"},"No Results")))),r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(b.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID/Name"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Audience"))),r.a.createElement("tbody",null,B&&B.map((function(e){return r.a.createElement("tr",{key:Object(k.a)()},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]),r.a.createElement("td",null,e[2]))})))))),N&&r.a.createElement(w.a,{variant:"danger",onClose:function(){return I(!1)},dismissible:!0},r.a.createElement(w.a.Heading,null,"Oh snap!"),t?r.a.createElement("p",null,"Please verify your input or refresh the application"):r.a.createElement("p",null,"Please authenticate with your Facebook account to continue")))}function x(e){var t=e.accessToken,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(void 0),d=Object(s.a)(m,2),p=d[0],y=d[1],j=Object(n.useState)(!1),x=Object(s.a)(j,2),N=x[0],I=x[1],S=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=y,e.next=4,A(l);case 4:e.t1=e.sent,(0,e.t0)(e.t1),i("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://graph.facebook.com/v8.0/act_".concat(a,"/adimages?fields=name,id,hash&limit=1000&access_token=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),I(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"mt-3"},r.a.createElement(u.a,{xs:"8"},r.a.createElement(v.a,{onSubmit:S},r.a.createElement(v.a.Row,{className:"align-items-center"},r.a.createElement(u.a,{xs:"auto"},r.a.createElement(v.a.Label,{srOnly:!0},"Ad Interest"),r.a.createElement(v.a.Control,{className:"mb-2",type:"text",placeholder:"Ad Account ID",name:"accountID",value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement(u.a,{xs:"auto"},r.a.createElement(g.a,{disabled:!l.length,type:"submit",className:"mb-2"},"Get Data")),r.a.createElement(u.a,{xs:"auto"},r.a.createElement(g.a,{variant:"danger",className:"mb-2",onClick:function(){I(!1),y(void 0)}},"Clear"))))),p&&!p.length&&r.a.createElement(u.a,null,r.a.createElement("h4",null,r.a.createElement(E.a,{variant:"danger"},"No Results")))),r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(b.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image Name"),r.a.createElement("th",null,"Hash"),r.a.createElement("th",null,"ID (Account + Hash)"))),r.a.createElement("tbody",null,p&&p.map((function(e){return r.a.createElement("tr",{key:Object(k.a)()},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.hash),r.a.createElement("td",null,e.id))})))))),N&&r.a.createElement(w.a,{variant:"danger",onClose:function(){return I(!1)},dismissible:!0},r.a.createElement(w.a.Heading,null,"Oh snap!"),t?r.a.createElement("p",null,"Please confirm that you entered a valid Ad Account ID or refresh the application"):r.a.createElement("p",null,"Please authenticate with your Facebook account to continue")))}function N(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),p=Object(s.a)(l,2),f=p[0],h=p[1];return Object(n.useEffect)((function(){window.fbAsyncInit=function(){window.FB.init({appId:"1045150769237017",cookie:!0,xfbml:!0,version:"v8.0"}),window.FB.AppEvents.logPageView(),window.FB.getLoginStatus((function(e){"connected"!==e.status?(c(!0),window.FB.XFBML.parse()):(c(!1),h(e.authResponse.accessToken))}))},function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById(a)||((n=e.createElement(t)).id=a,n.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(n,r))}(document,"script","facebook-jssdk")}),[]),r.a.createElement(i.a,{fluid:!0,className:"mt-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{xs:{span:4,offset:8}},a?r.a.createElement("div",{className:"fb-login-button","data-size":"medium","data-button-type":"login_with","data-layout":"rounded","data-auto-logout-link":"false","data-use-continue-as":"false","data-width":""}):r.a.createElement(E.a,{variant:"success"},"Connected to FB"))),r.a.createElement(m.a,{transition:!1},r.a.createElement(d.a,{eventKey:"interests",title:"Interest Finder"},r.a.createElement(j,{accessToken:f})),r.a.createElement(d.a,{eventKey:"images",title:"Image Finder"},r.a.createElement(x,{accessToken:f}))))}a(74),a(75);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.9864be4e.chunk.js.map