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
     const translateX = -ratioX * 10 
     const translateY = -ratioY * 10  


     _element.style.transform = `translateX(${translateX}%) translateY(${translateY}%`
     _element.style.transition = "all 0.1s"

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




let isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    
	return (
        distance.top >= 10 &&
		distance.bottom <= (window.innerHeight +100 || document.documentElement.clientHeight+100) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        distance.left <= (window.innerWidth || document.documentElement.clientWidth)

                
    );
    
};
let isInViewport2 = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= -500 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight+500 || document.documentElement.clientHeight+500) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

let project = document.querySelector('.casse_brique');
let project2 = document.querySelector('.audio_player');
let project3 = document.querySelector('.royal_noisiel');
let project4 = document.querySelector('.dropshipping');


let description = document.querySelector('.description_1');
let description2 = document.querySelector('.description_2');
let description3 = document.querySelector('.description_3');
let description4 = document.querySelector('.description_4');
let main = document.querySelector('.main');
let sun = document.querySelector('.sun');
let cloud = document.querySelectorAll('.cloud')
let cloud2 = document.querySelector('.cloud2')

console.log(cloud);

let tab = [project, project3, project4];
let tab2 = [description, description3, description4];


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
          
          window.addEventListener('scroll', function (event) {
         
            if (!isInViewport2(main)) {
                sun.style.transform ="translate(30vw)"
                sun.style.transition= "all 0.5s"

                for (let i = 0;  i < cloud.length; i++) {
                    cloud[i].style.transform ="translate(30vw)"
                    cloud[i].style.transition= "all 0.5s"  
                    cloud2.style.transform ="translate(-30vw)"
                    cloud2.style.transition= "all 0.5s"   
                }      
  
            }else{
                sun.style.transform ="translate(0vw)"
                sun.style.transition= "all 0.5s"
                for (let i = 0;  i < cloud.length; i++) {
                    cloud[i].style.transform ="translate(0vw)"
                    cloud[i].style.transition= "all 0.5s" 
                    cloud2.style.transform ="translate(0vw)"
                    cloud2.style.transition= "all 0.5s"   
                }      
  
            }
          }, false)