import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Deporte } from "./Deporte";
import { Ticket } from "./Ticket";

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  deporte_id: number;

  @Column()
  fecha_evento: Date;

  @Column()
  fecha_apertura_venta: Date;

  @Column()
  fecha_cierre_venta: Date;

  @Column({ type: "text" })
  descripcion: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Deporte, (deporte) => deporte.id)
  deporte: Deporte;

  @OneToMany(() => Ticket, (ticket) => ticket.evento)
  tickets: Ticket[];
}
