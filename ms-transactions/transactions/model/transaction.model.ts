import { Schema, model } from "mongoose";

interface ITransaction {
  id: string;
  userId: string;
  date: Date;
  description: string;
  value: number;
}

const transactionSchema = new Schema<ITransaction>({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
});

export const Transaction = model<ITransaction>(
  "Transaction",
  transactionSchema,
);
