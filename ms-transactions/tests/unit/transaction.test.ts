import { CreateTransactionDTO } from "../../transactions/dto/create.transaction";
import transactionService from "../../transactions/service/transaction.service";

describe("Transaction", () => {
  it("should create a new transaction", async () => {
    const newTransaction: CreateTransactionDTO = {
      id: "1",
      userId: "1",
      description: "new transaction",
      date: new Date(),
      value: 5.1,
    };
    const createdTransaction = await transactionService.create(newTransaction);
    expect(createdTransaction.id).toBe(newTransaction.id);
  });

  it("should get all transactions", async () => {
    const transactions = await transactionService.list(100, 1);
    expect(transactions.length > 0);
  });

  it("should get all transactions by userId", async () => {
    const userId = "1";
    const transactions = await transactionService.readById(userId);

    expect(transactions.length > 0);
  });

  it("should not get a transaction without userId", async () => {
    const transactions = await transactionService.readById("");
    expect(transactions.length).toBe(0);
  });
});
