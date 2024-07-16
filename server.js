import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.middleware.js";
import { initializeRoutes } from "./routes/index.js";

// config environment variables
dotenv.config();

// initialize app
const app = express();

// Initialize middlewares
app.use(express.json());
initializeRoutes(app);
app.use(errorMiddleware);

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on : http://localhost:${process.env.PORT}`);
});
