import { inject } from 'tsyringe';

import { ICreateUsersDTO } from '../dtos/ICreateUserDTO';
import { IUsersReposiotry } from '../repositories/IUsersRepository';

class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersReposiotry,
  ) {}

  async execute({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      username,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
