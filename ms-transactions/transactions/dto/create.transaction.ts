export interface CreateTransactionDTO {
  id: string;
  userId: string;
  date: Date;
  description: string;
  value: number;
}
