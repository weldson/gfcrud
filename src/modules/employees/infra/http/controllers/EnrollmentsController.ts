import { Request, Response } from 'express';

class EnrollmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    return res.status(200);
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    return res.status(204);
  }
}

export default EnrollmentsController;
