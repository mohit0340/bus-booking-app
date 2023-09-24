import React, { useState } from "react";
import "../style/register-login.css"

import { toast,ToastContainer } from "react-toastify";
import { json, Link, Navigate, useNavigate } from "react-router-dom"



const Register = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const navigate=useNavigate()



const registerdata=(e)=>{
    e.preventDefault()
    console.log(name,email,password)
    if(name==="" || email===""|| password===""){
     
        toast.error("Please Enter Data In All Fields")
    }
    else{
        console.log("jjjj")
        if(password.length < 8){
        toast.error("Password Minimum Length is 8 ",{autoClose:1600})

        }
        else{
            const localdata=JSON.parse(localStorage.getItem("register_data"))
            let arr
            if(localdata==null){
                arr=[{name:name,email:email,password:password}]
                localStorage.setItem("register_data",JSON.stringify(arr))
            }
            else{
            const arr=JSON.parse(localStorage.getItem("register_data"))


                let data={name:name,email:email,password:password}
                arr.push(data)
                localStorage.setItem("register_data",JSON.stringify(arr))
                toast.success("You Registered Successful")
                navigate("/user/login")

            }
        }
        
    }
    
}






  return (
    <div className="register-main border container p-5">
        {/* <ToastContainer></ToastContainer> */}
        {/* <h2>Register</h2> */}
      <form className="register-form w-100 row-cols-1"  >
        <label htmlFor="name">Name</label>
        <br></br>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"></input>
        <br></br>
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
        <button onClick={registerdata} >Register</button>
        <div>If You already registered? <Link to="/user/login">Login</Link> </div>
        
      </form>
    </div>
  );
};

export default Register;
