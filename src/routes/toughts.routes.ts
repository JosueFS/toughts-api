import { Router } from 'express';

import {
  createToughtController,
  listToughtController,
} from '../modules/toughts/controllers';

const toughtRoutes = Router();

toughtRoutes.post('/', (request, response) => {
  return createToughtController.handle(request, response);
});

toughtRoutes.get('/', (request, response) => {
  return listToughtController.handle(request, response);
});

export { toughtRoutes };
