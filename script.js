const slides=document.querySelectorAll('.slide')
const whiteCircle =document.querySelectorAll(".white-circle")
let i=0;

slides.forEach((slide)=>{
   
    changeIMGByLabel()
   
    changeIMGByLabel(slide)
    slide.addEventListener("click",function(e){

        clearActiveClass()
        slide.classList.add("active")
    })
})

function clearActiveClass(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')

    })

}

function changeIMGByLabel(slide){
    
    whiteCircle[0].addEventListener('click',function(e){
        clearActiveClass()
        slides[0].classList.add('active')
    })
    whiteCircle[1].addEventListener('click',function(e){
        clearActiveClass()
        slides[1].classList.add('active')
    })
    whiteCircle[2].addEventListener('click',function(e){
        clearActiveClass()
        slides[2].classList.add('active')
    })
    whiteCircle[3].addEventListener('click',function(e){
        clearActiveClass()
        slides[3].classList.add('active')
    })
    whiteCircle[4].addEventListener('click',function(e){
        clearActiveClass()
        slides[4].classList.add('active')
    })
}