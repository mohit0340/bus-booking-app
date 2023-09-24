import React from 'react'
import { Table,Row } from 'react-bootstrap'

import { useSelector,useDispatch } from 'react-redux'
import { cancelbus } from '../services/reducers/bookingreducer'

const Bookedseatdata = () => {

const bookedseatdata=useSelector((state)=>state.booking)
const dispatch=useDispatch()

  return (
    <div>
      <h2 className='text-center mt-3 mb-3'>Booking Data</h2>
      
      {
      bookedseatdata!=[]?(
        <Table bordered hover striped draggable className=' bg-secondary text-light'>
          <tr>
            <th>From</th>
            <th>to</th>
             <th>Seat no.</th>
             <th>Seats</th>
             <th>Total</th> 
             <th>Cancel Booking</th> 

          </tr>
            {
              bookedseatdata.map((val,index)=>(
                <tr key={index}>
                <td>{val.from}</td>
                <td>{val.to}</td>
                <td>{
                val.bookedseatno.join(",")
                }</td>
                <td>{val.seats} X 250 Rs.</td>
                <td>{val.seats*250} Rs.</td>
               <td className='m-3'> <button className=' bg-light border-2 border-danger text-danger rounded-2 w-25'  style={{backgroundColor:"red"}}  onClick={()=>dispatch(cancelbus(index))}>Cancel</button></td>


                </tr>
              ))
            }
            
            <></>
         
        </Table>

      ):null
      
      }
      
    </div>
  )
}

export default Bookedseatdata
