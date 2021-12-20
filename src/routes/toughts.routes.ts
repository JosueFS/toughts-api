import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import { CreateToughtController } from '../modules/toughts/controllers/CreateToughtController';
import { ImportToughtController } from '../modules/toughts/controllers/ImportToughtController';
import { ListToughtController } from '../modules/toughts/controllers/ListToughtController';

const toughtsRoutes = Router();
const upload = multer(multerConfig);

const createToughtController = new CreateToughtController();
const listToughtController = new ListToughtController();
const importToughtController = new ImportToughtController();

toughtsRoutes.post('/', createToughtController.handle);

toughtsRoutes.get('/', listToughtController.handle);

toughtsRoutes.post(
  '/import',
  upload.single('file'),
  importToughtController.handle
);

export { toughtsRoutes };
