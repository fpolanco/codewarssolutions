function calculate(str) {
    //input string
    //output string - evaluated expression
      
      let plus = str.replaceAll("plus", "+");
      let minus = plus.replaceAll("minus", "-");
    console.log(eval(minus));
    return eval(minus);
}
// calculate("1plus2plus3plus4");  --> "10"
// calculate("1plus2plus3minus4");  --> "2"
(calculate("1plus2plus3plus4"), '10');
(calculate('1plus2plus3minus4'), '2');


// Other Solution regex