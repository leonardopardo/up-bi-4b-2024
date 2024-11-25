import { DataSource, Repository } from "typeorm";
import { EstadoTicket } from "../entities/EstadoTicket";
import { getDataSource } from "../MyDataSource";

export class EstadoTicketService {
  private repository: Repository<EstadoTicket>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(EstadoTicket);
  }

  async find(): Promise<EstadoTicket[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<EstadoTicket> {
    return await this.repository.find({ where: { id } })[0];
  }

  async findRandom(): Promise<EstadoTicket> {
    const count = await this.repository.count();
    const random = Math.floor(Math.random() * count);
    return await this.repository.find()[random];
  }
}
