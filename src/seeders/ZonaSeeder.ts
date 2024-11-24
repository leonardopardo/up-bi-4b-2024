import { DataSource } from "typeorm";
import { faker } from "@faker-js/faker";
import { Zona } from "../entities/Zona";
import { Club } from "../entities/Club";

export class ZonaSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const zonaRepository = ds.getRepository(Zona);
    const clubRepository = ds.getRepository(Club);

    // zonaRepository.delete({});

    const clubes: Club[] = await clubRepository.find();

    const zonas: Zona[] = [];

    for (let i = 0; i < clubes.length; i++) {
      const ps: Zona[] = [];

      const z1 = new Zona();
      z1.nombre = "Zona 1";
      z1.descripcion = "Platea Alta Norte";
      z1.capacidad = 2000; // faker.number.int({ min: , max: 50000 });
      z1.club = clubes[i];

      const z2 = new Zona();
      z2.nombre = "Zona 2";
      z2.descripcion = "Platea Alta Sur";
      z2.capacidad = 2000; // faker.number.int({ min: 5000, max: 15000 });
      z2.club = clubes[i];

      const z3 = new Zona();
      z3.nombre = "Zona 3";
      z3.descripcion = "Platea Baja Norte";
      z3.capacidad = 2000; // faker.number.int({ min: 5000, max: 15000 });
      z3.club = clubes[i];

      const z4 = new Zona();
      z4.nombre = "Zona 4";
      z4.descripcion = "Platea Baja Sur";
      z4.capacidad = 2000; // faker.number.int({ min: 5000, max: 15000 });
      z4.club = clubes[i];

      const z5 = new Zona();
      z5.nombre = "Zona 5";
      z5.descripcion = "Popular";
      z5.capacidad = 2000; // faker.number.int({ min: 5000, max: 15000 });
      z5.club = clubes[i];

      zonas.push(z1, z2, z3, z4, z5);
    }

    await zonaRepository.save(zonas);
    console.log("Zonas seeding complete!");
  }
}
