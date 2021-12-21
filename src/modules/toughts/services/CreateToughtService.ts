import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../users/repositories/IUsersRepository';
import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  author_id: string;
  message: string;
}
@injectable()
class CreateToughtService {
  constructor(
    @inject('ToughtsRepository')
    private toughtsRepository: IToughtsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ author_id, message }: IRequest): Promise<void> {
    if (!message.trim()) throw new Error('Cannot create a empty tought.');

    const user = await this.usersRepository.findById(author_id);

    this.toughtsRepository.create({ author: user, message });
  }
}

export { CreateToughtService };
