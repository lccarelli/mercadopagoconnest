import { Controller, Post, Body, Res } from '@nestjs/common';
import { MercadoPagoService } from './mercado-pago.service';
import { CreatePreferenceDto } from './create-preference.dto';
import { Response } from 'express';

@Controller('payment')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}

  @Post()
  async createPreference(
    @Body() createPreferenceDto: CreatePreferenceDto,
    @Res() res: Response,
  ) {
    console.log('Create new preference', createPreferenceDto);

    try {
      const preference = {
        title: createPreferenceDto.title,
        quantity: createPreferenceDto.quantity,
        unit_price: createPreferenceDto.unit_price,
      };

      const preferenceResponse =
        await this.mercadoPagoService.createPreference(preference);
      res.json(preferenceResponse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
