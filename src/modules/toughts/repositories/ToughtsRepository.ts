import { getRepository, Like, Repository } from 'typeorm';

import { Tought } from '../model/Tought';
import { ICreateToughtDTO, IToughtsRepository } from './IToughtsRepository';

class ToughtsRepository implements IToughtsRepository {
  private repository: Repository<Tought>;

  constructor() {
    this.repository = getRepository(Tought);
  }

  async create({ author, message }: ICreateToughtDTO): Promise<void> {
    const tought = this.repository.create({
      author,
      message,
    });

    await this.repository.save(tought);
  }

  async getAllToughts(): Promise<Tought[]> {
    const toughts = await this.repository.find();

    console.log(toughts[0]);

    return toughts;
  }

  async findByKeyword(keyword: string): Promise<Tought[]> {
    const regex = new RegExp(keyword);

    const filteredToughts = await this.repository.find({
      message: Like(`${regex}`),
    });

    return filteredToughts;
  }
}

export { ToughtsRepository };
