const items = [
  { name: "Bike", price: 100 },
  { name: "Car", price: 500 },
  { name: "Truck", price: 1000 },
  { name: "Cycle", price: 10 },
  { name: "Bus", price: 1000 },
];
// const items2 = items.forEach((value,index)=>{
//  value.price=value.price+100;
// })
const num = [1, 2, 3, 55, 77, 100, 123];

console.log(num.filter((value) => value > 100));
console.log(
  items.filter((value) => {
    return value.price < 1000;
  })
);
console.log(
  num.map((value) => {
    return value * 10;
  })
);
console.log(num.map((num) => num + 5));

console.log(
  items.map((value) => ({
    name: value.name,
    price: value.price * 100,
  }))
);

console.log(
  items.map(function (value) {
    return {
      namex: value.name,
      price: value.price * 5,
    };
  })
);
console.log(
  items.map((value) => {
    return {
      Vehicle: value.name,
      Cost: value.price,
    };
  })
);
console.log(
  num.reduce((acc, value) => {
    return acc+=value*2
  },0)
);
console.log(num.reduce(cb))
function cb(acc, value){
    return acc=acc+value*2
}


console.log(items.reduce((pv,cv)=>{
  return pv+=cv.price
},0))
console.log("=====FLATTEN ARRAY----------")
const arr=[[1,2],[3,4],[5,6]]
console.log(arr.reduce((pv,cv)=>{
  return pv.concat(cv)

},[]))
