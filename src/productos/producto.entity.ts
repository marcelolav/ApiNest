import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Rubro } from './rubro.entity';

@Entity({ name: 'productos' })
export class Producto {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idproductos: number;
  @Column({ type: 'varchar', length: 60, unique: true, nullable: false })
  codigobarra: string;
  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  nombreproducto: string;
  @Column({ type: 'varchar', length: 250, nullable: false })
  descripcion: string;
  @Column({ type: 'decimal', precision: 9, scale: 2 })
  precioventa: number;
  @Column({ type: 'decimal', precision: 9, scale: 2 })
  precioventausd: number;
  @Column({ type: 'decimal', precision: 9, scale: 2 })
  preciocompra: number;
  @Column({ type: 'decimal', precision: 9, scale: 2 })
  preciocomprausd: number;
  @Column({ type: 'int' })
  existencia: number;
  @Column({ type: 'int' })
  minimo: number;
  @OneToOne((type) => Rubro, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'rubroid' })
  rubro: Rubro;
  @Column({ type: 'int' })
  rubroid: number;
  @Column({ type: 'varchar', length: 200 })
  fotoproducto: string;
}
