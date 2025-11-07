import express from "express";
import "colors";
import dotenv from "dotenv";
import routers from "./router/index.js";

// env vars
dotenv.config();

const PORT = process.env.PORT || 6060;

//init app
const app = express();

// supports
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.use(routers);
// server listen
app.listen(PORT, () => {
  console.log(`SERVER || RUNNING || PORT || ${PORT}`.bgGreen.black);
});
