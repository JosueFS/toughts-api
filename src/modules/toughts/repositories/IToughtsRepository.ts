import { Tought } from '../model/Tought';

interface ICreateToughtDTO {
  message: string;
}

interface IToughtsRepository {
  create({ message }: ICreateToughtDTO): Promise<void>;
  getAllToughts(): Promise<Tought[]>;
  findByKeyword(keyword: string): Promise<Tought[]>;
}

export { IToughtsRepository, ICreateToughtDTO };
