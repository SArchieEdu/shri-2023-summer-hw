"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useDebouncedCallback } from "use-debounce";
import { Select } from "@/components/Select/components";
import { MOVIE_GENRE, MOVIE_GENRES } from "@/constants/movie";
import { Input } from "@/components/Input/component";

export const MovieFilters = ({ cinemas, className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSearchChange = useCallback(
    (name, value = "") => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );

  const onInputChangeChange = useDebouncedCallback(onSearchChange, 1000);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.filter}>
        <label className={styles.filterLabel} htmlFor="title">
          Название
        </label>
        <Input
          defaultValue={searchParams.get("title")}
          onChange={(event) => onInputChangeChange("title", event.target.value)}
          type="text"
          name="title"
          id="title"
          className={styles.field}
        />
      </div>
      <div className={styles.filter}>
        <label className={styles.filterLabel} htmlFor="genre">
          Жанр
        </label>
        <Select
          defaultValue={searchParams.get("genre")}
          onChange={(key) => onSearchChange("genre", key)}
          options={MOVIE_GENRES.map((genre) => ({
            key: genre,
            title: MOVIE_GENRE[genre],
          }))}
          placeHolder="Выберите жанр"
        />
      </div>
      {cinemas?.length && (
        <div className={styles.filter}>
          <label className={styles.filterLabel} htmlFor="cinemaId">
            Название кинотеатра
          </label>
          <Select
            defaultValue={searchParams.get("cinemaId")}
            onChange={(key) => onSearchChange("cinemaId", key)}
            options={cinemas.map(({ id, name }) => ({ key: id, title: name }))}
            placeHolder="Выберите кинотеатр"
          />
        </div>
      )}
    </div>
  );
};
