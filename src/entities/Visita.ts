import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Club } from "./Club";

@Entity()
export class Visita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  codigo: string;

  @Column({ type: "decimal" })
  precio: number;

  @Column({ type: "int" })
  duracion: number;

  @Column({ type: "date" })
  fecha: Date;

  @Column({ type: "int" })
  capacidad: number;

  @ManyToOne(() => Club, (club) => club.visitas)
  club: Club;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
