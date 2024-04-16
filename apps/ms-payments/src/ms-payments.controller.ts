import { Controller, Get } from '@nestjs/common';
import { MsPaymentsService } from './ms-payments.service';

@Controller()
export class MsPaymentsController {
  constructor(private readonly msPaymentsService: MsPaymentsService) {}

  @Get()
  getHello(): string {
    return this.msPaymentsService.getHello();
  }
}
