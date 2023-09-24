import React from 'react'
import Err from "../assets/err.gif"

const Error = () => {
  return (
    <div className=''>
      <h2 className='text-center'>Page Not Found</h2>

      <img src={`${Err}`} className='d-flex justify-content-center flex-column align-center' ></img>

    </div>
  )
}

export default Error;
