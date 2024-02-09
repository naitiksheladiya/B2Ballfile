import express from 'express'
import { adddata, deletedata, getdata } from '../crud/useradd.js'

const costomer = express.Router()

costomer.post('/adduser', async (req, res) => {
    const userdata = await adddata(req.body)
    res.send(userdata)
})

costomer.get('/viweuser', async (req, res) => {
    const tabledata = await getdata(req.body)
    res.send(tabledata)


    costomer.post('/delete', async (req, res) => {
        console.log(req.body)
        const asd = await deletedata(req.body.id)
        res.send(asd)
    })
})


export default costomer  