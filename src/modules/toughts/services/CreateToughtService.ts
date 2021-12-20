import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  message: string;
}

class CreateToughtService {
  constructor(private toughtsRepository: IToughtsRepository) {}

  execute({ message }: IRequest): void {
    this.toughtsRepository.create({ message });
  }
}

export { CreateToughtService };
