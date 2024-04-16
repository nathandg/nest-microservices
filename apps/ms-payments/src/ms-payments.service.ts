import { Injectable } from '@nestjs/common';

@Injectable()
export class MsPaymentsService {
  getHello(): string {
    return 'Hello World payments!';
  }
}
