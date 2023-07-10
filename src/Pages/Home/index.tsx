import {
  Header,
  Navbar,
  Newsletter,
  Playing,
  Upcoming,
} from "../../components/home";
import { useLayoutEffect, useState } from "react";
import {
  getPlayingMoviesData,
  getPopularMoviesData,
  getUpcomingMoviesData,
} from "../../requests/getTmdb";
import { Movie, TmdbResponse } from "../../domains/types/tmdb";
import { Reviews } from "../../components/home/Reviews";

export const Home = () => {
  const [playingMoviesData, setPlayingMoviesData] = useState<TmdbResponse>();
  const [upcomingMoviesData, setUpcomingMoviesData] = useState<TmdbResponse>();
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>();

  useLayoutEffect(() => {
    const fetchMoviesData = async () => {
      const playingData = await getPlayingMoviesData();
      setPlayingMoviesData(playingData);

      const upcomingData = await getUpcomingMoviesData();
      setUpcomingMoviesData(upcomingData);

      const popularData = await getPopularMoviesData();
      setPopularMoviesData(popularData);
    };
    fetchMoviesData();
  }, []);

  return playingMoviesData && upcomingMoviesData && popularMoviesData ? (
    <div className=" flex-col inline-block w-full h-screen bg-slate-900">
      <Navbar />
      <Header />
      <Playing playingMovies={playingMoviesData.results} />
      <Upcoming upcomingMovies={upcomingMoviesData.results} />
      <Reviews popularMovies={popularMoviesData} />
      <Newsletter />
    </div>
  ) : null;
};
