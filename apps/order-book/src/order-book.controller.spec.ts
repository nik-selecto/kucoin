import { Test, TestingModule } from '@nestjs/testing';
import { OrderBookController } from './order-book.controller';
import { OrderBookService } from './order-book.service';

describe('OrderBookController', () => {
  let orderBookController: OrderBookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderBookController],
      providers: [OrderBookService],
    }).compile();

    orderBookController = app.get<OrderBookController>(OrderBookController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderBookController.getHello()).toBe('Hello World!');
    });
  });
});
