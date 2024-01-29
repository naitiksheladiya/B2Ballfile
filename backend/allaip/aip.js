import express from 'express'
import { adddata, checkdata, } from '../crud/user.js'

const aip = express.Router()


aip.post('/registration', async (req, res) => {
    let ownardata = await adddata(req.body)
    res.send(ownardata)
})
aip.post('/login', async (req, res) => {
    let logindata = await checkdata(req.body)
    res.send(logindata)
  
})

export default aip;