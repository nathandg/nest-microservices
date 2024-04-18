import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

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

  buy(id: string) {
    const product = this.findOne(id);
    if (!product) return NotFoundException;
  }
}
