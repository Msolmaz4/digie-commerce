import { createContext, useEffect, useState } from "react";
export const UserContext = createContext()


export const UserProvider = ({children}) => {
 const [isAuthenicated ,setisAuthenicated] = useState(false)



const checkAuth =(token)=>{

}

useEffect(()=>{
    const token = localStorage.getItem('token')
    token && checkAuth(token)

},[])

    return (
        <UserContext.Provide value={{isAuthenicated}}>
            {children}
        </UserContext.Provide>
            
    )
}