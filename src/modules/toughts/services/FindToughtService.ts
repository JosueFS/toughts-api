import { Tought } from '../model/Tought';
import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  keyword: string;
}

class FindToughtService {
  constructor(private toughtsRepository: IToughtsRepository) {}

  execute({ keyword }: IRequest): Tought[] {
    return this.toughtsRepository.findByKeyword(keyword);
  }
}

export { FindToughtService };
