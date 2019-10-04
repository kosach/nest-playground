import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');

  console.log('TCL: bootstrap -> serverConfig', serverConfig);
  const port = 3000;
  await app.listen(port);
  logger.log(`Application starting on port ${port}`);
}
bootstrap();
