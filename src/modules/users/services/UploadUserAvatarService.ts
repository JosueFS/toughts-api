import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  file: Express.Multer.File;
}

class UploadUserAvatarService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, file }: IRequest) {
    const url = file.path;
    this.usersRepository.addAvatarUrl({ email, url });
  }
}

export { UploadUserAvatarService };
