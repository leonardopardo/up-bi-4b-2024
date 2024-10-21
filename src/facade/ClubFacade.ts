import { Club } from "../entities/Club";
import { ClubService } from "../services/ClubService";

export class ClubFacade {
  private static service: ClubService = new ClubService();

  static async find(): Promise<Club[]> {
    return await ClubFacade.service.find();
  }
}
