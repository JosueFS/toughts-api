import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

import { routes } from './routes';
import swaggerFile from './swagger.json';

import './database';

import './shared/container';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    console.error('Teste:', err);
    if (err instanceof Error) {
      return response.status(400).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

app.listen(PORT, () =>
  console.log(`Server is running on port updated ${PORT}🔥`)
);
