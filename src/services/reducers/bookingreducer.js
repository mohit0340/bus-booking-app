import { createSlice } from "@reduxjs/toolkit";

 const Bookingslice=createSlice({
    name:"booking",
    initialState:[],
    reducers:{
        bookbus:(state,action)=>{
            state.push(action.payload)
        },
        cancelbus:(state,action)=>{
            state.splice(action.payload,1)

        }

    }
    
});

export const{bookbus} = Bookingslice.actions;
export const{cancelbus}=Bookingslice.actions;

export default Bookingslice.reducer;