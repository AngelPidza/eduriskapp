import { create } from "zustand";
import { ProfileEntity } from "../../domain/entities/ProfileEntity";
import { ConfigRepositoryImpl } from "../../data/repositories/ConfigRepositoryImpl";
import { GetProfileUseCase } from "../../domain/usecases/GetProfileUseCase";

interface ConfigState {
 profile: ProfileEntity | null;
 isLoading: boolean;
 error: string | null;
 fetchProfile: () => Promise<void>;
}

const configRepository = new ConfigRepositoryImpl();
const getProfileUseCase = new GetProfileUseCase(configRepository);

export const useConfigStore = create<ConfigState>((set) => ({
 profile: null,
 isLoading: false,
 error: null,
 fetchProfile: async () => {
  set({ isLoading: true, error: null });
  try {
   const profile = await getProfileUseCase.execute();
   set({ profile, isLoading: false });
  } catch (err) {
   set({
    error: err instanceof Error ? err.message : "Error al cargar perfil",
    isLoading: false,
   });
  }
 },
}));
