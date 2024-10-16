import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaFactory } from "../factories/CategoriaFactory";
import { Categoria } from "../entities/Categoria";

export class CategoriaSeeder {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = getDataSource();
  }

  async seed(cantidad: number): Promise<void> {
    const categoriaRepository = this.dataSource.getRepository(Categoria);

    // Crear varias categorías de una vez
    const categorias = CategoriaFactory.createMany(cantidad);

    // Guardar todas las categorías en la base de datos
    await categoriaRepository.save(categorias);

    console.log(`${cantidad} categorias seeded successfully`);
  }
}
