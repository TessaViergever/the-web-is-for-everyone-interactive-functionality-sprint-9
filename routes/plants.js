import * as dotenv from "dotenv";

import { fetchJson, postJson } from "../helpers/fetchWrapper.js";

import express from "express";

dotenv.config();

const plantsRoute = express.Router();

// Show all plants
plantsRoute.get("/", (_request, response) => {
  const baseUrl = `${process.env.API_URL}/stekjes`;
  console.log(baseUrl);

  fetchJson(baseUrl).then((data) => {
    response.render("plant-page", data);
    console.log(data);
  });
});

// opent pagina met formulier stekje toevoegen
plantsRoute.get("/nieuw-stekje-toevoegen", (_request, response) => {
  response.render("plant-upload-form");
});

// post formulier data naar plantenlijst
plantsRoute.post("/", (request, response) => {

  const baseUrl = `${process.env.API_URL}/stekjes`;
  postJson(baseUrl, request.body).then((data) => {
    if (data.success) {
      response.redirect("/plantenlijst"); // plant meegeven, message meegeven
      //  Toont opnieuw het formulier (met waarden) als het niet gelukt is
    } else {
      response.render("plant-upload-form"); // Fail, message meegeven
    }
    // De waarden uit het formulier (niet de API)
    console.log(JSON.stringify(data));
  });
});

export default plantsRoute;
