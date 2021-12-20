import { User } from '../model/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

class ListUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    return this.usersRepository.getAllUsers();
  }
}

export { ListUserService };
