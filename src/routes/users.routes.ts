import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import { CreateUserController } from '../modules/users/controllers/CreateUserController';
import { ListUserController } from '../modules/users/controllers/ListUserController';
import { UploadUserAvatarController } from '../modules/users/controllers/UploadUserAvatarController';

const usersRoutes = Router();

const upload = multer(multerConfig);

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUserController.handle);

usersRoutes.post(
  '/upload',
  upload.single('image'),
  uploadUserAvatarController.handle
);

export { usersRoutes };
