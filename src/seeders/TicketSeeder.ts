import { DataSource } from "typeorm";
import { Ticket } from "../entities/Ticket";
import { Evento } from "../entities/Evento";
import { Ubicacion } from "../entities/Ubicacion";
import { Cliente } from "../entities/Cliente";
import { EstadoTicket } from "../entities/EstadoTicket";
import { Zona } from "../entities/Zona";
import { faker } from "@faker-js/faker";

export class TicketSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const ticketRepository = ds.getRepository(Ticket);
    const eventoRepository = ds.getRepository(Evento);
    const ubicacionRepository = ds.getRepository(Ubicacion);
    const clienteRepository = ds.getRepository(Cliente);
    const estadoTicketRepository = ds.getRepository(EstadoTicket);
    const zonaRepository = ds.getRepository(Zona);

    // Borrar todos los tickets existentes
    await ticketRepository.delete({});

    // Obtener todos los eventos, clientes y estados de ticket
    const eventos: Evento[] = await eventoRepository.find();
    const clientes: Cliente[] = await clienteRepository.find();
    const estadosTicket: EstadoTicket[] = await estadoTicketRepository.find();

    if (eventos.length === 0) {
      throw new Error("No se encontraron eventos para generar tickets.");
    }
    if (clientes.length === 0) {
      throw new Error("No se encontraron clientes para asignar a los tickets.");
    }
    if (estadosTicket.length === 0) {
      throw new Error("No se encontraron estados de tickets.");
    }

    const tickets: Ticket[] = [];

    // Para cada evento, generar tickets ocupando hasta el 75% de las ubicaciones de cada zona
    for (const evento of eventos) {
      // Obtener las 6 zonas para el evento
      const zonas: Zona[] = await zonaRepository.find({ take: 6 });

      if (zonas.length === 0) {
        console.log(`No se encontraron zonas para el evento ${evento.id}`);
        continue;
      }

      for (const zona of zonas) {
        // Obtener todas las ubicaciones disponibles para esta zona
        const ubicaciones: Ubicacion[] = await ubicacionRepository.find({
          where: { zona_id: zona.id },
        });

        if (ubicaciones.length === 0) {
          console.log(
            `No se encontraron ubicaciones para la zona ${zona.id} del evento ${evento.id}`
          );
          continue;
        }

        // Calcular el número de ubicaciones a ocupar (no más del 75%)
        const porcentajeOcupacion = faker.number.int({ min: 45, max: 75 });
        const numUbicacionesOcupadas = Math.floor(
          (porcentajeOcupacion / 100) * ubicaciones.length
        );

        // Seleccionar ubicaciones de forma aleatoria y generar los tickets
        const ubicacionesOcupadas = faker.helpers
          .shuffle(ubicaciones)
          .slice(0, numUbicacionesOcupadas);

        for (const ubicacion of ubicacionesOcupadas) {
          const ticket = new Ticket();

          // Asignar evento, ubicaciones, cliente y estado al ticket
          ticket.evento = evento;
          ticket.ubicacion = ubicacion;
          ticket.cliente = faker.helpers.arrayElement(clientes);
          ticket.estado_ticket = faker.helpers.arrayElement(estadosTicket);
          ticket.created_at = new Date();
          ticket.updated_at = new Date();

          tickets.push(ticket);
        }
      }
    }

    // Guardar todos los tickets generados en la base de datos
    await ticketRepository.save(tickets);

    console.log(
      `${tickets.length} tickets seeded successfully for all events.`
    );
  }
}
