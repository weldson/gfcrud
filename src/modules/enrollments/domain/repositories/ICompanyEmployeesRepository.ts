export interface ICompanyEmployeesRepository {
  create(companyId: string, employeId: string): Promise<void>;

  delete(companyId: string, employeId: string): Promise<void>;
}
