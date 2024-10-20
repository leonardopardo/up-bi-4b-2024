import { DataSource } from "typeorm";
import { Predio } from "../entities/Predio";
import { Club } from "../entities/Club";
import { faker } from "@faker-js/faker";

export class PredioSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const predioRepository = ds.getRepository(Predio);
    const clubRepository = ds.getRepository(Club);

    predioRepository.delete({});

    const cotas: any = await clubRepository.query(
      `select min(id) as min, max(id) as max from club`
    );

    const { min, max } = cotas[0];

    await predioRepository.delete({});

    const predios: Predio[] = [];

    for (let i = min; i <= max; i++) {
      const ps: Predio[] = [];

      const estadio = new Predio();
      estadio.club_id = i;
      estadio.nombre = "Estadio";
      estadio.descripcion = "Estadio principal";
      estadio.capacidad = faker.number.int({ min: 20000, max: 50000 });

      const club = new Predio();
      club.club_id = i;
      club.nombre = "Club";
      club.descripcion = "Cede Central";
      club.capacidad = faker.number.int({ min: 5000, max: 15000 });

      predios.push(estadio, club);
    }

    await predioRepository.save(predios);
    console.log("Predio seeding complete!");
  }
}
