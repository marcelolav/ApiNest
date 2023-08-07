import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class actualizarAuxProductoDTO {
  @ApiProperty()
  @IsNumber()
  cantidadcompra: number;
  @ApiProperty()
  @IsNumber()
  cantidadventa: number;
}
