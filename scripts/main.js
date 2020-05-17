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



let project = document.querySelectorAll('.image_project')
let description_1 = document.querySelectorAll('.description_1')

let project_2 = document.querySelectorAll('.image_project_2')
let description_2 = document.querySelectorAll('.description_2')

let project_3 = document.querySelectorAll('.image_project_3')
let description_3 = document.querySelectorAll('.description_3')




window.addEventListener('scroll', () => 
{   
    let scroll = window.scrollY
    console.log(scroll);

 
    
    if ( scroll >= 300 && scroll<1600){
        project[0].style.transform = "translateX(30vw)"
        project[0].style.transition = "all 1s"
        project[0].style.opacity = "1"
        description_1[0].style.transform = "translateX(-30vw)"
        description_1[0].style.transition = "all 1s"     

    } else{
        project[0].style.transform = "translateX(-30vw)"
        project[0].style.transition = "all 1s"
        description_1[0].style.transform = "translateX(30vw)"
        description_1[0].style.transition = "all 1s"
        project[0].style.opacity = "0"
    }
    if ( scroll >= 1600 && scroll< 2600){
        project_2[0].style.transform = "translateX(30vw)"
        project_2[0].style.transition = "all 1s"
        project_2[0].style.opacity = "1"
        description_2[0].style.transform = "translateX(-30vw)"
        description_2[0].style.transition = "all 1s"
        
        // cloud[0].style.transform = "translateX(-500px)"
    } else{
        project_2[0].style.transform = "translateX(-30vw)"
        project_2[0].style.transition = "all 1s"
        project_2[0].style.opacity = "0"
        description_2[0].style.transform = "translateX(30vw)"
        description_2[0].style.transition = "all 1s"
    }

    if ( scroll >= 2600 && scroll< 3400){
        project_3[0].style.transform = "translateX(30vw)"
        project_3[0].style.transition = "all 1s"
        project_3[0].style.opacity = "1"
        description_3[0].style.transform = "translateX(-30vw)"
        description_3[0].style.transition = "all 1s"
        
        // cloud[0].style.transform = "translateX(-500px)"
    } else{
        project_3[0].style.transform = "translateX(-30vw)"
        project_3[0].style.transition = "all 1s"
        project_3[0].style.opacity = "0"
        description_3[0].style.transform = "translateX(30vw)"
        description_3[0].style.transition = "all 1s"
    }

})
