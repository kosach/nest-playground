import { TypeOrmModuleOptions} from '@nestjs/typeorm';
import * as config from 'config';
const dbConfig = config.get('db');
console.log('TCL: dbConfig', dbConfig)
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'api_role',
    password: 'devpasswd',
    database: 'taskmanagment',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
