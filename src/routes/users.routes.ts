import { Router, Request, Response } from 'express';

import { UsersRepository } from '../repositories/UsersRepository';

const userRoutes = Router();
const usersRepository = new UsersRepository();

userRoutes.post('/', (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  try {
    const user = usersRepository.create({ name, email, password });
    return response.status(201).json(user);
  } catch (error) {
    return response.status(409).json({ error: error.message });
  }
});

userRoutes.get('/', (request: Request, response: Response) => {
  const users = usersRepository.getAllUsers();

  return response.status(200).json(users);
});

export { userRoutes };

// export function createUser(request: Request, response: Response) {
//   const user = UserService.execute({
//     name: 'Josué',
//     email: 'josue.fs@jovensgenios.com',
//     password: '123456',
//   });

//   return response.json(user);
// }
