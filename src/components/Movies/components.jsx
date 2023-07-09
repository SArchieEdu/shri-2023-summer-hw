"use client";

import React from "react";
import { MovieCard } from "../MovieCard/components";

import styles from "./styles.module.scss";
import { useGetMoviesByCinemaQuery } from "@/redux/services/movieApi";
import { useSearchParams } from "next/navigation";

export const Movies = ({ movies }) => {
  const searchParams = useSearchParams();

  if (!movies?.length) {
    return null;
  }

  const filterMovie = ({ title, genre }) => {
    const searchTitle = searchParams.get("title");
    const searchGenre = searchParams.get("genre");
    return (
      (!searchTitle ||
        title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1) &&
      (!searchGenre || genre === searchGenre)
    );
  };

  return (
    <div className={styles.root}>
      {movies.filter(filterMovie).map((movie) => (
        <MovieCard key={movie.id} movie={movie} className={styles.movie} />
      ))}
    </div>
  );
};
