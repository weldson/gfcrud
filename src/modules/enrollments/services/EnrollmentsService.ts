import { inject, injectable } from 'tsyringe';

import { ICompanyEmployeesRepository } from '../domain/repositories/ICompanyEmployeesRepository';
import { ICompanyEmploye } from '../domain/models/ICompanyEmploye';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';

@injectable()
class EnrollmentsService {
  constructor(
    @inject('CompanyEmployeesRepository')
    private companyEmployeesRepository: ICompanyEmployeesRepository,
  ) {}

  public async create(data: ICompanyEmploye): Promise<void> {
    await this.companyEmployeesRepository.create(
      data.company_id,
      data.employe_id,
    );
  }

  public async delete(data: ICompanyEmploye): Promise<void> {
    await this.companyEmployeesRepository.delete(
      data.company_id,
      data.employe_id,
    );
  }
}

export default EnrollmentsService;
