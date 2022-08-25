import { container } from 'tsyringe';

import { ICompaniesRepository } from '@modules/companies/domain/repositories/ICompaniesRepository';
import CompaniesRepository from '@modules/companies/infra/repositories/CompaniesRepository';
import { IEmployeesRepository } from '@modules/employees/domain/repositories/IEmployeesRepository';
import EmployeesRepository from '@modules/employees/infra/repositories/EmployeesRepository';
import { ICompanyEmployeesRepository } from '@modules/enrollments/domain/repositories/ICompanyEmployeesRepository';
import CompanyEmployeesRepository from '@modules/enrollments/infra/repositories/CompanyEmployeesRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository,
);

container.registerSingleton<ICompanyEmployeesRepository>(
  'CompanyEmployeesRepository',
  CompanyEmployeesRepository,
);
