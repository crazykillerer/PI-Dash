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
    res.sendFile('index.html', {root: './UI'})
})

// Handles all browser reqest to the CSS folder
router.get('/css/:filename', (req, res) => {
    res.sendFile(req.params.filename, {root: './UI/css/'})
})

// Tells our sever library (Express) to use the Router Object
app.use('/', router);

// Tells our server library (Express) to start listening for request from any client
app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`);
});