import { Module } from '@nestjs/common';
import { OrderBookController } from './order-book.controller';
import { OrderBookService } from './order-book.service';

@Module({
  imports: [],
  controllers: [OrderBookController],
  providers: [OrderBookService],
})
export class OrderBookModule {}
