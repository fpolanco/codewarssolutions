// Question: How would you find the maximum difference between any 
// two integers in an array?
// Example: if the array is [4, 9, 10, 3, 3, 2, 1] the max 
// difference is 9 (10 - 1)

//input is an array
// find max and min value
// subtract min value from max value

function findDifference(array)
// Math.max([value1[, value2[, ...]]])
let arrayMax = Math.max(...array)
let arrayMin = Math.min(...array)
return arrayMax - arrayMin

// big O Notification. how will it scale?

// big o of 1 - memory