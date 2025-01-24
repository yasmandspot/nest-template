import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async create(email: string, password: string): Promise<User> {
    const user = this.usersRepository.create({
      email,
      password,
      roles: [Role.USER],
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<Partial<User>[]> {
    return this.usersRepository.find().then((users) =>
      users.map((user) => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }))
    );
  }

  // Add method to update roles
  async updateRoles(userId: number, roles: Role[]): Promise<User | undefined> {
    const user = await this.findById(userId);
    if (user) {
      user.roles = roles;
      user.updatedAt = new Date();
      return this.usersRepository.save(user);
    }
    return undefined;
  }
}
