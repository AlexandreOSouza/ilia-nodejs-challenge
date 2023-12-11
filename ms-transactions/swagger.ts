export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Transaction API",
    description: "API to manage transactions",
    version: "1.0",
  },
  host: "localhost:3000",
  basePath: "/",
  schema: ["http"],
  paths: {
    "/transactions": {
      get: {
        summary: "Get all Transactions",
        responses: {
          "200": {
            description:
              "Successful response. Returns transactions for the specified user.",
          },
          "500": {
            description:
              "Internal server error. Something went wrong on the server side.",
          },
        },
      },
      post: {
        summary: "Create a new item",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                    description: "The unique identifier for the item.",
                  },
                  userId: {
                    type: "string",
                    description:
                      "The identifier of the user associated with the item.",
                  },
                  date: {
                    type: "string",
                    format: "date-time",
                    description: "The date associated with the item.",
                  },
                  description: {
                    type: "string",
                    description: "A description of the item.",
                  },
                  value: {
                    type: "number",
                    description: "The numerical value of the item.",
                  },
                },
                required: ["id", "userId", "date", "description", "value"],
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Item created successfully.",
          },
          "400": {
            description: "Bad request. Check your request payload.",
          },
          "500": {
            description:
              "Internal server error. Something went wrong on the server side.",
          },
        },
      },
    },
    "/transactions/{userId}": {
      get: {
        summary: "Get transactions by user ID",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description:
              "The identifier of the user whose transactions are to be retrieved.",
          },
        ],
        responses: {
          "200": {
            description:
              "Successful response. Returns transactions for the specified user.",
          },
          "404": {
            description: "User not found.",
          },
          "500": {
            description:
              "Internal server error. Something went wrong on the server side.",
          },
        },
      },
    },
  },
};
