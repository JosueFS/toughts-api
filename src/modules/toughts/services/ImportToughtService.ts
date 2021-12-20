import { inject, injectable } from 'tsyringe';

import { IToughtsRepository } from '../repositories/IToughtsRepository';

@injectable()
class ImportToughtService {
  constructor(
    @inject('ToughtsRepository')
    private toughtsRepository: IToughtsRepository
  ) {}

  async execute(file: Express.Multer.File): Promise<void> {
    console.log(file); // TODO: Not implemented yet
  }
}

export { ImportToughtService };
