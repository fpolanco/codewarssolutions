function duplicateCount(text){
    //
    let lowerCase = text.toLowerCase();
    let count = 0;
    let str = [];
    
    lowerCase.split('').forEach(function(letter) {
      if (!str.includes(letter) && (lowerCase.split(letter).length - 1) > 1) {
        count++;
        str.push(letter);
      }
    });
    
    return count;

        //regex solution
        //  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
        // }
  }