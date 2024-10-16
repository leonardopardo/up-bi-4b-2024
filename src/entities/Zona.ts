import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";
import { Evento } from "./Evento";
import { Ticket } from "./Ticket";
import { Predio } from "./Predio";

@Entity()
export class Zona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  predio_id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "int" })
  capacidad: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Predio, (predio) => predio.zonas)
  predio: Predio;

  @OneToMany(() => Ticket, (ticket) => ticket.zona)
  tickets: Ticket[];
}
