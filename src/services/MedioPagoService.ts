import { DataSource, Repository } from "typeorm";
import { MedioPago } from "../entities/MedioPago";
import { getDataSource } from "../MyDataSource";

export class MedioPagoService {
  private repository: Repository<MedioPago>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(MedioPago);
  }

  async find(): Promise<MedioPago[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<MedioPago> {
    return await this.repository.find({ where: { id } })[0];
  }

  async findRandom(): Promise<MedioPago> {
    const result = await this.repository.query(
      "SELECT * FROM medio_pago ORDER BY RANDOM() LIMIT 1;"
    );
    return result[0];
  }

  async store(medioPago: MedioPago): Promise<MedioPago> {
    return await this.repository.save(medioPago);
  }
}
