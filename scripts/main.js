window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const lazyloadElements = document.querySelectorAll('.js-lazyload')

const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight





const cursorParallaxElements = document.querySelectorAll('.js-cursor-parallax')

document.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / sizes.width - 0.5
    const ratioY = _event.clientY / sizes.height - 0.5


   cursorParallaxElements.forEach((_element, _key) =>
   {
     const strength = _key / (cursorParallaxElements.length - 1)
     const translateX = -ratioX * 10 * strength
     const translateY = -ratioY * 10 * strength


     _element.style.transform = `translateX(${translateX}%) translateY(${translateY}%`

   })
})



const scrollParallaxElements =  document.querySelectorAll('.js-scroll-parallax')

window.addEventListener('scroll', () =>
{
    const scrollRatio = window.scrollY / sizes.height
    scrollParallaxElements.forEach((_element, _key) =>
    {
        const strength = 1 - _key / (cursorParallaxElements.length - 1)
        const translateY = scrollRatio * strength * 100

        _element.style.transform = `translateY(${translateY}%)`
    })
   
})






var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    
	return (
        distance.top >= 0 &&
		distance.bottom <= (window.innerHeight +100 || document.documentElement.clientHeight+100) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        distance.left <= (window.innerWidth || document.documentElement.clientWidth)

                
    );
    
};


var project = document.querySelector('.casse_brique');
var project2 = document.querySelector('.audio_player');
var project3 = document.querySelector('.royal_noisiel');
var project4 = document.querySelector('.dropshipping');


var description = document.querySelector('.description_1');
var description2 = document.querySelector('.description_2');
var description3 = document.querySelector('.description_3');
var description4 = document.querySelector('.description_4');



let tab = [project, project2, project3, project4];
let tab2 = [description, description2, description3, description4];


    window.addEventListener('scroll', function (event) {
    for ( let i = 0; i < tab.length; i++){
            if (isInViewport(tab[i])) {
              tab[i].style.transform ="translate(30vw)"
              tab[i].style.transition= "all 0.5s"
              tab2[i].style.transform ="translate(-30vw)"
              tab2[i].style.transition= "all 0.5s"
            } else {
                tab[i].style.transform ="translate(-30vw)"
                tab[i].style.transition= "all 0.5s"
                tab2[i].style.transform ="translate(30vw)"
                tab2[i].style.transition= "all 0.5s"
            }
          }
          }, false)
          