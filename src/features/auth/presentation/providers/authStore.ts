import { create } from "zustand";
import { UserEntity } from "../../domain/entities/UserEntity";
import { AuthRepositoryImpl } from "../../data/repositories/AuthRepositoryImpl";
import { LoginUseCase } from "../../domain/usecases/LoginUseCase";

interface AuthState {
 user: UserEntity | null;
 isLoading: boolean;
 error: string | null;
 login: (email: string, password: string) => Promise<void>;
 logout: () => Promise<void>;
 clearError: () => void;
}

const authRepository = new AuthRepositoryImpl();
const loginUseCase = new LoginUseCase(authRepository);

export const useAuthStore = create<AuthState>((set) => ({
 user: null,
 isLoading: false,
 error: null,
 login: async (email: string, password: string) => {
  set({ isLoading: true, error: null });
  try {
   const user = await loginUseCase.execute(email, password);
   set({ user, isLoading: false });
  } catch (err) {
   set({
    error: err instanceof Error ? err.message : "Error al iniciar sesión",
    isLoading: false,
   });
  }
 },
 logout: async () => {
  await authRepository.logout();
  set({ user: null });
 },
 clearError: () => set({ error: null }),
}));
