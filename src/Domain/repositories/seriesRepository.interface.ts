import {Series} from '../entities/Series';

export interface seriesRepository {
  getPopularSeries(): Promise<Series[]>;
}
