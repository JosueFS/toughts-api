import { getRepository, Repository } from 'typeorm';

import { User } from '../model/User';
import {
  ICreateUserDTO,
  IAddAvatarURLDTO,
  IUsersRepository,
} from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }

  async addAvatarUrl({ id, url }: IAddAvatarURLDTO): Promise<void> {
    const user = await this.repository.findOne({ id });

    if (!user) throw new Error('User not found');

    user.avatar_url = url;

    await this.repository.save(user);
  }

  async create({
    name,
    email,
    avatar_url,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      avatar_url,
    });

    await this.repository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
