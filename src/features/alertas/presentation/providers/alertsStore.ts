import { create } from "zustand";
import { AlertEntity } from "../../domain/entities/AlertEntity";
import { AlertsRepositoryImpl } from "../../data/repositories/AlertsRepositoryImpl";
import { GetAlertsUseCase } from "../../domain/usecases/GetAlertsUseCase";

interface AlertsState {
 alerts: AlertEntity[];
 isLoading: boolean;
 error: string | null;
 fetchAlerts: () => Promise<void>;
 markAsRead: (id: string) => Promise<void>;
}

const alertsRepository = new AlertsRepositoryImpl();
const getAlertsUseCase = new GetAlertsUseCase(alertsRepository);

export const useAlertsStore = create<AlertsState>((set, get) => ({
 alerts: [],
 isLoading: false,
 error: null,
 fetchAlerts: async () => {
  set({ isLoading: true, error: null });
  try {
   const alerts = await getAlertsUseCase.execute();
   set({ alerts, isLoading: false });
  } catch (err) {
   set({
    error: err instanceof Error ? err.message : "Error al cargar alertas",
    isLoading: false,
   });
  }
 },
 markAsRead: async (id: string) => {
  await alertsRepository.markAsRead(id);
  const alerts = get().alerts.map((alert) =>
   alert.id === id ? { ...alert, isRead: true } : alert,
  );
  set({ alerts });
 },
}));
