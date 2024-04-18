import { PartialType } from '@nestjs/mapped-types';
import { CreatePayGrpcDto } from './create-pay-grpc.dto';

export class UpdatePayGrpcDto extends PartialType(CreatePayGrpcDto) {
  id: number;
}
