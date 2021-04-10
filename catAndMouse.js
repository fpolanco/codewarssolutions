function catMouse(x){
    //input a string
    //starting with a "C", ending with an "m" with "." in between
       //if more than 3 return escaped
    //if less than or equal to 3 return caught
    //return "Escaped" or "Caught
   
    //intial solution with loop
  // let counter = 0
  //count number of dots between C and m - loop through string
  //   for(let i = 0; i < x.length; i++){
  //     if(x[i] === "."){
  //       counter++
  //     }
   //   return counter > 3? "Escaped!" : "Caught!"
  //   }
 

  //Optimized Solution with substring method
    //string.substring(startingIndex, excludedIndex)
    let dots = x.substring(1, x.length-1)
    return dots.length > 3? "Escaped!" : "Caught!"
    // another simple return because more than 5 characters in string gives = more than 3 dots
    // return x.length > 5 ? "Escaped!" : "Caught!"
}
  
  