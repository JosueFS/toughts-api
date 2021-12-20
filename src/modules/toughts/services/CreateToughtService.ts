import { inject, injectable } from 'tsyringe';

import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  message: string;
}
@injectable()
class CreateToughtService {
  constructor(
    @inject('ToughtsRepository')
    private toughtsRepository: IToughtsRepository
  ) {}

  async execute({ message }: IRequest): Promise<void> {
    if (!message.trim()) throw new Error('Cannot create a empty tought.');

    this.toughtsRepository.create({ message });
  }
}

export { CreateToughtService };
