import express from 'express'
import { addedcolor, getcolor } from '../crud/coloradd.js'


const col = express.Router()

col.post('/color', async (req, res) => {
    const colorcd = await addedcolor(req.body)
    res.send(colorcd)
})

col.get('/catelog', async (req, res) => {
    const colorgets = await getcolor()
    res.send(colorgets)
})
export default col;