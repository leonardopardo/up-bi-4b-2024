import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Evento } from "./Evento";
import { Zona } from "./Zona";
import { Cliente } from "./Cliente";
import { EstadoTicket } from "./EstadoTicket";

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
  zona_id: number;

  @Column({
    type: "enum",
    enum: ["disponible", "vendido", "pagado"],
    default: "disponible",
  })
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Evento, (evento) => evento.tickets)
  evento: Evento;

  @ManyToOne(() => Zona, (zona) => zona.tickets)
  zona: Zona;

  @ManyToOne(() => Cliente, (cliente) => cliente.tickets)
  cliente: Cliente;

  @ManyToOne(() => EstadoTicket, (estado_ticket) => estado_ticket.tickets)
  estado_ticket: EstadoTicket;
}
