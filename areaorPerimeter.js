// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    // input is length and width
    // if square return area
    // if rectangle return perimeter
    // if l === w square
    let area = l * w
    //let perimeter = l * 2 + w * 2
    let perimeter = (l + w) * 2
    let square = l === w
      if(square ){
        return area;
      } else{
        return perimeter;
      }
  };


  
  
  
  
  //Other Solutions
  const areaOrPerimeter = function(l , w) {
    let area = l * w;
    let perimeter = (l + w) * 2;
    
    return l === w ? area : perimeter;
  };

  
  const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };
  
  const areaOrPerimeter = function(l , w) {
    if(l==w){
    return l*w;
    }
    else{
      (l>w)
      return l*2+w*2;
    }
  }
  