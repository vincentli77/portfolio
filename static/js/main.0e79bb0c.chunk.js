(this["webpackJsonpreact-site-vitrine"]=this["webpackJsonpreact-site-vitrine"]||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(15),s=i.n(n),a=i(2),o=i(4),r=i(1),l=function(){return Object(r.jsx)("div",{className:"navigation",children:Object(r.jsxs)("ul",{className:"menu",children:[Object(r.jsx)(o.b,{to:"/portfolio/",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(r.jsx)("li",{children:"Accueil"})}),Object(r.jsxs)("li",{className:"nav-portfolio",children:["Projet",Object(r.jsxs)("ul",{className:"nav-projects",children:[Object(r.jsx)(o.b,{to:"/portfolio/project-1",activeClassName:"nav-active",className:"hover",children:Object(r.jsx)("li",{children:"Projet 1"})}),Object(r.jsx)(o.b,{to:"/portfolio/project-2",activeClassName:"nav-active",className:"hover",children:Object(r.jsx)("li",{children:"Projet 2"})}),Object(r.jsx)(o.b,{to:"/portfolio/project-3",activeClassName:"nav-active",className:"hover",children:Object(r.jsx)("li",{children:"Projet 3"})}),Object(r.jsx)(o.b,{to:"/portfolio/project-4",activeClassName:"nav-active",className:"hover",children:Object(r.jsx)("li",{children:"Projet 4"})}),Object(r.jsx)(o.b,{to:"/portfolio/project-5",activeClassName:"nav-active",className:"hover",children:Object(r.jsx)("li",{children:"Projet 5"})})]})]}),Object(r.jsx)(o.b,{to:"/portfolio/contact",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(r.jsx)("li",{children:"Contact"})})]})})},j=function(e){return Object(r.jsx)("div",{className:"scroll-bottom",children:Object(r.jsxs)("div",{className:"sb-main",children:[e.left&&Object(r.jsx)(o.b,{to:e.left,className:"left hover",children:Object(r.jsx)("span",{children:"\u276c"})}),Object(r.jsx)("p",{className:"center",children:"Scroll"}),e.right&&Object(r.jsx)(o.b,{to:e.right,className:"right hover",children:Object(r.jsx)("span",{children:"\u276d"})})]})})},p=function(){return Object(c.useEffect)((function(){var e=["full-stack","front","back"],t=0,i=0,c=document.getElementById("text-target");!function n(){setTimeout((function(){t>=e.length?(t=0,i=0,n()):i<e[t].length?(!function(){var n=document.createElement("span");c.appendChild(n),n.classList.add("letter"),n.style.opacity="0",n.style.animation="anim 5s ease forwards",n.textContent=e[t][i],setTimeout((function(){n.remove()}),2e3)}(),i++,n()):(i=0,t++,setTimeout((function(){n()}),2e3))}),80)}()}),[]),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{className:"dynamic-text",children:[Object(r.jsx)("span",{className:"simply",children:"D\xe9veloppeur "}),Object(r.jsx)("span",{id:"text-target"})]})})},b=i(8),d=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)(b.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}},children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"home-main",children:Object(r.jsxs)("div",{className:"main-content",children:[Object(r.jsx)(b.b.h1,{children:"Vincent LI"}),Object(r.jsx)(b.b.h2,{children:Object(r.jsx)(p,{})})]})}),Object(r.jsx)(j,{right:"/portfolio/project-1"})]})})},h=i(18),m=i.p+"static/media/casse_brique.55570675.png",x=i.p+"static/media/api_back.4c576d1a.png",u=i.p+"static/media/chifumi.38c090b2.png",O=i.p+"static/media/project4.2eb3c9a7.png",v=[{id:1,title:"Casse brique",date:"F\xe9vrier 2020",languages:["HTML","CSS","Javascripts","CANVAS"],infos:"Cr\xe9ation du jeu casse brique avec javascript en utilisant le canvas, ce travail  avait pour but de renforcer mes comp\xe9tences en javascript",img:m,link:"https://vincentli77.github.io/breaking-brick-canvas/"},{id:2,title:"H-APIBOOK",date:"Novembre 2020",languages:["HTML","CSS","JS","NODE.JS"],infos:"Gestion stockage de livre bas\xe9 \xe0 partir de l'api google books permettant d'ajouter, supprimer des livres. Les livres sont stock\xe9s depuis une base de donn\xe9es et l'ajouts des livres se fait gr\xe2ce a l'appel d'api de google books",img:x,link:"https://vincentli77.github.io/first_api_back_express/search.html"},{id:3,title:"Chifumi",date:"Decembre 2021",languages:["HTML","CSS","VUE.JS"],infos:"Jeu chifumi d\xe9velopp\xe9 en avec vue.js",img:u,link:"https://vincentli77.github.io/chifumi/"},{id:4,title:"Pokedex API",date:"Juin 2019",languages:["HTML","CSS","JS","REACT"],infos:"Pokedex en utilisant une API pokemon en react",img:i.p+"static/media/pokeapi.ddd8a154.png",link:"https://vincentlipokeapi.netlify.app/"},{id:5,title:"Droppshipping website",date:"Avril 2020",languages:["HTML","CSS","JS"],infos:"Site vitrine de droppshipping pour une marque fictif d'un sac \xe0 dos",img:O,link:"https://vincentli77.github.io/dropshipping-vitrine-website/"}],f=function(e){var t=Object(c.useState)(v),i=Object(h.a)(t,1)[0][e.projectNumber],n=Math.random()>.4?1:-1,s={initial:{opacity:0,x:350*Math.random()*n,y:120*Math.random()*n},visible:{opacity:1,x:0,y:0},exit:{opacity:0,transition:{duration:.35},x:-800}};return Object(r.jsxs)(b.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",transition:{ease:[.03,.87,.73,.9],duration:.6},variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.35},x:-800}},children:[Object(r.jsxs)("div",{className:"project-content",children:[Object(r.jsx)("h1",{children:i.title}),Object(r.jsx)("p",{children:i.date}),Object(r.jsx)("ul",{className:"languages",children:i.languages.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]}),Object(r.jsxs)(b.b.div,{className:"img-content",initial:"initial",animate:"visible",variants:s,transition:{duration:1.2},children:[Object(r.jsxs)("div",{className:"img-container hover",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("h3",{children:i.title}),Object(r.jsx)("p",{children:i.infos})]}),Object(r.jsx)("img",{src:i.img,alt:i.title,className:"img"})]}),Object(r.jsx)("div",{className:"button-container",children:Object(r.jsx)("a",{href:i.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(r.jsx)("span",{className:"button",children:"Voir le site"})})})]})]})},g=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{projectNumber:0}),Object(r.jsx)(j,{left:"/portfolio/",right:"/portfolio/project-2"})]})})},N=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{projectNumber:1}),Object(r.jsx)(j,{left:"/portfolio/project-1",right:"/portfolio/project-3"})]})})},k=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{projectNumber:2}),Object(r.jsx)(j,{left:"/portfolio/project-2",right:"/portfolio/project-4"})]})})},y=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{projectNumber:3}),Object(r.jsx)(j,{left:"/portfolio/project-3",right:"/portfolio/project-5"})]})})},w=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{projectNumber:4}),Object(r.jsx)(j,{left:"/portfolio/project-4",right:"/portfolio/contact"})]})})},C=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var i=t.offsetX-20,c=t.offsetY-20;e.style.transform="translate(".concat(i,"px, ").concat(c,"px)")})),e.addEventListener("mouseleave",(function(t){e.style.transform=""}))}))};return Object(r.jsx)("div",{className:"social-network",children:Object(r.jsxs)("ul",{className:"content",children:[Object(r.jsx)("a",{href:"https://github.com/vincentli77",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(r.jsx)("li",{children:Object(r.jsx)("i",{className:"fab fa-github"})})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/vincent-li77/",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(r.jsx)("li",{children:Object(r.jsx)("i",{className:"fab fa-linkedin"})})})]})})},S=function(){return Object(r.jsx)("main",{children:Object(r.jsxs)(b.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6},children:[Object(r.jsx)(l,{}),Object(r.jsxs)("div",{className:"contact-infos",children:[Object(r.jsxs)("div",{className:"my",children:[Object(r.jsx)("h4",{children:"Hello"}),Object(r.jsx)("p",{children:"My name is Vincent LI , i\u2019m a paris and a junior web developper. Currently in my third year at HETIC for learning design and web developement. I am looking for a 1 or 2 years of apprenticeship on November 2021"})]}),Object(r.jsx)("div",{className:"address",children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h4",{children:"Adresse"}),Object(r.jsx)("p",{children:"46 avenue du ch\xeane saint fiacre"}),Object(r.jsx)("p",{children:"77600 Chanteloup-en-brie"})]})}),Object(r.jsx)("div",{className:"phone",children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h4",{children:"T\xe9l\xe9phone"}),Object(r.jsx)("p",{style:{cursor:"pointer"},children:"06 51 93 09 98"})]})}),Object(r.jsx)("div",{className:"email",children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h4",{children:"Email"}),Object(r.jsx)("p",{style:{cursor:"pointer"},children:"li.jiajinvincent1997@gmail.com"}),Object(r.jsx)(C,{})]})})]}),Object(r.jsx)(j,{left:"/portfolio/project-5"})]})})},T=function(){var e=Object(a.h)(),t=Object(a.g)();return Object(c.useEffect)((function(){var e=0,i=9999;window.addEventListener("wheel",(function(c){var n=window.location.origin+"/portfolio/",s=performance.now(),a=function(n,a){c.wheelDeltaY<0&&(2!==e||s>i+300)?setTimeout((function(){t.push(n),e=2}),500):c.wheelDeltaY>0&&(1!==e||s>i+300)&&setTimeout((function(){t.push(a),e=1}),500)};switch(window.location.href.toString()){case n:c.wheelDeltaY<0&&(1!==e||s>i+300)&&setTimeout((function(){t.push("/portfolio/project-1")}),500);break;default:break;case n+"project-1":a("/portfolio/project-2","/portfolio/");break;case n+"project-2":a("project-3","project-1");break;case n+"project-3":a("project-4","project-2");break;case n+"project-4":a("project-5","project-3");break;case n+"project-5":a("contact","project-4");break;case n+"contact":c.wheelDeltaY>0&&setTimeout((function(){t.push("project-5")}),500)}i=s}))}),[t]),Object(r.jsx)(b.a,{children:Object(r.jsxs)(a.d,{location:e,children:[Object(r.jsx)(a.b,{exact:!0,path:"/portfolio",component:d}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/project-1",component:g}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/project-2",component:N}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/project-3",component:k}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/project-4",component:y}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/project-5",component:w}),Object(r.jsx)(a.b,{exact:!0,path:"/portfolio/contact",component:S}),Object(r.jsx)(a.a,{to:"/"})]},e.pathname)})};i(29);s.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e79bb0c.chunk.js.map