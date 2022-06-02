import React, { useContext } from 'react'

import { Outlet ,Navigate } from 'react-router-dom'
import {UserContext} from '../context/UserContext'

export default function PrivateRoute() {

const {isAuthenicated} =useContext(UserContext)

  if(isAuthenicated){
    return (
      <Outlet/>
    )
  }

return <Navigate to='/login'/>
}
