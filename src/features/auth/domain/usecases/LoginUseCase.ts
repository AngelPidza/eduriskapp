import { AuthRepository } from '../repositories/AuthRepository';
import { UserEntity } from '../entities/UserEntity';

export class LoginUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(email: string, password: string): Promise<UserEntity> {
    return this.repository.login(email, password);
  }
}
