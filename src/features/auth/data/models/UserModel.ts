import { UserEntity } from '../../domain/entities/UserEntity';

export interface UserModel {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
  created_at: string;
}

export function toUserEntity(model: UserModel): UserEntity {
  return {
    id: model.id,
    email: model.email,
    name: model.name,
    role: model.role as UserEntity['role'],
    avatar: model.avatar,
    createdAt: new Date(model.created_at),
  };
}
