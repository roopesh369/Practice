str1="india"
str2="nadia"
function mkObj(str){
    obj={}
    for(let i of str){
        (!obj[i])?obj[i]='1':obj[i]++
    }
    return obj
}
isPerm=(str1,str2)=>{
    if(str1===str2){
        return true
    }
    else {
        if (str1.length!=str2.length){
            return false
        }else{
            let obj1 = mkObj(str1)
            let obj2 = mkObj(str2)
            // console.log(obj1)
            // console.log(obj2)
            for(let j in obj1){
                if(obj1[j]!==obj2[j]){
                    return false
                }
            }
        }
    }
    return true 
}
//console.log(mkObj("roopesh"))
// isPerm("aaaiui","llllll")
console.log({
    isPerm:isPerm("xyzMM","MxyzM")
})