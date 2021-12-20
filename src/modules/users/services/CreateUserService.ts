import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { getAvatarWithInitials } from '../../../utils/Functions';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error(`User already exists`);

    const passwordHash = await hash(password, 8);

    const avatar_url = getAvatarWithInitials(name);

    this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      avatar_url,
    });
  }
}

export { CreateUserService };
