import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;

export const selectProductsByCategory = (state, category) =>
  state.shop.productList.filter((t) => t.category === category);

export const selectProductById = (state, productId) =>
  state.shop.productList.find((t) => t.id === productId);

export default productSlice.reducer;
