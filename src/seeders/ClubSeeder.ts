import { DataSource } from "typeorm";
import { Club } from "../entities/Club";
import { ClubesMock } from "./lists/Clubes";

export class ClubSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const clubRepository = ds.getRepository(Club);

    const clubes: Partial<Club>[] = ClubesMock;

    await clubRepository.save(clubes);

    console.log(`${clubes.length} clubs seeded successfully`);
  }
}
