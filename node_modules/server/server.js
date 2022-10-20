/*************************************************************** 
*     This program is the server that controls the users       *
*     UI files bieng sent to the browser and manipulates the   *
*     data for a safe and easy going environment.              *
***************************************************************/

// Our Programs Dependiencies aka. Librarys
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

// Our Programs Constants
const PORT = 3000
const router = express.Router()
const app = express()
// Starts up dotenv library so we can use environment vars
dotenv.config()

// Handles the request from the browser for the main UI index html file
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './UI' })
})

// Handles all browser reqest to the CSS folder
router.get('/css/:filename', (req, res) => {
    res.sendFile(req.params.filename, { root: './UI/css/' })
})

// Handles all browser request to the JS folder
router.get('/js/:filename', (req, res) => {
    res.sendFile(req.params.filename, { root: './UI/js/' })
})

// Tells our sever library (Express) to use the Router Object
app.use('/', router)

app.get('/sensor/list', (req, res) => {
    // This endpoint wil return the list of specified information about each sensor 
})

app.get('/data/:sensorId', (req, res) => {
    // This endpoint will query to the data base and return all specified information(in the form of params)
    // about a sensor and the current time.
})

app.get('/historicData/:sensorData', (req, res) => {
    // This endpoint will query to the data base and return all specified information(in the form of params)
    // about a sensor over a specified time.
})

app.get('/exportData/', (req, res) => {
    // This endpont will query a csv file of all the data or from a specified interval of time 
    // Then server will then send to the browser as a static file
})

app.get('/exportData/:sensorId', (req, res) => {
    // This endpoint will query a csv file of all data(the defualt) or of a specified time interval
    // from a specifiec sensor
})

// Tells our server library (Express) to start listening for request from any client
app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
})