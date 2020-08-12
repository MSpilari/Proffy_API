import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import routes from "./routes";

dotenv.config()

const app = express();

const port = process.env.PORT_URL || 3333

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port);
