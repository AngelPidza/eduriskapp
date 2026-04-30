import { ConfigRepository } from '../../domain/repositories/ConfigRepository';
import { ProfileEntity } from '../../domain/entities/ProfileEntity';

export class ConfigRepositoryImpl implements ConfigRepository {
  async getProfile(): Promise<ProfileEntity> {
    return {
      id: '1',
      name: 'Usuario Demo',
      email: 'usuario@edurisk.com',
      role: 'student',
    };
  }

  async updateProfile(profile: Partial<ProfileEntity>): Promise<void> {
    // TODO: Implement API call
  }
}
