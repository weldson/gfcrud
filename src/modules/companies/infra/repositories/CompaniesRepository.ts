import { ICompany } from '@modules/companies/domain/models/ICompany';
import { ICreateCompany } from '@modules/companies/domain/models/ICreateCompany';
import { IDeleteCompany } from '@modules/companies/domain/models/IDeleteCompany';
// import { IUpdateCompany } from '@modules/companies/domain/models/IUpdateCompany';
import { ICompaniesRepository } from '@modules/companies/domain/repositories/ICompaniesRepository';
import { db } from '../../../../config/database';

class CompaniesRepository implements ICompaniesRepository {
  constructor() {}

  public async findAll(): Promise<ICompany[] | undefined> {
    const companies = await db<ICompany>('companies');

    return companies;
  }

  public async findById(id: string): Promise<ICompany | undefined> {
    const company = await db<ICompany>('companies').select().where('id', id);

    return company[0];
  }

  public async findByEmail(email: string): Promise<ICompany | undefined> {
    const company = await db<ICompany>('companies')
      .select()
      .where('email', email);

    return company[0];
  }

  public async create(data: ICreateCompany): Promise<ICompany> {
    const companyId = await db<ICompany>('companies').insert(data, ['id']);

    const company = await db<ICompany>('companies')
      .select()
      .where('id', companyId);

    return company[0];
  }

  // public async update(data: IUpdateCompany): Promise<ICompany> {
  //   const company = await db<ICompany>('companies')
  //     .where('email', data.email)
  //     .update(data);

  //   return company;
  // }

  public async delete(id: string): Promise<void> {
    await db('companies').where('id', id).del();
  }
}

export default CompaniesRepository;
