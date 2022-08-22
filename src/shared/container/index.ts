import { container } from 'tsyringe';

import { ICompaniesRepository } from '@modules/companies/domain/repositories/ICompaniesRepository';
import CompaniesRepository from '@modules/companies/infra/repositories/CompaniesRepository';
import { IEmployeesRepository } from '@modules/employees/domain/repositories/IEmployeesRepository';
import EmployeesRepository from '@modules/employees/infra/repositories/EmployeesRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository,
);
