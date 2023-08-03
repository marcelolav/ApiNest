import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class crearCompraCabeceraDTO {
  @ApiProperty()
  @IsDate()
  fecha: Date;
  @ApiProperty()
  @IsNumber()
  comprobante_cabecera: number;
  @ApiProperty()
  @IsNumber()
  idproveedores_cabecera: number;
  @ApiProperty()
  @IsNumber()
  totalcompra: number;
}
