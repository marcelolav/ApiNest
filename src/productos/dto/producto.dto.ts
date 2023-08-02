import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class crearProductoDTO {
  // idproductos: number;
  @IsString()
  @MinLength(3)
  codigobarra: string;
  @IsString()
  @MinLength(15)
  nombreproducto: string;
  @IsString()
  descripcion: string;
  @IsNumber()
  @Min(0)
  precioventa: number;
  @IsNumber()
  @Min(0)
  precioventausd: number;
  @IsNumber()
  @Min(0)
  preciocompra: number;
  @IsNumber()
  @Min(0)
  preciocomprausd: number;
  @IsNumber()
  @Min(0)
  existencia: number;
  @IsNumber()
  @Min(1)
  minimo: number;
  @IsNumber()
  @Min(1)
  rubroid: number;
  // @IsString()
  // nombrerubro: string;
  @IsString()
  fotoproducto: string;
}
