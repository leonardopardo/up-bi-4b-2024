import { DataSource } from "typeorm";
import { DeporteTipo } from "../entities/DeporteTipo";

export class DeporteTipoSeeder {

  static async seed(ds: DataSource): Promise<void> {
    const deporteRepository = ds.getRepository(DeporteTipo);
    await deporteRepository.delete({});

    // Lista de deportes
    const deportes: Partial<DeporteTipo>[] = [
      { nombre: "Fútbol" },
      { nombre: "Baloncesto" },
      { nombre: "Voleibol" },
      { nombre: "Hockey sobre césped" },
      { nombre: "Natación" },
      { nombre: "Tenis" },
      { nombre: "Rugby" },
      { nombre: "Handball" },
      { nombre: "Atletismo" },
      { nombre: "Boxeo" },
    ];

    await deporteRepository.save(deportes);

    console.log("Tipos de Deportes insertados exitosamente");
  }
}
