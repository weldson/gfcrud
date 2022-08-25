import { IEmploye } from '../models/IEmploye';
import { ICreateEmploye } from '../models/ICreateEmploye';

export interface IEmployeesRepository {
  findAll(): Promise<IEmploye[] | undefined>;

  findByDocumentNumber(documentNumber: string): Promise<IEmploye | undefined>;

  findById(id: string): Promise<IEmploye | undefined>;

  create(data: ICreateEmploye): Promise<IEmploye>;

  save(data: IEmploye): Promise<IEmploye>;

  delete(id: string): Promise<void>;
}
