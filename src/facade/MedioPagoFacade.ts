import { MedioPagoService } from "../services/MedioPagoService";

export class MedioPagoFacade {
  private static service: MedioPagoService = new MedioPagoService();

  static async find(): Promise<any> {
    return await this.service.find();
  }

  static async findById(id: number): Promise<any> {
    return await this.service.findById(id);
  }

  static async findRandom(): Promise<any> {
    return await this.service.findRandom();
  }
}
