// let n = parseInt(prompt("Enter an Integer Number", 153));
// let n1 = Array.from(n.toString());
// console.log(n1)
// let total=parseInt(n1.reduce((acc,v)=>acc+v*v*v,0))
// console.log(total===n?"Total is " + total + " its Armstrong Numner":"Total is " + total +" its not ArmStrong Number")

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'roop'];

const countedNames = names.reduce((allNames, name) => {
  console.log(allNames[name] ??= 0);
  allNames[name]++;
  // Remember to return the object, or the next iteration
  // will receive undefined
  return allNames;
}, {});
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }