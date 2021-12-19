import { User } from '../models/User';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email, password }: ICreateUserDTO): User {
    const user = new User();

    if (this.findByEmail(email)) throw new Error(`User already exists`);

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
