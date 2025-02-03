import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";

interface IFormData {
  firstName:string;
  lastName:string;
  email:string;
  password:string
}


export const postAuthThunk = createAsyncThunk("auth/postAuthThunk",
    async (formData:IFormData,thunkApi)=>{
        const {rejectWithValue}= thunkApi

        try {
            const res = await axios.post("/register",formData)

            return res.data


            
        } catch (error) {
            
            return rejectWithValue(isAxiosErrorHandler(error))
        }

})