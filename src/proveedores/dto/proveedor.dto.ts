import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class crearProveedorDTO {
  @ApiProperty()
  @IsString()
  @MinLength(5)
  nombreproveedor: string;
  @ApiProperty()
  @IsString()
  @MinLength(8)
  referencia: string;
  @ApiProperty()
  @IsString()
  fechaultimacompra: Date;
  @ApiProperty()
  @IsNumber()
  totalcompras: number;
}
