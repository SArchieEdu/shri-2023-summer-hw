import { Movies } from "@/components/Movies/components";
import { fetchMovies } from "@/services/api";
import React from "react";

export async function MoviesContainer({ cinemaId }) {
  const movies = await fetchMovies(cinemaId);
  return <Movies movies={movies} />;
}
