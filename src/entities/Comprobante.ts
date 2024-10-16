import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Transaccion } from "./Transaccion";

@Entity()
export class Comprobante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  cliente_id: number;

  @Column({ type: "varchar", length: 255 })
  codigo: string;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal" })
  monto_total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.comprobantes)
  cliente: Cliente;

  @OneToMany(() => Transaccion, (transaccion) => transaccion.comprobante)
  transacciones: Transaccion[];
}
