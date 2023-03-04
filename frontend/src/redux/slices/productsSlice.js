import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  status: 'loading', //loading || succes || error
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async params => {
  const { categoryProduct, sortType } = params
  const { data } = await axios.get(
    `api/products?category=${categoryProduct}&sort=${sortType.property},asc`,
  )
  return data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = 'loading'
      state.products = []
    })
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.products = payload
    })
    builder.addCase(fetchProducts.rejected, state => {
      state.status = 'error'
      state.products = []
    })
  },
})

export const {} = productsSlice.actions
export default productsSlice.reducer
