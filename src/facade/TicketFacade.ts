import { TicketService } from "../services/TicketService";

export class TicketFacade {
  private static service: TicketService = new TicketService();

  static async find() {
    return await TicketFacade.service.find();
  }

  static async findById(id: number) {
    return await TicketFacade.service.findById(id);
  }

  static async store(ticket: any) {
    return await TicketFacade.service.store(ticket);
  }
}
