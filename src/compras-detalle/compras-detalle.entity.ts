import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comprasdetalle' })
export class ComprasDetalle {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idcomprasdetalle: number;
  @Column({ type: 'decimal', precision: 20, scale: 0, nullable: false })
  comprobante_detalle: number;
  @Column({ type: 'int', nullable: false })
  idproductos_detalle: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  importe: number;
  @Column({ type: 'int', nullable: false })
  cantidad: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    unique: true,
    nullable: false,
  })
  subtotal: number;
}
