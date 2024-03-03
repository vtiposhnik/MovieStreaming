import express from 'express'
import dotenv from 'dotenv'
import { movie } from './movie'
import cors from 'cors'

const app = express()
app.use(cors())

dotenv.config()

const port = 3000

app.get('/', (req,res) => {
    res.send('ladidabudubadabi')
})

app.get('/catalog', async (req, res) => {
    try {
        const movies = await movie.findAll()
        const count = await movie.count()
        res.status(201).json({count, movies})
    } catch (error) {
        res.status(500).json(error)
    }
})
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})