import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Product from './product'
import User from './user'
import Cart from './cart'

dotenv.config()
const mongoURI = process.env.MONGO_URI as string

try {
    mongoose.connect(mongoURI, () => {
        console.log(`mongoose connection successful at ${mongoURI}`)
    })
} catch (err) {
    console.log(`Error occured ${err}`)
}

export { User, Cart, Product }