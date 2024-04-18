import { IsNumber, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto implements Product {
  @IsString()
  title: string;

  @IsNumber()
  price: number;
}
