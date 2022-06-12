// dependencies
import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import { Sequelize } from 'sequelize'
import User from './db/models/User'
import Product from './db/models/Product'

User.hasMany(Product, {
    foreignKey: 'productId',
    as: 'cart'
})
Product.belongsTo(User, { foreignKey: 'productId', targetKey:'userId' })

dotenv.config()

const sequelizeConnection = new Sequelize('e-commercefinal', 'postgres', 'xarco23!', {
    host: 'localhost',
    dialect: 'postgres',
})

async function test() {
    try {
        await sequelizeConnection.sync({ force: true })

        await User.create(
                {
                    userId: 1,
                    firstName: 'Gael',
                    lastName: 'Zarco',
                    email: 'gaelzarco@yahoo.com',
                    password: 'password',
                    cart: [
                        { productId: 1 }
                    ]
                },
        );

        const res = await User.findAll({ raw: true })
        console.log(res)
    } catch (err) {
        console.log(`Something went wrong... ${err}`)
    } finally {
        sequelizeConnection.close()
    }
}

test()

// configuration and app init
dotenv.config()
const app: Application = express()
const port = process.env.PORT as string

// middleware
app.use(cors)
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Connected to Typescript Express server'
    })
})

// controllers
import productController from './controllers/product_controllers'
app.use('/product', productController)

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
