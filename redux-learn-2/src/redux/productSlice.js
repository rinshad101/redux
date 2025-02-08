import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  products: [],
  status:'idle',
  erorr:null
};

export const fetchProduct = createAsyncThunk("product/fetchProduct",async()=>{
    try{
        const response = await axios.get('http://localhost:3000/product');
        console.log(response.data);
        
        return response.data;
    }catch(err){
        console.log(err);
        
    }
})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchProduct.pending , (state) => {
        state.status = "pending"
    }).addCase(fetchProduct.fulfilled , (state,action) =>{
        state.status = "fetched";
        state.products.push(action.payload);
    })
  }
});

export default productSlice.reducer;
