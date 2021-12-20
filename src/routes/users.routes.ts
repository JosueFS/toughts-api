import { Router } from 'express';

import {
  createUserController,
  listUserController,
} from '../modules/users/controllers';

const userRoutes = Router();

userRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.get('/', (request, response) => {
  return listUserController.handle(request, response);
});

export { userRoutes };
