import {Serie} from '../../Domain/entities/Series';
import {seriesRepository} from '../../Domain/repositories/seriesRepository.interface';
import {seriesMapper} from '../mappers/Series.mapper';
import {tmdbApi} from '../Sources/Remote/api/tmdbApi2';
import {Series} from '../Sources/Remote/interface/Series';

const apiKey: string = '02dca1c2818d1a7480ae567a882021d7';

export class SeriesRepositoryImpl implements seriesRepository {
  getPopularSeries = async (): Promise<Serie[]> => {
    try {
      const url = `/trending/tv/week?language=es-MX&api_key=${apiKey}`;
      const {data} = await tmdbApi.get<Series>(url);

      const series = data.results.map(item =>
        seriesMapper.resulttoSeriesEntity(item),
      );
      return series;
    } catch (error) {
      console.log('error: ', error);
      throw new Error('Error obteniendo las peliculas');
    }
  };
}
