// dependencies
import express from 'express'
import * as dotenv from 'dotenv'

// configuration and app init
dotenv.config()
const app: express.Application = express()
const port: string = process.env.PORT!

// routes
app.get('/', (_req, _res) => {
    _res.json({
        message: 'Connected to Typescript Express server'
    })
})

// controllers

//listen
app.listen(port, () => {
    console.log(`Typescript with Express 200 OK on PORT ${port}`)
})