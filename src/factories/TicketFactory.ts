import { Ticket } from "../entities/Ticket";
import { EventoFacade } from "../facade/EventoFacade";
import { ClienteFacade } from "../facade/ClienteFacade";
import { EstadoTicketFacade } from "../facade/EstadoTicketFacade";
import { UbicacionFacade } from "../facade/UbicacionFacade";
import { faker } from "@faker-js/faker";

export class TicketFactory {
  static async create(): Promise<Ticket> {
    const t = new Ticket();
    t.evento_id = (await EventoFacade.findRandom()).id;
    t.cliente_id = (await ClienteFacade.findRandom()).id;
    t.estado_ticket_id = (await EstadoTicketFacade.findRandom()).id;
    t.ubicacion_id = (await UbicacionFacade.findRandom()).id;
    t.codigo = faker.string.uuid();

    return t;
  }

  static async createMany(cantidad: number): Promise<Ticket[]> {
    return Promise.all(
      Array.from({ length: cantidad }, () => TicketFactory.create())
    );
  }
}
