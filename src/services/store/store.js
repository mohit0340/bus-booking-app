import { configureStore } from "@reduxjs/toolkit";
import bookingreducer from "../reducers/bookingreducer";


export const Store=configureStore({
    reducer:{

        booking:bookingreducer,

    },
    devTools:true
})


 