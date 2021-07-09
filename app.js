import express from "express";
import createRouter from "./routes/create.routes.js";
import starter from "./controllers/starter.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", createRouter);

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    starter();
  });
};

start();
