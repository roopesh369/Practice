function multiply(a) {
  console.log(a);
  return function (b) {
    console.log(b)
    return function (c) {
        console.log(c)
      return a * b * c;
    };
  };
}
console.log(multiply(2)(5)(7));
let add= (a)=>(b)=>(c)=>a+b+c;
console.log(add(100)(100)(100))
