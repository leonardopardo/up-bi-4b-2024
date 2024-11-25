import { DataSource, Repository } from "typeorm";
import { Transaccion } from "../entities/Transaccion";
import { getDataSource } from "../MyDataSource";

export class TransaccionService {
  private repository: Repository<Transaccion>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Transaccion);
  }

  async find(): Promise<Transaccion[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Transaccion> {
    return await this.repository.find({ where: { id } })[0];
  }

  async store(transaccion: Transaccion): Promise<Transaccion> {
    return await this.repository.save(transaccion);
  }
}
