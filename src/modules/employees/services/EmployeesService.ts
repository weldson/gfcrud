import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { ICreateEmploye } from '../domain/models/ICreateEmploye';
import { IEmploye } from '../domain/models/IEmploye';
import { IUpdateEmploye } from '../domain/models/IUpdateEmploye';
import { IEmployeesRepository } from '../domain/repositories/IEmployeesRepository';
import { ICompanyEmployeesRepository } from '@modules/enrollments/domain/repositories/ICompanyEmployeesRepository';

@injectable()
class EmployeesService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
    @inject('CompanyEmployeesRepository')
    private companyEmployeesRepository: ICompanyEmployeesRepository,
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

  public async update(data: IUpdateEmploye): Promise<IEmploye> {
    const employe = await this.employeesRepository.findById(data.id);

    if (!employe) {
      throw new AppError('Employe not found!');
    }

    const documentNumberExists =
      await this.employeesRepository.findByDocumentNumber(data.document_number);

    if (documentNumberExists && employe.id !== documentNumberExists.id) {
      throw new AppError('Document number alredy used!');
    }

    employe.name = data.name;
    employe.address_number = data.address_number;
    employe.city_id = data.city_id;
    employe.street = data.street;
    employe.document_number = data.document_number;
    employe.neighborhood = data.neighborhood;

    await this.employeesRepository.save(employe);

    return employe;
  }

  public async show(id: string): Promise<IEmploye | undefined> {
    const employe = await this.employeesRepository.findById(id);

    if (employe) {
      employe.companies =
        await this.companyEmployeesRepository.findCompanyByEmployeId(
          employe.id,
        );
    }

    return employe;
  }

  public async delete(id: string): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}

export default EmployeesService;
