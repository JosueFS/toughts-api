import { container } from 'tsyringe';

import { IToughtsRepository } from '../../modules/toughts/repositories/IToughtsRepository';
import { ToughtsRepository } from '../../modules/toughts/repositories/ToughtsRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';

container.registerSingleton<IToughtsRepository>(
  'ToughtsRepository',
  ToughtsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
