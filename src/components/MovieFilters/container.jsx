import { MovieFilters } from "@/components/MovieFilters/component";
import { fetchCinemas } from "@/services/api";
import React from "react";

export async function MovieFiltersContainer() {
  const cinemas = await fetchCinemas();

  return <MovieFilters cinemas={cinemas} />;
}
