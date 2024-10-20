import { DataSource } from "typeorm";
import { Predio } from "../entities/Predio";
import { faker } from "@faker-js/faker";
import { Zona } from "../entities/Zona";

export class ZonaSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const zonaRepository = ds.getRepository(Zona);
    const predioRepository = ds.getRepository(Predio);

    predioRepository.delete({});

    const cotas: any = await zonaRepository.query(
      `select min(id) as min, max(id) as max from predio`
    );

    const { min, max } = cotas[0];

    // await predioRepository.delete({});

    // const zonas: Zona[] = [];

    // for (let i = min; i <= max; i++) {
    //   const ps: Zona[] = [];

    //   const z1 = new Zona();
    //   z1.predio_id = i;
    //   z1.nombre = "Zona 1";
    //   z1.descripcion = "Platea Alta Norte";
    //   z1.capacidad = faker.number.int({ min: 20000, max: 50000 });

    //   const z2 = new Zona();
    //   z2.predio_id = i;
    //   z2.nombre = "Zona 2";
    //   z2.descripcion = "Platea Alta Sur";
    //   z2.capacidad = faker.number.int({ min: 5000, max: 15000 });

    //   const z3 = new Zona();
    //   z3.predio_id = i;
    //   z3.nombre = "Zona 3";
    //   z3.descripcion = "Platea Baja Norte";
    //   z3.capacidad = faker.number.int({ min: 5000, max: 15000 });

    //   const z3 = new Zona();
    //   z3.predio_id = i;
    //   z3.nombre = "Zona 4";
    //   z3.descripcion = "Platea Baja Sur";
    //   z3.capacidad = faker.number.int({ min: 5000, max: 15000 });

    //   const z3 = new Zona();
    //   z3.predio_id = i;
    //   z3.nombre = "Zona 5";
    //   z3.descripcion = "Campo";
    //   z3.capacidad = faker.number.int({ min: 5000, max: 15000 });

    //   const z3 = new Zona();
    //   z3.predio_id = i;
    //   z3.nombre = "Zona 6";
    //   z3.descripcion = "Popular";
    //   z3.capacidad = faker.number.int({ min: 5000, max: 15000 });

    //   zonas.push(z1, z2, z3, z4, z5, z6);
    // }

    // await zonaRepository.save(zonas);
    // console.log("Predio seeding complete!");
  }
}
