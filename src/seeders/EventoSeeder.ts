import { DataSource } from "typeorm";
import { Evento } from "../entities/Evento";
import { Deporte } from "../entities/Deporte";
import { faker } from "@faker-js/faker";

export class EventoSeeder {
  static async seed(ds: DataSource): Promise<void> {
    const eventoRepository = ds.getRepository(Evento);
    const deporteRepository = ds.getRepository(Deporte);

    // Borrar todos los eventos existentes
    await eventoRepository.delete({});

    // Obtener todos los deportes disponibles para asignar a los eventos
    const deportes: Deporte[] = await deporteRepository.find();

    if (deportes.length === 0) {
      throw new Error("No se encontraron deportes para asignar a los eventos.");
    }

    // Fechas de los eventos (2 en marzo, 2 en abril, 3 en mayo, 2 en junio y 1 en julio de 2025)
    const fechas_eventos = [
      new Date("2025-03-10"),
      new Date("2025-03-25"),
      new Date("2025-04-15"),
      new Date("2025-04-30"),
      new Date("2025-05-05"),
      new Date("2025-05-20"),
      new Date("2025-05-30"),
      new Date("2025-06-10"),
      new Date("2025-06-25"),
      new Date("2025-07-10"),
    ];

    const eventos: Evento[] = [];

    for (const fecha_evento of fechas_eventos) {
      const evento = new Evento();

      // Fecha del evento
      evento.fecha_evento = fecha_evento;

      // Fecha de apertura de venta (90 días antes del evento)
      const fecha_apertura_venta = new Date(fecha_evento);
      fecha_apertura_venta.setDate(fecha_evento.getDate() - 90);
      evento.fecha_apertura_venta = fecha_apertura_venta;

      // Fecha de cierre de venta (día del evento)
      evento.fecha_cierre_venta = fecha_evento;

      // Descripción generada con Faker
      evento.descripcion = faker.lorem.sentence();

      // Asignar deporte de forma aleatoria
      evento.deporte = faker.helpers.arrayElement(deportes);

      eventos.push(evento);
    }

    // Guardar los eventos generados en la base de datos
    await eventoRepository.save(eventos);

    console.log("10 eventos seeded successfully!");
  }
}
