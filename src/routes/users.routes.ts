import { Router } from 'express';

import { UsersRepository } from '../repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';

const userRoutes = Router();
const usersRepository = new UsersRepository();

userRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body;
  try {
    const createUserService = new CreateUserService(usersRepository);

    createUserService.execute({ name, email, password });

    return response.status(201).send();
  } catch (error) {
    return response.status(409).json({ error: error.message });
  }
});

userRoutes.get('/', (request, response) => {
  const users = usersRepository.getAllUsers();

  return response.status(200).json(users);
});

export { userRoutes };
