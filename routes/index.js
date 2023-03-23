import * as dotenv from 'dotenv'

import express from 'express'
// import { fetchJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const index = express.Router()

index.get("/", (request, response) => {
    response.render("index");
});

export default index
