(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{45:function(e,n,r){"use strict";r.r(n);var t,a,c,i,s,o,l,h,d,b,u,m,j,p,O,f,x,g,v,C,w,y,_=r(2),k=r(24),M=r.n(k),D=r(3),S=r(4),T=Object(S.a)(t||(t=Object(D.a)(["\n\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body { \n        height: 100vh;\n        font-family: 'Nunito Sans', sans-serif; \n        line-height: 1.5;\n    }\n\n    a{\n        color: #F9F9F9; \n        text-decoration: none;\n    }\n\n    input,\n    button{\n        font-family: inherit;\n        font-size: inherit;\n    }\n\n    button{ border: none; }\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"]))),N=r(10),B=r(5),F=S.b.div(a||(a=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-image: url(heroes/assets/images/background-login.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 2rem;\n  text-align: center;\n"]))),A=S.b.div(c||(c=Object(D.a)(["\n  border-radius: 0.5rem;\n  margin: ",";\n  max-width: ",";\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  padding: ",";\n  overflow: hidden;\n  background-color: #fff;\n"])),(function(e){return e.mr||0}),(function(e){return e.mxWidth||"none"}),(function(e){return e.pd||0})),J=S.b.h2(i||(i=Object(D.a)(["\n  margin-bottom: ",";\n"])),(function(e){return e.mb||"1rem"})),G=S.b.div(s||(s=Object(D.a)(["\n  height: 100%;\n  padding: ",";\n  width: ",";\n"])),(function(e){return e.pd||0}),(function(e){return e.width||"100%"})),L=Object(S.b)(G)(o||(o=Object(D.a)(["\n  display: flex;\n\n  align-items: ",";\n\n  @media (max-width: 31.25rem){\n    flex-direction: column;\n  }\n"])),(function(e){return e.align||"start"})),W=Object(S.b)(N.b)(l||(l=Object(D.a)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 0.5rem;\n  background-color: #ff2626;\n  color: #f9f9f9;\n  transition: background-color 350ms ease-in;\n\n  &:hover {\n    background-color: hsl(0, 100%, 40%);\n  }\n"]))),z=Object(S.b)(W)(h||(h=Object(D.a)(["\n  border-radius: 0.3rem;\n"]))),I=Object(S.b)(z)(d||(d=Object(D.a)(["\n  cursor: pointer;\n  align-self: flex-end;\n"]))),H=r(1),P=function(){return Object(H.jsx)(F,{children:Object(H.jsxs)(A,{mxWidth:"22rem",children:[Object(H.jsxs)(G,{pd:"1.5rem",children:[Object(H.jsx)(J,{as:"h3",children:"Welcome to The Comic show"}),Object(H.jsx)("p",{children:"Here you can find information about some of the most important heroes of Dc and Marvel comics."})]}),Object(H.jsx)(W,{to:"/",children:" Login"})]})})},R=function(){return Object(H.jsx)(P,{})},E=r(13),K=Object(S.b)(N.c)(b||(b=Object(D.a)(["\n  &.selected {\n    \n    color: #1B1717;\n    font-weight: 700;\n    text-decoration: underline wavy;\n    transition: color 400ms ease;\n  }\n"]))),q=function(e){var n=e.path,r=e.pathName,t=e.onClick;return Object(H.jsx)(K,{to:n,activeClassName:"selected",onClick:t,children:r})},Q=r(0),U=r(22),X=S.b.div(u||(u=Object(D.a)(["\n  display: flex;\n\n  & > svg {\n    cursor: pointer;\n  }\n\n  @media (min-width: 600px) {\n    display: none;\n  }\n"]))),V=function(e){var n=e.setIsOpen,r=e.isOpen,t=function(){return n(!r)};return Object(H.jsx)(Q.b.Provider,{value:{size:"2rem",color:"white"},children:Object(H.jsx)(X,{children:r?Object(H.jsx)(U.a,{onClick:t}):Object(H.jsx)(U.b,{onClick:t})})})},Y=S.b.header(m||(m=Object(D.a)(["\n  background-color: #ce1212;\n  padding: 1rem;\n\n  @media (max-width: 500px) {\n    padding: 0.5rem;\n  }\n"]))),Z=S.b.h2(j||(j=Object(D.a)(["\n  display: inline;\n"]))),$=S.b.div(p||(p=Object(D.a)(["\n  display: none;\n\n  @media (min-width: 600px) {\n    display: block;\n  }\n"]))),ee=S.b.nav(O||(O=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  a {\n    margin: 0 1rem;\n    font-size: 1.2;\n  }\n"]))),ne=S.b.div(f||(f=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #ce1212;\n  margin-top: 1rem;\n"]))),re=function(){var e=Object(_.useState)(!1),n=Object(E.a)(e,2),r=n[0],t=n[1],a=function(){return window.innerWidth<=600&&t(!1)};return Object(_.useEffect)((function(){a()}),[]),window.addEventListener("resize",a),Object(H.jsxs)(Y,{children:[Object(H.jsxs)(ee,{children:[Object(H.jsxs)(L,{align:"center",children:[Object(H.jsx)(Z,{children:Object(H.jsx)(N.b,{to:"/",children:"The Comic show"})}),Object(H.jsxs)($,{children:[Object(H.jsx)(q,{path:"/marvel",pathName:"Marvel"}),Object(H.jsx)(q,{path:"/dc",pathName:"Dc"}),Object(H.jsx)(q,{path:"/search",pathName:"Search hero"})]})]}),Object(H.jsx)($,{children:Object(H.jsx)(q,{path:"/login",pathName:"Logout"})}),Object(H.jsx)(V,{isOpen:r,setIsOpen:t})]}),r?Object(H.jsxs)(ne,{children:[Object(H.jsx)(q,{path:"/marvel",pathName:"Marvel",onClick:function(){return t(!1)}}),Object(H.jsx)(q,{path:"/dc",pathName:"Dc",onClick:function(){return t(!1)}}),Object(H.jsx)(q,{path:"/search",pathName:"Search hero",onClick:function(){return t(!1)}}),Object(H.jsx)(q,{path:"/login",pathName:"Logout",onClick:function(){return t(!1)}})]}):null]})},te=r(11),ae=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],ce=S.b.p(x||(x=Object(D.a)(["\n  margin: 0.5rem 0;\n"]))),ie=function(e){var n=e.infoTitle,r=e.info;return Object(H.jsxs)(ce,{children:[n,": ",Object(H.jsx)("b",{children:r})]})},se=S.b.img(g||(g=Object(D.a)(["\n  max-width: 12.5rem;\n  vertical-align: bottom;\n\n  @media (max-width: 31.25rem) {\n    max-width: 100%;\n  }\n"]))),oe=function(e){var n=e.id,r=e.superhero,t=e.alter_ego,a=e.characters;return Object(H.jsx)(A,{mr:"1rem",className:"animate__animated animate__fadeInUp",children:Object(H.jsxs)(L,{children:[Object(H.jsx)(se,{src:"/heroes/assets/images/".concat(n,".jpg"),alt:t}),Object(H.jsxs)(G,{pd:"1rem",children:[Object(H.jsx)(J,{as:"h3",children:r}),Object(H.jsx)(ie,{infoTitle:"Alter ego",info:t}),t!==a&&Object(H.jsx)(ie,{infoTitle:"Name",info:a}),Object(H.jsx)(z,{to:"/hero/".concat(n),children:"More info..."})]})]})})},le=S.b.section(v||(v=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n\n  @media screen and (min-width: 35rem) and (max-width: 64rem) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (min-width: 64rem) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),he=function(e){var n=e.publisher,r=Object(_.useMemo)((function(){return function(e){var n=e.toLowerCase();if(!["dc comics","marvel comics"].includes(n))throw new Error("The publisher doesnt's exists");return ae.filter((function(e){return e.publisher.toLowerCase()===n}))}(n)}),[n]).map((function(e){return Object(H.jsx)(oe,Object(te.a)({},e),e.id)}));return Object(H.jsx)(le,{children:r})},de=function(e){var n=e.name;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h1",{children:n}),Object(H.jsx)("hr",{})]})},be=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(de,{name:"Marvel Screen"}),Object(H.jsx)(he,{publisher:"marvel comics"})]})},ue=S.b.div(C||(C=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n\n  @media screen and (min-width: 650px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),me=function(e){var n=e.history,r=Object(B.h)().heroId,t=Object(_.useMemo)((function(){return e=r,ae.find((function(n){return n.id===e}));var e}),[r]);t||B.a;var a=t.superhero,c=t.characters,i=t.publisher,s=t.alter_ego,o=t.first_appearance;return Object(H.jsx)(ue,{children:Object(H.jsx)(A,{mr:"1rem",className:"animate__animated animate__fadeInLeft",children:Object(H.jsxs)(L,{children:[Object(H.jsx)(se,{src:"/heroes/assets/images/".concat(r,".jpg"),alt:s}),Object(H.jsxs)(G,{pd:"1rem",children:[Object(H.jsx)(J,{as:"h3",children:a}),Object(H.jsx)(ie,{infoTitle:"Character",info:c}),Object(H.jsx)(ie,{infoTitle:"Publisher",info:i}),Object(H.jsx)(ie,{infoTitle:"First appearance",info:o}),Object(H.jsx)(I,{as:"button",onClick:function(){return n.goBack()},children:"Go back..."})]})]})})})},je=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(de,{name:"Dc Screen"}),Object(H.jsx)(he,{publisher:"dc comics"})]})},pe=r(28),Oe=r.n(pe),fe=r(17),xe=S.b.input(w||(w=Object(D.a)(["\n  width: 100%;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #000000;\n  border-radius: 0.25rem;\n"]))),ge=function(e){var n=e.history,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(_.useState)(e),r=Object(E.a)(n,2),t=r[0],a=r[1];return[t,function(n){var r=n.target;return a(Object(te.a)(Object(te.a)({},e),{},Object(fe.a)({},r.name,r.value)))},function(){return a(e)}]}({heroeName:""}),t=Object(E.a)(r,3),a=t[0].heroeName,c=t[1],i=t[2];return Object(H.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.push("?q=".concat(a)),i()},children:Object(H.jsx)(xe,{type:"text",name:"heroeName",value:a,onChange:c,placeholder:"Type a name",autoComplete:"no"})})},ve=function(e){var n=e.history,r=Oe.a.parse(Object(B.g)().search).q,t=Object(_.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?(e=e.toLowerCase(),ae.filter((function(n){return n.superhero.toLowerCase().includes(e)}))):[]}(r)}),[r]);return Object(H.jsxs)(G,{children:[Object(H.jsx)(ge,{history:n}),Object(H.jsx)(ue,{children:t.map((function(e){return Object(H.jsx)(oe,Object(te.a)({},e),e.id)}))})]})},Ce=S.b.main(y||(y=Object(D.a)(["\n  margin: 0.5rem;\n\n  @media screen and (min-width: 64rem) {\n    margin: 2rem;\n  }\n"]))),we=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(re,{}),Object(H.jsx)(Ce,{children:Object(H.jsxs)(B.d,{children:[Object(H.jsx)(B.b,{exact:!0,path:"/marvel",component:be}),Object(H.jsx)(B.b,{exact:!0,path:"/hero/:heroId",component:me}),Object(H.jsx)(B.b,{exact:!0,path:"/dc",component:je}),Object(H.jsx)(B.b,{exact:!0,path:"/search",component:ve}),Object(H.jsx)(B.a,{to:"/marvel"})]})})]})},ye=function(){return Object(H.jsx)(N.a,{children:Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(B.d,{children:[Object(H.jsx)(B.b,{exact:!0,path:"/login",component:R}),Object(H.jsx)(B.b,{path:"/",component:we})]})})})},_e=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(T,{}),Object(H.jsx)(ye,{})]})};M.a.render(Object(H.jsx)(_e,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6fad96bf.chunk.js.map