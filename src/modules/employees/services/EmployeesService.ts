import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { ICreateEmploye } from '../domain/models/ICreateEmploye';
import { IEmploye } from '../domain/models/IEmploye';
import { IUpdateEmploye } from '../domain/models/IUpdateEmploye';
import { IEmployeesRepository } from '../domain/repositories/IEmployeesRepository';

@injectable()
class EmployeesService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  public async list(): Promise<IEmploye[] | undefined> {
    const employees = await this.employeesRepository.findAll();

    return employees;
  }

  public async create(data: ICreateEmploye): Promise<IEmploye> {
    const documentExists = await this.employeesRepository.findByDocumentNumber(
      data.document_number,
    );

    if (documentExists) {
      throw new AppError('document number already used.');
    }

    const employe = await this.employeesRepository.create(data);

    return employe;
  }

  // public async update(data: IUpdateEmploye): Promise<IEmploye> {
  //   const employe = await this.employeesRepository.update(data);

  //   return employe;
  // }

  public async show(id: string): Promise<IEmploye | undefined> {
    const employe = await this.employeesRepository.findById(id);

    return employe;
  }

  public async delete(id: string): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}

export default EmployeesService;
