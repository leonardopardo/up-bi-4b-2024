import { faker } from "@faker-js/faker";
import { Categoria } from "../entities/Categoria";

export class CategoriaFactory {
  static create(): Categoria {
    const categoria = new Categoria();
    categoria.codigo = faker.string.alphanumeric(10);
    categoria.nombre = faker.commerce.department();
    categoria.descripcion = faker.lorem.sentence();
    categoria.created_at = new Date();
    categoria.updated_at = new Date();

    return categoria;
  }

  static createMany(n: number): Categoria[] {
    const categorias = [];
    for (let i = 0; i < n; i++) {
      categorias.push(this.create());
    }
    return categorias;
  }
}
