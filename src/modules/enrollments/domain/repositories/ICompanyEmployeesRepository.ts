import { ICompany } from '@modules/companies/domain/models/ICompany';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';

export interface ICompanyEmployeesRepository {
  create(companyId: string, employeId: string): Promise<void>;

  delete(companyId: string, employeId: string): Promise<void>;

  findEmployeesByCompanyId(companyId: string): Promise<IEmploye[]>;

  findCompanyByEmployeId(employeId: string): Promise<ICompany[]>;
}
