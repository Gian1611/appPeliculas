import {Pelicula} from '../entities/Pelicula';

export interface PeliculaRepository {
  getPopularMovies(): Promise<Pelicula[]>;
  getUpcomingMovies(): Promise<Pelicula[]>;
  getTopRatedMovies(): Promise<Pelicula[]>;
  getPeliculaById(id: number): Promise<Pelicula>;
}
