import React from 'react'
import {Navigate} from 'react-router-dom'


const Rolevalidator = ({children}) => {
    const {role}=JSON.parse(sessionStorage.getItem("userdata"))
    console.log(role);
    if(role!="admin"){
      return <Navigate to="/"></Navigate>
    }
   return children
  }
export default Rolevalidator