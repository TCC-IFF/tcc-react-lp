import {
  Movie,
  ReviewSectionPreLoadSize,
  TmdbResponse,
} from "../../domains/types/tmdb";

export const getPlayingMoviesData = async (): Promise<TmdbResponse> => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1&region=BR";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getUpcomingMoviesData = async (): Promise<TmdbResponse> => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=pt-br&page=1&region=BR";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getPopularMoviesData = async (): Promise<Movie[]> => {
  const totalPages = ReviewSectionPreLoadSize.SMALL;
  const list: Movie[] = [];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  for (let i = 1; i <= totalPages; i++) {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${i}`;
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: TmdbResponse = await res.json();

    list.push(...data.results);
  }

  return list;
};
