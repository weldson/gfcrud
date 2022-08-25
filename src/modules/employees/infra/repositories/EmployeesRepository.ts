import { ICreateEmploye } from '@modules/employees/domain/models/ICreateEmploye';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';
import { IEmployeesRepository } from '@modules/employees/domain/repositories/IEmployeesRepository';

import { db } from '@config/database';

class EmployeesRepository implements IEmployeesRepository {
  public async findAll(): Promise<IEmploye[] | undefined> {
    const employees = await db<IEmploye>('employees');

    return employees;
  }

  public async findById(id: string): Promise<IEmploye | undefined> {
    const employe = await db<IEmploye>('employe')
      .select()
      .where('id', id)
      .first();

    return employe;
  }

  public async findByDocumentNumber(
    documentNumber: string,
  ): Promise<IEmploye | undefined> {
    const employe = await db<IEmploye>('employees')
      .select()
      .where('document_number', documentNumber)
      .first();

    return employe;
  }

  public async create(data: ICreateEmploye): Promise<IEmploye> {
    const employeId = await db<IEmploye>('employees').insert(data, ['id']);

    const [employe] = await db<IEmploye>('employees')
      .select()
      .where('id', employeId);

    return employe;
  }

  public async save(employe: IEmploye): Promise<IEmploye> {
    await db<IEmploye>('companies').where('id', employe.id).update(employe);

    return employe;
  }

  public async delete(id: string): Promise<void> {
    await db('employees').where('id', id).del();
  }
}

export default EmployeesRepository;
