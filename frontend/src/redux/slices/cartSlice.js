import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  totalPrice: 0,
  responseStatus: 'pending', //oending || success || rejected
  responseMessage: '',
}
export const postProductToCart = createAsyncThunk('products/postProductToCart', async params => {
  const { products } = params
  const { data } = await axios.post(`/api/cart`, products)
  return data
})

export const getProductsCart = createAsyncThunk('products/getProductsCart', async () => {
  const { data } = await axios.get(`api/cart`)
  return data
})
export const removeProductCart = createAsyncThunk('/products/removeProductCart', async params => {
  const { id } = params
  const { data } = await axios.delete(`api/cart/${id}`)
  return data
})
export const cartItemCountPlus = createAsyncThunk(
  '/products/cartItemCountPlus',
  async ({ cartItem }) => {
    const { data } = await axios.put(`api/cart/plus/${cartItem._id}`, {
      cartItem,
    })
    return data
  },
)
export const cartItemCountMinus = createAsyncThunk(
  '/products/cartItemCountMinus',
  async ({ cartItem }) => {
    const { data } = await axios.put(`api/cart/minus/${cartItem._id}`, {
      cartItem,
    })
    return data
  },
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProductsCart.pending, state => {
      state.responseStatus = 'pending'
      state.products = []
    })
    builder.addCase(getProductsCart.fulfilled, (state, { payload }) => {
      return {
        ...state,
        products: payload,
        responseStatus: 'success',
      }
    })
    builder.addCase(getProductsCart.rejected, state => {
      state.responseStatus = 'rejected'
    })

    builder.addCase(postProductToCart.pending, (state, action) => {
      return {
        ...state,
        responseStatus: 'pending',
      }
    })
    builder.addCase(postProductToCart.fulfilled, (state, action) => {
      return {
        ...state,
        responseStatus: 'success',

        products: [...state.products, action.payload],
        responseMessage: 'Product added to cart successfully',
      }
    })
    builder.addCase(postProductToCart.rejected, (state, action) => {
      return {
        ...state,
        responseStatus: 'rejected',
      }
    })

    builder.addCase(removeProductCart.pending, (state, action) => {
      return {
        ...state,
        responseStatus: 'pending',
      }
    })
    builder.addCase(removeProductCart.fulfilled, (state, action) => {
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload._id),
        responseStatus: 'success',
        responseMessage: 'Product deleted successfully',
      }
    })
    builder.addCase(removeProductCart.rejected, (state, action) => {
      return {
        ...state,
        responseStatus: 'rejected',
        responseMessage: action.payload,
      }
    })
    builder.addCase(cartItemCountPlus.fulfilled, (state, action) => {
      return {
        ...state,
        products: state.products.map(obj =>
          obj._id === action.payload._id ? action.payload : obj,
        ),
      }
    })
    builder.addCase(cartItemCountMinus.fulfilled, (state, action) => {
      return {
        ...state,
        products: state.products.map(obj =>
          obj._id === action.payload._id ? action.payload : obj,
        ),
      }
    })
  },
})

export const {} = cartSlice.actions
export default cartSlice.reducer
