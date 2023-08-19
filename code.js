
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
test_text2.textContent = `${windowSize.width}, ${windowSize.height}`


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

     airship.style.top = String(current_y_axis + movement[1]) + "px"
     airship.style.left = String(current_x_axis + movement[0]) + "px"
     current_x_axis += movement[0]
     current_y_axis += movement[1]

     outOfBoundsCorrector(windowSize.width,windowSize.height)   
     
     return true
}

//Enemy Functions

function moveEnemy(enemy){

}