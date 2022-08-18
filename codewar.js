const person1 = {
  fname: "John",
  lname: "Doe",
  fullName: function () {
    return this; // Person  Object....functio is a method here
  },
  Daru: {
    naam: "Budwier",
    cost: "500",
    testIt: () => this,
    testFucn: function () {
      return this;
    },
  },
  testArrow: () => this, ///Window Object always
};
console.log(person1.Daru.testIt());

function foo() {
  return this; //Windows Object
}

let f1 = () => this; //Window object
let x = f1;

function testFunc() {
  return this;
}

// console.log(testFunc());///Window Object Global Object
class Car {
  constructor(name1, year) {
    this.name1 = name1;
    this.year = year;
  }
  age() {
    let date = new Date();
    return `${this.name1}  is ${date.getFullYear() - this.year}  years old`;
    // return (date.getFullYear()- this.year) + this.name1;
    

  }
}
let audi = new Car("Audi", 2000);
console.log(audi.age());

;
let z="xxx";
try{
    if(z=="") throw "Empty";
    if(isNaN(z)) throw " NAN";
    x= Number(z);


}
catch(err){
  console.log(err);
}
finally{
  console.log(z);
}
const pp ="roopesh";
let cc="";

console.log(cc);