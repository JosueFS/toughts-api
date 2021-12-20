import { User } from '../model/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  avatar_url: string;
  password: string;
}

interface IAddAvatarURLDTO {
  id: string;
  url: string;
}

interface IUsersRepository {
  create({ name, email, password, avatar_url }: ICreateUserDTO): Promise<void>;
  getAllUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  addAvatarUrl({ id, url }: IAddAvatarURLDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO, IAddAvatarURLDTO };
