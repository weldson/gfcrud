import { IEmploye } from '../models/IEmploye';
import { ICreateEmploye } from '../models/ICreateEmploye';

export interface ICompanyEmployeesRepository {
  findAllCompanies(id: string): Promise<IEmploye[] | undefined>;

  findById(id: string): Promise<IEmploye | undefined>;

  create(data: ICreateEmploye): Promise<IEmploye>;

  delete(id: string): Promise<void>;
}
