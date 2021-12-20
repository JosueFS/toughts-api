import { Router } from 'express';

import { createUserController } from '../modules/users/controllers';
import { UsersRepository } from '../modules/users/repositories/UsersRepository';

const userRoutes = Router();
const usersRepository = new UsersRepository();

userRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.get('/', (request, response) => {
  const users = usersRepository.getAllUsers();

  return response.status(200).json(users);
});

export { userRoutes };
