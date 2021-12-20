import { Router } from 'express';

import { ToughtsRepository } from '../modules/toughts/repositories/ToughtsRepository';
import { CreateToughtService } from '../modules/toughts/services/CreateToughtService';
import { FindToughtService } from '../modules/toughts/services/FindToughtService';

const toughtRoutes = Router();
const toughtsRepository = new ToughtsRepository();

toughtRoutes.post('/', (request, response) => {
  const { message } = request.body;
  try {
    const createToughtService = new CreateToughtService(toughtsRepository);

    createToughtService.execute({ message });

    return response.status(201).send();
  } catch (error) {
    return response.status(409).json({ error: error.message });
  }
});

toughtRoutes.get('/', (request, response) => {
  const { search } = request.query;

  if (typeof search === 'string') {
    const findToughtService = new FindToughtService(toughtsRepository);

    const toughts = findToughtService.execute({ keyword: search });

    return response.status(200).json(toughts);
  }

  const toughts = toughtsRepository.getAllToughts();

  return response.status(200).json(toughts);
});

export { toughtRoutes };
