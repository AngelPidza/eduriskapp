import { DashboardRepository } from '../repositories/DashboardRepository';
import { StatEntity } from '../entities/StatEntity';
import { ActivityEntity } from '../entities/ActivityEntity';

export interface DashboardData {
  stats: StatEntity[];
  activities: ActivityEntity[];
}

export class GetDashboardUseCase {
  constructor(private repository: DashboardRepository) {}

  async execute(): Promise<DashboardData> {
    const [stats, activities] = await Promise.all([
      this.repository.getStats(),
      this.repository.getRecentActivities(),
    ]);
    return { stats, activities };
  }
}
