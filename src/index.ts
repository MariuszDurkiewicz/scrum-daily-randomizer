import express from "express";
import bodyParser from "body-parser";

import api from "./api";

const app = express();
const port = process.env.PORT || "8000";

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// application/json
app.use(bodyParser.json());

app.use("/api/v1", api);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

//curl -X POST "http://localhost:8000/api/v1/user/create" -H "Content-Type: application/json" -d '{"id": "user1@mycompany.mail", "name": "user 1", "role": "developer", "team": "Team A" }'

//curl -X GET "http://localhost:8000/api/v1/user/user1@mycompany.mail"