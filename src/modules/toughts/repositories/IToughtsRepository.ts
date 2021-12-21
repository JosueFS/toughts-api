import { User } from '../../users/model/User';
import { Tought } from '../model/Tought';

interface ICreateToughtDTO {
  author: User;
  message: string;
}

interface IToughtsRepository {
  create({ author, message }: ICreateToughtDTO): Promise<void>;
  getAllToughts(): Promise<Tought[]>;
  findByKeyword(keyword: string): Promise<Tought[]>;
}

export { IToughtsRepository, ICreateToughtDTO };
