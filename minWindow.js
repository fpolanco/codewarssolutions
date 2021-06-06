//Leetcode // minWindow
// given 

// we need a window that will capture the string that fulfills the requirements
// we need a tail of the window and a head of the window

// s = "ADOBECODEBANC", t = "ABC"

// window = "ADOBEC", tail = 0, head = 5, window.length = 6
// as we slide the window, we want the smallest window
// tail = 3 "BECODEBA", head = 10, window.length = 8
// this window is not smaller, so we move on
// tail = 5, "CODEBA", head = 10, length = 6
// tail = 9, "BANC", head = 12, length = 4 
// return this last window because it's the shortest length

// we need a loop where we move the tail
// the condition to start moving the head is when we hit one char we want
// we need a loop where we move the head
// the condition to stop the head is when we have all of the chars we want
// we need a variable to keep track of the current minimum window

function minWindow(str, chars) {
    let smallestWindow = '' // BANC
    
    // we move the tail until we find a character that fits
    for (let tail = 0; tail < str.length; tail++) {
      
      // we found a character that fits
      if (chars.includes(str[tail])) {
        
        // we want to move the head of the window until we find all the chars needed
        for (let head = tail + 1; head < str.length; head++) {
          // we need to define the current window
          let curWindow = str.slice(tail, head) // tail = 9, head = 12, curWindow = "BANC"
          console.log('tail: ', tail)
          console.log('head: ', head)
          console.log("curWindow: ", curWindow)
          
          // check if we have all chars in the curWindow
          if (curWindow.includes(chars)) {
            console.log("curWindow: ", curWindow)
            // update the minWindow
              // IF it's empty
              if (!smallestWindow || curWindow.length < smallestWindow.length) {
                smallestWindow = curWindow
              } 
              // OR IF the curWindow.length < minWindow.length
            
            // we found a solution that completes the window, so stop the head
            break
          }
        }
      }
    }
    
    return smallestWindow
  }
  
  console.log(minWindow("ADOBECODEBANC", "ABC"))
  
  

  //Mudhar's Solution
  function minWindow(str, targets) {
    let counts = {};
    let missing = targets.length;
    let range = [0,Infinity];
    
    for (let i = 0; i < targets.length; i++) {
      counts[targets[i]] = 0
    }
    
    let left = 0;
    for (let right = 0; right < str.length; right++) {
      if (str[right] in counts) {
        counts[str[right]]++;
        if(counts[str[right]] === 1) {
          missing--;
        }
      } 
      
      while (missing === 0) {
        
        if((right - left) < (range[1] - range[0])) {
          range = [left, right]
        }
        range = [left, right]
        
        if(str[left] in counts) {
          counts[str[left]]--;
          if (counts[str[left]] === 0) {
            missing++
          }
        }
        left++;
      }
  
    }
    
    console.log("COUNTS", counts);
    console.log("MISSING", missing);
    console.log("RANGE", range);
    
    if(range[1] === Infinity) {
      return "";
    } else {
      return str.slice(range[0], range[1] + 1);
    }
  
  }
  
  let str = "ADOBECODEBANC"
  let targets = "ABC"
  
  console.log(minWindow(str, targets))