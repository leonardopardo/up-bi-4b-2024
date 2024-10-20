import "reflect-metadata";
import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaSeeder } from "./CategoriaSeeder";
import { ClienteSeeder } from "./ClienteSeeder";
import { ClubSeeder } from "./ClubSeeder";
import { DeporteTipoSeeder } from "./DeporteTipoSeeder";
import { DeporteSeeder } from "./DeporteSeeder";
import { PredioSeeder } from "./PredioSeeder";
import { ZonaSeeder } from "./ZonaSeeder";

export class Seeder {
  private ds: DataSource;

  constructor() {
    this.ds = getDataSource();
  }

  async run() {
    try {
      await this.ds.initialize();
      // await CategoriaSeeder.seed(this.ds, 50);
      // await ClienteSeeder.seed(this.ds, 100);
      // await ClubSeeder.seed(this.ds);
      // await DeporteTipoSeeder.seed(this.ds);
      // await DeporteSeeder.seed(this.ds);
      // await PredioSeeder.seed(this.ds);
    } catch (error) {
      console.error("Error during seeding: ", error);
    } finally {
      console.log("Seeding complete!");
      process.exit(0);
    }
  }
}
