(this["webpackJsonpreact-site-vitrine"]=this["webpackJsonpreact-site-vitrine"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(15),s=c.n(n),a=c(2),r=c(4),o=c(1),j=function(){return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsxs)("ul",{className:"menu",children:[Object(o.jsx)(r.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"Accueil"})}),Object(o.jsxs)("li",{className:"nav-portfolio",children:["Projet",Object(o.jsxs)("ul",{className:"nav-projects",children:[Object(o.jsx)(r.b,{to:"/project-1",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Projet 1"})}),Object(o.jsx)(r.b,{to:"/project-2",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Projet 2"})}),Object(o.jsx)(r.b,{to:"/project-3",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Projet 3"})}),Object(o.jsx)(r.b,{to:"/project-4",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Projet 4"})}),Object(o.jsx)(r.b,{to:"/project-5",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"Projet 4"})})]})]}),Object(o.jsx)(r.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"Contact"})})]})})},l=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var c=t.offsetX-20,i=t.offsetY-20;e.style.transform="translate(".concat(c,"px, ").concat(i,"px)")})),e.addEventListener("mouseleave",(function(t){e.style.transform=""}))}))};return Object(o.jsx)("div",{className:"social-network",children:Object(o.jsxs)("ul",{className:"content",children:[Object(o.jsx)("a",{href:"https://github.com/vincentli77",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-github"})})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/vincent-li77/",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})})]})})},b=function(e){return Object(o.jsx)("div",{className:"scroll-bottom",children:Object(o.jsxs)("div",{className:"sb-main",children:[e.left&&Object(o.jsx)(r.b,{to:e.left,className:"left hover",children:Object(o.jsx)("span",{children:"\u276c"})}),Object(o.jsx)("p",{className:"center",children:"Scroll"}),e.right&&Object(o.jsx)(r.b,{to:e.right,className:"right hover",children:Object(o.jsx)("span",{children:"\u276d"})})]})})},d=function(){return Object(i.useEffect)((function(){var e=["full-stack","front","back"],t=0,c=0,i=document.getElementById("text-target");!function n(){setTimeout((function(){t>=e.length?(t=0,c=0,n()):c<e[t].length?(!function(){var n=document.createElement("span");i.appendChild(n),n.classList.add("letter"),n.style.opacity="0",n.style.animation="anim 5s ease forwards",n.textContent=e[t][c],setTimeout((function(){n.remove()}),2e3)}(),c++,n()):(c=0,t++,setTimeout((function(){n()}),2e3))}),80)}()}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("span",{className:"dynamic-text",children:[Object(o.jsx)("span",{className:"simply",children:"D\xe9veloppeur "}),Object(o.jsx)("span",{id:"text-target"})]})})},h=c(8),p=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(h.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}},children:[Object(o.jsx)(j,{}),Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"home-main",children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)(h.b.h1,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:950,top:-200,bottom:250},children:"Vincent LI"}),Object(o.jsx)(h.b.h2,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:1250,top:-200,bottom:250},children:Object(o.jsx)(d,{})})]})}),Object(o.jsx)(b,{right:"/projet-1"})]})})},x=c(18),m=[{id:1,title:"Casse brique",date:"F\xe9vrier 2020",languages:["HTML","CSS","Javascripts","CANVAS"],infos:"Cr\xe9ation du jeu casse brique avec javascript en utilisant le canvas, ce travail  avait pour but de renforcer mes comp\xe9tences en javascript",img:c.p+"static/media/casse_brique.55570675.png",link:"https://vincentli77.github.io/breaking-brick-canvas/"},{id:2,title:"H-APIBOOK",date:"Novembre 2020",languages:["HTML","CSS","JS","NODE.JS"],infos:"Gestion stockage de livre bas\xe9 \xe0 partir de l'api google books permettant d'ajouter, supprimer des livres. Les livres sont stock\xe9s depuis une base de donn\xe9es et l'ajouts des livres se fait gr\xe2ce a l'appel d'api de google books",img:c.p+"static/media/api_back.4c576d1a.png",link:"https://vincentli77.github.io/first_api_back_express/"},{id:3,title:"Chifumi",date:"Decembre 2021",languages:["HTML","CSS","VUE.JS"],infos:"Jeu chifumi d\xe9velopper en avec vue.js",img:c.p+"static/media/chifumi.38c090b2.png",link:"https://vincentli77.github.io/chifumi/"},{id:4,title:"Droppshipping website",date:"Avril 2020",languages:["Wordpress","Php","React"],infos:"Site vitrine de droppshipping pour une marque fictif d'un sac \xe0 dos",img:c.p+"static/media/project4.2eb3c9a7.png",link:"https://vincentli77.github.io/dropshipping-vitrine-website/"},{id:5,title:"Royal noisiel",date:"Juin 2019",languages:["HTML","CSS","JS"],infos:"Cr\xe9ation d'un site vitrine de restaurant",img:c.p+"static/media/royal_noisiel.dbdfeb50.png",link:"http://www.royalnoisiel.fr"}],u=function(e){var t=Object(i.useState)(m),c=Object(x.a)(t,1)[0][e.projectNumber],n=Math.random()>.4?1:-1,s={initial:{opacity:0,x:350*Math.random()*n,y:120*Math.random()*n},visible:{opacity:1,x:0,y:0},exit:{opacity:.4,transition:{duration:.35},x:-800}};return Object(o.jsxs)(h.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",transition:{ease:[.03,.87,.73,.9],duration:.6},variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}},children:[Object(o.jsxs)("div",{className:"project-content",children:[Object(o.jsx)("h1",{children:c.title}),Object(o.jsx)("p",{children:c.date}),Object(o.jsx)("ul",{className:"languages",children:c.languages.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]}),Object(o.jsxs)(h.b.div,{className:"img-content",initial:"initial",animate:"visible",variants:s,transition:{duration:1.2},children:[Object(o.jsxs)("div",{className:"img-container hover",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:c.title}),Object(o.jsx)("p",{children:c.infos})]}),Object(o.jsx)("img",{src:c.img,alt:c.title,className:"img"})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("span",{className:"button",children:"Voir le site"})})})]})]})},O=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{projectNumber:0}),Object(o.jsx)(b,{left:"/",right:"/project-2"})]})})},v=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{projectNumber:1}),Object(o.jsx)(b,{left:"/project-1",right:"/project-3"})]})})},f=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{projectNumber:2}),Object(o.jsx)(b,{left:"/project-2",right:"/project-4"})]})})},g=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{projectNumber:3}),Object(o.jsx)(b,{left:"/project-3",right:"/project-5"})]})})},N=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{projectNumber:4}),Object(o.jsx)(b,{left:"/project-4",right:"/contact"})]})})},k=function(){return Object(o.jsx)("span",{className:"logo",children:"VL"})},y=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(h.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6},children:[Object(o.jsx)(j,{}),Object(o.jsx)(k,{}),Object(o.jsxs)("div",{className:"contact-infos",children:[Object(o.jsx)("div",{className:"address",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"Adresse"}),Object(o.jsx)("p",{children:"46 avenue du ch\xeane saint fiacre"}),Object(o.jsx)("p",{children:"77600 Chanteloup-en-brie"})]})}),Object(o.jsx)("div",{className:"phone",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"T\xe9l\xe9phone"}),Object(o.jsx)("p",{style:{cursor:"pointer"},children:"06 51 93 09 98"})]})}),Object(o.jsx)("div",{className:"email",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"Email"}),Object(o.jsx)("p",{style:{cursor:"pointer"},children:"li.jiajinvincent1997@gmail.com"})]})}),Object(o.jsx)(l,{})]}),Object(o.jsx)(b,{left:"/project-5"})]})})},w=function(){var e=Object(a.h)(),t=Object(a.g)();return Object(i.useEffect)((function(){window.addEventListener("wheel",(function(e){console.log(e);var c=window.location.origin+"/",i=function(c,i){e.wheelDeltaY<0?setTimeout((function(){t.push(c)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(i)}),500)};switch(window.location.href.toString()){case c:e.wheelDeltaY<0&&setTimeout((function(){t.push("project-1")}),500);break;default:i("project-2","/");break;case c+"project-2":i("project-3","project-1");break;case c+"project-3":i("project-4","project-2");break;case c+"project-4":i("project-5","project-3");break;case c+"project-5":i("contact","project-4");break;case c+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("project-5")}),500)}}))}),[t]),Object(o.jsx)(h.a,{children:Object(o.jsxs)(a.d,{location:e,children:[Object(o.jsx)(a.b,{exact:!0,path:"/",component:p}),Object(o.jsx)(a.b,{exact:!0,path:"/project-1",component:O}),Object(o.jsx)(a.b,{exact:!0,path:"/project-2",component:v}),Object(o.jsx)(a.b,{exact:!0,path:"/project-3",component:f}),Object(o.jsx)(a.b,{exact:!0,path:"/project-4",component:g}),Object(o.jsx)(a.b,{exact:!0,path:"/project-5",component:N}),Object(o.jsx)(a.b,{exact:!0,path:"/contact",component:y}),Object(o.jsx)(a.a,{to:"/"})]},e.pathname)})};c(29);s.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.83c7646a.chunk.js.map