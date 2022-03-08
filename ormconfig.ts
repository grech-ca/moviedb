import { ConnectionOptions } from 'typeorm';

import { Item } from './entities';

const {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_ROOT_PASSWORD,
} = process.env;

const options: ConnectionOptions = {
  type: 'mysql',
  port: 3306,
  host: MYSQL_HOST,
  username: MYSQL_USERNAME,
  database: MYSQL_DATABASE,
  password: MYSQL_ROOT_PASSWORD,
  synchronize: true,
  logging: false,
  entities: [Item],
  cli: {
    migrationsDir: './migrations',
  },
};

export default options;

