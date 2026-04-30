import { AlertEntity } from '../entities/AlertEntity';

export interface AlertsRepository {
  getAlerts(): Promise<AlertEntity[]>;
  markAsRead(id: string): Promise<void>;
}
