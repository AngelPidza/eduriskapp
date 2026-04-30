import { UserEntity } from '../entities/UserEntity';

export interface AuthRepository {
  login(email: string, password: string): Promise<UserEntity>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<UserEntity | null>;
  isAuthenticated(): Promise<boolean>;
}
