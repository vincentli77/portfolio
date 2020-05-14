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



let projet = document.querySelectorAll('.image_projet')
let cloud = document.querySelectorAll('.cloud')
let text1 = document.querySelectorAll('.text_1')

window.addEventListener('scroll', () => 
{
    let scroll = window.scrollY
    if ( scroll > 300){
        projet[0].style.transform = "translateX(500px)"
        projet[0].style.transition = "all 1s"
        text1[0].style.transform = "translateX(-500px)"
        text1[0].style.transition = "all 1s"
        
        // cloud[0].style.transform = "translateX(-500px)"
    } else{
        projet[0].style.transform = "translateX(-500px)"
        projet[0].style.transition = "all 1s"
        text1[0].style.transform = "translateX(500px)"
        text1[0].style.transition = "all 1s"
    }
    console.log(scroll);
    
})
