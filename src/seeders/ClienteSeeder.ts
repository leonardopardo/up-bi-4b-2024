import { DataSource } from "typeorm";
import { Cliente } from "../entities/Cliente";
import { ClienteFactory } from "../factories/ClienteFactory";

export class ClienteSeeder {
  static async seed(ds: DataSource, cantidad: number): Promise<void> {
    const clienteRepository = ds.getRepository(Cliente);

    const clientes = ClienteFactory.createMany(cantidad);

    await clienteRepository.save(clientes);

    console.log(`${cantidad} clientes seeded successfully`);
  }
}
