import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Categoria } from "./Categoria";
import { Club } from "./Club";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  categoria_id: number;

  @Column({ type: "int" })
  club_id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio: number;

  @Column({ type: "int" })
  stock: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.items)
  @JoinColumn({ name: "categoria_id" })
  categoria: Categoria;

  @ManyToOne(() => Club, (club) => club.items)
  @JoinColumn({ name: "club_id" })
  club: Club;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
