import { DataSource } from "typeorm";
import { Item } from "../entities/Item";
import { ItemsMock } from "./lists/ItemsMock";

export class ItemSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const itemRepository = ds.getRepository(Item);
    //await itemRepository.delete({});

    const items = ItemsMock

    await itemRepository.save(items);

    console.log(`${items.length} items seeded successfully`);
  }
}
