import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Ticket } from "./Ticket";
import { Comprobante } from "./Comprobante";

@Entity()
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  cliente_id: number;

  @Column({ type: "int" })
  comprobante_id: number;

  @Column({ type: "int" })
  comprobante_tipo_id: number;

  @Column({ type: "int" })
  medio_pago_id: number;

  @Column({ type: "int" })
  estado_transaccion_id: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  monto: number;

  @CreateDateColumn()
  fecha_transaccion: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.transacciones)
  cliente: Cliente;

  @ManyToOne(() => Comprobante, (comprobante) => comprobante.transacciones)
  comprobante: Comprobante;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  ticket: Ticket;
}
