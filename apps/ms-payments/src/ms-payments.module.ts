import { Module } from '@nestjs/common';
import { MsPaymentsController } from './ms-payments.controller';
import { MsPaymentsService } from './ms-payments.service';

@Module({
  imports: [],
  controllers: [MsPaymentsController],
  providers: [MsPaymentsService],
})
export class MsPaymentsModule {}
