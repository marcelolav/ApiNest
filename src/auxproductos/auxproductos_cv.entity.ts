import { IsNumber, IsString } from 'class-validator';
import { Column, ViewEntity } from 'typeorm';
@ViewEntity({})
export class Productos_cv {
  @Column()
  @IsString()
  nombreproducto: string;
  @Column()
  @IsString()
  rubro: string;
  @Column()
  @IsNumber()
  compras: number;
  @Column()
  @IsNumber()
  ventas: number;
}
