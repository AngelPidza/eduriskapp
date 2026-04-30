import { create } from "zustand";
import { CourseEntity } from "../../domain/entities/CourseEntity";
import { CoursesRepositoryImpl } from "../../data/repositories/CoursesRepositoryImpl";
import { GetCoursesUseCase } from "../../domain/usecases/GetCoursesUseCase";

interface CoursesState {
 courses: CourseEntity[];
 isLoading: boolean;
 error: string | null;
 fetchCourses: () => Promise<void>;
}

const coursesRepository = new CoursesRepositoryImpl();
const getCoursesUseCase = new GetCoursesUseCase(coursesRepository);

export const useCoursesStore = create<CoursesState>((set) => ({
 courses: [],
 isLoading: false,
 error: null,
 fetchCourses: async () => {
  set({ isLoading: true, error: null });
  try {
   const courses = await getCoursesUseCase.execute();
   set({ courses, isLoading: false });
  } catch (err) {
   set({
    error: err instanceof Error ? err.message : "Error al cargar cursos",
    isLoading: false,
   });
  }
 },
}));
