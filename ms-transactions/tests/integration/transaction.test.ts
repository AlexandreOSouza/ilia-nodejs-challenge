import { CreateTransactionDTO } from "../../transactions/dto/create.transaction";
import { request } from "../helpers";

describe("Status Code", () => {
  it("should return status code 200 when get transactions", async () => {
    const resp = await request.get("/transactions");
    expect(resp.status).toBe(200);
  });

  it("should return status code 201 when create a new transaction", async () => {
    const payload: CreateTransactionDTO = {
      id: "1",
      userId: "1",
      description: "new transaction",
      value: 5.1,
      date: new Date(),
    };
    const resp = await request.post("/transactions").send(payload);
    expect(resp.status).toBe(201);
  });

  it("should return status code 400 when send a bad request", async () => {
    const payload = {};
    const resp = await request.post("/transactions").send(payload);
    expect(resp.status).toBe(400);
  });
});
