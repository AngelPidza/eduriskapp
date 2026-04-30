import { ConfigRepository } from '../repositories/ConfigRepository';
import { ProfileEntity } from '../entities/ProfileEntity';

export class GetProfileUseCase {
  constructor(private repository: ConfigRepository) {}

  async execute(): Promise<ProfileEntity> {
    return this.repository.getProfile();
  }
}
