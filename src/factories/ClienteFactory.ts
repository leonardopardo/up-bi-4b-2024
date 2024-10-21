import { faker } from "@faker-js/faker";
import { Cliente } from "../entities/Cliente";
import * as bcrypt from "bcryptjs";

export class ClienteFactory {
  static create(): Cliente {
    const c = new Cliente();
    c.nombre = faker.person.firstName().toLocaleLowerCase();
    c.apellido = faker.person.lastName().toLocaleLowerCase();
    c.email = faker.internet.email().toLowerCase();
    c.password = bcrypt.hashSync(faker.internet.password(), 10);

    return c;
  }

  static createMany(n: number): Cliente[] {
    return Array.from({ length: n }, () => this.create());
  }
}
