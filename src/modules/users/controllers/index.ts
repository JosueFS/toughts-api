import { UsersRepository } from '../repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';
import { CreateUserController } from './CreateUserController';

const usersRepository = new UsersRepository();
const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
