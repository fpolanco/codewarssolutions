// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    // input is an array which represents numbers in a given list
    //calculate  and output average of numbers in array
    //if array is empty return 0
    return array.reduce((a,b) => a + b, 0)/ array.length;
  }

  // using for loop
//   function find_average(array) {
//     if (array.length === 0) {
//     return 0;
//     }
//     var result = 0;
//     for (i=0; i<array.length; i++) {
//       result +=array[i];
//     }
//     return result/array.length;
//   }