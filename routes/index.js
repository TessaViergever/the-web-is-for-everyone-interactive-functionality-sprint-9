import * as dotenv from 'dotenv'

import express from 'express'
import { fetchJson } from '../helpers/fetchWrapper.js'

dotenv.config()

const index = express.Router()

// Overzicht
index.get('/', (request, response) => {
  const slug = 'stekjes'
  const url = `${process.env.API_URL}/${slug}`

  fetchJson(url).then((data) => {
    response.render('index', data)
    console.log(data);
  })
})

export default index
