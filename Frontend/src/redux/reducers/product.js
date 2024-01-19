import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  products: [],
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
    state.productIds = action.payload.map(product => product._id); // Add product IDs
    state.reload = !state.reload;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  CREATE_PRODUCT: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
    state.products = [...state.products, action.payload];
  },

CREATE_PRODUCT_SUCCESS: (state, action) => {
  state.isLoading = false;
  state.product = action.payload;
  state.success = true;
  state.products = [...state.products, action.payload];
},

CREATE_PRODUCT_CLEAR_SUCCESS: (state) => {
  state.success = false;
},

CREATE_PRODUCT_FAIL: (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.success = false;
},

REMOVE_PRODUCT: (state, action) => {
    return {
      ...state,
      products: state.products.filter(product => product._id !== action.payload),
    };
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
