import { UsersRepository } from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  execute({ name, email, password }: IRequest): void {
    if (this.usersRepository.findByEmail(email))
      throw new Error(`User already exists`);

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserService };
