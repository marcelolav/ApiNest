import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, MinLength } from 'class-validator';

export class crearVentaCabeceraDTO {
  @ApiProperty()
  @IsDate()
  @MinLength(5)
  fecha: Date;
  @ApiProperty()
  @IsNumber()
  comprobante_cabecera: number;
  @ApiProperty()
  @IsNumber()
  idclientes_cabecera: number;
  @ApiProperty()
  @IsNumber()
  totalventa: number;
}
