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
}
export default new TransactionMiddleware();
