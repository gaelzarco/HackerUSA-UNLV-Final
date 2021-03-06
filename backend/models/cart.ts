import mongoose, { Schema } from 'mongoose'

const cartSchema = new Schema({
    cartUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cartProducts: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart