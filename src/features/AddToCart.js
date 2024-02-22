import { createSlice } from "@reduxjs/toolkit";

// Get cart from localStorage or initialize as an empty array
const initialValue = JSON.parse(localStorage.getItem("cart")) || [];

const cartValue = JSON.parse(localStorage.getItem("CartValue")) || 0;

export const cartSlice = createSlice({
  initialState: {
    value: cartValue,
    cartArray: initialValue,
    cartTotal: 0,
  },
  name: "cart",
  reducers: {
    addToCart: (state) => {
      state.value += 1;
      localStorage.setItem("CartValue", JSON.stringify(state.value));
    },

    showCart: (state, action) => {
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        thumbnail: action.payload.thumbnail,
        quantity: 1,
        addToCart: true,
      };

      const existingItemIndex = Array.isArray(state.cartArray)
        ? state.cartArray.findIndex(({ id }) => id === action.payload.id)
        : -1;

      if (existingItemIndex !== -1) {
        state.cartArray[existingItemIndex].quantity++;
      } else {
        state.cartArray.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartArray));
    },

    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartArray.find((item) => item.id === id);

      if (existingItem !== -1) {
      }
      if (quantity > 0) {
        state.cartArray[existingItem].quantity = quantity;
      } else {
        state.cartArray.splice(existingItem, 1);

      }
    },

    removeFromCart: (state, action) => {
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cartArray));
    },
  },
});

export const { addToCart, showCart, changeQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
