const x = [1,2]
const y = [3,4,5]
const append = (arr,el)=>{
    // let y=Array.from(arr)// 
    // y.push(el)
    // return y
    return [...arr, el]
}
let num=append(x,6)
console.log(num)
console.log(x)
const mergeArray=(arr1,arr2)=>{
    // return arr1.concat(...arr2)
    return[...arr1,...arr2]
}
console.log(mergeArray(x,y))