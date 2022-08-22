import { Request, Response } from 'express';
import { container } from 'tsyringe';

import EmployeesService from '@modules/employees/services/EmployeesService';

class EmployeesController {
  public async list(req: Request, res: Response): Promise<Response> {
    const employeesService = container.resolve(EmployeesService);

    const employees = await employeesService.list();

    return res.json(employees);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const employeesService = container.resolve(EmployeesService);

    const employe = await employeesService.show(id);

    return res.json(employe);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const employeesService = container.resolve(EmployeesService);

    const employe = employeesService.create(data);

    return res.json(employe);
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const employeesService = container.resolve(EmployeesService);

    await employeesService.delete(id);

    return res.json([]);
  }
}

export default EmployeesController;
