import { Request, Response } from 'express';

import { CreateToughtService } from '../services/CreateToughtService';

class CreateToughtController {
  constructor(private createToughtService: CreateToughtService) {}

  handle(request: Request, response: Response): Response {
    const { message } = request.body;

    try {
      this.createToughtService.execute({ message });

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { CreateToughtController };
