import { CourseEntity } from '../entities/CourseEntity';

export interface CoursesRepository {
  getCourses(): Promise<CourseEntity[]>;
  getCourseById(id: string): Promise<CourseEntity | null>;
}
