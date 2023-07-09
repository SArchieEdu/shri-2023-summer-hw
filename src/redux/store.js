import { configureStore } from "@reduxjs/toolkit";
import { cinemaApi } from "@/redux/services/cinemaApi";
import { movieApi } from "@/redux/services/movieApi";
import { reviewApi } from "@/redux/services/reviewApi";
import { cartSlice } from "@/redux/features/cart";

export const store = configureStore({
  reducer: {
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cinemaApi.middleware,
      movieApi.middleware,
      reviewApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});
