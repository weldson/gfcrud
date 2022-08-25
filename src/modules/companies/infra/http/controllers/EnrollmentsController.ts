import { Request, Response } from 'express';

class EmployeesController {
  public async create(req: Request, res: Response): Promise<Response> {
    return res.json();
  }

  public async destroy(req: Response, res: Response): Promise<Response> {
    return res.status(204);
  }
}

export default EmployeesController;
