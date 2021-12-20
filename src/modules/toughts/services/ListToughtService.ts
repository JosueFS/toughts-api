import { Tought } from '../model/Tought';
import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  keyword?: string;
}

class ListToughtService {
  constructor(private toughtsRepository: IToughtsRepository) {}

  execute({ keyword }: IRequest): Tought[] {
    if (keyword) {
      return this.toughtsRepository.findByKeyword(keyword);
    }
    return this.toughtsRepository.getAllToughts();
  }
}

export { ListToughtService };
