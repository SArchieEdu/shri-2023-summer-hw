import React from "react";

import styles from "./styles.module.scss";
import { MOVIE_GENRE } from "../../constants/movie";
import classNames from "classnames";
import Image from "next/image";
import { MovieCounterContainer } from "@/components/MovieCounter/container";
import Link from "next/link";

export const MovieCard = ({ movie, className }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <Image
        className={styles.poster}
        src={movie.posterUrl || undefined}
        width="54"
        height="80"
        alt="poster"
      />
      <div className={styles.info}>
        <Link href={`/movie/${movie.id}`} className={styles.title}>
          {movie.title}
        </Link>
        <span className={styles.genre}>{MOVIE_GENRE[movie.genre]}</span>
      </div>
      <MovieCounterContainer movieId={movie.id} />
    </div>
  );
};
