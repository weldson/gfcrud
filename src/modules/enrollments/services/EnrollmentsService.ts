import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

@injectable()
class EnrollmentsService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  public async list(id: string): Promise<IEmploye[] | undefined> {
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

  public async delete(id: string): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}

export default EnrollmentsService;
