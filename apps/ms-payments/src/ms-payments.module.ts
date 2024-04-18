import { Module } from '@nestjs/common';
import { PayGrpcModule } from './pay-grpc/pay-grpc.module';

@Module({
  imports: [PayGrpcModule],
  controllers: [],
  providers: [],
})
export class MsPaymentsModule {}
