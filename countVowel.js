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
console.log("Longest Word Length /n");

function longesttWordLengthCount(str) {
  let wCount = 0;
  let lwl = 0;
  let cc = 0; //characters count of each word
  let flagS = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      cc++;
      if (lwl <= cc) {
        lwl = cc;
      }
      if (flagS == true) {
        wCount++;
        flagS = false;
      }
    } else {
      flagS = true;
      if (lwl <= cc) {
        lwl = cc;
      }
      
      cc = 0;
    }
  }
  console.log("Length of Longest word is= " +lwl);
  return wCount;
}
//console.log("LONGEST WORD LENGTH COUNT");
console.log(longesttWordLengthCount("Roopesh Sharma Is The Greatest"));
