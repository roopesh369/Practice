stra = "India";
strb = "India";

function makeObj(str) {
  let o = {};
  for (let i of str) {
    !o[i] ? (o[i] = 1) : o[i]++;
  }
  return o;
}

function isPerm(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  var x = makeObj(str1);
  var y = makeObj(str2);

  for (let i in x) {
    if (x[i] != y[i]) return false;
  }
  console.log(x);
  console.log(y)
  return true;
}
 console.log(isPerm("DoDDDg", "goDDDD"));

// function multiplyBy(num){
//     return function (x){
//         return x*num;
//     }
// }
// let dbl= multiplyBy()
// let trpl = multiplyBy(3)
// let quadr = multiplyBy(4)
// console.log(dbl(4),trpl(4),quadr(4))

// function calcu(op=1,num=100){
//     if(op==1) return (x)=>x+num;
//     // if(op==2) return (x,y)=>x-y;
//     // if(op==3) return (x,y)=>x*y;
//     // if(op==4) return (x,y)=>x/y;
// }
// let add = calcu(1,200)

// console.log(add(88888))
x=['1','2','3','4','5']
y="abcde"
// a=["a","dd","gg","xx"]
// console.log(a.sort());
console.log(x.slice(-3))
console.log(y.slice(-3))

console.log(x.splice(-3))
console.log(y.splice(-3))

