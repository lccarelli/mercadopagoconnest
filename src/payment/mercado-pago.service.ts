import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { CreatePreferenceDto } from './create-preference.dto';

@Injectable()
export class MercadoPagoService {
  async createPreference(createPreference: CreatePreferenceDto) {
    try {
      console.log('Get client Mercado Pago');
      const client = new MercadoPagoConfig({
        accessToken:
          'TEST-4195696878674288-053018-32b6b2fdaaf198a5dbb5d95e026db4b3-115397145',
      });
      console.log('client', client);
      const preference: Preference = new Preference(client);
      const preferenceCreated = await preference.create({
        body: {
          items: [
            {
              id: 'prueba',
              title: createPreference.title,
              quantity: createPreference.quantity,
              unit_price: createPreference.unit_price,
            },
          ],
        },
      });
      console.log('Preference created', preferenceCreated);
      return preferenceCreated;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
