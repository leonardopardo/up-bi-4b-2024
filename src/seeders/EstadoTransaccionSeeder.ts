import { DataSource } from "typeorm";
import { EstadoTicket } from "../entities/EstadoTicket";
import { EstadoTransaccion } from "../entities/EstadoTransaccion";

export class EstadoTransaccionSeeder {
  public static async seed(ds: DataSource) {
    const estadoTransaccionRepository = ds.getRepository(EstadoTransaccion);
    await estadoTransaccionRepository.delete({});

    const estados = [
      { codigo: "RES", descripcion: "Aprobado" },
      { codigo: "REC", descripcion: "Rechazado" },
      { codigo: "PEN", descripcion: "Pendiente" },
      { codigo: "CAN", descripcion: "Cancelado" },
    ];

    for (const estado of estados) {
      const estadoTicket = new EstadoTicket();
      estadoTicket.codigo = estado.codigo;
      estadoTicket.descripcion = estado.descripcion;
      await estadoTransaccionRepository.save(estadoTicket);
    }
  }
}
