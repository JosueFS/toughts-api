import { getRepository, Like, Repository } from 'typeorm';

import { Tought } from '../model/Tought';
import { ICreateToughtDTO, IToughtsRepository } from './IToughtsRepository';

class ToughtsRepository implements IToughtsRepository {
  private repository: Repository<Tought>;

  constructor() {
    this.repository = getRepository(Tought);
  }

  async create({ message }: ICreateToughtDTO): Promise<void> {
    const tought = this.repository.create({
      message,
    });

    await this.repository.save(tought);
  }

  async getAllToughts(): Promise<Tought[]> {
    const toughts = await this.repository.find();

    return toughts;
  }

  async findByKeyword(keyword: string): Promise<Tought[]> {
    const regex = new RegExp(keyword);

    // const filteredToughts = this.toughts.filter((tought) => {
    //   return !!tought.message.split(' ').filter((word) => {
    //     return !!word.toLocaleLowerCase().match(regex);
    //   }).length;
    // });

    const filteredToughts = await this.repository.find({
      message: Like(`${regex}`),
    });

    return filteredToughts;
  }
}

export { ToughtsRepository };
