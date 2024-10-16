import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { Cliente } from "../entities/Cliente";
import { ClienteFactory } from "../factories/ClienteFactory";

export class ClienteSeeder {
  static async seed(ds: DataSource, cantidad: number): Promise<void> {
    const clienteRepository = ds.getRepository(Cliente);

    await clienteRepository.delete({});

    const clientes = ClienteFactory.createMany(cantidad);

    await clienteRepository.save(clientes);

    console.log(`${cantidad} clientes seeded successfully`);
  }
}
