import { create } from "zustand";
import { StudentGradeEntity } from "../../domain/entities/StudentGradeEntity";
import { RegistroRepositoryImpl } from "../../data/repositories/RegistroRepositoryImpl";
import { GetGradesUseCase } from "../../domain/usecases/GetGradesUseCase";

interface RegistroState {
 grades: StudentGradeEntity[];
 isLoading: boolean;
 error: string | null;
 fetchGrades: () => Promise<void>;
}

const registroRepository = new RegistroRepositoryImpl();
const getGradesUseCase = new GetGradesUseCase(registroRepository);

export const useRegistroStore = create<RegistroState>((set) => ({
 grades: [],
 isLoading: false,
 error: null,
 fetchGrades: async () => {
  set({ isLoading: true, error: null });
  try {
   const grades = await getGradesUseCase.execute();
   set({ grades, isLoading: false });
  } catch (err) {
   set({
    error:
     err instanceof Error ? err.message : "Error al cargar calificaciones",
    isLoading: false,
   });
  }
 },
}));
