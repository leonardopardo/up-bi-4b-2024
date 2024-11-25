import { DataSource, Repository } from "typeorm";
import { Zona } from "../entities/Zona";
import { getDataSource } from "../MyDataSource";

export class ZonaService {
  private repository: Repository<Zona>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Zona);
  }

  async find(): Promise<Zona[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Zona | undefined> {
    return await this.repository.find({ where: { id } })[0];
  }

  async save(zona: Zona): Promise<Zona> {
    return await this.repository.save(zona);
  }
}
