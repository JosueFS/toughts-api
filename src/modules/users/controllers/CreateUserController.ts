import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    try {
      await createUserService.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { CreateUserController };
