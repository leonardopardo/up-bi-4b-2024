import { Transaccion } from "../entities/Transaccion";
import { TransaccionService } from "../services/TransaccionService";

export class TransaccionFacade {
  private static service: TransaccionService = new TransaccionService();

  static async find() {
    return await TransaccionFacade.service.find();
  }

  static async findById(id: number) {
    return await TransaccionFacade.service.findById(id);
  }

  static async store(transaccion: Transaccion) {
    return await TransaccionFacade.service.store(transaccion);
  }
}
