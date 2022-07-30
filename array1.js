const users = [
  { id: 1, name: "aaa", isActive: true, age: 25 },
  { id: 2, name: "bbb", isActive: true, age: 18 },
  { id: 3, name: "ccc", isActive: false, age: 30 },
];
let result = [];
// users.forEach((value)=>{
//     result.push(value.name)
// })
result = users.filter((v)=>v.isActive).map((v)=>v.name)
console.log(result)

