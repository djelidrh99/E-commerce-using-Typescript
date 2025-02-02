import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";

interface IFormData {
    email:string;
    password:string


}

interface ISigniIn {
  accessToken?:string;
  user:{
    email:string;
    password:string
    firstName:string;
    lastName:string
    id:number

  }  
  
}


export const postSigniInThunk = createAsyncThunk("auth/postSigniInThunk",
    async (formData :IFormData,thunkApi)=>{
        const {rejectWithValue}= thunkApi

        try {
            const res = await axios.post<ISigniIn>("/signin",formData)

            console.log(res.data)
            return res.data


            
        } catch (error) { 
            return rejectWithValue(isAxiosErrorHandler(error))
        }

})