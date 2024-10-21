import { DataSource } from "typeorm";
import { TipoComprobante } from "../entities/TipoComprobante";

export class TipoComprobanteSeeder {
  // ticket, visita y marchandising
  static async seed(ds: DataSource) {
    const tipoComprobanteRepository = ds.getRepository(TipoComprobante);
    await tipoComprobanteRepository.save([
      { nombre: "Ticket", descripcion: "Comprobante de ticket" },
      { nombre: "Visita", descripcion: "Comprobante de visita" },
      { nombre: "Marchandising", descripcion: "Comprobante de marchandising" },
    ]);
  }
}
