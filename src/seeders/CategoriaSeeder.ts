import { DataSource } from "typeorm";
import { Categoria } from "../entities/Categoria";
import { CategoriasMock } from "./lists/CategoriasMock";

export class CategoriaSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const categoriaRepository = ds.getRepository(Categoria);
    //await categoriaRepository.delete({});
    
    const categorias: Partial<Categoria>[] = CategoriasMock;

    await categoriaRepository.save(categorias);

    console.log(`${categorias.length} categorías seeded successfully`);
  }
}
