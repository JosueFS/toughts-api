import { User } from '../model/User';
import {
  ICreateUserDTO,
  IAddAvatarURLDTO,
  IUsersRepository,
} from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  addAvatarUrl({ email, url }: IAddAvatarURLDTO): void {
    const userIndex = this.users.findIndex((user) => user.email === email);

    if (userIndex < 0) throw new Error('User not found');

    this.users[userIndex].avatar_url = url;
  }

  create({ name, email, password }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      created_at: new Date().toISOString(),
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
