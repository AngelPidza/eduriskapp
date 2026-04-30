export interface StudentGradeEntity {
  id: string;
  course: string;
  assignment: string;
  grade: number;
  maxGrade: number;
  date: Date;
  teacher: string;
}
