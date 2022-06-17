import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()


export const  UserProvider =({ children}) =>{

    const [ isAuthenticated,setIsAuthenticated] = useState(false)

    const checkAuth = (token) =>{

    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        token && checkAuth(token)
        

    },[])


    return(
        <UserContext.Provider value={{isAuthenticated}}>
        {children}
        </UserContext.Provider>


    )
}
