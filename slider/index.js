const sliderImgs = document.querySelector(".slider-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
var a = 0
nextBtn.addEventListener("click", () => {
    a = a - 922
    if(a <= -2743){
        a = 0;
        sliderImgs.style.transform = "translateX(0)"
    }else sliderImgs.style.transform = `translateX( ${a}px)`
})
prevBtn.addEventListener("click", () => {   
        a = a + 922
     if(a > 0){
        a = 0;
         sliderImgs.style.transform = "translateX(0)"
     } else sliderImgs.style.transform = `translateX( ${a}px)`    
})