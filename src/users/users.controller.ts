import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from './enums/role.enum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard) // Apply both guards
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.USER) // Allow any user
  findAll() {
    return this.usersService.findAll();
  }

  @Get('admin')
  @Roles(Role.ADMIN) // Only allow admins
  findAllForAdmin() {
    return this.usersService.findAll();
  }
}
