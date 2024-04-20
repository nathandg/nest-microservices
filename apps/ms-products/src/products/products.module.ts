import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENTS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'ms-payments:50051',
          package: 'payments',
          protoPath: join(__dirname, '../../../proto/payments.proto'),
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
