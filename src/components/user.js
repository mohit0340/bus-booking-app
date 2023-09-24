import React, { useContext } from 'react'
import { Link,Outlet } from 'react-router-dom'
import { Loginprotect } from './logincontext'
import "../style/user.css"



const User = () => {
 const[isuser,setIsuser]= useContext(Loginprotect)
  return (
    <div className='user-main mt-5 container text-center'>
{isuser==""?(
  <>
     <h2 >Please Login First</h2>
     <button className='user-btn' > <Link to="login"className=' text-decoration-none text-black'>Login</Link></button>
      {/* <button><Link to="register">Register</Link></button> */}
      
      <Outlet/></>):(<div>
        <h2>Welcome {isuser.name}</h2>
      </div>) }
    </div>
  )
}

export default User
