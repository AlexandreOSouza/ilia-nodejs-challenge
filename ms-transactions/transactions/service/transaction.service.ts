import { TRANSACTION } from "../../common/transaction.interface";
import { CreateTransactionDTO } from "../dto/create.transaction";
import TransactionRepository from "../repository/transaction.repository";

class TransactionService implements TRANSACTION<CreateTransactionDTO> {
  async create(resource: CreateTransactionDTO) {
    return TransactionRepository.addTransaction(resource);
  }

  async list(limit: number, page: number) {
    return TransactionRepository.getTransactions();
  }

  async readById(id: string) {
    return TransactionRepository.getTransactionByUserId(id);
  }
}

export default new TransactionService();
