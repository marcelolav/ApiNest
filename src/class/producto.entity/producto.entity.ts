import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  idproductos: number;

  @Column({ length: 60 })
  codigobarra: string;
  @Column({ length: 250 })
  nombreproducto: string;
  @Column({ length: 250 })
  descripcion: string;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  precioventa: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  precioventausd: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  preciocompra: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  preciocomprausd: number;
  @Column('int')
  existencia: number;
  @Column('int')
  minimo: number;
  @Column('int')
  rubroid: number;
  @Column({ length: 200 })
  fotoproducto: string;
}
