import { CreateTransactionDTO } from "../dto/create.transaction";

class TransactionRepository {
  transactions: Array<CreateTransactionDTO> = [];

  // TODO: Implement database access
  async addTransaction(
    transaction: CreateTransactionDTO,
  ): Promise<CreateTransactionDTO> {
    this.transactions.push(transaction);
    return transaction;
  }

  async getTransactions(): Promise<Array<CreateTransactionDTO>> {
    return this.transactions;
  }

  async getTransactionByUserId(
    userId: string,
  ): Promise<Array<CreateTransactionDTO>> {
    return this.transactions.filter(
      (transaction: CreateTransactionDTO) => transaction.userId === userId,
    );
  }
}

export default new TransactionRepository();
