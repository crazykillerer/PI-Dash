import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

const PORT = 3000
const router = express.Router()
const app = express()
dotenv.config()

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: './UI'})
})

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`);
});