import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import '@shared/container';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

export { app };
