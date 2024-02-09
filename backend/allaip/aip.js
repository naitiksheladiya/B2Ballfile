import express from 'express'
import { adddata, checkdata, checkdata2, otpverify, } from '../crud/user.js'

const aip = express.Router()


aip.post('/registration', async (req, res) => {
    let ownardata = await adddata(req.body)
    res.send(ownardata)
})

aip.post('/login', async (req, res) => {
    let logindata = await checkdata(req.body)
    res.send(logindata)

})

aip.post('/forgetpassword', async (req, res) => {
    console.log(req.body)
    let forget = await checkdata2(req.body)
    res.send(forget)
})

aip.post('/otp', async (req, res) => {
    // console.log(req.body)
    let forget = await otpverify(req.body)
    res.send(forget)
})

export default aip;