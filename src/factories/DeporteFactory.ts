import { faker } from "@faker-js/faker";
import { Deporte } from "./../entities/Deporte";
import { ClubFacade } from "../facade/ClubFacade";

export class DeporteFactory {
  static create(): Deporte {
    const o = new Deporte();
    o.nombre = faker.person.firstName();
    o.club = ClubFacade.find()[faker.datatype.number({ min: 0, max: 50 })];
    return o;
  }

  static createMany(n: number): Deporte[] {
    return Array.from({ length: n }, () => this.create());
  }
}
