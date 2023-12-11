import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("running");
});

app.listen(3000, () => console.log("server running"));
