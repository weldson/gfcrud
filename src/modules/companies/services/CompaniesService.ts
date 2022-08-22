import { inject, injectable } from 'tsyringe';
import { ICompany } from '../domain/models/ICompany';
import { ICreateCompany } from '../domain/models/ICreateCompany';
import { IDeleteCompany } from '../domain/models/IDeleteCompany';
import { IShowCompany } from '../domain/models/IShowCompany';
import { IUpdateCompany } from '../domain/models/IUpdateCompany';
import { ICompaniesRepository } from '../domain/repositories/ICompaniesRepository';

@injectable()
class CompaniesService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async list(): Promise<ICompany[] | undefined> {
    const companies = await this.companiesRepository.findAll();

    return companies;
  }

  public async create(data: ICreateCompany): Promise<ICompany> {
    const company = await this.companiesRepository.create(data);

    return company;
  }

  // public async update(data: IUpdateCompany): Promise<ICompany> {
  //   const company
  // }

  public async show(id: string): Promise<ICompany | undefined> {
    const company = await this.companiesRepository.findById(id);

    return company;
  }

  public async delete(id: string): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}

export default CompaniesService;
