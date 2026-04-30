import { create } from "zustand";
import { StatEntity } from "../../domain/entities/StatEntity";
import { ActivityEntity } from "../../domain/entities/ActivityEntity";
import { DashboardRepositoryImpl } from "../../data/repositories/DashboardRepositoryImpl";
import { GetDashboardUseCase } from "../../domain/usecases/GetDashboardUseCase";

interface DashboardState {
 stats: StatEntity[];
 activities: ActivityEntity[];
 isLoading: boolean;
 error: string | null;
 fetchDashboard: () => Promise<void>;
}

const dashboardRepository = new DashboardRepositoryImpl();
const getDashboardUseCase = new GetDashboardUseCase(dashboardRepository);

export const useDashboardStore = create<DashboardState>((set) => ({
 stats: [],
 activities: [],
 isLoading: false,
 error: null,
 fetchDashboard: async () => {
  set({ isLoading: true, error: null });
  try {
   const data = await getDashboardUseCase.execute();
   set({ stats: data.stats, activities: data.activities, isLoading: false });
  } catch (err) {
   set({
    error: err instanceof Error ? err.message : "Error al cargar dashboard",
    isLoading: false,
   });
  }
 },
}));
