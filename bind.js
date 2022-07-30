let name1 ={
    firstName: "Roopesh",
    lastName: "Sharma",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
name1.printFullName();
let name2={
    firstName: "Sachin",
    lastName: 'Tendulkar',

}
name1.printFullName.call(name2)