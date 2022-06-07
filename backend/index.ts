// dependencies
import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'

// configuration and app init
dotenv.config()
const app: Application = express()
const port: string = process.env.PORT!

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', async (req: Request, res: Response): Promise<any> => {
    return res.status(200).send({
        message: 'Connected to Typescript Express server'
    })
})

// controllers
import catalogController from './controllers/catalog_controllers'
app.use('/catalog', catalogController)

import userController from './controllers/user_controllers'
app.use('/user', userController)

//listen
try {
    app.listen(port, () => {
        console.log(`Typescript with Express 200 OK on PORT ${port}`)
    })
} catch (err) {
    console.log(`Error occured ${err}`)
}
