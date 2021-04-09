function descendingOrder(n){
    //
    //turn n into an array
    //...turned n to string
    //Using the split() method to make it an array of strings.
    let string = n.toString();
    //console.log(string)
    let array = string.split("");
    //console.log(array)
    let sortedarray = array.sort(function(a, b) {
    return b - a;
  });
  //   console.log(sortedarray)
    //turn array to string, 
    let arrToString = sortedarray.join("");
    console.log(arrToString);
    //string to numbers
  //   let strToNum = num.parseInt(sortedarray);
  //   console.log(strToNum);
  //   function strToNum(sortedarray) {
  //   const parsed = Number.parseInt(sortedarray);
  //   if (Number.isNaN(parsed)) {
  //     return 0;
  //   }
  //   return parsed ;
  // }
  
  
  }