import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ventascabecera' })
export class VentasCabecera {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idventascabecera: number;
  @Column({ type: 'date', nullable: false })
  fecha: Date;
  @Column({ type: 'decimal', precision: 20, scale: 0, nullable: false })
  comprobante_cabecera: number;
  @Column({ type: 'int' })
  idclientes_cabecera: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    unique: true,
    nullable: false,
  })
  totalventa: number;
}
