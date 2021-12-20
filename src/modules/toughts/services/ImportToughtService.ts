import { IToughtsRepository } from '../repositories/IToughtsRepository';

class ImportToughtService {
  constructor(private toughtsRepository: IToughtsRepository) {}

  execute(file: Express.Multer.File) {
    console.log(file); // TODO: Not implemented yet
  }
}

export { ImportToughtService };
