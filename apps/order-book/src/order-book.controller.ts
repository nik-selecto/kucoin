import { Controller, Get } from '@nestjs/common';
import { OrderBookService } from './order-book.service';

@Controller()
export class OrderBookController {
  constructor(private readonly orderBookService: OrderBookService) {}

  @Get()
  getHello(): string {
    return this.orderBookService.getHello();
  }
}
