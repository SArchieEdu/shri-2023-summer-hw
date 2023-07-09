import { Reviews } from "@/components/Reviews/component";
import { fetchMovieReviews } from "@/services/api";
import React from "react";

export async function ReviewsContainer({ movieId }) {
  const reviews = await fetchMovieReviews(movieId);
  return <Reviews reviews={reviews} />;
}
