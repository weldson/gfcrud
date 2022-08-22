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
    const employe = await db<IEmploye>('employe').select().where('id', id);

    return employe[0];
  }

  public async findByEmail(email: string): Promise<IEmploye | undefined> {
    const employe = await db<IEmploye>('employees')
      .select()
      .where('email', email);

    return employe[0];
  }

  public async create(data: ICreateEmploye): Promise<IEmploye> {
    const employeId = await db<IEmploye>('employees').insert(data, ['id']);

    const employe = await db<IEmploye>('employees')
      .select()
      .where('id', employeId);

    return employe[0];
  }

  public async delete(id: string): Promise<void> {
    await db('employees').where('id', id).del();
  }
}

export default EmployeesRepository;
