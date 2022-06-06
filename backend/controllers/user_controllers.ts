import express from 'express'
const user = express.Router()

user.get('/', (_req, _res) => {
    _res.json({ message: 'User Controllers 200 Fully Functional' })
})

module.exports = user