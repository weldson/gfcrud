import express, { NextFunction, Request, Response } from 'express';
import '@shared/infra/typeorm';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

export { app };
