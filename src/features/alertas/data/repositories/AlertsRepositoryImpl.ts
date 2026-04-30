import { AlertsRepository } from '../../domain/repositories/AlertsRepository';
import { AlertEntity } from '../../domain/entities/AlertEntity';

export class AlertsRepositoryImpl implements AlertsRepository {
  async getAlerts(): Promise<AlertEntity[]> {
    return [
      {
        id: '1',
        title: 'Tarea próxima a vencer',
        message: 'La tarea de Matemáticas vence mañana',
        type: 'warning',
        date: new Date(),
        isRead: false,
      },
      {
        id: '2',
        title: 'Calificación publicada',
        message: 'Tu nota del examen de Ciencias ya está disponible',
        type: 'info',
        date: new Date(),
        isRead: true,
      },
    ];
  }

  async markAsRead(id: string): Promise<void> {
    // TODO: Implement API call
  }
}
