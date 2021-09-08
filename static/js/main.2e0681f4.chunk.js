(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{51:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a,r,c=t(1),s=t.n(c),i=t(41),o=t.n(i),l=(t(51),t(12)),u=t(4),d=t(2),j=t(6),m=t(5),p=t(0),b=m.a.div(a||(a=Object(u.a)(["\n\n    .container{\n        display: flex;\n        justify-content: center;\n        margin: 20px;\n        padding: 15px;\n        color: #8d8f8f;\n        text-align: justify;\n        flex-wrap: wrap;\n    }\n\n    .container img{\n        margin: 20px;\n        border-radius: 10px;\n        background-color: azure;\n    }\n\n    .container strong{\n        color: azure;\n    }\n\n    .titulo{\n        display: flex;\n        justify-content: center;\n        font-size: 1.5rem;\n    }\n\n    .buttons{\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n    }\n\n    .back{\n        border: none;\n        border-radius: 4px;\n        padding: 10px 20px;\n        background-color: rgb(88, 88, 219);\n        color: white;\n        cursor: pointer;\n    }\n\n    .back:hover{\n        transform: scale(1.05);\n        opacity: 0.8;\n    }\n\n    .play{\n        margin-left: 10px;\n        border: none;\n        border-radius: 4px;\n        padding: 10px 20px;\n        background-color: rgb(211, 31, 8);\n        color: white;\n        cursor: pointer;\n    }\n\n    .play:hover{\n        transform: scale(1.05);\n        opacity: 0.8;\n    }\n\n    .col{\n        max-width: 400px;\n    }\n\n"])));function h(){var e=Object(d.f)().id,n=Object(c.useState)(null),t=Object(l.a)(n,2),a=t[0],r=t[1];if(Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[e]),!a)return null;console.log(a);var s="https://image.tmdb.org/t/p/w300"+a.poster_path;return Object(p.jsx)(b,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("img",{src:s,alt:"{pelicula.title}"}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("p",{className:"titulo",children:Object(p.jsx)("strong",{children:a.title})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Description:"})," ",a.overview]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Genres:"})," ",a.genres.map((function(e){return e.name})).join(", ")]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Release date:"})," ",a.release_date]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("button",{className:"back",children:Object(p.jsx)("strong",{children:"Go Back"})})}),Object(p.jsx)("button",{className:"play",children:Object(p.jsx)("strong",{children:"\u25b6 Play"})})]})]})]})})}var x,f=m.a.div(r||(r=Object(u.a)(["\n\n    .movieCard{\n        list-style: none;\n        font-size: 1.5rem;\n    }\n\n    .movieImg{\n        border-radius: 10px;\n        background-color: azure;\n    }\n\n    .movieImg:hover{\n        transform: scale(1.02);\n        opacity: 0.8;\n    }\n\n    .titulos{\n        display: flex;\n        justify-content: center;\n        color: white;\n    }\n\n    .titulos p{\n        font-size: 20px;\n        margin-right: 0px;\n        text-align: right;\n        width: 150px;\n        height: auto;\n    }\n\n"])));function g(e){var n=e.movie,t="https://image.tmdb.org/t/p/w300"+n.poster_path,a=n.vote_average;return Object(p.jsx)(f,{children:Object(p.jsxs)("li",{className:"movieCard",children:[Object(p.jsx)(j.b,{to:"/details/"+n.id,children:Object(p.jsx)("img",{width:230,height:345,className:"movieImg",src:t,alt:n.title})}),Object(p.jsxs)("div",{className:"titulos",children:[Object(p.jsx)("span",{children:n.title}),Object(p.jsxs)("p",{className:a>=7?"text-success":"text-danger",children:[n.vote_average," ",a>=7?"\u2714\ufe0f":"\u274c"]})]})]})})}var O,v=m.a.div(x||(x=Object(u.a)(["\n    .estrenos{\n        color: white;\n        text-align: center;\n        margin-top: 20px;\n    }\n\n    .movieGrid{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 230px);\n        gap: 40px;\n        padding: 40px;\n        justify-content: center;\n    }\n"])));function y(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]);var r=t.filter((function(e){return e.vote_average>=7}));return console.log(r),Object(p.jsx)(v,{children:Object(p.jsx)("ul",{className:"movieGrid",children:r.map((function(e){return Object(p.jsx)(g,{movie:e},e.id)}))})})}var N,w=m.a.div(O||(O=Object(u.a)(["\n    .estrenos{\n        color: white;\n        text-align: center;\n        margin-top: 20px;\n    }\n\n    .movieGrid{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 230px);\n        gap: 40px;\n        padding: 40px;\n        justify-content: center;\n    }\n"])));function I(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]);var r=t.filter((function(e){return e.vote_average<7}));return console.log(r),Object(p.jsx)(w,{children:Object(p.jsx)("ul",{className:"movieGrid",children:r.map((function(e){return Object(p.jsx)(g,{movie:e},e.id)}))})})}var C,M,J=m.a.div(N||(N=Object(u.a)(["\n    .estrenos{\n        color: white;\n        text-align: center;\n        margin-top: 20px;\n    }\n\n    .movieGrid{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 230px);\n        gap: 40px;\n        padding: 40px;\n        justify-content: center;\n    }\n"])));function z(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]),t.map((function(e){return console.log("https://image.tmdb.org/t/p/w300".concat(e.poster_path))})),Object(p.jsxs)(J,{children:[Object(p.jsx)("h2",{className:"estrenos",children:"Latest Releases \ud83c\udfac"}),Object(p.jsx)("ul",{className:"movieGrid",children:t.map((function(e){return Object(p.jsx)(g,{movie:e},e.id)}))})]})}var k=m.a.img(C||(C=Object(u.a)(["\nwidth: 35px;\nmargin-right: 10px;\n"]))),S=m.a.img(M||(M=Object(u.a)(["\nwidth: 80px;\n"])));function _(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(j.b,{to:"/",className:"navbar-brand text-danger",children:Object(p.jsx)(S,{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631061604/movies-logo-psd-449406_iqoofs.png",alt:"",srcset:""})}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/mostvoted",className:"nav-link","aria-current":"page",children:"\ud83d\udc4d Most voted"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/leastvoted",className:"nav-link",children:"\ud83d\udc4e Least voted"})})]}),Object(p.jsxs)("form",{className:"d-flex",children:[Object(p.jsx)(j.b,{to:"/login",children:Object(p.jsx)(k,{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631059145/Microsoft_Account_c4ealf.svg",alt:"",srcset:""})}),Object(p.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(p.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]})]})]})})})}var W,G,Q=t(14),A=t(19),U=t(11),q=t.n(U),V=t(20),Y=t(15),Z=t(16),D=t(18),T=t(17),B=t(23),L=t.n(B),E=t(24),F=t.n(E),P=t(46),H=t.n(P),R=m.a.div(W||(W=Object(u.a)(["\n        \ndisplay: flex;\njustify-content: center;\nmargin: 10px;\npadding: 15px;\ncolor: #8d8f8f;\ntext-align: center;\n\nimg{\n    margin: 10px 0;\n    width: 80px;\n}\n\ninput{\n    margin:20px 0;\n}\n\nbutton{\n    margin-bottom: 20px;\n}\n"]))),X=function(e){Object(D.a)(t,e);var n=Object(T.a)(t);function t(){var e;return Object(Y.a)(this,t),(e=n.call(this)).registroUsuario=Object(V.a)(q.a.mark((function n(){return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.post("https://apialbum.herokuapp.com/usuario",{id:H.a,apellido_paterno:e.state.usuarios.apellido_paterno,apellido_materno:e.state.usuarios.apellido_materno,nombre:e.state.usuarios.nombre,username:e.state.usuarios.username,password:F()(e.state.usuarios.password)}).then((function(e){alert("Usuario Registrado")})).catch((function(e){console.log(e.message)}));case 2:case"end":return n.stop()}}),n)}))),e.handleSutmit=function(n){n.preventDefault(),e.registroUsuario()},e.handleChange=function(){var n=Object(V.a)(q.a.mark((function n(t){return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setState({usuarios:Object(A.a)(Object(A.a)({},e.state.usuarios),{},Object(Q.a)({},t.target.name,t.target.value))});case 2:console.log(e.state.usuarios);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.state={data:[],usuarios:{id:"",apellido_paterno:"",apellido_materno:"",nombre:"",username:"",password:""}},e}return Object(Z.a)(t,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(R,{children:Object(p.jsxs)("form",{className:"form-signin",onSubmit:this.handleSutmit,children:[Object(p.jsx)("img",{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631055194/free-add-user-icon-302-thumb_fl3crp.png",alt:""}),Object(p.jsx)("h3",{children:"Create New Account"}),Object(p.jsx)("input",{type:"text",placeholder:"First Last-name",name:"apellido_paterno",className:"form-control mt-4",autoComplete:"off",onChange:this.handleChange}),Object(p.jsx)("input",{type:"text",placeholder:"Second Last-name",name:"apellido_materno",className:"form-control mt-1",autoComplete:"off",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"text",name:"nombre",className:"form-control mt-1",placeholder:"Name",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"email",name:"username",className:"form-control mt-1",placeholder:"Email",required:"",onChange:this.handleChange}),Object(p.jsx)("input",{type:"Password",name:"password",className:"form-control mt-1",placeholder:"Password",required:"",onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-1",children:"Register"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{to:"/login",className:"link",children:"Already registered?"})]})})})}}]),t}(c.Component),K=m.a.div(G||(G=Object(u.a)(["\n        \ndisplay: flex;\njustify-content: center;\nmargin: 50px;\npadding: 15px;\ncolor: #8d8f8f;\ntext-align: center;\nflex-wrap: wrap;\n\ninput{\n    margin:20px 0;\n}\n\nimg{\n    margin: 10px 0;\n    width: 100px;\n}\n\nbutton{\n    margin-bottom: 20px;\n}\n"]))),$=function(e){Object(D.a)(t,e);var n=Object(T.a)(t);function t(){var e;return Object(Y.a)(this,t),(e=n.call(this)).handleChange=function(){var n=Object(V.a)(q.a.mark((function n(t){return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setState({usuarios:Object(A.a)(Object(A.a)({},e.state.usuarios),{},Object(Q.a)({},t.target.name,t.target.value))});case 2:console.log(e.state.usuarios);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.iniciarSesion=Object(V.a)(q.a.mark((function n(){return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.get("https://apialbum.herokuapp.com/usuario",{params:{username:e.state.usuarios.username,password:F()(e.state.usuarios.password)}}).then((function(e){return e.data})).then((function(e){if(e.length){var n=e[0];alert("Welcome ".concat(n.nombre," ").concat(n.apellido_paterno))}else alert("The username or password  is incorrect")})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)}))),e.handleSubmit=function(n){n.preventDefault(),e.iniciarSesion()},e.state={usuarios:{username:"",password:""}},e}return Object(Z.a)(t,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(K,{children:Object(p.jsxs)("form",{className:"form-signin",onSubmit:this.handleSubmit,children:[Object(p.jsx)("img",{src:"https://res.cloudinary.com/df8qzqymf/image/upload/v1631054459/user-line-logo-2007C82021-seeklogo.com_zyomqc.png",alt:""}),Object(p.jsx)("h1",{className:"h4 mb-3 font-weight-normal",children:"Sign in"}),Object(p.jsx)("input",{type:"email",id:"inputEmail",className:"form-control mt-1",placeholder:"Email",required:"",name:"username",onChange:this.handleChange}),Object(p.jsx)("input",{type:"Password",id:"inputPassword",className:"form-control mt-1",placeholder:"Password",required:"",name:"password",onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Login"}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)(j.b,{to:"/register",className:"Link",children:"Create new account"})})]})})})}}]),t}(c.Component),ee=function(e){Object(D.a)(t,e);var n=Object(T.a)(t);function t(){return Object(Y.a)(this,t),n.apply(this,arguments)}return Object(Z.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)($,{})})}}]),t}(c.Component);function ne(){return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(_,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",children:Object(p.jsx)(z,{})}),Object(p.jsx)(d.a,{exact:!0,path:"/details/:id",children:Object(p.jsx)(h,{})}),Object(p.jsx)(d.a,{exact:!0,path:"/mostvoted",children:Object(p.jsx)(y,{})}),Object(p.jsx)(d.a,{exact:!0,path:"/leastvoted",children:Object(p.jsx)(I,{})}),Object(p.jsx)(d.a,{exact:!0,path:"/login",children:Object(p.jsx)(ee,{})}),Object(p.jsx)(d.a,{exact:!0,path:"/register",children:Object(p.jsx)(X,{})})]})]})}o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(ne,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.2e0681f4.chunk.js.map