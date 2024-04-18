import { Module } from '@nestjs/common';
import { PayGrpcService } from './pay-grpc.service';
import { PayGrpcController } from './pay-grpc.controller';

@Module({
  controllers: [PayGrpcController],
  providers: [PayGrpcService],
})
export class PayGrpcModule {}
