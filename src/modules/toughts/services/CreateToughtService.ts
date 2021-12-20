import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  message: string;
}

class CreateToughtService {
  constructor(private toughtsRepository: IToughtsRepository) {}

  execute({ message }: IRequest): void {
    if (!message.trim()) throw new Error('Cannot create a empty tought.');

    this.toughtsRepository.create({ message });
  }
}

export { CreateToughtService };
