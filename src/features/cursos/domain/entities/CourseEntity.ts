export interface CourseEntity {
  id: string;
  name: string;
  teacher: string;
  progress: number;
  grade?: number;
  schedule: string;
}
