import { faker } from "@faker-js/faker";
import { Club } from "../entities/Club";

export class ClubFactory {
  static create(): Club {
    const o = new Club();
    o.nombre = faker.company.name();
    return o;
  }

  static createMany(n: number): Club[] {
    return Array.from({ length: n }, () => this.create());
  }
}
