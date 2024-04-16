import { Controller, Get } from '@nestjs/common';
import { MsProductsService } from './ms-products.service';

@Controller()
export class MsProductsController {
  constructor(private readonly msProductsService: MsProductsService) {}

  @Get()
  getHello(): string {
    return this.msProductsService.getHello();
  }
}
