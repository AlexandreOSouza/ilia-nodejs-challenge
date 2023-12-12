import { CreateTransactionDTO } from "../dto/create.transaction";
import { Transaction } from "../model/transaction.model";

class TransactionRepository {
  transactions: Array<CreateTransactionDTO> = [];

  async addTransaction(
    transaction: CreateTransactionDTO,
  ): Promise<CreateTransactionDTO> {
    const trans = new Transaction({ ...transaction });
    await trans.save();

    return trans;
  }

  async getTransactions(): Promise<Array<CreateTransactionDTO>> {
    const transactions = Transaction.find();
    return transactions;
  }

  async getTransactionByUserId(
    userId: string,
  ): Promise<Array<CreateTransactionDTO>> {
    const transactions = Transaction.find().all("userId", [userId]);
    return transactions;
  }
}

export default new TransactionRepository();
