import { IEmploye } from '../models/IEmploye';
import { ICreateEmploye } from '../models/ICreateEmploye';

export interface IEmployeesRepository {
  findAll(): Promise<IEmploye[] | undefined>;

  findByEmail(email: string): Promise<IEmploye | undefined>;

  findById(id: string): Promise<IEmploye | undefined>;

  create(data: ICreateEmploye): Promise<IEmploye>;

  // update(data: IUpdateCompany): Promise<ICompany>;

  delete(id: string): Promise<void>;
}
