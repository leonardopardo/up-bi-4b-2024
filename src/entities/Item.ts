import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio: number;

  @Column({ type: "int" })
  stock: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.items)
  categoria: Categoria;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
