import { faker } from "@faker-js/faker";
import { Cliente } from "../entities/Cliente";
import * as bcrypt from "bcryptjs";

export class ClienteFactory {
  static create(): Cliente {
    const c = new Cliente();
    c.nombre = faker.person.firstName();
    c.apellido = faker.person.lastName();
    c.email = faker.internet.email().toLowerCase();
    c.password = bcrypt.hashSync(faker.internet.password(), 10);
    c.created_at = new Date();
    c.updated_at = new Date();

    return c;
  }

  static createMany(n: number): Cliente[] {
    return Array.from({ length: n }, () => this.create());
  }
}
