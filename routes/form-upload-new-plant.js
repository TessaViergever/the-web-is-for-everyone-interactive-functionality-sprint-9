import * as dotenv from "dotenv";

import express from "express";
import { fetchJson, postJson } from "../helpers/fetchWrapper.js";

dotenv.config();

const formUploadNewPlantRoute = express.Router();

// Shows form to upload new plant
formUploadNewPlantRoute.get("/nieuw", (request, response) => {
  response.render("plant-upload-form.ejs");
});

// Takes care of sending the form
formUploadNewPlantRoute.post("/plantenlijst", (request, response) => {
  console.log(request.body);
  // Calls the API with POST method
  const url = `${process.env.API_URL}/plantenlijst`; // stekje of stekjes (even checken)

  postJson(url, request.body).then((data) => {
    // Values from the form (not the API)
    let newPlant = { ...request.body }; 
    // ID from the API (overwrites the form)
    newPlant.id = data.data.createPlant.id || null; // aan Justus vragen createMember?

    // If successful: sends user to /
    if (data.success) {
      response.redirect("/?memberPosted=true"); // squad meegeven, message meegeven (vragen hoe aanpassen naar planten?)

      // If failed: shows form again (with filled in values)
    } else {
      response.render("plant-upload-form.ejs", newPlant); // Fail, message meegeven: aan Justus vragen
    }
  });
});

export default formUploadNewPlantRoute;
