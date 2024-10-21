import { DataSource } from "typeorm";
import { Item } from "../entities/Item";
import { Categoria } from "../entities/Categoria";
import { Club } from "../entities/Club";
import { faker } from "@faker-js/faker";

export class ItemSeeder {
  static async seed(ds: DataSource, cantidad: number): Promise<void> {
    const itemRepository = ds.getRepository(Item);

    await itemRepository.delete({});

    const categorias = await ds.getRepository(Categoria).find();
    const clubes = await ds.getRepository(Club).find();

    const items: Item[] = [];

    for (let i = 0; i < cantidad; i++) {
      const item = new Item();
      item.nombre = faker.commerce.productName();
      item.descripcion = faker.lorem.sentence();
      item.precio = parseInt(faker.commerce.price());
      item.categoria = faker.helpers.arrayElement(categorias);
      item.club = faker.helpers.arrayElement(clubes);
      item.stock = faker.number.int({ min: 10, max: 5000 });
      items.push(item);
    }
    await itemRepository.save(items);

    console.log(`${cantidad} items seeded successfully`);
  }
}
