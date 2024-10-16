import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Item } from "./Item";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", nullable: true })
  categoria_id: number;

  @Column({ type: "varchar", length: 255 })
  codigo: string;

  @Column({ type: "varchar", length: 255 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Categoria, (categoria) => categoria.categoria_id)
  categoria: Categoria;

  @OneToMany(() => Item, (item) => item.categoria)
  items: Item[];
}
