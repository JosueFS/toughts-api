import { Tought } from '../model/Tought';

interface ICreateToughtDTO {
  message: string;
}

interface IToughtsRepository {
  create({ message }: ICreateToughtDTO): void;
  getAllToughts(): Tought[];
  findByKeyword(keyword: string): Tought[];
}

export { IToughtsRepository, ICreateToughtDTO };
