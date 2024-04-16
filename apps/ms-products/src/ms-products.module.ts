import { Module } from '@nestjs/common';
import { MsProductsController } from './ms-products.controller';
import { MsProductsService } from './ms-products.service';

@Module({
  imports: [],
  controllers: [MsProductsController],
  providers: [MsProductsService],
})
export class MsProductsModule {}
