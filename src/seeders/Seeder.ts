import "reflect-metadata";
import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaSeeder } from "./CategoriaSeeder";

export class Seeder {
  async run() {
    try {
      const dataSource: DataSource = getDataSource();
      const categoriaSeeder = new CategoriaSeeder(dataSource);
      await categoriaSeeder.seed(100);
      console.log("Seeding complete!");
    } catch (error) {
      console.error("Error during seeding: ", error);
    } finally {
      process.exit(0);
    }
  }
}
