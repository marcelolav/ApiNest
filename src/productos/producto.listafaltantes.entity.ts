import { IsNumber, IsString } from 'class-validator';
import { ViewEntity, Column } from 'typeorm';

@ViewEntity({})
export class Productolistafaltantes {
  @Column()
  @IsNumber()
  idproductos: number;

  @Column()
  @IsString()
  codigobarra: string;

  @Column()
  @IsString()
  nombreproducto: string;

  @Column()
  @IsNumber()
  preciocompra: number;

  @Column()
  @IsNumber()
  preciocomprausd: number;

  @Column()
  @IsNumber()
  existencia: number;

  @Column()
  @IsNumber()
  minimo: number;
  @Column()
  @IsString()
  nombrerubro: string;
}
