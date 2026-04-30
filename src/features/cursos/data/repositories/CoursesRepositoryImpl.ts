import { CoursesRepository } from '../../domain/repositories/CoursesRepository';
import { CourseEntity } from '../../domain/entities/CourseEntity';

export class CoursesRepositoryImpl implements CoursesRepository {
  async getCourses(): Promise<CourseEntity[]> {
    return [
      {
        id: '1',
        name: 'Matemáticas',
        teacher: 'Prof. García',
        progress: 75,
        grade: 8.5,
        schedule: 'Lun-Mié 10:00-11:30',
      },
      {
        id: '2',
        name: 'Historia',
        teacher: 'Prof. López',
        progress: 60,
        grade: 9.0,
        schedule: 'Mar-Jue 09:00-10:30',
      },
      {
        id: '3',
        name: 'Ciencias',
        teacher: 'Prof. Martínez',
        progress: 45,
        schedule: 'Vie 14:00-16:00',
      },
    ];
  }

  async getCourseById(id: string): Promise<CourseEntity | null> {
    const courses = await this.getCourses();
    return courses.find((c) => c.id === id) || null;
  }
}
