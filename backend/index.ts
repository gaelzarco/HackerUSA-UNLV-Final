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
const catalogController = require('./controllers/catalog_controllers')
app.use('/catalog', catalogController)

const userController = require('./controllers/user_controllers')
app.use('/user', userController)

//listen
app.listen(port, () => {
    console.log(`Typescript with Express 200 OK on PORT ${port}`)
})