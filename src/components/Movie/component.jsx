import React from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { MOVIE_GENRE } from "@/constants/movie";

export const Movie = ({ movie }) => {
  if (!movie) {
    return null;
  }

  const {
    posterUrl,
    title,
    releaseYear,
    description,
    genre,
    rating,
    director,
  } = movie;

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Image
          src={posterUrl}
          className={styles.poster}
          width={305}
          height={410}
          alt="poster"
        />
        <span className={classNames(styles.info, styles.title)}>{title}</span>
        <div className={styles.additionalInfo}>
          <span className={styles.additionalInfoTitle}>Жанр:</span>
          <span className={styles.additionalInfoValue}>
            {MOVIE_GENRE[genre]}
          </span>
        </div>
        <div className={styles.additionalInfo}>
          <span className={styles.additionalInfoTitle}>Год выпуска:</span>
          <span className={styles.additionalInfoValue}>{releaseYear}</span>
        </div>
        <div className={styles.additionalInfo}>
          <span className={styles.additionalInfoTitle}>Рейтинг:</span>
          <span className={styles.additionalInfoValue}>{rating}</span>
        </div>
        <div className={styles.additionalInfo}>
          <span className={styles.additionalInfoTitle}>Режиссер:</span>
          <span className={styles.additionalInfoValue}>{director}</span>
        </div>
        <div className={styles.description}>
          <span className={styles.descriptionTitle}>Описание</span>
          <span className={styles.descriptionValue}>{description}</span>
        </div>
      </div>
    </div>
  );
};
