import {Pelicula} from '../../Domain/entities/Pelicula';
import {Result, TmdbAPIPelicula} from '../Sources/Remote/interface/Pelicula';

export class Peliculamapper {
  static tmdbApitopeliculaEntity(data: TmdbAPIPelicula): Pelicula {
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      release_date: data.release_date,
      poster_path: data.poster_path,
      //generos: data.genres.map(genero => genero.name),
      popularity: data.popularity,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };
  }
  static resulttopeliculaEntity(data: Result): Pelicula {
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      release_date: data.release_date,
      poster_path: data.poster_path,
      popularity: data.popularity,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };
  }
}