import { Request, Response, Router } from 'express';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';
import employeesRouter from '@modules/employees/infra/http/routes/employees.routes';
import enrollmentsRouter from '@modules/enrollments/infra/http/routes/enrollments.routes';

const routes = Router();

routes.use('/companies', companiesRouter);

routes.use('/employees', employeesRouter);

routes.use('/enrollments', enrollmentsRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'It is working!' });
});

export default routes;
