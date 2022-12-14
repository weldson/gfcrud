import { ICompany } from '@modules/companies/domain/models/ICompany';

export interface IEmploye {
  id: string;
  name: string;
  document_number: string;
  companies: ICompany[];
  city_id: number;
  neighborhood: string;
  address_number: string;
  street: string;
  created_at: Date;
  updated_at: Date;
}
