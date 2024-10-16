import { faker } from "@faker-js/faker";
import { Categoria } from "../entities/Categoria";
export class CategoriaFactory {
  static create(): Categoria {
    const categoria = new Categoria();
    categoria.codigo = faker.string.alphanumeric(5).toUpperCase();
    categoria.nombre = faker.commerce.department();
    categoria.descripcion = faker.lorem.sentence();
    categoria.created_at = new Date();
    categoria.updated_at = new Date();

    return categoria;
  }

  static createMany(n: number): Categoria[] {
    return Array.from({ length: n }, () => this.create());
  }
}
