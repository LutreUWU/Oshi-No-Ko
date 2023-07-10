TopicRight = document.querySelectorAll(".TopicRight")
TopicLeft = document.querySelectorAll(".TopicLeft")
sliderTopic = document.querySelector('.slider-containerTopic')
cardTopic = document.querySelectorAll(".TopicsDiv")

console.log(TopicRight)


TopicRight.forEach(elements => {
  elements.addEventListener("click", function(){
  RightSlideTopic()
  
  });
})


TopicLeft.forEach(elements => {
  elements.addEventListener("click", function(){
  LeftSlideTopic()
  });
})


function LeftSlideTopic(){
  const TopicwidthSlider = document.querySelector('.TopicsDiv').offsetWidth
 
  
  if (sliderTopic.scrollLeft == 0 ) {
     sliderTopic.scrollLeft = TopicwidthSlider * (cardTopic.length - 1)
  } else {
    sliderTopic.scrollLeft -= TopicwidthSlider
  }
     
 }
 


function RightSlideTopic(){
 
 const TopicwidthSlider = document.querySelector('.TopicsDiv').offsetWidth
 
 if (sliderTopic.scrollLeft + 10 >=  TopicwidthSlider * (cardTopic.length - 1) ) {
    sliderTopic.scrollLeft = 0
 } else {
  sliderTopic.scrollLeft += TopicwidthSlider
 }
 
 
}

window.onresize = function() {
  sliderTopic.scrollLeft = 0
}