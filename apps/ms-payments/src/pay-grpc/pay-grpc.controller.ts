import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { PayGrpcService } from './pay-grpc.service';
import { PayGrpc } from './entities/pay-grpc.entity';

@Controller()
export class PayGrpcController {
  constructor(private readonly payGrpcService: PayGrpcService) {}

  @GrpcMethod('PaymentService', 'PayOrder')
  payOrder(data: PayGrpc) {
    return this.payGrpcService.payOrder(data);
  }
}
