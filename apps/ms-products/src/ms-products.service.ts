import { Injectable } from '@nestjs/common';

@Injectable()
export class MsProductsService {
  getHello(): string {
    return 'Hello World products!';
  }
}
