import { CoursesRepository } from '../repositories/CoursesRepository';
import { CourseEntity } from '../entities/CourseEntity';

export class GetCoursesUseCase {
  constructor(private repository: CoursesRepository) {}

  async execute(): Promise<CourseEntity[]> {
    return this.repository.getCourses();
  }
}
