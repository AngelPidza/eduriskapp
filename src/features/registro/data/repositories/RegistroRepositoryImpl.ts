import { RegistroRepository } from '../../domain/repositories/RegistroRepository';
import { StudentGradeEntity } from '../../domain/entities/StudentGradeEntity';

export class RegistroRepositoryImpl implements RegistroRepository {
  async getGrades(): Promise<StudentGradeEntity[]> {
    return [
      {
        id: '1',
        course: 'Matemáticas',
        assignment: 'Examen parcial',
        grade: 8.5,
        maxGrade: 10,
        date: new Date('2026-04-15'),
        teacher: 'Prof. García',
      },
      {
        id: '2',
        course: 'Historia',
        assignment: 'Ensayo',
        grade: 9.0,
        maxGrade: 10,
        date: new Date('2026-04-10'),
        teacher: 'Prof. López',
      },
    ];
  }

  async getGradesByCourse(courseId: string): Promise<StudentGradeEntity[]> {
    const grades = await this.getGrades();
    return grades.filter((g) => g.course === courseId);
  }
}
