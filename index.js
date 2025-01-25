import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/auth.js";

const { PORT, MONOGO_DB_KEY } = process.env;

const app = express();

mongoose
  .connect(MONOGO_DB_KEY)
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors("*"));
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.listen(PORT || 3001, () => {
  console.log("Server is running");
});
