(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.cb0d6bfb.png"},32:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),l=a(4),i=a(5),c=a(8),m=a(6),u=a(7),d=(a(37),a(39),a(26)),p=a.n(d),h=(a(40),a(14)),v=(a(42),a(44),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"redirectToUrl",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"news-container",onClick:function(){return e.redirectToUrl(e.props.news.url)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4 fill"},r.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),r.a.createElement("div",{className:"col s8"},r.a.createElement("div",{className:"news-intro-col"},r.a.createElement("div",{className:"news-intro-panel"},r.a.createElement("h4",null,this.props.news.title),r.a.createElement("div",{className:"news-description"},r.a.createElement("p",null,this.props.news.description),r.a.createElement("div",null,null!=this.props.news.source&&r.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&r.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.class&&r.a.createElement("div",{className:"chip light-red news-chip"},this.props.news.class),null!=this.props.news.time&&r.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))))}}]),t}(r.a.Component)),g=a(27),w=a.n(g),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={news:null},e.handleScroll=e.handleScroll.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadMoreNews(),this.loadMoreNews=w.a.debounce(this.loadMoreNews,400),window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-80&&this.loadMoreNews()}},{key:"loadMoreNews",value:function(){var e=this;fetch("http://localhost:3000/news",{method:"GET",cache:"no-cache"}).then(function(e){return e.json()}).then(function(t){e.setState({news:e.state.news?e.state.news.concat(t):t})}).catch(function(e){return console.error("Error:",e)})}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return r.a.createElement("a",{className:"list-group-item",href:"#"},r.a.createElement(v,{news:e}))});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?r.a.createElement("div",null,this.renderNews()):r.a.createElement("div",null,r.a.createElement("div",{id:"msg-app-loading"},"Loading"))}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:p.a,className:"logo",alt:"logo"}),r.a.createElement("div",{className:"container"},r.a.createElement(f,null)))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(47);var y=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"authenticateUser",value:function(e,t){localStorage.setItem("token",e),localStorage.setItem("email",t)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token"),localStorage.removeItem("email")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getEmail",value:function(){return localStorage.getItem("email")}}]),e}(),j=a(9),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-bar blue lighten-1"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo"}," Real Time NEWS"),r.a.createElement("ul",{id:"nav-modbile",className:"right"},y.isUserAuthenticated()?r.a.createElement("div",null,r.a.createElement("li",null,y.getEmail()),r.a.createElement("li",null,r.a.createElement(j.a,{to:"/logout"},"Log out"))):r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(j.a,{to:"/login"},"Log in")),r.a.createElement("li",null,r.a.createElement(j.a,{to:"/signup"},"Sign up")))))),r.a.createElement("br",null),this.props.children)}}]),t}(r.a.Component),k=(a(59),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors;e.user;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-panel login-panel"},r.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},r.a.createElement("h4",{className:"center-align"},"Login"),n.summary&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.summary)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"validate",id:"email",type:"email",name:"email",onChange:a}),r.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.email)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{className:"validate",id:"password",type:"password",name:"password",onChange:a}),r.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.password)),r.a.createElement("div",{className:"row right-align"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Log in"})),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"right-align"}," New to Tap News?  ",r.a.createElement(j.a,{to:"/signup"},"Sign Up"))))))}),S=a(1),C=a.n(S),T=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:""}},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,n=this.state.user.password;console.log("email:",a),console.log("password:",n);var r=new Request("http://localhost:3000/auth/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})});fetch(r).then(function(e){200===e.status?(t.setState({errors:{}}),e.json().then(function(e){console.log(e),y.authenticateUser(e.token,a),t.context.router.replace("/")})):(console.log("Login failed"),e.json().then(function(e){var a=e.errors?e.errors:{};a.summary=e.message,t.setState({errors:a})}))})}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;a[t]=e.target.value,this.setState({user:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(k,{onSubmit:function(t){return e.processForm(t)},onChange:function(t){return e.changeUser(t)},errors:this.state.errors,user:this.state.user})}}]),t}(r.a.Component);T.contextTypes={router:C.a.object.isRequired};var U=T,L=(a(61),function(e){var t=e.onSubmit,a=e.onChange,n=e.errors;e.user;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-panel signup-panel"},r.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},r.a.createElement("h4",{className:"center-align"},"Sign Up"),n.summary&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.summary)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"email",type:"email",name:"email",className:"validate",onChange:a}),r.a.createElement("label",{htmlFor:"email"},"Email"))),n.email&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.email)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",type:"password",name:"password",className:"validate",onChange:a}),r.a.createElement("label",{htmlFor:"password"},"Password"))),n.password&&r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"error-message"},n.password)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"confirm_password",type:"password",name:"confirm_password",className:"validate",onChange:a}),r.a.createElement("label",{htmlFor:"confirm_password"},"Conform Password"))),r.a.createElement("div",{className:"row right-align"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Sign Up"})),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"right-align"}," Already have an account? ",r.a.createElement(j.a,{to:"/login"},"Login"))))))}),F=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:"",confirm_password:""}},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,n=this.state.user.password,r=this.state.user.confirm_password;if(console.log("email:",a),console.log("password:",n),console.log("confirm_password:",r),n===r){var s=new Request("http://localhost:3000/auth/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.user.email,password:this.state.user.password})});fetch(s).then(function(e){200===e.status?(t.setState({errors:{}}),t.context.router.replace("/login")):e.json().then(function(e){console.log(e);var a=e.errors?e.errors:{};a.summary=e.message,console.log(t.state.errors),t.setState({errors:a})})})}}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;if(a[t]=e.target.value,this.setState({user:a}),this.state.user.password!==this.state.user.confirm_password){var n=this.state.errors;n.password="Password and Confirm Password don't match.",this.setState({errors:n})}else{var r=this.state.errors;r.password="",this.setState({errors:r})}}},{key:"render",value:function(){var e=this;return r.a.createElement(L,{onSubmit:function(t){return e.processForm(t)},onChange:function(t){return e.changeUser(t)},errors:this.state.errors,user:this.state.user})}}]),t}(r.a.Component);F.contextTypes={router:C.a.object.isRequired};var I={component:O,childRoutes:[{path:"/",component:E},{path:"/login",component:U},{path:"/signup",component:F},{path:"/logout",onEnter:function(e,t){y.deauthenticateUser(),t("/")}}]};o.a.render(r.a.createElement(j.b,{history:j.c,routes:I}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)})}}()}},[[32,2,1]]]);
//# sourceMappingURL=main.52bceafb.chunk.js.map