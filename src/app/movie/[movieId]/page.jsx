import { MoviePage } from "@/pagesComponents/Movie/component";
import { fetchMovies } from "@/services/api";

export async function generateStaticParams() {
  const movies = await fetchMovies();

  return (movies || []).map(({ id }) => ({ movieId: id }));
}

export default function Movie({ params }) {
  return <MoviePage movieId={params.movieId} />;
}
