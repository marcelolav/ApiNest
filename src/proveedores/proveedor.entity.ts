import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proveedores' })
export class Proveedor {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idproveedores: number;
  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  nombreproveedor: string;
  @Column({ type: 'varchar', length: 200 })
  referencia: string;
  @Column({ type: 'datetime' })
  fechaultimacompra: Date;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalcompras: number;
}
