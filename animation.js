const animatedTags = document.querySelectorAll("h2, h3, p, section, section img a.button")

animatedTags.forEach(tag =>{
    tag.style.opacity = 0
})

const fadeIn = function(){
    
    //look which is getboundling client rect

    animatedTags.forEach(tag =>{
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom
        
        //console.log(tagTop, tagBottom)

        if (tagTop < window.innerHeight && tagBottom > 0){
            tag.style.animation = "fadein 1s 1s both"
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }

    })
}

//on load run fadeIn
fadeIn()

//on scroll run fadeIn
document.addEventListener("scroll", function(){
    fadeIn()
})

//on browser resize run fadeIn
window.addEventListener("resize", function(){
    fadeIn()
})