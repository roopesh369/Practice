function multiply(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
let add= (a)=>(b)=>(c)=>a+b+c
let mul = (a)=>(b)=>(c)=>a*b*c
console.log(multiply(2)(3)(2))
console.log(add(10)(100)(20))
console.log(mul(5)(5)(5))