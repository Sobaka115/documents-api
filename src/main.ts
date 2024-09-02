import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useLogger(app.get(Logger));
  await app.listen(process.env.PORT, process.env.HOST);
  console.info(
    `Application started. Listening host: ${process.env.HOST}, port: ${process.env.PORT}`,
  );
}
bootstrap();
