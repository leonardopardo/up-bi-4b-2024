import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Club } from "./Club";
import { DeporteTipo } from "./DeporteTipo";

@Entity()
export class Deporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  club_id: number;

  @Column({ type: "int" })
  deporte_tipo_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => DeporteTipo, (deporteTipo) => deporteTipo.id)
  @JoinColumn({ name: "deporte_tipo_id" })
  deporte_tipo: DeporteTipo;

  @OneToMany(() => Deporte, (deporte) => deporte.club)
  @JoinColumn({ name: "club_id" })
  club: Club;
}
