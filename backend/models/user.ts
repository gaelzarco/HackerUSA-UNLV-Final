import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ 'Admin', 'Customer' ],
        required: true
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }]
})

enum Role {
    Admin = 1,
    Customer = 0
}

const User = mongoose.model('User', userSchema)
export default User