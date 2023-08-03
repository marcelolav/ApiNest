import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rubros' })
export class Rubro {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idrubros: number;
  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  nombrerubro: string;
}
