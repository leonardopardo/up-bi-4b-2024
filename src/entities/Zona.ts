import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
  JoinColumn,
} from "typeorm";
import { Ubicacion } from "./Ubicacion";
import { Club } from "./Club";

@Entity()
export class Zona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  club_id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "varchar", length: 255 })
  descripcion: string;

  @Column({ type: "int" })
  capacidad: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Club, (club) => club.zonas)
  @JoinColumn({ name: "club_id" })
  club: Club;

  @OneToMany(() => Ubicacion, (ubicacion) => ubicacion.zona)
  ubicaciones: Ubicacion[];
}
