import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/book-bus.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { bookbus } from "../services/reducers/bookingreducer";
import Seatdata from "../seat.json"
import { Navigate, useNavigate } from "react-router-dom";



// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// // import { icon } from '@fortawesome/fontawesome-svg-core';

const Bookbus = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seat, setSeat] = useState("");
  const [seatdata, setSeatdata] = useState([
    { "id": 1, "number": 1, "isAvailable": "true" },
    { "id": 2, "number": 2, "isAvailable": "true" },
    { "id": 3, "number": 3, "isAvailable": "false" },
    { "id": 4, "number": 4, "isAvailable": "true" },
    { "id": 5, "number": 5, "isAvailable": "true" },
    { "id": 6, "number": 6, "isAvailable": "false" },
    { "id": 7, "number": 7, "isAvailable": "true" },
    { "id": 8, "number": 8, "isAvailable": "true" },
    { "id": 9, "number": 9, "isAvailable": "true" },
    { "id": 10, "number": 10, "isAvailable": "true" },
    { "id": 11, "number": 11, "isAvailable": "true" },
    { "id": 12, "number": 12, "isAvailable": "true" },
    { "id": 13, "number": 13, "isAvailable": "true" },
    { "id": 14, "number": 14, "isAvailable": "true" },
    { "id": 15, "number": 15, "isAvailable": "true" },
    { "id": 16, "number": 16, "isAvailable": "true" },
    { "id": 17, "number": 17, "isAvailable": "true" },
    { "id": 18, "number": 18, "isAvailable": "true" },
    { "id": 19, "number": 19, "isAvailable": "true" },
    { "id": 20, "number": 20, "isAvailable": "true" }
  ]);
  const [bookseatnumber,setBookseatnumber]=useState([])
  const navigate=useNavigate()

  const dispatch=useDispatch()

  const booking=useSelector(state=>state)
 
  const city = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Gandhinagar",
    "Junagadh",
    "Gandhidham",
    "Anand",
    "Navsari",
    "Morbi",
    "Nadiad",
    "Surendranagar",
    "Bharuch",
    "Mehsana",
    "Bhuj",
    "Porbandar",
    "Palanpur",
    "Valsad",
    "Vapi",
    "Gondal",
    "Veraval",
    "Godhra",
    "Patan",
    "Kalol",
    "Dahod",
    "Botad",
    "Amreli",
    "Deesa",
    "Jetpur",
  ];
  // useEffect(()=>{
  //   // console.log(seatdata)
  //   // setSeatdata([...seatdata,seatdata[5].isAvailable="true"])
  //   console.log(seatdata)
  //   console.log(bookseatnumber)

  // },)

  const handlebooking = (e) => {
    e.preventDefault();
    if (from == "" || to == "" || seat == ""|| bookseatnumber==[]) {
      
      toast.error("Please Enter Data in All The Fields and Select bus seat also", { autoClose: 1600 });
    } else {
      if(from==to){
        toast.error("Please Enter Valid Destination", { autoClose: 1600 })
      }
      else if (seat < 1) {
        toast.error("Please Enter Valid Number of Seat", { autoClose: 1700 });
      } else if(bookseatnumber.length!=seat){
        toast.error(`Please select ${seat} seats`, { autoClose: 1600 });
      }
      
      
      else {
        dispatch(bookbus({from:from,to:to,seats:seat,bookedseatno:bookseatnumber}))
        navigate("/bookedseatdata")
       
      }
    }
  };



  const handleseat=(val)=>{
     if(seatdata[val].isAvailable=="true"){
    const updatedseat=[...seatdata] 
    updatedseat[val].isAvailable="selected"
    setSeatdata(updatedseat)
    setBookseatnumber([...bookseatnumber,val+1]
      )

  }
}

const handledeselectseat=(val)=>{
  if(seatdata[val].isAvailable=="selected"){
  const updatedseat=[...seatdata]
  updatedseat[val].isAvailable="true"
  setSeatdata(updatedseat)
  setBookseatnumber(bookseatnumber.filter((seat)=>seat!==val+1))
  }

}



  return (
    <div className="book-main container p-5 mt-2 ">

      <form onSubmit={handlebooking}>
        <label htmlFor="from">From</label>
        <br></br>
      
        <select>
          <option disabled selected className=" text-secondary">
            From
          </option>
          {city.map((value, index) => (
            <option
              key={index}
              onClick={(e) => setFrom(e.target.value)}
              value={value}
              
            >
              {value}
            </option>
          ))}
        </select>
        <br></br>
        <label htmlFor="to">To</label>
        <br></br>
        <select>
          <option disabled selected className=" text-secondary">
            To
          </option>
          {city.map((value, index) => (
            <option
              key={index}
              onClick={(e) => setTo(e.target.value)}
              value={value}
              on
            >
              {value}
            </option>
          ))}
        </select>
        <br></br>
        <label htmlFor="seat">How Many Seat</label>
        <br></br>
        <input
          type="number"
          name="seat"
          placeholder="How Many Seat"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
        ></input>
        <br></br>
        
      
        <>
        <h3 className="mt-3 text-center">Select Seat</h3><hr/>
        <div className="d-flex gap-3 mt-4 mb-4">
        <p className="sampleseat "><span className="span notavailable rounded p-2"> Not Available</span></p>
        <p className="sampleseat "><span className="span available rounded p-2">Available</span></p>
        <p className="sampleseat "><span className="span selected rounded p-2">Selected</span></p>
        </div>
<div className="bus-seats">
  {
    seatdata.map((val,index)=>(

      <p className={val.isAvailable=="false"?("notavailable") :val.isAvailable=="true"?("available"):("selected")} key={val.id} onClick={()=>{val.isAvailable=="true" ? handleseat(index): handledeselectseat(index)}}>{val.number}</p>
    ))
  }
</div>

        
        </>
        <div>
          <button className="book-btn">Book Seat</button>
        </div>
      </form>
 
    </div>
  );
};

export default Bookbus;
