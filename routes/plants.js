import * as dotenv from 'dotenv'

import { fetchJson, postJson } from '../helpers/fetchWrapper.js'

import express from 'express'

dotenv.config()

const plant = express.Router()

// Haal de gegevens van één plant op
plant.get('/', (request, response) => {
  const id = request.query.id 
  if (!id){
    response.redirect('/') // evt. later een 404 redirect melding (= netter)
  }

  const url = `${process.env.API_URL}/stekjes/?id=${id}`

  fetchJson(url).then((data) => {
    response.render('member', data) // member vervangen voor plant-detail-page.ejs
  })
})

// Toon het formulier om een nieuw stekje te uploaden 
plant.get('/nieuw', (request, response) => {
   response.render('memberForm.ejs') // memberForm.ejs andere naam geven die beter past bij plantswap
})

// Handel het versturen van het formulier af
plant.post('/', (request, response) => {
  console.log(request.body)
  // Roep de API aan met de post methode
  const url = `${process.env.API_URL}/member` // stekje of stekjes (even checken)

  postJson(url, request.body).then((data) => {
    // De waarden uit het formulier (niet de API)
    let newPlant = { ...request.body }
    // Het id uit de API (overschrijft het formulier)
    newPlant.id = data.data.createMember.id || null // aan Justus vragen createMember?

    // Stuur de gebruiker naar / als het gelukt is
    if (data.success) {
      response.redirect('/?memberPosted=true') // squad meegeven, message meegeven

      // Toon opnieuw het formulier (met ingevulde waarden) als het niet gelukt is
    } else {
      response.render('memberForm.ejs', newPlant) // Fail, message meegeven: aan Justus vragen
    }
  })
})

export default plant
