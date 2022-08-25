import { Request, Response } from 'express';
import { container } from 'tsyringe';
import EnrollmentsService from '@modules/enrollments/services/EnrollmentsService';

class EnrollmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const enrollmentsService = container.resolve(EnrollmentsService);

    await enrollmentsService.create(data);

    return res.status(204).json();
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const enrollmentsService = container.resolve(EnrollmentsService);

    await enrollmentsService.delete(data);

    return res.status(204).json();
  }
}

export default EnrollmentsController;
