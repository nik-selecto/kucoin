import { NestFactory } from '@nestjs/core';
import { OrderBookModule } from './order-book.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderBookModule);
  await app.listen(3000);
}
bootstrap();
