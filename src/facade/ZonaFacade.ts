import { Zona } from "../entities/Zona";
import { ZonaService } from "../services/ZonaService";

export class ZonaFacade {
  private static service: ZonaService = new ZonaService();

  static async find(): Promise<Zona[]> {
    return await ZonaFacade.service.find();
  }

  static async findById(id: number): Promise<Zona | undefined> {
    return await ZonaFacade.service.findById(id);
  }

  static async save(zona: Zona): Promise<Zona> {
    return await ZonaFacade.service.save(zona);
  }
}
