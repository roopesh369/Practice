let a = ['a','b','c','d','e','f','g','h']
let split=3

function splitArray(arr,split){
    let endIndex=split
    let startIndex=0
    var result=[]
    while(endIndex<=arr.length){
        console.log(arr.slice(startIndex,endIndex))
        result.push(arr.slice(startIndex,endIndex))
        startIndex=endIndex
        endIndex+=split
        if(endIndex>=arr.length){
            result.push(arr.slice(startIndex,))
            break;
        }
       
        
    }
    return result
}
console.log(splitArray(a,split))
// splitArray(a,split)