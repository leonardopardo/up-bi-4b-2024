import "reflect-metadata";
import * as dotenv from "dotenv";
import path = require("path");
import { DataSource } from "typeorm";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const PsqlDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/entities/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

const MariaDBDataSource = new DataSource({
  type: "mariadb",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/entities/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

const TestDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  entities: [__dirname + "/entities/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  synchronize: true,
  logging: false,
});

const getDataSource = () => {
  switch (process.env.DB_DRIVER) {
    case "mariadb":
      return MariaDBDataSource;
    case "postgresql":
      return PsqlDataSource;
    case "sqlite":
      return TestDataSource;
    default:
      throw new Error("Unsupported NODE_ENV value");
  }
};

export { getDataSource };
