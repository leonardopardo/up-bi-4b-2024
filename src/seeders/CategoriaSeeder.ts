import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaFactory } from "../factories/CategoriaFactory";
import { Categoria } from "../entities/Categoria";

export class CategoriaSeeder {
  static async seed(ds: DataSource, cantidad: number): Promise<void> {
    const categoriaRepository = ds.getRepository(Categoria);

    await categoriaRepository.delete({});

    const categorias = CategoriaFactory.createMany(cantidad);

    await categoriaRepository.save(categorias);

    console.log(`${cantidad} categorias seeded successfully`);
  }
}
