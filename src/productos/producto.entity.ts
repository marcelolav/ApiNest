import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'productos' })
export class Producto {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idproductos: number;
  @Column({ type: 'varchar', length: 60 })
  codigobarra: string;
  @Column({ type: 'varchar', length: 50, unique: true })
  nombreproducto: string;
  @Column({ type: 'varchar', length: 250, unique: true })
  descripcion: string;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  precioventa: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  precioventausd: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  preciocompra: number;
  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0 })
  preciocomprausd: number;
  @Column({ type: 'int' })
  existencia: number;
  @Column({ type: 'int' })
  minimo: number;
  @Column({ type: 'int' })
  rubroid: number;
  @Column({ type: 'varchar', length: 200 })
  fotoproducto: string;
}
