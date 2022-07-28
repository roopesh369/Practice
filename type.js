const form = document.querySelector("form");

const errMsg = document.querySelector("#errMsg");
const sucMsg = document.querySelector("#sucMsg");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberOfChildren = parseInt(input.value);
  errMsg.textContent = "";
  sucMsg.textContent = "";
  //  if(!numberOfChildren)
  if (isNaN(numberOfChildren) || numberOfChildren < 0) {
    errMsg.textContent = "Please enter Valid number of children";
    errMsg.style.color = "#ff0000";
  } else {
    sucMsg.textContent = "you have " + numberOfChildren + " Children";
    sucMsg.style.color = "#00ff00";
    sucMsg.style.backgroundColor = "#000";
  }
});

let foo = NaN;
let someText = foo || "Hello!";
console.log(someText);

let a = 4, b = 5
a = b + (b=a  ,0)
console.log(a +"  "+b)

