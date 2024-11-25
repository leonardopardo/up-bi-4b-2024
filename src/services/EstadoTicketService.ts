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
    const result = await this.repository.query(
      `SELECT *  FROM (
          SELECT * FROM estado_ticket
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
          UNION ALL
          SELECT * FROM estado_ticket WHERE id = 4
        ) AS weighted_tickets
        ORDER BY RANDOM()
        LIMIT 1;`
    );

    return result[0];
  }
}
