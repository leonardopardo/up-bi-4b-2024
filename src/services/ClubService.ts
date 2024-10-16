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
    return this.repository.find();
  }

  async findById(id: number): Promise<Club> {
    return this.repository.findOne(id);
  }
}
