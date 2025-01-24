import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../../src/users/entities/user.entity';

const testDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: false, // Disable auto-synchronization
  dropSchema: true, // Clean database before tests
  migrationsRun: false, // Don't run migrations automatically
};

export default testDatabaseConfig;
