import { Ubicacion } from "../entities/Ubicacion";
import { UbicacionService } from "../services/UbicacionService";

export class UbicacionFacade {
  private static service: UbicacionService = new UbicacionService();

  static async find(): Promise<Ubicacion[]> {
    return await UbicacionFacade.service.find();
  }

  static async findById(id: number): Promise<Ubicacion> {
    return await UbicacionFacade.service.findById(id);
  }

  static async findByZone(id: number): Promise<Ubicacion[]> {
    return await UbicacionFacade.service.findByZone(id);
  }

  static async findRandom(): Promise<Ubicacion> {
    return await UbicacionFacade.service.findRandom();
  }
}
