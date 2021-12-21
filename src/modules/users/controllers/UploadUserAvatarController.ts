import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadUserAvatarService } from '../services/UploadUserAvatarService';

class UploadUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const url = request.file.filename;

    const uploadUserAvatarService = container.resolve(UploadUserAvatarService);

    try {
      await uploadUserAvatarService.execute({ id, url });

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UploadUserAvatarController };
