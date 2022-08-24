import { ICreateEmploye } from '@modules/employees/domain/models/ICreateEmploye';
import { IEmploye } from '@modules/employees/domain/models/IEmploye';
import { IEmployeesRepository } from '@modules/employees/domain/repositories/IEmployeesRepository';

import { db } from '@config/database';
import { IUpdateEmploye } from '@modules/employees/domain/models/IUpdateEmploye';

class EmployeesRepository implements IEmployeesRepository {
  public async findAll(): Promise<IEmploye[] | undefined> {
    const employees = await db<IEmploye>('employees');

    return employees;
  }

  public async findById(id: string): Promise<IEmploye | undefined> {
    const employe = await db<IEmploye>('employe').select().where('id', id);

    return employe[0];
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

    const employe = await db<IEmploye>('employees')
      .select()
      .where('id', employeId);

    return employe[0];
  }

  // public async update(data: IUpdateEmploye): Promise<IEmploye> {
  //   // const employeId
  // }

  public async delete(id: string): Promise<void> {
    await db('employees').where('id', id).del();
  }
}

export default EmployeesRepository;
