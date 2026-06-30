import express from "express";
import dotenv from "dotenv";
import { assertDbConnection } from "./db/pool.js";
import ServerRoute from "./routes/ServerRoute.js";
import cors from "cors";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", ServerRoute);

const PORT = process.env.PORT || 4000;
assertDbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
      console.log(`Db connected : ${process.env.PGDATABASE} `);
    });
  })
  .catch((err) => {
    console.error(" DB connection failed:", err.message);
    process.exit(1);
  });
