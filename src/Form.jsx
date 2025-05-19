import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Form() {
    const[userName,setusername]=useState("")
    const[userAge,setuserAge]=useState("")
    const[userData,setuserData]=useState([
        {name:"syedpink",
            age:21
        },
        {
            name:"yusuf",
            age:20
        },
        {
            name:"noor",
            age:23
        }
    ]);
    async function sendData(){
        const response = await axios.post("")

    }
    console.log(userData)
  return (
    <>
     <table style={{border:"2px solid red"}}>
        <thead>
            <tr>
            <th>name</th>
            <th>age</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>syed pink</td>
                    <td>21</td>
                </tr><tr>
                    <td>syed pink</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>syed pink</td>

                    <td>21</td>
                </tr>
        </tbody>
     </table>
    </>
  )
}

export default Form