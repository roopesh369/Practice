let n = parseInt(prompt("Enter Number", "3"));
//console.log(n)

// for(i=1;i<=n;i++){
//     if(i%15==0){
//         console.log("FZZBUZZ " + "divisible by 15")
//     }else if(i%5==0){
//                  console.log("BUZZ divisible by 5")
//              } else if(i%3==0){
//                 console.log("FIZZ divisible by 3")
//              }else console.log(i)

// }
//Factorial
document.write(
  "Factorial recurion and tail recursion/tail call optimzed\n " + `<br>`
);
function fact(n) {
  if (n === 0) return 1;
  else {
    return n * fact(n - 1);
  }
}
document.writeln(fact(n));

function factOpt(n, r = 1) {
  if (n == 0) return r;
  return factOpt(n - 1, n * r);
}
document.writeln(factOpt(n));
document.write(`<br>Fibonacci and tail recursion/tail call optimzed\n <br>`);

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
document.write(`${fib(n)}<br>`);

(function () {
  function fibTR(n, sum = 0, prev = 1) {
    if (n <= 1) return sum;
    return fibTR(n - 1, prev + sum, sum);
  }
  console.log(fibTR(20000));
})();
// document.write(`${fibTR(n)}<br>`);
