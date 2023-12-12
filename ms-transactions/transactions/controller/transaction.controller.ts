import express from "express";
import transactionService from "../service/transaction.service";

class TransactionController {
  async getTransactions(req: express.Request, resp: express.Response) {
    const transactions = await transactionService.list(100, 0);
    resp.status(200).send(transactions);
  }

  async getByUserId(req: express.Request, resp: express.Response) {
    const transactions = await transactionService.readById(req.body.id);
    resp.status(200).send(transactions);
  }

  async createTransaction(req: express.Request, resp: express.Response) {
    const transaction = await transactionService.create(req.body);
    resp.status(201).send(transaction);
  }
}

export default new TransactionController();
