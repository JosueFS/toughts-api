import { User } from '../models/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): void;
  getAllUsers(): User[];
  findByEmail(email: string): User;
}

export { IUsersRepository, ICreateUserDTO };
