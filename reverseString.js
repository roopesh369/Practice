
function revStr(str){
    let l=str.length
    let rev=""
    let temp=""
    //using array 
    // for(i=0;i<l/2;i++){
    //     temp=str[i]
    //     rev[i]=str[l-i]
    //     rev[l-i]=temp
    // }
    for(let i=l-1;i>=0;i--){
        rev+=str[i]
    }
return rev
}
let x=revStr("I love India")
console.log(x)
let str1 = "Roopesh Sharma"
console.log([...str1].reverse().join(''))
console.log(str1.split(""))//
