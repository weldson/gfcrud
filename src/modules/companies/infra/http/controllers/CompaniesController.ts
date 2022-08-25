import CompaniesService from '@modules/companies/services/CompaniesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CompaniesController {
  public async list(req: Request, res: Response): Promise<Response> {
    const companiesService = container.resolve(CompaniesService);

    const companies = await companiesService.list();

    return res.json(companies);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const companiesService = container.resolve(CompaniesService);

    const company = await companiesService.show(id);

    return res.json(company);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const companiesService = container.resolve(CompaniesService);

    const company = await companiesService.create(data);

    return res.json(company);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const companiesService = container.resolve(CompaniesService);

    const company = await companiesService.update({ id, ...data });

    return res.json(company);
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const companiesService = container.resolve(CompaniesService);

    await companiesService.delete(id);

    return res.status(204);
  }
}

export default CompaniesController;
