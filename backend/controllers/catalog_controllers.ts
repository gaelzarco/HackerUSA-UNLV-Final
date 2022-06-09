import { Router, Request, Response } from 'express'
const catalog = Router()

catalog.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: 'Catalog Controllers 200 Fully Functional' })
})

export default catalog