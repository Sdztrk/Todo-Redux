import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../store/todoSlice"

export const store = configureStore({
    reducer: todoSlice
})