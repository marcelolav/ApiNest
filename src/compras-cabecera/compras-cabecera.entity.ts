import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comprascabecera' })
export class ComprasCabecera {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idcomprascabecera: number;
  @Column({ type: 'date', nullable: false })
  fecha: Date;
  @Column({ type: 'decimal', precision: 20, scale: 0, nullable: false })
  comprobante_cabecera: number;
  @Column({ type: 'int' })
  idproveedores_cabecera: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    unique: true,
    nullable: false,
  })
  totalcompra: number;
}
