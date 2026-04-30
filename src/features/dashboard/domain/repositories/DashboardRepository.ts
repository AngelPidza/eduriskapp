import { StatEntity } from '../entities/StatEntity';
import { ActivityEntity } from '../entities/ActivityEntity';

export interface DashboardRepository {
  getStats(): Promise<StatEntity[]>;
  getRecentActivities(): Promise<ActivityEntity[]>;
}
