import { MoviesPage } from "@/pagesComponents/Movies/component";

export const revalidate = 60;

export default function Home({ searchParams }) {
  return <MoviesPage cinemaId={searchParams.cinemaId} />;
}
