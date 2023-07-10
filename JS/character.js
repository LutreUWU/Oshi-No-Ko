buttonRight = document.querySelectorAll(".rightArrow")
buttonLeft = document.querySelectorAll(".leftArrow")
slider = document.querySelector('.slider-container')
card = document.querySelectorAll(".CharacterDiv")

console.log(card)


buttonRight.forEach(element => {
  element.addEventListener("click", function(){
  RightSlide()
  });
})


buttonLeft.forEach(element => {
  element.addEventListener("click", function(){
  LeftSlide()
  });
})


function LeftSlide(){
  const widthSlider = document.querySelector('.CharacterDiv').offsetWidth
 
  
  if (slider.scrollLeft == 0 ) {
     slider.scrollLeft = widthSlider * (card.length - 1)
  } else {
    slider.scrollLeft -= widthSlider
  }
     
 }
 


function RightSlide(){
 const widthSlider = document.querySelector('.CharacterDiv').offsetWidth
 
 if (slider.scrollLeft + 10 >=  widthSlider * (card.length - 1) ) {
    slider.scrollLeft = 0
 } else {
  slider.scrollLeft += widthSlider
 }
    
 
}

window.onresize = function() {
  slider.scrollLeft = 0
}