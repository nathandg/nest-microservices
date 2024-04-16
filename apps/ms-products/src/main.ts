import { NestFactory } from '@nestjs/core';
import { MsProductsModule } from './ms-products.module';

async function bootstrap() {
  const app = await NestFactory.create(MsProductsModule);
  await app.listen(3000);
}
bootstrap();
