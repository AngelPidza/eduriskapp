import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { UserEntity } from '../../domain/entities/UserEntity';
import { UserModel, toUserEntity } from '../../data/models/UserModel';

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<UserEntity> {
    // TODO: Implement actual API call
    const mockUser: UserModel = {
      id: '1',
      email,
      name: 'Usuario Demo',
      role: 'student',
      created_at: new Date().toISOString(),
    };
    return toUserEntity(mockUser);
  }

  async logout(): Promise<void> {
    // TODO: Implement actual logout
  }

  async getCurrentUser(): Promise<UserEntity | null> {
    // TODO: Implement actual user retrieval
    return null;
  }

  async isAuthenticated(): Promise<boolean> {
    // TODO: Implement actual auth check
    return false;
  }
}
