import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../dtos/ICreateUserDTO';
import { IUsersReposiotry } from '../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersReposiotry,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.filterByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User Already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
