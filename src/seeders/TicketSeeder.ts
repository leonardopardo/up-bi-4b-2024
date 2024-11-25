import { DataSource } from "typeorm";
import { Ticket } from "../entities/Ticket";
import { Evento } from "../entities/Evento";
import { Ubicacion } from "../entities/Ubicacion";
import { Cliente } from "../entities/Cliente";
import { EstadoTicket } from "../entities/EstadoTicket";
import { Zona } from "../entities/Zona";
import { faker } from "@faker-js/faker";
import { EventoFacade } from "../facade/EventoFacade";
import { ZonaFacade } from "../facade/ZonaFacade";
import { UbicacionFacade } from "../facade/UbicacionFacade";
import { ClienteFacade } from "../facade/ClienteFacade";
import { EstadoTicketFacade } from "../facade/EstadoTicketFacade";
import { TicketFacade } from "../facade/TicketFacade";
import { Transaccion } from "../entities/Transaccion";
import { MedioPagoFacade } from "../facade/MedioPagoFacade";
import { Comprobante } from "../entities/Comprobante";
import { TransaccionFacade } from "../facade/TransaccionFacade";

export class TicketSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const eventos: Evento[] = await EventoFacade.find();
    const zonas: Zona[] = await ZonaFacade.find();
    for (const evento of eventos) {
      for (const zona of zonas) {
        const ubicaciones: Ubicacion[] = await UbicacionFacade.findByZone(
          zona.id
        );
        const cantidadUbicaciones = Math.floor(
          ubicaciones.length * (0.75 + Math.random() * (0.98 - 0.75))
        );

        for (let i = 0; i < cantidadUbicaciones; i++) {
          const ticket = new Ticket();
          ticket.evento_id = evento.id;
          ticket.ubicacion_id = ubicaciones[i].id;
          ticket.cliente_id = (await ClienteFacade.findRandom()).id;
          ticket.estado_ticket_id = (await EstadoTicketFacade.findRandom()).id;
          ticket.codigo = faker.string.uuid();
          const nuevoTicket = await TicketFacade.store(ticket);

          const tr = new Transaccion();
          tr.ticket_id = nuevoTicket.id;
          tr.cliente_id = ticket.cliente_id;
          tr.medio_pago_id = (await MedioPagoFacade.findRandom()).id;
          tr.comprobante_tipo_id = 1;
          tr.comprobante_id = nuevoTicket.id;
          tr.estado_transaccion_id = 1;
          tr.monto = getAmount(zona);

          await TransaccionFacade.store(tr);
        }
      }
    }
  }
}

function getAmount(zona: Zona): number {
  switch (zona.nombre) {
    case "Zona 1":
      return (
        Math.floor(Math.random() * ((50000 - 20000) / 10000 + 1)) * 10000 +
        20000
      );
    case "Zona 2":
      return (
        Math.floor(Math.random() * ((100000 - 20000) / 10000 + 1)) * 10000 +
        20000
      );
    case "Zona 3":
      return (
        Math.floor(Math.random() * ((70000 - 20000) / 10000 + 1)) * 10000 +
        20000
      );
    case "Zona 4":
      return (
        Math.floor(Math.random() * ((100000 - 20000) / 10000 + 1)) * 10000 +
        20000
      );
    case "Zona 5":
      return (
        Math.floor(Math.random() * ((20000 - 20000) / 10000 + 1)) * 10000 +
        20000
      );
  }
}
