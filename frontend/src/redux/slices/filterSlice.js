import { configureStore, createSlice } from '@reduxjs/toolkit'
const initialState = {
  categoryProduct: 0,
  sortType: {
    name: 'За популярністю',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryProduct(state, { payload }) {
      state.categoryProduct = payload
    },
    setSortProduct(state, action) {
      return {
        ...state,
        sortType: action.payload,
      }
    },
  },
})

export const { setCategoryProduct, setSortProduct } = filterSlice.actions
export default filterSlice.reducer
