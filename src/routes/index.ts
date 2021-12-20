import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { toughtsRoutes } from './toughts.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/tought', toughtsRoutes);
routes.use(authRoutes);

export { routes };
