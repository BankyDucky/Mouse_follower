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
     else if(amount < 40 && amount >= 0){
          return 1
     }
     else{
          return 0
     }
 }

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

