let str = "I Love India";
function countVowel(str) {
  let str1 = "AEIOU"; //local scope
  let count = 0;
  let va = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  for (i = 0; i <= str.length - 1; i++) {
    for (j = 0; j <= 9; j++) {
      if (str[i] == va[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log("VOWEL COUNT");
console.log(countVowel(str));
console.log(str.match(/[AEIOU]/gi).length);
//////////////////////////////////////////////////////////////////
///COUNT WORDS/////////////
const str2 = "I Love My India";
function countWords(str) {
  let wCount = 0;
  let flagS = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      if (flagS == true) {
        wCount++;
        flagS = false;
      }
    } else {
      flagS = true;
    }
  }
  return wCount;
}
console.log("WORD COUNT");
console.log(countWords(str));
console.log(str.split(" ").length);
//////////////////////////////////////////////////////////////////
///LONGEST COUNT WORDS/////////////

function longesttWordLengthCount(str) {
  let wCount = 0;
  let lWordLength = 0;
  let flagS = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      if (flagS == true) {
        wCount++;
        flagS = false;
      }
    } else {
      flagS = true;
    }
  }
  return wCount;
}
console.log("LONGEST WORD LENGTH COUNT");
console.log(longesttWordLengthCount(str));
console.log(str.split(" ").length);
