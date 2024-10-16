import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Visita } from "./Visita";
import { Deporte } from "./Deporte";

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Deporte, (deporte) => deporte.club)
  deportes: Deporte[];

  @OneToMany(() => Visita, (visita) => visita.club)
  visitas: Visita[];
}
