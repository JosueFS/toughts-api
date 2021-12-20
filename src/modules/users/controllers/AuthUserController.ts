import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthUserService } from '../services/AuthUserService';

class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authUserService = container.resolve(AuthUserService);

    try {
      const token = await authUserService.execute({ email, password });

      return response.status(200).json(token);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthUserController };
