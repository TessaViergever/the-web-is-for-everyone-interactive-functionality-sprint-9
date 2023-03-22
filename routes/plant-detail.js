import * as dotenv from "dotenv";

import express from "express";
import { fetchJson } from "../helpers/fetchWrapper.js";

dotenv.config();

const plantsDetailRoute = express.Router();

// Gets data from 1 plant
plantsDetailRoute.get("/", (request, response) => {
  const id = request.query.id;
  if (!id) {
    response.redirect("/"); //later add: 404 message (= better)
  }

  const url = `${process.env.API_URL}/stekjes/?id=${id}`;

  fetchJson(url).then((data) => {
    response.render("plant-detail-page.ejs", data);
  });
});

export default plantsDetailRoute;
