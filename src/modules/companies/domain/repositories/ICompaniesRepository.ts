import { ICompany } from '../models/ICompany';
import { ICreateCompany } from '../models/ICreateCompany';

export interface ICompaniesRepository {
  findAll(): Promise<ICompany[]>;

  findByEmail(email: string): Promise<ICompany | undefined>;

  findByDocumentNumber(documentNumber: string): Promise<ICompany | undefined>;

  findById(id: string): Promise<ICompany | undefined>;

  create(data: ICreateCompany): Promise<ICompany>;

  save(data: ICompany): Promise<ICompany>;

  delete(id: string): Promise<void>;
}
