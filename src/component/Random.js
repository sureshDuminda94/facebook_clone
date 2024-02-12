import React from 'react'
import { useState } from 'react'


function Random() {

   const  name = ["day ","night" , "full night"]
  
    const handleChange=()=>{    

       const  int = Math.random()
       console.log(int) 
       return int
    }


    

  return (
    <div>

            <button onClick={handleChange}></button>
            {name }
    </div>
  )
}

export default Random