(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{51:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(31),a=n.n(c),i=n(19),o=n(2),r=n(3),l=n(16),j=n(0);var d=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],d=i[1],u=Object(s.useState)(""),m=Object(r.a)(u,2),h=m[0],b=m[1],O=Object(s.useState)(""),f=Object(r.a)(O,2),p=f[0],x=f[1],g=Object(s.useState)(""),y=Object(r.a)(g,2),v=y[0],N=y[1],_=Object(s.useState)(!0),w=Object(r.a)(_,2),C=w[0],S=w[1];return Object(s.useEffect)((function(){n.length>0&&o.length>0&&-1!==h.indexOf("@")&&-1!==h.indexOf(".")&&""!==p&&p.length>=8&&p===v?S(!1):S(!0)}),[n,o,p,v,h]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Register"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("input",{type:"text",name:"firstName",maxLength:"256",placeholder:" First Name",onChange:function(e){c(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!n||"none"},children:"Field required"}),Object(j.jsx)("input",{type:"text",name:"lastName",maxLength:"256",placeholder:" Last Name",onChange:function(e){d(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!o||"none"},children:"Field required"}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",placeholder:" Email",onChange:function(e){b(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:-1===h.indexOf("@")||-1===h.indexOf(".")||"none"},children:"Invalid Email"}),Object(j.jsx)("input",{type:"password",name:"password",maxLength:"256",placeholder:" Password",onChange:function(e){x(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:p.length<8||"none"},children:"Password must contain 8 minimum character"}),Object(j.jsx)("input",{type:"password",name:"ConfirmPassword",maxLength:"256",placeholder:" Confirm Password",onChange:function(e){N(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:v!==p||"none"},children:"Password doesn't match"}),Object(j.jsx)("button",{id:"signUpButton",disabled:C,style:{backgroundColor:C?"red":null},onClick:function(){console.log(n),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:o,email:h,password:p,confirmPassword:v})}).then((function(e){return e.json()})).then((function(e){document.querySelectorAll("input").forEach((function(e){return e.value=""})),alert(e.msg)}))},children:"Sign Up"}),Object(j.jsx)("a",{href:"/",children:"Sign In"})]})]})]})};var u=function(e){var t=Object(s.useState)(""),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),d=Object(r.a)(i,2),u=d[0],m=d[1],h=Object(s.useState)(""),b=Object(r.a)(h,2),O=b[0],f=b[1],p=Object(o.f)();return Object(s.useEffect)((function(){fetch("/login",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),"/profile"===e.msg&&p("/profile")}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/login.css"})}),Object(j.jsxs)("div",{className:"login__form",children:[Object(j.jsx)("p",{style:{color:"white"},children:O}),Object(j.jsxs)("div",{className:"email_section",children:[Object(j.jsx)("img",{src:"../useremail.png",alt:"useremail"}),Object(j.jsx)("input",{type:"email",maxLength:"256",name:"email",onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"password_section",children:[Object(j.jsx)("img",{src:"../userpassword.png",alt:"useremail"}),Object(j.jsx)("input",{type:"password",maxLength:"256",name:"password",onChange:function(e){m(e.target.value)}})]}),Object(j.jsxs)("div",{className:"login__form__links",children:[Object(j.jsx)("a",{href:"/register",children:"Create New Account"}),Object(j.jsx)("a",{href:"/forgetpassword",children:"Forgot Password?"})]}),Object(j.jsx)("button",{onClick:function(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:u})}).then((function(e){return e.json()})).then((function(e){console.log(e),"success"!==e.msg?(console.log(e.msg),f(e.msg)):p("/profile")}))},className:"submit__class",children:"Login"})]})]})},m=n(29),h=n(28),b=n.n(h),O=n(34);var f=function(e){var t=e.user;console.log(t),console.log(window.location.href);var n=Object(o.f)(),c=Object(s.useState)(""),a=Object(r.a)(c,2),i=a[0],l=a[1],d=Object(s.useState)(""),u=Object(r.a)(d,2),m=u[0],h=u[1],b=Object(s.useState)(""),O=Object(r.a)(b,2),f=O[0],p=O[1],x=Object(s.useState)(""),g=Object(r.a)(x,2),y=g[0],v=g[1],N=Object(s.useState)(""),_=Object(r.a)(N,2),w=_[0],C=_[1];return Object(s.useEffect)((function(){l(t.firstName)}),[t]),Object(s.useEffect)((function(){p(t.lastName)}),[t]),Object(s.useEffect)((function(){h(t.email)}),[t]),Object(j.jsxs)("div",{className:"profile__section",children:[Object(j.jsx)("img",{src:y||t.photo||"/avatar.png",className:"profile__picture",alt:"profile"}),Object(j.jsx)("small",{style:{color:"red",display:w.size>2097152||"none"},children:"image max size is 2 megabyte"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return function(e){if(C(e.target.files[0]),console.log(e.target.files[0]),e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){v(e.target.result)},t.readAsDataURL(e.target.files[0])}}(e)}}),Object(j.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(j.jsx)("input",{type:"text",name:"firstName",maxLength:"256",value:i||"",onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!i||"none"},children:"Field required"}),Object(j.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastName",maxLength:"256",value:f||"",onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!f||"none"},children:"Field required"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",value:m||"",onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!m||-1===m.indexOf("@")||-1===m.indexOf(".")||"none"},children:"Invalid Email"}),Object(j.jsx)("button",{className:"logout__button",onClick:function(){n("/profile")},children:"Cancel"}),Object(j.jsx)("button",{className:"edit__button",style:{backgroundColor:!i||w.size>2097152||!f||-1===m.indexOf("@")||-1===m.indexOf(".")?"red":null},disabled:!i||w.size>2097152||!f,onClick:function(){console.log(w),fetch("/api/editprofile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:i,lastName:f,email:m})}).then((function(e){return e.json()})).then((function(e){"success"===e.msg||alert(e.msg)})).then((function(){if(""!==w){var e=new FormData;e.append("picture",w),fetch("/api/editprofileimage",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){"success"===e.msg?(C(""),n("/profile")):alert(e.msg)}))}else n("/profile")}))},children:"Save"})]})},p=n(38),x=Object(p.a)("harut-app.herokuapp.com");var g=function(e){var t=Object(o.f)(),n=Object(s.useState)(!0),c=Object(r.a)(n,2),a=c[0],i=c[1],d=Object(s.useState)(""),u=Object(r.a)(d,2),h=u[0],p=u[1],g=Object(s.useState)([]),y=Object(r.a)(g,2),v=y[0],N=y[1],_=Object(s.useState)([]),w=Object(r.a)(_,2),C=w[0],S=w[1],k=Object(s.useState)(""),E=Object(r.a)(k,2),P=E[0],L=E[1],T=Object(s.useState)({}),F=Object(r.a)(T,2),I=F[0],J=F[1];return console.log(v),Object(s.useEffect)((function(){function e(){return(e=Object(O.a)(b.a.mark((function e(){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/profile",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:"/"!==(s=e.sent).msg?J(s):t("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){x.emit("addUser",I.id,I.firstName)}),[I]),Object(s.useEffect)((function(){x.on("hello",(function(e){console.log(e),"connected"!==e&&N((function(t){return[].concat(Object(m.a)(t),[e])}))}))}),[]),Object(s.useEffect)((function(){x.on("getUsers",(function(e){console.log(e),S(e)}))}),[]),Object(s.useEffect)((function(){console.log(a),console.log(window.location.pathname),"/profile"===window.location.pathname&&i(!0),"/profile/edit"===window.location.pathname&&i("none")})),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/profile.css"})}),Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{exact:!0,path:"/edit",element:Object(j.jsx)(f,{user:I})})}),Object(j.jsxs)("div",{className:"profile__section",style:{display:a},children:[Object(j.jsx)("img",{src:null===I.photo?"/avatar.png":I.photo,className:"profile__picture",alt:"profile"}),Object(j.jsxs)("div",{className:"firstname__section",children:[Object(j.jsx)("small",{children:"Firstname"}),Object(j.jsx)("p",{children:I.firstName})]}),Object(j.jsxs)("div",{className:"lastname__section",children:[Object(j.jsx)("small",{children:"Lastname"}),Object(j.jsx)("p",{children:I.lastName})]}),Object(j.jsxs)("div",{className:"email__section",children:[Object(j.jsx)("small",{children:"email"}),Object(j.jsx)("p",{children:I.email})]}),Object(j.jsx)("button",{className:"logout__button",onClick:function(){fetch("/logout",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return t("/")}))},children:"Logout"}),Object(j.jsx)("button",{className:"edit__button",onClick:function(){i("none"),t("/profile/edit")},children:"Edit"})]}),Object(j.jsxs)("div",{className:"active__users",children:[Object(j.jsx)("h2",{children:"active users. click user for sending messages"}),Object(j.jsx)("ul",{children:C&&C.map((function(e,t){if(e.userId!==I.id)return Object(j.jsx)("li",{"data-id":e.userId,onClick:function(e){!function(e){Object(m.a)(document.getElementsByClassName("active__users")[0].children[1].children).map((function(e){return e.style.backgroundColor="inherit"})),e.target.style.backgroundColor="green",L(Number(e.target.getAttribute("data-id")))}(e)},children:e.name},t)}))})]}),Object(j.jsxs)("div",{className:"posts__section",children:[Object(j.jsx)("textarea",{onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("button",{className:"edit__button",onClick:function(){x.emit("hello",h,P,I.firstName,I.id),document.querySelector("textarea").value="",p("")},children:"Send"}),Object(j.jsx)("ul",{children:v.map((function(e,t){if(P===e.id||e.userId===P)return Object(j.jsxs)("li",{children:[e.name,":",e.data]},t)}))})]})]})};var y=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],d=i[1];return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Send Email For New Password"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("p",{style:{color:"red",display:!!o||"none"},children:o}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",placeholder:" Email",onChange:function(e){c(e.target.value)}}),Object(j.jsx)("button",{id:"signUpButton",onClick:function(){fetch("/api/forgetpassword/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(e){return e.json()})).then((function(e){"success"===e.msg?alert("Please check your email"):d(e.msg)}))},children:"Send"}),Object(j.jsx)("a",{href:"/",children:"Sign In"})]})]})]})};var v=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),d=i[0],u=i[1],m=Object(o.f)();return Object(s.useEffect)((function(){fetch("/api".concat(window.location.pathname),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"!==e.msg&&(document.getElementsByClassName("main")[0].display="none",alert("time expired please try again"),m("/"))}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Confirm password"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("input",{type:"password",name:"password",maxLength:"256",placeholder:" New Password",onChange:function(e){c(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:n.length<8||"none"},children:"Password must contain 8 minimum character"}),Object(j.jsx)("input",{type:"password",name:"ConfirmPassword",maxLength:"256",placeholder:" Confirm Password",onChange:function(e){u(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:d!==n||"none"},children:"Password doesn't match"}),Object(j.jsx)("button",{id:"signUpButton",onClick:function(){fetch("/api".concat(window.location.pathname),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,confirmPassword:d})}).then((function(e){return e.json()})).then((function(e){alert(e.msg),m("/")}))},disabled:""===n||d!==n,children:"Confirm"})]})]})]})};var N=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/register",element:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/profile/*",element:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/forgetpassword",element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/confirmpassword/*",element:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/",element:Object(j.jsx)(u,{})})]})})};a.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1a15d1b1.chunk.js.map