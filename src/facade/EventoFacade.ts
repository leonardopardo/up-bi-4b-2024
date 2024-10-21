import { Evento } from "../entities/Evento";
import { EventoService } from "./../services/EventoService";

export class EventoFacade {
  private static service: EventoService = new EventoService();

  static async find(): Promise<Evento[]> {
    return await EventoFacade.service.find();
  }
}
