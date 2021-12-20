import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserService } from '../services/ListUserService';

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUserService);

    try {
      const users = await listUserService.execute();

      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListUserController };
