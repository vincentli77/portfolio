import casseBrique from '../assets/casse_brique.png'
import api_back from '../assets/api_back.png'
import chifumi from '../assets/chifumi.png'
import project4 from '../assets/project4.png'
import pokeapi from '../assets/pokeapi.png'

export const projectsData = [
  {
    id: 1,
    title: "Casse brique",
    date: "Février 2020",
    languages: ["HTML", "CSS", "Javascripts","CANVAS"],
    infos:
      "Création du jeu casse brique avec javascript en utilisant le canvas, ce travail  avait pour but de renforcer mes compétences en javascript",
    img: casseBrique,
    link: "https://vincentli77.github.io/breaking-brick-canvas/",
  },
  {
    id: 2,
    title: "H-APIBOOK",
    date: "Novembre 2020",
    languages: ["HTML", "CSS","JS","NODE.JS"],
    infos:
      "Gestion stockage de livre basé à partir de l'api google books permettant d'ajouter, supprimer des livres. Les livres sont stockés depuis une base de données et l'ajouts des livres se fait grâce a l'appel d'api de google books",
    img: api_back,
    link: "https://vincentli77.github.io/first_api_back_express/search.html",
  },
  {
    id: 3,
    title: "Chifumi",
    date: "Decembre 2021",
    languages: ["HTML", "CSS", "VUE.JS"],
    infos:
      "Jeu chifumi développé en avec vue.js",
    img: chifumi,
    link: "https://vincentli77.github.io/chifumi/",
  },

  {
    id: 4,
    title: 'Pokedex API',
    date: "Juin 2019",
    languages: ["HTML", "CSS","JS","REACT"],
    infos:
      "Pokedex en utilisant une API pokemon en react",
    img: pokeapi,
    link: "https://vincentlipokeapi.netlify.app/",
  },

  {
    id: 5,
    title: "Droppshipping website",
    date: "Avril 2020",
    languages: ["HTML", "CSS", "JS"],
    infos:
      "Site vitrine de droppshipping pour une marque fictif d'un sac à dos",
    img: project4,
    link: "https://vincentli77.github.io/dropshipping-vitrine-website/",
  },
];
