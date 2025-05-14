import React from 'react'
import { useState } from 'react';
function counter() {
  let [count,setCount]=useState(0);

  function decrement(){
    if (count > 0) {
      setCount(count - 1);
    }
  }
   
  return (
    <div class="pink"> 

      <h1>COUNT {count}</h1>
      <nav id="one">
      <label> INCREMENT</label>
      <button onClick ={ ()=>{setCount(count + 1);}}> Count</button>
      <label> DECREMENT </label>
      <button onClick = {()=>{decrement()}}>Count</button>
      <label>RESET</label>
      <button onClick = {()=>{setCount(0)}}> RESET</button>
      </nav>
    </div>
  )
}

export default counter;