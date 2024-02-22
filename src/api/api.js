



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`
    })
  })
});

export const { useGetProductsQuery } = myAPI;
