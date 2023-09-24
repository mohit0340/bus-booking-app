import React, { createContext, useState } from 'react'


export const Loginprotect=createContext()


export const Logincontext = (props) => {
   const [isuser,setIsuser]=useState("")
  return (
    <Loginprotect.Provider value={[isuser,setIsuser]}>
      {props.children}
    </Loginprotect.Provider>
  )
}


