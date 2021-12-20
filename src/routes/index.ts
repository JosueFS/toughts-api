import { Router } from 'express';

import { toughtRoutes } from './toughts.routes';
import { userRoutes } from './users.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/tought', toughtRoutes);

export { routes };
