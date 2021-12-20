import { User } from '../model/User';
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository';

class PostgresUserRepository implements IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): void {
    return null;
  }
  getAllUsers(): User[] {
    return null;
  }
  findByEmail(email: string): User {
    return null;
  }
}
