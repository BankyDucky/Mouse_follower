const background = document.querySelector(".background")
const test_text = document.getElementById("text")
const test_text2 = document.getElementById('size')
const airship = document.getElementById("airship")


let current_speed = 0
let current_x_axis = airship.style.left
let current_y_axis = airship.style.top

let mousePos = {x: undefined, y: undefined}
let windowSize = {height: innerHeight, width: innerWidth}


document.addEventListener('mousemove',(event)=>{
     mousePos = {x: event.clientX, y: event.clientY}
     test_text.textContent = `${mousePos.x - 10}, ${mousePos.y + 10}`
})

setInterval(()=>{moveAirship()},10)


window.addEventListener('resize',(event)=>{
     windowSize = {height: innerHeight, width: innerWidth}
     test_text2.textContent = `${windowSize.width}, ${windowSize.height}`
})


function outOfBoundsCorrector(maxWidth,maxHeight) { 
     if(current_x_axis >= maxWidth){
          airship.style.left = 0
          current_x_axis = 0
     } 
     else if(current_x_axis <= 0){
          airship.style.left = maxWidth - 1
          current_x_axis = maxWidth - 1
     }
     
     if(current_y_axis >= maxHeight){
          airship.style.top = 0
          current_y_axis = 0
     }
     else if(current_y_axis <= 0){
          airship.style.top = maxHeight - 1
          current_y_axis = maxHeight -1
     }
 }

 function movementAmountCalculator()


function moveAirship(){
     if (current_x_axis == mousePos.x && current_y_axis == mousePos.y){
          return false
     }
     // movement_x = (mousePos.x - current_x_axis)
     // movement_y = (mousePos.y - current_y_axis)
     // if(movement_x > 100){
     //      movement_x = 10
     // }
     // if(movement_x < -100){
     //      movement_x = -10
     // }
     // if(movement_y > 100){
     //      movement_y = 10
     // }

     movement_x = 10
     movement_y = 10

     airship.style.top = String(current_y_axis + movement_y) + "px"
     airship.style.left = String(current_x_axis + movement_x) + "px"
     current_x_axis += movement_x
     current_y_axis += movement_y

     outOfBoundsCorrector(1000,1000)   
     
     return true
}