import React from 'react'
import {useMemo} from 'react'
import { useState } from 'react'

function Custom() {
 let [count,setCount]=useState(0)
 let [age,setAge]=useState(1)
 
  function countOfPink(value){
    console.log("countOfPink")
    return value*5
  }
  let reset = useMemo(()=>{return countOfPink(age)},[age])

  
  return (
    <div>
     
      <h3>{reset}</h3>
      <h2>count is {count}</h2>
     <button onClick = {()=>{setCount(count +2)}}>count</button>
     <h2>age is {age}</h2> 
     <button onClick = {()=>{setAge(age+1)}}>AGE</button> 
    </div>
  )
}

export default Custom