import { ICompanyEmployeesRepository } from '@modules/enrollments/domain/repositories/ICompanyEmployeesRepository';

import { db } from '@config/database';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';
import { ICompany } from '@modules/companies/domain/models/ICompany';

class CompanyEmployeesRepository implements ICompanyEmployeesRepository {
  public async create(companyId: string, employeId: string): Promise<void> {
    await db('company_employe').insert({
      company_id: companyId,
      employe_id: employeId,
    });
  }

  public async delete(companyId: string, employeId: string): Promise<void> {
    await db('company_employe')
      .where('company_id', companyId)
      .andWhere('employe_id', employeId)
      .del();
  }

  public async findEmployeesByCompanyId(
    companyId: string,
  ): Promise<IEmploye[]> {
    const employees = await db<IEmploye>('employees')
      .join('company_employe as ce', 'ce.employe_id', 'employees.id')
      .where('ce.company_id', companyId)
      .select();

    return employees;
  }

  public async findCompanyByEmployeId(employeId: string): Promise<ICompany[]> {
    const companies = await db<ICompany>('companies')
      .join('company_employe as ce', 'ce.company_id', 'companies.id')
      .where('ce.employe_id', employeId)
      .select();

    return companies;
  }
}

export default CompanyEmployeesRepository;
