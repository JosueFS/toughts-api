import { inject, injectable } from 'tsyringe';

import { IStorageProvider } from '../../../shared/container/providers/StorageProvider/IStorageProvider';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  url: string;
}
@injectable()
class UploadUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ id, url }: IRequest) {
    const user = await this.usersRepository.findById(id);

    if (user.avatar_url) {
      await this.storageProvider.delete(user.avatar_url, 'avatar');
    }

    await this.storageProvider.save(url, 'avatar');

    await this.usersRepository.addAvatarUrl({ id, url });
  }
}

export { UploadUserAvatarService };
