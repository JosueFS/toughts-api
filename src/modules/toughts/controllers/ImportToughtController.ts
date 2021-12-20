import { Request, Response } from 'express';

import { ImportToughtService } from '../services/ImportToughtService';

class ImportToughtController {
  constructor(private importToughtService: ImportToughtService) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    try {
      this.importToughtService.execute(file);

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { ImportToughtController };
