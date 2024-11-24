import "reflect-metadata";
import { DataSource } from "typeorm";
import { getDataSource } from "../MyDataSource";
import { CategoriaSeeder } from "./CategoriaSeeder";
import { ClienteSeeder } from "./ClienteSeeder";
import { ClubSeeder } from "./ClubSeeder";
import { DeporteTipoSeeder } from "./DeporteTipoSeeder";
import { DeporteSeeder } from "./DeporteSeeder";
import { PredioSeeder } from "./PredioSeeder";
import { ZonaSeeder } from "./ZonaSeeder";
import { ItemSeeder } from "./ItemSeeder";
import { EstadoTicketSeeder } from "./EstadoTicketSeeder";
import { EstadoTransaccionSeeder } from "./EstadoTransaccionSeeder";
import { MedioPagoSeeder } from "./MedioPagoSeeder";
import { TipoComprobanteSeeder } from "./TipoComprobanteSeeder";
import { EventoSeeder } from "./EventoSeeder";
import { UbicacionSeeder } from "./UbicacionSeeder";
import { TicketSeeder } from "./TicketSeeder";

export class Seeder {
  private ds: DataSource;

  constructor() {
    this.ds = getDataSource();
  }

  async run() {
    try {
      // await this.ds.initialize();
      // await CategoriaSeeder.seed(this.ds);
      // await ClubSeeder.seed(this.ds);
      // await ItemSeeder.seed(this.ds);
      // await ZonaSeeder.seed(this.ds);
      // await UbicacionSeeder.seed(this.ds);
      // await ClienteSeeder.seed(this.ds, 5000);
      // await DeporteTipoSeeder.seed(this.ds);
      // await DeporteSeeder.seed(this.ds);
      // await EstadoTicketSeeder.seed(this.ds);
      // await EstadoTransaccionSeeder.seed(this.ds);
      // await MedioPagoSeeder.seed(this.ds);
      // await TipoComprobanteSeeder.seed(this.ds);
      // await EventoSeeder.seed(this.ds);
      // await TicketSeeder.seed(this.ds);
    } catch (error) {
      console.error("Error during seeding: ", error);
    } finally {
      console.log("Seeding complete!");
    }
  }
}
