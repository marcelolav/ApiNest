import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class crearAuxproductoDTO {
  @ApiProperty()
  @IsNumber()
  idproductos: number;
  @ApiProperty()
  @IsNumber()
  cantidadcompra: number;
  @ApiProperty()
  @IsNumber()
  cantidadventa: number;
}
