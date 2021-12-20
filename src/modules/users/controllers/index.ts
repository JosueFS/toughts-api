import { UsersRepository } from '../repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';
import { ListUserService } from '../services/ListUserService';
import { CreateUserController } from './CreateUserController';
import { ListUserController } from './ListUserController';

const usersRepository = UsersRepository.getInstance();

const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

const listUserService = new ListUserService(usersRepository);
const listUserController = new ListUserController(listUserService);

export { createUserController, listUserController };
