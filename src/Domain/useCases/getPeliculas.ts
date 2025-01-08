import {PeiculaRepositoryImpl} from '../../Data/repositories/peliculaRepository';
import {Pelicula} from '../entities/Pelicula';

const {getPopularMovies, getTopRatedMovies, getUpcomingMovies} =
  new PeiculaRepositoryImpl();

export const GetPopularPeliculasUseCase = async (): Promise<Pelicula[]> => {
  return await getPopularMovies();
};

export const GetTopRatedPeliculasUseCase = async (): Promise<Pelicula[]> => {
  return await getTopRatedMovies();
};

export const GetUpcomingPeliculasUseCase = async (): Promise<Pelicula[]> => {
  return await getUpcomingMovies();
};
