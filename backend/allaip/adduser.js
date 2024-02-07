import express from 'express'
import { adddata, getdata } from '../crud/useradd.js'

const costomer = express.Router()

costomer.post('/adduser', async (req, res) => {
    const userdata = await adddata(req.body)
    res.send(userdata)
})

costomer.get('/viweuser', async (req, res) => {
    const tabledata = await getdata(req.body)
    res.send(tabledata)
})

export default costomer