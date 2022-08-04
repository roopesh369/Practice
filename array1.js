const users = [
  { id: 1, name: "aaa", isActive: true, age: 25 },
  { id: 2, name: "bbb", isActive: true, age: 18 },
  { id: 3, name: "ccc", isActive: false, age: 30 },
];
let result = [];
// users.forEach((value)=>{
//     result.push(value.name)
// })
result = users.filter((v) => v.isActive).map((v) => v.name);
console.log(result);
///Elements which are Duplicated returned only once
let nums = [14, 23, 6, 6, 14, 56, 87, 14];
let str = "MMBBxxyzei239300pp";
arr = Array.from(str);

let arr1 = [
  "p",
  "a",
  "b",
  "b",
  "b",
  "rrr",
  "rrr",
  "x",
  "a",
  "u",
  "rrr",
  "x",
  "x",
  "l",
  "c",
  "c",
];
let r = arr
  .filter((e, i, a) => a.indexOf(e) !== i)
  .filter((e, i, a) => a.indexOf(e) == i);
// let r1 = nums.filter((e,i,a)=>a.indexOf(e)!==i).filter((e,i,a)=>a.indexOf(e)==i)
console.log(r);

function dup(a) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) if (r[r.length - 1] !== a[j]) r.push(a[j]);
    }
  }
  return r;
}
console.log(dup(arr));
