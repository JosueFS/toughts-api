import { inject, injectable } from 'tsyringe';

import { User } from '../model/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.getAllUsers();
  }
}

export { ListUserService };
