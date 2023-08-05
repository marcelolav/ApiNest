import { IsNumber, IsString } from 'class-validator';
import { ViewEntity, Column } from 'typeorm';

@ViewEntity({})
export class Productolistaprecios {
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
  precioventa: number;

  @Column()
  @IsNumber()
  precioventausd: number;

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
