import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PayGrpcService } from './pay-grpc.service';
import { CreatePayGrpcDto } from './dto/create-pay-grpc.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class PayGrpcController {
  constructor(private readonly payGrpcService: PayGrpcService) {}

  @GrpcMethod('PaymentService', 'PayOrder')
  payOrder(
    data: CreatePayGrpcDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    console.log(metadata);
    console.log(call);
    return this.payGrpcService.payOrder(data);
  }
}
