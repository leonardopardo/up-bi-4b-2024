import { DataSource } from "typeorm";
import { Ubicacion } from "../entities/Ubicacion";
import { Zona } from "../entities/Zona";
import { faker } from "@faker-js/faker";

export class UbicacionSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const ubicacionRepository = ds.getRepository(Ubicacion);
    const zonaRepository = ds.getRepository(Zona);

    // Borrar ubicaciones existentes
    // await ubicacionRepository.delete({});

    // Obtener todas las zonas
    const zonas: Zona[] = await zonaRepository.find();

    if (zonas.length === 0) {
      throw new Error("No se encontraron zonas para generar ubicaciones.");
    }

    let ubicaciones: number = 0;

    // Para cada zona, generar 100 ubicaciones
    for (const zona of zonas) {
      for (let fila = 1; fila <= 20; fila++) {
        for (let numero = 1; numero <= 100; numero++) {
          const ubicacion = new Ubicacion();
          ubicacion.zona = zona;
          ubicacion.fila = fila;
          ubicacion.numero = numero;
          await ubicacionRepository.save(ubicacion);
          ubicaciones++;
        }
      }
    }

    console.log(`${ubicaciones} ubicaciones creadas exitosamente.`);
  }
}
