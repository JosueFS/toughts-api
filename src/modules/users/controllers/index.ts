import { UsersRepository } from '../repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';
import { ListUserService } from '../services/ListUserService';
import { UploadUserAvatarService } from '../services/UploadUserAvatarService';
import { CreateUserController } from './CreateUserController';
import { ListUserController } from './ListUserController';
import { UploadUserAvatarController } from './UploadUserAvatarController';

const usersRepository = UsersRepository.getInstance();

const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

const listUserService = new ListUserService(usersRepository);
const listUserController = new ListUserController(listUserService);

const uploadUserAvatarService = new UploadUserAvatarService(usersRepository);
const uploadUserAvatarController = new UploadUserAvatarController(
  uploadUserAvatarService
);

export { createUserController, listUserController, uploadUserAvatarController };
