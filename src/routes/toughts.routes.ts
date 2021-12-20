import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import {
  createToughtController,
  importToughtController,
  listToughtController,
} from '../modules/toughts/controllers';

const toughtRoutes = Router();

const upload = multer(multerConfig);

toughtRoutes.post('/', (request, response) =>
  createToughtController.handle(request, response)
);

toughtRoutes.get('/', (request, response) =>
  listToughtController.handle(request, response)
);

toughtRoutes.post('/import', upload.single('file'), (request, response) =>
  importToughtController.handle(request, response)
);

export { toughtRoutes };
