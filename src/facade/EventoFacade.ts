import { Evento } from "../entities/Evento";
import { EventoService } from "./../services/EventoService";

export class EventoFacade {
  private static service: EventoService = new EventoService();

  static async find(): Promise<Evento[]> {
    return await EventoFacade.service.find();
  }

  // obtiene un evento de forma aleatoria de la base de datos con bajo costo computacional
  static async findRandom(): Promise<Evento> {
    return await EventoFacade.service.findRandom();
  }
}
