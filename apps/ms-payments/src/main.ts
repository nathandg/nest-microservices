import { NestFactory } from '@nestjs/core';
import { MsPaymentsModule } from './ms-payments.module';

async function bootstrap() {
  const app = await NestFactory.create(MsPaymentsModule);
  await app.listen(3000);
}
bootstrap();
