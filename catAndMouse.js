function catMouse(x){
    //input a string
    //starting with a "C", ending with an "m" with "." in between
  //   let counter = 0
    //count number of dots between C and m - loop through string
  //   for(let i = 0; i < x.length; i++){
  //     if(x[i] === "."){
  //       counter++
  //     }
  //   }
    //string.substring(startingIndex, excludedIndex)
    let dots = x.substring(1, x.length-1)
    return dots.length > 3? "Escaped!" : "Caught!"
    
  //   return counter > 3? "Escaped!" : "Caught!"
    
    //if more than 3 return escaped
    //if less than or equal to 3 return caught
    
    //return "Escaped" or "Caught"
  
  }
  
  
  // function catMouse(x){
  //   //input a string
  //   //starting with a "C", ending with an "m" with "." in between
    
  //   //count number of dots between C and m
  //   //if more than 3 return escaped
  //   //if less than or equal to 3 return caught
    
  //   //return "Escaped" or "Caught"
  
  // }