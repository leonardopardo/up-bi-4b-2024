import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Ticket } from "./Ticket";
import { Zona } from "./Zona";

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  zona_id: number;

  @Column({ type: "int" })
  fila: number;

  @Column({ type: "int" })
  numero: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Zona, (zona) => zona.ubicaciones)
  @JoinColumn({ name: "zona_id" })
  zona: Zona;

  @OneToMany(() => Ticket, (ticket) => ticket.ubicacion)
  tickets: Ticket[];
}
