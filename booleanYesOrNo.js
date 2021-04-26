// Complete the method that takes a boolean value 
//and return a "Yes" string for true, or a "No" 
//string for false.



function boolToWord( bool ){
    if (bool === true){
      return "Yes";
    } else{
      return  "No";
    }
  }


  // Other Solutions ternary
  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  function boolToWord( bool ){
    return true === bool ? 'Yes' : 'No'
  }