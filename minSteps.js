function minSteps(n) {
    let steps = 0;
    
    while(n>1) {
      if(n%3 === 0) {
        n = n/3
      } else if(n%2 === 0) {
        n = n/2
      } else {
        n = n-1
      }
      steps++
    }
  
    return steps
  }
  // console.log(minSteps(500))
  //Time Complexity: O(log(N))
  
  let object = {};
  function minStepsM(n) {
    if(n in object) {
      return object[n]
    }
    
    if(n===1) {
      return 0
    }
    
    //subtract 1
    let steps = minStepsM(n-1)
    
    //divide by 3
    if(n%3 === 0) {
      let div3 = minStepsM(n/3)
      steps = Math.min(steps, div3) 
    }
    
    //divide by 2
    if(n%2 === 0) {
      let div2 = minStepsM(n/2)
      steps = Math.min(steps, div2) 
    }
    
    object[n] = steps + 1
    return object[n]
  }
  //Recursion Time Complexity: O(K^N) -> K = 1 + 1/2 + 1/3
  //Memoization Time Complexity: O(N)
  console.time("MEMOIZATION")
  console.log(minStepsM(5000))
  console.timeEnd("MEMOIZATION")
  
  function minStepsT(n) {
    let result = new Array(n+1)
    result[1] = 0
    
    for (let i = 2; i < result.length; i++) {
    
      //subtract 1
      let steps = result[i-1]
      
      //divide by 3
      if(i%3 === 0) {
        let div3 = result[i/3]
        steps = Math.min(steps, div3) 
      }
      
      //divide by 2
      if(i%2 === 0) {
        let div2 = result[i/2]
        steps = Math.min(steps, div2) 
      }
      
      result[i] = steps + 1
      
    }
    
    return result[n]
    
  }
  //Tabulation Time Complexity: O(N)
  console.time("TABULATION")
  console.log(minStepsT(1000000))
  console.timeEnd("TABULATION")
  
  
  