import { Cliente } from "../entities/Cliente";
import { ClienteService } from "../services/ClienteService";

export class ClienteFacade {
  private static service: ClienteService = new ClienteService();

  static async find(): Promise<Cliente[]> {
    return await ClienteFacade.service.find();
  }

  static async findRandom(): Promise<Cliente> {
    return await ClienteFacade.service.findRandom();
  }
}
