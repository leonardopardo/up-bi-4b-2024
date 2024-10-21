import { faker } from "@faker-js/faker";
import { Item } from "../entities/Item";
import { CategoriaFacade } from "../facade/CategoriaFacade";
import { ClubFacade } from "../facade/ClubFacade";

export class ItemFactory {
  static async create(): Promise<Item> {
    const categorias = await CategoriaFacade.find();
    const clubes = await ClubFacade.find();

    const item = new Item();
    item.nombre = faker.commerce.productName();
    item.descripcion = faker.lorem.sentence();
    item.precio = parseInt(faker.commerce.price());
    item.categoria = faker.helpers.arrayElement(categorias);
    item.club = faker.helpers.arrayElement(clubes);
    item.stock = faker.number.int({ min: 10, max: 5000 });

    return item;
  }

  static createMany(n: number): Promise<Item[]> {
    return Promise.all(Array.from({ length: n }, () => this.create()));
  }
}
