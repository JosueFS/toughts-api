import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateToughtController } from '../modules/toughts/controllers/CreateToughtController';
import { ImportToughtController } from '../modules/toughts/controllers/ImportToughtController';
import { ListToughtController } from '../modules/toughts/controllers/ListToughtController';

const toughtsRoutes = Router();
const upload = multer(uploadConfig);

const createToughtController = new CreateToughtController();
const listToughtController = new ListToughtController();
const importToughtController = new ImportToughtController();

toughtsRoutes.post('/', ensureAuthenticated, createToughtController.handle);

toughtsRoutes.get('/', listToughtController.handle);

toughtsRoutes.post(
  '/import',
  ensureAuthenticated,
  upload.single('file'),
  importToughtController.handle
);

export { toughtsRoutes };
