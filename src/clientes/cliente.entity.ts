import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idclientes: number;
  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  nombrecliente: string;
  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  telefono: string;
  @Column({ type: 'varchar', length: 45, nullable: false })
  direccion: string;
  @Column({ type: 'varchar', length: 45, unique: true, nullable: false })
  cuit: string;
  @Column({ type: 'longtext' })
  observaciones: string;
}
