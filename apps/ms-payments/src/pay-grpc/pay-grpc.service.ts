import { Injectable } from '@nestjs/common';
import { CreatePayGrpcDto } from './dto/create-pay-grpc.dto';

@Injectable()
export class PayGrpcService {
  payOrder(createPayGrpcDto: CreatePayGrpcDto) {
    return createPayGrpcDto;
  }
}
