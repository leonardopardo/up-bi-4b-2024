import { DataSource } from "typeorm";
import { Deporte } from "../entities/Deporte";
import { DeporteTipo } from "../entities/DeporteTipo";
import { Club } from "../entities/Club";

export class DeporteSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const deporteRepository = ds.getRepository(Deporte);
    const deporteTipoRepository = ds.getRepository(DeporteTipo);
    const clubRepository = ds.getRepository(Club);

    // Limpiar tabla deportes para evitar duplicados
    // await deporteRepository.delete({});

    // Obtener todos los tipos de deportes
    const deporteTipos = await deporteTipoRepository.find();

    // Obtener todos los clubes
    const clubes = await clubRepository.find();

    // Asociar deportes a clubes y tipos de deportes
    // const deportes: Partial<Deporte>[] = [];

    for (const club of clubes) {
      for (const deporteTipo of deporteTipos) {
        const d = new Deporte();
        d.club_id = club.id;
        d.deporte_tipo_id = deporteTipo.id;
        await deporteRepository.save(d);
      }
    }

    // Guardar deportes en la base de datos
    // await deporteRepository.save(deportes);

    console.log("Deportes insertados exitosamente");
  }
}
