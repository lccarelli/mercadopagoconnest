import { Module } from '@nestjs/common';
import { MercadoPagoModule } from './payment/mercado-pago.module';

@Module({
  imports: [MercadoPagoModule],
})
export class AppModule {}
