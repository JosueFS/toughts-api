import { User } from '../model/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IAddAvatarURLDTO {
  email: string;
  url: string;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): void;
  getAllUsers(): User[];
  findByEmail(email: string): User;
  addAvatarUrl({ email, url }: IAddAvatarURLDTO): void;
}

export { IUsersRepository, ICreateUserDTO, IAddAvatarURLDTO };
