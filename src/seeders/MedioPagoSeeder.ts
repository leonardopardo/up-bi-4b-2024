import { DataSource } from "typeorm";
import { MedioPago } from "../entities/MedioPago";

export class MedioPagoSeeder {
  static async seed(ds: DataSource) {
    const mpRepo = ds.getRepository(MedioPago);
    const mps = [
      {
        nombre: "Efectivo",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Tarjeta de crédito",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Tarjeta de débito",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Mercado Pago",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Ualá",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "RappiPay",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Transferencia bancaria",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
      {
        nombre: "Criptomoneda",
        descripcion:
          "El pago se realiza en efectivo al momento de la entrega del producto.",
      },
    ];
    await mpRepo.save(mps);
  }
}
