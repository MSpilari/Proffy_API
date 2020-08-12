import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

const port = process.env.PORT || 3333;

app.set("port", port);

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => console.log("App is running on port " + port));
