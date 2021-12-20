import { Request, Response } from 'express';

import { ListToughtService } from '../services/ListToughtService';

class ListToughtController {
  constructor(private listToughtService: ListToughtService) {}

  handle(request: Request, response: Response): Response {
    const { search } = request.query;
    try {
      const toughts = this.listToughtService.execute({
        keyword: search?.toString(),
      });

      return response.status(200).json(toughts);
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { ListToughtController };
