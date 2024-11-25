import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Ticket } from "./Ticket";
import { Comprobante } from "./Comprobante";
import { TipoComprobante } from "./TipoComprobante";

@Entity()
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  cliente_id: number;

  @Column({ type: "int", nullable: true })
  comprobante_id: number;

  @Column({ type: "int" })
  comprobante_tipo_id: number;

  @Column({ type: "int" })
  medio_pago_id: number;

  @Column({ type: "int" })
  estado_transaccion_id: number;

  @Column({ type: "int", nullable: true })
  ticket_id: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  monto: number;

  @CreateDateColumn()
  fecha_transaccion: Date;

  // @ManyToOne(() => Ticket, (ticket) => ticket.id)
  // @JoinColumn({ name: "ticket_id" })
  // ticket: Ticket;

  @ManyToOne(() => Cliente, (cliente) => cliente.transacciones)
  @JoinColumn({ name: "cliente_id" })
  cliente: Cliente;

  // @ManyToOne(() => Comprobante, (comprobante) => comprobante.transacciones)
  // @JoinColumn({ name: "comprobante_id" })
  // comprobante: Comprobante;

  @ManyToOne(
    () => TipoComprobante,
    (tipoComprobante) => tipoComprobante.transacciones
  )
  @JoinColumn({ name: "comprobante_tipo_id" })
  comprobante_tipo: TipoComprobante;
}
