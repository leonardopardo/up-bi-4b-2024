import { DataSource, Repository } from "typeorm";
import { Categoria } from "../entities/Categoria";
import { getDataSource } from "../MyDataSource";

export class CategoriaService {
  private repository: Repository<Categoria>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Categoria);
  }

  async find(): Promise<Categoria[]> {
    return this.repository.find();
  }
}
