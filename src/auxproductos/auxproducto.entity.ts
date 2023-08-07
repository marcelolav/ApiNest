import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'auxproductos' })
export class Auxproducto {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idauxproductos: number;
  @Column({ type: 'int' })
  idproductos: number;
  @Column({ type: 'int' })
  cantidadcompra: number;
  @Column({ type: 'int' })
  cantidadventa: number;
}
