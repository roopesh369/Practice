const child1 = document.querySelector("#child1");
const child = document.querySelectorAll(".child");
const gp = document.querySelector(".gp");
const child2 = child[1];
para1.textContent =
  "Event Bubbling event on parent element also applies to child elements\
  but child element does not apply parent\
  In case of conflict arent event apllies not child's event";

gp.addEventListener("mouseout", () => {
  para.textContent = "MouseOut of GP Event";
});
child1.addEventListener("mouseover", () => {
  para.textContent = "Mouse Over Child 1 Event";
});
child1.addEventListener("mouseout", () => {
  para.textContent = "Mouse Out Child 1 Event";
});
