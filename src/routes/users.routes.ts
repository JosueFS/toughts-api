import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/users/controllers/CreateUserController';
import { ListUserController } from '../modules/users/controllers/ListUserController';
import { UploadUserAvatarController } from '../modules/users/controllers/UploadUserAvatarController';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUserController.handle);

usersRoutes.patch(
  '/upload',
  ensureAuthenticated,
  uploadAvatar.single('image'),
  uploadUserAvatarController.handle
);

export { usersRoutes };
