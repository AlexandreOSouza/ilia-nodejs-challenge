import express from "express";
import cors from "cors";
import { TransactionRoutes } from "./transactions/routes.config";
import { CommonRoutesConfig } from "./common/routes.config";
import debug from "debug";
import { connect } from "mongoose";

import swaggerUi from "swagger-ui-express";

import * as winston from "winston";
import * as expressWinston from "express-winston";
import { swaggerDocument } from "./swagger";

import "dotenv/config";

const app: express.Application = express();
const routes: Array<CommonRoutesConfig> = [];
const port = process.env.TEST ? 0 : 3000;
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.get("/", (req, res) => {
  res.status(200).send("running");
});

routes.push(new TransactionRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;

if (process.env.TEST) {
  connect(process.env.DATABASE_TEST_URL as string);
} else {
  connect(process.env.DATABASE_URL as string);
}

app.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });

  console.log(runningMessage);
});

export default app;
