//#region Core
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
//#endregion

//#region Database
import { DataSource } from "typeorm";
import { getDataSource } from "./MyDataSource";
//#endregion

//#region Environment
import "reflect-metadata";
import bodyParser = require("body-parser");
import path = require("path");
import { Seeder } from "./seeders/Seeder";
//#endregion

class App {
  public app: express.Application;
  public corsOptions: cors.CorsOptions;
  public router: express.Router;

  constructor() {
    // set variables
    this.app = express();
    this.router = express.Router();

    // config envirnoment file
    dotenv.config({
      path: path.resolve(__dirname, "../.env"),
    });

    // setting uses
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // initialize resources
    this.initializeDatabase();
    this.initializeSeeders();
  }

  private initializeSeeders() {
    const seeder = new Seeder();
    seeder.run();
  }

  private initializeRoutes() {
    this.app.use(bodyParser.json());
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(
          `Received ${req.method} request from ${req.ip} to ${req.originalUrl}`
        );
        next(); // Continue processing the request
      }
    );
    this.app.use("/api/v1/", this.router);
    this.app.use(cors());
  }

  private async initializeDatabase() {
    // initialize database
    const ds: DataSource = getDataSource();
    const db = await ds.initialize();
    console.log(
      `+ Database connected [${
        db.options.database
      }]- ${db.options.type.toUpperCase()} v${db.driver.version}`
    );
  }

  public listen(): void {
    this.app.listen();
  }
}
export default new App().app;
