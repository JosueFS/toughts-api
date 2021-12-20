import { Request, Response } from 'express';

import { UploadUserAvatarService } from '../services/UploadUserAvatarService';

class UploadUserAvatarController {
  constructor(private uploadUserAvatarService: UploadUserAvatarService) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    const email = 'jj@j.com'; // TODO: GET User from header

    try {
      this.uploadUserAvatarService.execute({ email, file });

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { UploadUserAvatarController };
