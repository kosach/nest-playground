import { TypeOrmModuleOptions} from '@nestjs/typeorm';
import * as config from 'config';
import { publicDecrypt } from 'crypto';
const dbConfig = config.get('db');
console.log('TCL: dbConfig', dbConfig)
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
