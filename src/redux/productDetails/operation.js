import { createAsyncThunk } from "@reduxjs/toolkit";
import { reguestProductDetailsById } from "../../serveses/api";

export const apiRequestProductDetailsById = createAsyncThunk(
    'productDetails/get', 
    async (productId, thunkApi) => {
        try{
            const data = await reguestProductDetailsById(productId);
            return data
        }catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)