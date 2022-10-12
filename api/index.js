import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const keys = ["first_name", "last_name", "email"];

  const query = req.query.search;

  const search = (data) =>
    data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(query))
    );

  res.json(search(Users));
});

app.listen(5000, () => console.log("Api is working!"));
