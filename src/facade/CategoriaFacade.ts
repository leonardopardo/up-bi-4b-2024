import { Categoria } from "./../entities/Categoria";
import { CategoriaService } from "./../services/CategoriaService";

export class CategoriaFacade {
  private static service: CategoriaService = new CategoriaService();

  static async find(): Promise<Categoria[]> {
    return await this.service.find();
  }
}
