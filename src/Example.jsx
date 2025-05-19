import React from 'react'
import { useRef } from 'react';
//callback
function Example(){
// function kallu( name, callback){
//   console.log('hi'+ '' +name)
//   callback();}
// function callme(){
//   console.log(`i am callback`);}  
// kallu('Raju',callme)

// //promise
// const Name = true;
// let promo = new Promise(function(resolve,reject){
//   if(Name){
//     resolve("Yes it is")
//   }
//   else{
//     reject("not it is")
//   }  
// });
// console.log(promo);

// // async function

// async function pink(){
//   console.log('its me async')
//   return Promise.resolve();
// }
// let opt = console.log(pink());

// //full
// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     let output = console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();
//   return (
//     <>
//     <h1 id="prac">PRACTICE</h1>
//     <h2></h2>
//     <h2></h2>
//     </>
//   )
// }


// // input

//  {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
export default Example
