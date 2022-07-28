// const grandparent = document.getElementById("grandparent-id")
// const grandparent = document.querySelector(".grandparent")
// const grandparent = document.querySelector("#grandparent-id")
// const parents = Array.from(document.getElementsByClassName("parent"))
// const parent = document.querySelectorAll(".parent")
// parents=Array.from(grandparent.children)
// const childrenofp1 = Array.from(parents[0].children)
// const child1= childrenofp1[0]
//  childrenofp1.forEach(changeColor)
const child = document.querySelector(".grandparent").lastChild
console.log(child)
// grandparent = child.closest("body")

changeColor(child)
// child.forEach(changeColor)

 function changeColor(element){
    element.style.backgroundColor="red"
} 