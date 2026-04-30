import { ProfileEntity } from '../entities/ProfileEntity';

export interface ConfigRepository {
  getProfile(): Promise<ProfileEntity>;
  updateProfile(profile: Partial<ProfileEntity>): Promise<void>;
}
