import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Rubro } from '../rubros/rubro.entity';

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
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  precioventa: number;
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  precioventausd: number;
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  preciocompra: number;
  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
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
