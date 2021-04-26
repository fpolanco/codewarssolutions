// You were camping with your friends far away 
// from home, but when it's time to go back, you 
// realize that your fuel is running out and the 
// nearest pump is 50 miles away! You know that on 
// average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left. Considering these factors, write
//  a function that tells you if it is possible to get 
//  to the pump or not. Function should return true (1 in Prolog) 
//  if it is possible and false (0 in Prolog) if not. 
// The input values are always positive.




const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    //input numbers
    // nearest pump 50 miles away (distanceToPump)
    // on average, your car runs on about 25 miles per gallon (mpg)
    // There are 2 gallons left (fuelLeft)
    let yes = (mpg * fuelLeft) >= distanceToPump
    let no = (mpg * fuelLeft) <= distanceToPump
    return yes ? true : false;
  };


  //Other Solutions
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
  };


  function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
  }

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg*fuelLeft >= distanceToPump) {
      return true;
    } else {
      return false;
    }
  };