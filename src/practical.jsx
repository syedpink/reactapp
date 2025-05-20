import React from 'react'
function practical() {
// for (let i=1; i<=100; i++){
//     console.log(i);
// }
// let value=761;
// if(value%2==0){
//     return ("positive")
//     }
// else{
//     return("negative")
// }

// return value%2==0 ? "pos" :"neg"

// let str = "pink";
// function reverseString(str) {
//   let lolu =  str.split("").reverse().join("");
//   console.log(lolu)
// }
// reverseString("pink")

// function maximum(q,e,r){
//     let max =  Math.max(q,e,r);
//     console.log(max);
// }
// maximum(120,430,590);
// function calc(limit){
//     const multiplesof3 = [];
//     const multiplesof5 = [];
//     const multiplesofboth = [];
//      for (let i=0;i<=limit;i++){
//         if(i%3===0){
//             multiplesof3.push(i);}
//             else if(i%5===0);{
//                 multiplesof5.push(i);}
//                 else if(i%3===0 && limit%5===0);{
//                     multiplesofboth.push(i);
//                 }
//             }
//     console.log("Multiples of 3:", multiplesof3);
//     console.log("Multiples of 5:", multiplesof5);
//     console.log("Multiples of both 3 and 5:", multiplesofboth);

//         }
//         calc(100);

// function findMultiples(limit) {
//   const multiplesOf3 = [];
//   const multiplesOf5 = [];
//   const multiplesOfBoth = [];

//   for (let i = 1; i < limit; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       multiplesOfBoth.push("fizz");
//     } else if (i % 3 === 0) {
//       multiplesOf3.push("bizz");
//     } else if (i % 5 === 0) {
//       multiplesOf5.push("fizzbizz");
//     }
//   }
//     console.log("Multiples of 3:", multiplesOf3);
//     console.log("Multiples of 5:", multiplesOf5);
//     console.log("Multiples of both 3 and 5:", multiplesOfBoth);
// }

// findMultiples(100);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

     }
practical();




export default practical