import { MovieContainer } from "@/components/Movie/container";
import { ReviewsContainer } from "@/components/Reviews/container";
import React from "react";

export const MoviePage = ({ movieId }) => {
  return (
    <div>
      <MovieContainer movieId={movieId} />
      <ReviewsContainer movieId={movieId} />
    </div>
  );
};
