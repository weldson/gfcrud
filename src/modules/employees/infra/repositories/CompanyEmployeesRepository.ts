import { ICreateEmploye } from '@modules/employees/domain/models/ICreateEmploye';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';
import { ICompanyEmployeesRepository } from '@modules/employees/domain/repositories/ICompanyEmployeesRepository';

import { db } from '@config/database';
import { ICompany } from '@modules/companies/domain/models/ICompany';

class CompanyEmployeesRepository implements ICompanyEmployeesRepository {
  public async findAllCompanies(id: string): Promise<ICompany[] | undefined> {
    const companies = await db<ICompany>('company_employe').select().where('');

    return companies;
  }
  public async findById(id: string): Promise<IEmploye | undefined> {
    throw new Error('Method not implemented.');
  }
  public async create(data: ICreateEmploye): Promise<IEmploye> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default CompanyEmployeesRepository;
