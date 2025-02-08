import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./ConterSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})

