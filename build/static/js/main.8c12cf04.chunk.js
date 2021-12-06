(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(10),c=n.n(a),i=n(7),l=n(2),o=n(3),r=n(6),j=n(0);var d=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(o.a)(c,2),l=i[0],d=i[1],m=Object(s.useState)(""),h=Object(o.a)(m,2),u=h[0],b=h[1],O=Object(s.useState)(""),p=Object(o.a)(O,2),f=p[0],x=p[1],g=Object(s.useState)(""),y=Object(o.a)(g,2),v=y[0],N=y[1],w=Object(s.useState)(!0),_=Object(o.a)(w,2),C=_[0],S=_[1];return Object(s.useEffect)((function(){n.length>0&&l.length>0&&-1!==u.indexOf("@")&&-1!==u.indexOf(".")&&""!==f&&f.length>=8&&f===v?S(!1):S(!0)}),[n,l,f,v,u]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Register"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("input",{type:"text",name:"firstName",maxLength:"256",placeholder:" First Name",onChange:function(e){a(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!n||"none"},children:"Field required"}),Object(j.jsx)("input",{type:"text",name:"lastName",maxLength:"256",placeholder:" Last Name",onChange:function(e){d(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!l||"none"},children:"Field required"}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",placeholder:" Email",onChange:function(e){b(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:-1===u.indexOf("@")||-1===u.indexOf(".")||"none"},children:"Invalid Email"}),Object(j.jsx)("input",{type:"password",name:"password",maxLength:"256",placeholder:" Password",onChange:function(e){x(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:f.length<8||"none"},children:"Password must contain 8 minimum character"}),Object(j.jsx)("input",{type:"password",name:"ConfirmPassword",maxLength:"256",placeholder:" Confirm Password",onChange:function(e){N(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:v!==f||"none"},children:"Password doesn't match"}),Object(j.jsx)("button",{id:"signUpButton",disabled:C,style:{backgroundColor:C?"red":null},onClick:function(){console.log(n),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:l,email:u,password:f,confirmPassword:v})}).then((function(e){return e.json()})).then((function(e){document.querySelectorAll("input").forEach((function(e){return e.value=""})),alert(e.msg)}))},children:"Sign Up"}),Object(j.jsx)("a",{href:"/",children:"Sign In"})]})]})]})};var m=function(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(""),d=Object(o.a)(i,2),m=d[0],h=d[1],u=Object(s.useState)(""),b=Object(o.a)(u,2),O=b[0],p=b[1],f=Object(l.f)();return Object(s.useEffect)((function(){fetch("/login",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),"/profile"===e.msg&&f("/profile")}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/login.css"})}),Object(j.jsxs)("div",{className:"login__form",children:[Object(j.jsx)("p",{style:{color:"white"},children:O}),Object(j.jsxs)("div",{className:"email_section",children:[Object(j.jsx)("img",{src:"../useremail.png",alt:"useremail"}),Object(j.jsx)("input",{type:"email",maxLength:"256",name:"email",onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"password_section",children:[Object(j.jsx)("img",{src:"../userpassword.png",alt:"useremail"}),Object(j.jsx)("input",{type:"password",maxLength:"256",name:"password",onChange:function(e){h(e.target.value)}})]}),Object(j.jsxs)("div",{className:"login__form__links",children:[Object(j.jsx)("a",{href:"/register",children:"Create New Account"}),Object(j.jsx)("a",{href:"/forgetpassword",children:"Forgot Password?"})]}),Object(j.jsx)("button",{onClick:function(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:m})}).then((function(e){return e.json()})).then((function(e){console.log(e),"success"!==e.msg?(console.log(e.msg),p(e.msg)):f("/profile")}))},className:"submit__class",children:"Login"})]})]})};var h=function(e){var t=e.user;console.log(t),console.log(window.location.href);var n=Object(l.f)(),a=Object(s.useState)(""),c=Object(o.a)(a,2),i=c[0],r=c[1],d=Object(s.useState)(""),m=Object(o.a)(d,2),h=m[0],u=m[1],b=Object(s.useState)(""),O=Object(o.a)(b,2),p=O[0],f=O[1],x=Object(s.useState)(""),g=Object(o.a)(x,2),y=g[0],v=g[1];return Object(s.useEffect)((function(){r(t.firstName)}),[t]),Object(s.useEffect)((function(){f(t.lastName)}),[t]),Object(s.useEffect)((function(){u(t.email)}),[t]),Object(j.jsxs)("div",{className:"profile__section",children:[Object(j.jsx)("img",{src:y||"/avatar.png",className:"profile__picture",alt:"profile"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){v(e.target.result)},t.readAsDataURL(e.target.files[0])}}(e)}}),Object(j.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(j.jsx)("input",{type:"text",name:"firstName",maxLength:"256",value:i||"",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!i||"none"},children:"Field required"}),Object(j.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(j.jsx)("input",{type:"text",name:"lastName",maxLength:"256",value:p||"",onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!p||"none"},children:"Field required"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",value:h||"",onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:!h||-1===h.indexOf("@")||-1===h.indexOf(".")||"none"},children:"Invalid Email"}),Object(j.jsx)("button",{className:"logout__button",onClick:function(){n("/profile")},children:"Cancel"}),Object(j.jsx)("button",{className:"edit__button",style:{backgroundColor:i&&p&&-1!==h.indexOf("@")&&-1!==h.indexOf(".")?null:"red"},disabled:!i||!p,onClick:function(){fetch("/api/editprofile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:i,lastName:p,email:h})}).then((function(e){return e.json()})).then((function(e){"success"===e.msg?n("/profile"):alert(e.msg)}))},children:"Save"})]})};var u=function(e){var t=Object(l.f)(),n=Object(s.useState)(!0),a=Object(o.a)(n,2),c=a[0],i=a[1],d=Object(s.useState)({}),m=Object(o.a)(d,2),u=m[0],b=m[1];return Object(s.useEffect)((function(){fetch("/api/profile",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.msg?t("/"):b(e)}))}),[c]),Object(s.useEffect)((function(){console.log(c),console.log(window.location.pathname),"/profile"===window.location.pathname&&i(!0),"/profile/edit"===window.location.pathname&&i("none")})),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/profile.css"})}),Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{exact:!0,path:"/edit",element:Object(j.jsx)(h,{user:u})})}),Object(j.jsxs)("div",{className:"profile__section",style:{display:c},children:[Object(j.jsx)("img",{src:"/avatar.png",className:"profile__picture",alt:"profile"}),Object(j.jsxs)("div",{className:"firstname__section",children:[Object(j.jsx)("small",{children:"Firstname"}),Object(j.jsx)("p",{children:u.firstName})]}),Object(j.jsxs)("div",{className:"lastname__section",children:[Object(j.jsx)("small",{children:"Lastname"}),Object(j.jsx)("p",{children:u.lastName})]}),Object(j.jsxs)("div",{className:"email__section",children:[Object(j.jsx)("small",{children:"email"}),Object(j.jsx)("p",{children:u.email})]}),Object(j.jsx)("button",{className:"logout__button",onClick:function(){fetch("/logout",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return t("/")}))},children:"Logout"}),Object(j.jsx)("button",{className:"edit__button",onClick:function(){i("none"),t("/profile/edit")},children:"Edit"})]}),Object(j.jsx)("div",{className:"posts__section",children:Object(j.jsx)("textarea",{})})]})};var b=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(o.a)(c,2),l=i[0],d=i[1];return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Send Email For New Password"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("p",{style:{color:"red",display:!!l||"none"},children:l}),Object(j.jsx)("input",{type:"email",name:"email",maxLength:"256",placeholder:" Email",onChange:function(e){a(e.target.value)}}),Object(j.jsx)("button",{id:"signUpButton",onClick:function(){fetch("/api/forgetpassword/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(e){return e.json()})).then((function(e){"success"===e.msg?alert("Please check your email"):d(e.msg)}))},children:"Send"}),Object(j.jsx)("a",{href:"/",children:"Sign In"})]})]})]})};var O=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(o.a)(c,2),d=i[0],m=i[1],h=Object(l.f)();return Object(s.useEffect)((function(){fetch("/api".concat(window.location.pathname),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"!==e.msg&&(document.getElementsByClassName("main")[0].display="none",alert("time expired please try again"),h("/"))}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("link",{rel:"stylesheet",href:"/component_css/signup.css"})}),Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"register__header",children:Object(j.jsx)("h2",{children:"Confirm password"})}),Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsx)("input",{type:"password",name:"password",maxLength:"256",placeholder:" New Password",onChange:function(e){a(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:n.length<8||"none"},children:"Password must contain 8 minimum character"}),Object(j.jsx)("input",{type:"password",name:"ConfirmPassword",maxLength:"256",placeholder:" Confirm Password",onChange:function(e){m(e.target.value)}}),Object(j.jsx)("small",{style:{color:"red",display:d!==n||"none"},children:"Password doesn't match"}),Object(j.jsx)("button",{id:"signUpButton",onClick:function(){fetch("/api".concat(window.location.pathname),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,confirmPassword:d})}).then((function(e){return e.json()})).then((function(e){alert(e.msg),h("/")}))},disabled:""===n||d!==n,children:"Confirm"})]})]})]})};var p=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/register",element:Object(j.jsx)(d,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/profile/*",element:Object(j.jsx)(u,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/forgetpassword",element:Object(j.jsx)(b,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/confirmpassword/*",element:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/",element:Object(j.jsx)(m,{})})]})})};c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8c12cf04.chunk.js.map