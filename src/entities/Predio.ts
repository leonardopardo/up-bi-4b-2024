import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Club } from "./Club";
import { Zona } from "./Zona";

@Entity()
export class Predio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  club_id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "int" })
  capacidad: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Club, (club) => club.id)
  club: Club;

  @OneToMany(() => Zona, (zona) => zona.predio)
  zonas: Zona[];
}
