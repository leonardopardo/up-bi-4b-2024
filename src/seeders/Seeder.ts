import "reflect-metadata";
import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaSeeder } from "./CategoriaSeeder";
import { ClienteSeeder } from "./ClienteSeeder";

export class Seeder {
  async run() {
    try {
      const ds = getDataSource();
      await ds.initialize();
      await CategoriaSeeder.seed(ds, 50);
      await ClienteSeeder.seed(ds, 100);
      console.log("Seeding complete!");
    } catch (error) {
      console.error("Error during seeding: ", error);
    } finally {
      process.exit(0);
    }
  }
}
