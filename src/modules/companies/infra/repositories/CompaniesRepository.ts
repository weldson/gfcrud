import { ICompany } from '@modules/companies/domain/models/ICompany';
import { ICreateCompany } from '@modules/companies/domain/models/ICreateCompany';
// import { IUpdateCompany } from '@modules/companies/domain/models/IUpdateCompany';
import { ICompaniesRepository } from '@modules/companies/domain/repositories/ICompaniesRepository';
import { db } from '../../../../config/database';

class CompaniesRepository implements ICompaniesRepository {
  constructor() {}

  public async findAll(): Promise<ICompany[]> {
    const companies = await db<ICompany>('companies').select();

    return companies;
  }

  public async findById(id: string): Promise<ICompany | undefined> {
    const company = await db<ICompany>('companies')
      .select()
      .where('companies.id', id)
      .first();

    return company;
  }

  public async findByEmail(email: string): Promise<ICompany | undefined> {
    const company = await db<ICompany>('companies')
      .select()
      .where('email', email)
      .first();

    return company;
  }

  public async findByDocumentNumber(
    documentNumber: string,
  ): Promise<ICompany | undefined> {
    const company = await db<ICompany>('companies')
      .select()
      .where('document_number', documentNumber)
      .first();

    return company;
  }

  public async create(data: ICreateCompany): Promise<ICompany> {
    const [companyId] = await db<ICompany>('companies').insert(data, ['id']);

    const [company] = await db<ICompany>('companies')
      .select()
      .where('id', companyId['id']);

    return company;
  }

  public async save(company: ICompany): Promise<ICompany> {
    await db<ICompany>('companies').where('id', company.id).update(company);

    return company;
  }

  public async delete(id: string): Promise<void> {
    await db('companies').where('id', id).del();
  }
}

export default CompaniesRepository;
