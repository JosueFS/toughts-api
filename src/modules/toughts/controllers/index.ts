import { ToughtsRepository } from '../repositories/ToughtsRepository';
import { CreateToughtService } from '../services/CreateToughtService';
import { ImportToughtService } from '../services/ImportToughtService';
import { ListToughtService } from '../services/ListToughtService';
import { CreateToughtController } from './CreateToughtController';
import { ImportToughtController } from './ImportToughtController';
import { ListToughtController } from './ListToughtController';

const toughtsRepository = ToughtsRepository.getInstance();

const createToughtService = new CreateToughtService(toughtsRepository);
const createToughtController = new CreateToughtController(createToughtService);

const importToughtService = new ImportToughtService(toughtsRepository);
const importToughtController = new ImportToughtController(importToughtService);

const listToughtService = new ListToughtService(toughtsRepository);
const listToughtController = new ListToughtController(listToughtService);

export { createToughtController, listToughtController, importToughtController };
