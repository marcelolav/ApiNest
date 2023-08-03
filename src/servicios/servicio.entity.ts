import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'servicios' })
export class Servicio {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idservicios: number;
  @Column({ type: 'varchar', length: 45, nullable: false })
  cliente: string;
  @Column({ type: 'varchar', length: 45, nullable: false })
  telefono: string;
  @Column({ type: 'datetime' })
  fechaingreso: Date;
  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  articulo: string;
  @Column({ type: 'varchar', length: 200, nullable: false })
  falla: string;
  @Column({ type: 'varchar', length: 200, unique: true, nullable: false })
  observaciones: string;
  @Column({ type: 'datetime' })
  fechasalida: Date;
  @Column({ type: 'decimal', precision: 9, scale: 2 })
  precioreparacion: number;
  @Column({ type: 'tinyint' })
  reparado: number;
}
