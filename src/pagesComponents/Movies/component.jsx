import React from "react";

import styles from "./styles.module.scss";
import { MovieFiltersContainer } from "@/components/MovieFilters/container";
import { MoviesContainer } from "@/components/Movies/container";

export const MoviesPage = ({ cinemaId }) => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <MovieFiltersContainer className={styles.filters} />
      </div>

      <MoviesContainer cinemaId={cinemaId} />
    </div>
  );
};
