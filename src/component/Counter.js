import React, { useState } from 'react'

import '../App.css';
const Counter = () => {

    const [count ,setCount]= useState(0)

  return (
    <div ><button className='button_css' onClick={()=>{
          
            setCount(c=>c+1)
        }} >

        <div  >{count}</div>
        
        </button >
        
        <button onClick={()=>{
            
            setCount(c=>c-1)
        }} >

     
        
        </button >
        
        
        </div>
  )
}

export default Counter