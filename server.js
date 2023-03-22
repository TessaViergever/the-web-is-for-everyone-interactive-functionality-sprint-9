import express from 'express'
import indexRoute from './routes/index.js'
import plantsRoute from './routes/plants.js'
//evt: nieuwe route naar detail planten pagina hier aanmaken.
// in routes een plant-detail.js maken

// Maak een nieuwe express app
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Stel de routes in
server.use('/', indexRoute)
server.use('/stekje', plantsRoute)

// Start met luisteren
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})
