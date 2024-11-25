import { DataSource, Repository } from "typeorm";
import { Ubicacion } from "../entities/Ubicacion";
import { getDataSource } from "../MyDataSource";

export class UbicacionService {
  private repository: Repository<Ubicacion>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Ubicacion);
  }

  async find(): Promise<Ubicacion[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Ubicacion> {
    return await this.repository.find({ where: { id } })[0];
  }

  async findByZone(id: number): Promise<Ubicacion[]> {
    return await this.repository.find({ where: { zona_id: id } });
  }

  async findRandom(): Promise<Ubicacion> {
    const result = await this.repository.query(
      "SELECT * FROM ubicacion ORDER BY RANDOM() LIMIT 1"
    );

    return result[0];
  }
}
