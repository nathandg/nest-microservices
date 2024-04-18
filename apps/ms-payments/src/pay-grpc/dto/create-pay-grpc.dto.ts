import { PayGrpc } from '../entities/pay-grpc.entity';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePayGrpcDto implements PayGrpc {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cardNumber: string;
}
