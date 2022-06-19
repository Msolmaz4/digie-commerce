import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserContext = createContext()


export const  UserProvider =({ children}) =>{

    const navigate = useNavigate()

    const [ isAuthenticated,setIsAuthenticated] = useState(false)

    const register = (e,user)=>{
        e.preventDefault()
        console.log('register',user)
        axios.post('http://localhost8000/user/register',user)
        .then(res =>{

            console.log('response',res)
            navigate('/')
        })
        .catch(err =>{
            console.log('error',err)
            alert(err)
        })

       
    }

    const checkAuth = (token) =>{

    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        token && checkAuth(token)
        

    },[])


    return(
        <UserContext.Provider value={{isAuthenticated,register}}>
        {children}
        </UserContext.Provider>


    )
}
