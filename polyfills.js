let arr = [1, 2, 3, 4, 577, 8, 333, 4, 0];
let stud = [
  { name: "name1", age: 20, city: "Pune" },
  { name: "name2", age: 22, city: "Mumbai" },
  { name: "name3", age: 25, city: "Bhopal" },
  { name: "name4", age: 28, city: "Banglore" },
  { name: "name5", age: 30, city: "Surat" },
];

Array.prototype.myMap = function (cb) {
  let r = [];
  for (let i = 0; i < this.length; i++) r.push(cb(this[i], i, this));
  return r;
};
console.log("Polyfill Map");
console.log(arr.map((e) => (e += 2)));
console.log(arr.myMap((e) => (e += 2)));
console.log(stud.map((e) => (e.age += 10)));
console.log(stud.myMap((e) => (e.age += 10)));

///////////////FILTER POLYFILL

Array.prototype.myFilter = function (cb) {
  let r = [];
  for (let i = 0; i < this.length; i++)
    if (cb(this[i], i, this)) r.push(this[i]);
  // if(cb.call(this,this[i],i, this)) r.push(this[i])
  return r;
};
console.log("Polyfill Filter");
console.log(arr.filter((e) => e > 25));
console.log(arr.myFilter((e) => e > 25));
console.log(stud.filter((e) => e.age > 20));
console.log(stud.myFilter((e) => e.age > 20));

Array.prototype.myReduce = function(cb,iv){
var acc = iv;
for(i=0; i< this.length; i++)
    if(acc!=undefined) acc = cb(acc, this[i], i , this);
    else acc = this[i];

return acc;
}
console.log("Polyfill Reduce working Perfectly!!!!!!!");

console.log(arr.reduce  ((acc, e) => (acc += e * 2)));
console.log(arr.myReduce((acc, e) => (acc += e * 2)));
console.log(stud.reduce  ((acc, e) => (acc += e.age),0));
console.log(stud.myReduce((acc, e) => (acc += e.age),0));
