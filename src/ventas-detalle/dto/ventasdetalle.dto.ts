import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class crearVentaDetalleDTO {
  @ApiProperty()
  @IsNumber()
  comprobante_detalle: number;
  @ApiProperty()
  @IsNumber()
  idproductos_detalle: number;
  @ApiProperty()
  @IsNumber()
  cantidad: number;
  @ApiProperty()
  @IsNumber()
  importe: number;
  @ApiProperty()
  @IsNumber()
  subtotal: number;
}
