import { DataSource, Repository } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { Club } from "../entities/Club";

export class ClubService {
  private repository: Repository<Club>;

  constructor() {
    const ds: DataSource = getDataSource();
    this.repository = ds.manager.getRepository(Club);
  }

  async find(): Promise<Club[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Club> {
    return await this.repository.find({ where: { id } })[0];
  }
}
