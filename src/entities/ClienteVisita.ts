import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Visita } from "./Visita";

@Entity()
export class ClienteVisita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  cliente_id: number;

  @Column({ type: "int" })
  visita_id: number;

  @Column({ type: "varchar", length: 255 })
  codigo: string;

  @Column({
    type: "enum",
    enum: ["vendido", "pagado"],
    default: "vendido",
  })
  estado: string;

  @Column({ type: "boolean" })
  presented: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.id)
  cliente: Cliente;

  @ManyToOne(() => Visita, (visita) => visita.id)
  visita: Visita;
}
