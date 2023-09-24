import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style/register-login.css"
import { useContext } from 'react'
import { Logincontext } from './logincontext'
import { toast ,ToastContainer} from 'react-toastify'
import { Loginprotect } from './logincontext'



const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[validate,setValidate]=useState(false)
   const[isuser,setIsuser]=useContext(Loginprotect)

  const navigate=useNavigate()


 const logindata=(e)=>{
  e.preventDefault()
  if(email==""|| password==""){
    toast.error("Please Enter Email and Password",{autoClose:1600})
  }
  else{
    const data=JSON.parse(localStorage.getItem("register_data"))

    const email1 =data.find((val)=>{
     return email == val.email
    })
    const password1=data.find((val)=>{
     return password == val.password
    })
   
      if(email1||password1){
       
      
        setIsuser({name:email1.name,email:email1.email,password:email1.password1})
       
        toast.success("You Loging Successfull ",{autoClose:1600})
    
            navigate("/")
    
            
        }
      
    
      
      else{
    toast.error("Please Enter Valid Email or Password",{autoClose:1600})

      }
  

  }
  

 }





  return (

    <div className="login-main border container p-5">
      {/* <ToastContainer/> */}
      <form className="login-form w-100 row-cols-1">
      <label htmlFor="email">Email</label>
        <br></br>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"></input>
        <br></br>
        <label htmlFor="password" >Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter your Password"
        ></input>
        <br></br>
        <button onClick={logindata} >Login</button>
        <div>If You Not registered? Please <Link to="/user/register">Register</Link> </div>
      </form>
    </div>

  )
}

export default Login
