import { Request, Response, Router } from 'express';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';

const routes = Router();

routes.use('/companies', companiesRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'It is working!' });
});

export default routes;
