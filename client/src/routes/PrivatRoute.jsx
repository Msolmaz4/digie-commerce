import {Outlet,Navigate} from 'react-router-dom'
import React , { useContext} from 'react'
import { UserContext} from '../context/UserContex'


function PrivateRoute (){

    const {isAuthenticated }  = useContext(UserContext)
  

    if(isAuthenticated){
        return<Outlet/>
    }
    return<Navigate to='/Login'/>
}
export default PrivateRoute