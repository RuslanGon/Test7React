import { createAsyncThunk } from "@reduxjs/toolkit";
import { reguestProductDetailsById, reguestProducts } from "../../serveses/api";

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


export const apiGetProducts = createAsyncThunk(
    'products/getAll', 
    async (_, thunkApi) => {
        try{
            const data = await reguestProducts();
            return data
        }catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)