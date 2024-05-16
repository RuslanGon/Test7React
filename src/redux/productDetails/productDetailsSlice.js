import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiRequestProductDetailsById } from "./operation";

const INITIAL_STATE = {
  productDetails: null,
  isLoading: false,
  isError: false,

  products: null

};


const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => builder
    .addCase(apiRequestProductDetailsById.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(apiRequestProductDetailsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    })
    .addCase(apiRequestProductDetailsById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;

      
    })
    .addCase(apiGetProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(apiGetProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    })
    .addCase(apiGetProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true; 
      state.error = action.payload;
    })
});
  
 
  
  export const productDetailsReducer = productDetailsSlice.reducer;