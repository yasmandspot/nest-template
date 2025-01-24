import { DataSource } from 'typeorm';
import testDatabaseConfig from '../config/database.config';

export async function initializeTestDatabase(): Promise<void> {
  const dataSource = new DataSource({
    ...testDatabaseConfig,
    type: 'mysql',
  } as any);

  await dataSource.initialize();

  try {
    // Drop existing tables if they exist
    await dataSource.query('DROP TABLE IF EXISTS users');

    // Create tables
    await dataSource.synchronize(true);
  } finally {
    await dataSource.destroy();
  }
}
