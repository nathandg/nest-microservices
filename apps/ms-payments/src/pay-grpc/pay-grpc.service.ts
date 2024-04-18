import { Injectable } from '@nestjs/common';
import { PayGrpc } from './entities/pay-grpc.entity';
import { PayOrderResponseDto } from './dto/pay-order-response.dto';

@Injectable()
export class PayGrpcService {
  payOrder(createPayGrpcDto: PayGrpc): PayOrderResponseDto {
    if (createPayGrpcDto.value < 1) {
      return {
        success: false,
        message: 'Invalid value, must be greater than 0',
      };
    }

    if (createPayGrpcDto.cpf.length !== 11) {
      return {
        success: false,
        message: 'Invalid CPF, must have 11 digits',
      };
    }

    if (createPayGrpcDto.cardNumber.length !== 16) {
      return {
        success: false,
        message: 'Invalid card number, must have 16 digits',
      };
    }

    return {
      success: true,
      message: 'Payment successful',
    };
  }
}
