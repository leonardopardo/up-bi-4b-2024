import { DataSource, Repository } from "typeorm";
import { Evento } from "../entities/Evento";
import { getDataSource } from "../MyDataSource";

export class EventoService {
  private repository: Repository<Evento>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Evento);
  }

  async find(): Promise<Evento[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Evento> {
    return await this.repository.find({ where: { id } })[0];
  }

  async findRandom(): Promise<Evento> {
    return await this.repository.query(
      "SELECT * FROM evento ORDER BY RAND() LIMIT 1"
    )[0];
  }
}
