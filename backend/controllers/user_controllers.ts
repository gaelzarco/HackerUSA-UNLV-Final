import { Router, Request, Response }  from 'express'
const user = Router()

user.get('/', async (req: Request, res: Response): Promise<any> => {
    res.status(200).send({ message: 'User Controllers 200 Fully Functional' })
})

export default user