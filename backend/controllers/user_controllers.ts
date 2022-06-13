import { Router, Request, Response }  from 'express'
import * as db from '../models'
const user = Router()

user.post('/', async (req: Request, res: Response): Promise<any> => {
    try {
        console.log(req.body)
        // if (!db.User.findOne({ email: req.body.email })) {
            db.User.create(req.body)
            return res.status(200).json({ message: 'User created 200 OK' }) 
        // } else {
        //     return res.status(409).json({ message: 'Email is already associated with account' })
        // }
    } catch (err) {
        console.log(`Error occured ${err}`)
    }
})

user.get('/:userId', async (req: Request, res: Response): Promise<any> => {
    try {
        db.User.findById(req.params.userId)
        .populate('cart')
        .then(user => {
            return res.status(200).json(user)
        })
    } catch (err) {
       console.log(`Error occured ${err}`)
    }
})

export default user