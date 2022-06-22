import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
 
   const getProducts =()=>{

    const payload={

    }
    axios.post('http://localhost:8000products',payload)
    .then(res=>{
      console.log(res)
    })
   }

   useEffect(()=>{
getProducts()
   },[])


  return (
    <div>Home</div>
  )
}

export {Home}