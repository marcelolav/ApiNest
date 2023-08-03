import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class crearProductoDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  codigobarra: string;
  @ApiProperty()
  @IsString()
  @MinLength(15)
  nombreproducto: string;
  @ApiProperty()
  @IsString()
  descripcion: string;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  precioventa: number;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  precioventausd: number;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  preciocompra: number;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  preciocomprausd: number;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  existencia: number;
  @ApiProperty()
  @IsNumber()
  @Min(1)
  minimo: number;
  @ApiProperty()
  @IsNumber()
  @Min(1)
  rubroid: number;
  @ApiProperty()
  @IsString()
  fotoproducto: string;
}
