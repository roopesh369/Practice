let str1="I Love India"
function countVowel(str){
    let str1="AEIOU"//local scope
    let count=0;
    let va=['A','E','I','O','U','a','e','i','o','u']
    for(i=0; i<=str.length-1; i++){
        for(j=0; j<=9; j++){
            if(str[i]==va[j]){
                count++
            }
        }
    }
    return count
}
console.log(countVowel(str1))
console.log(str1.match(/[AEIOU]/gi).length)