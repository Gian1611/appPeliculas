import {Pelicula} from '../../Domain/entities/Pelicula';
import {PeliculaRepository} from '../../Domain/repositories/peliculaRepository.interface';
import {Peliculamapper} from '../mappers/pelicula.mapper';
import {tmdbApi} from '../Sources/Remote/api/tmdbApi2';
import {Peliculas, TmdbAPIPelicula} from '../Sources/Remote/interface/Pelicula';

const apiKey: string = '02dca1c2818d1a7480ae567a882021d7';

export class PeiculaRepositoryImpl implements PeliculaRepository {
  getPeliculaById = async (id: number): Promise<Pelicula> => {
    try {
      const url = `/movie/${id}?language=es-ES&api_key=${apiKey}`;
      const {data} = await tmdbApi.get<TmdbAPIPelicula>(url);
      const pelicula = Peliculamapper.tmdbApitopeliculaEntity(data);
      return pelicula;
    } catch (error) {
      console.log('error: ', error);
      throw new Error('Error obteniendo las peliculas');
    }
  };

  getPopularMovies = async (): Promise<Pelicula[]> => {
    try {
      const url = `/movie/popular?language=es-ES&api_key=${apiKey}`;
      const {data} = await tmdbApi.get<Peliculas>(url);

      const peliculas = data.results.map(item =>
        Peliculamapper.resulttopeliculaEntity(item),
      );

      return peliculas;
    } catch (error) {
      console.log('error: ', error);
      throw new Error('Error obteniendo las peliculas');
    }
  };

  getUpcomingMovies(): Promise<Pelicula[]> {
    throw new Error('Method not implemented.');
  }

  getTopRatedMovies(): Promise<Pelicula[]> {
    throw new Error('Method not implemented.');
  }
}