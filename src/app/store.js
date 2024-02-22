import { configureStore } from "@reduxjs/toolkit";
import { likeSlice } from "../features/AddLike";
import { myAPI } from "../api/api";
import { cartSlice } from "../features/AddToCart";

export const store = configureStore({
    reducer: {
        like: likeSlice.reducer,
        cart: cartSlice.reducer,
        [myAPI.reducerPath]: myAPI.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myAPI.middleware), 
});
