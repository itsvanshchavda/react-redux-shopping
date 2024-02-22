import { createSlice } from "@reduxjs/toolkit";

const initialLikes = JSON.parse(localStorage.getItem("likes")) || {};

const initialLikedProducts =
  JSON.parse(localStorage.getItem("likedProducts")) || [];

export const likeSlice = createSlice({
  initialState: {
    likes: initialLikes,
    likedProducts: initialLikedProducts,
    color: "white",
  },
  name: "like",
  reducers: {
    addLike: (state, action) => {
      const { productId, title, price, thumbnail } = action.payload;
      state.likes[productId] = (state.likes[productId] || 0) + 1;
      state.color = "red";
      console.log("Adding like:", productId, title, price, thumbnail);

      if (!state.likedProducts.find((item) => item.id === productId)) {
        const newItem = {
          id: productId,
          title: title, 
          price: price, 
          thumbnail: thumbnail, 
        };
        state.likedProducts.push(newItem);
        localStorage.setItem(
          "likedProducts",
          JSON.stringify(state.likedProducts)
        );
      }

      localStorage.setItem("likes", JSON.stringify(state.likes));
    },

    removeLike: (state, action) => {
      const { productId } = action.payload;
      delete state.likes[productId];
      state.color = "white";
      state.likedProducts = state.likedProducts.filter(
        (item) => item.id !== productId
      );

      localStorage.setItem("likes", JSON.stringify(state.likes));
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(state.likedProducts)
      );
    },

    showProducts: (state, action) => {
      const { productId, title, price, thumbnail } = action.payload;
      console.log("Adding like:", productId, title, price, thumbnail);

      if (state.likes[productId] > 0) {
        const existingProduct = state.likedProducts.find(
          (item) => item.id === productId
        );
        if (!existingProduct) {
          const newItem = {
            id: productId,
            title: title,
            price: price,
            thumbnail: thumbnail,
          };
          state.likedProducts.push(newItem);
        }
      } else {
        state.likedProducts = state.likedProducts.filter(
          (item) => item.id !== productId
        );
      }

      localStorage.setItem(
        "likedProducts",
        JSON.stringify(state.likedProducts)
      );
    },
  },
});

export const { addLike, removeLike, showProducts } = likeSlice.actions;

export default likeSlice.reducer;
