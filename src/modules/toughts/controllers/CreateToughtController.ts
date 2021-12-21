import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateToughtService } from '../services/CreateToughtService';

class CreateToughtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { message } = request.body;
    const { id } = request.user;

    const createToughtService = container.resolve(CreateToughtService);

    try {
      await createToughtService.execute({ author_id: id, message });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateToughtController };
