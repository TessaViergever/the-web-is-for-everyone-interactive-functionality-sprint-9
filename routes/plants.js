import * as dotenv from "dotenv";

import { fetchJson } from "../helpers/fetchWrapper.js";

import express from "express";

dotenv.config();

const plantsRoute = express.Router();

// Show all plants
plantsRoute.get("/", (_request, response) => {
  const slug = "plantenlijst";
  const url = `${process.env.API_URL}/${slug}`;

  fetchJson(url).then((data) => {
    response.render("plantenlijst", data);
    console.log(data);
  });
});

export default plantsRoute;
