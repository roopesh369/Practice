let name1 ={
    firstName: "Roopesh",
    lastName: "Sharma",
    printFullName: function(city){
        console.log(this.firstName + " " + this.lastName + " " + city)
    }
}
let name2={
    firstName: "Sachin",
    lastName: 'Tendulkar',

}
var updateZipCode = function () {
    console.log(this);
};
var zipCode = {
    zip: '11787'
};
updateZipCode.call(zipCode);
console.log(NaN==={})