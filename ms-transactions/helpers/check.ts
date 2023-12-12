import { CreateTransactionDTO } from "../transactions/dto/create.transaction";

export function isDTO(obj: any): obj is CreateTransactionDTO {
  return (
    "id" in obj &&
    "userId" in obj &&
    "date" in obj &&
    "description" in obj &&
    "value" in obj
  );
}
