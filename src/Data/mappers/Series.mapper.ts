import {Serie} from '../../Domain/entities/Series';
import {Result} from '../Sources/Remote/interface/Series';

export class seriesMapper {
  static resulttoSeriesEntity(data: Result): Serie {
    return {
      id: data.id,
      name: data.name,
      overview: data.overview,
      first_air_date: data.first_air_date,
      poster_path: data.poster_path,
      popularity: data.popularity,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };
  }
}
