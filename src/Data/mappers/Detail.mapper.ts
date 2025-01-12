import {DetailPelicula} from '../../Domain/entities/DetailPelicula';
import {TmdbAPIPelicula} from '../Sources/Remote/interface/Pelicula';

export class DetailPeliculamapper {
  static tmdbApitoDetailpeliculaEntity(data: TmdbAPIPelicula): DetailPelicula {
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      release_date: data.release_date,
      poster_path: data.poster_path,
      generos: data.genres.map(genero => genero.name),
      runtime: data.runtime,
      popularity: data.popularity,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
      valoracion: data.valoracion,
    };
  }
}
