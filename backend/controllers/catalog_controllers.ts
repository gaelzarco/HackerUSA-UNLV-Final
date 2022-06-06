import express from 'express'
const catalog = express.Router()

catalog.get('/', (_req, _res) => {
    _res.json({ message: 'Catalog Controllers 200 Fully Functional' })
})

module.exports = catalog