import { Tought } from '../model/Tought';
import { ICreateToughtDTO, IToughtsRepository } from './IToughtsRepository';

class ToughtsRepository implements IToughtsRepository {
  private toughts: Tought[];

  private static INSTANCE: ToughtsRepository;

  constructor() {
    this.toughts = [];
  }

  public static getInstance(): ToughtsRepository {
    if (!ToughtsRepository.INSTANCE) {
      ToughtsRepository.INSTANCE = new ToughtsRepository();
    }
    return ToughtsRepository.INSTANCE;
  }

  create({ message }: ICreateToughtDTO): Tought {
    const tought = new Tought();

    Object.assign(tought, {
      message,
      created_at: new Date(),
    });

    this.toughts.push(tought);

    return tought;
  }

  getAllToughts(): Tought[] {
    return this.toughts;
  }

  findByKeyword(keyword: string): Tought[] {
    const regex = new RegExp(keyword);

    const filteredToughts = this.toughts.filter((tought) => {
      return !!tought.message.split(' ').filter((word) => {
        return !!word.toLocaleLowerCase().match(regex);
      }).length;
    });

    return filteredToughts;
  }
}

export { ToughtsRepository };
