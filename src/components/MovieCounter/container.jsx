"use client";

import { Button } from "@/components/Button/components";
import { MovieCounter } from "@/components/MovieCounter/component";
import { cartSlice } from "@/redux/features/cart";
import { selectMovieAmount } from "@/redux/features/cart/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const MovieCounterContainer = ({ movieId }) => {
  const amount = useSelector((state) => selectMovieAmount(state, movieId));
  const dispatch = useDispatch();

  return (
    <MovieCounter
      amount={amount}
      decrement={() => dispatch(cartSlice.actions.decrement(movieId))}
      increment={() => dispatch(cartSlice.actions.increment(movieId))}
    />
  );
};
