import { DataSource } from "typeorm";
import { EstadoTicket } from "../entities/EstadoTicket";

export class EstadoTicketSeeder {
  public static async seed(ds: DataSource) {
    const estadoTicketRepository = ds.getRepository(EstadoTicket);
    await estadoTicketRepository.delete({});

    const estados = [
      { codigo: "RES", descripcion: "Reservado" },
      { codigo: "REC", descripcion: "Rechazado" },
      { codigo: "PEN", descripcion: "Pendiente" },
      { codigo: "UTL", descripcion: "Utilizado" },
      { codigo: "CAN", descripcion: "Cancelado" },
    ];

    for (const estado of estados) {
      const estadoTicket = new EstadoTicket();
      estadoTicket.codigo = estado.codigo;
      estadoTicket.descripcion = estado.descripcion;
      await estadoTicketRepository.save(estadoTicket);
    }
  }
}
