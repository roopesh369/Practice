const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
  
  console.log(fibonacci(10))

function fib(nums) {
  const fib = [0 , 1]
  let data = []
  for(let i=2; i<=nums; i++){
      fib[i]= fib[i-1] + fib[i-2]
      data.push(fib[i])
  }
return data
}
console.log(fib(10))

function fibr(n){
    if (n<2)
    return n
    else{
        return fib(n-1) + fib(n-2)
    }
}
let fibb = fibr(10)
console.log(fibb)