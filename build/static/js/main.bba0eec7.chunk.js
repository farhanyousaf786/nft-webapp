(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{159:function(e,n,t){},160:function(e,n,t){},165:function(e,n,t){},171:function(e,n,t){},172:function(e,n,t){},177:function(e,n,t){},178:function(e,n,t){},179:function(e,n,t){},180:function(e,n,t){},181:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(57),a=t.n(c),s=(t(158),t(159),t(10)),o=t(8),i=(t(160),t(12)),l=t(15),j=t(39),d=t(6),u=t.n(d),h=t(196),b=t(1);function p(e){return Object(b.jsx)(h.a,{negative:!0,children:Object(b.jsx)(h.a.Header,{children:e.error})})}var O=t(199),x=t(197);function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var f={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null}},m="/api/users/";var v={signup:function(e){return console.log("signup->",e),fetch(m+"signup",{method:"POST",body:e}).then((function(e){if(e.ok)return e.json();throw new Error("Duplicate email address")})).then((function(e){var n=e.token;return f.setToken(n)}))},logout:function(){f.removeToken()},login:function(e){return fetch(m+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var n=e.token;return f.setToken(n)}))},getUser:function(){return f.getUserFromToken()}};t(165);function k(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],a=t[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),g=h[0],f=h[1],m=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),k=Object(s.a)(m,2),w=k[0],y=k[1],S=Object(o.m)();function L(e){y(Object(j.a)(Object(j.a)({},w),{},Object(l.a)({},e.target.name,e.target.value)))}function T(){return(T=Object(i.a)(u.a.mark((function n(t){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(c in t.preventDefault(),(r=new FormData).append("photo",g),w)r.append(c,w[c]);return console.log(r),console.log(r.forEach((function(e){return console.log(e)}))),n.prev=6,n.next=9,v.signup(r);case 9:e.handleSignUpOrLogin(),S("/"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(6),console.log("this is the error - - - -  >",n.t0.message),a(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[6,13]])})))).apply(this,arguments)}return Object(b.jsx)("body",{class:"signupbody",children:Object(b.jsx)("div",{class:"signupcontainer",children:Object(b.jsx)(O.a,{textAlign:"center",verticalAlign:"middle",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{class:"login-box",children:[Object(b.jsx)("h2",{children:"Signup!"}),Object(b.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{name:"username",value:w.username,onChange:L,required:!0}),Object(b.jsx)("label",{children:"username"})]}),Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{type:"email",name:"email",value:w.email,onChange:L,required:!0}),Object(b.jsx)("label",{children:"Email"})]}),Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{name:"password",type:"password",value:w.password,onChange:L,required:!0}),Object(b.jsx)("label",{children:"Password"})]}),Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{name:"passwordConf",type:"password",value:w.passwordConf,onChange:L,required:!0}),Object(b.jsx)("label",{children:"confirm password"})]}),Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){f(e.target.files[0])}}),Object(b.jsx)("label",{children:"Select Image"})]}),Object(b.jsxs)("a",{href:"#",children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)(x.a,{color:"black",fluid:!0,size:"large",type:"submit",className:"btn",children:" Sign Up"})]})]})," "]}),c?Object(b.jsx)(p,{error:c}):null]})})})})}t(171);function w(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],a=t[1],d=Object(r.useState)({email:"",password:""}),h=Object(s.a)(d,2),g=h[0],f=h[1],m=Object(o.m)();function k(e){f(Object(j.a)(Object(j.a)({},g),{},Object(l.a)({},e.target.name,e.target.value)))}function w(){return(w=Object(i.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,v.login(g);case 4:e.handleSignUpOrLogin(),m("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}return Object(b.jsx)("body",{class:"loginbody",children:Object(b.jsxs)("div",{class:"logincontainer",children:[Object(b.jsx)(O.a,{textAlign:"center",verticalAlign:"middle",children:Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"login-box",children:[Object(b.jsx)("h2",{children:"Login!"}),Object(b.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{type:"email",name:"email",value:g.email,onChange:k,required:!0}),Object(b.jsx)("label",{children:"Email"})]}),Object(b.jsxs)("div",{class:"user-box",children:[Object(b.jsx)("input",{name:"password",type:"password",value:g.password,onChange:k,required:!0}),Object(b.jsx)("label",{children:"Password"})]}),Object(b.jsxs)("a",{href:"#",children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)(x.a,{color:"black",fluid:!0,size:"large",type:"submit",className:"btn",children:" Login"})]})]})," "]})})}),c?Object(b.jsx)(p,{error:c}):null]})})}var y=t(200),S=t(194),L=t(201);function T(e){var n=Object(o.m)();function t(){return(t=Object(i.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.handleLogout(),n("/login");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsx)(O.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(b.jsxs)(O.a.Column,{style:{maxWidth:450},children:[Object(b.jsx)(y.a,{as:"h2",color:"blue",textAlign:"center",children:"LOG OUT HERE"}),Object(b.jsx)(S.a,{onSubmit:function(e){return t.apply(this,arguments)},children:Object(b.jsx)(L.a,{stacked:!0,children:Object(b.jsx)(x.a,{color:"blue",fluid:!0,size:"large",type:"submit",className:"btn",children:"LOGOUT"})})})]})})}var E,N,U,C,P,A,F=t(29),D=t(18),I=t(140),z=(t(172),t(64)),q=t(141),B=t(65),_=(B.a.nav(E||(E=Object(z.a)(["\n  background: grey;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),Object(B.a)(D.c)(N||(N=Object(z.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"])))),H=(Object(B.a)(q.a)(U||(U=Object(z.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),B.a.div(C||(C=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  /* Second Nav */\n  /* margin-right: 24px; */\n\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B.a.nav(P||(P=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Object(B.a)(D.c)(A||(A=Object(z.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  /* Second Nav */\n  margin-left: 24px;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),function(e){var n=e.loggedUser,t=e.handleLogout;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{class:"logo",children:"Nft Market"}),Object(b.jsxs)("nav",{children:[Object(b.jsx)("button",{children:Object(b.jsx)(_,{to:"/",children:Object(b.jsx)("h1",{children:"Home"})})}),Object(b.jsx)("button",{children:Object(b.jsx)(_,{to:"/addNft",activeStyle:!0,children:Object(b.jsx)("h1",{children:"Add Nft"})})}),Object(b.jsx)("button",{children:Object(b.jsx)(_,{children:Object(b.jsx)("h1",{children:n?Object(b.jsx)(D.b,{style:{paddingBottom:"25px",color:"white"},onClick:t,children:"Logout"}):Object(b.jsx)(D.b,{to:"/".concat(null===n||void 0===n?void 0:n.username),children:"Login"})})})})]}),Object(b.jsxs)("button",{class:"profile",children:[Object(b.jsx)(I.a,{src:null!==n&&void 0!==n&&n.photoUrl?null===n||void 0===n?void 0:n.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0})," ",n.username]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("g",{class:"parallax"})})]})}),R=t(195),J=t(86);var W=function(e){var n=e.post,t=(e.isProfile,e.addLike),r=e.removeLike,c=e.addunLike,a=e.removeunLike,s=e.loggedUser,o=n.likes.findIndex((function(e){return e.username===s.username})),i=n.unlikes.findIndex((function(e){return e.username===s.username})),l=o>-1?"green":"grey";console.log(typeof t,"<<----addlike");var j=i>-1?"red":"grey";console.log(typeof c,"<<----addlike");var d=o>-1?function(){return r(n.likes[o]._id)}:function(){return t(n._id)},u=i>-1?function(){return a(n.unlikes[i]._id)}:function(){return c(n._id)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"ui card",style:{height:400},children:[Object(b.jsxs)("div",{style:{padding:5},class:"image",children:[Object(b.jsx)(I.a,{floated:"left",avatar:!0,src:n.user.photoUrl?n.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),Object(b.jsx)(R.a.Header,{children:n.user.username}),Object(b.jsx)(I.a,{style:{height:200},src:"".concat(null===n||void 0===n?void 0:n.photoUrl)})]}),Object(b.jsx)("div",{class:"content",children:Object(b.jsxs)(R.a.Content,{children:[Object(b.jsxs)(R.a.Description,{children:["NFT Name: ",n.name]}),Object(b.jsxs)(R.a.Description,{children:["NFT PRICE: ",n.price]}),Object(b.jsxs)(R.a.Description,{children:["NFT CHAIN: ",n.chain]})]})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("div",{style:{padding:5},class:"extra content",children:[Object(b.jsx)(J.a,{name:"angle up",size:"large",color:l,onClick:d}),n.likes.length]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("div",{class:"extra content",children:[Object(b.jsx)(J.a,{name:"angle down",size:"large",color:j,onClick:u}),n.unlikes.length]})}),Object(b.jsx)("th",{children:Object(b.jsx)(D.b,{style:{paddingLeft:200},to:"/".concat(n._id),children:"Detail"})})]})]})})};t(177);function M(e){var n=e.posts,t=(e.numPhotosCol,e.isProfile),r=e.removeLike,c=e.addLike,a=e.addunLike,s=e.removeunLike,o=e.loggedUser,i=n.reverse().map((function(e){return Object(b.jsx)(W,{post:e,isProfile:t,removeLike:r,addLike:c,loggedUser:o,addunLike:a,removeunLike:s},e._id)}));return Object(b.jsx)("body",{class:"gallerybody",children:Object(b.jsx)(R.a.Group,{itemsPerRow:4,stackable:!0,children:i})})}function G(e){var n=Object(r.useState)({name:"",price:"",chain:""}),t=Object(s.a)(n,2),c=t[0],a=t[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),h=d[0],p=d[1];function O(e){a(Object(j.a)(Object(j.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))}function g(){return(g=Object(i.a)(u.a.mark((function n(t){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),(r=new FormData).append("photo",h),r.append("name",c.name),r.append("chain",c.chain),r.append("price",c.price),console.log("THIS IS HANDLE SUBMIT>>>",r),e.handleAddPost(r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(b.jsx)(L.a,{children:Object(b.jsxs)(S.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(b.jsx)(S.a.Input,{className:"form-control",name:"name",value:c.name,placeholder:"Sad Ape",onChange:O,required:!0}),Object(b.jsx)(S.a.Input,{className:"form-control",name:"price",value:c.price,placeholder:"1 Eth",onChange:O,required:!0}),Object(b.jsx)(S.a.Input,{className:"form-control",name:"chain",value:c.chain,placeholder:"Polygon",onChange:O,required:!0}),Object(b.jsx)(S.a.Field,{children:Object(b.jsx)(S.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){p(e.target.files[0])}})}),Object(b.jsx)(x.a,{type:"submit",className:"btn",children:"Post NFT"})]})})}var $="/api/posts";function K(e){return fetch($,{method:"POST",body:e,headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function Q(){return fetch($,{headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}var V=t(193);function X(){return Object(b.jsx)(V.a,{size:"small",active:!0,children:"Loading"})}var Y="/api/";function Z(e){return fetch("".concat(Y,"posts/").concat(e,"/likes"),{method:"POST",headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function ee(e){return fetch("".concat(Y,"likes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}var ne="/api/";function te(e){return fetch("".concat(ne,"posts/").concat(e,"/unlikes"),{method:"POST",headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function re(e){return fetch("".concat(ne,"unlikes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}t(178);function ce(e){var n=e.loggedUser,t=e.handleLogout;console.log(">>>this is landing page..");var c=Object(r.useState)([]),a=Object(s.a)(c,2),o=a[0],l=a[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),h=(d[0],d[1],Object(r.useState)("")),p=Object(s.a)(h,2),x=(p[0],p[1]);function g(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(n);case 3:t=e.sent,console.log(t,"from add like"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server"),x("error adding like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=Object(i.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(n);case 3:t=e.sent,console.log(t," remove like"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),x("error removing like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=Object(i.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te(n);case 3:t=e.sent,console.log(t,"from add like"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server"),x("error adding like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(i.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(n);case 3:t=e.sent,console.log(t," remove like"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),x("error removing like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q();case 3:n=e.sent,console.log(n," data"),l(Object(F.a)(n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return console.log("function","<<----addlike 0"),console.log("function","<<----addlike 0"),Object(r.useEffect)((function(){w()}),[]),Object(b.jsx)("body",{class:"landingpagebody",children:Object(b.jsx)("div",{class:"landingpagecontainer",children:Object(b.jsxs)(O.a,{centered:!0,children:[Object(b.jsx)(O.a.Row,{children:Object(b.jsx)(O.a.Column,{children:Object(b.jsx)(H,{handleLogout:t,loggedUser:n})})}),Object(b.jsx)(O.a.Row,{children:Object(b.jsx)(O.a.Column,{style:{maxWidth:1600},children:Object(b.jsx)(M,{posts:o,numPhotosCol:1,addLike:g,isProfile:!1,removeLike:function(e){return m.apply(this,arguments)},loggedUser:n,addunLike:function(e){return v.apply(this,arguments)},removeunLike:function(e){return k.apply(this,arguments)}})})})]})})})}var ae=function(){var e=Object(o.m)();function n(){return(n=Object(i.a)(u.a.mark((function n(t){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K(t);case 3:r=n.sent,console.log("this is post data: ",r),e("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("this is error message from landing page",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return Object(b.jsx)(G,{handleAddPost:function(e){return n.apply(this,arguments)}})},se="/api/posts/";function oe(e){return console.log("delete post id: "+e),fetch("/api/posts//"+e,{method:"DELETE",headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}var ie={getDetails:function(e){return console.log("details calling............",e),fetch(se+e,{headers:{Authorization:"Bearer "+f.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error from getProfile Request, check the server terminal..!")}))},removePost:oe};t(179);function le(e){var n=e.post,t=Object(o.m)();function r(){return(r=Object(i.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(n._id);case 3:r=e.sent,console.log(r," remove post"),t("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(b.jsx)("body",{class:"detailbody",children:Object(b.jsx)("div",{class:"detailcontainer",children:Object(b.jsx)("center",{children:Object(b.jsx)("div",{class:"ui card",style:{height:800,width:800,padding:20},children:n.map((function(e,n){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"wrap",children:Object(b.jsxs)("div",{class:"detailheader",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{class:"nametag",children:"NFT NAME:\u2003"}),Object(b.jsx)("td",{children:Object(b.jsx)("h2",{class:"nametag",children:e.name})})]}),Object(b.jsx)("div",{class:"ui segment",children:Object(b.jsx)("img",{class:"ui centered large image",src:"".concat(null===e||void 0===e?void 0:e.photoUrl)})}),Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" ",Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{class:"nametag",children:"NFT Price:\u2003"}),Object(b.jsx)("td",{children:Object(b.jsx)("h2",{class:"nametag",children:e.price})})]})]}),Object(b.jsx)("td",{children:"---"}),Object(b.jsx)("td",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{class:"nametag",children:"NFT Chain:\u2003"}),Object(b.jsx)("td",{children:Object(b.jsx)("h2",{class:"nametag",children:e.chain})})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" ",Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{class:"nametag",children:"Likes:\u2003"}),Object(b.jsx)("td",{children:Object(b.jsx)("h2",{class:"nametag",children:e.likes.length})})]})]}),Object(b.jsx)("td",{children:"---"}),Object(b.jsx)("td",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{class:"nametag",children:"Dislike:\u2003"}),Object(b.jsx)("td",{children:Object(b.jsx)("h2",{class:"nametag",children:e.unlikes.length})})]})})]}),Object(b.jsxs)("div",{class:"extra content",children:["Delete-",Object(b.jsx)(J.a,{name:"remove",size:"large",onClick:function(){return function(e){return r.apply(this,arguments)}(e)}})]})]})})},n)}))})})})})}function je(){var e=Object(o.o)().id,n=Object(r.useState)([]),t=Object(s.a)(n,2),c=t[0],a=t[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),d=j[0],h=j[1],O=Object(r.useState)(!0),x=Object(s.a)(O,2),g=x[0],f=x[1];return Object(r.useEffect)((function(){function n(){return(n=Object(i.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("id in Deatils page ",e),n.next=4,ie.getDetails(e);case 4:t=n.sent,f(!1),a(t.data.post),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h("Post does not exist, Refresh the page or go back");case 12:case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),d?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{error:d}),";"]}):g?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(X,{})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(le,{post:c})})}t(180);function de(){var e=Object(o.m)();function n(){return(n=Object(i.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e("/login");case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function t(){return(t=Object(i.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e("/signup");case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("body",{children:Object(b.jsxs)("div",{class:"containerintro",children:[Object(b.jsx)("h1",{children:"Welcome To NFT Market :)"}),Object(b.jsx)("h2",{children:"Nfts are the future on collections"}),Object(b.jsx)("cneter",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{children:[" ",Object(b.jsx)("div",{onClick:function(e){return n.apply(this,arguments)},class:"btn_containerintro",children:Object(b.jsx)("a",{class:"btn1intro",children:Object(b.jsx)("span",{class:"btn1span",children:"Sign In"})})})]}),Object(b.jsx)("th",{children:"-----------"}),Object(b.jsxs)("th",{children:[" ",Object(b.jsx)("div",{onClick:function(e){return t.apply(this,arguments)},class:"btn_containerintro",children:Object(b.jsx)("a",{class:"btn1intro",children:Object(b.jsx)("span",{class:"btn1span",children:"Sign Up"})})})]})]})})]})})})}var ue=function(){var e=Object(r.useState)(v.getUser()),n=Object(s.a)(e,2),t=n[0],c=n[1];function a(){c(v.getUser())}function i(){v.logout(),c(null)}return t?Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(ce,{loggedUser:t,handleLogout:i})}),Object(b.jsx)(o.b,{path:"/login",element:Object(b.jsx)(w,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/signup",element:Object(b.jsx)(k,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/logout",element:Object(b.jsx)(T,{loggedUser:t,handleLogout:i})}),Object(b.jsx)(o.b,{path:"/addNft",element:Object(b.jsx)(ae,{})}),Object(b.jsx)(o.b,{path:"/:id",element:Object(b.jsx)(je,{})})]}):Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/login",element:Object(b.jsx)(w,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/intro",element:Object(b.jsx)(de,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/signup",element:Object(b.jsx)(k,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/*",element:Object(b.jsx)(o.a,{to:"/intro"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(b.jsx)(D.a,{children:Object(b.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.bba0eec7.chunk.js.map