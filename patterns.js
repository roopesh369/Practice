let n = 9;
let str = "";
ptr= document.getElementsByTagName("div");


// // for (i = 1; i <= n; i++) {
// //   for (j = 1; j <= n; j++) str += "*";
// //   str += "\n";
// // }
// // console.log(str);
// for (r = 1; r <= n; r++) {
//   for (j = 1; j <= n; j++) {
//     if (r == 1 || r == n) {
//       str += "*";
//     } else {
//       if (j == 1 || j == n) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }

// for(i=1;i<=n;i++){
//     for(j=1;j<=n-i;j++){
//         str+=" ";
//     }
//     for(;j<=n;j++){
//         str+="*";
//     }
//     str+="\n";
// }

// for(rc=1;rc<=n;rc++){
//     for(cc=1;cc<=rc;cc++){
//         str+="*";
//     }
//     str+="\n";
// }
// for(i=1;i<=n;i++){
//     for(j=1;j<=n-i;j++){
//         str+="*";
//     }
//     str+="\n";
// }

// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     if (i==1||i == n) {
//       str += "*";
//     } else {
//       if (j == 1 || j == i) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }
// for(i=1;i<=n;i++){
//    for(j=1;j<=n-i;j++){
//     str+=" ";
//    }
//    for(k=1;k<=2*i-1;k++){
//     str+="*";
//    }
//    str+="\n"
// }
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     str += " ";
//   }
//   for (k = 1; k <= 2 * (n - i) - 1; k++) {
//     str += "*";
//   }
//   str += "\n";
// }

// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     if (i == 1 || i == n) {
//       str += "*";
//     } else {
//       if (k == 1 || k == 2 * i - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }
//////DIAMOND PATTERN
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// for (l = 1; l <= n; l++) {
//   for (m = 1; m <= l; m++) {
//     str += " ";
//   }
//   for (o = 1; o <= 2 * (n - l) - 1; o++) {
//     str += "*";
//   }
//   str += "\n";
// }
////HOLLOW DIAMOND PATTERN///////////
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    str += " ";
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    if (k == 1 || k == 2 * i - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    str += " ";
  }
  for (k = 1; k <= 2 * (n - i) - 1; k++) {
    if(k==1||k==2*(n-i)-1){
        str+="*"
    }
    else{
        str+=" "
    }
  }
  str += "\n";
}
//// V PATTERN HOLLOW HAAR PATTERN
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     str += j;
//   }
//   for (k = 1; k <= 2 * (n - i) + 1; k++) {
//     if (k == 1 || k == 2 * (n - i) + 1) {
//       str += "*";
//     } else {
//       str += "_";
//     }
//   }
//   str += "\n";
// }
// //////////HOUR GLASS STAR PATTERN
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) str += j;
//   for (k = 1; k <= 2 * (n - i) + 1; k++) str += "*";

//   str += "\n";
// }
// for (i = 1; i <= n ; i++) {
//   for (j = 1; j <= n - i + 1; j++) { //ADJUST BY PRINTING 1 MORE SPACE
//     str += j;
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     str += "*";
//   }
//   str+="\n";
// }
//RIGHT PASCAL STAR PATTERN
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         str+="*";
//     }
//     str+="\n";
// }
// for(i=1;i<=n-1;i++){
//     for(j=1;j<=n-1-i;j++){
//         str+="*";
//     }
//     str+="\n";
// }
//////LEFT PASCAL STAR PATTERN
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) str += " ";
//   for (k = 1; k <= i; k++) str += k;
//   str += "\n";
// }
// for (i = 1; i <= n - 1; i++) {
//     for(j=1; j<=i;j++) str+=" ";
//     for(k=1; k<=n-i; k++) str+=k;
//     str+="\n"
// }

console.log(str);
