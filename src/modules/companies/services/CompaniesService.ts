import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICompany } from '../domain/models/ICompany';
import { ICreateCompany } from '../domain/models/ICreateCompany';
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

  // TODO: show employees
  public async show(id: string): Promise<ICompany | undefined> {
    const company = await this.companiesRepository.findById(id);

    return company;
  }

  public async create(data: ICreateCompany): Promise<ICompany> {
    const emailExists = await this.companiesRepository.findByEmail(data.email);

    if (emailExists) {
      throw new AppError('Email already used.');
    }

    const company = await this.companiesRepository.create(data);

    return company;
  }

  public async update(data: IUpdateCompany): Promise<ICompany> {
    const company = await this.companiesRepository.findById(data.id);

    if (!company) {
      throw new AppError('Company not found!');
    }

    const emailExists = await this.companiesRepository.findByEmail(data.email);

    if (emailExists && emailExists.id !== company.id) {
      throw new AppError('Email already used!');
    }

    const documentNumberExists =
      await this.companiesRepository.findByDocumentNumber(data.document_number);

    if (documentNumberExists && documentNumberExists.id !== company.id) {
      throw new AppError('Document number already used!');
    }

    company.name = data.name;
    company.email = data.email;
    company.address_number = data.address_number;
    company.city_id = data.city;
    company.street = data.street;
    company.document_number = data.document_number;
    company.neighborhood = data.neighborhood;

    await this.companiesRepository.save(company);

    return company;
  }

  public async delete(id: string): Promise<void> {
    const company = await this.companiesRepository.findById(id);

    if (!company) {
      throw new AppError('Company not found!');
    }

    await this.companiesRepository.delete(id);
  }
}

export default CompaniesService;
