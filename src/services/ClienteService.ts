import { DataSource, Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";
import { getDataSource } from "../MyDataSource";

export class ClienteService {
  private repository: Repository<Cliente>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Cliente);
  }

  async find(): Promise<Cliente[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Cliente> {
    return await this.repository.find({ where: { id } })[0];
  }

  async findRandom(): Promise<Cliente> {
    const result = await this.repository.query(
      "SELECT * FROM cliente ORDER BY RANDOM() LIMIT 1"
    );

    return result[0];
  }
}
