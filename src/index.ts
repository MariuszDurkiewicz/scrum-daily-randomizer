import express, { Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import api from "./api";

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.method, req.path, req.body);
  next();
});

app.use("/api/v1", api);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
