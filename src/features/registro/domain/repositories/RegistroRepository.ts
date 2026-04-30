import { StudentGradeEntity } from '../entities/StudentGradeEntity';

export interface RegistroRepository {
  getGrades(): Promise<StudentGradeEntity[]>;
  getGradesByCourse(courseId: string): Promise<StudentGradeEntity[]>;
}
