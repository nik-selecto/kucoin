import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderBookService {
  getHello(): string {
    return 'Hello World!';
  }
}
