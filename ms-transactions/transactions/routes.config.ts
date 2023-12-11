import express from "express";
import { CommonRoutesConfig } from "../common/routes.config";

export class TransactionRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TransactionRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/transaction`)
      .get((req: express.Request, resp: express.Response) => {
        resp.status(200).send("All Transactions");
      });
    return this.app;
  }
}
