import { User } from '../models/User';
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email, password }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}

export { UsersRepository };
