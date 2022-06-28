import axios from 'axios'
import React, { useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar'



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
    <div>
      <NavBar/>
     <div className="ana">
     <div className="erste">

</div>
<div className="zweite">

</div>

     </div>
     
    </div>
  )
}

export {Home}