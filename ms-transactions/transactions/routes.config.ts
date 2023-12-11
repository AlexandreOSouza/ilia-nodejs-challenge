import express from "express";
import { CommonRoutesConfig } from "../common/routes.config";
import TransactionController from "./controller/transaction.controller";
import TransactionMiddleware from "./middleware/transaction.middleware";

export class TransactionRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TransactionRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/transactions`)
      .get(TransactionController.getTransactions)
      // Add validadtion to post body
      .post(TransactionController.createTransaction);
    this.app.param(`userId`, TransactionMiddleware.extractUserId);
    this.app
      .route(`/transactions/:userId`)
      .all(TransactionMiddleware.validateRequiredUserIdBodyFields)
      .get(TransactionController.getByUserId);
    return this.app;
  }
}
