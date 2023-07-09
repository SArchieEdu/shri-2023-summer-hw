import { Movie } from "@/components/Movie/component";
import { useGetMovieQuery } from "@/redux/services/movieApi";
import { fetchMovie } from "@/services/api";
import React from "react";

export async function MovieContainer({ movieId }) {
  const movie = await fetchMovie(movieId);

  return <Movie movie={movie} />;
}
