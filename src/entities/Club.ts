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
import { Zona } from "./Zona";
import { Item } from "./Item";

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "varchar", length: 255 })
  ciudad: string;

  @Column({ type: "int" })
  fundacion: number;

  @Column({ type: "varchar", length: 255 })
  estadio: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Deporte, (deporte) => deporte.club)
  deportes: Deporte[];

  @OneToMany(() => Zona, (zona) => zona.club)
  zonas: Zona[];

  @OneToMany(() => Visita, (visita) => visita.club)
  visitas: Visita[];

  @OneToMany(() => Item, (item) => item.club)
  items: Item[];
}
