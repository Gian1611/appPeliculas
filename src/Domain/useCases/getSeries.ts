import {SeriesRepositoryImpl} from '../../Data/repositories/seriesRepositoryImpl';
import {Serie} from '../entities/Series';

const {getPopularSeries} = new SeriesRepositoryImpl();

export const GetPopularSeriesUseCase = async (): Promise<Serie[]> => {
  return await getPopularSeries();
};
