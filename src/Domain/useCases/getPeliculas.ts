import {PeiculaRepositoryImpl} from '../../Data/repositories/peliculaRepository';
import { DetailPelicula } from '../entities/DetailPelicula';
import {Pelicula} from '../entities/Pelicula';

const {getPopularMovies, getTopRatedMovies, getUpcomingMovies,getDetailPelicula} =
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

export const GetDetailPeliculaUseCase =  async (id: number): Promise<DetailPelicula> => {
  return await getDetailPelicula(id);
};
