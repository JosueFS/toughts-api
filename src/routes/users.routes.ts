import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import {
  createUserController,
  listUserController,
  uploadUserAvatarController,
} from '../modules/users/controllers';

const userRoutes = Router();

const upload = multer(multerConfig);

userRoutes.post('/', (request, response) =>
  createUserController.handle(request, response)
);

userRoutes.get('/', (request, response) =>
  listUserController.handle(request, response)
);

userRoutes.post('/upload', upload.single('image'), (request, response) =>
  uploadUserAvatarController.handle(request, response)
);

export { userRoutes };
