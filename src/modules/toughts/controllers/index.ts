import { ToughtsRepository } from '../repositories/ToughtsRepository';
import { CreateToughtService } from '../services/CreateToughtService';
import { ListToughtService } from '../services/ListToughtService';
import { CreateToughtController } from './CreateToughtController';
import { ListToughtController } from './ListToughtController';

const toughtsRepository = ToughtsRepository.getInstance();

const createToughtService = new CreateToughtService(toughtsRepository);
const createToughtController = new CreateToughtController(createToughtService);

const listToughtService = new ListToughtService(toughtsRepository);
const listToughtController = new ListToughtController(listToughtService);

export { createToughtController, listToughtController };
