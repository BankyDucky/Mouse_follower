const background = document.querySelector(".background")
const test_text = document.getElementById("text")
const test_text2 = document.getElementById('size')
const airship = document.getElementById("airship")


let current_speed = 1
let current_x_axis = airship.style.left
let current_y_axis = airship.style.top

//!Mouse pos off center
let mousePos = {x: undefined, y: undefined}
let windowSize = {height: innerHeight, width: innerWidth}


document.addEventListener('mousemove',(event)=>{
     mousePos = {x: event.clientX - 15, y: event.clientY - 15    }
     test_text.textContent = `${mousePos.x }, ${mousePos.y}`
})

a = setInterval(()=>{moveAirship()},10)

document.addEventListener('click',()=>{clearInterval(a)})

window.addEventListener('resize',(event)=>{
     windowSize = {height: innerHeight, width: innerWidth}
     test_text2.textContent = `${windowSize.width}, ${windowSize.height}`
})

//Airship Functions

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

 function momentumLogic(amount){
     if(amount >= 250){
          return 6
     }
     else if(amount < 250 && amount >= 200){
          return 5
     }
     else if(amount < 200 && amount >= 150){
          return 4
     }
     else if(amount < 150 && amount >= 100){
          return 3
     }
     else if(amount < 100 && amount >= 40){
          return 2
     }
     else if(amount < 40 && amount >= 20){
          return 1
     }
     else{
          return 0
     }
 }

 function movementAmountCalculator(){
     movement_x = (mousePos.x - current_x_axis)
     movement_y = (mousePos.y - current_y_axis)
     movement_x_direction = 1
     movement_y_direction = 1

     //Chooses the direction of movement
     if(movement_x < 0){
          movement_x_direction = -1
     }

     if(movement_y < 0){
          movement_y_direction = -1
     }

     movement_x = Math.abs(movement_x)
     movement_y = Math.abs(movement_y)


     //! When at standstill it moves back and forth
     movement_x = momentumLogic(movement_x)
     movement_y = momentumLogic(movement_y)

     return [movement_x * movement_x_direction ,movement_y * movement_y_direction]
 }


function moveAirship(){
     if (current_x_axis == mousePos.x && current_y_axis == mousePos.y){
          return false
     }

     movement = movementAmountCalculator()

     console.log(movement)
     airship.style.top = String(current_y_axis + movement[1]) + "px"
     airship.style.left = String(current_x_axis + movement[0]) + "px"
     current_x_axis += movement[0]
     current_y_axis += movement[1]

     outOfBoundsCorrector(windowSize.width,windowSize.height)   
     
     return true
}

//Enemy Functions