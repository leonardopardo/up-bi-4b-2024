import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Comprobante } from "./Comprobante";
import { Ticket } from "./Ticket";
import { Transaccion } from "./Transaccion";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  apellido: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Comprobante, (comprobante) => comprobante.cliente)
  comprobantes: Comprobante[];

  @OneToMany(() => Ticket, (ticket) => ticket.cliente)
  tickets: Ticket[];

  @OneToMany(() => Transaccion, (transaccion) => transaccion.cliente)
  transacciones: Transaccion[];
}
