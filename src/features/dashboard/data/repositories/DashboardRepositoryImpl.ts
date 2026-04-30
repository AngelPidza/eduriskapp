import { DashboardRepository } from '../../domain/repositories/DashboardRepository';
import { StatEntity } from '../../domain/entities/StatEntity';
import { ActivityEntity } from '../../domain/entities/ActivityEntity';

export class DashboardRepositoryImpl implements DashboardRepository {
  async getStats(): Promise<StatEntity[]> {
    return [
      { id: '1', label: 'Promedio General', value: 8.5, unit: '', trend: 'up' },
      { id: '2', label: 'Asistencia', value: 95, unit: '%', trend: 'neutral' },
      { id: '3', label: 'Tareas Pendientes', value: 3, unit: '', trend: 'down' },
    ];
  }

  async getRecentActivities(): Promise<ActivityEntity[]> {
    return [
      {
        id: '1',
        title: 'Nueva calificación publicada',
        description: 'Matemáticas - Examen parcial',
        date: new Date(),
        type: 'grade',
        isRead: false,
      },
      {
        id: '2',
        title: 'Tarea próxima a vencer',
        description: 'Historia - Ensayo sobre Revolución',
        date: new Date(),
        type: 'assignment',
        isRead: false,
      },
    ];
  }
}
