import React from 'react'
import { useState } from 'react';
function Basic() {
  let [count,setCount]=useState(0);

  function decrement(){
    if (count > 0) {
      setCount(count - 1);
    }
  }
   
  return (
    <div class="basic"> 

      <h1>COUNT {count}</h1>
      <nav id="one">
      <span>
      <label> INCREMENT</label>
      <button onClick ={ ()=>{setCount(count + 1);}}> Count</button>
      </span>
      <span><label> DECREMENT </label>
      <button onClick = {()=>{decrement()}}>Count</button>
      </span>
      <span>
      <label>RESET</label>
      <button onClick = {()=>{setCount(0)}}> RESET</button>
      </span>
      </nav>
    </div>
  )
}

export default Basic;