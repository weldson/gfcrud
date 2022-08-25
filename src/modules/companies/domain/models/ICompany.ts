import { IEmploye } from '@modules/employees/domain/models/IEmploye';

export interface ICompany {
  id: string;
  name: string;
  email: string;
  document_number: string;
  city_id: number;
  employees: IEmploye[];
  neighborhood: string;
  address_number: string;
  street: string;
  created_at: Date;
  updated_at: Date;
}
