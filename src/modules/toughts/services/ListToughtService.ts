import { inject, injectable } from 'tsyringe';

import { Tought } from '../model/Tought';
import { IToughtsRepository } from '../repositories/IToughtsRepository';

interface IRequest {
  keyword?: string;
}
@injectable()
class ListToughtService {
  constructor(
    @inject('ToughtsRepository')
    private toughtsRepository: IToughtsRepository
  ) {}

  async execute({ keyword }: IRequest): Promise<Tought[]> {
    if (keyword) {
      const results = await this.toughtsRepository.findByKeyword(keyword);
      return results;
    }

    const results = await this.toughtsRepository.getAllToughts();
    return results;
  }
}

export { ListToughtService };
