import express from 'express'
import { adddata } from '../crud/useradd.js'

const costomer = express.Router()

costomer.post('/adduser', async (req, res) => {
    const userdata = await adddata(req.body)
    res.send(userdata)
})

export default costomer