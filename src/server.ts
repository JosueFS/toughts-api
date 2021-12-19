import express from 'express';

import { userRoutes } from './routes/users.routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}🔥`));
