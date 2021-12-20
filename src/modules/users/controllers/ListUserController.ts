import { Request, Response } from 'express';

import { ListUserService } from '../services/ListUserService';

class ListUserController {
  constructor(private listUserService: ListUserService) {}

  handle(request: Request, response: Response): Response {
    try {
      const users = this.listUserService.execute();

      return response.status(200).json(users);
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { ListUserController };
