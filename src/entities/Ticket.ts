import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Evento } from "./Evento";
import { Ubicacion } from "./Ubicacion";
import { Cliente } from "./Cliente";
import { EstadoTicket } from "./EstadoTicket";
import { Transaccion } from "./Transaccion";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  cliente_id: number;

  @Column({ type: "int" })
  estado_ticket_id: number;

  @Column({ type: "int" })
  evento_id: number;

  @Column({ type: "int" })
  ubicacion_id: number;

  @Column({ type: "varchar" })
  codigo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  // @OneToMany(() => Transaccion, (transaccion) => transaccion.ticket)
  // transacciones: Transaccion[];

  @ManyToOne(() => Evento, (evento) => evento.tickets)
  @JoinColumn({ name: "evento_id" })
  evento: Evento;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.tickets)
  @JoinColumn({ name: "ubicacion_id" })
  ubicacion: Ubicacion;

  @ManyToOne(() => Cliente, (cliente) => cliente.tickets)
  @JoinColumn({ name: "cliente_id" })
  cliente: Cliente;

  @ManyToOne(() => EstadoTicket, (estado_ticket) => estado_ticket.tickets)
  @JoinColumn({ name: "estado_ticket_id" })
  estado_ticket: EstadoTicket;
}
