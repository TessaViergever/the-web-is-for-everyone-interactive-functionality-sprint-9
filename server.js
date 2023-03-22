import express from 'express'
import indexRoute from './routes/index.js'
import plantsRoute from './routes/plants.js'
import plantsDetailRoute from './routes/plant-detail.js'
import formUploadNewPlantRoute from './routes/form-upload-new-plant.js'

// Makes new express app 
const server = express()

// Sets server port number 
server.set('port', process.env.PORT || 8000)

// Sets view engine
server.set('view engine', 'ejs')
server.set('views', './views')

// Sets public folder
server.use(express.static('public'))

// Sets handling of forms
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Sets routes (define routes @ routes folder)
server.use('/', indexRoute)
server.use('/plantenlijst', plantsRoute)
server.use('/informatie-plant', plantsDetailRoute)
server.use('/nieuw-stekje-toevoegen', formUploadNewPlantRoute)

// Starts listening 
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})
