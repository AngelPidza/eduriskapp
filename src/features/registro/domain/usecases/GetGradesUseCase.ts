import { RegistroRepository } from '../repositories/RegistroRepository';
import { StudentGradeEntity } from '../entities/StudentGradeEntity';

export class GetGradesUseCase {
  constructor(private repository: RegistroRepository) {}

  async execute(): Promise<StudentGradeEntity[]> {
    return this.repository.getGrades();
  }
}
