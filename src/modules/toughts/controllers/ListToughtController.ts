import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListToughtService } from '../services/ListToughtService';

class ListToughtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { search } = request.query;

    const listToughtService = container.resolve(ListToughtService);

    try {
      const toughts = await listToughtService.execute({
        keyword: search?.toString(),
      });

      return response.status(200).json(toughts);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListToughtController };
