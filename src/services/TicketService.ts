import { DataSource, Repository } from "typeorm";
import { Ticket } from "../entities/Ticket";
import { getDataSource } from "../MyDataSource";

export class TicketService {
  private repository: Repository<Ticket>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Ticket);
  }

  async find(): Promise<Ticket[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Ticket> {
    return await this.repository.find({ where: { id } })[0];
  }

  async store(ticket: Ticket): Promise<Ticket> {
    return await this.repository.save(ticket);
  }
}
