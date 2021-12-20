import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { routes } from './routes';
import swaggerFile from './swagger.json';

import './database';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}🔥`));
