/*Repeat String Num Times

// function repeatStringNumTimes(str, num) {
//  let manystrings = "";
//  if (num < 0 ) return "";
  
//   for (i = 0; i < num; i++) {
//   manystrings += str;
//   console.log( manystrings);
//    }
//   return manystrings; 
// }
// repeatStringNumTimes("abc", 3);


// function repeatStringNumTimes(str, num) {
//    return str.repeat(num);
// }
// repeatStringNumTimes("abc", 3);



// function repeatStringNumTimes(str, num) {
//   if (num < 0 ) return "";
//   if (num === 1) return str;
  
//   return str += repeatStringNumTimes(str, num -1)

// }
// repeatStringNumTimes("abc", 5);

*/

/* Confirm Ending Challenge

function confirmEnding(str, target) {
  let chars = str.split("");
  if(chars[chars.length - 1] === target) return true

  return false;
}
confirmEnding("Bastian", "n");

*/



// buttons inc + dec + onmouseover intervals

// let inc = document.getElementById('inc');
// let dec = document.getElementById('dec');
// let input = document.querySelector('input');
// let h1 = document.querySelector('h1');

// inc.addEventListener('click', () => {
//     input.value = parseInt(input.value) + 1;
// })

// dec.addEventListener('click', () => {
//   input.value = parseInt(input.value) -1;
// })

// h1.addEventListener('click', () =>{
//     input.value = parseInt(input.value) +10;
// })

// h1.onmouseover = () => {
//     setTimeout(() => {
//         setInterval(() => {
//             input.value = parseInt(input.value) -100;
//         },2000);
        
//     }, 2000);  
// }





//largest number of an array + mine number generator

// function getMax (arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   } 
  
//   function loop (y) {
//     let x = [];
//     for (i=1;i<y; i++){
//       x.push(i);
//     }
//     return x;
//   }




// Largest Numbers Of An Array
// function largestOfFour(arr) {
//     let maxes = [];
//       for (let i = 0; i < arr.length; i++){
//         let tempMax = arr[i][0];
//           for (let j = 0; j < arr[i].length; j++){
//             let currentE = arr[i][j];
//             if (currentE >= tempMax ) {tempMax = currentE;}
//           }
//           maxes.push(tempMax);  
//       }
//       console.log (maxes);  
//     }
//     largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    






















//capitalize
// p {
//     text-transform: capitalize;
// }


// 1st way to solve it

// cap = (words) => {
//     words.toLowerCase().split(" ");
//     for (i=0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);        
//     }
//     return words;
// }
// cap("maurIcIo, heLlo, hi");

//2nd way to solve it

// cap = (words) => {
//     let capwords = words.toLowerCase().split(" ").map(function (e){
//       return e[0].toUpperCase() + e.slice(1);
//     });
//     console.log(capwords);
// }

// cap("maurIcIo, heLlo, hi");
















//find the longest word

// function longword (str) {
//     let words = str.split(" ");
//     let longest = "";
//     for(let word of words) {
//     if (word.length >= longest.length) longest = word;
//   }
//    console.log(longest);
//   }
//   longword("the quick brown fox jumps over the lazy dog");

/* or

function longword (str) {
return str.split(" ").sort(function (a, b) {return b.length - a.length})[0];
}

*/




// palindrome

// function pali (str) {
//     let reg = /[\W_]/g;
//     let palistr = str.toLowerCase().replace(reg, "");
  
//     let reversed = palistr.split("").reverse().join("");
//     if (palistr === reversed) return true
    
//     return false
  
//    }
  
//   pali ("racecar");

