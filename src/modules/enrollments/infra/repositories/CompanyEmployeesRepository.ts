import { ICompanyEmployeesRepository } from '@modules/enrollments/domain/repositories/ICompanyEmployeesRepository';

import { db } from '@config/database';

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
}

export default CompanyEmployeesRepository;
