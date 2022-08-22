import { ICompany } from '../models/ICompany';
import { ICreateCompany } from '../models/ICreateCompany';
// import { IUpdateCompany } from '../models/IUpdateCompany';
import { IDeleteCompany } from '../models/IDeleteCompany';

export interface ICompaniesRepository {
  findAll(): Promise<ICompany[] | undefined>;

  findByEmail(email: string): Promise<ICompany | undefined>;

  findById(id: string): Promise<ICompany | undefined>;

  create(data: ICreateCompany): Promise<ICompany>;

  // update(data: IUpdateCompany): Promise<ICompany>;

  delete(id: string): Promise<void>;
}
