import {
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { randomUUID } from 'crypto';
import { ClientGrpc } from '@nestjs/microservices';
import { payments } from 'proto/payments';

@Injectable()
export class ProductsService implements OnModuleInit {
  private products: Product[] = [];
  private paymentsService: payments.PaymentService;

  constructor(@Inject('PAYMENTS_PACKAGE') private paymentsClient: ClientGrpc) {}

  onModuleInit() {
    this.paymentsService =
      this.paymentsClient.getService<payments.PaymentService>('PaymentService');
  }

  create(createProductDto: CreateProductDto) {
    const product = { id: randomUUID(), ...createProductDto };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) return NotFoundException;

    const index = this.products.indexOf(product);
    this.products[index] = { ...product, ...updateProductDto };
    return this.products[index];
  }

  remove(id: string) {
    const product = this.findOne(id);
    if (!product) return NotFoundException;

    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    return product;
  }

  buy(id: string, cpf: string, cardNumber: string) {
    const product = this.findOne(id);
    if (!product) throw new NotFoundException('Product not found');
    const data: payments.PayOrderRequest = {
      value: product.price,
      cpf,
      cardNumber,
    };
    return this.paymentsService.payOrder(data);
  }
}
