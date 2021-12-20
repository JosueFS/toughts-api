import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportToughtService } from '../services/ImportToughtService';

class ImportToughtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importToughtService = container.resolve(ImportToughtService);

    try {
      await importToughtService.execute(file);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ImportToughtController };
