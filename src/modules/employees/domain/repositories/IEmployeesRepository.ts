import { IEmploye } from '../models/IEmploye';
import { ICreateEmploye } from '../models/ICreateEmploye';
// import { IUpdateEmploye } from '../models/IUpdateEmploye';

export interface IEmployeesRepository {
  findAll(): Promise<IEmploye[] | undefined>;

  findByDocumentNumber(documentNumber: string): Promise<IEmploye | undefined>;

  findById(id: string): Promise<IEmploye | undefined>;

  create(data: ICreateEmploye): Promise<IEmploye>;

  // update(data: IUpdateEmploye): Promise<IEmploye>;

  delete(id: string): Promise<void>;
}
