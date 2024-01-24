import express from 'express'
import { adddata } from '../crud/user.js'

const aip = express.Router()


aip.post('/registration', async (req, res) => {
    let ownardata = await adddata(req.body)
    res.send(ownardata)
})

export default aip;