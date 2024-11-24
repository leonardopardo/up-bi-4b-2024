import { DataSource } from "typeorm";
import { DeporteTipo } from "../entities/DeporteTipo";

export class DeporteTipoSeeder {

  static async seed(ds: DataSource): Promise<void> {
    const deporteRepository = ds.getRepository(DeporteTipo);
    await deporteRepository.delete({});

    // Lista de deportes
    const deportes: Partial<DeporteTipo>[] = [
      { nombre: "Fútbol" },
      { nombre: "Futsal" }
    ];

    await deporteRepository.save(deportes);

    console.log("Tipos de Deportes insertados exitosamente");
  }
}
