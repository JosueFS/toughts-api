import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  handle(request: Request, response: Response): Response {
    const { name, email, password } = request.body;

    try {
      this.createUserService.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
}

export { CreateUserController };
