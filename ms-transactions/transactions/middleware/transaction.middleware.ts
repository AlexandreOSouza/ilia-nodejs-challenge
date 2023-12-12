import { isDTO } from "../../helpers/check";
import { CreateTransactionDTO } from "../dto/create.transaction";
import express from "express";
class TransactionMiddleware {
  async validateRequiredUserIdBodyFields(
    req: express.Request,
    resp: express.Response,
    next: express.NextFunction,
  ) {
    if (req.body && req.body.id) {
      next();
    } else {
      resp.status(400).send({
        error: "Missing required field userId",
      });
    }
  }

  async extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    req.body.id = req.params.userId;
    next();
  }

  async validateRequestBody(
    req: express.Request,
    resp: express.Response,
    next: express.NextFunction,
  ) {
    if (isDTO(req.body)) {
      next();
    } else {
      resp.status(400).send({
        error: "Bad request body",
      });
    }
  }
}
export default new TransactionMiddleware();
