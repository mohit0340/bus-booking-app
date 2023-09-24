import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loginprotect } from './logincontext'




const Protected = (props) => {
  const [isuser,setIsuser]=useContext(Loginprotect)
   const {Component}=props
   const navigate=useNavigate()

useLayoutEffect(()=>{
  if(isuser==""){
navigate("/user/login")
  }
},[])


  return (
    <div>
      
    <Component/>
    </div>
  )
}

export default Protected
