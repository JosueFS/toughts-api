import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  file: Express.Multer.File;
}
@injectable()
class UploadUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, file }: IRequest) {
    const url = file.path;
    await this.usersRepository.addAvatarUrl({ id, url });
  }
}

export { UploadUserAvatarService };
