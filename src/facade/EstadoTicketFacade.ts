import { EstadoTicket } from "../entities/EstadoTicket";
import { EstadoTicketService } from "../services/EstadoTicketService";

export class EstadoTicketFacade {
  private static service: EstadoTicketService = new EstadoTicketService();

  static async find(): Promise<EstadoTicket[]> {
    return await EstadoTicketFacade.service.find();
  }

  static async findRandom(): Promise<EstadoTicket> {
    return await EstadoTicketFacade.service.findRandom();
  }
}
