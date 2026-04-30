import { AlertsRepository } from '../repositories/AlertsRepository';
import { AlertEntity } from '../entities/AlertEntity';

export class GetAlertsUseCase {
  constructor(private repository: AlertsRepository) {}

  async execute(): Promise<AlertEntity[]> {
    return this.repository.getAlerts();
  }
}
